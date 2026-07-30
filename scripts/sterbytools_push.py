#!/usr/bin/env python3
"""sterbytools_push.py — staging-folder push pipeline for SterbyTools.

This is NOT SterbyTools's data-generation code (that lives elsewhere and
is untouched by this file). It's the piece that used to be entangled
with generation: taking whatever SterbyTools already wrote out and
getting it into this repo's git history safely.

Architecture
------------
- Staging folder (STAGING_DIR): NOT git-tracked, lives outside this repo
  clone entirely (a sibling directory, app-data folder, etc). SterbyTools
  writes its generated files here on every run - the six data files
  below plus their JSON sidecar state files - unconditionally, regardless
  of whether a push is about to happen. Nothing in this module writes to
  STAGING_DIR; it only ever reads finished output from it.

- Repo clone (REPO_DIR): the existing local clone of
  StrayToFreedom-Clan-Stats. This module is the ONLY place git operations
  happen, and it only ever touches the known SterbyTools-owned files
  listed in OWNED_FILES inside REPO_DIR - never index.html, CSS, or any
  other dashboard file, even if those changed since the last run.

Configure STAGING_DIR / REPO_DIR below (or via the STERBYTOOLS_STAGING_DIR
/ STERBYTOOLS_REPO_DIR env vars) for wherever this actually runs.

CAUTION: step 2 of push_from_staging() overwrites these six files (and
their sidecars) in REPO_DIR unconditionally with whatever's in
STAGING_DIR. If one of them was ever hand-edited directly on GitHub -
as opposed to the dashboard UI files, which is the expected manual-edit
path - that edit is silently overwritten here. That's intentional: these
files are meant to be fully SterbyTools-authoritative. Dashboard UI files
(index.html, i18n.js, CSS, etc.) are never touched by this script at all.
"""

import argparse
import datetime
import os
import shutil
import subprocess
import sys

# The only files this script is ever allowed to touch inside REPO_DIR.
# Deliberately an explicit whitelist, never a wildcard/directory copy -
# nothing else in the repo clone should ever be affected by this pipeline.
OWNED_FILES = [
    "playerStats.js",
    "playerCores.js",
    "playerLME.js",
    "playerCXRank.js",
    "playerCXBoss.js",
    "playerEndersEcho.js",
]


def owned_filenames():
    """The full whitelist: each owned .js file plus its .state.json sidecar."""
    names = []
    for js_name in OWNED_FILES:
        names.append(js_name)
        names.append(js_name.rsplit(".", 1)[0] + ".state.json")
    return names


class PushPipelineError(RuntimeError):
    """Raised when the push pipeline stops without pushing anything."""


def _run_git(repo_dir, *args, check=True):
    result = subprocess.run(
        ["git", *args],
        cwd=repo_dir,
        capture_output=True,
        text=True,
    )
    if check and result.returncode != 0:
        raise PushPipelineError(
            f"git {' '.join(args)} failed (exit {result.returncode}):\n"
            f"{result.stdout}\n{result.stderr}"
        )
    return result


def setup_repo(repo_dir):
    """First-run/setup step: make `git pull` in this clone rebase by
    default, so manual pulls behave the same way step 1 of the push
    pipeline does. Safe to re-run; only needs to happen once per clone."""
    _run_git(repo_dir, "config", "pull.rebase", "true")


def _fetch_and_rebase(repo_dir):
    """Step 1: fetch origin, then rebase onto origin/main. On conflict,
    abort the rebase and stop - never auto-resolve, never force-push.
    A conflict here means something touched a SterbyTools-owned file
    directly in the repo outside this pipeline, which the architecture
    is meant to prevent, so it's treated as worth investigating rather
    than something to silently work around."""
    _run_git(repo_dir, "fetch", "origin")
    rebase = _run_git(repo_dir, "rebase", "origin/main", check=False)
    if rebase.returncode != 0:
        _run_git(repo_dir, "rebase", "--abort", check=False)
        raise PushPipelineError(
            "git rebase origin/main failed (likely a conflict) - aborted "
            "the rebase and stopped without pushing. This normally means "
            "a SterbyTools-owned file was hand-edited directly in the repo "
            "instead of through the staging pipeline; investigate before "
            "retrying rather than force-pushing over it.\n"
            f"{rebase.stdout}\n{rebase.stderr}"
        )


def _copy_from_staging(staging_dir, repo_dir):
    """Step 2: copy only the known SterbyTools-owned filenames from
    staging into the repo clone, overwriting whatever's there. Returns
    the list of filenames that actually existed in staging and were
    copied (a sidecar .state.json may not exist yet on a fresh clone)."""
    copied = []
    for name in owned_filenames():
        src = os.path.join(staging_dir, name)
        if not os.path.isfile(src):
            continue
        dst = os.path.join(repo_dir, name)
        shutil.copy2(src, dst)
        copied.append(name)
    return copied


def push_from_staging(staging_dir, repo_dir):
    """Run the full push sequence. Returns True if a commit was pushed,
    False if there was nothing new to push."""
    _fetch_and_rebase(repo_dir)

    copied = _copy_from_staging(staging_dir, repo_dir)
    if not copied:
        return False

    # Step 3: stage only the specific files just copied - never `-A` / `.`.
    _run_git(repo_dir, "add", "--", *copied)

    # Step 4: skip the commit entirely if nothing actually changed vs HEAD.
    diff = _run_git(repo_dir, "diff", "--cached", "--quiet", check=False)
    if diff.returncode == 0:
        return False

    changed = _run_git(
        repo_dir, "diff", "--cached", "--name-only", check=False
    ).stdout.split()

    # Step 5: commit (existing "Update <file(s)> - <date>" format) and push.
    date_str = datetime.date.today().isoformat()
    message = f"Update {', '.join(changed)} - {date_str}"
    _run_git(repo_dir, "commit", "-m", message)
    _run_git(repo_dir, "push")
    return True


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--staging-dir",
        default=os.environ.get("STERBYTOOLS_STAGING_DIR"),
        help="Path to the (non-git) staging folder SterbyTools writes to.",
    )
    parser.add_argument(
        "--repo-dir",
        default=os.environ.get("STERBYTOOLS_REPO_DIR"),
        help="Path to the local StrayToFreedom-Clan-Stats git clone.",
    )
    parser.add_argument(
        "--setup",
        action="store_true",
        help="Run first-run setup (git config pull.rebase true) and exit.",
    )
    args = parser.parse_args()

    if not args.repo_dir:
        parser.error("--repo-dir (or STERBYTOOLS_REPO_DIR) is required")

    if args.setup:
        setup_repo(args.repo_dir)
        print(f"Configured pull.rebase=true in {args.repo_dir}")
        return

    if not args.staging_dir:
        parser.error("--staging-dir (or STERBYTOOLS_STAGING_DIR) is required")

    try:
        pushed = push_from_staging(args.staging_dir, args.repo_dir)
    except PushPipelineError as exc:
        print(f"Push pipeline stopped: {exc}", file=sys.stderr)
        sys.exit(1)

    print("Pushed." if pushed else "Nothing new to push.")


if __name__ == "__main__":
    main()

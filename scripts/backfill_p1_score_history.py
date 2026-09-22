#!/usr/bin/env python3
"""backfill_p1_score_history.py — one-time reconstruction of the clan's
total LME Phase 1 score across all past LME cycles, by walking git
history. Matches index.html's own "Total LME" stat exactly
(calculateLMETabSummary(), TOP_N = 30): the sum of the top 30 lmeScore
values for that cycle, not every player's score — the same Top-30
convention every other "Total ___" stat on the dashboard already uses
(Total ATK, Total Cores, etc.). Not part of the regular update workflow —
run once to seed lme-history/summary.json, then the normal per-LME update
procedure (documented in INSTRUCTIONS_GUIDE.MD) appends to it going
forward.

Background (see the branch/history investigation this script's commit
message and PR description cover in full):
  - No branch other than main carries LME-relevant commits main doesn't
    already have; walking main alone is complete for this purpose. We
    still search --all defensively (deduplicating by commit hash) in case
    that ever changes.
  - The player-score source file was migrated partway through the
    project's history: `playerData.js` (a flat array, one object per
    player) was the live source through 2026-07-14, when commit
    1176574318632eab207afc054230d87790e67413 ("Migrate player data to 5
    split files") replaced it with `playerLME.js` (an object keyed by
    player id, `{current: {<uid>: {lmeScore}}, previous: {...}}`).
    `playerData.js` is still present in the repo but hasn't been the live
    source since; a backfill that only reads it would silently stop in
    June 2026. This script switches source file at that commit's date.
  - `clanStats.js` declares TWO separate top-level consts relevant here:
    `clanStats` (has the `lunarPoints` baseline) and `lmeHistory` (the
    append-only per-cycle log: lmeNumber, rank, league, medals, ...).
    lmeHistory has existed since the very first commit and is never
    edited/removed, only prepended to — so for finalRank/league we read
    it ONCE from the current HEAD rather than re-deriving it per commit.
  - clanStats.lunarPoints was a live, manually-updated number up through
    LME #30; from LME #31 onward the app computes it instead (baseline +
    a per-cycle delta from LUNAR_POINTS_TABLE, based on rank/league —
    see index.html's calculateLunarPointsFromBaseline()). So historical
    lunarPoints for lmeNumber < 31 is read directly from that era's
    clanStats.js snapshot; for lmeNumber >= 31 it's computed with the same
    formula the live dashboard uses, for consistency with what's already
    on-screen there.

Usage:
    python3 scripts/backfill_p1_score_history.py [--repo-dir PATH]

Outputs (paths relative to the repo root):
    scripts/p1_score_history_backfill.json   Part 1's raw per-LME totals —
                                              an audit artifact for the
                                              one-time sanity check, not
                                              deployed with the site.
    lme-history/summary.json                 Part 2's ongoing lightweight
                                              index — the file the site
                                              (and the update workflow
                                              from here on) actually uses.
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path

SPLIT_COMMIT_HASH = "1176574318632eab207afc054230d87790e67413"
SPLIT_DATE_ISO = "2026-07-14T00:50:28+00:00"  # commit date of SPLIT_COMMIT_HASH

# Tried in order per player entry. lmeScore has been the name since the
# very first playerData.js commit and throughout playerLME.js's history,
# but per the update rules ("if the user manually provides a corrected
# score") and the general instruction to not trust a single hardcoded key,
# a couple of plausible alternates are checked defensively too.
SCORE_FIELD_CANDIDATES = ["lmeScore", "lme_score", "p1Score", "phase1Score"]

# Mirrors index.html's LUNAR_POINTS_TABLE exactly (the live dashboard's
# own source of truth) — not re-derived from history, so this script's
# computed lunarPoints values for LME #31+ agree with what the site shows.
LUNAR_POINTS_TABLE = {
    "champion": {1: 20, 2: 10, 3: -10, 4: -20},
    "legend": {1: 30, 2: 15, 3: 5, 4: -5},
}
LUNAR_POINTS_CUTOVER_LME = 31

# Mirrors index.html's `const TOP_N = 30` (calculateLMETabSummary and
# every other "Total ___ (Top 30)" stat on the dashboard) — keep these in
# sync if that ever changes.
TOP_N = 30


class BackfillError(RuntimeError):
    pass


def run_git(repo_dir, *args, check=True):
    result = subprocess.run(["git", *args], cwd=repo_dir, capture_output=True, text=True)
    if check and result.returncode != 0:
        raise BackfillError(f"git {' '.join(args)} failed: {result.stderr.strip()}")
    return result.stdout


def warn(msg):
    print(f"WARN: {msg}", file=sys.stderr)


def commits_touching(repo_dir, path):
    out = run_git(repo_dir, "log", "--all", "--format=%H", "--", path)
    # dedupe (the same commit can be reachable from multiple branches)
    seen = set()
    hashes = []
    for h in out.splitlines():
        h = h.strip()
        if h and h not in seen:
            seen.add(h)
            hashes.append(h)
    return hashes


def commit_date_iso(repo_dir, commit_hash):
    return run_git(repo_dir, "show", "-s", "--format=%cI", commit_hash).strip()


def show_file_at(repo_dir, commit_hash, path):
    """Returns the file's content at that commit, or None if it doesn't exist there."""
    result = subprocess.run(
        ["git", "show", f"{commit_hash}:{path}"], cwd=repo_dir, capture_output=True, text=True
    )
    if result.returncode != 0:
        return None
    return result.stdout


def extract_const(node_helper, tmp_path, source_text, var_name):
    """Evaluate `source_text` in a JS sandbox via extract_js_const.js and
    return (value, error_message). value is None on error."""
    tmp_path.write_text(source_text, encoding="utf-8")
    result = subprocess.run(
        ["node", str(node_helper), str(tmp_path), var_name], capture_output=True, text=True
    )
    if result.returncode != 0:
        return None, result.stderr.strip()
    try:
        return json.loads(result.stdout), None
    except json.JSONDecodeError as exc:
        return None, f"JSON decode failed: {exc}"


def score_from_player_record(p):
    """Tries each known flat field name, then the one discovered nested
    shape: a short-lived (2026-01-14, reverted same day) experiment used
    `lmeScores: {week1, week2, week3, week4}` instead of a flat lmeScore,
    with week1 holding that cycle's actual score. Returns None if nothing
    recognizable is found."""
    for field in SCORE_FIELD_CANDIDATES:
        if field in p and p[field] is not None:
            return p[field]
    nested = p.get("lmeScores")
    if isinstance(nested, dict) and nested.get("week1") is not None:
        return nested["week1"]
    return None


def top30_sum(records):
    """Sums the top TOP_N scores (descending) across the given player
    records — matching index.html's own Total LME (Top 30) stat exactly,
    not a sum of every player. A player with no recognizable score field
    is excluded from ranking entirely (not treated as a 0, which could
    wrongly bump them into a "top 30" of zeroes) but still counted toward
    `missing`/`total_count` for the caller's diagnostics.
    Returns (total, missing_count, total_count)."""
    scores = []
    missing = 0
    total_count = 0
    for rec in records:
        total_count += 1
        score = score_from_player_record(rec) if isinstance(rec, dict) else None
        if score is None:
            missing += 1
            continue
        scores.append(score)
    scores.sort(reverse=True)
    return sum(scores[:TOP_N]), missing, total_count


def sum_player_data_array(players):
    """playerData.js shape: flat array of player objects."""
    return top30_sum(players)


def sum_player_lme_current(player_lme):
    """playerLME.js shape: {current: {uid: {lmeScore: N}}, previous: {...}}."""
    current = player_lme.get("current") if isinstance(player_lme, dict) else None
    if not isinstance(current, dict):
        return 0, 0, 0
    return top30_sum(current.values())


def process_phase(repo_dir, node_helper, tmp_dir, commit_hashes, file_path, var_name, sum_fn, phase_label):
    """Walks one phase's commits chronologically, cross-references
    clanStats.js at the same commit for lmeNumber, and returns a list of
    row dicts: {lmeNumber, commitHash, dateIso, date, totalP1Score,
    historicalLunarPoints}."""
    dated = []
    for h in commit_hashes:
        try:
            dated.append((h, commit_date_iso(repo_dir, h)))
        except BackfillError as exc:
            warn(f"[{phase_label}] {h[:10]}: could not read commit date ({exc}), skipping")
    dated.sort(key=lambda pair: pair[1])

    rows = []
    tmp_score_file = tmp_dir / "score_source.js"
    tmp_clanstats_file = tmp_dir / "clanstats_source.js"

    for h, date_iso in dated:
        short = h[:10]
        content = show_file_at(repo_dir, h, file_path)
        if content is None:
            warn(f"[{phase_label}] {short} {date_iso}: {file_path} missing at this commit, skipping")
            continue

        data, err = extract_const(node_helper, tmp_score_file, content, var_name)
        if err:
            warn(f"[{phase_label}] {short} {date_iso}: failed to parse {file_path} ({err}), skipping")
            continue

        total, missing_count, total_count = sum_fn(data)
        if total_count == 0:
            warn(f"[{phase_label}] {short} {date_iso}: no players found in {file_path}, skipping")
            continue
        if missing_count == total_count:
            warn(
                f"[{phase_label}] {short} {date_iso}: NO recognizable score field "
                f"(tried {SCORE_FIELD_CANDIDATES}) found on ANY of {total_count} players — "
                f"skipping this commit entirely rather than recording a false total. "
                f"Check this commit by hand."
            )
            continue
        if missing_count > 0:
            warn(
                f"[{phase_label}] {short} {date_iso}: {missing_count}/{total_count} players "
                f"missing a recognizable score field — treated as 0 for those, total may be low"
            )

        cs_content = show_file_at(repo_dir, h, "clanStats.js")
        if cs_content is None:
            warn(f"[{phase_label}] {short} {date_iso}: clanStats.js missing at this commit, cannot tag lmeNumber, skipping")
            continue

        lme_history, err2 = extract_const(node_helper, tmp_clanstats_file, cs_content, "lmeHistory")
        if err2 or not lme_history:
            warn(f"[{phase_label}] {short} {date_iso}: could not read lmeHistory from clanStats.js ({err2}), skipping")
            continue
        lme_number = lme_history[0].get("lmeNumber") if isinstance(lme_history[0], dict) else None
        if lme_number is None:
            warn(f"[{phase_label}] {short} {date_iso}: lmeHistory[0] has no lmeNumber, skipping")
            continue

        clan_stats, err3 = extract_const(node_helper, tmp_clanstats_file, cs_content, "clanStats")
        historical_lunar_points = None
        if not err3 and isinstance(clan_stats, dict):
            historical_lunar_points = clan_stats.get("lunarPoints")

        rows.append(
            {
                "lmeNumber": lme_number,
                "commitHash": h,
                "dateIso": date_iso,
                "date": date_iso[:10],
                "totalP1Score": total,
                "historicalLunarPoints": historical_lunar_points,
            }
        )

    return rows


def compute_lunar_points_series(lme_by_number, rows_by_lme, baseline):
    """Mirrors index.html's calculateLunarPointsFromBaseline(): for
    lmeNumber < 31, use the value actually recorded in clanStats.js at
    that point in history; from #31 onward, accumulate the same
    league/rank delta formula the live dashboard uses, walking every
    entry in ascending lmeNumber order (not just the ones we managed to
    reconstruct a P1 total for)."""
    result = {}
    running = baseline
    for lme_number in sorted(lme_by_number.keys()):
        entry = lme_by_number[lme_number]
        if lme_number < LUNAR_POINTS_CUTOVER_LME:
            row = rows_by_lme.get(lme_number)
            result[lme_number] = row["historicalLunarPoints"] if row else None
            continue

        league = (entry.get("league") or "").lower()
        rank = entry.get("rank")
        delta = 0
        if league == "champion":
            delta = LUNAR_POINTS_TABLE["champion"].get(rank, 0)
        elif "legend" in league:
            delta = LUNAR_POINTS_TABLE["legend"].get(rank, 0)
        running += delta
        result[lme_number] = running
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--repo-dir", default=str(Path(__file__).resolve().parent.parent))
    args = parser.parse_args()

    repo_dir = Path(args.repo_dir).resolve()
    node_helper = repo_dir / "scripts" / "extract_js_const.js"
    if not node_helper.exists():
        raise BackfillError(f"missing helper: {node_helper}")

    import tempfile

    with tempfile.TemporaryDirectory(prefix="p1-backfill-") as tmp:
        tmp_dir = Path(tmp)

        print("Collecting commits touching playerData.js and playerLME.js (--all, deduped)...", file=sys.stderr)
        playerdata_all = commits_touching(repo_dir, "playerData.js")
        playerlme_all = commits_touching(repo_dir, "playerLME.js")

        # Two-phase source split at the file-migration commit's date —
        # see module docstring. Filtering by date (not just "which file
        # was touched") matters because playerData.js was touched once
        # more, incidentally, after the split (2026-09-10, swept up by an
        # unrelated playerCXRank.js commit) — that later snapshot is
        # stale and must not be treated as a live update.
        playerdata_pre_split = []
        for h in playerdata_all:
            if commit_date_iso(repo_dir, h) < SPLIT_DATE_ISO:
                playerdata_pre_split.append(h)
        playerlme_post_split = []
        for h in playerlme_all:
            if commit_date_iso(repo_dir, h) >= SPLIT_DATE_ISO:
                playerlme_post_split.append(h)

        print(
            f"  playerData.js: {len(playerdata_all)} total commits, "
            f"{len(playerdata_pre_split)} before the {SPLIT_DATE_ISO[:10]} split",
            file=sys.stderr,
        )
        print(
            f"  playerLME.js:  {len(playerlme_all)} total commits, "
            f"{len(playerlme_post_split)} at/after the split",
            file=sys.stderr,
        )

        phase1 = process_phase(
            repo_dir, node_helper, tmp_dir, playerdata_pre_split, "playerData.js", "playerData",
            sum_player_data_array, "playerData.js",
        )
        phase2 = process_phase(
            repo_dir, node_helper, tmp_dir, playerlme_post_split, "playerLME.js", "playerLME",
            sum_player_lme_current, "playerLME.js",
        )

        all_rows = phase1 + phase2
        all_rows.sort(key=lambda r: r["dateIso"])

        # Step 4: multiple commits can land within the same LME cycle (a
        # mid-week correction) — keep only the chronologically LAST one
        # per lmeNumber. Sorted ascending above, so a later dict write
        # for the same key naturally overwrites the earlier one.
        by_lme = {}
        for r in all_rows:
            by_lme[r["lmeNumber"]] = r

        final_series = sorted(by_lme.values(), key=lambda r: r["lmeNumber"])

        print(f"\nReconstructed {len(final_series)} distinct LME totals.", file=sys.stderr)

        # Cross-check against the CURRENT HEAD's clanStats.js lmeHistory
        # (append-only, so it already holds the complete historical
        # record) rather than re-deriving rank/league/lunarPoints from
        # per-commit archaeology a second time.
        head_cs_content = show_file_at(repo_dir, "HEAD", "clanStats.js")
        if head_cs_content is None:
            raise BackfillError("clanStats.js not found at HEAD")
        head_lme_history, err = extract_const(node_helper, tmp_dir / "head_clanstats.js", head_cs_content, "lmeHistory")
        if err:
            raise BackfillError(f"could not read lmeHistory from HEAD clanStats.js: {err}")
        head_clan_stats, err2 = extract_const(node_helper, tmp_dir / "head_clanstats2.js", head_cs_content, "clanStats")
        if err2:
            raise BackfillError(f"could not read clanStats from HEAD clanStats.js: {err2}")

        lme_by_number = {e["lmeNumber"]: e for e in head_lme_history if isinstance(e, dict) and "lmeNumber" in e}

        missing_from_series = sorted(set(lme_by_number.keys()) - set(by_lme.keys()))
        extra_in_series = sorted(set(by_lme.keys()) - set(lme_by_number.keys()))
        if missing_from_series:
            warn(
                f"lmeHistory (HEAD) has {len(missing_from_series)} LME(s) with no reconstructed "
                f"P1 total: {missing_from_series} — these will be left out of summary.json"
            )
        if extra_in_series:
            warn(
                f"Reconstructed {len(extra_in_series)} LME total(s) not present in HEAD's "
                f"lmeHistory: {extra_in_series} — check these by hand"
            )

        baseline = head_clan_stats.get("lunarPoints")
        if baseline is None:
            raise BackfillError("HEAD clanStats.js has no lunarPoints baseline")
        lunar_points_series = compute_lunar_points_series(lme_by_number, by_lme, baseline)

        # ---- Part 1 output: raw audit artifact ----
        part1_output = [
            {"lmeNumber": r["lmeNumber"], "date": r["date"], "totalP1Score": r["totalP1Score"]}
            for r in final_series
        ]
        part1_path = repo_dir / "scripts" / "p1_score_history_backfill.json"
        part1_path.write_text(json.dumps(part1_output, indent=2) + "\n", encoding="utf-8")
        print(f"\nWrote {part1_path} ({len(part1_output)} rows) — Part 1 raw output for manual sanity-check.", file=sys.stderr)

        # ---- Part 2 output: lme-history/summary.json ----
        summary_rows = []
        for lme_number in sorted(lme_by_number.keys()):
            row = by_lme.get(lme_number)
            if row is None:
                continue  # already warned above
            entry = lme_by_number[lme_number]
            summary_rows.append(
                {
                    "lmeNumber": lme_number,
                    "date": row["date"],
                    "totalP1Score": row["totalP1Score"],
                    "finalRank": entry.get("rank"),
                    "lunarPoints": lunar_points_series.get(lme_number),
                    "league": entry.get("league"),
                }
            )

        summary_dir = repo_dir / "lme-history"
        summary_dir.mkdir(exist_ok=True)
        summary_path = summary_dir / "summary.json"
        summary_path.write_text(json.dumps(summary_rows, indent=2) + "\n", encoding="utf-8")
        print(f"Wrote {summary_path} ({len(summary_rows)} rows) — Part 2 ongoing index.", file=sys.stderr)

        print(
            f"\nHEAD's clanStats.js lmeHistory has {len(lme_by_number)} entries; "
            f"summary.json has {len(summary_rows)} rows "
            f"({'match' if len(lme_by_number) == len(summary_rows) else 'MISMATCH — see warnings above'}).",
            file=sys.stderr,
        )


if __name__ == "__main__":
    try:
        main()
    except BackfillError as exc:
        print(f"Backfill stopped: {exc}", file=sys.stderr)
        sys.exit(1)

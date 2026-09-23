# Freedomˢᵗʳᵃʸ Clan Stats — Update Instructions

A quick-reference guide for maintaining `playerData.js` and `clanStats.js`.

---

## Git & Committing

- Always commit and push to the **`main`** branch.
- Use a short, descriptive commit message. Examples:
  - `Update LME scores Week 57`
  - `Update CX scores (Explorer Badge Ranking Week 57)`
  - `Add LME #40 result`
  - `Remove [player], add to alumni`

---

## Files You Maintain

**`playerData.js`** — per-player stats:
- Name, ATK, Relic Cores (display string + `coresNum`), Role
- LME Score + Gain, CX Score + Gain, Cores Gain, ATK Gain

**`clanStats.js`** — clan-wide data:
- `lmeDifficulty`, `lmeLeague`, `lunarPoints` (**never modify**)
- `alumniCount`, `lmeHistory` array, `alumniMembers` array

---

## LME Screenshots — Authoritative Member List

The LME result screenshots show the current clan roster. Use them as the definitive list:
- Players appearing in the screenshots are active members.
- Players **not** appearing scored 0 for that LME (or are no longer in the clan).
- If a previously `"Removed"` player reappears in the screenshots, they have rejoined — restore their role to `"Member"` and update their LME score accordingly.

---

## Updating LME Scores

1. Read each player's score from the screenshots.
2. Update `lmeScore` and calculate `lmeGain` as new − old.
   - Example: `(+51)` or `(-49)`
3. If a player scored **0**, set `lmeScore: 0` and show the full loss from their previous score.
   - Example: `lmeGain: "(-608)"`
4. If the user manually provides a corrected score, use that value.

---

## Updating ATK & Relic Cores

From the pasted table:

- Update `attack` and `attackGain` (difference vs previous, in K)
  - Example: `(+31.3K)` or `(+0K)`
- Update `cores` (display string, e.g. `"145+"`) and `coresNum` (number only)
- Update `coresGain` (difference vs previous)
  - Example: `(+5)` or `(+0)`

---

## Updating CX Scores

- Update `cxScore` and `cxGain` (difference vs previous).
- The index detects `topScore` automatically from `playerData` — **do not maintain a `cxSettings` block**.

---

## Season CX Reset

At the end of each season, all CX scores are reset:
- Set `cxScore: 0` and `cxGain: "(+0)"` for **all** players, including `"Removed"` ones.
- This is the final step that allows fully-zeroed Removed players to be deleted (see below).

---

## Removing a Member

When a player leaves the clan, apply the following changes across subsequent updates:

**Step 1 — Role:** Set `role: "Removed"`.

**Step 2 — ATK & Cores:** Set both to `0`. Show the negative gain from their last known values.
- Example: `attack: 0, attackGain: "(-1269.4K)"` · `cores: "0", coresNum: 0, coresGain: "(-80)"`
- On every subsequent ATK/Cores update: keep at `0` with `(+0K)` / `(+0)` gains.

**Step 3 — LME:** On the next LME update, set `lmeScore: 0` and show the negative gain from their previous score.
- Example: `lmeScore: 0, lmeGain: "(-1523)"`
- On every subsequent LME update: keep at `0` with `(+0)` gain.

**Step 4 — CX:** The `cxScore` stays frozen for the rest of the season — removed players can't contribute. The `cxGain` becomes `(+0)` going forward.

**Delete trigger:** Once **all** fields read `0 (+0)` — including CX — the player can be deleted entirely from `playerData`. Since CX only resets at season end, deletion naturally happens after that reset.

**Alumni tracking:** When removing a player, update `clanStats.js`: increment `alumniCount` and add their name to `alumniMembers`.

---

## Updating `clanStats.js`

- **`lmeHistory`** — add new results to the **TOP** of the array with:
  - `lmeNumber`, `rank`, `rankImage`, `atkDefPoints`, `medals`, `league`
- **`alumniCount`** — increment by the number of members removed; add their names to `alumniMembers`
- **`lmeDifficulty` / `lmeLeague`** — update only when told to
- **`lunarPoints`** — **never modify** (the calculator handles this automatically)

---

## Updating `Lunar Mine Expedition/Summary.json`

A lightweight per-LME index (clan totals only — no per-member or per-round
data; that stays in the full per-LME detail files) used by the P1 Score
progression graph on the LME History page. Lives alongside that folder's
`LME{n}.json` cycle files so the Clash Tracker can maintain it the same
way going forward — until then, update it manually. After finishing the
LME update
above (player scores + the new `lmeHistory` entry in `clanStats.js`),
append **one new row**:

```json
{
  "lmeNumber": 60,
  "date": "2026-09-22",
  "totalP1Score": 101558,
  "finalRank": 2,
  "lunarPoints": 1477,
  "league": "Champion"
}
```

- `lmeNumber`, `finalRank` (= the new `lmeHistory` entry's `rank`), `league`
  — copy straight from the `lmeHistory` entry you just added.
- `totalP1Score` — **the same Top 30 total already shown on the LME tab**
  ("Total LME (Top 30)" stat, `lme-total-score` — see
  `calculateLMETabSummary()` in `index.html`): sort every player's current
  LME score descending (from `playerLME.js`'s `current` object as of this
  update — this is the file that actually carries live P1 scores now;
  `playerData.js` is a retired file kept only for its pre-2026-07-14
  history) and sum the top 30. **Not** every player's score — that
  overcounts against a 39-40 member roster and won't match the dashboard's
  own number.
- `lunarPoints` — the clan's current Lunar Points figure as shown on the
  dashboard (baseline + the running per-cycle delta from LME #31 onward;
  see `calculateLunarPointsFromBaseline()` in `index.html`).
- `date` — the date of this update.

**Ordering: append to the bottom (ascending by `lmeNumber`)** — the
opposite of `lmeHistory`'s newest-first convention. This file is read
directly as a chart time series (oldest → newest, left → right), so it's
kept in that order rather than matching `lmeHistory`.

If a mid-cycle score correction comes in before the next LME, update that
same row in place rather than appending a duplicate.

# Freedomˢᵗʳᵃʸ Clan Stats — Update Instructions

A quick-reference guide for maintaining `playerData.js` and `clanStats.js`.

---

## Git & Committing

- Always commit and push to the **`main`** branch.
- Use a short, descriptive commit message. Examples:
  - `Update LME scores Week 57`
  - `Update CX scores (Explorer Badge Ranking Week 57)`
  - `Add LME #40 result`
  - `Promote [player] to Glory Member`
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
  - Example: `(+31.3K)`
- Update `cores` (display string, e.g. `"145+"`) and `coresNum` (number only)
- Update `coresGain` (difference vs previous)
  - Example: `(+5)` or `(+0)`

---

## Updating CX Scores

- Update `cxScore` and `cxGain` (difference vs previous)
- The index detects `topScore` automatically from `playerData` — **do not maintain a `cxSettings` block**

---

## Glory Member Rules

**Never touched (always excluded):**
- 神Sterben死 (Leader)
- Cunner88 (Vice-Leader)
- Lemminkäinen (Vice-Leader)
- Han (Eternal Glory)

**When adding 2 Glory Members:**

1. Count current Glory Members in the pasted `playerData`.
2. **If count < 8** → pick the 2 highest CX scores from eligible non-Glory Members and set `role: "Glory Member"`.
3. **If count = 8** → demote ALL current Glory Members to `"Member"` first, then pick 2 new ones from the full eligible pool (resets to 2).
4. **Tiebreaker:** if CX scores are tied, the higher LME Score wins.

---

## Updating `clanStats.js`

- **`lmeHistory`** — add new results to the **TOP** of the array with:
  - `lmeNumber`, `rank`, `rankImage`, `atkDefPoints`, `medals`, `league`
- **`alumniCount`** — increment by the number of members removed; add their names to `alumniMembers`
- **`lmeDifficulty` / `lmeLeague`** — update only when told to
- **`lunarPoints`** — **never modify** (the calculator handles this automatically)

---

## Removing a Member

Set the player's `role` to `"Removed"` and perform the following:

**If `clanStats` is provided:** update `alumniMembers` and increment `alumniCount`.

**When updating LME Scores:**
- Set score to `0` and calculate loss from previous week
- Example progression:
  - Week 1: `"0 (-672)"`
  - Week 2: `"0 (+0)"`

**When updating ATK and Cores:**
- Set values to `0` and calculate loss from previous week
- Example progression:
  - Week 1: `ATK: 0k (-800k)`, `Cores: 0 (-65)`
  - Week 2: `ATK: 0k (+0k)`, `Cores: 0 (+0)`

**CX scores:** removed players **keep their CX scores intact** even during full CX updates.

**When to delete entirely:** a removed member can be deleted from `playerData` once their stats all read:
- ATK: `0k (+0k)`
- Cores: `0 (+0)`
- CX: `0 (+0)`

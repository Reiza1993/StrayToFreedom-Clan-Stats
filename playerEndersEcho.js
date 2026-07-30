// playerEndersEcho.js
// Freedomˢᵗʳᵃʸ — Ender's Echo Best Score (single highest individual attempt
// per member against the current boss - NOT a per-day total, see
// lunar_details.py's LunarClanMember.ee_best_score)
// Last Updated: 2026-07-30
// Keys are real account IDs from the clan roster fetch. eeBestScore: null
// means the member was either never scanned or confirmed to have zero
// recorded attempts.
// previous.eeBestScore rolls forward from the last write that actually
// changed something, for a future dashboard's EE Best Score +gain column -
// same cycle-gated rollover mechanism playerStats.js/playerCores.js/
// playerLME.js use (see rollover.py's module docstring), tracked in
// playerEndersEcho.state.json next to this file.
const playerEndersEcho = {
    current: {
        "102263647": {
            "eeBestScore": null,
            "name": "Koncalaz"
        },
        "104730405": {
            "eeBestScore": null,
            "name": "KingRizzle"
        },
        "10754439": {
            "eeBestScore": 3.053405890166697e+19,
            "name": "HakiLuffy"
        },
        "110301719": {
            "eeBestScore": null,
            "name": "Epic|W"
        },
        "112772047": {
            "eeBestScore": 1.3015942557792102e+19,
            "name": "VictorMolusco"
        },
        "113690788": {
            "eeBestScore": 1.3771127007456502e+19,
            "name": "Apathy_"
        },
        "115742768": {
            "eeBestScore": null,
            "name": "SterbyTools"
        },
        "18115624": {
            "eeBestScore": 2.3264007563660047e+20,
            "name": "Nubis"
        },
        "18297536": {
            "eeBestScore": null,
            "name": "ergiangi"
        },
        "21471954": {
            "eeBestScore": null,
            "name": "N0M3rcy"
        },
        "21496121": {
            "eeBestScore": null,
            "name": "b0ss"
        },
        "22085142": {
            "eeBestScore": null,
            "name": "bimbabo"
        },
        "26277677": {
            "eeBestScore": 1.6936958188035545e+19,
            "name": "BobBobberson"
        },
        "29398372": {
            "eeBestScore": 2.464075980796738e+19,
            "name": "Player113322"
        },
        "29904762": {
            "eeBestScore": null,
            "name": "Cheeselife"
        },
        "30658936": {
            "eeBestScore": 2.780402113339702e+19,
            "name": "Gritchen"
        },
        "32236991": {
            "eeBestScore": 2.03671712261788e+19,
            "name": "Player 32236991"
        },
        "32556489": {
            "eeBestScore": null,
            "name": "Bensayyten"
        },
        "36484758": {
            "eeBestScore": 2.321080616956341e+18,
            "name": "Belthazar"
        },
        "41742773": {
            "eeBestScore": 8.06746575532928e+19,
            "name": "PinkyToeBeans"
        },
        "51071110": {
            "eeBestScore": null,
            "name": "samwise08"
        },
        "56780908": {
            "eeBestScore": null,
            "name": "TieForFirstYo"
        },
        "57543766": {
            "eeBestScore": null,
            "name": "THJF1948ㅣStray"
        },
        "60687252": {
            "eeBestScore": 2.9067562513575273e+22,
            "name": "һan"
        },
        "61140731": {
            "eeBestScore": null,
            "name": "fesl"
        },
        "64676255": {
            "eeBestScore": null,
            "name": "盾Heathcliff剣"
        },
        "66607264": {
            "eeBestScore": null,
            "name": "Player 66607264"
        },
        "71028860": {
            "eeBestScore": 9.07065425240887e+18,
            "name": "Rzzza"
        },
        "75174428": {
            "eeBestScore": null,
            "name": "PastalaVista"
        },
        "77879578": {
            "eeBestScore": null,
            "name": "MMM|Mina475"
        },
        "79510960": {
            "eeBestScore": null,
            "name": "theLP"
        },
        "80972473": {
            "eeBestScore": null,
            "name": "Cunner88"
        },
        "81635898": {
            "eeBestScore": null,
            "name": "Rėtrø"
        },
        "83339881": {
            "eeBestScore": 4.79590806944757e+21,
            "name": "Fl3xas"
        },
        "83861839": {
            "eeBestScore": null,
            "name": "groggen"
        },
        "86388317": {
            "eeBestScore": null,
            "name": "GG║BG2020"
        },
        "87244358": {
            "eeBestScore": 1.2907537410617788e+21,
            "name": "神Sterben死"
        },
        "88203044": {
            "eeBestScore": 4.3726645201112646e+19,
            "name": "p88203044"
        },
        "89511116": {
            "eeBestScore": null,
            "name": "EMBALOCO"
        }
    },
    previous: {}
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerEndersEcho };
}

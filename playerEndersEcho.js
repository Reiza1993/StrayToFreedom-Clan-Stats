// playerEndersEcho.js
// Freedomˢᵗʳᵃʸ — Ender's Echo Best Score (single highest individual attempt
// per member against the current boss - NOT a per-day total, see
// lunar_details.py's LunarClanMember.ee_best_score)
// Last Updated: 2026-07-28
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
            "eeBestScore": 4.456988784939088e+20,
            "name": "Koncalaz"
        },
        "104730405": {
            "eeBestScore": null,
            "name": "KingRizzle"
        },
        "10754439": {
            "eeBestScore": 2.838967328008659e+19,
            "name": "HakiLuffy"
        },
        "110301719": {
            "eeBestScore": null,
            "name": "Epic|W"
        },
        "112772047": {
            "eeBestScore": 1.2285306667196891e+19,
            "name": "VictorMolusco"
        },
        "113690788": {
            "eeBestScore": 1.4786490438680828e+19,
            "name": "Apathy_"
        },
        "115742768": {
            "eeBestScore": null,
            "name": "SterbyTools"
        },
        "18115624": {
            "eeBestScore": 3.7996622388949254e+20,
            "name": "Nubis"
        },
        "18297536": {
            "eeBestScore": 7.587967254326269e+18,
            "name": "ergiangi"
        },
        "21471954": {
            "eeBestScore": null,
            "name": "N0M3rcy"
        },
        "21496121": {
            "eeBestScore": 1.2695970034149861e+19,
            "name": "b0ss"
        },
        "22085142": {
            "eeBestScore": null,
            "name": "bimbabo"
        },
        "26277677": {
            "eeBestScore": 2.149137498293416e+19,
            "name": "BobBobberson"
        },
        "29398372": {
            "eeBestScore": null,
            "name": "Player113322"
        },
        "29904762": {
            "eeBestScore": 5.653019816600089e+18,
            "name": "Cheeselife"
        },
        "30658936": {
            "eeBestScore": 3.74641294889062e+19,
            "name": "Gritchen"
        },
        "32236991": {
            "eeBestScore": 1.4478694524511873e+19,
            "name": "Player 32236991"
        },
        "32556489": {
            "eeBestScore": 9.701821231358743e+18,
            "name": "Bensayyten"
        },
        "36484758": {
            "eeBestScore": 2.552391608144861e+18,
            "name": "Belthazar"
        },
        "41742773": {
            "eeBestScore": 9.137868291719774e+19,
            "name": "PinkyToeBeans"
        },
        "51071110": {
            "eeBestScore": 1.372152077344409e+19,
            "name": "samwise08"
        },
        "56780908": {
            "eeBestScore": 3.542535943859935e+19,
            "name": "TieForFirstYo"
        },
        "57543766": {
            "eeBestScore": null,
            "name": "THJF1948ㅣStray"
        },
        "60687252": {
            "eeBestScore": 2.2924884510380957e+22,
            "name": "һan"
        },
        "61140731": {
            "eeBestScore": null,
            "name": "fesl"
        },
        "64676255": {
            "eeBestScore": 3.939763562629587e+19,
            "name": "盾Heathcliff剣"
        },
        "66607264": {
            "eeBestScore": null,
            "name": "Player 66607264"
        },
        "71028860": {
            "eeBestScore": 6.094719128894142e+18,
            "name": "Rzzza"
        },
        "75174428": {
            "eeBestScore": 1.4199836437061753e+20,
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
            "eeBestScore": 6.280208263269705e+20,
            "name": "Cunner88"
        },
        "81635898": {
            "eeBestScore": null,
            "name": "Rėtrø"
        },
        "83339881": {
            "eeBestScore": 4.3208342563273415e+21,
            "name": "Fl3xas"
        },
        "83861839": {
            "eeBestScore": 6.674547525182759e+18,
            "name": "groggen"
        },
        "86388317": {
            "eeBestScore": 1.6491174190220196e+18,
            "name": "GG║BG2020"
        },
        "87244358": {
            "eeBestScore": 1.410549895645447e+21,
            "name": "神Sterben死"
        },
        "88203044": {
            "eeBestScore": 4.944840709912773e+19,
            "name": "p88203044"
        },
        "89511116": {
            "eeBestScore": 1.908332121373644e+19,
            "name": "EMBALOCO"
        }
    },
    previous: {}
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerEndersEcho };
}

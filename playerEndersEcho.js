// playerEndersEcho.js
// Freedomˢᵗʳᵃʸ — Ender's Echo Best Score (single highest individual attempt
// per member against the current boss - NOT a per-day total, see
// lunar_details.py's LunarClanMember.ee_best_score)
// Last Updated: 2026-09-03
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
        "100876140": {
            "eeBestScore": 6.458143349405505e+20,
            "name": "Scoundrel536"
        },
        "102263647": {
            "eeBestScore": 1.4887864676360344e+21,
            "name": "Koncalaz"
        },
        "103516442": {
            "eeBestScore": 2.147315881259833e+21,
            "name": "DAYO-P"
        },
        "106162623": {
            "eeBestScore": 4.118066839511393e+19,
            "name": "gubrax"
        },
        "10754439": {
            "eeBestScore": 8.37165799718083e+19,
            "name": "HakiLuffy"
        },
        "108546985": {
            "eeBestScore": null,
            "name": "pumpenjoe"
        },
        "112772047": {
            "eeBestScore": 7.164376940446439e+19,
            "name": "VictorMolusco"
        },
        "113690788": {
            "eeBestScore": 4.482551106581314e+19,
            "name": "Apathy_"
        },
        "11463573": {
            "eeBestScore": 7.1314357130558185e+19,
            "name": "faxnem"
        },
        "115742768": {
            "eeBestScore": null,
            "name": "SterbyTools"
        },
        "18115624": {
            "eeBestScore": 2.2772312361386251e+21,
            "name": "Nubis"
        },
        "18297536": {
            "eeBestScore": null,
            "name": "ergiangi"
        },
        "19575414": {
            "eeBestScore": null,
            "name": "Zveryok"
        },
        "26277677": {
            "eeBestScore": 3.6116080367844557e+19,
            "name": "BobBobberson"
        },
        "29321884": {
            "eeBestScore": 4.4342202092521956e+21,
            "name": "RABBIT5"
        },
        "29904762": {
            "eeBestScore": null,
            "name": "Cheeselife"
        },
        "30658936": {
            "eeBestScore": 6.04784682679254e+19,
            "name": "Gritchen"
        },
        "32556489": {
            "eeBestScore": 5.882362942480866e+19,
            "name": "Bensayyten"
        },
        "35869301": {
            "eeBestScore": 6.898761116404981e+20,
            "name": "Toddlerr"
        },
        "36484758": {
            "eeBestScore": 8.999015020250998e+18,
            "name": "Belthazar"
        },
        "41742773": {
            "eeBestScore": 2.8763949493718385e+20,
            "name": "PinkyToeBeans"
        },
        "51071110": {
            "eeBestScore": null,
            "name": "samwise08"
        },
        "59566866": {
            "eeBestScore": null,
            "name": "FlyingDutchy"
        },
        "60687252": {
            "eeBestScore": null,
            "name": "һan"
        },
        "64676255": {
            "eeBestScore": 6.976361519572507e+19,
            "name": "盾Heathcliff剣"
        },
        "66607264": {
            "eeBestScore": 1.4077814590600996e+20,
            "name": "Player 66607264"
        },
        "69676999": {
            "eeBestScore": 3.985928740563777e+19,
            "name": "datamaster"
        },
        "70603922": {
            "eeBestScore": 8.089596342568188e+19,
            "name": "BlackFlamE"
        },
        "71028860": {
            "eeBestScore": 6.148026755991008e+19,
            "name": "Rzzza"
        },
        "72894129": {
            "eeBestScore": null,
            "name": "NeonCBV"
        },
        "75174428": {
            "eeBestScore": 5.7038811461069563e+20,
            "name": "PastalaVista"
        },
        "79510960": {
            "eeBestScore": 6.122045684526953e+19,
            "name": "theLP"
        },
        "80018314": {
            "eeBestScore": 3.366426282385171e+19,
            "name": "Player 80018314"
        },
        "80972473": {
            "eeBestScore": null,
            "name": "Cunner88"
        },
        "83339881": {
            "eeBestScore": 1.5355092281790195e+22,
            "name": "Fl3xas"
        },
        "83861839": {
            "eeBestScore": 9.983240344171212e+19,
            "name": "groggen"
        },
        "87244358": {
            "eeBestScore": null,
            "name": "神Sterben死"
        },
        "87954282": {
            "eeBestScore": 1.854066341116661e+21,
            "name": "SngphO"
        },
        "88203044": {
            "eeBestScore": 1.577825514611576e+20,
            "name": "p88203044"
        },
        "89511116": {
            "eeBestScore": 8.867985169647673e+19,
            "name": "EMBALOCO"
        }
    },
    previous: {
        "102263647": {
            "eeBestScore": 7.702609623910734e+20
        },
        "104730405": {
            "eeBestScore": null
        },
        "10754439": {
            "eeBestScore": 4.360681697283655e+19
        },
        "110301719": {
            "eeBestScore": 3.938407535840826e+18
        },
        "112772047": {
            "eeBestScore": 2.069314423514282e+19
        },
        "113690788": {
            "eeBestScore": 2.2997433915049206e+19
        },
        "115742768": {
            "eeBestScore": null
        },
        "18115624": {
            "eeBestScore": 7.956845877126939e+20
        },
        "18297536": {
            "eeBestScore": null
        },
        "21471954": {
            "eeBestScore": 2.0455797491633298e+18
        },
        "21496121": {
            "eeBestScore": 1.8606947297622716e+19
        },
        "22085142": {
            "eeBestScore": 6.159274906127556e+18
        },
        "26277677": {
            "eeBestScore": 2.3592887482097308e+19
        },
        "29398372": {
            "eeBestScore": null
        },
        "29904762": {
            "eeBestScore": 6.307257417750434e+18
        },
        "30658936": {
            "eeBestScore": 3.3950157231178826e+19
        },
        "32236991": {
            "eeBestScore": 2.175650938303603e+19
        },
        "32556489": {
            "eeBestScore": 1.6484064421109117e+19
        },
        "34847701": {
            "eeBestScore": 1.2695183445670264e+17
        },
        "36484758": {
            "eeBestScore": 2.697414494220131e+18
        },
        "41742773": {
            "eeBestScore": 1.391032174325737e+20
        },
        "51071110": {
            "eeBestScore": 2.0141488653523075e+19
        },
        "56780908": {
            "eeBestScore": 5.997727339707996e+19
        },
        "57543766": {
            "eeBestScore": null
        },
        "60687252": {
            "eeBestScore": 3.2481698986019296e+22
        },
        "61140731": {
            "eeBestScore": null
        },
        "64676255": {
            "eeBestScore": 4.924456369341253e+19
        },
        "66607264": {
            "eeBestScore": 7.492216362606921e+19
        },
        "71028860": {
            "eeBestScore": 3.405502917684204e+19
        },
        "75174428": {
            "eeBestScore": 1.6317169274117915e+20
        },
        "77879578": {
            "eeBestScore": null
        },
        "79510960": {
            "eeBestScore": 4.718918386954229e+19
        },
        "80972473": {
            "eeBestScore": 7.884510547639797e+20
        },
        "81635898": {
            "eeBestScore": null
        },
        "83339881": {
            "eeBestScore": 5.514235938783548e+21
        },
        "83861839": {
            "eeBestScore": 2.4910005794902565e+19
        },
        "86388317": {
            "eeBestScore": 1.361007837500528e+18
        },
        "87244358": {
            "eeBestScore": 1.9993238495858113e+21
        },
        "88203044": {
            "eeBestScore": 5.347974069935453e+19
        },
        "89511116": {
            "eeBestScore": 2.250711132764057e+19
        }
    }
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerEndersEcho };
}

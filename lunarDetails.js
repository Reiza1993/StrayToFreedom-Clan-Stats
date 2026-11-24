// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-11-25
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1565,
            "members": {
                "100876140": {
                    "atk": 2988253,
                    "awakeningCores": 118,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "techResonance": 15450,
                    "transmuteCores": 34
                },
                "103516442": {
                    "atk": 3385480,
                    "awakeningCores": 139,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 280,
                    "techResonance": 24750,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 2055747,
                    "awakeningCores": 47,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "techResonance": 13030,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2500405,
                    "awakeningCores": 88,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 158,
                    "techResonance": 16950,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2492911,
                    "awakeningCores": 155,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 207,
                    "techResonance": 18910,
                    "transmuteCores": 44
                },
                "108860725": {
                    "atk": 2727248,
                    "awakeningCores": 79,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "techResonance": 19420,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 2051809,
                    "awakeningCores": 53,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 127,
                    "techResonance": 14010,
                    "transmuteCores": 38
                },
                "113690788": {
                    "atk": 2287529,
                    "awakeningCores": 71,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 118,
                    "techResonance": 18780,
                    "transmuteCores": 34
                },
                "11463573": {
                    "atk": 2110647,
                    "awakeningCores": 79,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 124,
                    "techResonance": 17760,
                    "transmuteCores": 54
                },
                "115742768": {
                    "atk": 49403,
                    "awakeningCores": null,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 0,
                    "techResonance": 630,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2290342,
                    "awakeningCores": 41,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "Oopsie-Daisy",
                    "relicCores": 207,
                    "techResonance": 24410,
                    "transmuteCores": 0
                },
                "26277677": {
                    "atk": 2846564,
                    "awakeningCores": 95,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 142,
                    "techResonance": 13400,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2824348,
                    "awakeningCores": 155,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 184,
                    "techResonance": 17320,
                    "transmuteCores": 7
                },
                "29321884": {
                    "atk": 3380740,
                    "awakeningCores": 186,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 228,
                    "techResonance": 23750,
                    "transmuteCores": 38
                },
                "29904762": {
                    "atk": 1777563,
                    "awakeningCores": 62,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 139,
                    "techResonance": 7970,
                    "transmuteCores": 50
                },
                "30658936": {
                    "atk": 2540797,
                    "awakeningCores": 92,
                    "chipsCount": 93,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "techResonance": 18590,
                    "transmuteCores": 30
                },
                "35869301": {
                    "atk": 2816046,
                    "awakeningCores": 55,
                    "chipsCount": 149,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 277,
                    "techResonance": 25800,
                    "transmuteCores": 34
                },
                "36484758": {
                    "atk": 2262220,
                    "awakeningCores": 79,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "techResonance": 6220,
                    "transmuteCores": 6
                },
                "40001195": {
                    "atk": 3756356,
                    "awakeningCores": 217,
                    "chipsCount": 185,
                    "eeBestScore": null,
                    "name": "Ӂ-ShhImB☆tm☆n",
                    "relicCores": 313,
                    "techResonance": 32850,
                    "transmuteCores": 54
                },
                "41742773": {
                    "atk": 1789705,
                    "awakeningCores": 35,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "techResonance": 15540,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2563279,
                    "awakeningCores": 86,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 137,
                    "techResonance": 17740,
                    "transmuteCores": 38
                },
                "59566866": {
                    "atk": 2536024,
                    "awakeningCores": 95,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 171,
                    "techResonance": 19470,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 4327453,
                    "awakeningCores": 243,
                    "chipsCount": 221,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 383,
                    "techResonance": 37800,
                    "transmuteCores": 68
                },
                "61865023": {
                    "atk": 2881939,
                    "awakeningCores": 95,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "RexPanda",
                    "relicCores": 181,
                    "techResonance": 19740,
                    "transmuteCores": 19
                },
                "64676255": {
                    "atk": 2642406,
                    "awakeningCores": 93,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 159,
                    "techResonance": 17520,
                    "transmuteCores": 28
                },
                "66607264": {
                    "atk": 2657386,
                    "awakeningCores": 76,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 173,
                    "techResonance": 14160,
                    "transmuteCores": 30
                },
                "70603922": {
                    "atk": 2054625,
                    "awakeningCores": 104,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 138,
                    "techResonance": 17090,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2368619,
                    "awakeningCores": 72,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 143,
                    "techResonance": 11690,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2660716,
                    "awakeningCores": 132,
                    "chipsCount": 111,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 179,
                    "techResonance": 23370,
                    "transmuteCores": 60
                },
                "75174428": {
                    "atk": 2468207,
                    "awakeningCores": 154,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 192,
                    "techResonance": 20310,
                    "transmuteCores": 12
                },
                "79510960": {
                    "atk": 2407989,
                    "awakeningCores": 88,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 185,
                    "techResonance": 17300,
                    "transmuteCores": 11
                },
                "80018314": {
                    "atk": 2034560,
                    "awakeningCores": 113,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 185,
                    "techResonance": 19950,
                    "transmuteCores": 8
                },
                "80972473": {
                    "atk": 3294265,
                    "awakeningCores": 151,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 190,
                    "techResonance": 25470,
                    "transmuteCores": 50
                },
                "83339881": {
                    "atk": 3796667,
                    "awakeningCores": 185,
                    "chipsCount": 170,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "techResonance": 31360,
                    "transmuteCores": 72
                },
                "83861839": {
                    "atk": 2482875,
                    "awakeningCores": 54,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "techResonance": 15260,
                    "transmuteCores": 38
                },
                "87244358": {
                    "atk": 3361608,
                    "awakeningCores": 169,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "techResonance": 28470,
                    "transmuteCores": 48
                },
                "87954282": {
                    "atk": 2691346,
                    "awakeningCores": 121,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "techResonance": 22210,
                    "transmuteCores": 80
                },
                "88203044": {
                    "atk": 2560842,
                    "awakeningCores": 71,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "techResonance": 16490,
                    "transmuteCores": 26
                },
                "89511116": {
                    "atk": 2289245,
                    "awakeningCores": 93,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "techResonance": 16490,
                    "transmuteCores": 22
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 84827885,
            "totalAwakeningCores": 3623,
            "totalChips": 2703,
            "totalEe": null,
            "totalRelicCores": 6057,
            "totalTechResonance": 641060,
            "totalTransmuteCores": 1178
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

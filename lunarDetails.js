// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-10-01
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "36133": {
            "clanId": 36133,
            "lunarPoints": 1530,
            "members": {
                "101700159": {
                    "atk": 3741006,
                    "chipsCount": 129,
                    "eeBestScore": null,
                    "name": "MisterKαρσηe",
                    "relicCores": 235,
                    "transmuteCores": 80
                },
                "101887981": {
                    "atk": 2470082,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "Coral25",
                    "relicCores": 160,
                    "transmuteCores": 44
                },
                "103047705": {
                    "atk": 1827016,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Eternal1111111",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "110803101": {
                    "atk": 2245272,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "StePalᴬᴾ",
                    "relicCores": 103,
                    "transmuteCores": 58
                },
                "112124906": {
                    "atk": 2986274,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "Apecliffe",
                    "relicCores": 150,
                    "transmuteCores": 34
                },
                "117629595": {
                    "atk": 2528141,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "LanaDelGrey",
                    "relicCores": 142,
                    "transmuteCores": 50
                },
                "121559863": {
                    "atk": 662355,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "NutJOB",
                    "relicCores": 22,
                    "transmuteCores": 10
                },
                "122001445": {
                    "atk": 2720,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Player 122001445",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "13101901": {
                    "atk": 3124733,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "DELEET",
                    "relicCores": 176,
                    "transmuteCores": 44
                },
                "13454901": {
                    "atk": 2789254,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "ÇovĩD",
                    "relicCores": 150,
                    "transmuteCores": 58
                },
                "14826352": {
                    "atk": 3379852,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "LilZomberᴬᴾ",
                    "relicCores": 156,
                    "transmuteCores": 62
                },
                "20995153": {
                    "atk": 2492514,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "PlayAndWork",
                    "relicCores": 169,
                    "transmuteCores": 28
                },
                "22652836": {
                    "atk": 2487671,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "E12ᴬᴾ",
                    "relicCores": 114,
                    "transmuteCores": 34
                },
                "27794857": {
                    "atk": 2590865,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "itzacr0wᴬᴾ",
                    "relicCores": 116,
                    "transmuteCores": 54
                },
                "40451267": {
                    "atk": 2473234,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "x10baᴬᴾ",
                    "relicCores": 144,
                    "transmuteCores": 46
                },
                "42165985": {
                    "atk": 2233543,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "Maxi20",
                    "relicCores": 127,
                    "transmuteCores": 42
                },
                "48207118": {
                    "atk": 3010213,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "Ditty76ᴬᴾ",
                    "relicCores": 218,
                    "transmuteCores": 76
                },
                "49174601": {
                    "atk": 3120733,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Neubs123ᴬᴾ",
                    "relicCores": 223,
                    "transmuteCores": 62
                },
                "49569454": {
                    "atk": 3010988,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "A҉n҉dersonᴬᴾ",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "51541315": {
                    "atk": 2234943,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Yoloboybhnoob",
                    "relicCores": 129,
                    "transmuteCores": 19
                },
                "53478198": {
                    "atk": 3414413,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "Cachezᴬᴾ",
                    "relicCores": 236,
                    "transmuteCores": 68
                },
                "55198766": {
                    "atk": 2613215,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Mrjli",
                    "relicCores": 173,
                    "transmuteCores": 46
                },
                "56334128": {
                    "atk": 2172319,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "AisperWine",
                    "relicCores": 140,
                    "transmuteCores": 48
                },
                "58601965": {
                    "atk": 3882023,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "Kenpachi714ᴬᴾ",
                    "relicCores": 206,
                    "transmuteCores": 86
                },
                "60295176": {
                    "atk": 2492152,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "jasperNL",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "62770270": {
                    "atk": 2651539,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "xTheBHox",
                    "relicCores": 146,
                    "transmuteCores": 28
                },
                "64212518": {
                    "atk": 2652850,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "Ossy77",
                    "relicCores": 188,
                    "transmuteCores": 42
                },
                "66959366": {
                    "atk": 2424775,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "rbui",
                    "relicCores": 185,
                    "transmuteCores": 39
                },
                "67647434": {
                    "atk": 2712904,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "OneKillFill",
                    "relicCores": 161,
                    "transmuteCores": 42
                },
                "69017214": {
                    "atk": 2233051,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "Tysiᴬᴾ",
                    "relicCores": 127,
                    "transmuteCores": 35
                },
                "71326042": {
                    "atk": 2477150,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "Genius148",
                    "relicCores": 180,
                    "transmuteCores": 38
                },
                "75724179": {
                    "atk": 2403635,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "KinZo",
                    "relicCores": 179,
                    "transmuteCores": 36
                },
                "78832533": {
                    "atk": 2904432,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "Crykrhn",
                    "relicCores": 217,
                    "transmuteCores": 34
                },
                "82107345": {
                    "atk": 3613270,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "rdm87ᴬᴾ",
                    "relicCores": 197,
                    "transmuteCores": 80
                },
                "85586346": {
                    "atk": 2320132,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "Ligmaknots",
                    "relicCores": 151,
                    "transmuteCores": 54
                },
                "88487468": {
                    "atk": 2244197,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "CNgF2P",
                    "relicCores": 104,
                    "transmuteCores": 40
                },
                "88645031": {
                    "atk": 2716166,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "HeLeftThe994Me2",
                    "relicCores": 261,
                    "transmuteCores": 38
                },
                "88960447": {
                    "atk": 2528196,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "KweezyDono",
                    "relicCores": 107,
                    "transmuteCores": 44
                },
                "90037573": {
                    "atk": 3671360,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "Moozzᴬᴾ",
                    "relicCores": 197,
                    "transmuteCores": 72
                }
            },
            "name": "Apoтнeosis",
            "totalAtk": 85683772,
            "totalChips": 2219,
            "totalEe": null,
            "totalRelicCores": 5298,
            "totalTransmuteCores": 1552
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1495,
            "members": {
                "100876140": {
                    "atk": 2366666,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "102263647": {
                    "atk": 2617797,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2922443,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 256,
                    "transmuteCores": 60
                },
                "106162623": {
                    "atk": 1785298,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 16
                },
                "10754439": {
                    "atk": 2057763,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2337382,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 191,
                    "transmuteCores": 34
                },
                "108860725": {
                    "atk": 2500988,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 161,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 1933552,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 119,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1970539,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 124,
                    "transmuteCores": 38
                },
                "11463573": {
                    "atk": 1839961,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 119,
                    "transmuteCores": 44
                },
                "115742768": {
                    "atk": 49246,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2581350,
                    "chipsCount": 124,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 226,
                    "transmuteCores": 32
                },
                "18297536": {
                    "atk": 1788434,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "26277677": {
                    "atk": 2233093,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 135,
                    "transmuteCores": 12
                },
                "29321884": {
                    "atk": 3133413,
                    "chipsCount": 86,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 215,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1629564,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 126,
                    "transmuteCores": 40
                },
                "30658936": {
                    "atk": 2295329,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 20
                },
                "32556489": {
                    "atk": 1947955,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 118,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 3000773,
                    "chipsCount": 125,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 260,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 2059241,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 1625381,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2398786,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 134,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2164142,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 166,
                    "transmuteCores": 8
                },
                "60687252": {
                    "atk": 4042978,
                    "chipsCount": 207,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 64
                },
                "64676255": {
                    "atk": 2498067,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 151,
                    "transmuteCores": 24
                },
                "66607264": {
                    "atk": 2241855,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 165,
                    "transmuteCores": 25
                },
                "70603922": {
                    "atk": 1795406,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2066602,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 138,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2329519,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 172,
                    "transmuteCores": 46
                },
                "75174428": {
                    "atk": 2362703,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 187,
                    "transmuteCores": 11
                },
                "79510960": {
                    "atk": 1805245,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 181,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1783611,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 175,
                    "transmuteCores": 6
                },
                "80972473": {
                    "atk": 3192036,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 178,
                    "transmuteCores": 44
                },
                "83339881": {
                    "atk": 3442205,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 58
                },
                "83861839": {
                    "atk": 2252123,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 116,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 2865520,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 200,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2575290,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 72
                },
                "88203044": {
                    "atk": 2342051,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 24
                },
                "89511116": {
                    "atk": 2147490,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 16
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 74879651,
            "totalChips": 2189,
            "totalEe": null,
            "totalRelicCores": 5585,
            "totalTransmuteCores": 1025
        },
        "51961": {
            "clanId": 51961,
            "lunarPoints": 1530,
            "members": {
                "110440156": {
                    "atk": 1203285,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "BEST_FOR_BEST",
                    "relicCores": 100,
                    "transmuteCores": 4
                },
                "115722927": {
                    "atk": 2212,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "ralph Clo zachy",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "12488412": {
                    "atk": 922693,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "hantori",
                    "relicCores": 69,
                    "transmuteCores": 0
                },
                "15124466": {
                    "atk": 1669487,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "식초식초",
                    "relicCores": 180,
                    "transmuteCores": 10
                },
                "17044959": {
                    "atk": 3062518,
                    "chipsCount": 151,
                    "eeBestScore": null,
                    "name": "free⠀",
                    "relicCores": 219,
                    "transmuteCores": 40
                },
                "26373387": {
                    "atk": 2359096,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "스피츠쫑",
                    "relicCores": 145,
                    "transmuteCores": 18
                },
                "30042324": {
                    "atk": 3333712,
                    "chipsCount": 139,
                    "eeBestScore": null,
                    "name": "혼슥",
                    "relicCores": 288,
                    "transmuteCores": 34
                },
                "31876002": {
                    "atk": 3102407,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "아부라타부라",
                    "relicCores": 171,
                    "transmuteCores": 32
                },
                "32610811": {
                    "atk": 3003760,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "무사마씸",
                    "relicCores": 220,
                    "transmuteCores": 35
                },
                "32662713": {
                    "atk": 1408913,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "Player 32662713",
                    "relicCores": 119,
                    "transmuteCores": 28
                },
                "32833793": {
                    "atk": 1479728,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "구일범",
                    "relicCores": 128,
                    "transmuteCores": 25
                },
                "33153023": {
                    "atk": 2318245,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "casim",
                    "relicCores": 139,
                    "transmuteCores": 6
                },
                "34835793": {
                    "atk": 2341916,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "베놈",
                    "relicCores": 141,
                    "transmuteCores": 4
                },
                "36739028": {
                    "atk": 1973862,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "hidden.",
                    "relicCores": 85,
                    "transmuteCores": 0
                },
                "41125551": {
                    "atk": 2516032,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Player 41125551",
                    "relicCores": 169,
                    "transmuteCores": 5
                },
                "41652594": {
                    "atk": 2553009,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "좐빠",
                    "relicCores": 153,
                    "transmuteCores": 16
                },
                "44082826": {
                    "atk": 2771131,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "나다라파파",
                    "relicCores": 157,
                    "transmuteCores": 24
                },
                "44520424": {
                    "atk": 2340608,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "가흘",
                    "relicCores": 142,
                    "transmuteCores": 34
                },
                "44711786": {
                    "atk": 1059513,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "Player 44711786",
                    "relicCores": 196,
                    "transmuteCores": 0
                },
                "45624481": {
                    "atk": 2384269,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "유일한찬이",
                    "relicCores": 129,
                    "transmuteCores": 14
                },
                "46537157": {
                    "atk": 2369793,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "상재",
                    "relicCores": 109,
                    "transmuteCores": 18
                },
                "46556731": {
                    "atk": 2397185,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "육오사",
                    "relicCores": 159,
                    "transmuteCores": 6
                },
                "48359772": {
                    "atk": 1891998,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "zxp",
                    "relicCores": 201,
                    "transmuteCores": 8
                },
                "51649872": {
                    "atk": 3201103,
                    "chipsCount": 144,
                    "eeBestScore": null,
                    "name": "things",
                    "relicCores": 265,
                    "transmuteCores": 30
                },
                "52535773": {
                    "atk": 2002904,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "Player 52535773",
                    "relicCores": 142,
                    "transmuteCores": 0
                },
                "53600249": {
                    "atk": 1678636,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "공식시라소니",
                    "relicCores": 167,
                    "transmuteCores": 6
                },
                "55767535": {
                    "atk": 2863756,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "오니거니",
                    "relicCores": 174,
                    "transmuteCores": 34
                },
                "57811119": {
                    "atk": 2247748,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "주로특공대",
                    "relicCores": 119,
                    "transmuteCores": 38
                },
                "59103816": {
                    "atk": 3580848,
                    "chipsCount": 158,
                    "eeBestScore": null,
                    "name": "Player 59103816",
                    "relicCores": 224,
                    "transmuteCores": 46
                },
                "60301917": {
                    "atk": 1185067,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "kmailos",
                    "relicCores": 44,
                    "transmuteCores": 0
                },
                "74273884": {
                    "atk": 2249496,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "탕탕닌자단",
                    "relicCores": 200,
                    "transmuteCores": 34
                },
                "76202619": {
                    "atk": 2774841,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "ㅇㅎㅇ멋짐",
                    "relicCores": 236,
                    "transmuteCores": 56
                },
                "83659665": {
                    "atk": 2407213,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "새의팜83659",
                    "relicCores": 131,
                    "transmuteCores": 13
                },
                "83935567": {
                    "atk": 1778107,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "차차몽",
                    "relicCores": 111,
                    "transmuteCores": 10
                },
                "84758956": {
                    "atk": 2569970,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "☆샘이나☆",
                    "relicCores": 153,
                    "transmuteCores": 34
                },
                "85816518": {
                    "atk": 2595874,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "좀비여포",
                    "relicCores": 151,
                    "transmuteCores": 38
                }
            },
            "name": "페어리테일",
            "totalAtk": 73819252,
            "totalChips": 1899,
            "totalEe": null,
            "totalRelicCores": 5129,
            "totalTransmuteCores": 700
        },
        "52930": {
            "clanId": 52930,
            "lunarPoints": 1660,
            "members": {
                "101979767": {
                    "atk": 2368016,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "Nettii",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "104459557": {
                    "atk": 2660212,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "Player 104459557",
                    "relicCores": 151,
                    "transmuteCores": 50
                },
                "107967835": {
                    "atk": 2468872,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "Akazaà",
                    "relicCores": 182,
                    "transmuteCores": 60
                },
                "117906428": {
                    "atk": 2403501,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Boscini",
                    "relicCores": 137,
                    "transmuteCores": 48
                },
                "16875936": {
                    "atk": 3421562,
                    "chipsCount": 115,
                    "eeBestScore": null,
                    "name": "summie",
                    "relicCores": 203,
                    "transmuteCores": 66
                },
                "22238127": {
                    "atk": 2709732,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "ImInPhiN",
                    "relicCores": 119,
                    "transmuteCores": 29
                },
                "23943500": {
                    "atk": 2588683,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "Artims",
                    "relicCores": 172,
                    "transmuteCores": 50
                },
                "31813537": {
                    "atk": 3549832,
                    "chipsCount": 123,
                    "eeBestScore": null,
                    "name": "JJJJ8988",
                    "relicCores": 261,
                    "transmuteCores": 48
                },
                "32303936": {
                    "atk": 2335139,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "깡현준",
                    "relicCores": 193,
                    "transmuteCores": 20
                },
                "32499179": {
                    "atk": 3501965,
                    "chipsCount": 176,
                    "eeBestScore": null,
                    "name": "Nero619",
                    "relicCores": 288,
                    "transmuteCores": 76
                },
                "33865523": {
                    "atk": 1824654,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "Rebbo",
                    "relicCores": 132,
                    "transmuteCores": 0
                },
                "37163997": {
                    "atk": 3312685,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "smileywest",
                    "relicCores": 186,
                    "transmuteCores": 50
                },
                "38443949": {
                    "atk": 2787772,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "acustR",
                    "relicCores": 137,
                    "transmuteCores": 30
                },
                "38546361": {
                    "atk": 3686027,
                    "chipsCount": 166,
                    "eeBestScore": null,
                    "name": "Zepreme",
                    "relicCores": 230,
                    "transmuteCores": 64
                },
                "40783437": {
                    "atk": 3872891,
                    "chipsCount": 199,
                    "eeBestScore": null,
                    "name": "Tensa Zangetsu",
                    "relicCores": 314,
                    "transmuteCores": 84
                },
                "45260728": {
                    "atk": 3468534,
                    "chipsCount": 201,
                    "eeBestScore": null,
                    "name": "ChalupaBatman",
                    "relicCores": 382,
                    "transmuteCores": 59
                },
                "49958143": {
                    "atk": 2767402,
                    "chipsCount": 118,
                    "eeBestScore": null,
                    "name": "Boushehri",
                    "relicCores": 146,
                    "transmuteCores": 24
                },
                "51827804": {
                    "atk": 3361586,
                    "chipsCount": 167,
                    "eeBestScore": null,
                    "name": "VTDemonz",
                    "relicCores": 282,
                    "transmuteCores": 76
                },
                "54882629": {
                    "atk": 5049347,
                    "chipsCount": 263,
                    "eeBestScore": null,
                    "name": "WildturtleNA",
                    "relicCores": 434,
                    "transmuteCores": 106
                },
                "56064403": {
                    "atk": 3164094,
                    "chipsCount": 194,
                    "eeBestScore": null,
                    "name": "AlphaMAX",
                    "relicCores": 227,
                    "transmuteCores": 54
                },
                "56398592": {
                    "atk": 4549126,
                    "chipsCount": 258,
                    "eeBestScore": null,
                    "name": "ISR┃Flаvis",
                    "relicCores": 362,
                    "transmuteCores": 100
                },
                "57086711": {
                    "atk": 2891268,
                    "chipsCount": 94,
                    "eeBestScore": null,
                    "name": "ㅿOHㅿ",
                    "relicCores": 190,
                    "transmuteCores": 48
                },
                "61126442": {
                    "atk": 6233808,
                    "chipsCount": 614,
                    "eeBestScore": null,
                    "name": "Hirá",
                    "relicCores": 498,
                    "transmuteCores": 180
                },
                "62373130": {
                    "atk": 2662089,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "7:06",
                    "relicCores": 149,
                    "transmuteCores": 68
                },
                "62450305": {
                    "atk": 2785535,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "DҜ·來都來了",
                    "relicCores": 181,
                    "transmuteCores": 30
                },
                "62534771": {
                    "atk": 2215588,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "ScatPackRT88",
                    "relicCores": 138,
                    "transmuteCores": 25
                },
                "69182688": {
                    "atk": 4091162,
                    "chipsCount": 232,
                    "eeBestScore": null,
                    "name": "Dominga",
                    "relicCores": 240,
                    "transmuteCores": 84
                },
                "70027463": {
                    "atk": 1703846,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "aflare",
                    "relicCores": 180,
                    "transmuteCores": 30
                },
                "71979378": {
                    "atk": 2661418,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "kiteNwipe",
                    "relicCores": 192,
                    "transmuteCores": 28
                },
                "73148747": {
                    "atk": 3162932,
                    "chipsCount": 93,
                    "eeBestScore": null,
                    "name": "laazer",
                    "relicCores": 160,
                    "transmuteCores": 55
                },
                "74186839": {
                    "atk": 2727092,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "doody0",
                    "relicCores": 147,
                    "transmuteCores": 54
                },
                "74959780": {
                    "atk": 2995573,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "RaiZu",
                    "relicCores": 172,
                    "transmuteCores": 38
                },
                "79728026": {
                    "atk": 1914894,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "Penovski",
                    "relicCores": 128,
                    "transmuteCores": 34
                },
                "81887339": {
                    "atk": 3404753,
                    "chipsCount": 138,
                    "eeBestScore": null,
                    "name": "ᴱᴸᴷᴰᵀ",
                    "relicCores": 152,
                    "transmuteCores": 50
                },
                "81973802": {
                    "atk": 3775421,
                    "chipsCount": 201,
                    "eeBestScore": null,
                    "name": "ℂ`",
                    "relicCores": 321,
                    "transmuteCores": 84
                },
                "87160948": {
                    "atk": 6447101,
                    "chipsCount": 524,
                    "eeBestScore": null,
                    "name": "L-7",
                    "relicCores": 498,
                    "transmuteCores": 224
                },
                "87414136": {
                    "atk": 2596483,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "pokerⓉⒽⒸfan",
                    "relicCores": 147,
                    "transmuteCores": 34
                },
                "87945646": {
                    "atk": 3405187,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "funaabear",
                    "relicCores": 208,
                    "transmuteCores": 66
                },
                "88874944": {
                    "atk": 2541001,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "Rohan09",
                    "relicCores": 148,
                    "transmuteCores": 45
                },
                "89520159": {
                    "atk": 2549191,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "Uckman",
                    "relicCores": 148,
                    "transmuteCores": 44
                }
            },
            "name": "Chicken Clan",
            "totalAtk": 104291272,
            "totalChips": 4946,
            "totalEe": null,
            "totalRelicCores": 7337,
            "totalTransmuteCores": 2099
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

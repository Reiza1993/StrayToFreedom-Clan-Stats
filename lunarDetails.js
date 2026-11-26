// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-11-26
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "10229": {
            "clanId": 10229,
            "ladder": {
                "change": -20,
                "ladderAt": "2026-W48",
                "lastPlace": 4,
                "lunarPoints": 1665,
                "rank": 42,
                "rankFactor": 0.94,
                "secretScore": 1565.1,
                "weeks": 1
            },
            "lunarPoints": 1665,
            "members": {
                "11726766": {
                    "atk": 3117045,
                    "awakeningCores": 141,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "ƵㆍJonatan",
                    "relicCores": 179,
                    "techResonance": 19850,
                    "transmuteCores": 42
                },
                "119394801": {
                    "atk": 1574967,
                    "awakeningCores": 20,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "Ƶ•Lakosti",
                    "relicCores": 57,
                    "techResonance": 5240,
                    "transmuteCores": 2
                },
                "123653417": {
                    "atk": 44756,
                    "awakeningCores": null,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "CampoMinado",
                    "relicCores": 0,
                    "techResonance": null,
                    "transmuteCores": 0
                },
                "22658790": {
                    "atk": 2879492,
                    "awakeningCores": 109,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "ƵㆍB҉Яüꋊ0",
                    "relicCores": 189,
                    "techResonance": 22780,
                    "transmuteCores": 54
                },
                "25640793": {
                    "atk": 3465594,
                    "awakeningCores": 145,
                    "chipsCount": 164,
                    "eeBestScore": null,
                    "name": "Ƶ | SrKaioh",
                    "relicCores": 181,
                    "techResonance": 28280,
                    "transmuteCores": 80
                },
                "29180674": {
                    "atk": 2733672,
                    "awakeningCores": 148,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "ƵㆍSoulless",
                    "relicCores": 208,
                    "techResonance": 25700,
                    "transmuteCores": 16
                },
                "33257478": {
                    "atk": 3667297,
                    "awakeningCores": 222,
                    "chipsCount": 153,
                    "eeBestScore": null,
                    "name": "EleKTraVoTƵ",
                    "relicCores": 298,
                    "techResonance": 29300,
                    "transmuteCores": 64
                },
                "35377329": {
                    "atk": 3635516,
                    "awakeningCores": 201,
                    "chipsCount": 165,
                    "eeBestScore": null,
                    "name": "Ƶ•mahdi",
                    "relicCores": 253,
                    "techResonance": 29700,
                    "transmuteCores": 54
                },
                "39660658": {
                    "atk": 3952647,
                    "awakeningCores": 231,
                    "chipsCount": 192,
                    "eeBestScore": null,
                    "name": "Clebinho0303",
                    "relicCores": 311,
                    "techResonance": 31050,
                    "transmuteCores": 72
                },
                "40460697": {
                    "atk": 3492803,
                    "awakeningCores": 150,
                    "chipsCount": 123,
                    "eeBestScore": null,
                    "name": "Ƶ☆$4nTh$☆Ƶ",
                    "relicCores": 190,
                    "techResonance": 29430,
                    "transmuteCores": 72
                },
                "47614404": {
                    "atk": 3261726,
                    "awakeningCores": 168,
                    "chipsCount": 192,
                    "eeBestScore": null,
                    "name": "Ƶ•TM89",
                    "relicCores": 190,
                    "techResonance": 28560,
                    "transmuteCores": 68
                },
                "48317751": {
                    "atk": 3540821,
                    "awakeningCores": 193,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "ƵㅤRobben",
                    "relicCores": 236,
                    "techResonance": 27600,
                    "transmuteCores": 72
                },
                "52102683": {
                    "atk": 3415796,
                    "awakeningCores": 193,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "Ƶ•B@NE",
                    "relicCores": 256,
                    "techResonance": 24400,
                    "transmuteCores": 40
                },
                "52123821": {
                    "atk": 2341774,
                    "awakeningCores": 199,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "Ƶakk",
                    "relicCores": 118,
                    "techResonance": 20640,
                    "transmuteCores": 20
                },
                "52460229": {
                    "atk": 2499605,
                    "awakeningCores": 123,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "Ƶㅤmp",
                    "relicCores": 168,
                    "techResonance": 24860,
                    "transmuteCores": 30
                },
                "52752805": {
                    "atk": 2427025,
                    "awakeningCores": 120,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "ƵㆍZØRDΛN",
                    "relicCores": 153,
                    "techResonance": 24330,
                    "transmuteCores": 40
                },
                "53248171": {
                    "atk": 2839251,
                    "awakeningCores": 155,
                    "chipsCount": 151,
                    "eeBestScore": null,
                    "name": "ƵKobaTeruakiƵ",
                    "relicCores": 142,
                    "techResonance": 26260,
                    "transmuteCores": 72
                },
                "54916735": {
                    "atk": 3386279,
                    "awakeningCores": 230,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "QueméRenanSantoƵ",
                    "relicCores": 257,
                    "techResonance": 26850,
                    "transmuteCores": 73
                },
                "56328784": {
                    "atk": 4326169,
                    "awakeningCores": 217,
                    "chipsCount": 238,
                    "eeBestScore": null,
                    "name": "Ƶ・Bαnkαi",
                    "relicCores": 333,
                    "techResonance": 34800,
                    "transmuteCores": 104
                },
                "56520639": {
                    "atk": 3740829,
                    "awakeningCores": 230,
                    "chipsCount": 169,
                    "eeBestScore": null,
                    "name": "ƵㆍLindaa:)",
                    "relicCores": 305,
                    "techResonance": 33600,
                    "transmuteCores": 60
                },
                "57609990": {
                    "atk": 3055872,
                    "awakeningCores": 145,
                    "chipsCount": 165,
                    "eeBestScore": null,
                    "name": "RogérinhoDaRabi",
                    "relicCores": 182,
                    "techResonance": 28130,
                    "transmuteCores": 76
                },
                "58364274": {
                    "atk": 3034158,
                    "awakeningCores": 125,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "ƵㅤRabbitㅤƵ",
                    "relicCores": 148,
                    "techResonance": 22830,
                    "transmuteCores": 50
                },
                "59076220": {
                    "atk": 2611771,
                    "awakeningCores": 158,
                    "chipsCount": 105,
                    "eeBestScore": null,
                    "name": "ƵㆍAllanBlack",
                    "relicCores": 208,
                    "techResonance": 28590,
                    "transmuteCores": 58
                },
                "59162455": {
                    "atk": 3234987,
                    "awakeningCores": 171,
                    "chipsCount": 139,
                    "eeBestScore": null,
                    "name": "Ƶ ㆍYonƊaimé",
                    "relicCores": 164,
                    "techResonance": 27410,
                    "transmuteCores": 58
                },
                "61961216": {
                    "atk": 2950846,
                    "awakeningCores": 130,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "ERICK•Ƶ",
                    "relicCores": 220,
                    "techResonance": 19410,
                    "transmuteCores": 30
                },
                "66983925": {
                    "atk": 2701856,
                    "awakeningCores": 177,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "FlameƵ ",
                    "relicCores": 305,
                    "techResonance": 23720,
                    "transmuteCores": 30
                },
                "67379369": {
                    "atk": 2950009,
                    "awakeningCores": 112,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "Ƶ•DrakeDonavan",
                    "relicCores": 150,
                    "techResonance": 21350,
                    "transmuteCores": 42
                },
                "67463447": {
                    "atk": 2338587,
                    "awakeningCores": 80,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "Bunitaumᵀᴺᵀ",
                    "relicCores": 138,
                    "techResonance": 16300,
                    "transmuteCores": 28
                },
                "71753132": {
                    "atk": 3247120,
                    "awakeningCores": 171,
                    "chipsCount": 163,
                    "eeBestScore": null,
                    "name": "Ƶ•Ghoruk",
                    "relicCores": 200,
                    "techResonance": 29610,
                    "transmuteCores": 38
                },
                "72795139": {
                    "atk": 3543078,
                    "awakeningCores": 193,
                    "chipsCount": 183,
                    "eeBestScore": null,
                    "name": "ƵㆍRafa",
                    "relicCores": 250,
                    "techResonance": 33630,
                    "transmuteCores": 80
                },
                "73472977": {
                    "atk": 2392285,
                    "awakeningCores": 95,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "ShakugantzGX",
                    "relicCores": 163,
                    "techResonance": 13400,
                    "transmuteCores": 38
                },
                "74583223": {
                    "atk": 3727947,
                    "awakeningCores": 185,
                    "chipsCount": 151,
                    "eeBestScore": null,
                    "name": "Ƶathroth",
                    "relicCores": 234,
                    "techResonance": 27500,
                    "transmuteCores": 80
                },
                "77376513": {
                    "atk": 3410372,
                    "awakeningCores": 217,
                    "chipsCount": 197,
                    "eeBestScore": null,
                    "name": "ByMaiKㆍƵㅤ",
                    "relicCores": 248,
                    "techResonance": 30960,
                    "transmuteCores": 34
                },
                "77742600": {
                    "atk": 2798733,
                    "awakeningCores": 157,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "BorghiƵㅤ",
                    "relicCores": 174,
                    "techResonance": 24850,
                    "transmuteCores": 72
                },
                "78078126": {
                    "atk": 3469299,
                    "awakeningCores": 184,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "ƵㅤGUIXUMAㅤƵ",
                    "relicCores": 242,
                    "techResonance": 26390,
                    "transmuteCores": 54
                },
                "78343372": {
                    "atk": 4041163,
                    "awakeningCores": 237,
                    "chipsCount": 152,
                    "eeBestScore": null,
                    "name": "Ƶ-Chrono-Ƶ",
                    "relicCores": 240,
                    "techResonance": 26500,
                    "transmuteCores": 80
                },
                "78578892": {
                    "atk": 2896672,
                    "awakeningCores": 137,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "Ƶ_€$QU€L€TO",
                    "relicCores": 174,
                    "techResonance": 20400,
                    "transmuteCores": 38
                },
                "79919710": {
                    "atk": 5059673,
                    "awakeningCores": 277,
                    "chipsCount": 295,
                    "eeBestScore": null,
                    "name": "CloudƵ",
                    "relicCores": 313,
                    "techResonance": 30000,
                    "transmuteCores": 104
                },
                "83891931": {
                    "atk": 2534900,
                    "awakeningCores": 148,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Ƶ•P1",
                    "relicCores": 181,
                    "techResonance": 23360,
                    "transmuteCores": 34
                },
                "89091171": {
                    "atk": 3183052,
                    "awakeningCores": 151,
                    "chipsCount": 147,
                    "eeBestScore": null,
                    "name": "BABAYAGAƵㅤ",
                    "relicCores": 190,
                    "techResonance": 30730,
                    "transmuteCores": 80
                }
            },
            "name": "Ƶ  Warriors",
            "totalAtk": 102057918,
            "totalAwakeningCores": 5531,
            "totalChips": 4522,
            "totalEe": null,
            "totalRelicCores": 6915,
            "totalTechResonance": 838930,
            "totalTransmuteCores": 1915
        },
        "15565": {
            "clanId": 15565,
            "ladder": {
                "change": -10,
                "ladderAt": "2026-W48",
                "lastPlace": 3,
                "lunarPoints": 1635,
                "rank": 63,
                "rankFactor": 0.96,
                "secretScore": 1569.6,
                "weeks": 1
            },
            "lunarPoints": 1635,
            "members": {
                "101903512": {
                    "atk": 2763818,
                    "awakeningCores": 141,
                    "chipsCount": 124,
                    "eeBestScore": null,
                    "name": "_SiêuNhânĐen_",
                    "relicCores": 226,
                    "techResonance": 26160,
                    "transmuteCores": 38
                },
                "10787637": {
                    "atk": 2678098,
                    "awakeningCores": 157,
                    "chipsCount": 137,
                    "eeBestScore": null,
                    "name": "TTNTT",
                    "relicCores": 248,
                    "techResonance": 29690,
                    "transmuteCores": 13
                },
                "118488634": {
                    "atk": 1174962,
                    "awakeningCores": 30,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "フィ_H5N1",
                    "relicCores": 124,
                    "techResonance": 6120,
                    "transmuteCores": 3
                },
                "13239501": {
                    "atk": 2494894,
                    "awakeningCores": 149,
                    "chipsCount": 115,
                    "eeBestScore": null,
                    "name": "BéBi",
                    "relicCores": 200,
                    "techResonance": 24330,
                    "transmuteCores": 17
                },
                "16351546": {
                    "atk": 2516260,
                    "awakeningCores": 133,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "Hooleesheett",
                    "relicCores": 206,
                    "techResonance": 25530,
                    "transmuteCores": 8
                },
                "16438264": {
                    "atk": 2571791,
                    "awakeningCores": 156,
                    "chipsCount": 102,
                    "eeBestScore": null,
                    "name": "IamYasuo",
                    "relicCores": 195,
                    "techResonance": 25230,
                    "transmuteCores": 11
                },
                "17150032": {
                    "atk": 2777470,
                    "awakeningCores": 147,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "TônHoaShen",
                    "relicCores": 169,
                    "techResonance": 22820,
                    "transmuteCores": 44
                },
                "17591202": {
                    "atk": 2945799,
                    "awakeningCores": 140,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "GiGaChⓐd",
                    "relicCores": 220,
                    "techResonance": 20250,
                    "transmuteCores": 28
                },
                "18401159": {
                    "atk": 3686366,
                    "awakeningCores": 216,
                    "chipsCount": 217,
                    "eeBestScore": null,
                    "name": "Sell.Acc.500$",
                    "relicCores": 245,
                    "techResonance": 33000,
                    "transmuteCores": 52
                },
                "19321580": {
                    "atk": 2402655,
                    "awakeningCores": 125,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "_SiêuNhânCam_",
                    "relicCores": 171,
                    "techResonance": 24660,
                    "transmuteCores": 30
                },
                "19426778": {
                    "atk": 2654381,
                    "awakeningCores": 140,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": "ɓɑɖɓσყ",
                    "relicCores": 207,
                    "techResonance": 23610,
                    "transmuteCores": 25
                },
                "19426976": {
                    "atk": 2643162,
                    "awakeningCores": 231,
                    "chipsCount": 148,
                    "eeBestScore": null,
                    "name": "B҉á҉n҉h҉B҉ao",
                    "relicCores": 147,
                    "techResonance": 31800,
                    "transmuteCores": 0
                },
                "20053889": {
                    "atk": 3447036,
                    "awakeningCores": 193,
                    "chipsCount": 165,
                    "eeBestScore": null,
                    "name": "DTNズン",
                    "relicCores": 303,
                    "techResonance": 26750,
                    "transmuteCores": 42
                },
                "20230362": {
                    "atk": 3212567,
                    "awakeningCores": 140,
                    "chipsCount": 128,
                    "eeBestScore": null,
                    "name": "Nekoᵛᴺ",
                    "relicCores": 213,
                    "techResonance": 25530,
                    "transmuteCores": 5
                },
                "21099028": {
                    "atk": 2825453,
                    "awakeningCores": 176,
                    "chipsCount": 112,
                    "eeBestScore": null,
                    "name": "Carrotㅤㅤㅤㅤ",
                    "relicCores": 240,
                    "techResonance": 26670,
                    "transmuteCores": 50
                },
                "21505178": {
                    "atk": 2307056,
                    "awakeningCores": 64,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "VNChicken3",
                    "relicCores": 190,
                    "techResonance": 17520,
                    "transmuteCores": 4
                },
                "21735616": {
                    "atk": 2033604,
                    "awakeningCores": 117,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "SuMi",
                    "relicCores": 182,
                    "techResonance": 20640,
                    "transmuteCores": 7
                },
                "23748293": {
                    "atk": 2661800,
                    "awakeningCores": 148,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "²ᵏ⁵",
                    "relicCores": 204,
                    "techResonance": 21500,
                    "transmuteCores": 30
                },
                "25527317": {
                    "atk": 2778812,
                    "awakeningCores": 142,
                    "chipsCount": 128,
                    "eeBestScore": null,
                    "name": "HợpHoanTông",
                    "relicCores": 220,
                    "techResonance": 26020,
                    "transmuteCores": 17
                },
                "25878414": {
                    "atk": 2648372,
                    "awakeningCores": 149,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": " ღღღ",
                    "relicCores": 149,
                    "techResonance": 25150,
                    "transmuteCores": 10
                },
                "26226892": {
                    "atk": 1434452,
                    "awakeningCores": 34,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "__BéHộtLu",
                    "relicCores": 129,
                    "techResonance": 7800,
                    "transmuteCores": 6
                },
                "26538017": {
                    "atk": 2778963,
                    "awakeningCores": 133,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "Archie",
                    "relicCores": 213,
                    "techResonance": 20370,
                    "transmuteCores": 30
                },
                "27028885": {
                    "atk": 3531442,
                    "awakeningCores": 193,
                    "chipsCount": 185,
                    "eeBestScore": null,
                    "name": "Giốngᵛᴺ",
                    "relicCores": 325,
                    "techResonance": 34950,
                    "transmuteCores": 34
                },
                "27495434": {
                    "atk": 2622303,
                    "awakeningCores": 157,
                    "chipsCount": 107,
                    "eeBestScore": null,
                    "name": "_SiêuNhânBạc_",
                    "relicCores": 196,
                    "techResonance": 26660,
                    "transmuteCores": 38
                },
                "28636012": {
                    "atk": 2699572,
                    "awakeningCores": 147,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Héo",
                    "relicCores": 171,
                    "techResonance": 20710,
                    "transmuteCores": 22
                },
                "29110701": {
                    "atk": 2543513,
                    "awakeningCores": 148,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "nthvn",
                    "relicCores": 236,
                    "techResonance": 25080,
                    "transmuteCores": 17
                },
                "31914113": {
                    "atk": 2651315,
                    "awakeningCores": 156,
                    "chipsCount": 127,
                    "eeBestScore": null,
                    "name": "VNChicken",
                    "relicCores": 220,
                    "techResonance": 26910,
                    "transmuteCores": 16
                },
                "32081630": {
                    "atk": 968298,
                    "awakeningCores": 42,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "IDILI",
                    "relicCores": 64,
                    "techResonance": 8020,
                    "transmuteCores": 0
                },
                "34665430": {
                    "atk": 2025574,
                    "awakeningCores": 93,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "BoyLangThangᵃ꜀",
                    "relicCores": 169,
                    "techResonance": 15680,
                    "transmuteCores": 25
                },
                "34747097": {
                    "atk": 2818353,
                    "awakeningCores": 168,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "KaBoy",
                    "relicCores": 254,
                    "techResonance": 27390,
                    "transmuteCores": 30
                },
                "36548181": {
                    "atk": 2870452,
                    "awakeningCores": 215,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "_SiêuNhânXanh_",
                    "relicCores": 283,
                    "techResonance": 30600,
                    "transmuteCores": 14
                },
                "37135292": {
                    "atk": 2659193,
                    "awakeningCores": 149,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "PhongHamster",
                    "relicCores": 228,
                    "techResonance": 25040,
                    "transmuteCores": 9
                },
                "38967928": {
                    "atk": 3081295,
                    "awakeningCores": 201,
                    "chipsCount": 172,
                    "eeBestScore": null,
                    "name": "_SiêuNhânĐỏ_",
                    "relicCores": 240,
                    "techResonance": 33780,
                    "transmuteCores": 62
                },
                "43914118": {
                    "atk": 2712847,
                    "awakeningCores": 176,
                    "chipsCount": 131,
                    "eeBestScore": null,
                    "name": "_SiêuNhânTrắng",
                    "relicCores": 244,
                    "techResonance": 27710,
                    "transmuteCores": 34
                },
                "51475886": {
                    "atk": 2584413,
                    "awakeningCores": 156,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "DinhTu",
                    "relicCores": 226,
                    "techResonance": 27480,
                    "transmuteCores": 24
                },
                "59216368": {
                    "atk": 2845624,
                    "awakeningCores": 145,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "Quá",
                    "relicCores": 269,
                    "techResonance": 27900,
                    "transmuteCores": 30
                },
                "60549746": {
                    "atk": 2406247,
                    "awakeningCores": 133,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "VNChicken3.6",
                    "relicCores": 218,
                    "techResonance": 24300,
                    "transmuteCores": 9
                },
                "62765080": {
                    "atk": 2795441,
                    "awakeningCores": 168,
                    "chipsCount": 124,
                    "eeBestScore": null,
                    "name": "_SiêuNhânVàng_",
                    "relicCores": 236,
                    "techResonance": 28090,
                    "transmuteCores": 46
                },
                "70366896": {
                    "atk": 2736861,
                    "awakeningCores": 162,
                    "chipsCount": 114,
                    "eeBestScore": null,
                    "name": "_SiêuNhânHồng_",
                    "relicCores": 208,
                    "techResonance": 24750,
                    "transmuteCores": 34
                },
                "77240411": {
                    "atk": 2854140,
                    "awakeningCores": 132,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "anhba1995",
                    "relicCores": 182,
                    "techResonance": 19320,
                    "transmuteCores": 34
                }
            },
            "name": "VNChicken",
            "totalAtk": 85080652,
            "totalAwakeningCores": 4899,
            "totalChips": 3754,
            "totalEe": null,
            "totalRelicCores": 6895,
            "totalTechResonance": 809090,
            "totalTransmuteCores": 897
        },
        "34857": {
            "clanId": 34857,
            "ladder": {
                "change": -20,
                "ladderAt": "2026-W48",
                "lastPlace": 4,
                "lunarPoints": 1670,
                "rank": 40,
                "rankFactor": 0.94,
                "secretScore": 1569.8,
                "weeks": 1
            },
            "lunarPoints": 1670,
            "members": {
                "108232570": {
                    "atk": 2786898,
                    "awakeningCores": 119,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "vip로로",
                    "relicCores": 189,
                    "techResonance": 16540,
                    "transmuteCores": 24
                },
                "13614815": {
                    "atk": 3269130,
                    "awakeningCores": 140,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "vip썬블",
                    "relicCores": 230,
                    "techResonance": 19800,
                    "transmuteCores": 62
                },
                "13682508": {
                    "atk": 2585592,
                    "awakeningCores": 157,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "vip류진탱",
                    "relicCores": 205,
                    "techResonance": 22500,
                    "transmuteCores": 48
                },
                "15122179": {
                    "atk": 2890255,
                    "awakeningCores": 184,
                    "chipsCount": 159,
                    "eeBestScore": null,
                    "name": "vip통풍",
                    "relicCores": 208,
                    "techResonance": 28170,
                    "transmuteCores": 42
                },
                "16760510": {
                    "atk": 3660122,
                    "awakeningCores": 193,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "vip호미",
                    "relicCores": 257,
                    "techResonance": 26350,
                    "transmuteCores": 60
                },
                "19084873": {
                    "atk": 3737973,
                    "awakeningCores": 201,
                    "chipsCount": 172,
                    "eeBestScore": null,
                    "name": "vip로이",
                    "relicCores": 269,
                    "techResonance": 30500,
                    "transmuteCores": 76
                },
                "26876255": {
                    "atk": 3804496,
                    "awakeningCores": 215,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "vip자갈치",
                    "relicCores": 261,
                    "techResonance": 25880,
                    "transmuteCores": 68
                },
                "28222137": {
                    "atk": 5097426,
                    "awakeningCores": 315,
                    "chipsCount": 372,
                    "eeBestScore": null,
                    "name": "vip바우",
                    "relicCores": 412,
                    "techResonance": 46800,
                    "transmuteCores": 120
                },
                "32296231": {
                    "atk": 2271758,
                    "awakeningCores": 89,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "vip슥삭",
                    "relicCores": 109,
                    "techResonance": 7640,
                    "transmuteCores": 10
                },
                "33674054": {
                    "atk": 3309355,
                    "awakeningCores": 152,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "vip아인파더",
                    "relicCores": 217,
                    "techResonance": 28560,
                    "transmuteCores": 38
                },
                "34792313": {
                    "atk": 2845131,
                    "awakeningCores": 125,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "vip방산",
                    "relicCores": 181,
                    "techResonance": 20700,
                    "transmuteCores": 44
                },
                "36143422": {
                    "atk": 5913244,
                    "awakeningCores": 541,
                    "chipsCount": 622,
                    "eeBestScore": null,
                    "name": "vip옼케발",
                    "relicCores": 498,
                    "techResonance": 42000,
                    "transmuteCores": 180
                },
                "36546913": {
                    "atk": 3214782,
                    "awakeningCores": 140,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "vip국회단지",
                    "relicCores": 190,
                    "techResonance": 23740,
                    "transmuteCores": 34
                },
                "37049528": {
                    "atk": 3600097,
                    "awakeningCores": 200,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "vip혀니",
                    "relicCores": 243,
                    "techResonance": 24940,
                    "transmuteCores": 80
                },
                "37778562": {
                    "atk": 2805211,
                    "awakeningCores": 79,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "vip뇽이",
                    "relicCores": 155,
                    "techResonance": 19370,
                    "transmuteCores": 56
                },
                "37953557": {
                    "atk": 4137858,
                    "awakeningCores": 216,
                    "chipsCount": 174,
                    "eeBestScore": null,
                    "name": "vip지니",
                    "relicCores": 286,
                    "techResonance": 32400,
                    "transmuteCores": 76
                },
                "38141898": {
                    "atk": 4309251,
                    "awakeningCores": 232,
                    "chipsCount": 196,
                    "eeBestScore": null,
                    "name": "vip마포지박령",
                    "relicCores": 344,
                    "techResonance": 36000,
                    "transmuteCores": 76
                },
                "40135512": {
                    "atk": 3541870,
                    "awakeningCores": 156,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "vip프밍",
                    "relicCores": 190,
                    "techResonance": 23860,
                    "transmuteCores": 38
                },
                "41226371": {
                    "atk": 3209891,
                    "awakeningCores": 87,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "vipMMIXIX",
                    "relicCores": 88,
                    "techResonance": 18260,
                    "transmuteCores": 34
                },
                "41382193": {
                    "atk": 3009765,
                    "awakeningCores": 249,
                    "chipsCount": 161,
                    "eeBestScore": null,
                    "name": "vip전집탁주",
                    "relicCores": 280,
                    "techResonance": 29400,
                    "transmuteCores": 38
                },
                "41923502": {
                    "atk": 3400853,
                    "awakeningCores": 185,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "vipNiN7a",
                    "relicCores": 187,
                    "techResonance": 22780,
                    "transmuteCores": 36
                },
                "42701128": {
                    "atk": 3489617,
                    "awakeningCores": 216,
                    "chipsCount": 162,
                    "eeBestScore": null,
                    "name": "vip복길",
                    "relicCores": 256,
                    "techResonance": 29800,
                    "transmuteCores": 80
                },
                "46858591": {
                    "atk": 3660371,
                    "awakeningCores": 201,
                    "chipsCount": 145,
                    "eeBestScore": null,
                    "name": "vip화치",
                    "relicCores": 291,
                    "techResonance": 33960,
                    "transmuteCores": 32
                },
                "52566454": {
                    "atk": 3204240,
                    "awakeningCores": 127,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "vipHappy",
                    "relicCores": 218,
                    "techResonance": 22670,
                    "transmuteCores": 38
                },
                "54931186": {
                    "atk": 3977337,
                    "awakeningCores": 201,
                    "chipsCount": 158,
                    "eeBestScore": null,
                    "name": "vip수배자",
                    "relicCores": 286,
                    "techResonance": 31800,
                    "transmuteCores": 76
                },
                "59243337": {
                    "atk": 3716076,
                    "awakeningCores": 160,
                    "chipsCount": 137,
                    "eeBestScore": null,
                    "name": "vip프로섬",
                    "relicCores": 206,
                    "techResonance": 26800,
                    "transmuteCores": 54
                },
                "59772308": {
                    "atk": 3506105,
                    "awakeningCores": 158,
                    "chipsCount": 145,
                    "eeBestScore": null,
                    "name": "vip평화",
                    "relicCores": 272,
                    "techResonance": 29570,
                    "transmuteCores": 44
                },
                "61003490": {
                    "atk": 3324543,
                    "awakeningCores": 238,
                    "chipsCount": 177,
                    "eeBestScore": null,
                    "name": "vip돌식이",
                    "relicCores": 304,
                    "techResonance": 29200,
                    "transmuteCores": 50
                },
                "62037126": {
                    "atk": 3548359,
                    "awakeningCores": 186,
                    "chipsCount": 170,
                    "eeBestScore": null,
                    "name": "vip익스",
                    "relicCores": 260,
                    "techResonance": 28100,
                    "transmuteCores": 44
                },
                "62449092": {
                    "atk": 3001522,
                    "awakeningCores": 124,
                    "chipsCount": 93,
                    "eeBestScore": null,
                    "name": "vip육이",
                    "relicCores": 212,
                    "techResonance": 22440,
                    "transmuteCores": 30
                },
                "65144569": {
                    "atk": 3088760,
                    "awakeningCores": 156,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "vipJJJ",
                    "relicCores": 227,
                    "techResonance": 27650,
                    "transmuteCores": 28
                },
                "65480352": {
                    "atk": 2837211,
                    "awakeningCores": 156,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "vip뽀또",
                    "relicCores": 203,
                    "techResonance": 18960,
                    "transmuteCores": 28
                },
                "65583040": {
                    "atk": 3471111,
                    "awakeningCores": 171,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "vip뻥이요",
                    "relicCores": 182,
                    "techResonance": 19480,
                    "transmuteCores": 54
                },
                "66456851": {
                    "atk": 3285390,
                    "awakeningCores": 172,
                    "chipsCount": 154,
                    "eeBestScore": null,
                    "name": "vip소년",
                    "relicCores": 215,
                    "techResonance": 23240,
                    "transmuteCores": 38
                },
                "71363822": {
                    "atk": 3272934,
                    "awakeningCores": 204,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "vip절탈안",
                    "relicCores": 202,
                    "techResonance": 22860,
                    "transmuteCores": 50
                },
                "73383916": {
                    "atk": 2734240,
                    "awakeningCores": 147,
                    "chipsCount": 86,
                    "eeBestScore": null,
                    "name": "vip김팡",
                    "relicCores": 192,
                    "techResonance": 34380,
                    "transmuteCores": 10
                },
                "75338248": {
                    "atk": 4522984,
                    "awakeningCores": 246,
                    "chipsCount": 279,
                    "eeBestScore": null,
                    "name": "vip박시언",
                    "relicCores": 353,
                    "techResonance": 36000,
                    "transmuteCores": 84
                },
                "76776208": {
                    "atk": 4839436,
                    "awakeningCores": 300,
                    "chipsCount": 304,
                    "eeBestScore": null,
                    "name": "vip꼬로",
                    "relicCores": 455,
                    "techResonance": 30000,
                    "transmuteCores": 96
                },
                "80140387": {
                    "atk": 3767813,
                    "awakeningCores": 190,
                    "chipsCount": 109,
                    "eeBestScore": null,
                    "name": "vip쿠오우",
                    "relicCores": 228,
                    "techResonance": 26440,
                    "transmuteCores": 38
                },
                "86804175": {
                    "atk": 2854301,
                    "awakeningCores": 132,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "vip클래스",
                    "relicCores": 145,
                    "techResonance": 20550,
                    "transmuteCores": 10
                }
            },
            "name": "v͟͟i͟͟p͟͟",
            "totalAtk": 111891189,
            "totalAwakeningCores": 6298,
            "totalChips": 5100,
            "totalEe": null,
            "totalRelicCores": 8090,
            "totalTechResonance": 876350,
            "totalTransmuteCores": 1884
        },
        "44262": {
            "clanId": 44262,
            "ladder": {
                "change": 20,
                "ladderAt": "2026-W48",
                "lastPlace": 1,
                "lunarPoints": 1565,
                "rank": 140,
                "rankFactor": 1.0,
                "secretScore": 1565.0,
                "weeks": 1
            },
            "lunarPoints": 1565,
            "members": {
                "100876140": {
                    "atk": 3011526,
                    "awakeningCores": 118,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "techResonance": 15450,
                    "transmuteCores": 34
                },
                "103516442": {
                    "atk": 3387280,
                    "awakeningCores": 139,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 280,
                    "techResonance": 25050,
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
                    "atk": 2500705,
                    "awakeningCores": 88,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 158,
                    "techResonance": 16950,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2488731,
                    "awakeningCores": 155,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 211,
                    "techResonance": 19790,
                    "transmuteCores": 44
                },
                "108860725": {
                    "atk": 2772365,
                    "awakeningCores": 87,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "techResonance": 19420,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 2055649,
                    "awakeningCores": 53,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 127,
                    "techResonance": 14250,
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
                    "atk": 2290654,
                    "awakeningCores": 41,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "Oopsie-Daisy",
                    "relicCores": 207,
                    "techResonance": 24410,
                    "transmuteCores": 0
                },
                "26277677": {
                    "atk": 2846694,
                    "awakeningCores": 95,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 142,
                    "techResonance": 13400,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2822142,
                    "awakeningCores": 155,
                    "chipsCount": 141,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 184,
                    "techResonance": 17180,
                    "transmuteCores": 7
                },
                "29321884": {
                    "atk": 3395005,
                    "awakeningCores": 185,
                    "chipsCount": 111,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 228,
                    "techResonance": 23900,
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
                    "atk": 2541247,
                    "awakeningCores": 92,
                    "chipsCount": 93,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "techResonance": 18790,
                    "transmuteCores": 30
                },
                "35869301": {
                    "atk": 3022987,
                    "awakeningCores": 205,
                    "chipsCount": 149,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 277,
                    "techResonance": 25800,
                    "transmuteCores": 32
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
                    "atk": 2575592,
                    "awakeningCores": 86,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 137,
                    "techResonance": 18040,
                    "transmuteCores": 38
                },
                "59566866": {
                    "atk": 2540224,
                    "awakeningCores": 95,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 157,
                    "techResonance": 20050,
                    "transmuteCores": 6
                },
                "60687252": {
                    "atk": 4328929,
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
                    "atk": 2643046,
                    "awakeningCores": 93,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 159,
                    "techResonance": 17520,
                    "transmuteCores": 28
                },
                "66607264": {
                    "atk": 2365826,
                    "awakeningCores": 76,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 128,
                    "techResonance": 14160,
                    "transmuteCores": 10
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
                    "atk": 2032730,
                    "awakeningCores": 113,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 185,
                    "techResonance": 20350,
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
                    "atk": 3799296,
                    "awakeningCores": 185,
                    "chipsCount": 180,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "techResonance": 31300,
                    "transmuteCores": 72
                },
                "83861839": {
                    "atk": 2484375,
                    "awakeningCores": 54,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "techResonance": 15260,
                    "transmuteCores": 38
                },
                "87244358": {
                    "atk": 3414887,
                    "awakeningCores": 177,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "techResonance": 28620,
                    "transmuteCores": 48
                },
                "87954282": {
                    "atk": 2693725,
                    "awakeningCores": 121,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "techResonance": 22510,
                    "transmuteCores": 80
                },
                "88203044": {
                    "atk": 2562837,
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
            "totalAtk": 84902938,
            "totalAwakeningCores": 3772,
            "totalChips": 2719,
            "totalEe": null,
            "totalRelicCores": 6011,
            "totalTechResonance": 644120,
            "totalTransmuteCores": 1157
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

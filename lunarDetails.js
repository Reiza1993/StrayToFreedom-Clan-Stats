// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-11-19
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "16787": {
            "clanId": 16787,
            "lunarPoints": 1515,
            "members": {
                "11812635": {
                    "atk": 2139745,
                    "awakeningCores": 72,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "KINGagent",
                    "relicCores": 182,
                    "techResonance": 15400,
                    "transmuteCores": 13
                },
                "121472466": {
                    "atk": 916698,
                    "awakeningCores": 20,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "雫˖°.",
                    "relicCores": 34,
                    "techResonance": 6120,
                    "transmuteCores": 0
                },
                "13312376": {
                    "atk": 3025019,
                    "awakeningCores": 124,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "床屋さん",
                    "relicCores": 208,
                    "techResonance": 19720,
                    "transmuteCores": 26
                },
                "14577982": {
                    "atk": 2450682,
                    "awakeningCores": 134,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "ROKUさん",
                    "relicCores": 210,
                    "techResonance": 15780,
                    "transmuteCores": 21
                },
                "14767328": {
                    "atk": 2502170,
                    "awakeningCores": 60,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "あっきー88",
                    "relicCores": 217,
                    "techResonance": 12400,
                    "transmuteCores": 25
                },
                "19277845": {
                    "atk": 3221097,
                    "awakeningCores": 166,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "ANIᶜᵐ",
                    "relicCores": 148,
                    "techResonance": 20110,
                    "transmuteCores": 0
                },
                "20148788": {
                    "atk": 2659738,
                    "awakeningCores": 111,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "なまちゃ123",
                    "relicCores": 296,
                    "techResonance": 13800,
                    "transmuteCores": 1
                },
                "23034790": {
                    "atk": 1894888,
                    "awakeningCores": 49,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "ぼく10",
                    "relicCores": 138,
                    "techResonance": 9250,
                    "transmuteCores": 6
                },
                "23797347": {
                    "atk": 1181006,
                    "awakeningCores": 21,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "しゃr",
                    "relicCores": 66,
                    "techResonance": 7460,
                    "transmuteCores": 2
                },
                "25089136": {
                    "atk": 2873160,
                    "awakeningCores": 161,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "舂のパン祭り",
                    "relicCores": 166,
                    "techResonance": 19520,
                    "transmuteCores": 16
                },
                "25921439": {
                    "atk": 2914124,
                    "awakeningCores": 106,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "KJAY10",
                    "relicCores": 154,
                    "techResonance": 10340,
                    "transmuteCores": 10
                },
                "27473467": {
                    "atk": 2774436,
                    "awakeningCores": 130,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "水洗便所ᶜᵐ",
                    "relicCores": 184,
                    "techResonance": 22920,
                    "transmuteCores": 50
                },
                "29116617": {
                    "atk": 2992244,
                    "awakeningCores": 130,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "ちゅうちぇ",
                    "relicCores": 181,
                    "techResonance": 22690,
                    "transmuteCores": 24
                },
                "37049650": {
                    "atk": 3493272,
                    "awakeningCores": 156,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "トロオドン",
                    "relicCores": 273,
                    "techResonance": 28620,
                    "transmuteCores": 50
                },
                "39357798": {
                    "atk": 2932674,
                    "awakeningCores": 124,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "Kybelēᶜᵐ",
                    "relicCores": 200,
                    "techResonance": 23580,
                    "transmuteCores": 68
                },
                "39642556": {
                    "atk": 2909654,
                    "awakeningCores": 133,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "hǐranosuke",
                    "relicCores": 242,
                    "techResonance": 22230,
                    "transmuteCores": 38
                },
                "40560564": {
                    "atk": 3155139,
                    "awakeningCores": 142,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "saya04",
                    "relicCores": 179,
                    "techResonance": 22780,
                    "transmuteCores": 34
                },
                "40660496": {
                    "atk": 2898601,
                    "awakeningCores": 88,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "もひ",
                    "relicCores": 172,
                    "techResonance": 18150,
                    "transmuteCores": 22
                },
                "44431527": {
                    "atk": 1370933,
                    "awakeningCores": 85,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "299㎝",
                    "relicCores": 125,
                    "techResonance": 15870,
                    "transmuteCores": 0
                },
                "45011372": {
                    "atk": 2964710,
                    "awakeningCores": 73,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "Tim♞蒼ᶜᵐ",
                    "relicCores": 159,
                    "techResonance": 19220,
                    "transmuteCores": 28
                },
                "45321439": {
                    "atk": 3221307,
                    "awakeningCores": 126,
                    "chipsCount": 155,
                    "eeBestScore": null,
                    "name": "レッドキメラ",
                    "relicCores": 257,
                    "techResonance": 30300,
                    "transmuteCores": 25
                },
                "46863760": {
                    "atk": 3548737,
                    "awakeningCores": 200,
                    "chipsCount": 166,
                    "eeBestScore": null,
                    "name": "ZUCA",
                    "relicCores": 329,
                    "techResonance": 33600,
                    "transmuteCores": 42
                },
                "52223202": {
                    "atk": 2467748,
                    "awakeningCores": 85,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "CBR600RR",
                    "relicCores": 186,
                    "techResonance": 15690,
                    "transmuteCores": 46
                },
                "53785403": {
                    "atk": 2339691,
                    "awakeningCores": 115,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "kei3",
                    "relicCores": 167,
                    "techResonance": 22270,
                    "transmuteCores": 38
                },
                "56413260": {
                    "atk": 3476367,
                    "awakeningCores": 158,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "2肉9",
                    "relicCores": 274,
                    "techResonance": 24610,
                    "transmuteCores": 20
                },
                "57608907": {
                    "atk": 2355695,
                    "awakeningCores": 117,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "たああ",
                    "relicCores": 140,
                    "techResonance": 18650,
                    "transmuteCores": 30
                },
                "61378704": {
                    "atk": 2424339,
                    "awakeningCores": 88,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "keI3",
                    "relicCores": 170,
                    "techResonance": 16460,
                    "transmuteCores": 6
                },
                "66447850": {
                    "atk": 2613724,
                    "awakeningCores": 141,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "tono1231",
                    "relicCores": 246,
                    "techResonance": 18950,
                    "transmuteCores": 9
                },
                "66798812": {
                    "atk": 3380972,
                    "awakeningCores": 174,
                    "chipsCount": 233,
                    "eeBestScore": null,
                    "name": "うっぱ羅ᶜᵐ",
                    "relicCores": 291,
                    "techResonance": 33000,
                    "transmuteCores": 10
                },
                "67995805": {
                    "atk": 2547121,
                    "awakeningCores": 164,
                    "chipsCount": 171,
                    "eeBestScore": null,
                    "name": "蜂蜜屋",
                    "relicCores": 209,
                    "techResonance": 26500,
                    "transmuteCores": 36
                },
                "68851069": {
                    "atk": 2821727,
                    "awakeningCores": 107,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "麒麟0",
                    "relicCores": 144,
                    "techResonance": 24720,
                    "transmuteCores": 24
                },
                "72268450": {
                    "atk": 2184956,
                    "awakeningCores": 80,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "たあた",
                    "relicCores": 142,
                    "techResonance": 15950,
                    "transmuteCores": 16
                },
                "75943575": {
                    "atk": 2312024,
                    "awakeningCores": 63,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "凡張るᶜᵐ",
                    "relicCores": 139,
                    "techResonance": 17900,
                    "transmuteCores": 22
                },
                "76829867": {
                    "atk": 2900772,
                    "awakeningCores": 87,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "​みかん",
                    "relicCores": 97,
                    "techResonance": 11380,
                    "transmuteCores": 14
                },
                "77998473": {
                    "atk": 2591142,
                    "awakeningCores": 80,
                    "chipsCount": 114,
                    "eeBestScore": null,
                    "name": "Uz1527",
                    "relicCores": 144,
                    "techResonance": 19860,
                    "transmuteCores": 28
                },
                "83225089": {
                    "atk": 1567315,
                    "awakeningCores": 10,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "僕がこの世界",
                    "relicCores": 100,
                    "techResonance": 6900,
                    "transmuteCores": 5
                },
                "86852311": {
                    "atk": 2119172,
                    "awakeningCores": 125,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "siky21",
                    "relicCores": 104,
                    "techResonance": 13610,
                    "transmuteCores": 30
                }
            },
            "name": "チェック・メイト",
            "totalAtk": 84953042,
            "totalAwakeningCores": 3710,
            "totalChips": 2457,
            "totalEe": null,
            "totalRelicCores": 6009,
            "totalTechResonance": 632460,
            "totalTransmuteCores": 821
        },
        "19135": {
            "clanId": 19135,
            "lunarPoints": 1425,
            "members": {
                "102151601": {
                    "atk": 2097547,
                    "awakeningCores": 53,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "Duhveed",
                    "relicCores": 88,
                    "techResonance": 17820,
                    "transmuteCores": 64
                },
                "104422753": {
                    "atk": 1225047,
                    "awakeningCores": 41,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "KingJackal",
                    "relicCores": 81,
                    "techResonance": 6840,
                    "transmuteCores": 4
                },
                "110567149": {
                    "atk": 2415120,
                    "awakeningCores": 171,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "Redlogo",
                    "relicCores": 202,
                    "techResonance": 11330,
                    "transmuteCores": 22
                },
                "112894138": {
                    "atk": 486464,
                    "awakeningCores": null,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "fistking_92",
                    "relicCores": 48,
                    "techResonance": 3470,
                    "transmuteCores": 0
                },
                "113287458": {
                    "atk": 1304742,
                    "awakeningCores": 37,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "AaronJAC",
                    "relicCores": 83,
                    "techResonance": 9360,
                    "transmuteCores": 10
                },
                "113305506": {
                    "atk": 1001060,
                    "awakeningCores": 34,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "Schildk123",
                    "relicCores": 63,
                    "techResonance": 5530,
                    "transmuteCores": 3
                },
                "113729419": {
                    "atk": 1266756,
                    "awakeningCores": 27,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "Kbro17",
                    "relicCores": 132,
                    "techResonance": 11080,
                    "transmuteCores": 1
                },
                "113953028": {
                    "atk": 1305901,
                    "awakeningCores": 15,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "ronwon",
                    "relicCores": 94,
                    "techResonance": 8050,
                    "transmuteCores": 2
                },
                "116225058": {
                    "atk": 1381792,
                    "awakeningCores": 38,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "flames2017",
                    "relicCores": 101,
                    "techResonance": 13350,
                    "transmuteCores": 21
                },
                "117455725": {
                    "atk": 1625890,
                    "awakeningCores": 50,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Sozlol",
                    "relicCores": 61,
                    "techResonance": 9100,
                    "transmuteCores": 11
                },
                "118450495": {
                    "atk": 825110,
                    "awakeningCores": 18,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "dynimo",
                    "relicCores": 48,
                    "techResonance": 5780,
                    "transmuteCores": 0
                },
                "13501956": {
                    "atk": 1486287,
                    "awakeningCores": 68,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "kennyh",
                    "relicCores": 146,
                    "techResonance": 12030,
                    "transmuteCores": 2
                },
                "14036098": {
                    "atk": 3615633,
                    "awakeningCores": 236,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": "ᴬᶜᵗRork2383",
                    "relicCores": 394,
                    "techResonance": 26700,
                    "transmuteCores": 20
                },
                "17359279": {
                    "atk": 1735621,
                    "awakeningCores": 64,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "SONGOD7",
                    "relicCores": 111,
                    "techResonance": 10710,
                    "transmuteCores": 3
                },
                "18297536": {
                    "atk": 1898732,
                    "awakeningCores": 53,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 103,
                    "techResonance": 20420,
                    "transmuteCores": 34
                },
                "19177602": {
                    "atk": 839954,
                    "awakeningCores": 37,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "EzTolga",
                    "relicCores": 76,
                    "techResonance": 4670,
                    "transmuteCores": 0
                },
                "21603742": {
                    "atk": 1398450,
                    "awakeningCores": 53,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "cam098",
                    "relicCores": 223,
                    "techResonance": 14560,
                    "transmuteCores": 7
                },
                "26081301": {
                    "atk": 675087,
                    "awakeningCores": 9,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "DaZed",
                    "relicCores": 33,
                    "techResonance": 5360,
                    "transmuteCores": 0
                },
                "33397376": {
                    "atk": 1229811,
                    "awakeningCores": 86,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "Calvin22Klein",
                    "relicCores": 123,
                    "techResonance": 7920,
                    "transmuteCores": 3
                },
                "38408791": {
                    "atk": 2443827,
                    "awakeningCores": 168,
                    "chipsCount": 125,
                    "eeBestScore": null,
                    "name": "ᴬᶜᵗiiREDii",
                    "relicCores": 220,
                    "techResonance": 22170,
                    "transmuteCores": 13
                },
                "38558688": {
                    "atk": 2025009,
                    "awakeningCores": 151,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "mKarnage",
                    "relicCores": 156,
                    "techResonance": 9880,
                    "transmuteCores": 0
                },
                "40482554": {
                    "atk": 1051669,
                    "awakeningCores": 28,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 150,
                    "techResonance": 8250,
                    "transmuteCores": 4
                },
                "41458335": {
                    "atk": 2369543,
                    "awakeningCores": 148,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "DrDrood",
                    "relicCores": 218,
                    "techResonance": 29700,
                    "transmuteCores": 42
                },
                "41580752": {
                    "atk": 1031710,
                    "awakeningCores": 103,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "RoyCarter",
                    "relicCores": 138,
                    "techResonance": 4400,
                    "transmuteCores": 0
                },
                "43885046": {
                    "atk": 1089979,
                    "awakeningCores": 40,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "Mrshep4",
                    "relicCores": 79,
                    "techResonance": 6200,
                    "transmuteCores": 54
                },
                "46385464": {
                    "atk": 1808801,
                    "awakeningCores": 66,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "Admiralfuzzface",
                    "relicCores": 196,
                    "techResonance": 5440,
                    "transmuteCores": 6
                },
                "49090559": {
                    "atk": 1858504,
                    "awakeningCores": 68,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "darawish",
                    "relicCores": 141,
                    "techResonance": 6910,
                    "transmuteCores": 4
                },
                "56355771": {
                    "atk": 1564766,
                    "awakeningCores": 55,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "bucdoolb",
                    "relicCores": 177,
                    "techResonance": 8660,
                    "transmuteCores": 4
                },
                "61027676": {
                    "atk": 982601,
                    "awakeningCores": 17,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "DiFfbuilt",
                    "relicCores": 113,
                    "techResonance": 5940,
                    "transmuteCores": 3
                },
                "61662476": {
                    "atk": 3297110,
                    "awakeningCores": 160,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "ʙɪʀʙ",
                    "relicCores": 212,
                    "techResonance": 25330,
                    "transmuteCores": 36
                },
                "65034122": {
                    "atk": 1147169,
                    "awakeningCores": 39,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "Froobs",
                    "relicCores": 67,
                    "techResonance": 12660,
                    "transmuteCores": 7
                },
                "69510338": {
                    "atk": 852972,
                    "awakeningCores": 21,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "AcidBullets",
                    "relicCores": 112,
                    "techResonance": 10450,
                    "transmuteCores": 6
                },
                "71871724": {
                    "atk": 1526101,
                    "awakeningCores": 77,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 155,
                    "techResonance": 11630,
                    "transmuteCores": 8
                },
                "72579147": {
                    "atk": 1602162,
                    "awakeningCores": 39,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "Chrome2YerDome",
                    "relicCores": 80,
                    "techResonance": 5920,
                    "transmuteCores": 4
                },
                "73220234": {
                    "atk": 2178822,
                    "awakeningCores": 51,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "21BlackJax",
                    "relicCores": 85,
                    "techResonance": 18160,
                    "transmuteCores": 30
                },
                "81743552": {
                    "atk": 751631,
                    "awakeningCores": 7,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "9AssDeWla3",
                    "relicCores": 96,
                    "techResonance": 3500,
                    "transmuteCores": 2
                },
                "86748690": {
                    "atk": 2409466,
                    "awakeningCores": 105,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "bminusᵛ⁴⁴⁵",
                    "relicCores": 109,
                    "techResonance": 11670,
                    "transmuteCores": 25
                }
            },
            "name": "Stray-v445",
            "totalAtk": 52393027,
            "totalAwakeningCores": 2346,
            "totalChips": 1210,
            "totalEe": null,
            "totalRelicCores": 4318,
            "totalTechResonance": 378580,
            "totalTransmuteCores": 454
        },
        "40148": {
            "clanId": 40148,
            "lunarPoints": 1425,
            "members": {
                "10179603": {
                    "atk": 1846608,
                    "awakeningCores": 83,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "GK・SIERRA7",
                    "relicCores": 132,
                    "techResonance": 17580,
                    "transmuteCores": 17
                },
                "103604764": {
                    "atk": 1021432,
                    "awakeningCores": 37,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "ᴳᵏ˙ᴶᴵᴵ",
                    "relicCores": 83,
                    "techResonance": 9900,
                    "transmuteCores": 11
                },
                "111339705": {
                    "atk": 484912,
                    "awakeningCores": null,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "-Nemo",
                    "relicCores": 25,
                    "techResonance": 2140,
                    "transmuteCores": 0
                },
                "113197227": {
                    "atk": 1625712,
                    "awakeningCores": 37,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "GK・Pe5Boerරඩ",
                    "relicCores": 113,
                    "techResonance": 10160,
                    "transmuteCores": 14
                },
                "113489870": {
                    "atk": 1341166,
                    "awakeningCores": 68,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "-DINO-",
                    "relicCores": 119,
                    "techResonance": 15560,
                    "transmuteCores": 22
                },
                "116081059": {
                    "atk": 929481,
                    "awakeningCores": 46,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "PAKPOK",
                    "relicCores": 94,
                    "techResonance": 10700,
                    "transmuteCores": 15
                },
                "117617351": {
                    "atk": 511118,
                    "awakeningCores": 0,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 30,
                    "techResonance": 2750,
                    "transmuteCores": 0
                },
                "122345834": {
                    "atk": 345279,
                    "awakeningCores": null,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "GK.MakanEuy",
                    "relicCores": 22,
                    "techResonance": 1890,
                    "transmuteCores": 0
                },
                "18398059": {
                    "atk": 1575214,
                    "awakeningCores": 40,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "GK・Keppo",
                    "relicCores": 121,
                    "techResonance": 13380,
                    "transmuteCores": 26
                },
                "22964545": {
                    "atk": 1688935,
                    "awakeningCores": 63,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "GK・Trezz",
                    "relicCores": 135,
                    "techResonance": 16440,
                    "transmuteCores": 34
                },
                "24223506": {
                    "atk": 1602287,
                    "awakeningCores": 63,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "AllstarㅣBABAN",
                    "relicCores": 119,
                    "techResonance": 8700,
                    "transmuteCores": 30
                },
                "29090365": {
                    "atk": 536353,
                    "awakeningCores": 0,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "WhosyourdaddY",
                    "relicCores": 33,
                    "techResonance": 2000,
                    "transmuteCores": 1
                },
                "31894034": {
                    "atk": 1563819,
                    "awakeningCores": 65,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "GK•AxtonOliver",
                    "relicCores": 111,
                    "techResonance": 12130,
                    "transmuteCores": 24
                },
                "31999427": {
                    "atk": 1798547,
                    "awakeningCores": 95,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "GK・loboツ",
                    "relicCores": 157,
                    "techResonance": 9240,
                    "transmuteCores": 42
                },
                "34801889": {
                    "atk": 1796196,
                    "awakeningCores": 63,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "Allstarㅣrayidwp",
                    "relicCores": 178,
                    "techResonance": 16320,
                    "transmuteCores": 40
                },
                "37268515": {
                    "atk": 2007473,
                    "awakeningCores": 43,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "GK・Piqeරඩ",
                    "relicCores": 122,
                    "techResonance": 14100,
                    "transmuteCores": 34
                },
                "38156266": {
                    "atk": 1289745,
                    "awakeningCores": 49,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "gk×JinBotol",
                    "relicCores": 154,
                    "techResonance": 9000,
                    "transmuteCores": 8
                },
                "42853842": {
                    "atk": 2056514,
                    "awakeningCores": 56,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "GK•AkuMauJanda",
                    "relicCores": 143,
                    "techResonance": 21750,
                    "transmuteCores": 26
                },
                "43839475": {
                    "atk": 979793,
                    "awakeningCores": 43,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "GK°ArmZh°",
                    "relicCores": 109,
                    "techResonance": 6260,
                    "transmuteCores": 3
                },
                "59196888": {
                    "atk": 1156412,
                    "awakeningCores": 44,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "GK.RJP⁰⁸",
                    "relicCores": 98,
                    "techResonance": 11060,
                    "transmuteCores": 4
                },
                "65710090": {
                    "atk": 2351678,
                    "awakeningCores": 61,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "GK•Moriarty22",
                    "relicCores": 185,
                    "techResonance": 13620,
                    "transmuteCores": 17
                },
                "69644479": {
                    "atk": 1374247,
                    "awakeningCores": 62,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 93,
                    "techResonance": 9400,
                    "transmuteCores": 6
                },
                "71697580": {
                    "atk": 1633541,
                    "awakeningCores": 71,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "GK・ZEROSES",
                    "relicCores": 163,
                    "techResonance": 16080,
                    "transmuteCores": 22
                },
                "71900995": {
                    "atk": 1518844,
                    "awakeningCores": 51,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "GK・DODODツ",
                    "relicCores": 134,
                    "techResonance": 15270,
                    "transmuteCores": 22
                },
                "73894646": {
                    "atk": 832999,
                    "awakeningCores": 13,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "EILON",
                    "relicCores": 61,
                    "techResonance": 6260,
                    "transmuteCores": 0
                },
                "76483426": {
                    "atk": 604103,
                    "awakeningCores": null,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "HL•SalahArah",
                    "relicCores": 37,
                    "techResonance": 4760,
                    "transmuteCores": 0
                },
                "78404034": {
                    "atk": 1903959,
                    "awakeningCores": 68,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "GK•Albrtsbcn",
                    "relicCores": 154,
                    "techResonance": 15330,
                    "transmuteCores": 17
                },
                "79189212": {
                    "atk": 1986714,
                    "awakeningCores": 110,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "mas_bahlil",
                    "relicCores": 140,
                    "techResonance": 18950,
                    "transmuteCores": 34
                },
                "79209573": {
                    "atk": 1195595,
                    "awakeningCores": 43,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "GK●TukangSapu",
                    "relicCores": 105,
                    "techResonance": 13970,
                    "transmuteCores": 12
                },
                "79686758": {
                    "atk": 418144,
                    "awakeningCores": null,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "GK•Reanbell",
                    "relicCores": 39,
                    "techResonance": 2500,
                    "transmuteCores": 0
                },
                "80442410": {
                    "atk": 2163899,
                    "awakeningCores": 73,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "AllstarㅣF444ZZ",
                    "relicCores": 146,
                    "techResonance": 17800,
                    "transmuteCores": 14
                },
                "82172961": {
                    "atk": 1957305,
                    "awakeningCores": 123,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "®EZ",
                    "relicCores": 143,
                    "techResonance": 11490,
                    "transmuteCores": 17
                },
                "82728220": {
                    "atk": 1554538,
                    "awakeningCores": 68,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "GK♧||♧Dragon48",
                    "relicCores": 147,
                    "techResonance": 8950,
                    "transmuteCores": 8
                },
                "83816669": {
                    "atk": 1801229,
                    "awakeningCores": 68,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "GK©sentolop®",
                    "relicCores": 146,
                    "techResonance": 19610,
                    "transmuteCores": 26
                },
                "85001738": {
                    "atk": 1231055,
                    "awakeningCores": 22,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "GK・Megamorphツ",
                    "relicCores": 104,
                    "techResonance": 14010,
                    "transmuteCores": 4
                },
                "85030100": {
                    "atk": 1069126,
                    "awakeningCores": 61,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "G•K-KOKO",
                    "relicCores": 101,
                    "techResonance": 6410,
                    "transmuteCores": 2
                },
                "85264308": {
                    "atk": 1531595,
                    "awakeningCores": 85,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "GK•MAhsanS",
                    "relicCores": 185,
                    "techResonance": 7660,
                    "transmuteCores": 20
                },
                "87974124": {
                    "atk": 1854165,
                    "awakeningCores": 77,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "ɠƙ•Abcsusu",
                    "relicCores": 139,
                    "techResonance": 18690,
                    "transmuteCores": 30
                },
                "88257221": {
                    "atk": 2006536,
                    "awakeningCores": 85,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "PrabowoLoveTeddy",
                    "relicCores": 147,
                    "techResonance": 9380,
                    "transmuteCores": 12
                }
            },
            "name": "GARISKERAS",
            "totalAtk": 49504086,
            "totalAwakeningCores": 1964,
            "totalChips": 1161,
            "totalEe": null,
            "totalRelicCores": 4044,
            "totalTechResonance": 406230,
            "totalTransmuteCores": 608
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1545,
            "members": {
                "100876140": {
                    "atk": 2952985,
                    "awakeningCores": 118,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 173,
                    "techResonance": 15300,
                    "transmuteCores": 24
                },
                "103516442": {
                    "atk": 3286337,
                    "awakeningCores": 131,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 274,
                    "techResonance": 24750,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 2015551,
                    "awakeningCores": 44,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "techResonance": 13030,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2478521,
                    "awakeningCores": 88,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 158,
                    "techResonance": 16560,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2448792,
                    "awakeningCores": 156,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 200,
                    "techResonance": 18630,
                    "transmuteCores": 44
                },
                "108860725": {
                    "atk": 2693946,
                    "awakeningCores": 79,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "techResonance": 19420,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 2048895,
                    "awakeningCores": 53,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 127,
                    "techResonance": 13920,
                    "transmuteCores": 38
                },
                "113690788": {
                    "atk": 2307490,
                    "awakeningCores": 80,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 118,
                    "techResonance": 19190,
                    "transmuteCores": 34
                },
                "11463573": {
                    "atk": 2098877,
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
                    "atk": 2863925,
                    "awakeningCores": 125,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 242,
                    "techResonance": 28400,
                    "transmuteCores": 42
                },
                "26277677": {
                    "atk": 2600569,
                    "awakeningCores": 95,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 142,
                    "techResonance": 13250,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2808959,
                    "awakeningCores": 155,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 184,
                    "techResonance": 17280,
                    "transmuteCores": 7
                },
                "29321884": {
                    "atk": 3349553,
                    "awakeningCores": 185,
                    "chipsCount": 107,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 228,
                    "techResonance": 23750,
                    "transmuteCores": 38
                },
                "29904762": {
                    "atk": 1770125,
                    "awakeningCores": 62,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 139,
                    "techResonance": 7970,
                    "transmuteCores": 50
                },
                "30658936": {
                    "atk": 2519226,
                    "awakeningCores": 92,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "techResonance": 18590,
                    "transmuteCores": 30
                },
                "32556489": {
                    "atk": 2102995,
                    "awakeningCores": 47,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 121,
                    "techResonance": 18080,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 3120827,
                    "awakeningCores": 203,
                    "chipsCount": 147,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 274,
                    "techResonance": 25800,
                    "transmuteCores": 34
                },
                "36484758": {
                    "atk": 2247004,
                    "awakeningCores": 79,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "techResonance": 6080,
                    "transmuteCores": 6
                },
                "40001195": {
                    "atk": 3733468,
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
                    "atk": 2599649,
                    "awakeningCores": 86,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 137,
                    "techResonance": 17440,
                    "transmuteCores": 38
                },
                "59566866": {
                    "atk": 2521787,
                    "awakeningCores": 95,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 171,
                    "techResonance": 19290,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 4292582,
                    "awakeningCores": 240,
                    "chipsCount": 221,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 383,
                    "techResonance": 37800,
                    "transmuteCores": 68
                },
                "61865023": {
                    "atk": 2723608,
                    "awakeningCores": 95,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "RexPanda",
                    "relicCores": 181,
                    "techResonance": 19740,
                    "transmuteCores": 17
                },
                "64676255": {
                    "atk": 2585839,
                    "awakeningCores": 93,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 140,
                    "techResonance": 18730,
                    "transmuteCores": 14
                },
                "66607264": {
                    "atk": 2253367,
                    "awakeningCores": 76,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 128,
                    "techResonance": 14020,
                    "transmuteCores": 10
                },
                "70603922": {
                    "atk": 2050981,
                    "awakeningCores": 104,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 138,
                    "techResonance": 17090,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2361099,
                    "awakeningCores": 72,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 143,
                    "techResonance": 11690,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2642837,
                    "awakeningCores": 132,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 174,
                    "techResonance": 23100,
                    "transmuteCores": 60
                },
                "75174428": {
                    "atk": 2430902,
                    "awakeningCores": 147,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 192,
                    "techResonance": 20310,
                    "transmuteCores": 12
                },
                "79510960": {
                    "atk": 2391806,
                    "awakeningCores": 88,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 185,
                    "techResonance": 18340,
                    "transmuteCores": 11
                },
                "80018314": {
                    "atk": 2033909,
                    "awakeningCores": 113,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 185,
                    "techResonance": 19800,
                    "transmuteCores": 7
                },
                "80972473": {
                    "atk": 3251859,
                    "awakeningCores": 145,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 189,
                    "techResonance": 24450,
                    "transmuteCores": 50
                },
                "83339881": {
                    "atk": 3695330,
                    "awakeningCores": 177,
                    "chipsCount": 170,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "techResonance": 31160,
                    "transmuteCores": 72
                },
                "83861839": {
                    "atk": 2464181,
                    "awakeningCores": 54,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "techResonance": 15260,
                    "transmuteCores": 38
                },
                "87244358": {
                    "atk": 3355714,
                    "awakeningCores": 169,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "techResonance": 28470,
                    "transmuteCores": 48
                },
                "87954282": {
                    "atk": 2684426,
                    "awakeningCores": 121,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "techResonance": 22210,
                    "transmuteCores": 80
                },
                "88203044": {
                    "atk": 2552592,
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
            "totalAtk": 84261421,
            "totalAwakeningCores": 3780,
            "totalChips": 2693,
            "totalEe": null,
            "totalRelicCores": 5999,
            "totalTechResonance": 647510,
            "totalTransmuteCores": 1190
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-11-05
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "28692": {
            "clanId": 28692,
            "lunarPoints": 1405,
            "members": {
                "101795187": {
                    "atk": 2373430,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "徳島の清秋63",
                    "relicCores": 102,
                    "transmuteCores": 20
                },
                "114607747": {
                    "atk": 832577,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "Yoshy1031",
                    "relicCores": 129,
                    "transmuteCores": 2
                },
                "114900384": {
                    "atk": 1144877,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "Player 114900384",
                    "relicCores": 126,
                    "transmuteCores": 4
                },
                "116185717": {
                    "atk": 803282,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "れもんてぃ−",
                    "relicCores": 69,
                    "transmuteCores": 0
                },
                "116756985": {
                    "atk": 729794,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "無課金master",
                    "relicCores": 30,
                    "transmuteCores": 0
                },
                "118229314": {
                    "atk": 247269,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "P90愛好家",
                    "relicCores": 16,
                    "transmuteCores": 0
                },
                "120865962": {
                    "atk": 260273,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "ワチャーン",
                    "relicCores": 34,
                    "transmuteCores": 0
                },
                "15966304": {
                    "atk": 2997668,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "Player 15966304",
                    "relicCores": 183,
                    "transmuteCores": 0
                },
                "34738361": {
                    "atk": 2872211,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "富雄",
                    "relicCores": 174,
                    "transmuteCores": 42
                },
                "38619191": {
                    "atk": 963833,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "mohxbl",
                    "relicCores": 79,
                    "transmuteCores": 0
                },
                "40726435": {
                    "atk": 1842277,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "ロミー",
                    "relicCores": 147,
                    "transmuteCores": 36
                },
                "42791671": {
                    "atk": 877028,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "Mooonti",
                    "relicCores": 100,
                    "transmuteCores": 2
                },
                "45082901": {
                    "atk": 979972,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "こんにちわ2",
                    "relicCores": 76,
                    "transmuteCores": 8
                },
                "47681968": {
                    "atk": 1488366,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "琴櫻",
                    "relicCores": 127,
                    "transmuteCores": 16
                },
                "47958761": {
                    "atk": 740310,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "ユーミン♪",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "58757004": {
                    "atk": 737459,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "けー587",
                    "relicCores": 55,
                    "transmuteCores": 0
                },
                "59148401": {
                    "atk": 1882254,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "soki11",
                    "relicCores": 142,
                    "transmuteCores": 6
                },
                "59900231": {
                    "atk": 2687489,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "쿠라우도",
                    "relicCores": 142,
                    "transmuteCores": 30
                },
                "60016835": {
                    "atk": 966697,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "taitoo_",
                    "relicCores": 92,
                    "transmuteCores": 0
                },
                "61256135": {
                    "atk": 981893,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "ーーーーa",
                    "relicCores": 133,
                    "transmuteCores": 0
                },
                "63220389": {
                    "atk": 1045195,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "apocalypsy",
                    "relicCores": 147,
                    "transmuteCores": 1
                },
                "65412896": {
                    "atk": 2869669,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "ポンコツガニ",
                    "relicCores": 232,
                    "transmuteCores": 38
                },
                "66322204": {
                    "atk": 866612,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "めたむん",
                    "relicCores": 154,
                    "transmuteCores": 1
                },
                "66930200": {
                    "atk": 1887362,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "シャア専用",
                    "relicCores": 166,
                    "transmuteCores": 24
                },
                "67685718": {
                    "atk": 894122,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "hirotaka56",
                    "relicCores": 22,
                    "transmuteCores": 0
                },
                "68445118": {
                    "atk": 2248903,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Totton",
                    "relicCores": 222,
                    "transmuteCores": 2
                },
                "68576336": {
                    "atk": 371065,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "CtrlAltDft",
                    "relicCores": 16,
                    "transmuteCores": 0
                },
                "68650649": {
                    "atk": 761504,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "Ruty!",
                    "relicCores": 78,
                    "transmuteCores": 0
                },
                "69869163": {
                    "atk": 1344749,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "ローゼマイン",
                    "relicCores": 106,
                    "transmuteCores": 2
                },
                "71252121": {
                    "atk": 1089880,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "ルールム",
                    "relicCores": 44,
                    "transmuteCores": 0
                },
                "74078871": {
                    "atk": 2139848,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "しにかんよ",
                    "relicCores": 100,
                    "transmuteCores": 10
                },
                "74749502": {
                    "atk": 515067,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "私はリャマ",
                    "relicCores": 34,
                    "transmuteCores": 0
                },
                "77643377": {
                    "atk": 3675026,
                    "chipsCount": 153,
                    "eeBestScore": null,
                    "name": "蘭之介",
                    "relicCores": 248,
                    "transmuteCores": 52
                },
                "78117182": {
                    "atk": 914342,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "ユウ26",
                    "relicCores": 153,
                    "transmuteCores": 2
                },
                "79080953": {
                    "atk": 877810,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "ざあめん",
                    "relicCores": 83,
                    "transmuteCores": 0
                },
                "79603509": {
                    "atk": 2515348,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "oto19",
                    "relicCores": 225,
                    "transmuteCores": 58
                },
                "86326378": {
                    "atk": 2818258,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "ダンダダン。",
                    "relicCores": 208,
                    "transmuteCores": 22
                },
                "88379844": {
                    "atk": 1127701,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "silvercode",
                    "relicCores": 154,
                    "transmuteCores": 16
                },
                "88724569": {
                    "atk": 2233657,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "Player 88724569",
                    "relicCores": 128,
                    "transmuteCores": 10
                },
                "89781021": {
                    "atk": 1592390,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "たたずはは",
                    "relicCores": 94,
                    "transmuteCores": 1
                }
            },
            "name": "The Club",
            "totalAtk": 52198867,
            "totalChips": 933,
            "totalEe": null,
            "totalRelicCores": 4285,
            "totalTransmuteCores": 405
        },
        "35211": {
            "clanId": 35211,
            "lunarPoints": 1555,
            "members": {
                "10208381": {
                    "atk": 2869473,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "CHAKALᵛˢᵒ",
                    "relicCores": 202,
                    "transmuteCores": 44
                },
                "106932063": {
                    "atk": 2507401,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "Nicolas76ᵛˢᵒ",
                    "relicCores": 127,
                    "transmuteCores": 21
                },
                "113624610": {
                    "atk": 2032247,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "StepBrothrᵛˢᵒ",
                    "relicCores": 127,
                    "transmuteCores": 38
                },
                "115723111": {
                    "atk": 2028,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "ManagerVaisseau",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "11824686": {
                    "atk": 2663653,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "sean35ᵛˢᵒ",
                    "relicCores": 139,
                    "transmuteCores": 25
                },
                "122286936": {
                    "atk": 58,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "VaisseauManager",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "13107453": {
                    "atk": 2508294,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "Balbxᵛˢᵒ",
                    "relicCores": 164,
                    "transmuteCores": 2
                },
                "27011193": {
                    "atk": 1984968,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "hoaxᵛˢᵒ",
                    "relicCores": 103,
                    "transmuteCores": 21
                },
                "27795972": {
                    "atk": 2225627,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "Trinitaᵛˢᵒ",
                    "relicCores": 121,
                    "transmuteCores": 21
                },
                "27875447": {
                    "atk": 2142477,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "DaVinciEZᵛˢᵒ",
                    "relicCores": 121,
                    "transmuteCores": 5
                },
                "35483382": {
                    "atk": 2281797,
                    "chipsCount": 103,
                    "eeBestScore": null,
                    "name": "molexᵛˢᵒ",
                    "relicCores": 172,
                    "transmuteCores": 7
                },
                "36630276": {
                    "atk": 2967844,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "Kokatouᵛˢᵒ",
                    "relicCores": 167,
                    "transmuteCores": 26
                },
                "38004156": {
                    "atk": 2794198,
                    "chipsCount": 151,
                    "eeBestScore": null,
                    "name": "国家强",
                    "relicCores": 132,
                    "transmuteCores": 54
                },
                "46052264": {
                    "atk": 2384772,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "TOZAᵛˢᵒ",
                    "relicCores": 131,
                    "transmuteCores": 34
                },
                "48213167": {
                    "atk": 2781300,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "Psicowᵛˢᵒ",
                    "relicCores": 127,
                    "transmuteCores": 38
                },
                "49228213": {
                    "atk": 2397825,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "JChrist♧",
                    "relicCores": 155,
                    "transmuteCores": 28
                },
                "56813103": {
                    "atk": 2572669,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "Monoromᵛˢᵒ",
                    "relicCores": 150,
                    "transmuteCores": 34
                },
                "58073569": {
                    "atk": 2836354,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "iXeᵛˢᵒ",
                    "relicCores": 161,
                    "transmuteCores": 44
                },
                "59038213": {
                    "atk": 2466983,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "Totogroᵛˢᵒ",
                    "relicCores": 142,
                    "transmuteCores": 54
                },
                "60009724": {
                    "atk": 4130243,
                    "chipsCount": 227,
                    "eeBestScore": null,
                    "name": "Tagirᵛˢᵒ",
                    "relicCores": 260,
                    "transmuteCores": 76
                },
                "61700773": {
                    "atk": 2358026,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "dextremeᵛˢᵒ",
                    "relicCores": 142,
                    "transmuteCores": 2
                },
                "65073212": {
                    "atk": 3587433,
                    "chipsCount": 151,
                    "eeBestScore": null,
                    "name": "fabᵛˢᵒ",
                    "relicCores": 172,
                    "transmuteCores": 44
                },
                "65115265": {
                    "atk": 1737949,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "1DG4Fᵛˢᵒ",
                    "relicCores": 98,
                    "transmuteCores": 0
                },
                "70020829": {
                    "atk": 3913777,
                    "chipsCount": 278,
                    "eeBestScore": null,
                    "name": "Chiusoᵛˢᵒ",
                    "relicCores": 313,
                    "transmuteCores": 64
                },
                "70740634": {
                    "atk": 3016574,
                    "chipsCount": 123,
                    "eeBestScore": null,
                    "name": "Lloydidiᵛˢᵒ",
                    "relicCores": 150,
                    "transmuteCores": 50
                },
                "73797247": {
                    "atk": 2729204,
                    "chipsCount": 114,
                    "eeBestScore": null,
                    "name": "Pyrodragᵛˢᵒ",
                    "relicCores": 168,
                    "transmuteCores": 48
                },
                "75133463": {
                    "atk": 2460352,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "Viper28000ᵛˢᵒ",
                    "relicCores": 149,
                    "transmuteCores": 4
                },
                "75539280": {
                    "atk": 1787954,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "sabbahamza",
                    "relicCores": 132,
                    "transmuteCores": 20
                },
                "78587241": {
                    "atk": 2746532,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "SANGAMI",
                    "relicCores": 177,
                    "transmuteCores": 34
                },
                "81583062": {
                    "atk": 3420098,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "Jjbb97200ᵛˢᵒ",
                    "relicCores": 200,
                    "transmuteCores": 58
                },
                "82270797": {
                    "atk": 2293592,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "yukan13ᵛˢᵒ",
                    "relicCores": 174,
                    "transmuteCores": 34
                },
                "82461267": {
                    "atk": 3024113,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Boloche",
                    "relicCores": 120,
                    "transmuteCores": 44
                },
                "82474256": {
                    "atk": 3344760,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "eGnar",
                    "relicCores": 197,
                    "transmuteCores": 58
                },
                "82743468": {
                    "atk": 3312650,
                    "chipsCount": 177,
                    "eeBestScore": null,
                    "name": "Vivinoͮp̾oͦulos",
                    "relicCores": 220,
                    "transmuteCores": 64
                },
                "83270467": {
                    "atk": 3879076,
                    "chipsCount": 311,
                    "eeBestScore": null,
                    "name": "Djay81ᵛˢᵒ",
                    "relicCores": 288,
                    "transmuteCores": 90
                },
                "83757471": {
                    "atk": 2645790,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "FanchiCᵛˢᵒ",
                    "relicCores": 182,
                    "transmuteCores": 34
                },
                "84802703": {
                    "atk": 2760775,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "Osirisᵛˢᵒ",
                    "relicCores": 132,
                    "transmuteCores": 34
                },
                "87574141": {
                    "atk": 2894979,
                    "chipsCount": 122,
                    "eeBestScore": null,
                    "name": "Tibs85ᵛˢᵒ",
                    "relicCores": 169,
                    "transmuteCores": 80
                }
            },
            "name": "Le vaisseau",
            "totalAtk": 86550537,
            "totalChips": 3348,
            "totalEe": null,
            "totalRelicCores": 5194,
            "totalTransmuteCores": 1314
        },
        "40832": {
            "clanId": 40832,
            "lunarPoints": 1405,
            "members": {
                "101512116": {
                    "atk": 1676806,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "アルｩｩ",
                    "relicCores": 216,
                    "transmuteCores": 4
                },
                "106356368": {
                    "atk": 1749132,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "広背筋下部",
                    "relicCores": 134,
                    "transmuteCores": 5
                },
                "120594701": {
                    "atk": 853905,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "もてぃー　",
                    "relicCores": 74,
                    "transmuteCores": 1
                },
                "14477045": {
                    "atk": 862243,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "Player 14477045",
                    "relicCores": 99,
                    "transmuteCores": 0
                },
                "22538141": {
                    "atk": 1485176,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "しっぽがとも",
                    "relicCores": 161,
                    "transmuteCores": 16
                },
                "27275924": {
                    "atk": 1229807,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "kenkenta",
                    "relicCores": 144,
                    "transmuteCores": 2
                },
                "29779535": {
                    "atk": 2180085,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "Valdiel",
                    "relicCores": 102,
                    "transmuteCores": 38
                },
                "33738468": {
                    "atk": 1152772,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "なせばなる",
                    "relicCores": 105,
                    "transmuteCores": 14
                },
                "35355046": {
                    "atk": 1468690,
                    "chipsCount": 13,
                    "eeBestScore": null,
                    "name": "黒刀",
                    "relicCores": 231,
                    "transmuteCores": 9
                },
                "36085865": {
                    "atk": 2786282,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "KJ77",
                    "relicCores": 138,
                    "transmuteCores": 20
                },
                "40846789": {
                    "atk": 735312,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "麒麟星",
                    "relicCores": 27,
                    "transmuteCores": 0
                },
                "41460237": {
                    "atk": 1106996,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "べはひ",
                    "relicCores": 124,
                    "transmuteCores": 0
                },
                "41806150": {
                    "atk": 2203719,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "が-ちゃˢᴱᴮ",
                    "relicCores": 159,
                    "transmuteCores": 14
                },
                "47967730": {
                    "atk": 2691306,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "あいず",
                    "relicCores": 209,
                    "transmuteCores": 16
                },
                "51056558": {
                    "atk": 1323108,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "pandora543",
                    "relicCores": 60,
                    "transmuteCores": 0
                },
                "51221043": {
                    "atk": 1714051,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "檀黎斗神",
                    "relicCores": 60,
                    "transmuteCores": 0
                },
                "53416512": {
                    "atk": 1252544,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "カリメ",
                    "relicCores": 109,
                    "transmuteCores": 9
                },
                "60555105": {
                    "atk": 1089315,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "Player 60555105",
                    "relicCores": 107,
                    "transmuteCores": 6
                },
                "62927337": {
                    "atk": 1801303,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "キムタクご飯",
                    "relicCores": 153,
                    "transmuteCores": 6
                },
                "64327383": {
                    "atk": 1120638,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "jamを持参",
                    "relicCores": 80,
                    "transmuteCores": 1
                },
                "64435992": {
                    "atk": 711739,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "あっちぃ",
                    "relicCores": 63,
                    "transmuteCores": 0
                },
                "64518284": {
                    "atk": 1913270,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "64518284",
                    "relicCores": 190,
                    "transmuteCores": 26
                },
                "64962451": {
                    "atk": 2135279,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "yo−so−ro−",
                    "relicCores": 109,
                    "transmuteCores": 25
                },
                "66602873": {
                    "atk": 1019675,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "でゃまれっ！",
                    "relicCores": 135,
                    "transmuteCores": 1
                },
                "66675877": {
                    "atk": 1107658,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "せんたーわけ",
                    "relicCores": 102,
                    "transmuteCores": 15
                },
                "66727009": {
                    "atk": 2102938,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "コタ氏",
                    "relicCores": 168,
                    "transmuteCores": 20
                },
                "68900890": {
                    "atk": 2107952,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "ロバンド",
                    "relicCores": 94,
                    "transmuteCores": 15
                },
                "70509021": {
                    "atk": 835481,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "嘘月。",
                    "relicCores": 96,
                    "transmuteCores": 2
                },
                "72871311": {
                    "atk": 2624417,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "炎球",
                    "relicCores": 99,
                    "transmuteCores": 32
                },
                "76525629": {
                    "atk": 2698396,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "よしお1913",
                    "relicCores": 161,
                    "transmuteCores": 42
                },
                "76634471": {
                    "atk": 1710986,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "Player 76634471",
                    "relicCores": 204,
                    "transmuteCores": 18
                },
                "78224632": {
                    "atk": 1314920,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "trifluorotoluene",
                    "relicCores": 88,
                    "transmuteCores": 11
                },
                "78765767": {
                    "atk": 699633,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "haru414",
                    "relicCores": 57,
                    "transmuteCores": 0
                },
                "78781451": {
                    "atk": 981055,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "jake1976",
                    "relicCores": 40,
                    "transmuteCores": 0
                }
            },
            "name": "ガチ勢カモン",
            "totalAtk": 49464424,
            "totalChips": 896,
            "totalEe": null,
            "totalRelicCores": 3914,
            "totalTransmuteCores": 368
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1525,
            "members": {
                "100876140": {
                    "atk": 2773045,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "transmuteCores": 34
                },
                "103516442": {
                    "atk": 3215024,
                    "chipsCount": 94,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 274,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 2013537,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2266700,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2441817,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 203,
                    "transmuteCores": 44
                },
                "108860725": {
                    "atk": 2677888,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 2019192,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 127,
                    "transmuteCores": 34
                },
                "113690788": {
                    "atk": 2284776,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 118,
                    "transmuteCores": 34
                },
                "11463573": {
                    "atk": 2056267,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 124,
                    "transmuteCores": 54
                },
                "115742768": {
                    "atk": 49403,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2752302,
                    "chipsCount": 138,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 242,
                    "transmuteCores": 42
                },
                "18297536": {
                    "atk": 1876582,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 103,
                    "transmuteCores": 34
                },
                "26277677": {
                    "atk": 2582325,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 142,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2840417,
                    "chipsCount": 135,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 168,
                    "transmuteCores": 10
                },
                "29321884": {
                    "atk": 3298936,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 218,
                    "transmuteCores": 38
                },
                "29904762": {
                    "atk": 1765508,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 139,
                    "transmuteCores": 50
                },
                "30658936": {
                    "atk": 2469639,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 30
                },
                "32556489": {
                    "atk": 2110086,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 2917110,
                    "chipsCount": 144,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 277,
                    "transmuteCores": 30
                },
                "36484758": {
                    "atk": 2224909,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 1761440,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2513390,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 133,
                    "transmuteCores": 38
                },
                "59566866": {
                    "atk": 2496826,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 171,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 4157936,
                    "chipsCount": 218,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 369,
                    "transmuteCores": 58
                },
                "61865023": {
                    "atk": 2750318,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "RexPanda",
                    "relicCores": 181,
                    "transmuteCores": 15
                },
                "64676255": {
                    "atk": 2535391,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 159,
                    "transmuteCores": 28
                },
                "66607264": {
                    "atk": 2606354,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 169,
                    "transmuteCores": 30
                },
                "70603922": {
                    "atk": 2050281,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 138,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2200724,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 143,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2541112,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 172,
                    "transmuteCores": 52
                },
                "75174428": {
                    "atk": 2428512,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 192,
                    "transmuteCores": 12
                },
                "79510960": {
                    "atk": 2158438,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 184,
                    "transmuteCores": 10
                },
                "80018314": {
                    "atk": 2057563,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 185,
                    "transmuteCores": 4
                },
                "80972473": {
                    "atk": 3258605,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 182,
                    "transmuteCores": 50
                },
                "83339881": {
                    "atk": 3650757,
                    "chipsCount": 160,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 72
                },
                "83861839": {
                    "atk": 2319003,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "transmuteCores": 34
                },
                "87244358": {
                    "atk": 3174976,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2659531,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 80
                },
                "88203044": {
                    "atk": 2492916,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 26
                },
                "89511116": {
                    "atk": 2245603,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 171,
                    "transmuteCores": 16
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 80935280,
            "totalChips": 2472,
            "totalEe": null,
            "totalRelicCores": 5816,
            "totalTransmuteCores": 1165
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

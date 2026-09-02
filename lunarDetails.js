// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-09-03
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "11100": {
            "clanId": 11100,
            "lunarPoints": 1480,
            "members": {
                "103688201": {
                    "atk": 3476028,
                    "chipsCount": 103,
                    "eeBestScore": null,
                    "name": "ΖΛㆍKrimert™",
                    "relicCores": 257,
                    "transmuteCores": 14
                },
                "107065883": {
                    "atk": 2555016,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "ㆍLyTe",
                    "relicCores": 206,
                    "transmuteCores": 24
                },
                "10841292": {
                    "atk": 3091962,
                    "chipsCount": 143,
                    "eeBestScore": null,
                    "name": "ΖΛㆍSerbs",
                    "relicCores": 223,
                    "transmuteCores": 70
                },
                "121677152": {
                    "atk": 350324,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "DirtyMartini",
                    "relicCores": 41,
                    "transmuteCores": 0
                },
                "20775927": {
                    "atk": 2271073,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "ΖΛㆍSunshine",
                    "relicCores": 137,
                    "transmuteCores": 24
                },
                "21987211": {
                    "atk": 2656589,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "Jiirayia",
                    "relicCores": 142,
                    "transmuteCores": 2
                },
                "23041716": {
                    "atk": 2175994,
                    "chipsCount": 141,
                    "eeBestScore": null,
                    "name": "ΖΛㆍPanja",
                    "relicCores": 206,
                    "transmuteCores": 54
                },
                "24762107": {
                    "atk": 2606725,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "ΖΛㆍbicycle",
                    "relicCores": 147,
                    "transmuteCores": 46
                },
                "26461863": {
                    "atk": 3165441,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "ΖΛㆍFupey",
                    "relicCores": 132,
                    "transmuteCores": 60
                },
                "27510876": {
                    "atk": 3115244,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "ΖΛㆍOdavihk",
                    "relicCores": 154,
                    "transmuteCores": 36
                },
                "31130625": {
                    "atk": 1344499,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "RyzenAgain",
                    "relicCores": 102,
                    "transmuteCores": 7
                },
                "31837676": {
                    "atk": 2465841,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "ΖΛㆍHinata",
                    "relicCores": 166,
                    "transmuteCores": 60
                },
                "32953507": {
                    "atk": 3583728,
                    "chipsCount": 142,
                    "eeBestScore": null,
                    "name": "ΖΛㆍmikiberto23",
                    "relicCores": 252,
                    "transmuteCores": 28
                },
                "35929687": {
                    "atk": 3261523,
                    "chipsCount": 137,
                    "eeBestScore": null,
                    "name": "ΖΛㆍPinky",
                    "relicCores": 209,
                    "transmuteCores": 54
                },
                "38889183": {
                    "atk": 1469400,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "ALIYAAS",
                    "relicCores": 101,
                    "transmuteCores": 10
                },
                "41174659": {
                    "atk": 1887977,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "Sohuzu93",
                    "relicCores": 189,
                    "transmuteCores": 1
                },
                "44199417": {
                    "atk": 2713767,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "ΖΛㆍJanah",
                    "relicCores": 155,
                    "transmuteCores": 30
                },
                "45073518": {
                    "atk": 2127323,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "FLNSH",
                    "relicCores": 139,
                    "transmuteCores": 8
                },
                "45227905": {
                    "atk": 2337912,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "ΖΛㆍXRP",
                    "relicCores": 224,
                    "transmuteCores": 16
                },
                "51008479": {
                    "atk": 2200176,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "ΖΛㆍAndretta",
                    "relicCores": 151,
                    "transmuteCores": 40
                },
                "51728976": {
                    "atk": 2997533,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "ᴼᴳMundosBane",
                    "relicCores": 169,
                    "transmuteCores": 38
                },
                "56976141": {
                    "atk": 2656144,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "ΖΛㆍSalvaYusuf",
                    "relicCores": 266,
                    "transmuteCores": 34
                },
                "58008937": {
                    "atk": 2403909,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "ΖΛ⭒WhoopYah",
                    "relicCores": 180,
                    "transmuteCores": 10
                },
                "61210227": {
                    "atk": 2241825,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "MCATᴳᴮ",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "61823317": {
                    "atk": 3722436,
                    "chipsCount": 126,
                    "eeBestScore": null,
                    "name": "ΖΛㆍs¡XceNțc",
                    "relicCores": 199,
                    "transmuteCores": 50
                },
                "62195760": {
                    "atk": 3395360,
                    "chipsCount": 145,
                    "eeBestScore": null,
                    "name": "LionheartAsh",
                    "relicCores": 326,
                    "transmuteCores": 54
                },
                "63128382": {
                    "atk": 1955187,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "ÆㆍĎula",
                    "relicCores": 147,
                    "transmuteCores": 38
                },
                "64062953": {
                    "atk": 2310209,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "ΖΛㆍMi7o",
                    "relicCores": 192,
                    "transmuteCores": 10
                },
                "64808490": {
                    "atk": 1836972,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "ΖΛㆍLensai",
                    "relicCores": 135,
                    "transmuteCores": 18
                },
                "70584096": {
                    "atk": 2045049,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "ΖΛㆍLastlifex",
                    "relicCores": 215,
                    "transmuteCores": 4
                },
                "77231165": {
                    "atk": 2495509,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "ΖΛㆍKaYoTiK",
                    "relicCores": 135,
                    "transmuteCores": 28
                },
                "78944759": {
                    "atk": 2716683,
                    "chipsCount": 115,
                    "eeBestScore": null,
                    "name": "ΖΛㆍfoodoo",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "79200204": {
                    "atk": 1866042,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "Hamza66",
                    "relicCores": 132,
                    "transmuteCores": 11
                },
                "81743239": {
                    "atk": 3161499,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "ΖΛㆍNangoon",
                    "relicCores": 255,
                    "transmuteCores": 24
                },
                "88059606": {
                    "atk": 3340442,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "ᴼᴳVlugge",
                    "relicCores": 190,
                    "transmuteCores": 66
                },
                "90222295": {
                    "atk": 3352693,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "zamnfre",
                    "relicCores": 232,
                    "transmuteCores": 60
                }
            },
            "name": "ΖONΛㆍKING",
            "totalAtk": 82598820,
            "totalChips": 2808,
            "totalEe": null,
            "totalRelicCores": 5765,
            "totalTransmuteCores": 1063
        },
        "17187": {
            "clanId": 17187,
            "lunarPoints": 1570,
            "members": {
                "107243580": {
                    "atk": 3353857,
                    "chipsCount": 157,
                    "eeBestScore": null,
                    "name": "SavaBuroᴮˢᵛ",
                    "relicCores": 248,
                    "transmuteCores": 42
                },
                "111508271": {
                    "atk": 2756050,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "麻呂ニキ",
                    "relicCores": 181,
                    "transmuteCores": 36
                },
                "13634524": {
                    "atk": 2838342,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "カトト",
                    "relicCores": 196,
                    "transmuteCores": 44
                },
                "16707868": {
                    "atk": 3074373,
                    "chipsCount": 109,
                    "eeBestScore": null,
                    "name": "ラームᴮˢᵛ",
                    "relicCores": 163,
                    "transmuteCores": 30
                },
                "19686907": {
                    "atk": 3511669,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "カリアゲ",
                    "relicCores": 220,
                    "transmuteCores": 38
                },
                "20017666": {
                    "atk": 2000087,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "KAZAHANA",
                    "relicCores": 195,
                    "transmuteCores": 0
                },
                "32276054": {
                    "atk": 3552359,
                    "chipsCount": 122,
                    "eeBestScore": null,
                    "name": "Rikkuyᴮˢᵛ",
                    "relicCores": 240,
                    "transmuteCores": 68
                },
                "39661284": {
                    "atk": 3764574,
                    "chipsCount": 158,
                    "eeBestScore": null,
                    "name": "にょᴮˢᵛ",
                    "relicCores": 281,
                    "transmuteCores": 66
                },
                "47041080": {
                    "atk": 3237722,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "テネᴮˢᵛ",
                    "relicCores": 412,
                    "transmuteCores": 60
                },
                "47568247": {
                    "atk": 3318100,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "47ᴮˢᵛ",
                    "relicCores": 205,
                    "transmuteCores": 14
                },
                "50043544": {
                    "atk": 3573219,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "ˣˣˣ",
                    "relicCores": 265,
                    "transmuteCores": 62
                },
                "53227701": {
                    "atk": 3609207,
                    "chipsCount": 169,
                    "eeBestScore": null,
                    "name": "hisa࿈ᴮˢᵛ࿈",
                    "relicCores": 269,
                    "transmuteCores": 28
                },
                "55423529": {
                    "atk": 2401822,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "ディータ",
                    "relicCores": 175,
                    "transmuteCores": 10
                },
                "56054241": {
                    "atk": 3133935,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "まこたろう",
                    "relicCores": 253,
                    "transmuteCores": 60
                },
                "56203472": {
                    "atk": 3302398,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": "きょしんへい",
                    "relicCores": 171,
                    "transmuteCores": 42
                },
                "58639199": {
                    "atk": 3113098,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "怠け者Max",
                    "relicCores": 177,
                    "transmuteCores": 15
                },
                "59833237": {
                    "atk": 3162218,
                    "chipsCount": 86,
                    "eeBestScore": null,
                    "name": "ぶた丸",
                    "relicCores": 228,
                    "transmuteCores": 36
                },
                "61338657": {
                    "atk": 1444090,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "特上ねぎとろ",
                    "relicCores": 139,
                    "transmuteCores": 0
                },
                "62693084": {
                    "atk": 2808290,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "TAK0707",
                    "relicCores": 169,
                    "transmuteCores": 24
                },
                "67617187": {
                    "atk": 873183,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "オルちゃん",
                    "relicCores": 62,
                    "transmuteCores": 0
                },
                "69295085": {
                    "atk": 3210364,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "ヘッドロック",
                    "relicCores": 244,
                    "transmuteCores": 38
                },
                "71499556": {
                    "atk": 2701454,
                    "chipsCount": 162,
                    "eeBestScore": null,
                    "name": "夏野",
                    "relicCores": 253,
                    "transmuteCores": 20
                },
                "72247333": {
                    "atk": 3256230,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "yui翔",
                    "relicCores": 216,
                    "transmuteCores": 18
                },
                "73108315": {
                    "atk": 3412731,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "鮎野うるか",
                    "relicCores": 274,
                    "transmuteCores": 32
                },
                "75392396": {
                    "atk": 3478434,
                    "chipsCount": 166,
                    "eeBestScore": null,
                    "name": "ＧＩ",
                    "relicCores": 359,
                    "transmuteCores": 60
                },
                "77856609": {
                    "atk": 3008118,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "ポッキー100",
                    "relicCores": 200,
                    "transmuteCores": 6
                },
                "83132154": {
                    "atk": 3179790,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "ryu@",
                    "relicCores": 210,
                    "transmuteCores": 32
                },
                "88359644": {
                    "atk": 3135330,
                    "chipsCount": 118,
                    "eeBestScore": null,
                    "name": "ほっとま",
                    "relicCores": 211,
                    "transmuteCores": 18
                },
                "88615396": {
                    "atk": 2838903,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "ANAﾇｷᴮˢᵛ",
                    "relicCores": 214,
                    "transmuteCores": 28
                },
                "88959531": {
                    "atk": 3295822,
                    "chipsCount": 137,
                    "eeBestScore": null,
                    "name": "kkkbbb",
                    "relicCores": 203,
                    "transmuteCores": 14
                },
                "89156858": {
                    "atk": 3815563,
                    "chipsCount": 164,
                    "eeBestScore": null,
                    "name": "あmyrar",
                    "relicCores": 292,
                    "transmuteCores": 74
                },
                "89279284": {
                    "atk": 2456518,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "アリクイち",
                    "relicCores": 160,
                    "transmuteCores": 10
                }
            },
            "name": "バ力サバイバー",
            "totalAtk": 94300577,
            "totalChips": 3170,
            "totalEe": null,
            "totalRelicCores": 6884,
            "totalTransmuteCores": 1025
        },
        "39749": {
            "clanId": 39749,
            "lunarPoints": 1475,
            "members": {
                "11134561": {
                    "atk": 2099893,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "瑋瑋特工",
                    "relicCores": 246,
                    "transmuteCores": 7
                },
                "11775988": {
                    "atk": 3273512,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "潮州孝順哥",
                    "relicCores": 273,
                    "transmuteCores": 62
                },
                "12074658": {
                    "atk": 2523900,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "Zolda",
                    "relicCores": 180,
                    "transmuteCores": 28
                },
                "15122122": {
                    "atk": 2098001,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "joker7414",
                    "relicCores": 169,
                    "transmuteCores": 12
                },
                "16380425": {
                    "atk": 3796512,
                    "chipsCount": 276,
                    "eeBestScore": null,
                    "name": "Koaallaaa",
                    "relicCores": 430,
                    "transmuteCores": 120
                },
                "18423495": {
                    "atk": 2705919,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "我加了洋蔥",
                    "relicCores": 168,
                    "transmuteCores": 18
                },
                "18438832": {
                    "atk": 2539359,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "帥哥力",
                    "relicCores": 160,
                    "transmuteCores": 5
                },
                "20307276": {
                    "atk": 2220792,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "不超車",
                    "relicCores": 182,
                    "transmuteCores": 14
                },
                "20746160": {
                    "atk": 1430171,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "Lotusblue",
                    "relicCores": 146,
                    "transmuteCores": 0
                },
                "21473535": {
                    "atk": 1432696,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "狗窩沒有狗",
                    "relicCores": 136,
                    "transmuteCores": 0
                },
                "22401166": {
                    "atk": 1777650,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "草密公",
                    "relicCores": 128,
                    "transmuteCores": 14
                },
                "24869311": {
                    "atk": 2082373,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "阿哩嗶波",
                    "relicCores": 217,
                    "transmuteCores": 12
                },
                "27479413": {
                    "atk": 2612169,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "櫻桃m",
                    "relicCores": 164,
                    "transmuteCores": 7
                },
                "27684619": {
                    "atk": 1869019,
                    "chipsCount": 86,
                    "eeBestScore": null,
                    "name": "肯尼娘",
                    "relicCores": 134,
                    "transmuteCores": 0
                },
                "28503337": {
                    "atk": 2190446,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "USdbeᴳᴸᴬ",
                    "relicCores": 156,
                    "transmuteCores": 1
                },
                "28716166": {
                    "atk": 3170599,
                    "chipsCount": 165,
                    "eeBestScore": null,
                    "name": "william.h",
                    "relicCores": 333,
                    "transmuteCores": 32
                },
                "29159478": {
                    "atk": 2538199,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "Player 29159478",
                    "relicCores": 212,
                    "transmuteCores": 24
                },
                "29656751": {
                    "atk": 2430288,
                    "chipsCount": 134,
                    "eeBestScore": null,
                    "name": "暴走特工",
                    "relicCores": 169,
                    "transmuteCores": 10
                },
                "30180303": {
                    "atk": 3011413,
                    "chipsCount": 141,
                    "eeBestScore": null,
                    "name": "羋ᴹᵁ",
                    "relicCores": 182,
                    "transmuteCores": 15
                },
                "31280751": {
                    "atk": 3485515,
                    "chipsCount": 137,
                    "eeBestScore": null,
                    "name": "yaoshin",
                    "relicCores": 314,
                    "transmuteCores": 20
                },
                "33343308": {
                    "atk": 1678552,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "Player 33343308",
                    "relicCores": 134,
                    "transmuteCores": 11
                },
                "34155225": {
                    "atk": 1965355,
                    "chipsCount": 105,
                    "eeBestScore": null,
                    "name": "老周史蒂芬",
                    "relicCores": 184,
                    "transmuteCores": 18
                },
                "35741498": {
                    "atk": 2682340,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "泰仔仔",
                    "relicCores": 147,
                    "transmuteCores": 14
                },
                "40420651": {
                    "atk": 1864376,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "呆媽媽內",
                    "relicCores": 165,
                    "transmuteCores": 6
                },
                "40435041": {
                    "atk": 2974145,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "05678",
                    "relicCores": 186,
                    "transmuteCores": 28
                },
                "43179264": {
                    "atk": 3273386,
                    "chipsCount": 147,
                    "eeBestScore": null,
                    "name": "冬天",
                    "relicCores": 243,
                    "transmuteCores": 74
                },
                "46089203": {
                    "atk": 2673441,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "OoWoWoO",
                    "relicCores": 185,
                    "transmuteCores": 24
                },
                "47795230": {
                    "atk": 2347485,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "西園寺隼人",
                    "relicCores": 242,
                    "transmuteCores": 18
                },
                "50609618": {
                    "atk": 1963734,
                    "chipsCount": 112,
                    "eeBestScore": null,
                    "name": "YW2026",
                    "relicCores": 156,
                    "transmuteCores": 17
                },
                "53039292": {
                    "atk": 1636896,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "TixNz",
                    "relicCores": 130,
                    "transmuteCores": 10
                },
                "54159520": {
                    "atk": 2213757,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "Lukeluke",
                    "relicCores": 162,
                    "transmuteCores": 7
                },
                "59806324": {
                    "atk": 1768658,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "TJCLOSER",
                    "relicCores": 183,
                    "transmuteCores": 2
                },
                "60679238": {
                    "atk": 2984716,
                    "chipsCount": 171,
                    "eeBestScore": null,
                    "name": "九龘龘龘",
                    "relicCores": 174,
                    "transmuteCores": 20
                },
                "64700907": {
                    "atk": 2264177,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "貓の三弟",
                    "relicCores": 142,
                    "transmuteCores": 30
                },
                "68899427": {
                    "atk": 1436497,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "Player 68899427",
                    "relicCores": 153,
                    "transmuteCores": 2
                },
                "70161872": {
                    "atk": 3274856,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "海珊先生",
                    "relicCores": 244,
                    "transmuteCores": 28
                },
                "75165036": {
                    "atk": 1559934,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "TìxNz",
                    "relicCores": 140,
                    "transmuteCores": 24
                },
                "75669999": {
                    "atk": 2508081,
                    "chipsCount": 169,
                    "eeBestScore": null,
                    "name": "荒謬絕倫",
                    "relicCores": 233,
                    "transmuteCores": 24
                },
                "77990146": {
                    "atk": 2274315,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "鱷魚牌蚊香",
                    "relicCores": 182,
                    "transmuteCores": 15
                }
            },
            "name": "摘星",
            "totalAtk": 78047697,
            "totalChips": 3289,
            "totalEe": null,
            "totalRelicCores": 6247,
            "totalTransmuteCores": 750
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1445,
            "members": {
                "100876140": {
                    "atk": 2423491,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "transmuteCores": 20
                },
                "102263647": {
                    "atk": 2480296,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2865248,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 233,
                    "transmuteCores": 60
                },
                "106162623": {
                    "atk": 1754545,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 16
                },
                "10754439": {
                    "atk": 1847414,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 140,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2043968,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 182,
                    "transmuteCores": 30
                },
                "112772047": {
                    "atk": 1781681,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 109,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1600730,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 20
                },
                "11463573": {
                    "atk": 1756562,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 97,
                    "transmuteCores": 14
                },
                "115742768": {
                    "atk": 148286,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2573340,
                    "chipsCount": 113,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 234,
                    "transmuteCores": 16
                },
                "18297536": {
                    "atk": 1805704,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "19575414": {
                    "atk": 2302954,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "Zveryok",
                    "relicCores": 215,
                    "transmuteCores": 12
                },
                "26277677": {
                    "atk": 2172934,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 130,
                    "transmuteCores": 11
                },
                "29321884": {
                    "atk": 3064098,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 204,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1545156,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 126,
                    "transmuteCores": 40
                },
                "30658936": {
                    "atk": 2136397,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 14
                },
                "32556489": {
                    "atk": 1671878,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 110,
                    "transmuteCores": 28
                },
                "35869301": {
                    "atk": 2682953,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 257,
                    "transmuteCores": 24
                },
                "36484758": {
                    "atk": 1638417,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1460209,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "PinkyToeBeans",
                    "relicCores": 153,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2227095,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 132,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2020916,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 139,
                    "transmuteCores": 2
                },
                "60687252": {
                    "atk": 3902274,
                    "chipsCount": 205,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 50
                },
                "64676255": {
                    "atk": 2278546,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 135,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 2059837,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 163,
                    "transmuteCores": 25
                },
                "69676999": {
                    "atk": 2006949,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "datamaster",
                    "relicCores": 146,
                    "transmuteCores": 3
                },
                "70603922": {
                    "atk": 1647062,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 1903643,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 131,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2168178,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 169,
                    "transmuteCores": 46
                },
                "75174428": {
                    "atk": 2164862,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 182,
                    "transmuteCores": 9
                },
                "79510960": {
                    "atk": 1631455,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 179,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1861119,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 175,
                    "transmuteCores": 4
                },
                "80972473": {
                    "atk": 2976264,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 176,
                    "transmuteCores": 38
                },
                "83339881": {
                    "atk": 3352054,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 60
                },
                "83861839": {
                    "atk": 1940699,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 108,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 2773084,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 200,
                    "transmuteCores": 28
                },
                "87954282": {
                    "atk": 2467836,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 223,
                    "transmuteCores": 62
                },
                "88203044": {
                    "atk": 2202250,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 126,
                    "transmuteCores": 24
                },
                "89511116": {
                    "atk": 2113073,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 12
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 70599157,
            "totalChips": 2054,
            "totalEe": null,
            "totalRelicCores": 5581,
            "totalTransmuteCores": 867
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

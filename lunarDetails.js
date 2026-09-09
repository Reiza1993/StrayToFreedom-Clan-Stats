// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-09-10
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "11878": {
            "clanId": 11878,
            "lunarPoints": 1400,
            "members": {
                "10383523": {
                    "atk": 1586375,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "Danzyl",
                    "relicCores": 144,
                    "transmuteCores": 6
                },
                "112605161": {
                    "atk": 2368198,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "♕Goose♕",
                    "relicCores": 163,
                    "transmuteCores": 25
                },
                "113844542": {
                    "atk": 1651046,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "chelocean",
                    "relicCores": 120,
                    "transmuteCores": 14
                },
                "26214336": {
                    "atk": 3355590,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "shamazan",
                    "relicCores": 226,
                    "transmuteCores": 48
                },
                "28427761": {
                    "atk": 2117290,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Birdbrains",
                    "relicCores": 191,
                    "transmuteCores": 28
                },
                "32116604": {
                    "atk": 2154051,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "Exoforge",
                    "relicCores": 170,
                    "transmuteCores": 6
                },
                "33477528": {
                    "atk": 2049013,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "OnlyoneHit",
                    "relicCores": 169,
                    "transmuteCores": 6
                },
                "33489345": {
                    "atk": 2011586,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "PandaNoPants",
                    "relicCores": 147,
                    "transmuteCores": 4
                },
                "35822983": {
                    "atk": 2041668,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "zazamel",
                    "relicCores": 117,
                    "transmuteCores": 20
                },
                "37446541": {
                    "atk": 2534952,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "NTE",
                    "relicCores": 196,
                    "transmuteCores": 2
                },
                "40394689": {
                    "atk": 1707402,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "DamnRabbit",
                    "relicCores": 158,
                    "transmuteCores": 20
                },
                "42969053": {
                    "atk": 2298537,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "DrHub",
                    "relicCores": 200,
                    "transmuteCores": 11
                },
                "43467787": {
                    "atk": 1789294,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "WESKERㅤ",
                    "relicCores": 130,
                    "transmuteCores": 16
                },
                "44671740": {
                    "atk": 2011392,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "Hikaru-nyan~♫",
                    "relicCores": 127,
                    "transmuteCores": 24
                },
                "44827911": {
                    "atk": 2892538,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "K͎o͎z͎m͎i͎k͎",
                    "relicCores": 229,
                    "transmuteCores": 32
                },
                "46254463": {
                    "atk": 729101,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "TacoDale",
                    "relicCores": 40,
                    "transmuteCores": 0
                },
                "46495613": {
                    "atk": 1820312,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "plywood",
                    "relicCores": 124,
                    "transmuteCores": 10
                },
                "50068502": {
                    "atk": 2089889,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "Snarf86",
                    "relicCores": 131,
                    "transmuteCores": 4
                },
                "52330561": {
                    "atk": 1906297,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "Santlov",
                    "relicCores": 91,
                    "transmuteCores": 0
                },
                "53883496": {
                    "atk": 1099968,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "mmamiaaa",
                    "relicCores": 169,
                    "transmuteCores": 2
                },
                "54896261": {
                    "atk": 1240542,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "1040010",
                    "relicCores": 104,
                    "transmuteCores": 2
                },
                "59246839": {
                    "atk": 1863227,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "Spade8",
                    "relicCores": 130,
                    "transmuteCores": 10
                },
                "63403730": {
                    "atk": 2252458,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "Redeemer99",
                    "relicCores": 161,
                    "transmuteCores": 14
                },
                "63610527": {
                    "atk": 1891801,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "fetalpanda",
                    "relicCores": 171,
                    "transmuteCores": 28
                },
                "63671001": {
                    "atk": 2706757,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "MrOrange62",
                    "relicCores": 215,
                    "transmuteCores": 20
                },
                "71754994": {
                    "atk": 1207114,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "AdamFalco",
                    "relicCores": 134,
                    "transmuteCores": 19
                },
                "72563114": {
                    "atk": 2117264,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Vaderios",
                    "relicCores": 129,
                    "transmuteCores": 16
                },
                "75089846": {
                    "atk": 2597635,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Goliathat",
                    "relicCores": 177,
                    "transmuteCores": 40
                },
                "79135712": {
                    "atk": 2630424,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "GreenGreenGoGoGo",
                    "relicCores": 177,
                    "transmuteCores": 50
                },
                "81886213": {
                    "atk": 1925727,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "SexyPanda",
                    "relicCores": 142,
                    "transmuteCores": 6
                },
                "81910859": {
                    "atk": 957096,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "BernasCunha",
                    "relicCores": 90,
                    "transmuteCores": 1
                },
                "83815001": {
                    "atk": 1582525,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "MrMystic96",
                    "relicCores": 101,
                    "transmuteCores": 5
                },
                "85278705": {
                    "atk": 1571439,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "SpeedFreak66",
                    "relicCores": 116,
                    "transmuteCores": 5
                },
                "88282130": {
                    "atk": 1209573,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "JuanCarlos123",
                    "relicCores": 158,
                    "transmuteCores": 4
                }
            },
            "name": "[H[E]L]",
            "totalAtk": 61974802,
            "totalChips": 1364,
            "totalEe": null,
            "totalRelicCores": 4725,
            "totalTransmuteCores": 495
        },
        "14285": {
            "clanId": 14285,
            "lunarPoints": 1400,
            "members": {
                "111478071": {
                    "atk": 1739589,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "M4h0",
                    "relicCores": 107,
                    "transmuteCores": 11
                },
                "118411654": {
                    "atk": 471452,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Udit12345",
                    "relicCores": 22,
                    "transmuteCores": 0
                },
                "121177915": {
                    "atk": 667055,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "BOSSMAN555",
                    "relicCores": 49,
                    "transmuteCores": 0
                },
                "13726600": {
                    "atk": 1809848,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "Blazignite",
                    "relicCores": 132,
                    "transmuteCores": 0
                },
                "16964881": {
                    "atk": 2308423,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "Santa2201",
                    "relicCores": 245,
                    "transmuteCores": 24
                },
                "17624071": {
                    "atk": 678388,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Caesar5",
                    "relicCores": 74,
                    "transmuteCores": 0
                },
                "21183728": {
                    "atk": 1579506,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "Favian",
                    "relicCores": 160,
                    "transmuteCores": 0
                },
                "21215525": {
                    "atk": 2087167,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "JanJenJii",
                    "relicCores": 205,
                    "transmuteCores": 0
                },
                "25768097": {
                    "atk": 1935454,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "MADMAN85",
                    "relicCores": 114,
                    "transmuteCores": 0
                },
                "27786030": {
                    "atk": 265973,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "iNxctrz",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "29400373": {
                    "atk": 1309016,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "nYeta",
                    "relicCores": 142,
                    "transmuteCores": 0
                },
                "31689579": {
                    "atk": 610583,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "Joe004",
                    "relicCores": 37,
                    "transmuteCores": 2
                },
                "39792505": {
                    "atk": 941500,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Shapoopie",
                    "relicCores": 92,
                    "transmuteCores": 0
                },
                "44517564": {
                    "atk": 615594,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "Ljon",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "46475016": {
                    "atk": 754994,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "Xic42",
                    "relicCores": 64,
                    "transmuteCores": 2
                },
                "46851847": {
                    "atk": 1895370,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "thelostdrummer",
                    "relicCores": 129,
                    "transmuteCores": 4
                },
                "49835321": {
                    "atk": 1657913,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Player 49835321",
                    "relicCores": 119,
                    "transmuteCores": 6
                },
                "51774619": {
                    "atk": 779844,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "dhtx-9906",
                    "relicCores": 98,
                    "transmuteCores": 0
                },
                "52468132": {
                    "atk": 2045413,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "Trout77",
                    "relicCores": 186,
                    "transmuteCores": 4
                },
                "55229841": {
                    "atk": 2156147,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "Squeak6667",
                    "relicCores": 171,
                    "transmuteCores": 20
                },
                "56755920": {
                    "atk": 252753,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "SAHAD",
                    "relicCores": 16,
                    "transmuteCores": 0
                },
                "56921811": {
                    "atk": 521710,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "もっチー",
                    "relicCores": 28,
                    "transmuteCores": 0
                },
                "57014004": {
                    "atk": 1134266,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "Jackjackhan",
                    "relicCores": 107,
                    "transmuteCores": 11
                },
                "60875137": {
                    "atk": 206109,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "ExileRipz",
                    "relicCores": 2,
                    "transmuteCores": 0
                },
                "64826830": {
                    "atk": 889295,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "pogiproblems",
                    "relicCores": 132,
                    "transmuteCores": 2
                },
                "64869974": {
                    "atk": 1889052,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "Player 64869974",
                    "relicCores": 116,
                    "transmuteCores": 1
                },
                "66171829": {
                    "atk": 2827971,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "ImagoDei",
                    "relicCores": 250,
                    "transmuteCores": 23
                },
                "66411194": {
                    "atk": 976920,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "Shjsjdskhdsgdkv",
                    "relicCores": 117,
                    "transmuteCores": 4
                },
                "73010433": {
                    "atk": 2331637,
                    "chipsCount": 86,
                    "eeBestScore": null,
                    "name": "Rolliee007",
                    "relicCores": 187,
                    "transmuteCores": 21
                },
                "78181937": {
                    "atk": 1534303,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "chiggitychungus",
                    "relicCores": 155,
                    "transmuteCores": 0
                },
                "78702866": {
                    "atk": 1395398,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "kimC",
                    "relicCores": 118,
                    "transmuteCores": 0
                },
                "79087590": {
                    "atk": 1320959,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "Player 79087590",
                    "relicCores": 89,
                    "transmuteCores": 6
                },
                "79910481": {
                    "atk": 1396252,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "ArcadesTS",
                    "relicCores": 160,
                    "transmuteCores": 2
                },
                "80668704": {
                    "atk": 1866876,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "HALILINTAR",
                    "relicCores": 122,
                    "transmuteCores": 6
                },
                "82694574": {
                    "atk": 444147,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "xBailey17x",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "83825071": {
                    "atk": 1754511,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "bailu白鹿",
                    "relicCores": 183,
                    "transmuteCores": 24
                },
                "83975157": {
                    "atk": 1011796,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "crassmasterdeluxe",
                    "relicCores": 120,
                    "transmuteCores": 0
                },
                "86806873": {
                    "atk": 1533104,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "Mo'alitö",
                    "relicCores": 172,
                    "transmuteCores": 2
                },
                "88995206": {
                    "atk": 1220322,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "Cannon88995206",
                    "relicCores": 161,
                    "transmuteCores": 4
                },
                "89808043": {
                    "atk": 970016,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "Player 89808043",
                    "relicCores": 75,
                    "transmuteCores": 1
                }
            },
            "name": "DärkStårDëity",
            "totalAtk": 47052862,
            "totalChips": 980,
            "totalEe": null,
            "totalRelicCores": 4238,
            "totalTransmuteCores": 180
        },
        "20686": {
            "clanId": 20686,
            "lunarPoints": 1455,
            "members": {
                "109048243": {
                    "atk": 1335625,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "이우주♡",
                    "relicCores": 142,
                    "transmuteCores": 14
                },
                "16494018": {
                    "atk": 2313184,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "톤이",
                    "relicCores": 167,
                    "transmuteCores": 32
                },
                "18449835": {
                    "atk": 2460368,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "강꽁",
                    "relicCores": 155,
                    "transmuteCores": 2
                },
                "18989799": {
                    "atk": 2188054,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "해삼빠",
                    "relicCores": 133,
                    "transmuteCores": 20
                },
                "19422928": {
                    "atk": 1977023,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "빠다레젼",
                    "relicCores": 182,
                    "transmuteCores": 18
                },
                "22152391": {
                    "atk": 2236784,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "모진우",
                    "relicCores": 159,
                    "transmuteCores": 3
                },
                "22946435": {
                    "atk": 2485387,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "빵꽁ᶻᵉˢᵗ",
                    "relicCores": 173,
                    "transmuteCores": 32
                },
                "29535884": {
                    "atk": 2578849,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "산업안전",
                    "relicCores": 133,
                    "transmuteCores": 10
                },
                "31227379": {
                    "atk": 2566365,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "Jonathanjeong",
                    "relicCores": 231,
                    "transmuteCores": 14
                },
                "33541678": {
                    "atk": 2148063,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "유주이아빠",
                    "relicCores": 189,
                    "transmuteCores": 14
                },
                "34795115": {
                    "atk": 3033644,
                    "chipsCount": 123,
                    "eeBestScore": null,
                    "name": "아아벤티",
                    "relicCores": 198,
                    "transmuteCores": 28
                },
                "35823266": {
                    "atk": 2479434,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "디에세오스타",
                    "relicCores": 211,
                    "transmuteCores": 20
                },
                "41558125": {
                    "atk": 2495741,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "날씨좋냐",
                    "relicCores": 150,
                    "transmuteCores": 10
                },
                "42841193": {
                    "atk": 1925293,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "Player 42841193",
                    "relicCores": 213,
                    "transmuteCores": 6
                },
                "44687561": {
                    "atk": 2195164,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "한입만주떼요",
                    "relicCores": 156,
                    "transmuteCores": 24
                },
                "46315642": {
                    "atk": 2131788,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "블루베리굿",
                    "relicCores": 173,
                    "transmuteCores": 28
                },
                "46545478": {
                    "atk": 2397096,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "라당ᵉ",
                    "relicCores": 180,
                    "transmuteCores": 20
                },
                "46858591": {
                    "atk": 3370924,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "46858591",
                    "relicCores": 259,
                    "transmuteCores": 28
                },
                "47571591": {
                    "atk": 2535292,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "시안안",
                    "relicCores": 257,
                    "transmuteCores": 28
                },
                "47693028": {
                    "atk": 2401786,
                    "chipsCount": 115,
                    "eeBestScore": null,
                    "name": "띵동ㅠㅠ",
                    "relicCores": 199,
                    "transmuteCores": 24
                },
                "49318316": {
                    "atk": 2137059,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "홍제천",
                    "relicCores": 162,
                    "transmuteCores": 24
                },
                "50775253": {
                    "atk": 2212411,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "호이호이00",
                    "relicCores": 225,
                    "transmuteCores": 12
                },
                "54812944": {
                    "atk": 3386588,
                    "chipsCount": 146,
                    "eeBestScore": null,
                    "name": "빛ᶻᵉˢᵗ",
                    "relicCores": 232,
                    "transmuteCores": 60
                },
                "56898752": {
                    "atk": 2256417,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "아노다이",
                    "relicCores": 146,
                    "transmuteCores": 24
                },
                "57663602": {
                    "atk": 2239162,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "한황",
                    "relicCores": 170,
                    "transmuteCores": 24
                },
                "58173388": {
                    "atk": 2470397,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "여포ᶻᵉˢᵗ",
                    "relicCores": 163,
                    "transmuteCores": 28
                },
                "65272289": {
                    "atk": 2349908,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "꼬붕e",
                    "relicCores": 153,
                    "transmuteCores": 26
                },
                "66052659": {
                    "atk": 1918639,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "율라푸",
                    "relicCores": 232,
                    "transmuteCores": 25
                },
                "68951117": {
                    "atk": 2377933,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "보스ᶻᵉˢᵗ",
                    "relicCores": 142,
                    "transmuteCores": 32
                },
                "69125027": {
                    "atk": 2496947,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "성재ᵂᴬᴿ",
                    "relicCores": 161,
                    "transmuteCores": 9
                },
                "76389005": {
                    "atk": 2841233,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "SeiSui",
                    "relicCores": 256,
                    "transmuteCores": 38
                },
                "78299298": {
                    "atk": 1844298,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "한방깜",
                    "relicCores": 172,
                    "transmuteCores": 15
                },
                "82076756": {
                    "atk": 2294594,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "멍뭉이왕",
                    "relicCores": 159,
                    "transmuteCores": 36
                },
                "82275515": {
                    "atk": 2453332,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "탕탕작업자",
                    "relicCores": 211,
                    "transmuteCores": 28
                },
                "83243293": {
                    "atk": 3010021,
                    "chipsCount": 94,
                    "eeBestScore": null,
                    "name": "아나헬",
                    "relicCores": 212,
                    "transmuteCores": 66
                }
            },
            "name": "Zest",
            "totalAtk": 74543925,
            "totalChips": 1972,
            "totalEe": null,
            "totalRelicCores": 5760,
            "totalTransmuteCores": 792
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1455,
            "members": {
                "100876140": {
                    "atk": 2535211,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "transmuteCores": 20
                },
                "102263647": {
                    "atk": 2480540,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2868545,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 246,
                    "transmuteCores": 60
                },
                "106162623": {
                    "atk": 1755735,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 16
                },
                "10754439": {
                    "atk": 1873051,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 140,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2053358,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 185,
                    "transmuteCores": 30
                },
                "112772047": {
                    "atk": 1863099,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 114,
                    "transmuteCores": 28
                },
                "113690788": {
                    "atk": 1824703,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 20
                },
                "11463573": {
                    "atk": 1711409,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 114,
                    "transmuteCores": 24
                },
                "115742768": {
                    "atk": 48926,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2551478,
                    "chipsCount": 118,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 210,
                    "transmuteCores": 20
                },
                "18297536": {
                    "atk": 1812519,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "19575414": {
                    "atk": 2286671,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "Zveryok",
                    "relicCores": 226,
                    "transmuteCores": 12
                },
                "26277677": {
                    "atk": 2177496,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 130,
                    "transmuteCores": 11
                },
                "29321884": {
                    "atk": 3080438,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 204,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1467598,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 126,
                    "transmuteCores": 40
                },
                "30658936": {
                    "atk": 2138523,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 16
                },
                "32556489": {
                    "atk": 1784814,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 95,
                    "transmuteCores": 14
                },
                "35869301": {
                    "atk": 2610396,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 257,
                    "transmuteCores": 24
                },
                "36484758": {
                    "atk": 1642000,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1425141,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "PinkyToeBeans",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2231481,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 132,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2005296,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 155,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 3906774,
                    "chipsCount": 205,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 50
                },
                "64676255": {
                    "atk": 2303724,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 151,
                    "transmuteCores": 24
                },
                "66607264": {
                    "atk": 2070523,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 165,
                    "transmuteCores": 25
                },
                "69676999": {
                    "atk": 2063556,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "datamaster",
                    "relicCores": 127,
                    "transmuteCores": 1
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
                    "atk": 1904650,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 140,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2170228,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 169,
                    "transmuteCores": 46
                },
                "75174428": {
                    "atk": 2188732,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 182,
                    "transmuteCores": 9
                },
                "79510960": {
                    "atk": 1626585,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 179,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1798192,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 175,
                    "transmuteCores": 4
                },
                "80972473": {
                    "atk": 2983253,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 177,
                    "transmuteCores": 38
                },
                "83339881": {
                    "atk": 3378370,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 60
                },
                "83861839": {
                    "atk": 1978774,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 112,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 2772296,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 200,
                    "transmuteCores": 28
                },
                "87954282": {
                    "atk": 2470509,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 223,
                    "transmuteCores": 66
                },
                "88203044": {
                    "atk": 2204760,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 126,
                    "transmuteCores": 24
                },
                "89511116": {
                    "atk": 2139006,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 12
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 70927960,
            "totalChips": 2066,
            "totalEe": null,
            "totalRelicCores": 5630,
            "totalTransmuteCores": 875
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

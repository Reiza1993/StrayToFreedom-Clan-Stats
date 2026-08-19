// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-08-20
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalEe each only count that
// clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores sums the
// top 30 members by Relic Cores, not the top 30 by ATK - each total is ranked
// independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "10172": {
            "clanId": 10172,
            "lunarPoints": 1305,
            "members": {
                "100081934": {
                    "atk": 834052,
                    "eeBestScore": null,
                    "name": "@たくちゃん",
                    "relicCores": 63,
                    "transmuteCores": 1
                },
                "101743626": {
                    "atk": 810726,
                    "eeBestScore": null,
                    "name": "Jiet",
                    "relicCores": 89,
                    "transmuteCores": 0
                },
                "107916930": {
                    "atk": 762410,
                    "eeBestScore": null,
                    "name": "MeoMeoWwW",
                    "relicCores": 56,
                    "transmuteCores": 0
                },
                "112386020": {
                    "atk": 824430,
                    "eeBestScore": null,
                    "name": "Player 112386020",
                    "relicCores": 56,
                    "transmuteCores": 0
                },
                "11418469": {
                    "atk": 847340,
                    "eeBestScore": null,
                    "name": "tandut",
                    "relicCores": 65,
                    "transmuteCores": 1
                },
                "116067349": {
                    "atk": 456858,
                    "eeBestScore": null,
                    "name": "Dviett",
                    "relicCores": 24,
                    "transmuteCores": 0
                },
                "118697809": {
                    "atk": 1272102,
                    "eeBestScore": null,
                    "name": "NgọcLoan",
                    "relicCores": 81,
                    "transmuteCores": 3
                },
                "11988434": {
                    "atk": 650440,
                    "eeBestScore": null,
                    "name": "TaylorSnake",
                    "relicCores": 59,
                    "transmuteCores": 0
                },
                "13768096": {
                    "atk": 1998587,
                    "eeBestScore": null,
                    "name": "nhân1988",
                    "relicCores": 163,
                    "transmuteCores": 16
                },
                "13858270": {
                    "atk": 1040069,
                    "eeBestScore": null,
                    "name": "dảkr",
                    "relicCores": 133,
                    "transmuteCores": 2
                },
                "18066895": {
                    "atk": 1065225,
                    "eeBestScore": null,
                    "name": "HưởngMai253",
                    "relicCores": 83,
                    "transmuteCores": 0
                },
                "20351816": {
                    "atk": 1336343,
                    "eeBestScore": null,
                    "name": "Moiiii",
                    "relicCores": 167,
                    "transmuteCores": 8
                },
                "23914533": {
                    "atk": 1421185,
                    "eeBestScore": null,
                    "name": "TaiLee",
                    "relicCores": 145,
                    "transmuteCores": 12
                },
                "24858499": {
                    "atk": 1244674,
                    "eeBestScore": null,
                    "name": "HồngHà",
                    "relicCores": 184,
                    "transmuteCores": 8
                },
                "25101338": {
                    "atk": 727248,
                    "eeBestScore": null,
                    "name": "LiteVN",
                    "relicCores": 64,
                    "transmuteCores": 1
                },
                "25521492": {
                    "atk": 978615,
                    "eeBestScore": null,
                    "name": "kẻcôđộc",
                    "relicCores": 107,
                    "transmuteCores": 18
                },
                "27367359": {
                    "atk": 627201,
                    "eeBestScore": null,
                    "name": "JavanIV",
                    "relicCores": 42,
                    "transmuteCores": 0
                },
                "27409283": {
                    "atk": 290530,
                    "eeBestScore": null,
                    "name": "HoangPahm",
                    "relicCores": 21,
                    "transmuteCores": 0
                },
                "32599991": {
                    "atk": 602677,
                    "eeBestScore": null,
                    "name": "Catchellers",
                    "relicCores": 53,
                    "transmuteCores": 0
                },
                "32949327": {
                    "atk": 862527,
                    "eeBestScore": null,
                    "name": "lđt2107",
                    "relicCores": 77,
                    "transmuteCores": 0
                },
                "33296023": {
                    "atk": 709181,
                    "eeBestScore": null,
                    "name": "HKVIE",
                    "relicCores": 80,
                    "transmuteCores": 4
                },
                "34532805": {
                    "atk": 1168017,
                    "eeBestScore": null,
                    "name": "SimaKan",
                    "relicCores": 138,
                    "transmuteCores": 0
                },
                "35338398": {
                    "atk": 1567921,
                    "eeBestScore": null,
                    "name": "aaassf",
                    "relicCores": 123,
                    "transmuteCores": 7
                },
                "36367519": {
                    "atk": 842221,
                    "eeBestScore": null,
                    "name": "LUONGCD",
                    "relicCores": 60,
                    "transmuteCores": 0
                },
                "37110374": {
                    "atk": 357602,
                    "eeBestScore": null,
                    "name": "SioXZac",
                    "relicCores": 17,
                    "transmuteCores": 0
                },
                "38152148": {
                    "atk": 700707,
                    "eeBestScore": null,
                    "name": "HADUCTRUNG",
                    "relicCores": 58,
                    "transmuteCores": 1
                },
                "43781586": {
                    "atk": 1019866,
                    "eeBestScore": null,
                    "name": "AMM-cocaiconcac",
                    "relicCores": 105,
                    "transmuteCores": 2
                },
                "47569073": {
                    "atk": 879217,
                    "eeBestScore": null,
                    "name": "LNGH",
                    "relicCores": 66,
                    "transmuteCores": 2
                },
                "54676525": {
                    "atk": 1330698,
                    "eeBestScore": null,
                    "name": "Swight_50",
                    "relicCores": 150,
                    "transmuteCores": 1
                },
                "54773072": {
                    "atk": 605906,
                    "eeBestScore": null,
                    "name": "asokaplayer",
                    "relicCores": 93,
                    "transmuteCores": 0
                },
                "57017062": {
                    "atk": 852139,
                    "eeBestScore": null,
                    "name": "Ngchung",
                    "relicCores": 149,
                    "transmuteCores": 0
                },
                "57460060": {
                    "atk": 828656,
                    "eeBestScore": null,
                    "name": "•DKN•",
                    "relicCores": 70,
                    "transmuteCores": 4
                },
                "59604481": {
                    "atk": 612928,
                    "eeBestScore": null,
                    "name": "s12k4",
                    "relicCores": 31,
                    "transmuteCores": 2
                },
                "60470642": {
                    "atk": 1081445,
                    "eeBestScore": null,
                    "name": "ConGaCon",
                    "relicCores": 144,
                    "transmuteCores": 3
                },
                "65090583": {
                    "atk": 773097,
                    "eeBestScore": null,
                    "name": "NguyễnKiếnHuyy",
                    "relicCores": 69,
                    "transmuteCores": 4
                },
                "66427934": {
                    "atk": 1537850,
                    "eeBestScore": null,
                    "name": "8Tỏi",
                    "relicCores": 118,
                    "transmuteCores": 12
                },
                "81206073": {
                    "atk": 520974,
                    "eeBestScore": null,
                    "name": "HarryNguyen",
                    "relicCores": 45,
                    "transmuteCores": 0
                },
                "82222845": {
                    "atk": 673965,
                    "eeBestScore": null,
                    "name": "Bliztcrank",
                    "relicCores": 7,
                    "transmuteCores": 0
                },
                "86494775": {
                    "atk": 1665932,
                    "eeBestScore": null,
                    "name": "위량량",
                    "relicCores": 178,
                    "transmuteCores": 14
                },
                "87710507": {
                    "atk": 1039309,
                    "eeBestScore": null,
                    "name": "kha'zix",
                    "relicCores": 87,
                    "transmuteCores": 4
                }
            },
            "name": "VietNam",
            "totalAtk": 32021789,
            "totalEe": null,
            "totalRelicCores": 3168,
            "totalTransmuteCores": 130
        },
        "23429": {
            "clanId": 23429,
            "lunarPoints": 1415,
            "members": {
                "101538577": {
                    "atk": 756537,
                    "eeBestScore": null,
                    "name": "MAHER911",
                    "relicCores": 65,
                    "transmuteCores": 10
                },
                "101862559": {
                    "atk": 1829917,
                    "eeBestScore": null,
                    "name": "Piciulo",
                    "relicCores": 170,
                    "transmuteCores": 1
                },
                "102673788": {
                    "atk": 948184,
                    "eeBestScore": null,
                    "name": "V3GETA",
                    "relicCores": 73,
                    "transmuteCores": 1
                },
                "10315332": {
                    "atk": 1542986,
                    "eeBestScore": null,
                    "name": "Player 10315332",
                    "relicCores": 124,
                    "transmuteCores": 3
                },
                "104351720": {
                    "atk": 1936201,
                    "eeBestScore": null,
                    "name": "cantcatchmefordays",
                    "relicCores": 130,
                    "transmuteCores": 28
                },
                "107893497": {
                    "atk": 563834,
                    "eeBestScore": null,
                    "name": "snapbackchef",
                    "relicCores": 30,
                    "transmuteCores": 0
                },
                "113240619": {
                    "atk": 1045973,
                    "eeBestScore": null,
                    "name": "TVG_Akshath",
                    "relicCores": 67,
                    "transmuteCores": 10
                },
                "115762740": {
                    "atk": 1265105,
                    "eeBestScore": null,
                    "name": "SuperBrah",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "11634165": {
                    "atk": 2261644,
                    "eeBestScore": null,
                    "name": "BeeBurst",
                    "relicCores": 116,
                    "transmuteCores": 10
                },
                "20129251": {
                    "atk": 1747285,
                    "eeBestScore": null,
                    "name": "VoiCòi",
                    "relicCores": 139,
                    "transmuteCores": 2
                },
                "21856441": {
                    "atk": 2404498,
                    "eeBestScore": null,
                    "name": "SCㅡYaboisasha",
                    "relicCores": 134,
                    "transmuteCores": 24
                },
                "31537465": {
                    "atk": 243454,
                    "eeBestScore": null,
                    "name": "Ebro",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "35273068": {
                    "atk": 1925233,
                    "eeBestScore": null,
                    "name": "MrDanlev00",
                    "relicCores": 128,
                    "transmuteCores": 2
                },
                "36717776": {
                    "atk": 1481642,
                    "eeBestScore": null,
                    "name": "DENNAO",
                    "relicCores": 173,
                    "transmuteCores": 2
                },
                "37316038": {
                    "atk": 1725617,
                    "eeBestScore": null,
                    "name": "Wescum",
                    "relicCores": 136,
                    "transmuteCores": 15
                },
                "37885765": {
                    "atk": 2210092,
                    "eeBestScore": null,
                    "name": "CoelhoT",
                    "relicCores": 126,
                    "transmuteCores": 28
                },
                "38083990": {
                    "atk": 1815199,
                    "eeBestScore": null,
                    "name": "iJe44",
                    "relicCores": 164,
                    "transmuteCores": 20
                },
                "38579215": {
                    "atk": 1978097,
                    "eeBestScore": null,
                    "name": "DR33MER",
                    "relicCores": 101,
                    "transmuteCores": 12
                },
                "46947799": {
                    "atk": 1840793,
                    "eeBestScore": null,
                    "name": "DonkeyChung",
                    "relicCores": 167,
                    "transmuteCores": 16
                },
                "47339448": {
                    "atk": 2168909,
                    "eeBestScore": null,
                    "name": "Michrou",
                    "relicCores": 177,
                    "transmuteCores": 28
                },
                "48364127": {
                    "atk": 1418335,
                    "eeBestScore": null,
                    "name": "Drugz",
                    "relicCores": 126,
                    "transmuteCores": 6
                },
                "49389477": {
                    "atk": 2081327,
                    "eeBestScore": null,
                    "name": "qema",
                    "relicCores": 119,
                    "transmuteCores": 24
                },
                "51495946": {
                    "atk": 2487462,
                    "eeBestScore": null,
                    "name": "Caladin87",
                    "relicCores": 162,
                    "transmuteCores": 24
                },
                "51731005": {
                    "atk": 2267228,
                    "eeBestScore": null,
                    "name": "Assyrian",
                    "relicCores": 164,
                    "transmuteCores": 20
                },
                "52438965": {
                    "atk": 1122427,
                    "eeBestScore": null,
                    "name": "finsup",
                    "relicCores": 106,
                    "transmuteCores": 0
                },
                "56365940": {
                    "atk": 1578705,
                    "eeBestScore": null,
                    "name": "CharlesTheGG",
                    "relicCores": 195,
                    "transmuteCores": 2
                },
                "58838701": {
                    "atk": 2677198,
                    "eeBestScore": null,
                    "name": "Lambo224",
                    "relicCores": 130,
                    "transmuteCores": 1
                },
                "59516352": {
                    "atk": 1912002,
                    "eeBestScore": null,
                    "name": "☠╚SIИGH╗⛧",
                    "relicCores": 150,
                    "transmuteCores": 28
                },
                "62070720": {
                    "atk": 1713181,
                    "eeBestScore": null,
                    "name": "Player 62070720",
                    "relicCores": 155,
                    "transmuteCores": 4
                },
                "63630090": {
                    "atk": 1973397,
                    "eeBestScore": null,
                    "name": "FuzzyDunlop",
                    "relicCores": 144,
                    "transmuteCores": 28
                },
                "64927122": {
                    "atk": 1833027,
                    "eeBestScore": null,
                    "name": "Mr1Eye",
                    "relicCores": 151,
                    "transmuteCores": 6
                },
                "66541481": {
                    "atk": 1886277,
                    "eeBestScore": null,
                    "name": "PipipapipoㅣStray",
                    "relicCores": 138,
                    "transmuteCores": 16
                },
                "67082365": {
                    "atk": 1804495,
                    "eeBestScore": null,
                    "name": "PipigunMan",
                    "relicCores": 97,
                    "transmuteCores": 0
                },
                "69516227": {
                    "atk": 1670592,
                    "eeBestScore": null,
                    "name": "Branfarb",
                    "relicCores": 104,
                    "transmuteCores": 3
                },
                "70957479": {
                    "atk": 2099739,
                    "eeBestScore": null,
                    "name": "Lilwilkeee",
                    "relicCores": 137,
                    "transmuteCores": 38
                },
                "78803367": {
                    "atk": 1413820,
                    "eeBestScore": null,
                    "name": "Player 78803367",
                    "relicCores": 124,
                    "transmuteCores": 2
                },
                "81508980": {
                    "atk": 2369943,
                    "eeBestScore": null,
                    "name": "cinnimini",
                    "relicCores": 106,
                    "transmuteCores": 14
                },
                "82581907": {
                    "atk": 1630766,
                    "eeBestScore": null,
                    "name": "SnakeCharmer113",
                    "relicCores": 89,
                    "transmuteCores": 14
                },
                "85810397": {
                    "atk": 2106157,
                    "eeBestScore": null,
                    "name": "taxevadxr",
                    "relicCores": 127,
                    "transmuteCores": 28
                },
                "89144471": {
                    "atk": 2089187,
                    "eeBestScore": null,
                    "name": "Grrinns2.0",
                    "relicCores": 143,
                    "transmuteCores": 28
                }
            },
            "name": "STRAYtOuttaCompton",
            "totalAtk": 59567154,
            "totalEe": null,
            "totalRelicCores": 4266,
            "totalTransmuteCores": 491
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1415,
            "members": {
                "102263647": {
                    "atk": 2438069,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2831569,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 225,
                    "transmuteCores": 56
                },
                "106162623": {
                    "atk": 1726193,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 14
                },
                "10754439": {
                    "atk": 1816161,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 140,
                    "transmuteCores": 14
                },
                "108546985": {
                    "atk": 1960554,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 181,
                    "transmuteCores": 30
                },
                "112772047": {
                    "atk": 1599087,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 98,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1575728,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 102,
                    "transmuteCores": 20
                },
                "11463573": {
                    "atk": 1602484,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 106,
                    "transmuteCores": 24
                },
                "115742768": {
                    "atk": 147341,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2554792,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 234,
                    "transmuteCores": 16
                },
                "18297536": {
                    "atk": 1804276,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 90,
                    "transmuteCores": 24
                },
                "19575414": {
                    "atk": 2232680,
                    "eeBestScore": null,
                    "name": "Zveryok",
                    "relicCores": 210,
                    "transmuteCores": 11
                },
                "21496121": {
                    "atk": 1428250,
                    "eeBestScore": null,
                    "name": "b0ss",
                    "relicCores": 114,
                    "transmuteCores": 3
                },
                "26277677": {
                    "atk": 2012827,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 129,
                    "transmuteCores": 11
                },
                "29321884": {
                    "atk": 2970677,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 203,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1525821,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 111,
                    "transmuteCores": 34
                },
                "30658936": {
                    "atk": 2121601,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 12
                },
                "32556489": {
                    "atk": 1647413,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 110,
                    "transmuteCores": 24
                },
                "35869301": {
                    "atk": 2590163,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 243,
                    "transmuteCores": 10
                },
                "36484758": {
                    "atk": 1496204,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1323968,
                    "eeBestScore": null,
                    "name": "PinkyToeBeans",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2044146,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 126,
                    "transmuteCores": 24
                },
                "59566866": {
                    "atk": 1978436,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 131,
                    "transmuteCores": 1
                },
                "60687252": {
                    "atk": 3777064,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 46
                },
                "64676255": {
                    "atk": 2223576,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 144,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 1788858,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 156,
                    "transmuteCores": 24
                },
                "69676999": {
                    "atk": 1929127,
                    "eeBestScore": null,
                    "name": "datamaster",
                    "relicCores": 146,
                    "transmuteCores": 3
                },
                "70603922": {
                    "atk": 1474995,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 1740198,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 131,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2061129,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 169,
                    "transmuteCores": 37
                },
                "75174428": {
                    "atk": 2132347,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 182,
                    "transmuteCores": 9
                },
                "79510960": {
                    "atk": 1620170,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 173,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1773850,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 170,
                    "transmuteCores": 2
                },
                "80972473": {
                    "atk": 2807694,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 173,
                    "transmuteCores": 38
                },
                "83339881": {
                    "atk": 3332070,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 48
                },
                "83861839": {
                    "atk": 1746863,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 105,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 2360253,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 129,
                    "transmuteCores": 0
                },
                "87954282": {
                    "atk": 2442303,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 223,
                    "transmuteCores": 54
                },
                "88203044": {
                    "atk": 2267767,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 114,
                    "transmuteCores": 18
                },
                "89511116": {
                    "atk": 1941565,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 182,
                    "transmuteCores": 7
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 67054221,
            "totalEe": null,
            "totalRelicCores": 5317,
            "totalTransmuteCores": 759
        },
        "65698": {
            "clanId": 65698,
            "lunarPoints": 1330,
            "members": {
                "115240220": {
                    "atk": 1085162,
                    "eeBestScore": null,
                    "name": "！？！？！？",
                    "relicCores": 37,
                    "transmuteCores": 0
                },
                "118757874": {
                    "atk": 863227,
                    "eeBestScore": null,
                    "name": "a　　　　　",
                    "relicCores": 47,
                    "transmuteCores": 4
                },
                "15054717": {
                    "atk": 1384101,
                    "eeBestScore": null,
                    "name": "Player 15054717",
                    "relicCores": 176,
                    "transmuteCores": 1
                },
                "20848339": {
                    "atk": 646778,
                    "eeBestScore": null,
                    "name": "포람페",
                    "relicCores": 30,
                    "transmuteCores": 0
                },
                "23346311": {
                    "atk": 1904888,
                    "eeBestScore": null,
                    "name": "q아까그놈p",
                    "relicCores": 132,
                    "transmuteCores": 0
                },
                "24945157": {
                    "atk": 975798,
                    "eeBestScore": null,
                    "name": "황제의검",
                    "relicCores": 95,
                    "transmuteCores": 18
                },
                "26560138": {
                    "atk": 2043398,
                    "eeBestScore": null,
                    "name": "김주삼",
                    "relicCores": 143,
                    "transmuteCores": 24
                },
                "29718708": {
                    "atk": 2347876,
                    "eeBestScore": null,
                    "name": "반칸",
                    "relicCores": 162,
                    "transmuteCores": 20
                },
                "35040938": {
                    "atk": 1266130,
                    "eeBestScore": null,
                    "name": "Player 35040938",
                    "relicCores": 104,
                    "transmuteCores": 0
                },
                "37421834": {
                    "atk": 1359253,
                    "eeBestScore": null,
                    "name": "스쿨몰",
                    "relicCores": 132,
                    "transmuteCores": 14
                },
                "38199856": {
                    "atk": 2849325,
                    "eeBestScore": null,
                    "name": "조부장님",
                    "relicCores": 237,
                    "transmuteCores": 28
                },
                "38377903": {
                    "atk": 1435287,
                    "eeBestScore": null,
                    "name": "안재혐",
                    "relicCores": 102,
                    "transmuteCores": 0
                },
                "39719137": {
                    "atk": 1034596,
                    "eeBestScore": null,
                    "name": "광천수",
                    "relicCores": 83,
                    "transmuteCores": 0
                },
                "39857035": {
                    "atk": 636563,
                    "eeBestScore": null,
                    "name": "미켈란젤로",
                    "relicCores": 72,
                    "transmuteCores": 0
                },
                "42208597": {
                    "atk": 843788,
                    "eeBestScore": null,
                    "name": "적산차태식",
                    "relicCores": 56,
                    "transmuteCores": 0
                },
                "42726866": {
                    "atk": 1522317,
                    "eeBestScore": null,
                    "name": "조각황태자",
                    "relicCores": 103,
                    "transmuteCores": 10
                },
                "44394798": {
                    "atk": 1078981,
                    "eeBestScore": null,
                    "name": "알파치노",
                    "relicCores": 85,
                    "transmuteCores": 2
                },
                "44571336": {
                    "atk": 769214,
                    "eeBestScore": null,
                    "name": "뛰는적토마",
                    "relicCores": 63,
                    "transmuteCores": 0
                },
                "44922998": {
                    "atk": 994400,
                    "eeBestScore": null,
                    "name": "동그라믹",
                    "relicCores": 85,
                    "transmuteCores": 44
                },
                "45375831": {
                    "atk": 1644729,
                    "eeBestScore": null,
                    "name": "Player 45375831",
                    "relicCores": 159,
                    "transmuteCores": 14
                },
                "52688219": {
                    "atk": 1872676,
                    "eeBestScore": null,
                    "name": "현우현민",
                    "relicCores": 169,
                    "transmuteCores": 10
                },
                "53057433": {
                    "atk": 966747,
                    "eeBestScore": null,
                    "name": "alzip",
                    "relicCores": 82,
                    "transmuteCores": 0
                },
                "56347070": {
                    "atk": 845956,
                    "eeBestScore": null,
                    "name": "Player 56347070",
                    "relicCores": 158,
                    "transmuteCores": 2
                },
                "57012875": {
                    "atk": 1072203,
                    "eeBestScore": null,
                    "name": "Player 57012875",
                    "relicCores": 111,
                    "transmuteCores": 6
                },
                "59900177": {
                    "atk": 1040496,
                    "eeBestScore": null,
                    "name": "중장비특공대",
                    "relicCores": 134,
                    "transmuteCores": 0
                },
                "64743069": {
                    "atk": 2113410,
                    "eeBestScore": null,
                    "name": "나프타실",
                    "relicCores": 146,
                    "transmuteCores": 42
                },
                "65449679": {
                    "atk": 450987,
                    "eeBestScore": null,
                    "name": "Player 65449679",
                    "relicCores": 30,
                    "transmuteCores": 4
                },
                "68059540": {
                    "atk": 393223,
                    "eeBestScore": null,
                    "name": "바지저버",
                    "relicCores": 25,
                    "transmuteCores": 0
                },
                "68104050": {
                    "atk": 1477735,
                    "eeBestScore": null,
                    "name": "육앤샤",
                    "relicCores": 67,
                    "transmuteCores": 2
                },
                "70275852": {
                    "atk": 998275,
                    "eeBestScore": null,
                    "name": "민모바",
                    "relicCores": 62,
                    "transmuteCores": 0
                },
                "78649958": {
                    "atk": 1286882,
                    "eeBestScore": null,
                    "name": "IIIlIIIIIlIIIl",
                    "relicCores": 122,
                    "transmuteCores": 2
                },
                "79724773": {
                    "atk": 812927,
                    "eeBestScore": null,
                    "name": "꿀소라빵",
                    "relicCores": 38,
                    "transmuteCores": 0
                },
                "80108618": {
                    "atk": 932999,
                    "eeBestScore": null,
                    "name": "카리스마탕탕",
                    "relicCores": 84,
                    "transmuteCores": 4
                },
                "85084628": {
                    "atk": 1396704,
                    "eeBestScore": null,
                    "name": "사랑love",
                    "relicCores": 74,
                    "transmuteCores": 10
                },
                "89443736": {
                    "atk": 1281719,
                    "eeBestScore": null,
                    "name": "라캐나다",
                    "relicCores": 159,
                    "transmuteCores": 10
                }
            },
            "name": "승민사랑",
            "totalAtk": 40731985,
            "totalEe": null,
            "totalRelicCores": 3404,
            "totalTransmuteCores": 271
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

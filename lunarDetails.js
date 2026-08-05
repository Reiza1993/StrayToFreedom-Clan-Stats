// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-08-06
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalEe each only count that
// clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores sums the
// top 30 members by Relic Cores, not the top 30 by ATK - each total is ranked
// independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "113204": {
            "clanId": 113204,
            "lunarPoints": 1445,
            "members": {
                "103826115": {
                    "atk": 3412362,
                    "eeBestScore": 1.595337004520631e+22,
                    "name": "아이지",
                    "relicCores": 313,
                    "transmuteCores": 54
                },
                "113840622": {
                    "atk": 2731514,
                    "eeBestScore": 1.0494662174926073e+21,
                    "name": "아담의눈물",
                    "relicCores": 212,
                    "transmuteCores": 50
                },
                "115722703": {
                    "atk": 1145,
                    "eeBestScore": null,
                    "name": "tedmatthew",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "118431704": {
                    "atk": 1529789,
                    "eeBestScore": 7.553992785784974e+18,
                    "name": "세희몬",
                    "relicCores": 80,
                    "transmuteCores": 28
                },
                "118616987": {
                    "atk": 1324846,
                    "eeBestScore": 9.866951847117082e+17,
                    "name": "니혼당",
                    "relicCores": 72,
                    "transmuteCores": 1
                },
                "14140618": {
                    "atk": 2203734,
                    "eeBestScore": 1.4677067198779574e+20,
                    "name": "Aaa200",
                    "relicCores": 105,
                    "transmuteCores": 14
                },
                "14897397": {
                    "atk": 2849540,
                    "eeBestScore": 2.3084655187229055e+21,
                    "name": "백상무",
                    "relicCores": 259,
                    "transmuteCores": 28
                },
                "16238009": {
                    "atk": 3060755,
                    "eeBestScore": 3.688723611904213e+21,
                    "name": "아진ᘻ",
                    "relicCores": 228,
                    "transmuteCores": 34
                },
                "16275182": {
                    "atk": 2387173,
                    "eeBestScore": null,
                    "name": "유순자할범",
                    "relicCores": 143,
                    "transmuteCores": 28
                },
                "17941084": {
                    "atk": 2041873,
                    "eeBestScore": 9.067064711824233e+19,
                    "name": "윤잴",
                    "relicCores": 156,
                    "transmuteCores": 7
                },
                "18721756": {
                    "atk": 2461326,
                    "eeBestScore": 3.7315668739191013e+20,
                    "name": "잿빚노을",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "21897770": {
                    "atk": 2164381,
                    "eeBestScore": 8.288515112717132e+19,
                    "name": "✤딜러_ヅ",
                    "relicCores": 130,
                    "transmuteCores": 18
                },
                "22606973": {
                    "atk": 1802497,
                    "eeBestScore": 1.9012048288384262e+19,
                    "name": "현현이임",
                    "relicCores": 142,
                    "transmuteCores": 16
                },
                "26761158": {
                    "atk": 2549483,
                    "eeBestScore": 7.683184059391197e+19,
                    "name": "머글매직tv",
                    "relicCores": 159,
                    "transmuteCores": 11
                },
                "28701504": {
                    "atk": 1971644,
                    "eeBestScore": 2.4205397983537467e+19,
                    "name": "숲",
                    "relicCores": 67,
                    "transmuteCores": 18
                },
                "28741599": {
                    "atk": 1799211,
                    "eeBestScore": 5.653463910632276e+19,
                    "name": "팅팅특공머S",
                    "relicCores": 130,
                    "transmuteCores": 30
                },
                "30060493": {
                    "atk": 2181707,
                    "eeBestScore": 4.127428643828524e+20,
                    "name": "고구마무라",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "32681468": {
                    "atk": 1961417,
                    "eeBestScore": 2.283064227975734e+19,
                    "name": "하이아부지",
                    "relicCores": 139,
                    "transmuteCores": 15
                },
                "33264682": {
                    "atk": 2066000,
                    "eeBestScore": 4.23834320881611e+19,
                    "name": "제니스퀸",
                    "relicCores": 131,
                    "transmuteCores": 20
                },
                "36165689": {
                    "atk": 1790975,
                    "eeBestScore": 1.4466370533717185e+19,
                    "name": "SingeR",
                    "relicCores": 137,
                    "transmuteCores": 6
                },
                "36819652": {
                    "atk": 2254836,
                    "eeBestScore": 1.3629922924956087e+20,
                    "name": "몽카몽카",
                    "relicCores": 146,
                    "transmuteCores": 28
                },
                "42321079": {
                    "atk": 2403787,
                    "eeBestScore": 8.298517141080918e+19,
                    "name": "까리하게샷",
                    "relicCores": 103,
                    "transmuteCores": 16
                },
                "44092804": {
                    "atk": 2356643,
                    "eeBestScore": 4.525175239083587e+20,
                    "name": "삼번",
                    "relicCores": 142,
                    "transmuteCores": 24
                },
                "45296294": {
                    "atk": 2126411,
                    "eeBestScore": 1.3924153781298471e+20,
                    "name": "오랜만이야",
                    "relicCores": 134,
                    "transmuteCores": 20
                },
                "47656157": {
                    "atk": 2378105,
                    "eeBestScore": 6.727756488057895e+20,
                    "name": "사번",
                    "relicCores": 144,
                    "transmuteCores": 28
                },
                "48561243": {
                    "atk": 2459429,
                    "eeBestScore": 4.2427065063919295e+20,
                    "name": "연화진",
                    "relicCores": 156,
                    "transmuteCores": 36
                },
                "49687045": {
                    "atk": 1728643,
                    "eeBestScore": 1.0305790029982835e+19,
                    "name": "목동헤롱이",
                    "relicCores": 124,
                    "transmuteCores": 16
                },
                "51338887": {
                    "atk": 1900520,
                    "eeBestScore": 6.339050505754925e+19,
                    "name": "C코드",
                    "relicCores": 114,
                    "transmuteCores": 20
                },
                "55776608": {
                    "atk": 2350119,
                    "eeBestScore": 4.830547027816041e+20,
                    "name": "cnsp",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "59406453": {
                    "atk": 2226116,
                    "eeBestScore": 4.056098729724806e+20,
                    "name": "발글몽",
                    "relicCores": 138,
                    "transmuteCores": 24
                },
                "64232009": {
                    "atk": 2373378,
                    "eeBestScore": 1.9648517743360698e+20,
                    "name": "수온체크",
                    "relicCores": 129,
                    "transmuteCores": 40
                },
                "66736654": {
                    "atk": 2214498,
                    "eeBestScore": 3.129470655836579e+20,
                    "name": "지니당",
                    "relicCores": 156,
                    "transmuteCores": 11
                },
                "68346082": {
                    "atk": 1781546,
                    "eeBestScore": 1.920268861335933e+20,
                    "name": "뜽럽",
                    "relicCores": 146,
                    "transmuteCores": 24
                },
                "75074798": {
                    "atk": 1949103,
                    "eeBestScore": 1.6839695540776583e+19,
                    "name": "Player 75074798",
                    "relicCores": 207,
                    "transmuteCores": 0
                },
                "80683152": {
                    "atk": 2401301,
                    "eeBestScore": 1.7536462133062167e+19,
                    "name": "Player 80683152",
                    "relicCores": 122,
                    "transmuteCores": 0
                },
                "82198052": {
                    "atk": 2766707,
                    "eeBestScore": 6.494788403540795e+20,
                    "name": "김씨표류기",
                    "relicCores": 231,
                    "transmuteCores": 48
                },
                "83410634": {
                    "atk": 1829660,
                    "eeBestScore": 5.717344712920696e+19,
                    "name": "0IZ",
                    "relicCores": 128,
                    "transmuteCores": 18
                },
                "83675005": {
                    "atk": 2022978,
                    "eeBestScore": 1.9464329708490576e+19,
                    "name": "펴퓸",
                    "relicCores": 180,
                    "transmuteCores": 15
                },
                "84553495": {
                    "atk": 2396244,
                    "eeBestScore": 6.688159966411576e+20,
                    "name": "색색색종이",
                    "relicCores": 193,
                    "transmuteCores": 28
                },
                "84863481": {
                    "atk": 3414250,
                    "eeBestScore": 5.186630560347158e+21,
                    "name": "수지수⠀",
                    "relicCores": 235,
                    "transmuteCores": 50
                }
            },
            "name": "Forest_",
            "totalAtk": 72136814,
            "totalEe": 3.4452740183646487e+22,
            "totalRelicCores": 5069,
            "totalTransmuteCores": 843
        },
        "14965": {
            "clanId": 14965,
            "lunarPoints": 1570,
            "members": {
                "11184161": {
                    "atk": 1953942,
                    "eeBestScore": 2.7820950425933985e+20,
                    "name": "Ðㆍ已換人玩1",
                    "relicCores": 129,
                    "transmuteCores": 0
                },
                "11264084": {
                    "atk": 2161411,
                    "eeBestScore": 8.825310496759603e+19,
                    "name": "Ðㆍ凋零露霧",
                    "relicCores": 154,
                    "transmuteCores": 34
                },
                "11826823": {
                    "atk": 2544631,
                    "eeBestScore": 2.1309718218634055e+20,
                    "name": "ÐㆍJason",
                    "relicCores": 162,
                    "transmuteCores": 32
                },
                "14434429": {
                    "atk": 2691766,
                    "eeBestScore": 1.9070777525429527e+21,
                    "name": "Ðㆍ^廷^",
                    "relicCores": 177,
                    "transmuteCores": 28
                },
                "17027308": {
                    "atk": 3667354,
                    "eeBestScore": 3.3341527156445925e+22,
                    "name": "Ðㆍ財富哥",
                    "relicCores": 344,
                    "transmuteCores": 58
                },
                "17141142": {
                    "atk": 3358631,
                    "eeBestScore": 9.547871359410683e+21,
                    "name": "Ðㆍ已換人玩4",
                    "relicCores": 216,
                    "transmuteCores": 36
                },
                "17251400": {
                    "atk": 2017706,
                    "eeBestScore": 1.0841391335606196e+18,
                    "name": "Ðㆍ已換人玩2",
                    "relicCores": 99,
                    "transmuteCores": 2
                },
                "17567102": {
                    "atk": 3062757,
                    "eeBestScore": 6.339522896435166e+22,
                    "name": "ÐㆍB̶r̶ë̶z̶",
                    "relicCores": 292,
                    "transmuteCores": 15
                },
                "18653024": {
                    "atk": 2892180,
                    "eeBestScore": 9.014992039896322e+16,
                    "name": "Ðㆍ菜雞350",
                    "relicCores": 221,
                    "transmuteCores": 36
                },
                "19157392": {
                    "atk": 4473889,
                    "eeBestScore": 1.625482457107643e+23,
                    "name": "ÐㆍR̶E̶D̶",
                    "relicCores": 412,
                    "transmuteCores": 74
                },
                "22385611": {
                    "atk": 3575610,
                    "eeBestScore": 1.78461266242106e+21,
                    "name": "Ðㆍ火很小",
                    "relicCores": 176,
                    "transmuteCores": 40
                },
                "24351482": {
                    "atk": 2994621,
                    "eeBestScore": 1.1665569217548955e+21,
                    "name": "Ðㆍ歌岸似聲",
                    "relicCores": 122,
                    "transmuteCores": 44
                },
                "27865643": {
                    "atk": 2973776,
                    "eeBestScore": 2.1994645069254912e+17,
                    "name": "Ðㆍ幼的五百",
                    "relicCores": 258,
                    "transmuteCores": 44
                },
                "29685142": {
                    "atk": 3084602,
                    "eeBestScore": 5.39886743059823e+21,
                    "name": "ÐㆍShawn",
                    "relicCores": 193,
                    "transmuteCores": 18
                },
                "30799622": {
                    "atk": 2900504,
                    "eeBestScore": 6.424466525235792e+21,
                    "name": "ÐㆍYiday",
                    "relicCores": 226,
                    "transmuteCores": 24
                },
                "35771557": {
                    "atk": 3796898,
                    "eeBestScore": null,
                    "name": "Ðㆍ°",
                    "relicCores": 359,
                    "transmuteCores": 58
                },
                "37290891": {
                    "atk": 2291552,
                    "eeBestScore": 3.030011380230807e+20,
                    "name": "Ðㆍ周姐輪",
                    "relicCores": 142,
                    "transmuteCores": 18
                },
                "41100921": {
                    "atk": 3576191,
                    "eeBestScore": 9.781587603450172e+21,
                    "name": "ÐㆍＪＩＮ靖",
                    "relicCores": 314,
                    "transmuteCores": 50
                },
                "41315605": {
                    "atk": 3030045,
                    "eeBestScore": 2.1228435788077256e+21,
                    "name": "Ðㆍ索爾",
                    "relicCores": 215,
                    "transmuteCores": 20
                },
                "48638128": {
                    "atk": 4626311,
                    "eeBestScore": null,
                    "name": "Ðㆍ橙月",
                    "relicCores": 437,
                    "transmuteCores": 73
                },
                "49311024": {
                    "atk": 2878584,
                    "eeBestScore": null,
                    "name": "Ðㆍ澤",
                    "relicCores": 273,
                    "transmuteCores": 10
                },
                "49960091": {
                    "atk": 2701498,
                    "eeBestScore": null,
                    "name": "Ðㆍpabpabbro",
                    "relicCores": 203,
                    "transmuteCores": 36
                },
                "52215297": {
                    "atk": 2793811,
                    "eeBestScore": null,
                    "name": "ÐㆍDkt",
                    "relicCores": 350,
                    "transmuteCores": 30
                },
                "52517088": {
                    "atk": 3539784,
                    "eeBestScore": 3.371039053171735e+22,
                    "name": "Ðㆍ火Ð很大",
                    "relicCores": 378,
                    "transmuteCores": 50
                },
                "54480105": {
                    "atk": 3013174,
                    "eeBestScore": null,
                    "name": "ÐㆍKK",
                    "relicCores": 200,
                    "transmuteCores": 24
                },
                "55298420": {
                    "atk": 3922183,
                    "eeBestScore": 1.0458829172425251e+23,
                    "name": "ÐㆍRay",
                    "relicCores": 466,
                    "transmuteCores": 58
                },
                "56690191": {
                    "atk": 3351178,
                    "eeBestScore": 5.070160414596975e+21,
                    "name": "Ðㆍ馬路",
                    "relicCores": 349,
                    "transmuteCores": 58
                },
                "57143142": {
                    "atk": 3166758,
                    "eeBestScore": 1.3774613092426754e+22,
                    "name": "Ðㆍ卡皮巴拉",
                    "relicCores": 238,
                    "transmuteCores": 36
                },
                "68054172": {
                    "atk": 2808452,
                    "eeBestScore": 1.4019288464630476e+21,
                    "name": "Ðㆍ囧星人",
                    "relicCores": 190,
                    "transmuteCores": 24
                },
                "72628301": {
                    "atk": 2879741,
                    "eeBestScore": 3.0039130166953687e+21,
                    "name": "Ðㆍ權志龍",
                    "relicCores": 228,
                    "transmuteCores": 15
                }
            },
            "name": "DarkÐragon",
            "totalAtk": 92729540,
            "totalEe": 4.598521384568764e+23,
            "totalRelicCores": 7523,
            "totalTransmuteCores": 1045
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1415,
            "members": {
                "102263647": {
                    "atk": 2386017,
                    "eeBestScore": 3.702984944366188e+20,
                    "name": "Koncalaz",
                    "relicCores": 177,
                    "transmuteCores": 24
                },
                "104730405": {
                    "atk": 1437070,
                    "eeBestScore": null,
                    "name": "KingRizzle",
                    "relicCores": 94,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 1743091,
                    "eeBestScore": 1.8747220761203835e+19,
                    "name": "HakiLuffy",
                    "relicCores": 130,
                    "transmuteCores": 14
                },
                "110301719": {
                    "atk": 1374856,
                    "eeBestScore": null,
                    "name": "Epic|W",
                    "relicCores": 100,
                    "transmuteCores": 1
                },
                "112772047": {
                    "atk": 1541040,
                    "eeBestScore": 1.3915340713259172e+19,
                    "name": "VictorMolusco",
                    "relicCores": 96,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1551563,
                    "eeBestScore": 1.229015325318013e+19,
                    "name": "Apathy_",
                    "relicCores": 88,
                    "transmuteCores": 20
                },
                "115742768": {
                    "atk": 147341,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2458109,
                    "eeBestScore": 3.1505145945776397e+20,
                    "name": "Nubis",
                    "relicCores": 221,
                    "transmuteCores": 8
                },
                "18297536": {
                    "atk": 1554849,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 84,
                    "transmuteCores": 20
                },
                "21471954": {
                    "atk": 1472237,
                    "eeBestScore": null,
                    "name": "N0M3rcy",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "21496121": {
                    "atk": 1336181,
                    "eeBestScore": 9.725120195800957e+18,
                    "name": "b0ss",
                    "relicCores": 114,
                    "transmuteCores": 2
                },
                "22085142": {
                    "atk": 1598705,
                    "eeBestScore": null,
                    "name": "bimbabo",
                    "relicCores": 179,
                    "transmuteCores": 6
                },
                "26277677": {
                    "atk": 1901615,
                    "eeBestScore": 1.8501026580142436e+19,
                    "name": "BobBobberson",
                    "relicCores": 122,
                    "transmuteCores": 11
                },
                "29398372": {
                    "atk": 1887126,
                    "eeBestScore": null,
                    "name": "Player113322",
                    "relicCores": 168,
                    "transmuteCores": 8
                },
                "29904762": {
                    "atk": 1319282,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 90,
                    "transmuteCores": 28
                },
                "30658936": {
                    "atk": 2104294,
                    "eeBestScore": 3.4029678343213564e+19,
                    "name": "Gritchen",
                    "relicCores": 167,
                    "transmuteCores": 12
                },
                "32236991": {
                    "atk": 1853639,
                    "eeBestScore": 1.5957888644970367e+19,
                    "name": "Player 32236991",
                    "relicCores": 177,
                    "transmuteCores": 24
                },
                "32556489": {
                    "atk": 1604404,
                    "eeBestScore": 5.204423648550164e+18,
                    "name": "Bensayyten",
                    "relicCores": 90,
                    "transmuteCores": 24
                },
                "36484758": {
                    "atk": 1435108,
                    "eeBestScore": 1.4775441027170388e+18,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1334035,
                    "eeBestScore": 9.96231513919219e+19,
                    "name": "PinkyToeBeans",
                    "relicCores": 118,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 1910075,
                    "eeBestScore": 1.035823293060641e+19,
                    "name": "samwise08",
                    "relicCores": 119,
                    "transmuteCores": 24
                },
                "56780908": {
                    "atk": 1693822,
                    "eeBestScore": 1.469659548293645e+19,
                    "name": "TieForFirstYo",
                    "relicCores": 126,
                    "transmuteCores": 18
                },
                "57543766": {
                    "atk": 1435850,
                    "eeBestScore": null,
                    "name": "THJF1948ㅣStray",
                    "relicCores": 122,
                    "transmuteCores": 4
                },
                "60687252": {
                    "atk": 3756314,
                    "eeBestScore": 7.560059099165882e+21,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 50
                },
                "61140731": {
                    "atk": 1683655,
                    "eeBestScore": 4.121560094175487e+18,
                    "name": "fesl",
                    "relicCores": 113,
                    "transmuteCores": 2
                },
                "64676255": {
                    "atk": 1983127,
                    "eeBestScore": 2.6020618513780257e+19,
                    "name": "盾Heathcliff剣",
                    "relicCores": 144,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 1471738,
                    "eeBestScore": 3.940905178801608e+19,
                    "name": "Player 66607264",
                    "relicCores": 121,
                    "transmuteCores": 10
                },
                "71028860": {
                    "atk": 1697940,
                    "eeBestScore": 1.9425710607365706e+19,
                    "name": "Rzzza",
                    "relicCores": 129,
                    "transmuteCores": 20
                },
                "75174428": {
                    "atk": 1977004,
                    "eeBestScore": 1.3203129465568592e+20,
                    "name": "PastalaVista",
                    "relicCores": 174,
                    "transmuteCores": 7
                },
                "77879578": {
                    "atk": 1855287,
                    "eeBestScore": null,
                    "name": "MMM|Mina475",
                    "relicCores": 153,
                    "transmuteCores": 3
                },
                "79510960": {
                    "atk": 1557352,
                    "eeBestScore": 2.1681898352654574e+19,
                    "name": "theLP",
                    "relicCores": 155,
                    "transmuteCores": 2
                },
                "80972473": {
                    "atk": 2665679,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 173,
                    "transmuteCores": 25
                },
                "81635898": {
                    "atk": 1993058,
                    "eeBestScore": null,
                    "name": "Rėtrø",
                    "relicCores": 126,
                    "transmuteCores": 20
                },
                "83339881": {
                    "atk": 3200452,
                    "eeBestScore": 3.8959680791602266e+21,
                    "name": "Fl3xas",
                    "relicCores": 297,
                    "transmuteCores": 24
                },
                "83861839": {
                    "atk": 1665133,
                    "eeBestScore": 1.2397052344166154e+19,
                    "name": "groggen",
                    "relicCores": 103,
                    "transmuteCores": 20
                },
                "86388317": {
                    "atk": 1603658,
                    "eeBestScore": 8.771872209409079e+17,
                    "name": "GG║BG2020",
                    "relicCores": 94,
                    "transmuteCores": 2
                },
                "87244358": {
                    "atk": 2656682,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 190,
                    "transmuteCores": 28
                },
                "88203044": {
                    "atk": 2082281,
                    "eeBestScore": 5.302429178668665e+19,
                    "name": "p88203044",
                    "relicCores": 114,
                    "transmuteCores": 18
                },
                "89511116": {
                    "atk": 1800153,
                    "eeBestScore": 1.3006474062659353e+19,
                    "name": "EMBALOCO",
                    "relicCores": 150,
                    "transmuteCores": 4
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 59438361,
            "totalEe": 1.2717898647695125e+22,
            "totalRelicCores": 4677,
            "totalTransmuteCores": 544
        },
        "99368": {
            "clanId": 99368,
            "lunarPoints": 1385,
            "members": {
                "100327260": {
                    "atk": 2025127,
                    "eeBestScore": 3.508012155971357e+19,
                    "name": "Davo87",
                    "relicCores": 150,
                    "transmuteCores": 30
                },
                "100439994": {
                    "atk": 1879996,
                    "eeBestScore": 4.4063063373777306e+19,
                    "name": "ᴳˢNeoJr",
                    "relicCores": 151,
                    "transmuteCores": 20
                },
                "100578803": {
                    "atk": 2263574,
                    "eeBestScore": 1.0528081135410805e+21,
                    "name": "ᴳˢGrimjyko",
                    "relicCores": 208,
                    "transmuteCores": 32
                },
                "101458728": {
                    "atk": 2430383,
                    "eeBestScore": null,
                    "name": "ᴳˢツ",
                    "relicCores": 190,
                    "transmuteCores": 28
                },
                "101612465": {
                    "atk": 1608786,
                    "eeBestScore": 6.438301405951766e+18,
                    "name": "Ediket",
                    "relicCores": 153,
                    "transmuteCores": 5
                },
                "104313217": {
                    "atk": 1768937,
                    "eeBestScore": 4.544831832804929e+19,
                    "name": "ᴳˢtsasis",
                    "relicCores": 165,
                    "transmuteCores": 1
                },
                "106274269": {
                    "atk": 1549004,
                    "eeBestScore": 1.030562651123108e+19,
                    "name": "stepukas",
                    "relicCores": 134,
                    "transmuteCores": 20
                },
                "108881488": {
                    "atk": 1809513,
                    "eeBestScore": 5.055877298922062e+19,
                    "name": "ᴳˢZeRoXx",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "110387467": {
                    "atk": 2102845,
                    "eeBestScore": 6.393829737673514e+20,
                    "name": "ᴳˢphorme",
                    "relicCores": 162,
                    "transmuteCores": 38
                },
                "110576246": {
                    "atk": 2277339,
                    "eeBestScore": 3.3894285187520774e+19,
                    "name": "ᴳˢNagelImKopp",
                    "relicCores": 163,
                    "transmuteCores": 3
                },
                "115722814": {
                    "atk": 829,
                    "eeBestScore": null,
                    "name": "duty duty943",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "21879157": {
                    "atk": 1378453,
                    "eeBestScore": 3.953120923565609e+18,
                    "name": "ᴳˢHEadbeaNGER",
                    "relicCores": 65,
                    "transmuteCores": 10
                },
                "27749134": {
                    "atk": 802070,
                    "eeBestScore": 7089524353112322.0,
                    "name": "hus0",
                    "relicCores": 68,
                    "transmuteCores": 0
                },
                "27797360": {
                    "atk": 1853696,
                    "eeBestScore": null,
                    "name": "ᴳˢmoski",
                    "relicCores": 116,
                    "transmuteCores": 24
                },
                "27890893": {
                    "atk": 2220777,
                    "eeBestScore": null,
                    "name": "ᴳˢSpielerJ",
                    "relicCores": 131,
                    "transmuteCores": 10
                },
                "30579708": {
                    "atk": 1881573,
                    "eeBestScore": null,
                    "name": "Shendelzare",
                    "relicCores": 126,
                    "transmuteCores": 2
                },
                "32150437": {
                    "atk": 1337404,
                    "eeBestScore": null,
                    "name": "ᴳˢㆍ\u001aŁҜ",
                    "relicCores": 79,
                    "transmuteCores": 11
                },
                "32536213": {
                    "atk": 1932157,
                    "eeBestScore": null,
                    "name": "DoxHc",
                    "relicCores": 140,
                    "transmuteCores": 6
                },
                "36727035": {
                    "atk": 1860957,
                    "eeBestScore": 1.5530585852726036e+19,
                    "name": "Blackeight",
                    "relicCores": 123,
                    "transmuteCores": 30
                },
                "36884852": {
                    "atk": 1227491,
                    "eeBestScore": null,
                    "name": "ᴳˢKratos",
                    "relicCores": 56,
                    "transmuteCores": 2
                },
                "43962661": {
                    "atk": 999915,
                    "eeBestScore": 9.743492114007365e+17,
                    "name": "ᴳˢDepressor",
                    "relicCores": 90,
                    "transmuteCores": 2
                },
                "44182514": {
                    "atk": 1915370,
                    "eeBestScore": null,
                    "name": "KlausHausMaus",
                    "relicCores": 98,
                    "transmuteCores": 12
                },
                "44798822": {
                    "atk": 2057428,
                    "eeBestScore": 6.688754187390863e+19,
                    "name": "PROTOYIB",
                    "relicCores": 146,
                    "transmuteCores": 18
                },
                "48361295": {
                    "atk": 1889187,
                    "eeBestScore": 4.28499031569737e+19,
                    "name": "ᴳˢZitroneBTW",
                    "relicCores": 184,
                    "transmuteCores": 7
                },
                "48938743": {
                    "atk": 1252258,
                    "eeBestScore": 7.31698422376527e+18,
                    "name": "ᴳˢOneMoreTry",
                    "relicCores": 57,
                    "transmuteCores": 11
                },
                "55944353": {
                    "atk": 1107508,
                    "eeBestScore": null,
                    "name": "AndreArrow",
                    "relicCores": 119,
                    "transmuteCores": 3
                },
                "56353439": {
                    "atk": 1827976,
                    "eeBestScore": null,
                    "name": "ᴳˢDreckigerDan",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "56476809": {
                    "atk": 1878313,
                    "eeBestScore": null,
                    "name": "ᴳˢmixm",
                    "relicCores": 123,
                    "transmuteCores": 6
                },
                "62303973": {
                    "atk": 1693575,
                    "eeBestScore": null,
                    "name": "blackseth",
                    "relicCores": 83,
                    "transmuteCores": 10
                },
                "65682131": {
                    "atk": 1552172,
                    "eeBestScore": 2.70938432665681e+19,
                    "name": "ᴳˢPamDa",
                    "relicCores": 135,
                    "transmuteCores": 10
                },
                "68833744": {
                    "atk": 1790503,
                    "eeBestScore": 5.735692717207349e+18,
                    "name": "ᴳˢraba1605",
                    "relicCores": 93,
                    "transmuteCores": 6
                },
                "74516441": {
                    "atk": 1703743,
                    "eeBestScore": null,
                    "name": "xXJOEXx",
                    "relicCores": 109,
                    "transmuteCores": 14
                },
                "79055199": {
                    "atk": 2208619,
                    "eeBestScore": 2.2742659456860262e+19,
                    "name": "xTom",
                    "relicCores": 166,
                    "transmuteCores": 6
                },
                "80496128": {
                    "atk": 2689305,
                    "eeBestScore": null,
                    "name": "ᴳˢGreysome",
                    "relicCores": 254,
                    "transmuteCores": 40
                },
                "82172039": {
                    "atk": 2232749,
                    "eeBestScore": 6.190230285015076e+20,
                    "name": "ᴳˢPDlng90",
                    "relicCores": 235,
                    "transmuteCores": 28
                },
                "83856678": {
                    "atk": 1638371,
                    "eeBestScore": 2.1897146679913613e+18,
                    "name": "DomPol",
                    "relicCores": 95,
                    "transmuteCores": 10
                },
                "87268811": {
                    "atk": 2058357,
                    "eeBestScore": 7.64160724770486e+19,
                    "name": "ᴳˢLTBFreak",
                    "relicCores": 119,
                    "transmuteCores": 10
                },
                "89367522": {
                    "atk": 2439584,
                    "eeBestScore": 2.0925381179079553e+21,
                    "name": "ᴳˢLimBeam",
                    "relicCores": 200,
                    "transmuteCores": 44
                }
            },
            "name": "Gods_Survivor",
            "totalAtk": 59039916,
            "totalEe": 4.901238280425728e+21,
            "totalRelicCores": 4420,
            "totalTransmuteCores": 519
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

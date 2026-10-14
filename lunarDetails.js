// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-10-15
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "10048": {
            "clanId": 10048,
            "lunarPoints": 1540,
            "members": {
                "101834102": {
                    "atk": 2502732,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "young0old",
                    "relicCores": 152,
                    "transmuteCores": 21
                },
                "110542964": {
                    "atk": 1891442,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "꾸르잼니",
                    "relicCores": 180,
                    "transmuteCores": 30
                },
                "111983598": {
                    "atk": 2045395,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "미니콩♡",
                    "relicCores": 114,
                    "transmuteCores": 18
                },
                "11242409": {
                    "atk": 2716592,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "꿀물단지",
                    "relicCores": 157,
                    "transmuteCores": 20
                },
                "117210126": {
                    "atk": 1921882,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "이안.iAN",
                    "relicCores": 122,
                    "transmuteCores": 28
                },
                "16485063": {
                    "atk": 3279936,
                    "chipsCount": 135,
                    "eeBestScore": null,
                    "name": "신화길드장",
                    "relicCores": 295,
                    "transmuteCores": 54
                },
                "24211098": {
                    "atk": 3177534,
                    "chipsCount": 200,
                    "eeBestScore": null,
                    "name": "프링이",
                    "relicCores": 291,
                    "transmuteCores": 10
                },
                "33132930": {
                    "atk": 2535450,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "니는누꼬",
                    "relicCores": 169,
                    "transmuteCores": 34
                },
                "35180700": {
                    "atk": 2354196,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "봄이랑",
                    "relicCores": 152,
                    "transmuteCores": 21
                },
                "36948393": {
                    "atk": 2523184,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "꾸르릉쾅",
                    "relicCores": 159,
                    "transmuteCores": 11
                },
                "37592544": {
                    "atk": 1744536,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "민트초코최강",
                    "relicCores": 97,
                    "transmuteCores": 1
                },
                "39410222": {
                    "atk": 2661146,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "신비궁",
                    "relicCores": 165,
                    "transmuteCores": 28
                },
                "40107963": {
                    "atk": 2240893,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "인성a",
                    "relicCores": 121,
                    "transmuteCores": 1
                },
                "40271211": {
                    "atk": 2357806,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "Player 40271211",
                    "relicCores": 191,
                    "transmuteCores": 34
                },
                "43975067": {
                    "atk": 1664652,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "Player 43975067",
                    "relicCores": 67,
                    "transmuteCores": 0
                },
                "46877774": {
                    "atk": 2783256,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "데스나이트",
                    "relicCores": 208,
                    "transmuteCores": 21
                },
                "47427987": {
                    "atk": 2752240,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "Yihyun",
                    "relicCores": 226,
                    "transmuteCores": 13
                },
                "47546468": {
                    "atk": 2224363,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "묻따",
                    "relicCores": 140,
                    "transmuteCores": 21
                },
                "48150439": {
                    "atk": 2175885,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "wooji",
                    "relicCores": 201,
                    "transmuteCores": 18
                },
                "48207226": {
                    "atk": 1822934,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "Player 48207226",
                    "relicCores": 102,
                    "transmuteCores": 0
                },
                "54072398": {
                    "atk": 2397143,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "F-14",
                    "relicCores": 133,
                    "transmuteCores": 14
                },
                "58271086": {
                    "atk": 2455178,
                    "chipsCount": 111,
                    "eeBestScore": null,
                    "name": "데구르르쿵",
                    "relicCores": 161,
                    "transmuteCores": 22
                },
                "58579412": {
                    "atk": 1865738,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "Slowdown",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "61887790": {
                    "atk": 2171165,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "꺼칠",
                    "relicCores": 163,
                    "transmuteCores": 34
                },
                "63232989": {
                    "atk": 3097871,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "Player 63232989",
                    "relicCores": 213,
                    "transmuteCores": 30
                },
                "63323474": {
                    "atk": 3115476,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "캭퉤v",
                    "relicCores": 208,
                    "transmuteCores": 58
                },
                "64356690": {
                    "atk": 2660882,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "SeonghyunGoD",
                    "relicCores": 177,
                    "transmuteCores": 29
                },
                "64621320": {
                    "atk": 2132034,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "20121207",
                    "relicCores": 170,
                    "transmuteCores": 12
                },
                "65809931": {
                    "atk": 2228447,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "민준우파파",
                    "relicCores": 110,
                    "transmuteCores": 14
                },
                "66281905": {
                    "atk": 1894206,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "민털",
                    "relicCores": 153,
                    "transmuteCores": 2
                },
                "66486802": {
                    "atk": 3048314,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "RYNNN",
                    "relicCores": 205,
                    "transmuteCores": 34
                },
                "70090371": {
                    "atk": 2753777,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "뽀장",
                    "relicCores": 216,
                    "transmuteCores": 4
                },
                "70333019": {
                    "atk": 2890795,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "우렉_마지노",
                    "relicCores": 143,
                    "transmuteCores": 24
                },
                "74290515": {
                    "atk": 2553892,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "조니워커",
                    "relicCores": 176,
                    "transmuteCores": 22
                },
                "74371183": {
                    "atk": 2550226,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "킹사과",
                    "relicCores": 172,
                    "transmuteCores": 19
                },
                "78112964": {
                    "atk": 2492349,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "GINEW",
                    "relicCores": 204,
                    "transmuteCores": 38
                },
                "81304865": {
                    "atk": 2274977,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "64493p",
                    "relicCores": 127,
                    "transmuteCores": 29
                },
                "83881477": {
                    "atk": 2676109,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "토마토가든",
                    "relicCores": 253,
                    "transmuteCores": 12
                },
                "84265410": {
                    "atk": 2663625,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "kaTo.",
                    "relicCores": 205,
                    "transmuteCores": 25
                },
                "88507840": {
                    "atk": 3070072,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "특공대랭커",
                    "relicCores": 206,
                    "transmuteCores": 30
                }
            },
            "name": "신화",
            "totalAtk": 79214346,
            "totalChips": 2201,
            "totalEe": null,
            "totalRelicCores": 5711,
            "totalTransmuteCores": 795
        },
        "12203": {
            "clanId": 12203,
            "lunarPoints": 1600,
            "members": {
                "10188115": {
                    "atk": 3456590,
                    "chipsCount": 122,
                    "eeBestScore": null,
                    "name": "Orlay",
                    "relicCores": 342,
                    "transmuteCores": 34
                },
                "10753623": {
                    "atk": 2566673,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "HuấnᰔᩚHP",
                    "relicCores": 188,
                    "transmuteCores": 32
                },
                "11737375": {
                    "atk": 2632551,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "hẾtGemOffGAME",
                    "relicCores": 175,
                    "transmuteCores": 24
                },
                "16389348": {
                    "atk": 2721103,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "DuDin",
                    "relicCores": 200,
                    "transmuteCores": 44
                },
                "16925725": {
                    "atk": 2923831,
                    "chipsCount": 103,
                    "eeBestScore": null,
                    "name": "Huypertrophy1811",
                    "relicCores": 200,
                    "transmuteCores": 30
                },
                "17190333": {
                    "atk": 2491914,
                    "chipsCount": 111,
                    "eeBestScore": null,
                    "name": "Gold-Moon",
                    "relicCores": 189,
                    "transmuteCores": 30
                },
                "17641313": {
                    "atk": 2504572,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "༒VanHung★VN",
                    "relicCores": 174,
                    "transmuteCores": 26
                },
                "17734473": {
                    "atk": 2699530,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "ⁿᵒ¹6Ⓑợⓜ",
                    "relicCores": 174,
                    "transmuteCores": 34
                },
                "18723147": {
                    "atk": 3179132,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "༺ℓ༻",
                    "relicCores": 184,
                    "transmuteCores": 34
                },
                "19420767": {
                    "atk": 2805519,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "KâyZ",
                    "relicCores": 213,
                    "transmuteCores": 42
                },
                "19484600": {
                    "atk": 2653095,
                    "chipsCount": 128,
                    "eeBestScore": null,
                    "name": "duongthp",
                    "relicCores": 188,
                    "transmuteCores": 38
                },
                "19890405": {
                    "atk": 3919036,
                    "chipsCount": 167,
                    "eeBestScore": null,
                    "name": "♡ThanhTrà♡",
                    "relicCores": 305,
                    "transmuteCores": 56
                },
                "21364059": {
                    "atk": 2794801,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "PhảiBìnhTĩnh",
                    "relicCores": 163,
                    "transmuteCores": 28
                },
                "24924118": {
                    "atk": 3808684,
                    "chipsCount": 235,
                    "eeBestScore": null,
                    "name": "ᝰBen♡ᴿᶻᴿ",
                    "relicCores": 342,
                    "transmuteCores": 54
                },
                "25759761": {
                    "atk": 2776004,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "TomTep",
                    "relicCores": 190,
                    "transmuteCores": 38
                },
                "26640510": {
                    "atk": 2709636,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "ภ๏1ú๏à",
                    "relicCores": 192,
                    "transmuteCores": 34
                },
                "27285460": {
                    "atk": 2523019,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "Willie2402¹⁴",
                    "relicCores": 145,
                    "transmuteCores": 42
                },
                "29085217": {
                    "atk": 2779751,
                    "chipsCount": 102,
                    "eeBestScore": null,
                    "name": "CậuVàngᰔᩚHP",
                    "relicCores": 142,
                    "transmuteCores": 46
                },
                "29221288": {
                    "atk": 2114206,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "F2P",
                    "relicCores": 167,
                    "transmuteCores": 66
                },
                "33701270": {
                    "atk": 3429993,
                    "chipsCount": 190,
                    "eeBestScore": null,
                    "name": "iĐâtCảng",
                    "relicCores": 333,
                    "transmuteCores": 64
                },
                "34486027": {
                    "atk": 2755672,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "PHƯƠNGMINHANH",
                    "relicCores": 174,
                    "transmuteCores": 38
                },
                "43031951": {
                    "atk": 2523601,
                    "chipsCount": 105,
                    "eeBestScore": null,
                    "name": "HфàngНP",
                    "relicCores": 238,
                    "transmuteCores": 30
                },
                "45580543": {
                    "atk": 2933922,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "ChimGõBướm",
                    "relicCores": 171,
                    "transmuteCores": 28
                },
                "47955930": {
                    "atk": 3268071,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "LãoHạcᰔᩚHP",
                    "relicCores": 228,
                    "transmuteCores": 34
                },
                "48795276": {
                    "atk": 3266953,
                    "chipsCount": 146,
                    "eeBestScore": null,
                    "name": "MinhHiếuu",
                    "relicCores": 230,
                    "transmuteCores": 34
                },
                "51836238": {
                    "atk": 2409263,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "Trònnnnnnnn",
                    "relicCores": 184,
                    "transmuteCores": 32
                },
                "55616061": {
                    "atk": 2915352,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "MiDiNo",
                    "relicCores": 195,
                    "transmuteCores": 54
                },
                "62221062": {
                    "atk": 2790838,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "Min|H|oang",
                    "relicCores": 138,
                    "transmuteCores": 64
                },
                "63786045": {
                    "atk": 2493760,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "PuppyÍnLove",
                    "relicCores": 150,
                    "transmuteCores": 54
                },
                "63917018": {
                    "atk": 2957779,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "KhôngSợVợ",
                    "relicCores": 192,
                    "transmuteCores": 34
                },
                "66352894": {
                    "atk": 2698005,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "BáchĐẹpTrai✿",
                    "relicCores": 99,
                    "transmuteCores": 40
                },
                "68208784": {
                    "atk": 2729465,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "✰Qʉâɳ",
                    "relicCores": 236,
                    "transmuteCores": 30
                },
                "73283661": {
                    "atk": 2896559,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "Thành　Thành",
                    "relicCores": 232,
                    "transmuteCores": 42
                },
                "74328591": {
                    "atk": 2195123,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "EmBéSexy",
                    "relicCores": 182,
                    "transmuteCores": 50
                },
                "76840655": {
                    "atk": 2800781,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "CáoGιàHρᶜᶻ",
                    "relicCores": 278,
                    "transmuteCores": 32
                },
                "76840884": {
                    "atk": 2924728,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "ConCacNeHabby",
                    "relicCores": 182,
                    "transmuteCores": 26
                },
                "77906704": {
                    "atk": 3001082,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "ɨɲƒɨɲɨƭყ",
                    "relicCores": 230,
                    "transmuteCores": 54
                },
                "80214805": {
                    "atk": 2777110,
                    "chipsCount": 94,
                    "eeBestScore": null,
                    "name": "BìnhNga",
                    "relicCores": 192,
                    "transmuteCores": 46
                },
                "82279401": {
                    "atk": 2155514,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "ĐạtKhôngchín",
                    "relicCores": 139,
                    "transmuteCores": 38
                },
                "83140743": {
                    "atk": 3200508,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "SeokMaDeek",
                    "relicCores": 220,
                    "transmuteCores": 54
                }
            },
            "name": "AE-HảiPhòng",
            "totalAtk": 89206081,
            "totalChips": 3428,
            "totalEe": null,
            "totalRelicCores": 6608,
            "totalTransmuteCores": 1326
        },
        "27953": {
            "clanId": 27953,
            "lunarPoints": 1505,
            "members": {
                "100331021": {
                    "atk": 2668106,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "Player 100331021",
                    "relicCores": 162,
                    "transmuteCores": 48
                },
                "108074268": {
                    "atk": 2395851,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "에리히프롬",
                    "relicCores": 164,
                    "transmuteCores": 22
                },
                "11182727": {
                    "atk": 2078234,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "나린이",
                    "relicCores": 151,
                    "transmuteCores": 20
                },
                "115722951": {
                    "atk": 2212,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "luther Robby",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "116180052": {
                    "atk": 250390,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "파도비밀구역",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "22826070": {
                    "atk": 2711679,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "짱똘짱순빠덜",
                    "relicCores": 203,
                    "transmuteCores": 38
                },
                "28232871": {
                    "atk": 2268433,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "로꼬",
                    "relicCores": 185,
                    "transmuteCores": 13
                },
                "31246267": {
                    "atk": 2402430,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "벵Ol",
                    "relicCores": 158,
                    "transmuteCores": 24
                },
                "33579863": {
                    "atk": 1474469,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "쿵쾅쿵쾅!",
                    "relicCores": 144,
                    "transmuteCores": 0
                },
                "35361713": {
                    "atk": 2181116,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "Player 35361713",
                    "relicCores": 158,
                    "transmuteCores": 42
                },
                "36650934": {
                    "atk": 2733106,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "무무무무리",
                    "relicCores": 189,
                    "transmuteCores": 38
                },
                "37164311": {
                    "atk": 2848389,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "르브",
                    "relicCores": 208,
                    "transmuteCores": 64
                },
                "37973123": {
                    "atk": 3014284,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "흙먹는토끼",
                    "relicCores": 155,
                    "transmuteCores": 42
                },
                "39474194": {
                    "atk": 2049004,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "잠탱이",
                    "relicCores": 180,
                    "transmuteCores": 28
                },
                "39502855": {
                    "atk": 2072812,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "환도리",
                    "relicCores": 125,
                    "transmuteCores": 10
                },
                "40040366": {
                    "atk": 2581313,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "하트뮬러",
                    "relicCores": 161,
                    "transmuteCores": 38
                },
                "40122238": {
                    "atk": 2110205,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "사카밤바린",
                    "relicCores": 153,
                    "transmuteCores": 26
                },
                "41287002": {
                    "atk": 2404978,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "필살한발",
                    "relicCores": 118,
                    "transmuteCores": 10
                },
                "42753091": {
                    "atk": 3152136,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "탕탕플레기",
                    "relicCores": 248,
                    "transmuteCores": 54
                },
                "45333820": {
                    "atk": 2508158,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "포말디너",
                    "relicCores": 161,
                    "transmuteCores": 38
                },
                "45496786": {
                    "atk": 3119285,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "아이엠람보",
                    "relicCores": 153,
                    "transmuteCores": 28
                },
                "53399190": {
                    "atk": 2253897,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "뽀얀살결",
                    "relicCores": 146,
                    "transmuteCores": 28
                },
                "53886052": {
                    "atk": 2235229,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "샷ㅢ",
                    "relicCores": 201,
                    "transmuteCores": 32
                },
                "54668643": {
                    "atk": 3656866,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "호오우우",
                    "relicCores": 305,
                    "transmuteCores": 45
                },
                "59748852": {
                    "atk": 3235242,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "빈Ol",
                    "relicCores": 167,
                    "transmuteCores": 66
                },
                "60394912": {
                    "atk": 2761179,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "Player 60394912",
                    "relicCores": 169,
                    "transmuteCores": 42
                },
                "60646986": {
                    "atk": 2049685,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "솔솔희짱",
                    "relicCores": 83,
                    "transmuteCores": 1
                },
                "60974112": {
                    "atk": 2691274,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "깍지",
                    "relicCores": 259,
                    "transmuteCores": 20
                },
                "62322912": {
                    "atk": 1707468,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "어이가있네",
                    "relicCores": 112,
                    "transmuteCores": 4
                },
                "63765043": {
                    "atk": 2154068,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "창조길원모집",
                    "relicCores": 94,
                    "transmuteCores": 36
                },
                "64239590": {
                    "atk": 2167548,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "시즌인더선ㅣ",
                    "relicCores": 207,
                    "transmuteCores": 36
                },
                "66818195": {
                    "atk": 188525,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "창조경영",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "68230072": {
                    "atk": 2554452,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "메타콘",
                    "relicCores": 224,
                    "transmuteCores": 54
                },
                "71039292": {
                    "atk": 1641053,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "훈롱이",
                    "relicCores": 102,
                    "transmuteCores": 28
                },
                "76479221": {
                    "atk": 2739789,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "짱9짱",
                    "relicCores": 192,
                    "transmuteCores": 44
                }
            },
            "name": "창조",
            "totalAtk": 75506216,
            "totalChips": 1577,
            "totalEe": null,
            "totalRelicCores": 5260,
            "totalTransmuteCores": 1018
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1505,
            "members": {
                "100876140": {
                    "atk": 2490831,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "transmuteCores": 30
                },
                "103516442": {
                    "atk": 3144315,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 256,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 1828636,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2251856,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2343286,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 191,
                    "transmuteCores": 35
                },
                "108860725": {
                    "atk": 2523530,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 161,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 1976578,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 119,
                    "transmuteCores": 34
                },
                "113690788": {
                    "atk": 2165788,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 28
                },
                "11463573": {
                    "atk": 2040558,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 119,
                    "transmuteCores": 50
                },
                "115742768": {
                    "atk": 49298,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2658487,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 242,
                    "transmuteCores": 34
                },
                "18297536": {
                    "atk": 1811944,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "26277677": {
                    "atk": 2425390,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 136,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2514180,
                    "chipsCount": 128,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 168,
                    "transmuteCores": 10
                },
                "29321884": {
                    "atk": 3206562,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 212,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1820622,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 134,
                    "transmuteCores": 45
                },
                "30658936": {
                    "atk": 2442795,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 24
                },
                "32556489": {
                    "atk": 2026313,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 2989157,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 265,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 2082527,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 1646794,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2417369,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 137,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2191061,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 166,
                    "transmuteCores": 8
                },
                "60687252": {
                    "atk": 4081397,
                    "chipsCount": 214,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 383,
                    "transmuteCores": 64
                },
                "64676255": {
                    "atk": 2514890,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 151,
                    "transmuteCores": 24
                },
                "66607264": {
                    "atk": 2479627,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 169,
                    "transmuteCores": 25
                },
                "70603922": {
                    "atk": 1804205,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 133,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2201015,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 138,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2390565,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 172,
                    "transmuteCores": 50
                },
                "75174428": {
                    "atk": 2393003,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 187,
                    "transmuteCores": 11
                },
                "79510960": {
                    "atk": 2126463,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 184,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1896677,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 175,
                    "transmuteCores": 6
                },
                "80972473": {
                    "atk": 3219461,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 181,
                    "transmuteCores": 44
                },
                "83339881": {
                    "atk": 3582034,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 64
                },
                "83861839": {
                    "atk": 2328479,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "transmuteCores": 29
                },
                "87244358": {
                    "atk": 3120954,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 200,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2641793,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 72
                },
                "88203044": {
                    "atk": 2362831,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 25
                },
                "89511116": {
                    "atk": 2189161,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 18
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 77519365,
            "totalChips": 2330,
            "totalEe": null,
            "totalRelicCores": 5689,
            "totalTransmuteCores": 1062
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

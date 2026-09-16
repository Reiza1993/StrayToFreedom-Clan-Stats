// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-09-17
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "14037": {
            "clanId": 14037,
            "lunarPoints": 1380,
            "members": {
                "102991599": {
                    "atk": 871854,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "제갈뽀삐",
                    "relicCores": 107,
                    "transmuteCores": 6
                },
                "13464098": {
                    "atk": 938441,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "두쫀쿠♡♡",
                    "relicCores": 67,
                    "transmuteCores": 6
                },
                "20759637": {
                    "atk": 1012957,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "ylyy",
                    "relicCores": 70,
                    "transmuteCores": 0
                },
                "23716512": {
                    "atk": 919143,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "꽃씨언니",
                    "relicCores": 57,
                    "transmuteCores": 0
                },
                "24804645": {
                    "atk": 1156302,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "아이로",
                    "relicCores": 104,
                    "transmuteCores": 0
                },
                "29851516": {
                    "atk": 1237476,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "소쿠밍",
                    "relicCores": 100,
                    "transmuteCores": 2
                },
                "31435225": {
                    "atk": 1836232,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "bangoogrl",
                    "relicCores": 113,
                    "transmuteCores": 18
                },
                "34064725": {
                    "atk": 1190404,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "Lkhoist",
                    "relicCores": 192,
                    "transmuteCores": 14
                },
                "34787046": {
                    "atk": 739000,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "달려라밥통",
                    "relicCores": 74,
                    "transmuteCores": 0
                },
                "36606519": {
                    "atk": 2443815,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "시온아빠",
                    "relicCores": 199,
                    "transmuteCores": 11
                },
                "36737421": {
                    "atk": 808469,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "판교역로145",
                    "relicCores": 127,
                    "transmuteCores": 1
                },
                "37005830": {
                    "atk": 877392,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "꼬부기11",
                    "relicCores": 132,
                    "transmuteCores": 2
                },
                "37008330": {
                    "atk": 1926920,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "당하",
                    "relicCores": 126,
                    "transmuteCores": 11
                },
                "37093296": {
                    "atk": 1011685,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "아우귀찮아",
                    "relicCores": 88,
                    "transmuteCores": 0
                },
                "38149900": {
                    "atk": 476825,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "안두끼",
                    "relicCores": 72,
                    "transmuteCores": 0
                },
                "43097127": {
                    "atk": 2563260,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "집결지",
                    "relicCores": 205,
                    "transmuteCores": 46
                },
                "44143852": {
                    "atk": 1365830,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "삼지아빠",
                    "relicCores": 177,
                    "transmuteCores": 20
                },
                "46559560": {
                    "atk": 1371288,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "인천만수동",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "46569912": {
                    "atk": 942731,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Milkiss",
                    "relicCores": 123,
                    "transmuteCores": 0
                },
                "46593768": {
                    "atk": 1548082,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "탕탕서금이",
                    "relicCores": 126,
                    "transmuteCores": 2
                },
                "48576527": {
                    "atk": 1571802,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "Player 48576527",
                    "relicCores": 140,
                    "transmuteCores": 1
                },
                "48795330": {
                    "atk": 1556456,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "lliilliill",
                    "relicCores": 160,
                    "transmuteCores": 19
                },
                "56396841": {
                    "atk": 2267828,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "천원영",
                    "relicCores": 197,
                    "transmuteCores": 11
                },
                "57098853": {
                    "atk": 1953380,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "T일링T",
                    "relicCores": 171,
                    "transmuteCores": 4
                },
                "58406255": {
                    "atk": 1003689,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "라머스",
                    "relicCores": 83,
                    "transmuteCores": 0
                },
                "59461636": {
                    "atk": 2246532,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "수몽이",
                    "relicCores": 199,
                    "transmuteCores": 11
                },
                "60485289": {
                    "atk": 1405282,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "2OOO",
                    "relicCores": 84,
                    "transmuteCores": 0
                },
                "64065816": {
                    "atk": 719474,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "sonless",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "65179265": {
                    "atk": 1463917,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "OneFineday",
                    "relicCores": 119,
                    "transmuteCores": 0
                },
                "66333577": {
                    "atk": 1137629,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "ホヤホヤ",
                    "relicCores": 136,
                    "transmuteCores": 4
                },
                "69275226": {
                    "atk": 852197,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "남잔Hotpink",
                    "relicCores": 137,
                    "transmuteCores": 10
                },
                "73178080": {
                    "atk": 1581657,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "으노팍",
                    "relicCores": 162,
                    "transmuteCores": 4
                },
                "73354096": {
                    "atk": 1889190,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "배드공격대",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "84092010": {
                    "atk": 1676430,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "멈머123",
                    "relicCores": 122,
                    "transmuteCores": 24
                },
                "84581224": {
                    "atk": 2748383,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "수능",
                    "relicCores": 303,
                    "transmuteCores": 28
                },
                "88670323": {
                    "atk": 1246980,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "zPzG",
                    "relicCores": 101,
                    "transmuteCores": 1
                }
            },
            "name": "PURE",
            "totalAtk": 46091113,
            "totalChips": 688,
            "totalEe": null,
            "totalRelicCores": 4228,
            "totalTransmuteCores": 256
        },
        "37994": {
            "clanId": 37994,
            "lunarPoints": 1435,
            "members": {
                "10760311": {
                    "atk": 3223071,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "마블황금알2",
                    "relicCores": 296,
                    "transmuteCores": 24
                },
                "113675769": {
                    "atk": 1578946,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "ᵀᴷ개나니",
                    "relicCores": 114,
                    "transmuteCores": 14
                },
                "22001788": {
                    "atk": 1091027,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "동동이SS",
                    "relicCores": 71,
                    "transmuteCores": 2
                },
                "22343180": {
                    "atk": 2659362,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "동동이S",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "22929265": {
                    "atk": 2637818,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "NeoFlint",
                    "relicCores": 159,
                    "transmuteCores": 24
                },
                "23047452": {
                    "atk": 1942224,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "붕나라차뿔까",
                    "relicCores": 132,
                    "transmuteCores": 6
                },
                "24465542": {
                    "atk": 1841830,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "Mioㅡㅅㅡ",
                    "relicCores": 161,
                    "transmuteCores": 6
                },
                "27293287": {
                    "atk": 1359550,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "코비드",
                    "relicCores": 142,
                    "transmuteCores": 4
                },
                "27301982": {
                    "atk": 1450744,
                    "chipsCount": 13,
                    "eeBestScore": null,
                    "name": "뿌릴킁",
                    "relicCores": 153,
                    "transmuteCores": 20
                },
                "32508218": {
                    "atk": 2228636,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "영자",
                    "relicCores": 134,
                    "transmuteCores": 12
                },
                "33527532": {
                    "atk": 1207757,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "율이네",
                    "relicCores": 49,
                    "transmuteCores": 0
                },
                "35847624": {
                    "atk": 1793972,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "ZBKT",
                    "relicCores": 177,
                    "transmuteCores": 6
                },
                "36547157": {
                    "atk": 2202338,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "오지마살려줘",
                    "relicCores": 206,
                    "transmuteCores": 8
                },
                "36745986": {
                    "atk": 1378233,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "탕수육탕탕S",
                    "relicCores": 131,
                    "transmuteCores": 26
                },
                "37365363": {
                    "atk": 2086642,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "시나은",
                    "relicCores": 97,
                    "transmuteCores": 14
                },
                "38903593": {
                    "atk": 1469176,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "영일신",
                    "relicCores": 170,
                    "transmuteCores": 0
                },
                "41256099": {
                    "atk": 2412820,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "토끼공쥬S",
                    "relicCores": 204,
                    "transmuteCores": 15
                },
                "41405016": {
                    "atk": 2558911,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "로비준",
                    "relicCores": 147,
                    "transmuteCores": 1
                },
                "41847676": {
                    "atk": 1719540,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "ᵀᴷArt오호통",
                    "relicCores": 159,
                    "transmuteCores": 2
                },
                "44238354": {
                    "atk": 1860619,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "노스다",
                    "relicCores": 149,
                    "transmuteCores": 24
                },
                "44552315": {
                    "atk": 2319808,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "갓무너S",
                    "relicCores": 154,
                    "transmuteCores": 32
                },
                "51176156": {
                    "atk": 2651436,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "성재임",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "52605179": {
                    "atk": 1969287,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "크릉이S",
                    "relicCores": 179,
                    "transmuteCores": 20
                },
                "52822666": {
                    "atk": 2390831,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "플레이어HG",
                    "relicCores": 160,
                    "transmuteCores": 28
                },
                "57543644": {
                    "atk": 2727678,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "라바S",
                    "relicCores": 137,
                    "transmuteCores": 16
                },
                "61054469": {
                    "atk": 1962948,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "꼬도리야",
                    "relicCores": 210,
                    "transmuteCores": 12
                },
                "63993071": {
                    "atk": 1599053,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "ᵀᴷ아나콘다",
                    "relicCores": 193,
                    "transmuteCores": 11
                },
                "65421071": {
                    "atk": 2396057,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "스트롱미니",
                    "relicCores": 115,
                    "transmuteCores": 14
                },
                "65565411": {
                    "atk": 2192425,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "그게뭐라고S",
                    "relicCores": 185,
                    "transmuteCores": 24
                },
                "72544305": {
                    "atk": 2607807,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "별림이S",
                    "relicCores": 137,
                    "transmuteCores": 1
                },
                "72622429": {
                    "atk": 2678993,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "꼬꼬황제S",
                    "relicCores": 179,
                    "transmuteCores": 11
                },
                "74041152": {
                    "atk": 1961945,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "슬픈바다",
                    "relicCores": 163,
                    "transmuteCores": 28
                },
                "80117912": {
                    "atk": 2733515,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "꼬꼬에이슬S",
                    "relicCores": 148,
                    "transmuteCores": 6
                },
                "83482632": {
                    "atk": 1787832,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "Amorwoo",
                    "relicCores": 131,
                    "transmuteCores": 16
                },
                "83849954": {
                    "atk": 1876932,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "ᵀᴷ코스특호",
                    "relicCores": 179,
                    "transmuteCores": 24
                },
                "84860069": {
                    "atk": 1021977,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "ObserverṨĐ",
                    "relicCores": 75,
                    "transmuteCores": 15
                },
                "88702105": {
                    "atk": 2081176,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "하구레메탈",
                    "relicCores": 161,
                    "transmuteCores": 38
                }
            },
            "name": "Team.SD3",
            "totalAtk": 66684452,
            "totalChips": 1431,
            "totalEe": null,
            "totalRelicCores": 4951,
            "totalTransmuteCores": 500
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1465,
            "members": {
                "100876140": {
                    "atk": 2304389,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "102263647": {
                    "atk": 2516477,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2857068,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 243,
                    "transmuteCores": 60
                },
                "106162623": {
                    "atk": 1757799,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 16
                },
                "10754439": {
                    "atk": 2017072,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 140,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2102204,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 186,
                    "transmuteCores": 30
                },
                "112772047": {
                    "atk": 1872274,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 114,
                    "transmuteCores": 32
                },
                "113690788": {
                    "atk": 1757798,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 20
                },
                "11463573": {
                    "atk": 1817942,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 0,
                    "transmuteCores": 0
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
                    "atk": 2622756,
                    "chipsCount": 118,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 210,
                    "transmuteCores": 8
                },
                "18297536": {
                    "atk": 1818251,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "26277677": {
                    "atk": 2189171,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 135,
                    "transmuteCores": 12
                },
                "29321884": {
                    "atk": 3098349,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 210,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1469998,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 126,
                    "transmuteCores": 40
                },
                "30658936": {
                    "atk": 2149465,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 16
                },
                "32556489": {
                    "atk": 1831606,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 102,
                    "transmuteCores": 14
                },
                "35869301": {
                    "atk": 2623343,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 257,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 1650140,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1449670,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "PinkyToeBeans",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2239370,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 132,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2075966,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 156,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 3909324,
                    "chipsCount": 207,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 58
                },
                "64676255": {
                    "atk": 2314802,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 132,
                    "transmuteCores": 14
                },
                "66607264": {
                    "atk": 2192205,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 165,
                    "transmuteCores": 25
                },
                "69676999": {
                    "atk": 2020679,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "datamaster",
                    "relicCores": 154,
                    "transmuteCores": 3
                },
                "70603922": {
                    "atk": 1719065,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 1906420,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 140,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2151472,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 169,
                    "transmuteCores": 46
                },
                "75174428": {
                    "atk": 2325615,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 182,
                    "transmuteCores": 9
                },
                "79510960": {
                    "atk": 1641750,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 179,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1802862,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 175,
                    "transmuteCores": 4
                },
                "80972473": {
                    "atk": 3088996,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 177,
                    "transmuteCores": 38
                },
                "83339881": {
                    "atk": 3423073,
                    "chipsCount": 120,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 60
                },
                "83861839": {
                    "atk": 2211611,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 116,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 2809997,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 190,
                    "transmuteCores": 24
                },
                "87954282": {
                    "atk": 2475991,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 223,
                    "transmuteCores": 66
                },
                "88203044": {
                    "atk": 2290116,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 126,
                    "transmuteCores": 24
                },
                "89511116": {
                    "atk": 2135616,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 16
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 71391620,
            "totalChips": 2070,
            "totalEe": null,
            "totalRelicCores": 5465,
            "totalTransmuteCores": 841
        },
        "48643": {
            "clanId": 48643,
            "lunarPoints": 1465,
            "members": {
                "104650978": {
                    "atk": 3078176,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "Hylidae",
                    "relicCores": 220,
                    "transmuteCores": 36
                },
                "117977358": {
                    "atk": 1844209,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "うずらᵟᵂ",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "25578150": {
                    "atk": 2895790,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "あやこりᵟᵂ",
                    "relicCores": 151,
                    "transmuteCores": 28
                },
                "30921402": {
                    "atk": 2819297,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "ﾀﾛｰﾀﾛｰ",
                    "relicCores": 136,
                    "transmuteCores": 6
                },
                "38743735": {
                    "atk": 2980275,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Player 38743735",
                    "relicCores": 342,
                    "transmuteCores": 40
                },
                "41522604": {
                    "atk": 2251934,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "めめう",
                    "relicCores": 169,
                    "transmuteCores": 15
                },
                "42023488": {
                    "atk": 2678548,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "senᵟᵂ",
                    "relicCores": 242,
                    "transmuteCores": 58
                },
                "42049762": {
                    "atk": 2866316,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "きょんP",
                    "relicCores": 160,
                    "transmuteCores": 32
                },
                "42299304": {
                    "atk": 2787111,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "area491",
                    "relicCores": 234,
                    "transmuteCores": 38
                },
                "44570142": {
                    "atk": 2236392,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "あさぼらけ",
                    "relicCores": 193,
                    "transmuteCores": 6
                },
                "45165744": {
                    "atk": 2788099,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "ミッチーᵟᵂ",
                    "relicCores": 160,
                    "transmuteCores": 36
                },
                "45782376": {
                    "atk": 3062106,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "Sumᵟᵂ",
                    "relicCores": 201,
                    "transmuteCores": 28
                },
                "45807238": {
                    "atk": 2706865,
                    "chipsCount": 170,
                    "eeBestScore": null,
                    "name": "ミッテー",
                    "relicCores": 158,
                    "transmuteCores": 0
                },
                "47400344": {
                    "atk": 3589899,
                    "chipsCount": 103,
                    "eeBestScore": null,
                    "name": "Tai-cᵟᵂ",
                    "relicCores": 314,
                    "transmuteCores": 54
                },
                "52221942": {
                    "atk": 2671497,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "ショウUᵟᵂ",
                    "relicCores": 167,
                    "transmuteCores": 14
                },
                "53998761": {
                    "atk": 2099082,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "ブラナイ武田",
                    "relicCores": 146,
                    "transmuteCores": 24
                },
                "54004311": {
                    "atk": 3098462,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "¿⊥¿",
                    "relicCores": 221,
                    "transmuteCores": 24
                },
                "57114517": {
                    "atk": 2043309,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "pataloha",
                    "relicCores": 177,
                    "transmuteCores": 4
                },
                "63510663": {
                    "atk": 2713334,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "純烈",
                    "relicCores": 177,
                    "transmuteCores": 20
                },
                "63962444": {
                    "atk": 2309228,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "okmrmnh",
                    "relicCores": 116,
                    "transmuteCores": 10
                },
                "64672938": {
                    "atk": 2017160,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "ちょびたん",
                    "relicCores": 137,
                    "transmuteCores": 24
                },
                "64884304": {
                    "atk": 1826364,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "APEX最高だぁ",
                    "relicCores": 124,
                    "transmuteCores": 30
                },
                "66987023": {
                    "atk": 2566361,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "みゃもん",
                    "relicCores": 161,
                    "transmuteCores": 46
                },
                "71317570": {
                    "atk": 1840979,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "ルキᵟᵂ",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "71654481": {
                    "atk": 1971324,
                    "chipsCount": 13,
                    "eeBestScore": null,
                    "name": "オオハシ君",
                    "relicCores": 140,
                    "transmuteCores": 6
                },
                "72351878": {
                    "atk": 3197911,
                    "chipsCount": 107,
                    "eeBestScore": null,
                    "name": "fοrtёᵟᵂ",
                    "relicCores": 204,
                    "transmuteCores": 40
                },
                "78728656": {
                    "atk": 2706530,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "kdmsh",
                    "relicCores": 113,
                    "transmuteCores": 10
                },
                "80039204": {
                    "atk": 3128926,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "提灯鮟鱇",
                    "relicCores": 276,
                    "transmuteCores": 24
                },
                "81470771": {
                    "atk": 2802829,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "キキカイカイ",
                    "relicCores": 157,
                    "transmuteCores": 14
                },
                "83775824": {
                    "atk": 2863213,
                    "chipsCount": 65,
                    "eeBestScore": null,
                    "name": "Player 83775824",
                    "relicCores": 118,
                    "transmuteCores": 14
                },
                "83797317": {
                    "atk": 3111576,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "Ｋゴン",
                    "relicCores": 195,
                    "transmuteCores": 28
                },
                "83964356": {
                    "atk": 2949192,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "愛媛の漁師",
                    "relicCores": 243,
                    "transmuteCores": 28
                },
                "86752834": {
                    "atk": 3155279,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "xionTakanori",
                    "relicCores": 212,
                    "transmuteCores": 50
                },
                "89470798": {
                    "atk": 2691341,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "はるふわᵟᵂ",
                    "relicCores": 147,
                    "transmuteCores": 24
                }
            },
            "name": "Quiet Wolf",
            "totalAtk": 82866038,
            "totalChips": 2188,
            "totalEe": null,
            "totalRelicCores": 5682,
            "totalTransmuteCores": 807
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

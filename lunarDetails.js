// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-11-12
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "11500": {
            "clanId": 11500,
            "lunarPoints": 1505,
            "members": {
                "116184437": {
                    "atk": 2173888,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 148,
                    "transmuteCores": 20
                },
                "16450851": {
                    "atk": 2717896,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "개나리",
                    "relicCores": 229,
                    "transmuteCores": 22
                },
                "16499675": {
                    "atk": 3009052,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "Ⅲ〄SOOAH〄",
                    "relicCores": 177,
                    "transmuteCores": 64
                },
                "21444012": {
                    "atk": 2428637,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "이태환7",
                    "relicCores": 129,
                    "transmuteCores": 0
                },
                "21952617": {
                    "atk": 2509588,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "배트충",
                    "relicCores": 189,
                    "transmuteCores": 34
                },
                "23299784": {
                    "atk": 2522095,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "탕탕탕탕탕v",
                    "relicCores": 195,
                    "transmuteCores": 16
                },
                "26226211": {
                    "atk": 2854914,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 145,
                    "transmuteCores": 24
                },
                "27916938": {
                    "atk": 2953230,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "Sprengeri",
                    "relicCores": 236,
                    "transmuteCores": 38
                },
                "29648578": {
                    "atk": 2695504,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "가릿",
                    "relicCores": 186,
                    "transmuteCores": 42
                },
                "31292758": {
                    "atk": 2806730,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "⚔️바티⚔️",
                    "relicCores": 224,
                    "transmuteCores": 38
                },
                "38875294": {
                    "atk": 3049990,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "가뤼",
                    "relicCores": 174,
                    "transmuteCores": 29
                },
                "42451990": {
                    "atk": 3089281,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "강철남자",
                    "relicCores": 190,
                    "transmuteCores": 42
                },
                "42683185": {
                    "atk": 2517568,
                    "chipsCount": 93,
                    "eeBestScore": null,
                    "name": "로재1367",
                    "relicCores": 139,
                    "transmuteCores": 7
                },
                "43209808": {
                    "atk": 2804854,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "폭주별이",
                    "relicCores": 185,
                    "transmuteCores": 20
                },
                "43745301": {
                    "atk": 2852040,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "니니모",
                    "relicCores": 153,
                    "transmuteCores": 28
                },
                "43792764": {
                    "atk": 2750686,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "파힘S",
                    "relicCores": 171,
                    "transmuteCores": 28
                },
                "45533371": {
                    "atk": 2942205,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "폴게오르그",
                    "relicCores": 176,
                    "transmuteCores": 4
                },
                "49514255": {
                    "atk": 2298507,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "Harunohi",
                    "relicCores": 139,
                    "transmuteCores": 21
                },
                "49706240": {
                    "atk": 2486745,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "천외ᵁᴺ",
                    "relicCores": 163,
                    "transmuteCores": 24
                },
                "50785622": {
                    "atk": 2924418,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "대한특전사",
                    "relicCores": 200,
                    "transmuteCores": 29
                },
                "52810774": {
                    "atk": 2600164,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "남궁형",
                    "relicCores": 178,
                    "transmuteCores": 28
                },
                "53654594": {
                    "atk": 3080080,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "강철닌자",
                    "relicCores": 190,
                    "transmuteCores": 42
                },
                "54642824": {
                    "atk": 3162502,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "로또1등기원",
                    "relicCores": 163,
                    "transmuteCores": 28
                },
                "57786187": {
                    "atk": 2767576,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Miu미우",
                    "relicCores": 159,
                    "transmuteCores": 24
                },
                "64165152": {
                    "atk": 2688716,
                    "chipsCount": 102,
                    "eeBestScore": null,
                    "name": "살곰쥐",
                    "relicCores": 190,
                    "transmuteCores": 21
                },
                "66532307": {
                    "atk": 2380306,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "밤엔이슬",
                    "relicCores": 177,
                    "transmuteCores": 34
                },
                "66546054": {
                    "atk": 2648948,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "탕영감",
                    "relicCores": 167,
                    "transmuteCores": 17
                },
                "67275317": {
                    "atk": 3584626,
                    "chipsCount": 164,
                    "eeBestScore": null,
                    "name": "직진ㆍ",
                    "relicCores": 208,
                    "transmuteCores": 44
                },
                "68022609": {
                    "atk": 2926941,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "효곰",
                    "relicCores": 171,
                    "transmuteCores": 30
                },
                "73183159": {
                    "atk": 2402884,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "ᵀᴼᴾ니모",
                    "relicCores": 168,
                    "transmuteCores": 30
                },
                "77809713": {
                    "atk": 2892721,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "뚜뚜JUNO",
                    "relicCores": 187,
                    "transmuteCores": 17
                },
                "79134023": {
                    "atk": 2268567,
                    "chipsCount": 94,
                    "eeBestScore": null,
                    "name": "NVDA",
                    "relicCores": 206,
                    "transmuteCores": 38
                },
                "81908481": {
                    "atk": 2838785,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "펠라시",
                    "relicCores": 176,
                    "transmuteCores": 29
                }
            },
            "name": "새나      ",
            "totalAtk": 83889682,
            "totalChips": 2262,
            "totalEe": null,
            "totalRelicCores": 5481,
            "totalTransmuteCores": 901
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1535,
            "members": {
                "100876140": {
                    "atk": 2788937,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 173,
                    "transmuteCores": 24
                },
                "103516442": {
                    "atk": 3268009,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 274,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 2014551,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2459819,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 155,
                    "transmuteCores": 18
                },
                "108546985": {
                    "atk": 2442000,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 203,
                    "transmuteCores": 44
                },
                "108860725": {
                    "atk": 2680038,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 2022668,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 110,
                    "transmuteCores": 24
                },
                "113690788": {
                    "atk": 2303990,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 118,
                    "transmuteCores": 34
                },
                "11463573": {
                    "atk": 2096977,
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
                    "atk": 2855535,
                    "chipsCount": 139,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 242,
                    "transmuteCores": 42
                },
                "18297536": {
                    "atk": 1879632,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 103,
                    "transmuteCores": 34
                },
                "26277677": {
                    "atk": 2619740,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 142,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2817760,
                    "chipsCount": 136,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 184,
                    "transmuteCores": 7
                },
                "29321884": {
                    "atk": 3313712,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 220,
                    "transmuteCores": 38
                },
                "29904762": {
                    "atk": 1768305,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 139,
                    "transmuteCores": 50
                },
                "30658936": {
                    "atk": 2497788,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 30
                },
                "32556489": {
                    "atk": 2096411,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 3188911,
                    "chipsCount": 135,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 257,
                    "transmuteCores": 34
                },
                "36484758": {
                    "atk": 2227219,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 2430211,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 220,
                    "transmuteCores": 34
                },
                "51071110": {
                    "atk": 2470138,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 134,
                    "transmuteCores": 38
                },
                "59566866": {
                    "atk": 2517070,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 171,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 4159803,
                    "chipsCount": 219,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 383,
                    "transmuteCores": 68
                },
                "61865023": {
                    "atk": 2710731,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "RexPanda",
                    "relicCores": 181,
                    "transmuteCores": 17
                },
                "64676255": {
                    "atk": 2545389,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 159,
                    "transmuteCores": 28
                },
                "66607264": {
                    "atk": 2619148,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": null,
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
                    "atk": 2359999,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 143,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2642157,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 174,
                    "transmuteCores": 60
                },
                "75174428": {
                    "atk": 2428612,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 192,
                    "transmuteCores": 12
                },
                "79510960": {
                    "atk": 2376434,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 185,
                    "transmuteCores": 11
                },
                "80018314": {
                    "atk": 2014217,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 185,
                    "transmuteCores": 5
                },
                "80972473": {
                    "atk": 3250009,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 186,
                    "transmuteCores": 50
                },
                "83339881": {
                    "atk": 3678980,
                    "chipsCount": 160,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 72
                },
                "83861839": {
                    "atk": 2323155,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "87244358": {
                    "atk": 3282206,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2676561,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 80
                },
                "88203044": {
                    "atk": 2494016,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 26
                },
                "89511116": {
                    "atk": 2274110,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 22
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 82474968,
            "totalChips": 2498,
            "totalEe": null,
            "totalRelicCores": 5889,
            "totalTransmuteCores": 1198
        },
        "87557": {
            "clanId": 87557,
            "lunarPoints": 1475,
            "members": {
                "101460404": {
                    "atk": 1823534,
                    "chipsCount": 125,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 142,
                    "transmuteCores": 20
                },
                "108882847": {
                    "atk": 1187759,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "破壊者シアン",
                    "relicCores": 139,
                    "transmuteCores": 2
                },
                "115922952": {
                    "atk": 1186751,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "７７７７",
                    "relicCores": 81,
                    "transmuteCores": 0
                },
                "117525375": {
                    "atk": 1162526,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "U3ゆーさん",
                    "relicCores": 142,
                    "transmuteCores": 2
                },
                "118025293": {
                    "atk": 2119064,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "おいでさす",
                    "relicCores": 150,
                    "transmuteCores": 16
                },
                "120027137": {
                    "atk": 1725867,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "こえるちゃん",
                    "relicCores": 101,
                    "transmuteCores": 11
                },
                "13714926": {
                    "atk": 3799960,
                    "chipsCount": 199,
                    "eeBestScore": null,
                    "name": "年休希望",
                    "relicCores": 364,
                    "transmuteCores": 48
                },
                "14398369": {
                    "atk": 1161504,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "イチロウ",
                    "relicCores": 165,
                    "transmuteCores": 0
                },
                "25061354": {
                    "atk": 1969911,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "Doする",
                    "relicCores": 173,
                    "transmuteCores": 8
                },
                "25332673": {
                    "atk": 1749365,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "無言サイコ",
                    "relicCores": 224,
                    "transmuteCores": 15
                },
                "28962253": {
                    "atk": 1661204,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "野獣田所先輩",
                    "relicCores": 174,
                    "transmuteCores": 4
                },
                "35394455": {
                    "atk": 2694165,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "exitus",
                    "relicCores": 180,
                    "transmuteCores": 10
                },
                "37456070": {
                    "atk": 2005204,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "うぇゆぅ",
                    "relicCores": 176,
                    "transmuteCores": 4
                },
                "38164839": {
                    "atk": 1764173,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "あつやきtamago",
                    "relicCores": 167,
                    "transmuteCores": 12
                },
                "40135757": {
                    "atk": 2248276,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "Subaru27",
                    "relicCores": 201,
                    "transmuteCores": 8
                },
                "41698083": {
                    "atk": 1610820,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "魏怒羅",
                    "relicCores": 175,
                    "transmuteCores": 4
                },
                "42322362": {
                    "atk": 1350261,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "ノアニャン",
                    "relicCores": 145,
                    "transmuteCores": 2
                },
                "42574984": {
                    "atk": 1773834,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "“ろく”",
                    "relicCores": 147,
                    "transmuteCores": 6
                },
                "45733138": {
                    "atk": 1601692,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "めがね侍",
                    "relicCores": 148,
                    "transmuteCores": 24
                },
                "47411950": {
                    "atk": 1602923,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "おやき0114",
                    "relicCores": 204,
                    "transmuteCores": 3
                },
                "49029949": {
                    "atk": 1916916,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "syu215",
                    "relicCores": 166,
                    "transmuteCores": 6
                },
                "49563865": {
                    "atk": 1240718,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "100000000",
                    "relicCores": 87,
                    "transmuteCores": 0
                },
                "53193809": {
                    "atk": 2245214,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "pokopen",
                    "relicCores": 155,
                    "transmuteCores": 1
                },
                "58909476": {
                    "atk": 3269530,
                    "chipsCount": 102,
                    "eeBestScore": null,
                    "name": "TamagoToufu",
                    "relicCores": 182,
                    "transmuteCores": 30
                },
                "59277403": {
                    "atk": 1902594,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "としあきんぐ",
                    "relicCores": 175,
                    "transmuteCores": 7
                },
                "61491486": {
                    "atk": 2442502,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "アグリアスHkn",
                    "relicCores": 143,
                    "transmuteCores": 14
                },
                "63182709": {
                    "atk": 2028150,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "おいしい森",
                    "relicCores": 155,
                    "transmuteCores": 7
                },
                "63933905": {
                    "atk": 2828299,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "にゃんこくま",
                    "relicCores": 215,
                    "transmuteCores": 10
                },
                "64318489": {
                    "atk": 2399107,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "じんぎぃ",
                    "relicCores": 147,
                    "transmuteCores": 10
                },
                "64527821": {
                    "atk": 3220514,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "room2552",
                    "relicCores": 180,
                    "transmuteCores": 10
                },
                "64558906": {
                    "atk": 1876970,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "大観峰",
                    "relicCores": 158,
                    "transmuteCores": 13
                },
                "67211305": {
                    "atk": 4082726,
                    "chipsCount": 207,
                    "eeBestScore": null,
                    "name": "モット",
                    "relicCores": 346,
                    "transmuteCores": 48
                },
                "68478218": {
                    "atk": 3273117,
                    "chipsCount": 126,
                    "eeBestScore": null,
                    "name": "SORAだよ",
                    "relicCores": 197,
                    "transmuteCores": 48
                },
                "73857006": {
                    "atk": 2446000,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "CrimsonKiss",
                    "relicCores": 187,
                    "transmuteCores": 31
                },
                "74821594": {
                    "atk": 2533595,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "マックロム",
                    "relicCores": 193,
                    "transmuteCores": 30
                },
                "77332851": {
                    "atk": 2381501,
                    "chipsCount": 93,
                    "eeBestScore": null,
                    "name": "neunzig",
                    "relicCores": 167,
                    "transmuteCores": 24
                },
                "82388792": {
                    "atk": 1749359,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "ruke1820",
                    "relicCores": 85,
                    "transmuteCores": 20
                },
                "85347106": {
                    "atk": 4040404,
                    "chipsCount": 206,
                    "eeBestScore": null,
                    "name": "ラズり",
                    "relicCores": 333,
                    "transmuteCores": 82
                },
                "90004080": {
                    "atk": 1747572,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "くまんも",
                    "relicCores": 151,
                    "transmuteCores": 12
                }
            },
            "name": "左手は添えるだけ",
            "totalAtk": 71718627,
            "totalChips": 2001,
            "totalEe": null,
            "totalRelicCores": 5755,
            "totalTransmuteCores": 588
        },
        "89549": {
            "clanId": 89549,
            "lunarPoints": 1385,
            "members": {
                "100772990": {
                    "atk": 1764326,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "_VIRUS_",
                    "relicCores": 194,
                    "transmuteCores": 3
                },
                "10649887": {
                    "atk": 443148,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Phduchun",
                    "relicCores": 21,
                    "transmuteCores": 0
                },
                "108083740": {
                    "atk": 2277512,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "триш",
                    "relicCores": 103,
                    "transmuteCores": 6
                },
                "111707217": {
                    "atk": 723355,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "SPITE",
                    "relicCores": 44,
                    "transmuteCores": 0
                },
                "113271987": {
                    "atk": 1351066,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "Cthulhu#7225",
                    "relicCores": 52,
                    "transmuteCores": 20
                },
                "116552080": {
                    "atk": 682863,
                    "chipsCount": 13,
                    "eeBestScore": null,
                    "name": "^17",
                    "relicCores": 39,
                    "transmuteCores": 6
                },
                "117814262": {
                    "atk": 1136273,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "⛧Necromåncër",
                    "relicCores": 70,
                    "transmuteCores": 6
                },
                "117872407": {
                    "atk": 715089,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "えまPGS",
                    "relicCores": 94,
                    "transmuteCores": 2
                },
                "118852160": {
                    "atk": 642622,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "Puvl1ck",
                    "relicCores": 39,
                    "transmuteCores": 14
                },
                "119733922": {
                    "atk": 1291559,
                    "chipsCount": 17,
                    "eeBestScore": null,
                    "name": "HitchINC",
                    "relicCores": 99,
                    "transmuteCores": 7
                },
                "119843950": {
                    "atk": 909715,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "DONIO",
                    "relicCores": 70,
                    "transmuteCores": 4
                },
                "12403937": {
                    "atk": 1389907,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "K0shmar2",
                    "relicCores": 107,
                    "transmuteCores": 1
                },
                "20090791": {
                    "atk": 966392,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "_Chipsik_",
                    "relicCores": 88,
                    "transmuteCores": 0
                },
                "24378269": {
                    "atk": 2340350,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "Exzent",
                    "relicCores": 180,
                    "transmuteCores": 7
                },
                "24940022": {
                    "atk": 1301849,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Jayribee",
                    "relicCores": 98,
                    "transmuteCores": 2
                },
                "25920677": {
                    "atk": 1013888,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "DrunkGOD",
                    "relicCores": 83,
                    "transmuteCores": 3
                },
                "27074367": {
                    "atk": 701797,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "4rtkiy",
                    "relicCores": 63,
                    "transmuteCores": 1
                },
                "30200688": {
                    "atk": 962446,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "Arcendiel",
                    "relicCores": 75,
                    "transmuteCores": 0
                },
                "31575706": {
                    "atk": 557275,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Daskhosh",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "37888464": {
                    "atk": 2067297,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "Edzie",
                    "relicCores": 97,
                    "transmuteCores": 6
                },
                "38622194": {
                    "atk": 1882701,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "Elemo93",
                    "relicCores": 134,
                    "transmuteCores": 10
                },
                "40520378": {
                    "atk": 195566,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Cancel",
                    "relicCores": 7,
                    "transmuteCores": 0
                },
                "41996340": {
                    "atk": 743173,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "хаус95",
                    "relicCores": 47,
                    "transmuteCores": 0
                },
                "44140286": {
                    "atk": 1306353,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": null,
                    "relicCores": 134,
                    "transmuteCores": 6
                },
                "54639134": {
                    "atk": 1660033,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "ZeroCool1994",
                    "relicCores": 109,
                    "transmuteCores": 5
                },
                "64386329": {
                    "atk": 1168516,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Nikolaik7",
                    "relicCores": 72,
                    "transmuteCores": 10
                },
                "65108777": {
                    "atk": 2038670,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "SaNjaGa",
                    "relicCores": 162,
                    "transmuteCores": 8
                },
                "65147405": {
                    "atk": 2456779,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "Djon/смит",
                    "relicCores": 185,
                    "transmuteCores": 30
                },
                "66329973": {
                    "atk": 2055264,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Splake",
                    "relicCores": 140,
                    "transmuteCores": 6
                },
                "69217269": {
                    "atk": 1467209,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "AndreyChampion",
                    "relicCores": 102,
                    "transmuteCores": 10
                },
                "70455240": {
                    "atk": 1798221,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "Gаmbit",
                    "relicCores": 126,
                    "transmuteCores": 0
                },
                "70462095": {
                    "atk": 1146426,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "Krishtal",
                    "relicCores": 115,
                    "transmuteCores": 1
                },
                "72072119": {
                    "atk": 1714241,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "sovietmachine",
                    "relicCores": 119,
                    "transmuteCores": 8
                },
                "72527849": {
                    "atk": 641593,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "oDiS",
                    "relicCores": 60,
                    "transmuteCores": 2
                },
                "80238145": {
                    "atk": 1089611,
                    "chipsCount": 15,
                    "eeBestScore": null,
                    "name": "Cristal22",
                    "relicCores": 53,
                    "transmuteCores": 0
                },
                "81464987": {
                    "atk": 344424,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "Shymkentsky",
                    "relicCores": 35,
                    "transmuteCores": 1
                },
                "83034935": {
                    "atk": 1183166,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "MageWisK_",
                    "relicCores": 99,
                    "transmuteCores": 0
                },
                "83769316": {
                    "atk": 2475441,
                    "chipsCount": 108,
                    "eeBestScore": null,
                    "name": "qwertyster",
                    "relicCores": 143,
                    "transmuteCores": 8
                },
                "87312234": {
                    "atk": 2779788,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "plexQ",
                    "relicCores": 181,
                    "transmuteCores": 26
                }
            },
            "name": "LeGion",
            "totalAtk": 46461527,
            "totalChips": 834,
            "totalEe": null,
            "totalRelicCores": 3355,
            "totalTransmuteCores": 219
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-10-22
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "13246": {
            "clanId": 13246,
            "lunarPoints": 1580,
            "members": {
                "122365922": {
                    "atk": 4371,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "이건부케",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "123374871": {
                    "atk": 1606,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "폴드지뢰제거",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "123430951": {
                    "atk": 3818,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "myjh_subID",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "27140824": {
                    "atk": 2740193,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "내가짱이닷",
                    "relicCores": 221,
                    "transmuteCores": 28
                },
                "27300120": {
                    "atk": 2177770,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "No1세효밍",
                    "relicCores": 104,
                    "transmuteCores": 16
                },
                "28989701": {
                    "atk": 3242180,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "쵸단ᴳᴳ",
                    "relicCores": 225,
                    "transmuteCores": 26
                },
                "31660047": {
                    "atk": 3143621,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "똥똥ᴳᴳ",
                    "relicCores": 189,
                    "transmuteCores": 16
                },
                "31844973": {
                    "atk": 1864876,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "돌멩2",
                    "relicCores": 131,
                    "transmuteCores": 26
                },
                "35353719": {
                    "atk": 3491744,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "myjhᴳᴳ",
                    "relicCores": 238,
                    "transmuteCores": 64
                },
                "37804866": {
                    "atk": 2549069,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "태극기집회",
                    "relicCores": 135,
                    "transmuteCores": 4
                },
                "42227115": {
                    "atk": 3181411,
                    "chipsCount": 145,
                    "eeBestScore": null,
                    "name": "드르르",
                    "relicCores": 253,
                    "transmuteCores": 38
                },
                "42727163": {
                    "atk": 3460042,
                    "chipsCount": 112,
                    "eeBestScore": null,
                    "name": "일등GG",
                    "relicCores": 286,
                    "transmuteCores": 48
                },
                "43614103": {
                    "atk": 2675897,
                    "chipsCount": 119,
                    "eeBestScore": null,
                    "name": "오공스ᴳᴳ",
                    "relicCores": 184,
                    "transmuteCores": 30
                },
                "46275645": {
                    "atk": 2867794,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "루이스GG",
                    "relicCores": 200,
                    "transmuteCores": 42
                },
                "48792770": {
                    "atk": 2489386,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "MKS나",
                    "relicCores": 238,
                    "transmuteCores": 18
                },
                "49591995": {
                    "atk": 3418368,
                    "chipsCount": 141,
                    "eeBestScore": null,
                    "name": "lockyyᴳᴳ",
                    "relicCores": 261,
                    "transmuteCores": 38
                },
                "52031430": {
                    "atk": 3335783,
                    "chipsCount": 95,
                    "eeBestScore": null,
                    "name": "우도환",
                    "relicCores": 184,
                    "transmuteCores": 28
                },
                "52799540": {
                    "atk": 3183963,
                    "chipsCount": 127,
                    "eeBestScore": null,
                    "name": "Schottkyᴳᴳ",
                    "relicCores": 218,
                    "transmuteCores": 38
                },
                "56047280": {
                    "atk": 3252721,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "LaptopLakeᴳᴳ",
                    "relicCores": 208,
                    "transmuteCores": 24
                },
                "56820187": {
                    "atk": 2439007,
                    "chipsCount": 68,
                    "eeBestScore": null,
                    "name": "임샘신랑",
                    "relicCores": 154,
                    "transmuteCores": 16
                },
                "58429386": {
                    "atk": 2329413,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "nodap",
                    "relicCores": 119,
                    "transmuteCores": 3
                },
                "58933212": {
                    "atk": 2146812,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "킹종빈",
                    "relicCores": 121,
                    "transmuteCores": 25
                },
                "63052346": {
                    "atk": 3279278,
                    "chipsCount": 192,
                    "eeBestScore": null,
                    "name": "포커ᴳᴳ",
                    "relicCores": 261,
                    "transmuteCores": 50
                },
                "63105331": {
                    "atk": 3262797,
                    "chipsCount": 177,
                    "eeBestScore": null,
                    "name": "싯앤골드ᴳᴳ",
                    "relicCores": 234,
                    "transmuteCores": 26
                },
                "63105341": {
                    "atk": 2726427,
                    "chipsCount": 78,
                    "eeBestScore": null,
                    "name": "올인폴드ᴳᴳ",
                    "relicCores": 145,
                    "transmuteCores": 20
                },
                "63565214": {
                    "atk": 3040674,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "choijkᴳᴳ",
                    "relicCores": 188,
                    "transmuteCores": 34
                },
                "64116353": {
                    "atk": 3496219,
                    "chipsCount": 200,
                    "eeBestScore": null,
                    "name": "아톰ᴳᴳ",
                    "relicCores": 265,
                    "transmuteCores": 50
                },
                "74033309": {
                    "atk": 1994823,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "플립앤꼬",
                    "relicCores": 124,
                    "transmuteCores": 0
                },
                "76598505": {
                    "atk": 2313578,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Hideᴳᴳ",
                    "relicCores": 208,
                    "transmuteCores": 28
                },
                "78977252": {
                    "atk": 2429175,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "LazyGom",
                    "relicCores": 184,
                    "transmuteCores": 22
                },
                "83779236": {
                    "atk": 4405011,
                    "chipsCount": 235,
                    "eeBestScore": null,
                    "name": "루시아ᴳᴳ",
                    "relicCores": 284,
                    "transmuteCores": 78
                },
                "84263509": {
                    "atk": 3398878,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "강냉이컬렉터",
                    "relicCores": 150,
                    "transmuteCores": 38
                },
                "85786572": {
                    "atk": 2463140,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "영천동할비",
                    "relicCores": 96,
                    "transmuteCores": 17
                },
                "86680114": {
                    "atk": 1813058,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "보안검색",
                    "relicCores": 156,
                    "transmuteCores": 30
                },
                "88683502": {
                    "atk": 1413913,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "크억",
                    "relicCores": 76,
                    "transmuteCores": 20
                }
            },
            "name": "GG탕탕",
            "totalAtk": 86800050,
            "totalChips": 2812,
            "totalEe": null,
            "totalRelicCores": 5868,
            "totalTransmuteCores": 938
        },
        "27335": {
            "clanId": 27335,
            "lunarPoints": 1610,
            "members": {
                "10732896": {
                    "atk": 2881800,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "ShivaBiG",
                    "relicCores": 142,
                    "transmuteCores": 28
                },
                "108418842": {
                    "atk": 2689312,
                    "chipsCount": 102,
                    "eeBestScore": null,
                    "name": "Liαm",
                    "relicCores": 284,
                    "transmuteCores": 34
                },
                "108482446": {
                    "atk": 3174746,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "Ky$",
                    "relicCores": 212,
                    "transmuteCores": 50
                },
                "11050092": {
                    "atk": 3282725,
                    "chipsCount": 131,
                    "eeBestScore": null,
                    "name": "Ⓣ-①⓪⓪⓪",
                    "relicCores": 226,
                    "transmuteCores": 34
                },
                "116594450": {
                    "atk": 364095,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "KieranNV",
                    "relicCores": 11,
                    "transmuteCores": 0
                },
                "116636755": {
                    "atk": 2666282,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "*HànLãoMa*",
                    "relicCores": 142,
                    "transmuteCores": 64
                },
                "11729949": {
                    "atk": 2579883,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "NgưSinhLộc",
                    "relicCores": 157,
                    "transmuteCores": 44
                },
                "11827559": {
                    "atk": 2382854,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "ӜϐཇѽӜᵛᴺ",
                    "relicCores": 128,
                    "transmuteCores": 40
                },
                "12400769": {
                    "atk": 3001344,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "×͜×NᵀHᵈᶻ",
                    "relicCores": 172,
                    "transmuteCores": 44
                },
                "14267789": {
                    "atk": 2885894,
                    "chipsCount": 148,
                    "eeBestScore": null,
                    "name": "βéHεᴏ•♡",
                    "relicCores": 224,
                    "transmuteCores": 76
                },
                "15857782": {
                    "atk": 2988072,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "ChơiGameKoNạp",
                    "relicCores": 160,
                    "transmuteCores": 34
                },
                "15948628": {
                    "atk": 3193105,
                    "chipsCount": 107,
                    "eeBestScore": null,
                    "name": "Ａｎđâｙ",
                    "relicCores": 190,
                    "transmuteCores": 50
                },
                "16496051": {
                    "atk": 2964705,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "HNღHaT7",
                    "relicCores": 174,
                    "transmuteCores": 49
                },
                "17849080": {
                    "atk": 3557645,
                    "chipsCount": 155,
                    "eeBestScore": null,
                    "name": "KhôngChơiNữa",
                    "relicCores": 254,
                    "transmuteCores": 60
                },
                "20405968": {
                    "atk": 3496001,
                    "chipsCount": 153,
                    "eeBestScore": null,
                    "name": "Mr.QYᵛⁿ",
                    "relicCores": 218,
                    "transmuteCores": 54
                },
                "20781480": {
                    "atk": 2785449,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "༄༂ßảoNgọc",
                    "relicCores": 187,
                    "transmuteCores": 40
                },
                "21520774": {
                    "atk": 3432115,
                    "chipsCount": 165,
                    "eeBestScore": null,
                    "name": "Cucuahby",
                    "relicCores": 230,
                    "transmuteCores": 64
                },
                "24153696": {
                    "atk": 3132566,
                    "chipsCount": 124,
                    "eeBestScore": null,
                    "name": "Funny9999",
                    "relicCores": 165,
                    "transmuteCores": 28
                },
                "33190505": {
                    "atk": 3773681,
                    "chipsCount": 172,
                    "eeBestScore": null,
                    "name": "☆ɐıɥɓu☆",
                    "relicCores": 220,
                    "transmuteCores": 64
                },
                "35470380": {
                    "atk": 789827,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "Billyjewel",
                    "relicCores": 71,
                    "transmuteCores": 1
                },
                "36816367": {
                    "atk": 2916874,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "duong453",
                    "relicCores": 174,
                    "transmuteCores": 44
                },
                "36848290": {
                    "atk": 3105951,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "BlackㅣClover",
                    "relicCores": 190,
                    "transmuteCores": 38
                },
                "38407584": {
                    "atk": 2202690,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "Mambooooow",
                    "relicCores": 169,
                    "transmuteCores": 18
                },
                "39812505": {
                    "atk": 2480326,
                    "chipsCount": 134,
                    "eeBestScore": null,
                    "name": "BùLonTrảGóp",
                    "relicCores": 230,
                    "transmuteCores": 72
                },
                "39911706": {
                    "atk": 3038721,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "maxime~~",
                    "relicCores": 215,
                    "transmuteCores": 30
                },
                "42198979": {
                    "atk": 2892093,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "ChickOne",
                    "relicCores": 174,
                    "transmuteCores": 54
                },
                "42718805": {
                    "atk": 2732396,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "Tướng_Công",
                    "relicCores": 200,
                    "transmuteCores": 38
                },
                "43641565": {
                    "atk": 3712905,
                    "chipsCount": 184,
                    "eeBestScore": null,
                    "name": "Mr.At",
                    "relicCores": 254,
                    "transmuteCores": 76
                },
                "43939441": {
                    "atk": 2971707,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "No͜͡o",
                    "relicCores": 155,
                    "transmuteCores": 24
                },
                "52182845": {
                    "atk": 3368130,
                    "chipsCount": 127,
                    "eeBestScore": null,
                    "name": "bánhđậuxanh",
                    "relicCores": 221,
                    "transmuteCores": 72
                },
                "60007658": {
                    "atk": 2301163,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "N●1BánhMì",
                    "relicCores": 156,
                    "transmuteCores": 32
                },
                "67700866": {
                    "atk": 3307384,
                    "chipsCount": 158,
                    "eeBestScore": null,
                    "name": "•༒Gạσ༒•",
                    "relicCores": 228,
                    "transmuteCores": 68
                },
                "68167777": {
                    "atk": 4244282,
                    "chipsCount": 185,
                    "eeBestScore": null,
                    "name": "౨ৎ8134",
                    "relicCores": 344,
                    "transmuteCores": 126
                },
                "72796221": {
                    "atk": 3023552,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "ChơiGameÍtNạp",
                    "relicCores": 164,
                    "transmuteCores": 30
                },
                "74286183": {
                    "atk": 3149123,
                    "chipsCount": 156,
                    "eeBestScore": null,
                    "name": "★Coca",
                    "relicCores": 240,
                    "transmuteCores": 50
                },
                "77084517": {
                    "atk": 2804773,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "JaseBourne",
                    "relicCores": 142,
                    "transmuteCores": 34
                },
                "77777411": {
                    "atk": 4025038,
                    "chipsCount": 176,
                    "eeBestScore": null,
                    "name": "1gucciツ",
                    "relicCores": 336,
                    "transmuteCores": 72
                },
                "81389301": {
                    "atk": 4114908,
                    "chipsCount": 219,
                    "eeBestScore": null,
                    "name": "MinhHíuu",
                    "relicCores": 305,
                    "transmuteCores": 64
                },
                "82486252": {
                    "atk": 2397092,
                    "chipsCount": 73,
                    "eeBestScore": null,
                    "name": "An20cm",
                    "relicCores": 161,
                    "transmuteCores": 34
                },
                "84667250": {
                    "atk": 2888419,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "Pepsi20",
                    "relicCores": 151,
                    "transmuteCores": 30
                }
            },
            "name": "VuiLàChính",
            "totalAtk": 96846104,
            "totalChips": 3606,
            "totalEe": null,
            "totalRelicCores": 6521,
            "totalTransmuteCores": 1643
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1545,
            "members": {
                "100876140": {
                    "atk": 2540277,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "transmuteCores": 30
                },
                "103516442": {
                    "atk": 3192004,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 268,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 1964324,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2256706,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2415254,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 194,
                    "transmuteCores": 38
                },
                "108860725": {
                    "atk": 2528494,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 1989059,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 124,
                    "transmuteCores": 34
                },
                "113690788": {
                    "atk": 2170031,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 28
                },
                "11463573": {
                    "atk": 2009917,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 119,
                    "transmuteCores": 50
                },
                "115742768": {
                    "atk": 49348,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2667291,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 242,
                    "transmuteCores": 34
                },
                "18297536": {
                    "atk": 1830907,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 104,
                    "transmuteCores": 30
                },
                "26277677": {
                    "atk": 2444987,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 136,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2516736,
                    "chipsCount": 130,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 168,
                    "transmuteCores": 10
                },
                "29321884": {
                    "atk": 3232014,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 214,
                    "transmuteCores": 34
                },
                "29904762": {
                    "atk": 1836455,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 134,
                    "transmuteCores": 45
                },
                "30658936": {
                    "atk": 2453539,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 26
                },
                "32556489": {
                    "atk": 2103742,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 2746396,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 266,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 2089819,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 2368409,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 219,
                    "transmuteCores": 34
                },
                "51071110": {
                    "atk": 2447403,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 134,
                    "transmuteCores": 34
                },
                "59566866": {
                    "atk": 2417125,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 152,
                    "transmuteCores": 2
                },
                "60687252": {
                    "atk": 4089482,
                    "chipsCount": 214,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 383,
                    "transmuteCores": 64
                },
                "64676255": {
                    "atk": 2520533,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 132,
                    "transmuteCores": 14
                },
                "66607264": {
                    "atk": 2493009,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 174,
                    "transmuteCores": 25
                },
                "70603922": {
                    "atk": 1951039,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 138,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2152227,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 138,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2411239,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 172,
                    "transmuteCores": 52
                },
                "75174428": {
                    "atk": 2401309,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 187,
                    "transmuteCores": 11
                },
                "79510960": {
                    "atk": 2134076,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 190,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 2059437,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 180,
                    "transmuteCores": 6
                },
                "80972473": {
                    "atk": 3229974,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 182,
                    "transmuteCores": 44
                },
                "83339881": {
                    "atk": 3629890,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 64
                },
                "83861839": {
                    "atk": 2350462,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "transmuteCores": 34
                },
                "87244358": {
                    "atk": 3129378,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2657566,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 72
                },
                "88203044": {
                    "atk": 2374947,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 25
                },
                "89511116": {
                    "atk": 2205594,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 171,
                    "transmuteCores": 12
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 78280094,
            "totalChips": 2371,
            "totalEe": null,
            "totalRelicCores": 5735,
            "totalTransmuteCores": 1094
        },
        "45508": {
            "clanId": 45508,
            "lunarPoints": 1575,
            "members": {
                "10510960": {
                    "atk": 2914877,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "방심금은물",
                    "relicCores": 178,
                    "transmuteCores": 38
                },
                "15635936": {
                    "atk": 2062157,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "이구역에짱임",
                    "relicCores": 108,
                    "transmuteCores": 16
                },
                "17631993": {
                    "atk": 2799374,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "철썩",
                    "relicCores": 172,
                    "transmuteCores": 32
                },
                "21077014": {
                    "atk": 2908972,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "망사스타킹",
                    "relicCores": 190,
                    "transmuteCores": 41
                },
                "21223328": {
                    "atk": 2912876,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "Yeol-i",
                    "relicCores": 238,
                    "transmuteCores": 54
                },
                "22581548": {
                    "atk": 2387460,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "meraccoon",
                    "relicCores": 139,
                    "transmuteCores": 30
                },
                "23698245": {
                    "atk": 2297773,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "단님님",
                    "relicCores": 164,
                    "transmuteCores": 30
                },
                "24267809": {
                    "atk": 2923944,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "ˢʷBJKim",
                    "relicCores": 230,
                    "transmuteCores": 38
                },
                "28522785": {
                    "atk": 2731517,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "ˢʷ하루사마",
                    "relicCores": 174,
                    "transmuteCores": 32
                },
                "36370217": {
                    "atk": 2325572,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "ˢʷ기영웅",
                    "relicCores": 130,
                    "transmuteCores": 10
                },
                "36787146": {
                    "atk": 2716541,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "안놔쑤이",
                    "relicCores": 226,
                    "transmuteCores": 34
                },
                "37247946": {
                    "atk": 2819626,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "ˢʷ탕탕수육",
                    "relicCores": 190,
                    "transmuteCores": 48
                },
                "38653699": {
                    "atk": 3179179,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "수리",
                    "relicCores": 182,
                    "transmuteCores": 42
                },
                "39892355": {
                    "atk": 3423724,
                    "chipsCount": 159,
                    "eeBestScore": null,
                    "name": "깔쌈°",
                    "relicCores": 245,
                    "transmuteCores": 45
                },
                "40575319": {
                    "atk": 3105196,
                    "chipsCount": 150,
                    "eeBestScore": null,
                    "name": "피타고라뚜",
                    "relicCores": 169,
                    "transmuteCores": 0
                },
                "41247384": {
                    "atk": 2741117,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "ˢʷ상하이조",
                    "relicCores": 200,
                    "transmuteCores": 46
                },
                "42054072": {
                    "atk": 4348594,
                    "chipsCount": 295,
                    "eeBestScore": null,
                    "name": "곰크나이트",
                    "relicCores": 383,
                    "transmuteCores": 84
                },
                "43626536": {
                    "atk": 3368261,
                    "chipsCount": 160,
                    "eeBestScore": null,
                    "name": "풀랑",
                    "relicCores": 228,
                    "transmuteCores": 54
                },
                "43940306": {
                    "atk": 3488269,
                    "chipsCount": 214,
                    "eeBestScore": null,
                    "name": "다크나이트⠀",
                    "relicCores": 261,
                    "transmuteCores": 34
                },
                "44347404": {
                    "atk": 2014728,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "메이플시럽",
                    "relicCores": 164,
                    "transmuteCores": 6
                },
                "46178498": {
                    "atk": 3316457,
                    "chipsCount": 197,
                    "eeBestScore": null,
                    "name": "공주ღ",
                    "relicCores": 315,
                    "transmuteCores": 1
                },
                "47819223": {
                    "atk": 3523725,
                    "chipsCount": 118,
                    "eeBestScore": null,
                    "name": "박수영님이다",
                    "relicCores": 265,
                    "transmuteCores": 58
                },
                "48987414": {
                    "atk": 2508232,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "김게장",
                    "relicCores": 159,
                    "transmuteCores": 34
                },
                "49293866": {
                    "atk": 2739348,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "아이노비아",
                    "relicCores": 174,
                    "transmuteCores": 34
                },
                "49650349": {
                    "atk": 3556917,
                    "chipsCount": 141,
                    "eeBestScore": null,
                    "name": "꿀뚜지2",
                    "relicCores": 269,
                    "transmuteCores": 42
                },
                "49730874": {
                    "atk": 2812667,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "ˢʷ먹순이",
                    "relicCores": 200,
                    "transmuteCores": 0
                },
                "51985502": {
                    "atk": 1946778,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "ˢʷ돈영이",
                    "relicCores": 180,
                    "transmuteCores": 30
                },
                "58789194": {
                    "atk": 2842391,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "굿차니",
                    "relicCores": 136,
                    "transmuteCores": 25
                },
                "63033985": {
                    "atk": 2612841,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "쓰레기수집가",
                    "relicCores": 150,
                    "transmuteCores": 39
                },
                "66329662": {
                    "atk": 2366307,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "kimji0523",
                    "relicCores": 139,
                    "transmuteCores": 30
                },
                "67141288": {
                    "atk": 1547497,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "swings",
                    "relicCores": 158,
                    "transmuteCores": 13
                },
                "68328504": {
                    "atk": 3596496,
                    "chipsCount": 110,
                    "eeBestScore": null,
                    "name": "ˢʷ노을",
                    "relicCores": 200,
                    "transmuteCores": 50
                },
                "71235440": {
                    "atk": 3597333,
                    "chipsCount": 135,
                    "eeBestScore": null,
                    "name": "서태하",
                    "relicCores": 257,
                    "transmuteCores": 42
                },
                "74048271": {
                    "atk": 3040366,
                    "chipsCount": 104,
                    "eeBestScore": null,
                    "name": "조까치",
                    "relicCores": 165,
                    "transmuteCores": 28
                },
                "76129009": {
                    "atk": 2336522,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "ˢʷ아오빡쳐",
                    "relicCores": 172,
                    "transmuteCores": 25
                },
                "76615030": {
                    "atk": 3402292,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "레프티",
                    "relicCores": 220,
                    "transmuteCores": 30
                },
                "83815353": {
                    "atk": 3689598,
                    "chipsCount": 172,
                    "eeBestScore": null,
                    "name": "♡초초♡",
                    "relicCores": 257,
                    "transmuteCores": 50
                },
                "88352695": {
                    "atk": 3163798,
                    "chipsCount": 94,
                    "eeBestScore": null,
                    "name": "ˢʷEDH",
                    "relicCores": 225,
                    "transmuteCores": 0
                }
            },
            "name": "스윗",
            "totalAtk": 93171988,
            "totalChips": 3300,
            "totalEe": null,
            "totalRelicCores": 6493,
            "totalTransmuteCores": 1199
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

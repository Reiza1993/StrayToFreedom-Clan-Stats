// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-08-27
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalEe each only count that
// clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores sums the
// top 30 members by Relic Cores, not the top 30 by ATK - each total is ranked
// independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "14512": {
            "clanId": 14512,
            "lunarPoints": 1435,
            "members": {
                "106243139": {
                    "atk": 1825370,
                    "eeBestScore": null,
                    "name": "DҜ·tzz",
                    "relicCores": 124,
                    "transmuteCores": 24
                },
                "107583801": {
                    "atk": 1305480,
                    "eeBestScore": null,
                    "name": "DuoCross",
                    "relicCores": 54,
                    "transmuteCores": 0
                },
                "110449396": {
                    "atk": 2323744,
                    "eeBestScore": null,
                    "name": "DҜ·餘聲",
                    "relicCores": 146,
                    "transmuteCores": 28
                },
                "115722888": {
                    "atk": 2212,
                    "eeBestScore": null,
                    "name": "aleksandr Peggie",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "12252319": {
                    "atk": 1577690,
                    "eeBestScore": null,
                    "name": "DҜ·SwAk",
                    "relicCores": 201,
                    "transmuteCores": 3
                },
                "14657948": {
                    "atk": 1830747,
                    "eeBestScore": null,
                    "name": "DҜ·Gavinxf",
                    "relicCores": 174,
                    "transmuteCores": 22
                },
                "19302470": {
                    "atk": 1940993,
                    "eeBestScore": null,
                    "name": "DҜ·龍",
                    "relicCores": 166,
                    "transmuteCores": 28
                },
                "20854750": {
                    "atk": 2806036,
                    "eeBestScore": null,
                    "name": "妖精祭",
                    "relicCores": 179,
                    "transmuteCores": 30
                },
                "21464682": {
                    "atk": 1925516,
                    "eeBestScore": null,
                    "name": "DҜ·Smatrix",
                    "relicCores": 111,
                    "transmuteCores": 10
                },
                "22657010": {
                    "atk": 1508873,
                    "eeBestScore": null,
                    "name": "Player 22657010",
                    "relicCores": 126,
                    "transmuteCores": 4
                },
                "23962529": {
                    "atk": 2371111,
                    "eeBestScore": null,
                    "name": "DҜ·JING8246",
                    "relicCores": 194,
                    "transmuteCores": 54
                },
                "30925176": {
                    "atk": 1075139,
                    "eeBestScore": null,
                    "name": "DҜ·老爹oUo",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "31417911": {
                    "atk": 2941148,
                    "eeBestScore": null,
                    "name": "你人还怪好捏",
                    "relicCores": 218,
                    "transmuteCores": 28
                },
                "32222107": {
                    "atk": 3402856,
                    "eeBestScore": null,
                    "name": "DҜ·翟",
                    "relicCores": 193,
                    "transmuteCores": 36
                },
                "36489494": {
                    "atk": 1385578,
                    "eeBestScore": null,
                    "name": "FoodBearBear",
                    "relicCores": 229,
                    "transmuteCores": 4
                },
                "38872864": {
                    "atk": 1686614,
                    "eeBestScore": null,
                    "name": "伯言",
                    "relicCores": 114,
                    "transmuteCores": 24
                },
                "41388461": {
                    "atk": 1560412,
                    "eeBestScore": null,
                    "name": "JWing",
                    "relicCores": 91,
                    "transmuteCores": 14
                },
                "45062851": {
                    "atk": 2116829,
                    "eeBestScore": null,
                    "name": "DҜ·CowCow",
                    "relicCores": 135,
                    "transmuteCores": 6
                },
                "46232789": {
                    "atk": 1676287,
                    "eeBestScore": null,
                    "name": "DҜ·MCTa",
                    "relicCores": 170,
                    "transmuteCores": 20
                },
                "47637907": {
                    "atk": 2142574,
                    "eeBestScore": null,
                    "name": "柚子猫",
                    "relicCores": 177,
                    "transmuteCores": 12
                },
                "48067585": {
                    "atk": 2949737,
                    "eeBestScore": null,
                    "name": "DҜ·ChangheZzz",
                    "relicCores": 271,
                    "transmuteCores": 58
                },
                "55164540": {
                    "atk": 2468380,
                    "eeBestScore": null,
                    "name": "鸭梨不大",
                    "relicCores": 222,
                    "transmuteCores": 8
                },
                "60674891": {
                    "atk": 2276791,
                    "eeBestScore": null,
                    "name": "DҜ·输不起",
                    "relicCores": 134,
                    "transmuteCores": 20
                },
                "61858267": {
                    "atk": 2387205,
                    "eeBestScore": null,
                    "name": "麻花耶",
                    "relicCores": 186,
                    "transmuteCores": 20
                },
                "62535723": {
                    "atk": 2151391,
                    "eeBestScore": null,
                    "name": "MrNoOB",
                    "relicCores": 209,
                    "transmuteCores": 4
                },
                "68349782": {
                    "atk": 2273453,
                    "eeBestScore": null,
                    "name": "Lumionss",
                    "relicCores": 139,
                    "transmuteCores": 6
                },
                "68801930": {
                    "atk": 1455604,
                    "eeBestScore": null,
                    "name": "小白熊熊",
                    "relicCores": 229,
                    "transmuteCores": 4
                },
                "68804437": {
                    "atk": 2086257,
                    "eeBestScore": null,
                    "name": "Hector3343",
                    "relicCores": 124,
                    "transmuteCores": 28
                },
                "74094021": {
                    "atk": 1091233,
                    "eeBestScore": null,
                    "name": "DҜ·emmmˣ",
                    "relicCores": 94,
                    "transmuteCores": 1
                },
                "74904017": {
                    "atk": 2432463,
                    "eeBestScore": null,
                    "name": "DҜ·雪茄GO",
                    "relicCores": 179,
                    "transmuteCores": 19
                },
                "74919572": {
                    "atk": 1954867,
                    "eeBestScore": null,
                    "name": "没苦硬吃",
                    "relicCores": 133,
                    "transmuteCores": 6
                },
                "75173613": {
                    "atk": 2828128,
                    "eeBestScore": null,
                    "name": "DҜ·冥枭",
                    "relicCores": 264,
                    "transmuteCores": 34
                },
                "77317444": {
                    "atk": 1803204,
                    "eeBestScore": null,
                    "name": "捕捉闪耀瞬间",
                    "relicCores": 163,
                    "transmuteCores": 6
                },
                "81573623": {
                    "atk": 1919193,
                    "eeBestScore": null,
                    "name": "吃貨主宰",
                    "relicCores": 156,
                    "transmuteCores": 20
                },
                "81937891": {
                    "atk": 2833937,
                    "eeBestScore": null,
                    "name": "DҜ·东方翔",
                    "relicCores": 200,
                    "transmuteCores": 0
                },
                "82876046": {
                    "atk": 1718833,
                    "eeBestScore": null,
                    "name": "Chungbae",
                    "relicCores": 180,
                    "transmuteCores": 1
                },
                "84471774": {
                    "atk": 2820821,
                    "eeBestScore": null,
                    "name": "Pris516",
                    "relicCores": 207,
                    "transmuteCores": 44
                },
                "86362410": {
                    "atk": 1617244,
                    "eeBestScore": null,
                    "name": "唔課金點玩",
                    "relicCores": 183,
                    "transmuteCores": 5
                },
                "87226516": {
                    "atk": 2234673,
                    "eeBestScore": null,
                    "name": "TQwang",
                    "relicCores": 279,
                    "transmuteCores": 40
                },
                "88579817": {
                    "atk": 2114987,
                    "eeBestScore": null,
                    "name": "〆ㆍ洛殇",
                    "relicCores": 182,
                    "transmuteCores": 20
                }
            },
            "name": "DҜ·弹壳小队ᶻ",
            "totalAtk": 68244145,
            "totalEe": null,
            "totalRelicCores": 5698,
            "totalTransmuteCores": 674
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1435,
            "members": {
                "100876140": {
                    "atk": 2371812,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 173,
                    "transmuteCores": 10
                },
                "102263647": {
                    "atk": 2446100,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2836953,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 228,
                    "transmuteCores": 60
                },
                "106162623": {
                    "atk": 1729495,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 14
                },
                "10754439": {
                    "atk": 1827919,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 140,
                    "transmuteCores": 14
                },
                "108546985": {
                    "atk": 2016830,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 181,
                    "transmuteCores": 30
                },
                "112772047": {
                    "atk": 1737867,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 104,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1580162,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 20
                },
                "11463573": {
                    "atk": 1719582,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 106,
                    "transmuteCores": 24
                },
                "115742768": {
                    "atk": 147791,
                    "eeBestScore": null,
                    "name": "SterbyTools",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2598771,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 234,
                    "transmuteCores": 16
                },
                "18297536": {
                    "atk": 1798970,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "19575414": {
                    "atk": 2237550,
                    "eeBestScore": null,
                    "name": "Zveryok",
                    "relicCores": 210,
                    "transmuteCores": 11
                },
                "26277677": {
                    "atk": 2025467,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 130,
                    "transmuteCores": 11
                },
                "29321884": {
                    "atk": 2996140,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 204,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1449252,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 111,
                    "transmuteCores": 34
                },
                "30658936": {
                    "atk": 2126689,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 14
                },
                "32556489": {
                    "atk": 1662504,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 93,
                    "transmuteCores": 14
                },
                "35869301": {
                    "atk": 2660335,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 253,
                    "transmuteCores": 24
                },
                "36484758": {
                    "atk": 1613206,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 2007286,
                    "eeBestScore": null,
                    "name": "PinkyToeBeans",
                    "relicCores": 205,
                    "transmuteCores": 30
                },
                "51071110": {
                    "atk": 2065558,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 131,
                    "transmuteCores": 24
                },
                "59566866": {
                    "atk": 1997253,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 155,
                    "transmuteCores": 8
                },
                "60687252": {
                    "atk": 3773181,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 50
                },
                "64676255": {
                    "atk": 2236850,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 144,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 1804281,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 163,
                    "transmuteCores": 25
                },
                "69676999": {
                    "atk": 1946565,
                    "eeBestScore": null,
                    "name": "datamaster",
                    "relicCores": 146,
                    "transmuteCores": 3
                },
                "70603922": {
                    "atk": 1495371,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 1874788,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 131,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2110721,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 169,
                    "transmuteCores": 37
                },
                "75174428": {
                    "atk": 2161010,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 182,
                    "transmuteCores": 9
                },
                "79510960": {
                    "atk": 1622235,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 176,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1801114,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 170,
                    "transmuteCores": 2
                },
                "80972473": {
                    "atk": 2853615,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 176,
                    "transmuteCores": 38
                },
                "83339881": {
                    "atk": 3335490,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 54
                },
                "83861839": {
                    "atk": 1810105,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 93,
                    "transmuteCores": 14
                },
                "87244358": {
                    "atk": 2743393,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 197,
                    "transmuteCores": 28
                },
                "87954282": {
                    "atk": 2458986,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 223,
                    "transmuteCores": 62
                },
                "88203044": {
                    "atk": 2189004,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 126,
                    "transmuteCores": 24
                },
                "89511116": {
                    "atk": 2092318,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 186,
                    "transmuteCores": 9
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 69205054,
            "totalEe": null,
            "totalRelicCores": 5611,
            "totalTransmuteCores": 826
        },
        "45508": {
            "clanId": 45508,
            "lunarPoints": 1435,
            "members": {
                "10510960": {
                    "atk": 2502905,
                    "eeBestScore": null,
                    "name": "방심금은물",
                    "relicCores": 185,
                    "transmuteCores": 30
                },
                "12429703": {
                    "atk": 2381578,
                    "eeBestScore": null,
                    "name": "ˢʷ천변",
                    "relicCores": 172,
                    "transmuteCores": 28
                },
                "15635936": {
                    "atk": 1753813,
                    "eeBestScore": null,
                    "name": "이구역에짱임",
                    "relicCores": 96,
                    "transmuteCores": 6
                },
                "17631993": {
                    "atk": 2416364,
                    "eeBestScore": null,
                    "name": "철썩",
                    "relicCores": 154,
                    "transmuteCores": 18
                },
                "21077014": {
                    "atk": 2774753,
                    "eeBestScore": null,
                    "name": "망사스타킹",
                    "relicCores": 163,
                    "transmuteCores": 28
                },
                "21223328": {
                    "atk": 2652584,
                    "eeBestScore": null,
                    "name": "Yeol-i",
                    "relicCores": 225,
                    "transmuteCores": 40
                },
                "22581548": {
                    "atk": 2163104,
                    "eeBestScore": null,
                    "name": "meraccoon",
                    "relicCores": 135,
                    "transmuteCores": 18
                },
                "23698245": {
                    "atk": 2277230,
                    "eeBestScore": null,
                    "name": "단님님",
                    "relicCores": 159,
                    "transmuteCores": 24
                },
                "24267809": {
                    "atk": 2757552,
                    "eeBestScore": null,
                    "name": "ˢʷBJKim",
                    "relicCores": 178,
                    "transmuteCores": 14
                },
                "28522785": {
                    "atk": 2332104,
                    "eeBestScore": null,
                    "name": "ˢʷ하루사마",
                    "relicCores": 150,
                    "transmuteCores": 14
                },
                "35027969": {
                    "atk": 2240363,
                    "eeBestScore": null,
                    "name": "ˢʷ취사장",
                    "relicCores": 126,
                    "transmuteCores": 10
                },
                "36370217": {
                    "atk": 2329159,
                    "eeBestScore": null,
                    "name": "ˢʷ기영웅",
                    "relicCores": 200,
                    "transmuteCores": 24
                },
                "36787146": {
                    "atk": 2665690,
                    "eeBestScore": null,
                    "name": "안놔쑤이",
                    "relicCores": 200,
                    "transmuteCores": 32
                },
                "37247946": {
                    "atk": 2483853,
                    "eeBestScore": null,
                    "name": "ˢʷ탕탕수육",
                    "relicCores": 163,
                    "transmuteCores": 18
                },
                "38653699": {
                    "atk": 2611758,
                    "eeBestScore": null,
                    "name": "수리",
                    "relicCores": 169,
                    "transmuteCores": 34
                },
                "41247384": {
                    "atk": 2637990,
                    "eeBestScore": null,
                    "name": "ˢʷ상하이조",
                    "relicCores": 195,
                    "transmuteCores": 36
                },
                "44347404": {
                    "atk": 2025843,
                    "eeBestScore": null,
                    "name": "메이플시럽",
                    "relicCores": 148,
                    "transmuteCores": 2
                },
                "45710952": {
                    "atk": 2596586,
                    "eeBestScore": null,
                    "name": "ˢʷ남산",
                    "relicCores": 190,
                    "transmuteCores": 12
                },
                "47819223": {
                    "atk": 3297582,
                    "eeBestScore": null,
                    "name": "박수영님이다",
                    "relicCores": 253,
                    "transmuteCores": 44
                },
                "48987414": {
                    "atk": 2153933,
                    "eeBestScore": null,
                    "name": "김게장",
                    "relicCores": 151,
                    "transmuteCores": 24
                },
                "49293866": {
                    "atk": 2235770,
                    "eeBestScore": null,
                    "name": "아이노비아",
                    "relicCores": 141,
                    "transmuteCores": 14
                },
                "49730874": {
                    "atk": 3017119,
                    "eeBestScore": null,
                    "name": "ˢʷ먹순이",
                    "relicCores": 235,
                    "transmuteCores": 50
                },
                "51803208": {
                    "atk": 1616322,
                    "eeBestScore": null,
                    "name": "지니으니도근",
                    "relicCores": 103,
                    "transmuteCores": 4
                },
                "51977001": {
                    "atk": 1209799,
                    "eeBestScore": null,
                    "name": "ilkang",
                    "relicCores": 151,
                    "transmuteCores": 7
                },
                "51985502": {
                    "atk": 2008109,
                    "eeBestScore": null,
                    "name": "ˢʷ돈영이",
                    "relicCores": 185,
                    "transmuteCores": 24
                },
                "52696552": {
                    "atk": 1305265,
                    "eeBestScore": null,
                    "name": "ˢʷ시주",
                    "relicCores": 109,
                    "transmuteCores": 6
                },
                "62491076": {
                    "atk": 1986487,
                    "eeBestScore": null,
                    "name": "ˢʷEH",
                    "relicCores": 125,
                    "transmuteCores": 18
                },
                "66329662": {
                    "atk": 2260402,
                    "eeBestScore": null,
                    "name": "kimji0523",
                    "relicCores": 132,
                    "transmuteCores": 20
                },
                "67141288": {
                    "atk": 1481399,
                    "eeBestScore": null,
                    "name": "swings",
                    "relicCores": 146,
                    "transmuteCores": 7
                },
                "76129009": {
                    "atk": 2104496,
                    "eeBestScore": null,
                    "name": "ˢʷ아오빡쳐",
                    "relicCores": 164,
                    "transmuteCores": 20
                },
                "85552391": {
                    "atk": 1359789,
                    "eeBestScore": null,
                    "name": "돼삽",
                    "relicCores": 127,
                    "transmuteCores": 10
                },
                "88352695": {
                    "atk": 2813728,
                    "eeBestScore": null,
                    "name": "ˢʷEDH",
                    "relicCores": 190,
                    "transmuteCores": 0
                }
            },
            "name": "스윗",
            "totalAtk": 69938365,
            "totalEe": null,
            "totalRelicCores": 5021,
            "totalTransmuteCores": 634
        },
        "67576": {
            "clanId": 67576,
            "lunarPoints": 1435,
            "members": {
                "100199237": {
                    "atk": 1990592,
                    "eeBestScore": null,
                    "name": "ECL~xans",
                    "relicCores": 114,
                    "transmuteCores": 7
                },
                "101217125": {
                    "atk": 2288494,
                    "eeBestScore": null,
                    "name": "ECL丨Урюк",
                    "relicCores": 137,
                    "transmuteCores": 15
                },
                "102148139": {
                    "atk": 1828272,
                    "eeBestScore": null,
                    "name": "niКо",
                    "relicCores": 101,
                    "transmuteCores": 16
                },
                "110002590": {
                    "atk": 2020102,
                    "eeBestScore": null,
                    "name": "ECL丨KailZen",
                    "relicCores": 130,
                    "transmuteCores": 6
                },
                "110592060": {
                    "atk": 2002533,
                    "eeBestScore": null,
                    "name": "УРЮК_ЛОХ",
                    "relicCores": 138,
                    "transmuteCores": 7
                },
                "122188302": {
                    "atk": 10,
                    "eeBestScore": null,
                    "name": "Player 122188302",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "17247088": {
                    "atk": 2201877,
                    "eeBestScore": null,
                    "name": "ECL丨Какуля",
                    "relicCores": 160,
                    "transmuteCores": 6
                },
                "18994946": {
                    "atk": 2383952,
                    "eeBestScore": null,
                    "name": "Кaпитoшкa",
                    "relicCores": 96,
                    "transmuteCores": 24
                },
                "20065565": {
                    "atk": 2249931,
                    "eeBestScore": null,
                    "name": "redlik",
                    "relicCores": 134,
                    "transmuteCores": 20
                },
                "20434009": {
                    "atk": 1775671,
                    "eeBestScore": null,
                    "name": "ECL丨ATTИLA",
                    "relicCores": 112,
                    "transmuteCores": 20
                },
                "21357523": {
                    "atk": 2055269,
                    "eeBestScore": null,
                    "name": "ECL丨danikx27",
                    "relicCores": 114,
                    "transmuteCores": 7
                },
                "22999129": {
                    "atk": 2723343,
                    "eeBestScore": null,
                    "name": "ECL丨Bugambo",
                    "relicCores": 146,
                    "transmuteCores": 10
                },
                "24766437": {
                    "atk": 1740570,
                    "eeBestScore": null,
                    "name": "Discharge",
                    "relicCores": 114,
                    "transmuteCores": 5
                },
                "30114277": {
                    "atk": 2025423,
                    "eeBestScore": null,
                    "name": "ECL丨oneLove",
                    "relicCores": 91,
                    "transmuteCores": 0
                },
                "33187375": {
                    "atk": 2006064,
                    "eeBestScore": null,
                    "name": "ECL丨е",
                    "relicCores": 152,
                    "transmuteCores": 14
                },
                "35890303": {
                    "atk": 2361891,
                    "eeBestScore": null,
                    "name": "GrandeSanchez",
                    "relicCores": 150,
                    "transmuteCores": 20
                },
                "38295185": {
                    "atk": 2072107,
                    "eeBestScore": null,
                    "name": "ECL丨Måkšïm",
                    "relicCores": 93,
                    "transmuteCores": 5
                },
                "41653554": {
                    "atk": 2343779,
                    "eeBestScore": null,
                    "name": "serj",
                    "relicCores": 166,
                    "transmuteCores": 12
                },
                "44134152": {
                    "atk": 1878945,
                    "eeBestScore": null,
                    "name": "Guala_Guala",
                    "relicCores": 104,
                    "transmuteCores": 0
                },
                "55361072": {
                    "atk": 2112005,
                    "eeBestScore": null,
                    "name": "ECLＩPepp",
                    "relicCores": 184,
                    "transmuteCores": 10
                },
                "56879379": {
                    "atk": 1831829,
                    "eeBestScore": null,
                    "name": "bananio",
                    "relicCores": 99,
                    "transmuteCores": 20
                },
                "57587864": {
                    "atk": 1953659,
                    "eeBestScore": null,
                    "name": "ECL|МЯУ",
                    "relicCores": 86,
                    "transmuteCores": 11
                },
                "57999590": {
                    "atk": 2596194,
                    "eeBestScore": null,
                    "name": "ECL丨Absolutе",
                    "relicCores": 147,
                    "transmuteCores": 10
                },
                "59322746": {
                    "atk": 2663957,
                    "eeBestScore": null,
                    "name": "ECL丨TOR",
                    "relicCores": 147,
                    "transmuteCores": 10
                },
                "61029560": {
                    "atk": 2105260,
                    "eeBestScore": null,
                    "name": "ECL丨frankenste1n",
                    "relicCores": 122,
                    "transmuteCores": 15
                },
                "61399186": {
                    "atk": 2584136,
                    "eeBestScore": null,
                    "name": "ECL丨SouthGangsta",
                    "relicCores": 143,
                    "transmuteCores": 24
                },
                "62660280": {
                    "atk": 2168622,
                    "eeBestScore": null,
                    "name": "ECL|Asia",
                    "relicCores": 141,
                    "transmuteCores": 10
                },
                "64439839": {
                    "atk": 2452606,
                    "eeBestScore": null,
                    "name": "Amiyumi",
                    "relicCores": 110,
                    "transmuteCores": 28
                },
                "66090064": {
                    "atk": 1889107,
                    "eeBestScore": null,
                    "name": "ECL丨Zhgut",
                    "relicCores": 115,
                    "transmuteCores": 21
                },
                "70644857": {
                    "atk": 1872904,
                    "eeBestScore": null,
                    "name": "ECL丨GrimmGod",
                    "relicCores": 109,
                    "transmuteCores": 2
                },
                "71395320": {
                    "atk": 2535531,
                    "eeBestScore": null,
                    "name": "ВELARUS",
                    "relicCores": 190,
                    "transmuteCores": 11
                },
                "71600328": {
                    "atk": 1791119,
                    "eeBestScore": null,
                    "name": "ECL丨Niker7",
                    "relicCores": 168,
                    "transmuteCores": 3
                },
                "72437215": {
                    "atk": 2042323,
                    "eeBestScore": null,
                    "name": "ECL|ckazo4nuk",
                    "relicCores": 125,
                    "transmuteCores": 4
                },
                "74700288": {
                    "atk": 1718949,
                    "eeBestScore": null,
                    "name": "TarKov",
                    "relicCores": 62,
                    "transmuteCores": 0
                },
                "76430406": {
                    "atk": 2047820,
                    "eeBestScore": null,
                    "name": "ECL丨кудуз",
                    "relicCores": 105,
                    "transmuteCores": 10
                },
                "81589302": {
                    "atk": 2291807,
                    "eeBestScore": null,
                    "name": "ECL丨Нурс",
                    "relicCores": 100,
                    "transmuteCores": 10
                },
                "82125821": {
                    "atk": 2250138,
                    "eeBestScore": null,
                    "name": "ECL丨Den1848892",
                    "relicCores": 89,
                    "transmuteCores": 0
                },
                "85216948": {
                    "atk": 1943113,
                    "eeBestScore": null,
                    "name": "ECL|EverLaster",
                    "relicCores": 117,
                    "transmuteCores": 14
                },
                "85690422": {
                    "atk": 1850913,
                    "eeBestScore": null,
                    "name": "Ruslan0262",
                    "relicCores": 168,
                    "transmuteCores": 7
                },
                "88282062": {
                    "atk": 1841909,
                    "eeBestScore": null,
                    "name": "ECL丨Oldman",
                    "relicCores": 111,
                    "transmuteCores": 0
                }
            },
            "name": "EclipseEmpire",
            "totalAtk": 66240580,
            "totalEe": null,
            "totalRelicCores": 4073,
            "totalTransmuteCores": 400
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

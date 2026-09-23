// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-09-24
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1475,
            "members": {
                "100876140": {
                    "atk": 2364806,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 173,
                    "transmuteCores": 14
                },
                "102263647": {
                    "atk": 2509037,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "103516442": {
                    "atk": 2960441,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 243,
                    "transmuteCores": 60
                },
                "106162623": {
                    "atk": 1758549,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 16
                },
                "10754439": {
                    "atk": 2011556,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2300063,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 186,
                    "transmuteCores": 30
                },
                "108860725": {
                    "atk": 2447386,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 161,
                    "transmuteCores": 28
                },
                "112772047": {
                    "atk": 1876427,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 114,
                    "transmuteCores": 32
                },
                "113690788": {
                    "atk": 1842088,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 127,
                    "transmuteCores": 30
                },
                "11463573": {
                    "atk": 1832835,
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
                    "atk": 2588860,
                    "chipsCount": 124,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 210,
                    "transmuteCores": 24
                },
                "18297536": {
                    "atk": 1846830,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "26277677": {
                    "atk": 2226907,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 135,
                    "transmuteCores": 12
                },
                "29321884": {
                    "atk": 3130845,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 208,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1565879,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 126,
                    "transmuteCores": 40
                },
                "30658936": {
                    "atk": 2156089,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 20
                },
                "32556489": {
                    "atk": 1890937,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 119,
                    "transmuteCores": 28
                },
                "35869301": {
                    "atk": 2830458,
                    "chipsCount": 125,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 260,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 1869253,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 1469678,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2247766,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 132,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2158794,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 156,
                    "transmuteCores": 8
                },
                "60687252": {
                    "atk": 3913474,
                    "chipsCount": 207,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 58
                },
                "64676255": {
                    "atk": 2322266,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 151,
                    "transmuteCores": 24
                },
                "66607264": {
                    "atk": 2205566,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "69676999": {
                    "atk": 2058394,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "datamaster",
                    "relicCores": 154,
                    "transmuteCores": 3
                },
                "70603922": {
                    "atk": 1786232,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 1931507,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2216260,
                    "chipsCount": 96,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 169,
                    "transmuteCores": 46
                },
                "75174428": {
                    "atk": 2328075,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 182,
                    "transmuteCores": 9
                },
                "79510960": {
                    "atk": 1787990,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 181,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1815862,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 175,
                    "transmuteCores": 4
                },
                "80972473": {
                    "atk": 3104027,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 177,
                    "transmuteCores": 38
                },
                "83339881": {
                    "atk": 3285237,
                    "chipsCount": 131,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 60
                },
                "83861839": {
                    "atk": 2238596,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 116,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 2756360,
                    "chipsCount": 106,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 200,
                    "transmuteCores": 34
                },
                "87954282": {
                    "atk": 2509387,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 223,
                    "transmuteCores": 66
                },
                "88203044": {
                    "atk": 2309357,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 24
                },
                "89511116": {
                    "atk": 2135410,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 16
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 72883541,
            "totalChips": 2158,
            "totalEe": null,
            "totalRelicCores": 5553,
            "totalTransmuteCores": 913
        },
        "44798": {
            "clanId": 44798,
            "lunarPoints": 1360,
            "members": {
                "104619754": {
                    "atk": 1656409,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "Root61",
                    "relicCores": 140,
                    "transmuteCores": 6
                },
                "11361567": {
                    "atk": 604424,
                    "chipsCount": 8,
                    "eeBestScore": null,
                    "name": "PettyTiger",
                    "relicCores": 13,
                    "transmuteCores": 0
                },
                "12206730": {
                    "atk": 1352048,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "N0m1s",
                    "relicCores": 97,
                    "transmuteCores": 10
                },
                "22873144": {
                    "atk": 629896,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "Player 22873144",
                    "relicCores": 88,
                    "transmuteCores": 1
                },
                "23295682": {
                    "atk": 1490063,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "SmokeyAce",
                    "relicCores": 164,
                    "transmuteCores": 11
                },
                "27363955": {
                    "atk": 871035,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "MemeBig",
                    "relicCores": 107,
                    "transmuteCores": 0
                },
                "29274276": {
                    "atk": 850878,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "Numbus",
                    "relicCores": 72,
                    "transmuteCores": 2
                },
                "31568032": {
                    "atk": 1459695,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "lodi",
                    "relicCores": 129,
                    "transmuteCores": 3
                },
                "34174467": {
                    "atk": 1446834,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "MooGoesCow",
                    "relicCores": 172,
                    "transmuteCores": 2
                },
                "42987101": {
                    "atk": 1477504,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "Josie420",
                    "relicCores": 135,
                    "transmuteCores": 2
                },
                "43031374": {
                    "atk": 2573910,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "Bouch8919",
                    "relicCores": 180,
                    "transmuteCores": 15
                },
                "44794739": {
                    "atk": 1090464,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "sharkMOON",
                    "relicCores": 58,
                    "transmuteCores": 0
                },
                "46518803": {
                    "atk": 1010526,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "ozarks1121",
                    "relicCores": 80,
                    "transmuteCores": 2
                },
                "48151275": {
                    "atk": 883737,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "kokowawa",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "48856968": {
                    "atk": 1056332,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Tarjas29",
                    "relicCores": 93,
                    "transmuteCores": 11
                },
                "50377750": {
                    "atk": 2177279,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "__DEATH__",
                    "relicCores": 203,
                    "transmuteCores": 4
                },
                "54018921": {
                    "atk": 989916,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "bangsai",
                    "relicCores": 128,
                    "transmuteCores": 4
                },
                "55718520": {
                    "atk": 1127381,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "oOMrBlackOo",
                    "relicCores": 46,
                    "transmuteCores": 0
                },
                "55853890": {
                    "atk": 1433417,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "Nick3890",
                    "relicCores": 52,
                    "transmuteCores": 0
                },
                "56849125": {
                    "atk": 2190431,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "voidDJANGO",
                    "relicCores": 137,
                    "transmuteCores": 38
                },
                "57151198": {
                    "atk": 652679,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "Player 57151198",
                    "relicCores": 53,
                    "transmuteCores": 0
                },
                "57164250": {
                    "atk": 1292441,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "EngrAhmedEssam",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "58601620": {
                    "atk": 917089,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "BabaZeid",
                    "relicCores": 90,
                    "transmuteCores": 4
                },
                "60604836": {
                    "atk": 1771463,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "RiggedNready",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "60794227": {
                    "atk": 1372291,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "yarkope",
                    "relicCores": 96,
                    "transmuteCores": 0
                },
                "60885195": {
                    "atk": 1097047,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "ShadowPanda987",
                    "relicCores": 75,
                    "transmuteCores": 0
                },
                "61744871": {
                    "atk": 2167448,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Snitzeli",
                    "relicCores": 172,
                    "transmuteCores": 2
                },
                "61907504": {
                    "atk": 1221679,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "Hard-core",
                    "relicCores": 107,
                    "transmuteCores": 10
                },
                "64909305": {
                    "atk": 1620789,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "nasty656532",
                    "relicCores": 127,
                    "transmuteCores": 0
                },
                "66256096": {
                    "atk": 1462235,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "Wyrmzz",
                    "relicCores": 144,
                    "transmuteCores": 1
                },
                "69243889": {
                    "atk": 924538,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "$quidward",
                    "relicCores": 72,
                    "transmuteCores": 0
                },
                "72428989": {
                    "atk": 1682222,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "ManualLoop",
                    "relicCores": 122,
                    "transmuteCores": 0
                },
                "77085457": {
                    "atk": 1589580,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "marduk1",
                    "relicCores": 92,
                    "transmuteCores": 0
                },
                "77097070": {
                    "atk": 960244,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "Dholland",
                    "relicCores": 34,
                    "transmuteCores": 0
                },
                "79239361": {
                    "atk": 1479278,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "MrRou",
                    "relicCores": 140,
                    "transmuteCores": 8
                },
                "79712762": {
                    "atk": 812210,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "MrSonicz",
                    "relicCores": 66,
                    "transmuteCores": 0
                },
                "81193628": {
                    "atk": 2494704,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "Lookatthatshiit",
                    "relicCores": 243,
                    "transmuteCores": 10
                },
                "81494914": {
                    "atk": 1142745,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "Mcoi-PH",
                    "relicCores": 134,
                    "transmuteCores": 14
                },
                "83750304": {
                    "atk": 740640,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "beefsteww",
                    "relicCores": 74,
                    "transmuteCores": 0
                },
                "86450959": {
                    "atk": 881174,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "UltraGee",
                    "relicCores": 80,
                    "transmuteCores": 0
                }
            },
            "name": "VAPs",
            "totalAtk": 44810913,
            "totalChips": 909,
            "totalEe": null,
            "totalRelicCores": 3693,
            "totalTransmuteCores": 160
        },
        "55221": {
            "clanId": 55221,
            "lunarPoints": 1360,
            "members": {
                "10197995": {
                    "atk": 2113317,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "聖誕喵亗CA亗",
                    "relicCores": 163,
                    "transmuteCores": 3
                },
                "102024243": {
                    "atk": 1398111,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "KrutaS亗CA亗",
                    "relicCores": 111,
                    "transmuteCores": 10
                },
                "106298449": {
                    "atk": 687250,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "S£7@",
                    "relicCores": 54,
                    "transmuteCores": 4
                },
                "113749716": {
                    "atk": 1462629,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "Raichu亗CA亗",
                    "relicCores": 132,
                    "transmuteCores": 0
                },
                "119403728": {
                    "atk": 718203,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "Player 119403728",
                    "relicCores": 60,
                    "transmuteCores": 6
                },
                "120472706": {
                    "atk": 135445,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Miguelitosss",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "120787567": {
                    "atk": 465376,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "Jimbolicious",
                    "relicCores": 42,
                    "transmuteCores": 0
                },
                "120795881": {
                    "atk": 264657,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "deejaay17",
                    "relicCores": 13,
                    "transmuteCores": 0
                },
                "122147134": {
                    "atk": 305222,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "hng_dung",
                    "relicCores": 17,
                    "transmuteCores": 0
                },
                "18137095": {
                    "atk": 1889389,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "丫瑾亗CA亗",
                    "relicCores": 156,
                    "transmuteCores": 10
                },
                "18161144": {
                    "atk": 466077,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "ChrisKing7",
                    "relicCores": 57,
                    "transmuteCores": 0
                },
                "19765978": {
                    "atk": 1221425,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Toondom",
                    "relicCores": 74,
                    "transmuteCores": 2
                },
                "24624500": {
                    "atk": 1067676,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "Schwambi",
                    "relicCores": 115,
                    "transmuteCores": 0
                },
                "27106398": {
                    "atk": 942266,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Player 27106398",
                    "relicCores": 146,
                    "transmuteCores": 2
                },
                "34640151": {
                    "atk": 1220834,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "mustgo",
                    "relicCores": 180,
                    "transmuteCores": 1
                },
                "35980040": {
                    "atk": 1232206,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "Alejandro_jr96",
                    "relicCores": 63,
                    "transmuteCores": 0
                },
                "38597462": {
                    "atk": 925315,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "B1L840",
                    "relicCores": 102,
                    "transmuteCores": 6
                },
                "45006880": {
                    "atk": 2392304,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "peepeepupu亗CA亗",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "46230984": {
                    "atk": 605848,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "steve462",
                    "relicCores": 22,
                    "transmuteCores": 0
                },
                "50035855": {
                    "atk": 774362,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "kupasiana亗CA亗",
                    "relicCores": 79,
                    "transmuteCores": 0
                },
                "52483638": {
                    "atk": 629542,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Player 52483638",
                    "relicCores": 46,
                    "transmuteCores": 0
                },
                "55761591": {
                    "atk": 1311618,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "Sh1thappens亗CA",
                    "relicCores": 117,
                    "transmuteCores": 0
                },
                "57625690": {
                    "atk": 1333489,
                    "chipsCount": 3,
                    "eeBestScore": null,
                    "name": "falconfox",
                    "relicCores": 107,
                    "transmuteCores": 0
                },
                "59588029": {
                    "atk": 416027,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "Metra7",
                    "relicCores": 40,
                    "transmuteCores": 1
                },
                "63784972": {
                    "atk": 1276089,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "JDGeneral",
                    "relicCores": 78,
                    "transmuteCores": 2
                },
                "64609559": {
                    "atk": 4284768,
                    "chipsCount": 204,
                    "eeBestScore": null,
                    "name": "Mickeydeal亗CA亗",
                    "relicCores": 450,
                    "transmuteCores": 114
                },
                "66407153": {
                    "atk": 2268171,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "EnterName01",
                    "relicCores": 148,
                    "transmuteCores": 2
                },
                "69899189": {
                    "atk": 818099,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "｢CA｣・アヤ",
                    "relicCores": 106,
                    "transmuteCores": 2
                },
                "73050993": {
                    "atk": 978983,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "Ryals77",
                    "relicCores": 58,
                    "transmuteCores": 1
                },
                "74153580": {
                    "atk": 719470,
                    "chipsCount": 14,
                    "eeBestScore": null,
                    "name": "boblysniper",
                    "relicCores": 117,
                    "transmuteCores": 6
                },
                "76216776": {
                    "atk": 895620,
                    "chipsCount": 56,
                    "eeBestScore": null,
                    "name": "WOJO亗CA亗",
                    "relicCores": 65,
                    "transmuteCores": 0
                },
                "77529674": {
                    "atk": 851412,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "AruChigga",
                    "relicCores": 67,
                    "transmuteCores": 4
                },
                "79674307": {
                    "atk": 1511509,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "屁股臭臭",
                    "relicCores": 149,
                    "transmuteCores": 1
                },
                "81141461": {
                    "atk": 521511,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "VicChaos",
                    "relicCores": 28,
                    "transmuteCores": 0
                },
                "81573026": {
                    "atk": 1477129,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "lcswar",
                    "relicCores": 150,
                    "transmuteCores": 0
                },
                "87269198": {
                    "atk": 1424731,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "Bobinette5",
                    "relicCores": 126,
                    "transmuteCores": 6
                },
                "87519012": {
                    "atk": 1155924,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Player 87519012",
                    "relicCores": 0,
                    "transmuteCores": 0
                }
            },
            "name": "Clanarchy.",
            "totalAtk": 39587689,
            "totalChips": 740,
            "totalEe": null,
            "totalRelicCores": 3358,
            "totalTransmuteCores": 183
        },
        "64454": {
            "clanId": 64454,
            "lunarPoints": 1360,
            "members": {
                "117760374": {
                    "atk": 980791,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "ハトになりた",
                    "relicCores": 65,
                    "transmuteCores": 1
                },
                "19878105": {
                    "atk": 1201647,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "Player 19878105",
                    "relicCores": 109,
                    "transmuteCores": 24
                },
                "26789136": {
                    "atk": 925655,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "Player 26789136",
                    "relicCores": 125,
                    "transmuteCores": 1
                },
                "28552295": {
                    "atk": 520171,
                    "chipsCount": 1,
                    "eeBestScore": null,
                    "name": "SK2929",
                    "relicCores": 32,
                    "transmuteCores": 0
                },
                "40322110": {
                    "atk": 899771,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "ファーガソン",
                    "relicCores": 95,
                    "transmuteCores": 0
                },
                "41054146": {
                    "atk": 1219362,
                    "chipsCount": 13,
                    "eeBestScore": null,
                    "name": "unkg",
                    "relicCores": 95,
                    "transmuteCores": 1
                },
                "44564926": {
                    "atk": 768854,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "大小まめ",
                    "relicCores": 65,
                    "transmuteCores": 0
                },
                "52706801": {
                    "atk": 1818271,
                    "chipsCount": 7,
                    "eeBestScore": null,
                    "name": "ヌーブさん",
                    "relicCores": 164,
                    "transmuteCores": 2
                },
                "52975246": {
                    "atk": 1132182,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "91238",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "53509550": {
                    "atk": 1457251,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "ウージームー",
                    "relicCores": 168,
                    "transmuteCores": 0
                },
                "54246696": {
                    "atk": 816378,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "はろちん",
                    "relicCores": 94,
                    "transmuteCores": 4
                },
                "55141787": {
                    "atk": 388117,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "kakkys",
                    "relicCores": 35,
                    "transmuteCores": 0
                },
                "59154496": {
                    "atk": 1980695,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "tano0222",
                    "relicCores": 228,
                    "transmuteCores": 12
                },
                "62924697": {
                    "atk": 938776,
                    "chipsCount": 9,
                    "eeBestScore": null,
                    "name": "こざるる",
                    "relicCores": 134,
                    "transmuteCores": 3
                },
                "64413336": {
                    "atk": 531090,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "haru1127",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "65183555": {
                    "atk": 947586,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "msk5",
                    "relicCores": 79,
                    "transmuteCores": 0
                },
                "65348270": {
                    "atk": 3369612,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "わがった",
                    "relicCores": 325,
                    "transmuteCores": 48
                },
                "65775321": {
                    "atk": 2079443,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "のこった",
                    "relicCores": 192,
                    "transmuteCores": 40
                },
                "68405937": {
                    "atk": 1098570,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "ぎんむぎ",
                    "relicCores": 176,
                    "transmuteCores": 2
                },
                "70191492": {
                    "atk": 2767686,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "あ行さん",
                    "relicCores": 168,
                    "transmuteCores": 3
                },
                "70352845": {
                    "atk": 1393245,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "アロハブルー",
                    "relicCores": 119,
                    "transmuteCores": 6
                },
                "78404876": {
                    "atk": 988285,
                    "chipsCount": 4,
                    "eeBestScore": null,
                    "name": "スポンジこは",
                    "relicCores": 115,
                    "transmuteCores": 0
                },
                "79680253": {
                    "atk": 1249551,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "ヤセタン",
                    "relicCores": 65,
                    "transmuteCores": 0
                },
                "80455974": {
                    "atk": 1388550,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "無課金金",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "82883506": {
                    "atk": 1620268,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "ガガガオーン",
                    "relicCores": 161,
                    "transmuteCores": 10
                },
                "83742279": {
                    "atk": 1639450,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "煮た麩",
                    "relicCores": 111,
                    "transmuteCores": 4
                },
                "84176370": {
                    "atk": 2449911,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "nakaten10",
                    "relicCores": 133,
                    "transmuteCores": 8
                }
            },
            "name": "ガットゥーぞ！",
            "totalAtk": 36571168,
            "totalChips": 545,
            "totalEe": null,
            "totalRelicCores": 3053,
            "totalTransmuteCores": 169
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

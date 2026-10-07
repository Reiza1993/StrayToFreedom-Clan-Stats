// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-10-08
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "29296": {
            "clanId": 29296,
            "lunarPoints": 1425,
            "members": {
                "101787678": {
                    "atk": 2478414,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "W71",
                    "relicCores": 144,
                    "transmuteCores": 54
                },
                "104524028": {
                    "atk": 1753338,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "jjtargetlock24",
                    "relicCores": 124,
                    "transmuteCores": 20
                },
                "104989112": {
                    "atk": 2003119,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "Jjtargetunlock24",
                    "relicCores": 155,
                    "transmuteCores": 28
                },
                "111363065": {
                    "atk": 2127378,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "Bladiosᴬᴾ",
                    "relicCores": 94,
                    "transmuteCores": 50
                },
                "11297115": {
                    "atk": 1606856,
                    "chipsCount": 33,
                    "eeBestScore": null,
                    "name": "WiLoVjO",
                    "relicCores": 274,
                    "transmuteCores": 12
                },
                "117540975": {
                    "atk": 962207,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "CuentaFakeDeOz",
                    "relicCores": 36,
                    "transmuteCores": 1
                },
                "121982222": {
                    "atk": 4716,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Player 121982222",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "122400281": {
                    "atk": 86401,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "CrimsonFlake",
                    "relicCores": 2,
                    "transmuteCores": 0
                },
                "122525505": {
                    "atk": 103022,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "BeeBro",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "123091239": {
                    "atk": 2764,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "tomuver123",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "19535682": {
                    "atk": 2198854,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "Magushi",
                    "relicCores": 169,
                    "transmuteCores": 42
                },
                "20480077": {
                    "atk": 1542853,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "ShakethatBear",
                    "relicCores": 134,
                    "transmuteCores": 4
                },
                "25960605": {
                    "atk": 1864045,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "Patarrific",
                    "relicCores": 145,
                    "transmuteCores": 30
                },
                "26746915": {
                    "atk": 2703317,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "danims98",
                    "relicCores": 119,
                    "transmuteCores": 38
                },
                "28642149": {
                    "atk": 1511383,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "KngVitiality",
                    "relicCores": 119,
                    "transmuteCores": 28
                },
                "29992476": {
                    "atk": 1907522,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "Player 29992476",
                    "relicCores": 155,
                    "transmuteCores": 5
                },
                "33721977": {
                    "atk": 2234248,
                    "chipsCount": 95,
                    "eeBestScore": null,
                    "name": "Player 33721977",
                    "relicCores": 164,
                    "transmuteCores": 8
                },
                "37880573": {
                    "atk": 1724035,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "ᴬᴾMayKo",
                    "relicCores": 100,
                    "transmuteCores": 2
                },
                "38276630": {
                    "atk": 2387414,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "MrSpeedyBoi",
                    "relicCores": 161,
                    "transmuteCores": 30
                },
                "41675770": {
                    "atk": 1788134,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "Hamza2537ᵍᵃᶜ",
                    "relicCores": 112,
                    "transmuteCores": 16
                },
                "46824281": {
                    "atk": 279549,
                    "chipsCount": 2,
                    "eeBestScore": null,
                    "name": "StoneOcean2013",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "49627686": {
                    "atk": 1078860,
                    "chipsCount": 20,
                    "eeBestScore": null,
                    "name": "JacekPlacek",
                    "relicCores": 53,
                    "transmuteCores": 0
                },
                "52285814": {
                    "atk": 2581060,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "Ozmozy",
                    "relicCores": 89,
                    "transmuteCores": 54
                },
                "55357327": {
                    "atk": 2163728,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "h8core",
                    "relicCores": 119,
                    "transmuteCores": 38
                },
                "55671490": {
                    "atk": 2129538,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Calerik",
                    "relicCores": 84,
                    "transmuteCores": 30
                },
                "58722673": {
                    "atk": 2215625,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "CNgALT",
                    "relicCores": 90,
                    "transmuteCores": 40
                },
                "63831033": {
                    "atk": 1699060,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "Darsiul",
                    "relicCores": 56,
                    "transmuteCores": 18
                },
                "65828425": {
                    "atk": 1750286,
                    "chipsCount": 49,
                    "eeBestScore": null,
                    "name": "52kocltegratjj",
                    "relicCores": 134,
                    "transmuteCores": 24
                },
                "68890390": {
                    "atk": 2425459,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "Erwing",
                    "relicCores": 127,
                    "transmuteCores": 62
                },
                "70092034": {
                    "atk": 2172907,
                    "chipsCount": 28,
                    "eeBestScore": null,
                    "name": "Mr.Illuminati",
                    "relicCores": 114,
                    "transmuteCores": 20
                },
                "76612436": {
                    "atk": 1938058,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "MGWWᴬᴾ",
                    "relicCores": 158,
                    "transmuteCores": 34
                },
                "77105251": {
                    "atk": 1235717,
                    "chipsCount": 6,
                    "eeBestScore": null,
                    "name": "itzmasterz",
                    "relicCores": 82,
                    "transmuteCores": 1
                },
                "78586872": {
                    "atk": 2167986,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "streeto",
                    "relicCores": 147,
                    "transmuteCores": 34
                },
                "82017456": {
                    "atk": 1950693,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "Best16with4",
                    "relicCores": 109,
                    "transmuteCores": 41
                },
                "82138760": {
                    "atk": 2011278,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "DeleteM3",
                    "relicCores": 124,
                    "transmuteCores": 38
                },
                "84321627": {
                    "atk": 2223430,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "Butters!",
                    "relicCores": 80,
                    "transmuteCores": 40
                },
                "86200651": {
                    "atk": 1553777,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "Krucid",
                    "relicCores": 98,
                    "transmuteCores": 34
                },
                "86428399": {
                    "atk": 2800894,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "Ionizer",
                    "relicCores": 134,
                    "transmuteCores": 34
                },
                "87321977": {
                    "atk": 2439469,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "FizziHD",
                    "relicCores": 139,
                    "transmuteCores": 34
                },
                "89718002": {
                    "atk": 2254500,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "bart6913",
                    "relicCores": 112,
                    "transmuteCores": 34
                }
            },
            "name": "Gachi",
            "totalAtk": 63254422,
            "totalChips": 1445,
            "totalEe": null,
            "totalRelicCores": 3947,
            "totalTransmuteCores": 970
        },
        "30177": {
            "clanId": 30177,
            "lunarPoints": 1425,
            "members": {
                "113823639": {
                    "atk": 318720,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Player 113823639",
                    "relicCores": 5,
                    "transmuteCores": 0
                },
                "44292266": {
                    "atk": 2286440,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "Player 44292266",
                    "relicCores": 197,
                    "transmuteCores": 9
                },
                "52197667": {
                    "atk": 3315637,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "Player 52197667",
                    "relicCores": 208,
                    "transmuteCores": 64
                },
                "52748380": {
                    "atk": 1790770,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "Player 52748380",
                    "relicCores": 193,
                    "transmuteCores": 1
                },
                "58027645": {
                    "atk": 781710,
                    "chipsCount": 16,
                    "eeBestScore": null,
                    "name": "Player 58027645",
                    "relicCores": 53,
                    "transmuteCores": 2
                },
                "58599448": {
                    "atk": 2821902,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Player 58599448",
                    "relicCores": 152,
                    "transmuteCores": 20
                },
                "88340490": {
                    "atk": 2689194,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "Player 88340490",
                    "relicCores": 133,
                    "transmuteCores": 24
                },
                "89367746": {
                    "atk": 1840709,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "Player 89367746",
                    "relicCores": 109,
                    "transmuteCores": 6
                }
            },
            "name": "우당탕탕탕",
            "totalAtk": 15845082,
            "totalChips": 356,
            "totalEe": null,
            "totalRelicCores": 1050,
            "totalTransmuteCores": 126
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1485,
            "members": {
                "100876140": {
                    "atk": 2384047,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 189,
                    "transmuteCores": 25
                },
                "103516442": {
                    "atk": 2980064,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 256,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 1825994,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2071889,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2345866,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 190,
                    "transmuteCores": 35
                },
                "108860725": {
                    "atk": 2518414,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 161,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 1959991,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 119,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1994685,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 107,
                    "transmuteCores": 28
                },
                "11463573": {
                    "atk": 2008384,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 119,
                    "transmuteCores": 44
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
                    "atk": 2618718,
                    "chipsCount": 127,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 234,
                    "transmuteCores": 34
                },
                "18297536": {
                    "atk": 1806814,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 101,
                    "transmuteCores": 28
                },
                "26277677": {
                    "atk": 2423252,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 136,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2733257,
                    "chipsCount": 128,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 155,
                    "transmuteCores": 6
                },
                "29321884": {
                    "atk": 3153505,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 214,
                    "transmuteCores": 28
                },
                "29904762": {
                    "atk": 1818972,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 134,
                    "transmuteCores": 45
                },
                "30658936": {
                    "atk": 2350217,
                    "chipsCount": 83,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 24
                },
                "32556489": {
                    "atk": 1986644,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "35869301": {
                    "atk": 2988657,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 265,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 2080547,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 1645048,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2415269,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 137,
                    "transmuteCores": 28
                },
                "59566866": {
                    "atk": 2186651,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 152,
                    "transmuteCores": 2
                },
                "59852695": {
                    "atk": 3722144,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "☣zSpec☣",
                    "relicCores": 294,
                    "transmuteCores": 74
                },
                "64676255": {
                    "atk": 2519134,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 151,
                    "transmuteCores": 24
                },
                "66607264": {
                    "atk": 2474286,
                    "chipsCount": 35,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 169,
                    "transmuteCores": 25
                },
                "70603922": {
                    "atk": 1803475,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 130,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2081839,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 138,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2353222,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 172,
                    "transmuteCores": 46
                },
                "75174428": {
                    "atk": 2378833,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 187,
                    "transmuteCores": 11
                },
                "79510960": {
                    "atk": 1819203,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 184,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 1884388,
                    "chipsCount": 44,
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
                    "atk": 3472184,
                    "chipsCount": 140,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 58
                },
                "83861839": {
                    "atk": 2281845,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "transmuteCores": 28
                },
                "87244358": {
                    "atk": 3015115,
                    "chipsCount": 111,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 200,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2608592,
                    "chipsCount": 76,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 72
                },
                "88203044": {
                    "atk": 2355837,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 25
                },
                "89511116": {
                    "atk": 2192565,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 18
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 75915123,
            "totalChips": 2196,
            "totalEe": null,
            "totalRelicCores": 5563,
            "totalTransmuteCores": 1046
        },
        "44676": {
            "clanId": 44676,
            "lunarPoints": 1425,
            "members": {
                "102193409": {
                    "atk": 2019683,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "ѪㅣTrueL0ve",
                    "relicCores": 164,
                    "transmuteCores": 28
                },
                "103889504": {
                    "atk": 2372419,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "Ѫ⎱CrzyTed",
                    "relicCores": 91,
                    "transmuteCores": 8
                },
                "105205599": {
                    "atk": 2466146,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "ѪㅣMarhDeth",
                    "relicCores": 126,
                    "transmuteCores": 29
                },
                "108401599": {
                    "atk": 1457125,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "PEWPEw",
                    "relicCores": 98,
                    "transmuteCores": 0
                },
                "109595066": {
                    "atk": 2047598,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "Ѫjazhar",
                    "relicCores": 146,
                    "transmuteCores": 21
                },
                "110765551": {
                    "atk": 2062818,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "ѪㅣMaøToǔYǐng",
                    "relicCores": 150,
                    "transmuteCores": 16
                },
                "16155778": {
                    "atk": 3068879,
                    "chipsCount": 115,
                    "eeBestScore": null,
                    "name": "Ѫㅣart_vandelay",
                    "relicCores": 182,
                    "transmuteCores": 48
                },
                "23684996": {
                    "atk": 2533235,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "ѪㅣpöŦÄŦöd",
                    "relicCores": 112,
                    "transmuteCores": 34
                },
                "31294141": {
                    "atk": 1354646,
                    "chipsCount": 29,
                    "eeBestScore": null,
                    "name": "Rafpene",
                    "relicCores": 94,
                    "transmuteCores": 17
                },
                "33163060": {
                    "atk": 2170712,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "ѪㅣBibul",
                    "relicCores": 137,
                    "transmuteCores": 24
                },
                "33556589": {
                    "atk": 3010647,
                    "chipsCount": 97,
                    "eeBestScore": null,
                    "name": "Ѫㅣmrdavidwho",
                    "relicCores": 190,
                    "transmuteCores": 54
                },
                "35682422": {
                    "atk": 1821411,
                    "chipsCount": 32,
                    "eeBestScore": null,
                    "name": "pOWPOW",
                    "relicCores": 131,
                    "transmuteCores": 18
                },
                "36431510": {
                    "atk": 1825882,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "KEWKEW",
                    "relicCores": 137,
                    "transmuteCores": 16
                },
                "36889141": {
                    "atk": 2456688,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "ѪㅣRabu",
                    "relicCores": 121,
                    "transmuteCores": 38
                },
                "37797027": {
                    "atk": 2643881,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "Ѫ⎱JromeB3",
                    "relicCores": 152,
                    "transmuteCores": 10
                },
                "40005875": {
                    "atk": 2037854,
                    "chipsCount": 48,
                    "eeBestScore": null,
                    "name": "TigerHead",
                    "relicCores": 143,
                    "transmuteCores": 10
                },
                "49663519": {
                    "atk": 2207124,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "ѪㅣROGUE",
                    "relicCores": 151,
                    "transmuteCores": 18
                },
                "51292486": {
                    "atk": 2264068,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "Ѫㅣ0101Bloodnary",
                    "relicCores": 132,
                    "transmuteCores": 8
                },
                "53655925": {
                    "atk": 1766346,
                    "chipsCount": 22,
                    "eeBestScore": null,
                    "name": "HappyCloud",
                    "relicCores": 155,
                    "transmuteCores": 24
                },
                "58181456": {
                    "atk": 1430281,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "muttonbirdbe",
                    "relicCores": 129,
                    "transmuteCores": 26
                },
                "58745813": {
                    "atk": 2281025,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "Ѫㅣantikvng",
                    "relicCores": 174,
                    "transmuteCores": 20
                },
                "59831196": {
                    "atk": 2676502,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "ѪㅣBrick",
                    "relicCores": 192,
                    "transmuteCores": 7
                },
                "64733556": {
                    "atk": 3247189,
                    "chipsCount": 89,
                    "eeBestScore": null,
                    "name": "ѪㅣWoodman86",
                    "relicCores": 204,
                    "transmuteCores": 32
                },
                "69597251": {
                    "atk": 2144642,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "Kaiju个Enousc",
                    "relicCores": 169,
                    "transmuteCores": 18
                },
                "70117017": {
                    "atk": 1896262,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "ѪㅣHigglet",
                    "relicCores": 132,
                    "transmuteCores": 38
                },
                "70171872": {
                    "atk": 2337899,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "Jabigail",
                    "relicCores": 159,
                    "transmuteCores": 34
                },
                "77252954": {
                    "atk": 1724958,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Aurar",
                    "relicCores": 171,
                    "transmuteCores": 35
                },
                "77855270": {
                    "atk": 1901266,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "Ѫ⎱JD",
                    "relicCores": 146,
                    "transmuteCores": 24
                },
                "78255355": {
                    "atk": 1617491,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "PâPàYôGâ",
                    "relicCores": 139,
                    "transmuteCores": 10
                },
                "79886578": {
                    "atk": 2770052,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "NoMad911",
                    "relicCores": 155,
                    "transmuteCores": 30
                },
                "80665229": {
                    "atk": 1988970,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "Ancient321",
                    "relicCores": 224,
                    "transmuteCores": 7
                },
                "83711021": {
                    "atk": 1854784,
                    "chipsCount": 62,
                    "eeBestScore": null,
                    "name": "kes1.1",
                    "relicCores": 159,
                    "transmuteCores": 6
                },
                "84194381": {
                    "atk": 2234639,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "BloodㆍVykintas",
                    "relicCores": 155,
                    "transmuteCores": 28
                },
                "84592584": {
                    "atk": 2139666,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "ѪㅣSpoogeass",
                    "relicCores": 112,
                    "transmuteCores": 24
                },
                "85258069": {
                    "atk": 2621069,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "MexiCola",
                    "relicCores": 166,
                    "transmuteCores": 44
                },
                "85584064": {
                    "atk": 2104947,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "RICOSHIESTY",
                    "relicCores": 130,
                    "transmuteCores": 8
                },
                "89162988": {
                    "atk": 2280626,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "ѪㅣShiner980",
                    "relicCores": 169,
                    "transmuteCores": 21
                }
            },
            "name": "BloodѪAces",
            "totalAtk": 69667172,
            "totalChips": 1611,
            "totalEe": null,
            "totalRelicCores": 4743,
            "totalTransmuteCores": 789
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

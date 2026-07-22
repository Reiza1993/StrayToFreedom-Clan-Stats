// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-07-23
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores only count each clan's top 30
// members by ATK - matches the in-game convention that only the top 30 ATK
// contributes to CX/LME clan power (see lunar_details.py's TOP_N_FOR_TOTALS).
const lunarDetails = {
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1385,
            "members": {
                "102263647": {
                    "atk": 2224289,
                    "name": "Koncalaz",
                    "relicCores": 177,
                    "transmuteCores": 24
                },
                "104730405": {
                    "atk": 1364531,
                    "name": "KingRizzle",
                    "relicCores": 93,
                    "transmuteCores": 15
                },
                "10754439": {
                    "atk": 1714121,
                    "name": "HakiLuffy",
                    "relicCores": 130,
                    "transmuteCores": 14
                },
                "110301719": {
                    "atk": 1373006,
                    "name": "Epic|W",
                    "relicCores": 100,
                    "transmuteCores": 1
                },
                "112772047": {
                    "atk": 1363377,
                    "name": "VictorMolusco",
                    "relicCores": 95,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1459917,
                    "name": "Apathy_",
                    "relicCores": 80,
                    "transmuteCores": 20
                },
                "115369352": {
                    "atk": 1546395,
                    "name": "Lemminkäinen",
                    "relicCores": 96,
                    "transmuteCores": 20
                },
                "115742768": {
                    "atk": 147341,
                    "name": "SterbyTools",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "18115624": {
                    "atk": 2308923,
                    "name": "Nubis",
                    "relicCores": 213,
                    "transmuteCores": 8
                },
                "18297536": {
                    "atk": 1582910,
                    "name": "ergiangi",
                    "relicCores": 81,
                    "transmuteCores": 20
                },
                "21471954": {
                    "atk": 1442982,
                    "name": "N0M3rcy",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "21496121": {
                    "atk": 1318479,
                    "name": "b0ss",
                    "relicCores": 114,
                    "transmuteCores": 2
                },
                "22085142": {
                    "atk": 1564323,
                    "name": "bimbabo",
                    "relicCores": 203,
                    "transmuteCores": 7
                },
                "26277677": {
                    "atk": 1868489,
                    "name": "BobBobberson",
                    "relicCores": 121,
                    "transmuteCores": 12
                },
                "29398372": {
                    "atk": 1886526,
                    "name": "Player113322",
                    "relicCores": 168,
                    "transmuteCores": 8
                },
                "29904762": {
                    "atk": 1297917,
                    "name": "Cheeselife",
                    "relicCores": 83,
                    "transmuteCores": 28
                },
                "30658936": {
                    "atk": 2074058,
                    "name": "Gritchen",
                    "relicCores": 163,
                    "transmuteCores": 12
                },
                "32236991": {
                    "atk": 1723230,
                    "name": "Player 32236991",
                    "relicCores": 177,
                    "transmuteCores": 20
                },
                "32556489": {
                    "atk": 1582148,
                    "name": "Bensayyten",
                    "relicCores": 90,
                    "transmuteCores": 20
                },
                "36484758": {
                    "atk": 1412186,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1270261,
                    "name": "PinkyToeBeans",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 1813576,
                    "name": "samwise08",
                    "relicCores": 119,
                    "transmuteCores": 20
                },
                "56780908": {
                    "atk": 1600996,
                    "name": "TieForFirstYo",
                    "relicCores": 112,
                    "transmuteCores": 18
                },
                "57543766": {
                    "atk": 1394179,
                    "name": "THJF1948ㅣStray",
                    "relicCores": 117,
                    "transmuteCores": 3
                },
                "60687252": {
                    "atk": 3621221,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 46
                },
                "61140731": {
                    "atk": 1519341,
                    "name": "fesl",
                    "relicCores": 113,
                    "transmuteCores": 2
                },
                "64676255": {
                    "atk": 1973742,
                    "name": "盾Heathcliff剣",
                    "relicCores": 144,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 1607180,
                    "name": "Player 66607264",
                    "relicCores": 143,
                    "transmuteCores": 20
                },
                "71028860": {
                    "atk": 1659505,
                    "name": "Rzzza",
                    "relicCores": 110,
                    "transmuteCores": 20
                },
                "75174428": {
                    "atk": 1969404,
                    "name": "PastalaVista",
                    "relicCores": 174,
                    "transmuteCores": 7
                },
                "77879578": {
                    "atk": 1884374,
                    "name": "MMM|Mina475",
                    "relicCores": 153,
                    "transmuteCores": 3
                },
                "79510960": {
                    "atk": 1456820,
                    "name": "theLP",
                    "relicCores": 152,
                    "transmuteCores": 2
                },
                "80972473": {
                    "atk": 2664679,
                    "name": "Cunner88",
                    "relicCores": 168,
                    "transmuteCores": 24
                },
                "81635898": {
                    "atk": 1992368,
                    "name": "Rėtrø",
                    "relicCores": 121,
                    "transmuteCores": 20
                },
                "83339881": {
                    "atk": 3150076,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 36
                },
                "83861839": {
                    "atk": 1619112,
                    "name": "groggen",
                    "relicCores": 103,
                    "transmuteCores": 20
                },
                "86388317": {
                    "atk": 1509656,
                    "name": "GG║BG2020",
                    "relicCores": 90,
                    "transmuteCores": 2
                },
                "87244358": {
                    "atk": 2614276,
                    "name": "神Sterben死",
                    "relicCores": 186,
                    "transmuteCores": 30
                },
                "88203044": {
                    "atk": 2041794,
                    "name": "p88203044",
                    "relicCores": 113,
                    "transmuteCores": 12
                },
                "89511116": {
                    "atk": 1754612,
                    "name": "EMBALOCO",
                    "relicCores": 169,
                    "transmuteCores": 6
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 57988061,
            "totalRelicCores": 4548,
            "totalTransmuteCores": 493
        },
        "93102": {
            "clanId": 93102,
            "lunarPoints": 1250,
            "members": {
                "100828517": {
                    "atk": 248363,
                    "name": "ryfes",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "102803269": {
                    "atk": 197350,
                    "name": "Therealkingdrake",
                    "relicCores": 2,
                    "transmuteCores": 0
                },
                "102840279": {
                    "atk": 986189,
                    "name": "ruptura",
                    "relicCores": 66,
                    "transmuteCores": 0
                },
                "10462037": {
                    "atk": 198070,
                    "name": "numbnugget",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "109301493": {
                    "atk": 363900,
                    "name": "Spy_64",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "109353127": {
                    "atk": 475257,
                    "name": "salviune",
                    "relicCores": 23,
                    "transmuteCores": 0
                },
                "115805044": {
                    "atk": 353419,
                    "name": "JayJay30",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "115854026": {
                    "atk": 209664,
                    "name": "Wahesh",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "116594329": {
                    "atk": 760301,
                    "name": "@$$hole",
                    "relicCores": 76,
                    "transmuteCores": 0
                },
                "118028317": {
                    "atk": 158332,
                    "name": "maximumsigma",
                    "relicCores": 4,
                    "transmuteCores": 0
                },
                "118950092": {
                    "atk": 302327,
                    "name": "krassel67",
                    "relicCores": 6,
                    "transmuteCores": 0
                },
                "120733204": {
                    "atk": 101450,
                    "name": "moomeow",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "14375372": {
                    "atk": 158780,
                    "name": "Player 14375372",
                    "relicCores": 5,
                    "transmuteCores": 0
                },
                "18787293": {
                    "atk": 431960,
                    "name": "VerinenKarhu",
                    "relicCores": 46,
                    "transmuteCores": 0
                },
                "21932427": {
                    "atk": 779997,
                    "name": "Player 21932427",
                    "relicCores": 61,
                    "transmuteCores": 0
                },
                "25931206": {
                    "atk": 307061,
                    "name": "noahhaonnoah",
                    "relicCores": 10,
                    "transmuteCores": 0
                },
                "27128802": {
                    "atk": 1245778,
                    "name": "ChocolateAndCheese",
                    "relicCores": 97,
                    "transmuteCores": 0
                },
                "28292998": {
                    "atk": 291070,
                    "name": "karimen",
                    "relicCores": 14,
                    "transmuteCores": 0
                },
                "30286532": {
                    "atk": 221105,
                    "name": "Kanezaka",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "39167604": {
                    "atk": 276133,
                    "name": "ebnelwalid",
                    "relicCores": 5,
                    "transmuteCores": 0
                },
                "45717411": {
                    "atk": 236949,
                    "name": "Kanji615",
                    "relicCores": 21,
                    "transmuteCores": 0
                },
                "47234715": {
                    "atk": 940157,
                    "name": "祈愿神明",
                    "relicCores": 97,
                    "transmuteCores": 0
                },
                "52031291": {
                    "atk": 1159545,
                    "name": "doxee",
                    "relicCores": 113,
                    "transmuteCores": 1
                },
                "54328948": {
                    "atk": 83727,
                    "name": "hehehahahe",
                    "relicCores": 2,
                    "transmuteCores": 0
                },
                "54831896": {
                    "atk": 1101228,
                    "name": "Player 54831896",
                    "relicCores": 105,
                    "transmuteCores": 2
                },
                "60700024": {
                    "atk": 553130,
                    "name": "nate_123",
                    "relicCores": 51,
                    "transmuteCores": 0
                },
                "61335349": {
                    "atk": 1625260,
                    "name": "McNashty",
                    "relicCores": 146,
                    "transmuteCores": 4
                },
                "64200260": {
                    "atk": 176256,
                    "name": "Player 64200260",
                    "relicCores": 13,
                    "transmuteCores": 0
                },
                "67183325": {
                    "atk": 743452,
                    "name": "jirom",
                    "relicCores": 115,
                    "transmuteCores": 0
                },
                "69949648": {
                    "atk": 862408,
                    "name": "LinkTheOne",
                    "relicCores": 76,
                    "transmuteCores": 2
                },
                "75483708": {
                    "atk": 710596,
                    "name": "GodofBong",
                    "relicCores": 42,
                    "transmuteCores": 0
                },
                "76810277": {
                    "atk": 186825,
                    "name": "EnzoMarcelo",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "78996976": {
                    "atk": 590109,
                    "name": "SHALXXK",
                    "relicCores": 40,
                    "transmuteCores": 2
                },
                "81156791": {
                    "atk": 522047,
                    "name": "K0bayashiMaru",
                    "relicCores": 16,
                    "transmuteCores": 0
                },
                "82133675": {
                    "atk": 153182,
                    "name": "Player 82133675",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "84018187": {
                    "atk": 1841095,
                    "name": "IBullyPronouns",
                    "relicCores": 99,
                    "transmuteCores": 0
                },
                "87114237": {
                    "atk": 1959867,
                    "name": "J1Air",
                    "relicCores": 150,
                    "transmuteCores": 24
                },
                "89782050": {
                    "atk": 146600,
                    "name": "暗黒ですねぇ",
                    "relicCores": 4,
                    "transmuteCores": 0
                }
            },
            "name": "Jungle Bears",
            "totalAtk": 20493787,
            "totalRelicCores": 1505,
            "totalTransmuteCores": 35
        },
        "95444": {
            "clanId": 95444,
            "lunarPoints": 1250,
            "members": {
                "100000521": {
                    "atk": 616365,
                    "name": "FlipperSimse",
                    "relicCores": 57,
                    "transmuteCores": 0
                },
                "10154182": {
                    "atk": 315919,
                    "name": "oMiiTCHv",
                    "relicCores": 7,
                    "transmuteCores": 0
                },
                "102820028": {
                    "atk": 1040349,
                    "name": "deputya",
                    "relicCores": 110,
                    "transmuteCores": 0
                },
                "108297231": {
                    "atk": 647844,
                    "name": "Jeff285Hero",
                    "relicCores": 48,
                    "transmuteCores": 0
                },
                "111834889": {
                    "atk": 1108461,
                    "name": "kobyro",
                    "relicCores": 122,
                    "transmuteCores": 0
                },
                "111847339": {
                    "atk": 296356,
                    "name": "huntergod.",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "117244201": {
                    "atk": 510257,
                    "name": "Janôt_des_iles",
                    "relicCores": 6,
                    "transmuteCores": 0
                },
                "118900556": {
                    "atk": 380400,
                    "name": "lazywalkerr",
                    "relicCores": 34,
                    "transmuteCores": 0
                },
                "14015582": {
                    "atk": 1374784,
                    "name": "bundi.",
                    "relicCores": 94,
                    "transmuteCores": 0
                },
                "14241167": {
                    "atk": 1162214,
                    "name": "Balzweat",
                    "relicCores": 82,
                    "transmuteCores": 0
                },
                "20173753": {
                    "atk": 329713,
                    "name": "Westinjo",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "20426542": {
                    "atk": 1228262,
                    "name": "Lajbino",
                    "relicCores": 131,
                    "transmuteCores": 6
                },
                "24763304": {
                    "atk": 449936,
                    "name": "Beastbuster",
                    "relicCores": 17,
                    "transmuteCores": 0
                },
                "28491835": {
                    "atk": 560877,
                    "name": "Player 28491835",
                    "relicCores": 53,
                    "transmuteCores": 1
                },
                "29224024": {
                    "atk": 1549222,
                    "name": "čalamadalolo",
                    "relicCores": 113,
                    "transmuteCores": 2
                },
                "30239909": {
                    "atk": 305677,
                    "name": "EsteGuy",
                    "relicCores": 2,
                    "transmuteCores": 0
                },
                "33802829": {
                    "atk": 410938,
                    "name": "jepstein67",
                    "relicCores": 8,
                    "transmuteCores": 0
                },
                "36108652": {
                    "atk": 1039823,
                    "name": "TERMINATOR420",
                    "relicCores": 83,
                    "transmuteCores": 0
                },
                "38769252": {
                    "atk": 563735,
                    "name": "Insane",
                    "relicCores": 53,
                    "transmuteCores": 0
                },
                "48522911": {
                    "atk": 544596,
                    "name": "AlcX",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "49368890": {
                    "atk": 1334023,
                    "name": "rakib009",
                    "relicCores": 155,
                    "transmuteCores": 2
                },
                "49940522": {
                    "atk": 1661368,
                    "name": "Uni1",
                    "relicCores": 112,
                    "transmuteCores": 10
                },
                "52939360": {
                    "atk": 2330901,
                    "name": "steelnation248",
                    "relicCores": 206,
                    "transmuteCores": 7
                },
                "53957744": {
                    "atk": 1753931,
                    "name": "xTDOGJRx",
                    "relicCores": 153,
                    "transmuteCores": 0
                },
                "56006496": {
                    "atk": 1811475,
                    "name": "pechempe",
                    "relicCores": 152,
                    "transmuteCores": 2
                },
                "56397657": {
                    "atk": 1634704,
                    "name": "Player 56397657",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "59902930": {
                    "atk": 3049827,
                    "name": "Currieman",
                    "relicCores": 308,
                    "transmuteCores": 20
                },
                "62014259": {
                    "atk": 409016,
                    "name": "ボンゴダイ",
                    "relicCores": 31,
                    "transmuteCores": 0
                },
                "62930456": {
                    "atk": 1055902,
                    "name": "GHANy",
                    "relicCores": 63,
                    "transmuteCores": 0
                },
                "73908228": {
                    "atk": 721053,
                    "name": "Fernzzz",
                    "relicCores": 62,
                    "transmuteCores": 0
                },
                "77434437": {
                    "atk": 310719,
                    "name": "RIZOr",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "77609687": {
                    "atk": 592806,
                    "name": "MeggyilkolóHUN",
                    "relicCores": 14,
                    "transmuteCores": 0
                },
                "80117834": {
                    "atk": 548441,
                    "name": "teur",
                    "relicCores": 40,
                    "transmuteCores": 0
                },
                "83435766": {
                    "atk": 1154599,
                    "name": "Adrekonja",
                    "relicCores": 73,
                    "transmuteCores": 2
                },
                "83978292": {
                    "atk": 1626843,
                    "name": "HcgPunisher",
                    "relicCores": 127,
                    "transmuteCores": 2
                },
                "85006228": {
                    "atk": 1215323,
                    "name": "CultOfTheReaper",
                    "relicCores": 126,
                    "transmuteCores": 2
                }
            },
            "name": "ONLY GOAT",
            "totalAtk": 33707875,
            "totalRelicCores": 2728,
            "totalTransmuteCores": 56
        },
        "97352": {
            "clanId": 97352,
            "lunarPoints": 1250,
            "members": {
                "102215946": {
                    "atk": 1543902,
                    "name": "johnny5five",
                    "relicCores": 105,
                    "transmuteCores": 1
                },
                "108086033": {
                    "atk": 936796,
                    "name": "FrankieBG",
                    "relicCores": 32,
                    "transmuteCores": 0
                },
                "109398664": {
                    "atk": 981892,
                    "name": "timtimtimmay",
                    "relicCores": 82,
                    "transmuteCores": 0
                },
                "110456591": {
                    "atk": 740874,
                    "name": "Sire_Bok",
                    "relicCores": 57,
                    "transmuteCores": 0
                },
                "111191467": {
                    "atk": 1232163,
                    "name": "morroquen",
                    "relicCores": 150,
                    "transmuteCores": 10
                },
                "112119344": {
                    "atk": 367481,
                    "name": "Ojaey",
                    "relicCores": 39,
                    "transmuteCores": 6
                },
                "120682164": {
                    "atk": 179213,
                    "name": "Tulalo",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "16642776": {
                    "atk": 806738,
                    "name": "김매다",
                    "relicCores": 97,
                    "transmuteCores": 2
                },
                "18985422": {
                    "atk": 1103353,
                    "name": "VinnyB",
                    "relicCores": 95,
                    "transmuteCores": 11
                },
                "19152354": {
                    "atk": 818431,
                    "name": "eurostar7",
                    "relicCores": 41,
                    "transmuteCores": 0
                },
                "20207410": {
                    "atk": 221343,
                    "name": "Scherre",
                    "relicCores": 13,
                    "transmuteCores": 0
                },
                "20438173": {
                    "atk": 820553,
                    "name": "John2!",
                    "relicCores": 84,
                    "transmuteCores": 0
                },
                "20807846": {
                    "atk": 292999,
                    "name": "SharlyHD",
                    "relicCores": 7,
                    "transmuteCores": 0
                },
                "24034664": {
                    "atk": 1114183,
                    "name": "joox",
                    "relicCores": 63,
                    "transmuteCores": 0
                },
                "28109518": {
                    "atk": 1358907,
                    "name": "mburkholder3",
                    "relicCores": 106,
                    "transmuteCores": 1
                },
                "31052364": {
                    "atk": 737523,
                    "name": "madaraDG",
                    "relicCores": 41,
                    "transmuteCores": 0
                },
                "31412068": {
                    "atk": 1164130,
                    "name": "Yinka",
                    "relicCores": 113,
                    "transmuteCores": 0
                },
                "31787996": {
                    "atk": 392702,
                    "name": "Playa99",
                    "relicCores": 10,
                    "transmuteCores": 0
                },
                "35262684": {
                    "atk": 1108404,
                    "name": "KaW",
                    "relicCores": 61,
                    "transmuteCores": 0
                },
                "35385250": {
                    "atk": 812875,
                    "name": "afganistananese",
                    "relicCores": 84,
                    "transmuteCores": 0
                },
                "42604848": {
                    "atk": 405294,
                    "name": "MMG75",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "45066719": {
                    "atk": 682148,
                    "name": "AumenJoy",
                    "relicCores": 48,
                    "transmuteCores": 0
                },
                "49687884": {
                    "atk": 628814,
                    "name": "MonkeyKing136",
                    "relicCores": 54,
                    "transmuteCores": 0
                },
                "50313009": {
                    "atk": 1247989,
                    "name": "iAmCash",
                    "relicCores": 90,
                    "transmuteCores": 6
                },
                "56226233": {
                    "atk": 962487,
                    "name": "varui",
                    "relicCores": 66,
                    "transmuteCores": 0
                },
                "64524787": {
                    "atk": 992391,
                    "name": "frodonorth",
                    "relicCores": 107,
                    "transmuteCores": 2
                },
                "65897019": {
                    "atk": 413614,
                    "name": "LeBeuf",
                    "relicCores": 18,
                    "transmuteCores": 0
                },
                "67322654": {
                    "atk": 643124,
                    "name": "Leliksey",
                    "relicCores": 38,
                    "transmuteCores": 4
                },
                "69242177": {
                    "atk": 609381,
                    "name": "Mgmzx",
                    "relicCores": 42,
                    "transmuteCores": 0
                },
                "71470902": {
                    "atk": 550230,
                    "name": "WDNMDGB",
                    "relicCores": 39,
                    "transmuteCores": 0
                },
                "72681611": {
                    "atk": 832330,
                    "name": "uuuuugh",
                    "relicCores": 67,
                    "transmuteCores": 0
                },
                "73699773": {
                    "atk": 1114968,
                    "name": "LordZ83",
                    "relicCores": 125,
                    "transmuteCores": 2
                },
                "78168839": {
                    "atk": 258295,
                    "name": "Player 78168839",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "78660036": {
                    "atk": 1468351,
                    "name": "Gherardox",
                    "relicCores": 110,
                    "transmuteCores": 1
                },
                "80292199": {
                    "atk": 1394735,
                    "name": "ElCorojo",
                    "relicCores": 110,
                    "transmuteCores": 1
                },
                "80948801": {
                    "atk": 811440,
                    "name": "Dazzleㅤjayy",
                    "relicCores": 66,
                    "transmuteCores": 0
                },
                "81644970": {
                    "atk": 1824652,
                    "name": "Mr42O",
                    "relicCores": 110,
                    "transmuteCores": 15
                },
                "81967449": {
                    "atk": 716303,
                    "name": "VagizilWipes",
                    "relicCores": 78,
                    "transmuteCores": 1
                }
            },
            "name": "Riot",
            "totalAtk": 29760067,
            "totalRelicCores": 2361,
            "totalTransmuteCores": 57
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

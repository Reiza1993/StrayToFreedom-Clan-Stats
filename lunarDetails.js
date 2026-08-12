// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-08-13
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalEe each only count that
// clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores sums the
// top 30 members by Relic Cores, not the top 30 by ATK - each total is ranked
// independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "22421": {
            "clanId": 22421,
            "lunarPoints": 1350,
            "members": {
                "103922346": {
                    "atk": 1186487,
                    "eeBestScore": 3.918100149735075e+17,
                    "name": "ဗိုလ်",
                    "relicCores": 103,
                    "transmuteCores": 4
                },
                "105529756": {
                    "atk": 1406393,
                    "eeBestScore": null,
                    "name": "Ttbr",
                    "relicCores": 105,
                    "transmuteCores": 0
                },
                "108459806": {
                    "atk": 1587515,
                    "eeBestScore": 3.635472923145157e+19,
                    "name": "★KingCrimson★",
                    "relicCores": 119,
                    "transmuteCores": 2
                },
                "117416788": {
                    "atk": 1464015,
                    "eeBestScore": 480011489384749.0,
                    "name": "Picls",
                    "relicCores": 108,
                    "transmuteCores": 1
                },
                "119577124": {
                    "atk": 305650,
                    "eeBestScore": null,
                    "name": "hacker743",
                    "relicCores": 10,
                    "transmuteCores": 0
                },
                "12206966": {
                    "atk": 1638276,
                    "eeBestScore": 2.1326345060608225e+19,
                    "name": "hairypotter",
                    "relicCores": 94,
                    "transmuteCores": 20
                },
                "12820273": {
                    "atk": 1226177,
                    "eeBestScore": 6.954831671822858e+16,
                    "name": "Tyokomofu",
                    "relicCores": 95,
                    "transmuteCores": 1
                },
                "13987219": {
                    "atk": 1205512,
                    "eeBestScore": 1.5555505447384084e+18,
                    "name": "prescot",
                    "relicCores": 119,
                    "transmuteCores": 0
                },
                "16010988": {
                    "atk": 1229052,
                    "eeBestScore": 4.81520637984543e+17,
                    "name": "PlayerEko",
                    "relicCores": 87,
                    "transmuteCores": 6
                },
                "24083997": {
                    "atk": 879301,
                    "eeBestScore": 7.37549460573765e+16,
                    "name": "HELLOTITTY",
                    "relicCores": 58,
                    "transmuteCores": 0
                },
                "24220840": {
                    "atk": 1452809,
                    "eeBestScore": 1.306014435456128e+17,
                    "name": "Broiler_2",
                    "relicCores": 119,
                    "transmuteCores": 0
                },
                "27588017": {
                    "atk": 2104574,
                    "eeBestScore": 2.5873347879346473e+18,
                    "name": "8DANNY8",
                    "relicCores": 202,
                    "transmuteCores": 2
                },
                "28211713": {
                    "atk": 1712706,
                    "eeBestScore": 2.208496752917156e+18,
                    "name": "Zolwik414",
                    "relicCores": 131,
                    "transmuteCores": 12
                },
                "28861669": {
                    "atk": 1551825,
                    "eeBestScore": 6.064716589775155e+17,
                    "name": "so0ocks",
                    "relicCores": 108,
                    "transmuteCores": 0
                },
                "28910806": {
                    "atk": 1885648,
                    "eeBestScore": 2.0748977071012893e+19,
                    "name": "YaPatience",
                    "relicCores": 193,
                    "transmuteCores": 1
                },
                "30236912": {
                    "atk": 667201,
                    "eeBestScore": 932728655779672.0,
                    "name": "럭셔리서",
                    "relicCores": 62,
                    "transmuteCores": 0
                },
                "31879814": {
                    "atk": 2248159,
                    "eeBestScore": 4.697785127359991e+19,
                    "name": "Pennywise518",
                    "relicCores": 195,
                    "transmuteCores": 6
                },
                "37387904": {
                    "atk": 1045776,
                    "eeBestScore": 1.1865823881354914e+17,
                    "name": "THV91",
                    "relicCores": 26,
                    "transmuteCores": 0
                },
                "39852526": {
                    "atk": 1597138,
                    "eeBestScore": 8.279304802457848e+17,
                    "name": "dangyoo",
                    "relicCores": 153,
                    "transmuteCores": 0
                },
                "40423494": {
                    "atk": 926980,
                    "eeBestScore": 3741720215007130.0,
                    "name": "THEYcallmeGOKU",
                    "relicCores": 37,
                    "transmuteCores": 2
                },
                "41011086": {
                    "atk": 1679510,
                    "eeBestScore": null,
                    "name": "Yosida",
                    "relicCores": 135,
                    "transmuteCores": 0
                },
                "47261405": {
                    "atk": 1013923,
                    "eeBestScore": 2.4111759348275382e+17,
                    "name": "orginvr",
                    "relicCores": 108,
                    "transmuteCores": 0
                },
                "51536525": {
                    "atk": 1999577,
                    "eeBestScore": null,
                    "name": "frozencork",
                    "relicCores": 163,
                    "transmuteCores": 15
                },
                "55651095": {
                    "atk": 879955,
                    "eeBestScore": null,
                    "name": "PeanuTs",
                    "relicCores": 149,
                    "transmuteCores": 6
                },
                "63931445": {
                    "atk": 1330115,
                    "eeBestScore": 7.948747005817832e+17,
                    "name": "TEN907",
                    "relicCores": 76,
                    "transmuteCores": 0
                },
                "64740717": {
                    "atk": 1963191,
                    "eeBestScore": 7.852655879790979e+17,
                    "name": "Gerardo3420",
                    "relicCores": 133,
                    "transmuteCores": 1
                },
                "69058025": {
                    "atk": 2067694,
                    "eeBestScore": 2.3264949308783677e+19,
                    "name": "Ap3xPredator",
                    "relicCores": 238,
                    "transmuteCores": 7
                },
                "69503825": {
                    "atk": 1781236,
                    "eeBestScore": 5.267044146852521e+19,
                    "name": "Shootingfart",
                    "relicCores": 173,
                    "transmuteCores": 6
                },
                "73747276": {
                    "atk": 2053777,
                    "eeBestScore": 4.0309131738624655e+19,
                    "name": "KitkAt",
                    "relicCores": 179,
                    "transmuteCores": 7
                },
                "80799968": {
                    "atk": 1634901,
                    "eeBestScore": 2.9950911736154035e+18,
                    "name": "ᶜᴼᴮᴿᴬ",
                    "relicCores": 113,
                    "transmuteCores": 0
                },
                "82760847": {
                    "atk": 2128387,
                    "eeBestScore": 6.073164550235061e+18,
                    "name": "MegaMeh78",
                    "relicCores": 152,
                    "transmuteCores": 2
                },
                "83416043": {
                    "atk": 2068841,
                    "eeBestScore": 3.6205905683966454e+18,
                    "name": "picklerick286",
                    "relicCores": 141,
                    "transmuteCores": 10
                },
                "85032270": {
                    "atk": 1989325,
                    "eeBestScore": 1.5383379642517019e+19,
                    "name": "El_Ch4po",
                    "relicCores": 107,
                    "transmuteCores": 4
                },
                "85109901": {
                    "atk": 1627734,
                    "eeBestScore": 2.333224862787757e+19,
                    "name": "Dims86",
                    "relicCores": 118,
                    "transmuteCores": 2
                },
                "87814105": {
                    "atk": 744236,
                    "eeBestScore": 3.6307330298293544e+16,
                    "name": "m888",
                    "relicCores": 61,
                    "transmuteCores": 0
                },
                "88676717": {
                    "atk": 1939276,
                    "eeBestScore": 5.3690110401986234e+17,
                    "name": "lemros",
                    "relicCores": 136,
                    "transmuteCores": 0
                }
            },
            "name": "Kunai Gods",
            "totalAtk": 49819549,
            "totalEe": 3.0450771830338676e+20,
            "totalRelicCores": 4052,
            "totalTransmuteCores": 117
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1405,
            "members": {
                "102263647": {
                    "atk": 2437579,
                    "eeBestScore": 7.702609623910734e+20,
                    "name": "Koncalaz",
                    "relicCores": 181,
                    "transmuteCores": 28
                },
                "104730405": {
                    "atk": 1440060,
                    "eeBestScore": null,
                    "name": "KingRizzle",
                    "relicCores": 94,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 1809421,
                    "eeBestScore": 4.360681697283655e+19,
                    "name": "HakiLuffy",
                    "relicCores": 140,
                    "transmuteCores": 14
                },
                "110301719": {
                    "atk": 1512504,
                    "eeBestScore": 3.938407535840826e+18,
                    "name": "Epic|W",
                    "relicCores": 108,
                    "transmuteCores": 1
                },
                "112772047": {
                    "atk": 1596247,
                    "eeBestScore": 2.069314423514282e+19,
                    "name": "VictorMolusco",
                    "relicCores": 80,
                    "transmuteCores": 20
                },
                "113690788": {
                    "atk": 1568322,
                    "eeBestScore": 2.2997433915049206e+19,
                    "name": "Apathy_",
                    "relicCores": 102,
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
                    "atk": 2492397,
                    "eeBestScore": 7.956845877126939e+20,
                    "name": "Nubis",
                    "relicCores": 229,
                    "transmuteCores": 8
                },
                "18297536": {
                    "atk": 1620550,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 90,
                    "transmuteCores": 24
                },
                "21471954": {
                    "atk": 1486723,
                    "eeBestScore": 2.0455797491633298e+18,
                    "name": "N0M3rcy",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "21496121": {
                    "atk": 1393357,
                    "eeBestScore": 1.8606947297622716e+19,
                    "name": "b0ss",
                    "relicCores": 114,
                    "transmuteCores": 3
                },
                "22085142": {
                    "atk": 1590941,
                    "eeBestScore": 6.159274906127556e+18,
                    "name": "bimbabo",
                    "relicCores": 204,
                    "transmuteCores": 7
                },
                "26277677": {
                    "atk": 1982201,
                    "eeBestScore": 2.3592887482097308e+19,
                    "name": "BobBobberson",
                    "relicCores": 103,
                    "transmuteCores": 10
                },
                "29398372": {
                    "atk": 1887126,
                    "eeBestScore": null,
                    "name": "Player113322",
                    "relicCores": 168,
                    "transmuteCores": 8
                },
                "29904762": {
                    "atk": 1323200,
                    "eeBestScore": 6.307257417750434e+18,
                    "name": "Cheeselife",
                    "relicCores": 90,
                    "transmuteCores": 28
                },
                "30658936": {
                    "atk": 2111389,
                    "eeBestScore": 4.423041623234909e+19,
                    "name": "Gritchen",
                    "relicCores": 180,
                    "transmuteCores": 12
                },
                "32236991": {
                    "atk": 1859129,
                    "eeBestScore": 2.175650938303603e+19,
                    "name": "Player 32236991",
                    "relicCores": 177,
                    "transmuteCores": 24
                },
                "32556489": {
                    "atk": 1609421,
                    "eeBestScore": 1.6484064421109117e+19,
                    "name": "Bensayyten",
                    "relicCores": 91,
                    "transmuteCores": 14
                },
                "34847701": {
                    "atk": 1111372,
                    "eeBestScore": 1.2695183445670264e+17,
                    "name": "Christofire",
                    "relicCores": 97,
                    "transmuteCores": 0
                },
                "36484758": {
                    "atk": 1453433,
                    "eeBestScore": 2.697414494220131e+18,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1853580,
                    "eeBestScore": 1.391032174325737e+20,
                    "name": "PinkyToeBeans",
                    "relicCores": 177,
                    "transmuteCores": 30
                },
                "51071110": {
                    "atk": 1896209,
                    "eeBestScore": 2.0141488653523075e+19,
                    "name": "samwise08",
                    "relicCores": 126,
                    "transmuteCores": 20
                },
                "56780908": {
                    "atk": 1721518,
                    "eeBestScore": 5.997727339707996e+19,
                    "name": "TieForFirstYo",
                    "relicCores": 127,
                    "transmuteCores": 18
                },
                "57543766": {
                    "atk": 1481806,
                    "eeBestScore": null,
                    "name": "THJF1948ㅣStray",
                    "relicCores": 122,
                    "transmuteCores": 4
                },
                "60687252": {
                    "atk": 3757514,
                    "eeBestScore": 3.2481698986019296e+22,
                    "name": "һan",
                    "relicCores": 374,
                    "transmuteCores": 46
                },
                "61140731": {
                    "atk": 1701786,
                    "eeBestScore": 5.215418046824518e+18,
                    "name": "fesl",
                    "relicCores": 117,
                    "transmuteCores": 2
                },
                "64676255": {
                    "atk": 2077737,
                    "eeBestScore": 4.924456369341253e+19,
                    "name": "盾Heathcliff剣",
                    "relicCores": 144,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 1499145,
                    "eeBestScore": 7.492216362606921e+19,
                    "name": "Player 66607264",
                    "relicCores": 125,
                    "transmuteCores": 10
                },
                "71028860": {
                    "atk": 1701718,
                    "eeBestScore": 3.405502917684204e+19,
                    "name": "Rzzza",
                    "relicCores": 131,
                    "transmuteCores": 20
                },
                "75174428": {
                    "atk": 1980004,
                    "eeBestScore": 1.6317169274117915e+20,
                    "name": "PastalaVista",
                    "relicCores": 174,
                    "transmuteCores": 7
                },
                "77879578": {
                    "atk": 1856795,
                    "eeBestScore": 9.701593495658449e+18,
                    "name": "MMM|Mina475",
                    "relicCores": 153,
                    "transmuteCores": 3
                },
                "79510960": {
                    "atk": 1588096,
                    "eeBestScore": 4.718918386954229e+19,
                    "name": "theLP",
                    "relicCores": 163,
                    "transmuteCores": 3
                },
                "80972473": {
                    "atk": 2663679,
                    "eeBestScore": 7.884510547639797e+20,
                    "name": "Cunner88",
                    "relicCores": 173,
                    "transmuteCores": 38
                },
                "81635898": {
                    "atk": 1993058,
                    "eeBestScore": null,
                    "name": "Rėtrø",
                    "relicCores": 126,
                    "transmuteCores": 20
                },
                "83339881": {
                    "atk": 3225365,
                    "eeBestScore": 5.514235938783548e+21,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 42
                },
                "83861839": {
                    "atk": 1760987,
                    "eeBestScore": 2.4910005794902565e+19,
                    "name": "groggen",
                    "relicCores": 103,
                    "transmuteCores": 24
                },
                "86388317": {
                    "atk": 1614386,
                    "eeBestScore": 1.361007837500528e+18,
                    "name": "GG║BG2020",
                    "relicCores": 93,
                    "transmuteCores": 2
                },
                "87244358": {
                    "atk": 2654351,
                    "eeBestScore": 1.9993238495858113e+21,
                    "name": "神Sterben死",
                    "relicCores": 190,
                    "transmuteCores": 28
                },
                "88203044": {
                    "atk": 2085601,
                    "eeBestScore": 5.347974069935453e+19,
                    "name": "p88203044",
                    "relicCores": 97,
                    "transmuteCores": 14
                },
                "89511116": {
                    "atk": 1812789,
                    "eeBestScore": 2.250711132764057e+19,
                    "name": "EMBALOCO",
                    "relicCores": 174,
                    "transmuteCores": 7
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 60509896,
            "totalEe": 4.328164702100997e+22,
            "totalRelicCores": 4831,
            "totalTransmuteCores": 585
        },
        "480751": {
            "clanId": 480751,
            "lunarPoints": 1350,
            "members": {
                "10677595": {
                    "atk": 1339783,
                    "eeBestScore": 3.5973497119191814e+17,
                    "name": "デカプリ",
                    "relicCores": 90,
                    "transmuteCores": 0
                },
                "116261324": {
                    "atk": 2167006,
                    "eeBestScore": 1.1895785877272198e+20,
                    "name": "ななせきゅん",
                    "relicCores": 130,
                    "transmuteCores": 1
                },
                "24622245": {
                    "atk": 880747,
                    "eeBestScore": 9241539772562520.0,
                    "name": "みそにこみ",
                    "relicCores": 74,
                    "transmuteCores": 0
                },
                "36631532": {
                    "atk": 1579973,
                    "eeBestScore": 7.546397950386849e+17,
                    "name": "わいさん",
                    "relicCores": 86,
                    "transmuteCores": 1
                },
                "39104812": {
                    "atk": 390945,
                    "eeBestScore": 23139038756399.0,
                    "name": "KOFのアスタ",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "43325178": {
                    "atk": 1751846,
                    "eeBestScore": 1.959983353532091e+18,
                    "name": "Rucktritt",
                    "relicCores": 169,
                    "transmuteCores": 0
                },
                "43773124": {
                    "atk": 684462,
                    "eeBestScore": 1.1551693841592448e+16,
                    "name": "skytube",
                    "relicCores": 39,
                    "transmuteCores": 0
                },
                "48992769": {
                    "atk": 857861,
                    "eeBestScore": 5.249810946560464e+16,
                    "name": "Player 48992769",
                    "relicCores": 82,
                    "transmuteCores": 0
                },
                "53161244": {
                    "atk": 1555115,
                    "eeBestScore": 2.2891893396850289e+18,
                    "name": "DDT0202",
                    "relicCores": 144,
                    "transmuteCores": 2
                },
                "53691266": {
                    "atk": 1743873,
                    "eeBestScore": 6.357635758544547e+18,
                    "name": "コキング",
                    "relicCores": 83,
                    "transmuteCores": 0
                },
                "53825881": {
                    "atk": 1269622,
                    "eeBestScore": 4.1906285440135695e+18,
                    "name": "るを",
                    "relicCores": 55,
                    "transmuteCores": 0
                },
                "60388747": {
                    "atk": 1358342,
                    "eeBestScore": 1.1526831727951282e+18,
                    "name": "ユーリ603",
                    "relicCores": 153,
                    "transmuteCores": 2
                },
                "60485704": {
                    "atk": 1973018,
                    "eeBestScore": 6.7917092044289e+18,
                    "name": "Vermut963",
                    "relicCores": 100,
                    "transmuteCores": 4
                },
                "60744907": {
                    "atk": 2348815,
                    "eeBestScore": 1.7342856018044375e+19,
                    "name": "猫吊るし",
                    "relicCores": 126,
                    "transmuteCores": 5
                },
                "62062381": {
                    "atk": 461646,
                    "eeBestScore": null,
                    "name": "マスカット82",
                    "relicCores": 11,
                    "transmuteCores": 0
                },
                "63544900": {
                    "atk": 958769,
                    "eeBestScore": null,
                    "name": "かず2369",
                    "relicCores": 97,
                    "transmuteCores": 8
                },
                "64297912": {
                    "atk": 1630578,
                    "eeBestScore": null,
                    "name": "YAKIIMo",
                    "relicCores": 129,
                    "transmuteCores": 0
                },
                "65041338": {
                    "atk": 945297,
                    "eeBestScore": 1.7150070517267172e+16,
                    "name": "やまはるさん",
                    "relicCores": 79,
                    "transmuteCores": 4
                },
                "66512579": {
                    "atk": 1760141,
                    "eeBestScore": 8.214650211857414e+17,
                    "name": "ワルキュウ",
                    "relicCores": 120,
                    "transmuteCores": 0
                },
                "67873005": {
                    "atk": 1516586,
                    "eeBestScore": 1.3077964574149307e+18,
                    "name": "Player 67873005",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "69652266": {
                    "atk": 857146,
                    "eeBestScore": null,
                    "name": "おじぃさん",
                    "relicCores": 70,
                    "transmuteCores": 2
                },
                "69849275": {
                    "atk": 1151534,
                    "eeBestScore": 3.8303301605322816e+17,
                    "name": "にくままん",
                    "relicCores": 119,
                    "transmuteCores": 6
                },
                "70549108": {
                    "atk": 903439,
                    "eeBestScore": null,
                    "name": "きしたた",
                    "relicCores": 89,
                    "transmuteCores": 0
                },
                "70668067": {
                    "atk": 651658,
                    "eeBestScore": 1.1071199210442712e+16,
                    "name": "あたなかささ",
                    "relicCores": 65,
                    "transmuteCores": 1
                },
                "71114087": {
                    "atk": 966159,
                    "eeBestScore": null,
                    "name": "にゃんめ",
                    "relicCores": 63,
                    "transmuteCores": 0
                },
                "71255309": {
                    "atk": 902851,
                    "eeBestScore": null,
                    "name": "本物ブラジル",
                    "relicCores": 103,
                    "transmuteCores": 0
                },
                "73609528": {
                    "atk": 936586,
                    "eeBestScore": 1.443223011637543e+16,
                    "name": "まめちゃそ",
                    "relicCores": 44,
                    "transmuteCores": 0
                },
                "73717605": {
                    "atk": 442847,
                    "eeBestScore": null,
                    "name": "odenn28",
                    "relicCores": 12,
                    "transmuteCores": 0
                },
                "76861737": {
                    "atk": 1279197,
                    "eeBestScore": null,
                    "name": "DJB大丈夫",
                    "relicCores": 81,
                    "transmuteCores": 0
                },
                "77261026": {
                    "atk": 654994,
                    "eeBestScore": 5063492135959048.0,
                    "name": "ハルヨッシー",
                    "relicCores": 59,
                    "transmuteCores": 0
                },
                "79732380": {
                    "atk": 1015959,
                    "eeBestScore": 2.934708214391246e+16,
                    "name": "shi10969ka",
                    "relicCores": 101,
                    "transmuteCores": 0
                },
                "80820821": {
                    "atk": 682068,
                    "eeBestScore": null,
                    "name": "やきいもさん",
                    "relicCores": 44,
                    "transmuteCores": 0
                },
                "80924879": {
                    "atk": 1404925,
                    "eeBestScore": 7.480591293584346e+16,
                    "name": "swer2468",
                    "relicCores": 86,
                    "transmuteCores": 0
                },
                "86671908": {
                    "atk": 1265236,
                    "eeBestScore": 1.6471445289520753e+18,
                    "name": "まみちゅ",
                    "relicCores": 75,
                    "transmuteCores": 1
                },
                "88554219": {
                    "atk": 1183510,
                    "eeBestScore": 3.205508642894763e+17,
                    "name": "カミナリテ",
                    "relicCores": 120,
                    "transmuteCores": 2
                },
                "88652426": {
                    "atk": 1778618,
                    "eeBestScore": null,
                    "name": "ツナマヨコン",
                    "relicCores": 162,
                    "transmuteCores": 18
                },
                "88888684": {
                    "atk": 786528,
                    "eeBestScore": null,
                    "name": "きなこもち619",
                    "relicCores": 98,
                    "transmuteCores": 0
                },
                "90095230": {
                    "atk": 696593,
                    "eeBestScore": 2.3638868025738816e+16,
                    "name": "暇人の幻想",
                    "relicCores": 94,
                    "transmuteCores": 0
                }
            },
            "name": "こたつ部",
            "totalAtk": 40069060,
            "totalEe": 1.648857321550957e+20,
            "totalRelicCores": 3162,
            "totalTransmuteCores": 57
        },
        "88249": {
            "clanId": 88249,
            "lunarPoints": 1350,
            "members": {
                "100621447": {
                    "atk": 1086349,
                    "eeBestScore": 2.5943415903235616e+17,
                    "name": "chickentown",
                    "relicCores": 110,
                    "transmuteCores": 1
                },
                "100722715": {
                    "atk": 1914334,
                    "eeBestScore": 6.7259282796046246e+19,
                    "name": "P100722715",
                    "relicCores": 228,
                    "transmuteCores": 12
                },
                "101673081": {
                    "atk": 2401680,
                    "eeBestScore": 2.7376674504157524e+19,
                    "name": "Downs96",
                    "relicCores": 193,
                    "transmuteCores": 10
                },
                "102419916": {
                    "atk": 1038870,
                    "eeBestScore": 5.150338103008837e+17,
                    "name": "ZeusRko",
                    "relicCores": 92,
                    "transmuteCores": 0
                },
                "102624871": {
                    "atk": 1527360,
                    "eeBestScore": 1.957382286855252e+17,
                    "name": "Thecallmenate47",
                    "relicCores": 80,
                    "transmuteCores": 0
                },
                "103781449": {
                    "atk": 2185265,
                    "eeBestScore": 3.771987951235919e+20,
                    "name": "Amaretto",
                    "relicCores": 280,
                    "transmuteCores": 10
                },
                "104273693": {
                    "atk": 1340875,
                    "eeBestScore": 1.983942308051399e+19,
                    "name": "Cappadocious",
                    "relicCores": 144,
                    "transmuteCores": 30
                },
                "104971801": {
                    "atk": 2153007,
                    "eeBestScore": 2.9374640045952716e+20,
                    "name": "OKDiz",
                    "relicCores": 154,
                    "transmuteCores": 30
                },
                "10633578": {
                    "atk": 1524808,
                    "eeBestScore": 3.6768191718935137e+18,
                    "name": "justferg",
                    "relicCores": 99,
                    "transmuteCores": 20
                },
                "110278164": {
                    "atk": 1875175,
                    "eeBestScore": 2.85871924354894e+19,
                    "name": "Player 110278164",
                    "relicCores": 169,
                    "transmuteCores": 5
                },
                "111162307": {
                    "atk": 1672424,
                    "eeBestScore": 1.488535978918742e+19,
                    "name": "waterlover",
                    "relicCores": 175,
                    "transmuteCores": 10
                },
                "119097208": {
                    "atk": 1053114,
                    "eeBestScore": 2.9096508120782976e+17,
                    "name": "Knastiaan7264",
                    "relicCores": 74,
                    "transmuteCores": 0
                },
                "18142202": {
                    "atk": 1047286,
                    "eeBestScore": 5.516694916061574e+16,
                    "name": "melter",
                    "relicCores": 126,
                    "transmuteCores": 0
                },
                "19090270": {
                    "atk": 951615,
                    "eeBestScore": 2.087034330641506e+18,
                    "name": "Coldified",
                    "relicCores": 89,
                    "transmuteCores": 14
                },
                "21213157": {
                    "atk": 1160024,
                    "eeBestScore": 6.189597777779335e+16,
                    "name": "Tomrake",
                    "relicCores": 95,
                    "transmuteCores": 1
                },
                "26137909": {
                    "atk": 1263809,
                    "eeBestScore": 2.5750850878988657e+18,
                    "name": "Player 26137909",
                    "relicCores": 100,
                    "transmuteCores": 2
                },
                "28061298": {
                    "atk": 1627825,
                    "eeBestScore": 8.947080304084296e+19,
                    "name": "bettaqq",
                    "relicCores": 164,
                    "transmuteCores": 20
                },
                "31058121": {
                    "atk": 1869823,
                    "eeBestScore": 2.245406570437832e+19,
                    "name": "Sighloks",
                    "relicCores": 190,
                    "transmuteCores": 3
                },
                "34729938": {
                    "atk": 2142980,
                    "eeBestScore": 4.8584493821575045e+19,
                    "name": "UnleveledUp",
                    "relicCores": 136,
                    "transmuteCores": 20
                },
                "35215619": {
                    "atk": 1084693,
                    "eeBestScore": 2.1355234539937398e+17,
                    "name": "anjeww",
                    "relicCores": 85,
                    "transmuteCores": 0
                },
                "37768261": {
                    "atk": 1696674,
                    "eeBestScore": 5.776491357732301e+17,
                    "name": "Ommse",
                    "relicCores": 94,
                    "transmuteCores": 0
                },
                "39721230": {
                    "atk": 1849591,
                    "eeBestScore": 3.4209577485874176e+19,
                    "name": "Peulaaaa",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "42683515": {
                    "atk": 1255009,
                    "eeBestScore": null,
                    "name": "SlipperyBox",
                    "relicCores": 76,
                    "transmuteCores": 3
                },
                "49768146": {
                    "atk": 1621302,
                    "eeBestScore": 2.7845794902383447e+18,
                    "name": "Kioskarz",
                    "relicCores": 116,
                    "transmuteCores": 2
                },
                "52171940": {
                    "atk": 1896486,
                    "eeBestScore": 1.0008152129788561e+19,
                    "name": "islandboy0069",
                    "relicCores": 110,
                    "transmuteCores": 16
                },
                "52351112": {
                    "atk": 2123267,
                    "eeBestScore": 3.496404043630864e+18,
                    "name": "Mitsuda",
                    "relicCores": 139,
                    "transmuteCores": 2
                },
                "52603657": {
                    "atk": 1425132,
                    "eeBestScore": 1.478354120817487e+18,
                    "name": "TheSublimeGoose",
                    "relicCores": 119,
                    "transmuteCores": 4
                },
                "57027750": {
                    "atk": 1540279,
                    "eeBestScore": 2.1318337181026363e+18,
                    "name": "TONKA×TRUCK×TONY",
                    "relicCores": 115,
                    "transmuteCores": 2
                },
                "57107878": {
                    "atk": 1920085,
                    "eeBestScore": 2.358428429964746e+19,
                    "name": "ReDRuM47",
                    "relicCores": 180,
                    "transmuteCores": 16
                },
                "61918394": {
                    "atk": 726081,
                    "eeBestScore": 4619488482524772.0,
                    "name": "Pipz",
                    "relicCores": 30,
                    "transmuteCores": 0
                },
                "66494953": {
                    "atk": 965550,
                    "eeBestScore": 7.197032347210681e+16,
                    "name": "sarrrah",
                    "relicCores": 65,
                    "transmuteCores": 0
                },
                "66516849": {
                    "atk": 642995,
                    "eeBestScore": null,
                    "name": "Boo7y",
                    "relicCores": 50,
                    "transmuteCores": 0
                },
                "72984060": {
                    "atk": 1258359,
                    "eeBestScore": 8.34575412829635e+17,
                    "name": "mettttt",
                    "relicCores": 121,
                    "transmuteCores": 2
                },
                "74096729": {
                    "atk": 2075618,
                    "eeBestScore": 3.6730639300736406e+19,
                    "name": "BlaccZacc",
                    "relicCores": 130,
                    "transmuteCores": 8
                },
                "76955210": {
                    "atk": 1156216,
                    "eeBestScore": null,
                    "name": "BevMo",
                    "relicCores": 77,
                    "transmuteCores": 1
                },
                "77343033": {
                    "atk": 1523438,
                    "eeBestScore": 8.848840612585431e+18,
                    "name": "Flxvour",
                    "relicCores": 116,
                    "transmuteCores": 20
                },
                "77781162": {
                    "atk": 1219415,
                    "eeBestScore": 1.1682640468829624e+18,
                    "name": "DragonMeza",
                    "relicCores": 169,
                    "transmuteCores": 0
                },
                "79236107": {
                    "atk": 1911796,
                    "eeBestScore": 5.628623267791148e+19,
                    "name": "FATTY7267",
                    "relicCores": 147,
                    "transmuteCores": 32
                },
                "81615114": {
                    "atk": 2100453,
                    "eeBestScore": 9.810357206157804e+19,
                    "name": "cimi225",
                    "relicCores": 155,
                    "transmuteCores": 15
                },
                "89356281": {
                    "atk": 1523422,
                    "eeBestScore": null,
                    "name": "HOLIDAYINTHEUSA",
                    "relicCores": 80,
                    "transmuteCores": 0
                }
            },
            "name": "CHILL.GAMING",
            "totalAtk": 51599715,
            "totalEe": 1.2790498209326815e+21,
            "totalRelicCores": 4277,
            "totalTransmuteCores": 331
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

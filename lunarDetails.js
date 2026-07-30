// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-07-30
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalEe each only count that
// clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores sums the
// top 30 members by Relic Cores, not the top 30 by ATK - each total is ranked
// independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "19563": {
            "clanId": 19563,
            "lunarPoints": 1405,
            "members": {
                "10168685": {
                    "atk": 1903313,
                    "eeBestScore": null,
                    "name": "UAㆍMedDed",
                    "relicCores": 131,
                    "transmuteCores": 4
                },
                "109125101": {
                    "atk": 1340108,
                    "eeBestScore": 9.381153763789393e+17,
                    "name": "UAㆍBoBMarLeY",
                    "relicCores": 128,
                    "transmuteCores": 8
                },
                "11006623": {
                    "atk": 1478279,
                    "eeBestScore": null,
                    "name": "UAㆍCHESALO",
                    "relicCores": 141,
                    "transmuteCores": 9
                },
                "110515980": {
                    "atk": 1183438,
                    "eeBestScore": 1.4312081957285737e+18,
                    "name": "UAㆍJhaBuddha",
                    "relicCores": 71,
                    "transmuteCores": 11
                },
                "115722963": {
                    "atk": 620,
                    "eeBestScore": null,
                    "name": "lucindaadriSidney",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "11985065": {
                    "atk": 2232733,
                    "eeBestScore": null,
                    "name": "UAㆍDecer",
                    "relicCores": 146,
                    "transmuteCores": 18
                },
                "17502573": {
                    "atk": 1674795,
                    "eeBestScore": null,
                    "name": "UAㆍPatriotMaks",
                    "relicCores": 125,
                    "transmuteCores": 3
                },
                "19369171": {
                    "atk": 1960307,
                    "eeBestScore": null,
                    "name": "UAㆍBrutality♆",
                    "relicCores": 158,
                    "transmuteCores": 7
                },
                "21293808": {
                    "atk": 2010566,
                    "eeBestScore": null,
                    "name": "DanMan",
                    "relicCores": 169,
                    "transmuteCores": 20
                },
                "23205912": {
                    "atk": 1589331,
                    "eeBestScore": null,
                    "name": "UAㆍTkichik",
                    "relicCores": 116,
                    "transmuteCores": 2
                },
                "30584348": {
                    "atk": 1508368,
                    "eeBestScore": null,
                    "name": "UAㆍEuszKról",
                    "relicCores": 113,
                    "transmuteCores": 5
                },
                "33334811": {
                    "atk": 1620444,
                    "eeBestScore": 4.876507858086259e+16,
                    "name": "UAㆍJosya",
                    "relicCores": 137,
                    "transmuteCores": 2
                },
                "37937967": {
                    "atk": 1625769,
                    "eeBestScore": null,
                    "name": "UAㆍMaximilian",
                    "relicCores": 114,
                    "transmuteCores": 0
                },
                "38205017": {
                    "atk": 2230298,
                    "eeBestScore": 1.6749353312035147e+20,
                    "name": "UAㆍXAOS",
                    "relicCores": 134,
                    "transmuteCores": 20
                },
                "41903878": {
                    "atk": 2100090,
                    "eeBestScore": null,
                    "name": "xXVendettaXx",
                    "relicCores": 140,
                    "transmuteCores": 12
                },
                "42749233": {
                    "atk": 1401236,
                    "eeBestScore": 4.4303963106965606e+17,
                    "name": "vikterbignos",
                    "relicCores": 110,
                    "transmuteCores": 0
                },
                "43291378": {
                    "atk": 1076146,
                    "eeBestScore": 5.748267010643338e+17,
                    "name": "UAㆍSayMeow",
                    "relicCores": 116,
                    "transmuteCores": 1
                },
                "43386135": {
                    "atk": 2077563,
                    "eeBestScore": null,
                    "name": "UAㆍNero",
                    "relicCores": 157,
                    "transmuteCores": 15
                },
                "47059427": {
                    "atk": 2125400,
                    "eeBestScore": 1.0907894066720588e+19,
                    "name": "STEVKE",
                    "relicCores": 114,
                    "transmuteCores": 14
                },
                "47187799": {
                    "atk": 1802698,
                    "eeBestScore": null,
                    "name": "UAㆍʜᴏʀɴʏ",
                    "relicCores": 96,
                    "transmuteCores": 7
                },
                "49184732": {
                    "atk": 2119673,
                    "eeBestScore": null,
                    "name": "UAㆍОнікс",
                    "relicCores": 120,
                    "transmuteCores": 30
                },
                "51228289": {
                    "atk": 2149374,
                    "eeBestScore": null,
                    "name": "UAㆍЗлоба",
                    "relicCores": 159,
                    "transmuteCores": 6
                },
                "51583638": {
                    "atk": 2759587,
                    "eeBestScore": null,
                    "name": "UAㆍQz116",
                    "relicCores": 179,
                    "transmuteCores": 32
                },
                "52574294": {
                    "atk": 1805642,
                    "eeBestScore": null,
                    "name": "UAㆍprostokot12",
                    "relicCores": 150,
                    "transmuteCores": 7
                },
                "54414332": {
                    "atk": 2032438,
                    "eeBestScore": null,
                    "name": "UAㆍVIIK",
                    "relicCores": 156,
                    "transmuteCores": 14
                },
                "55962302": {
                    "atk": 1864858,
                    "eeBestScore": null,
                    "name": "AC1D/Dima",
                    "relicCores": 168,
                    "transmuteCores": 34
                },
                "56943239": {
                    "atk": 1600135,
                    "eeBestScore": null,
                    "name": "CrisBest•UA•",
                    "relicCores": 105,
                    "transmuteCores": 1
                },
                "58832852": {
                    "atk": 1666725,
                    "eeBestScore": 3.802592582365878e+19,
                    "name": "PlatinumMan",
                    "relicCores": 151,
                    "transmuteCores": 2
                },
                "60873807": {
                    "atk": 2114249,
                    "eeBestScore": null,
                    "name": "Borlandᵘᵃ",
                    "relicCores": 142,
                    "transmuteCores": 4
                },
                "61040066": {
                    "atk": 1575964,
                    "eeBestScore": null,
                    "name": "UAㆍMylo",
                    "relicCores": 127,
                    "transmuteCores": 0
                },
                "61551174": {
                    "atk": 1652306,
                    "eeBestScore": null,
                    "name": "UAㆍAlexHoff",
                    "relicCores": 116,
                    "transmuteCores": 6
                },
                "61971890": {
                    "atk": 2169496,
                    "eeBestScore": 1.4749477758999683e+19,
                    "name": "UAㆍKrakeN",
                    "relicCores": 82,
                    "transmuteCores": 0
                },
                "65056624": {
                    "atk": 1912339,
                    "eeBestScore": 6.230115236877365e+18,
                    "name": "UAㆍbdjdj",
                    "relicCores": 157,
                    "transmuteCores": 1
                },
                "65861161": {
                    "atk": 3180429,
                    "eeBestScore": 3.805794710677358e+21,
                    "name": "UAㆍGoBaby",
                    "relicCores": 257,
                    "transmuteCores": 32
                },
                "76984084": {
                    "atk": 1819795,
                    "eeBestScore": null,
                    "name": "UAㆍSichugan",
                    "relicCores": 119,
                    "transmuteCores": 2
                },
                "82684049": {
                    "atk": 1834395,
                    "eeBestScore": null,
                    "name": "Золтер",
                    "relicCores": 180,
                    "transmuteCores": 2
                },
                "83656307": {
                    "atk": 1555680,
                    "eeBestScore": null,
                    "name": "UAㆍMitrofanich",
                    "relicCores": 124,
                    "transmuteCores": 6
                },
                "86592996": {
                    "atk": 1612981,
                    "eeBestScore": null,
                    "name": "JenyaMaxwell",
                    "relicCores": 150,
                    "transmuteCores": 4
                }
            },
            "name": "BlackWingᵁᴬ",
            "totalAtk": 58823693,
            "totalEe": 4.0466376116667883e+21,
            "totalRelicCores": 4367,
            "totalTransmuteCores": 338
        },
        "23429": {
            "clanId": 23429,
            "lunarPoints": 1405,
            "members": {
                "101538577": {
                    "atk": 726430,
                    "eeBestScore": null,
                    "name": "MAHER911",
                    "relicCores": 65,
                    "transmuteCores": 6
                },
                "101862559": {
                    "atk": 1632672,
                    "eeBestScore": 6.669429113643022e+17,
                    "name": "Piciulo",
                    "relicCores": 138,
                    "transmuteCores": 0
                },
                "102673788": {
                    "atk": 844513,
                    "eeBestScore": 4.5795434899404704e+17,
                    "name": "V3GETA",
                    "relicCores": 62,
                    "transmuteCores": 1
                },
                "104351720": {
                    "atk": 1850348,
                    "eeBestScore": null,
                    "name": "cantcatchmefordays",
                    "relicCores": 124,
                    "transmuteCores": 28
                },
                "107893497": {
                    "atk": 473847,
                    "eeBestScore": 122583755971811.0,
                    "name": "snapbackchef",
                    "relicCores": 11,
                    "transmuteCores": 0
                },
                "109488912": {
                    "atk": 595610,
                    "eeBestScore": null,
                    "name": "Nighteen",
                    "relicCores": 30,
                    "transmuteCores": 0
                },
                "115762740": {
                    "atk": 1297972,
                    "eeBestScore": null,
                    "name": "SuperBrah",
                    "relicCores": 97,
                    "transmuteCores": 10
                },
                "11634165": {
                    "atk": 2104525,
                    "eeBestScore": null,
                    "name": "BeeBurst",
                    "relicCores": 134,
                    "transmuteCores": 20
                },
                "120320469": {
                    "atk": 328746,
                    "eeBestScore": 6544009560642.0,
                    "name": "Cinnimini",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "20129251": {
                    "atk": 1725184,
                    "eeBestScore": null,
                    "name": "VoiCòi",
                    "relicCores": 122,
                    "transmuteCores": 1
                },
                "21856441": {
                    "atk": 2128816,
                    "eeBestScore": null,
                    "name": "SCㅡYaboisasha",
                    "relicCores": 125,
                    "transmuteCores": 20
                },
                "31537465": {
                    "atk": 169782,
                    "eeBestScore": null,
                    "name": "Ebro",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "35273068": {
                    "atk": 1867626,
                    "eeBestScore": null,
                    "name": "MrDanlev00",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "36717776": {
                    "atk": 1396262,
                    "eeBestScore": null,
                    "name": "DENNAO",
                    "relicCores": 192,
                    "transmuteCores": 0
                },
                "37316038": {
                    "atk": 1693325,
                    "eeBestScore": null,
                    "name": "Wescum",
                    "relicCores": 131,
                    "transmuteCores": 11
                },
                "37885765": {
                    "atk": 2010190,
                    "eeBestScore": null,
                    "name": "CoelhoT",
                    "relicCores": 116,
                    "transmuteCores": 28
                },
                "38083990": {
                    "atk": 1735926,
                    "eeBestScore": null,
                    "name": "iJe44",
                    "relicCores": 156,
                    "transmuteCores": 20
                },
                "38579215": {
                    "atk": 1929619,
                    "eeBestScore": null,
                    "name": "DR33MER",
                    "relicCores": 102,
                    "transmuteCores": 11
                },
                "46947799": {
                    "atk": 1817191,
                    "eeBestScore": 3.921260921475819e+19,
                    "name": "DonkeyChung",
                    "relicCores": 151,
                    "transmuteCores": 15
                },
                "47339448": {
                    "atk": 2101861,
                    "eeBestScore": null,
                    "name": "Michrou",
                    "relicCores": 153,
                    "transmuteCores": 20
                },
                "48364127": {
                    "atk": 1315603,
                    "eeBestScore": null,
                    "name": "Drugz",
                    "relicCores": 118,
                    "transmuteCores": 6
                },
                "49389477": {
                    "atk": 1886751,
                    "eeBestScore": null,
                    "name": "qema",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "51495946": {
                    "atk": 2438499,
                    "eeBestScore": 2.9216076101782828e+20,
                    "name": "Caladin87",
                    "relicCores": 172,
                    "transmuteCores": 28
                },
                "51731005": {
                    "atk": 2139139,
                    "eeBestScore": null,
                    "name": "Assyrian",
                    "relicCores": 157,
                    "transmuteCores": 18
                },
                "52438965": {
                    "atk": 1062277,
                    "eeBestScore": null,
                    "name": "finsup",
                    "relicCores": 106,
                    "transmuteCores": 0
                },
                "56365940": {
                    "atk": 1500127,
                    "eeBestScore": 2.1401143155297546e+19,
                    "name": "CharlesTheGG",
                    "relicCores": 195,
                    "transmuteCores": 2
                },
                "58838701": {
                    "atk": 2644286,
                    "eeBestScore": null,
                    "name": "Lambo224",
                    "relicCores": 126,
                    "transmuteCores": 1
                },
                "59516352": {
                    "atk": 1725309,
                    "eeBestScore": 1.063071691832014e+17,
                    "name": "☠╚SIИGH╗⛧",
                    "relicCores": 127,
                    "transmuteCores": 14
                },
                "62070720": {
                    "atk": 1537072,
                    "eeBestScore": 2.6970724336905754e+18,
                    "name": "Player 62070720",
                    "relicCores": 155,
                    "transmuteCores": 4
                },
                "63630090": {
                    "atk": 1758670,
                    "eeBestScore": null,
                    "name": "FuzzyDunlop",
                    "relicCores": 116,
                    "transmuteCores": 14
                },
                "64927122": {
                    "atk": 1764901,
                    "eeBestScore": 7.67420265804507e+18,
                    "name": "Mr1Eye",
                    "relicCores": 141,
                    "transmuteCores": 6
                },
                "66541481": {
                    "atk": 1691841,
                    "eeBestScore": 3.8607575228969935e+19,
                    "name": "PipipapipoㅣStray",
                    "relicCores": 138,
                    "transmuteCores": 11
                },
                "69516227": {
                    "atk": 1502421,
                    "eeBestScore": 7.554753004676236e+18,
                    "name": "Branfarb",
                    "relicCores": 97,
                    "transmuteCores": 1
                },
                "70957479": {
                    "atk": 1946670,
                    "eeBestScore": 1.6487790984284593e+20,
                    "name": "Lilwilkeee",
                    "relicCores": 137,
                    "transmuteCores": 28
                },
                "78803367": {
                    "atk": 1376560,
                    "eeBestScore": null,
                    "name": "Player 78803367",
                    "relicCores": 129,
                    "transmuteCores": 0
                },
                "80172264": {
                    "atk": 1207545,
                    "eeBestScore": null,
                    "name": "^.^SETH^.^",
                    "relicCores": 133,
                    "transmuteCores": 1
                },
                "81508980": {
                    "atk": 2192709,
                    "eeBestScore": null,
                    "name": "tehsumo",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "82581907": {
                    "atk": 1606708,
                    "eeBestScore": null,
                    "name": "SnakeCharmer113",
                    "relicCores": 89,
                    "transmuteCores": 14
                },
                "85810397": {
                    "atk": 1898177,
                    "eeBestScore": 7.339757381888209e+19,
                    "name": "taxevadxr",
                    "relicCores": 101,
                    "transmuteCores": 24
                },
                "89144471": {
                    "atk": 1952471,
                    "eeBestScore": null,
                    "name": "Grrinns2.0",
                    "relicCores": 126,
                    "transmuteCores": 28
                }
            },
            "name": "STRAYtOuttaCompton",
            "totalAtk": 55555856,
            "totalEe": 6.48814933932301e+20,
            "totalRelicCores": 4063,
            "totalTransmuteCores": 411
        },
        "26141": {
            "clanId": 26141,
            "lunarPoints": 1495,
            "members": {
                "114696827": {
                    "atk": 1764872,
                    "eeBestScore": null,
                    "name": "Deafkev",
                    "relicCores": 132,
                    "transmuteCores": 0
                },
                "115723116": {
                    "atk": 829,
                    "eeBestScore": null,
                    "name": "dobbinJess",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "117179391": {
                    "atk": 1647189,
                    "eeBestScore": null,
                    "name": "Caesarᴳᴸᴬ",
                    "relicCores": 152,
                    "transmuteCores": 2
                },
                "118802521": {
                    "atk": 1554724,
                    "eeBestScore": null,
                    "name": "micipalababa",
                    "relicCores": 67,
                    "transmuteCores": 4
                },
                "19568806": {
                    "atk": 2883726,
                    "eeBestScore": null,
                    "name": "치Genmaᴾᴹ",
                    "relicCores": 194,
                    "transmuteCores": 28
                },
                "22639659": {
                    "atk": 2550986,
                    "eeBestScore": 9.821773609656842e+20,
                    "name": "WildDocᴳᴸᴬ",
                    "relicCores": 172,
                    "transmuteCores": 34
                },
                "23778335": {
                    "atk": 3746146,
                    "eeBestScore": null,
                    "name": "ATREIÐESᴳᴸᴬ",
                    "relicCores": 369,
                    "transmuteCores": 62
                },
                "23923606": {
                    "atk": 2667069,
                    "eeBestScore": null,
                    "name": "Poldᴳᴸᴬ",
                    "relicCores": 182,
                    "transmuteCores": 32
                },
                "41509839": {
                    "atk": 2233591,
                    "eeBestScore": null,
                    "name": "ʍɨӄɛ",
                    "relicCores": 212,
                    "transmuteCores": 2
                },
                "42910709": {
                    "atk": 2737755,
                    "eeBestScore": 2.5329787767443387e+21,
                    "name": "Taipodᴳᴸᴬ",
                    "relicCores": 177,
                    "transmuteCores": 50
                },
                "43494747": {
                    "atk": 2719942,
                    "eeBestScore": null,
                    "name": "qw3mikkᴳᴸᴬ",
                    "relicCores": 203,
                    "transmuteCores": 18
                },
                "46040986": {
                    "atk": 2823685,
                    "eeBestScore": 1.277328867040937e+21,
                    "name": "Raizenᴳᴸᴬ",
                    "relicCores": 195,
                    "transmuteCores": 28
                },
                "48734184": {
                    "atk": 3174992,
                    "eeBestScore": null,
                    "name": "040404040404",
                    "relicCores": 212,
                    "transmuteCores": 0
                },
                "49687194": {
                    "atk": 2498255,
                    "eeBestScore": null,
                    "name": "Amon82ᴳᴸᴬ",
                    "relicCores": 151,
                    "transmuteCores": 30
                },
                "54290892": {
                    "atk": 2560671,
                    "eeBestScore": 2.0008747256800456e+21,
                    "name": "Stealthᴳᴸᴬ",
                    "relicCores": 190,
                    "transmuteCores": 36
                },
                "54755598": {
                    "atk": 3044543,
                    "eeBestScore": null,
                    "name": "MiSeRyᴳᴸᴬ",
                    "relicCores": 155,
                    "transmuteCores": 28
                },
                "55305061": {
                    "atk": 1550592,
                    "eeBestScore": null,
                    "name": "F1Leartᴳᴸᴬ",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "55347865": {
                    "atk": 2957698,
                    "eeBestScore": null,
                    "name": "Sbreboᴳᴸᴬ",
                    "relicCores": 210,
                    "transmuteCores": 50
                },
                "55703994": {
                    "atk": 2380981,
                    "eeBestScore": null,
                    "name": "Damassivᴳᴸᴬ",
                    "relicCores": 212,
                    "transmuteCores": 8
                },
                "58492401": {
                    "atk": 2678653,
                    "eeBestScore": null,
                    "name": "Dance3ᴳᴸᴬ",
                    "relicCores": 161,
                    "transmuteCores": 34
                },
                "59275061": {
                    "atk": 2459002,
                    "eeBestScore": null,
                    "name": "Alessio97ᴳᴸᴬ",
                    "relicCores": 160,
                    "transmuteCores": 14
                },
                "60548832": {
                    "atk": 2741853,
                    "eeBestScore": 2.3194929738036218e+21,
                    "name": "Spaccossaᴳᴸᴬ",
                    "relicCores": 236,
                    "transmuteCores": 40
                },
                "61726913": {
                    "atk": 2700062,
                    "eeBestScore": null,
                    "name": "FedeboHᴳᴸᴬ",
                    "relicCores": 169,
                    "transmuteCores": 40
                },
                "62096818": {
                    "atk": 2698555,
                    "eeBestScore": null,
                    "name": "McFaldenᴳᴸᴬ",
                    "relicCores": 237,
                    "transmuteCores": 36
                },
                "64513917": {
                    "atk": 2549617,
                    "eeBestScore": null,
                    "name": "Đonnagerᴳᴸᴬ",
                    "relicCores": 203,
                    "transmuteCores": 28
                },
                "65009788": {
                    "atk": 2382181,
                    "eeBestScore": 4.083138794467017e+20,
                    "name": "Ellimist39",
                    "relicCores": 165,
                    "transmuteCores": 46
                },
                "65166366": {
                    "atk": 1761648,
                    "eeBestScore": null,
                    "name": "Serpe91~Ð⊂",
                    "relicCores": 116,
                    "transmuteCores": 0
                },
                "66160185": {
                    "atk": 3009897,
                    "eeBestScore": null,
                    "name": "AVIATOREᴳᴸᴬ",
                    "relicCores": 189,
                    "transmuteCores": 50
                },
                "68839816": {
                    "atk": 2689753,
                    "eeBestScore": null,
                    "name": "ⓓΘηKᴳᴸᴬ",
                    "relicCores": 171,
                    "transmuteCores": 30
                },
                "70930064": {
                    "atk": 3889306,
                    "eeBestScore": 9.370018609031599e+22,
                    "name": "VIПCiackᴳᴸᴬ",
                    "relicCores": 383,
                    "transmuteCores": 62
                },
                "74176460": {
                    "atk": 2870439,
                    "eeBestScore": 2.173245824585313e+21,
                    "name": "Stickmangᴳᴸᴬ",
                    "relicCores": 164,
                    "transmuteCores": 30
                },
                "74322755": {
                    "atk": 3622533,
                    "eeBestScore": null,
                    "name": "SeяuGoruᴳᴸᴬ",
                    "relicCores": 303,
                    "transmuteCores": 50
                },
                "78120783": {
                    "atk": 3443077,
                    "eeBestScore": null,
                    "name": "kepunx",
                    "relicCores": 444,
                    "transmuteCores": 47
                },
                "78901322": {
                    "atk": 2385822,
                    "eeBestScore": 1.3946880551439576e+20,
                    "name": "Bearson",
                    "relicCores": 201,
                    "transmuteCores": 28
                },
                "80198733": {
                    "atk": 1589371,
                    "eeBestScore": null,
                    "name": "shannu0",
                    "relicCores": 129,
                    "transmuteCores": 12
                },
                "83563246": {
                    "atk": 2614837,
                    "eeBestScore": null,
                    "name": "ElitEAndreaPsycO",
                    "relicCores": 176,
                    "transmuteCores": 14
                },
                "85447442": {
                    "atk": 2290256,
                    "eeBestScore": null,
                    "name": "TeaROOONG",
                    "relicCores": 253,
                    "transmuteCores": 50
                },
                "86153566": {
                    "atk": 3197283,
                    "eeBestScore": 6.911109975618255e+21,
                    "name": "Killuax7ᴳᴸᴬ",
                    "relicCores": 287,
                    "transmuteCores": 28
                },
                "88991944": {
                    "atk": 1780149,
                    "eeBestScore": null,
                    "name": "Saimir㋛ᴳᴸᴬ",
                    "relicCores": 80,
                    "transmuteCores": 0
                },
                "89079551": {
                    "atk": 2501690,
                    "eeBestScore": 6.981629913493203e+20,
                    "name": "Aภi๓aᴳᴸᴬ",
                    "relicCores": 225,
                    "transmuteCores": 42
                }
            },
            "name": "GLADIATORI",
            "totalAtk": 85181009,
            "totalEe": 1.131433402710646e+23,
            "totalRelicCores": 6655,
            "totalTransmuteCores": 1077
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1405,
            "members": {
                "102263647": {
                    "atk": 2226043,
                    "eeBestScore": null,
                    "name": "Koncalaz",
                    "relicCores": 177,
                    "transmuteCores": 24
                },
                "104730405": {
                    "atk": 1367645,
                    "eeBestScore": null,
                    "name": "KingRizzle",
                    "relicCores": 93,
                    "transmuteCores": 15
                },
                "10754439": {
                    "atk": 1717831,
                    "eeBestScore": 3.053405890166697e+19,
                    "name": "HakiLuffy",
                    "relicCores": 130,
                    "transmuteCores": 14
                },
                "110301719": {
                    "atk": 1374856,
                    "eeBestScore": 2.3137100483488865e+18,
                    "name": "Epic|W",
                    "relicCores": 100,
                    "transmuteCores": 1
                },
                "112772047": {
                    "atk": 1393080,
                    "eeBestScore": 1.3015942557792102e+19,
                    "name": "VictorMolusco",
                    "relicCores": 95,
                    "transmuteCores": 30
                },
                "113690788": {
                    "atk": 1531753,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 80,
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
                    "atk": 2447609,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 205,
                    "transmuteCores": 6
                },
                "18297536": {
                    "atk": 1588872,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 80,
                    "transmuteCores": 20
                },
                "21471954": {
                    "atk": 1467537,
                    "eeBestScore": null,
                    "name": "N0M3rcy",
                    "relicCores": 121,
                    "transmuteCores": 0
                },
                "21496121": {
                    "atk": 1325911,
                    "eeBestScore": null,
                    "name": "b0ss",
                    "relicCores": 114,
                    "transmuteCores": 2
                },
                "22085142": {
                    "atk": 1573442,
                    "eeBestScore": null,
                    "name": "bimbabo",
                    "relicCores": 203,
                    "transmuteCores": 7
                },
                "26277677": {
                    "atk": 1866995,
                    "eeBestScore": 2.2711927550820205e+19,
                    "name": "BobBobberson",
                    "relicCores": 122,
                    "transmuteCores": 11
                },
                "29398372": {
                    "atk": 1886526,
                    "eeBestScore": null,
                    "name": "Player113322",
                    "relicCores": 168,
                    "transmuteCores": 8
                },
                "29904762": {
                    "atk": 1298777,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 90,
                    "transmuteCores": 28
                },
                "30658936": {
                    "atk": 2089367,
                    "eeBestScore": 2.780402113339702e+19,
                    "name": "Gritchen",
                    "relicCores": 167,
                    "transmuteCores": 12
                },
                "32236991": {
                    "atk": 1756729,
                    "eeBestScore": 2.03671712261788e+19,
                    "name": "Player 32236991",
                    "relicCores": 177,
                    "transmuteCores": 24
                },
                "32556489": {
                    "atk": 1579380,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 90,
                    "transmuteCores": 20
                },
                "36484758": {
                    "atk": 1414870,
                    "eeBestScore": 2.552391608144861e+18,
                    "name": "Belthazar",
                    "relicCores": 86,
                    "transmuteCores": 3
                },
                "41742773": {
                    "atk": 1286875,
                    "eeBestScore": 8.06746575532928e+19,
                    "name": "PinkyToeBeans",
                    "relicCores": 111,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 1893017,
                    "eeBestScore": 1.372152077344409e+19,
                    "name": "samwise08",
                    "relicCores": 119,
                    "transmuteCores": 24
                },
                "56780908": {
                    "atk": 1690052,
                    "eeBestScore": null,
                    "name": "TieForFirstYo",
                    "relicCores": 120,
                    "transmuteCores": 18
                },
                "57543766": {
                    "atk": 1431673,
                    "eeBestScore": null,
                    "name": "THJF1948ㅣStray",
                    "relicCores": 117,
                    "transmuteCores": 4
                },
                "60687252": {
                    "atk": 3621221,
                    "eeBestScore": 2.2924884510380957e+22,
                    "name": "һan",
                    "relicCores": 369,
                    "transmuteCores": 36
                },
                "61140731": {
                    "atk": 1555805,
                    "eeBestScore": null,
                    "name": "fesl",
                    "relicCores": 113,
                    "transmuteCores": 2
                },
                "64676255": {
                    "atk": 2013146,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 144,
                    "transmuteCores": 20
                },
                "66607264": {
                    "atk": 1610910,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 143,
                    "transmuteCores": 20
                },
                "71028860": {
                    "atk": 1673598,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 110,
                    "transmuteCores": 20
                },
                "75174428": {
                    "atk": 1971704,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 174,
                    "transmuteCores": 7
                },
                "77879578": {
                    "atk": 1895405,
                    "eeBestScore": null,
                    "name": "MMM|Mina475",
                    "relicCores": 153,
                    "transmuteCores": 3
                },
                "79510960": {
                    "atk": 1549830,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 154,
                    "transmuteCores": 2
                },
                "80972473": {
                    "atk": 2664679,
                    "eeBestScore": 6.280208263269705e+20,
                    "name": "Cunner88",
                    "relicCores": 173,
                    "transmuteCores": 25
                },
                "81635898": {
                    "atk": 1999368,
                    "eeBestScore": null,
                    "name": "Rėtrø",
                    "relicCores": 121,
                    "transmuteCores": 20
                },
                "83339881": {
                    "atk": 3190280,
                    "eeBestScore": 4.79590806944757e+21,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 38
                },
                "83861839": {
                    "atk": 1659313,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 103,
                    "transmuteCores": 20
                },
                "86388317": {
                    "atk": 1516101,
                    "eeBestScore": null,
                    "name": "GG║BG2020",
                    "relicCores": 90,
                    "transmuteCores": 2
                },
                "87244358": {
                    "atk": 2657386,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 189,
                    "transmuteCores": 28
                },
                "88203044": {
                    "atk": 2077031,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 114,
                    "transmuteCores": 18
                },
                "89511116": {
                    "atk": 1766908,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 150,
                    "transmuteCores": 4
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 58737838,
            "totalEe": 2.8562508807508584e+22,
            "totalRelicCores": 4666,
            "totalTransmuteCores": 544
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

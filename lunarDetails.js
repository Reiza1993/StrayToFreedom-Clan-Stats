// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-07-22
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores only count each clan's top 30
// members by ATK - matches the in-game convention that only the top 30 ATK
// contributes to CX/LME clan power (see lunar_details.py's TOP_N_FOR_TOTALS).
const lunarDetails = {
        "17532": {
            "clanId": 17532,
            "lunarPoints": 1395,
            "members": {
                "107294230": {
                    "atk": 2174497,
                    "name": "胖羊咩",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "11002836": {
                    "atk": 2021834,
                    "name": "五口之家",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "11148583": {
                    "atk": 2679094,
                    "name": "小空ᵀᵂ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "112550562": {
                    "atk": 1909653,
                    "name": "哇哒吸蛙",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "11411932": {
                    "atk": 1200181,
                    "name": "貓のDestiny",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "117713110": {
                    "atk": 1413112,
                    "name": "嘎哩巴瑞",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "121938463": {
                    "atk": 25173,
                    "name": "player.9527",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "12431501": {
                    "atk": 1368385,
                    "name": "怒吃神肥啾",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "13995016": {
                    "atk": 1692270,
                    "name": "良家弟兄們",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "15049885": {
                    "atk": 1980131,
                    "name": "機車仔",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "16526203": {
                    "atk": 2370194,
                    "name": "c8去洗腳",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "17544752": {
                    "atk": 1641171,
                    "name": "每季都墊底",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "17605024": {
                    "atk": 1252819,
                    "name": "Angel619",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "19698923": {
                    "atk": 1852291,
                    "name": "貓の阿奇拉",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "22524917": {
                    "atk": 2046429,
                    "name": "吉羅",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "23422246": {
                    "atk": 2057858,
                    "name": "貓の風過留痕",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "25958224": {
                    "atk": 664048,
                    "name": "黑貓宅急便@",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "27359178": {
                    "atk": 1394952,
                    "name": "米米愛熊",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "30142807": {
                    "atk": 1983686,
                    "name": "池玖祐大",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "31974518": {
                    "atk": 2237626,
                    "name": "東方順仔",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "32848755": {
                    "atk": 1316407,
                    "name": "哈哈少爺",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "33703368": {
                    "atk": 1796848,
                    "name": "六三四之劍",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "34268580": {
                    "atk": 1411869,
                    "name": "薄鹽洋芋片",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "34911473": {
                    "atk": 1302387,
                    "name": "龜龜偉",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "38173231": {
                    "atk": 2403475,
                    "name": "sam107250",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "49102355": {
                    "atk": 1889759,
                    "name": "小胖o",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "52663292": {
                    "atk": 1023688,
                    "name": "宿西青山",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "53066222": {
                    "atk": 1966715,
                    "name": "我是你拔拔",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "57083718": {
                    "atk": 3921016,
                    "name": "顏小淯ᵠ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "59179264": {
                    "atk": 1775825,
                    "name": "火烤",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "61969458": {
                    "atk": 3151668,
                    "name": "皮皮淯",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "62066860": {
                    "atk": 1756490,
                    "name": "青德宗",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "62574830": {
                    "atk": 2301279,
                    "name": "台版阿里巴巴",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "68211165": {
                    "atk": 585596,
                    "name": "糖醋排骨",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "69710351": {
                    "atk": 1838095,
                    "name": "白色襪子",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "70264052": {
                    "atk": 1786268,
                    "name": "禿頭披風蝦",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "70747119": {
                    "atk": 2392314,
                    "name": "貓の歐文0714",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "76515952": {
                    "atk": 3000599,
                    "name": "叛軍首領",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "76955274": {
                    "atk": 1370416,
                    "name": "貓の逗貓棒",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "81344384": {
                    "atk": 1917393,
                    "name": "嗚嗚喔嗚嗚",
                    "relicCores": null,
                    "transmuteCores": null
                }
            },
            "name": "微型白領族",
            "totalAtk": 62764411,
            "totalRelicCores": null,
            "totalTransmuteCores": null
        },
        "18022": {
            "clanId": 18022,
            "lunarPoints": 1340,
            "members": {
                "103514312": {
                    "atk": 1087849,
                    "name": "No.3",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "106854389": {
                    "atk": 1475867,
                    "name": "_N3CR0S_",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "116737966": {
                    "atk": 595097,
                    "name": "카츄#양파",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "12963614": {
                    "atk": 1476779,
                    "name": "숍쵸롱",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "14968064": {
                    "atk": 2259389,
                    "name": "야매떄",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "16811691": {
                    "atk": 832294,
                    "name": "왕써니",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "17201878": {
                    "atk": 1500561,
                    "name": "뺀질뺀질",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "17549146": {
                    "atk": 1327512,
                    "name": "이로12",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "19325091": {
                    "atk": 940290,
                    "name": "Dsplay",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "19792895": {
                    "atk": 747522,
                    "name": "쏘염쏘염",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "20809015": {
                    "atk": 1826247,
                    "name": "ROny",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "20818288": {
                    "atk": 1911760,
                    "name": "꼬황",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "22980206": {
                    "atk": 1146822,
                    "name": "Player 22980206",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "25880311": {
                    "atk": 738626,
                    "name": "구리쫑",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "26124534": {
                    "atk": 1711517,
                    "name": "멍견",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "26305553": {
                    "atk": 2208543,
                    "name": "Player 26305553",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "29855465": {
                    "atk": 1123060,
                    "name": "보빈대디",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "34535820": {
                    "atk": 1667040,
                    "name": "daonpapapa",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "38608730": {
                    "atk": 1145125,
                    "name": "하프로기",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "39201841": {
                    "atk": 549539,
                    "name": "시언ᵉ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "39961494": {
                    "atk": 1901326,
                    "name": "킬헤롱",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "43395252": {
                    "atk": 887169,
                    "name": "mohsenm88",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "45729041": {
                    "atk": 1996029,
                    "name": "¤포청천¤",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "47746696": {
                    "atk": 1715497,
                    "name": "Player 47746696",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "50864783": {
                    "atk": 531487,
                    "name": "Player 50864783",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "53215577": {
                    "atk": 1940189,
                    "name": "비타민씨",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "53600249": {
                    "atk": 1283115,
                    "name": "공식시라소니",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "55086676": {
                    "atk": 1883340,
                    "name": "프리폴",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "55419972": {
                    "atk": 1736265,
                    "name": "(￣へ￣≠)",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "55871219": {
                    "atk": 514313,
                    "name": "후니2278",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "56034021": {
                    "atk": 653708,
                    "name": "メロンさまー",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "57727923": {
                    "atk": 790712,
                    "name": "동네쓰레기",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "59152971": {
                    "atk": 1324063,
                    "name": "리더킴",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "60137902": {
                    "atk": 1378937,
                    "name": "ㅌㅌㅌㅋㅋㅋ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "67856332": {
                    "atk": 763672,
                    "name": "탈로시아a",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "69614233": {
                    "atk": 1066800,
                    "name": "뇽뇽쌤",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "83552342": {
                    "atk": 774020,
                    "name": "Arbel712",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "87187966": {
                    "atk": 1342910,
                    "name": "정불주",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "87563040": {
                    "atk": 1606112,
                    "name": "S주니",
                    "relicCores": null,
                    "transmuteCores": null
                }
            },
            "name": "제로",
            "totalAtk": 44493119,
            "totalRelicCores": null,
            "totalTransmuteCores": null
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1395,
            "members": {
                "102263647": {
                    "atk": 2189977,
                    "name": "Koncalaz",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "104730405": {
                    "atk": 1361632,
                    "name": "KingRizzle",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "10754439": {
                    "atk": 1712418,
                    "name": "HakiLuffy",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "110301719": {
                    "atk": 1371156,
                    "name": "Epic|W",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "112772047": {
                    "atk": 1361365,
                    "name": "VictorMolusco",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "113690788": {
                    "atk": 1418343,
                    "name": "Apathy_",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "115369352": {
                    "atk": 1443090,
                    "name": "Lemminkäinen",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "115742768": {
                    "atk": 147341,
                    "name": "SterbyTools",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "18115624": {
                    "atk": 2305389,
                    "name": "Nubis",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "18297536": {
                    "atk": 1546898,
                    "name": "ergiangi",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "21471954": {
                    "atk": 1440182,
                    "name": "N0M3rcy",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "21496121": {
                    "atk": 1310107,
                    "name": "b0ss",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "22085142": {
                    "atk": 1493753,
                    "name": "bimbabo",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "26277677": {
                    "atk": 1772658,
                    "name": "BobBobberson",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "29398372": {
                    "atk": 1886526,
                    "name": "Player113322",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "29904762": {
                    "atk": 1297667,
                    "name": "Cheeselife",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "30658936": {
                    "atk": 2062431,
                    "name": "Gritchen",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "32236991": {
                    "atk": 1719580,
                    "name": "Player 32236991",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "32556489": {
                    "atk": 1582333,
                    "name": "Bensayyten",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "36484758": {
                    "atk": 1375958,
                    "name": "Belthazar",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "41742773": {
                    "atk": 1298539,
                    "name": "PinkyToeBeans",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "51071110": {
                    "atk": 1698281,
                    "name": "samwise08",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "56780908": {
                    "atk": 1595246,
                    "name": "TieForFirstYo",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "57543766": {
                    "atk": 1388783,
                    "name": "THJF1948ㅣStray",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "60687252": {
                    "atk": 3741824,
                    "name": "һan",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "61140731": {
                    "atk": 1517545,
                    "name": "fesl",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "64676255": {
                    "atk": 1971418,
                    "name": "盾Heathcliff剣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "66607264": {
                    "atk": 1442224,
                    "name": "Player 66607264",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "71028860": {
                    "atk": 1656648,
                    "name": "Rzzza",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "75174428": {
                    "atk": 1969154,
                    "name": "PastalaVista",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "77879578": {
                    "atk": 1883208,
                    "name": "MMM|Mina475",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "79510960": {
                    "atk": 1457743,
                    "name": "theLP",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "80972473": {
                    "atk": 2668499,
                    "name": "Cunner88",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "81635898": {
                    "atk": 1992368,
                    "name": "Rėtrø",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "83339881": {
                    "atk": 3149628,
                    "name": "Fl3xas",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "83861839": {
                    "atk": 1613662,
                    "name": "groggen",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "86388317": {
                    "atk": 1509206,
                    "name": "GG║BG2020",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "87244358": {
                    "atk": 2649856,
                    "name": "神Sterben死",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "88203044": {
                    "atk": 1886451,
                    "name": "p88203044",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "89511116": {
                    "atk": 1751744,
                    "name": "EMBALOCO",
                    "relicCores": null,
                    "transmuteCores": null
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 57309940,
            "totalRelicCores": null,
            "totalTransmuteCores": null
        },
        "83714": {
            "clanId": 83714,
            "lunarPoints": 1395,
            "members": {
                "103240926": {
                    "atk": 1912848,
                    "name": "☣MTTU☣ ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "110902968": {
                    "atk": 2061318,
                    "name": "☣PoetaHugo☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "111537203": {
                    "atk": 1986132,
                    "name": "☣️Xitado☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "119409889": {
                    "atk": 724118,
                    "name": "XoltebarPinkman",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "13899130": {
                    "atk": 1638862,
                    "name": "Sanyangkkun☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "18821086": {
                    "atk": 1815258,
                    "name": "☣Wesley10☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "19256749": {
                    "atk": 1975804,
                    "name": "☣FrosT_T☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "20593632": {
                    "atk": 1910310,
                    "name": "MARCUSᵗˣᶜ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "28897896": {
                    "atk": 1767263,
                    "name": "Gimenesᵗˣᶜ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "33178547": {
                    "atk": 1766089,
                    "name": "☣BLĖSSĖĐ☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "34144051": {
                    "atk": 2271621,
                    "name": "☣brita☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "35377329": {
                    "atk": 3270546,
                    "name": "LΛNCΞRᵗˣ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "36475521": {
                    "atk": 2460677,
                    "name": "☣️Briquezi☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "42440995": {
                    "atk": 1947321,
                    "name": "☣️Pincel☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "53301524": {
                    "atk": 2220669,
                    "name": "☣Yoshimitsu☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "56884549": {
                    "atk": 1589505,
                    "name": "Alfetyᴸᴾ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "59097617": {
                    "atk": 1787254,
                    "name": "Godspeed®",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "61939658": {
                    "atk": 2005852,
                    "name": "BRΛNTᵗˣ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "63966755": {
                    "atk": 2690785,
                    "name": "MemphisDePalio☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "66683356": {
                    "atk": 2022075,
                    "name": "☣️lucasputz☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "67236289": {
                    "atk": 1700747,
                    "name": "Cloudᵗˣᶜ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "69407901": {
                    "atk": 1684558,
                    "name": "☣Enkor☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "71269818": {
                    "atk": 2513860,
                    "name": "☣frkstaim☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "73081339": {
                    "atk": 2457270,
                    "name": "Hisokaᵗˣᶜ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "76461320": {
                    "atk": 2051348,
                    "name": "Kevy666ᵗˣ",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "76826845": {
                    "atk": 1846572,
                    "name": "☣️Dallas☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "78078034": {
                    "atk": 2008256,
                    "name": "☣️Ulquiorra☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "78259604": {
                    "atk": 1802128,
                    "name": "☣️NamelesS☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "79057258": {
                    "atk": 1950512,
                    "name": "☣️master☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "79672432": {
                    "atk": 1604653,
                    "name": "☣️LenoBrega☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "80008028": {
                    "atk": 1836489,
                    "name": "☣️NUCLEAR☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "80402742": {
                    "atk": 1721488,
                    "name": "☣️Jack☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "80704343": {
                    "atk": 1739781,
                    "name": "☣️Fanjos☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "81108651": {
                    "atk": 2790110,
                    "name": "☣Stakahou☣",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "82367396": {
                    "atk": 1515522,
                    "name": "Я͜͡RㅣFrosT_T",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "84993865": {
                    "atk": 1872507,
                    "name": "ODR☣️G",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "86872620": {
                    "atk": 1837376,
                    "name": "AgroToxico☣️",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "87818064": {
                    "atk": 1787245,
                    "name": "☣️Konbankai",
                    "relicCores": null,
                    "transmuteCores": null
                },
                "89583607": {
                    "atk": 2067391,
                    "name": "Kisustoᵗˣ",
                    "relicCores": null,
                    "transmuteCores": null
                }
            },
            "name": "Tóxicøs",
            "totalAtk": 62692886,
            "totalRelicCores": null,
            "totalTransmuteCores": null
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

// lunarDetails.js
// PRO Lunar Details — Prep Day clan scouting (own clan + up to 3 scouted opponents,
// or manually entered clan ids)
// Last Updated: 2026-10-29
// Keyed by Clan ID (string); each clan's "members" is keyed by account ID (UID).
// totalAtk/totalRelicCores/totalTransmuteCores/totalChips/totalEe each only
// count that clan's own top 30 members BY THAT SAME STAT - e.g. totalRelicCores
// sums the top 30 members by Relic Cores, not the top 30 by ATK - each total is
// ranked independently (see lunar_details.py's TOP_N_FOR_TOTALS/_top_n_by).
// totalEe/eeBestScore is each member's single highest individual Ender's Echo
// attempt, not a per-day total (see LunarClanMember.ee_best_score).
const lunarDetails = {
        "11358": {
            "clanId": 11358,
            "lunarPoints": 1600,
            "members": {
                "12223698": {
                    "atk": 3627121,
                    "chipsCount": 176,
                    "eeBestScore": null,
                    "name": "★LOVEChianti",
                    "relicCores": 265,
                    "transmuteCores": 72
                },
                "22505940": {
                    "atk": 3678129,
                    "chipsCount": 183,
                    "eeBestScore": null,
                    "name": "★Đậu",
                    "relicCores": 248,
                    "transmuteCores": 72
                },
                "25700974": {
                    "atk": 2917278,
                    "chipsCount": 107,
                    "eeBestScore": null,
                    "name": "★Gàkon",
                    "relicCores": 218,
                    "transmuteCores": 40
                },
                "26143411": {
                    "atk": 2846423,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "★ElverGonzalez",
                    "relicCores": 152,
                    "transmuteCores": 38
                },
                "29371122": {
                    "atk": 2669481,
                    "chipsCount": 111,
                    "eeBestScore": null,
                    "name": "★YLinhhᰔᩚ",
                    "relicCores": 182,
                    "transmuteCores": 10
                },
                "29578694": {
                    "atk": 2290039,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "<Vega>",
                    "relicCores": 172,
                    "transmuteCores": 30
                },
                "30401546": {
                    "atk": 3563483,
                    "chipsCount": 182,
                    "eeBestScore": null,
                    "name": "N3tn",
                    "relicCores": 235,
                    "transmuteCores": 80
                },
                "30876880": {
                    "atk": 2616893,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "HugBi",
                    "relicCores": 196,
                    "transmuteCores": 44
                },
                "32945837": {
                    "atk": 2271710,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "TỉnhSuy",
                    "relicCores": 185,
                    "transmuteCores": 16
                },
                "33079919": {
                    "atk": 3552007,
                    "chipsCount": 177,
                    "eeBestScore": null,
                    "name": "★Chianti",
                    "relicCores": 248,
                    "transmuteCores": 80
                },
                "33802176": {
                    "atk": 3447594,
                    "chipsCount": 235,
                    "eeBestScore": null,
                    "name": "★HônLừng",
                    "relicCores": 228,
                    "transmuteCores": 66
                },
                "35064260": {
                    "atk": 2914671,
                    "chipsCount": 170,
                    "eeBestScore": null,
                    "name": "★KhuêDiệp",
                    "relicCores": 283,
                    "transmuteCores": 10
                },
                "36015995": {
                    "atk": 2939265,
                    "chipsCount": 157,
                    "eeBestScore": null,
                    "name": "★GodNTT",
                    "relicCores": 222,
                    "transmuteCores": 42
                },
                "36184043": {
                    "atk": 2485897,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "★Vermouth",
                    "relicCores": 223,
                    "transmuteCores": 72
                },
                "36815624": {
                    "atk": 3507405,
                    "chipsCount": 208,
                    "eeBestScore": null,
                    "name": "★LibraKira",
                    "relicCores": 240,
                    "transmuteCores": 72
                },
                "38104941": {
                    "atk": 3265632,
                    "chipsCount": 84,
                    "eeBestScore": null,
                    "name": "★ßigÇityßøy",
                    "relicCores": 239,
                    "transmuteCores": 64
                },
                "38742056": {
                    "atk": 2901546,
                    "chipsCount": 55,
                    "eeBestScore": null,
                    "name": "LAETUS",
                    "relicCores": 166,
                    "transmuteCores": 44
                },
                "44075814": {
                    "atk": 3896149,
                    "chipsCount": 207,
                    "eeBestScore": null,
                    "name": "★BebeYeGe",
                    "relicCores": 313,
                    "transmuteCores": 64
                },
                "44779514": {
                    "atk": 2970225,
                    "chipsCount": 98,
                    "eeBestScore": null,
                    "name": "hhhhhhaaa",
                    "relicCores": 277,
                    "transmuteCores": 34
                },
                "48104282": {
                    "atk": 3972682,
                    "chipsCount": 238,
                    "eeBestScore": null,
                    "name": "★VNClub",
                    "relicCores": 352,
                    "transmuteCores": 68
                },
                "49255029": {
                    "atk": 2598652,
                    "chipsCount": 67,
                    "eeBestScore": null,
                    "name": "FrAnKjRv",
                    "relicCores": 137,
                    "transmuteCores": 38
                },
                "50196049": {
                    "atk": 2154053,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "enternalplay",
                    "relicCores": 156,
                    "transmuteCores": 4
                },
                "52265259": {
                    "atk": 2791930,
                    "chipsCount": 92,
                    "eeBestScore": null,
                    "name": "★P4pHit4",
                    "relicCores": 164,
                    "transmuteCores": 30
                },
                "52389557": {
                    "atk": 3245372,
                    "chipsCount": 138,
                    "eeBestScore": null,
                    "name": "ıʞıoʞkoikichi",
                    "relicCores": 193,
                    "transmuteCores": 32
                },
                "57966131": {
                    "atk": 2943827,
                    "chipsCount": 161,
                    "eeBestScore": null,
                    "name": "ChiếnEOH",
                    "relicCores": 176,
                    "transmuteCores": 24
                },
                "59380396": {
                    "atk": 2878924,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "★StefanFelix",
                    "relicCores": 208,
                    "transmuteCores": 24
                },
                "59563299": {
                    "atk": 3626987,
                    "chipsCount": 186,
                    "eeBestScore": null,
                    "name": "★BabaYaGa",
                    "relicCores": 226,
                    "transmuteCores": 66
                },
                "65695639": {
                    "atk": 2215399,
                    "chipsCount": 64,
                    "eeBestScore": null,
                    "name": "★Nataro",
                    "relicCores": 195,
                    "transmuteCores": 2
                },
                "70639679": {
                    "atk": 4479295,
                    "chipsCount": 293,
                    "eeBestScore": null,
                    "name": "CapVN",
                    "relicCores": 369,
                    "transmuteCores": 80
                },
                "71809571": {
                    "atk": 3728130,
                    "chipsCount": 190,
                    "eeBestScore": null,
                    "name": "★Ryder°QH°",
                    "relicCores": 303,
                    "transmuteCores": 44
                },
                "72619594": {
                    "atk": 2134074,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "乂ConMạyMè乂",
                    "relicCores": 208,
                    "transmuteCores": 4
                },
                "74770466": {
                    "atk": 2516369,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "ĂζЄĴΘ",
                    "relicCores": 184,
                    "transmuteCores": 48
                },
                "77689242": {
                    "atk": 3434364,
                    "chipsCount": 191,
                    "eeBestScore": null,
                    "name": "★S2NMT",
                    "relicCores": 282,
                    "transmuteCores": 50
                },
                "78185974": {
                    "atk": 2754166,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "★BᵒʸD",
                    "relicCores": 226,
                    "transmuteCores": 50
                },
                "79830509": {
                    "atk": 3354178,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "★Tattoo",
                    "relicCores": 257,
                    "transmuteCores": 42
                },
                "82656486": {
                    "atk": 2614627,
                    "chipsCount": 152,
                    "eeBestScore": null,
                    "name": "YatoroD0G",
                    "relicCores": 240,
                    "transmuteCores": 42
                },
                "83412300": {
                    "atk": 3173541,
                    "chipsCount": 127,
                    "eeBestScore": null,
                    "name": "Hardes2",
                    "relicCores": 282,
                    "transmuteCores": 40
                },
                "87874085": {
                    "atk": 4934006,
                    "chipsCount": 365,
                    "eeBestScore": null,
                    "name": "★PK",
                    "relicCores": 412,
                    "transmuteCores": 88
                },
                "88634372": {
                    "atk": 2712264,
                    "chipsCount": 173,
                    "eeBestScore": null,
                    "name": "hlren",
                    "relicCores": 204,
                    "transmuteCores": 28
                },
                "89039250": {
                    "atk": 2742466,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "★kalimbastick",
                    "relicCores": 140,
                    "transmuteCores": 42
                }
            },
            "name": "VNClubㅤ",
            "totalAtk": 99468541,
            "totalChips": 4897,
            "totalEe": null,
            "totalRelicCores": 7577,
            "totalTransmuteCores": 1644
        },
        "44262": {
            "clanId": 44262,
            "lunarPoints": 1535,
            "members": {
                "100876140": {
                    "atk": 2567683,
                    "chipsCount": 53,
                    "eeBestScore": null,
                    "name": "Scoundrel536",
                    "relicCores": 173,
                    "transmuteCores": 20
                },
                "103516442": {
                    "atk": 3194365,
                    "chipsCount": 88,
                    "eeBestScore": null,
                    "name": "DAYO-P",
                    "relicCores": 274,
                    "transmuteCores": 64
                },
                "106162623": {
                    "atk": 2011717,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "gubrax",
                    "relicCores": 111,
                    "transmuteCores": 20
                },
                "10754439": {
                    "atk": 2265350,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "HakiLuffy",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "108546985": {
                    "atk": 2429056,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "pumpenjoe",
                    "relicCores": 199,
                    "transmuteCores": 44
                },
                "108860725": {
                    "atk": 2658160,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "RetinaDNA",
                    "relicCores": 169,
                    "transmuteCores": 42
                },
                "112772047": {
                    "atk": 2004286,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "VictorMolusco",
                    "relicCores": 126,
                    "transmuteCores": 34
                },
                "113690788": {
                    "atk": 2163910,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "Apathy_",
                    "relicCores": 110,
                    "transmuteCores": 28
                },
                "11463573": {
                    "atk": 2041465,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "faxnem",
                    "relicCores": 119,
                    "transmuteCores": 50
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
                    "atk": 2743784,
                    "chipsCount": 138,
                    "eeBestScore": null,
                    "name": "Nubis",
                    "relicCores": 222,
                    "transmuteCores": 28
                },
                "18297536": {
                    "atk": 1877118,
                    "chipsCount": 66,
                    "eeBestScore": null,
                    "name": "ergiangi",
                    "relicCores": 103,
                    "transmuteCores": 34
                },
                "26277677": {
                    "atk": 2577865,
                    "chipsCount": 30,
                    "eeBestScore": null,
                    "name": "BobBobberson",
                    "relicCores": 142,
                    "transmuteCores": 13
                },
                "27113479": {
                    "atk": 2809349,
                    "chipsCount": 135,
                    "eeBestScore": null,
                    "name": "silverxz",
                    "relicCores": 168,
                    "transmuteCores": 10
                },
                "29321884": {
                    "atk": 3288798,
                    "chipsCount": 100,
                    "eeBestScore": null,
                    "name": "RABBIT5",
                    "relicCores": 220,
                    "transmuteCores": 34
                },
                "29904762": {
                    "atk": 1837885,
                    "chipsCount": 38,
                    "eeBestScore": null,
                    "name": "Cheeselife",
                    "relicCores": 134,
                    "transmuteCores": 45
                },
                "30658936": {
                    "atk": 2479047,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "Gritchen",
                    "relicCores": 188,
                    "transmuteCores": 30
                },
                "32556489": {
                    "atk": 1913578,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "Bensayyten",
                    "relicCores": 83,
                    "transmuteCores": 14
                },
                "35869301": {
                    "atk": 3121495,
                    "chipsCount": 133,
                    "eeBestScore": null,
                    "name": "Toddlerr",
                    "relicCores": 274,
                    "transmuteCores": 28
                },
                "36484758": {
                    "atk": 2222589,
                    "chipsCount": 12,
                    "eeBestScore": null,
                    "name": "Belthazar",
                    "relicCores": 95,
                    "transmuteCores": 6
                },
                "41742773": {
                    "atk": 1746663,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "MadameMischief",
                    "relicCores": 174,
                    "transmuteCores": 0
                },
                "51071110": {
                    "atk": 2446603,
                    "chipsCount": 42,
                    "eeBestScore": null,
                    "name": "samwise08",
                    "relicCores": 137,
                    "transmuteCores": 34
                },
                "59566866": {
                    "atk": 2448743,
                    "chipsCount": 59,
                    "eeBestScore": null,
                    "name": "FlyingDutchy",
                    "relicCores": 171,
                    "transmuteCores": 7
                },
                "60687252": {
                    "atk": 4106124,
                    "chipsCount": 218,
                    "eeBestScore": null,
                    "name": "һan",
                    "relicCores": 383,
                    "transmuteCores": 64
                },
                "64676255": {
                    "atk": 2530870,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "盾Heathcliff剣",
                    "relicCores": 159,
                    "transmuteCores": 28
                },
                "66607264": {
                    "atk": 2609104,
                    "chipsCount": 40,
                    "eeBestScore": null,
                    "name": "Player 66607264",
                    "relicCores": 169,
                    "transmuteCores": 30
                },
                "70603922": {
                    "atk": 2019774,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "BlackFlamE",
                    "relicCores": 138,
                    "transmuteCores": 2
                },
                "71028860": {
                    "atk": 2195453,
                    "chipsCount": 36,
                    "eeBestScore": null,
                    "name": "Rzzza",
                    "relicCores": 143,
                    "transmuteCores": 20
                },
                "72894129": {
                    "atk": 2446139,
                    "chipsCount": 101,
                    "eeBestScore": null,
                    "name": "NeonCBV",
                    "relicCores": 172,
                    "transmuteCores": 52
                },
                "75174428": {
                    "atk": 2424812,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "PastalaVista",
                    "relicCores": 192,
                    "transmuteCores": 12
                },
                "79510960": {
                    "atk": 2068703,
                    "chipsCount": 60,
                    "eeBestScore": null,
                    "name": "theLP",
                    "relicCores": 190,
                    "transmuteCores": 3
                },
                "80018314": {
                    "atk": 2030030,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "Player 80018314",
                    "relicCores": 185,
                    "transmuteCores": 3
                },
                "80972473": {
                    "atk": 3254855,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "Cunner88",
                    "relicCores": 182,
                    "transmuteCores": 44
                },
                "83339881": {
                    "atk": 3646135,
                    "chipsCount": 160,
                    "eeBestScore": null,
                    "name": "Fl3xas",
                    "relicCores": 305,
                    "transmuteCores": 72
                },
                "83861839": {
                    "atk": 2371967,
                    "chipsCount": 54,
                    "eeBestScore": null,
                    "name": "groggen",
                    "relicCores": 121,
                    "transmuteCores": 34
                },
                "87244358": {
                    "atk": 3164814,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "神Sterben死",
                    "relicCores": 208,
                    "transmuteCores": 42
                },
                "87954282": {
                    "atk": 2657971,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "SngphO",
                    "relicCores": 220,
                    "transmuteCores": 72
                },
                "88203044": {
                    "atk": 2376385,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "p88203044",
                    "relicCores": 131,
                    "transmuteCores": 25
                },
                "89511116": {
                    "atk": 2232557,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "EMBALOCO",
                    "relicCores": 190,
                    "transmuteCores": 18
                }
            },
            "name": "Freedomˢᵗʳᵃʸ",
            "totalAtk": 79544151,
            "totalChips": 2410,
            "totalEe": null,
            "totalRelicCores": 5763,
            "totalTransmuteCores": 1079
        },
        "75967": {
            "clanId": 75967,
            "lunarPoints": 1470,
            "members": {
                "100136261": {
                    "atk": 2594856,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "CGㅣ§∆NT¥",
                    "relicCores": 161,
                    "transmuteCores": 34
                },
                "102135381": {
                    "atk": 1921383,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "CGㅣAldebaran",
                    "relicCores": 116,
                    "transmuteCores": 10
                },
                "106080946": {
                    "atk": 2277553,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "CGㅣBerlin",
                    "relicCores": 104,
                    "transmuteCores": 25
                },
                "110908912": {
                    "atk": 2126386,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "NanoBasurto",
                    "relicCores": 137,
                    "transmuteCores": 24
                },
                "112953209": {
                    "atk": 1342366,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "CG|valdez",
                    "relicCores": 74,
                    "transmuteCores": 8
                },
                "115363362": {
                    "atk": 1943873,
                    "chipsCount": 18,
                    "eeBestScore": null,
                    "name": "101PN",
                    "relicCores": 183,
                    "transmuteCores": 8
                },
                "24399697": {
                    "atk": 2002522,
                    "chipsCount": 43,
                    "eeBestScore": null,
                    "name": "Trollinos",
                    "relicCores": 155,
                    "transmuteCores": 10
                },
                "27310844": {
                    "atk": 1237984,
                    "chipsCount": 21,
                    "eeBestScore": null,
                    "name": "Mynick",
                    "relicCores": 108,
                    "transmuteCores": 5
                },
                "28737379": {
                    "atk": 2315908,
                    "chipsCount": 39,
                    "eeBestScore": null,
                    "name": "ብIKජ",
                    "relicCores": 175,
                    "transmuteCores": 3
                },
                "31491745": {
                    "atk": 1877560,
                    "chipsCount": 11,
                    "eeBestScore": null,
                    "name": "Zneazel",
                    "relicCores": 242,
                    "transmuteCores": 3
                },
                "34886240": {
                    "atk": 1695539,
                    "chipsCount": 72,
                    "eeBestScore": null,
                    "name": "Warmazor",
                    "relicCores": 156,
                    "transmuteCores": 0
                },
                "37529085": {
                    "atk": 2409773,
                    "chipsCount": 44,
                    "eeBestScore": null,
                    "name": "Rhaegar.",
                    "relicCores": 177,
                    "transmuteCores": 20
                },
                "38751557": {
                    "atk": 1994670,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "CGㅣleon500☠️",
                    "relicCores": 120,
                    "transmuteCores": 20
                },
                "44986987": {
                    "atk": 3142374,
                    "chipsCount": 81,
                    "eeBestScore": null,
                    "name": "CGㅣKingDaster",
                    "relicCores": 219,
                    "transmuteCores": 38
                },
                "45419272": {
                    "atk": 2161477,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "Tpita19",
                    "relicCores": 160,
                    "transmuteCores": 13
                },
                "48312527": {
                    "atk": 1766176,
                    "chipsCount": 25,
                    "eeBestScore": null,
                    "name": "elejota",
                    "relicCores": 97,
                    "transmuteCores": 3
                },
                "50104880": {
                    "atk": 2398725,
                    "chipsCount": 24,
                    "eeBestScore": null,
                    "name": "ΔĐㅣJanoKlu",
                    "relicCores": 215,
                    "transmuteCores": 20
                },
                "50822503": {
                    "atk": 1944241,
                    "chipsCount": 19,
                    "eeBestScore": null,
                    "name": "SantiagoxD",
                    "relicCores": 167,
                    "transmuteCores": 5
                },
                "58300904": {
                    "atk": 2503564,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "Zkyβluєㅣ",
                    "relicCores": 160,
                    "transmuteCores": 34
                },
                "61811129": {
                    "atk": 2595430,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "CGㅣmaac180782☠",
                    "relicCores": 187,
                    "transmuteCores": 54
                },
                "63729732": {
                    "atk": 2370759,
                    "chipsCount": 75,
                    "eeBestScore": null,
                    "name": "CGㅣYunnan",
                    "relicCores": 156,
                    "transmuteCores": 20
                },
                "69169004": {
                    "atk": 2727986,
                    "chipsCount": 57,
                    "eeBestScore": null,
                    "name": "jabaly",
                    "relicCores": 211,
                    "transmuteCores": 10
                },
                "71776979": {
                    "atk": 2345019,
                    "chipsCount": 58,
                    "eeBestScore": null,
                    "name": "Sans_007",
                    "relicCores": 213,
                    "transmuteCores": 3
                },
                "77081513": {
                    "atk": 3142610,
                    "chipsCount": 91,
                    "eeBestScore": null,
                    "name": "CGㅣMaax17",
                    "relicCores": 190,
                    "transmuteCores": 34
                },
                "77631839": {
                    "atk": 2149031,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "#InvalidName",
                    "relicCores": 132,
                    "transmuteCores": 20
                },
                "78159260": {
                    "atk": 2516712,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "CGㅣGuille",
                    "relicCores": 150,
                    "transmuteCores": 30
                },
                "78525520": {
                    "atk": 2762765,
                    "chipsCount": 61,
                    "eeBestScore": null,
                    "name": "CGㅣVlcHudson☠",
                    "relicCores": 151,
                    "transmuteCores": 38
                },
                "79176355": {
                    "atk": 2431351,
                    "chipsCount": 50,
                    "eeBestScore": null,
                    "name": "Laura801",
                    "relicCores": 145,
                    "transmuteCores": 40
                },
                "79563946": {
                    "atk": 1936988,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "CGㅣTHE_CABE",
                    "relicCores": 188,
                    "transmuteCores": 9
                },
                "80435029": {
                    "atk": 2536982,
                    "chipsCount": 13,
                    "eeBestScore": null,
                    "name": "MariOKozZ",
                    "relicCores": 168,
                    "transmuteCores": 5
                },
                "80573089": {
                    "atk": 1909304,
                    "chipsCount": 34,
                    "eeBestScore": null,
                    "name": "ÐOЯ1TOS",
                    "relicCores": 134,
                    "transmuteCores": 6
                },
                "81657850": {
                    "atk": 2302926,
                    "chipsCount": 127,
                    "eeBestScore": null,
                    "name": "CGㅣMalberth",
                    "relicCores": 144,
                    "transmuteCores": 60
                },
                "82508187": {
                    "atk": 1518700,
                    "chipsCount": 63,
                    "eeBestScore": null,
                    "name": "kissing",
                    "relicCores": 115,
                    "transmuteCores": 24
                },
                "82542515": {
                    "atk": 2021447,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "♡MorOnEs♡",
                    "relicCores": 110,
                    "transmuteCores": 11
                },
                "84552298": {
                    "atk": 1879286,
                    "chipsCount": 27,
                    "eeBestScore": null,
                    "name": "CGㅣꪜanHalen☠",
                    "relicCores": 126,
                    "transmuteCores": 15
                },
                "84882732": {
                    "atk": 3402381,
                    "chipsCount": 85,
                    "eeBestScore": null,
                    "name": "CGㅣSkrop☠︎",
                    "relicCores": 202,
                    "transmuteCores": 42
                },
                "87919606": {
                    "atk": 2433385,
                    "chipsCount": 26,
                    "eeBestScore": null,
                    "name": "CGㅣGodQuiroz",
                    "relicCores": 138,
                    "transmuteCores": 17
                },
                "88866561": {
                    "atk": 1386851,
                    "chipsCount": 5,
                    "eeBestScore": null,
                    "name": "GDante",
                    "relicCores": 133,
                    "transmuteCores": 12
                },
                "89038625": {
                    "atk": 1725018,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "ØSRξVξЯ",
                    "relicCores": 151,
                    "transmuteCores": 6
                }
            },
            "name": "CrossGuildㆍ☠︎︎",
            "totalAtk": 71322381,
            "totalChips": 1747,
            "totalEe": null,
            "totalRelicCores": 5100,
            "totalTransmuteCores": 706
        },
        "77606": {
            "clanId": 77606,
            "lunarPoints": 1565,
            "members": {
                "115723090": {
                    "atk": 2212,
                    "chipsCount": 0,
                    "eeBestScore": null,
                    "name": "Kimberlyada jack",
                    "relicCores": 0,
                    "transmuteCores": 0
                },
                "12860092": {
                    "atk": 2291475,
                    "chipsCount": 10,
                    "eeBestScore": null,
                    "name": "또둑스",
                    "relicCores": 129,
                    "transmuteCores": 29
                },
                "15231129": {
                    "atk": 2329202,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "ᵀᴷ냐야옹",
                    "relicCores": 250,
                    "transmuteCores": 54
                },
                "28179724": {
                    "atk": 2589956,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "ᵀᴷ오페라",
                    "relicCores": 86,
                    "transmuteCores": 10
                },
                "31157068": {
                    "atk": 3147348,
                    "chipsCount": 121,
                    "eeBestScore": null,
                    "name": "ᵀᴷ헬리오",
                    "relicCores": 383,
                    "transmuteCores": 54
                },
                "32519602": {
                    "atk": 2553367,
                    "chipsCount": 52,
                    "eeBestScore": null,
                    "name": "ᵀᴷㅇPM",
                    "relicCores": 198,
                    "transmuteCores": 17
                },
                "35194116": {
                    "atk": 2603227,
                    "chipsCount": 47,
                    "eeBestScore": null,
                    "name": "ᵀᴷ머씬건",
                    "relicCores": 184,
                    "transmuteCores": 21
                },
                "39713673": {
                    "atk": 2787918,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "ᵀᴷ흠배",
                    "relicCores": 261,
                    "transmuteCores": 12
                },
                "39864782": {
                    "atk": 4121930,
                    "chipsCount": 163,
                    "eeBestScore": null,
                    "name": "ᵀᴷ혼돈",
                    "relicCores": 303,
                    "transmuteCores": 72
                },
                "40100089": {
                    "atk": 2660356,
                    "chipsCount": 41,
                    "eeBestScore": null,
                    "name": "ᵀᴷ용용이",
                    "relicCores": 163,
                    "transmuteCores": 34
                },
                "41662587": {
                    "atk": 2414163,
                    "chipsCount": 23,
                    "eeBestScore": null,
                    "name": "ᵀᴷ킬러행님",
                    "relicCores": 128,
                    "transmuteCores": 42
                },
                "41731898": {
                    "atk": 3057262,
                    "chipsCount": 90,
                    "eeBestScore": null,
                    "name": "ᵀᴷ꾹밥",
                    "relicCores": 197,
                    "transmuteCores": 44
                },
                "42673679": {
                    "atk": 2845383,
                    "chipsCount": 80,
                    "eeBestScore": null,
                    "name": "ᵀᴷ동~라~",
                    "relicCores": 190,
                    "transmuteCores": 50
                },
                "42723973": {
                    "atk": 4825974,
                    "chipsCount": 307,
                    "eeBestScore": null,
                    "name": "ᵀᴷArt별땅",
                    "relicCores": 374,
                    "transmuteCores": 98
                },
                "43630589": {
                    "atk": 3240155,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "ᵀᴷ준서사랑",
                    "relicCores": 215,
                    "transmuteCores": 58
                },
                "43749112": {
                    "atk": 2879657,
                    "chipsCount": 82,
                    "eeBestScore": null,
                    "name": "ᵀᴷ감자",
                    "relicCores": 240,
                    "transmuteCores": 24
                },
                "44367427": {
                    "atk": 2369510,
                    "chipsCount": 37,
                    "eeBestScore": null,
                    "name": "ᵀᴷㅇI한결",
                    "relicCores": 144,
                    "transmuteCores": 30
                },
                "45059766": {
                    "atk": 2827928,
                    "chipsCount": 51,
                    "eeBestScore": null,
                    "name": "ᵀᴷ낙지탕탕",
                    "relicCores": 139,
                    "transmuteCores": 26
                },
                "48749881": {
                    "atk": 1725709,
                    "chipsCount": 46,
                    "eeBestScore": null,
                    "name": "ᵀᴷ빠따",
                    "relicCores": 151,
                    "transmuteCores": 16
                },
                "50687731": {
                    "atk": 2864835,
                    "chipsCount": 69,
                    "eeBestScore": null,
                    "name": "ᵀᴷ열무",
                    "relicCores": 168,
                    "transmuteCores": 42
                },
                "55794527": {
                    "atk": 2014077,
                    "chipsCount": 31,
                    "eeBestScore": null,
                    "name": "ᵀᴷ몽뚜",
                    "relicCores": 112,
                    "transmuteCores": 0
                },
                "56003668": {
                    "atk": 2227698,
                    "chipsCount": 74,
                    "eeBestScore": null,
                    "name": "세월가면",
                    "relicCores": 177,
                    "transmuteCores": 44
                },
                "57454633": {
                    "atk": 4171464,
                    "chipsCount": 181,
                    "eeBestScore": null,
                    "name": "ᵀᴷ영원",
                    "relicCores": 325,
                    "transmuteCores": 76
                },
                "57905986": {
                    "atk": 3583472,
                    "chipsCount": 116,
                    "eeBestScore": null,
                    "name": "ᵀᴷ파괴",
                    "relicCores": 234,
                    "transmuteCores": 30
                },
                "58038821": {
                    "atk": 2701909,
                    "chipsCount": 70,
                    "eeBestScore": null,
                    "name": "ᵀᴷ구고",
                    "relicCores": 147,
                    "transmuteCores": 20
                },
                "59349861": {
                    "atk": 2917811,
                    "chipsCount": 103,
                    "eeBestScore": null,
                    "name": "별땅　",
                    "relicCores": 99,
                    "transmuteCores": 40
                },
                "59940694": {
                    "atk": 2506048,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "ᵀᴷ홍춘이",
                    "relicCores": 166,
                    "transmuteCores": 7
                },
                "62398391": {
                    "atk": 3794929,
                    "chipsCount": 210,
                    "eeBestScore": null,
                    "name": "ᵀᴷ조은데이",
                    "relicCores": 333,
                    "transmuteCores": 68
                },
                "65760206": {
                    "atk": 2554372,
                    "chipsCount": 45,
                    "eeBestScore": null,
                    "name": "ᵀᴷ럭키",
                    "relicCores": 142,
                    "transmuteCores": 45
                },
                "66700131": {
                    "atk": 3145687,
                    "chipsCount": 117,
                    "eeBestScore": null,
                    "name": "ᵀᴷ앤더슨",
                    "relicCores": 196,
                    "transmuteCores": 44
                },
                "69713978": {
                    "atk": 3096264,
                    "chipsCount": 87,
                    "eeBestScore": null,
                    "name": "ᵀᴷ움티티티",
                    "relicCores": 208,
                    "transmuteCores": 63
                },
                "73254348": {
                    "atk": 3866934,
                    "chipsCount": 246,
                    "eeBestScore": null,
                    "name": "ᵀᴷ머피",
                    "relicCores": 254,
                    "transmuteCores": 92
                },
                "74522640": {
                    "atk": 2067432,
                    "chipsCount": 99,
                    "eeBestScore": null,
                    "name": "ᵀᴷ티모",
                    "relicCores": 193,
                    "transmuteCores": 29
                },
                "80648208": {
                    "atk": 2648685,
                    "chipsCount": 77,
                    "eeBestScore": null,
                    "name": "☆땅",
                    "relicCores": 99,
                    "transmuteCores": 50
                },
                "81822450": {
                    "atk": 3541685,
                    "chipsCount": 161,
                    "eeBestScore": null,
                    "name": "ᵀᴷ열정",
                    "relicCores": 215,
                    "transmuteCores": 76
                },
                "83124306": {
                    "atk": 3389649,
                    "chipsCount": 71,
                    "eeBestScore": null,
                    "name": "ᵀᴷ레이",
                    "relicCores": 210,
                    "transmuteCores": 76
                },
                "83448387": {
                    "atk": 3499858,
                    "chipsCount": 131,
                    "eeBestScore": null,
                    "name": "ᵀᴷArt지키",
                    "relicCores": 240,
                    "transmuteCores": 59
                },
                "84855686": {
                    "atk": 3346017,
                    "chipsCount": 79,
                    "eeBestScore": null,
                    "name": "ᵀᴷRedBlood",
                    "relicCores": 232,
                    "transmuteCores": 68
                }
            },
            "name": "TANK",
            "totalAtk": 94184243,
            "totalChips": 3217,
            "totalEe": null,
            "totalRelicCores": 6693,
            "totalTransmuteCores": 1538
        }
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lunarDetails };
}

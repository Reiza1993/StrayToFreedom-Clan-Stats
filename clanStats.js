// clanStats.js
// Freedomˢᵗʳᵃʸ Clan Statistics
// Last Updated: 8/01 - LME #28 Added

const clanStats = {
    // Basic clan information
    clanName: "Freedomˢᵗʳᵃʸ",
    clanId: "44262",
    
    // Current LME information
    lmePhase: "26.3K+",
    lmeDifficulty: 11,
    lmeLeague: "Champion",
    lunarPoints: 1205,
    
    // Clan totals
    totalMembers: "38/40",
    totalCores: "3125+",
    totalAttack: "35.02M",
    averageAttack: "1.16M",
    
    // Leadership
    leader: "神Sterben死",
    viceLeaders: ["Lemminkäinen", "Cunner88"],
    
    // Alumni count
    alumniCount: 50
};

// LME History Data
const lmeHistory = [
    {
        lmeNumber: 28,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 4,
        medals: 26237,
        league: "Legend 3"
    },
    {
        lmeNumber: 27,
        rank: 3,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank3.png",
        atkDefPoints: 3,
        medals: 63099,
        league: "Champion"
    },
             {
        lmeNumber: 26,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 4,
        medals: 48603,
        league: "Legend 3"
    },
             {
        lmeNumber: 25,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 3,
        medals: 61547,
        league: "Champion"
    },
             {
        lmeNumber: 24,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 4,
        medals: 47265,
        league: "Legend 3"
    },
             {
        lmeNumber: 23,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 6,
        medals: 36390,
        league: "Legend 3"
    },
             {
        lmeNumber: 22,
        rank: 4,
        rankImage: null,
        atkDefPoints: 1,
        medals: 42989,
        league: "Champion"
    },
             {
        lmeNumber: 21,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 4,
        medals: 49188,
        league: "Legend 3"
    },
            {
        lmeNumber: 20,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 4,
        medals: 41983,
        league: "Legend 3"
    },
            {
        lmeNumber: 19,
        rank: 3,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank3.png",
        atkDefPoints: 3,
        medals: 51199,
        league: "Legend 3"
    },
        {
        lmeNumber: 18,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 6,
        medals: 71035,
        league: "Legend 2"
    },
    {
        lmeNumber: 17,
        rank: 3,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank3.png",
        atkDefPoints: 3,
        medals: 39799,
        league: "Legend 2"
    },
    {
        lmeNumber: 16,
        rank: 4,
        rankImage: null,
        atkDefPoints: 2,
        medals: 47526,
        league: "Legend 3"
    },
    {
        lmeNumber: 15,
        rank: 3,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank3.png",
        atkDefPoints: 2,
        medals: 36313,
        league: "Legend 3"
    },
    {
        lmeNumber: 14,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 6,
        medals: 59426,
        league: "Legend 2"
    },
    {
        lmeNumber: 13,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 6,
        medals: 90401,
        league: "Legend 1"
    },
    {
        lmeNumber: 12,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 6,
        medals: 270207,
        league: "Legend 1"
    },
    {
        lmeNumber: 11,
        rank: 3,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank3.png",
        atkDefPoints: 4,
        medals: 105780,
        league: "Legend 1"
    },
    {
        lmeNumber: 10,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 5,
        medals: 206524,
        league: "Legend 1"
    },
    {
        lmeNumber: 9,
        rank: 4,
        rankImage: null,
        atkDefPoints: 2,
        medals: 32043,
        league: "Legend 1"
    },
    {
        lmeNumber: 8,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 5,
        medals: 86771,
        league: "Elite 3"
    },
    {
        lmeNumber: 7,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 6,
        medals: 122736,
        league: "Elite 3"
    },
    {
        lmeNumber: 6,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 5,
        medals: 115671,
        league: "Elite 2"
    },
    {
        lmeNumber: 5,
        rank: 2,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank2.png",
        atkDefPoints: 3,
        medals: 65415,
        league: "Elite 3"
    },
    {
        lmeNumber: 4,
        rank: 3,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank3.png",
        atkDefPoints: 3,
        medals: 82682,
        league: "Elite 2"
    },
    {
        lmeNumber: 3,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 4,
        medals: 88238,
        league: "Elite 2"
    },
    {
        lmeNumber: 2,
        rank: 4,
        rankImage: null,
        atkDefPoints: 2,
        medals: 53456,
        league: "Elite 2"
    },
    {
        lmeNumber: 1,
        rank: 1,
        rankImage: "https://raw.githubusercontent.com/Reiza1993/StrayToFreedom-Clan-Stats/main/Game%20Icons/Rank1.png",
        atkDefPoints: 3,
        medals: 99415,
        league: "Elite 1"
    }
];

// Alumni members list
const alumniMembers = [
    "Dylan0001", "porfiaak", "espadin22", "thatmanisgey", "YeezyLord", "moonkyy",
    "tonserlars", "khoprademon", "offBait", "j__d1", "13mpty", "bol4nd3ng",
    "mo265489", "Demoncracy", "StrayKucsika97", "D1L3R_PL", "4nd333", "hiimnhat",
    "Ruzagi", "NarutoUzuma", "ByRess", "Beef4Brains", "E-Duke", "bluebirds123456",
    "2xc3", "Chumuzuke", "Coopet", "StrayCleow:)", "starbin",
    "BOBBYJANG", "slaterhoㅣStray", "lct404", "CrackJackㅣStray", "stray|alfred",
    "Cunner", "Shadowage", "HideOnBushs", "Asdgner", "GentleMonster","ꕤSettꕤ", "playerxd", 
    "AleisterCrowley", "Szoj","Player 58934337","OsG","Slaterho","CheesyBreadSticks","KusoYaroo","cocacandy","chiknstrip",
];

// CX Color settings
const cxSettings = {
    topScore: 2600,
    greenThreshold: 0.7,  // 70% of top score
    yellowThreshold: 0.4  // 40% of top score
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { clanStats, alumniMembers, lmeHistory, cxSettings };
}

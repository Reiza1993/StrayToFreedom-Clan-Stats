// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics  
// Last Updated: Week 39 - February 2026 (CX Score Update + LME Update + New Members: KingRizzle, fesl)

const playerData = [
    { name: "神Sterben死", cores: "160+", attack: 1956500, coresNum: 160, role: "Leader", lmeScore: 2133, lmeGain: "(+33)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+60.8K)" },
    { name: "Cunner88", cores: "145+", attack: 1814300, coresNum: 145, role: "Vice-Leader", lmeScore: 1843, lmeGain: "(-69)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "PastalaVista", cores: "135+", attack: 1465500, coresNum: 135, role: "Member", lmeScore: 1607, lmeGain: "(+29)", cxScore: 1200, cxGain: "(+400)", coresGain: "(+5)", attackGain: "(+20.4K)" },
    { name: "Gritchen", cores: "135+", attack: 1453000, coresNum: 135, role: "Glory Member", lmeScore: 1127, lmeGain: "(+149)", cxScore: 1200, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+23.1K)" },
    { name: "命Waiora癒", cores: "140+", attack: 1373500, coresNum: 140, role: "Member", lmeScore: 1521, lmeGain: "(+15)", cxScore: 1200, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "MMM|Mina475", cores: "105+", attack: 1369700, coresNum: 105, role: "Member", lmeScore: 967, lmeGain: "(+97)", cxScore: 600, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+62.0K)" },
    { name: "盾Heathcliff剣", cores: "140+", attack: 1340200, coresNum: 140, role: "Member", lmeScore: 1582, lmeGain: "(+63)", cxScore: 1100, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "TieForFirstYo", cores: "100+", attack: 1282200, coresNum: 100, role: "Glory Member", lmeScore: 1304, lmeGain: "(+285)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "145+", attack: 1252900, coresNum: 145, role: "Member", lmeScore: 1215, lmeGain: "(+131)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+18.9K)" },
    { name: "bimbabo", cores: "145+", attack: 1219800, coresNum: 145, role: "Member", lmeScore: 893, lmeGain: "(+42)", cxScore: 300, cxGain: "(+100)", coresGain: "(+10)", attackGain: "(+87.6K)" },
    { name: "MrPlusUltra", cores: "100+", attack: 1178200, coresNum: 100, role: "Member", lmeScore: 910, lmeGain: "(+910)", cxScore: 200, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "EMBALOCO", cores: "130+", attack: 1177300, coresNum: 130, role: "Member", lmeScore: 849, lmeGain: "(+38)", cxScore: 1300, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+14.6K)" },
    { name: "BobBobberson", cores: "100+", attack: 1158600, coresNum: 100, role: "Member", lmeScore: 805, lmeGain: "(+45)", cxScore: 1200, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+42.9K)" },
    { name: "HakiLuffy", cores: "120+", attack: 1111200, coresNum: 120, role: "Member", lmeScore: 1259, lmeGain: "(+166)", cxScore: 1300, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+22.8K)" },
    { name: "魂Hobin357死", cores: "90+", attack: 1089500, coresNum: 90, role: "Glory Member", lmeScore: 730, lmeGain: "(-42)", cxScore: 1200, cxGain: "(+200)", coresGain: "(+10)", attackGain: "(+0)" },
    { name: "HonoraryCurve51", cores: "125+", attack: 1085700, coresNum: 125, role: "Member", lmeScore: 822, lmeGain: "(+23)", cxScore: 500, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+600)" },
    { name: "HJF1948ㅣStray", cores: "90+", attack: 1060600, coresNum: 90, role: "Member", lmeScore: 759, lmeGain: "(-10)", cxScore: 300, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+29.5K)" },
    { name: "Epic|Win", cores: "65+", attack: 1056500, coresNum: 65, role: "Member", lmeScore: 603, lmeGain: "(+17)", cxScore: 1100, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+11.0K)" },
    { name: "Player 66607264", cores: "110+", attack: 1051900, coresNum: 110, role: "Member", lmeScore: 889, lmeGain: "(+36)", cxScore: 1200, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+65.6K)" },
    { name: "SUJAY", cores: "130+", attack: 1050800, coresNum: 130, role: "Member", lmeScore: 714, lmeGain: "(-31)", cxScore: 0, cxGain: "(+0)", coresGain: "(+20)", attackGain: "(+0)" },
    { name: "Belthazar", cores: "80+", attack: 1038300, coresNum: 80, role: "Member", lmeScore: 646, lmeGain: "(+39)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+10.6K)" },
    { name: "Rzzza", cores: "85+", attack: 1035300, coresNum: 85, role: "Member", lmeScore: 796, lmeGain: "(+69)", cxScore: 1100, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+64.4K)" },
    { name: "b0ss", cores: "95+", attack: 977300, coresNum: 95, role: "Member", lmeScore: 813, lmeGain: "(+32)", cxScore: 1100, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+16.4K)" },
    { name: "N0M3rcy", cores: "85+", attack: 975100, coresNum: 85, role: "Member", lmeScore: 619, lmeGain: "(+16)", cxScore: 1100, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+900)" },
    { name: "Lemminkäinen", cores: "80+", attack: 953900, coresNum: 80, role: "Vice-Leader", lmeScore: 817, lmeGain: "(+99)", cxScore: 1300, cxGain: "(+300)", coresGain: "(+10)", attackGain: "(+19.7K)" },
    { name: "lguinily", cores: "100+", attack: 953000, coresNum: 100, role: "Member", lmeScore: 583, lmeGain: "(+583)", cxScore: 1400, cxGain: "(+500)", coresGain: "(+5)", attackGain: "(+39.4K)" },
    { name: "Hiryu69", cores: "80+", attack: 947500, coresNum: 80, role: "Member", lmeScore: 0, lmeGain: "(+0)", cxScore: 400, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.8K)" },
    { name: "Phlay", cores: "75+", attack: 937900, coresNum: 75, role: "Member", lmeScore: 553, lmeGain: "(+19)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+21.0K)" },
    { name: "groggen", cores: "80+", attack: 905000, coresNum: 80, role: "Member", lmeScore: 687, lmeGain: "(+46)", cxScore: 1400, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+15.3K)" },
    { name: "6J4", cores: "55+", attack: 889700, coresNum: 55, role: "Member", lmeScore: 596, lmeGain: "(+13)", cxScore: 400, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+23.1K)" },
    { name: "WeirdPlays", cores: "65+", attack: 887300, coresNum: 65, role: "Member", lmeScore: 603, lmeGain: "(+14)", cxScore: 700, cxGain: "(+100)", coresGain: "(+10)", attackGain: "(+23.4K)" },
    { name: "Mclovin404", cores: "55+", attack: 796800, coresNum: 55, role: "Member", lmeScore: 592, lmeGain: "(+10)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+1.5K)" },
    { name: "mc2084", cores: "30+", attack: 734400, coresNum: 30, role: "Member", lmeScore: 563, lmeGain: "(+17)", cxScore: 1300, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+3.9K)" },
    { name: "swifft", cores: "60+", attack: 708600, coresNum: 60, role: "Member", lmeScore: 601, lmeGain: "(+13)", cxScore: 200, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+1.7K)" },
    { name: "HannaM", cores: "50+", attack: 701200, coresNum: 50, role: "Member", lmeScore: 618, lmeGain: "(+23)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Pookaz", cores: "45+", attack: 695100, coresNum: 45, role: "Member", lmeScore: 523, lmeGain: "(+56)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+20.6K)" },
    { name: "Player 78792329", cores: "90+", attack: 666900, coresNum: 90, role: "Member", lmeScore: 566, lmeGain: "(-4)", cxScore: 1200, cxGain: "(+400)", coresGain: "(+15)", attackGain: "(+38.1K)" },
    { name: "Bensayyten", cores: "TBD", attack: 0, coresNum: 0, role: "Member", lmeScore: 603, lmeGain: "(+603)", cxScore: 200, cxGain: "(+200)", coresGain: "", attackGain: "" },
    { name: "KingRizzle", cores: "TBD", attack: 0, coresNum: 0, role: "Member", lmeScore: 757, lmeGain: "(+757)", cxScore: 0, cxGain: "(+0)", coresGain: "", attackGain: "" },
    { name: "fesl", cores: "TBD", attack: 0, coresNum: 0, role: "Member", lmeScore: 659, lmeGain: "(+659)", cxScore: 0, cxGain: "(+0)", coresGain: "", attackGain: "" },
];

// CX Color settings
// Update topScore whenever the highest CX score in the clan changes
const cxSettings = {
    topScore: 1400,
    greenThreshold: 0.7,  // 70% of top score → green
    yellowThreshold: 0.4  // 40% of top score → yellow (below = red)
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData, cxSettings };
}

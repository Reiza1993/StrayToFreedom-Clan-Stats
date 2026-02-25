// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics  
// Last Updated: Week 40 - February 2026 (ATK + Relic Cores Update)

const playerData = [
    { name: "神Sterben死", cores: "165+", attack: 1961500, coresNum: 165, role: "Leader", lmeScore: 2133, lmeGain: "(+33)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+5.0K)" },
    { name: "Cunner88", cores: "150+", attack: 1814300, coresNum: 150, role: "Vice-Leader", lmeScore: 1843, lmeGain: "(-69)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "PastalaVista", cores: "135+", attack: 1471700, coresNum: 135, role: "Member", lmeScore: 1607, lmeGain: "(+29)", cxScore: 1200, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+6.2K)" },
    { name: "Gritchen", cores: "140+", attack: 1609300, coresNum: 140, role: "Glory Member", lmeScore: 1127, lmeGain: "(+149)", cxScore: 1200, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+156.3K)" },
    { name: "命Waiora癒", cores: "140+", attack: 1373500, coresNum: 140, role: "Member", lmeScore: 1521, lmeGain: "(+15)", cxScore: 1200, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "MMM|Mina475", cores: "110+", attack: 1378800, coresNum: 110, role: "Member", lmeScore: 967, lmeGain: "(+97)", cxScore: 600, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+9.1K)" },
    { name: "盾Heathcliff剣", cores: "140+", attack: 1340200, coresNum: 140, role: "Member", lmeScore: 1582, lmeGain: "(+63)", cxScore: 1100, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "TieForFirstYo", cores: "100+", attack: 1282200, coresNum: 100, role: "Glory Member", lmeScore: 1304, lmeGain: "(+285)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "150+", attack: 1422700, coresNum: 150, role: "Member", lmeScore: 1215, lmeGain: "(+131)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+169.8K)" },
    { name: "HakiLuffy", cores: "120+", attack: 1257600, coresNum: 120, role: "Member", lmeScore: 1259, lmeGain: "(+166)", cxScore: 1300, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+146.4K)" },
    { name: "bimbabo", cores: "145+", attack: 1223700, coresNum: 145, role: "Member", lmeScore: 893, lmeGain: "(+42)", cxScore: 300, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+3.9K)" },
    { name: "EMBALOCO", cores: "135+", attack: 1195100, coresNum: 135, role: "Member", lmeScore: 849, lmeGain: "(+38)", cxScore: 1300, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+17.8K)" },
    { name: "MrPlusUltra", cores: "100+", attack: 1191600, coresNum: 100, role: "Member", lmeScore: 910, lmeGain: "(+910)", cxScore: 200, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+13.4K)" },
    { name: "BobBobberson", cores: "105+", attack: 1189300, coresNum: 105, role: "Member", lmeScore: 805, lmeGain: "(+45)", cxScore: 1200, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+30.7K)" },
    { name: "HonoraryCurve51", cores: "130+", attack: 1109900, coresNum: 130, role: "Member", lmeScore: 822, lmeGain: "(+23)", cxScore: 500, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+24.2K)" },
    { name: "N0M3rcy", cores: "85+", attack: 1109100, coresNum: 85, role: "Member", lmeScore: 619, lmeGain: "(+16)", cxScore: 1100, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+134.0K)" },
    { name: "魂Hobin357死", cores: "90+", attack: 1095400, coresNum: 90, role: "Glory Member", lmeScore: 730, lmeGain: "(-42)", cxScore: 1200, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+5.9K)" },
    { name: "Player 66607264", cores: "110+", attack: 1091300, coresNum: 110, role: "Member", lmeScore: 889, lmeGain: "(+36)", cxScore: 1200, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+39.4K)" },
    { name: "Epic|Win", cores: "70+", attack: 1064000, coresNum: 70, role: "Member", lmeScore: 603, lmeGain: "(+17)", cxScore: 1100, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+7.5K)" },
    { name: "HJF1948ㅣStray", cores: "90+", attack: 1063600, coresNum: 90, role: "Member", lmeScore: 759, lmeGain: "(-10)", cxScore: 300, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+3.0K)" },
    { name: "SUJAY", cores: "130+", attack: 1062000, coresNum: 130, role: "Member", lmeScore: 714, lmeGain: "(-31)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+11.2K)" },
    { name: "Rzzza", cores: "85+", attack: 1048700, coresNum: 85, role: "Member", lmeScore: 796, lmeGain: "(+69)", cxScore: 1100, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+13.4K)" },
    { name: "Belthazar", cores: "80+", attack: 1041300, coresNum: 80, role: "Member", lmeScore: 646, lmeGain: "(+39)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+3.0K)" },
    { name: "b0ss", cores: "100+", attack: 998700, coresNum: 100, role: "Member", lmeScore: 813, lmeGain: "(+32)", cxScore: 1100, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+21.4K)" },
    { name: "Lemminkäinen", cores: "80+", attack: 993800, coresNum: 80, role: "Vice-Leader", lmeScore: 817, lmeGain: "(+99)", cxScore: 1300, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+39.9K)" },
    { name: "Phlay", cores: "80+", attack: 977400, coresNum: 80, role: "Member", lmeScore: 553, lmeGain: "(+19)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+39.5K)" },
    { name: "lguinily", cores: "100+", attack: 956400, coresNum: 100, role: "Member", lmeScore: 583, lmeGain: "(+583)", cxScore: 1400, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+3.4K)" },
    { name: "fesl", cores: "75+", attack: 956100, coresNum: 75, role: "Member", lmeScore: 659, lmeGain: "(+659)", cxScore: 0, cxGain: "(+0)", coresGain: "(+75)", attackGain: "(+956.1K)" },
    { name: "Hiryu69", cores: "80+", attack: 949200, coresNum: 80, role: "Member", lmeScore: 609, lmeGain: "(+609)", cxScore: 400, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+1.7K)" },
    { name: "groggen", cores: "80+", attack: 916500, coresNum: 80, role: "Member", lmeScore: 687, lmeGain: "(+46)", cxScore: 1400, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+11.5K)" },
    { name: "6J4", cores: "55+", attack: 896300, coresNum: 55, role: "Member", lmeScore: 596, lmeGain: "(+13)", cxScore: 400, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.6K)" },
    { name: "KingRizzle", cores: "90+", attack: 895100, coresNum: 90, role: "Member", lmeScore: 757, lmeGain: "(+757)", cxScore: 0, cxGain: "(+0)", coresGain: "(+90)", attackGain: "(+895.1K)" },
    { name: "WeirdPlays", cores: "65+", attack: 888300, coresNum: 65, role: "Member", lmeScore: 603, lmeGain: "(+14)", cxScore: 700, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+1.0K)" },
    { name: "Bensayyten", cores: "65+", attack: 828900, coresNum: 65, role: "Member", lmeScore: 603, lmeGain: "(+603)", cxScore: 200, cxGain: "(+200)", coresGain: "(+65)", attackGain: "(+828.9K)" },
    { name: "Mclovin404", cores: "55+", attack: 807100, coresNum: 55, role: "Member", lmeScore: 592, lmeGain: "(+10)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+10.3K)" },
    { name: "mc2084", cores: "35+", attack: 784000, coresNum: 35, role: "Member", lmeScore: 563, lmeGain: "(+17)", cxScore: 1300, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+49.6K)" },
    { name: "swifft", cores: "60+", attack: 739900, coresNum: 60, role: "Member", lmeScore: 601, lmeGain: "(+13)", cxScore: 200, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+31.3K)" },
    { name: "Pookaz", cores: "45+", attack: 708100, coresNum: 45, role: "Member", lmeScore: 523, lmeGain: "(+56)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+13.0K)" },
    { name: "HannaM", cores: "50+", attack: 701200, coresNum: 50, role: "Member", lmeScore: 618, lmeGain: "(+23)", cxScore: 1400, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 78792329", cores: "90+", attack: 670600, coresNum: 90, role: "Member", lmeScore: 566, lmeGain: "(-4)", cxScore: 1200, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+3.7K)" },
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

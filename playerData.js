// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics  
// Last Updated: Week 38 - February 2026 (CX Score Update + New Member: Bensayyten)

const playerData = [
    { name: "神Sterben死", cores: "160+", attack: 1956500, coresNum: 160, role: "Leader", lmeScore: 2100, lmeGain: "(+185)", cxScore: 1100, cxGain: "(+700)", coresGain: "(+5)", attackGain: "(+60.8K)" },
    { name: "Cunner88", cores: "145+", attack: 1814300, coresNum: 145, role: "Vice-Leader", lmeScore: 1912, lmeGain: "(+134)", cxScore: 800, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "PastalaVista", cores: "135+", attack: 1465500, coresNum: 135, role: "Member", lmeScore: 1578, lmeGain: "(+104)", cxScore: 800, cxGain: "(+400)", coresGain: "(+5)", attackGain: "(+20.4K)" },
    { name: "Gritchen", cores: "135+", attack: 1453000, coresNum: 135, role: "Glory Member", lmeScore: 978, lmeGain: "(+18)", cxScore: 1100, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+23.1K)" },
    { name: "命Waiora癒", cores: "140+", attack: 1373500, coresNum: 140, role: "Member", lmeScore: 1506, lmeGain: "(+71)", cxScore: 1000, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "MMM|Mina475", cores: "105+", attack: 1369700, coresNum: 105, role: "Member", lmeScore: 870, lmeGain: "(+44)", cxScore: 400, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+62.0K)" },
    { name: "盾Heathcliff剣", cores: "140+", attack: 1340200, coresNum: 140, role: "Member", lmeScore: 1519, lmeGain: "(+8)", cxScore: 1000, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "TieForFirstYo", cores: "100+", attack: 1282200, coresNum: 100, role: "Glory Member", lmeScore: 1019, lmeGain: "(+89)", cxScore: 900, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "145+", attack: 1252900, coresNum: 145, role: "Member", lmeScore: 1084, lmeGain: "(+28)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+18.9K)" },
    { name: "bimbabo", cores: "145+", attack: 1219800, coresNum: 145, role: "Member", lmeScore: 851, lmeGain: "(+88)", cxScore: 200, cxGain: "(+100)", coresGain: "(+10)", attackGain: "(+87.6K)" },
    { name: "MrPlusUltra", cores: "100+", attack: 1178200, coresNum: 100, role: "Member", lmeScore: 0, lmeGain: "(-785)", cxScore: 200, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "EMBALOCO", cores: "130+", attack: 1177300, coresNum: 130, role: "Member", lmeScore: 811, lmeGain: "(+7)", cxScore: 1100, cxGain: "(+800)", coresGain: "(+5)", attackGain: "(+14.6K)" },
    { name: "BobBobberson", cores: "100+", attack: 1158600, coresNum: 100, role: "Member", lmeScore: 760, lmeGain: "(+44)", cxScore: 1000, cxGain: "(+800)", coresGain: "(+0)", attackGain: "(+42.9K)" },
    { name: "HakiLuffy", cores: "120+", attack: 1111200, coresNum: 120, role: "Member", lmeScore: 1093, lmeGain: "(+182)", cxScore: 1100, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+22.8K)" },
    { name: "魂Hobin357死", cores: "90+", attack: 1089500, coresNum: 90, role: "Glory Member", lmeScore: 772, lmeGain: "(+31)", cxScore: 1000, cxGain: "(+500)", coresGain: "(+10)", attackGain: "(+0)" },
    { name: "HonoraryCurve51", cores: "125+", attack: 1085700, coresNum: 125, role: "Member", lmeScore: 799, lmeGain: "(+9)", cxScore: 300, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+600)" },
    { name: "HJF1948ㅣStray", cores: "90+", attack: 1060600, coresNum: 90, role: "Member", lmeScore: 769, lmeGain: "(+62)", cxScore: 200, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+29.5K)" },
    { name: "Epic|Win", cores: "65+", attack: 1056500, coresNum: 65, role: "Member", lmeScore: 586, lmeGain: "(+3)", cxScore: 900, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+11.0K)" },
    { name: "Player 66607264", cores: "110+", attack: 1051900, coresNum: 110, role: "Member", lmeScore: 853, lmeGain: "(+50)", cxScore: 1100, cxGain: "(+800)", coresGain: "(+5)", attackGain: "(+65.6K)" },
    { name: "SUJAY", cores: "130+", attack: 1050800, coresNum: 130, role: "Member", lmeScore: 745, lmeGain: "(+68)", cxScore: 0, cxGain: "(+0)", coresGain: "(+20)", attackGain: "(+0)" },
    { name: "Belthazar", cores: "80+", attack: 1038300, coresNum: 80, role: "Member", lmeScore: 607, lmeGain: "(-1)", cxScore: 1100, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+10.6K)" },
    { name: "Rzzza", cores: "85+", attack: 1035300, coresNum: 85, role: "Member", lmeScore: 727, lmeGain: "(-13)", cxScore: 1000, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+64.4K)" },
    { name: "b0ss", cores: "95+", attack: 977300, coresNum: 95, role: "Member", lmeScore: 781, lmeGain: "(+83)", cxScore: 1000, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+16.4K)" },
    { name: "N0M3rcy", cores: "85+", attack: 975100, coresNum: 85, role: "Member", lmeScore: 603, lmeGain: "(+603)", cxScore: 900, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+900)" },
    { name: "Lemminkäinen", cores: "80+", attack: 953900, coresNum: 80, role: "Vice-Leader", lmeScore: 718, lmeGain: "(+80)", cxScore: 1000, cxGain: "(+500)", coresGain: "(+10)", attackGain: "(+19.7K)" },
    { name: "lguinily", cores: "100+", attack: 953000, coresNum: 100, role: "Member", lmeScore: 0, lmeGain: "(-571)", cxScore: 900, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+39.4K)" },
    { name: "Hiryu69", cores: "80+", attack: 947500, coresNum: 80, role: "Member", lmeScore: 0, lmeGain: "(+0)", cxScore: 400, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+6.8K)" },
    { name: "Phlay", cores: "75+", attack: 937900, coresNum: 75, role: "Member", lmeScore: 534, lmeGain: "(+4)", cxScore: 900, cxGain: "(+400)", coresGain: "(+5)", attackGain: "(+21.0K)" },
    { name: "groggen", cores: "80+", attack: 905000, coresNum: 80, role: "Member", lmeScore: 641, lmeGain: "(+23)", cxScore: 800, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+15.3K)" },
    { name: "6J4", cores: "55+", attack: 889700, coresNum: 55, role: "Member", lmeScore: 583, lmeGain: "(+4)", cxScore: 400, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+23.1K)" },
    { name: "WeirdPlays", cores: "65+", attack: 887300, coresNum: 65, role: "Member", lmeScore: 589, lmeGain: "(+7)", cxScore: 600, cxGain: "(+300)", coresGain: "(+10)", attackGain: "(+23.4K)" },
    { name: "Mclovin404", cores: "55+", attack: 796800, coresNum: 55, role: "Member", lmeScore: 582, lmeGain: "(+0)", cxScore: 800, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+1.5K)" },
    { name: "mc2084", cores: "30+", attack: 734400, coresNum: 30, role: "Member", lmeScore: 546, lmeGain: "(+1)", cxScore: 1000, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+3.9K)" },
    { name: "swifft", cores: "60+", attack: 708600, coresNum: 60, role: "Member", lmeScore: 588, lmeGain: "(+1)", cxScore: 200, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+1.7K)" },
    { name: "HannaM", cores: "50+", attack: 701200, coresNum: 50, role: "Member", lmeScore: 595, lmeGain: "(+1)", cxScore: 1100, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Pookaz", cores: "45+", attack: 695100, coresNum: 45, role: "Member", lmeScore: 467, lmeGain: "(-25)", cxScore: 1100, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+20.6K)" },
    { name: "Player 78792329", cores: "90+", attack: 666900, coresNum: 90, role: "Member", lmeScore: 570, lmeGain: "(+113)", cxScore: 800, cxGain: "(+300)", coresGain: "(+15)", attackGain: "(+38.1K)" },
    { name: "Bensayyten", cores: "TBD", attack: 0, coresNum: 0, role: "Member", lmeScore: 0, lmeGain: "", cxScore: 0, cxGain: "(+0)", coresGain: "", attackGain: "" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = playerData;
}

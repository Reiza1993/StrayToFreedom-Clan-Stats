// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics  
// Last Updated: Week 48 - March 2026 (CX Scores + Glory Members Update)

const playerData = [
    { name: "神Sterben死", cores: "180+", attack: 2162900, coresNum: 180, role: "Leader", lmeScore: 2363, lmeGain: "(+78)", cxScore: 1800, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "Cunner88", cores: "155+", attack: 1849900, coresNum: 155, role: "Vice-Leader", lmeScore: 2052, lmeGain: "(+35)", cxScore: 1600, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+9.6K)" },
    { name: "PastalaVista", cores: "155+", attack: 1496300, coresNum: 155, role: "Glory Member", lmeScore: 1853, lmeGain: "(+59)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+10)", attackGain: "(+0)" },
    { name: "Gritchen", cores: "145+", attack: 1650300, coresNum: 145, role: "Member", lmeScore: 1372, lmeGain: "(+38)", cxScore: 1700, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+24.3K)" },
    { name: "命Waiora癒", cores: "145+", attack: 1373500, coresNum: 145, role: "Member", lmeScore: 1745, lmeGain: "(+105)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "MMM|Mina475", cores: "120+", attack: 1431400, coresNum: 120, role: "Member", lmeScore: 1124, lmeGain: "(+74)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+10.2K)" },
    { name: "盾Heathcliff剣", cores: "145+", attack: 1340200, coresNum: 145, role: "Member", lmeScore: 1705, lmeGain: "(+28)", cxScore: 1900, cxGain: "(+900)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "TieForFirstYo", cores: "110+", attack: 1324800, coresNum: 110, role: "Member", lmeScore: 1586, lmeGain: "(-26)", cxScore: 1400, cxGain: "(+700)", coresGain: "(+5)", attackGain: "(+37.2K)" },
    { name: "Player 32236991", cores: "165+", attack: 1499900, coresNum: 165, role: "Member", lmeScore: 1504, lmeGain: "(+33)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+4.9K)" },
    { name: "HakiLuffy", cores: "130+", attack: 1311800, coresNum: 130, role: "Glory Member", lmeScore: 1310, lmeGain: "(+9)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+6.1K)" },
    { name: "bimbabo", cores: "160+", attack: 1279000, coresNum: 160, role: "Member", lmeScore: 1012, lmeGain: "(-4)", cxScore: 500, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+6.0K)" },
    { name: "EMBALOCO", cores: "145+", attack: 1238100, coresNum: 145, role: "Member", lmeScore: 985, lmeGain: "(-43)", cxScore: 1100, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "MrPlusUltra", cores: "105+", attack: 1221000, coresNum: 105, role: "Member", lmeScore: 900, lmeGain: "(-48)", cxScore: 400, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+12.9K)" },
    { name: "BobBobberson", cores: "105+", attack: 1253900, coresNum: 105, role: "Member", lmeScore: 854, lmeGain: "(+53)", cxScore: 1700, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+31.2K)" },
    { name: "HonoraryCurve51", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-834)", cxScore: 0, cxGain: "(+0)", coresGain: "(-130)", attackGain: "(-1118.2K)" },
    { name: "N0M3rcy", cores: "100+", attack: 1163700, coresNum: 100, role: "Member", lmeScore: 687, lmeGain: "(+34)", cxScore: 1700, cxGain: "(+700)", coresGain: "(+10)", attackGain: "(+15.6K)" },
    { name: "魂Hobin357死", cores: "100+", attack: 1350300, coresNum: 100, role: "Member", lmeScore: 1303, lmeGain: "(+455)", cxScore: 1400, cxGain: "(+900)", coresGain: "(+5)", attackGain: "(+59.4K)" },
    { name: "Player 66607264", cores: "110+", attack: 1229600, coresNum: 110, role: "Glory Member", lmeScore: 1256, lmeGain: "(+244)", cxScore: 1700, cxGain: "(+800)", coresGain: "(+0)", attackGain: "(+71.8K)" },
    { name: "Epic|W", cores: "75+", attack: 1113800, coresNum: 75, role: "Member", lmeScore: 593, lmeGain: "(-20)", cxScore: 900, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+8.1K)" },
    { name: "THJF1948ㅣStray", cores: "95+", attack: 1243200, coresNum: 95, role: "Member", lmeScore: 924, lmeGain: "(+86)", cxScore: 500, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "SUJAY", cores: "140+", attack: 1226800, coresNum: 140, role: "Member", lmeScore: 830, lmeGain: "(+0)", cxScore: 200, cxGain: "(+200)", coresGain: "(+10)", attackGain: "(+18.5K)" },
    { name: "Rzzza", cores: "90+", attack: 1237900, coresNum: 90, role: "Member", lmeScore: 890, lmeGain: "(+63)", cxScore: 1700, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+180.1K)" },
    { name: "Belthazar", cores: "80+", attack: 1128200, coresNum: 80, role: "Glory Member", lmeScore: 613, lmeGain: "(-45)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+72.2K)" },
    { name: "b0ss", cores: "105+", attack: 1039700, coresNum: 105, role: "Member", lmeScore: 920, lmeGain: "(+35)", cxScore: 1000, cxGain: "(+400)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "Lemminkäinen", cores: "85+", attack: 1096200, coresNum: 85, role: "Vice-Leader", lmeScore: 971, lmeGain: "(+54)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "lguinily", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-607)", cxScore: 500, cxGain: "(+0)", coresGain: "(-100)", attackGain: "(-978.6K)" },
    { name: "fesl", cores: "85+", attack: 1007100, coresNum: 85, role: "Member", lmeScore: 793, lmeGain: "(+51)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "groggen", cores: "85+", attack: 966400, coresNum: 85, role: "Member", lmeScore: 822, lmeGain: "(+32)", cxScore: 1500, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+15.7K)" },
    { name: "KingRizzle", cores: "95+", attack: 988900, coresNum: 95, role: "Member", lmeScore: 843, lmeGain: "(+23)", cxScore: 1800, cxGain: "(+800)", coresGain: "(+0)", attackGain: "(+0.5K)" },
    { name: "WeirdPlays", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-613)", cxScore: 500, cxGain: "(+0)", coresGain: "(-65)", attackGain: "(-909.1K)" },
    { name: "Bensayyten", cores: "65+", attack: 911100, coresNum: 65, role: "Member", lmeScore: 788, lmeGain: "(+30)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+6.8K)" },
    { name: "mc2084", cores: "40+", attack: 797900, coresNum: 40, role: "Removed", lmeScore: 592, lmeGain: "(+8)", cxScore: 1700, cxGain: "(+500)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "Pookaz", cores: "55+", attack: 751900, coresNum: 55, role: "Glory Member", lmeScore: 517, lmeGain: "(+1)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+5)", attackGain: "(+0.8K)" },
    { name: "HannaM", cores: "95+", attack: 831600, coresNum: 95, role: "Removed", lmeScore: 717, lmeGain: "(+29)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 78792329", cores: "90+", attack: 693400, coresNum: 90, role: "Member", lmeScore: 576, lmeGain: "(+7)", cxScore: 1600, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+9.0K)" },
    { name: "PinkyToeBeans", cores: "130+", attack: 1530200, coresNum: 130, role: "Glory Member", lmeScore: 1849, lmeGain: "(-16)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+10)", attackGain: "(+16.2K)" },
    { name: "Nubis", cores: "155+", attack: 1569500, coresNum: 155, role: "Glory Member", lmeScore: 1805, lmeGain: "(+6)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+13.5K)" },
    { name: "Koncalaz", cores: "145+", attack: 1700600, coresNum: 145, role: "Glory Member", lmeScore: 1904, lmeGain: "(+32)", cxScore: 1800, cxGain: "(+1000)", coresGain: "(+0)", attackGain: "(+2.9K)" },
    { name: "aiko", cores: "250+", attack: 2428700, coresNum: 250, role: "Member", lmeScore: 2606, lmeGain: "(+20)", cxScore: 1100, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Apathy_", cores: "95+", attack: 916300, coresNum: 95, role: "Member", lmeScore: 845, lmeGain: "(+36)", cxScore: 1200, cxGain: "(+700)", coresGain: "(+20)", attackGain: "(+12.2K)" },
    { name: "VictorMolusco", cores: "100+", attack: 961900, coresNum: 100, role: "Member", lmeScore: 881, lmeGain: "(+57)", cxScore: 1300, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "p88203044", cores: "95+", attack: 1418800, coresNum: 95, role: "Member", lmeScore: 1218, lmeGain: "(+1218)", cxScore: 700, cxGain: "(+700)", coresGain: "(+95)", attackGain: "(+1418.8K)" },
    { name: "han", cores: "0", attack: 0, coresNum: 0, role: "Member", lmeScore: 0, lmeGain: "(+0)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "jojo", cores: "0", attack: 0, coresNum: 0, role: "Member", lmeScore: 0, lmeGain: "(+0)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData, cxSettings };
}

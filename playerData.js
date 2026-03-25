// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics  
// Last Updated: Week 47 - March 2026 (LME Scores Update)

const playerData = [
    { name: "神Sterben死", cores: "175+", attack: 2162900, coresNum: 175, role: "Leader", lmeScore: 2363, lmeGain: "(+78)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+10)", attackGain: "(+154.5K)" },
    { name: "Cunner88", cores: "155+", attack: 1840300, coresNum: 155, role: "Vice-Leader", lmeScore: 2052, lmeGain: "(+35)", cxScore: 1100, cxGain: "(+400)", coresGain: "(+5)", attackGain: "(+26.0K)" },
    { name: "PastalaVista", cores: "145+", attack: 1496300, coresNum: 145, role: "Member", lmeScore: 1853, lmeGain: "(+59)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+10)", attackGain: "(+0)" },
    { name: "Gritchen", cores: "145+", attack: 1626000, coresNum: 145, role: "Member", lmeScore: 1371, lmeGain: "(+37)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+8.3K)" },
    { name: "命Waiora癒", cores: "145+", attack: 1373500, coresNum: 145, role: "Member", lmeScore: 1745, lmeGain: "(+105)", cxScore: 1100, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "MMM|Mina475", cores: "120+", attack: 1421200, coresNum: 120, role: "Member", lmeScore: 0, lmeGain: "(-1050)", cxScore: 900, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "盾Heathcliff剣", cores: "145+", attack: 1340200, coresNum: 145, role: "Member", lmeScore: 1705, lmeGain: "(+28)", cxScore: 1000, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "TieForFirstYo", cores: "105+", attack: 1287600, coresNum: 105, role: "Member", lmeScore: 1586, lmeGain: "(-26)", cxScore: 700, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+4.4K)" },
    { name: "Player 32236991", cores: "165+", attack: 1495000, coresNum: 165, role: "Member", lmeScore: 1504, lmeGain: "(+33)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+5.5K)" },
    { name: "HakiLuffy", cores: "130+", attack: 1305700, coresNum: 130, role: "Glory Member", lmeScore: 1310, lmeGain: "(+9)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+28.8K)" },
    { name: "bimbabo", cores: "155+", attack: 1273000, coresNum: 155, role: "Member", lmeScore: 1012, lmeGain: "(-4)", cxScore: 400, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+3.2K)" },
    { name: "EMBALOCO", cores: "145+", attack: 1238100, coresNum: 145, role: "Member", lmeScore: 985, lmeGain: "(-43)", cxScore: 700, cxGain: "(+100)", coresGain: "(+5)", attackGain: "(+17.9K)" },
    { name: "MrPlusUltra", cores: "105+", attack: 1208100, coresNum: 105, role: "Member", lmeScore: 0, lmeGain: "(-948)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0.2K)" },
    { name: "BobBobberson", cores: "105+", attack: 1222700, coresNum: 105, role: "Member", lmeScore: 854, lmeGain: "(+53)", cxScore: 1000, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+0.1K)" },
    { name: "HonoraryCurve51", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-834)", cxScore: 0, cxGain: "(+0)", coresGain: "(-130)", attackGain: "(-1118.2K)" },
    { name: "N0M3rcy", cores: "90+", attack: 1148100, coresNum: 90, role: "Member", lmeScore: 687, lmeGain: "(+34)", cxScore: 1000, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+2.8K)" },
    { name: "魂Hobin357死", cores: "95+", attack: 1290900, coresNum: 95, role: "Member", lmeScore: 1302, lmeGain: "(+455)", cxScore: 500, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+22.1K)" },
    { name: "Player 66607264", cores: "110+", attack: 1157800, coresNum: 110, role: "Glory Member", lmeScore: 0, lmeGain: "(-1012)", cxScore: 900, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+39.5K)" },
    { name: "Epic|W", cores: "75+", attack: 1105700, coresNum: 75, role: "Member", lmeScore: 593, lmeGain: "(-20)", cxScore: 800, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+34.7K)" },
    { name: "THJF1948ㅣStray", cores: "95+", attack: 1243200, coresNum: 95, role: "Member", lmeScore: 908, lmeGain: "(+70)", cxScore: 500, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+132.8K)" },
    { name: "SUJAY", cores: "130+", attack: 1208300, coresNum: 130, role: "Member", lmeScore: 830, lmeGain: "(+0)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+12.1K)" },
    { name: "Rzzza", cores: "85+", attack: 1057800, coresNum: 85, role: "Member", lmeScore: 887, lmeGain: "(+60)", cxScore: 1100, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+0.1K)" },
    { name: "Belthazar", cores: "80+", attack: 1056000, coresNum: 80, role: "Glory Member", lmeScore: 613, lmeGain: "(-45)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0.3K)" },
    { name: "b0ss", cores: "100+", attack: 1039700, coresNum: 100, role: "Member", lmeScore: 920, lmeGain: "(+35)", cxScore: 600, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+15.5K)" },
    { name: "Lemminkäinen", cores: "85+", attack: 1096200, coresNum: 85, role: "Vice-Leader", lmeScore: 971, lmeGain: "(+54)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+39.7K)" },
    { name: "lguinily", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-607)", cxScore: 500, cxGain: "(+0)", coresGain: "(-100)", attackGain: "(-978.6K)" },
    { name: "fesl", cores: "80+", attack: 1007100, coresNum: 80, role: "Member", lmeScore: 793, lmeGain: "(-+51)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+39.8K)" },
    { name: "groggen", cores: "85+", attack: 950700, coresNum: 85, role: "Member", lmeScore: 822, lmeGain: "(+32)", cxScore: 900, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+18.7K)" },
    { name: "KingRizzle", cores: "95+", attack: 988400, coresNum: 95, role: "Member", lmeScore: 843, lmeGain: "(+23)", cxScore: 1000, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+6.6K)" },
    { name: "WeirdPlays", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-613)", cxScore: 500, cxGain: "(+0)", coresGain: "(-65)", attackGain: "(-909.1K)" },
    { name: "Bensayyten", cores: "65+", attack: 904300, coresNum: 65, role: "Member", lmeScore: 788, lmeGain: "(+30)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+30.2K)" },
    { name: "mc2084", cores: "35+", attack: 797900, coresNum: 35, role: "Member", lmeScore: 592, lmeGain: "(+8)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Pookaz", cores: "50+", attack: 751100, coresNum: 50, role: "Member", lmeScore: 517, lmeGain: "(+1)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+11.6K)" },
    { name: "HannaM", cores: "95+", attack: 831600, coresNum: 95, role: "Glory Member", lmeScore: 717, lmeGain: "(+29)", cxScore: 1200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 78792329", cores: "90+", attack: 684400, coresNum: 90, role: "Member", lmeScore: 576, lmeGain: "(+7)", cxScore: 900, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "iruka", cores: "120+", attack: 1514000, coresNum: 120, role: "Glory Member", lmeScore: 1731, lmeGain: "(-134)", cxScore: 1100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+35.6K)" },
    { name: "Nubis", cores: "155+", attack: 1556000, coresNum: 155, role: "Glory Member", lmeScore: 1805, lmeGain: "(+6)", cxScore: 1200, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+47.5K)" },
    { name: "Koncalaz", cores: "145+", attack: 1697700, coresNum: 145, role: "Member", lmeScore: 1904, lmeGain: "(+32)", cxScore: 800, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+12.0K)" },
    { name: "han", cores: "250+", attack: 2428700, coresNum: 250, role: "Member", lmeScore: 2606, lmeGain: "(+20)", cxScore: 500, cxGain: "(+200)", coresGain: "(+250)", attackGain: "(+2428.7K)" },
    { name: "Apathy_", cores: "75+", attack: 904100, coresNum: 75, role: "Member", lmeScore: 845, lmeGain: "(+36)", cxScore: 500, cxGain: "(+200)", coresGain: "(+75)", attackGain: "(+904.1K)" },
    { name: "VictorMolusco", cores: "100+", attack: 961900, coresNum: 100, role: "Member", lmeScore: 881, lmeGain: "(+57)", cxScore: 600, cxGain: "(+300)", coresGain: "(+100)", attackGain: "(+961.9K)" },
    { name: "p88203044", cores: "0", attack: 0, coresNum: 0, role: "Member", lmeScore: 1218, lmeGain: "(+1218)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "NightmareKing08", cores: "0", attack: 0, coresNum: 0, role: "Member", lmeScore: 0, lmeGain: "(+0)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData, cxSettings };
}

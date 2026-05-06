// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics
// Last Updated: Week 58 - May 2026 (ATK & Relic Cores & LME Updated, CX Reset, Glory Reset)
//
// See INSTRUCTIONS_GUIDE.MD for full update procedures (LME, ATK, CX, roles, removing members).

const playerData = [
    { name: "神Sterben死", cores: "195+", attack: 2170200, coresNum: 195, role: "Leader", lmeScore: 2560, lmeGain: "(+5)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Cunner88", cores: "170+", attack: 2004500, coresNum: 170, role: "Vice-Leader", lmeScore: 2469, lmeGain: "(+31)", cxScore: 0, cxGain: "(+0)", coresGain: "(+15)", attackGain: "(+30.7K)" },
    { name: "PastalaVista", cores: "155+", attack: 1547500, coresNum: 155, role: "Member", lmeScore: 2062, lmeGain: "(+6)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+4.3K)" },
    { name: "Gritchen", cores: "165+", attack: 1759400, coresNum: 165, role: "Member", lmeScore: 1644, lmeGain: "(+33)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+19.6K)" },
    { name: "MMM|Mina475", cores: "130+", attack: 1431400, coresNum: 130, role: "Member", lmeScore: 1384, lmeGain: "(+79)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "盾Heathcliff剣", cores: "145+", attack: 1393800, coresNum: 145, role: "Member", lmeScore: 1859, lmeGain: "(+16)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+20.6K)" },
    { name: "TieForFirstYo", cores: "115+", attack: 1529200, coresNum: 115, role: "Member", lmeScore: 1796, lmeGain: "(+49)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "180+", attack: 1568300, coresNum: 180, role: "Member", lmeScore: 1803, lmeGain: "(+11)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "HakiLuffy", cores: "130+", attack: 1548300, coresNum: 130, role: "Member", lmeScore: 1786, lmeGain: "(+30)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+17.8K)" },
    { name: "bimbabo", cores: "170+", attack: 1345900, coresNum: 170, role: "Member", lmeScore: 1507, lmeGain: "(+10)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+1.6K)" },
    { name: "EMBALOCO", cores: "155+", attack: 1319300, coresNum: 155, role: "Member", lmeScore: 1670, lmeGain: "(+105)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+8.1K)" },
    { name: "MrPlusUltra", cores: "105+", attack: 1310300, coresNum: 105, role: "Member", lmeScore: 0, lmeGain: "(-1174)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+4.7K)" },
    { name: "BobBobberson", cores: "110+", attack: 1478100, coresNum: 110, role: "Member", lmeScore: 1382, lmeGain: "(+100)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+23.3K)" },
    { name: "N0M3rcy", cores: "100+", attack: 1231700, coresNum: 100, role: "Member", lmeScore: 818, lmeGain: "(+22)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+10.0K)" },
    { name: "魂Hobin357死", cores: "105+", attack: 1697500, coresNum: 105, role: "Member", lmeScore: 1746, lmeGain: "(+145)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+164.5K)" },
    { name: "Player 66607264", cores: "120+", attack: 1311800, coresNum: 120, role: "Member", lmeScore: 0, lmeGain: "(-1825)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Epic|W", cores: "85+", attack: 1143400, coresNum: 85, role: "Member", lmeScore: 847, lmeGain: "(+35)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+3.4K)" },
    { name: "THJF1948ㅣStray", cores: "100+", attack: 1290300, coresNum: 100, role: "Member", lmeScore: 1277, lmeGain: "(+20)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.7K)" },
    { name: "SUJAY", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(+0)", cxScore: 200, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Rzzza", cores: "110+", attack: 1431700, coresNum: 110, role: "Member", lmeScore: 1431, lmeGain: "(-101)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+2.3K)" },
    { name: "Belthazar", cores: "85+", attack: 1244100, coresNum: 85, role: "Member", lmeScore: 1161, lmeGain: "(+79)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.7K)" },
    { name: "b0ss", cores: "105+", attack: 1081700, coresNum: 105, role: "Member", lmeScore: 1448, lmeGain: "(+21)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+3.2K)" },
    { name: "Lemminkäinen", cores: "100+", attack: 1261000, coresNum: 100, role: "Vice-Leader", lmeScore: 1654, lmeGain: "(+21)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+16.3K)" },
    { name: "fesl", cores: "90+", attack: 1225600, coresNum: 90, role: "Member", lmeScore: 1126, lmeGain: "(+74)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+135.8K)" },
    { name: "groggen", cores: "95+", attack: 1180800, coresNum: 95, role: "Member", lmeScore: 1551, lmeGain: "(+60)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "KingRizzle", cores: "95+", attack: 1117100, coresNum: 95, role: "Member", lmeScore: 1318, lmeGain: "(+24)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+5.7K)" },
    { name: "Bensayyten", cores: "80+", attack: 1239500, coresNum: 80, role: "Member", lmeScore: 1332, lmeGain: "(+76)", cxScore: 0, cxGain: "(+0)", coresGain: "(+10)", attackGain: "(+0)" },
    { name: "Pookaz", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(+0)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 78792329", cores: "90+", attack: 706700, coresNum: 90, role: "Member", lmeScore: 601, lmeGain: "(-19)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0.7K)" },
    { name: "PinkyToeBeans", cores: "130+", attack: 1530200, coresNum: 130, role: "Member", lmeScore: 2026, lmeGain: "(+17)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Nubis", cores: "190+", attack: 1865700, coresNum: 190, role: "Member", lmeScore: 2010, lmeGain: "(+17)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player113322", cores: "150+", attack: 1779100, coresNum: 150, role: "Member", lmeScore: 1887, lmeGain: "(-57)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+2.7K)" },
    { name: "Apathy_", cores: "105+", attack: 1256700, coresNum: 105, role: "Member", lmeScore: 1591, lmeGain: "(+253)", cxScore: 0, cxGain: "(+0)", coresGain: "(+10)", attackGain: "(+126.2K)" },
    { name: "VictorMolusco", cores: "100+", attack: 1151100, coresNum: 100, role: "Member", lmeScore: 1539, lmeGain: "(+28)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+13.5K)" },
    { name: "p88203044", cores: "110+", attack: 1522000, coresNum: 110, role: "Member", lmeScore: 1745, lmeGain: "(+156)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "һan", cores: "390+", attack: 3292000, coresNum: 390, role: "Eternal Glory", lmeScore: 3350, lmeGain: "(+0)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+138.9K)" },
    { name: "♚jojo♔", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-573)", cxScore: 600, cxGain: "(+0)", coresGain: "(-100)", attackGain: "(-1296.7K)" },
    { name: "Fl3xas2", cores: "205+", attack: 2218300, coresNum: 205, role: "Member", lmeScore: 2633, lmeGain: "(-1)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0.5K)" },
    { name: "Fl3xas", cores: "300+", attack: 2562100, coresNum: 300, role: "Member", lmeScore: 2744, lmeGain: "(+2744)", cxScore: 0, cxGain: "(+0)", coresGain: "(+300)", attackGain: "(+2562.1K)" },
    { name: "Hanter007", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(+0)", cxScore: 100, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Koncalaz", cores: "175+", attack: 2011400, coresNum: 175, role: "Member", lmeScore: 2436, lmeGain: "(+32)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+44.6K)" },
    { name: "ergiangi", cores: "90+", attack: 1312600, coresNum: 90, role: "Member", lmeScore: 1593, lmeGain: "(+49)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+22.1K)" },
    { name: "samwise08", cores: "115+", attack: 1225100, coresNum: 115, role: "Member", lmeScore: 1461, lmeGain: "(+17)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+24.1K)" },
    { name: "Cheeselife", cores: "100+", attack: 984900, coresNum: 100, role: "Member", lmeScore: 1463, lmeGain: "(+1463)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData };
}

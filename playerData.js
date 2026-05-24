// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics
// Last Updated: Week 60 - May 2026 (LME #43 Added, CX Updated, Glory Members Assigned, BIRB Removed)
//
// See INSTRUCTIONS_GUIDE.MD for full update procedures (LME, ATK, CX, roles, removing members).

const playerData = [
    { name: "神Sterben死", cores: "195+", attack: 2191700, coresNum: 195, role: "Leader", lmeScore: 2633, lmeGain: "(+4)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+13.6K)" },
    { name: "Cunner88", cores: "175+", attack: 2007800, coresNum: 175, role: "Vice-Leader", lmeScore: 2534, lmeGain: "(+14)", cxScore: 1800, cxGain: "(+800)", coresGain: "(+0)", attackGain: "(+3.3K)" },
    { name: "PastalaVista", cores: "165+", attack: 1753400, coresNum: 165, role: "Member", lmeScore: 2261, lmeGain: "(+3)", cxScore: 1600, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+11.7K)" },
    { name: "Gritchen", cores: "165+", attack: 1810600, coresNum: 165, role: "Member", lmeScore: 1794, lmeGain: "(+7)", cxScore: 1700, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+28.4K)" },
    { name: "MMM|Mina475", cores: "140+", attack: 1505800, coresNum: 140, role: "Member", lmeScore: 1529, lmeGain: "(+73)", cxScore: 1600, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+3.9K)" },
    { name: "盾Heathcliff剣", cores: "160+", attack: 1599900, coresNum: 160, role: "Glory Member", lmeScore: 2051, lmeGain: "(+110)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+15)", attackGain: "(+57.5K)" },
    { name: "TieForFirstYo", cores: "120+", attack: 1529200, coresNum: 120, role: "Member", lmeScore: 1945, lmeGain: "(+23)", cxScore: 300, cxGain: "(+200)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "180+", attack: 1568300, coresNum: 180, role: "Member", lmeScore: 1892, lmeGain: "(+32)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "HakiLuffy", cores: "135+", attack: 1564100, coresNum: 135, role: "Member", lmeScore: 1854, lmeGain: "(+34)", cxScore: 1600, cxGain: "(+500)", coresGain: "(+5)", attackGain: "(+12.9K)" },
    { name: "bimbabo", cores: "180+", attack: 1360100, coresNum: 180, role: "Member", lmeScore: 1593, lmeGain: "(-10)", cxScore: 800, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+4.8K)" },
    { name: "EMBALOCO", cores: "155+", attack: 1462900, coresNum: 155, role: "Member", lmeScore: 1752, lmeGain: "(+9)", cxScore: 1400, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+4.7K)" },
    { name: "MrPlusUltra", cores: "105+", attack: 1342400, coresNum: 105, role: "Member", lmeScore: 1422, lmeGain: "(+76)", cxScore: 1600, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+24.9K)" },
    { name: "BobBobberson", cores: "115+", attack: 1568800, coresNum: 115, role: "Member", lmeScore: 1600, lmeGain: "(+122)", cxScore: 1500, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+85.5K)" },
    { name: "N0M3rcy", cores: "110+", attack: 1263400, coresNum: 110, role: "Member", lmeScore: 1048, lmeGain: "(+57)", cxScore: 1500, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+15.2K)" },
    { name: "魂Hobin357死", cores: "115+", attack: 1777900, coresNum: 115, role: "Member", lmeScore: 1935, lmeGain: "(+17)", cxScore: 600, cxGain: "(+300)", coresGain: "(+5)", attackGain: "(+5.9K)" },
    { name: "Player 66607264", cores: "125+", attack: 1320000, coresNum: 125, role: "Member", lmeScore: 1895, lmeGain: "(+1895)", cxScore: 1500, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+3.0K)" },
    { name: "Epic|W", cores: "85+", attack: 1159500, coresNum: 85, role: "Member", lmeScore: 925, lmeGain: "(+16)", cxScore: 500, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+11.1K)" },
    { name: "THJF1948ㅣStray", cores: "110+", attack: 1298700, coresNum: 110, role: "Member", lmeScore: 1344, lmeGain: "(-42)", cxScore: 900, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "Rzzza", cores: "120+", attack: 1474200, coresNum: 120, role: "Member", lmeScore: 1699, lmeGain: "(+87)", cxScore: 1200, cxGain: "(+400)", coresGain: "(+10)", attackGain: "(+17.4K)" },
    { name: "Belthazar", cores: "85+", attack: 1266800, coresNum: 85, role: "Glory Member", lmeScore: 1431, lmeGain: "(+206)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+3.2K)" },
    { name: "b0ss", cores: "110+", attack: 1203700, coresNum: 110, role: "Member", lmeScore: 1621, lmeGain: "(+75)", cxScore: 500, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+100.9K)" },
    { name: "Lemminkäinen", cores: "105+", attack: 1301600, coresNum: 105, role: "Vice-Leader", lmeScore: 1741, lmeGain: "(+33)", cxScore: 1700, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+25.1K)" },
    { name: "fesl", cores: "100+", attack: 1286300, coresNum: 100, role: "Member", lmeScore: 1311, lmeGain: "(+44)", cxScore: 1400, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+4.7K)" },
    { name: "groggen", cores: "95+", attack: 1180800, coresNum: 95, role: "Member", lmeScore: 1642, lmeGain: "(+24)", cxScore: 1500, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "KingRizzle", cores: "100+", attack: 1117100, coresNum: 100, role: "Member", lmeScore: 1547, lmeGain: "(+76)", cxScore: 1500, cxGain: "(+800)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "Bensayyten", cores: "80+", attack: 1269400, coresNum: 80, role: "Glory Member", lmeScore: 1523, lmeGain: "(+89)", cxScore: 1600, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+20.0K)" },
    { name: "Player 78792329", cores: "90+", attack: 707100, coresNum: 90, role: "Member", lmeScore: 622, lmeGain: "(+622)", cxScore: 900, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0.2K)" },
    { name: "PinkyToeBeans", cores: "130+", attack: 1530200, coresNum: 130, role: "Glory Member", lmeScore: 2146, lmeGain: "(+55)", cxScore: 1800, cxGain: "(+800)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Nubis", cores: "200+", attack: 1938300, coresNum: 200, role: "Member", lmeScore: 2181, lmeGain: "(+86)", cxScore: 1600, cxGain: "(+500)", coresGain: "(+10)", attackGain: "(+39.3K)" },
    { name: "Player113322", cores: "160+", attack: 1779500, coresNum: 160, role: "Member", lmeScore: 1975, lmeGain: "(+121)", cxScore: 100, cxGain: "(+0)", coresGain: "(+10)", attackGain: "(+0)" },
    { name: "Apathy_", cores: "105+", attack: 1288500, coresNum: 105, role: "Member", lmeScore: 1608, lmeGain: "(-62)", cxScore: 1800, cxGain: "(+800)", coresGain: "(+0)", attackGain: "(+31.8K)" },
    { name: "VictorMolusco", cores: "105+", attack: 1192300, coresNum: 105, role: "Glory Member", lmeScore: 1680, lmeGain: "(+20)", cxScore: 1800, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+11.9K)" },
    { name: "p88203044", cores: "110+", attack: 1522000, coresNum: 110, role: "Member", lmeScore: 1816, lmeGain: "(+7)", cxScore: 1600, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "һan", cores: "390+", attack: 3321300, coresNum: 390, role: "Eternal Glory", lmeScore: 3454, lmeGain: "(+22)", cxScore: 1700, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+28.0K)" },
    { name: "Fl3xas", cores: "300+", attack: 2562100, coresNum: 300, role: "Glory Member", lmeScore: 2939, lmeGain: "(+137)", cxScore: 1900, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "BIRB", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-2647)", cxScore: 700, cxGain: "(+500)", coresGain: "(-205)", attackGain: "(-2219.0K)" },
    { name: "Koncalaz", cores: "180+", attack: 2016300, coresNum: 180, role: "Member", lmeScore: 2487, lmeGain: "(+20)", cxScore: 1500, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+2.6K)" },
    { name: "ergiangi", cores: "90+", attack: 1350300, coresNum: 90, role: "Member", lmeScore: 1691, lmeGain: "(+11)", cxScore: 1400, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+11.0K)" },
    { name: "samwise08", cores: "120+", attack: 1238800, coresNum: 120, role: "Member", lmeScore: 1594, lmeGain: "(+55)", cxScore: 1200, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+9.4K)" },
    { name: "Cheeselife", cores: "105+", attack: 1015800, coresNum: 105, role: "Member", lmeScore: 1491, lmeGain: "(+84)", cxScore: 1600, cxGain: "(+800)", coresGain: "(+5)", attackGain: "(+10.8K)" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData };
}

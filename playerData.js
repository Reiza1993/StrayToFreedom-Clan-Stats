// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics
// Last Updated: June 2026 (LME Scores Updated, CX Scores Reset, Glory Members Reset to Members)
//
// See INSTRUCTIONS_GUIDE.MD for full update procedures (LME, ATK, CX, roles, removing members).

const playerData = [
    { name: "神Sterben死", cores: "195+", attack: 2191700, coresNum: 195, role: "Leader", lmeScore: 2702, lmeGain: "(+43)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Cunner88", cores: "175+", attack: 2189600, coresNum: 175, role: "Vice-Leader", lmeScore: 2612, lmeGain: "(+39)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+181.8K)" },
    { name: "PastalaVista", cores: "170+", attack: 1781900, coresNum: 170, role: "Member", lmeScore: 2282, lmeGain: "(-12)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+28.5K)" },
    { name: "Gritchen", cores: "165+", attack: 1816700, coresNum: 165, role: "Member", lmeScore: 1831, lmeGain: "(+6)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.1K)" },
    { name: "MMM|Mina475", cores: "140+", attack: 1507200, coresNum: 140, role: "Member", lmeScore: 1588, lmeGain: "(+1588)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+1.4K)" },
    { name: "盾Heathcliff剣", cores: "160+", attack: 1757500, coresNum: 160, role: "Member", lmeScore: 2153, lmeGain: "(+20)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+157.6K)" },
    { name: "TieForFirstYo", cores: "120+", attack: 1529200, coresNum: 120, role: "Member", lmeScore: 2035, lmeGain: "(+12)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "180+", attack: 1605900, coresNum: 180, role: "Member", lmeScore: 2007, lmeGain: "(+25)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+37.6K)" },
    { name: "HakiLuffy", cores: "135+", attack: 1564100, coresNum: 135, role: "Member", lmeScore: 1930, lmeGain: "(+30)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "bimbabo", cores: "180+", attack: 1360100, coresNum: 180, role: "Member", lmeScore: 1674, lmeGain: "(+73)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "EMBALOCO", cores: "155+", attack: 1482400, coresNum: 155, role: "Member", lmeScore: 1821, lmeGain: "(+1821)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+19.5K)" },
    { name: "MrPlusUltra", cores: "105+", attack: 1348000, coresNum: 105, role: "Member", lmeScore: 1304, lmeGain: "(+63)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+5.6K)" },
    { name: "BobBobberson", cores: "115+", attack: 1568800, coresNum: 115, role: "Member", lmeScore: 1827, lmeGain: "(+110)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "N0M3rcy", cores: "110+", attack: 1263400, coresNum: 110, role: "Member", lmeScore: 1244, lmeGain: "(+63)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "魂Hobin357死", cores: "115+", attack: 1784800, coresNum: 115, role: "Member", lmeScore: 1984, lmeGain: "(+28)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.9K)" },
    { name: "Player 66607264", cores: "125+", attack: 1391200, coresNum: 125, role: "Member", lmeScore: 1990, lmeGain: "(+56)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+71.2K)" },
    { name: "Epic|W", cores: "85+", attack: 1166300, coresNum: 85, role: "Member", lmeScore: 1108, lmeGain: "(+18)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.8K)" },
    { name: "THJF1948ㅣStray", cores: "110+", attack: 1298700, coresNum: 110, role: "Member", lmeScore: 1537, lmeGain: "(+62)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Rzzza", cores: "120+", attack: 1480300, coresNum: 120, role: "Member", lmeScore: 1733, lmeGain: "(+24)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.1K)" },
    { name: "Belthazar", cores: "85+", attack: 1267100, coresNum: 85, role: "Member", lmeScore: 1543, lmeGain: "(+132)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0.3K)" },
    { name: "b0ss", cores: "115+", attack: 1207600, coresNum: 115, role: "Member", lmeScore: 1708, lmeGain: "(+28)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+3.9K)" },
    { name: "Lemminkäinen", cores: "105+", attack: 1309200, coresNum: 105, role: "Vice-Leader", lmeScore: 1854, lmeGain: "(+76)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+7.6K)" },
    { name: "fesl", cores: "105+", attack: 1286300, coresNum: 105, role: "Member", lmeScore: 1532, lmeGain: "(+65)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "groggen", cores: "95+", attack: 1202000, coresNum: 95, role: "Member", lmeScore: 1798, lmeGain: "(+139)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+21.2K)" },
    { name: "KingRizzle", cores: "100+", attack: 1122500, coresNum: 100, role: "Member", lmeScore: 1759, lmeGain: "(+195)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+5.4K)" },
    { name: "Bensayyten", cores: "0", attack: 0, coresNum: 0, role: "Member", lmeScore: 1601, lmeGain: "(+1601)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "PinkyToeBeans", cores: "130+", attack: 1530200, coresNum: 130, role: "Member", lmeScore: 2201, lmeGain: "(+43)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Nubis", cores: "200+", attack: 1955800, coresNum: 200, role: "Member", lmeScore: 2209, lmeGain: "(-1)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+17.5K)" },
    { name: "Player113322", cores: "160+", attack: 1783200, coresNum: 160, role: "Member", lmeScore: 2001, lmeGain: "(+73)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+3.7K)" },
    { name: "Apathy_", cores: "105+", attack: 1299800, coresNum: 105, role: "Member", lmeScore: 1839, lmeGain: "(+111)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+11.3K)" },
    { name: "VictorMolusco", cores: "105+", attack: 1205600, coresNum: 105, role: "Member", lmeScore: 1788, lmeGain: "(+81)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+13.3K)" },
    { name: "p88203044", cores: "110+", attack: 1543400, coresNum: 110, role: "Member", lmeScore: 1945, lmeGain: "(+64)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+21.4K)" },
    { name: "һan", cores: "390+", attack: 3321300, coresNum: 390, role: "Eternal Glory", lmeScore: 3567, lmeGain: "(+131)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Fl3xas", cores: "300+", attack: 2562100, coresNum: 300, role: "Member", lmeScore: 3005, lmeGain: "(+42)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Koncalaz", cores: "180+", attack: 2029200, coresNum: 180, role: "Member", lmeScore: 2600, lmeGain: "(+100)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+12.9K)" },
    { name: "ergiangi", cores: "90+", attack: 1365300, coresNum: 90, role: "Member", lmeScore: 1759, lmeGain: "(+27)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+15.0K)" },
    { name: "samwise08", cores: "125+", attack: 1323000, coresNum: 125, role: "Member", lmeScore: 1850, lmeGain: "(+95)", cxScore: 0, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+84.2K)" },
    { name: "Cheeselife", cores: "105+", attack: 1022100, coresNum: 105, role: "Member", lmeScore: 1779, lmeGain: "(+274)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+6.3K)" },
    { name: "theLP", cores: "140+", attack: 1235700, coresNum: 140, role: "Member", lmeScore: 1775, lmeGain: "(+1775)", cxScore: 0, cxGain: "(+0)", coresGain: "(+140)", attackGain: "(+1235.7K)" },
    { name: "Rėtrø", cores: "140+", attack: 1948500, coresNum: 140, role: "Member", lmeScore: 1996, lmeGain: "(-38)", cxScore: 0, cxGain: "(+0)", coresGain: "(+140)", attackGain: "(+1948.5K)" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData };
}

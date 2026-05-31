// playerData.js
// Freedomˢᵗʳᵃʸ Clan Player Statistics
// Last Updated: Week 62 - May 2026 (LME #44 Added, CX Updated, Glory Members Assigned)
//
// See INSTRUCTIONS_GUIDE.MD for full update procedures (LME, ATK, CX, roles, removing members).

const playerData = [
    { name: "神Sterben死", cores: "195+", attack: 2191700, coresNum: 195, role: "Leader", lmeScore: 2659, lmeGain: "(+26)", cxScore: 2200, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Cunner88", cores: "175+", attack: 2189600, coresNum: 175, role: "Vice-Leader", lmeScore: 2573, lmeGain: "(+39)", cxScore: 2000, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+181.8K)" },
    { name: "PastalaVista", cores: "170+", attack: 1781900, coresNum: 170, role: "Member", lmeScore: 2294, lmeGain: "(+33)", cxScore: 2000, cxGain: "(+400)", coresGain: "(+5)", attackGain: "(+28.5K)" },
    { name: "Gritchen", cores: "165+", attack: 1816700, coresNum: 165, role: "Member", lmeScore: 1825, lmeGain: "(+31)", cxScore: 2100, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+6.1K)" },
    { name: "MMM|Mina475", cores: "140+", attack: 1507200, coresNum: 140, role: "Member", lmeScore: 0, lmeGain: "(-1529)", cxScore: 1600, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+1.4K)" },
    { name: "盾Heathcliff剣", cores: "160+", attack: 1757500, coresNum: 160, role: "Glory Member", lmeScore: 2133, lmeGain: "(+82)", cxScore: 2200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+157.6K)" },
    { name: "TieForFirstYo", cores: "120+", attack: 1529200, coresNum: 120, role: "Member", lmeScore: 2023, lmeGain: "(+78)", cxScore: 300, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Player 32236991", cores: "180+", attack: 1605900, coresNum: 180, role: "Member", lmeScore: 1982, lmeGain: "(+90)", cxScore: 0, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+37.6K)" },
    { name: "HakiLuffy", cores: "135+", attack: 1564100, coresNum: 135, role: "Member", lmeScore: 1900, lmeGain: "(+46)", cxScore: 2100, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "bimbabo", cores: "180+", attack: 1360100, coresNum: 180, role: "Member", lmeScore: 1601, lmeGain: "(+8)", cxScore: 900, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "EMBALOCO", cores: "155+", attack: 1482400, coresNum: 155, role: "Member", lmeScore: 0, lmeGain: "(-1752)", cxScore: 2100, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+19.5K)" },
    { name: "MrPlusUltra", cores: "105+", attack: 1348000, coresNum: 105, role: "Member", lmeScore: 1241, lmeGain: "(-181)", cxScore: 2200, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+5.6K)" },
    { name: "BobBobberson", cores: "115+", attack: 1568800, coresNum: 115, role: "Member", lmeScore: 1717, lmeGain: "(+117)", cxScore: 2200, cxGain: "(+700)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "N0M3rcy", cores: "110+", attack: 1263400, coresNum: 110, role: "Member", lmeScore: 1181, lmeGain: "(+133)", cxScore: 2100, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "魂Hobin357死", cores: "115+", attack: 1784800, coresNum: 115, role: "Member", lmeScore: 1956, lmeGain: "(+21)", cxScore: 700, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+6.9K)" },
    { name: "Player 66607264", cores: "125+", attack: 1391200, coresNum: 125, role: "Member", lmeScore: 1934, lmeGain: "(+39)", cxScore: 2000, cxGain: "(+500)", coresGain: "(+0)", attackGain: "(+71.2K)" },
    { name: "Epic|W", cores: "85+", attack: 1166300, coresNum: 85, role: "Member", lmeScore: 1090, lmeGain: "(+165)", cxScore: 700, cxGain: "(+200)", coresGain: "(+0)", attackGain: "(+6.8K)" },
    { name: "THJF1948ㅣStray", cores: "110+", attack: 1298700, coresNum: 110, role: "Member", lmeScore: 1475, lmeGain: "(+131)", cxScore: 900, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Rzzza", cores: "120+", attack: 1480300, coresNum: 120, role: "Member", lmeScore: 1709, lmeGain: "(+10)", cxScore: 1300, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+6.1K)" },
    { name: "Belthazar", cores: "85+", attack: 1267100, coresNum: 85, role: "Glory Member", lmeScore: 1411, lmeGain: "(-20)", cxScore: 2100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0.3K)" },
    { name: "b0ss", cores: "115+", attack: 1207600, coresNum: 115, role: "Member", lmeScore: 1680, lmeGain: "(+59)", cxScore: 500, cxGain: "(+0)", coresGain: "(+5)", attackGain: "(+3.9K)" },
    { name: "Lemminkäinen", cores: "105+", attack: 1309200, coresNum: 105, role: "Vice-Leader", lmeScore: 1778, lmeGain: "(+37)", cxScore: 1800, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+7.6K)" },
    { name: "fesl", cores: "105+", attack: 1286300, coresNum: 105, role: "Member", lmeScore: 1467, lmeGain: "(+156)", cxScore: 1900, cxGain: "(+500)", coresGain: "(+5)", attackGain: "(+0)" },
    { name: "groggen", cores: "95+", attack: 1202000, coresNum: 95, role: "Member", lmeScore: 1659, lmeGain: "(+17)", cxScore: 1500, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+21.2K)" },
    { name: "KingRizzle", cores: "100+", attack: 1122500, coresNum: 100, role: "Member", lmeScore: 1564, lmeGain: "(+17)", cxScore: 1600, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+5.4K)" },
    { name: "Bensayyten", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(-1523)", cxScore: 1800, cxGain: "(+200)", coresGain: "(-80)", attackGain: "(-1269.4K)" },
    { name: "Player 78792329", cores: "90+", attack: 707100, coresNum: 90, role: "Member", lmeScore: 618, lmeGain: "(-4)", cxScore: 900, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "PinkyToeBeans", cores: "130+", attack: 1530200, coresNum: 130, role: "Glory Member", lmeScore: 2158, lmeGain: "(+12)", cxScore: 2100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Nubis", cores: "200+", attack: 1955800, coresNum: 200, role: "Glory Member", lmeScore: 2210, lmeGain: "(+29)", cxScore: 2200, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+17.5K)" },
    { name: "Player113322", cores: "160+", attack: 1783200, coresNum: 160, role: "Member", lmeScore: 1928, lmeGain: "(-47)", cxScore: 100, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+3.7K)" },
    { name: "Apathy_", cores: "105+", attack: 1299800, coresNum: 105, role: "Member", lmeScore: 1728, lmeGain: "(+120)", cxScore: 2200, cxGain: "(+400)", coresGain: "(+0)", attackGain: "(+11.3K)" },
    { name: "VictorMolusco", cores: "105+", attack: 1205600, coresNum: 105, role: "Glory Member", lmeScore: 1707, lmeGain: "(+27)", cxScore: 2100, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+13.3K)" },
    { name: "p88203044", cores: "110+", attack: 1543400, coresNum: 110, role: "Glory Member", lmeScore: 1881, lmeGain: "(+65)", cxScore: 2200, cxGain: "(+600)", coresGain: "(+0)", attackGain: "(+21.4K)" },
    { name: "һan", cores: "390+", attack: 3321300, coresNum: 390, role: "Eternal Glory", lmeScore: 3436, lmeGain: "(-18)", cxScore: 1800, cxGain: "(+100)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Fl3xas", cores: "300+", attack: 2562100, coresNum: 300, role: "Glory Member", lmeScore: 2963, lmeGain: "(+24)", cxScore: 2200, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "BIRB", cores: "0", attack: 0, coresNum: 0, role: "Removed", lmeScore: 0, lmeGain: "(+0)", cxScore: 700, cxGain: "(+0)", coresGain: "(+0)", attackGain: "(+0)" },
    { name: "Koncalaz", cores: "180+", attack: 2029200, coresNum: 180, role: "Member", lmeScore: 2500, lmeGain: "(+13)", cxScore: 1800, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+12.9K)" },
    { name: "ergiangi", cores: "90+", attack: 1365300, coresNum: 90, role: "Member", lmeScore: 1732, lmeGain: "(+41)", cxScore: 1700, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+15.0K)" },
    { name: "samwise08", cores: "125+", attack: 1323000, coresNum: 125, role: "Member", lmeScore: 1755, lmeGain: "(+161)", cxScore: 1800, cxGain: "(+600)", coresGain: "(+5)", attackGain: "(+84.2K)" },
    { name: "Cheeselife", cores: "105+", attack: 1022100, coresNum: 105, role: "Member", lmeScore: 1505, lmeGain: "(+14)", cxScore: 1900, cxGain: "(+300)", coresGain: "(+0)", attackGain: "(+6.3K)" },
    { name: "theLP", cores: "140+", attack: 1235700, coresNum: 140, role: "Member", lmeScore: 0, lmeGain: "(+0)", cxScore: 100, cxGain: "(+100)", coresGain: "(+140)", attackGain: "(+1235.7K)" },
    { name: "Rėtrø", cores: "140+", attack: 1948500, coresNum: 140, role: "Member", lmeScore: 2034, lmeGain: "(+2034)", cxScore: 200, cxGain: "(+200)", coresGain: "(+140)", attackGain: "(+1948.5K)" },
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playerData };
}

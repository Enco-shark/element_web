/* ═══════════════════════════════════════════════════════════════════════
   ELEMENT DATA — 118 elements
═══════════════════════════════════════════════════════════════════════ */
const ELEMENTS = [
  { z:1, sym:"H", name:"Hydrogen", name_zh:"氢", mass:"1.008", cat:"nonmetal", state:"gas", year:1766, config:"1s¹", group:1, period:1 },
  { z:2, sym:"He", name:"Helium", name_zh:"氦", mass:"4.003", cat:"noble-gas", state:"gas", year:1898, config:"1s²", group:18, period:1 },
  { z:3, sym:"Li", name:"Lithium", name_zh:"锂", mass:"6.941", cat:"alkali", state:"solid", year:1817, config:"[He] 2s¹", group:1, period:2 },
  { z:4, sym:"Be", name:"Beryllium", name_zh:"铍", mass:"9.012", cat:"alkaline", state:"solid", year:1798, config:"[He] 2s²", group:2, period:2 },
  { z:5, sym:"B", name:"Boron", name_zh:"硼", mass:"10.81", cat:"metalloid", state:"solid", year:1808, config:"[He] 2s² 2p¹", group:13, period:2 },
  { z:6, sym:"C", name:"Carbon", name_zh:"碳", mass:"12.011", cat:"nonmetal", state:"solid", year:null, config:"[He] 2s² 2p²", group:14, period:2 },
  { z:7, sym:"N", name:"Nitrogen", name_zh:"氮", mass:"14.007", cat:"nonmetal", state:"gas", year:1772, config:"[He] 2s² 2p³", group:15, period:2 },
  { z:8, sym:"O", name:"Oxygen", name_zh:"氧", mass:"15.999", cat:"nonmetal", state:"gas", year:1774, config:"[He] 2s² 2p⁴", group:16, period:2 },
  { z:9, sym:"F", name:"Fluorine", name_zh:"氟", mass:"18.998", cat:"halogen", state:"gas", year:1886, config:"[He] 2s² 2p⁵", group:17, period:2 },
  { z:10, sym:"Ne", name:"Neon", name_zh:"氖", mass:"20.180", cat:"noble-gas", state:"gas", year:1898, config:"[He] 2s² 2p⁶", group:18, period:2 },
  { z:11, sym:"Na", name:"Sodium", name_zh:"钠", mass:"22.990", cat:"alkali", state:"solid", year:1807, config:"[Ne] 3s¹", group:1, period:3 },
  { z:12, sym:"Mg", name:"Magnesium", name_zh:"镁", mass:"24.305", cat:"alkaline", state:"solid", year:1755, config:"[Ne] 3s²", group:2, period:3 },
  { z:13, sym:"Al", name:"Aluminium", name_zh:"铝", mass:"26.982", cat:"post-trans", state:"solid", year:1825, config:"[Ne] 3s² 3p¹", group:13, period:3 },
  { z:14, sym:"Si", name:"Silicon", name_zh:"硅", mass:"28.086", cat:"metalloid", state:"solid", year:1824, config:"[Ne] 3s² 3p²", group:14, period:3 },
  { z:15, sym:"P", name:"Phosphorus", name_zh:"磷", mass:"30.974", cat:"nonmetal", state:"solid", year:1669, config:"[Ne] 3s² 3p³", group:15, period:3 },
  { z:16, sym:"S", name:"Sulfur", name_zh:"硫", mass:"32.06", cat:"nonmetal", state:"solid", year:null, config:"[Ne] 3s² 3p⁴", group:16, period:3 },
  { z:17, sym:"Cl", name:"Chlorine", name_zh:"氯", mass:"35.45", cat:"halogen", state:"gas", year:1774, config:"[Ne] 3s² 3p⁵", group:17, period:3 },
  { z:18, sym:"Ar", name:"Argon", name_zh:"氩", mass:"39.948", cat:"noble-gas", state:"gas", year:1894, config:"[Ne] 3s² 3p⁶", group:18, period:3 },
  { z:19, sym:"K", name:"Potassium", name_zh:"钾", mass:"39.098", cat:"alkali", state:"solid", year:1807, config:"[Ar] 4s¹", group:1, period:4 },
  { z:20, sym:"Ca", name:"Calcium", name_zh:"钙", mass:"40.078", cat:"alkaline", state:"solid", year:1808, config:"[Ar] 4s²", group:2, period:4 },
  { z:21, sym:"Sc", name:"Scandium", name_zh:"钪", mass:"44.956", cat:"transition", state:"solid", year:1879, config:"[Ar] 3d¹ 4s²", group:3, period:4 },
  { z:22, sym:"Ti", name:"Titanium", name_zh:"钛", mass:"47.867", cat:"transition", state:"solid", year:1791, config:"[Ar] 3d² 4s²", group:4, period:4 },
  { z:23, sym:"V", name:"Vanadium", name_zh:"钒", mass:"50.942", cat:"transition", state:"solid", year:1801, config:"[Ar] 3d³ 4s²", group:5, period:4 },
  { z:24, sym:"Cr", name:"Chromium", name_zh:"铬", mass:"51.996", cat:"transition", state:"solid", year:1798, config:"[Ar] 3d⁵ 4s¹", group:6, period:4 },
  { z:25, sym:"Mn", name:"Manganese", name_zh:"锰", mass:"54.938", cat:"transition", state:"solid", year:1774, config:"[Ar] 3d⁵ 4s²", group:7, period:4 },
  { z:26, sym:"Fe", name:"Iron", name_zh:"铁", mass:"55.845", cat:"transition", state:"solid", year:null, config:"[Ar] 3d⁶ 4s²", group:8, period:4 },
  { z:27, sym:"Co", name:"Cobalt", name_zh:"钴", mass:"58.933", cat:"transition", state:"solid", year:1735, config:"[Ar] 3d⁷ 4s²", group:9, period:4 },
  { z:28, sym:"Ni", name:"Nickel", name_zh:"镍", mass:"58.693", cat:"transition", state:"solid", year:1751, config:"[Ar] 3d⁸ 4s²", group:10, period:4 },
  { z:29, sym:"Cu", name:"Copper", name_zh:"铜", mass:"63.546", cat:"transition", state:"solid", year:null, config:"[Ar] 3d¹⁰ 4s¹", group:11, period:4 },
  { z:30, sym:"Zn", name:"Zinc", name_zh:"锌", mass:"65.38", cat:"transition", state:"solid", year:null, config:"[Ar] 3d¹⁰ 4s²", group:12, period:4 },
  { z:31, sym:"Ga", name:"Gallium", name_zh:"镓", mass:"69.723", cat:"post-trans", state:"solid", year:1875, config:"[Ar] 3d¹⁰ 4s² 4p¹", group:13, period:4 },
  { z:32, sym:"Ge", name:"Germanium", name_zh:"锗", mass:"72.630", cat:"metalloid", state:"solid", year:1886, config:"[Ar] 3d¹⁰ 4s² 4p²", group:14, period:4 },
  { z:33, sym:"As", name:"Arsenic", name_zh:"砷", mass:"74.922", cat:"metalloid", state:"solid", year:null, config:"[Ar] 3d¹⁰ 4s² 4p³", group:15, period:4 },
  { z:34, sym:"Se", name:"Selenium", name_zh:"硒", mass:"78.971", cat:"nonmetal", state:"solid", year:1817, config:"[Ar] 3d¹⁰ 4s² 4p⁴", group:16, period:4 },
  { z:35, sym:"Br", name:"Bromine", name_zh:"溴", mass:"79.904", cat:"halogen", state:"liquid", year:1826, config:"[Ar] 3d¹⁰ 4s² 4p⁵", group:17, period:4 },
  { z:36, sym:"Kr", name:"Krypton", name_zh:"氪", mass:"83.798", cat:"noble-gas", state:"gas", year:1898, config:"[Ar] 3d¹⁰ 4s² 4p⁶", group:18, period:4 },
  { z:37, sym:"Rb", name:"Rubidium", name_zh:"铷", mass:"85.468", cat:"alkali", state:"solid", year:1861, config:"[Kr] 5s¹", group:1, period:5 },
  { z:38, sym:"Sr", name:"Strontium", name_zh:"锶", mass:"87.62", cat:"alkaline", state:"solid", year:1790, config:"[Kr] 5s²", group:2, period:5 },
  { z:39, sym:"Y", name:"Yttrium", name_zh:"钇", mass:"88.906", cat:"transition", state:"solid", year:1794, config:"[Kr] 4d¹ 5s²", group:3, period:5 },
  { z:40, sym:"Zr", name:"Zirconium", name_zh:"锆", mass:"91.224", cat:"transition", state:"solid", year:1789, config:"[Kr] 4d² 5s²", group:4, period:5 },
  { z:41, sym:"Nb", name:"Niobium", name_zh:"铌", mass:"92.906", cat:"transition", state:"solid", year:1801, config:"[Kr] 4d⁴ 5s¹", group:5, period:5 },
  { z:42, sym:"Mo", name:"Molybdenum", name_zh:"钼", mass:"95.96", cat:"transition", state:"solid", year:1778, config:"[Kr] 4d⁵ 5s¹", group:6, period:5 },
  { z:43, sym:"Tc", name:"Technetium", name_zh:"锝", mass:"[98]", cat:"transition", state:"solid", year:1937, config:"[Kr] 4d⁵ 5s²", group:7, period:5 },
  { z:44, sym:"Ru", name:"Ruthenium", name_zh:"钌", mass:"101.07", cat:"transition", state:"solid", year:1844, config:"[Kr] 4d⁷ 5s¹", group:8, period:5 },
  { z:45, sym:"Rh", name:"Rhodium", name_zh:"铑", mass:"102.91", cat:"transition", state:"solid", year:1803, config:"[Kr] 4d⁸ 5s¹", group:9, period:5 },
  { z:46, sym:"Pd", name:"Palladium", name_zh:"钯", mass:"106.42", cat:"transition", state:"solid", year:1803, config:"[Kr] 4d¹⁰", group:10, period:5 },
  { z:47, sym:"Ag", name:"Silver", name_zh:"银", mass:"107.87", cat:"transition", state:"solid", year:null, config:"[Kr] 4d¹⁰ 5s¹", group:11, period:5 },
  { z:48, sym:"Cd", name:"Cadmium", name_zh:"镉", mass:"112.41", cat:"transition", state:"solid", year:1817, config:"[Kr] 4d¹⁰ 5s²", group:12, period:5 },
  { z:49, sym:"In", name:"Indium", name_zh:"铟", mass:"114.82", cat:"post-trans", state:"solid", year:1863, config:"[Kr] 4d¹⁰ 5s² 5p¹", group:13, period:5 },
  { z:50, sym:"Sn", name:"Tin", name_zh:"锡", mass:"118.71", cat:"post-trans", state:"solid", year:null, config:"[Kr] 4d¹⁰ 5s² 5p²", group:14, period:5 },
  { z:51, sym:"Sb", name:"Antimony", name_zh:"锑", mass:"121.76", cat:"metalloid", state:"solid", year:null, config:"[Kr] 4d¹⁰ 5s² 5p³", group:15, period:5 },
  { z:52, sym:"Te", name:"Tellurium", name_zh:"碲", mass:"127.60", cat:"metalloid", state:"solid", year:1782, config:"[Kr] 4d¹⁰ 5s² 5p⁴", group:16, period:5 },
  { z:53, sym:"I", name:"Iodine", name_zh:"碘", mass:"126.90", cat:"halogen", state:"solid", year:1811, config:"[Kr] 4d¹⁰ 5s² 5p⁵", group:17, period:5 },
  { z:54, sym:"Xe", name:"Xenon", name_zh:"氙", mass:"131.29", cat:"noble-gas", state:"gas", year:1898, config:"[Kr] 4d¹⁰ 5s² 5p⁶", group:18, period:5 },
  { z:55, sym:"Cs", name:"Cesium", name_zh:"铯", mass:"132.91", cat:"alkali", state:"solid", year:1860, config:"[Xe] 6s¹", group:1, period:6 },
  { z:56, sym:"Ba", name:"Barium", name_zh:"钡", mass:"137.33", cat:"alkaline", state:"solid", year:1808, config:"[Xe] 6s²", group:2, period:6 },
  { z:57, sym:"La", name:"Lanthanum", name_zh:"镧", mass:"138.91", cat:"lanthanide", state:"solid", year:1839, config:"[Xe] 5d¹ 6s²", group:3, period:6 },
  { z:58, sym:"Ce", name:"Cerium", name_zh:"铈", mass:"140.12", cat:"lanthanide", state:"solid", year:1803, config:"[Xe] 4f¹ 5d¹ 6s²", group:null, period:9 },
  { z:59, sym:"Pr", name:"Praseodymium", name_zh:"镨", mass:"140.91", cat:"lanthanide", state:"solid", year:1885, config:"[Xe] 4f³ 6s²", group:null, period:9 },
  { z:60, sym:"Nd", name:"Neodymium", name_zh:"钕", mass:"144.24", cat:"lanthanide", state:"solid", year:1885, config:"[Xe] 4f⁴ 6s²", group:null, period:9 },
  { z:61, sym:"Pm", name:"Promethium", name_zh:"钷", mass:"[145]", cat:"lanthanide", state:"solid", year:1945, config:"[Xe] 4f⁵ 6s²", group:null, period:9 },
  { z:62, sym:"Sm", name:"Samarium", name_zh:"钐", mass:"150.36", cat:"lanthanide", state:"solid", year:1879, config:"[Xe] 4f⁶ 6s²", group:null, period:9 },
  { z:63, sym:"Eu", name:"Europium", name_zh:"铕", mass:"151.96", cat:"lanthanide", state:"solid", year:1901, config:"[Xe] 4f⁷ 6s²", group:null, period:9 },
  { z:64, sym:"Gd", name:"Gadolinium", name_zh:"钆", mass:"157.25", cat:"lanthanide", state:"solid", year:1880, config:"[Xe] 4f⁷ 5d¹ 6s²", group:null, period:9 },
  { z:65, sym:"Tb", name:"Terbium", name_zh:"铽", mass:"158.93", cat:"lanthanide", state:"solid", year:1843, config:"[Xe] 4f⁹ 6s²", group:null, period:9 },
  { z:66, sym:"Dy", name:"Dysprosium", name_zh:"镝", mass:"162.50", cat:"lanthanide", state:"solid", year:1886, config:"[Xe] 4f¹⁰ 6s²", group:null, period:9 },
  { z:67, sym:"Ho", name:"Holmium", name_zh:"钬", mass:"164.93", cat:"lanthanide", state:"solid", year:1867, config:"[Xe] 4f¹¹ 6s²", group:null, period:9 },
  { z:68, sym:"Er", name:"Erbium", name_zh:"铒", mass:"167.26", cat:"lanthanide", state:"solid", year:1843, config:"[Xe] 4f¹² 6s²", group:null, period:9 },
  { z:69, sym:"Tm", name:"Thulium", name_zh:"铥", mass:"168.93", cat:"lanthanide", state:"solid", year:1879, config:"[Xe] 4f¹³ 6s²", group:null, period:9 },
  { z:70, sym:"Yb", name:"Ytterbium", name_zh:"镱", mass:"173.05", cat:"lanthanide", state:"solid", year:1878, config:"[Xe] 4f¹⁴ 6s²", group:null, period:9 },
  { z:71, sym:"Lu", name:"Lutetium", name_zh:"镥", mass:"174.97", cat:"lanthanide", state:"solid", year:1907, config:"[Xe] 4f¹⁴ 5d¹ 6s²", group:null, period:9 },
  { z:72, sym:"Hf", name:"Hafnium", name_zh:"铪", mass:"178.49", cat:"transition", state:"solid", year:1923, config:"[Xe] 4f¹⁴ 5d² 6s²", group:4, period:6 },
  { z:73, sym:"Ta", name:"Tantalum", name_zh:"钽", mass:"180.95", cat:"transition", state:"solid", year:1802, config:"[Xe] 4f¹⁴ 5d³ 6s²", group:5, period:6 },
  { z:74, sym:"W", name:"Tungsten", name_zh:"钨", mass:"183.84", cat:"transition", state:"solid", year:1783, config:"[Xe] 4f¹⁴ 5d⁴ 6s²", group:6, period:6 },
  { z:75, sym:"Re", name:"Rhenium", name_zh:"铼", mass:"186.21", cat:"transition", state:"solid", year:1925, config:"[Xe] 4f¹⁴ 5d⁵ 6s²", group:7, period:6 },
  { z:76, sym:"Os", name:"Osmium", name_zh:"锇", mass:"190.23", cat:"transition", state:"solid", year:1803, config:"[Xe] 4f¹⁴ 5d⁶ 6s²", group:8, period:6 },
  { z:77, sym:"Ir", name:"Iridium", name_zh:"铱", mass:"192.22", cat:"transition", state:"solid", year:1803, config:"[Xe] 4f¹⁴ 5d⁷ 6s²", group:9, period:6 },
  { z:78, sym:"Pt", name:"Platinum", name_zh:"铂", mass:"195.08", cat:"transition", state:"solid", year:1735, config:"[Xe] 4f¹⁴ 5d⁹ 6s¹", group:10, period:6 },
  { z:79, sym:"Au", name:"Gold", name_zh:"金", mass:"196.97", cat:"transition", state:"solid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹", group:11, period:6 },
  { z:80, sym:"Hg", name:"Mercury", name_zh:"汞", mass:"200.59", cat:"transition", state:"liquid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²", group:12, period:6 },
  { z:81, sym:"Tl", name:"Thallium", name_zh:"铊", mass:"204.38", cat:"post-trans", state:"solid", year:1861, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", group:13, period:6 },
  { z:82, sym:"Pb", name:"Lead", name_zh:"铅", mass:"207.2", cat:"post-trans", state:"solid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", group:14, period:6 },
  { z:83, sym:"Bi", name:"Bismuth", name_zh:"铋", mass:"208.98", cat:"post-trans", state:"solid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", group:15, period:6 },
  { z:84, sym:"Po", name:"Polonium", name_zh:"钋", mass:"[209]", cat:"metalloid", state:"solid", year:1898, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", group:16, period:6 },
  { z:85, sym:"At", name:"Astatine", name_zh:"砹", mass:"[210]", cat:"halogen", state:"solid", year:1940, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", group:17, period:6 },
  { z:86, sym:"Rn", name:"Radon", name_zh:"氡", mass:"[222]", cat:"noble-gas", state:"gas", year:1900, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", group:18, period:6 },
  { z:87, sym:"Fr", name:"Francium", name_zh:"钫", mass:"[223]", cat:"alkali", state:"solid", year:1939, config:"[Rn] 7s¹", group:1, period:7 },
  { z:88, sym:"Ra", name:"Radium", name_zh:"镭", mass:"[226]", cat:"alkaline", state:"solid", year:1898, config:"[Rn] 7s²", group:2, period:7 },
  { z:89, sym:"Ac", name:"Actinium", name_zh:"锕", mass:"[227]", cat:"actinide", state:"solid", year:1899, config:"[Rn] 6d¹ 7s²", group:3, period:7 },
  { z:90, sym:"Th", name:"Thorium", name_zh:"钍", mass:"232.04", cat:"actinide", state:"solid", year:1829, config:"[Rn] 6d² 7s²", group:null, period:10 },
  { z:91, sym:"Pa", name:"Protactinium", name_zh:"镤", mass:"231.04", cat:"actinide", state:"solid", year:1913, config:"[Rn] 5f² 6d¹ 7s²", group:null, period:10 },
  { z:92, sym:"U", name:"Uranium", name_zh:"铀", mass:"238.03", cat:"actinide", state:"solid", year:1789, config:"[Rn] 5f³ 6d¹ 7s²", group:null, period:10 },
  { z:93, sym:"Np", name:"Neptunium", name_zh:"镎", mass:"[237]", cat:"actinide", state:"solid", year:1940, config:"[Rn] 5f⁴ 6d¹ 7s²", group:null, period:10 },
  { z:94, sym:"Pu", name:"Plutonium", name_zh:"钚", mass:"[244]", cat:"actinide", state:"solid", year:1940, config:"[Rn] 5f⁶ 7s²", group:null, period:10 },
  { z:95, sym:"Am", name:"Americium", name_zh:"镅", mass:"[243]", cat:"actinide", state:"solid", year:1944, config:"[Rn] 5f⁷ 7s²", group:null, period:10 },
  { z:96, sym:"Cm", name:"Curium", name_zh:"锔", mass:"[247]", cat:"actinide", state:"solid", year:1944, config:"[Rn] 5f⁷ 6d¹ 7s²", group:null, period:10 },
  { z:97, sym:"Bk", name:"Berkelium", name_zh:"锫", mass:"[247]", cat:"actinide", state:"solid", year:1949, config:"[Rn] 5f⁹ 7s²", group:null, period:10 },
  { z:98, sym:"Cf", name:"Californium", name_zh:"锎", mass:"[251]", cat:"actinide", state:"solid", year:1950, config:"[Rn] 5f¹⁰ 7s²", group:null, period:10 },
  { z:99, sym:"Es", name:"Einsteinium", name_zh:"锿", mass:"[252]", cat:"actinide", state:"solid", year:1952, config:"[Rn] 5f¹¹ 7s²", group:null, period:10 },
  { z:100, sym:"Fm", name:"Fermium", name_zh:"镄", mass:"[257]", cat:"actinide", state:"solid", year:1952, config:"[Rn] 5f¹² 7s²", group:null, period:10 },
  { z:101, sym:"Md", name:"Mendelevium", name_zh:"钔", mass:"[258]", cat:"actinide", state:"solid", year:1955, config:"[Rn] 5f¹³ 7s²", group:null, period:10 },
  { z:102, sym:"No", name:"Nobelium", name_zh:"锘", mass:"[259]", cat:"actinide", state:"solid", year:1958, config:"[Rn] 5f¹⁴ 7s²", group:null, period:10 },
  { z:103, sym:"Lr", name:"Lawrencium", name_zh:"铹", mass:"[266]", cat:"actinide", state:"solid", year:1961, config:"[Rn] 5f¹⁴ 7s² 7p¹", group:null, period:10 },
  { z:104, sym:"Rf", name:"Rutherfordium", name_zh:"𬬻", mass:"[267]", cat:"transition", state:"solid", year:1969, config:"[Rn] 5f¹⁴ 6d² 7s²", group:4, period:7 },
  { z:105, sym:"Db", name:"Dubnium", name_zh:"𬭊", mass:"[268]", cat:"transition", state:"solid", year:1970, config:"[Rn] 5f¹⁴ 6d³ 7s²", group:5, period:7 },
  { z:106, sym:"Sg", name:"Seaborgium", name_zh:"𬭳", mass:"[269]", cat:"transition", state:"solid", year:1974, config:"[Rn] 5f¹⁴ 6d⁴ 7s²", group:6, period:7 },
  { z:107, sym:"Bh", name:"Bohrium", name_zh:"𬭛", mass:"[270]", cat:"transition", state:"solid", year:1981, config:"[Rn] 5f¹⁴ 6d⁵ 7s²", group:7, period:7 },
  { z:108, sym:"Hs", name:"Hassium", name_zh:"𬭶", mass:"[269]", cat:"transition", state:"solid", year:1984, config:"[Rn] 5f¹⁴ 6d⁶ 7s²", group:8, period:7 },
  { z:109, sym:"Mt", name:"Meitnerium", name_zh:"鿏", mass:"[278]", cat:"unknown", state:"unknown", year:1982, config:"[Rn] 5f¹⁴ 6d⁷ 7s²", group:9, period:7 },
  { z:110, sym:"Ds", name:"Darmstadtium", name_zh:"𫟼", mass:"[281]", cat:"unknown", state:"unknown", year:1994, config:"[Rn] 5f¹⁴ 6d⁸ 7s²", group:10, period:7 },
  { z:111, sym:"Rg", name:"Roentgenium", name_zh:"𬬭", mass:"[282]", cat:"unknown", state:"unknown", year:1994, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s¹", group:11, period:7 },
  { z:112, sym:"Cn", name:"Copernicium", name_zh:"鿔", mass:"[285]", cat:"transition", state:"gas", year:1996, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s²", group:12, period:7 },
  { z:113, sym:"Nh", name:"Nihonium", name_zh:"鉨", mass:"[286]", cat:"unknown", state:"unknown", year:2004, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", group:13, period:7 },
  { z:114, sym:"Fl", name:"Flerovium", name_zh:"𫓧", mass:"[289]", cat:"unknown", state:"unknown", year:1999, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", group:14, period:7 },
  { z:115, sym:"Mc", name:"Moscovium", name_zh:"镆", mass:"[290]", cat:"unknown", state:"unknown", year:2003, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", group:15, period:7 },
  { z:116, sym:"Lv", name:"Livermorium", name_zh:"𫟷", mass:"[293]", cat:"unknown", state:"unknown", year:2000, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", group:16, period:7 },
  { z:117, sym:"Ts", name:"Tennessine", name_zh:"鿬", mass:"[294]", cat:"halogen", state:"unknown", year:2010, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", group:17, period:7 },
  { z:118, sym:"Og", name:"Oganesson", name_zh:"鿫", mass:"[294]", cat:"noble-gas", state:"unknown", year:2002, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", group:18, period:7 },
];

/* ═══════════════════════════════════════════════════════════════════════
   I18N DICTIONARY
═══════════════════════════════════════════════════════════════════════ */
const I18N = {
  en: {
    title: "Periodic Table",
    subtitle: "118 Elements · Liquid Glass Interface",
    search_placeholder: "Search element or symbol…",
    modal_3d_label: "Atomic Model",
    drag_hint: "↻ Drag to rotate",
    theme_toggle_title: "Toggle Theme",
    lang_toggle_title: "Switch Language",

    cat_alkali: "Alkali Metals",
    cat_alkaline: "Alkaline Earth Metals",
    cat_lanthanide: "Lanthanides",
    cat_actinide: "Actinides",
    cat_transition: "Transition Metals",
    cat_post_trans: "Post-transition Metals",
    cat_metalloid: "Metalloids",
    cat_nonmetal: "Nonmetals",
    cat_halogen: "Halogens",
    cat_noble_gas: "Noble Gases",
    cat_unknown: "Unknown Properties",

    detail_atomic_mass: "Atomic Mass",
    detail_year_discovered: "Year Discovered",
    detail_electron_config: "Electron Configuration",
    detail_state: "State (Room Temp)",
    detail_group_period: "Group / Period",

    state_solid: "Solid",
    state_liquid: "Liquid",
    state_gas: "Gas",
    state_unknown: "Unknown",

    ancient_unknown: "Ancient / Unknown",
    f_block: "f-block",
    group_label: "Group",
    period_label: "Period",
  },
  zh: {
    title: "元素周期表",
    subtitle: "118种元素 · 液态玻璃界面",
    search_placeholder: "搜索元素或符号…",
    modal_3d_label: "原子模型",
    drag_hint: "↻ 拖拽旋转",
    theme_toggle_title: "切换主题",
    lang_toggle_title: "切换语言",

    cat_alkali: "碱金属",
    cat_alkaline: "碱土金属",
    cat_lanthanide: "镧系元素",
    cat_actinide: "锕系元素",
    cat_transition: "过渡金属",
    cat_post_trans: "后过渡金属",
    cat_metalloid: "准金属",
    cat_nonmetal: "非金属",
    cat_halogen: "卤素",
    cat_noble_gas: "稀有气体",
    cat_unknown: "未知属性",

    detail_atomic_mass: "原子质量",
    detail_year_discovered: "发现年份",
    detail_electron_config: "电子排布",
    detail_state: "状态 (室温)",
    detail_group_period: "族 / 周期",

    state_solid: "固体",
    state_liquid: "液体",
    state_gas: "气体",
    state_unknown: "未知",

    ancient_unknown: "古代 / 未知",
    f_block: "f区",
    group_label: "族",
    period_label: "周期",
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   STATE — Theme & Language
═══════════════════════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('element-lang') || 'en';
let currentTheme = localStorage.getItem('element-theme') || 'dark';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key]) || key;
}

function getElName(el) {
  return currentLang === 'zh' ? el.name_zh : el.name;
}

function getCatLabel(cat) {
  const keyMap = {
    "alkali": "cat_alkali",
    "alkaline": "cat_alkaline",
    "lanthanide": "cat_lanthanide",
    "actinide": "cat_actinide",
    "transition": "cat_transition",
    "post-trans": "cat_post_trans",
    "metalloid": "cat_metalloid",
    "nonmetal": "cat_nonmetal",
    "halogen": "cat_halogen",
    "noble-gas": "cat_noble_gas",
    "unknown": "cat_unknown",
  };
  return t(keyMap[cat] || cat);
}

/* ═══════════════════════════════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════════════════════════════ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }
}

document.getElementById('themeToggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('element-theme', currentTheme);
  applyTheme();
});

/* ═══════════════════════════════════════════════════════════════════════
   LANGUAGE TOGGLE & UI UPDATE
═══════════════════════════════════════════════════════════════════════ */
function applyLanguage() {
  document.documentElement.lang = currentLang;

  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = currentLang === 'zh' ? 'EN' : '中';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    el.title = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });

  const tiles = document.querySelectorAll('.element');
  tiles.forEach(t => {
    const z = parseInt(t.dataset.z);
    const el = ELEMENTS[z - 1];
    const nameSpan = t.querySelector('.el-name');
    if (nameSpan) {
      nameSpan.textContent = currentLang === 'zh' ? el.name_zh : el.name;
    }
  });

  const legendItems = document.querySelectorAll('.legend-item');
  legendItems.forEach(item => {
    const cat = item.dataset.cat;
    const label = getCatLabel(cat);
    const dot = item.querySelector('.legend-dot');
    if (dot) {
      item.innerHTML = '';
      item.appendChild(dot);
      item.appendChild(document.createTextNode(' ' + label));
    }
  });

  const modalDetail = document.getElementById('modalDetail');
  if (modalDetail && modalDetail.dataset.z) {
    const el = ELEMENTS[parseInt(modalDetail.dataset.z) - 1];
    if (el) renderModalDetail(el);
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('element-lang', currentLang);
  applyLanguage();
});

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY META
═══════════════════════════════════════════════════════════════════════ */
const CAT_META = {
  "alkali": { color:"var(--c-alkali)" },
  "alkaline": { color:"var(--c-alkaline)" },
  "lanthanide": { color:"var(--c-lanthanide)" },
  "actinide": { color:"var(--c-actinide)" },
  "transition": { color:"var(--c-transition)" },
  "post-trans": { color:"var(--c-post-trans)" },
  "metalloid": { color:"var(--c-metalloid)" },
  "nonmetal": { color:"var(--c-nonmetal)" },
  "halogen": { color:"var(--c-halogen)" },
  "noble-gas": { color:"var(--c-noble)" },
  "unknown": { color:"var(--c-unknown)" },
};

/* ═══════════════════════════════════════════════════════════════════════
   BUILD LEGEND
═══════════════════════════════════════════════════════════════════════ */
let activeFilter = null;
const legendEl = document.getElementById('legend');
Object.entries(CAT_META).forEach(([cat, meta]) => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.dataset.cat = cat;
  const label = getCatLabel(cat);
  item.innerHTML = `<span class="legend-dot" style="background:${meta.color}"></span> ${label}`;
  item.addEventListener('click', () => toggleFilter(cat, item));
  legendEl.appendChild(item);
});

function toggleFilter(cat, itemEl) {
  const allTiles = document.querySelectorAll('.element');
  const allLegend = document.querySelectorAll('.legend-item');
  if (activeFilter === cat) {
    activeFilter = null;
    allTiles.forEach(t => t.classList.remove('dimmed','highlighted'));
    allLegend.forEach(l => l.classList.remove('active'));
  } else {
    activeFilter = cat;
    allLegend.forEach(l => l.classList.remove('active'));
    itemEl.classList.add('active');
    allTiles.forEach(t => {
      if (t.dataset.cat === cat) {
        t.classList.remove('dimmed'); t.classList.add('highlighted');
      } else {
        t.classList.add('dimmed'); t.classList.remove('highlighted');
      }
    });
  }
}

/* ═══════════════════════════════════════════════════════════════════════
   BUILD PERIODIC GRID
═══════════════════════════════════════════════════════════════════════ */
const grid = document.getElementById('periodicGrid');

function getGridPos(el) {
  if (el.period === 9) {
    const idx = el.z - 58;
    return { col: idx + 4, row: 9 };
  }
  if (el.period === 10) {
    const idx = el.z - 90;
    return { col: idx + 4, row: 10 };
  }
  const col = el.group;
  let row = el.period;
  return { col, row };
}

ELEMENTS.forEach((el, idx) => {
  const tile = document.createElement('div');
  tile.className = 'element';
  tile.dataset.z = el.z;
  tile.dataset.cat = el.cat;

  const colorMap = {
    "alkali": "var(--c-alkali)",
    "alkaline": "var(--c-alkaline)",
    "lanthanide": "var(--c-lanthanide)",
    "actinide": "var(--c-actinide)",
    "transition": "var(--c-transition)",
    "post-trans": "var(--c-post-trans)",
    "metalloid": "var(--c-metalloid)",
    "nonmetal": "var(--c-nonmetal)",
    "halogen": "var(--c-halogen)",
    "noble-gas": "var(--c-noble)",
    "unknown": "var(--c-unknown)",
  };
  tile.style.setProperty('--cat-color', colorMap[el.cat] || 'rgba(255,255,255,0.2)');

  tile.style.animationDelay = `${0.008 * idx}s`;

  const displayName = getElName(el);
  tile.innerHTML = `
    <span class="el-number">${el.z}</span>
    <span class="el-symbol">${el.sym}</span>
    <span class="el-name">${displayName}</span>
    <span class="el-mass">${el.mass}</span>
  `;

  const pos = getGridPos(el);
  tile.style.gridColumn = pos.col;
  tile.style.gridRow = pos.row;

  tile.addEventListener('mouseenter', e => showTooltip(e, el));
  tile.addEventListener('mouseleave', hideTooltip);
  tile.addEventListener('mousemove', moveTooltip);

  tile.addEventListener('click', () => openModal(el));

  grid.appendChild(tile);
});

function makeRowLabel(text, col, row) {
  const label = document.createElement('div');
  label.style.gridColumn = `${col}`;
  label.style.gridRow = `${row}`;
  label.style.display = 'flex';
  label.style.alignItems = 'center';
  label.style.justifyContent = 'flex-end';
  label.style.paddingRight = '6px';
  label.style.fontSize = '9px';
  label.style.color = 'var(--text-muted)';
  label.style.letterSpacing = '0.4px';
  label.style.textTransform = 'uppercase';
  label.style.fontWeight = '500';
  label.textContent = text;
  grid.appendChild(label);
}
makeRowLabel('Ln', 3, 9);
makeRowLabel('An', 3, 10);

/* ═══════════════════════════════════════════════════════════════════════
   TOOLTIP
═══════════════════════════════════════════════════════════════════════ */
const tooltip = document.getElementById('tooltip');
let tooltipVisible = false;

function showTooltip(e, el) {
  const name = getElName(el);
  const catLabel = getCatLabel(el.cat);
  tooltip.textContent = `${name} — ${catLabel}`;
  tooltip.classList.add('show');
  tooltipVisible = true;
}

function hideTooltip() {
  tooltip.classList.remove('show');
  tooltipVisible = false;
}

function moveTooltip(e) {
  if (!tooltipVisible) return;
  tooltip.style.left = `${e.clientX}px`;
  tooltip.style.top = `${e.clientY}px`;
}

/* ═══════════════════════════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════════════════════════ */
document.getElementById('searchInput').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();
  const tiles = document.querySelectorAll('.element');
  if (!q) {
    tiles.forEach(t => t.classList.remove('dimmed','highlighted'));
    return;
  }
  tiles.forEach(t => {
    const z = parseInt(t.dataset.z);
    const el = ELEMENTS[z - 1];
    const match = el.name.toLowerCase().includes(q)
      || el.name_zh.includes(q)
      || el.sym.toLowerCase().includes(q)
      || String(el.z) === q;
    if (match) {
      t.classList.remove('dimmed'); t.classList.add('highlighted');
    } else {
      t.classList.add('dimmed'); t.classList.remove('highlighted');
    }
  });
});

/* ═══════════════════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════════════════ */
const overlay = document.getElementById('modalOverlay');
const detailPanel = document.getElementById('modalDetail');
const closeBtn = document.getElementById('modalClose');
let threeRenderer, threeScene, threeCamera, threeAnimId;
let isDragging = false, prevMouse = {x:0,y:0}, atomGroup;

function renderModalDetail(el) {
  const colorMap = {
    "alkali":"var(--c-alkali)","alkaline":"var(--c-alkaline)",
    "lanthanide":"var(--c-lanthanide)","actinide":"var(--c-actinide)",
    "transition":"var(--c-transition)","post-trans":"var(--c-post-trans)",
    "metalloid":"var(--c-metalloid)","nonmetal":"var(--c-nonmetal)",
    "halogen":"var(--c-halogen)","noble-gas":"var(--c-noble)","unknown":"var(--c-unknown)"
  };
  const catColor = colorMap[el.cat] || 'rgba(255,255,255,0.5)';
  const catLabel = getCatLabel(el.cat);
  const displayName = getElName(el);
  const stateClass = { solid:'state-solid', liquid:'state-liquid', gas:'state-gas', unknown:'state-unknown' }[el.state] || 'state-unknown';
  const stateIcon = { solid:'\u2B1B', liquid:'\uD83D\uDCA7', gas:'\uD83D\uDCA8', unknown:'?' }[el.state] || '?';
  const stateLabel = t('state_' + el.state);
  const discovery = el.year ? `${el.year}` : t('ancient_unknown');
  const groupPeriod = (el.group ? t('group_label') + ' ' + el.group : t('f_block'))
    + ' · ' + t('period_label') + ' ' + (el.period <= 8 ? el.period : el.period === 9 ? 6 : 7);

  detailPanel.dataset.z = el.z;
  detailPanel.innerHTML = `
    <div class="detail-category" style="color:${catColor}">${catLabel}</div>
    <div class="detail-symbol-row">
      <span class="detail-symbol">${el.sym}</span>
      <span class="detail-number">#${el.z}</span>
    </div>
    <div class="detail-name">${displayName}</div>
    <div class="detail-divider"></div>
    <div class="detail-grid">
      <div class="detail-field">
        <span class="detail-label">${t('detail_atomic_mass')}</span>
        <span class="detail-value">${el.mass} u</span>
      </div>
      <div class="detail-field">
        <span class="detail-label">${t('detail_year_discovered')}</span>
        <span class="detail-value">${discovery}</span>
      </div>
      <div class="detail-field full">
        <span class="detail-label">${t('detail_electron_config')}</span>
        <span class="detail-value mono">${el.config}</span>
      </div>
      <div class="detail-field">
        <span class="detail-label">${t('detail_state')}</span>
        <span class="detail-value"><span class="state-badge ${stateClass}">${stateIcon} ${stateLabel}</span></span>
      </div>
      <div class="detail-field">
        <span class="detail-label">${t('detail_group_period')}</span>
        <span class="detail-value">${groupPeriod}</span>
      </div>
    </div>
  `;
}

function openModal(el) {
  renderModalDetail(el);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => buildAtomScene(el));
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  detailPanel.dataset.z = '';
  destroyThree();
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══════════════════════════════════════════════════════════════════════
   THREE.JS ATOMIC VISUALISATION
═══════════════════════════════════════════════════════════════════════ */
function destroyThree() {
  if (threeAnimId) cancelAnimationFrame(threeAnimId);
  const canvas = document.getElementById('three-canvas');
  if (canvas) {
    canvas.removeEventListener('mousedown', onDragStart);
    canvas.removeEventListener('mousemove', onDragMove);
    canvas.removeEventListener('mouseup', onDragEnd);
    canvas.removeEventListener('touchstart', onTouchStart);
    canvas.removeEventListener('touchmove', onTouchMove);
    canvas.removeEventListener('touchend', onDragEnd);
  }
  if (threeRenderer) {
    threeRenderer.dispose();
    threeRenderer = null;
  }
  threeScene = null; threeCamera = null; atomGroup = null;
}

function buildAtomScene(el) {
  destroyThree();
  const canvas = document.getElementById('three-canvas');
  const container = document.getElementById('modal3d');
  const W = container.clientWidth || 360;
  const H = container.clientHeight || 280;

  threeRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  threeRenderer.setSize(W, H);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeRenderer.setClearColor(0x000000, 0);

  threeScene = new THREE.Scene();
  threeCamera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  threeCamera.position.set(0, 0, 6);

  threeScene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const pLight = new THREE.PointLight(0x7fc8ff, 2, 20);
  pLight.position.set(4, 4, 4);
  threeScene.add(pLight);
  const pLight2 = new THREE.PointLight(0xff9fcc, 1.5, 20);
  pLight2.position.set(-4, -3, 2);
  threeScene.add(pLight2);

  atomGroup = new THREE.Group();
  threeScene.add(atomGroup);

  const nucleusGroup = new THREE.Group();
  const numNucleons = Math.min(el.z, 20);
  const nucleonGeo = new THREE.SphereGeometry(0.12, 8, 8);
  for (let i = 0; i < numNucleons; i++) {
    const isProton = i < el.z;
    const mat = new THREE.MeshPhongMaterial({
      color: isProton ? 0xff6b9d : 0x4fc3f7,
      shininess: 120, specular: 0xffffff,
    });
    const nucl = new THREE.Mesh(nucleonGeo, mat);
    const theta = (i / numNucleons) * Math.PI * 2;
    const phi = Math.acos(2 * (i / numNucleons) - 1);
    const r = 0.25 + (i % 3) * 0.1;
    nucl.position.set(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
    nucleusGroup.add(nucl);
  }
  atomGroup.add(nucleusGroup);

  const shells = getShellConfig(el.z);
  const shellColors = [0x4fc3f7, 0x7c83f5, 0xff6b9d, 0xffe066, 0x7ee8a2, 0xffaa5c, 0xce93d8];

  shells.forEach((electrons, shellIdx) => {
    const radius = 0.9 + shellIdx * 0.75;
    const ringGeo = new THREE.TorusGeometry(radius, 0.012, 6, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: shellColors[shellIdx % shellColors.length],
      opacity: 0.3, transparent: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = (shellIdx * 0.7 + 0.4);
    ring.rotation.y = (shellIdx * 0.5);
    atomGroup.add(ring);

    const eMat = new THREE.MeshPhongMaterial({
      color: shellColors[shellIdx % shellColors.length],
      emissive: shellColors[shellIdx % shellColors.length],
      emissiveIntensity: 0.4,
      shininess: 200,
    });
    const eGeo = new THREE.SphereGeometry(0.07, 10, 10);

    for (let e = 0; e < electrons; e++) {
      const electronPivot = new THREE.Object3D();
      electronPivot.rotation.x = ring.rotation.x;
      electronPivot.rotation.y = ring.rotation.y;
      const electronMesh = new THREE.Mesh(eGeo, eMat);
      const angle = (e / electrons) * Math.PI * 2;
      electronMesh.position.set(
        radius * Math.cos(angle),
        radius * Math.sin(angle),
        0
      );
      electronPivot.add(electronMesh);
      electronPivot.userData.speed = 0.4 + shellIdx * 0.2 + e * 0.01;
      electronPivot.userData.isElectron = true;
      electronPivot.userData.radius = radius;
      electronPivot.userData.angle = angle;
      electronPivot.userData.shellIdx = shellIdx;
      atomGroup.add(electronPivot);
    }
  });

  canvas.addEventListener('mousedown', onDragStart);
  canvas.addEventListener('mousemove', onDragMove);
  canvas.addEventListener('mouseup', onDragEnd);
  canvas.addEventListener('touchstart', onTouchStart, { passive: true });
  canvas.addEventListener('touchmove', onTouchMove, { passive: true });
  canvas.addEventListener('touchend', onDragEnd);

  let t = 0;
  function animate() {
    threeAnimId = requestAnimationFrame(animate);
    t += 0.012;
    nucleusGroup.rotation.y = t * 0.3;
    nucleusGroup.rotation.x = t * 0.2;

    atomGroup.children.forEach(child => {
      if (child.userData.isElectron) {
        const si = child.userData.shellIdx;
        const speed = child.userData.speed;
        const newAngle = child.userData.angle + t * speed;
        const r = child.userData.radius;
        const mesh = child.children[0];
        mesh.position.set(r * Math.cos(newAngle), r * Math.sin(newAngle), 0);
      }
    });

    threeRenderer.render(threeScene, threeCamera);
  }
  animate();
}

function getShellConfig(z) {
  const maxByShell = [2, 8, 18, 32, 32, 18, 8];
  const shells = [];
  let remaining = z;
  for (let cap of maxByShell) {
    if (remaining <= 0) break;
    const n = Math.min(remaining, cap);
    shells.push(n);
    remaining -= n;
  }
  return shells;
}

function onDragStart(e) { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; }
function onDragMove(e) {
  if (!isDragging || !atomGroup) return;
  const dx = e.clientX - prevMouse.x;
  const dy = e.clientY - prevMouse.y;
  atomGroup.rotation.y += dx * 0.012;
  atomGroup.rotation.x += dy * 0.012;
  prevMouse = { x: e.clientX, y: e.clientY };
}
function onDragEnd() { isDragging = false; }
function onTouchStart(e) {
  if (e.touches.length === 1) onDragStart({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
}
function onTouchMove(e) {
  if (e.touches.length === 1) onDragMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
}

/* ═══════════════════════════════════════════════════════════════════════
   INITIALISATION
═══════════════════════════════════════════════════════════════════════ */
applyTheme();
applyLanguage();
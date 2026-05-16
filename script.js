/* ═══════════════════════════════════════════════════════════════════════
   ELEMENT DATA — 118 Elements
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
   I18N Dictionary
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
   State — Theme & Language
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
   Theme Toggle
═══════════════════════════════════════════════════════════════════════ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }
  refreshParticleColors();
}

document.getElementById('themeToggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('element-theme', currentTheme);
  applyTheme();
});

/* ═══════════════════════════════════════════════════════════════════════
   Language Toggle & UI Update
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
   Category Meta
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
   Build Legend
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
   🫧 LIQUID GLASS ENGINE — shuding/liquid-glass SDF refraction
   Canvas displacement map → SVG feDisplacementMap → backdrop-filter
═══════════════════════════════════════════════════════════════════════ */
const LiquidGlassEngine = (() => {
  const MAP_SIZE = 256;
  let canvas, ctx;
  let activeTile = null;
  let mouseUX = 0.5, mouseUY = 0.5;
  let rafId = null;
  let needsUpdate = false;

  function smoothStep(a, b, t) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  function len(x, y) {
    return Math.sqrt(x * x + y * y);
  }

  // Rounded rectangle SDF — output is negative inside, positive outside
  function roundedRectSDF(x, y, hw, hh, r) {
    const qx = Math.abs(x) - hw + r;
    const qy = Math.abs(y) - hh + r;
    return Math.min(Math.max(qx, qy), 0) + len(Math.max(qx, 0), Math.max(qy, 0)) - r;
  }

  function generateDisplacementMap() {
    const w = MAP_SIZE;
    const h = MAP_SIZE;
    const data = ctx.createImageData(w, h);
    const rawValues = [];
    let maxScale = 0;

    // Mouse offset normalized to [-0.4, 0.4]
    const mx = (mouseUX - 0.5) * 0.5;
    const my = (mouseUY - 0.5) * 0.5;

    for (let i = 0; i < w * h; i++) {
      const x = i % w;
      const y = Math.floor(i / w);
      const ux = x / w - 0.5;
      const uy = y / h - 0.5;

      // SDF for rounded rectangle filling the tile
      const dist = roundedRectSDF(ux, uy, 0.42, 0.42, 0.48);

      // Strong displacement near edges, fading to zero at center
      // Negative dist = inside shape, displacement = 1; positive dist = outside, displacement = 0
      const displacement = smoothStep(0.82, -0.05, dist);

      // Mouse influence: stronger near center, fades near edges
      const mouseInfluence = smoothStep(0, 0.75, displacement);

      // Combine: edge-lens warp + mouse-directed bias
      const dx = ux * displacement + mx * mouseInfluence * 0.3;
      const dy = uy * displacement + my * mouseInfluence * 0.3;

      rawValues.push(dx, dy);
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
    }

    maxScale = Math.max(maxScale, 0.001);

    let idx = 0;
    for (let i = 0; i < w * h * 4; i += 4) {
      const r = rawValues[idx] / maxScale * 0.5 + 0.5;
      const g = rawValues[idx + 1] / maxScale * 0.5 + 0.5;
      data.data[i] = Math.round(r * 255);
      data.data[i + 1] = Math.round(g * 255);
      data.data[i + 2] = 0;
      data.data[i + 3] = 255;
      idx += 2;
    }

    ctx.putImageData(data, 0, 0);

    const mapEl = document.getElementById('lg-displacement-map');
    if (mapEl) {
      const dataUrl = canvas.toDataURL();
      mapEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', dataUrl);
      mapEl.setAttribute('href', dataUrl);
    }
  }

  function renderLoop() {
    if (needsUpdate && (activeTile || modalCardEl)) {
      generateDisplacementMap();
      needsUpdate = false;
    }
    rafId = requestAnimationFrame(renderLoop);
  }

  function init() {
    canvas = document.createElement('canvas');
    canvas.width = MAP_SIZE;
    canvas.height = MAP_SIZE;
    canvas.style.display = 'none';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    generateDisplacementMap();
    rafId = requestAnimationFrame(renderLoop);
  }

  function attach(tile) {
    tile.addEventListener('mouseenter', (e) => {
      if (activeTile && activeTile !== tile) {
        activeTile.classList.remove('liquid-glass-active');
        activeTile.style.transform = '';
        activeTile.style.removeProperty('--mouse-x');
        activeTile.style.removeProperty('--mouse-y');
      }
      activeTile = tile;
      const rect = tile.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      mouseUX = xPct / 100;
      mouseUY = yPct / 100;
      tile.style.setProperty('--mouse-x', `${xPct}%`);
      tile.style.setProperty('--mouse-y', `${yPct}%`);
      tile.classList.add('liquid-glass-active');
      needsUpdate = true;
    });

    tile.addEventListener('mousemove', (e) => {
      if (activeTile !== tile) return;
      const rect = tile.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      mouseUX = xPct / 100;
      mouseUY = yPct / 100;
      needsUpdate = true;

      tile.style.setProperty('--mouse-x', `${xPct}%`);
      tile.style.setProperty('--mouse-y', `${yPct}%`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = e.clientX - rect.left - centerX;
      const tiltY = e.clientY - rect.top - centerY;
      tile.style.transform = `scale(1.14) translateY(-6px) perspective(600px) rotateX(${-tiltY * 0.06}deg) rotateY(${tiltX * 0.06}deg)`;
    });

    tile.addEventListener('mouseleave', () => {
      if (activeTile === tile) {
        tile.classList.remove('liquid-glass-active');
        tile.style.transform = '';
        tile.style.removeProperty('--mouse-x');
        tile.style.removeProperty('--mouse-y');
        activeTile = null;
      }
    });
  }

  /* ── Modal attachment — same SDF refraction on the modal card ── */
  let modalCardEl = null;
  let modalMouseHandler = null;

  function attachModal(card) {
    if (modalCardEl) detachModal();
    modalCardEl = card;
    modalMouseHandler = (e) => {
      if (!modalCardEl) return;
      const rect = modalCardEl.getBoundingClientRect();
      mouseUX = (e.clientX - rect.left) / rect.width;
      mouseUY = (e.clientY - rect.top) / rect.height;
      needsUpdate = true;
    };
    document.addEventListener('mousemove', modalMouseHandler);
    needsUpdate = true;
  }

  function detachModal() {
    if (modalMouseHandler) {
      document.removeEventListener('mousemove', modalMouseHandler);
      modalMouseHandler = null;
    }
    modalCardEl = null;
  }

  return { init, attach, attachModal, detachModal };
})();

/* ═══════════════════════════════════════════════════════════════════════
   Build Periodic Grid
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
  tile.style.setProperty('--cat-color', colorMap[el.cat] || 'rgba(255,255,247,0.2)');

  tile.style.animationDelay = `${0.008 * idx}s`;

  const displayName = getElName(el);
  tile.innerHTML = `
    <div class="liquid-glass-inner"></div>
    <div class="el-cat-dot"></div>
    <div class="category-glow"></div>
    <span class="el-number">${el.z}</span>
    <span class="el-symbol">${el.sym}</span>
    <span class="el-name">${displayName}</span>
    <span class="el-mass">${el.mass}</span>
  `;

  const pos = getGridPos(el);
  tile.style.gridColumn = pos.col;
  tile.style.gridRow = pos.row;

  // Liquid Glass Engine — per-tile SDF distortion
  LiquidGlassEngine.attach(tile);

  tile.addEventListener('mouseenter', e => {
    showTooltip(e, el);
  });

  tile.addEventListener('mouseleave', () => {
    hideTooltip();
  });

  tile.addEventListener('click', () => {
    tile.style.transition = 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    tile.style.transform = 'scale(0.98)';
    setTimeout(() => {
      tile.style.transition = '';
    }, 150);
    openModal(el);
  });

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
   Tooltip
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
   Search
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
   Modal
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
  const catColor = colorMap[el.cat] || 'rgba(255,255,247,0.5)';
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
  const card = document.getElementById('modalCard');
  LiquidGlassEngine.attachModal(card);
  requestAnimationFrame(() => buildAtomScene(el));
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  detailPanel.dataset.z = '';
  LiquidGlassEngine.detachModal();
  destroyThree();
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══════════════════════════════════════════════════════════════════════
   THREE.JS Atomic Visualisation
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
   ⭐ ANTIGRAVITY PARTICLE SYSTEM — Canvas · 118 Elements · Fluid Field
═══════════════════════════════════════════════════════════════════════ */

const _SYMBOLS = [
  'H','He','Li','Be','B','C','N','O','F','Ne',
  'Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca',
  'Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn',
  'Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr',
  'Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn',
  'Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd',
  'Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb',
  'Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg',
  'Tl','Pb','Bi','Po','At','Rn','Fr','Ra','Ac','Th',
  'Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm',
  'Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds',
  'Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'
];

const _CD = ['#6a9df6','#80cbc4','#ffb366','#f08f8f','#9e9eff','#ce93d8','#67d1ed','#ffecb3','#ff8a80','#a5d6a7','#82b1ff','#ea80fc','#b9f6ca','#b388ff','#8c9eff','#84ffff','#ff80ab','#ccff90','#ffd740','#69f0ae','#40c4ff','#e040fb','#ff6e40','#bcaaa4'];
const _CL = ['#1a73e8','#34a853','#f48024','#db4437','#4285f4','#8e44ad','#1aadcf','#ffc107','#e53935','#43a047','#1e88e5','#8e24aa','#00acc1','#3949ab','#7cb342','#00bcd4','#d81b60','#689f38','#ffb300','#00897b','#0288d1','#ab47bc','#f4511e','#78909c'];

const _canvas = document.createElement("canvas");
_canvas.id = "particleCanvas";
document.body.appendChild(_canvas);
const _ctx = _canvas.getContext("2d");

let _W = innerWidth;
let _H = innerHeight;
const _DPR = devicePixelRatio || 1;
_canvas.width = _W * _DPR;
_canvas.height = _H * _DPR;
_canvas.style.width = _W + "px";
_canvas.style.height = _H + "px";
_ctx.setTransform(_DPR, 0, 0, _DPR, 0, 0);

let _particles = [];
let _particlesReady = false;

const _mouse = { x: _W / 2, y: _H / 2, vx: 0, vy: 0 };

window.addEventListener("mousemove", e => {
  _mouse.vx = e.clientX - _mouse.x;
  _mouse.vy = e.clientY - _mouse.y;
  _mouse.x = e.clientX;
  _mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  _W = innerWidth;
  _H = innerHeight;
  _canvas.width = _W * _DPR;
  _canvas.height = _H * _DPR;
  _ctx.setTransform(_DPR, 0, 0, _DPR, 0, 0);
  _generateParticles();
});

const _MAX_PARTICLES = 200;
const _INITIAL_COUNT = 118;

// ─── Multi-frequency flow noise (Google-style organic field) ──────────
function _flowX(x, y, t) {
  return Math.sin(x * 0.002 + t * 0.18 + y * 0.0015) * 0.7
       + Math.sin(x * 0.001 + t * 0.12 + y * 0.003) * 0.5
       + Math.cos(x * 0.003 + t * 0.08 + y * 0.001) * 0.3;
}
function _flowY(x, y, t) {
  return Math.cos(y * 0.002 + t * 0.15 + x * 0.0015) * 0.7
       + Math.cos(y * 0.001 + t * 0.10 + x * 0.003) * 0.5
       + Math.sin(y * 0.003 + t * 0.06 + x * 0.001) * 0.3;
}

class _AParticle {
  constructor(x, y, symIdx) {
    this.bx = x; this.by = y;
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;

    this.sz = 8 + Math.random() * 16;
    this.ci = symIdx % _CD.length;
    this.alp = 0.2 + Math.random() * 0.2;
    this.targetAlp = 0;
    this.lifetime = 8000 + Math.random() * 10000;
    this.birth = performance.now();
    this.symIdx = symIdx;
    this.alive = true;
    this.noise = Math.random() * Math.PI * 2;
  }

  update(ctx, t, mx, my) {
    if (!this.alive) return;

    const age = performance.now() - this.birth;
    if (age < 400) {
      this.targetAlp = this.alp * (age / 400);
    } else if (age > this.lifetime - 800) {
      this.targetAlp = this.alp * ((this.lifetime - age) / 800);
      if (age >= this.lifetime) { this.alive = false; return; }
    } else {
      this.targetAlp = this.alp;
    }
    ctx.globalAlpha = Math.max(0, this.targetAlp);

    const dx = mx - this.x, dy = my - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Antigravity — particles pushed away from mouse
    if (dist < 260 && dist > 1) {
      const force = (260 - dist) / 260;
      this.vx -= (dx / dist) * force * 0.4;
      this.vy -= (dy / dist) * force * 0.4;
    }

    // Multi-frequency flow field (Google-style organic noise)
    this.vx += _flowX(this.x, this.y, t) * 0.012;
    this.vy += _flowY(this.x, this.y, t) * 0.012;

    // Spring back to base position
    this.vx += (this.bx - this.x) * 0.0006;
    this.vy += (this.by - this.y) * 0.0006;

    // Damping
    this.vx *= 0.94;
    this.vy *= 0.94;

    this.x += this.vx;
    this.y += this.vy;

    ctx.fillStyle = _CURRENT_COLORS[this.ci];
    ctx.fillText(_SYMBOLS[this.symIdx], this.x, this.y);
  }
}

let _CURRENT_COLORS = _CD;

function _spawnParticle() {
  const x = Math.random() * _W;
  const y = Math.random() * _H;
  const si = (Math.random() * _SYMBOLS.length) | 0;
  const p = new _AParticle(x, y, si);
  p.bx = x;
  p.by = y;
  _particles.push(p);
}

function _drawParticles(theme, t) {
  const ctx = _ctx, isDark = theme === "dark";
  _CURRENT_COLORS = isDark ? _CD : _CL;
  const mx = _mouse.x, my = _mouse.y;

  // Semi-transparent clear — persistence trail (Google style)
  ctx.fillStyle = isDark ? "rgba(10,10,15,0.15)" : "rgba(240,242,245,0.15)";
  ctx.fillRect(0, 0, _W, _H);

  // Draw with shadow
  ctx.shadowBlur = 12;
  ctx.shadowColor = isDark ? "rgba(79,195,247,0.4)" : "rgba(66,133,244,0.3)";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.font = "600 13px Inter, Nunito, system-ui, sans-serif";

  const dead = [];
  for (let i = 0; i < _particles.length; i++) {
    const p = _particles[i];
    if (!p.alive) { dead.push(i); continue; }
    p.update(ctx, t, mx, my);
  }
  for (const di of dead.sort((a, b) => b - a)) _particles.splice(di, 1);
  while (_particles.length < _MAX_PARTICLES) _spawnParticle();

  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;

  // Connection lines — spatial grid culled
  const _GCELL = 75, MAX_SQ = 5000;
  const _gcols = (_W / _GCELL + 1) | 0;
  const _grid = {};
  for (let i = 0; i < _particles.length; i++) {
    const p = _particles[i];
    if (!p.alive) continue;
    const gi = ((p.x / _GCELL) | 0) + ((p.y / _GCELL) | 0) * _gcols;
    if (!_grid[gi]) _grid[gi] = [];
    _grid[gi].push(i);
  }

  ctx.beginPath();
  let lc = 0;
  for (let i = 0; i < _particles.length; i++) {
    if (!_particles[i].alive) continue;
    const a = _particles[i];
    const gi = ((a.x / _GCELL) | 0) + ((a.y / _GCELL) | 0) * _gcols;
    for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
      const cell = _grid[gi + ox + oy * _gcols]; if (!cell) continue;
      for (let ci = 0; ci < cell.length; ci++) {
        const j = cell[ci]; if (j <= i) continue;
        if (!_particles[j].alive) continue;
        const b = _particles[j], dx = a.x - b.x, dy = a.y - b.y;
        if (dx * dx + dy * dy < MAX_SQ) { ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); lc++; }
      }
    }
  }
  if (lc > 0) {
    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";
    ctx.lineWidth = 0.4; ctx.stroke();
  }
}

function _animate(t) {
  if (_particlesReady) { _drawParticles(currentTheme, t); }
  requestAnimationFrame(_animate);
}

// Assign Worker source and init
const _WORKER_SRC2 = `
self.onmessage = (e) => {
  const { width, height, radius, count } = e.data;
  const k = 30, r2 = radius * radius, cs = radius / 1.4142;
  const gw = Math.ceil(width / cs), gh = Math.ceil(height / cs);
  const grid = new Array(gw * gh), act = [], pts = [];
  function ins(p) { pts.push(p); act.push(p); grid[(p.x / cs) | 0 + (p.y / cs) | 0 * gw] = p; }
  function far(x, y) {
    const gx = (x / cs) | 0, gy = (y / cs) | 0;
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      const nx = gx + i, ny = gy + j;
      if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) continue;
      const n = grid[nx + ny * gw];
      if (n) { const dx = n.x - x, dy = n.y - y; if (dx * dx + dy * dy < r2) return false; }
    }
    return true;
  }
  for (let s = 0; s < 18; s++) ins({ x: Math.random() * width, y: Math.random() * height });
  while (act.length && pts.length < count) {
    const ri = (Math.random() * act.length) | 0, p = act[ri];
    let found = false;
    for (let n = 0; n < k; n++) {
      const a = Math.random() * 6.2832, m = radius * (1 + Math.random());
      const x = p.x + Math.cos(a) * m, y = p.y + Math.sin(a) * m;
      if (x >= 0 && y >= 0 && x < width && y < height && far(x, y)) { ins({ x, y }); found = true; break; }
    }
    if (!found) act.splice(ri, 1);
  }
  self.postMessage(pts);
};
`;

function _generateParticles() {
  try {
    _particlesReady = false;
    const blob = new Blob([_WORKER_SRC2], { type: 'text/javascript' });
    const wrk = new Worker(URL.createObjectURL(blob));
    wrk.postMessage({ width: innerWidth, height: innerHeight, radius: 100, count: _INITIAL_COUNT });
    wrk.onmessage = e => {
      const pts = e.data;
      _particles = [];
      for (let i = 0; i < pts.length && i < _INITIAL_COUNT; i++)
        _particles.push(new _AParticle(pts[i].x, pts[i].y, i % _SYMBOLS.length));
      _particlesReady = true;
      wrk.terminate();
    };
  } catch(e) {
    console.error('Particle Worker error:', e);
    _particlesReady = true; // fallback so page still works
  }
}

_generateParticles();
requestAnimationFrame(_animate);

function refreshParticleColors() {}


/* ═══════════════════════════════════════════════════════════════════════
   INITIALIZATION
═══════════════════════════════════════════════════════════════════════ */
applyTheme();
applyLanguage();
LiquidGlassEngine.init();
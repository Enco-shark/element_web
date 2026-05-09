/* ═══════════════════════════════════════════════════════════════════════
   ELEMENT DATA — 118 elements
═══════════════════════════════════════════════════════════════════════ */
const ELEMENTS = [
  { z:1, sym:"H", name:"Hydrogen", mass:"1.008", cat:"nonmetal", state:"gas", year:1766, config:"1s¹", group:1, period:1 },
  { z:2, sym:"He", name:"Helium", mass:"4.003", cat:"noble-gas", state:"gas", year:1898, config:"1s²", group:18, period:1 },
  { z:3, sym:"Li", name:"Lithium", mass:"6.941", cat:"alkali", state:"solid", year:1817, config:"[He] 2s¹", group:1, period:2 },
  { z:4, sym:"Be", name:"Beryllium", mass:"9.012", cat:"alkaline", state:"solid", year:1798, config:"[He] 2s²", group:2, period:2 },
  { z:5, sym:"B", name:"Boron", mass:"10.81", cat:"metalloid", state:"solid", year:1808, config:"[He] 2s² 2p¹", group:13, period:2 },
  { z:6, sym:"C", name:"Carbon", mass:"12.011", cat:"nonmetal", state:"solid", year:null, config:"[He] 2s² 2p²", group:14, period:2 },
  { z:7, sym:"N", name:"Nitrogen", mass:"14.007", cat:"nonmetal", state:"gas", year:1772, config:"[He] 2s² 2p³", group:15, period:2 },
  { z:8, sym:"O", name:"Oxygen", mass:"15.999", cat:"nonmetal", state:"gas", year:1774, config:"[He] 2s² 2p⁴", group:16, period:2 },
  { z:9, sym:"F", name:"Fluorine", mass:"18.998", cat:"halogen", state:"gas", year:1886, config:"[He] 2s² 2p⁵", group:17, period:2 },
  { z:10, sym:"Ne", name:"Neon", mass:"20.180", cat:"noble-gas", state:"gas", year:1898, config:"[He] 2s² 2p⁶", group:18, period:2 },
  { z:11, sym:"Na", name:"Sodium", mass:"22.990", cat:"alkali", state:"solid", year:1807, config:"[Ne] 3s¹", group:1, period:3 },
  { z:12, sym:"Mg", name:"Magnesium", mass:"24.305", cat:"alkaline", state:"solid", year:1755, config:"[Ne] 3s²", group:2, period:3 },
  { z:13, sym:"Al", name:"Aluminium", mass:"26.982", cat:"post-trans", state:"solid", year:1825, config:"[Ne] 3s² 3p¹", group:13, period:3 },
  { z:14, sym:"Si", name:"Silicon", mass:"28.086", cat:"metalloid", state:"solid", year:1824, config:"[Ne] 3s² 3p²", group:14, period:3 },
  { z:15, sym:"P", name:"Phosphorus", mass:"30.974", cat:"nonmetal", state:"solid", year:1669, config:"[Ne] 3s² 3p³", group:15, period:3 },
  { z:16, sym:"S", name:"Sulfur", mass:"32.06", cat:"nonmetal", state:"solid", year:null, config:"[Ne] 3s² 3p⁴", group:16, period:3 },
  { z:17, sym:"Cl", name:"Chlorine", mass:"35.45", cat:"halogen", state:"gas", year:1774, config:"[Ne] 3s² 3p⁵", group:17, period:3 },
  { z:18, sym:"Ar", name:"Argon", mass:"39.948", cat:"noble-gas", state:"gas", year:1894, config:"[Ne] 3s² 3p⁶", group:18, period:3 },
  { z:19, sym:"K", name:"Potassium", mass:"39.098", cat:"alkali", state:"solid", year:1807, config:"[Ar] 4s¹", group:1, period:4 },
  { z:20, sym:"Ca", name:"Calcium", mass:"40.078", cat:"alkaline", state:"solid", year:1808, config:"[Ar] 4s²", group:2, period:4 },
  { z:21, sym:"Sc", name:"Scandium", mass:"44.956", cat:"transition", state:"solid", year:1879, config:"[Ar] 3d¹ 4s²", group:3, period:4 },
  { z:22, sym:"Ti", name:"Titanium", mass:"47.867", cat:"transition", state:"solid", year:1791, config:"[Ar] 3d² 4s²", group:4, period:4 },
  { z:23, sym:"V", name:"Vanadium", mass:"50.942", cat:"transition", state:"solid", year:1801, config:"[Ar] 3d³ 4s²", group:5, period:4 },
  { z:24, sym:"Cr", name:"Chromium", mass:"51.996", cat:"transition", state:"solid", year:1798, config:"[Ar] 3d⁵ 4s¹", group:6, period:4 },
  { z:25, sym:"Mn", name:"Manganese", mass:"54.938", cat:"transition", state:"solid", year:1774, config:"[Ar] 3d⁵ 4s²", group:7, period:4 },
  { z:26, sym:"Fe", name:"Iron", mass:"55.845", cat:"transition", state:"solid", year:null, config:"[Ar] 3d⁶ 4s²", group:8, period:4 },
  { z:27, sym:"Co", name:"Cobalt", mass:"58.933", cat:"transition", state:"solid", year:1735, config:"[Ar] 3d⁷ 4s²", group:9, period:4 },
  { z:28, sym:"Ni", name:"Nickel", mass:"58.693", cat:"transition", state:"solid", year:1751, config:"[Ar] 3d⁸ 4s²", group:10, period:4 },
  { z:29, sym:"Cu", name:"Copper", mass:"63.546", cat:"transition", state:"solid", year:null, config:"[Ar] 3d¹⁰ 4s¹", group:11, period:4 },
  { z:30, sym:"Zn", name:"Zinc", mass:"65.38", cat:"transition", state:"solid", year:null, config:"[Ar] 3d¹⁰ 4s²", group:12, period:4 },
  { z:31, sym:"Ga", name:"Gallium", mass:"69.723", cat:"post-trans", state:"solid", year:1875, config:"[Ar] 3d¹⁰ 4s² 4p¹", group:13, period:4 },
  { z:32, sym:"Ge", name:"Germanium", mass:"72.630", cat:"metalloid", state:"solid", year:1886, config:"[Ar] 3d¹⁰ 4s² 4p²", group:14, period:4 },
  { z:33, sym:"As", name:"Arsenic", mass:"74.922", cat:"metalloid", state:"solid", year:null, config:"[Ar] 3d¹⁰ 4s² 4p³", group:15, period:4 },
  { z:34, sym:"Se", name:"Selenium", mass:"78.971", cat:"nonmetal", state:"solid", year:1817, config:"[Ar] 3d¹⁰ 4s² 4p⁴", group:16, period:4 },
  { z:35, sym:"Br", name:"Bromine", mass:"79.904", cat:"halogen", state:"liquid", year:1826, config:"[Ar] 3d¹⁰ 4s² 4p⁵", group:17, period:4 },
  { z:36, sym:"Kr", name:"Krypton", mass:"83.798", cat:"noble-gas", state:"gas", year:1898, config:"[Ar] 3d¹⁰ 4s² 4p⁶", group:18, period:4 },
  { z:37, sym:"Rb", name:"Rubidium", mass:"85.468", cat:"alkali", state:"solid", year:1861, config:"[Kr] 5s¹", group:1, period:5 },
  { z:38, sym:"Sr", name:"Strontium", mass:"87.62", cat:"alkaline", state:"solid", year:1790, config:"[Kr] 5s²", group:2, period:5 },
  { z:39, sym:"Y", name:"Yttrium", mass:"88.906", cat:"transition", state:"solid", year:1794, config:"[Kr] 4d¹ 5s²", group:3, period:5 },
  { z:40, sym:"Zr", name:"Zirconium", mass:"91.224", cat:"transition", state:"solid", year:1789, config:"[Kr] 4d² 5s²", group:4, period:5 },
  { z:41, sym:"Nb", name:"Niobium", mass:"92.906", cat:"transition", state:"solid", year:1801, config:"[Kr] 4d⁴ 5s¹", group:5, period:5 },
  { z:42, sym:"Mo", name:"Molybdenum", mass:"95.96", cat:"transition", state:"solid", year:1778, config:"[Kr] 4d⁵ 5s¹", group:6, period:5 },
  { z:43, sym:"Tc", name:"Technetium", mass:"[98]", cat:"transition", state:"solid", year:1937, config:"[Kr] 4d⁵ 5s²", group:7, period:5 },
  { z:44, sym:"Ru", name:"Ruthenium", mass:"101.07", cat:"transition", state:"solid", year:1844, config:"[Kr] 4d⁷ 5s¹", group:8, period:5 },
  { z:45, sym:"Rh", name:"Rhodium", mass:"102.91", cat:"transition", state:"solid", year:1803, config:"[Kr] 4d⁸ 5s¹", group:9, period:5 },
  { z:46, sym:"Pd", name:"Palladium", mass:"106.42", cat:"transition", state:"solid", year:1803, config:"[Kr] 4d¹⁰", group:10, period:5 },
  { z:47, sym:"Ag", name:"Silver", mass:"107.87", cat:"transition", state:"solid", year:null, config:"[Kr] 4d¹⁰ 5s¹", group:11, period:5 },
  { z:48, sym:"Cd", name:"Cadmium", mass:"112.41", cat:"transition", state:"solid", year:1817, config:"[Kr] 4d¹⁰ 5s²", group:12, period:5 },
  { z:49, sym:"In", name:"Indium", mass:"114.82", cat:"post-trans", state:"solid", year:1863, config:"[Kr] 4d¹⁰ 5s² 5p¹", group:13, period:5 },
  { z:50, sym:"Sn", name:"Tin", mass:"118.71", cat:"post-trans", state:"solid", year:null, config:"[Kr] 4d¹⁰ 5s² 5p²", group:14, period:5 },
  { z:51, sym:"Sb", name:"Antimony", mass:"121.76", cat:"metalloid", state:"solid", year:null, config:"[Kr] 4d¹⁰ 5s² 5p³", group:15, period:5 },
  { z:52, sym:"Te", name:"Tellurium", mass:"127.60", cat:"metalloid", state:"solid", year:1782, config:"[Kr] 4d¹⁰ 5s² 5p⁴", group:16, period:5 },
  { z:53, sym:"I", name:"Iodine", mass:"126.90", cat:"halogen", state:"solid", year:1811, config:"[Kr] 4d¹⁰ 5s² 5p⁵", group:17, period:5 },
  { z:54, sym:"Xe", name:"Xenon", mass:"131.29", cat:"noble-gas", state:"gas", year:1898, config:"[Kr] 4d¹⁰ 5s² 5p⁶", group:18, period:5 },
  { z:55, sym:"Cs", name:"Cesium", mass:"132.91", cat:"alkali", state:"solid", year:1860, config:"[Xe] 6s¹", group:1, period:6 },
  { z:56, sym:"Ba", name:"Barium", mass:"137.33", cat:"alkaline", state:"solid", year:1808, config:"[Xe] 6s²", group:2, period:6 },
  { z:57, sym:"La", name:"Lanthanum", mass:"138.91", cat:"lanthanide", state:"solid", year:1839, config:"[Xe] 5d¹ 6s²", group:3, period:6 },
  { z:58, sym:"Ce", name:"Cerium", mass:"140.12", cat:"lanthanide", state:"solid", year:1803, config:"[Xe] 4f¹ 5d¹ 6s²", group:null, period:9 },
  { z:59, sym:"Pr", name:"Praseodymium", mass:"140.91", cat:"lanthanide", state:"solid", year:1885, config:"[Xe] 4f³ 6s²", group:null, period:9 },
  { z:60, sym:"Nd", name:"Neodymium", mass:"144.24", cat:"lanthanide", state:"solid", year:1885, config:"[Xe] 4f⁴ 6s²", group:null, period:9 },
  { z:61, sym:"Pm", name:"Promethium", mass:"[145]", cat:"lanthanide", state:"solid", year:1945, config:"[Xe] 4f⁵ 6s²", group:null, period:9 },
  { z:62, sym:"Sm", name:"Samarium", mass:"150.36", cat:"lanthanide", state:"solid", year:1879, config:"[Xe] 4f⁶ 6s²", group:null, period:9 },
  { z:63, sym:"Eu", name:"Europium", mass:"151.96", cat:"lanthanide", state:"solid", year:1901, config:"[Xe] 4f⁷ 6s²", group:null, period:9 },
  { z:64, sym:"Gd", name:"Gadolinium", mass:"157.25", cat:"lanthanide", state:"solid", year:1880, config:"[Xe] 4f⁷ 5d¹ 6s²", group:null, period:9 },
  { z:65, sym:"Tb", name:"Terbium", mass:"158.93", cat:"lanthanide", state:"solid", year:1843, config:"[Xe] 4f⁹ 6s²", group:null, period:9 },
  { z:66, sym:"Dy", name:"Dysprosium", mass:"162.50", cat:"lanthanide", state:"solid", year:1886, config:"[Xe] 4f¹⁰ 6s²", group:null, period:9 },
  { z:67, sym:"Ho", name:"Holmium", mass:"164.93", cat:"lanthanide", state:"solid", year:1867, config:"[Xe] 4f¹¹ 6s²", group:null, period:9 },
  { z:68, sym:"Er", name:"Erbium", mass:"167.26", cat:"lanthanide", state:"solid", year:1843, config:"[Xe] 4f¹² 6s²", group:null, period:9 },
  { z:69, sym:"Tm", name:"Thulium", mass:"168.93", cat:"lanthanide", state:"solid", year:1879, config:"[Xe] 4f¹³ 6s²", group:null, period:9 },
  { z:70, sym:"Yb", name:"Ytterbium", mass:"173.05", cat:"lanthanide", state:"solid", year:1878, config:"[Xe] 4f¹⁴ 6s²", group:null, period:9 },
  { z:71, sym:"Lu", name:"Lutetium", mass:"174.97", cat:"lanthanide", state:"solid", year:1907, config:"[Xe] 4f¹⁴ 5d¹ 6s²", group:null, period:9 },
  { z:72, sym:"Hf", name:"Hafnium", mass:"178.49", cat:"transition", state:"solid", year:1923, config:"[Xe] 4f¹⁴ 5d² 6s²", group:4, period:6 },
  { z:73, sym:"Ta", name:"Tantalum", mass:"180.95", cat:"transition", state:"solid", year:1802, config:"[Xe] 4f¹⁴ 5d³ 6s²", group:5, period:6 },
  { z:74, sym:"W", name:"Tungsten", mass:"183.84", cat:"transition", state:"solid", year:1783, config:"[Xe] 4f¹⁴ 5d⁴ 6s²", group:6, period:6 },
  { z:75, sym:"Re", name:"Rhenium", mass:"186.21", cat:"transition", state:"solid", year:1925, config:"[Xe] 4f¹⁴ 5d⁵ 6s²", group:7, period:6 },
  { z:76, sym:"Os", name:"Osmium", mass:"190.23", cat:"transition", state:"solid", year:1803, config:"[Xe] 4f¹⁴ 5d⁶ 6s²", group:8, period:6 },
  { z:77, sym:"Ir", name:"Iridium", mass:"192.22", cat:"transition", state:"solid", year:1803, config:"[Xe] 4f¹⁴ 5d⁷ 6s²", group:9, period:6 },
  { z:78, sym:"Pt", name:"Platinum", mass:"195.08", cat:"transition", state:"solid", year:1735, config:"[Xe] 4f¹⁴ 5d⁹ 6s¹", group:10, period:6 },
  { z:79, sym:"Au", name:"Gold", mass:"196.97", cat:"transition", state:"solid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹", group:11, period:6 },
  { z:80, sym:"Hg", name:"Mercury", mass:"200.59", cat:"transition", state:"liquid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²", group:12, period:6 },
  { z:81, sym:"Tl", name:"Thallium", mass:"204.38", cat:"post-trans", state:"solid", year:1861, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", group:13, period:6 },
  { z:82, sym:"Pb", name:"Lead", mass:"207.2", cat:"post-trans", state:"solid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", group:14, period:6 },
  { z:83, sym:"Bi", name:"Bismuth", mass:"208.98", cat:"post-trans", state:"solid", year:null, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", group:15, period:6 },
  { z:84, sym:"Po", name:"Polonium", mass:"[209]", cat:"metalloid", state:"solid", year:1898, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", group:16, period:6 },
  { z:85, sym:"At", name:"Astatine", mass:"[210]", cat:"halogen", state:"solid", year:1940, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", group:17, period:6 },
  { z:86, sym:"Rn", name:"Radon", mass:"[222]", cat:"noble-gas", state:"gas", year:1900, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", group:18, period:6 },
  { z:87, sym:"Fr", name:"Francium", mass:"[223]", cat:"alkali", state:"solid", year:1939, config:"[Rn] 7s¹", group:1, period:7 },
  { z:88, sym:"Ra", name:"Radium", mass:"[226]", cat:"alkaline", state:"solid", year:1898, config:"[Rn] 7s²", group:2, period:7 },
  { z:89, sym:"Ac", name:"Actinium", mass:"[227]", cat:"actinide", state:"solid", year:1899, config:"[Rn] 6d¹ 7s²", group:3, period:7 },
  { z:90, sym:"Th", name:"Thorium", mass:"232.04", cat:"actinide", state:"solid", year:1829, config:"[Rn] 6d² 7s²", group:null, period:10 },
  { z:91, sym:"Pa", name:"Protactinium", mass:"231.04", cat:"actinide", state:"solid", year:1913, config:"[Rn] 5f² 6d¹ 7s²", group:null, period:10 },
  { z:92, sym:"U", name:"Uranium", mass:"238.03", cat:"actinide", state:"solid", year:1789, config:"[Rn] 5f³ 6d¹ 7s²", group:null, period:10 },
  { z:93, sym:"Np", name:"Neptunium", mass:"[237]", cat:"actinide", state:"solid", year:1940, config:"[Rn] 5f⁴ 6d¹ 7s²", group:null, period:10 },
  { z:94, sym:"Pu", name:"Plutonium", mass:"[244]", cat:"actinide", state:"solid", year:1940, config:"[Rn] 5f⁶ 7s²", group:null, period:10 },
  { z:95, sym:"Am", name:"Americium", mass:"[243]", cat:"actinide", state:"solid", year:1944, config:"[Rn] 5f⁷ 7s²", group:null, period:10 },
  { z:96, sym:"Cm", name:"Curium", mass:"[247]", cat:"actinide", state:"solid", year:1944, config:"[Rn] 5f⁷ 6d¹ 7s²", group:null, period:10 },
  { z:97, sym:"Bk", name:"Berkelium", mass:"[247]", cat:"actinide", state:"solid", year:1949, config:"[Rn] 5f⁹ 7s²", group:null, period:10 },
  { z:98, sym:"Cf", name:"Californium", mass:"[251]", cat:"actinide", state:"solid", year:1950, config:"[Rn] 5f¹⁰ 7s²", group:null, period:10 },
  { z:99, sym:"Es", name:"Einsteinium", mass:"[252]", cat:"actinide", state:"solid", year:1952, config:"[Rn] 5f¹¹ 7s²", group:null, period:10 },
  { z:100, sym:"Fm", name:"Fermium", mass:"[257]", cat:"actinide", state:"solid", year:1952, config:"[Rn] 5f¹² 7s²", group:null, period:10 },
  { z:101, sym:"Md", name:"Mendelevium", mass:"[258]", cat:"actinide", state:"solid", year:1955, config:"[Rn] 5f¹³ 7s²", group:null, period:10 },
  { z:102, sym:"No", name:"Nobelium", mass:"[259]", cat:"actinide", state:"solid", year:1958, config:"[Rn] 5f¹⁴ 7s²", group:null, period:10 },
  { z:103, sym:"Lr", name:"Lawrencium", mass:"[266]", cat:"actinide", state:"solid", year:1961, config:"[Rn] 5f¹⁴ 7s² 7p¹", group:null, period:10 },
  { z:104, sym:"Rf", name:"Rutherfordium", mass:"[267]", cat:"transition", state:"solid", year:1969, config:"[Rn] 5f¹⁴ 6d² 7s²", group:4, period:7 },
  { z:105, sym:"Db", name:"Dubnium", mass:"[268]", cat:"transition", state:"solid", year:1970, config:"[Rn] 5f¹⁴ 6d³ 7s²", group:5, period:7 },
  { z:106, sym:"Sg", name:"Seaborgium", mass:"[269]", cat:"transition", state:"solid", year:1974, config:"[Rn] 5f¹⁴ 6d⁴ 7s²", group:6, period:7 },
  { z:107, sym:"Bh", name:"Bohrium", mass:"[270]", cat:"transition", state:"solid", year:1981, config:"[Rn] 5f¹⁴ 6d⁵ 7s²", group:7, period:7 },
  { z:108, sym:"Hs", name:"Hassium", mass:"[269]", cat:"transition", state:"solid", year:1984, config:"[Rn] 5f¹⁴ 6d⁶ 7s²", group:8, period:7 },
  { z:109, sym:"Mt", name:"Meitnerium", mass:"[278]", cat:"unknown", state:"unknown", year:1982, config:"[Rn] 5f¹⁴ 6d⁷ 7s²", group:9, period:7 },
  { z:110, sym:"Ds", name:"Darmstadtium", mass:"[281]", cat:"unknown", state:"unknown", year:1994, config:"[Rn] 5f¹⁴ 6d⁸ 7s²", group:10, period:7 },
  { z:111, sym:"Rg", name:"Roentgenium", mass:"[282]", cat:"unknown", state:"unknown", year:1994, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s¹", group:11, period:7 },
  { z:112, sym:"Cn", name:"Copernicium", mass:"[285]", cat:"transition", state:"gas", year:1996, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s²", group:12, period:7 },
  { z:113, sym:"Nh", name:"Nihonium", mass:"[286]", cat:"unknown", state:"unknown", year:2004, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", group:13, period:7 },
  { z:114, sym:"Fl", name:"Flerovium", mass:"[289]", cat:"unknown", state:"unknown", year:1999, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", group:14, period:7 },
  { z:115, sym:"Mc", name:"Moscovium", mass:"[290]", cat:"unknown", state:"unknown", year:2003, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", group:15, period:7 },
  { z:116, sym:"Lv", name:"Livermorium", mass:"[293]", cat:"unknown", state:"unknown", year:2000, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", group:16, period:7 },
  { z:117, sym:"Ts", name:"Tennessine", mass:"[294]", cat:"halogen", state:"unknown", year:2010, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", group:17, period:7 },
  { z:118, sym:"Og", name:"Oganesson", mass:"[294]", cat:"noble-gas", state:"unknown", year:2002, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", group:18, period:7 },
];

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY META
═══════════════════════════════════════════════════════════════════════ */
const CAT_META = {
  "alkali": { label:"Alkali Metals", color:"var(--c-alkali)" },
  "alkaline": { label:"Alkaline Earth Metals", color:"var(--c-alkaline)" },
  "lanthanide": { label:"Lanthanides", color:"var(--c-lanthanide)" },
  "actinide": { label:"Actinides", color:"var(--c-actinide)" },
  "transition": { label:"Transition Metals", color:"var(--c-transition)" },
  "post-trans": { label:"Post-transition Metals", color:"var(--c-post-trans)" },
  "metalloid": { label:"Metalloids", color:"var(--c-metalloid)" },
  "nonmetal": { label:"Nonmetals", color:"var(--c-nonmetal)" },
  "halogen": { label:"Halogens", color:"var(--c-halogen)" },
  "noble-gas": { label:"Noble Gases", color:"var(--c-noble)" },
  "unknown": { label:"Unknown Properties", color:"var(--c-unknown)" },
};

/* ═══════════════════════════════════════════════════════════════════════
   GRID LAYOUT
   Maps each element to [col, row] in the 18-column grid
═══════════════════════════════════════════════════════════════════════ */
function getGridPos(el) {
  // Special f-block rows (lanthanides period:9, actinides period:10)
  if (el.period === 9) {
    // Ce–Lu → cols 4–17, row 9
    const idx = el.z - 58; // 0-based
    return { col: idx + 4, row: 9 };
  }
  if (el.period === 10) {
    const idx = el.z - 90;
    return { col: idx + 4, row: 10 };
  }
  // Standard layout
  const col = el.group;
  let row = el.period;
  // Push f-block gap periods down
  if (el.period >= 6 && (el.z === 57 || el.z === 89)) {
    // La and Ac stay in group 3 row 6/7 but also have f-block series below
  }
  return { col, row };
}

/* ═══════════════════════════════════════════════════════════════════════
   BUILD LEGEND
═══════════════════════════════════════════════════════════════════════ */
let activeFilter = null;
const legendEl = document.getElementById('legend');
Object.entries(CAT_META).forEach(([cat, meta]) => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.dataset.cat = cat;
  item.innerHTML = `<span class="legend-dot" style="background:${meta.color}"></span>${meta.label}`;
  item.addEventListener('click', () => toggleFilter(cat, item));
  legendEl.appendChild(item);
});

function toggleFilter(cat, itemEl) {
  const allTiles = document.querySelectorAll('.element');
  const allLegend = document.querySelectorAll('.legend-item');
  if (activeFilter === cat) {
    // Clear filter
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

// Separator row spacer for lanthanides/actinides
// We use grid-row: 8 for gap label, 9 for lanthanides, 10 for actinides
// Row 8 is period 7, so we need a visual gap row.

ELEMENTS.forEach((el, idx) => {
  const tile = document.createElement('div');
  tile.className = 'element';
  tile.dataset.z = el.z;
  tile.dataset.cat = el.cat;

  const catColor = `var(--c-${el.cat.replace('noble-gas','noble').replace('post-trans','post-trans')})`;
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

  // Staggered animation
  tile.style.animationDelay = `${0.008 * idx}s`;

  tile.innerHTML = `
    <span class="el-number">${el.z}</span>
    <span class="el-symbol">${el.sym}</span>
    <span class="el-name">${el.name}</span>
    <span class="el-mass">${el.mass}</span>
  `;

  // Grid positioning
  const pos = getGridPos(el);
  tile.style.gridColumn = pos.col;
  tile.style.gridRow = pos.row;

  // Tooltip
  tile.addEventListener('mouseenter', e => showTooltip(e, el));
  tile.addEventListener('mouseleave', hideTooltip);
  tile.addEventListener('mousemove', moveTooltip);

  // Click → open modal
  tile.addEventListener('click', () => openModal(el));

  grid.appendChild(tile);
});

// Label tiles for lanthanide/actinide rows
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
  tooltip.textContent = `${el.name} — ${CAT_META[el.cat]?.label || el.cat}`;
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
    const match = el.name.toLowerCase().includes(q) || el.sym.toLowerCase().includes(q) || String(el.z) === q;
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

function openModal(el) {
  // Build detail panel
  const colorMap = {
    "alkali":"var(--c-alkali)","alkaline":"var(--c-alkaline)",
    "lanthanide":"var(--c-lanthanide)","actinide":"var(--c-actinide)",
    "transition":"var(--c-transition)","post-trans":"var(--c-post-trans)",
    "metalloid":"var(--c-metalloid)","nonmetal":"var(--c-nonmetal)",
    "halogen":"var(--c-halogen)","noble-gas":"var(--c-noble)","unknown":"var(--c-unknown)"
  };
  const catColor = colorMap[el.cat] || 'rgba(255,255,255,0.5)';
  const stateClass = { solid:'state-solid', liquid:'state-liquid', gas:'state-gas', unknown:'state-unknown' }[el.state] || 'state-unknown';
  const stateIcon = { solid:'⬛', liquid:'💧', gas:'💨', unknown:'?' }[el.state] || '?';
  const discovery = el.year ? `${el.year}` : 'Ancient / Unknown';

  detailPanel.innerHTML = `
    <div class="detail-category" style="color:${catColor}">${CAT_META[el.cat]?.label || el.cat}</div>
    <div class="detail-symbol-row">
      <span class="detail-symbol">${el.sym}</span>
      <span class="detail-number">#${el.z}</span>
    </div>
    <div class="detail-name">${el.name}</div>
    <div class="detail-divider"></div>
    <div class="detail-grid">
      <div class="detail-field">
        <span class="detail-label">Atomic Mass</span>
        <span class="detail-value">${el.mass} u</span>
      </div>
      <div class="detail-field">
        <span class="detail-label">Year Discovered</span>
        <span class="detail-value">${discovery}</span>
      </div>
      <div class="detail-field full">
        <span class="detail-label">Electron Configuration</span>
        <span class="detail-value mono">${el.config}</span>
      </div>
      <div class="detail-field">
        <span class="detail-label">State (Room Temp)</span>
        <span class="detail-value"><span class="state-badge ${stateClass}">${stateIcon} ${el.state.charAt(0).toUpperCase()+el.state.slice(1)}</span></span>
      </div>
      <div class="detail-field">
        <span class="detail-label">Group / Period</span>
        <span class="detail-value">${el.group ? 'Group '+el.group : 'f-block'} · Period ${el.period <= 8 ? el.period : el.period === 9 ? 6 : 7}</span>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Init Three.js after modal is visible
  requestAnimationFrame(() => buildAtomScene(el));
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
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

  // Ambient + point lights
  threeScene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const pLight = new THREE.PointLight(0x7fc8ff, 2, 20);
  pLight.position.set(4, 4, 4);
  threeScene.add(pLight);
  const pLight2 = new THREE.PointLight(0xff9fcc, 1.5, 20);
  pLight2.position.set(-4, -3, 2);
  threeScene.add(pLight2);

  atomGroup = new THREE.Group();
  threeScene.add(atomGroup);

  // Nucleus — clusters of protons+neutrons
  const nucleusGroup = new THREE.Group();
  const numNucleons = Math.min(el.z, 20); // limit for perf
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

  // Electron shells — based on period/electron count
  const shells = getShellConfig(el.z);
  const shellColors = [0x4fc3f7, 0x7c83f5, 0xff6b9d, 0xffe066, 0x7ee8a2, 0xffaa5c, 0xce93d8];
  
  shells.forEach((electrons, shellIdx) => {
    const radius = 0.9 + shellIdx * 0.75;
    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(radius, 0.012, 6, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: shellColors[shellIdx % shellColors.length],
      opacity: 0.3, transparent: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    // Tilt each orbit differently
    ring.rotation.x = (shellIdx * 0.7 + 0.4);
    ring.rotation.y = (shellIdx * 0.5);
    atomGroup.add(ring);

    // Electron spheres
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

  // Drag to rotate
  canvas.addEventListener('mousedown', onDragStart);
  canvas.addEventListener('mousemove', onDragMove);
  canvas.addEventListener('mouseup', onDragEnd);
  canvas.addEventListener('touchstart', onTouchStart, { passive: true });
  canvas.addEventListener('touchmove', onTouchMove, { passive: true });
  canvas.addEventListener('touchend', onDragEnd);

  // Animation loop
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

// Returns electrons per shell
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

// Drag rotation
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

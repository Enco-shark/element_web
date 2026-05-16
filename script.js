/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('pt-theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
    localStorage.setItem('pt-theme', dark ? 'light' : 'dark');
});

/* ============================================================
   I18N — INTERNATIONALIZATION
   ============================================================ */
let currentLang = localStorage.getItem('pt-lang') || 'en';

const I18N = {
    en: {
        title: "Periodic Table of Elements",
        atomLabel: "Drag to rotate",
        atomicNumber: "Atomic Number",
        atomicMass: "Atomic Mass",
        category: "Category",
        yearDiscovered: "Year Discovered",
        ancient: "Ancient",
        electronConfig: "Electron Configuration",
        electronShells: "Electron Shells",
        modeBohr: "Bohr",
        modeOrbital: "Orbital",
        elementPrefix: "Element",
        categories: {
            "alkali-metal": "Alkali Metals",
            "alkaline-earth-metal": "Alkaline Earth Metals",
            "transition-metal": "Transition Metals",
            "post-transition-metal": "Post-transition Metals",
            "metalloid": "Metalloids",
            "nonmetal": "Nonmetals",
            "halogen": "Halogens",
            "noble-gas": "Noble Gases",
            "lanthanide": "Lanthanides",
            "actinide": "Actinides"
        },
        elements: {
            1:"Hydrogen",2:"Helium",3:"Lithium",4:"Beryllium",5:"Boron",
            6:"Carbon",7:"Nitrogen",8:"Oxygen",9:"Fluorine",10:"Neon",
            11:"Sodium",12:"Magnesium",13:"Aluminium",14:"Silicon",15:"Phosphorus",
            16:"Sulfur",17:"Chlorine",18:"Argon",19:"Potassium",20:"Calcium",
            21:"Scandium",22:"Titanium",23:"Vanadium",24:"Chromium",25:"Manganese",
            26:"Iron",27:"Cobalt",28:"Nickel",29:"Copper",30:"Zinc",
            31:"Gallium",32:"Germanium",33:"Arsenic",34:"Selenium",35:"Bromine",
            36:"Krypton",37:"Rubidium",38:"Strontium",39:"Yttrium",40:"Zirconium",
            41:"Niobium",42:"Molybdenum",43:"Technetium",44:"Ruthenium",45:"Rhodium",
            46:"Palladium",47:"Silver",48:"Cadmium",49:"Indium",50:"Tin",
            51:"Antimony",52:"Tellurium",53:"Iodine",54:"Xenon",55:"Cesium",
            56:"Barium",57:"Lanthanum",58:"Cerium",59:"Praseodymium",60:"Neodymium",
            61:"Promethium",62:"Samarium",63:"Europium",64:"Gadolinium",65:"Terbium",
            66:"Dysprosium",67:"Holmium",68:"Erbium",69:"Thulium",70:"Ytterbium",
            71:"Lutetium",72:"Hafnium",73:"Tantalum",74:"Tungsten",75:"Rhenium",
            76:"Osmium",77:"Iridium",78:"Platinum",79:"Gold",80:"Mercury",
            81:"Thallium",82:"Lead",83:"Bismuth",84:"Polonium",85:"Astatine",
            86:"Radon",87:"Francium",88:"Radium",89:"Actinium",90:"Thorium",
            91:"Protactinium",92:"Uranium",93:"Neptunium",94:"Plutonium",95:"Americium",
            96:"Curium",97:"Berkelium",98:"Californium",99:"Einsteinium",100:"Fermium",
            101:"Mendelevium",102:"Nobelium",103:"Lawrencium",104:"Rutherfordium",105:"Dubnium",
            106:"Seaborgium",107:"Bohrium",108:"Hassium",109:"Meitnerium",110:"Darmstadtium",
            111:"Roentgenium",112:"Copernicium",113:"Nihonium",114:"Flerovium",115:"Moscovium",
            116:"Livermorium",117:"Tennessine",118:"Oganesson"
        }
    },
    zh: {
        title: "元素周期表",
        atomLabel: "拖拽旋转",
        atomicNumber: "原子序数",
        atomicMass: "原子量",
        category: "分类",
        yearDiscovered: "发现年份",
        ancient: "古代",
        electronConfig: "电子排布",
        electronShells: "电子层",
        modeBohr: "玻尔",
        modeOrbital: "轨道",
        elementPrefix: "第",
        categories: {
            "alkali-metal": "碱金属",
            "alkaline-earth-metal": "碱土金属",
            "transition-metal": "过渡金属",
            "post-transition-metal": "后过渡金属",
            "metalloid": "准金属",
            "nonmetal": "非金属",
            "halogen": "卤素",
            "noble-gas": "稀有气体",
            "lanthanide": "镧系元素",
            "actinide": "锕系元素"
        },
        elements: {
            1:"氢",2:"氦",3:"锂",4:"铍",5:"硼",
            6:"碳",7:"氮",8:"氧",9:"氟",10:"氖",
            11:"钠",12:"镁",13:"铝",14:"硅",15:"磷",
            16:"硫",17:"氯",18:"氩",19:"钾",20:"钙",
            21:"钪",22:"钛",23:"钒",24:"铬",25:"锰",
            26:"铁",27:"钴",28:"镍",29:"铜",30:"锌",
            31:"镓",32:"锗",33:"砷",34:"硒",35:"溴",
            36:"氪",37:"铷",38:"锶",39:"钇",40:"锆",
            41:"铌",42:"钼",43:"锝",44:"钌",45:"铑",
            46:"钯",47:"银",48:"镉",49:"铟",50:"锡",
            51:"锑",52:"碲",53:"碘",54:"氙",55:"铯",
            56:"钡",57:"镧",58:"铈",59:"镨",60:"钕",
            61:"钷",62:"钐",63:"铕",64:"钆",65:"铽",
            66:"镝",67:"钬",68:"铒",69:"铥",70:"镱",
            71:"镥",72:"铪",73:"钽",74:"钨",75:"铼",
            76:"锇",77:"铱",78:"铂",79:"金",80:"汞",
            81:"铊",82:"铅",83:"铋",84:"钋",85:"砹",
            86:"氡",87:"钫",88:"镭",89:"锕",90:"钍",
            91:"镤",92:"铀",93:"镎",94:"钚",95:"镅",
            96:"锔",97:"锫",98:"锎",99:"锿",100:"镄",
            101:"钔",102:"锘",103:"铹",104:"鑪",105:"𨧀",
            106:"𨭎",107:"𨨏",108:"𨭆",109:"鿏",110:"鐽",
            111:"錀",112:"鿔",113:"鿭",114:"𫓧",115:"镆",
            116:"𫟷",117:"鿬",118:"鿫"
        }
    }
};

function t(key) { return I18N[currentLang][key]; }
function getElementName(z) { return I18N[currentLang].elements[z]; }
function getCategoryLabel(cat) { return I18N[currentLang].categories[cat] || cat; }

/* ============================================================
   ELEMENT DATA — ALL 118 ELEMENTS
   ============================================================ */
const ELEMENTS = [
    { z:1, sym:"H", name:"Hydrogen", mass:1.008, cat:"nonmetal", year:1766, config:"1s1", shells:[1] },
    { z:2, sym:"He", name:"Helium", mass:4.003, cat:"noble-gas", year:1868, config:"1s2", shells:[2] },
    { z:3, sym:"Li", name:"Lithium", mass:6.941, cat:"alkali-metal", year:1817, config:"[He]2s1", shells:[2,1] },
    { z:4, sym:"Be", name:"Beryllium", mass:9.012, cat:"alkaline-earth-metal", year:1798, config:"[He]2s2", shells:[2,2] },
    { z:5, sym:"B", name:"Boron", mass:10.81, cat:"metalloid", year:1808, config:"[He]2s2 2p1", shells:[2,3] },
    { z:6, sym:"C", name:"Carbon", mass:12.01, cat:"nonmetal", year:0, config:"[He]2s2 2p2", shells:[2,4] },
    { z:7, sym:"N", name:"Nitrogen", mass:14.01, cat:"nonmetal", year:1772, config:"[He]2s2 2p3", shells:[2,5] },
    { z:8, sym:"O", name:"Oxygen", mass:16.00, cat:"nonmetal", year:1774, config:"[He]2s2 2p4", shells:[2,6] },
    { z:9, sym:"F", name:"Fluorine", mass:19.00, cat:"halogen", year:1886, config:"[He]2s2 2p5", shells:[2,7] },
    { z:10, sym:"Ne", name:"Neon", mass:20.18, cat:"noble-gas", year:1898, config:"[He]2s2 2p6", shells:[2,8] },
    { z:11, sym:"Na", name:"Sodium", mass:22.99, cat:"alkali-metal", year:1807, config:"[Ne]3s1", shells:[2,8,1] },
    { z:12, sym:"Mg", name:"Magnesium", mass:24.31, cat:"alkaline-earth-metal", year:1755, config:"[Ne]3s2", shells:[2,8,2] },
    { z:13, sym:"Al", name:"Aluminium", mass:26.98, cat:"post-transition-metal", year:1825, config:"[Ne]3s2 3p1", shells:[2,8,3] },
    { z:14, sym:"Si", name:"Silicon", mass:28.09, cat:"metalloid", year:1824, config:"[Ne]3s2 3p2", shells:[2,8,4] },
    { z:15, sym:"P", name:"Phosphorus", mass:30.97, cat:"nonmetal", year:1669, config:"[Ne]3s2 3p3", shells:[2,8,5] },
    { z:16, sym:"S", name:"Sulfur", mass:32.07, cat:"nonmetal", year:0, config:"[Ne]3s2 3p4", shells:[2,8,6] },
    { z:17, sym:"Cl", name:"Chlorine", mass:35.45, cat:"halogen", year:1774, config:"[Ne]3s2 3p5", shells:[2,8,7] },
    { z:18, sym:"Ar", name:"Argon", mass:39.95, cat:"noble-gas", year:1894, config:"[Ne]3s2 3p6", shells:[2,8,8] },
    { z:19, sym:"K", name:"Potassium", mass:39.10, cat:"alkali-metal", year:1807, config:"[Ar]4s1", shells:[2,8,8,1] },
    { z:20, sym:"Ca", name:"Calcium", mass:40.08, cat:"alkaline-earth-metal", year:1808, config:"[Ar]4s2", shells:[2,8,8,2] },
    { z:21, sym:"Sc", name:"Scandium", mass:44.96, cat:"transition-metal", year:1879, config:"[Ar]3d1 4s2", shells:[2,8,9,2] },
    { z:22, sym:"Ti", name:"Titanium", mass:47.87, cat:"transition-metal", year:1791, config:"[Ar]3d2 4s2", shells:[2,8,10,2] },
    { z:23, sym:"V", name:"Vanadium", mass:50.94, cat:"transition-metal", year:1801, config:"[Ar]3d3 4s2", shells:[2,8,11,2] },
    { z:24, sym:"Cr", name:"Chromium", mass:52.00, cat:"transition-metal", year:1797, config:"[Ar]3d5 4s1", shells:[2,8,13,1] },
    { z:25, sym:"Mn", name:"Manganese", mass:54.94, cat:"transition-metal", year:1774, config:"[Ar]3d5 4s2", shells:[2,8,13,2] },
    { z:26, sym:"Fe", name:"Iron", mass:55.85, cat:"transition-metal", year:0, config:"[Ar]3d6 4s2", shells:[2,8,14,2] },
    { z:27, sym:"Co", name:"Cobalt", mass:58.93, cat:"transition-metal", year:1735, config:"[Ar]3d7 4s2", shells:[2,8,15,2] },
    { z:28, sym:"Ni", name:"Nickel", mass:58.69, cat:"transition-metal", year:1751, config:"[Ar]3d8 4s2", shells:[2,8,16,2] },
    { z:29, sym:"Cu", name:"Copper", mass:63.55, cat:"transition-metal", year:0, config:"[Ar]3d10 4s1", shells:[2,8,18,1] },
    { z:30, sym:"Zn", name:"Zinc", mass:65.38, cat:"transition-metal", year:0, config:"[Ar]3d10 4s2", shells:[2,8,18,2] },
    { z:31, sym:"Ga", name:"Gallium", mass:69.72, cat:"post-transition-metal", year:1875, config:"[Ar]3d10 4s2 4p1", shells:[2,8,18,3] },
    { z:32, sym:"Ge", name:"Germanium", mass:72.63, cat:"metalloid", year:1886, config:"[Ar]3d10 4s2 4p2", shells:[2,8,18,4] },
    { z:33, sym:"As", name:"Arsenic", mass:74.92, cat:"metalloid", year:0, config:"[Ar]3d10 4s2 4p3", shells:[2,8,18,5] },
    { z:34, sym:"Se", name:"Selenium", mass:78.97, cat:"nonmetal", year:1817, config:"[Ar]3d10 4s2 4p4", shells:[2,8,18,6] },
    { z:35, sym:"Br", name:"Bromine", mass:79.90, cat:"halogen", year:1826, config:"[Ar]3d10 4s2 4p5", shells:[2,8,18,7] },
    { z:36, sym:"Kr", name:"Krypton", mass:83.80, cat:"noble-gas", year:1898, config:"[Ar]3d10 4s2 4p6", shells:[2,8,18,8] },
    { z:37, sym:"Rb", name:"Rubidium", mass:85.47, cat:"alkali-metal", year:1861, config:"[Kr]5s1", shells:[2,8,18,8,1] },
    { z:38, sym:"Sr", name:"Strontium", mass:87.62, cat:"alkaline-earth-metal", year:1790, config:"[Kr]5s2", shells:[2,8,18,8,2] },
    { z:39, sym:"Y", name:"Yttrium", mass:88.91, cat:"transition-metal", year:1794, config:"[Kr]4d1 5s2", shells:[2,8,18,9,2] },
    { z:40, sym:"Zr", name:"Zirconium", mass:91.22, cat:"transition-metal", year:1789, config:"[Kr]4d2 5s2", shells:[2,8,18,10,2] },
    { z:41, sym:"Nb", name:"Niobium", mass:92.91, cat:"transition-metal", year:1801, config:"[Kr]4d4 5s1", shells:[2,8,18,12,1] },
    { z:42, sym:"Mo", name:"Molybdenum", mass:95.95, cat:"transition-metal", year:1781, config:"[Kr]4d5 5s1", shells:[2,8,18,13,1] },
    { z:43, sym:"Tc", name:"Technetium", mass:98, cat:"transition-metal", year:1937, config:"[Kr]4d5 5s2", shells:[2,8,18,13,2] },
    { z:44, sym:"Ru", name:"Ruthenium", mass:101.07, cat:"transition-metal", year:1844, config:"[Kr]4d7 5s1", shells:[2,8,18,15,1] },
    { z:45, sym:"Rh", name:"Rhodium", mass:102.91, cat:"transition-metal", year:1803, config:"[Kr]4d8 5s1", shells:[2,8,18,16,1] },
    { z:46, sym:"Pd", name:"Palladium", mass:106.42, cat:"transition-metal", year:1803, config:"[Kr]4d10", shells:[2,8,18,18] },
    { z:47, sym:"Ag", name:"Silver", mass:107.87, cat:"transition-metal", year:0, config:"[Kr]4d10 5s1", shells:[2,8,18,18,1] },
    { z:48, sym:"Cd", name:"Cadmium", mass:112.41, cat:"transition-metal", year:1817, config:"[Kr]4d10 5s2", shells:[2,8,18,18,2] },
    { z:49, sym:"In", name:"Indium", mass:114.82, cat:"post-transition-metal", year:1863, config:"[Kr]4d10 5s2 5p1", shells:[2,8,18,18,3] },
    { z:50, sym:"Sn", name:"Tin", mass:118.71, cat:"post-transition-metal", year:0, config:"[Kr]4d10 5s2 5p2", shells:[2,8,18,18,4] },
    { z:51, sym:"Sb", name:"Antimony", mass:121.76, cat:"metalloid", year:0, config:"[Kr]4d10 5s2 5p3", shells:[2,8,18,18,5] },
    { z:52, sym:"Te", name:"Tellurium", mass:127.60, cat:"metalloid", year:1783, config:"[Kr]4d10 5s2 5p4", shells:[2,8,18,18,6] },
    { z:53, sym:"I", name:"Iodine", mass:126.90, cat:"halogen", year:1811, config:"[Kr]4d10 5s2 5p5", shells:[2,8,18,18,7] },
    { z:54, sym:"Xe", name:"Xenon", mass:131.29, cat:"noble-gas", year:1898, config:"[Kr]4d10 5s2 5p6", shells:[2,8,18,18,8] },
    { z:55, sym:"Cs", name:"Cesium", mass:132.91, cat:"alkali-metal", year:1860, config:"[Xe]6s1", shells:[2,8,18,18,8,1] },
    { z:56, sym:"Ba", name:"Barium", mass:137.33, cat:"alkaline-earth-metal", year:1808, config:"[Xe]6s2", shells:[2,8,18,18,8,2] },
    { z:57, sym:"La", name:"Lanthanum", mass:138.91, cat:"lanthanide", year:1839, config:"[Xe]5d1 6s2", shells:[2,8,18,18,9,2] },
    { z:58, sym:"Ce", name:"Cerium", mass:140.12, cat:"lanthanide", year:1803, config:"[Xe]4f1 5d1 6s2", shells:[2,8,18,19,9,2] },
    { z:59, sym:"Pr", name:"Praseodymium", mass:140.91, cat:"lanthanide", year:1885, config:"[Xe]4f3 6s2", shells:[2,8,18,21,8,2] },
    { z:60, sym:"Nd", name:"Neodymium", mass:144.24, cat:"lanthanide", year:1885, config:"[Xe]4f4 6s2", shells:[2,8,18,22,8,2] },
    { z:61, sym:"Pm", name:"Promethium", mass:145, cat:"lanthanide", year:1945, config:"[Xe]4f5 6s2", shells:[2,8,18,23,8,2] },
    { z:62, sym:"Sm", name:"Samarium", mass:150.36, cat:"lanthanide", year:1879, config:"[Xe]4f6 6s2", shells:[2,8,18,24,8,2] },
    { z:63, sym:"Eu", name:"Europium", mass:151.96, cat:"lanthanide", year:1901, config:"[Xe]4f7 6s2", shells:[2,8,18,25,8,2] },
    { z:64, sym:"Gd", name:"Gadolinium", mass:157.25, cat:"lanthanide", year:1880, config:"[Xe]4f7 5d1 6s2", shells:[2,8,18,25,9,2] },
    { z:65, sym:"Tb", name:"Terbium", mass:158.93, cat:"lanthanide", year:1843, config:"[Xe]4f9 6s2", shells:[2,8,18,27,8,2] },
    { z:66, sym:"Dy", name:"Dysprosium", mass:162.50, cat:"lanthanide", year:1886, config:"[Xe]4f10 6s2", shells:[2,8,18,28,8,2] },
    { z:67, sym:"Ho", name:"Holmium", mass:164.93, cat:"lanthanide", year:1878, config:"[Xe]4f11 6s2", shells:[2,8,18,29,8,2] },
    { z:68, sym:"Er", name:"Erbium", mass:167.26, cat:"lanthanide", year:1843, config:"[Xe]4f12 6s2", shells:[2,8,18,30,8,2] },
    { z:69, sym:"Tm", name:"Thulium", mass:168.93, cat:"lanthanide", year:1879, config:"[Xe]4f13 6s2", shells:[2,8,18,31,8,2] },
    { z:70, sym:"Yb", name:"Ytterbium", mass:173.05, cat:"lanthanide", year:1878, config:"[Xe]4f14 6s2", shells:[2,8,18,32,8,2] },
    { z:71, sym:"Lu", name:"Lutetium", mass:174.97, cat:"lanthanide", year:1907, config:"[Xe]4f14 5d1 6s2", shells:[2,8,18,32,9,2] },
    { z:72, sym:"Hf", name:"Hafnium", mass:178.49, cat:"transition-metal", year:1923, config:"[Xe]4f14 5d2 6s2", shells:[2,8,18,32,10,2] },
    { z:73, sym:"Ta", name:"Tantalum", mass:180.95, cat:"transition-metal", year:1802, config:"[Xe]4f14 5d3 6s2", shells:[2,8,18,32,11,2] },
    { z:74, sym:"W", name:"Tungsten", mass:183.84, cat:"transition-metal", year:1783, config:"[Xe]4f14 5d4 6s2", shells:[2,8,18,32,12,2] },
    { z:75, sym:"Re", name:"Rhenium", mass:186.21, cat:"transition-metal", year:1925, config:"[Xe]4f14 5d5 6s2", shells:[2,8,18,32,13,2] },
    { z:76, sym:"Os", name:"Osmium", mass:190.23, cat:"transition-metal", year:1803, config:"[Xe]4f14 5d6 6s2", shells:[2,8,18,32,14,2] },
    { z:77, sym:"Ir", name:"Iridium", mass:192.22, cat:"transition-metal", year:1803, config:"[Xe]4f14 5d7 6s2", shells:[2,8,18,32,15,2] },
    { z:78, sym:"Pt", name:"Platinum", mass:195.08, cat:"transition-metal", year:1735, config:"[Xe]4f14 5d9 6s1", shells:[2,8,18,32,17,1] },
    { z:79, sym:"Au", name:"Gold", mass:196.97, cat:"transition-metal", year:0, config:"[Xe]4f14 5d10 6s1", shells:[2,8,18,32,18,1] },
    { z:80, sym:"Hg", name:"Mercury", mass:200.59, cat:"transition-metal", year:0, config:"[Xe]4f14 5d10 6s2", shells:[2,8,18,32,18,2] },
    { z:81, sym:"Tl", name:"Thallium", mass:204.38, cat:"post-transition-metal", year:1861, config:"[Xe]4f14 5d10 6s2 6p1", shells:[2,8,18,32,18,3] },
    { z:82, sym:"Pb", name:"Lead", mass:207.2, cat:"post-transition-metal", year:0, config:"[Xe]4f14 5d10 6s2 6p2", shells:[2,8,18,32,18,4] },
    { z:83, sym:"Bi", name:"Bismuth", mass:208.98, cat:"post-transition-metal", year:1753, config:"[Xe]4f14 5d10 6s2 6p3", shells:[2,8,18,32,18,5] },
    { z:84, sym:"Po", name:"Polonium", mass:209, cat:"post-transition-metal", year:1898, config:"[Xe]4f14 5d10 6s2 6p4", shells:[2,8,18,32,18,6] },
    { z:85, sym:"At", name:"Astatine", mass:210, cat:"halogen", year:1940, config:"[Xe]4f14 5d10 6s2 6p5", shells:[2,8,18,32,18,7] },
    { z:86, sym:"Rn", name:"Radon", mass:222, cat:"noble-gas", year:1900, config:"[Xe]4f14 5d10 6s2 6p6", shells:[2,8,18,32,18,8] },
    { z:87, sym:"Fr", name:"Francium", mass:223, cat:"alkali-metal", year:1939, config:"[Rn]7s1", shells:[2,8,18,32,18,8,1] },
    { z:88, sym:"Ra", name:"Radium", mass:226, cat:"alkaline-earth-metal", year:1898, config:"[Rn]7s2", shells:[2,8,18,32,18,8,2] },
    { z:89, sym:"Ac", name:"Actinium", mass:227, cat:"actinide", year:1899, config:"[Rn]6d1 7s2", shells:[2,8,18,32,18,9,2] },
    { z:90, sym:"Th", name:"Thorium", mass:232.04, cat:"actinide", year:1829, config:"[Rn]6d2 7s2", shells:[2,8,18,32,18,10,2] },
    { z:91, sym:"Pa", name:"Protactinium", mass:231.04, cat:"actinide", year:1913, config:"[Rn]5f2 6d1 7s2", shells:[2,8,18,32,20,9,2] },
    { z:92, sym:"U", name:"Uranium", mass:238.03, cat:"actinide", year:1789, config:"[Rn]5f3 6d1 7s2", shells:[2,8,18,32,21,9,2] },
    { z:93, sym:"Np", name:"Neptunium", mass:237, cat:"actinide", year:1940, config:"[Rn]5f4 6d1 7s2", shells:[2,8,18,32,22,9,2] },
    { z:94, sym:"Pu", name:"Plutonium", mass:244, cat:"actinide", year:1940, config:"[Rn]5f6 7s2", shells:[2,8,18,32,24,8,2] },
    { z:95, sym:"Am", name:"Americium", mass:243, cat:"actinide", year:1944, config:"[Rn]5f7 7s2", shells:[2,8,18,32,25,8,2] },
    { z:96, sym:"Cm", name:"Curium", mass:247, cat:"actinide", year:1944, config:"[Rn]5f7 6d1 7s2", shells:[2,8,18,32,25,9,2] },
    { z:97, sym:"Bk", name:"Berkelium", mass:247, cat:"actinide", year:1949, config:"[Rn]5f9 7s2", shells:[2,8,18,32,27,8,2] },
    { z:98, sym:"Cf", name:"Californium", mass:251, cat:"actinide", year:1950, config:"[Rn]5f10 7s2", shells:[2,8,18,32,28,8,2] },
    { z:99, sym:"Es", name:"Einsteinium", mass:252, cat:"actinide", year:1952, config:"[Rn]5f11 7s2", shells:[2,8,18,32,29,8,2] },
    { z:100, sym:"Fm", name:"Fermium", mass:257, cat:"actinide", year:1952, config:"[Rn]5f12 7s2", shells:[2,8,18,32,30,8,2] },
    { z:101, sym:"Md", name:"Mendelevium", mass:258, cat:"actinide", year:1955, config:"[Rn]5f13 7s2", shells:[2,8,18,32,31,8,2] },
    { z:102, sym:"No", name:"Nobelium", mass:259, cat:"actinide", year:1958, config:"[Rn]5f14 7s2", shells:[2,8,18,32,32,8,2] },
    { z:103, sym:"Lr", name:"Lawrencium", mass:266, cat:"actinide", year:1961, config:"[Rn]5f14 7s2 7p1", shells:[2,8,18,32,32,8,3] },
    { z:104, sym:"Rf", name:"Rutherfordium", mass:267, cat:"transition-metal", year:1969, config:"[Rn]5f14 6d2 7s2", shells:[2,8,18,32,32,10,2] },
    { z:105, sym:"Db", name:"Dubnium", mass:268, cat:"transition-metal", year:1970, config:"[Rn]5f14 6d3 7s2", shells:[2,8,18,32,32,11,2] },
    { z:106, sym:"Sg", name:"Seaborgium", mass:269, cat:"transition-metal", year:1974, config:"[Rn]5f14 6d4 7s2", shells:[2,8,18,32,32,12,2] },
    { z:107, sym:"Bh", name:"Bohrium", mass:270, cat:"transition-metal", year:1981, config:"[Rn]5f14 6d5 7s2", shells:[2,8,18,32,32,13,2] },
    { z:108, sym:"Hs", name:"Hassium", mass:277, cat:"transition-metal", year:1984, config:"[Rn]5f14 6d6 7s2", shells:[2,8,18,32,32,14,2] },
    { z:109, sym:"Mt", name:"Meitnerium", mass:278, cat:"transition-metal", year:1982, config:"[Rn]5f14 6d7 7s2", shells:[2,8,18,32,32,15,2] },
    { z:110, sym:"Ds", name:"Darmstadtium", mass:281, cat:"transition-metal", year:1994, config:"[Rn]5f14 6d8 7s2", shells:[2,8,18,32,32,16,2] },
    { z:111, sym:"Rg", name:"Roentgenium", mass:282, cat:"transition-metal", year:1994, config:"[Rn]5f14 6d9 7s2", shells:[2,8,18,32,32,17,2] },
    { z:112, sym:"Cn", name:"Copernicium", mass:285, cat:"transition-metal", year:1996, config:"[Rn]5f14 6d10 7s2", shells:[2,8,18,32,32,18,2] },
    { z:113, sym:"Nh", name:"Nihonium", mass:286, cat:"post-transition-metal", year:2003, config:"[Rn]5f14 6d10 7s2 7p1", shells:[2,8,18,32,32,18,3] },
    { z:114, sym:"Fl", name:"Flerovium", mass:289, cat:"post-transition-metal", year:1999, config:"[Rn]5f14 6d10 7s2 7p2", shells:[2,8,18,32,32,18,4] },
    { z:115, sym:"Mc", name:"Moscovium", mass:290, cat:"post-transition-metal", year:2003, config:"[Rn]5f14 6d10 7s2 7p3", shells:[2,8,18,32,32,18,5] },
    { z:116, sym:"Lv", name:"Livermorium", mass:293, cat:"post-transition-metal", year:2000, config:"[Rn]5f14 6d10 7s2 7p4", shells:[2,8,18,32,32,18,6] },
    { z:117, sym:"Ts", name:"Tennessine", mass:294, cat:"halogen", year:2010, config:"[Rn]5f14 6d10 7s2 7p5", shells:[2,8,18,32,32,18,7] },
    { z:118, sym:"Og", name:"Oganesson", mass:294, cat:"noble-gas", year:2006, config:"[Rn]5f14 6d10 7s2 7p6", shells:[2,8,18,32,32,18,8] }
];

/* ============================================================
   GRID POSITIONS FOR ALL 118 ELEMENTS
   row/col are 1-indexed CSS grid lines
   ============================================================ */
// Row 1 = group labels, Rows 2-8 = periods 1-7, Row 9 = spacer, Rows 10-11 = lanthanides/actinides
// Col 1 = period labels, Cols 2-19 = groups 1-18
const GRID = {
    /* Period 1 */ 1:[2,2], 2:[2,19],
    /* Period 2 */ 3:[3,2], 4:[3,3], 5:[3,14], 6:[3,15], 7:[3,16], 8:[3,17], 9:[3,18], 10:[3,19],
    /* Period 3 */ 11:[4,2], 12:[4,3], 13:[4,14], 14:[4,15], 15:[4,16], 16:[4,17], 17:[4,18], 18:[4,19],
    /* Period 4 */ 19:[5,2], 20:[5,3], 21:[5,4], 22:[5,5], 23:[5,6], 24:[5,7], 25:[5,8], 26:[5,9],
                   27:[5,10], 28:[5,11], 29:[5,12], 30:[5,13], 31:[5,14], 32:[5,15], 33:[5,16], 34:[5,17], 35:[5,18], 36:[5,19],
    /* Period 5 */ 37:[6,2], 38:[6,3], 39:[6,4], 40:[6,5], 41:[6,6], 42:[6,7], 43:[6,8], 44:[6,9],
                   45:[6,10], 46:[6,11], 47:[6,12], 48:[6,13], 49:[6,14], 50:[6,15], 51:[6,16], 52:[6,17], 53:[6,18], 54:[6,19],
    /* Period 6 */ 55:[7,2], 56:[7,3], 72:[7,5], 73:[7,6], 74:[7,7], 75:[7,8], 76:[7,9],
                   77:[7,10], 78:[7,11], 79:[7,12], 80:[7,13], 81:[7,14], 82:[7,15], 83:[7,16], 84:[7,17], 85:[7,18], 86:[7,19],
    /* Period 7 */ 87:[8,2], 88:[8,3], 104:[8,5], 105:[8,6], 106:[8,7], 107:[8,8], 108:[8,9],
                   109:[8,10], 110:[8,11], 111:[8,12], 112:[8,13], 113:[8,14], 114:[8,15], 115:[8,16], 116:[8,17], 117:[8,18], 118:[8,19],
    /* Lanthanides (row 10) */ 57:[10,4], 58:[10,5], 59:[10,6], 60:[10,7], 61:[10,8], 62:[10,9], 63:[10,10],
                              64:[10,11], 65:[10,12], 66:[10,13], 67:[10,14], 68:[10,15], 69:[10,16], 70:[10,17], 71:[10,18],
    /* Actinides (row 11) */  89:[11,4], 90:[11,5], 91:[11,6], 92:[11,7], 93:[11,8], 94:[11,9], 95:[11,10],
                              96:[11,11], 97:[11,12], 98:[11,13], 99:[11,14], 100:[11,15], 101:[11,16], 102:[11,17], 103:[11,18]
};

// La and Ac also appear in main table rows
const EXTRA_GRID = { 57: [7,4], 89: [8,4] };

/* ============================================================
   CATEGORY METADATA
   ============================================================ */
const CATEGORIES = {
    "alkali-metal":         { color:"rgba(255,183,77,0.22)",  colorDark:"rgba(255,183,77,0.10)" },
    "alkaline-earth-metal": { color:"rgba(255,224,130,0.22)", colorDark:"rgba(255,224,130,0.10)" },
    "transition-metal":     { color:"rgba(255,171,145,0.20)", colorDark:"rgba(255,171,145,0.09)" },
    "post-transition-metal":{ color:"rgba(159,213,203,0.20)", colorDark:"rgba(159,213,203,0.09)" },
    "metalloid":            { color:"rgba(128,203,196,0.20)", colorDark:"rgba(128,203,196,0.09)" },
    "nonmetal":             { color:"rgba(165,214,167,0.20)", colorDark:"rgba(165,214,167,0.09)" },
    "halogen":              { color:"rgba(179,157,219,0.22)", colorDark:"rgba(179,157,219,0.09)" },
    "noble-gas":            { color:"rgba(206,147,216,0.22)", colorDark:"rgba(206,147,216,0.09)" },
    "lanthanide":           { color:"rgba(240,98,146,0.18)",  colorDark:"rgba(240,98,146,0.08)" },
    "actinide":             { color:"rgba(229,115,115,0.18)", colorDark:"rgba(229,115,115,0.08)" }
};

/* ============================================================
   UTILITIES
   ============================================================ */
let isDark = root.getAttribute('data-theme') === 'dark';

function formatMass(mass, precision) {
    return (typeof mass === 'number' && mass % 1 !== 0 ? mass.toFixed(precision) : mass);
}

/* ============================================================
   1. RENDER LEGEND
   ============================================================ */
function renderLegend() {
    const container = document.getElementById('legend');
    container.innerHTML = '';
    Object.entries(CATEGORIES).forEach(([key, {color, colorDark}]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        const swatch = document.createElement('span');
        swatch.className = 'legend-swatch';
        swatch.dataset.colorLight = color;
        swatch.dataset.colorDark = colorDark;
        swatch.style.background = isDark ? colorDark : color;
        item.appendChild(swatch);
        const labelSpan = document.createElement('span');
        labelSpan.className = 'legend-label';
        labelSpan.dataset.cat = key;
        labelSpan.textContent = getCategoryLabel(key);
        item.appendChild(labelSpan);
        container.appendChild(item);
    });
}
renderLegend();

// Unified theme observer — updates isDark + legend swatches + meta theme-color
const themeObserver = new MutationObserver(() => {
    isDark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.legend-swatch').forEach(s => {
        s.style.background = isDark ? s.dataset.colorDark : s.dataset.colorLight;
    });
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = isDark ? '#0a0a14' : '#f8f9fd';
});
themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

/* ============================================================
   2. BUILD PERIODIC TABLE
   ============================================================ */
(function buildTable() {
    const table = document.getElementById('periodic-table');

    // Group labels (row 1, cols 2-19)
    for (let g = 1; g <= 18; g++) {
        const label = document.createElement('div');
        label.className = 'group-label';
        label.style.gridRow = 1;
        label.style.gridColumn = g + 1;
        label.textContent = g;
        table.appendChild(label);
    }

    // Period labels (col 1, rows 2-8)
    for (let p = 1; p <= 7; p++) {
        const label = document.createElement('div');
        label.className = 'period-label';
        label.style.gridRow = p + 1;
        label.style.gridColumn = 1;
        label.textContent = p;
        table.appendChild(label);
    }

    // Lanthanide/Actinide row labels
    const lanLabel = document.createElement('div');
    lanLabel.className = 'period-label';
    lanLabel.style.gridRow = 10;
    lanLabel.style.gridColumn = 1;
    lanLabel.style.fontSize = '0.5rem';
    lanLabel.textContent = '57-71';
    table.appendChild(lanLabel);

    const actLabel = document.createElement('div');
    actLabel.className = 'period-label';
    actLabel.style.gridRow = 11;
    actLabel.style.gridColumn = 1;
    actLabel.style.fontSize = '0.5rem';
    actLabel.textContent = '89-103';
    table.appendChild(actLabel);

    function createCell(el, pos) {
        const cell = document.createElement('div');
        cell.className = 'element';
        cell.dataset.category = el.cat;
        cell.dataset.z = el.z;
        cell.style.gridRow = pos[0];
        cell.style.gridColumn = pos[1];
        cell.innerHTML = `
            <span class="atomic-number">${el.z}</span>
            <span class="symbol">${el.sym}</span>
            <span class="name" data-i18n-el="${el.z}">${getElementName(el.z)}</span>
            <span class="mass">${formatMass(el.mass, 2)}</span>
        `;
        cell.addEventListener('click', () => openDetail(el));
        table.appendChild(cell);
    }

    ELEMENTS.forEach(el => {
        const pos = GRID[el.z];
        if (!pos) return;
        createCell(el, pos);
        // La and Ac also appear in main table rows
        const extraPos = EXTRA_GRID[el.z];
        if (extraPos) createCell(el, extraPos);
    });
})();

/* ============================================================
   3. DETAIL PANEL
   ============================================================ */
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

// Cached DOM references
const $badgeSymbol = document.getElementById('badge-symbol');
const $badgeName = document.getElementById('badge-name');
const $badgeSubtitle = document.getElementById('badge-subtitle');
const $detailInfo = document.getElementById('detail-info');
const $titleText = document.getElementById('title-text');
const $langLabel = document.getElementById('lang-label');
const $atomLabel = document.getElementById('atom-label');
const $modeBohr = document.getElementById('mode-bohr');
const $modeOrbital = document.getElementById('mode-orbital');

closeBtn.addEventListener('click', closeDetail);
overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

let currentDetailEl = null;

function updateDetailText(el) {
    $badgeSymbol.textContent = el.sym;
    const catData = CATEGORIES[el.cat];
    $badgeSymbol.style.background = (isDark ? catData?.colorDark : catData?.color) || 'rgba(255,255,255,0.5)';

    $badgeName.textContent = getElementName(el.z);
    $badgeSubtitle.textContent = currentLang === 'zh'
        ? `${t('elementPrefix')}${el.z}号元素 · ${getCategoryLabel(el.cat)}`
        : `${t('elementPrefix')} ${el.z} · ${getCategoryLabel(el.cat)}`;

    $detailInfo.innerHTML = '';
    const rows = [
        [t('atomicNumber'), el.z],
        [t('atomicMass'), formatMass(el.mass, 3) + ' u'],
        [t('category'), getCategoryLabel(el.cat)],
        [t('yearDiscovered'), el.year === 0 ? t('ancient') : el.year],
    ];
    rows.forEach(([label, value]) => {
        const row = document.createElement('div');
        row.className = 'info-row';
        row.innerHTML = `<span class="label">${label}</span><span class="value">${value}</span>`;
        $detailInfo.appendChild(row);
    });

    const cfg = document.createElement('div');
    cfg.className = 'electron-config';
    cfg.innerHTML = `<div class="label">${t('electronConfig')}</div><div class="value">${el.config}</div>`;
    $detailInfo.appendChild(cfg);

    const shellSection = document.createElement('div');
    shellSection.className = 'electron-config';
    shellSection.innerHTML = `<div class="label">${t('electronShells')}</div><div class="shells-display">${
        el.shells.map((s, i) => `<span class="shell-chip">${i+1}: ${s}e⁻</span>`).join('')
    }</div>`;
    $detailInfo.appendChild(shellSection);
}

function openDetail(el) {
    currentDetailEl = el;
    updateDetailText(el);

    overlay.classList.add('active');

    $modeBohr.classList.toggle('active', viewMode === 'bohr');
    $modeOrbital.classList.toggle('active', viewMode === 'orbital');

    buildAtom(el);
}

function closeDetail() {
    overlay.classList.remove('active');
    destroyAtom();
    currentDetailEl = null;
}

/* ============================================================
   LANGUAGE SWITCHING
   ============================================================ */
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('pt-lang', lang);

    $titleText.textContent = t('title');
    $langLabel.textContent = lang === 'en' ? 'EN' : '中';
    $atomLabel.textContent = t('atomLabel');
    if ($modeBohr) $modeBohr.textContent = t('modeBohr');
    if ($modeOrbital) $modeOrbital.textContent = t('modeOrbital');

    document.querySelectorAll('.legend-label').forEach(span => {
        span.textContent = getCategoryLabel(span.dataset.cat);
    });

    document.querySelectorAll('[data-i18n-el]').forEach(span => {
        span.textContent = getElementName(parseInt(span.dataset.i18nEl));
    });

    // Update detail panel text only (no 3D rebuild)
    if (currentDetailEl) updateDetailText(currentDetailEl);
}

const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    switchLang(currentLang === 'en' ? 'zh' : 'en');
});

$langLabel.textContent = currentLang === 'en' ? 'EN' : '中';

/* ============================================================
   4. THREE.JS — 3D ATOMIC VISUALIZATION
   ============================================================ */
let scene, camera, renderer, animId;
let atomGroup;
let viewMode = 'bohr'; // 'bohr' | 'orbital'
let abortController = null;
let animTime = 0;

function switchViewMode(mode) {
    if (mode === viewMode) return;
    viewMode = mode;
    $modeBohr.classList.toggle('active', mode === 'bohr');
    $modeOrbital.classList.toggle('active', mode === 'orbital');
    if (currentDetailEl) buildAtom(currentDetailEl);
}

$modeBohr.addEventListener('click', () => switchViewMode('bohr'));
$modeOrbital.addEventListener('click', () => switchViewMode('orbital'));

/* ============================================================
   ELECTRON CONFIG PARSER
   ============================================================ */
const NOBLE_GAS_CORES = {
    '[He]': '1s2',
    '[Ne]': '1s2 2s2 2p6',
    '[Ar]': '1s2 2s2 2p6 3s2 3p6',
    '[Kr]': '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6',
    '[Xe]': '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6',
    '[Rn]': '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6'
};

function parseElectronConfig(configStr) {
    let expanded = configStr;
    for (const [core, full] of Object.entries(NOBLE_GAS_CORES)) {
        expanded = expanded.replace(core, full);
    }
    const regex = /(\d+)([spdf])(\d+)/g;
    const orbitals = [];
    let match;
    while ((match = regex.exec(expanded)) !== null) {
        orbitals.push({
            n: parseInt(match[1]),
            l: match[2],
            electrons: parseInt(match[3])
        });
    }
    return orbitals;
}

/* ============================================================
   ORBITAL COLOR PALETTE
   ============================================================ */
const ORBITAL_COLORS = {
    s: { light: 0x4fc3f7, dark: 0x64b5f6 },
    p: { light: 0x81c784, dark: 0xa5d6a7 },
    d: { light: 0xffb74d, dark: 0xffcc80 },
    f: { light: 0xce93d8, dark: 0xba68c8 }
};

function orbitalRadius(n) {
    return 1.5 + n * 1.1;
}

function orbitalOpacity(n, maxN, dark) {
    const base = dark ? 0.18 : 0.22;
    const range = dark ? 0.22 : 0.23;
    const normalizedN = (n - 1) / Math.max(maxN - 1, 1);
    return base + normalizedN * range;
}

/* ============================================================
   ORBITAL SHAPE BUILDERS
   ============================================================ */
function createSOrbital(radius, color, opacity, dark) {
    const group = new THREE.Group();
    const geo = new THREE.SphereGeometry(radius * 0.35, 32, 32);
    const mat = new THREE.MeshPhongMaterial({
        color: color, emissive: color, emissiveIntensity: dark ? 0.35 : 0.25,
        transparent: true, opacity: opacity, side: THREE.DoubleSide, shininess: 40
    });
    group.add(new THREE.Mesh(geo, mat));
    const wireGeo = new THREE.SphereGeometry(radius * 0.36, 16, 16);
    const wireMat = new THREE.MeshBasicMaterial({
        color: color, wireframe: true, transparent: true, opacity: opacity * 0.3
    });
    group.add(new THREE.Mesh(wireGeo, wireMat));
    return group;
}

function createPOrbital(radius, color, opacity, dark, axis) {
    const group = new THREE.Group();
    const lobeSize = radius * 0.22;
    const offset = radius * 0.35;
    const geo = new THREE.SphereGeometry(lobeSize, 24, 24);
    const mat = new THREE.MeshPhongMaterial({
        color: color, emissive: color, emissiveIntensity: dark ? 0.35 : 0.25,
        transparent: true, opacity: opacity, side: THREE.DoubleSide, shininess: 40
    });
    for (let sign = -1; sign <= 1; sign += 2) {
        const lobe = new THREE.Mesh(geo, mat);
        const sO = 0.7, sM = 2.0;
        if (axis === 'x') lobe.scale.set(sM, sO, sO);
        else if (axis === 'y') lobe.scale.set(sO, sM, sO);
        else lobe.scale.set(sO, sO, sM);
        lobe.position[axis] = sign * offset;
        group.add(lobe);
    }
    return group;
}

function createDOrbital(radius, color, opacity, dark) {
    const group = new THREE.Group();
    const lobeSize = radius * 0.16;
    const offset = radius * 0.3;
    const geo = new THREE.SphereGeometry(lobeSize, 20, 20);
    const mat = new THREE.MeshPhongMaterial({
        color: color, emissive: color, emissiveIntensity: dark ? 0.35 : 0.25,
        transparent: true, opacity: opacity, side: THREE.DoubleSide, shininess: 40
    });
    const angles = [Math.PI/4, 3*Math.PI/4, 5*Math.PI/4, 7*Math.PI/4];
    angles.forEach(angle => {
        const lobe = new THREE.Mesh(geo, mat);
        lobe.scale.set(2.0, 0.7, 0.7);
        lobe.position.x = Math.cos(angle) * offset;
        lobe.position.y = Math.sin(angle) * offset;
        lobe.rotation.z = angle;
        group.add(lobe);
    });
    return group;
}

function createFOrbital(radius, color, opacity, dark) {
    const group = new THREE.Group();
    const lobeSize = radius * 0.12;
    const offset = radius * 0.25;
    const geo = new THREE.SphereGeometry(lobeSize, 16, 16);
    const mat = new THREE.MeshPhongMaterial({
        color: color, emissive: color, emissiveIntensity: dark ? 0.35 : 0.25,
        transparent: true, opacity: opacity, side: THREE.DoubleSide, shininess: 40
    });
    ['x', 'y', 'z'].forEach(axis => {
        for (let sign = -1; sign <= 1; sign += 2) {
            const lobe = new THREE.Mesh(geo, mat);
            lobe.scale.set(0.7, 0.7, 2.0);
            lobe.position[axis] = sign * offset;
            if (axis === 'x') lobe.rotation.z = sign * 0.3;
            if (axis === 'y') lobe.rotation.x = sign * 0.3;
            if (axis === 'z') lobe.rotation.y = sign * 0.3;
            group.add(lobe);
        }
    });
    return group;
}

/* ============================================================
   BUILD BOHR CONTENT (existing orbit rings + electrons)
   ============================================================ */
function buildBohrContent(el, dark) {
    const shells = el.shells;
    const shellColors = [0x4fc3f7, 0x7c83f5, 0xff6b9d, 0xffe066, 0x7ee8a2, 0xffaa5c, 0xce93d8];

    shells.forEach((electronCount, i) => {
        const radius = 0.9 + i * 0.75;
        const color = shellColors[i % shellColors.length];
        const rotX = i * 0.7 + 0.4;
        const rotY = i * 0.5;

        const ringGeo = new THREE.TorusGeometry(radius, 0.012, 6, 80);
        const ringMat = new THREE.MeshBasicMaterial({
            color: color, transparent: true, opacity: 0.3
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = rotX;
        ring.rotation.y = rotY;
        atomGroup.add(ring);

        const electronGeo = new THREE.SphereGeometry(0.07, 10, 10);
        const electronMat = new THREE.MeshPhongMaterial({
            color: color, emissive: color, emissiveIntensity: 0.4,
            shininess: 200
        });

        for (let e = 0; e < electronCount; e++) {
            const angle = (e / electronCount) * Math.PI * 2;
            const pivot = new THREE.Object3D();
            pivot.rotation.x = rotX;
            pivot.rotation.y = rotY;
            const electron = new THREE.Mesh(electronGeo, electronMat);
            electron.position.set(
                radius * Math.cos(angle),
                radius * Math.sin(angle),
                0
            );
            pivot.add(electron);
            pivot.userData = {
                isElectron: true,
                radius: radius,
                angle: angle,
                speed: 0.4 + i * 0.2 + e * 0.01,
                shellIdx: i
            };
            atomGroup.add(pivot);
        }
    });
}

/* ============================================================
   BUILD ORBITAL CONTENT (s/p/d/f shapes)
   ============================================================ */
function buildOrbitalContent(el, dark) {
    const orbitals = parseElectronConfig(el.config);
    const maxN = Math.max(...orbitals.map(o => o.n));

    orbitals.forEach(orb => {
        const r = orbitalRadius(orb.n);
        const color = dark ? ORBITAL_COLORS[orb.l].dark : ORBITAL_COLORS[orb.l].light;
        const opacity = orbitalOpacity(orb.n, maxN, dark);

        let shape;
        switch (orb.l) {
            case 's':
                shape = createSOrbital(r, color, opacity, dark);
                break;
            case 'p':
                shape = createPOrbital(r, color, opacity, dark, 'z');
                const px = createPOrbital(r, color, opacity, dark, 'x');
                const py = createPOrbital(r, color, opacity, dark, 'y');
                px.children.forEach(c => shape.add(c.clone()));
                py.children.forEach(c => shape.add(c.clone()));
                break;
            case 'd':
                shape = createDOrbital(r, color, opacity, dark);
                break;
            case 'f':
                shape = createFOrbital(r, color, opacity, dark);
                break;
        }

        if (shape) {
            shape.userData = { orbitalType: orb.l, n: orb.n };
            atomGroup.add(shape);
        }
    });
}

/* ============================================================
   ANIMATION HELPERS
   ============================================================ */
function animateBohrElectrons(nucleusGroup) {
    nucleusGroup.rotation.y = animTime * 0.3;
    nucleusGroup.rotation.x = animTime * 0.2;

    atomGroup.children.forEach(child => {
        if (child.userData && child.userData.isElectron) {
            const d = child.userData;
            const newAngle = d.angle + animTime * d.speed;
            const mesh = child.children[0];
            mesh.position.set(
                d.radius * Math.cos(newAngle),
                d.radius * Math.sin(newAngle),
                0
            );
        }
    });
}

function animateOrbitals() {
    const t = Date.now() * 0.001;
    atomGroup.children.forEach(child => {
        if (child.userData && child.userData.orbitalType) {
            const pulseSpeed = 0.8 + child.userData.n * 0.15;
            child.scale.setScalar(1 + Math.sin(t * pulseSpeed) * 0.04);
        }
    });
}

/* ============================================================
   BUILD ATOM — MAIN ENTRY POINT
   ============================================================ */
function buildAtom(el) {
    destroyAtom();

    const container = document.getElementById('atom-viewer');
    const w = container.clientWidth || 320;
    const h = container.clientHeight || 300;

    const orbitals = viewMode === 'orbital' ? parseElectronConfig(el.config) : [];
    const maxN = orbitals.length > 0 ? Math.max(...orbitals.map(o => o.n)) : 1;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    let camZ;
    if (viewMode === 'orbital') {
        camZ = 12 + maxN * 1.2;
    } else {
        const numShells = el.shells.length;
        const outerRadius = 0.9 + (numShells - 1) * 0.75;
        camZ = (outerRadius + 0.5) / Math.tan(25 * Math.PI / 180);
    }
    camera.position.set(0, 0, camZ);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.insertBefore(renderer.domElement, container.firstChild);

    scene.add(new THREE.AmbientLight(0xffffff, isDark ? 0.4 : 0.6));
    const pLight1 = new THREE.PointLight(0x7fc8ff, isDark ? 1.8 : 2, 20);
    pLight1.position.set(4, 4, 4);
    scene.add(pLight1);
    const pLight2 = new THREE.PointLight(0xff9fcc, isDark ? 1.2 : 1.5, 20);
    pLight2.position.set(-4, -3, 2);
    scene.add(pLight2);

    atomGroup = new THREE.Group();
    scene.add(atomGroup);

    // Nucleon visualization — reuse 2 materials instead of creating per-nucleon
    const nucleusGroup = new THREE.Group();
    const numNucleons = Math.min(el.z, 20);
    const nucleonGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const protonColor = isDark ? 0xff8fab : 0xff6b9d;
    const neutronColor = isDark ? 0x64b5f6 : 0x4fc3f7;
    const protonMat = new THREE.MeshPhongMaterial({ color: protonColor, shininess: 120, specular: 0xffffff });
    const neutronMat = new THREE.MeshPhongMaterial({ color: neutronColor, shininess: 120, specular: 0xffffff });
    for (let i = 0; i < numNucleons; i++) {
        const nucl = new THREE.Mesh(nucleonGeo, i < Math.ceil(el.z / 2) ? protonMat : neutronMat);
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

    if (viewMode === 'bohr') {
        buildBohrContent(el, isDark);
    } else {
        buildOrbitalContent(el, isDark);
    }

    // Drag controls — pointer events only (covers touch), with AbortController
    let isDragging = false;
    let prevX = 0, prevY = 0;

    abortController = new AbortController();
    const signal = abortController.signal;
    const canvas = renderer.domElement;

    canvas.addEventListener('pointerdown', e => {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
    }, { signal });
    canvas.addEventListener('pointermove', e => {
        if (!isDragging || !atomGroup) return;
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        atomGroup.rotation.y += dx * 0.012;
        atomGroup.rotation.x += dy * 0.012;
        prevX = e.clientX;
        prevY = e.clientY;
    }, { signal });
    const endDrag = () => { isDragging = false; };
    canvas.addEventListener('pointerup', endDrag, { signal });
    canvas.addEventListener('pointerleave', endDrag, { signal });
    canvas.addEventListener('wheel', e => {
        e.preventDefault();
        camera.position.z = Math.max(2, Math.min(30, camera.position.z + e.deltaY * 0.01));
    }, { signal, passive: false });

    // Animation loop — match 1.html time accumulator
    animTime = 0;
    function animate() {
        if (!scene) return;
        animId = requestAnimationFrame(animate);
        animTime += 0.012;

        if (viewMode === 'bohr') {
            animateBohrElectrons(nucleusGroup);
        } else {
            animateOrbitals();
        }

        renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    function onResize() {
        const w2 = container.clientWidth;
        const h2 = container.clientHeight;
        camera.aspect = w2 / h2;
        camera.updateProjectionMatrix();
        renderer.setSize(w2, h2);
    }
    window.addEventListener('resize', onResize);
    container._resizeHandler = onResize;
}

function destroyAtom() {
    if (animId) cancelAnimationFrame(animId);
    animId = null;
    animTime = 0;

    // Abort all canvas event listeners
    if (abortController) {
        abortController.abort();
        abortController = null;
    }

    const container = document.getElementById('atom-viewer');
    if (container._resizeHandler) {
        window.removeEventListener('resize', container._resizeHandler);
        container._resizeHandler = null;
    }

    // Dispose GPU resources — traverse scene to free geometries and materials
    if (scene) {
        scene.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
                else obj.material.dispose();
            }
        });
    }

    const canvas = container.querySelector('canvas');
    if (canvas) canvas.remove();

    if (renderer) {
        renderer.dispose();
        renderer = null;
    }
    scene = null;
    camera = null;
    atomGroup = null;
}

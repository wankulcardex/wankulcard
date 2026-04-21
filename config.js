// ═══════════════════════════════════════════════
//  WankulDEX — Configuration Supabase
//  ⚠️  Ajoute ce fichier dans ton .gitignore !
// ═══════════════════════════════════════════════

const SUPABASE_URL = 'https://eebrgmoehazaewsvfmol.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_k55DfTh9f-yVFGi5RG5PCA_bj3ExVWq';

// ─── Helpers Auth ───────────────────────────────
function getToken() { return localStorage.getItem('wankuldex_token'); }
function getUser()  { try { return JSON.parse(localStorage.getItem('wankuldex_user')); } catch { return null; } }
function isLoggedIn() { return !!getToken(); }

function requireAuth() {
  if (!isLoggedIn()) { window.location.href = 'index.html'; }
}

// ─── Fetch helper avec auth ─────────────────────
async function sbFetch(path, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${token || SUPABASE_ANON_KEY}`,
    ...options.headers
  };
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `HTTP ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

// ─── Raretés ────────────────────────────────────
const RARITIES = {
  terrain:            {label:'Terrain',          color:'#8D6E63'},
  commune:            {label:'Commune',           color:'#9E9E9E'},
  'peu-commune':      {label:'Peu Commune',       color:'#4CAF50'},
  rare:               {label:'Rare',              color:'#2196F3'},
  'super-rare':       {label:'Super Rare',        color:'#9B59B6'},
  'ultra-rare-holo1': {label:'Ultra Rare Holo 1', color:'#FFD600'},
  'ultra-rare-holo2': {label:'Ultra Rare Holo 2', color:'#FF9800'},
  'legendaire-bronze':{label:'Légendaire Bronze', color:'#CD7F32'},
  'legendaire-argent':{label:'Légendaire Argent', color:'#C0C0C0'},
  'legendaire-or':    {label:'Légendaire Or',     color:'#FFD700'},
};

// ─── Séries ─────────────────────────────────────
const SERIES = [
  {id:'origins', name:'Origins',  season:'Saison 1', color:'#FF6B35', img:'booster/wankulS1.png', cards:180},
  {id:'campus',  name:'Campus',   season:'Saison 2', color:'#0099FF', img:'booster/wankulS2.png', cards:155},
  {id:'battle',  name:'Battle',   season:'Saison 3', color:'#E8001D', img:'booster/wankulS3.png', cards:180},
  {id:'stellar', name:'Stellar',  season:'Saison 4', color:'#9B59B6', img:'booster/wankulS4.png', cards:180},
];

// ─── Cartes (695 cartes réelles) ─────────────────
const POOL = {
  "origins": {
    "terrain": [
      {
        "id": "or-t1",
        "name": "Navire Pirate",
        "ref": "T#1",
        "emoji": "🃏"
      },
      {
        "id": "or-t2",
        "name": "Portal",
        "ref": "T#2",
        "emoji": "🃏"
      },
      {
        "id": "or-t3",
        "name": "Quantum",
        "ref": "T#3",
        "emoji": "🃏"
      },
      {
        "id": "or-t4",
        "name": "Rocket Field",
        "ref": "T#4",
        "emoji": "🃏"
      },
      {
        "id": "or-t5",
        "name": "Rust",
        "ref": "T#5",
        "emoji": "🃏"
      },
      {
        "id": "or-t6",
        "name": "Il fait pas chaud",
        "ref": "T#6",
        "emoji": "🃏"
      },
      {
        "id": "or-t7",
        "name": "Golf",
        "ref": "T#7",
        "emoji": "🃏"
      },
      {
        "id": "or-t8",
        "name": "Dust 2",
        "ref": "T#8",
        "emoji": "🃏"
      },
      {
        "id": "or-t9",
        "name": "Space Factory",
        "ref": "T#9",
        "emoji": "🃏"
      },
      {
        "id": "or-t10",
        "name": "La F.A.Q.",
        "ref": "T#10",
        "emoji": "🃏"
      },
      {
        "id": "or-t11",
        "name": "Musée",
        "ref": "T#11",
        "emoji": "🃏"
      },
      {
        "id": "or-t12",
        "name": "FNAF",
        "ref": "T#12",
        "emoji": "🃏"
      },
      {
        "id": "or-t13",
        "name": "Village",
        "ref": "T#13",
        "emoji": "🃏"
      },
      {
        "id": "or-t14",
        "name": "La Ferme",
        "ref": "T#14",
        "emoji": "🃏"
      },
      {
        "id": "or-t15",
        "name": "Socisseau Factory",
        "ref": "T#15",
        "emoji": "🃏"
      },
      {
        "id": "or-t16",
        "name": "Trou du monde",
        "ref": "T#16",
        "emoji": "🃏"
      },
      {
        "id": "or-t17",
        "name": "Moria",
        "ref": "T#17",
        "emoji": "🃏"
      },
      {
        "id": "or-t18",
        "name": "Tchernobyl",
        "ref": "T#18",
        "emoji": "🃏"
      },
      {
        "id": "or-t19",
        "name": "Valheim",
        "ref": "T#19",
        "emoji": "🃏"
      },
      {
        "id": "or-t20",
        "name": "Tranchées",
        "ref": "T#20",
        "emoji": "🃏"
      },
      {
        "id": "or-t21",
        "name": "Ravenholm",
        "ref": "T#21",
        "emoji": "🃏"
      },
      {
        "id": "or-t22",
        "name": "Urbex",
        "ref": "T#22",
        "emoji": "🃏"
      },
      {
        "id": "or-t23",
        "name": "Manoir",
        "ref": "T#23",
        "emoji": "🃏"
      },
      {
        "id": "or-t24",
        "name": "Barrage",
        "ref": "T#24",
        "emoji": "🃏"
      },
      {
        "id": "or-t25",
        "name": "Chernogorsk",
        "ref": "T#25",
        "emoji": "🃏"
      },
      {
        "id": "or-t26",
        "name": "Agrou",
        "ref": "T#26",
        "emoji": "🃏"
      },
      {
        "id": "or-t27",
        "name": "Garage",
        "ref": "T#27",
        "emoji": "🃏"
      },
      {
        "id": "or-t28",
        "name": "Uretus",
        "ref": "T#28",
        "emoji": "🃏"
      },
      {
        "id": "or-t29",
        "name": "Wankil Show",
        "ref": "T#29",
        "emoji": "🃏"
      },
      {
        "id": "or-t30",
        "name": "Convention",
        "ref": "T#30",
        "emoji": "🃏"
      }
    ],
    "commune": [
      {
        "id": "or-c31",
        "name": "Garagiste",
        "ref": "C#31",
        "emoji": "🃏"
      },
      {
        "id": "or-c32",
        "name": "Garagiste",
        "ref": "C#32",
        "emoji": "🃏"
      },
      {
        "id": "or-c33",
        "name": "Camionneur",
        "ref": "C#33",
        "emoji": "🃏"
      },
      {
        "id": "or-c34",
        "name": "Camionneur",
        "ref": "C#34",
        "emoji": "🃏"
      },
      {
        "id": "or-c35",
        "name": "Vendeur",
        "ref": "C#35",
        "emoji": "🃏"
      },
      {
        "id": "or-c36",
        "name": "Vendeur",
        "ref": "C#36",
        "emoji": "🃏"
      },
      {
        "id": "or-c37",
        "name": "Annabelle",
        "ref": "C#37",
        "emoji": "🃏"
      },
      {
        "id": "or-c38",
        "name": "Grudge",
        "ref": "C#38",
        "emoji": "🃏"
      },
      {
        "id": "or-c39",
        "name": "Astronaute",
        "ref": "C#39",
        "emoji": "🃏"
      },
      {
        "id": "or-c40",
        "name": "Astronaute",
        "ref": "C#40",
        "emoji": "🃏"
      },
      {
        "id": "or-c41",
        "name": "Boxeur",
        "ref": "C#41",
        "emoji": "🃏"
      },
      {
        "id": "or-c42",
        "name": "Boxeur",
        "ref": "C#42",
        "emoji": "🃏"
      },
      {
        "id": "or-c43",
        "name": "Infecté",
        "ref": "C#43",
        "emoji": "🃏"
      },
      {
        "id": "or-c44",
        "name": "Infecté",
        "ref": "C#44",
        "emoji": "🃏"
      },
      {
        "id": "or-c45",
        "name": "Fermier",
        "ref": "C#45",
        "emoji": "🃏"
      },
      {
        "id": "or-c46",
        "name": "Fermier",
        "ref": "C#46",
        "emoji": "🃏"
      },
      {
        "id": "or-c47",
        "name": "Chien",
        "ref": "C#47",
        "emoji": "🃏"
      },
      {
        "id": "or-c48",
        "name": "Cochon",
        "ref": "C#48",
        "emoji": "🃏"
      },
      {
        "id": "or-c49",
        "name": "Fromager",
        "ref": "C#49",
        "emoji": "🃏"
      },
      {
        "id": "or-c50",
        "name": "Charcutier",
        "ref": "C#50",
        "emoji": "🃏"
      },
      {
        "id": "or-c51",
        "name": "Businessman",
        "ref": "C#51",
        "emoji": "🃏"
      },
      {
        "id": "or-c52",
        "name": "Débile",
        "ref": "C#52",
        "emoji": "🃏"
      },
      {
        "id": "or-c53",
        "name": "Débile",
        "ref": "C#53",
        "emoji": "🃏"
      },
      {
        "id": "or-c54",
        "name": "Paysan",
        "ref": "C#54",
        "emoji": "🃏"
      },
      {
        "id": "or-c55",
        "name": "Paysan",
        "ref": "C#55",
        "emoji": "🃏"
      },
      {
        "id": "or-c56",
        "name": "Cuisinier",
        "ref": "C#56",
        "emoji": "🃏"
      },
      {
        "id": "or-c57",
        "name": "Cuisinier",
        "ref": "C#57",
        "emoji": "🃏"
      },
      {
        "id": "or-c58",
        "name": "Bébé",
        "ref": "C#58",
        "emoji": "🃏"
      },
      {
        "id": "or-c59",
        "name": "Bébé",
        "ref": "C#59",
        "emoji": "🃏"
      },
      {
        "id": "or-c60",
        "name": "Chasseur",
        "ref": "C#60",
        "emoji": "🃏"
      },
      {
        "id": "or-c61",
        "name": "Pilote d'avion",
        "ref": "C#61",
        "emoji": "🃏"
      },
      {
        "id": "or-c62",
        "name": "Agrou",
        "ref": "C#62",
        "emoji": "🃏"
      },
      {
        "id": "or-c63",
        "name": "Agrou",
        "ref": "C#63",
        "emoji": "🃏"
      },
      {
        "id": "or-c64",
        "name": "Chevalier",
        "ref": "C#64",
        "emoji": "🃏"
      },
      {
        "id": "or-c65",
        "name": "Chevalier",
        "ref": "C#65",
        "emoji": "🃏"
      },
      {
        "id": "or-c66",
        "name": "Peintre",
        "ref": "C#66",
        "emoji": "🃏"
      },
      {
        "id": "or-c67",
        "name": "Peintre",
        "ref": "C#67",
        "emoji": "🃏"
      },
      {
        "id": "or-c68",
        "name": "Pompier",
        "ref": "C#68",
        "emoji": "🃏"
      },
      {
        "id": "or-c69",
        "name": "Pompier",
        "ref": "C#69",
        "emoji": "🃏"
      },
      {
        "id": "or-c70",
        "name": "Sorcier",
        "ref": "C#70",
        "emoji": "🃏"
      },
      {
        "id": "or-c71",
        "name": "Sorcier",
        "ref": "C#71",
        "emoji": "🃏"
      },
      {
        "id": "or-c72",
        "name": "SDF",
        "ref": "C#72",
        "emoji": "🃏"
      },
      {
        "id": "or-c73",
        "name": "SDF",
        "ref": "C#73",
        "emoji": "🃏"
      },
      {
        "id": "or-c74",
        "name": "Touriste",
        "ref": "C#74",
        "emoji": "🃏"
      },
      {
        "id": "or-c75",
        "name": "Touriste",
        "ref": "C#75",
        "emoji": "🃏"
      },
      {
        "id": "or-c76",
        "name": "Employé WcDo",
        "ref": "C#76",
        "emoji": "🃏"
      },
      {
        "id": "or-c77",
        "name": "Employé WcDo",
        "ref": "C#77",
        "emoji": "🃏"
      },
      {
        "id": "or-c78",
        "name": "Mort-Vivant",
        "ref": "C#78",
        "emoji": "🃏"
      },
      {
        "id": "or-c79",
        "name": "Mort-Vivant",
        "ref": "C#79",
        "emoji": "🃏"
      },
      {
        "id": "or-c80",
        "name": "Soldat Romain",
        "ref": "C#80",
        "emoji": "🃏"
      }
    ],
    "peu-commune": [
      {
        "id": "or-uc81",
        "name": "Spiderlaink",
        "ref": "UC#81",
        "emoji": "🃏"
      },
      {
        "id": "or-uc82",
        "name": "Thorracid",
        "ref": "UC#82",
        "emoji": "🃏"
      },
      {
        "id": "or-uc83",
        "name": "CT",
        "ref": "UC#83",
        "emoji": "🃏"
      },
      {
        "id": "or-uc84",
        "name": "Terro",
        "ref": "UC#84",
        "emoji": "🃏"
      },
      {
        "id": "or-uc85",
        "name": "Clown Tueur",
        "ref": "UC#85",
        "emoji": "🃏"
      },
      {
        "id": "or-uc86",
        "name": "Joueur Du Grenier",
        "ref": "UC#86",
        "emoji": "🃏"
      },
      {
        "id": "or-uc87",
        "name": "Seb",
        "ref": "UC#87",
        "emoji": "🃏"
      },
      {
        "id": "or-uc88",
        "name": "Amixem",
        "ref": "UC#88",
        "emoji": "🃏"
      },
      {
        "id": "or-uc89",
        "name": "Pirate",
        "ref": "UC#89",
        "emoji": "🃏"
      },
      {
        "id": "or-uc90",
        "name": "Pirate",
        "ref": "UC#90",
        "emoji": "🃏"
      },
      {
        "id": "or-uc91",
        "name": "Semi-Homme",
        "ref": "UC#91",
        "emoji": "🃏"
      },
      {
        "id": "or-uc92",
        "name": "Semi-Homme",
        "ref": "UC#92",
        "emoji": "🃏"
      },
      {
        "id": "or-uc93",
        "name": "Marthie",
        "ref": "UC#93",
        "emoji": "🃏"
      },
      {
        "id": "or-uc94",
        "name": "Doc",
        "ref": "UC#94",
        "emoji": "🃏"
      },
      {
        "id": "or-uc95",
        "name": "Vieille",
        "ref": "UC#95",
        "emoji": "🃏"
      },
      {
        "id": "or-uc96",
        "name": "Vieille",
        "ref": "UC#96",
        "emoji": "🃏"
      },
      {
        "id": "or-uc97",
        "name": "Fanboy",
        "ref": "UC#97",
        "emoji": "🃏"
      },
      {
        "id": "or-uc98",
        "name": "Fangirl",
        "ref": "UC#98",
        "emoji": "🃏"
      },
      {
        "id": "or-uc99",
        "name": "Gotaga",
        "ref": "UC#99",
        "emoji": "🃏"
      },
      {
        "id": "or-uc100",
        "name": "Billy le bonhomme de neige",
        "ref": "UC#100",
        "emoji": "🃏"
      },
      {
        "id": "or-uc101",
        "name": "Gremlin",
        "ref": "UC#101",
        "emoji": "🃏"
      },
      {
        "id": "or-uc102",
        "name": "Steve",
        "ref": "UC#102",
        "emoji": "🃏"
      },
      {
        "id": "or-uc103",
        "name": "Steve",
        "ref": "UC#103",
        "emoji": "🃏"
      },
      {
        "id": "or-uc104",
        "name": "Apprentie Sorcière",
        "ref": "UC#104",
        "emoji": "🃏"
      },
      {
        "id": "or-uc105",
        "name": "Elfe",
        "ref": "UC#105",
        "emoji": "🃏"
      },
      {
        "id": "or-uc106",
        "name": "Sel",
        "ref": "UC#106",
        "emoji": "🃏"
      },
      {
        "id": "or-uc107",
        "name": "Sel",
        "ref": "UC#107",
        "emoji": "🃏"
      },
      {
        "id": "or-uc108",
        "name": "Mastu",
        "ref": "UC#108",
        "emoji": "🃏"
      },
      {
        "id": "or-uc109",
        "name": "Deotoons",
        "ref": "UC#109",
        "emoji": "🃏"
      },
      {
        "id": "or-uc110",
        "name": "Cowboy",
        "ref": "UC#110",
        "emoji": "🃏"
      },
      {
        "id": "or-uc111",
        "name": "Cowboy",
        "ref": "UC#111",
        "emoji": "🃏"
      },
      {
        "id": "or-uc112",
        "name": "Policier",
        "ref": "UC#112",
        "emoji": "🃏"
      },
      {
        "id": "or-uc113",
        "name": "Policier",
        "ref": "UC#113",
        "emoji": "🃏"
      },
      {
        "id": "or-uc114",
        "name": "Obèse",
        "ref": "UC#114",
        "emoji": "🃏"
      },
      {
        "id": "or-uc115",
        "name": "Singe",
        "ref": "UC#115",
        "emoji": "🃏"
      },
      {
        "id": "or-uc116",
        "name": "Enquêteur",
        "ref": "UC#116",
        "emoji": "🃏"
      },
      {
        "id": "or-uc117",
        "name": "Potatoz",
        "ref": "UC#117",
        "emoji": "🃏"
      },
      {
        "id": "or-uc118",
        "name": "Jiraya",
        "ref": "UC#118",
        "emoji": "🃏"
      },
      {
        "id": "or-uc119",
        "name": "Feldup",
        "ref": "UC#119",
        "emoji": "🃏"
      },
      {
        "id": "or-uc120",
        "name": "Bretonne Bigoudène",
        "ref": "UC#120",
        "emoji": "🃏"
      },
      {
        "id": "or-uc121",
        "name": "Roi",
        "ref": "UC#121",
        "emoji": "🃏"
      },
      {
        "id": "or-uc122",
        "name": "Hugo Délire",
        "ref": "UC#122",
        "emoji": "🃏"
      },
      {
        "id": "or-uc123",
        "name": "Xari",
        "ref": "UC#123",
        "emoji": "🃏"
      },
      {
        "id": "or-uc124",
        "name": "Princesse",
        "ref": "UC#124",
        "emoji": "🃏"
      },
      {
        "id": "or-uc125",
        "name": "Princesse",
        "ref": "UC#125",
        "emoji": "🃏"
      },
      {
        "id": "or-uc126",
        "name": "Prostituée",
        "ref": "UC#126",
        "emoji": "🃏"
      },
      {
        "id": "or-uc127",
        "name": "Fée",
        "ref": "UC#127",
        "emoji": "🃏"
      },
      {
        "id": "or-uc128",
        "name": "G cramé",
        "ref": "UC#128",
        "emoji": "🃏"
      },
      {
        "id": "or-uc129",
        "name": "Superconeri",
        "ref": "UC#129",
        "emoji": "🃏"
      },
      {
        "id": "or-uc130",
        "name": "Moine",
        "ref": "UC#130",
        "emoji": "🃏"
      }
    ],
    "rare": [
      {
        "id": "or-r131",
        "name": "CyberLaink",
        "ref": "R#131",
        "emoji": "🃏"
      },
      {
        "id": "or-r132",
        "name": "CyberTerra",
        "ref": "R#132",
        "emoji": "🃏"
      },
      {
        "id": "or-r133",
        "name": "Jacques Flantier",
        "ref": "R#133",
        "emoji": "🃏"
      },
      {
        "id": "or-r134",
        "name": "Richard Flantier",
        "ref": "R#134",
        "emoji": "🃏"
      },
      {
        "id": "or-r135",
        "name": "Dresseuse",
        "ref": "R#135",
        "emoji": "🃏"
      },
      {
        "id": "or-r136",
        "name": "Dresseur",
        "ref": "R#136",
        "emoji": "🃏"
      },
      {
        "id": "or-r137",
        "name": "Survivant",
        "ref": "R#137",
        "emoji": "🃏"
      },
      {
        "id": "or-r138",
        "name": "Survivant",
        "ref": "R#138",
        "emoji": "🃏"
      },
      {
        "id": "or-r139",
        "name": "Wicromania",
        "ref": "R#139",
        "emoji": "🃏"
      },
      {
        "id": "or-r140",
        "name": "Voyant",
        "ref": "R#140",
        "emoji": "🃏"
      },
      {
        "id": "or-r141",
        "name": "Pierre Ronfin",
        "ref": "R#141",
        "emoji": "🃏"
      },
      {
        "id": "or-r142",
        "name": "André Rondin",
        "ref": "R#142",
        "emoji": "🃏"
      },
      {
        "id": "or-r143",
        "name": "Professeur",
        "ref": "R#143",
        "emoji": "🃏"
      },
      {
        "id": "or-r144",
        "name": "Professeur",
        "ref": "R#144",
        "emoji": "🃏"
      },
      {
        "id": "or-r145",
        "name": "Samouraï",
        "ref": "R#145",
        "emoji": "🃏"
      },
      {
        "id": "or-r146",
        "name": "Sage Japonnais",
        "ref": "R#146",
        "emoji": "🃏"
      },
      {
        "id": "or-r147",
        "name": "Jeanine",
        "ref": "R#147",
        "emoji": "🃏"
      },
      {
        "id": "or-r148",
        "name": "Martine",
        "ref": "R#148",
        "emoji": "🃏"
      },
      {
        "id": "or-r149",
        "name": "Laink",
        "ref": "R#149",
        "emoji": "🃏"
      },
      {
        "id": "or-r150",
        "name": "Terracid",
        "ref": "R#150",
        "emoji": "🃏"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "or-ur151",
        "name": "Cowboy",
        "ref": "UR#151",
        "emoji": "🃏"
      },
      {
        "id": "or-ur152",
        "name": "Cowboy",
        "ref": "UR#152",
        "emoji": "🃏"
      },
      {
        "id": "or-ur153",
        "name": "Policier",
        "ref": "UR#153",
        "emoji": "🃏"
      },
      {
        "id": "or-ur154",
        "name": "Policier",
        "ref": "UR#154",
        "emoji": "🃏"
      },
      {
        "id": "or-ur155",
        "name": "Sel",
        "ref": "UR#155",
        "emoji": "🃏"
      },
      {
        "id": "or-ur156",
        "name": "Sel",
        "ref": "UR#156",
        "emoji": "🃏"
      },
      {
        "id": "or-ur157",
        "name": "Fromager",
        "ref": "UR#157",
        "emoji": "🃏"
      },
      {
        "id": "or-ur158",
        "name": "Charcutier",
        "ref": "UR#158",
        "emoji": "🃏"
      },
      {
        "id": "or-ur159",
        "name": "Gotaga",
        "ref": "UR#159",
        "emoji": "🃏"
      },
      {
        "id": "or-ur160",
        "name": "Amixem",
        "ref": "UR#160",
        "emoji": "🃏"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "or-ur161",
        "name": "Pirate",
        "ref": "UR#161",
        "emoji": "🃏"
      },
      {
        "id": "or-ur162",
        "name": "Pirate",
        "ref": "UR#162",
        "emoji": "🃏"
      },
      {
        "id": "or-ur163",
        "name": "Mastu",
        "ref": "UR#163",
        "emoji": "🃏"
      },
      {
        "id": "or-ur164",
        "name": "G cramé",
        "ref": "UR#164",
        "emoji": "🃏"
      },
      {
        "id": "or-ur165",
        "name": "CT",
        "ref": "UR#165",
        "emoji": "🃏"
      },
      {
        "id": "or-ur166",
        "name": "Terro",
        "ref": "UR#166",
        "emoji": "🃏"
      },
      {
        "id": "or-ur167",
        "name": "Joueur Du Grenier",
        "ref": "UR#167",
        "emoji": "🃏"
      },
      {
        "id": "or-ur168",
        "name": "Seb",
        "ref": "UR#168",
        "emoji": "🃏"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "or-l1169",
        "name": "Wicromania",
        "ref": "L1#169",
        "emoji": "🃏"
      },
      {
        "id": "or-l1170",
        "name": "Voyant",
        "ref": "L1#170",
        "emoji": "🃏"
      },
      {
        "id": "or-l1171",
        "name": "Pierre Rondin",
        "ref": "L1#171",
        "emoji": "🃏"
      },
      {
        "id": "or-l1172",
        "name": "André Rondin",
        "ref": "L1#172",
        "emoji": "🃏"
      },
      {
        "id": "or-l1173",
        "name": "Survivant",
        "ref": "L1#173",
        "emoji": "🃏"
      },
      {
        "id": "or-l1174",
        "name": "Survivant",
        "ref": "L1#174",
        "emoji": "🃏"
      }
    ],
    "legendaire-argent": [
      {
        "id": "or-l2175",
        "name": "Jacques Flantier",
        "ref": "L2#175",
        "emoji": "🃏"
      },
      {
        "id": "or-l2176",
        "name": "Richard Flantier",
        "ref": "L2#176",
        "emoji": "🃏"
      },
      {
        "id": "or-l2177",
        "name": "Jeanine",
        "ref": "L2#177",
        "emoji": "🃏"
      },
      {
        "id": "or-l2178",
        "name": "Martine",
        "ref": "L2#178",
        "emoji": "🃏"
      }
    ],
    "legendaire-or": [
      {
        "id": "or-l3179",
        "name": "Laink",
        "ref": "L3#179",
        "emoji": "🃏"
      },
      {
        "id": "or-l3180",
        "name": "Terracid",
        "ref": "L3#180",
        "emoji": "🃏"
      }
    ]
  },
  "campus": {
    "terrain": [
      {
        "id": "ca-t1",
        "name": "Radeau",
        "ref": "T#1",
        "emoji": "🃏"
      },
      {
        "id": "ca-t2",
        "name": "Trikz Cooperation",
        "ref": "T#2",
        "emoji": "🃏"
      },
      {
        "id": "ca-t3",
        "name": "Décollage",
        "ref": "T#3",
        "emoji": "🃏"
      },
      {
        "id": "ca-t4",
        "name": "Nuke",
        "ref": "T#4",
        "emoji": "🃏"
      },
      {
        "id": "ca-t5",
        "name": "Salle aux trésors",
        "ref": "T#5",
        "emoji": "🃏"
      },
      {
        "id": "ca-t6",
        "name": "Chat Twitch",
        "ref": "T#6",
        "emoji": "🃏"
      },
      {
        "id": "ca-t7",
        "name": "Airfield",
        "ref": "T#7",
        "emoji": "🃏"
      },
      {
        "id": "ca-t8",
        "name": "City 17",
        "ref": "T#8",
        "emoji": "🃏"
      },
      {
        "id": "ca-t9",
        "name": "Invasion Z",
        "ref": "T#9",
        "emoji": "🃏"
      },
      {
        "id": "ca-t10",
        "name": "Oeuf",
        "ref": "T#10",
        "emoji": "🃏"
      },
      {
        "id": "ca-t11",
        "name": "Discobus",
        "ref": "T#11",
        "emoji": "🃏"
      },
      {
        "id": "ca-t12",
        "name": "r/wankil",
        "ref": "T#12",
        "emoji": "🃏"
      },
      {
        "id": "ca-t13",
        "name": "Sacrifice",
        "ref": "T#13",
        "emoji": "🃏"
      },
      {
        "id": "ca-t14",
        "name": "Prairie",
        "ref": "T#14",
        "emoji": "🃏"
      },
      {
        "id": "ca-t15",
        "name": "Salle d'arcade",
        "ref": "T#15",
        "emoji": "🃏"
      },
      {
        "id": "ca-t16",
        "name": "Quiz",
        "ref": "T#16",
        "emoji": "🃏"
      },
      {
        "id": "ca-t17",
        "name": "Lootbox",
        "ref": "T#17",
        "emoji": "🃏"
      },
      {
        "id": "ca-t18",
        "name": "Daltonisme",
        "ref": "T#18",
        "emoji": "🃏"
      },
      {
        "id": "ca-t19",
        "name": "Aire de repos",
        "ref": "T#19",
        "emoji": "🃏"
      },
      {
        "id": "ca-t20",
        "name": "Théâtre de Saint-Denis",
        "ref": "T#20",
        "emoji": "🃏"
      },
      {
        "id": "ca-t21",
        "name": "Evasion",
        "ref": "T#21",
        "emoji": "🃏"
      },
      {
        "id": "ca-t22",
        "name": "Ouverture de colis",
        "ref": "T#22",
        "emoji": "🃏"
      },
      {
        "id": "ca-t23",
        "name": "Mur de bites",
        "ref": "T#23",
        "emoji": "🃏"
      },
      {
        "id": "ca-t24",
        "name": "Raid viewers",
        "ref": "T#24",
        "emoji": "🃏"
      },
      {
        "id": "ca-t25",
        "name": "Stillwater",
        "ref": "T#25",
        "emoji": "🃏"
      }
    ],
    "commune": [
      {
        "id": "ca-c26",
        "name": "Lutin",
        "ref": "C#26",
        "emoji": "🃏"
      },
      {
        "id": "ca-c27",
        "name": "Père Noël",
        "ref": "C#27",
        "emoji": "🃏"
      },
      {
        "id": "ca-c28",
        "name": "La hache",
        "ref": "C#28",
        "emoji": "🃏"
      },
      {
        "id": "ca-c29",
        "name": "Pharaon",
        "ref": "C#29",
        "emoji": "🃏"
      },
      {
        "id": "ca-c30",
        "name": "Pharaon",
        "ref": "C#30",
        "emoji": "🃏"
      },
      {
        "id": "ca-c31",
        "name": "Punk à chien",
        "ref": "C#31",
        "emoji": "🃏"
      },
      {
        "id": "ca-c32",
        "name": "Punk à chien",
        "ref": "C#32",
        "emoji": "🃏"
      },
      {
        "id": "ca-c33",
        "name": "Marabouchpic",
        "ref": "C#33",
        "emoji": "🃏"
      },
      {
        "id": "ca-c34",
        "name": "Marabouchpic",
        "ref": "C#34",
        "emoji": "🃏"
      },
      {
        "id": "ca-c35",
        "name": "Cambrioleur",
        "ref": "C#35",
        "emoji": "🃏"
      },
      {
        "id": "ca-c36",
        "name": "Cambrioleur",
        "ref": "C#36",
        "emoji": "🃏"
      },
      {
        "id": "ca-c37",
        "name": "Licorne",
        "ref": "C#37",
        "emoji": "🃏"
      },
      {
        "id": "ca-c38",
        "name": "Licorne",
        "ref": "C#38",
        "emoji": "🃏"
      },
      {
        "id": "ca-c39",
        "name": "Aristocrate",
        "ref": "C#39",
        "emoji": "🃏"
      },
      {
        "id": "ca-c40",
        "name": "Aristocrate",
        "ref": "C#40",
        "emoji": "🃏"
      },
      {
        "id": "ca-c41",
        "name": "Braqueur",
        "ref": "C#41",
        "emoji": "🃏"
      },
      {
        "id": "ca-c42",
        "name": "Braqueur",
        "ref": "C#42",
        "emoji": "🃏"
      },
      {
        "id": "ca-c43",
        "name": "Livreur",
        "ref": "C#43",
        "emoji": "🃏"
      },
      {
        "id": "ca-c44",
        "name": "Livreur",
        "ref": "C#44",
        "emoji": "🃏"
      },
      {
        "id": "ca-c45",
        "name": "Cosplayeur",
        "ref": "C#45",
        "emoji": "🃏"
      },
      {
        "id": "ca-c46",
        "name": "Cosplayeur",
        "ref": "C#46",
        "emoji": "🃏"
      },
      {
        "id": "ca-c47",
        "name": "Viking",
        "ref": "C#47",
        "emoji": "🃏"
      },
      {
        "id": "ca-c48",
        "name": "Viking",
        "ref": "C#48",
        "emoji": "🃏"
      },
      {
        "id": "ca-c49",
        "name": "Moche",
        "ref": "C#49",
        "emoji": "🃏"
      },
      {
        "id": "ca-c50",
        "name": "Moche",
        "ref": "C#50",
        "emoji": "🃏"
      },
      {
        "id": "ca-c51",
        "name": "Skieur",
        "ref": "C#51",
        "emoji": "🃏"
      },
      {
        "id": "ca-c52",
        "name": "Skieur",
        "ref": "C#52",
        "emoji": "🃏"
      },
      {
        "id": "ca-c53",
        "name": "Freddy's",
        "ref": "C#53",
        "emoji": "🃏"
      },
      {
        "id": "ca-c54",
        "name": "Freddy's",
        "ref": "C#54",
        "emoji": "🃏"
      },
      {
        "id": "ca-c55",
        "name": "Marseillais",
        "ref": "C#55",
        "emoji": "🃏"
      },
      {
        "id": "ca-c56",
        "name": "Marseillais",
        "ref": "C#56",
        "emoji": "🃏"
      },
      {
        "id": "ca-c57",
        "name": "Atlas",
        "ref": "C#57",
        "emoji": "🃏"
      },
      {
        "id": "ca-c58",
        "name": "P-Body",
        "ref": "C#58",
        "emoji": "🃏"
      },
      {
        "id": "ca-c59",
        "name": "Wilson",
        "ref": "C#59",
        "emoji": "🃏"
      },
      {
        "id": "ca-c60",
        "name": "Rasta",
        "ref": "C#60",
        "emoji": "🃏"
      },
      {
        "id": "ca-c61",
        "name": "BUG",
        "ref": "C#61",
        "emoji": "🃏"
      },
      {
        "id": "ca-c62",
        "name": "Paladin",
        "ref": "C#62",
        "emoji": "🃏"
      },
      {
        "id": "ca-c63",
        "name": "Paladin",
        "ref": "C#63",
        "emoji": "🃏"
      },
      {
        "id": "ca-c64",
        "name": "Pelote de laine",
        "ref": "C#64",
        "emoji": "🃏"
      },
      {
        "id": "ca-c65",
        "name": "Pelote de laine",
        "ref": "C#65",
        "emoji": "🃏"
      }
    ],
    "peu-commune": [
      {
        "id": "ca-uc66",
        "name": "Diable",
        "ref": "UC#66",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc67",
        "name": "Ange",
        "ref": "UC#67",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc68",
        "name": "Prêteur sur gage",
        "ref": "UC#68",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc69",
        "name": "Prêteur sur gage",
        "ref": "UC#69",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc70",
        "name": "Videur",
        "ref": "UC#70",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc71",
        "name": "Videur",
        "ref": "UC#71",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc72",
        "name": "Vieux",
        "ref": "UC#72",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc73",
        "name": "Vieux",
        "ref": "UC#73",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc74",
        "name": "Ellie",
        "ref": "UC#74",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc75",
        "name": "Joel",
        "ref": "UC#75",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc76",
        "name": "Furry",
        "ref": "UC#76",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc77",
        "name": "Furry",
        "ref": "UC#77",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc78",
        "name": "Rescapé",
        "ref": "UC#78",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc79",
        "name": "Rescapé",
        "ref": "UC#79",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc80",
        "name": "Hippie",
        "ref": "UC#80",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc81",
        "name": "Développeur",
        "ref": "UC#81",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc82",
        "name": "Commentateur sportif",
        "ref": "UC#82",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc83",
        "name": "Commentateur sportif",
        "ref": "UC#83",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc84",
        "name": "McFly",
        "ref": "UC#84",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc85",
        "name": "Carlito",
        "ref": "UC#85",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc86",
        "name": "Bête de la Ruche",
        "ref": "UC#86",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc87",
        "name": "Immolator",
        "ref": "UC#87",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc88",
        "name": "Alyx",
        "ref": "UC#88",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc89",
        "name": "Gordon",
        "ref": "UC#89",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc90",
        "name": "Soldat Américain WW2",
        "ref": "UC#90",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc91",
        "name": "Soldat Allemand WW2",
        "ref": "UC#91",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc92",
        "name": "Domingo",
        "ref": "UC#92",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc93",
        "name": "Inoxtag",
        "ref": "UC#93",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc94",
        "name": "Trophée",
        "ref": "UC#94",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc95",
        "name": "Chirurgien",
        "ref": "UC#95",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc96",
        "name": "Chirurgien",
        "ref": "UC#96",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc97",
        "name": "Catcheur",
        "ref": "UC#97",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc98",
        "name": "Catcheur",
        "ref": "UC#98",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc99",
        "name": "Sexy",
        "ref": "UC#99",
        "emoji": "🃏"
      },
      {
        "id": "ca-uc100",
        "name": "Sexy",
        "ref": "UC#100",
        "emoji": "🃏"
      }
    ],
    "rare": [
      {
        "id": "ca-r101",
        "name": "Cache-cache",
        "ref": "R#101",
        "emoji": "🃏"
      },
      {
        "id": "ca-r102",
        "name": "Cache-cache",
        "ref": "R#102",
        "emoji": "🃏"
      },
      {
        "id": "ca-r103",
        "name": "De face",
        "ref": "R#103",
        "emoji": "🃏"
      },
      {
        "id": "ca-r104",
        "name": "De face",
        "ref": "R#104",
        "emoji": "🃏"
      },
      {
        "id": "ca-r105",
        "name": "Alfred",
        "ref": "R#105",
        "emoji": "🃏"
      },
      {
        "id": "ca-r106",
        "name": "Brandon Burger",
        "ref": "R#106",
        "emoji": "🃏"
      },
      {
        "id": "ca-r107",
        "name": "Peter McCain",
        "ref": "R#107",
        "emoji": "🃏"
      },
      {
        "id": "ca-r108",
        "name": "Rust",
        "ref": "R#108",
        "emoji": "🃏"
      },
      {
        "id": "ca-r109",
        "name": "Rust",
        "ref": "R#109",
        "emoji": "🃏"
      },
      {
        "id": "ca-r110",
        "name": "Maxime Biaggi",
        "ref": "R#110",
        "emoji": "🃏"
      },
      {
        "id": "ca-r111",
        "name": "Grimkujow",
        "ref": "R#111",
        "emoji": "🃏"
      },
      {
        "id": "ca-r112",
        "name": "Sully",
        "ref": "R#112",
        "emoji": "🃏"
      },
      {
        "id": "ca-r113",
        "name": "Nathan",
        "ref": "R#113",
        "emoji": "🃏"
      },
      {
        "id": "ca-r114",
        "name": "Maghla",
        "ref": "R#114",
        "emoji": "🃏"
      },
      {
        "id": "ca-r115",
        "name": "Sheshounet",
        "ref": "R#115",
        "emoji": "🃏"
      },
      {
        "id": "ca-r116",
        "name": "Theorus",
        "ref": "R#116",
        "emoji": "🃏"
      },
      {
        "id": "ca-r117",
        "name": "Linca",
        "ref": "R#117",
        "emoji": "🃏"
      },
      {
        "id": "ca-r118",
        "name": "Imite",
        "ref": "R#118",
        "emoji": "🃏"
      },
      {
        "id": "ca-r119",
        "name": "Imite",
        "ref": "R#119",
        "emoji": "🃏"
      },
      {
        "id": "ca-r120",
        "name": "Guerrière mercenaire",
        "ref": "R#120",
        "emoji": "🃏"
      },
      {
        "id": "ca-r121",
        "name": "Chasseur de démons",
        "ref": "R#121",
        "emoji": "🃏"
      },
      {
        "id": "ca-r122",
        "name": "NoHomo",
        "ref": "R#122",
        "emoji": "🃏"
      },
      {
        "id": "ca-r123",
        "name": "NoHomo",
        "ref": "R#123",
        "emoji": "🃏"
      },
      {
        "id": "ca-r124",
        "name": "Gamin",
        "ref": "R#124",
        "emoji": "🃏"
      },
      {
        "id": "ca-r125",
        "name": "Gamin",
        "ref": "R#125",
        "emoji": "🃏"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "ca-ur126",
        "name": "Atlas",
        "ref": "UR#126",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur127",
        "name": "P-Body",
        "ref": "UR#127",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur128",
        "name": "McFly",
        "ref": "UR#128",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur129",
        "name": "Carlito",
        "ref": "UR#129",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur130",
        "name": "Bête de la Ruche",
        "ref": "UR#130",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur131",
        "name": "Immolator",
        "ref": "UR#131",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur132",
        "name": "Wilson",
        "ref": "UR#132",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur133",
        "name": "Rasta",
        "ref": "UR#133",
        "emoji": "🃏"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "ca-ur134",
        "name": "BUG",
        "ref": "UR#134",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur135",
        "name": "Soldat Américain WW2",
        "ref": "UR#135",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur136",
        "name": "Soldat Allemand WW2",
        "ref": "UR#136",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur137",
        "name": "Domingo",
        "ref": "UR#137",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur138",
        "name": "Inoxtag",
        "ref": "UR#138",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur139",
        "name": "Paladin",
        "ref": "UR#139",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur140",
        "name": "Paladin",
        "ref": "UR#140",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur141",
        "name": "Pelote de laine",
        "ref": "UR#141",
        "emoji": "🃏"
      },
      {
        "id": "ca-ur142",
        "name": "Pelote de laine",
        "ref": "UR#142",
        "emoji": "🃏"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "ca-l1143",
        "name": "Trophée",
        "ref": "L1#143",
        "emoji": "🃏"
      },
      {
        "id": "ca-l1144",
        "name": "Chirurgien",
        "ref": "L1#144",
        "emoji": "🃏"
      },
      {
        "id": "ca-l1145",
        "name": "Chirurgien",
        "ref": "L1#145",
        "emoji": "🃏"
      },
      {
        "id": "ca-l1146",
        "name": "Catcheur",
        "ref": "L1#146",
        "emoji": "🃏"
      },
      {
        "id": "ca-l1147",
        "name": "Catcheur",
        "ref": "L1#147",
        "emoji": "🃏"
      },
      {
        "id": "ca-l1148",
        "name": "Sexy",
        "ref": "L1#148",
        "emoji": "🃏"
      },
      {
        "id": "ca-l1149",
        "name": "Sexy",
        "ref": "L1#149",
        "emoji": "🃏"
      }
    ],
    "legendaire-argent": [
      {
        "id": "ca-l2150",
        "name": "Guerrière mercenaire",
        "ref": "L2#150",
        "emoji": "🃏"
      },
      {
        "id": "ca-l2151",
        "name": "Chasseur de démons",
        "ref": "L2#151",
        "emoji": "🃏"
      },
      {
        "id": "ca-l2152",
        "name": "NoHomo",
        "ref": "L2#152",
        "emoji": "🃏"
      },
      {
        "id": "ca-l2153",
        "name": "NoHomo",
        "ref": "L2#153",
        "emoji": "🃏"
      }
    ],
    "legendaire-or": [
      {
        "id": "ca-l3154",
        "name": "Gamin",
        "ref": "L3#154",
        "emoji": "🃏"
      },
      {
        "id": "ca-l3155",
        "name": "Gamin",
        "ref": "L3#155",
        "emoji": "🃏"
      }
    ]
  },
  "battle": {
    "terrain": [
      {
        "id": "ba-t1",
        "name": "Chasse en forêt",
        "ref": "T#1",
        "emoji": "🃏"
      },
      {
        "id": "ba-t2",
        "name": "Dark Forest",
        "ref": "T#2",
        "emoji": "🃏"
      },
      {
        "id": "ba-t3",
        "name": "Course de billes",
        "ref": "T#3",
        "emoji": "🃏"
      },
      {
        "id": "ba-t4",
        "name": "Manoir Hanté",
        "ref": "T#4",
        "emoji": "🃏"
      },
      {
        "id": "ba-t5",
        "name": "Je suis une légende",
        "ref": "T#5",
        "emoji": "🃏"
      },
      {
        "id": "ba-t6",
        "name": "End",
        "ref": "T#6",
        "emoji": "🃏"
      },
      {
        "id": "ba-t7",
        "name": "Battleground",
        "ref": "T#7",
        "emoji": "🃏"
      },
      {
        "id": "ba-t8",
        "name": "Camion des potes",
        "ref": "T#8",
        "emoji": "🃏"
      },
      {
        "id": "ba-t9",
        "name": "Plateau de jeu",
        "ref": "T#9",
        "emoji": "🃏"
      },
      {
        "id": "ba-t10",
        "name": "Tribunal",
        "ref": "T#10",
        "emoji": "🃏"
      },
      {
        "id": "ba-t11",
        "name": "Backrooms",
        "ref": "T#11",
        "emoji": "🃏"
      },
      {
        "id": "ba-t12",
        "name": "Inferno",
        "ref": "T#12",
        "emoji": "🃏"
      },
      {
        "id": "ba-t13",
        "name": "XC_Funky",
        "ref": "T#13",
        "emoji": "🃏"
      },
      {
        "id": "ba-t14",
        "name": "Parc d'attractions",
        "ref": "T#14",
        "emoji": "🃏"
      },
      {
        "id": "ba-t15",
        "name": "Survivor",
        "ref": "T#15",
        "emoji": "🃏"
      },
      {
        "id": "ba-t16",
        "name": "Prop Hunt",
        "ref": "T#16",
        "emoji": "🃏"
      },
      {
        "id": "ba-t17",
        "name": "Décharge",
        "ref": "T#17",
        "emoji": "🃏"
      },
      {
        "id": "ba-t18",
        "name": "Jeu de cartes",
        "ref": "T#18",
        "emoji": "🃏"
      },
      {
        "id": "ba-t19",
        "name": "Ecole de magie",
        "ref": "T#19",
        "emoji": "🃏"
      },
      {
        "id": "ba-t20",
        "name": "La ferme de Thierry",
        "ref": "T#20",
        "emoji": "🃏"
      },
      {
        "id": "ba-t21",
        "name": "Station Essence",
        "ref": "T#21",
        "emoji": "🃏"
      },
      {
        "id": "ba-t22",
        "name": "Qui veut gagner",
        "ref": "T#22",
        "emoji": "🃏"
      },
      {
        "id": "ba-t23",
        "name": "L'Arche de Pandore",
        "ref": "T#23",
        "emoji": "🃏"
      },
      {
        "id": "ba-t24",
        "name": "FoodPorn",
        "ref": "T#24",
        "emoji": "🃏"
      },
      {
        "id": "ba-t25",
        "name": "Banque",
        "ref": "T#25",
        "emoji": "🃏"
      },
      {
        "id": "ba-t26",
        "name": "DayZ",
        "ref": "T#26",
        "emoji": "🃏"
      },
      {
        "id": "ba-t27",
        "name": "La Comté",
        "ref": "T#27",
        "emoji": "🃏"
      },
      {
        "id": "ba-t28",
        "name": "Île Déserte",
        "ref": "T#28",
        "emoji": "🃏"
      },
      {
        "id": "ba-t29",
        "name": "Battlefield",
        "ref": "T#29",
        "emoji": "🃏"
      },
      {
        "id": "ba-t30",
        "name": "Cibles",
        "ref": "T#30",
        "emoji": "🃏"
      }
    ],
    "commune": [
      {
        "id": "ba-c31",
        "name": "Ouvrier",
        "ref": "C#31",
        "emoji": "🃏"
      },
      {
        "id": "ba-c32",
        "name": "Ouvrier",
        "ref": "C#32",
        "emoji": "🃏"
      },
      {
        "id": "ba-c33",
        "name": "Coiffeuse",
        "ref": "C#33",
        "emoji": "🃏"
      },
      {
        "id": "ba-c34",
        "name": "Coiffeuse",
        "ref": "C#34",
        "emoji": "🃏"
      },
      {
        "id": "ba-c35",
        "name": "Français",
        "ref": "C#35",
        "emoji": "🃏"
      },
      {
        "id": "ba-c36",
        "name": "Français",
        "ref": "C#36",
        "emoji": "🃏"
      },
      {
        "id": "ba-c37",
        "name": "Footballer",
        "ref": "C#37",
        "emoji": "🃏"
      },
      {
        "id": "ba-c38",
        "name": "Footballer",
        "ref": "C#38",
        "emoji": "🃏"
      },
      {
        "id": "ba-c39",
        "name": "Écrivain",
        "ref": "C#39",
        "emoji": "🃏"
      },
      {
        "id": "ba-c40",
        "name": "Écrivain",
        "ref": "C#40",
        "emoji": "🃏"
      },
      {
        "id": "ba-c41",
        "name": "Douanier",
        "ref": "C#41",
        "emoji": "🃏"
      },
      {
        "id": "ba-c42",
        "name": "Douanier",
        "ref": "C#42",
        "emoji": "🃏"
      },
      {
        "id": "ba-c43",
        "name": "Emo",
        "ref": "C#43",
        "emoji": "🃏"
      },
      {
        "id": "ba-c44",
        "name": "Emo",
        "ref": "C#44",
        "emoji": "🃏"
      },
      {
        "id": "ba-c45",
        "name": "Surfeur",
        "ref": "C#45",
        "emoji": "🃏"
      },
      {
        "id": "ba-c46",
        "name": "Surfeur",
        "ref": "C#46",
        "emoji": "🃏"
      },
      {
        "id": "ba-c47",
        "name": "Réalisateur",
        "ref": "C#47",
        "emoji": "🃏"
      },
      {
        "id": "ba-c48",
        "name": "Réalisateur",
        "ref": "C#48",
        "emoji": "🃏"
      },
      {
        "id": "ba-c49",
        "name": "Bodybuilder",
        "ref": "C#49",
        "emoji": "🃏"
      },
      {
        "id": "ba-c50",
        "name": "Bodybuilder",
        "ref": "C#50",
        "emoji": "🃏"
      },
      {
        "id": "ba-c51",
        "name": "Téléachat",
        "ref": "C#51",
        "emoji": "🃏"
      },
      {
        "id": "ba-c52",
        "name": "Téléachat",
        "ref": "C#52",
        "emoji": "🃏"
      },
      {
        "id": "ba-c53",
        "name": "Golfeur",
        "ref": "C#53",
        "emoji": "🃏"
      },
      {
        "id": "ba-c54",
        "name": "Golfeur",
        "ref": "C#54",
        "emoji": "🃏"
      },
      {
        "id": "ba-c55",
        "name": "Mac",
        "ref": "C#55",
        "emoji": "🃏"
      },
      {
        "id": "ba-c56",
        "name": "Mac",
        "ref": "C#56",
        "emoji": "🃏"
      },
      {
        "id": "ba-c57",
        "name": "Autostoppeur",
        "ref": "C#57",
        "emoji": "🃏"
      },
      {
        "id": "ba-c58",
        "name": "Autostoppeur",
        "ref": "C#58",
        "emoji": "🃏"
      },
      {
        "id": "ba-c59",
        "name": "Peepo",
        "ref": "C#59",
        "emoji": "🃏"
      },
      {
        "id": "ba-c60",
        "name": "Peepo",
        "ref": "C#60",
        "emoji": "🃏"
      },
      {
        "id": "ba-c61",
        "name": "Prisonnier",
        "ref": "C#61",
        "emoji": "🃏"
      },
      {
        "id": "ba-c62",
        "name": "Prisonnier",
        "ref": "C#62",
        "emoji": "🃏"
      },
      {
        "id": "ba-c63",
        "name": "Sponso",
        "ref": "C#63",
        "emoji": "🃏"
      },
      {
        "id": "ba-c64",
        "name": "Sponso",
        "ref": "C#64",
        "emoji": "🃏"
      },
      {
        "id": "ba-c65",
        "name": "Boys Band",
        "ref": "C#65",
        "emoji": "🃏"
      },
      {
        "id": "ba-c66",
        "name": "Boys Band",
        "ref": "C#66",
        "emoji": "🃏"
      },
      {
        "id": "ba-c67",
        "name": "Tricky Sorcier",
        "ref": "C#67",
        "emoji": "🃏"
      },
      {
        "id": "ba-c68",
        "name": "Tricky Sorcier",
        "ref": "C#68",
        "emoji": "🃏"
      },
      {
        "id": "ba-c69",
        "name": "Pile",
        "ref": "C#69",
        "emoji": "🃏"
      },
      {
        "id": "ba-c70",
        "name": "Face",
        "ref": "C#70",
        "emoji": "🃏"
      },
      {
        "id": "ba-c71",
        "name": "Dragon",
        "ref": "C#71",
        "emoji": "🃏"
      },
      {
        "id": "ba-c72",
        "name": "Dragon",
        "ref": "C#72",
        "emoji": "🃏"
      },
      {
        "id": "ba-c73",
        "name": "Brique",
        "ref": "C#73",
        "emoji": "🃏"
      },
      {
        "id": "ba-c74",
        "name": "Brique",
        "ref": "C#74",
        "emoji": "🃏"
      },
      {
        "id": "ba-c75",
        "name": "Oie",
        "ref": "C#75",
        "emoji": "🃏"
      },
      {
        "id": "ba-c76",
        "name": "Canard",
        "ref": "C#76",
        "emoji": "🃏"
      },
      {
        "id": "ba-c77",
        "name": "Vitrail",
        "ref": "C#77",
        "emoji": "🃏"
      },
      {
        "id": "ba-c78",
        "name": "Vitrail",
        "ref": "C#78",
        "emoji": "🃏"
      },
      {
        "id": "ba-c79",
        "name": "Dead Cowboy",
        "ref": "C#79",
        "emoji": "🃏"
      },
      {
        "id": "ba-c80",
        "name": "Dead Cowboy",
        "ref": "C#80",
        "emoji": "🃏"
      }
    ],
    "peu-commune": [
      {
        "id": "ba-uc81",
        "name": "Laink par Laink",
        "ref": "UC#81",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc82",
        "name": "Terracid par Terracid",
        "ref": "UC#82",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc83",
        "name": "Ballon",
        "ref": "UC#83",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc84",
        "name": "Ballon",
        "ref": "UC#84",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc85",
        "name": "SCP-106",
        "ref": "UC#85",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc86",
        "name": "SCP-173",
        "ref": "UC#86",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc87",
        "name": "Hunt Sister",
        "ref": "UC#87",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc88",
        "name": "Hunt Redneck",
        "ref": "UC#88",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc89",
        "name": "GIGACHAD",
        "ref": "UC#89",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc90",
        "name": "GIGACHAD",
        "ref": "UC#90",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc91",
        "name": "Lainkix",
        "ref": "UC#91",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc92",
        "name": "Terracix",
        "ref": "UC#92",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc93",
        "name": "Dionysos",
        "ref": "UC#93",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc94",
        "name": "Zeus",
        "ref": "UC#94",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc95",
        "name": "Compagnon d'avanturière",
        "ref": "UC#95",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc96",
        "name": "Avanturière",
        "ref": "UC#96",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc97",
        "name": "Voisin Kidnappeur",
        "ref": "UC#97",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc98",
        "name": "Voisin Kidnappeur",
        "ref": "UC#98",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc99",
        "name": "Gustavo",
        "ref": "UC#99",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc100",
        "name": "Pablo Escobar",
        "ref": "UC#100",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc101",
        "name": "Filette égarée",
        "ref": "UC#101",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc102",
        "name": "Vieille Sorcière",
        "ref": "UC#102",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc103",
        "name": "Saucisse",
        "ref": "UC#103",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc104",
        "name": "Aubergine",
        "ref": "UC#104",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc105",
        "name": "Redneck",
        "ref": "UC#105",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc106",
        "name": "Redneck",
        "ref": "UC#106",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc107",
        "name": "De Profil",
        "ref": "UC#107",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc108",
        "name": "De Profil",
        "ref": "UC#108",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc109",
        "name": "Samourabstrait",
        "ref": "UC#109",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc110",
        "name": "Samourabstrait",
        "ref": "UC#110",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc111",
        "name": "Explorateur Urbex",
        "ref": "UC#111",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc112",
        "name": "Explorateur Urbex",
        "ref": "UC#112",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc113",
        "name": "Masque à gaz",
        "ref": "UC#113",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc114",
        "name": "Bébé Poilu",
        "ref": "UC#114",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc115",
        "name": "Lebouseuh",
        "ref": "UC#115",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc116",
        "name": "Jean",
        "ref": "UC#116",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc117",
        "name": "Horty",
        "ref": "UC#117",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc118",
        "name": "MasterSnakou",
        "ref": "UC#118",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc119",
        "name": "Bob Lennon",
        "ref": "UC#119",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc120",
        "name": "Cyprien",
        "ref": "UC#120",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc121",
        "name": "Prop Hunt",
        "ref": "UC#121",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc122",
        "name": "Prop Hunt",
        "ref": "UC#122",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc123",
        "name": "Canette à ongles",
        "ref": "UC#123",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc124",
        "name": "Esclaves",
        "ref": "UC#124",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc125",
        "name": "Commandant Allemand",
        "ref": "UC#125",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc126",
        "name": "Soldat Américain",
        "ref": "UC#126",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc127",
        "name": "Rappeur",
        "ref": "UC#127",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc128",
        "name": "Rappeur",
        "ref": "UC#128",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc129",
        "name": "Soldat de l'espace",
        "ref": "UC#129",
        "emoji": "🃏"
      },
      {
        "id": "ba-uc130",
        "name": "Soldat de l'espace",
        "ref": "UC#130",
        "emoji": "🃏"
      }
    ],
    "rare": [
      {
        "id": "ba-r131",
        "name": "Nain",
        "ref": "R#131",
        "emoji": "🃏"
      },
      {
        "id": "ba-r132",
        "name": "Sournois",
        "ref": "R#132",
        "emoji": "🃏"
      },
      {
        "id": "ba-r133",
        "name": "Pâte à modeler",
        "ref": "R#133",
        "emoji": "🃏"
      },
      {
        "id": "ba-r134",
        "name": "Pâte à modeler",
        "ref": "R#134",
        "emoji": "🃏"
      },
      {
        "id": "ba-r135",
        "name": "Gladiateur",
        "ref": "R#135",
        "emoji": "🃏"
      },
      {
        "id": "ba-r136",
        "name": "Gladiateur",
        "ref": "R#136",
        "emoji": "🃏"
      },
      {
        "id": "ba-r137",
        "name": "Skyyart",
        "ref": "R#137",
        "emoji": "🃏"
      },
      {
        "id": "ba-r138",
        "name": "Doigby",
        "ref": "R#138",
        "emoji": "🃏"
      },
      {
        "id": "ba-r139",
        "name": "Étoiles",
        "ref": "R#139",
        "emoji": "🃏"
      },
      {
        "id": "ba-r140",
        "name": "Rancunier",
        "ref": "R#140",
        "emoji": "🃏"
      },
      {
        "id": "ba-r141",
        "name": "Paléontologue",
        "ref": "R#141",
        "emoji": "🃏"
      },
      {
        "id": "ba-r142",
        "name": "Paléontologue",
        "ref": "R#142",
        "emoji": "🃏"
      },
      {
        "id": "ba-r143",
        "name": "Jakov",
        "ref": "R#143",
        "emoji": "🃏"
      },
      {
        "id": "ba-r144",
        "name": "Richus",
        "ref": "R#144",
        "emoji": "🃏"
      },
      {
        "id": "ba-r145",
        "name": "Boss des Saviors",
        "ref": "R#145",
        "emoji": "🃏"
      },
      {
        "id": "ba-r146",
        "name": "Shérif de l'apocalypse",
        "ref": "R#146",
        "emoji": "🃏"
      },
      {
        "id": "ba-r147",
        "name": "Guerrier Samourai",
        "ref": "R#147",
        "emoji": "🃏"
      },
      {
        "id": "ba-r148",
        "name": "Guerrier Samourai",
        "ref": "R#148",
        "emoji": "🃏"
      },
      {
        "id": "ba-r149",
        "name": "Motard",
        "ref": "R#149",
        "emoji": "🃏"
      },
      {
        "id": "ba-r150",
        "name": "Motard",
        "ref": "R#150",
        "emoji": "🃏"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "ba-ur151",
        "name": "Gladiateur",
        "ref": "UR#151",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur152",
        "name": "Gladiateur",
        "ref": "UR#152",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur153",
        "name": "Commandant Allemand",
        "ref": "UR#153",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur154",
        "name": "Soldat Américain",
        "ref": "UR#154",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur155",
        "name": "Brique",
        "ref": "UR#155",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur156",
        "name": "Brique",
        "ref": "UR#156",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur157",
        "name": "Dead Cowboy",
        "ref": "UR#157",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur158",
        "name": "Dead Cowboy",
        "ref": "UR#158",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur159",
        "name": "Dragon",
        "ref": "UR#159",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur160",
        "name": "Dragon",
        "ref": "UR#160",
        "emoji": "🃏"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "ba-ur161",
        "name": "Bob Lennon",
        "ref": "UR#161",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur162",
        "name": "Cyprien",
        "ref": "UR#162",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur163",
        "name": "Soldat de l'espace",
        "ref": "UR#163",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur164",
        "name": "Soldat de l'espace",
        "ref": "UR#164",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur165",
        "name": "Rappeur",
        "ref": "UR#165",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur166",
        "name": "Rappeur",
        "ref": "UR#166",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur167",
        "name": "Prop Hunt",
        "ref": "UR#167",
        "emoji": "🃏"
      },
      {
        "id": "ba-ur168",
        "name": "Prop Hunt",
        "ref": "UR#168",
        "emoji": "🃏"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "ba-l1169",
        "name": "Vitrail",
        "ref": "L1#169",
        "emoji": "🃏"
      },
      {
        "id": "ba-l1170",
        "name": "Vitrail",
        "ref": "L1#170",
        "emoji": "🃏"
      },
      {
        "id": "ba-l1171",
        "name": "Bébé Poilu",
        "ref": "L1#171",
        "emoji": "🃏"
      },
      {
        "id": "ba-l1172",
        "name": "Rancunier",
        "ref": "L1#172",
        "emoji": "🃏"
      },
      {
        "id": "ba-l1173",
        "name": "Jakov",
        "ref": "L1#173",
        "emoji": "🃏"
      },
      {
        "id": "ba-l1174",
        "name": "Richus",
        "ref": "L1#174",
        "emoji": "🃏"
      }
    ],
    "legendaire-argent": [
      {
        "id": "ba-l2175",
        "name": "Boss des Saviors",
        "ref": "L2#175",
        "emoji": "🃏"
      },
      {
        "id": "ba-l2176",
        "name": "Shérif de l'apocalypse",
        "ref": "L2#176",
        "emoji": "🃏"
      },
      {
        "id": "ba-l2177",
        "name": "Guerrier Samouraï",
        "ref": "L2#177",
        "emoji": "🃏"
      },
      {
        "id": "ba-l2178",
        "name": "Guerrier Samouraï",
        "ref": "L2#178",
        "emoji": "🃏"
      }
    ],
    "legendaire-or": [
      {
        "id": "ba-l3179",
        "name": "Motard",
        "ref": "L3#179",
        "emoji": "🃏"
      },
      {
        "id": "ba-l3180",
        "name": "Motard",
        "ref": "L3#180",
        "emoji": "🃏"
      }
    ]
  },
  "stellar": {
    "terrain": [
      {
        "id": "st-t1",
        "name": "Ville CyberPunk",
        "ref": "T#1",
        "emoji": "🃏"
      },
      {
        "id": "st-t2",
        "name": "Lucky Block",
        "ref": "T#2",
        "emoji": "🃏"
      },
      {
        "id": "st-t3",
        "name": "Bunker",
        "ref": "T#3",
        "emoji": "🃏"
      },
      {
        "id": "st-t4",
        "name": "Salon de coiffure",
        "ref": "T#4",
        "emoji": "🃏"
      },
      {
        "id": "st-t5",
        "name": "CobbleStone",
        "ref": "T#5",
        "emoji": "🃏"
      },
      {
        "id": "st-t6",
        "name": "Cadeaux de Noël pourris",
        "ref": "T#6",
        "emoji": "🃏"
      },
      {
        "id": "st-t7",
        "name": "Planque des Albanais",
        "ref": "T#7",
        "emoji": "🃏"
      },
      {
        "id": "st-t8",
        "name": "Toreba",
        "ref": "T#8",
        "emoji": "🃏"
      },
      {
        "id": "st-t9",
        "name": "Séance Ciné",
        "ref": "T#9",
        "emoji": "🃏"
      },
      {
        "id": "st-t10",
        "name": "Imprimerie",
        "ref": "T#10",
        "emoji": "🃏"
      },
      {
        "id": "st-t11",
        "name": "Jeu de plateau",
        "ref": "T#11",
        "emoji": "🃏"
      },
      {
        "id": "st-t12",
        "name": "Bataille de ver",
        "ref": "T#12",
        "emoji": "🃏"
      },
      {
        "id": "st-t13",
        "name": "Vaisseau de traitres",
        "ref": "T#13",
        "emoji": "🃏"
      },
      {
        "id": "st-t14",
        "name": "La grosse conférence",
        "ref": "T#14",
        "emoji": "🃏"
      },
      {
        "id": "st-t15",
        "name": "Only Up",
        "ref": "T#15",
        "emoji": "🃏"
      },
      {
        "id": "st-t16",
        "name": "Place du village",
        "ref": "T#16",
        "emoji": "🃏"
      },
      {
        "id": "st-t17",
        "name": "Maisons pourries",
        "ref": "T#17",
        "emoji": "🃏"
      },
      {
        "id": "st-t18",
        "name": "Isotopium",
        "ref": "T#18",
        "emoji": "🃏"
      },
      {
        "id": "st-t19",
        "name": "Die and retry",
        "ref": "T#19",
        "emoji": "🃏"
      },
      {
        "id": "st-t20",
        "name": "Château des cannibales",
        "ref": "T#20",
        "emoji": "🃏"
      },
      {
        "id": "st-t21",
        "name": "Laboratoire",
        "ref": "T#21",
        "emoji": "🃏"
      },
      {
        "id": "st-t22",
        "name": "Tribunal Survivaliste",
        "ref": "T#22",
        "emoji": "🃏"
      },
      {
        "id": "st-t23",
        "name": "Hopital Infecté",
        "ref": "T#23",
        "emoji": "🃏"
      },
      {
        "id": "st-t24",
        "name": "Cabane aux secrets",
        "ref": "T#24",
        "emoji": "🃏"
      },
      {
        "id": "st-t25",
        "name": "Coloscopie",
        "ref": "T#25",
        "emoji": "🃏"
      },
      {
        "id": "st-t26",
        "name": "FanFiction",
        "ref": "T#26",
        "emoji": "🃏"
      },
      {
        "id": "st-t27",
        "name": "Placard à goûters",
        "ref": "T#27",
        "emoji": "🃏"
      },
      {
        "id": "st-t28",
        "name": "Trouvez Laink et Terracid",
        "ref": "T#28",
        "emoji": "🃏"
      },
      {
        "id": "st-t29",
        "name": "Fromagerie",
        "ref": "T#29",
        "emoji": "🃏"
      },
      {
        "id": "st-t30",
        "name": "Charcuterie",
        "ref": "T#30",
        "emoji": "🃏"
      }
    ],
    "commune": [
      {
        "id": "st-c31",
        "name": "Pizzaïolo",
        "ref": "C#31",
        "emoji": "🃏"
      },
      {
        "id": "st-c32",
        "name": "Pizzaïolo",
        "ref": "C#32",
        "emoji": "🃏"
      },
      {
        "id": "st-c33",
        "name": "Jeu de la chaussure",
        "ref": "C#33",
        "emoji": "🃏"
      },
      {
        "id": "st-c34",
        "name": "Jeu de la chaussure",
        "ref": "C#34",
        "emoji": "🃏"
      },
      {
        "id": "st-c35",
        "name": "Stick Fight",
        "ref": "C#35",
        "emoji": "🃏"
      },
      {
        "id": "st-c36",
        "name": "Stick Fight",
        "ref": "C#36",
        "emoji": "🃏"
      },
      {
        "id": "st-c37",
        "name": "Gastro-Entérologue",
        "ref": "C#37",
        "emoji": "🃏"
      },
      {
        "id": "st-c38",
        "name": "Gastro-Entérologue",
        "ref": "C#38",
        "emoji": "🃏"
      },
      {
        "id": "st-c39",
        "name": "Contenu Dangereux",
        "ref": "C#39",
        "emoji": "🃏"
      },
      {
        "id": "st-c40",
        "name": "Contenu Dangereux",
        "ref": "C#40",
        "emoji": "🃏"
      },
      {
        "id": "st-c41",
        "name": "Belge",
        "ref": "C#41",
        "emoji": "🃏"
      },
      {
        "id": "st-c42",
        "name": "Belge",
        "ref": "C#42",
        "emoji": "🃏"
      },
      {
        "id": "st-c43",
        "name": "ASMR",
        "ref": "C#43",
        "emoji": "🃏"
      },
      {
        "id": "st-c44",
        "name": "ASMR",
        "ref": "C#44",
        "emoji": "🃏"
      },
      {
        "id": "st-c45",
        "name": "Adolescent",
        "ref": "C#45",
        "emoji": "🃏"
      },
      {
        "id": "st-c46",
        "name": "Adolescent",
        "ref": "C#46",
        "emoji": "🃏"
      },
      {
        "id": "st-c47",
        "name": "Combattant de glace",
        "ref": "C#47",
        "emoji": "🃏"
      },
      {
        "id": "st-c48",
        "name": "Combattant de feu",
        "ref": "C#48",
        "emoji": "🃏"
      },
      {
        "id": "st-c49",
        "name": "Madame Falzar",
        "ref": "C#49",
        "emoji": "🃏"
      },
      {
        "id": "st-c50",
        "name": "À la recherche du respect",
        "ref": "C#50",
        "emoji": "🃏"
      },
      {
        "id": "st-c51",
        "name": "Timmy",
        "ref": "C#51",
        "emoji": "🃏"
      },
      {
        "id": "st-c52",
        "name": "Kevin",
        "ref": "C#52",
        "emoji": "🃏"
      },
      {
        "id": "st-c53",
        "name": "Challenger Battle Royal",
        "ref": "C#53",
        "emoji": "🃏"
      },
      {
        "id": "st-c54",
        "name": "Challenger Battle Royal",
        "ref": "C#54",
        "emoji": "🃏"
      },
      {
        "id": "st-c55",
        "name": "Chef Kebab",
        "ref": "C#55",
        "emoji": "🃏"
      },
      {
        "id": "st-c56",
        "name": "Chef Kebab",
        "ref": "C#56",
        "emoji": "🃏"
      },
      {
        "id": "st-c57",
        "name": "Pompiste",
        "ref": "C#57",
        "emoji": "🃏"
      },
      {
        "id": "st-c58",
        "name": "Pompiste",
        "ref": "C#58",
        "emoji": "🃏"
      },
      {
        "id": "st-c59",
        "name": "Boulanger",
        "ref": "C#59",
        "emoji": "🃏"
      },
      {
        "id": "st-c60",
        "name": "Boulanger",
        "ref": "C#60",
        "emoji": "🃏"
      },
      {
        "id": "st-c61",
        "name": "Tarot",
        "ref": "C#61",
        "emoji": "🃏"
      },
      {
        "id": "st-c62",
        "name": "Tarot",
        "ref": "C#62",
        "emoji": "🃏"
      },
      {
        "id": "st-c63",
        "name": "Titanic",
        "ref": "C#63",
        "emoji": "🃏"
      },
      {
        "id": "st-c64",
        "name": "Titanic",
        "ref": "C#64",
        "emoji": "🃏"
      },
      {
        "id": "st-c65",
        "name": "Vampire",
        "ref": "C#65",
        "emoji": "🃏"
      },
      {
        "id": "st-c66",
        "name": "Vampire",
        "ref": "C#66",
        "emoji": "🃏"
      },
      {
        "id": "st-c67",
        "name": "Clown",
        "ref": "C#67",
        "emoji": "🃏"
      },
      {
        "id": "st-c68",
        "name": "Clown",
        "ref": "C#68",
        "emoji": "🃏"
      },
      {
        "id": "st-c69",
        "name": "Requin",
        "ref": "C#69",
        "emoji": "🃏"
      },
      {
        "id": "st-c70",
        "name": "Requin",
        "ref": "C#70",
        "emoji": "🃏"
      },
      {
        "id": "st-c71",
        "name": "Simon Puech",
        "ref": "C#71",
        "emoji": "🃏"
      },
      {
        "id": "st-c72",
        "name": "Ninjaxx",
        "ref": "C#72",
        "emoji": "🃏"
      },
      {
        "id": "st-c73",
        "name": "Flamby",
        "ref": "C#73",
        "emoji": "🃏"
      },
      {
        "id": "st-c74",
        "name": "Siphano",
        "ref": "C#74",
        "emoji": "🃏"
      },
      {
        "id": "st-c75",
        "name": "KennyStream",
        "ref": "C#75",
        "emoji": "🃏"
      },
      {
        "id": "st-c76",
        "name": "Rot devant le PC",
        "ref": "C#76",
        "emoji": "🃏"
      },
      {
        "id": "st-c77",
        "name": "Dessin Romantique",
        "ref": "C#77",
        "emoji": "🃏"
      },
      {
        "id": "st-c78",
        "name": "Dessin Romantique",
        "ref": "C#78",
        "emoji": "🃏"
      },
      {
        "id": "st-c79",
        "name": "Poule à modeler",
        "ref": "C#79",
        "emoji": "🃏"
      },
      {
        "id": "st-c80",
        "name": "Coq à modeler",
        "ref": "C#80",
        "emoji": "🃏"
      }
    ],
    "peu-commune": [
      {
        "id": "st-uc81",
        "name": "Magicien",
        "ref": "UC#81",
        "emoji": "🃏"
      },
      {
        "id": "st-uc82",
        "name": "Magicien",
        "ref": "UC#82",
        "emoji": "🃏"
      },
      {
        "id": "st-uc83",
        "name": "Linky",
        "ref": "UC#83",
        "emoji": "🃏"
      },
      {
        "id": "st-uc84",
        "name": "Terraa-Raa",
        "ref": "UC#84",
        "emoji": "🃏"
      },
      {
        "id": "st-uc85",
        "name": "Québécois",
        "ref": "UC#85",
        "emoji": "🃏"
      },
      {
        "id": "st-uc86",
        "name": "Québécois",
        "ref": "UC#86",
        "emoji": "🃏"
      },
      {
        "id": "st-uc87",
        "name": "Survivante Tranchante",
        "ref": "UC#87",
        "emoji": "🃏"
      },
      {
        "id": "st-uc88",
        "name": "Biker de l'apocalypse",
        "ref": "UC#88",
        "emoji": "🃏"
      },
      {
        "id": "st-uc89",
        "name": "Cauchemar",
        "ref": "UC#89",
        "emoji": "🃏"
      },
      {
        "id": "st-uc90",
        "name": "Cauchemar",
        "ref": "UC#90",
        "emoji": "🃏"
      },
      {
        "id": "st-uc91",
        "name": "Ver de terre",
        "ref": "UC#91",
        "emoji": "🃏"
      },
      {
        "id": "st-uc92",
        "name": "Aigle",
        "ref": "UC#92",
        "emoji": "🃏"
      },
      {
        "id": "st-uc93",
        "name": "Harder",
        "ref": "UC#93",
        "emoji": "🃏"
      },
      {
        "id": "st-uc94",
        "name": "Better",
        "ref": "UC#94",
        "emoji": "🃏"
      },
      {
        "id": "st-uc95",
        "name": "Suisse",
        "ref": "UC#95",
        "emoji": "🃏"
      },
      {
        "id": "st-uc96",
        "name": "Suisse",
        "ref": "UC#96",
        "emoji": "🃏"
      },
      {
        "id": "st-uc97",
        "name": "Tableau D'attente",
        "ref": "UC#97",
        "emoji": "🃏"
      },
      {
        "id": "st-uc98",
        "name": "Tableau D'attente",
        "ref": "UC#98",
        "emoji": "🃏"
      },
      {
        "id": "st-uc99",
        "name": "CyberSoldat",
        "ref": "UC#99",
        "emoji": "🃏"
      },
      {
        "id": "st-uc100",
        "name": "CyberSoldat",
        "ref": "UC#100",
        "emoji": "🃏"
      },
      {
        "id": "st-uc101",
        "name": "Tatouage",
        "ref": "UC#101",
        "emoji": "🃏"
      },
      {
        "id": "st-uc102",
        "name": "Tatouage",
        "ref": "UC#102",
        "emoji": "🃏"
      },
      {
        "id": "st-uc103",
        "name": "André Burger",
        "ref": "UC#103",
        "emoji": "🃏"
      },
      {
        "id": "st-uc104",
        "name": "Robert Paté",
        "ref": "UC#104",
        "emoji": "🃏"
      },
      {
        "id": "st-uc105",
        "name": "Titan Calvasse",
        "ref": "UC#105",
        "emoji": "🃏"
      },
      {
        "id": "st-uc106",
        "name": "Titan Décapsuleur",
        "ref": "UC#106",
        "emoji": "🃏"
      },
      {
        "id": "st-uc107",
        "name": "Voyante",
        "ref": "UC#107",
        "emoji": "🃏"
      },
      {
        "id": "st-uc108",
        "name": "Voyante",
        "ref": "UC#108",
        "emoji": "🃏"
      },
      {
        "id": "st-uc109",
        "name": "Bezigue",
        "ref": "UC#109",
        "emoji": "🃏"
      },
      {
        "id": "st-uc110",
        "name": "Gurky",
        "ref": "UC#110",
        "emoji": "🃏"
      },
      {
        "id": "st-uc111",
        "name": "Gitan",
        "ref": "UC#111",
        "emoji": "🃏"
      },
      {
        "id": "st-uc112",
        "name": "Gitan",
        "ref": "UC#112",
        "emoji": "🃏"
      },
      {
        "id": "st-uc113",
        "name": "DWARF",
        "ref": "UC#113",
        "emoji": "🃏"
      },
      {
        "id": "st-uc114",
        "name": "DWARF",
        "ref": "UC#114",
        "emoji": "🃏"
      },
      {
        "id": "st-uc115",
        "name": "Réaliste",
        "ref": "UC#115",
        "emoji": "🃏"
      },
      {
        "id": "st-uc116",
        "name": "Réaliste",
        "ref": "UC#116",
        "emoji": "🃏"
      },
      {
        "id": "st-uc117",
        "name": "Collectionneur",
        "ref": "UC#117",
        "emoji": "🃏"
      },
      {
        "id": "st-uc118",
        "name": "Collectionneur",
        "ref": "UC#118",
        "emoji": "🃏"
      },
      {
        "id": "st-uc119",
        "name": "Traitre",
        "ref": "UC#119",
        "emoji": "🃏"
      },
      {
        "id": "st-uc120",
        "name": "Traitre",
        "ref": "UC#120",
        "emoji": "🃏"
      },
      {
        "id": "st-uc121",
        "name": "Nikodim",
        "ref": "UC#121",
        "emoji": "🃏"
      },
      {
        "id": "st-uc122",
        "name": "Bibi",
        "ref": "UC#122",
        "emoji": "🃏"
      },
      {
        "id": "st-uc123",
        "name": "Kotei",
        "ref": "UC#123",
        "emoji": "🃏"
      },
      {
        "id": "st-uc124",
        "name": "Kameto",
        "ref": "UC#124",
        "emoji": "🃏"
      },
      {
        "id": "st-uc125",
        "name": "SteamPunk",
        "ref": "UC#125",
        "emoji": "🃏"
      },
      {
        "id": "st-uc126",
        "name": "SteamPunk",
        "ref": "UC#126",
        "emoji": "🃏"
      },
      {
        "id": "st-uc127",
        "name": "CyberPixel",
        "ref": "UC#127",
        "emoji": "🃏"
      },
      {
        "id": "st-uc128",
        "name": "CyberPixel",
        "ref": "UC#128",
        "emoji": "🃏"
      },
      {
        "id": "st-uc129",
        "name": "Jacques Boulon",
        "ref": "UC#129",
        "emoji": "🃏"
      },
      {
        "id": "st-uc130",
        "name": "Richard Pastel",
        "ref": "UC#130",
        "emoji": "🃏"
      }
    ],
    "rare": [
      {
        "id": "st-r131",
        "name": "Gold",
        "ref": "R#131",
        "emoji": "🃏"
      },
      {
        "id": "st-r132",
        "name": "Gold",
        "ref": "R#132",
        "emoji": "🃏"
      },
      {
        "id": "st-r133",
        "name": "Enchaînés",
        "ref": "R#133",
        "emoji": "🃏"
      },
      {
        "id": "st-r134",
        "name": "Enchaînés",
        "ref": "R#134",
        "emoji": "🃏"
      },
      {
        "id": "st-r135",
        "name": "SpeedRunner",
        "ref": "R#135",
        "emoji": "🃏"
      },
      {
        "id": "st-r136",
        "name": "SpeedRunner",
        "ref": "R#136",
        "emoji": "🃏"
      },
      {
        "id": "st-r137",
        "name": "Assassin du passé",
        "ref": "R#137",
        "emoji": "🃏"
      },
      {
        "id": "st-r138",
        "name": "Assassin du passé",
        "ref": "R#138",
        "emoji": "🃏"
      },
      {
        "id": "st-r139",
        "name": "Survivant D'abri",
        "ref": "R#139",
        "emoji": "🃏"
      },
      {
        "id": "st-r140",
        "name": "Goule",
        "ref": "R#140",
        "emoji": "🃏"
      },
      {
        "id": "st-r141",
        "name": "Routier de l'extrême",
        "ref": "R#141",
        "emoji": "🃏"
      },
      {
        "id": "st-r142",
        "name": "Routier de l'extrême",
        "ref": "R#142",
        "emoji": "🃏"
      },
      {
        "id": "st-r143",
        "name": "Robot",
        "ref": "R#143",
        "emoji": "🃏"
      },
      {
        "id": "st-r144",
        "name": "Robot",
        "ref": "R#144",
        "emoji": "🃏"
      },
      {
        "id": "st-r145",
        "name": "La Faucheuse",
        "ref": "R#145",
        "emoji": "🃏"
      },
      {
        "id": "st-r146",
        "name": "La Faucheuse",
        "ref": "R#146",
        "emoji": "🃏"
      },
      {
        "id": "st-r147",
        "name": "Dénué D'éclat",
        "ref": "R#147",
        "emoji": "🃏"
      },
      {
        "id": "st-r148",
        "name": "Dénué D'éclat",
        "ref": "R#148",
        "emoji": "🃏"
      },
      {
        "id": "st-r149",
        "name": "La jeune fille à la perle",
        "ref": "R#149",
        "emoji": "🃏"
      },
      {
        "id": "st-r150",
        "name": "Le Cri",
        "ref": "R#150",
        "emoji": "🃏"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "st-ur151",
        "name": "Titanic",
        "ref": "UR#151",
        "emoji": "🃏"
      },
      {
        "id": "st-ur152",
        "name": "Titanic",
        "ref": "UR#152",
        "emoji": "🃏"
      },
      {
        "id": "st-ur153",
        "name": "Titan Calvasse",
        "ref": "UR#153",
        "emoji": "🃏"
      },
      {
        "id": "st-ur154",
        "name": "Titan Décapsuleur",
        "ref": "UR#154",
        "emoji": "🃏"
      },
      {
        "id": "st-ur155",
        "name": "Gurky",
        "ref": "UR#155",
        "emoji": "🃏"
      },
      {
        "id": "st-ur156",
        "name": "Kameto",
        "ref": "UR#156",
        "emoji": "🃏"
      },
      {
        "id": "st-ur157",
        "name": "Magicien",
        "ref": "UR#157",
        "emoji": "🃏"
      },
      {
        "id": "st-ur158",
        "name": "Magicien",
        "ref": "UR#158",
        "emoji": "🃏"
      },
      {
        "id": "st-ur159",
        "name": "CyberSoldat",
        "ref": "UR#159",
        "emoji": "🃏"
      },
      {
        "id": "st-ur160",
        "name": "CyberSoldat",
        "ref": "UR#160",
        "emoji": "🃏"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "st-ur161",
        "name": "Requin",
        "ref": "UR#161",
        "emoji": "🃏"
      },
      {
        "id": "st-ur162",
        "name": "Requin",
        "ref": "UR#162",
        "emoji": "🃏"
      },
      {
        "id": "st-ur163",
        "name": "Nikodim",
        "ref": "UR#163",
        "emoji": "🃏"
      },
      {
        "id": "st-ur164",
        "name": "À la recherche du respect",
        "ref": "UR#164",
        "emoji": "🃏"
      },
      {
        "id": "st-ur165",
        "name": "Voyante",
        "ref": "UR#165",
        "emoji": "🃏"
      },
      {
        "id": "st-ur166",
        "name": "Voyante",
        "ref": "UR#166",
        "emoji": "🃏"
      },
      {
        "id": "st-ur167",
        "name": "Réaliste",
        "ref": "UR#167",
        "emoji": "🃏"
      },
      {
        "id": "st-ur168",
        "name": "Réaliste",
        "ref": "UR#168",
        "emoji": "🃏"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "st-l1169",
        "name": "Tableau D'attente",
        "ref": "L1#169",
        "emoji": "🃏"
      },
      {
        "id": "st-l1170",
        "name": "Tableau D'attente",
        "ref": "L1#170",
        "emoji": "🃏"
      },
      {
        "id": "st-l1171",
        "name": "Tarot",
        "ref": "L1#171",
        "emoji": "🃏"
      },
      {
        "id": "st-l1172",
        "name": "Tarot",
        "ref": "L1#172",
        "emoji": "🃏"
      },
      {
        "id": "st-l1173",
        "name": "Jacques Boulon",
        "ref": "L1#173",
        "emoji": "🃏"
      },
      {
        "id": "st-l1174",
        "name": "Richard Pastel",
        "ref": "L1#174",
        "emoji": "🃏"
      }
    ],
    "legendaire-argent": [
      {
        "id": "st-l2175",
        "name": "La Faucheuse",
        "ref": "L2#175",
        "emoji": "🃏"
      },
      {
        "id": "st-l2176",
        "name": "La Faucheuse",
        "ref": "L2#176",
        "emoji": "🃏"
      },
      {
        "id": "st-l2177",
        "name": "Dénué D'éclat",
        "ref": "L2#177",
        "emoji": "🃏"
      },
      {
        "id": "st-l2178",
        "name": "Dénué D'éclat",
        "ref": "L2#178",
        "emoji": "🃏"
      }
    ],
    "legendaire-or": [
      {
        "id": "st-l3179",
        "name": "La jeune fille à la perle",
        "ref": "L3#179",
        "emoji": "🃏"
      },
      {
        "id": "st-l3180",
        "name": "Le Cri",
        "ref": "L3#180",
        "emoji": "🃏"
      }
    ]
  }
};

// ─── Tirage booster (structure officielle 10 cartes) ─
function drawBooster(sid) {
  const p = POOL[sid] || POOL.origins;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const result = [];
  // 1 Terrain
  result.push({...pick(p.terrain), slot:'terrain', isFoil: Math.random()<0.05});
  // 4 Communes
  for(let i=0;i<4;i++)
    result.push({...pick(p.commune), slot:'commune', isFoil: Math.random()<0.02});
  // 3 Peu Communes
  for(let i=0;i<3;i++)
    result.push({...pick(p['peu-commune']), slot:'peu-commune', isFoil: Math.random()<0.04});
  // 1 Rare garantie (peut upgrade)
  const ru = Math.random();
  const rSlot = ru<0.02?'super-rare':ru<0.04?'ultra-rare-holo1':'rare';
  result.push({...pick(p[rSlot]||p.rare), slot:rSlot, isFoil: ru<0.01});
  // 1 Gros slot
  const b = Math.random();
  let bSlot;
  if      (b<0.01)  bSlot='legendaire-or';
  else if (b<0.025) bSlot='legendaire-argent';
  else if (b<0.05)  bSlot='legendaire-bronze';
  else if (b<0.12)  bSlot='ultra-rare-holo2';
  else if (b<0.22)  bSlot='ultra-rare-holo1';
  else if (b<0.40)  bSlot='super-rare';
  else              bSlot='rare';
  result.push({...pick(p[bSlot]||p.rare), slot:bSlot, isFoil:b<0.05||Math.random()<0.1, isBig:true});
  return result;
}

// ─── Sauvegarder en DB ──────────────────────────
async function saveCardsToCollection(cards) {
  const user = getUser();
  if (!user) return;
  const grouped = {};
  for (const c of cards) {
    const key = c.isFoil ? `${c.id}-foil` : c.id;
    if (!grouped[key]) grouped[key] = { ...c, quantity: 0, card_id: key };
    grouped[key].quantity++;
  }
  for (const entry of Object.values(grouped)) {
    const existing = await sbFetch(
      `user_cards?user_id=eq.${user.id}&card_id=eq.${entry.card_id}&select=id,quantity`
    ).catch(() => []);
    if (existing && existing.length > 0) {
      await sbFetch(`user_cards?id=eq.${existing[0].id}`, {
        method: 'PATCH',
        body: JSON.stringify({ quantity: existing[0].quantity + entry.quantity })
      });
    } else {
      await sbFetch('user_cards', {
        method: 'POST',
        body: JSON.stringify({
          user_id: user.id,
          card_id: entry.card_id,
          series: entry.seriesId,
          rarity: entry.slot,
          card_name: entry.name,
          quantity: entry.quantity
        })
      });
    }
  }
}

async function saveBoosterHistory(seriesId, cards) {
  const user = getUser();
  if (!user) return;
  await sbFetch('booster_history', {
    method: 'POST',
    body: JSON.stringify({ user_id: user.id, series: seriesId, cards })
  });
}
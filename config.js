// ═══════════════════════════════════════════════
//  WankulDEX — Configuration Supabase
//  ⚠️  Ajoute ce fichier dans ton .gitignore !
// ═══════════════════════════════════════════════

const SUPABASE_URL = 'https://eebrgmoehazaewsvfmol.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_k55DfTh9f-yVFGi5RG5PCA_bj3ExVWq';

function getToken() { return localStorage.getItem('wankuldex_token'); }
function getUser()  { try { return JSON.parse(localStorage.getItem('wankuldex_user')); } catch { return null; } }
function isLoggedIn() { return !!getToken(); }
function requireAuth() { if (!isLoggedIn()) window.location.href = 'index.html'; }

async function sbFetch(path, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${token || SUPABASE_ANON_KEY}`,
    ...options.headers
  };
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { ...options, headers });
  if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.message || `HTTP ${res.status}`); }
  return res.status === 204 ? null : res.json();
}

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

const SERIES = [
  {id:'origins', name:'Origins',  season:'Saison 1', color:'#FF6B35', img:'booster/wankulS1.png', cards:180},
  {id:'campus',  name:'Campus',   season:'Saison 2', color:'#0099FF', img:'booster/wankulS2.png', cards:155},
  {id:'battle',  name:'Battle',   season:'Saison 3', color:'#E8001D', img:'booster/wankulS3.png', cards:180},
  {id:'stellar', name:'Stellar',  season:'Saison 4', color:'#9B59B6', img:'booster/wankulS4.png', cards:180},
];

// ─── 695 vraies cartes Wankul ────────────────────
const POOL = {
  "origins": {
    "terrain": [
      {
        "id": "or-t1",
        "name": "Navire Pirate",
        "ref": "T#1",
        "img": "https://wankul.fr/cdn/shop/files/navire_pirate.webp"
      },
      {
        "id": "or-t2",
        "name": "Portal",
        "ref": "T#2",
        "img": "https://wankul.fr/cdn/shop/files/portal.webp"
      },
      {
        "id": "or-t3",
        "name": "Quantum",
        "ref": "T#3",
        "img": "https://wankul.fr/cdn/shop/files/quantum.webp"
      },
      {
        "id": "or-t4",
        "name": "Rocket Field",
        "ref": "T#4",
        "img": "https://wankul.fr/cdn/shop/files/rocket_field.webp"
      },
      {
        "id": "or-t5",
        "name": "Rust",
        "ref": "T#5",
        "img": "https://wankul.fr/cdn/shop/files/rust.webp"
      },
      {
        "id": "or-t6",
        "name": "Il fait pas chaud",
        "ref": "T#6",
        "img": "https://wankul.fr/cdn/shop/files/il_fait_pas_chaud.webp"
      },
      {
        "id": "or-t7",
        "name": "Golf",
        "ref": "T#7",
        "img": "https://wankul.fr/cdn/shop/files/golf.webp"
      },
      {
        "id": "or-t8",
        "name": "Dust 2",
        "ref": "T#8",
        "img": "https://wankul.fr/cdn/shop/files/dust_2.webp"
      },
      {
        "id": "or-t9",
        "name": "Space Factory",
        "ref": "T#9",
        "img": "https://wankul.fr/cdn/shop/files/space_factory.webp"
      },
      {
        "id": "or-t10",
        "name": "La F.A.Q.",
        "ref": "T#10",
        "img": "https://wankul.fr/cdn/shop/files/la_faq.webp"
      },
      {
        "id": "or-t11",
        "name": "Musée",
        "ref": "T#11",
        "img": "https://wankul.fr/cdn/shop/files/musee.webp"
      },
      {
        "id": "or-t12",
        "name": "FNAF",
        "ref": "T#12",
        "img": "https://wankul.fr/cdn/shop/files/fnaf.webp"
      },
      {
        "id": "or-t13",
        "name": "Village",
        "ref": "T#13",
        "img": "https://wankul.fr/cdn/shop/files/village.webp"
      },
      {
        "id": "or-t14",
        "name": "La Ferme",
        "ref": "T#14",
        "img": "https://wankul.fr/cdn/shop/files/la_ferme.webp"
      },
      {
        "id": "or-t15",
        "name": "Socisseau Factory",
        "ref": "T#15",
        "img": "https://wankul.fr/cdn/shop/files/socisseau_factory.webp"
      },
      {
        "id": "or-t16",
        "name": "Trou du monde",
        "ref": "T#16",
        "img": "https://wankul.fr/cdn/shop/files/trou_du_monde.webp"
      },
      {
        "id": "or-t17",
        "name": "Moria",
        "ref": "T#17",
        "img": "https://wankul.fr/cdn/shop/files/moria.webp"
      },
      {
        "id": "or-t18",
        "name": "Tchernobyl",
        "ref": "T#18",
        "img": "https://wankul.fr/cdn/shop/files/tchernobyl.webp"
      },
      {
        "id": "or-t19",
        "name": "Valheim",
        "ref": "T#19",
        "img": "https://wankul.fr/cdn/shop/files/valheim.webp"
      },
      {
        "id": "or-t20",
        "name": "Tranchées",
        "ref": "T#20",
        "img": "https://wankul.fr/cdn/shop/files/tranchees.webp"
      },
      {
        "id": "or-t21",
        "name": "Ravenholm",
        "ref": "T#21",
        "img": "https://wankul.fr/cdn/shop/files/ravenholm.webp"
      },
      {
        "id": "or-t22",
        "name": "Urbex",
        "ref": "T#22",
        "img": "https://wankul.fr/cdn/shop/files/urbex.webp"
      },
      {
        "id": "or-t23",
        "name": "Manoir",
        "ref": "T#23",
        "img": "https://wankul.fr/cdn/shop/files/manoir.webp"
      },
      {
        "id": "or-t24",
        "name": "Barrage",
        "ref": "T#24",
        "img": "https://wankul.fr/cdn/shop/files/barrage.webp"
      },
      {
        "id": "or-t25",
        "name": "Chernogorsk",
        "ref": "T#25",
        "img": "https://wankul.fr/cdn/shop/files/chernogorsk.webp"
      },
      {
        "id": "or-t26",
        "name": "Agrou",
        "ref": "T#26",
        "img": "https://wankul.fr/cdn/shop/files/agrou.webp"
      },
      {
        "id": "or-t27",
        "name": "Garage",
        "ref": "T#27",
        "img": "https://wankul.fr/cdn/shop/files/garage.webp"
      },
      {
        "id": "or-t28",
        "name": "Uretus",
        "ref": "T#28",
        "img": "https://wankul.fr/cdn/shop/files/uretus.webp"
      },
      {
        "id": "or-t29",
        "name": "Wankil Show",
        "ref": "T#29",
        "img": "https://wankul.fr/cdn/shop/files/wankil_show.webp"
      },
      {
        "id": "or-t30",
        "name": "Convention",
        "ref": "T#30",
        "img": "https://wankul.fr/cdn/shop/files/convention.webp"
      }
    ],
    "commune": [
      {
        "id": "or-c31",
        "name": "Garagiste",
        "ref": "C#31",
        "img": "https://wankul.fr/cdn/shop/files/garagiste.webp"
      },
      {
        "id": "or-c32",
        "name": "Garagiste",
        "ref": "C#32",
        "img": "https://wankul.fr/cdn/shop/files/garagiste.webp"
      },
      {
        "id": "or-c33",
        "name": "Camionneur",
        "ref": "C#33",
        "img": "https://wankul.fr/cdn/shop/files/camionneur.webp"
      },
      {
        "id": "or-c34",
        "name": "Camionneur",
        "ref": "C#34",
        "img": "https://wankul.fr/cdn/shop/files/camionneur.webp"
      },
      {
        "id": "or-c35",
        "name": "Vendeur",
        "ref": "C#35",
        "img": "https://wankul.fr/cdn/shop/files/vendeur.webp"
      },
      {
        "id": "or-c36",
        "name": "Vendeur",
        "ref": "C#36",
        "img": "https://wankul.fr/cdn/shop/files/vendeur.webp"
      },
      {
        "id": "or-c37",
        "name": "Annabelle",
        "ref": "C#37",
        "img": "https://wankul.fr/cdn/shop/files/annabelle.webp"
      },
      {
        "id": "or-c38",
        "name": "Grudge",
        "ref": "C#38",
        "img": "https://wankul.fr/cdn/shop/files/grudge.webp"
      },
      {
        "id": "or-c39",
        "name": "Astronaute",
        "ref": "C#39",
        "img": "https://wankul.fr/cdn/shop/files/astronaute.webp"
      },
      {
        "id": "or-c40",
        "name": "Astronaute",
        "ref": "C#40",
        "img": "https://wankul.fr/cdn/shop/files/astronaute.webp"
      },
      {
        "id": "or-c41",
        "name": "Boxeur",
        "ref": "C#41",
        "img": "https://wankul.fr/cdn/shop/files/boxeur.webp"
      },
      {
        "id": "or-c42",
        "name": "Boxeur",
        "ref": "C#42",
        "img": "https://wankul.fr/cdn/shop/files/boxeur.webp"
      },
      {
        "id": "or-c43",
        "name": "Infecté",
        "ref": "C#43",
        "img": "https://wankul.fr/cdn/shop/files/infecte.webp"
      },
      {
        "id": "or-c44",
        "name": "Infecté",
        "ref": "C#44",
        "img": "https://wankul.fr/cdn/shop/files/infecte.webp"
      },
      {
        "id": "or-c45",
        "name": "Fermier",
        "ref": "C#45",
        "img": "https://wankul.fr/cdn/shop/files/fermier.webp"
      },
      {
        "id": "or-c46",
        "name": "Fermier",
        "ref": "C#46",
        "img": "https://wankul.fr/cdn/shop/files/fermier.webp"
      },
      {
        "id": "or-c47",
        "name": "Chien",
        "ref": "C#47",
        "img": "https://wankul.fr/cdn/shop/files/chien.webp"
      },
      {
        "id": "or-c48",
        "name": "Cochon",
        "ref": "C#48",
        "img": "https://wankul.fr/cdn/shop/files/cochon.webp"
      },
      {
        "id": "or-c49",
        "name": "Fromager",
        "ref": "C#49",
        "img": "https://wankul.fr/cdn/shop/files/fromager.webp"
      },
      {
        "id": "or-c50",
        "name": "Charcutier",
        "ref": "C#50",
        "img": "https://wankul.fr/cdn/shop/files/charcutier.webp"
      },
      {
        "id": "or-c51",
        "name": "Businessman",
        "ref": "C#51",
        "img": "https://wankul.fr/cdn/shop/files/businessman.webp"
      },
      {
        "id": "or-c52",
        "name": "Débile",
        "ref": "C#52",
        "img": "https://wankul.fr/cdn/shop/files/debile.webp"
      },
      {
        "id": "or-c53",
        "name": "Débile",
        "ref": "C#53",
        "img": "https://wankul.fr/cdn/shop/files/debile.webp"
      },
      {
        "id": "or-c54",
        "name": "Paysan",
        "ref": "C#54",
        "img": "https://wankul.fr/cdn/shop/files/paysan.webp"
      },
      {
        "id": "or-c55",
        "name": "Paysan",
        "ref": "C#55",
        "img": "https://wankul.fr/cdn/shop/files/paysan.webp"
      },
      {
        "id": "or-c56",
        "name": "Cuisinier",
        "ref": "C#56",
        "img": "https://wankul.fr/cdn/shop/files/cuisinier.webp"
      },
      {
        "id": "or-c57",
        "name": "Cuisinier",
        "ref": "C#57",
        "img": "https://wankul.fr/cdn/shop/files/cuisinier.webp"
      },
      {
        "id": "or-c58",
        "name": "Bébé",
        "ref": "C#58",
        "img": "https://wankul.fr/cdn/shop/files/bebe.webp"
      },
      {
        "id": "or-c59",
        "name": "Bébé",
        "ref": "C#59",
        "img": "https://wankul.fr/cdn/shop/files/bebe.webp"
      },
      {
        "id": "or-c60",
        "name": "Chasseur",
        "ref": "C#60",
        "img": "https://wankul.fr/cdn/shop/files/chasseur.webp"
      },
      {
        "id": "or-c61",
        "name": "Pilote d'avion",
        "ref": "C#61",
        "img": "https://wankul.fr/cdn/shop/files/pilote_d_avion.webp"
      },
      {
        "id": "or-c62",
        "name": "Agrou",
        "ref": "C#62",
        "img": "https://wankul.fr/cdn/shop/files/agrou.webp"
      },
      {
        "id": "or-c63",
        "name": "Agrou",
        "ref": "C#63",
        "img": "https://wankul.fr/cdn/shop/files/agrou.webp"
      },
      {
        "id": "or-c64",
        "name": "Chevalier",
        "ref": "C#64",
        "img": "https://wankul.fr/cdn/shop/files/chevalier.webp"
      },
      {
        "id": "or-c65",
        "name": "Chevalier",
        "ref": "C#65",
        "img": "https://wankul.fr/cdn/shop/files/chevalier.webp"
      },
      {
        "id": "or-c66",
        "name": "Peintre",
        "ref": "C#66",
        "img": "https://wankul.fr/cdn/shop/files/peintre.webp"
      },
      {
        "id": "or-c67",
        "name": "Peintre",
        "ref": "C#67",
        "img": "https://wankul.fr/cdn/shop/files/peintre.webp"
      },
      {
        "id": "or-c68",
        "name": "Pompier",
        "ref": "C#68",
        "img": "https://wankul.fr/cdn/shop/files/pompier.webp"
      },
      {
        "id": "or-c69",
        "name": "Pompier",
        "ref": "C#69",
        "img": "https://wankul.fr/cdn/shop/files/pompier.webp"
      },
      {
        "id": "or-c70",
        "name": "Sorcier",
        "ref": "C#70",
        "img": "https://wankul.fr/cdn/shop/files/sorcier.webp"
      },
      {
        "id": "or-c71",
        "name": "Sorcier",
        "ref": "C#71",
        "img": "https://wankul.fr/cdn/shop/files/sorcier.webp"
      },
      {
        "id": "or-c72",
        "name": "SDF",
        "ref": "C#72",
        "img": "https://wankul.fr/cdn/shop/files/sdf.webp"
      },
      {
        "id": "or-c73",
        "name": "SDF",
        "ref": "C#73",
        "img": "https://wankul.fr/cdn/shop/files/sdf.webp"
      },
      {
        "id": "or-c74",
        "name": "Touriste",
        "ref": "C#74",
        "img": "https://wankul.fr/cdn/shop/files/touriste.webp"
      },
      {
        "id": "or-c75",
        "name": "Touriste",
        "ref": "C#75",
        "img": "https://wankul.fr/cdn/shop/files/touriste.webp"
      },
      {
        "id": "or-c76",
        "name": "Employé WcDo",
        "ref": "C#76",
        "img": "https://wankul.fr/cdn/shop/files/employe_wcdo.webp"
      },
      {
        "id": "or-c77",
        "name": "Employé WcDo",
        "ref": "C#77",
        "img": "https://wankul.fr/cdn/shop/files/employe_wcdo.webp"
      },
      {
        "id": "or-c78",
        "name": "Mort-Vivant",
        "ref": "C#78",
        "img": "https://wankul.fr/cdn/shop/files/mort_vivant.webp"
      },
      {
        "id": "or-c79",
        "name": "Mort-Vivant",
        "ref": "C#79",
        "img": "https://wankul.fr/cdn/shop/files/mort_vivant.webp"
      },
      {
        "id": "or-c80",
        "name": "Soldat Romain",
        "ref": "C#80",
        "img": "https://wankul.fr/cdn/shop/files/soldat_romain.webp"
      }
    ],
    "peu-commune": [
      {
        "id": "or-uc81",
        "name": "Spiderlaink",
        "ref": "UC#81",
        "img": "https://wankul.fr/cdn/shop/files/spiderlaink.webp"
      },
      {
        "id": "or-uc82",
        "name": "Thorracid",
        "ref": "UC#82",
        "img": "https://wankul.fr/cdn/shop/files/thorracid.webp"
      },
      {
        "id": "or-uc83",
        "name": "CT",
        "ref": "UC#83",
        "img": "https://wankul.fr/cdn/shop/files/ct.webp"
      },
      {
        "id": "or-uc84",
        "name": "Terro",
        "ref": "UC#84",
        "img": "https://wankul.fr/cdn/shop/files/terro.webp"
      },
      {
        "id": "or-uc85",
        "name": "Clown Tueur",
        "ref": "UC#85",
        "img": "https://wankul.fr/cdn/shop/files/clown_tueur.webp"
      },
      {
        "id": "or-uc86",
        "name": "Joueur Du Grenier",
        "ref": "UC#86",
        "img": "https://wankul.fr/cdn/shop/files/joueur_du_grenier.webp"
      },
      {
        "id": "or-uc87",
        "name": "Seb",
        "ref": "UC#87",
        "img": "https://wankul.fr/cdn/shop/files/seb.webp"
      },
      {
        "id": "or-uc88",
        "name": "Amixem",
        "ref": "UC#88",
        "img": "https://wankul.fr/cdn/shop/files/amixem.webp"
      },
      {
        "id": "or-uc89",
        "name": "Pirate",
        "ref": "UC#89",
        "img": "https://wankul.fr/cdn/shop/files/pirate.webp"
      },
      {
        "id": "or-uc90",
        "name": "Pirate",
        "ref": "UC#90",
        "img": "https://wankul.fr/cdn/shop/files/pirate.webp"
      },
      {
        "id": "or-uc91",
        "name": "Semi-Homme",
        "ref": "UC#91",
        "img": "https://wankul.fr/cdn/shop/files/semi_homme.webp"
      },
      {
        "id": "or-uc92",
        "name": "Semi-Homme",
        "ref": "UC#92",
        "img": "https://wankul.fr/cdn/shop/files/semi_homme.webp"
      },
      {
        "id": "or-uc93",
        "name": "Marthie",
        "ref": "UC#93",
        "img": "https://wankul.fr/cdn/shop/files/marthie.webp"
      },
      {
        "id": "or-uc94",
        "name": "Doc",
        "ref": "UC#94",
        "img": "https://wankul.fr/cdn/shop/files/doc.webp"
      },
      {
        "id": "or-uc95",
        "name": "Vieille",
        "ref": "UC#95",
        "img": "https://wankul.fr/cdn/shop/files/vieille.webp"
      },
      {
        "id": "or-uc96",
        "name": "Vieille",
        "ref": "UC#96",
        "img": "https://wankul.fr/cdn/shop/files/vieille.webp"
      },
      {
        "id": "or-uc97",
        "name": "Fanboy",
        "ref": "UC#97",
        "img": "https://wankul.fr/cdn/shop/files/fanboy.webp"
      },
      {
        "id": "or-uc98",
        "name": "Fangirl",
        "ref": "UC#98",
        "img": "https://wankul.fr/cdn/shop/files/fangirl.webp"
      },
      {
        "id": "or-uc99",
        "name": "Gotaga",
        "ref": "UC#99",
        "img": "https://wankul.fr/cdn/shop/files/gotaga.webp"
      },
      {
        "id": "or-uc100",
        "name": "Billy le bonhomme de neige",
        "ref": "UC#100",
        "img": "https://wankul.fr/cdn/shop/files/billy_le_bonhomme_de_neige.webp"
      },
      {
        "id": "or-uc101",
        "name": "Gremlin",
        "ref": "UC#101",
        "img": "https://wankul.fr/cdn/shop/files/gremlin.webp"
      },
      {
        "id": "or-uc102",
        "name": "Steve",
        "ref": "UC#102",
        "img": "https://wankul.fr/cdn/shop/files/steve.webp"
      },
      {
        "id": "or-uc103",
        "name": "Steve",
        "ref": "UC#103",
        "img": "https://wankul.fr/cdn/shop/files/steve.webp"
      },
      {
        "id": "or-uc104",
        "name": "Apprentie Sorcière",
        "ref": "UC#104",
        "img": "https://wankul.fr/cdn/shop/files/apprentie_sorciere.webp"
      },
      {
        "id": "or-uc105",
        "name": "Elfe",
        "ref": "UC#105",
        "img": "https://wankul.fr/cdn/shop/files/elfe.webp"
      },
      {
        "id": "or-uc106",
        "name": "Sel",
        "ref": "UC#106",
        "img": "https://wankul.fr/cdn/shop/files/sel.webp"
      },
      {
        "id": "or-uc107",
        "name": "Sel",
        "ref": "UC#107",
        "img": "https://wankul.fr/cdn/shop/files/sel.webp"
      },
      {
        "id": "or-uc108",
        "name": "Mastu",
        "ref": "UC#108",
        "img": "https://wankul.fr/cdn/shop/files/mastu.webp"
      },
      {
        "id": "or-uc109",
        "name": "Deotoons",
        "ref": "UC#109",
        "img": "https://wankul.fr/cdn/shop/files/deotoons.webp"
      },
      {
        "id": "or-uc110",
        "name": "Cowboy",
        "ref": "UC#110",
        "img": "https://wankul.fr/cdn/shop/files/cowboy.webp"
      },
      {
        "id": "or-uc111",
        "name": "Cowboy",
        "ref": "UC#111",
        "img": "https://wankul.fr/cdn/shop/files/cowboy.webp"
      },
      {
        "id": "or-uc112",
        "name": "Policier",
        "ref": "UC#112",
        "img": "https://wankul.fr/cdn/shop/files/policier.webp"
      },
      {
        "id": "or-uc113",
        "name": "Policier",
        "ref": "UC#113",
        "img": "https://wankul.fr/cdn/shop/files/policier.webp"
      },
      {
        "id": "or-uc114",
        "name": "Obèse",
        "ref": "UC#114",
        "img": "https://wankul.fr/cdn/shop/files/obese.webp"
      },
      {
        "id": "or-uc115",
        "name": "Singe",
        "ref": "UC#115",
        "img": "https://wankul.fr/cdn/shop/files/singe.webp"
      },
      {
        "id": "or-uc116",
        "name": "Enquêteur",
        "ref": "UC#116",
        "img": "https://wankul.fr/cdn/shop/files/enqueteur.webp"
      },
      {
        "id": "or-uc117",
        "name": "Potatoz",
        "ref": "UC#117",
        "img": "https://wankul.fr/cdn/shop/files/potatoz.webp"
      },
      {
        "id": "or-uc118",
        "name": "Jiraya",
        "ref": "UC#118",
        "img": "https://wankul.fr/cdn/shop/files/jiraya.webp"
      },
      {
        "id": "or-uc119",
        "name": "Feldup",
        "ref": "UC#119",
        "img": "https://wankul.fr/cdn/shop/files/feldup.webp"
      },
      {
        "id": "or-uc120",
        "name": "Bretonne Bigoudène",
        "ref": "UC#120",
        "img": "https://wankul.fr/cdn/shop/files/bretonne_bigoudene.webp"
      },
      {
        "id": "or-uc121",
        "name": "Roi",
        "ref": "UC#121",
        "img": "https://wankul.fr/cdn/shop/files/roi.webp"
      },
      {
        "id": "or-uc122",
        "name": "Hugo Délire",
        "ref": "UC#122",
        "img": "https://wankul.fr/cdn/shop/files/hugo_delire.webp"
      },
      {
        "id": "or-uc123",
        "name": "Xari",
        "ref": "UC#123",
        "img": "https://wankul.fr/cdn/shop/files/xari.webp"
      },
      {
        "id": "or-uc124",
        "name": "Princesse",
        "ref": "UC#124",
        "img": "https://wankul.fr/cdn/shop/files/princesse.webp"
      },
      {
        "id": "or-uc125",
        "name": "Princesse",
        "ref": "UC#125",
        "img": "https://wankul.fr/cdn/shop/files/princesse.webp"
      },
      {
        "id": "or-uc126",
        "name": "Prostituée",
        "ref": "UC#126",
        "img": "https://wankul.fr/cdn/shop/files/prostituee.webp"
      },
      {
        "id": "or-uc127",
        "name": "Fée",
        "ref": "UC#127",
        "img": "https://wankul.fr/cdn/shop/files/fee.webp"
      },
      {
        "id": "or-uc128",
        "name": "G cramé",
        "ref": "UC#128",
        "img": "https://wankul.fr/cdn/shop/files/g_crame.webp"
      },
      {
        "id": "or-uc129",
        "name": "Superconeri",
        "ref": "UC#129",
        "img": "https://wankul.fr/cdn/shop/files/superconeri.webp"
      },
      {
        "id": "or-uc130",
        "name": "Moine",
        "ref": "UC#130",
        "img": "https://wankul.fr/cdn/shop/files/moine.webp"
      }
    ],
    "rare": [
      {
        "id": "or-r131",
        "name": "CyberLaink",
        "ref": "R#131",
        "img": "https://wankul.fr/cdn/shop/files/cyberlaink.webp"
      },
      {
        "id": "or-r132",
        "name": "CyberTerra",
        "ref": "R#132",
        "img": "https://wankul.fr/cdn/shop/files/cyberterra.webp"
      },
      {
        "id": "or-r133",
        "name": "Jacques Flantier",
        "ref": "R#133",
        "img": "https://wankul.fr/cdn/shop/files/jacques_flantier.webp"
      },
      {
        "id": "or-r134",
        "name": "Richard Flantier",
        "ref": "R#134",
        "img": "https://wankul.fr/cdn/shop/files/richard_flantier.webp"
      },
      {
        "id": "or-r135",
        "name": "Dresseuse",
        "ref": "R#135",
        "img": "https://wankul.fr/cdn/shop/files/dresseuse.webp"
      },
      {
        "id": "or-r136",
        "name": "Dresseur",
        "ref": "R#136",
        "img": "https://wankul.fr/cdn/shop/files/dresseur.webp"
      },
      {
        "id": "or-r137",
        "name": "Survivant",
        "ref": "R#137",
        "img": "https://wankul.fr/cdn/shop/files/survivant.webp"
      },
      {
        "id": "or-r138",
        "name": "Survivant",
        "ref": "R#138",
        "img": "https://wankul.fr/cdn/shop/files/survivant.webp"
      },
      {
        "id": "or-r139",
        "name": "Wicromania",
        "ref": "R#139",
        "img": "https://wankul.fr/cdn/shop/files/wicromania.webp"
      },
      {
        "id": "or-r140",
        "name": "Voyant",
        "ref": "R#140",
        "img": "https://wankul.fr/cdn/shop/files/voyant.webp"
      },
      {
        "id": "or-r141",
        "name": "Pierre Ronfin",
        "ref": "R#141",
        "img": "https://wankul.fr/cdn/shop/files/pierre_ronfin.webp"
      },
      {
        "id": "or-r142",
        "name": "André Rondin",
        "ref": "R#142",
        "img": "https://wankul.fr/cdn/shop/files/andre_rondin.webp"
      },
      {
        "id": "or-r143",
        "name": "Professeur",
        "ref": "R#143",
        "img": "https://wankul.fr/cdn/shop/files/professeur.webp"
      },
      {
        "id": "or-r144",
        "name": "Professeur",
        "ref": "R#144",
        "img": "https://wankul.fr/cdn/shop/files/professeur.webp"
      },
      {
        "id": "or-r145",
        "name": "Samouraï",
        "ref": "R#145",
        "img": "https://wankul.fr/cdn/shop/files/samourai.webp"
      },
      {
        "id": "or-r146",
        "name": "Sage Japonnais",
        "ref": "R#146",
        "img": "https://wankul.fr/cdn/shop/files/sage_japonnais.webp"
      },
      {
        "id": "or-r147",
        "name": "Jeanine",
        "ref": "R#147",
        "img": "https://wankul.fr/cdn/shop/files/jeanine.webp"
      },
      {
        "id": "or-r148",
        "name": "Martine",
        "ref": "R#148",
        "img": "https://wankul.fr/cdn/shop/files/martine.webp"
      },
      {
        "id": "or-r149",
        "name": "Laink",
        "ref": "R#149",
        "img": "https://wankul.fr/cdn/shop/files/laink.webp"
      },
      {
        "id": "or-r150",
        "name": "Terracid",
        "ref": "R#150",
        "img": "https://wankul.fr/cdn/shop/files/terracid.webp"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "or-ur151",
        "name": "Cowboy",
        "ref": "UR#151",
        "img": "https://wankul.fr/cdn/shop/files/cowboy.webp"
      },
      {
        "id": "or-ur152",
        "name": "Cowboy",
        "ref": "UR#152",
        "img": "https://wankul.fr/cdn/shop/files/cowboy.webp"
      },
      {
        "id": "or-ur153",
        "name": "Policier",
        "ref": "UR#153",
        "img": "https://wankul.fr/cdn/shop/files/policier.webp"
      },
      {
        "id": "or-ur154",
        "name": "Policier",
        "ref": "UR#154",
        "img": "https://wankul.fr/cdn/shop/files/policier.webp"
      },
      {
        "id": "or-ur155",
        "name": "Sel",
        "ref": "UR#155",
        "img": "https://wankul.fr/cdn/shop/files/sel.webp"
      },
      {
        "id": "or-ur156",
        "name": "Sel",
        "ref": "UR#156",
        "img": "https://wankul.fr/cdn/shop/files/sel.webp"
      },
      {
        "id": "or-ur157",
        "name": "Fromager",
        "ref": "UR#157",
        "img": "https://wankul.fr/cdn/shop/files/fromager.webp"
      },
      {
        "id": "or-ur158",
        "name": "Charcutier",
        "ref": "UR#158",
        "img": "https://wankul.fr/cdn/shop/files/charcutier.webp"
      },
      {
        "id": "or-ur159",
        "name": "Gotaga",
        "ref": "UR#159",
        "img": "https://wankul.fr/cdn/shop/files/gotaga.webp"
      },
      {
        "id": "or-ur160",
        "name": "Amixem",
        "ref": "UR#160",
        "img": "https://wankul.fr/cdn/shop/files/amixem.webp"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "or-ur161",
        "name": "Pirate",
        "ref": "UR#161",
        "img": "https://wankul.fr/cdn/shop/files/pirate.webp"
      },
      {
        "id": "or-ur162",
        "name": "Pirate",
        "ref": "UR#162",
        "img": "https://wankul.fr/cdn/shop/files/pirate.webp"
      },
      {
        "id": "or-ur163",
        "name": "Mastu",
        "ref": "UR#163",
        "img": "https://wankul.fr/cdn/shop/files/mastu.webp"
      },
      {
        "id": "or-ur164",
        "name": "G cramé",
        "ref": "UR#164",
        "img": "https://wankul.fr/cdn/shop/files/g_crame.webp"
      },
      {
        "id": "or-ur165",
        "name": "CT",
        "ref": "UR#165",
        "img": "https://wankul.fr/cdn/shop/files/ct.webp"
      },
      {
        "id": "or-ur166",
        "name": "Terro",
        "ref": "UR#166",
        "img": "https://wankul.fr/cdn/shop/files/terro.webp"
      },
      {
        "id": "or-ur167",
        "name": "Joueur Du Grenier",
        "ref": "UR#167",
        "img": "https://wankul.fr/cdn/shop/files/joueur_du_grenier.webp"
      },
      {
        "id": "or-ur168",
        "name": "Seb",
        "ref": "UR#168",
        "img": "https://wankul.fr/cdn/shop/files/seb.webp"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "or-l1169",
        "name": "Wicromania",
        "ref": "L1#169",
        "img": "https://wankul.fr/cdn/shop/files/wicromania.webp"
      },
      {
        "id": "or-l1170",
        "name": "Voyant",
        "ref": "L1#170",
        "img": "https://wankul.fr/cdn/shop/files/voyant.webp"
      },
      {
        "id": "or-l1171",
        "name": "Pierre Rondin",
        "ref": "L1#171",
        "img": "https://wankul.fr/cdn/shop/files/pierre_rondin.webp"
      },
      {
        "id": "or-l1172",
        "name": "André Rondin",
        "ref": "L1#172",
        "img": "https://wankul.fr/cdn/shop/files/andre_rondin.webp"
      },
      {
        "id": "or-l1173",
        "name": "Survivant",
        "ref": "L1#173",
        "img": "https://wankul.fr/cdn/shop/files/survivant.webp"
      },
      {
        "id": "or-l1174",
        "name": "Survivant",
        "ref": "L1#174",
        "img": "https://wankul.fr/cdn/shop/files/survivant.webp"
      }
    ],
    "legendaire-argent": [
      {
        "id": "or-l2175",
        "name": "Jacques Flantier",
        "ref": "L2#175",
        "img": "https://wankul.fr/cdn/shop/files/jacques_flantier.webp"
      },
      {
        "id": "or-l2176",
        "name": "Richard Flantier",
        "ref": "L2#176",
        "img": "https://wankul.fr/cdn/shop/files/richard_flantier.webp"
      },
      {
        "id": "or-l2177",
        "name": "Jeanine",
        "ref": "L2#177",
        "img": "https://wankul.fr/cdn/shop/files/jeanine.webp"
      },
      {
        "id": "or-l2178",
        "name": "Martine",
        "ref": "L2#178",
        "img": "https://wankul.fr/cdn/shop/files/martine.webp"
      }
    ],
    "legendaire-or": [
      {
        "id": "or-l3179",
        "name": "Laink",
        "ref": "L3#179",
        "img": "https://wankul.fr/cdn/shop/files/laink.webp"
      },
      {
        "id": "or-l3180",
        "name": "Terracid",
        "ref": "L3#180",
        "img": "https://wankul.fr/cdn/shop/files/terracid.webp"
      }
    ]
  },
  "campus": {
    "terrain": [
      {
        "id": "ca-t1",
        "name": "Radeau",
        "ref": "T#1",
        "img": "https://wankul.fr/cdn/shop/files/radeau.webp"
      },
      {
        "id": "ca-t2",
        "name": "Trikz Cooperation",
        "ref": "T#2",
        "img": "https://wankul.fr/cdn/shop/files/trikz_cooperation.webp"
      },
      {
        "id": "ca-t3",
        "name": "Décollage",
        "ref": "T#3",
        "img": "https://wankul.fr/cdn/shop/files/decollage.webp"
      },
      {
        "id": "ca-t4",
        "name": "Nuke",
        "ref": "T#4",
        "img": "https://wankul.fr/cdn/shop/files/nuke.webp"
      },
      {
        "id": "ca-t5",
        "name": "Salle aux trésors",
        "ref": "T#5",
        "img": "https://wankul.fr/cdn/shop/files/salle_aux_tresors.webp"
      },
      {
        "id": "ca-t6",
        "name": "Chat Twitch",
        "ref": "T#6",
        "img": "https://wankul.fr/cdn/shop/files/chat_twitch.webp"
      },
      {
        "id": "ca-t7",
        "name": "Airfield",
        "ref": "T#7",
        "img": "https://wankul.fr/cdn/shop/files/airfield.webp"
      },
      {
        "id": "ca-t8",
        "name": "City 17",
        "ref": "T#8",
        "img": "https://wankul.fr/cdn/shop/files/city_17.webp"
      },
      {
        "id": "ca-t9",
        "name": "Invasion Z",
        "ref": "T#9",
        "img": "https://wankul.fr/cdn/shop/files/invasion_z.webp"
      },
      {
        "id": "ca-t10",
        "name": "Oeuf",
        "ref": "T#10",
        "img": "https://wankul.fr/cdn/shop/files/oeuf.webp"
      },
      {
        "id": "ca-t11",
        "name": "Discobus",
        "ref": "T#11",
        "img": "https://wankul.fr/cdn/shop/files/discobus.webp"
      },
      {
        "id": "ca-t12",
        "name": "r/wankil",
        "ref": "T#12",
        "img": "https://wankul.fr/cdn/shop/files/rwankil.webp"
      },
      {
        "id": "ca-t13",
        "name": "Sacrifice",
        "ref": "T#13",
        "img": "https://wankul.fr/cdn/shop/files/sacrifice.webp"
      },
      {
        "id": "ca-t14",
        "name": "Prairie",
        "ref": "T#14",
        "img": "https://wankul.fr/cdn/shop/files/prairie.webp"
      },
      {
        "id": "ca-t15",
        "name": "Salle d'arcade",
        "ref": "T#15",
        "img": "https://wankul.fr/cdn/shop/files/salle_d_arcade.webp"
      },
      {
        "id": "ca-t16",
        "name": "Quiz",
        "ref": "T#16",
        "img": "https://wankul.fr/cdn/shop/files/quiz.webp"
      },
      {
        "id": "ca-t17",
        "name": "Lootbox",
        "ref": "T#17",
        "img": "https://wankul.fr/cdn/shop/files/lootbox.webp"
      },
      {
        "id": "ca-t18",
        "name": "Daltonisme",
        "ref": "T#18",
        "img": "https://wankul.fr/cdn/shop/files/daltonisme.webp"
      },
      {
        "id": "ca-t19",
        "name": "Aire de repos",
        "ref": "T#19",
        "img": "https://wankul.fr/cdn/shop/files/aire_de_repos.webp"
      },
      {
        "id": "ca-t20",
        "name": "Théâtre de Saint-Denis",
        "ref": "T#20",
        "img": "https://wankul.fr/cdn/shop/files/theatre_de_saint_denis.webp"
      },
      {
        "id": "ca-t21",
        "name": "Evasion",
        "ref": "T#21",
        "img": "https://wankul.fr/cdn/shop/files/evasion.webp"
      },
      {
        "id": "ca-t22",
        "name": "Ouverture de colis",
        "ref": "T#22",
        "img": "https://wankul.fr/cdn/shop/files/ouverture_de_colis.webp"
      },
      {
        "id": "ca-t23",
        "name": "Mur de bites",
        "ref": "T#23",
        "img": "https://wankul.fr/cdn/shop/files/mur_de_bites.webp"
      },
      {
        "id": "ca-t24",
        "name": "Raid viewers",
        "ref": "T#24",
        "img": "https://wankul.fr/cdn/shop/files/raid_viewers.webp"
      },
      {
        "id": "ca-t25",
        "name": "Stillwater",
        "ref": "T#25",
        "img": "https://wankul.fr/cdn/shop/files/stillwater.webp"
      }
    ],
    "commune": [
      {
        "id": "ca-c26",
        "name": "Lutin",
        "ref": "C#26",
        "img": "https://wankul.fr/cdn/shop/files/lutin.webp"
      },
      {
        "id": "ca-c27",
        "name": "Père Noël",
        "ref": "C#27",
        "img": "https://wankul.fr/cdn/shop/files/pere_noel.webp"
      },
      {
        "id": "ca-c28",
        "name": "La hache",
        "ref": "C#28",
        "img": "https://wankul.fr/cdn/shop/files/la_hache.webp"
      },
      {
        "id": "ca-c29",
        "name": "Pharaon",
        "ref": "C#29",
        "img": "https://wankul.fr/cdn/shop/files/pharaon.webp"
      },
      {
        "id": "ca-c30",
        "name": "Pharaon",
        "ref": "C#30",
        "img": "https://wankul.fr/cdn/shop/files/pharaon.webp"
      },
      {
        "id": "ca-c31",
        "name": "Punk à chien",
        "ref": "C#31",
        "img": "https://wankul.fr/cdn/shop/files/punk_a_chien.webp"
      },
      {
        "id": "ca-c32",
        "name": "Punk à chien",
        "ref": "C#32",
        "img": "https://wankul.fr/cdn/shop/files/punk_a_chien.webp"
      },
      {
        "id": "ca-c33",
        "name": "Marabouchpic",
        "ref": "C#33",
        "img": "https://wankul.fr/cdn/shop/files/marabouchpic.webp"
      },
      {
        "id": "ca-c34",
        "name": "Marabouchpic",
        "ref": "C#34",
        "img": "https://wankul.fr/cdn/shop/files/marabouchpic.webp"
      },
      {
        "id": "ca-c35",
        "name": "Cambrioleur",
        "ref": "C#35",
        "img": "https://wankul.fr/cdn/shop/files/cambrioleur.webp"
      },
      {
        "id": "ca-c36",
        "name": "Cambrioleur",
        "ref": "C#36",
        "img": "https://wankul.fr/cdn/shop/files/cambrioleur.webp"
      },
      {
        "id": "ca-c37",
        "name": "Licorne",
        "ref": "C#37",
        "img": "https://wankul.fr/cdn/shop/files/licorne.webp"
      },
      {
        "id": "ca-c38",
        "name": "Licorne",
        "ref": "C#38",
        "img": "https://wankul.fr/cdn/shop/files/licorne.webp"
      },
      {
        "id": "ca-c39",
        "name": "Aristocrate",
        "ref": "C#39",
        "img": "https://wankul.fr/cdn/shop/files/aristocrate.webp"
      },
      {
        "id": "ca-c40",
        "name": "Aristocrate",
        "ref": "C#40",
        "img": "https://wankul.fr/cdn/shop/files/aristocrate.webp"
      },
      {
        "id": "ca-c41",
        "name": "Braqueur",
        "ref": "C#41",
        "img": "https://wankul.fr/cdn/shop/files/braqueur.webp"
      },
      {
        "id": "ca-c42",
        "name": "Braqueur",
        "ref": "C#42",
        "img": "https://wankul.fr/cdn/shop/files/braqueur.webp"
      },
      {
        "id": "ca-c43",
        "name": "Livreur",
        "ref": "C#43",
        "img": "https://wankul.fr/cdn/shop/files/livreur.webp"
      },
      {
        "id": "ca-c44",
        "name": "Livreur",
        "ref": "C#44",
        "img": "https://wankul.fr/cdn/shop/files/livreur.webp"
      },
      {
        "id": "ca-c45",
        "name": "Cosplayeur",
        "ref": "C#45",
        "img": "https://wankul.fr/cdn/shop/files/cosplayeur.webp"
      },
      {
        "id": "ca-c46",
        "name": "Cosplayeur",
        "ref": "C#46",
        "img": "https://wankul.fr/cdn/shop/files/cosplayeur.webp"
      },
      {
        "id": "ca-c47",
        "name": "Viking",
        "ref": "C#47",
        "img": "https://wankul.fr/cdn/shop/files/viking.webp"
      },
      {
        "id": "ca-c48",
        "name": "Viking",
        "ref": "C#48",
        "img": "https://wankul.fr/cdn/shop/files/viking.webp"
      },
      {
        "id": "ca-c49",
        "name": "Moche",
        "ref": "C#49",
        "img": "https://wankul.fr/cdn/shop/files/moche.webp"
      },
      {
        "id": "ca-c50",
        "name": "Moche",
        "ref": "C#50",
        "img": "https://wankul.fr/cdn/shop/files/moche.webp"
      },
      {
        "id": "ca-c51",
        "name": "Skieur",
        "ref": "C#51",
        "img": "https://wankul.fr/cdn/shop/files/skieur.webp"
      },
      {
        "id": "ca-c52",
        "name": "Skieur",
        "ref": "C#52",
        "img": "https://wankul.fr/cdn/shop/files/skieur.webp"
      },
      {
        "id": "ca-c53",
        "name": "Freddy's",
        "ref": "C#53",
        "img": "https://wankul.fr/cdn/shop/files/freddy_s.webp"
      },
      {
        "id": "ca-c54",
        "name": "Freddy's",
        "ref": "C#54",
        "img": "https://wankul.fr/cdn/shop/files/freddy_s.webp"
      },
      {
        "id": "ca-c55",
        "name": "Marseillais",
        "ref": "C#55",
        "img": "https://wankul.fr/cdn/shop/files/marseillais.webp"
      },
      {
        "id": "ca-c56",
        "name": "Marseillais",
        "ref": "C#56",
        "img": "https://wankul.fr/cdn/shop/files/marseillais.webp"
      },
      {
        "id": "ca-c57",
        "name": "Atlas",
        "ref": "C#57",
        "img": "https://wankul.fr/cdn/shop/files/atlas.webp"
      },
      {
        "id": "ca-c58",
        "name": "P-Body",
        "ref": "C#58",
        "img": "https://wankul.fr/cdn/shop/files/p_body.webp"
      },
      {
        "id": "ca-c59",
        "name": "Wilson",
        "ref": "C#59",
        "img": "https://wankul.fr/cdn/shop/files/wilson.webp"
      },
      {
        "id": "ca-c60",
        "name": "Rasta",
        "ref": "C#60",
        "img": "https://wankul.fr/cdn/shop/files/rasta.webp"
      },
      {
        "id": "ca-c61",
        "name": "BUG",
        "ref": "C#61",
        "img": "https://wankul.fr/cdn/shop/files/bug.webp"
      },
      {
        "id": "ca-c62",
        "name": "Paladin",
        "ref": "C#62",
        "img": "https://wankul.fr/cdn/shop/files/paladin.webp"
      },
      {
        "id": "ca-c63",
        "name": "Paladin",
        "ref": "C#63",
        "img": "https://wankul.fr/cdn/shop/files/paladin.webp"
      },
      {
        "id": "ca-c64",
        "name": "Pelote de laine",
        "ref": "C#64",
        "img": "https://wankul.fr/cdn/shop/files/pelote_de_laine.webp"
      },
      {
        "id": "ca-c65",
        "name": "Pelote de laine",
        "ref": "C#65",
        "img": "https://wankul.fr/cdn/shop/files/pelote_de_laine.webp"
      }
    ],
    "peu-commune": [
      {
        "id": "ca-uc66",
        "name": "Diable",
        "ref": "UC#66",
        "img": "https://wankul.fr/cdn/shop/files/diable.webp"
      },
      {
        "id": "ca-uc67",
        "name": "Ange",
        "ref": "UC#67",
        "img": "https://wankul.fr/cdn/shop/files/ange.webp"
      },
      {
        "id": "ca-uc68",
        "name": "Prêteur sur gage",
        "ref": "UC#68",
        "img": "https://wankul.fr/cdn/shop/files/preteur_sur_gage.webp"
      },
      {
        "id": "ca-uc69",
        "name": "Prêteur sur gage",
        "ref": "UC#69",
        "img": "https://wankul.fr/cdn/shop/files/preteur_sur_gage.webp"
      },
      {
        "id": "ca-uc70",
        "name": "Videur",
        "ref": "UC#70",
        "img": "https://wankul.fr/cdn/shop/files/videur.webp"
      },
      {
        "id": "ca-uc71",
        "name": "Videur",
        "ref": "UC#71",
        "img": "https://wankul.fr/cdn/shop/files/videur.webp"
      },
      {
        "id": "ca-uc72",
        "name": "Vieux",
        "ref": "UC#72",
        "img": "https://wankul.fr/cdn/shop/files/vieux.webp"
      },
      {
        "id": "ca-uc73",
        "name": "Vieux",
        "ref": "UC#73",
        "img": "https://wankul.fr/cdn/shop/files/vieux.webp"
      },
      {
        "id": "ca-uc74",
        "name": "Ellie",
        "ref": "UC#74",
        "img": "https://wankul.fr/cdn/shop/files/ellie.webp"
      },
      {
        "id": "ca-uc75",
        "name": "Joel",
        "ref": "UC#75",
        "img": "https://wankul.fr/cdn/shop/files/joel.webp"
      },
      {
        "id": "ca-uc76",
        "name": "Furry",
        "ref": "UC#76",
        "img": "https://wankul.fr/cdn/shop/files/furry.webp"
      },
      {
        "id": "ca-uc77",
        "name": "Furry",
        "ref": "UC#77",
        "img": "https://wankul.fr/cdn/shop/files/furry.webp"
      },
      {
        "id": "ca-uc78",
        "name": "Rescapé",
        "ref": "UC#78",
        "img": "https://wankul.fr/cdn/shop/files/rescape.webp"
      },
      {
        "id": "ca-uc79",
        "name": "Rescapé",
        "ref": "UC#79",
        "img": "https://wankul.fr/cdn/shop/files/rescape.webp"
      },
      {
        "id": "ca-uc80",
        "name": "Hippie",
        "ref": "UC#80",
        "img": "https://wankul.fr/cdn/shop/files/hippie.webp"
      },
      {
        "id": "ca-uc81",
        "name": "Développeur",
        "ref": "UC#81",
        "img": "https://wankul.fr/cdn/shop/files/developpeur.webp"
      },
      {
        "id": "ca-uc82",
        "name": "Commentateur sportif",
        "ref": "UC#82",
        "img": "https://wankul.fr/cdn/shop/files/commentateur_sportif.webp"
      },
      {
        "id": "ca-uc83",
        "name": "Commentateur sportif",
        "ref": "UC#83",
        "img": "https://wankul.fr/cdn/shop/files/commentateur_sportif.webp"
      },
      {
        "id": "ca-uc84",
        "name": "McFly",
        "ref": "UC#84",
        "img": "https://wankul.fr/cdn/shop/files/mcfly.webp"
      },
      {
        "id": "ca-uc85",
        "name": "Carlito",
        "ref": "UC#85",
        "img": "https://wankul.fr/cdn/shop/files/carlito.webp"
      },
      {
        "id": "ca-uc86",
        "name": "Bête de la Ruche",
        "ref": "UC#86",
        "img": "https://wankul.fr/cdn/shop/files/bete_de_la_ruche.webp"
      },
      {
        "id": "ca-uc87",
        "name": "Immolator",
        "ref": "UC#87",
        "img": "https://wankul.fr/cdn/shop/files/immolator.webp"
      },
      {
        "id": "ca-uc88",
        "name": "Alyx",
        "ref": "UC#88",
        "img": "https://wankul.fr/cdn/shop/files/alyx.webp"
      },
      {
        "id": "ca-uc89",
        "name": "Gordon",
        "ref": "UC#89",
        "img": "https://wankul.fr/cdn/shop/files/gordon.webp"
      },
      {
        "id": "ca-uc90",
        "name": "Soldat Américain WW2",
        "ref": "UC#90",
        "img": "https://wankul.fr/cdn/shop/files/soldat_americain_ww2.webp"
      },
      {
        "id": "ca-uc91",
        "name": "Soldat Allemand WW2",
        "ref": "UC#91",
        "img": "https://wankul.fr/cdn/shop/files/soldat_allemand_ww2.webp"
      },
      {
        "id": "ca-uc92",
        "name": "Domingo",
        "ref": "UC#92",
        "img": "https://wankul.fr/cdn/shop/files/domingo.webp"
      },
      {
        "id": "ca-uc93",
        "name": "Inoxtag",
        "ref": "UC#93",
        "img": "https://wankul.fr/cdn/shop/files/inoxtag.webp"
      },
      {
        "id": "ca-uc94",
        "name": "Trophée",
        "ref": "UC#94",
        "img": "https://wankul.fr/cdn/shop/files/trophee.webp"
      },
      {
        "id": "ca-uc95",
        "name": "Chirurgien",
        "ref": "UC#95",
        "img": "https://wankul.fr/cdn/shop/files/chirurgien.webp"
      },
      {
        "id": "ca-uc96",
        "name": "Chirurgien",
        "ref": "UC#96",
        "img": "https://wankul.fr/cdn/shop/files/chirurgien.webp"
      },
      {
        "id": "ca-uc97",
        "name": "Catcheur",
        "ref": "UC#97",
        "img": "https://wankul.fr/cdn/shop/files/catcheur.webp"
      },
      {
        "id": "ca-uc98",
        "name": "Catcheur",
        "ref": "UC#98",
        "img": "https://wankul.fr/cdn/shop/files/catcheur.webp"
      },
      {
        "id": "ca-uc99",
        "name": "Sexy",
        "ref": "UC#99",
        "img": "https://wankul.fr/cdn/shop/files/sexy.webp"
      },
      {
        "id": "ca-uc100",
        "name": "Sexy",
        "ref": "UC#100",
        "img": "https://wankul.fr/cdn/shop/files/sexy.webp"
      }
    ],
    "rare": [
      {
        "id": "ca-r101",
        "name": "Cache-cache",
        "ref": "R#101",
        "img": "https://wankul.fr/cdn/shop/files/cache_cache.webp"
      },
      {
        "id": "ca-r102",
        "name": "Cache-cache",
        "ref": "R#102",
        "img": "https://wankul.fr/cdn/shop/files/cache_cache.webp"
      },
      {
        "id": "ca-r103",
        "name": "De face",
        "ref": "R#103",
        "img": "https://wankul.fr/cdn/shop/files/de_face.webp"
      },
      {
        "id": "ca-r104",
        "name": "De face",
        "ref": "R#104",
        "img": "https://wankul.fr/cdn/shop/files/de_face.webp"
      },
      {
        "id": "ca-r105",
        "name": "Alfred",
        "ref": "R#105",
        "img": "https://wankul.fr/cdn/shop/files/alfred.webp"
      },
      {
        "id": "ca-r106",
        "name": "Brandon Burger",
        "ref": "R#106",
        "img": "https://wankul.fr/cdn/shop/files/brandon_burger.webp"
      },
      {
        "id": "ca-r107",
        "name": "Peter McCain",
        "ref": "R#107",
        "img": "https://wankul.fr/cdn/shop/files/peter_mccain.webp"
      },
      {
        "id": "ca-r108",
        "name": "Rust",
        "ref": "R#108",
        "img": "https://wankul.fr/cdn/shop/files/rust.webp"
      },
      {
        "id": "ca-r109",
        "name": "Rust",
        "ref": "R#109",
        "img": "https://wankul.fr/cdn/shop/files/rust.webp"
      },
      {
        "id": "ca-r110",
        "name": "Maxime Biaggi",
        "ref": "R#110",
        "img": "https://wankul.fr/cdn/shop/files/maxime_biaggi.webp"
      },
      {
        "id": "ca-r111",
        "name": "Grimkujow",
        "ref": "R#111",
        "img": "https://wankul.fr/cdn/shop/files/grimkujow.webp"
      },
      {
        "id": "ca-r112",
        "name": "Sully",
        "ref": "R#112",
        "img": "https://wankul.fr/cdn/shop/files/sully.webp"
      },
      {
        "id": "ca-r113",
        "name": "Nathan",
        "ref": "R#113",
        "img": "https://wankul.fr/cdn/shop/files/nathan.webp"
      },
      {
        "id": "ca-r114",
        "name": "Maghla",
        "ref": "R#114",
        "img": "https://wankul.fr/cdn/shop/files/maghla.webp"
      },
      {
        "id": "ca-r115",
        "name": "Sheshounet",
        "ref": "R#115",
        "img": "https://wankul.fr/cdn/shop/files/sheshounet.webp"
      },
      {
        "id": "ca-r116",
        "name": "Theorus",
        "ref": "R#116",
        "img": "https://wankul.fr/cdn/shop/files/theorus.webp"
      },
      {
        "id": "ca-r117",
        "name": "Linca",
        "ref": "R#117",
        "img": "https://wankul.fr/cdn/shop/files/linca.webp"
      },
      {
        "id": "ca-r118",
        "name": "Imite",
        "ref": "R#118",
        "img": "https://wankul.fr/cdn/shop/files/imite.webp"
      },
      {
        "id": "ca-r119",
        "name": "Imite",
        "ref": "R#119",
        "img": "https://wankul.fr/cdn/shop/files/imite.webp"
      },
      {
        "id": "ca-r120",
        "name": "Guerrière mercenaire",
        "ref": "R#120",
        "img": "https://wankul.fr/cdn/shop/files/guerriere_mercenaire.webp"
      },
      {
        "id": "ca-r121",
        "name": "Chasseur de démons",
        "ref": "R#121",
        "img": "https://wankul.fr/cdn/shop/files/chasseur_de_demons.webp"
      },
      {
        "id": "ca-r122",
        "name": "NoHomo",
        "ref": "R#122",
        "img": "https://wankul.fr/cdn/shop/files/nohomo.webp"
      },
      {
        "id": "ca-r123",
        "name": "NoHomo",
        "ref": "R#123",
        "img": "https://wankul.fr/cdn/shop/files/nohomo.webp"
      },
      {
        "id": "ca-r124",
        "name": "Gamin",
        "ref": "R#124",
        "img": "https://wankul.fr/cdn/shop/files/gamin.webp"
      },
      {
        "id": "ca-r125",
        "name": "Gamin",
        "ref": "R#125",
        "img": "https://wankul.fr/cdn/shop/files/gamin.webp"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "ca-ur126",
        "name": "Atlas",
        "ref": "UR#126",
        "img": "https://wankul.fr/cdn/shop/files/atlas.webp"
      },
      {
        "id": "ca-ur127",
        "name": "P-Body",
        "ref": "UR#127",
        "img": "https://wankul.fr/cdn/shop/files/p_body.webp"
      },
      {
        "id": "ca-ur128",
        "name": "McFly",
        "ref": "UR#128",
        "img": "https://wankul.fr/cdn/shop/files/mcfly.webp"
      },
      {
        "id": "ca-ur129",
        "name": "Carlito",
        "ref": "UR#129",
        "img": "https://wankul.fr/cdn/shop/files/carlito.webp"
      },
      {
        "id": "ca-ur130",
        "name": "Bête de la Ruche",
        "ref": "UR#130",
        "img": "https://wankul.fr/cdn/shop/files/bete_de_la_ruche.webp"
      },
      {
        "id": "ca-ur131",
        "name": "Immolator",
        "ref": "UR#131",
        "img": "https://wankul.fr/cdn/shop/files/immolator.webp"
      },
      {
        "id": "ca-ur132",
        "name": "Wilson",
        "ref": "UR#132",
        "img": "https://wankul.fr/cdn/shop/files/wilson.webp"
      },
      {
        "id": "ca-ur133",
        "name": "Rasta",
        "ref": "UR#133",
        "img": "https://wankul.fr/cdn/shop/files/rasta.webp"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "ca-ur134",
        "name": "BUG",
        "ref": "UR#134",
        "img": "https://wankul.fr/cdn/shop/files/bug.webp"
      },
      {
        "id": "ca-ur135",
        "name": "Soldat Américain WW2",
        "ref": "UR#135",
        "img": "https://wankul.fr/cdn/shop/files/soldat_americain_ww2.webp"
      },
      {
        "id": "ca-ur136",
        "name": "Soldat Allemand WW2",
        "ref": "UR#136",
        "img": "https://wankul.fr/cdn/shop/files/soldat_allemand_ww2.webp"
      },
      {
        "id": "ca-ur137",
        "name": "Domingo",
        "ref": "UR#137",
        "img": "https://wankul.fr/cdn/shop/files/domingo.webp"
      },
      {
        "id": "ca-ur138",
        "name": "Inoxtag",
        "ref": "UR#138",
        "img": "https://wankul.fr/cdn/shop/files/inoxtag.webp"
      },
      {
        "id": "ca-ur139",
        "name": "Paladin",
        "ref": "UR#139",
        "img": "https://wankul.fr/cdn/shop/files/paladin.webp"
      },
      {
        "id": "ca-ur140",
        "name": "Paladin",
        "ref": "UR#140",
        "img": "https://wankul.fr/cdn/shop/files/paladin.webp"
      },
      {
        "id": "ca-ur141",
        "name": "Pelote de laine",
        "ref": "UR#141",
        "img": "https://wankul.fr/cdn/shop/files/pelote_de_laine.webp"
      },
      {
        "id": "ca-ur142",
        "name": "Pelote de laine",
        "ref": "UR#142",
        "img": "https://wankul.fr/cdn/shop/files/pelote_de_laine.webp"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "ca-l1143",
        "name": "Trophée",
        "ref": "L1#143",
        "img": "https://wankul.fr/cdn/shop/files/trophee.webp"
      },
      {
        "id": "ca-l1144",
        "name": "Chirurgien",
        "ref": "L1#144",
        "img": "https://wankul.fr/cdn/shop/files/chirurgien.webp"
      },
      {
        "id": "ca-l1145",
        "name": "Chirurgien",
        "ref": "L1#145",
        "img": "https://wankul.fr/cdn/shop/files/chirurgien.webp"
      },
      {
        "id": "ca-l1146",
        "name": "Catcheur",
        "ref": "L1#146",
        "img": "https://wankul.fr/cdn/shop/files/catcheur.webp"
      },
      {
        "id": "ca-l1147",
        "name": "Catcheur",
        "ref": "L1#147",
        "img": "https://wankul.fr/cdn/shop/files/catcheur.webp"
      },
      {
        "id": "ca-l1148",
        "name": "Sexy",
        "ref": "L1#148",
        "img": "https://wankul.fr/cdn/shop/files/sexy.webp"
      },
      {
        "id": "ca-l1149",
        "name": "Sexy",
        "ref": "L1#149",
        "img": "https://wankul.fr/cdn/shop/files/sexy.webp"
      }
    ],
    "legendaire-argent": [
      {
        "id": "ca-l2150",
        "name": "Guerrière mercenaire",
        "ref": "L2#150",
        "img": "https://wankul.fr/cdn/shop/files/guerriere_mercenaire.webp"
      },
      {
        "id": "ca-l2151",
        "name": "Chasseur de démons",
        "ref": "L2#151",
        "img": "https://wankul.fr/cdn/shop/files/chasseur_de_demons.webp"
      },
      {
        "id": "ca-l2152",
        "name": "NoHomo",
        "ref": "L2#152",
        "img": "https://wankul.fr/cdn/shop/files/nohomo.webp"
      },
      {
        "id": "ca-l2153",
        "name": "NoHomo",
        "ref": "L2#153",
        "img": "https://wankul.fr/cdn/shop/files/nohomo.webp"
      }
    ],
    "legendaire-or": [
      {
        "id": "ca-l3154",
        "name": "Gamin",
        "ref": "L3#154",
        "img": "https://wankul.fr/cdn/shop/files/gamin.webp"
      },
      {
        "id": "ca-l3155",
        "name": "Gamin",
        "ref": "L3#155",
        "img": "https://wankul.fr/cdn/shop/files/gamin.webp"
      }
    ]
  },
  "battle": {
    "terrain": [
      {
        "id": "ba-t1",
        "name": "Chasse en forêt",
        "ref": "T#1",
        "img": "https://wankul.fr/cdn/shop/files/chasse_en_foret.webp"
      },
      {
        "id": "ba-t2",
        "name": "Dark Forest",
        "ref": "T#2",
        "img": "https://wankul.fr/cdn/shop/files/dark_forest.webp"
      },
      {
        "id": "ba-t3",
        "name": "Course de billes",
        "ref": "T#3",
        "img": "https://wankul.fr/cdn/shop/files/course_de_billes.webp"
      },
      {
        "id": "ba-t4",
        "name": "Manoir Hanté",
        "ref": "T#4",
        "img": "https://wankul.fr/cdn/shop/files/manoir_hante.webp"
      },
      {
        "id": "ba-t5",
        "name": "Je suis une légende",
        "ref": "T#5",
        "img": "https://wankul.fr/cdn/shop/files/je_suis_une_legende.webp"
      },
      {
        "id": "ba-t6",
        "name": "End",
        "ref": "T#6",
        "img": "https://wankul.fr/cdn/shop/files/end.webp"
      },
      {
        "id": "ba-t7",
        "name": "Battleground",
        "ref": "T#7",
        "img": "https://wankul.fr/cdn/shop/files/battleground.webp"
      },
      {
        "id": "ba-t8",
        "name": "Camion des potes",
        "ref": "T#8",
        "img": "https://wankul.fr/cdn/shop/files/camion_des_potes.webp"
      },
      {
        "id": "ba-t9",
        "name": "Plateau de jeu",
        "ref": "T#9",
        "img": "https://wankul.fr/cdn/shop/files/plateau_de_jeu.webp"
      },
      {
        "id": "ba-t10",
        "name": "Tribunal",
        "ref": "T#10",
        "img": "https://wankul.fr/cdn/shop/files/tribunal.webp"
      },
      {
        "id": "ba-t11",
        "name": "Backrooms",
        "ref": "T#11",
        "img": "https://wankul.fr/cdn/shop/files/backrooms.webp"
      },
      {
        "id": "ba-t12",
        "name": "Inferno",
        "ref": "T#12",
        "img": "https://wankul.fr/cdn/shop/files/inferno.webp"
      },
      {
        "id": "ba-t13",
        "name": "XC_Funky",
        "ref": "T#13",
        "img": "https://wankul.fr/cdn/shop/files/xc_funky.webp"
      },
      {
        "id": "ba-t14",
        "name": "Parc d'attractions",
        "ref": "T#14",
        "img": "https://wankul.fr/cdn/shop/files/parc_d_attractions.webp"
      },
      {
        "id": "ba-t15",
        "name": "Survivor",
        "ref": "T#15",
        "img": "https://wankul.fr/cdn/shop/files/survivor.webp"
      },
      {
        "id": "ba-t16",
        "name": "Prop Hunt",
        "ref": "T#16",
        "img": "https://wankul.fr/cdn/shop/files/prop_hunt.webp"
      },
      {
        "id": "ba-t17",
        "name": "Décharge",
        "ref": "T#17",
        "img": "https://wankul.fr/cdn/shop/files/decharge.webp"
      },
      {
        "id": "ba-t18",
        "name": "Jeu de cartes",
        "ref": "T#18",
        "img": "https://wankul.fr/cdn/shop/files/jeu_de_cartes.webp"
      },
      {
        "id": "ba-t19",
        "name": "Ecole de magie",
        "ref": "T#19",
        "img": "https://wankul.fr/cdn/shop/files/ecole_de_magie.webp"
      },
      {
        "id": "ba-t20",
        "name": "La ferme de Thierry",
        "ref": "T#20",
        "img": "https://wankul.fr/cdn/shop/files/la_ferme_de_thierry.webp"
      },
      {
        "id": "ba-t21",
        "name": "Station Essence",
        "ref": "T#21",
        "img": "https://wankul.fr/cdn/shop/files/station_essence.webp"
      },
      {
        "id": "ba-t22",
        "name": "Qui veut gagner",
        "ref": "T#22",
        "img": "https://wankul.fr/cdn/shop/files/qui_veut_gagner.webp"
      },
      {
        "id": "ba-t23",
        "name": "L'Arche de Pandore",
        "ref": "T#23",
        "img": "https://wankul.fr/cdn/shop/files/l_arche_de_pandore.webp"
      },
      {
        "id": "ba-t24",
        "name": "FoodPorn",
        "ref": "T#24",
        "img": "https://wankul.fr/cdn/shop/files/foodporn.webp"
      },
      {
        "id": "ba-t25",
        "name": "Banque",
        "ref": "T#25",
        "img": "https://wankul.fr/cdn/shop/files/banque.webp"
      },
      {
        "id": "ba-t26",
        "name": "DayZ",
        "ref": "T#26",
        "img": "https://wankul.fr/cdn/shop/files/dayz.webp"
      },
      {
        "id": "ba-t27",
        "name": "La Comté",
        "ref": "T#27",
        "img": "https://wankul.fr/cdn/shop/files/la_comte.webp"
      },
      {
        "id": "ba-t28",
        "name": "Île Déserte",
        "ref": "T#28",
        "img": "https://wankul.fr/cdn/shop/files/ile_deserte.webp"
      },
      {
        "id": "ba-t29",
        "name": "Battlefield",
        "ref": "T#29",
        "img": "https://wankul.fr/cdn/shop/files/battlefield.webp"
      },
      {
        "id": "ba-t30",
        "name": "Cibles",
        "ref": "T#30",
        "img": "https://wankul.fr/cdn/shop/files/cibles.webp"
      }
    ],
    "commune": [
      {
        "id": "ba-c31",
        "name": "Ouvrier",
        "ref": "C#31",
        "img": "https://wankul.fr/cdn/shop/files/ouvrier.webp"
      },
      {
        "id": "ba-c32",
        "name": "Ouvrier",
        "ref": "C#32",
        "img": "https://wankul.fr/cdn/shop/files/ouvrier.webp"
      },
      {
        "id": "ba-c33",
        "name": "Coiffeuse",
        "ref": "C#33",
        "img": "https://wankul.fr/cdn/shop/files/coiffeuse.webp"
      },
      {
        "id": "ba-c34",
        "name": "Coiffeuse",
        "ref": "C#34",
        "img": "https://wankul.fr/cdn/shop/files/coiffeuse.webp"
      },
      {
        "id": "ba-c35",
        "name": "Français",
        "ref": "C#35",
        "img": "https://wankul.fr/cdn/shop/files/francais.webp"
      },
      {
        "id": "ba-c36",
        "name": "Français",
        "ref": "C#36",
        "img": "https://wankul.fr/cdn/shop/files/francais.webp"
      },
      {
        "id": "ba-c37",
        "name": "Footballer",
        "ref": "C#37",
        "img": "https://wankul.fr/cdn/shop/files/footballer.webp"
      },
      {
        "id": "ba-c38",
        "name": "Footballer",
        "ref": "C#38",
        "img": "https://wankul.fr/cdn/shop/files/footballer.webp"
      },
      {
        "id": "ba-c39",
        "name": "Écrivain",
        "ref": "C#39",
        "img": "https://wankul.fr/cdn/shop/files/ecrivain.webp"
      },
      {
        "id": "ba-c40",
        "name": "Écrivain",
        "ref": "C#40",
        "img": "https://wankul.fr/cdn/shop/files/ecrivain.webp"
      },
      {
        "id": "ba-c41",
        "name": "Douanier",
        "ref": "C#41",
        "img": "https://wankul.fr/cdn/shop/files/douanier.webp"
      },
      {
        "id": "ba-c42",
        "name": "Douanier",
        "ref": "C#42",
        "img": "https://wankul.fr/cdn/shop/files/douanier.webp"
      },
      {
        "id": "ba-c43",
        "name": "Emo",
        "ref": "C#43",
        "img": "https://wankul.fr/cdn/shop/files/emo.webp"
      },
      {
        "id": "ba-c44",
        "name": "Emo",
        "ref": "C#44",
        "img": "https://wankul.fr/cdn/shop/files/emo.webp"
      },
      {
        "id": "ba-c45",
        "name": "Surfeur",
        "ref": "C#45",
        "img": "https://wankul.fr/cdn/shop/files/surfeur.webp"
      },
      {
        "id": "ba-c46",
        "name": "Surfeur",
        "ref": "C#46",
        "img": "https://wankul.fr/cdn/shop/files/surfeur.webp"
      },
      {
        "id": "ba-c47",
        "name": "Réalisateur",
        "ref": "C#47",
        "img": "https://wankul.fr/cdn/shop/files/realisateur.webp"
      },
      {
        "id": "ba-c48",
        "name": "Réalisateur",
        "ref": "C#48",
        "img": "https://wankul.fr/cdn/shop/files/realisateur.webp"
      },
      {
        "id": "ba-c49",
        "name": "Bodybuilder",
        "ref": "C#49",
        "img": "https://wankul.fr/cdn/shop/files/bodybuilder.webp"
      },
      {
        "id": "ba-c50",
        "name": "Bodybuilder",
        "ref": "C#50",
        "img": "https://wankul.fr/cdn/shop/files/bodybuilder.webp"
      },
      {
        "id": "ba-c51",
        "name": "Téléachat",
        "ref": "C#51",
        "img": "https://wankul.fr/cdn/shop/files/teleachat.webp"
      },
      {
        "id": "ba-c52",
        "name": "Téléachat",
        "ref": "C#52",
        "img": "https://wankul.fr/cdn/shop/files/teleachat.webp"
      },
      {
        "id": "ba-c53",
        "name": "Golfeur",
        "ref": "C#53",
        "img": "https://wankul.fr/cdn/shop/files/golfeur.webp"
      },
      {
        "id": "ba-c54",
        "name": "Golfeur",
        "ref": "C#54",
        "img": "https://wankul.fr/cdn/shop/files/golfeur.webp"
      },
      {
        "id": "ba-c55",
        "name": "Mac",
        "ref": "C#55",
        "img": "https://wankul.fr/cdn/shop/files/mac.webp"
      },
      {
        "id": "ba-c56",
        "name": "Mac",
        "ref": "C#56",
        "img": "https://wankul.fr/cdn/shop/files/mac.webp"
      },
      {
        "id": "ba-c57",
        "name": "Autostoppeur",
        "ref": "C#57",
        "img": "https://wankul.fr/cdn/shop/files/autostoppeur.webp"
      },
      {
        "id": "ba-c58",
        "name": "Autostoppeur",
        "ref": "C#58",
        "img": "https://wankul.fr/cdn/shop/files/autostoppeur.webp"
      },
      {
        "id": "ba-c59",
        "name": "Peepo",
        "ref": "C#59",
        "img": "https://wankul.fr/cdn/shop/files/peepo.webp"
      },
      {
        "id": "ba-c60",
        "name": "Peepo",
        "ref": "C#60",
        "img": "https://wankul.fr/cdn/shop/files/peepo.webp"
      },
      {
        "id": "ba-c61",
        "name": "Prisonnier",
        "ref": "C#61",
        "img": "https://wankul.fr/cdn/shop/files/prisonnier.webp"
      },
      {
        "id": "ba-c62",
        "name": "Prisonnier",
        "ref": "C#62",
        "img": "https://wankul.fr/cdn/shop/files/prisonnier.webp"
      },
      {
        "id": "ba-c63",
        "name": "Sponso",
        "ref": "C#63",
        "img": "https://wankul.fr/cdn/shop/files/sponso.webp"
      },
      {
        "id": "ba-c64",
        "name": "Sponso",
        "ref": "C#64",
        "img": "https://wankul.fr/cdn/shop/files/sponso.webp"
      },
      {
        "id": "ba-c65",
        "name": "Boys Band",
        "ref": "C#65",
        "img": "https://wankul.fr/cdn/shop/files/boys_band.webp"
      },
      {
        "id": "ba-c66",
        "name": "Boys Band",
        "ref": "C#66",
        "img": "https://wankul.fr/cdn/shop/files/boys_band.webp"
      },
      {
        "id": "ba-c67",
        "name": "Tricky Sorcier",
        "ref": "C#67",
        "img": "https://wankul.fr/cdn/shop/files/tricky_sorcier.webp"
      },
      {
        "id": "ba-c68",
        "name": "Tricky Sorcier",
        "ref": "C#68",
        "img": "https://wankul.fr/cdn/shop/files/tricky_sorcier.webp"
      },
      {
        "id": "ba-c69",
        "name": "Pile",
        "ref": "C#69",
        "img": "https://wankul.fr/cdn/shop/files/pile.webp"
      },
      {
        "id": "ba-c70",
        "name": "Face",
        "ref": "C#70",
        "img": "https://wankul.fr/cdn/shop/files/face.webp"
      },
      {
        "id": "ba-c71",
        "name": "Dragon",
        "ref": "C#71",
        "img": "https://wankul.fr/cdn/shop/files/dragon.webp"
      },
      {
        "id": "ba-c72",
        "name": "Dragon",
        "ref": "C#72",
        "img": "https://wankul.fr/cdn/shop/files/dragon.webp"
      },
      {
        "id": "ba-c73",
        "name": "Brique",
        "ref": "C#73",
        "img": "https://wankul.fr/cdn/shop/files/brique.webp"
      },
      {
        "id": "ba-c74",
        "name": "Brique",
        "ref": "C#74",
        "img": "https://wankul.fr/cdn/shop/files/brique.webp"
      },
      {
        "id": "ba-c75",
        "name": "Oie",
        "ref": "C#75",
        "img": "https://wankul.fr/cdn/shop/files/oie.webp"
      },
      {
        "id": "ba-c76",
        "name": "Canard",
        "ref": "C#76",
        "img": "https://wankul.fr/cdn/shop/files/canard.webp"
      },
      {
        "id": "ba-c77",
        "name": "Vitrail",
        "ref": "C#77",
        "img": "https://wankul.fr/cdn/shop/files/vitrail.webp"
      },
      {
        "id": "ba-c78",
        "name": "Vitrail",
        "ref": "C#78",
        "img": "https://wankul.fr/cdn/shop/files/vitrail.webp"
      },
      {
        "id": "ba-c79",
        "name": "Dead Cowboy",
        "ref": "C#79",
        "img": "https://wankul.fr/cdn/shop/files/dead_cowboy.webp"
      },
      {
        "id": "ba-c80",
        "name": "Dead Cowboy",
        "ref": "C#80",
        "img": "https://wankul.fr/cdn/shop/files/dead_cowboy.webp"
      }
    ],
    "peu-commune": [
      {
        "id": "ba-uc81",
        "name": "Laink par Laink",
        "ref": "UC#81",
        "img": "https://wankul.fr/cdn/shop/files/laink_par_laink.webp"
      },
      {
        "id": "ba-uc82",
        "name": "Terracid par Terracid",
        "ref": "UC#82",
        "img": "https://wankul.fr/cdn/shop/files/terracid_par_terracid.webp"
      },
      {
        "id": "ba-uc83",
        "name": "Ballon",
        "ref": "UC#83",
        "img": "https://wankul.fr/cdn/shop/files/ballon.webp"
      },
      {
        "id": "ba-uc84",
        "name": "Ballon",
        "ref": "UC#84",
        "img": "https://wankul.fr/cdn/shop/files/ballon.webp"
      },
      {
        "id": "ba-uc85",
        "name": "SCP-106",
        "ref": "UC#85",
        "img": "https://wankul.fr/cdn/shop/files/scp_106.webp"
      },
      {
        "id": "ba-uc86",
        "name": "SCP-173",
        "ref": "UC#86",
        "img": "https://wankul.fr/cdn/shop/files/scp_173.webp"
      },
      {
        "id": "ba-uc87",
        "name": "Hunt Sister",
        "ref": "UC#87",
        "img": "https://wankul.fr/cdn/shop/files/hunt_sister.webp"
      },
      {
        "id": "ba-uc88",
        "name": "Hunt Redneck",
        "ref": "UC#88",
        "img": "https://wankul.fr/cdn/shop/files/hunt_redneck.webp"
      },
      {
        "id": "ba-uc89",
        "name": "GIGACHAD",
        "ref": "UC#89",
        "img": "https://wankul.fr/cdn/shop/files/gigachad.webp"
      },
      {
        "id": "ba-uc90",
        "name": "GIGACHAD",
        "ref": "UC#90",
        "img": "https://wankul.fr/cdn/shop/files/gigachad.webp"
      },
      {
        "id": "ba-uc91",
        "name": "Lainkix",
        "ref": "UC#91",
        "img": "https://wankul.fr/cdn/shop/files/lainkix.webp"
      },
      {
        "id": "ba-uc92",
        "name": "Terracix",
        "ref": "UC#92",
        "img": "https://wankul.fr/cdn/shop/files/terracix.webp"
      },
      {
        "id": "ba-uc93",
        "name": "Dionysos",
        "ref": "UC#93",
        "img": "https://wankul.fr/cdn/shop/files/dionysos.webp"
      },
      {
        "id": "ba-uc94",
        "name": "Zeus",
        "ref": "UC#94",
        "img": "https://wankul.fr/cdn/shop/files/zeus.webp"
      },
      {
        "id": "ba-uc95",
        "name": "Compagnon d'avanturière",
        "ref": "UC#95",
        "img": "https://wankul.fr/cdn/shop/files/compagnon_d_avanturiere.webp"
      },
      {
        "id": "ba-uc96",
        "name": "Avanturière",
        "ref": "UC#96",
        "img": "https://wankul.fr/cdn/shop/files/avanturiere.webp"
      },
      {
        "id": "ba-uc97",
        "name": "Voisin Kidnappeur",
        "ref": "UC#97",
        "img": "https://wankul.fr/cdn/shop/files/voisin_kidnappeur.webp"
      },
      {
        "id": "ba-uc98",
        "name": "Voisin Kidnappeur",
        "ref": "UC#98",
        "img": "https://wankul.fr/cdn/shop/files/voisin_kidnappeur.webp"
      },
      {
        "id": "ba-uc99",
        "name": "Gustavo",
        "ref": "UC#99",
        "img": "https://wankul.fr/cdn/shop/files/gustavo.webp"
      },
      {
        "id": "ba-uc100",
        "name": "Pablo Escobar",
        "ref": "UC#100",
        "img": "https://wankul.fr/cdn/shop/files/pablo_escobar.webp"
      },
      {
        "id": "ba-uc101",
        "name": "Filette égarée",
        "ref": "UC#101",
        "img": "https://wankul.fr/cdn/shop/files/filette_egaree.webp"
      },
      {
        "id": "ba-uc102",
        "name": "Vieille Sorcière",
        "ref": "UC#102",
        "img": "https://wankul.fr/cdn/shop/files/vieille_sorciere.webp"
      },
      {
        "id": "ba-uc103",
        "name": "Saucisse",
        "ref": "UC#103",
        "img": "https://wankul.fr/cdn/shop/files/saucisse.webp"
      },
      {
        "id": "ba-uc104",
        "name": "Aubergine",
        "ref": "UC#104",
        "img": "https://wankul.fr/cdn/shop/files/aubergine.webp"
      },
      {
        "id": "ba-uc105",
        "name": "Redneck",
        "ref": "UC#105",
        "img": "https://wankul.fr/cdn/shop/files/redneck.webp"
      },
      {
        "id": "ba-uc106",
        "name": "Redneck",
        "ref": "UC#106",
        "img": "https://wankul.fr/cdn/shop/files/redneck.webp"
      },
      {
        "id": "ba-uc107",
        "name": "De Profil",
        "ref": "UC#107",
        "img": "https://wankul.fr/cdn/shop/files/de_profil.webp"
      },
      {
        "id": "ba-uc108",
        "name": "De Profil",
        "ref": "UC#108",
        "img": "https://wankul.fr/cdn/shop/files/de_profil.webp"
      },
      {
        "id": "ba-uc109",
        "name": "Samourabstrait",
        "ref": "UC#109",
        "img": "https://wankul.fr/cdn/shop/files/samourabstrait.webp"
      },
      {
        "id": "ba-uc110",
        "name": "Samourabstrait",
        "ref": "UC#110",
        "img": "https://wankul.fr/cdn/shop/files/samourabstrait.webp"
      },
      {
        "id": "ba-uc111",
        "name": "Explorateur Urbex",
        "ref": "UC#111",
        "img": "https://wankul.fr/cdn/shop/files/explorateur_urbex.webp"
      },
      {
        "id": "ba-uc112",
        "name": "Explorateur Urbex",
        "ref": "UC#112",
        "img": "https://wankul.fr/cdn/shop/files/explorateur_urbex.webp"
      },
      {
        "id": "ba-uc113",
        "name": "Masque à gaz",
        "ref": "UC#113",
        "img": "https://wankul.fr/cdn/shop/files/masque_a_gaz.webp"
      },
      {
        "id": "ba-uc114",
        "name": "Bébé Poilu",
        "ref": "UC#114",
        "img": "https://wankul.fr/cdn/shop/files/bebe_poilu.webp"
      },
      {
        "id": "ba-uc115",
        "name": "Lebouseuh",
        "ref": "UC#115",
        "img": "https://wankul.fr/cdn/shop/files/lebouseuh.webp"
      },
      {
        "id": "ba-uc116",
        "name": "Jean",
        "ref": "UC#116",
        "img": "https://wankul.fr/cdn/shop/files/jean.webp"
      },
      {
        "id": "ba-uc117",
        "name": "Horty",
        "ref": "UC#117",
        "img": "https://wankul.fr/cdn/shop/files/horty.webp"
      },
      {
        "id": "ba-uc118",
        "name": "MasterSnakou",
        "ref": "UC#118",
        "img": "https://wankul.fr/cdn/shop/files/mastersnakou.webp"
      },
      {
        "id": "ba-uc119",
        "name": "Bob Lennon",
        "ref": "UC#119",
        "img": "https://wankul.fr/cdn/shop/files/bob_lennon.webp"
      },
      {
        "id": "ba-uc120",
        "name": "Cyprien",
        "ref": "UC#120",
        "img": "https://wankul.fr/cdn/shop/files/cyprien.webp"
      },
      {
        "id": "ba-uc121",
        "name": "Prop Hunt",
        "ref": "UC#121",
        "img": "https://wankul.fr/cdn/shop/files/prop_hunt.webp"
      },
      {
        "id": "ba-uc122",
        "name": "Prop Hunt",
        "ref": "UC#122",
        "img": "https://wankul.fr/cdn/shop/files/prop_hunt.webp"
      },
      {
        "id": "ba-uc123",
        "name": "Canette à ongles",
        "ref": "UC#123",
        "img": "https://wankul.fr/cdn/shop/files/canette_a_ongles.webp"
      },
      {
        "id": "ba-uc124",
        "name": "Esclaves",
        "ref": "UC#124",
        "img": "https://wankul.fr/cdn/shop/files/esclaves.webp"
      },
      {
        "id": "ba-uc125",
        "name": "Commandant Allemand",
        "ref": "UC#125",
        "img": "https://wankul.fr/cdn/shop/files/commandant_allemand.webp"
      },
      {
        "id": "ba-uc126",
        "name": "Soldat Américain",
        "ref": "UC#126",
        "img": "https://wankul.fr/cdn/shop/files/soldat_americain.webp"
      },
      {
        "id": "ba-uc127",
        "name": "Rappeur",
        "ref": "UC#127",
        "img": "https://wankul.fr/cdn/shop/files/rappeur.webp"
      },
      {
        "id": "ba-uc128",
        "name": "Rappeur",
        "ref": "UC#128",
        "img": "https://wankul.fr/cdn/shop/files/rappeur.webp"
      },
      {
        "id": "ba-uc129",
        "name": "Soldat de l'espace",
        "ref": "UC#129",
        "img": "https://wankul.fr/cdn/shop/files/soldat_de_l_espace.webp"
      },
      {
        "id": "ba-uc130",
        "name": "Soldat de l'espace",
        "ref": "UC#130",
        "img": "https://wankul.fr/cdn/shop/files/soldat_de_l_espace.webp"
      }
    ],
    "rare": [
      {
        "id": "ba-r131",
        "name": "Nain",
        "ref": "R#131",
        "img": "https://wankul.fr/cdn/shop/files/nain.webp"
      },
      {
        "id": "ba-r132",
        "name": "Sournois",
        "ref": "R#132",
        "img": "https://wankul.fr/cdn/shop/files/sournois.webp"
      },
      {
        "id": "ba-r133",
        "name": "Pâte à modeler",
        "ref": "R#133",
        "img": "https://wankul.fr/cdn/shop/files/pate_a_modeler.webp"
      },
      {
        "id": "ba-r134",
        "name": "Pâte à modeler",
        "ref": "R#134",
        "img": "https://wankul.fr/cdn/shop/files/pate_a_modeler.webp"
      },
      {
        "id": "ba-r135",
        "name": "Gladiateur",
        "ref": "R#135",
        "img": "https://wankul.fr/cdn/shop/files/gladiateur.webp"
      },
      {
        "id": "ba-r136",
        "name": "Gladiateur",
        "ref": "R#136",
        "img": "https://wankul.fr/cdn/shop/files/gladiateur.webp"
      },
      {
        "id": "ba-r137",
        "name": "Skyyart",
        "ref": "R#137",
        "img": "https://wankul.fr/cdn/shop/files/skyyart.webp"
      },
      {
        "id": "ba-r138",
        "name": "Doigby",
        "ref": "R#138",
        "img": "https://wankul.fr/cdn/shop/files/doigby.webp"
      },
      {
        "id": "ba-r139",
        "name": "Étoiles",
        "ref": "R#139",
        "img": "https://wankul.fr/cdn/shop/files/etoiles.webp"
      },
      {
        "id": "ba-r140",
        "name": "Rancunier",
        "ref": "R#140",
        "img": "https://wankul.fr/cdn/shop/files/rancunier.webp"
      },
      {
        "id": "ba-r141",
        "name": "Paléontologue",
        "ref": "R#141",
        "img": "https://wankul.fr/cdn/shop/files/paleontologue.webp"
      },
      {
        "id": "ba-r142",
        "name": "Paléontologue",
        "ref": "R#142",
        "img": "https://wankul.fr/cdn/shop/files/paleontologue.webp"
      },
      {
        "id": "ba-r143",
        "name": "Jakov",
        "ref": "R#143",
        "img": "https://wankul.fr/cdn/shop/files/jakov.webp"
      },
      {
        "id": "ba-r144",
        "name": "Richus",
        "ref": "R#144",
        "img": "https://wankul.fr/cdn/shop/files/richus.webp"
      },
      {
        "id": "ba-r145",
        "name": "Boss des Saviors",
        "ref": "R#145",
        "img": "https://wankul.fr/cdn/shop/files/boss_des_saviors.webp"
      },
      {
        "id": "ba-r146",
        "name": "Shérif de l'apocalypse",
        "ref": "R#146",
        "img": "https://wankul.fr/cdn/shop/files/sherif_de_l_apocalypse.webp"
      },
      {
        "id": "ba-r147",
        "name": "Guerrier Samourai",
        "ref": "R#147",
        "img": "https://wankul.fr/cdn/shop/files/guerrier_samourai.webp"
      },
      {
        "id": "ba-r148",
        "name": "Guerrier Samourai",
        "ref": "R#148",
        "img": "https://wankul.fr/cdn/shop/files/guerrier_samourai.webp"
      },
      {
        "id": "ba-r149",
        "name": "Motard",
        "ref": "R#149",
        "img": "https://wankul.fr/cdn/shop/files/motard.webp"
      },
      {
        "id": "ba-r150",
        "name": "Motard",
        "ref": "R#150",
        "img": "https://wankul.fr/cdn/shop/files/motard.webp"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "ba-ur151",
        "name": "Gladiateur",
        "ref": "UR#151",
        "img": "https://wankul.fr/cdn/shop/files/gladiateur.webp"
      },
      {
        "id": "ba-ur152",
        "name": "Gladiateur",
        "ref": "UR#152",
        "img": "https://wankul.fr/cdn/shop/files/gladiateur.webp"
      },
      {
        "id": "ba-ur153",
        "name": "Commandant Allemand",
        "ref": "UR#153",
        "img": "https://wankul.fr/cdn/shop/files/commandant_allemand.webp"
      },
      {
        "id": "ba-ur154",
        "name": "Soldat Américain",
        "ref": "UR#154",
        "img": "https://wankul.fr/cdn/shop/files/soldat_americain.webp"
      },
      {
        "id": "ba-ur155",
        "name": "Brique",
        "ref": "UR#155",
        "img": "https://wankul.fr/cdn/shop/files/brique.webp"
      },
      {
        "id": "ba-ur156",
        "name": "Brique",
        "ref": "UR#156",
        "img": "https://wankul.fr/cdn/shop/files/brique.webp"
      },
      {
        "id": "ba-ur157",
        "name": "Dead Cowboy",
        "ref": "UR#157",
        "img": "https://wankul.fr/cdn/shop/files/dead_cowboy.webp"
      },
      {
        "id": "ba-ur158",
        "name": "Dead Cowboy",
        "ref": "UR#158",
        "img": "https://wankul.fr/cdn/shop/files/dead_cowboy.webp"
      },
      {
        "id": "ba-ur159",
        "name": "Dragon",
        "ref": "UR#159",
        "img": "https://wankul.fr/cdn/shop/files/dragon.webp"
      },
      {
        "id": "ba-ur160",
        "name": "Dragon",
        "ref": "UR#160",
        "img": "https://wankul.fr/cdn/shop/files/dragon.webp"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "ba-ur161",
        "name": "Bob Lennon",
        "ref": "UR#161",
        "img": "https://wankul.fr/cdn/shop/files/bob_lennon.webp"
      },
      {
        "id": "ba-ur162",
        "name": "Cyprien",
        "ref": "UR#162",
        "img": "https://wankul.fr/cdn/shop/files/cyprien.webp"
      },
      {
        "id": "ba-ur163",
        "name": "Soldat de l'espace",
        "ref": "UR#163",
        "img": "https://wankul.fr/cdn/shop/files/soldat_de_l_espace.webp"
      },
      {
        "id": "ba-ur164",
        "name": "Soldat de l'espace",
        "ref": "UR#164",
        "img": "https://wankul.fr/cdn/shop/files/soldat_de_l_espace.webp"
      },
      {
        "id": "ba-ur165",
        "name": "Rappeur",
        "ref": "UR#165",
        "img": "https://wankul.fr/cdn/shop/files/rappeur.webp"
      },
      {
        "id": "ba-ur166",
        "name": "Rappeur",
        "ref": "UR#166",
        "img": "https://wankul.fr/cdn/shop/files/rappeur.webp"
      },
      {
        "id": "ba-ur167",
        "name": "Prop Hunt",
        "ref": "UR#167",
        "img": "https://wankul.fr/cdn/shop/files/prop_hunt.webp"
      },
      {
        "id": "ba-ur168",
        "name": "Prop Hunt",
        "ref": "UR#168",
        "img": "https://wankul.fr/cdn/shop/files/prop_hunt.webp"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "ba-l1169",
        "name": "Vitrail",
        "ref": "L1#169",
        "img": "https://wankul.fr/cdn/shop/files/vitrail.webp"
      },
      {
        "id": "ba-l1170",
        "name": "Vitrail",
        "ref": "L1#170",
        "img": "https://wankul.fr/cdn/shop/files/vitrail.webp"
      },
      {
        "id": "ba-l1171",
        "name": "Bébé Poilu",
        "ref": "L1#171",
        "img": "https://wankul.fr/cdn/shop/files/bebe_poilu.webp"
      },
      {
        "id": "ba-l1172",
        "name": "Rancunier",
        "ref": "L1#172",
        "img": "https://wankul.fr/cdn/shop/files/rancunier.webp"
      },
      {
        "id": "ba-l1173",
        "name": "Jakov",
        "ref": "L1#173",
        "img": "https://wankul.fr/cdn/shop/files/jakov.webp"
      },
      {
        "id": "ba-l1174",
        "name": "Richus",
        "ref": "L1#174",
        "img": "https://wankul.fr/cdn/shop/files/richus.webp"
      }
    ],
    "legendaire-argent": [
      {
        "id": "ba-l2175",
        "name": "Boss des Saviors",
        "ref": "L2#175",
        "img": "https://wankul.fr/cdn/shop/files/boss_des_saviors.webp"
      },
      {
        "id": "ba-l2176",
        "name": "Shérif de l'apocalypse",
        "ref": "L2#176",
        "img": "https://wankul.fr/cdn/shop/files/sherif_de_l_apocalypse.webp"
      },
      {
        "id": "ba-l2177",
        "name": "Guerrier Samouraï",
        "ref": "L2#177",
        "img": "https://wankul.fr/cdn/shop/files/guerrier_samourai.webp"
      },
      {
        "id": "ba-l2178",
        "name": "Guerrier Samouraï",
        "ref": "L2#178",
        "img": "https://wankul.fr/cdn/shop/files/guerrier_samourai.webp"
      }
    ],
    "legendaire-or": [
      {
        "id": "ba-l3179",
        "name": "Motard",
        "ref": "L3#179",
        "img": "https://wankul.fr/cdn/shop/files/motard.webp"
      },
      {
        "id": "ba-l3180",
        "name": "Motard",
        "ref": "L3#180",
        "img": "https://wankul.fr/cdn/shop/files/motard.webp"
      }
    ]
  },
  "stellar": {
    "terrain": [
      {
        "id": "st-t1",
        "name": "Ville CyberPunk",
        "ref": "T#1",
        "img": "https://wankul.fr/cdn/shop/files/ville_cyberpunk.webp"
      },
      {
        "id": "st-t2",
        "name": "Lucky Block",
        "ref": "T#2",
        "img": "https://wankul.fr/cdn/shop/files/lucky_block.webp"
      },
      {
        "id": "st-t3",
        "name": "Bunker",
        "ref": "T#3",
        "img": "https://wankul.fr/cdn/shop/files/bunker.webp"
      },
      {
        "id": "st-t4",
        "name": "Salon de coiffure",
        "ref": "T#4",
        "img": "https://wankul.fr/cdn/shop/files/salon_de_coiffure.webp"
      },
      {
        "id": "st-t5",
        "name": "CobbleStone",
        "ref": "T#5",
        "img": "https://wankul.fr/cdn/shop/files/cobblestone.webp"
      },
      {
        "id": "st-t6",
        "name": "Cadeaux de Noël pourris",
        "ref": "T#6",
        "img": "https://wankul.fr/cdn/shop/files/cadeaux_de_noel_pourris.webp"
      },
      {
        "id": "st-t7",
        "name": "Planque des Albanais",
        "ref": "T#7",
        "img": "https://wankul.fr/cdn/shop/files/planque_des_albanais.webp"
      },
      {
        "id": "st-t8",
        "name": "Toreba",
        "ref": "T#8",
        "img": "https://wankul.fr/cdn/shop/files/toreba.webp"
      },
      {
        "id": "st-t9",
        "name": "Séance Ciné",
        "ref": "T#9",
        "img": "https://wankul.fr/cdn/shop/files/seance_cine.webp"
      },
      {
        "id": "st-t10",
        "name": "Imprimerie",
        "ref": "T#10",
        "img": "https://wankul.fr/cdn/shop/files/imprimerie.webp"
      },
      {
        "id": "st-t11",
        "name": "Jeu de plateau",
        "ref": "T#11",
        "img": "https://wankul.fr/cdn/shop/files/jeu_de_plateau.webp"
      },
      {
        "id": "st-t12",
        "name": "Bataille de ver",
        "ref": "T#12",
        "img": "https://wankul.fr/cdn/shop/files/bataille_de_ver.webp"
      },
      {
        "id": "st-t13",
        "name": "Vaisseau de traitres",
        "ref": "T#13",
        "img": "https://wankul.fr/cdn/shop/files/vaisseau_de_traitres.webp"
      },
      {
        "id": "st-t14",
        "name": "La grosse conférence",
        "ref": "T#14",
        "img": "https://wankul.fr/cdn/shop/files/la_grosse_conference.webp"
      },
      {
        "id": "st-t15",
        "name": "Only Up",
        "ref": "T#15",
        "img": "https://wankul.fr/cdn/shop/files/only_up.webp"
      },
      {
        "id": "st-t16",
        "name": "Place du village",
        "ref": "T#16",
        "img": "https://wankul.fr/cdn/shop/files/place_du_village.webp"
      },
      {
        "id": "st-t17",
        "name": "Maisons pourries",
        "ref": "T#17",
        "img": "https://wankul.fr/cdn/shop/files/maisons_pourries.webp"
      },
      {
        "id": "st-t18",
        "name": "Isotopium",
        "ref": "T#18",
        "img": "https://wankul.fr/cdn/shop/files/isotopium.webp"
      },
      {
        "id": "st-t19",
        "name": "Die and retry",
        "ref": "T#19",
        "img": "https://wankul.fr/cdn/shop/files/die_and_retry.webp"
      },
      {
        "id": "st-t20",
        "name": "Château des cannibales",
        "ref": "T#20",
        "img": "https://wankul.fr/cdn/shop/files/chateau_des_cannibales.webp"
      },
      {
        "id": "st-t21",
        "name": "Laboratoire",
        "ref": "T#21",
        "img": "https://wankul.fr/cdn/shop/files/laboratoire.webp"
      },
      {
        "id": "st-t22",
        "name": "Tribunal Survivaliste",
        "ref": "T#22",
        "img": "https://wankul.fr/cdn/shop/files/tribunal_survivaliste.webp"
      },
      {
        "id": "st-t23",
        "name": "Hopital Infecté",
        "ref": "T#23",
        "img": "https://wankul.fr/cdn/shop/files/hopital_infecte.webp"
      },
      {
        "id": "st-t24",
        "name": "Cabane aux secrets",
        "ref": "T#24",
        "img": "https://wankul.fr/cdn/shop/files/cabane_aux_secrets.webp"
      },
      {
        "id": "st-t25",
        "name": "Coloscopie",
        "ref": "T#25",
        "img": "https://wankul.fr/cdn/shop/files/coloscopie.webp"
      },
      {
        "id": "st-t26",
        "name": "FanFiction",
        "ref": "T#26",
        "img": "https://wankul.fr/cdn/shop/files/fanfiction.webp"
      },
      {
        "id": "st-t27",
        "name": "Placard à goûters",
        "ref": "T#27",
        "img": "https://wankul.fr/cdn/shop/files/placard_a_gouters.webp"
      },
      {
        "id": "st-t28",
        "name": "Trouvez Laink et Terracid",
        "ref": "T#28",
        "img": "https://wankul.fr/cdn/shop/files/trouvez_laink_et_terracid.webp"
      },
      {
        "id": "st-t29",
        "name": "Fromagerie",
        "ref": "T#29",
        "img": "https://wankul.fr/cdn/shop/files/fromagerie.webp"
      },
      {
        "id": "st-t30",
        "name": "Charcuterie",
        "ref": "T#30",
        "img": "https://wankul.fr/cdn/shop/files/charcuterie.webp"
      }
    ],
    "commune": [
      {
        "id": "st-c31",
        "name": "Pizzaïolo",
        "ref": "C#31",
        "img": "https://wankul.fr/cdn/shop/files/pizzaiolo.webp"
      },
      {
        "id": "st-c32",
        "name": "Pizzaïolo",
        "ref": "C#32",
        "img": "https://wankul.fr/cdn/shop/files/pizzaiolo.webp"
      },
      {
        "id": "st-c33",
        "name": "Jeu de la chaussure",
        "ref": "C#33",
        "img": "https://wankul.fr/cdn/shop/files/jeu_de_la_chaussure.webp"
      },
      {
        "id": "st-c34",
        "name": "Jeu de la chaussure",
        "ref": "C#34",
        "img": "https://wankul.fr/cdn/shop/files/jeu_de_la_chaussure.webp"
      },
      {
        "id": "st-c35",
        "name": "Stick Fight",
        "ref": "C#35",
        "img": "https://wankul.fr/cdn/shop/files/stick_fight.webp"
      },
      {
        "id": "st-c36",
        "name": "Stick Fight",
        "ref": "C#36",
        "img": "https://wankul.fr/cdn/shop/files/stick_fight.webp"
      },
      {
        "id": "st-c37",
        "name": "Gastro-Entérologue",
        "ref": "C#37",
        "img": "https://wankul.fr/cdn/shop/files/gastro_enterologue.webp"
      },
      {
        "id": "st-c38",
        "name": "Gastro-Entérologue",
        "ref": "C#38",
        "img": "https://wankul.fr/cdn/shop/files/gastro_enterologue.webp"
      },
      {
        "id": "st-c39",
        "name": "Contenu Dangereux",
        "ref": "C#39",
        "img": "https://wankul.fr/cdn/shop/files/contenu_dangereux.webp"
      },
      {
        "id": "st-c40",
        "name": "Contenu Dangereux",
        "ref": "C#40",
        "img": "https://wankul.fr/cdn/shop/files/contenu_dangereux.webp"
      },
      {
        "id": "st-c41",
        "name": "Belge",
        "ref": "C#41",
        "img": "https://wankul.fr/cdn/shop/files/belge.webp"
      },
      {
        "id": "st-c42",
        "name": "Belge",
        "ref": "C#42",
        "img": "https://wankul.fr/cdn/shop/files/belge.webp"
      },
      {
        "id": "st-c43",
        "name": "ASMR",
        "ref": "C#43",
        "img": "https://wankul.fr/cdn/shop/files/asmr.webp"
      },
      {
        "id": "st-c44",
        "name": "ASMR",
        "ref": "C#44",
        "img": "https://wankul.fr/cdn/shop/files/asmr.webp"
      },
      {
        "id": "st-c45",
        "name": "Adolescent",
        "ref": "C#45",
        "img": "https://wankul.fr/cdn/shop/files/adolescent.webp"
      },
      {
        "id": "st-c46",
        "name": "Adolescent",
        "ref": "C#46",
        "img": "https://wankul.fr/cdn/shop/files/adolescent.webp"
      },
      {
        "id": "st-c47",
        "name": "Combattant de glace",
        "ref": "C#47",
        "img": "https://wankul.fr/cdn/shop/files/combattant_de_glace.webp"
      },
      {
        "id": "st-c48",
        "name": "Combattant de feu",
        "ref": "C#48",
        "img": "https://wankul.fr/cdn/shop/files/combattant_de_feu.webp"
      },
      {
        "id": "st-c49",
        "name": "Madame Falzar",
        "ref": "C#49",
        "img": "https://wankul.fr/cdn/shop/files/madame_falzar.webp"
      },
      {
        "id": "st-c50",
        "name": "À la recherche du respect",
        "ref": "C#50",
        "img": "https://wankul.fr/cdn/shop/files/a_la_recherche_du_respect.webp"
      },
      {
        "id": "st-c51",
        "name": "Timmy",
        "ref": "C#51",
        "img": "https://wankul.fr/cdn/shop/files/timmy.webp"
      },
      {
        "id": "st-c52",
        "name": "Kevin",
        "ref": "C#52",
        "img": "https://wankul.fr/cdn/shop/files/kevin.webp"
      },
      {
        "id": "st-c53",
        "name": "Challenger Battle Royal",
        "ref": "C#53",
        "img": "https://wankul.fr/cdn/shop/files/challenger_battle_royal.webp"
      },
      {
        "id": "st-c54",
        "name": "Challenger Battle Royal",
        "ref": "C#54",
        "img": "https://wankul.fr/cdn/shop/files/challenger_battle_royal.webp"
      },
      {
        "id": "st-c55",
        "name": "Chef Kebab",
        "ref": "C#55",
        "img": "https://wankul.fr/cdn/shop/files/chef_kebab.webp"
      },
      {
        "id": "st-c56",
        "name": "Chef Kebab",
        "ref": "C#56",
        "img": "https://wankul.fr/cdn/shop/files/chef_kebab.webp"
      },
      {
        "id": "st-c57",
        "name": "Pompiste",
        "ref": "C#57",
        "img": "https://wankul.fr/cdn/shop/files/pompiste.webp"
      },
      {
        "id": "st-c58",
        "name": "Pompiste",
        "ref": "C#58",
        "img": "https://wankul.fr/cdn/shop/files/pompiste.webp"
      },
      {
        "id": "st-c59",
        "name": "Boulanger",
        "ref": "C#59",
        "img": "https://wankul.fr/cdn/shop/files/boulanger.webp"
      },
      {
        "id": "st-c60",
        "name": "Boulanger",
        "ref": "C#60",
        "img": "https://wankul.fr/cdn/shop/files/boulanger.webp"
      },
      {
        "id": "st-c61",
        "name": "Tarot",
        "ref": "C#61",
        "img": "https://wankul.fr/cdn/shop/files/tarot.webp"
      },
      {
        "id": "st-c62",
        "name": "Tarot",
        "ref": "C#62",
        "img": "https://wankul.fr/cdn/shop/files/tarot.webp"
      },
      {
        "id": "st-c63",
        "name": "Titanic",
        "ref": "C#63",
        "img": "https://wankul.fr/cdn/shop/files/titanic.webp"
      },
      {
        "id": "st-c64",
        "name": "Titanic",
        "ref": "C#64",
        "img": "https://wankul.fr/cdn/shop/files/titanic.webp"
      },
      {
        "id": "st-c65",
        "name": "Vampire",
        "ref": "C#65",
        "img": "https://wankul.fr/cdn/shop/files/vampire.webp"
      },
      {
        "id": "st-c66",
        "name": "Vampire",
        "ref": "C#66",
        "img": "https://wankul.fr/cdn/shop/files/vampire.webp"
      },
      {
        "id": "st-c67",
        "name": "Clown",
        "ref": "C#67",
        "img": "https://wankul.fr/cdn/shop/files/clown.webp"
      },
      {
        "id": "st-c68",
        "name": "Clown",
        "ref": "C#68",
        "img": "https://wankul.fr/cdn/shop/files/clown.webp"
      },
      {
        "id": "st-c69",
        "name": "Requin",
        "ref": "C#69",
        "img": "https://wankul.fr/cdn/shop/files/requin.webp"
      },
      {
        "id": "st-c70",
        "name": "Requin",
        "ref": "C#70",
        "img": "https://wankul.fr/cdn/shop/files/requin.webp"
      },
      {
        "id": "st-c71",
        "name": "Simon Puech",
        "ref": "C#71",
        "img": "https://wankul.fr/cdn/shop/files/simon_puech.webp"
      },
      {
        "id": "st-c72",
        "name": "Ninjaxx",
        "ref": "C#72",
        "img": "https://wankul.fr/cdn/shop/files/ninjaxx.webp"
      },
      {
        "id": "st-c73",
        "name": "Flamby",
        "ref": "C#73",
        "img": "https://wankul.fr/cdn/shop/files/flamby.webp"
      },
      {
        "id": "st-c74",
        "name": "Siphano",
        "ref": "C#74",
        "img": "https://wankul.fr/cdn/shop/files/siphano.webp"
      },
      {
        "id": "st-c75",
        "name": "KennyStream",
        "ref": "C#75",
        "img": "https://wankul.fr/cdn/shop/files/kennystream.webp"
      },
      {
        "id": "st-c76",
        "name": "Rot devant le PC",
        "ref": "C#76",
        "img": "https://wankul.fr/cdn/shop/files/rot_devant_le_pc.webp"
      },
      {
        "id": "st-c77",
        "name": "Dessin Romantique",
        "ref": "C#77",
        "img": "https://wankul.fr/cdn/shop/files/dessin_romantique.webp"
      },
      {
        "id": "st-c78",
        "name": "Dessin Romantique",
        "ref": "C#78",
        "img": "https://wankul.fr/cdn/shop/files/dessin_romantique.webp"
      },
      {
        "id": "st-c79",
        "name": "Poule à modeler",
        "ref": "C#79",
        "img": "https://wankul.fr/cdn/shop/files/poule_a_modeler.webp"
      },
      {
        "id": "st-c80",
        "name": "Coq à modeler",
        "ref": "C#80",
        "img": "https://wankul.fr/cdn/shop/files/coq_a_modeler.webp"
      }
    ],
    "peu-commune": [
      {
        "id": "st-uc81",
        "name": "Magicien",
        "ref": "UC#81",
        "img": "https://wankul.fr/cdn/shop/files/magicien.webp"
      },
      {
        "id": "st-uc82",
        "name": "Magicien",
        "ref": "UC#82",
        "img": "https://wankul.fr/cdn/shop/files/magicien.webp"
      },
      {
        "id": "st-uc83",
        "name": "Linky",
        "ref": "UC#83",
        "img": "https://wankul.fr/cdn/shop/files/linky.webp"
      },
      {
        "id": "st-uc84",
        "name": "Terraa-Raa",
        "ref": "UC#84",
        "img": "https://wankul.fr/cdn/shop/files/terraa_raa.webp"
      },
      {
        "id": "st-uc85",
        "name": "Québécois",
        "ref": "UC#85",
        "img": "https://wankul.fr/cdn/shop/files/quebecois.webp"
      },
      {
        "id": "st-uc86",
        "name": "Québécois",
        "ref": "UC#86",
        "img": "https://wankul.fr/cdn/shop/files/quebecois.webp"
      },
      {
        "id": "st-uc87",
        "name": "Survivante Tranchante",
        "ref": "UC#87",
        "img": "https://wankul.fr/cdn/shop/files/survivante_tranchante.webp"
      },
      {
        "id": "st-uc88",
        "name": "Biker de l'apocalypse",
        "ref": "UC#88",
        "img": "https://wankul.fr/cdn/shop/files/biker_de_l_apocalypse.webp"
      },
      {
        "id": "st-uc89",
        "name": "Cauchemar",
        "ref": "UC#89",
        "img": "https://wankul.fr/cdn/shop/files/cauchemar.webp"
      },
      {
        "id": "st-uc90",
        "name": "Cauchemar",
        "ref": "UC#90",
        "img": "https://wankul.fr/cdn/shop/files/cauchemar.webp"
      },
      {
        "id": "st-uc91",
        "name": "Ver de terre",
        "ref": "UC#91",
        "img": "https://wankul.fr/cdn/shop/files/ver_de_terre.webp"
      },
      {
        "id": "st-uc92",
        "name": "Aigle",
        "ref": "UC#92",
        "img": "https://wankul.fr/cdn/shop/files/aigle.webp"
      },
      {
        "id": "st-uc93",
        "name": "Harder",
        "ref": "UC#93",
        "img": "https://wankul.fr/cdn/shop/files/harder.webp"
      },
      {
        "id": "st-uc94",
        "name": "Better",
        "ref": "UC#94",
        "img": "https://wankul.fr/cdn/shop/files/better.webp"
      },
      {
        "id": "st-uc95",
        "name": "Suisse",
        "ref": "UC#95",
        "img": "https://wankul.fr/cdn/shop/files/suisse.webp"
      },
      {
        "id": "st-uc96",
        "name": "Suisse",
        "ref": "UC#96",
        "img": "https://wankul.fr/cdn/shop/files/suisse.webp"
      },
      {
        "id": "st-uc97",
        "name": "Tableau D'attente",
        "ref": "UC#97",
        "img": "https://wankul.fr/cdn/shop/files/tableau_d_attente.webp"
      },
      {
        "id": "st-uc98",
        "name": "Tableau D'attente",
        "ref": "UC#98",
        "img": "https://wankul.fr/cdn/shop/files/tableau_d_attente.webp"
      },
      {
        "id": "st-uc99",
        "name": "CyberSoldat",
        "ref": "UC#99",
        "img": "https://wankul.fr/cdn/shop/files/cybersoldat.webp"
      },
      {
        "id": "st-uc100",
        "name": "CyberSoldat",
        "ref": "UC#100",
        "img": "https://wankul.fr/cdn/shop/files/cybersoldat.webp"
      },
      {
        "id": "st-uc101",
        "name": "Tatouage",
        "ref": "UC#101",
        "img": "https://wankul.fr/cdn/shop/files/tatouage.webp"
      },
      {
        "id": "st-uc102",
        "name": "Tatouage",
        "ref": "UC#102",
        "img": "https://wankul.fr/cdn/shop/files/tatouage.webp"
      },
      {
        "id": "st-uc103",
        "name": "André Burger",
        "ref": "UC#103",
        "img": "https://wankul.fr/cdn/shop/files/andre_burger.webp"
      },
      {
        "id": "st-uc104",
        "name": "Robert Paté",
        "ref": "UC#104",
        "img": "https://wankul.fr/cdn/shop/files/robert_pate.webp"
      },
      {
        "id": "st-uc105",
        "name": "Titan Calvasse",
        "ref": "UC#105",
        "img": "https://wankul.fr/cdn/shop/files/titan_calvasse.webp"
      },
      {
        "id": "st-uc106",
        "name": "Titan Décapsuleur",
        "ref": "UC#106",
        "img": "https://wankul.fr/cdn/shop/files/titan_decapsuleur.webp"
      },
      {
        "id": "st-uc107",
        "name": "Voyante",
        "ref": "UC#107",
        "img": "https://wankul.fr/cdn/shop/files/voyante.webp"
      },
      {
        "id": "st-uc108",
        "name": "Voyante",
        "ref": "UC#108",
        "img": "https://wankul.fr/cdn/shop/files/voyante.webp"
      },
      {
        "id": "st-uc109",
        "name": "Bezigue",
        "ref": "UC#109",
        "img": "https://wankul.fr/cdn/shop/files/bezigue.webp"
      },
      {
        "id": "st-uc110",
        "name": "Gurky",
        "ref": "UC#110",
        "img": "https://wankul.fr/cdn/shop/files/gurky.webp"
      },
      {
        "id": "st-uc111",
        "name": "Gitan",
        "ref": "UC#111",
        "img": "https://wankul.fr/cdn/shop/files/gitan.webp"
      },
      {
        "id": "st-uc112",
        "name": "Gitan",
        "ref": "UC#112",
        "img": "https://wankul.fr/cdn/shop/files/gitan.webp"
      },
      {
        "id": "st-uc113",
        "name": "DWARF",
        "ref": "UC#113",
        "img": "https://wankul.fr/cdn/shop/files/dwarf.webp"
      },
      {
        "id": "st-uc114",
        "name": "DWARF",
        "ref": "UC#114",
        "img": "https://wankul.fr/cdn/shop/files/dwarf.webp"
      },
      {
        "id": "st-uc115",
        "name": "Réaliste",
        "ref": "UC#115",
        "img": "https://wankul.fr/cdn/shop/files/realiste.webp"
      },
      {
        "id": "st-uc116",
        "name": "Réaliste",
        "ref": "UC#116",
        "img": "https://wankul.fr/cdn/shop/files/realiste.webp"
      },
      {
        "id": "st-uc117",
        "name": "Collectionneur",
        "ref": "UC#117",
        "img": "https://wankul.fr/cdn/shop/files/collectionneur.webp"
      },
      {
        "id": "st-uc118",
        "name": "Collectionneur",
        "ref": "UC#118",
        "img": "https://wankul.fr/cdn/shop/files/collectionneur.webp"
      },
      {
        "id": "st-uc119",
        "name": "Traitre",
        "ref": "UC#119",
        "img": "https://wankul.fr/cdn/shop/files/traitre.webp"
      },
      {
        "id": "st-uc120",
        "name": "Traitre",
        "ref": "UC#120",
        "img": "https://wankul.fr/cdn/shop/files/traitre.webp"
      },
      {
        "id": "st-uc121",
        "name": "Nikodim",
        "ref": "UC#121",
        "img": "https://wankul.fr/cdn/shop/files/nikodim.webp"
      },
      {
        "id": "st-uc122",
        "name": "Bibi",
        "ref": "UC#122",
        "img": "https://wankul.fr/cdn/shop/files/bibi.webp"
      },
      {
        "id": "st-uc123",
        "name": "Kotei",
        "ref": "UC#123",
        "img": "https://wankul.fr/cdn/shop/files/kotei.webp"
      },
      {
        "id": "st-uc124",
        "name": "Kameto",
        "ref": "UC#124",
        "img": "https://wankul.fr/cdn/shop/files/kameto.webp"
      },
      {
        "id": "st-uc125",
        "name": "SteamPunk",
        "ref": "UC#125",
        "img": "https://wankul.fr/cdn/shop/files/steampunk.webp"
      },
      {
        "id": "st-uc126",
        "name": "SteamPunk",
        "ref": "UC#126",
        "img": "https://wankul.fr/cdn/shop/files/steampunk.webp"
      },
      {
        "id": "st-uc127",
        "name": "CyberPixel",
        "ref": "UC#127",
        "img": "https://wankul.fr/cdn/shop/files/cyberpixel.webp"
      },
      {
        "id": "st-uc128",
        "name": "CyberPixel",
        "ref": "UC#128",
        "img": "https://wankul.fr/cdn/shop/files/cyberpixel.webp"
      },
      {
        "id": "st-uc129",
        "name": "Jacques Boulon",
        "ref": "UC#129",
        "img": "https://wankul.fr/cdn/shop/files/jacques_boulon.webp"
      },
      {
        "id": "st-uc130",
        "name": "Richard Pastel",
        "ref": "UC#130",
        "img": "https://wankul.fr/cdn/shop/files/richard_pastel.webp"
      }
    ],
    "rare": [
      {
        "id": "st-r131",
        "name": "Gold",
        "ref": "R#131",
        "img": "https://wankul.fr/cdn/shop/files/gold.webp"
      },
      {
        "id": "st-r132",
        "name": "Gold",
        "ref": "R#132",
        "img": "https://wankul.fr/cdn/shop/files/gold.webp"
      },
      {
        "id": "st-r133",
        "name": "Enchaînés",
        "ref": "R#133",
        "img": "https://wankul.fr/cdn/shop/files/enchaines.webp"
      },
      {
        "id": "st-r134",
        "name": "Enchaînés",
        "ref": "R#134",
        "img": "https://wankul.fr/cdn/shop/files/enchaines.webp"
      },
      {
        "id": "st-r135",
        "name": "SpeedRunner",
        "ref": "R#135",
        "img": "https://wankul.fr/cdn/shop/files/speedrunner.webp"
      },
      {
        "id": "st-r136",
        "name": "SpeedRunner",
        "ref": "R#136",
        "img": "https://wankul.fr/cdn/shop/files/speedrunner.webp"
      },
      {
        "id": "st-r137",
        "name": "Assassin du passé",
        "ref": "R#137",
        "img": "https://wankul.fr/cdn/shop/files/assassin_du_passe.webp"
      },
      {
        "id": "st-r138",
        "name": "Assassin du passé",
        "ref": "R#138",
        "img": "https://wankul.fr/cdn/shop/files/assassin_du_passe.webp"
      },
      {
        "id": "st-r139",
        "name": "Survivant D'abri",
        "ref": "R#139",
        "img": "https://wankul.fr/cdn/shop/files/survivant_d_abri.webp"
      },
      {
        "id": "st-r140",
        "name": "Goule",
        "ref": "R#140",
        "img": "https://wankul.fr/cdn/shop/files/goule.webp"
      },
      {
        "id": "st-r141",
        "name": "Routier de l'extrême",
        "ref": "R#141",
        "img": "https://wankul.fr/cdn/shop/files/routier_de_l_extreme.webp"
      },
      {
        "id": "st-r142",
        "name": "Routier de l'extrême",
        "ref": "R#142",
        "img": "https://wankul.fr/cdn/shop/files/routier_de_l_extreme.webp"
      },
      {
        "id": "st-r143",
        "name": "Robot",
        "ref": "R#143",
        "img": "https://wankul.fr/cdn/shop/files/robot.webp"
      },
      {
        "id": "st-r144",
        "name": "Robot",
        "ref": "R#144",
        "img": "https://wankul.fr/cdn/shop/files/robot.webp"
      },
      {
        "id": "st-r145",
        "name": "La Faucheuse",
        "ref": "R#145",
        "img": "https://wankul.fr/cdn/shop/files/la_faucheuse.webp"
      },
      {
        "id": "st-r146",
        "name": "La Faucheuse",
        "ref": "R#146",
        "img": "https://wankul.fr/cdn/shop/files/la_faucheuse.webp"
      },
      {
        "id": "st-r147",
        "name": "Dénué D'éclat",
        "ref": "R#147",
        "img": "https://wankul.fr/cdn/shop/files/denue_d_eclat.webp"
      },
      {
        "id": "st-r148",
        "name": "Dénué D'éclat",
        "ref": "R#148",
        "img": "https://wankul.fr/cdn/shop/files/denue_d_eclat.webp"
      },
      {
        "id": "st-r149",
        "name": "La jeune fille à la perle",
        "ref": "R#149",
        "img": "https://wankul.fr/cdn/shop/files/la_jeune_fille_a_la_perle.webp"
      },
      {
        "id": "st-r150",
        "name": "Le Cri",
        "ref": "R#150",
        "img": "https://wankul.fr/cdn/shop/files/le_cri.webp"
      }
    ],
    "super-rare": [],
    "ultra-rare-holo1": [
      {
        "id": "st-ur151",
        "name": "Titanic",
        "ref": "UR#151",
        "img": "https://wankul.fr/cdn/shop/files/titanic.webp"
      },
      {
        "id": "st-ur152",
        "name": "Titanic",
        "ref": "UR#152",
        "img": "https://wankul.fr/cdn/shop/files/titanic.webp"
      },
      {
        "id": "st-ur153",
        "name": "Titan Calvasse",
        "ref": "UR#153",
        "img": "https://wankul.fr/cdn/shop/files/titan_calvasse.webp"
      },
      {
        "id": "st-ur154",
        "name": "Titan Décapsuleur",
        "ref": "UR#154",
        "img": "https://wankul.fr/cdn/shop/files/titan_decapsuleur.webp"
      },
      {
        "id": "st-ur155",
        "name": "Gurky",
        "ref": "UR#155",
        "img": "https://wankul.fr/cdn/shop/files/gurky.webp"
      },
      {
        "id": "st-ur156",
        "name": "Kameto",
        "ref": "UR#156",
        "img": "https://wankul.fr/cdn/shop/files/kameto.webp"
      },
      {
        "id": "st-ur157",
        "name": "Magicien",
        "ref": "UR#157",
        "img": "https://wankul.fr/cdn/shop/files/magicien.webp"
      },
      {
        "id": "st-ur158",
        "name": "Magicien",
        "ref": "UR#158",
        "img": "https://wankul.fr/cdn/shop/files/magicien.webp"
      },
      {
        "id": "st-ur159",
        "name": "CyberSoldat",
        "ref": "UR#159",
        "img": "https://wankul.fr/cdn/shop/files/cybersoldat.webp"
      },
      {
        "id": "st-ur160",
        "name": "CyberSoldat",
        "ref": "UR#160",
        "img": "https://wankul.fr/cdn/shop/files/cybersoldat.webp"
      }
    ],
    "ultra-rare-holo2": [
      {
        "id": "st-ur161",
        "name": "Requin",
        "ref": "UR#161",
        "img": "https://wankul.fr/cdn/shop/files/requin.webp"
      },
      {
        "id": "st-ur162",
        "name": "Requin",
        "ref": "UR#162",
        "img": "https://wankul.fr/cdn/shop/files/requin.webp"
      },
      {
        "id": "st-ur163",
        "name": "Nikodim",
        "ref": "UR#163",
        "img": "https://wankul.fr/cdn/shop/files/nikodim.webp"
      },
      {
        "id": "st-ur164",
        "name": "À la recherche du respect",
        "ref": "UR#164",
        "img": "https://wankul.fr/cdn/shop/files/a_la_recherche_du_respect.webp"
      },
      {
        "id": "st-ur165",
        "name": "Voyante",
        "ref": "UR#165",
        "img": "https://wankul.fr/cdn/shop/files/voyante.webp"
      },
      {
        "id": "st-ur166",
        "name": "Voyante",
        "ref": "UR#166",
        "img": "https://wankul.fr/cdn/shop/files/voyante.webp"
      },
      {
        "id": "st-ur167",
        "name": "Réaliste",
        "ref": "UR#167",
        "img": "https://wankul.fr/cdn/shop/files/realiste.webp"
      },
      {
        "id": "st-ur168",
        "name": "Réaliste",
        "ref": "UR#168",
        "img": "https://wankul.fr/cdn/shop/files/realiste.webp"
      }
    ],
    "legendaire-bronze": [
      {
        "id": "st-l1169",
        "name": "Tableau D'attente",
        "ref": "L1#169",
        "img": "https://wankul.fr/cdn/shop/files/tableau_d_attente.webp"
      },
      {
        "id": "st-l1170",
        "name": "Tableau D'attente",
        "ref": "L1#170",
        "img": "https://wankul.fr/cdn/shop/files/tableau_d_attente.webp"
      },
      {
        "id": "st-l1171",
        "name": "Tarot",
        "ref": "L1#171",
        "img": "https://wankul.fr/cdn/shop/files/tarot.webp"
      },
      {
        "id": "st-l1172",
        "name": "Tarot",
        "ref": "L1#172",
        "img": "https://wankul.fr/cdn/shop/files/tarot.webp"
      },
      {
        "id": "st-l1173",
        "name": "Jacques Boulon",
        "ref": "L1#173",
        "img": "https://wankul.fr/cdn/shop/files/jacques_boulon.webp"
      },
      {
        "id": "st-l1174",
        "name": "Richard Pastel",
        "ref": "L1#174",
        "img": "https://wankul.fr/cdn/shop/files/richard_pastel.webp"
      }
    ],
    "legendaire-argent": [
      {
        "id": "st-l2175",
        "name": "La Faucheuse",
        "ref": "L2#175",
        "img": "https://wankul.fr/cdn/shop/files/la_faucheuse.webp"
      },
      {
        "id": "st-l2176",
        "name": "La Faucheuse",
        "ref": "L2#176",
        "img": "https://wankul.fr/cdn/shop/files/la_faucheuse.webp"
      },
      {
        "id": "st-l2177",
        "name": "Dénué D'éclat",
        "ref": "L2#177",
        "img": "https://wankul.fr/cdn/shop/files/denue_d_eclat.webp"
      },
      {
        "id": "st-l2178",
        "name": "Dénué D'éclat",
        "ref": "L2#178",
        "img": "https://wankul.fr/cdn/shop/files/denue_d_eclat.webp"
      }
    ],
    "legendaire-or": [
      {
        "id": "st-l3179",
        "name": "La jeune fille à la perle",
        "ref": "L3#179",
        "img": "https://wankul.fr/cdn/shop/files/la_jeune_fille_a_la_perle.webp"
      },
      {
        "id": "st-l3180",
        "name": "Le Cri",
        "ref": "L3#180",
        "img": "https://wankul.fr/cdn/shop/files/le_cri.webp"
      }
    ]
  }
};

// ─── Construit l'URL image d'une carte ──────────
function cardImg(card) {
  return card.img || 'img/card-placeholder.png';
}

// ─── Tirage booster officiel (10 cartes) ────────
function drawBooster(sid) {
  const p = POOL[sid] || POOL.origins;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const result = [];
  result.push({...pick(p.terrain),       slot:'terrain',    isFoil: Math.random()<0.05});
  for(let i=0;i<4;i++) result.push({...pick(p.commune),     slot:'commune',    isFoil: Math.random()<0.02});
  for(let i=0;i<3;i++) result.push({...pick(p['peu-commune']), slot:'peu-commune', isFoil: Math.random()<0.04});
  const ru = Math.random();
  const rSlot = ru<0.02?'super-rare':ru<0.04?'ultra-rare-holo1':'rare';
  result.push({...pick(p[rSlot]||p.rare), slot:rSlot, isFoil: ru<0.01});
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
  const user = getUser(); if (!user) return;
  const grouped = {};
  for (const c of cards) {
    const key = c.isFoil ? `${c.id}-foil` : c.id;
    if (!grouped[key]) grouped[key] = { ...c, quantity: 0, card_id: key };
    grouped[key].quantity++;
  }
  for (const entry of Object.values(grouped)) {
    const existing = await sbFetch(`user_cards?user_id=eq.${user.id}&card_id=eq.${entry.card_id}&select=id,quantity`).catch(() => []);
    if (existing && existing.length > 0) {
      await sbFetch(`user_cards?id=eq.${existing[0].id}`, { method:'PATCH', body: JSON.stringify({ quantity: existing[0].quantity + entry.quantity }) });
    } else {
      await sbFetch('user_cards', { method:'POST', body: JSON.stringify({ user_id:user.id, card_id:entry.card_id, series:entry.seriesId||entry.slot, rarity:entry.slot, card_name:entry.name, quantity:entry.quantity }) });
    }
  }
}
async function saveBoosterHistory(seriesId, cards) {
  const user = getUser(); if (!user) return;
  await sbFetch('booster_history', { method:'POST', body: JSON.stringify({ user_id:user.id, series:seriesId, cards }) });
}
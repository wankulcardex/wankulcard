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

// ─── Données des cartes Wankul ──────────────────
const WANKUL_DATA = {
  series: [
    {
      id: 'origins',
      name: 'Origins',
      season: 'Saison 1',
      color: '#FF6B35',
      bg: 'linear-gradient(135deg,#1a0a00,#3d1500)',
      totalCards: 182,
      description: 'Pop Culture, Carrières — les premiers délires de Laink & Terracid.',
      boosterPrice: 5,
    },
    {
      id: 'campus',
      name: 'Campus',
      season: 'Saison 2',
      color: '#0099FF',
      bg: 'linear-gradient(135deg,#00091a,#001a3d)',
      totalCards: 162,
      description: 'Légendes et Civilisations. L\'univers s\'agrandit.',
      boosterPrice: 5,
    },
    {
      id: 'battle',
      name: 'Battle',
      season: 'Saison 3',
      color: '#E8001D',
      bg: 'linear-gradient(135deg,#1a0005,#3d0010)',
      totalCards: 185,
      description: 'TV, Jeux Vidéo et le légendaire Booster Gold.',
      boosterPrice: 5,
      isNew: true,
    },
    {
      id: 'hors-serie',
      name: 'Hors Série',
      season: 'Hors Série',
      color: '#9B59B6',
      bg: 'linear-gradient(135deg,#0d0015,#200033)',
      totalCards: 25,
      description: '25 cartes exclusives issues d\'événements spéciaux.',
      boosterPrice: 8,
    }
  ],

  rarities: [
    { id: 'commune',      label: 'Commune',      color: '#9E9E9E', rate: 0.45, foilRate: 0.01 },
    { id: 'peu-commune',  label: 'Peu Commune',  color: '#4CAF50', rate: 0.28, foilRate: 0.02 },
    { id: 'rare',         label: 'Rare',         color: '#2196F3', rate: 0.15, foilRate: 0.03 },
    { id: 'super-rare',   label: 'Super Rare',   color: '#9B59B6', rate: 0.07, foilRate: 0.05 },
    { id: 'ultra-rare',   label: 'Ultra Rare',   color: '#FFD600', rate: 0.04, foilRate: 0.08 },
    { id: 'legendaire',   label: 'Légendaire',   color: '#E8001D', rate: 0.01, foilRate: 0.15 },
  ],

  // Cartes de démo (en prod, tu les charges depuis ta DB)
  cards: {
    origins: [
      { id:'s1-001', name:'Laink', rarity:'legendaire',   emoji:'👑' },
      { id:'s1-002', name:'Terracid', rarity:'legendaire', emoji:'🔥' },
      { id:'s1-003', name:'Superconeri', rarity:'ultra-rare', emoji:'⚡' },
      { id:'s1-004', name:'Rog', rarity:'super-rare',    emoji:'🎮' },
      { id:'s1-005', name:'Joueur du Dimanche', rarity:'super-rare', emoji:'🕹️' },
      { id:'s1-006', name:'Locklear', rarity:'rare',      emoji:'🎯' },
      { id:'s1-007', name:'ZeratoR', rarity:'rare',       emoji:'💎' },
      { id:'s1-008', name:'Sardoche', rarity:'rare',      emoji:'🃏' },
      { id:'s1-009', name:'Kameto', rarity:'peu-commune', emoji:'🦊' },
      { id:'s1-010', name:'Maghla', rarity:'peu-commune', emoji:'🌙' },
      { id:'s1-011', name:'Squeezie', rarity:'peu-commune', emoji:'🎵' },
      { id:'s1-012', name:'Gotaga', rarity:'commune',     emoji:'⭐' },
      { id:'s1-013', name:'Lena', rarity:'commune',       emoji:'🌸' },
      { id:'s1-014', name:'Domingo', rarity:'commune',    emoji:'🎲' },
      { id:'s1-015', name:'Mister V', rarity:'commune',   emoji:'😎' },
      { id:'s1-016', name:'Amixem', rarity:'commune',     emoji:'🎬' },
    ],
    campus: [
      { id:'s2-001', name:'Laink Campus', rarity:'legendaire', emoji:'👑' },
      { id:'s2-002', name:'Terracid Campus', rarity:'legendaire', emoji:'🔥' },
      { id:'s2-003', name:'Zeus', rarity:'ultra-rare',    emoji:'⚡' },
      { id:'s2-004', name:'Léonard', rarity:'super-rare', emoji:'🎭' },
      { id:'s2-005', name:'Napoléon', rarity:'super-rare', emoji:'👑' },
      { id:'s2-006', name:'Cléopâtre', rarity:'rare',     emoji:'🌺' },
      { id:'s2-007', name:'Da Vinci', rarity:'rare',      emoji:'🎨' },
      { id:'s2-008', name:'Einstein', rarity:'rare',      emoji:'🔬' },
      { id:'s2-009', name:'Mozart', rarity:'peu-commune', emoji:'🎼' },
      { id:'s2-010', name:'Picasso', rarity:'peu-commune', emoji:'🖼️' },
      { id:'s2-011', name:'Darwin', rarity:'commune',     emoji:'🦋' },
      { id:'s2-012', name:'Newton', rarity:'commune',     emoji:'🍎' },
    ],
    battle: [
      { id:'s3-001', name:'Laink Battle', rarity:'legendaire', emoji:'⚔️' },
      { id:'s3-002', name:'Terracid Battle', rarity:'legendaire', emoji:'🛡️' },
      { id:'s3-003', name:'Gold Laink', rarity:'ultra-rare', emoji:'✨' },
      { id:'s3-004', name:'Mecha Terracid', rarity:'super-rare', emoji:'🤖' },
      { id:'s3-005', name:'Mario', rarity:'super-rare',   emoji:'🍄' },
      { id:'s3-006', name:'Pikachu', rarity:'rare',       emoji:'⚡' },
      { id:'s3-007', name:'Link', rarity:'rare',          emoji:'🗡️' },
      { id:'s3-008', name:'Sonic', rarity:'rare',         emoji:'💨' },
      { id:'s3-009', name:'Naruto', rarity:'peu-commune', emoji:'🍃' },
      { id:'s3-010', name:'Goku', rarity:'peu-commune',   emoji:'💪' },
      { id:'s3-011', name:'Luffy', rarity:'commune',      emoji:'⚓' },
      { id:'s3-012', name:'Eren', rarity:'commune',       emoji:'⚡' },
    ],
    'hors-serie': [
      { id:'hs-001', name:'Laink HS Gold', rarity:'legendaire', emoji:'🏆' },
      { id:'hs-002', name:'Terracid HS Gold', rarity:'legendaire', emoji:'💰' },
      { id:'hs-003', name:'Exclusive Alpha', rarity:'ultra-rare', emoji:'💫' },
      { id:'hs-004', name:'Event Special', rarity:'super-rare', emoji:'🎪' },
    ]
  }
};

// ─── Tirage booster ─────────────────────────────
function openBooster(seriesId) {
  const pool = WANKUL_DATA.cards[seriesId] || [];
  const rarities = WANKUL_DATA.rarities;
  const result = [];

  for (let i = 0; i < 8; i++) {
    const rand = Math.random();
    let cumul = 0;
    let chosenRarity = rarities[0];
    for (const r of rarities) {
      cumul += r.rate;
      if (rand <= cumul) { chosenRarity = r; break; }
    }
    // Filtre les cartes de cette rareté
    const candidates = pool.filter(c => c.rarity === chosenRarity.id);
    const base = candidates.length
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : pool[Math.floor(Math.random() * pool.length)];

    const isFoil = Math.random() < chosenRarity.foilRate;
    result.push({ ...base, isFoil, seriesId });
  }
  return result;
}

// ─── Sauvegarder cartes en DB ───────────────────
async function saveCardsToCollection(cards) {
  const user = getUser();
  if (!user) return;

  // Grouper par card_id pour quantity
  const grouped = {};
  for (const c of cards) {
    const key = c.isFoil ? `${c.id}-foil` : c.id;
    if (!grouped[key]) grouped[key] = { ...c, quantity: 0, card_id: key };
    grouped[key].quantity++;
  }

  for (const entry of Object.values(grouped)) {
    // Upsert : si la carte existe déjà, on incrémente
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
          rarity: entry.rarity,
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

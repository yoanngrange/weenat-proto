export function generateSeasonId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

const IRRIG_KEY = 'weenat-irrigations-v3'

const S1 = 'default-mais-pivot'
const S2 = 'default-pdterre-enrouleur'
const S3 = 'default-cerisier-gag'
const S4 = 'default-salade-couv'
const S5 = 'default-courtils-asp'
const S6 = 'default-fraise-masp'

const DEFAULT_SEASON = [
  // Les Trois Arpents (id:2) — Maïs, Pivot
  { iso: '2026-04-21', mm: 18, real: true,  plotId: 2,  fromStrategy: true,  seasonId: S1 },
  { iso: '2026-05-04', mm: 20, real: true,  plotId: 2,  fromStrategy: true,  seasonId: S1 },
  { iso: '2026-05-11', mm: 30, real: true,  plotId: 2,  fromStrategy: true,  seasonId: S1 },
  { iso: '2026-05-21', mm: 25, real: true,  plotId: 2,  fromStrategy: true,  seasonId: S1 },
  { iso: '2026-05-28', mm: 30, real: false, plotId: 2,  fromStrategy: true,  seasonId: S1 },
  { iso: '2026-06-04', mm: 25, real: false, plotId: 2,  fromStrategy: true,  seasonId: S1 },
  { iso: '2026-06-11', mm: 30, real: false, plotId: 2,  fromStrategy: true,  seasonId: S1 },
  // La Grande Pièce (id:5) — Pomme de terre, Enrouleur
  { iso: '2026-04-30', mm: 22, real: true,  plotId: 5,  fromStrategy: true,  seasonId: S2 },
  { iso: '2026-05-14', mm: 20, real: true,  plotId: 5,  fromStrategy: true,  seasonId: S2 },
  { iso: '2026-05-25', mm: 18, real: false, plotId: 5,  fromStrategy: true,  seasonId: S2 },
  { iso: '2026-06-06', mm: 20, real: false, plotId: 5,  fromStrategy: true,  seasonId: S2 },
  // Le Marais Bas (id:9) — Cerisier, Goutte à goutte
  { iso: '2026-05-08', mm: 10, real: true,  plotId: 9,  fromStrategy: true,  seasonId: S3 },
  { iso: '2026-05-19', mm: 12, real: true,  plotId: 9,  fromStrategy: true,  seasonId: S3 },
  { iso: '2026-05-30', mm: 10, real: false, plotId: 9,  fromStrategy: true,  seasonId: S3 },
  { iso: '2026-06-13', mm: 12, real: false, plotId: 9,  fromStrategy: true,  seasonId: S3 },
  // Le Bois Rond (id:12) — Salade, Couverture intégrale
  { iso: '2026-05-05', mm:  8, real: true,  plotId: 12, fromStrategy: true,  seasonId: S4 },
  { iso: '2026-05-16', mm:  8, real: true,  plotId: 12, fromStrategy: true,  seasonId: S4 },
  { iso: '2026-05-27', mm:  8, real: false, plotId: 12, fromStrategy: true,  seasonId: S4 },
  { iso: '2026-06-07', mm:  8, real: false, plotId: 12, fromStrategy: true,  seasonId: S4 },
  // Les Courtils (id:4)
  { iso: '2026-04-28', mm: 15, real: true,  plotId: 4,  fromStrategy: true,  seasonId: S5 },
  { iso: '2026-05-12', mm: 18, real: true,  plotId: 4,  fromStrategy: true,  seasonId: S5 },
  { iso: '2026-05-23', mm: 20, real: true,  plotId: 4,  fromStrategy: true,  seasonId: S5 },
  { iso: '2026-06-02', mm: 15, real: false, plotId: 4,  fromStrategy: true,  seasonId: S5 },
  { iso: '2026-06-15', mm: 18, real: false, plotId: 4,  fromStrategy: true,  seasonId: S5 },
  // La Petite Lande (id:3) — Fraise, Micro aspersion
  { iso: '2026-05-02', mm:  6, real: true,  plotId: 3,  fromStrategy: true,  seasonId: S6 },
  { iso: '2026-05-09', mm:  8, real: true,  plotId: 3,  fromStrategy: true,  seasonId: S6 },
  { iso: '2026-05-17', mm:  6, real: true,  plotId: 3,  fromStrategy: true,  seasonId: S6 },
  { iso: '2026-05-26', mm:  8, real: true,  plotId: 3,  fromStrategy: true,  seasonId: S6 },
  { iso: '2026-06-03', mm:  8, real: false, plotId: 3,  fromStrategy: true,  seasonId: S6 },
  { iso: '2026-06-12', mm:  6, real: false, plotId: 3,  fromStrategy: true,  seasonId: S6 },
  { iso: '2026-06-21', mm:  8, real: false, plotId: 3,  fromStrategy: true,  seasonId: S6 },
]

let _loaded = null
try { _loaded = JSON.parse(localStorage.getItem(IRRIG_KEY)) } catch {}
export const IRRIG_SEASON = _loaded ?? DEFAULT_SEASON

export const RAIN_DATA = [
  { iso: '2026-04-25', mm: 12 }, { iso: '2026-05-03', mm: 8 },
  { iso: '2026-05-10', mm: 15 }, { iso: '2026-05-17', mm: 5 },
  { iso: '2026-05-26', mm: 10 }, { iso: '2026-06-02', mm: 6 },
]

export function saveIrrig() {
  try { localStorage.setItem(IRRIG_KEY, JSON.stringify(IRRIG_SEASON)) } catch {}
  window.dispatchEvent(new CustomEvent('irrig-updated'))
}

export function buildGroups() { return [] }

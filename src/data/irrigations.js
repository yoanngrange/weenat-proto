import { plots } from './plots.js'

const IRRIG_KEY = 'weenat-irrigations-v2'

const DEFAULT_SEASON = [
  // Maïs · Pivot
  { iso: '2026-04-21', mm: 18, real: true,  label: 'Maïs · Pivot',                  fromStrategy: true },
  { iso: '2026-05-04', mm: 20, real: true,  label: 'Maïs · Pivot',                  fromStrategy: true },
  { iso: '2026-05-11', mm: 30, real: true,  label: 'Maïs · Pivot',                  fromStrategy: true },
  { iso: '2026-05-21', mm: 25, real: true,  label: 'Maïs · Pivot',                  fromStrategy: true },
  { iso: '2026-05-28', mm: 30, real: false, label: 'Maïs · Pivot',                  fromStrategy: true },
  { iso: '2026-06-04', mm: 25, real: false, label: 'Maïs · Pivot',                  fromStrategy: true },
  { iso: '2026-06-11', mm: 30, real: false, label: 'Maïs · Pivot',                  fromStrategy: true },
  // Pomme de terre · Enrouleur
  { iso: '2026-04-30', mm: 22, real: true,  label: 'Pomme de terre · Enrouleur',     fromStrategy: true },
  { iso: '2026-05-14', mm: 20, real: true,  label: 'Pomme de terre · Enrouleur',     fromStrategy: true },
  { iso: '2026-05-25', mm: 18, real: false, label: 'Pomme de terre · Enrouleur',     fromStrategy: true },
  { iso: '2026-06-06', mm: 20, real: false, label: 'Pomme de terre · Enrouleur',     fromStrategy: true },
  // Cerisier · Goutte à goutte
  { iso: '2026-05-08', mm: 10, real: true,  label: 'Cerisier · Goutte à goutte',     fromStrategy: true },
  { iso: '2026-05-19', mm: 12, real: true,  label: 'Cerisier · Goutte à goutte',     fromStrategy: true },
  { iso: '2026-05-30', mm: 10, real: false, label: 'Cerisier · Goutte à goutte',     fromStrategy: true },
  { iso: '2026-06-13', mm: 12, real: false, label: 'Cerisier · Goutte à goutte',     fromStrategy: true },
  // Salade · Couverture intégrale
  { iso: '2026-05-05', mm:  8, real: true,  label: 'Salade · Couverture intégrale',  fromStrategy: true },
  { iso: '2026-05-16', mm:  8, real: true,  label: 'Salade · Couverture intégrale',  fromStrategy: true },
  { iso: '2026-05-27', mm:  8, real: false, label: 'Salade · Couverture intégrale',  fromStrategy: true },
  { iso: '2026-06-07', mm:  8, real: false, label: 'Salade · Couverture intégrale',  fromStrategy: true },
  // Orge · Asperseur
  { iso: '2026-04-28', mm: 15, real: true,  label: 'Orge · Asperseur',               fromStrategy: true },
  { iso: '2026-05-12', mm: 18, real: true,  label: 'Orge · Asperseur',               fromStrategy: true },
  { iso: '2026-05-23', mm: 20, real: true,  label: 'Orge · Asperseur',               fromStrategy: true },
  { iso: '2026-06-02', mm: 15, real: false, label: 'Orge · Asperseur',               fromStrategy: true },
  { iso: '2026-06-15', mm: 18, real: false, label: 'Orge · Asperseur',               fromStrategy: true },
  // Fraise · Micro aspersion
  { iso: '2026-05-02', mm:  6, real: true,  label: 'Fraise · Micro aspersion',       fromStrategy: true },
  { iso: '2026-05-09', mm:  8, real: true,  label: 'Fraise · Micro aspersion',       fromStrategy: true },
  { iso: '2026-05-17', mm:  6, real: true,  label: 'Fraise · Micro aspersion',       fromStrategy: true },
  { iso: '2026-05-26', mm:  8, real: true,  label: 'Fraise · Micro aspersion',       fromStrategy: true },
  { iso: '2026-06-03', mm:  8, real: false, label: 'Fraise · Micro aspersion',       fromStrategy: true },
  { iso: '2026-06-12', mm:  6, real: false, label: 'Fraise · Micro aspersion',       fromStrategy: true },
  { iso: '2026-06-21', mm:  8, real: false, label: 'Fraise · Micro aspersion',       fromStrategy: true },
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

export function buildGroups(plotList) {
  // Pass 1: group by crop + irrigation type
  const cropIrr = {}
  for (const p of plotList) {
    const crop = p.crop
    const irr  = p.irrigation || null
    if (!crop && !irr) continue
    const key = [crop, irr].filter(Boolean).join(' · ')
    if (!cropIrr[key]) cropIrr[key] = { label: key, ids: [] }
    cropIrr[key].ids.push(p.id)
  }
  const ciGroups = Object.values(cropIrr).filter(g => g.ids.length >= 2)
  const ciIds    = new Set(ciGroups.flatMap(g => g.ids))

  // Pass 2: remaining plots grouped by irrigation type only
  const irrOnly = {}
  for (const p of plotList) {
    if (ciIds.has(p.id)) continue
    const irr = p.irrigation || null
    if (!irr) continue
    if (!irrOnly[irr]) irrOnly[irr] = { label: irr, ids: [] }
    irrOnly[irr].ids.push(p.id)
  }
  const ioGroups = Object.values(irrOnly).filter(g => g.ids.length >= 2)

  return [...ciGroups, ...ioGroups]
}

import { plots } from './plots.js'

const IRRIG_KEY = 'weenat-irrigations'

const DEFAULT_SEASON = [
  { iso: '2026-04-21', mm: 18, real: true,  label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-04-28', mm: 22, real: true,  label: 'Maïs · Aspersion', fromStrategy: true },
  { iso: '2026-05-04', mm: 20, real: true,  label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-05-07', mm: 25, real: true,  label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-05-11', mm: 30, real: true,  label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-05-13', mm: 22, real: false, label: 'Maïs · Aspersion', fromStrategy: true },
  { iso: '2026-05-18', mm: 30, real: false, label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-05-21', mm: 25, real: false, label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-05-24', mm: 18, real: false, label: 'Maïs · Aspersion', fromStrategy: true },
  { iso: '2026-05-28', mm: 30, real: false, label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-06-04', mm: 25, real: false, label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-06-11', mm: 30, real: false, label: 'Maïs · Pivot',     fromStrategy: true },
  { iso: '2026-06-18', mm: 25, real: false, label: 'Maïs · Aspersion', fromStrategy: true },
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
}

export function buildGroups(plotList) {
  const m = {}
  for (const p of plotList) {
    const crop = p.crop
    const irr  = p.irrigation && p.irrigation !== "Pas d'irrigation" ? p.irrigation : null
    if (!crop && !irr) continue
    const key = [crop, irr].filter(Boolean).join(' · ')
    if (!m[key]) m[key] = { label: key, ids: [] }
    m[key].ids.push(p.id)
  }
  return Object.values(m).filter(g => g.ids.length >= 2)
}

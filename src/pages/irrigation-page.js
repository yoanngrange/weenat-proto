import { IRRIG_SEASON, RAIN_DATA, saveIrrig, generateSeasonId } from '../data/irrigations.js'
import { IRRIG_TYPES } from '../data/constants.js'
import { plots as ALL_PLOTS } from '../data/plots.js'
import { orgs } from '../data/orgs.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getParcel, patchParcel, getOrgData, patchOrgData } from '../data/store.js'

const ADHERENT_ORG_ID = 1
const IS_ADMIN = (localStorage.getItem('menuRole') || 'admin-reseau') === 'admin-reseau'
let selectedOrgId = null  // null = toutes les orgas (vue admin par défaut)
let plots = IS_ADMIN ? ALL_PLOTS : ALL_PLOTS.filter(p => p.orgId === ADHERENT_ORG_ID)

const TODAY = new Date().toISOString().split('T')[0]

let activeAction = null // 'saisie' | 'saison' | 'export'
let leftCollapsed = false
let globaleExtraMonths = 0
let advisorEnabled   = false
let reservoirEnabled = false
let detectorEnabled  = false
const rainEdits = {}
const correctedRain = {} // clé `${plotId}_${iso}` → true si une irrigation détectée a été corrigée en pluie

let filterRealIrrig = true
let filterPlanIrrig = true
let filterRain      = true
let filterDetected  = true
let filterConfirmed = true
let filterReservoir = true

// ─── Helpers ──────────────────────────────────────────────────────────────────

function addDays(iso, n) {
  const d = new Date(iso); d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}
function fmtDateFull(iso) {
  const m = ['jan.','fév.','mar.','avr.','mai','jun.','jul.','aoû.','sep.','oct.','nov.','déc.']
  const [, mo, d] = iso.split('-')
  return `${parseInt(d)} ${m[parseInt(mo)-1]} ${iso.split('-')[0]}`
}
function fmtDateShort(iso) {
  const m = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const [, mo, d] = iso.split('-')
  return `${parseInt(d)} ${m[parseInt(mo)-1]}`
}
function fmtCol(iso) {
  const [, m, d] = iso.split('-'); return `${d}/${m}`
}
const DAY_NAMES = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
function dayOfWeek(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay()
}
function isoWeek(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d))
  const dn = dt.getUTCDay() || 7
  dt.setUTCDate(dt.getUTCDate() + 4 - dn)
  const y1 = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1))
  return Math.ceil((((dt - y1) / 86400000) + 1) / 7)
}

function plotLabel(p) {
  const name = p.name + (p.area ? ` (${p.area} ha)` : '')
  return [name, p.crop, p.irrigation].filter(Boolean).join(' — ')
}

const NO_IRRIG_TYPES = new Set(['Non irrigué', 'Non renseigné', ''])
function hasIrrigType(p) { return !!p.irrigation && !NO_IRRIG_TYPES.has(p.irrigation) }

// ─── Volume helpers ────────────────────────────────────────────────────────────

function mmToM3(mm, areaHa) { return Math.round(mm * (areaHa ?? 0) * 10) }
function fmtM3(m3) { return m3.toLocaleString('fr-FR') + ' m³' }

function fmtDuree(decimalHours) {
  const h = Math.floor(decimalHours)
  const m = Math.round((decimalHours - h) * 60)
  if (h <= 0) return `${m} min`
  return m > 0 ? `${h} h ${String(m).padStart(2, '0')} min` : `${h} h`
}

function getOrgVolMax(orgId) {
  const stored = getOrgData(orgId).volumeMax
  if (stored !== undefined) return stored
  return orgs.find(o => o.id === orgId)?.volumeMax ?? null
}

function getPlotVolMax(plotId) { return getParcel(plotId).volumeMaxM3 ?? null }
function getPlotDebit(plotId) { return getParcel(plotId).debitM3h ?? null }

// Met à jour les icônes/tooltips de durée d'irrigation d'une parcelle sans reconstruire
// toute la grille (qui ferait perdre la position de scroll) — réactif au changement de débit.
function refreshDurationIcons(plotId) {
  const debit = getPlotDebit(plotId)
  const p     = plots.find(pl => pl.id === plotId)
  document.querySelectorAll(`tr[data-row-plot="${plotId}"] .irr-gl-irrig`).forEach(span => {
    span.querySelector('.irr-gl-dur-i')?.remove()
    const mm = +span.dataset.mm
    if (!debit || !mm) return
    const icon = document.createElement('span')
    icon.className   = 'irr-gl-dur-i'
    icon.dataset.tip  = `Durée estimée : ${fmtDuree(mmToM3(mm, p?.area) / debit)}`
    icon.textContent  = 'i'
    span.appendChild(icon)
  })
}

function orgPlotM3(orgId) {
  const orgPlots = plots.filter(p => p.orgId === orgId || (!IS_ADMIN && selectedOrgId === null))
  const orgPlotsMap = new Map(orgPlots.map(p => [p.id, p]))
  const real = IRRIG_SEASON.filter(i => orgPlotsMap.has(i.plotId) && i.real)
    .reduce((s, i) => s + mmToM3(i.mm, orgPlotsMap.get(i.plotId)?.area ?? 0), 0)
  const plan = IRRIG_SEASON.filter(i => orgPlotsMap.has(i.plotId) && !i.real)
    .reduce((s, i) => s + mmToM3(i.mm, orgPlotsMap.get(i.plotId)?.area ?? 0), 0)
  return { real, plan }
}

function sortedPlotList() {
  return [...plots].sort((a, b) => a.name.localeCompare(b.name, 'fr'))
}

// ─── Feature helpers ──────────────────────────────────────────────────────────

function isAdvisorPlot(p)   { return p.id % 3 === 2 }
function advisorMm(p)       { return 25 + ((p.id * 7) % 20) }
function isReservoirPlot(p) { return p.id % 9 === 2 }
function reservoirMmAt(p, iso) {
  const [, m, d] = iso.split('-').map(Number)
  return Math.min(65, Math.max(5, 30 + ((p.id * 7 + m * 3 + d * 2) % 30)))
}
function isDetectorPlot(p) {
  const irr = (p.irrigation || '').toLowerCase()
  return ['rampe', 'pivot', 'enrouleur'].some(t => irr.includes(t))
}
function getDetectorIrrig(p) {
  if (!isDetectorPlot(p)) return []
  const result = []
  let seed = p.id * 17
  let cur = new Date(addDays(TODAY, -45))
  const endD = new Date(addDays(TODAY, -1))
  while (cur <= endD) {
    const iso = cur.toISOString().split('T')[0]
    const noise = (seed % 7) - 3
    seed = (seed * 31 + 17) % 1000
    result.push({ iso, mm: Math.max(8, 15 + noise), real: true, plotId: p.id, fromDetector: true })
    cur.setDate(cur.getDate() + 5 + (seed % 3))
    seed = (seed * 31 + 17) % 1000
  }
  return result
}

// ─── Multi-select component ───────────────────────────────────────────────────

function multiSelectHTML(id, opts = {}) {
  const { allBtn = false } = opts
  const items = sortedPlotList().map(p => `
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${p.id}" />
      <span class="irr-msel-name">${plotLabel(p)}</span>
    </label>`).join('')
  return `<div class="irr-msel" id="${id}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${items}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${allBtn ? `<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>` : ''}
    </div>
  </div>`
}

function bindMultiSelect(container, id) {
  const wrap = container.querySelector(`#${id}`)
  if (!wrap) return
  const search = wrap.querySelector('.irr-msel-search')
  const count  = wrap.querySelector('.irr-msel-count')
  const allBtnEl = wrap.querySelector('.irr-msel-all-btn')

  const update = () => {
    const n = wrap.querySelectorAll('.irr-msel-cb:checked').length
    count.textContent = `${n} sélectionnée${n !== 1 ? 's' : ''}`
  }

  search.addEventListener('input', () => {
    const q = search.value.toLowerCase()
    wrap.querySelectorAll('.irr-msel-item').forEach(item => {
      item.style.display = item.querySelector('.irr-msel-name').textContent.toLowerCase().includes(q) ? '' : 'none'
    })
  })

  wrap.querySelectorAll('.irr-msel-cb').forEach(cb => cb.addEventListener('change', update))

  allBtnEl?.addEventListener('click', () => {
    const visible = [...wrap.querySelectorAll('.irr-msel-cb')].filter(cb => cb.closest('.irr-msel-item').style.display !== 'none')
    const anyUnchecked = visible.some(cb => !cb.checked)
    visible.forEach(cb => { cb.checked = anyUnchecked })
    update()
  })
}

function getMultiSelectedIds(container, id) {
  const wrap = container.querySelector(`#${id}`)
  if (!wrap) return []
  return [...wrap.querySelectorAll('.irr-msel-cb:checked')].map(cb => +cb.value)
}

// ─── Modals ───────────────────────────────────────────────────────────────────

function showSaveConfirmModal(title, lines) {
  document.querySelector('.irr-save-confirm')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-save-confirm'
  ov.innerHTML = `
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${title}</div>
      <div class="irr-save-confirm-lines">${lines.map(l => `<div>${l}</div>`).join('')}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`
  document.body.appendChild(ov)
  const close = () => { ov.remove(); showGlobaleView(true) }
  ov.addEventListener('click', e => { if (e.target === ov) close() })
  ov.querySelector('#irr-confirm-close').addEventListener('click', close)
}

function showConflictModal(count, scopeLabel, onOverwrite) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigations existantes</span>
        <button class="irr-edit-close" id="irr-cf-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0"><strong>${count} irrigation${count > 1 ? 's' : ''}</strong> déjà enregistrée${count > 1 ? 's' : ''} pour <strong>${scopeLabel}</strong>.</p>
        <p style="margin:8px 0 0;color:var(--txt2)">Voulez-vous les écraser avec la nouvelle saisie ?</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-cf-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-cf-overwrite">Écraser</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  const cancel = () => ov.remove()
  ov.addEventListener('click', e => { if (e.target === ov) cancel() })
  ov.querySelector('#irr-cf-close').addEventListener('click', cancel)
  ov.querySelector('#irr-cf-cancel').addEventListener('click', cancel)
  ov.querySelector('#irr-cf-overwrite').addEventListener('click', () => { ov.remove(); onOverwrite() })
}

function showDeleteConfirmModal(title, message, onConfirm) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>${title}</span>
        <button class="irr-edit-close" id="irr-dc-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0;color:var(--txt2)">${message}</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-dc-cancel">Annuler</button>
        <button class="iw-btn iw-btn--danger" id="irr-dc-ok">Supprimer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-dc-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-dc-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-dc-ok').addEventListener('click', () => { ov.remove(); onConfirm() })
}

// ─── Reservoir SVG chart ──────────────────────────────────────────────────────

function renderReservoirChart(p, irrig) {
  const pastIrrig = irrig.filter(i => i.iso < TODAY)
  if (!pastIrrig.length) return ''
  const sorted = [...pastIrrig].sort((a, b) => a.iso < b.iso ? -1 : 1)
  const first = new Date(sorted[0].iso)
  const last  = new Date(sorted[sorted.length - 1].iso)
  const tot   = Math.max(last - first, 1)
  const W = 500, H = 80, PAD = 7, PY = 8, PH = 50
  const xOf = d => Math.round(PAD + (d - first) / tot * (W - 2 * PAD))
  const yOf = mm => Math.round(PY + PH - (mm / 65) * PH)
  const y0 = PY + PH, y15 = yOf(15), y53 = yOf(53)
  const points = []
  let cur = new Date(first)
  while (cur <= last) {
    points.push({ x: xOf(cur), y: yOf(reservoirMmAt(p, cur.toISOString().split('T')[0])) })
    cur.setDate(cur.getDate() + 1)
  }
  const path = points.map((pt, i) => `${i === 0 ? 'M' : 'L'}${pt.x},${pt.y}`).join(' ')
  const MN = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const ticksMonths = []
  const tc = new Date(first); tc.setDate(1); tc.setMonth(tc.getMonth() + 1)
  while (tc <= last) { ticksMonths.push(tc.getMonth()); tc.setMonth(tc.getMonth() + 1) }
  const tickElems = ticksMonths.map(m => {
    const d = new Date(first.getFullYear(), m, 1)
    const x = xOf(d)
    return `<line x1="${x}" y1="${PY}" x2="${x}" y2="${y0}" stroke="#D0CEC8" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${x}" y="${H - 2}" font-size="9" fill="#B0AEA8" text-anchor="middle">${MN[m]}</text>`
  }).join('')
  const firstLabel = `<text x="${PAD}" y="${H - 2}" font-size="9" fill="#B0AEA8">${fmtCol(sorted[0].iso)}</text>`
  const lastLabel  = `<text x="${W - PAD}" y="${H - 2}" font-size="9" fill="#3A7FC1" text-anchor="end">${fmtDateShort(sorted[sorted.length - 1].iso)}</text>`
  return `<div style="margin:16px 0 0;padding:0 24px">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--txt2);margin-bottom:4px">Réservoir en eau facilement utilisable</div>
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="width:100%;display:block">
      <rect x="${PAD}" y="${PY}" width="${W-2*PAD}" height="${y53-PY}" fill="#e8f5e9" opacity=".5"/>
      <rect x="${PAD}" y="${y53}" width="${W-2*PAD}" height="${y15-y53}" fill="#fff9e6" opacity=".5"/>
      <rect x="${PAD}" y="${y15}" width="${W-2*PAD}" height="${y0-y15}" fill="#ffebee" opacity=".5"/>
      <line x1="${PAD}" y1="${y53}" x2="${W-PAD}" y2="${y53}" stroke="#4CAF50" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="${PAD}" y1="${y15}" x2="${W-PAD}" y2="${y15}" stroke="#FF9800" stroke-width="1" stroke-dasharray="3,2"/>
      ${tickElems}
      <path d="${path}" fill="none" stroke="#3A7FC1" stroke-width="2" stroke-linejoin="round"/>
      <text x="${W-PAD}" y="${y53-3}" font-size="9" fill="#4CAF50" text-anchor="end">réservoir facilement utilisable</text>
      <text x="${W-PAD}" y="${y15-3}" font-size="9" fill="#FF9800" text-anchor="end">réservoir de survie</text>
      ${firstLabel}${lastLabel}
    </svg>
  </div>`
}

// ─── Timeline SVG ─────────────────────────────────────────────────────────────

function renderTimeline(irrig) {
  if (irrig.length < 2) return ''
  const sorted = [...irrig].sort((a, b) => a.iso < b.iso ? -1 : 1)
  const MN = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const first = new Date(sorted[0].iso), last = new Date(sorted[sorted.length-1].iso)
  const tot = Math.max(last - first, 1)
  const W = 500, BY = 24, BH = 5, DR = 5, DCY = BY-DR-4, MLY = DCY-DR-3, DY = BY+BH+13, SH = DY+2
  const PAD = DR + 2
  const xOf = d => Math.round(PAD + (d - first) / tot * (W - 2 * PAD))
  const fmtD = iso => { const [,m,d] = iso.split('-'); return `${parseInt(d)}/${parseInt(m)}` }
  const ticks = []; const c = new Date(first.getFullYear(), first.getMonth()+1, 1)
  while (c <= last) { ticks.push(new Date(c)); c.setMonth(c.getMonth()+1) }
  const tl = ticks.map(t => `<line x1="${xOf(t)}" y1="${BY-6}" x2="${xOf(t)}" y2="${BY+BH+6}" stroke="#C0BEB8" stroke-width="1"/>`).join('')
  const bounds = [first, ...ticks, last]
  const ml = bounds.slice(0,-1).map((b,i) => {
    const x1=xOf(b),x2=xOf(bounds[i+1]); if(x2-x1<16) return ''
    return `<text x="${Math.round((x1+x2)/2)}" y="${MLY}" font-size="9" fill="#B0AEA8" text-anchor="middle">${MN[b.getMonth()]}</text>`
  }).join('')
  const dots = sorted.map(ir => {
    const col = ir.real ? '#FF8500' : '#FFB705'
    const cx  = xOf(new Date(ir.iso))
    const tip = `${fmtDateShort(ir.iso)} · ${ir.mm} mm`
    return `<circle cx="${cx}" cy="${DCY}" r="${DR}" fill="${col}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${cx}" cy="${DCY}" r="${DR+6}" fill="transparent" pointer-events="all" data-tip="${tip}"/>`
  }).join('')
  return `<div class="irr-pg-timeline">
    <svg width="${W}" height="${SH}" viewBox="0 0 ${W} ${SH}" style="width:100%;display:block">
      ${ml}<rect x="0" y="${BY}" width="${W}" height="${BH}" rx="${BH/2}" fill="#E0DED8"/>${tl}${dots}
      <text x="1" y="${DY}" font-size="9" fill="#B0AEA8">${fmtD(sorted[0].iso)}</text>
      <text x="${W-1}" y="${DY}" font-size="9" fill="#B0AEA8" text-anchor="end">${fmtD(sorted[sorted.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`
}

// ─── Cumuls bar ───────────────────────────────────────────────────────────────

function renderCumuls(irrig) {
  const r = irrig.filter(i => i.real), p = irrig.filter(i => !i.real)
  const tR = r.reduce((s,i) => s+i.mm, 0), tP = p.reduce((s,i) => s+i.mm, 0)
  return `<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${tR} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${tP} mm</div><div class="irr-pr-cumul-ct">${p.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${tR+tP} mm</div><div class="irr-pr-cumul-ct">${irrig.length} irrig.</div></div>
  </div>`
}

// ─── Irrigation list item ─────────────────────────────────────────────────────

function irrigItem(ir) {
  const p = plots.find(pl => pl.id === ir.plotId)
  const name = p ? p.name : `Parcelle ${ir.plotId}`
  const idx = IRRIG_SEASON.indexOf(ir)
  const col = ir.real ? '#FF8500' : '#FFB705'
  const [, mm, dd] = ir.iso.split('-')
  return `<div class="irr-pr-item">
    <div class="irr-pr-stripe" style="background:${col}"></div>
    <div class="irr-pr-date" style="color:${col}"><span class="irr-pr-day">${dd}</span><span class="irr-pr-mon">/${mm}</span></div>
    <div class="irr-pr-info"><div class="irr-pr-label">${name}</div><div class="irr-pr-status" style="color:${col}">${ir.real ? 'Effectuée' : 'Planifiée'}</div></div>
    <div class="irr-pr-mm" style="color:${col}">${ir.mm} mm</div>
    <button class="irr-pr-del" data-idx="${idx}">🗑</button>
  </div>`
}

function bindDelBtns(container) {
  container.querySelectorAll('.irr-pr-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx
      if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig() }
    })
  })
}

// ─── Right panel views ────────────────────────────────────────────────────────

// ─── Volume banner ────────────────────────────────────────────────────────────

function renderVolBanner() {
  const wrap = document.getElementById('irr-vol-banner-wrap')
  if (!wrap) return
  const targetOrgId = IS_ADMIN ? selectedOrgId : ADHERENT_ORG_ID
  if (!targetOrgId) { wrap.innerHTML = ''; return }

  const orgPlotIds = new Set(plots.filter(p => p.orgId === targetOrgId).map(p => p.id))
  if (!IS_ADMIN) plots.forEach(p => orgPlotIds.add(p.id))
  const plotsMap = new Map(plots.map(p => [p.id, p]))

  const realM3 = IRRIG_SEASON.filter(i => orgPlotIds.has(i.plotId) && i.real)
    .reduce((s, i) => s + mmToM3(i.mm, plotsMap.get(i.plotId)?.area ?? 0), 0)
  const planM3 = IRRIG_SEASON.filter(i => orgPlotIds.has(i.plotId) && !i.real)
    .reduce((s, i) => s + mmToM3(i.mm, plotsMap.get(i.plotId)?.area ?? 0), 0)
  const totalM3 = realM3 + planM3

  const volMax = getOrgVolMax(targetOrgId)
  const pctReal = volMax ? Math.min(100, Math.round(realM3 / volMax * 100)) : 0
  const pctPlan = volMax ? Math.min(100 - pctReal, Math.round(planM3 / volMax * 100)) : 0
  const pctUsed = pctReal + pctPlan

  const fmtNum = n => n !== null && n !== undefined ? n.toLocaleString('fr-FR') : ''

  wrap.innerHTML = `
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${fmtM3(totalM3)}${volMax ? ` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${fmtM3(volMax)}</span>` : ''}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${fmtM3(realM3)}</span> effectués · <span style="color:#FFB705">▪ ${fmtM3(planM3)}</span> planifiés</div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${!volMax ? '<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>' : ''}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${pctReal}%"></div>
          <div class="irr-vol-bar-plan" style="width:${pctPlan}%"></div>
        </div>
        ${volMax ? (() => {
          const deficit = totalM3 - volMax
          return deficit > 0
            ? `<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${fmtM3(deficit)}</div>`
            : `<div class="irr-vol-bar-pct">${pctUsed}% consommé${pctUsed >= 90 ? ' ⚠' : ''}</div>`
        })() : ''}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${fmtNum(volMax)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
    </div>`

  wrap.querySelector('#irr-vol-max-inp')?.addEventListener('change', e => {
    const raw = e.target.value.replace(/\s/g, '').replace(/\./g, '').replace(/,/g, '')
    const v   = raw !== '' ? parseInt(raw) : null
    if (v !== null) e.target.value = v.toLocaleString('fr-FR')
    patchOrgData(targetOrgId, { volumeMax: v })
    renderVolBanner()
  })
}

function showGlobaleView(resetScroll = false) {
  renderVolBanner()
  const right = document.getElementById('irr-right')
  const maxFuture = addDays(TODAY, 60)

  const boundaryDates = [
    ...IRRIG_SEASON.map(i => i.iso),
    ...RAIN_DATA.filter(r => r.iso <= maxFuture).map(r => r.iso),
    ...(detectorEnabled ? [addDays(TODAY, -45)] : []),
    addDays(TODAY, -1),
    maxFuture,
  ]
  if (!IRRIG_SEASON.length && !RAIN_DATA.length) {
    right.innerHTML = `<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`
    return
  }

  const rangeStart = [...boundaryDates].sort()[0]
  const lastIrrigIso = IRRIG_SEASON.length ? [...IRRIG_SEASON].map(i => i.iso).sort().at(-1) : null
  const baseEnd = lastIrrigIso && lastIrrigIso > maxFuture ? lastIrrigIso : maxFuture
  const extendedEnd = new Date(baseEnd)
  extendedEnd.setMonth(extendedEnd.getMonth() + globaleExtraMonths)
  const rangeEnd = extendedEnd.toISOString().split('T')[0]

  const prevScroll = resetScroll ? null : (right.querySelector('#irr-gl-body')?.scrollLeft ?? null)

  const sortedDates = []
  let cur = new Date(rangeStart)
  const end = new Date(rangeEnd)
  while (cur <= end) {
    sortedDates.push(cur.toISOString().split('T')[0])
    cur.setDate(cur.getDate() + 1)
  }
  const rainMap = {}
  for (const r of RAIN_DATA) { rainMap[r.iso] = r.mm }

  function forecastBase(iso) {
    if (iso <= TODAY || iso > addDays(TODAY, 13)) return 0
    const [, m, d] = iso.split('-').map(Number)
    const h = (m * 17 + d * 13) % 100
    return h < 65 ? 0 : 3 + (h % 9)
  }

  function plotRainMm(plotId, iso, baseMm) {
    const key = `${plotId}_${iso}`
    if (rainEdits[key] !== undefined) return rainEdits[key]
    if (!baseMm) return 0
    const [, m, d] = iso.split('-').map(Number)
    const seed = (plotId * 13 + m * 7 + d * 3) % 100
    if (seed < 12) return 0
    const factor = 0.75 + ((plotId * 11 + d * 5) % 50) / 100
    return Math.round(baseMm * factor)
  }

  const J7 = addDays(TODAY, 7)
  let headers = ''
  let weekRow = ''
  let weekSpan = 0, weekNum = null
  for (const d of sortedDates) {
    const isT  = d === TODAY
    const dow  = dayOfWeek(d)
    const isSun = dow === 0
    const wkEnd = isSun ? ' irr-gl-th--week-end' : ''
    if (weekNum === null) weekNum = isoWeek(d)
    weekSpan++
    const isAdvRange = advisorEnabled && d > TODAY && d <= J7
    headers += `<th class="irr-gl-th${isT ? ' irr-gl-th--today' : ''}${wkEnd}${isAdvRange ? ' irr-gl-th--advisor-range' : ''}"><span class="irr-gl-day-name">${DAY_NAMES[dow]}</span>${fmtCol(d)}</th>`
    const isLast = d === sortedDates[sortedDates.length - 1]
    if (isSun || isLast) {
      weekRow += `<th class="irr-gl-week-hd${isSun ? ' irr-gl-th--week-end' : ''}" colspan="${weekSpan}">S${weekNum}</th>`
      weekSpan = 0; weekNum = null
    }
    if (advisorEnabled && d === J7) {
      headers += `<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>`
      weekRow += `<th class="irr-gl-week-hd"></th>`
    }
  }

  function plotRow(p) {
    const detIrrig   = detectorEnabled ? getDetectorIrrig(p) : []
    const showAdv    = advisorEnabled && isAdvisorPlot(p)
    const showRes    = reservoirEnabled && isReservoirPlot(p)
    const isDetector = isDetectorPlot(p)
    let cells = ''
    for (const d of sortedDates) {
      const isT    = d === TODAY
      const irrigs    = IRRIG_SEASON.filter(i => i.iso === d && i.plotId === p.id)
      // Suppress auto-detection once user has interacted (confirmed or dismissed)
      const detDay    = irrigs.length === 0 ? detIrrig.filter(i => i.iso === d) : []
      const visIrrigs = irrigs.filter(i => !i.detectorDismissed).filter(i =>
        i.detectorConfirmed ? (detectorEnabled && filterConfirmed) : (i.real ? filterRealIrrig : filterPlanIrrig))
      const visDetDay = filterDetected ? detDay : []
      const allIrr    = [...visIrrigs, ...visDetDay]
      const total     = allIrr.reduce((s,i) => s+i.mm, 0)
      const isReal    = allIrr.some(i => i.real)
      const rainOffset  = (p.id * 7 + 3) % 3 - 1
      const rainSrcDate = addDays(d, rainOffset)
      const rainMm      = plotRainMm(p.id, d, rainMap[rainSrcDate] ?? forecastBase(rainSrcDate))
      const rainKey     = `${p.id}_${d}`
      // Build fixed slots so rain/irrig/reservoir always sit at the same vertical position
      let rainHtml = ''
      if (rainMm && filterRain) {
        const corrBadge = correctedRain[rainKey] ? `<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>` : ''
        rainHtml = detectorEnabled && isDetector
          ? `<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${p.id}" data-rain-iso="${d}" data-rain-mm="${rainMm}">${rainMm} mm${corrBadge}</span>`
          : `<span class="irr-gl-rain">${rainMm} mm${corrBadge}</span>`
      }

      let irrigHtml = ''
      if (total) {
        const col    = isReal ? '#E07820' : '#FFB705'
        const idxs   = visIrrigs.map(i => IRRIG_SEASON.indexOf(i)).filter(i => i >= 0).join(',')
        const dBadge = visDetDay.length ? `<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>`
          : visIrrigs.some(i => i.detectorConfirmed) ? `<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>`
          : ''
        const detMm  = visDetDay.reduce((s,i) => s+i.mm, 0)
        const debit  = getPlotDebit(p.id)
        const durIcon = debit ? `<span class="irr-gl-dur-i" data-tip="Durée estimée : ${fmtDuree(mmToM3(total, p.area) / debit)}">i</span>` : ''
        irrigHtml = `<span class="irr-gl-val irr-gl-irrig" style="color:${col};cursor:pointer" data-mm="${total}"${
          idxs ? ` data-idxs="${idxs}" data-iso="${d}"` : ` data-det-plotid="${p.id}" data-det-plotname="${p.name}" data-det-iso="${d}" data-det-mm="${detMm}" data-det-rain="${rainMm}"`
        }>${total} mm${dBadge}${durIcon}</span>`
      } else {
        irrigHtml = `<button class="irr-gl-add" data-plot-id="${p.id}" data-plot-name="${p.name}" data-iso="${d}">+</button>`
      }

      let resHtml = ''
      if (showRes && filterReservoir && d < TODAY) resHtml = `<span class="irr-gl-res">${reservoirMmAt(p, d)} mm</span>`

      let content = ''
      if (filterRain)                content += `<div class="irr-gl-slot">${rainHtml}</div>`
      content                                 += `<div class="irr-gl-slot">${irrigHtml}</div>`
      if (showRes && filterReservoir) content += `<div class="irr-gl-slot">${resHtml}</div>`
      const isSunTd    = dayOfWeek(d) === 0
      const isAdvRange = showAdv && d > TODAY && d <= J7
      cells += `<td class="irr-gl-td${isT ? ' irr-gl-td--today' : ''}${isSunTd ? ' irr-gl-td--week-end' : ''}${isAdvRange ? ' irr-gl-td--advisor-range' : ''}">${content}</td>`
      if (advisorEnabled && d === J7) {
        let advCell = ''
        if (showAdv) {
          const recMm  = advisorMm(p)
          const planMm = IRRIG_SEASON.filter(i => i.plotId === p.id && i.iso > TODAY && i.iso <= J7).reduce((s,i) => s+i.mm, 0)
          const planCol = planMm >= recMm ? '#24B066' : '#E05252'
          advCell = `<span class="irr-gl-advisor">${recMm} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${planCol}">${planMm} mm planifié</span>`
        }
        cells += `<td class="irr-gl-td irr-gl-td--advisor">${advCell}</td>`
      }
    }
    const plotSub = [p.crop, p.irrigation].filter(Boolean).join(' · ')
    const areaTag = p.area ? `<span class="irr-gl-plot-area">(${p.area} ha)</span>` : ''

    let plotBarHtml = ''
    const plotVolMax = getPlotVolMax(p.id)
    if (plotVolMax) {
      const _areaHa = p.area ?? 0
      const _realM3 = IRRIG_SEASON.filter(i => i.plotId === p.id && i.real).reduce((s, i) => s + mmToM3(i.mm, _areaHa), 0)
      const _planM3 = IRRIG_SEASON.filter(i => i.plotId === p.id && !i.real).reduce((s, i) => s + mmToM3(i.mm, _areaHa), 0)
      const _totM3 = _realM3 + _planM3
      if (_totM3 > 0) {
        if (_totM3 > plotVolMax) {
          const def = fmtM3(_totM3 - plotVolMax)
          plotBarHtml = `<span class="irr-gl-plot-deficit">Dépassement ${def}</span>`
        } else {
          const pR = Math.round(_realM3 / plotVolMax * 100)
          const pP = Math.min(100 - pR, Math.round(_planM3 / plotVolMax * 100))
          plotBarHtml = `<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${pR}%"></span><span class="irr-gl-plot-mini-p" style="width:${pP}%"></span></span>`
        }
      }
    }

    return `<tr data-row-plot="${p.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${p.id}">${p.name}</span>${areaTag}${plotSub ? `<span class="irr-gl-plot-sub">${plotSub}</span>` : ''}${plotBarHtml}</td>${cells}</tr>`
  }

  const rows = sortedPlotList().map(plotRow).join('')

  right.innerHTML = `
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${filterRealIrrig ? 'checked' : ''}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${filterPlanIrrig ? 'checked' : ''}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${detectorEnabled ? `<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${filterDetected ? 'checked' : ''}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${filterConfirmed ? 'checked' : ''}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>` : ''}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${filterRain ? 'checked' : ''}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${detectorEnabled ? `<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>` : ''}
          ${reservoirEnabled ? `<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${filterReservoir ? 'checked' : ''}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>` : ''}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${weekRow}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${headers}</tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${globaleExtraMonths === 0 ? 'disabled' : ''}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${globaleExtraMonths > 0 ? `+${globaleExtraMonths} mois au-delà de la saison` : `Fin de saison : ${fmtDateShort(baseEnd)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`

  requestAnimationFrame(() => {
    const body  = right.querySelector('#irr-gl-body')
    const table = right.querySelector('#irr-gl-table')
    const top   = right.querySelector('#irr-gl-scroll-top')
    const inner = right.querySelector('#irr-gl-scroll-inner')
    if (!body || !table || !top || !inner) return

    inner.style.width = table.offsetWidth + 'px'
    top.addEventListener('scroll', () => { body.scrollLeft = top.scrollLeft })
    body.addEventListener('scroll', () => { top.scrollLeft = body.scrollLeft })

    if (prevScroll !== null) {
      body.scrollLeft = prevScroll
      top.scrollLeft  = prevScroll
    } else {
      const todayTh = right.querySelector('.irr-gl-th--today')
      if (todayTh) {
        const prevTh = todayTh.previousElementSibling
        const ref    = prevTh ?? todayTh
        const plotW  = right.querySelector('.irr-gl-plot-hd')?.offsetWidth ?? 120
        const target = ref.offsetLeft - plotW
        body.scrollLeft = target
        top.scrollLeft  = target
      }
    }
  })

  right.querySelector('#irr-gl-prev-month')?.addEventListener('click', () => {
    if (globaleExtraMonths > 0) { globaleExtraMonths--; showGlobaleView() }
  })
  right.querySelector('#irr-gl-next-month')?.addEventListener('click', () => {
    globaleExtraMonths++; showGlobaleView()
  })

  right.querySelectorAll('.irr-gl-filter').forEach(cb => {
    cb.addEventListener('change', () => {
      const f = cb.dataset.filter
      if (f === 'real-irrig') filterRealIrrig = cb.checked
      else if (f === 'plan-irrig') filterPlanIrrig = cb.checked
      else if (f === 'rain') filterRain = cb.checked
      else if (f === 'detected') filterDetected = cb.checked
      else if (f === 'confirmed') filterConfirmed = cb.checked
      else if (f === 'reservoir') filterReservoir = cb.checked
      showGlobaleView()
    })
  })

  right.querySelectorAll('.irr-gl-irrig').forEach(el => {
    el.addEventListener('click', () => {
      if (el.dataset.idxs) {
        showEditIrrigModal(el.dataset.idxs.split(',').map(Number), el.dataset.iso)
      } else if (el.dataset.detPlotid) {
        showDetectorEditModal(+el.dataset.detPlotid, el.dataset.detPlotname, el.dataset.detIso, +el.dataset.detMm, +el.dataset.detRain)
      }
    })
  })

  right.querySelectorAll('.irr-gl-rain--edit').forEach(el => {
    el.addEventListener('click', () => {
      showEditRainModal(+el.dataset.rainPlotid, el.dataset.rainIso, +el.dataset.rainMm)
    })
  })

  right.querySelectorAll('.irr-gl-add').forEach(el => {
    el.addEventListener('click', () => {
      showQuickAddModal(el.dataset.plotId, el.dataset.plotName, el.dataset.iso)
    })
  })

  right.querySelectorAll('.irr-gl-plot-link').forEach(el => {
    el.addEventListener('click', () => {
      const p = plots.find(p => String(p.id) === el.dataset.plotId)
      if (p) openDetailPanel(p)
    })
  })
}

function showEditIrrigModal(idxs, iso) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  const irrigs = idxs.map(i => IRRIG_SEASON[i]).filter(Boolean)
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${fmtDateFull(iso)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${irrigs.map((ir, i) => {
          const p = plots.find(pl => pl.id === ir.plotId)
          const name = p ? p.name : `Parcelle ${ir.plotId}`
          return `<div class="irr-edit-row">
            <span class="irr-edit-label">${name}</span>
            <input type="number" class="irr-edit-qty" data-i="${i}" value="${ir.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${i}">🗑</button>
          </div>`
        }).join('')}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-edit-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-edit-cancel').addEventListener('click', () => ov.remove())
  ov.querySelectorAll('.irr-edit-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const ir = irrigs[+btn.dataset.i]
      const idx = IRRIG_SEASON.indexOf(ir)
      if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig() }
      ov.remove()
    })
  })
  ov.querySelector('#irr-edit-save').addEventListener('click', () => {
    ov.querySelectorAll('.irr-edit-qty').forEach(inp => {
      const ir = irrigs[+inp.dataset.i]
      const v = parseInt(inp.value)
      if (ir && v > 0) { ir.mm = v; ir.real = iso <= TODAY }
    })
    saveIrrig(); ov.remove()
  })
}

function showEditRainModal(plotId, iso, currentMm) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const p = plots.find(pl => pl.id === plotId)
  const plotName = p ? p.name : `Parcelle ${plotId}`
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${fmtDateFull(iso)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${plotName}</span>
          <input type="number" id="irr-rain-qty" value="${currentMm}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-rain-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-rain-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-rain-save').addEventListener('click', () => {
    const v = parseInt(ov.querySelector('#irr-rain-qty').value)
    if (!isNaN(v) && v >= 0) rainEdits[`${plotId}_${iso}`] = v
    ov.remove()
    showGlobaleView()
  })
}

function showDetectorEditModal(plotId, plotName, iso, detectedMm, currentRainMm = 0) {
  document.querySelector('.irr-edit-overlay')?.remove()
  let editMm = detectedMm
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${fmtDateFull(iso)}</span>
        <button class="irr-edit-close" id="irr-det-ed-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${plotName}</span>
          <input type="number" id="irr-det-ed-qty" value="${detectedMm}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
        <p style="font-size:12px;color:var(--txt3);margin:8px 0 0">En cas d'erreur de détection, cette irrigation peut être transformée en pluie.</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--danger" id="irr-det-ed-del">Supprimer</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="iw-btn iw-btn--sec" id="irr-det-ed-cancel">Annuler</button>
          <button class="iw-btn iw-btn--rain" id="irr-det-ed-rain">Transformer en pluie</button>
          <button class="iw-btn iw-btn--pri" id="irr-det-ed-save">Confirmer</button>
        </div>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.querySelector('#irr-det-ed-qty').addEventListener('input', e => {
    const v = parseInt(e.target.value); if (v > 0) editMm = v
  })
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-det-ed-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-det-ed-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-det-ed-del').addEventListener('click', () => {
    IRRIG_SEASON.push({ iso, mm: 0, real: true, plotId, detectorDismissed: true })
    saveIrrig(); ov.remove(); showGlobaleView()
  })
  ov.querySelector('#irr-det-ed-rain').addEventListener('click', () => {
    IRRIG_SEASON.push({ iso, mm: 0, real: true, plotId, detectorDismissed: true })
    rainEdits[`${plotId}_${iso}`] = currentRainMm + editMm
    correctedRain[`${plotId}_${iso}`] = true
    saveIrrig(); ov.remove(); showGlobaleView()
  })
  ov.querySelector('#irr-det-ed-save').addEventListener('click', () => {
    IRRIG_SEASON.push({ iso, mm: editMm, real: iso <= TODAY, plotId, detectorConfirmed: true })
    saveIrrig(); ov.remove(); showGlobaleView()
  })
}

function openDetailItemEdit(ir, onDone) {
  document.querySelector('.irr-edit-overlay')?.remove()
  let editDate = ir.iso, editMm = ir.mm
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>${ir.real ? "Modifier l'irrigation effectuée" : "Modifier l'irrigation planifiée"}</span>
        <button class="irr-edit-close" id="irr-di-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row" style="flex-direction:column;align-items:flex-start;gap:6px">
          <label style="font-size:12px;color:var(--txt3)">Date</label>
          <input type="date" id="irr-di-date" value="${ir.iso}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
        </div>
        <div class="irr-edit-row" style="margin-top:10px">
          <span class="irr-edit-label">Quantité</span>
          <input type="number" id="irr-di-qty" value="${ir.mm}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--danger" id="irr-di-del">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="irr-di-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="irr-di-save">Enregistrer</button>
        </div>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-di-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-di-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-di-date').addEventListener('change', e => { editDate = e.target.value })
  ov.querySelector('#irr-di-qty').addEventListener('input', e => { const v = parseInt(e.target.value); if (v > 0) editMm = v })
  ov.querySelector('#irr-di-del').addEventListener('click', () => {
    const idx = IRRIG_SEASON.indexOf(ir)
    if (idx >= 0) IRRIG_SEASON.splice(idx, 1)
    saveIrrig(); ov.remove(); onDone()
  })
  ov.querySelector('#irr-di-save').addEventListener('click', () => {
    ir.iso  = editDate
    ir.mm   = editMm
    ir.real = editDate <= TODAY
    saveIrrig(); ov.remove(); onDone()
  })
}

function openModifierSaison(plotId, onDone) {
  const irrig     = IRRIG_SEASON.filter(i => i.plotId === plotId && i.fromStrategy && i.seasonId)
  const sorted    = [...irrig].sort((a, b) => a.iso < b.iso ? -1 : 1)
  const seasonIds = new Set(irrig.map(i => i.seasonId))

  let debut = sorted[0]?.iso || TODAY
  let fin   = sorted[sorted.length - 1]?.iso || addDays(TODAY, 90)
  let qty   = sorted[0]?.mm || 10
  let freq  = sorted.length >= 2
    ? Math.max(1, Math.round((new Date(sorted[sorted.length - 1].iso) - new Date(sorted[0].iso)) / 86400000 / (sorted.length - 1)))
    : 7
  const origDebut = debut
  const origFin   = fin
  let step = 'form'

  document.querySelector('.irr-edit-overlay')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'

  function computeOccs() {
    if (!debut || !fin || freq <= 0) return []
    const occs = [], end = new Date(fin)
    let cur = new Date(debut)
    while (cur <= end && occs.length < 200) {
      occs.push(cur.toISOString().split('T')[0])
      cur.setDate(cur.getDate() + freq)
    }
    return occs
  }

  function updatePreview() {
    const occs = computeOccs()
    const future = occs.filter(iso => iso > TODAY).length
    ov.querySelector('#irr-ms-preview').textContent = occs.length > 0
      ? `↗ ${occs.length} irrigations · ${occs.length * qty} mm · dont ${future} à venir`
      : 'Ajustez les dates et la fréquence'
  }

  function renderForm() {
    return `
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${debut}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${fin}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${qty}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${freq}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
        </div>
        <div id="irr-ms-preview" style="margin-top:12px;font-size:12px;color:var(--txt3)"></div>
        <div style="margin-top:10px;font-size:11px;color:var(--txt3);line-height:1.4">
          Les irrigations déjà effectuées sont conservées. Les irrigations futures sont recalculées.
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-save">Enregistrer</button>
      </div>`
  }

  function renderConfirm() {
    const datesChanged = debut !== origDebut || fin !== origFin
    const occs = computeOccs()
    const scopeMsg = datesChanged
      ? `Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.`
      : `La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.`
    return `
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${scopeMsg}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${fmtDateFull(debut)} → ${fmtDateFull(fin)} · ${qty} mm tous les ${freq} jours · ${occs.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`
  }

  function render() {
    ov.innerHTML = `
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${step === 'form' ? renderForm() : renderConfirm()}
      </div>`

    ov.querySelector('#irr-ms-close').addEventListener('click', () => ov.remove())

    if (step === 'form') {
      updatePreview()
      ov.querySelector('#irr-ms-cancel').addEventListener('click', () => ov.remove())
      ov.querySelector('#irr-ms-debut').addEventListener('change', e => { debut = e.target.value; updatePreview() })
      ov.querySelector('#irr-ms-fin').addEventListener('change', e => { fin = e.target.value; updatePreview() })
      ov.querySelector('#irr-ms-qty').addEventListener('input', e => { const v = parseInt(e.target.value); if (v > 0) { qty = v; updatePreview() } })
      ov.querySelector('#irr-ms-freq').addEventListener('input', e => { const v = parseInt(e.target.value); if (v > 0) { freq = v; updatePreview() } })
      ov.querySelector('#irr-ms-save').addEventListener('click', () => { step = 'confirm'; render() })
    } else {
      ov.querySelector('#irr-ms-back').addEventListener('click', () => { step = 'form'; render() })
      ov.querySelector('#irr-ms-confirm').addEventListener('click', () => {
        const datesChanged = debut !== origDebut || fin !== origFin
        const occs = computeOccs()
        const occsToAdd = datesChanged ? occs : occs.filter(iso => iso > TODAY)
        const kept = IRRIG_SEASON.filter(i => !(
          i.plotId === plotId && seasonIds.has(i.seasonId) && (datesChanged || i.iso > TODAY)
        ))
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...kept)
        const newId = generateSeasonId()
        for (const iso of occsToAdd) {
          IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, plotId, fromStrategy: true, seasonId: newId })
        }
        saveIrrig(); ov.remove()
        showSaveConfirmModal('Saison modifiée', [
          `Début : ${fmtDateFull(debut)} · Fin : ${fmtDateFull(fin)}`,
          `${occs.length} irrigations · ${qty} mm · tous les ${freq} j`,
          datesChanged ? 'Modifications appliquées à toute la saison.' : 'Modifications appliquées à partir de demain.',
        ])
        onDone?.()
      })
    }
  }

  document.body.appendChild(ov)
  render()
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
}

function highlightTableRow(plotId) {
  const right = document.getElementById('irr-right')
  if (!right) return
  right.querySelectorAll('[data-row-plot]').forEach(tr => tr.classList.remove('irr-gl-row--active'))
  if (plotId) right.querySelector(`[data-row-plot="${plotId}"]`)?.classList.add('irr-gl-row--active')
}

function openDetailPanel(p) {
  const page  = document.getElementById('irr-page')
  const panel = document.getElementById('irr-detail')
  if (!page || !panel) return

  if (panel.dataset.plotId === String(p.id) && page.classList.contains('irr-has-detail')) {
    page.classList.remove('irr-has-detail')
    panel.style.display = 'none'
    panel.dataset.plotId = ''
    return
  }
  panel.dataset.plotId = String(p.id)
  panel.style.display = ''
  page.classList.add('irr-has-detail')
  highlightTableRow(String(p.id))
  renderDetailPanel(p)
}

const MONTHS_SHORT = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']

function renderDetailPanel(p) {
  const panel = document.getElementById('irr-detail')
  if (!panel) return

  const wasRealOpen = panel.querySelector('.irr-pr-details')?.open ?? false

  if (!hasIrrigType(p)) {
    panel.style.display = ''
    panel.dataset.plotId = String(p.id)
    panel.innerHTML = `
      <div class="irr-det-sticky">
        <div class="irr-det-hd">
          <div style="flex:1;min-width:0">
            <div class="irr-det-name">${p.name}</div>
            <a class="irr-det-link" href="parcelle-detail.html?id=${p.id}">Voir la parcelle →</a>
          </div>
          <button class="irr-det-close" id="irr-det-close">×</button>
        </div>
        <div class="irr-det-body" style="padding:16px">
          <p style="font-size:13px;color:var(--txt2);margin:0 0 12px">Précisez le type d'irrigation sur cette parcelle</p>
          <select id="irr-det-type-sel" style="width:100%;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
            ${IRRIG_TYPES.map(t => `<option value="${t}"${t === (p.irrigation || 'Non renseigné') ? ' selected' : ''}>${t}</option>`).join('')}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`
    panel.querySelector('#irr-det-close')?.addEventListener('click', () => {
      document.getElementById('irr-page')?.classList.remove('irr-has-detail')
      panel.style.display = 'none'
      panel.dataset.plotId = ''
      highlightTableRow(null)
    })
    panel.querySelector('#irr-det-type-save')?.addEventListener('click', () => {
      const val = panel.querySelector('#irr-det-type-sel').value
      patchParcel(p.id, { irrigation: val })
      p.irrigation = val
      renderDetailPanel(p)
      showGlobaleView(true)
    })
    return
  }

  const irrig    = IRRIG_SEASON.filter(i => i.plotId === p.id)
  const hasStrat = irrig.some(i => i.fromStrategy && i.seasonId)
  const stratIr  = irrig.filter(i => i.fromStrategy).sort((a,b) => a.iso < b.iso ? -1 : 1)
  const debut    = stratIr[0]?.iso
  const fin      = stratIr[stratIr.length - 1]?.iso
  const seasonIds = new Set(irrig.filter(i => i.fromStrategy && i.seasonId).map(i => i.seasonId))

  const seasonLine = debut && fin
    ? `<div><strong>Saison :</strong> ${fmtDateShort(debut)} → ${fmtDateShort(fin)}</div>`
    : '<div style="color:var(--txt3)">Pas de saison enregistrée</div>'

  const real = irrig.filter(i => i.real).sort((a,b) => a.iso < b.iso ? -1 : 1)
  const plan = irrig.filter(i => !i.real).sort((a,b) => a.iso < b.iso ? -1 : 1)

  const plotArea   = p.area ?? 0
  const realM3det  = real.reduce((s, i) => s + mmToM3(i.mm, plotArea), 0)
  const planM3det  = plan.reduce((s, i) => s + mmToM3(i.mm, plotArea), 0)
  const totalM3det = realM3det + planM3det
  const plotVolMax  = getPlotVolMax(p.id)
  const pctRealDet  = plotVolMax && plotArea ? Math.min(100, Math.round(realM3det  / plotVolMax * 100)) : 0
  const pctPlanDet  = plotVolMax && plotArea ? Math.min(100 - pctRealDet, Math.round(planM3det / plotVolMax * 100)) : 0
  const pctUsedDet  = pctRealDet + pctPlanDet
  const volSectionHtml = `
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${fmtM3(totalM3det)}</strong>
        </div>
        ${plotArea ? `<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${fmtM3(realM3det)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${fmtM3(planM3det)} planifiés</span>
        </div>` : '<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${plotVolMax ?? ''}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${plotVolMax && plotArea ? `
      <div class="irr-det-vol-bar">
        <div style="width:${pctRealDet}%;background:#FF8500;height:100%"></div>
        <div style="width:${pctPlanDet}%;background:#FFB705;height:100%"></div>
      </div>
      ${totalM3det > plotVolMax
        ? `<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${fmtM3(totalM3det - plotVolMax)}</div>`
        : `<div class="irr-det-vol-note">${pctUsedDet}% · ${fmtM3(plotVolMax - totalM3det)} restants</div>`
      }` : ''}
      <div class="irr-det-vol-row" style="margin-top:8px">
        <span class="irr-det-vol-lbl">Débit :</span>
        <input class="irr-det-vol-input" id="irr-det-debit-input" type="number" min="0" step="0.1" placeholder="—" value="${getPlotDebit(p.id) ?? ''}" />
        <span class="irr-det-vol-lbl">m³/h</span>
      </div>
    </div>`

  const item = ir => {
    const idx = IRRIG_SEASON.indexOf(ir)
    const col = ir.real ? '#FF8500' : '#FFB705'
    const [, mo, dd] = ir.iso.split('-')
    const dateStr = `${parseInt(dd)} ${MONTHS_SHORT[parseInt(mo)-1]}`
    const statusLabel = ir.real ? 'Effectuée' : 'Planifiée'
    const detBadge = ir.detectorConfirmed
      ? `<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>`
      : ''
    return `<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${col}"></div>
      <div class="irr-pr-date" style="color:${col};min-width:52px;font-size:13px;font-weight:600">${dateStr}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${col}">${statusLabel}</div>
        ${detBadge}
      </div>
      <div class="irr-pr-mm" style="color:${col}">${ir.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${idx}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${idx}" title="Supprimer">🗑</button>
    </div>`
  }

  const stratBar = hasStrat ? `
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>` : ''

  const advisorBlock = advisorEnabled && isAdvisorPlot(p)
    ? `<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${advisorMm(p)} mm</div>
       </div>`
    : ''

  panel.innerHTML = `
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <div style="flex:1;min-width:0">
          <div class="irr-det-name">${p.name}</div>
          <a class="irr-det-link" href="parcelle-detail.html?id=${p.id}">Voir la parcelle →</a>
        </div>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">${seasonLine}</div>
        ${stratBar}
        ${renderCumuls(irrig)}
        ${renderTimeline(irrig)}
        ${volSectionHtml}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${real.length ? `
        <details class="irr-pr-details"${(wasRealOpen || !plan.length) ? ' open' : ''}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${real.length}</span></summary>
          <div>${real.map(item).join('')}</div>
        </details>` : ''}
      ${advisorBlock}
      ${plan.length ? `
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${plan.length}</span></summary>
          <div>${plan.map(item).join('')}</div>
        </details>` : ''}
      ${!irrig.length ? `<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>` : ''}
    </div>`

  panel.querySelector('#irr-det-strat-toggle')?.addEventListener('click', () => {
    const opts = panel.querySelector('#irr-det-strat-opts')
    opts.style.display = opts.style.display === 'none' ? '' : 'none'
  })
  panel.querySelector('#irr-det-modify')?.addEventListener('click', () => {
    panel.querySelector('#irr-det-strat-opts').style.display = 'none'
    openModifierSaison(p.id, () => { renderDetailPanel(p); showGlobaleView(true) })
  })
  panel.querySelector('#irr-det-stop')?.addEventListener('click', () => {
    panel.querySelector('#irr-det-strat-opts').style.display = 'none'
    const removed = IRRIG_SEASON.filter(i => i.plotId === p.id && seasonIds.has(i.seasonId) && !i.real && i.iso > TODAY)
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => !removed.includes(i)))
    saveIrrig()
    showSaveConfirmModal('Saison arrêtée', [
      `${removed.length} irrigation${removed.length !== 1 ? 's' : ''} future${removed.length !== 1 ? 's' : ''} supprimée${removed.length !== 1 ? 's' : ''}`,
      `Parcelle : ${p.name}`,
    ])
  })
  panel.querySelector('#irr-det-del-all')?.addEventListener('click', () => {
    panel.querySelector('#irr-det-strat-opts').style.display = 'none'
    const toRemove = IRRIG_SEASON.filter(i => i.plotId === p.id)
    if (!toRemove.length) return
    const hasPonctuelles = toRemove.some(i => !i.fromStrategy)
    showDeleteConfirmModal(
      `Supprimer toutes les irrigations de "${p.name}" ?`,
      `${toRemove.length} irrigation${toRemove.length !== 1 ? 's' : ''} seront supprimées (passées et futures).`
        + (hasPonctuelles ? '<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.' : ''),
      () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => !toRemove.includes(i)))
        saveIrrig()
        showSaveConfirmModal('Saison supprimée', [
          `${toRemove.length} irrigation${toRemove.length !== 1 ? 's' : ''} supprimée${toRemove.length !== 1 ? 's' : ''}`,
          `Parcelle : ${p.name}`,
        ])
      }
    )
  })

  panel.querySelectorAll('.irr-pr-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const ir = IRRIG_SEASON[+btn.dataset.idx]
      if (ir) openDetailItemEdit(ir, () => { renderDetailPanel(p); showGlobaleView(true) })
    })
  })
  panel.querySelectorAll('.irr-pr-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx
      if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig(); renderDetailPanel(p) }
    })
  })

  panel.querySelector('#irr-det-vol-input')?.addEventListener('change', e => {
    const val = e.target.value !== '' ? parseInt(e.target.value) : null
    patchParcel(p.id, { volumeMaxM3: val })
    renderDetailPanel(p)
    renderVolBanner()
  })
  panel.querySelector('#irr-det-debit-input')?.addEventListener('change', e => {
    const val = e.target.value !== '' ? parseFloat(e.target.value) : null
    patchParcel(p.id, { debitM3h: val })
    renderDetailPanel(p)
    refreshDurationIcons(p.id)
  })

  panel.querySelector('#irr-det-close').addEventListener('click', () => {
    document.getElementById('irr-page')?.classList.remove('irr-has-detail')
    panel.style.display = 'none'
    panel.dataset.plotId = ''
    highlightTableRow(null)
  })
}

function showQuickAddModal(plotId, plotName, iso, defaultMm = 10) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const p = plots.find(pl => pl.id === +plotId)
  const needsType = p && !hasIrrigType(p)

  const typeFieldHtml = needsType ? `
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${IRRIG_TYPES.map(t => `<option value="${t}"${t === (p.irrigation || 'Non renseigné') ? ' selected' : ''}>${t}</option>`).join('')}
      </select>
    </div>` : ''

  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${fmtDateFull(iso)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${needsType ? `<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>` : ''}
        ${typeFieldHtml}
        <div class="irr-edit-row">
          <span class="irr-edit-label">${plotName}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="${defaultMm}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save"${needsType ? ' disabled' : ''}>Enregistrer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-qa-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-qa-cancel').addEventListener('click', () => ov.remove())

  const saveBtn = ov.querySelector('#irr-qa-save')
  const typeSel = ov.querySelector('#irr-qa-type-sel')
  if (typeSel) {
    const syncSaveState = () => { saveBtn.disabled = NO_IRRIG_TYPES.has(typeSel.value) }
    syncSaveState()
    typeSel.addEventListener('change', syncSaveState)
  }

  saveBtn.addEventListener('click', () => {
    if (typeSel) {
      const type = typeSel.value
      if (NO_IRRIG_TYPES.has(type)) return
      patchParcel(p.id, { irrigation: type })
      p.irrigation = type
    }
    const qty = parseInt(ov.querySelector('#irr-qa-qty').value) || 10
    IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, plotId: +plotId, fromStrategy: false })
    saveIrrig()
    ov.remove()
    showGlobaleView(true)
  })
}

// ─── Left panel ───────────────────────────────────────────────────────────────

function renderLeft() {
  const left = document.getElementById('irr-left')
  const adherentOrgs = [...orgs].filter(o => o.id !== 100).sort((a, b) => a.name.localeCompare(b.name))
  const orgSelector = IS_ADMIN ? `
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${selectedOrgId === null ? ' selected' : ''}>Toutes les organisations</option>
        <option value="100"${selectedOrgId === 100 ? ' selected' : ''}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${adherentOrgs.map(o =>
            `<option value="${o.id}"${o.id === selectedOrgId ? ' selected' : ''}>${o.name}</option>`
          ).join('')}
        </optgroup>
      </select>
    </div>` : ''

  const page = document.getElementById('irr-page')
  if (leftCollapsed) {
    page?.classList.add('irr-left-collapsed')
    left.innerHTML = `
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`
    left.querySelector('#irr-left-toggle').addEventListener('click', () => {
      leftCollapsed = false; renderLeft()
    })
    return
  }
  page?.classList.remove('irr-left-collapsed')

  left.innerHTML = `
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${orgSelector}

    <button class="irr-lc-btn${activeAction==='saisie'?' irr-lc-btn--active':''}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${activeAction==='saisie'?'':' irr-lc-form--hidden'}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${multiSelectHTML('irr-s-scope', { allBtn: true })}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${TODAY}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm par parcelle)</span></label>
        <input type="number" class="irr-lc-input" id="irr-s-qty" value="10" min="1" />
      </div>
      <div class="irr-lc-err" id="irr-s-err" style="display:none">Veuillez sélectionner au moins une parcelle et renseigner tous les champs.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-s-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${activeAction==='saison'?' irr-lc-btn--active':''}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${activeAction==='saison'?'':' irr-lc-form--hidden'}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${multiSelectHTML('irr-sa-scope', { allBtn: true })}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${TODAY}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${addDays(TODAY, 120)}" />
      </div>
      <div class="irr-lc-field-row">
        <div class="irr-lc-field">
          <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm)</span></label>
          <input type="number" class="irr-lc-input" id="irr-sa-qty" value="10" min="1" />
        </div>
        <div class="irr-lc-field">
          <label class="irr-lc-lbl">Fréquence <span class="irr-lc-unit">(jours)</span></label>
          <input type="number" class="irr-lc-input" id="irr-sa-freq" value="7" min="1" max="30" />
        </div>
      </div>
      <div class="irr-lc-preview" id="irr-sa-preview">—</div>
      <div class="irr-lc-err" id="irr-sa-err" style="display:none">Veuillez sélectionner au moins une parcelle et renseigner tous les champs.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-sa-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${activeAction==='export'?' irr-lc-btn--active':''}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${activeAction==='export'?'':' irr-lc-form--hidden'}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${multiSelectHTML('irr-ex-scope', { allBtn: true })}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${IRRIG_SEASON.length ? [...IRRIG_SEASON].sort((a,b)=>a.iso<b.iso?-1:1)[0].iso : TODAY}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${IRRIG_SEASON.length ? [...IRRIG_SEASON].sort((a,b)=>a.iso>b.iso?-1:1)[0].iso : TODAY}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Données à inclure</label>
        <div class="irr-ef-checks">
          <label><input type="checkbox" id="irr-ex-irrig" checked /> Irrigations</label>
          <label><input type="checkbox" id="irr-ex-rain" checked /> Pluie</label>
        </div>
      </div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-ex-dl"><i class="bi bi-download"></i> Télécharger CSV</button>
    </div>
    </div>
    </div>

    <div class="irr-lc-features">
      <div class="irr-lc-features-title">Fonctionnalités</div>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-advisor" ${advisorEnabled ? 'checked' : ''} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${reservoirEnabled ? 'checked' : ''} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${detectorEnabled ? 'checked' : ''} />
        <span>Irrigation Detector</span>
      </label>
    </div>
  `

  left.querySelector('#irr-left-toggle')?.addEventListener('click', () => {
    leftCollapsed = true; renderLeft()
  })

  // Bind multi-selects
  if (activeAction === 'saisie')  bindMultiSelect(left, 'irr-s-scope')
  if (activeAction === 'saison')  bindMultiSelect(left, 'irr-sa-scope')
  if (activeAction === 'export')  bindMultiSelect(left, 'irr-ex-scope')

  // Org selector
  left.querySelector('#irr-org-select')?.addEventListener('change', e => {
    const val = e.target.value
    selectedOrgId = val === '' ? null : parseInt(val)
    plots = selectedOrgId === null ? ALL_PLOTS : ALL_PLOTS.filter(p => p.orgId === selectedOrgId)
    globaleExtraMonths = 0
    renderLeft()
    showGlobaleView()
  })

  // Accordion toggle
  left.querySelectorAll('.irr-lc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action
      activeAction = activeAction === action ? null : action
      renderLeft()
    })
  })

  // Saison preview
  function updateSaisonPreview() {
    const debut = left.querySelector('#irr-sa-debut')?.value
    const fin   = left.querySelector('#irr-sa-fin')?.value
    const qty   = parseInt(left.querySelector('#irr-sa-qty')?.value) || 0
    const freq  = parseInt(left.querySelector('#irr-sa-freq')?.value) || 0
    const prev  = left.querySelector('#irr-sa-preview')
    if (!prev) return
    if (!debut || !fin || freq <= 0) { prev.textContent = '—'; return }
    let n = 0, cur = new Date(debut), end = new Date(fin)
    while (cur <= end && n < 200) { n++; cur.setDate(cur.getDate() + freq) }
    if (n > 0) {
      const selIds    = getMultiSelectedIds(left, 'irr-sa-scope')
      const totalArea = selIds.reduce((s, id) => { const pl = sortedPlotList().find(p => p.id === id); return s + (pl?.area ?? 0) }, 0)
      const m3        = totalArea > 0 ? Math.round(n * qty * totalArea * 10) : 0
      const m3Str     = m3 > 0 ? ` · ${m3.toLocaleString('fr-FR')} m³` : ''
      prev.innerHTML  = `<span style="color:var(--pri);font-weight:600">↗ ${n} irrigations · ${n * qty} mm${m3Str}</span>`
    } else {
      prev.innerHTML = `<span style="color:var(--txt3)">Ajustez les paramètres</span>`
    }
  }

  if (activeAction === 'saison') {
    updateSaisonPreview()
    left.querySelector('#irr-sa-debut')?.addEventListener('change', updateSaisonPreview)
    left.querySelector('#irr-sa-fin')  ?.addEventListener('change', updateSaisonPreview)
    left.querySelector('#irr-sa-qty') ?.addEventListener('input',  updateSaisonPreview)
    left.querySelector('#irr-sa-freq')?.addEventListener('input',  updateSaisonPreview)
  }

  // Export download
  left.querySelector('#irr-ex-dl')?.addEventListener('click', () => {
    const start    = left.querySelector('#irr-ex-start').value
    const end      = left.querySelector('#irr-ex-end').value
    const inclIrr  = left.querySelector('#irr-ex-irrig').checked
    const inclRain = left.querySelector('#irr-ex-rain').checked
    const selIds   = getMultiSelectedIds(left, 'irr-ex-scope')
    const selPlots = selIds.length > 0 ? plots.filter(p => selIds.includes(p.id)) : sortedPlotList()

    const dates = new Set()
    if (inclIrr) for (const ir of IRRIG_SEASON) { if (ir.iso >= start && ir.iso <= end) dates.add(ir.iso) }
    if (inclRain) for (const r of RAIN_DATA) { if (r.iso >= start && r.iso <= end) dates.add(r.iso) }
    const sortedDates = [...dates].sort()

    const rainMap = {}
    if (inclRain) for (const r of RAIN_DATA) rainMap[r.iso] = r.mm

    const header = ['Date', ...selPlots.map(p => p.name + (inclRain ? ' (irrig.)' : ''))].join(';')
    const rows = sortedDates.map(d => {
      const cells = selPlots.map(p => {
        const irrigMm = inclIrr ? IRRIG_SEASON.filter(i => i.iso === d && i.plotId === p.id).reduce((s,i)=>s+i.mm,0) : 0
        const rainMm  = inclRain ? (rainMap[d] ?? 0) : 0
        const total   = irrigMm + rainMm
        return total > 0 ? total : ''
      })
      return [d, ...cells].join(';')
    })

    const csv  = [header, ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url  = URL.createObjectURL(blob)
    const a    = Object.assign(document.createElement('a'), { href: url, download: `irrigations_${start}_${end}.csv` })
    document.body.appendChild(a); a.click()
    setTimeout(() => { URL.revokeObjectURL(url); a.remove() }, 100)
  })

  // Saisie save
  left.querySelector('#irr-s-save')?.addEventListener('click', () => {
    const selectedPlotIds = getMultiSelectedIds(left, 'irr-s-scope')
    const dateVal         = left.querySelector('#irr-s-date').value
    const qtyVal          = parseInt(left.querySelector('#irr-s-qty').value) || 0
    const errEl           = left.querySelector('#irr-s-err')
    if (!selectedPlotIds.length || !dateVal || !qtyVal) {
      if (errEl) errEl.style.display = ''
      return
    }
    if (errEl) errEl.style.display = 'none'
    const isFut = dateVal > TODAY
    const doSaisie = () => {
      selectedPlotIds.forEach(plotId => {
        IRRIG_SEASON.push({ iso: dateVal, mm: qtyVal, real: !isFut, plotId, fromStrategy: false })
      })
      saveIrrig()
      showSaveConfirmModal('Irrigation enregistrée', [
        `Date : ${fmtDateFull(dateVal)}`,
        `Quantité : ${qtyVal} mm`,
        `Parcelles : ${selectedPlotIds.length} sélectionnée${selectedPlotIds.length > 1 ? 's' : ''}`,
      ])
    }
    const conflicts = IRRIG_SEASON.filter(i => selectedPlotIds.includes(i.plotId) && i.iso === dateVal)
    if (conflicts.length) {
      showConflictModal(conflicts.length, `${selectedPlotIds.length} parcelle(s)`, () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(selectedPlotIds.includes(i.plotId) && i.iso === dateVal)))
        doSaisie()
      })
      return
    }
    doSaisie()
  })

  // Feature checkboxes
  const refreshAll = () => {
    showGlobaleView()
    const panel = document.getElementById('irr-detail')
    const plotId = panel?.dataset.plotId
    if (plotId) { const p = plots.find(pl => String(pl.id) === plotId); if (p) renderDetailPanel(p) }
  }
  left.querySelector('#irr-feat-advisor')?.addEventListener('change', e => { advisorEnabled = e.target.checked; refreshAll() })
  left.querySelector('#irr-feat-reservoir')?.addEventListener('change', e => { reservoirEnabled = e.target.checked; refreshAll() })
  left.querySelector('#irr-feat-detector')?.addEventListener('change', e => { detectorEnabled = e.target.checked; refreshAll() })

  // Saison save
  left.querySelector('#irr-sa-save')?.addEventListener('click', () => {
    const selectedPlotIds = getMultiSelectedIds(left, 'irr-sa-scope')
    const debut    = left.querySelector('#irr-sa-debut').value
    const fin      = left.querySelector('#irr-sa-fin').value
    const qty      = parseInt(left.querySelector('#irr-sa-qty').value) || 10
    const freq     = parseInt(left.querySelector('#irr-sa-freq').value) || 7
    const errEl    = left.querySelector('#irr-sa-err')
    if (!selectedPlotIds.length || !debut || !fin) {
      if (errEl) errEl.style.display = ''
      return
    }
    if (errEl) errEl.style.display = 'none'
    const occs = []
    let cur = new Date(debut), end = new Date(fin)
    while (cur <= end && occs.length < 200) { occs.push(new Date(cur)); cur.setDate(cur.getDate() + freq) }
    const seasonId = generateSeasonId()
    const doSaison = () => {
      selectedPlotIds.forEach(plotId => {
        occs.forEach(d => {
          const iso = d.toISOString().slice(0, 10)
          IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, plotId, fromStrategy: true, seasonId })
        })
      })
      saveIrrig()
      showSaveConfirmModal('Saison enregistrée', [
        `Début : ${fmtDateFull(debut)} · Fin : ${fmtDateFull(fin)}`,
        `${occs.length} irrigations · ${qty} mm · tous les ${freq} j`,
        `Parcelles : ${selectedPlotIds.length} sélectionnée${selectedPlotIds.length > 1 ? 's' : ''}`,
      ])
    }
    const conflicts = IRRIG_SEASON.filter(i => selectedPlotIds.includes(i.plotId) && i.iso >= debut && i.iso <= fin)
    if (conflicts.length) {
      showConflictModal(conflicts.length, `${selectedPlotIds.length} parcelle(s)`, () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(selectedPlotIds.includes(i.plotId) && i.iso >= debut && i.iso <= fin)))
        doSaison()
      })
      return
    }
    doSaison()
  })
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function setupDataTip() {
  const tip = Object.assign(document.createElement('div'), { id: 'irr-data-tip', className: 'irr-data-tip' })
  document.body.appendChild(tip)
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('[data-tip]')
    if (!el) { tip.style.opacity = '0'; return }
    tip.textContent = el.dataset.tip
    tip.style.opacity = '1'
  })
  document.addEventListener('mousemove', e => {
    tip.style.left = (e.clientX + 14) + 'px'
    tip.style.top  = (e.clientY - 36) + 'px'
  })
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget?.closest('[data-tip]')) tip.style.opacity = '0'
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const _urlParams = new URLSearchParams(window.location.search)
  const _plotId    = _urlParams.get('plot')
  const _action    = _urlParams.get('action')
  if (_action === 'saisie' || _action === 'saison') activeAction = _action

  updateBreadcrumb()
  setupDataTip()
  renderLeft()
  showGlobaleView()
  window.addEventListener('irrig-updated', () => {
    showGlobaleView()
    const panel = document.getElementById('irr-detail')
    const plotId = panel?.dataset.plotId
    if (!plotId) return
    const p = plots.find(pl => String(pl.id) === plotId)
    if (p) renderDetailPanel(p)
  })

  if (_plotId) {
    const _p = plots.find(pl => pl.id === +_plotId)
    if (_p) {
      openDetailPanel(_p)
      if (_action === 'saisie' || _action === 'saison') {
        setTimeout(() => {
          const msId = _action === 'saisie' ? 'irr-s-scope' : 'irr-sa-scope'
          const cb = document.querySelector(`#${msId} input[value="${_plotId}"]`)
          if (cb) { cb.checked = true; cb.dispatchEvent(new Event('change')) }
        }, 50)
      }
    }
  }
})

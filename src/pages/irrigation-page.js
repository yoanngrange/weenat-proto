import { IRRIG_SEASON, RAIN_DATA, saveIrrig, generateSeasonId } from '../data/irrigations.js'
import { plots as ALL_PLOTS } from '../data/plots.js'
import { orgs } from '../data/orgs.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const ADHERENT_ORG_ID = 1
const IS_ADMIN = (localStorage.getItem('menuRole') || 'admin-reseau') === 'admin-reseau'
let selectedOrgId = null  // null = toutes les orgas (vue admin par défaut)
let plots = IS_ADMIN ? ALL_PLOTS : ALL_PLOTS.filter(p => p.orgId === ADHERENT_ORG_ID)

const TODAY = new Date().toISOString().split('T')[0]

let activeAction = null // 'saisie' | 'saison' | 'export'
let globaleExtraMonths = 0

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

function plotLabel(p) {
  return [p.name, p.crop, p.irrigation].filter(Boolean).join(' — ')
}

function sortedPlotList() {
  return [...plots].sort((a, b) => a.name.localeCompare(b.name, 'fr'))
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

// ─── Timeline SVG ─────────────────────────────────────────────────────────────

function renderTimeline(irrig) {
  if (irrig.length < 2) return ''
  const sorted = [...irrig].sort((a, b) => a.iso < b.iso ? -1 : 1)
  const MN = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const first = new Date(sorted[0].iso), last = new Date(sorted[sorted.length-1].iso)
  const tot = Math.max(last - first, 1)
  const W = 500, BY = 24, BH = 5, DR = 5, DCY = BY-DR-4, MLY = DCY-DR-3, DY = BY+BH+13, SH = DY+2
  const xOf = d => Math.round((d - first) / tot * W)
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
    <div class="irr-pr-info"><div class="irr-pr-label">${name}</div><div class="irr-pr-status" style="color:${col}">${ir.real ? 'Réalisée' : 'Planifiée'}</div></div>
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

function showGlobaleView(resetScroll = false) {
  const right = document.getElementById('irr-right')
  const maxFuture = addDays(TODAY, 14)

  const boundaryDates = [
    ...IRRIG_SEASON.map(i => i.iso),
    ...RAIN_DATA.filter(r => r.iso <= maxFuture).map(r => r.iso),
    maxFuture,
  ]
  if (!IRRIG_SEASON.length && !RAIN_DATA.length) {
    right.innerHTML = `<div class="irr-rv-hd">Vue globale</div><div class="irr-pr-empty"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`
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

  function plotRainMm(plotId, iso, baseMm) {
    if (!baseMm) return 0
    const [, m, d] = iso.split('-').map(Number)
    const seed = (plotId * 13 + m * 7 + d * 3) % 100
    if (seed < 12) return 0
    const factor = 0.75 + ((plotId * 11 + d * 5) % 50) / 100
    return Math.round(baseMm * factor)
  }

  const headers = sortedDates.map(d => {
    const isT = d === TODAY
    return `<th class="irr-gl-th${isT ? ' irr-gl-th--today' : ''}">${fmtCol(d)}</th>`
  }).join('')

  function plotRow(p) {
    const cells = sortedDates.map(d => {
      const isT    = d === TODAY
      const irrigs = IRRIG_SEASON.filter(i => i.iso === d && i.plotId === p.id)
      const total  = irrigs.reduce((s,i) => s+i.mm, 0)
      const isReal = irrigs.some(i => i.real)
      const rainOffset  = (p.id * 7 + 3) % 3 - 1
      const rainSrcDate = addDays(d, rainOffset)
      const rainMm      = plotRainMm(p.id, d, rainMap[rainSrcDate] ?? 0)
      let content  = ''
      if (total) {
        const col  = isReal ? '#E07820' : '#FFB705'
        const idxs = irrigs.map(i => IRRIG_SEASON.indexOf(i)).join(',')
        content += `<span class="irr-gl-val irr-gl-irrig" data-idxs="${idxs}" data-iso="${d}" style="color:${col};cursor:pointer">${total} mm</span>`
      }
      if (rainMm) content += `<span class="irr-gl-rain">${rainMm} mm</span>`
      if (!total) content += `<button class="irr-gl-add" data-plot-id="${p.id}" data-plot-name="${p.name}" data-iso="${d}">+</button>`
      return `<td class="irr-gl-td${isT ? ' irr-gl-td--today' : ''}">${content}</td>`
    }).join('')
    return `<tr data-row-plot="${p.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${p.id}">${p.name}</span></td>${cells}</tr>`
  }

  const rows = sortedPlotList().map(plotRow).join('')

  right.innerHTML = `
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-rv-hd" style="position:static">Vue globale</div>
        <div class="irr-gl-legend">
          <span><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. réalisée</span>
          <span><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</span>
          <span><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</span>
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles</th>${headers}</tr></thead>
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

  right.querySelectorAll('.irr-gl-irrig').forEach(el => {
    el.addEventListener('click', () => {
      showEditIrrigModal(el.dataset.idxs.split(',').map(Number), el.dataset.iso)
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

  const irrig    = IRRIG_SEASON.filter(i => i.plotId === p.id)
  const hasStrat = irrig.some(i => i.fromStrategy && i.seasonId)
  const stratIr  = irrig.filter(i => i.fromStrategy).sort((a,b) => a.iso < b.iso ? -1 : 1)
  const debut    = stratIr[0]?.iso
  const fin      = stratIr[stratIr.length - 1]?.iso
  const seasonIds = new Set(irrig.filter(i => i.fromStrategy && i.seasonId).map(i => i.seasonId))

  const seasonLine = debut && fin
    ? `<div><strong>Saison :</strong> ${fmtDateShort(debut)} → ${fmtDateShort(fin)}</div>`
    : '<div style="color:var(--txt3)">Pas de saison enregistrée</div>'

  const real = irrig.filter(i => i.real).sort((a,b) => a.iso > b.iso ? -1 : 1)
  const plan = irrig.filter(i => !i.real).sort((a,b) => a.iso < b.iso ? -1 : 1)

  const item = ir => {
    const idx = IRRIG_SEASON.indexOf(ir)
    const col = ir.real ? '#FF8500' : '#FFB705'
    const [, mo, dd] = ir.iso.split('-')
    const dateStr = `${parseInt(dd)} ${MONTHS_SHORT[parseInt(mo)-1]}`
    return `<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${col}"></div>
      <div class="irr-pr-date" style="color:${col};min-width:52px;font-size:13px;font-weight:600">${dateStr}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${col}">${ir.real ? 'Réalisée' : 'Planifiée'}</div></div>
      <div class="irr-pr-mm" style="color:${col}">${ir.mm} mm</div>
      <button class="irr-pr-del" data-idx="${idx}">🗑</button>
    </div>`
  }

  const stratBar = hasStrat ? `
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures de cette parcelle</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations de cette parcelle</span></button>
      </div>
    </div>` : ''

  panel.innerHTML = `
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <span class="irr-det-eyebrow">Vue détail</span>
        <span class="irr-det-name">${p.name}</span>
        <a class="irr-det-link" href="parcelle-detail.html?id=${p.id}">Voir la parcelle →</a>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">${seasonLine}</div>
        ${stratBar}
        ${renderCumuls(irrig)}
        ${renderTimeline(irrig)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${real.length ? `
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${real.length}</span></summary>
          <div>${real.map(item).join('')}</div>
        </details>` : ''}
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
  panel.querySelector('#irr-det-stop')?.addEventListener('click', () => {
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
      ...IRRIG_SEASON.filter(i => !(i.plotId === p.id && seasonIds.has(i.seasonId) && !i.real && i.iso > TODAY)))
    saveIrrig(); renderDetailPanel(p); showGlobaleView(true)
  })
  panel.querySelector('#irr-det-del-all')?.addEventListener('click', () => {
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
      ...IRRIG_SEASON.filter(i => !(i.plotId === p.id && seasonIds.has(i.seasonId))))
    saveIrrig(); renderDetailPanel(p); showGlobaleView(true)
  })

  panel.querySelectorAll('.irr-pr-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx
      if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig(); renderDetailPanel(p) }
    })
  })

  panel.querySelector('#irr-det-close').addEventListener('click', () => {
    document.getElementById('irr-page')?.classList.remove('irr-has-detail')
    panel.style.display = 'none'
    panel.dataset.plotId = ''
    highlightTableRow(null)
  })
}

function showQuickAddModal(plotId, plotName, iso) {
  document.querySelector('.irr-edit-overlay')?.remove()
  const ov = document.createElement('div')
  ov.className = 'irr-edit-overlay'
  ov.innerHTML = `
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${fmtDateFull(iso)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${plotName}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="10" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save">Enregistrer</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-qa-close').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-qa-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#irr-qa-save').addEventListener('click', () => {
    const qty = parseInt(ov.querySelector('#irr-qa-qty').value) || 10
    IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, plotId: +plotId, fromStrategy: false })
    saveIrrig()
    ov.remove()
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

  left.innerHTML = `
    <div class="irr-lc-hd">Irrigation</div>
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
      <p class="irr-ef-hint">Une ligne par date · Valeurs en mm</p>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-ex-dl"><i class="bi bi-download"></i> Télécharger CSV</button>
    </div>
  `

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
    prev.innerHTML = n > 0
      ? `<span style="color:var(--pri);font-weight:600">↗ ${n} irrigations · ${n * qty} mm au total</span>`
      : `<span style="color:var(--txt3)">Ajustez les paramètres</span>`
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

  const _urlParams = new URLSearchParams(window.location.search)
  const _plotId = _urlParams.get('plot')
  if (_plotId) {
    const _p = plots.find(pl => pl.id === +_plotId)
    if (_p) openDetailPanel(_p)
  }
})

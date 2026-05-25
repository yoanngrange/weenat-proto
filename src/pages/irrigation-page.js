import { IRRIG_SEASON, RAIN_DATA, saveIrrig, buildGroups } from '../data/irrigations.js'
import { plots as ALL_PLOTS } from '../data/plots.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'

const ADHERENT_ORG_ID = 1
const plots = ALL_PLOTS.filter(p => p.orgId === ADHERENT_ORG_ID)
const TODAY = new Date().toISOString().split('T')[0]

let activeAction = null // 'saisie' | 'saison' | 'voir' | 'export'
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
  const [, m, d] = iso.split('-'); return `${parseInt(d)}/${parseInt(m)}`
}

function getGroups() { return buildGroups(plots) }

function resolveScope(val) {
  if (!val || val === 'all') return null
  const g = getGroups().find(g => g.label === val)
  if (g) return { ids: g.ids, label: g.label }
  const p = plots.find(p => String(p.id) === String(val))
  return p ? { ids: [p.id], label: p.name } : null
}

function getIrrigForScope(scope) {
  if (!scope) return IRRIG_SEASON
  const g = getGroups().find(g => g.label === scope.label)
  if (g) return IRRIG_SEASON.filter(i => i.label === g.label)
  const p = plots.find(p => p.name === scope.label)
  if (p) {
    const gl = new Set(getGroups().filter(grp => grp.ids.includes(p.id)).map(grp => grp.label))
    return IRRIG_SEASON.filter(i => i.label === p.name || gl.has(i.label))
  }
  return IRRIG_SEASON
}

function plotIrrigLabels(p) {
  const s = new Set([p.name])
  for (const g of getGroups()) { if (g.ids.includes(p.id)) s.add(g.label) }
  return s
}

// ─── Nested scope select HTML ─────────────────────────────────────────────────

function showSaveConfirmModal(title, lines) {
  document.querySelector('.irr-save-confirm')?.remove()
  showGlobaleView()
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
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#irr-confirm-close').addEventListener('click', () => ov.remove())
}

function scopeSelectHTML(id, currentVal = '') {
  const groups = getGroups()
  const standalones = plots.filter(p => !groups.some(g => g.ids.includes(p.id)))
  const isAll = !currentVal || currentVal === 'all'
  const groupOpts = groups.map(g => {
    const childOpts = g.ids.map(gid => plots.find(p => p.id === gid)).filter(Boolean)
      .map(p => `<option value="${p.id}"${String(currentVal) === String(p.id) ? ' selected' : ''}>${p.name}</option>`).join('')
    return `<optgroup label="${g.label} (${g.ids.length} parcelles)">
      <option value="${g.label}"${currentVal === g.label ? ' selected' : ''}>⬡ Groupe · ${g.label}</option>
      ${childOpts}
    </optgroup>`
  }).join('')
  const standalone = standalones.length
    ? `<optgroup label="Autres parcelles">${standalones.map(p => `<option value="${p.id}"${String(currentVal) === String(p.id) ? ' selected' : ''}>${p.name}</option>`).join('')}</optgroup>`
    : ''
  return `<select class="irr-lc-select" id="${id}">
    <option value="" disabled${!currentVal ? ' selected' : ''}>— Sélectionner —</option>
    <option value="all"${currentVal === 'all' ? ' selected' : ''}>Toutes les parcelles</option>
    ${groupOpts}${standalone}
  </select>`
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
  const idx = IRRIG_SEASON.indexOf(ir)
  const col = ir.real ? '#FF8500' : '#FFB705'
  const [, mm, dd] = ir.iso.split('-')
  return `<div class="irr-pr-item">
    <div class="irr-pr-stripe" style="background:${col}"></div>
    <div class="irr-pr-date" style="color:${col}"><span class="irr-pr-day">${dd}</span><span class="irr-pr-mon">/${mm}</span></div>
    <div class="irr-pr-info"><div class="irr-pr-label">${ir.label}</div><div class="irr-pr-status" style="color:${col}">${ir.real ? 'Réalisée' : 'Planifiée'}</div></div>
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

function showIrrigView(scope) {
  const irrig = getIrrigForScope(scope)
  const right = document.getElementById('irr-right')
  const real = irrig.filter(i => i.real).sort((a,b) => a.iso > b.iso ? -1 : 1)
  const plan = irrig.filter(i => !i.real).sort((a,b) => a.iso < b.iso ? -1 : 1)

  let title = scope ? scope.label : 'Toutes les parcelles'

  if (!scope) {
    const byLabel = {}
    for (const ir of irrig) { if (!byLabel[ir.label]) byLabel[ir.label] = []; byLabel[ir.label].push(ir) }
    const sections = Object.entries(byLabel).map(([label, items]) => {
      const r = items.filter(i => i.real).length, p = items.filter(i => !i.real).length
      return `<div class="irr-pr-by-label">
        <div class="irr-pr-group-lbl">${label}</div>
        ${renderTimeline(items)}
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum">${items.length} irrigation${items.length>1?'s':''} <span class="irr-pr-details-sub">${r} effectuée${r>1?'s':''} · ${p} planifiée${p>1?'s':''}</span></summary>
          <div>${items.sort((a,b) => a.iso<b.iso?-1:1).map(irrigItem).join('')}</div>
        </details>
      </div>`
    }).join('')
    right.innerHTML = `<div class="irr-rv-hd">Irrigations — Toutes les parcelles</div>${renderCumuls(irrig)}${sections || '<div class="irr-pr-empty"><i class="bi bi-calendar3"></i><p>Aucune irrigation enregistrée</p></div>'}`
  } else {
    right.innerHTML = `
      <div class="irr-rv-hd">Irrigations — ${title}</div>
      ${renderCumuls(irrig)}
      ${renderTimeline(irrig)}
      ${real.length ? `<div class="irr-pr-section-lbl">Effectuées</div>${real.map(irrigItem).join('')}` : ''}
      ${plan.length ? `<div class="irr-pr-section-lbl">Planifiées</div>${plan.map(irrigItem).join('')}` : ''}
      ${!irrig.length ? `<div class="irr-pr-empty"><i class="bi bi-calendar3"></i><p>Aucune irrigation pour cette sélection</p></div>` : ''}
    `
  }
  bindDelBtns(right)
}

function showGlobaleView() {
  const right = document.getElementById('irr-right')
  const maxFuture = addDays(TODAY, 14)

  // Collect boundary dates to determine range
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

  // rangeEnd = last IRRIG_SEASON date (or today+14 if no irrigations) + extra months
  const lastIrrigIso = IRRIG_SEASON.length
    ? [...IRRIG_SEASON].map(i => i.iso).sort().at(-1)
    : null
  const baseEnd = lastIrrigIso && lastIrrigIso > maxFuture ? lastIrrigIso : maxFuture
  const extendedEnd = new Date(baseEnd)
  extendedEnd.setMonth(extendedEnd.getMonth() + globaleExtraMonths)
  const rangeEnd = extendedEnd.toISOString().split('T')[0]

  // Preserve scroll position if table already exists
  const prevScroll = right.querySelector('#irr-gl-body')?.scrollLeft ?? null

  // Generate ALL dates in range
  const sortedDates = []
  let cur = new Date(rangeStart)
  const end = new Date(rangeEnd)
  while (cur <= end) {
    sortedDates.push(cur.toISOString().split('T')[0])
    cur.setDate(cur.getDate() + 1)
  }
  const rainMap = {}
  for (const r of RAIN_DATA) { rainMap[r.iso] = r.mm }

  // Deterministic per-plot rain variation
  function plotRainMm(plotId, iso, baseMm) {
    if (!baseMm) return 0
    const [, m, d] = iso.split('-').map(Number)
    const seed = (plotId * 13 + m * 7 + d * 3) % 100
    if (seed < 12) return 0  // ~12% chance this plot missed the rain
    const factor = 0.75 + ((plotId * 11 + d * 5) % 50) / 100  // 0.75–1.25×
    return Math.round(baseMm * factor)
  }

  const headers = sortedDates.map(d => {
    const isT = d === TODAY
    return `<th class="irr-gl-th${isT ? ' irr-gl-th--today' : ''}">${fmtCol(d)}</th>`
  }).join('')

  function plotRow(p) {
    const labels = plotIrrigLabels(p)
    const cells = sortedDates.map(d => {
      const isT    = d === TODAY
      const irrigs = IRRIG_SEASON.filter(i => i.iso === d && labels.has(i.label))
      const total  = irrigs.reduce((s,i) => s+i.mm, 0)
      const isReal = irrigs.some(i => i.real)
      const rainOffset  = (p.id * 7 + 3) % 3 - 1  // -1, 0 ou +1 jour par parcelle
      const rainSrcDate = addDays(d, rainOffset)
      const rainMm      = plotRainMm(p.id, d, rainMap[rainSrcDate] ?? 0)
      let content  = ''
      if (total) {
        const col  = isReal ? '#E07820' : '#FFB705'
        const idxs = irrigs.map(i => IRRIG_SEASON.indexOf(i)).join(',')
        content += `<span class="irr-gl-val irr-gl-irrig" data-idxs="${idxs}" data-iso="${d}" style="color:${col};cursor:pointer">${total} mm</span>`
      }
      if (rainMm) content += `<span class="irr-gl-rain">${rainMm} mm</span>`
      if (!content) content = `<button class="irr-gl-add" data-plot-id="${p.id}" data-plot-name="${p.name}" data-iso="${d}">+</button>`
      return `<td class="irr-gl-td${isT ? ' irr-gl-td--today' : ''}">${content}</td>`
    }).join('')
    return `<tr data-row-plot="${p.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${p.id}">${p.name}</span></td>${cells}</tr>`
  }

  const groups      = getGroups()
  const standalones = plots.filter(p => !groups.some(g => g.ids.includes(p.id)))
  const emptyCells  = sortedDates.map(d => `<td class="irr-gl-td${d===TODAY?' irr-gl-td--today':''}"></td>`).join('')

  const rows = [
    ...groups.map(g => {
      const gPlots = g.ids.map(id => plots.find(p => p.id === id)).filter(Boolean)
      const groupHeader = `<tr class="irr-gl-group-row" data-row-group="${g.label}"><td class="irr-gl-group-cell"><span class="irr-gl-group-link" data-group-label="${g.label}">⬡ ${g.label}</span></td>${emptyCells}</tr>`
      return groupHeader + gPlots.map(plotRow).join('')
    }),
    standalones.length
      ? `<tr class="irr-gl-group-row"><td class="irr-gl-group-cell irr-gl-group-cell--other">Autres parcelles</td>${emptyCells}</tr>` + standalones.map(plotRow).join('')
      : ''
  ].join('')

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
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles & groupes</th>${headers}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${globaleExtraMonths === 0 ? 'disabled' : ''}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${globaleExtraMonths > 0 ? `+${globaleExtraMonths} mois au-delà de la saison` : `Fin de saison : ${fmtDateShort(baseEnd)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`

  // Sync top scrollbar with table + auto-scroll to column before today
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
      // Initial render: scroll so yesterday is at left edge
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

  // Month navigation
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

  right.querySelectorAll('.irr-gl-group-link').forEach(el => {
    el.addEventListener('click', () => {
      const g = getGroups().find(g => g.label === el.dataset.groupLabel)
      if (g) openGroupDetailPanel(g)
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
        ${irrigs.map((ir, i) => `
          <div class="irr-edit-row">
            <span class="irr-edit-label">${ir.label}</span>
            <input type="number" class="irr-edit-qty" data-i="${i}" value="${ir.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${i}">🗑</button>
          </div>`).join('')}
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

function highlightTableRow(plotId, groupLabel) {
  const right = document.getElementById('irr-right')
  if (!right) return
  right.querySelectorAll('[data-row-plot],[data-row-group]').forEach(tr => tr.classList.remove('irr-gl-row--active'))
  if (plotId)     right.querySelector(`[data-row-plot="${plotId}"]`)?.classList.add('irr-gl-row--active')
  if (groupLabel) right.querySelector(`[data-row-group="${CSS.escape(groupLabel)}"]`)?.classList.add('irr-gl-row--active')
}

function openGroupDetailPanel(g) {
  const page  = document.getElementById('irr-page')
  const panel = document.getElementById('irr-detail')
  if (!page || !panel) return
  if (panel.dataset.plotId === `group:${g.label}` && page.classList.contains('irr-has-detail')) {
    page.classList.remove('irr-has-detail'); panel.style.display = 'none'; panel.dataset.plotId = ''; return
  }
  panel.dataset.plotId = `group:${g.label}`
  panel.style.display = ''; page.classList.add('irr-has-detail')
  highlightTableRow(null, g.label)

  const irrig    = IRRIG_SEASON.filter(i => i.label === g.label)
  const hasStrat = irrig.some(i => i.fromStrategy)
  const stratIr  = irrig.filter(i => i.fromStrategy).sort((a,b) => a.iso < b.iso ? -1 : 1)
  const debut    = stratIr[0]?.iso, fin = stratIr[stratIr.length-1]?.iso
  const real     = irrig.filter(i => i.real).sort((a,b) => a.iso > b.iso ? -1 : 1)
  const plan     = irrig.filter(i => !i.real).sort((a,b) => a.iso < b.iso ? -1 : 1)
  const item = ir => {
    const idx = IRRIG_SEASON.indexOf(ir), col = ir.real ? '#FF8500' : '#FFB705'
    const [, mo, dd] = ir.iso.split('-')
    return `<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${col}"></div>
      <div class="irr-pr-date" style="color:${col};min-width:52px;font-size:13px;font-weight:600">${parseInt(dd)} ${MONTHS_SHORT[parseInt(mo)-1]}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${col}">${ir.real?'Réalisée':'Planifiée'}</div></div>
      <div class="irr-pr-mm" style="color:${col}">${ir.mm} mm</div>
      <button class="irr-pr-del" data-idx="${idx}">🗑</button>
    </div>`
  }
  const stratBar = hasStrat ? `
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures du groupe</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations du groupe</span></button>
      </div>
    </div>` : ''

  panel.innerHTML = `
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <span class="irr-det-eyebrow">Groupe</span>
        <span class="irr-det-name">⬡ ${g.label}</span>
        <span style="font-size:12px;color:var(--txt3);flex-shrink:0">${g.ids.length} parcelles</span>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">
          ${debut && fin ? `<div><strong>Saison :</strong> ${fmtDateShort(debut)} → ${fmtDateShort(fin)}</div>` : '<div style="color:var(--txt3)">Pas de saison enregistrée</div>'}
        </div>
        ${stratBar}
        ${renderCumuls(irrig)}
        ${renderTimeline(irrig)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${real.length ? `<details class="irr-pr-details"><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${real.length}</span></summary><div>${real.map(item).join('')}</div></details>` : ''}
      ${plan.length ? `<details class="irr-pr-details" open><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${plan.length}</span></summary><div>${plan.map(item).join('')}</div></details>` : ''}
      ${!irrig.length ? `<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation pour ce groupe</p></div>` : ''}
    </div>`

  panel.querySelector('#irr-det-strat-toggle')?.addEventListener('click', () => {
    const opts = panel.querySelector('#irr-det-strat-opts')
    opts.style.display = opts.style.display === 'none' ? '' : 'none'
  })
  panel.querySelector('#irr-det-stop')?.addEventListener('click', () => {
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => !(i.label === g.label && !i.real && i.iso > TODAY)))
    saveIrrig(); openGroupDetailPanel(g); showGlobaleView()
  })
  panel.querySelector('#irr-det-del-all')?.addEventListener('click', () => {
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => i.label !== g.label))
    saveIrrig(); openGroupDetailPanel(g); showGlobaleView()
  })
  panel.querySelectorAll('.irr-pr-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx
      if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig(); openGroupDetailPanel(g) }
    })
  })
  panel.querySelector('#irr-det-close').addEventListener('click', () => {
    document.getElementById('irr-page')?.classList.remove('irr-has-detail')
    panel.style.display = 'none'; panel.dataset.plotId = ''
  })
}

function openDetailPanel(p) {
  const page  = document.getElementById('irr-page')
  const panel = document.getElementById('irr-detail')
  if (!page || !panel) return

  // Toggle off if same plot
  if (panel.dataset.plotId === String(p.id) && page.classList.contains('irr-has-detail')) {
    page.classList.remove('irr-has-detail')
    panel.style.display = 'none'
    panel.dataset.plotId = ''
    return
  }
  panel.dataset.plotId = String(p.id)
  panel.style.display = ''
  page.classList.add('irr-has-detail')
  highlightTableRow(String(p.id), null)
  renderDetailPanel(p)
}

const MONTHS_SHORT = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']

function renderDetailPanel(p) {
  const panel = document.getElementById('irr-detail')
  const page  = document.getElementById('irr-page')
  if (!panel) return

  const groups  = getGroups()
  const group   = groups.find(g => g.ids.includes(p.id))
  const scope   = { ids: [p.id], label: p.name }
  const irrig   = getIrrigForScope(scope)
  const hasStrat = irrig.some(i => i.fromStrategy)
  const stratIr = irrig.filter(i => i.fromStrategy).sort((a,b) => a.iso < b.iso ? -1 : 1)
  const debut   = stratIr[0]?.iso
  const fin     = stratIr[stratIr.length - 1]?.iso

  const groupLine  = group ? `<div><strong>Groupe :</strong> ${group.label} — ${group.ids.length} parcelles</div>` : ''
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
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations</span></button>
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
        <div class="irr-det-meta">${groupLine}${seasonLine}</div>
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

  // Modifier la saison toggle
  panel.querySelector('#irr-det-strat-toggle')?.addEventListener('click', () => {
    const opts = panel.querySelector('#irr-det-strat-opts')
    opts.style.display = opts.style.display === 'none' ? '' : 'none'
  })
  // Only manage entries attributed directly to this plot (not group-label entries)
  panel.querySelector('#irr-det-stop')?.addEventListener('click', () => {
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => !(i.label === p.name && !i.real && i.iso > TODAY)))
    saveIrrig(); renderDetailPanel(p); showGlobaleView()
  })
  panel.querySelector('#irr-det-del-all')?.addEventListener('click', () => {
    IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => i.label !== p.name))
    saveIrrig(); renderDetailPanel(p); showGlobaleView()
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
    highlightTableRow(null, null)
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
    const p   = plots.find(p => String(p.id) === String(plotId))
    if (p) {
      IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, label: p.name, fromStrategy: false })
      saveIrrig()
    }
    ov.remove()
  })
}

function showExportView() {
  const right = document.getElementById('irr-right')
  right.innerHTML = `
    <div class="irr-rv-hd">Exporter les irrigations</div>
    <div class="irr-export-form">
      <div class="irr-ef-field">
        <label class="irr-ef-lbl">Périmètre</label>
        ${scopeSelectHTML('irr-exp-scope', 'all')}
      </div>
      <div class="irr-ef-row">
        <div class="irr-ef-field">
          <label class="irr-ef-lbl">Du</label>
          <input type="date" class="irr-pm-input" id="irr-exp-start" value="${IRRIG_SEASON.length ? [...IRRIG_SEASON].sort((a,b)=>a.iso<b.iso?-1:1)[0].iso : TODAY}" />
        </div>
        <div class="irr-ef-field">
          <label class="irr-ef-lbl">Au</label>
          <input type="date" class="irr-pm-input" id="irr-exp-end" value="${IRRIG_SEASON.length ? [...IRRIG_SEASON].sort((a,b)=>a.iso>b.iso?-1:1)[0].iso : TODAY}" />
        </div>
      </div>
      <div class="irr-ef-field">
        <label class="irr-ef-lbl">Données à inclure</label>
        <div class="irr-ef-checks">
          <label><input type="checkbox" id="irr-exp-irrig" checked /> Irrigations</label>
          <label><input type="checkbox" id="irr-exp-rain" checked /> Pluie</label>
        </div>
      </div>
      <p class="irr-ef-hint">Une ligne par date · Une colonne par parcelle · Valeurs en mm</p>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-exp-dl"><i class="bi bi-download"></i> Télécharger CSV</button>
    </div>`

  right.querySelector('#irr-exp-dl').addEventListener('click', () => {
    const scopeVal = right.querySelector('#irr-exp-scope').value
    const start    = right.querySelector('#irr-exp-start').value
    const end      = right.querySelector('#irr-exp-end').value
    const inclIrr  = right.querySelector('#irr-exp-irrig').checked
    const inclRain = right.querySelector('#irr-exp-rain').checked
    const scope    = resolveScope(scopeVal)
    const selPlots = scope ? plots.filter(p => scope.ids.includes(p.id)) : plots

    const dates = new Set()
    if (inclIrr) for (const ir of IRRIG_SEASON) { if (ir.iso >= start && ir.iso <= end) dates.add(ir.iso) }
    if (inclRain) for (const r of RAIN_DATA) { if (r.iso >= start && r.iso <= end) dates.add(r.iso) }
    const sortedDates = [...dates].sort()

    const rainMap = {}
    if (inclRain) for (const r of RAIN_DATA) rainMap[r.iso] = r.mm

    const header = ['Date', ...selPlots.map(p => p.name + (inclRain ? ' (irrig.)' : ''))].join(';')
    const rows = sortedDates.map(d => {
      const cells = selPlots.map(p => {
        const labels = plotIrrigLabels(p)
        const irrigMm = inclIrr ? IRRIG_SEASON.filter(i => i.iso === d && labels.has(i.label)).reduce((s,i)=>s+i.mm,0) : 0
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
}

// ─── Left panel ───────────────────────────────────────────────────────────────

function renderLeft() {
  const left = document.getElementById('irr-left')
  left.innerHTML = `
    <div class="irr-lc-hd">Irrigation</div>

    <button class="irr-lc-btn${activeAction==='saisie'?' irr-lc-btn--active':''}" data-action="saisie">
      <i class="bi bi-droplet-fill"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${activeAction==='saisie'?'':' irr-lc-form--hidden'}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelle ou groupe</label>
        ${scopeSelectHTML('irr-s-scope')}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${TODAY}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm par parcelle)</span></label>
        <input type="number" class="irr-lc-input" id="irr-s-qty" value="10" min="1" />
      </div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-s-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${activeAction==='saison'?' irr-lc-btn--active':''}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${activeAction==='saison'?'':' irr-lc-form--hidden'}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelle ou groupe</label>
        ${scopeSelectHTML('irr-sa-scope')}
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
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-sa-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${activeAction==='voir'?' irr-lc-btn--active':''}" data-action="voir">
      <i class="bi bi-calendar3"></i><span>Voir les irrigations</span>
    </button>

    <button class="irr-lc-btn${activeAction==='export'?' irr-lc-btn--active':''}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
    </button>
  `

  // Accordion toggle
  left.querySelectorAll('.irr-lc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action
      // 'voir' et 'export' n'ont pas de formulaire — pas de toggle
      activeAction = (action === 'voir' || action === 'export')
        ? action
        : (activeAction === action ? null : action)
      renderLeft()
      if (action === 'voir')   showGlobaleView()
      if (action === 'export') {
        const page  = document.getElementById('irr-page')
        const panel = document.getElementById('irr-detail')
        if (page && panel) { page.classList.remove('irr-has-detail'); panel.style.display = 'none'; panel.dataset.plotId = '' }
        showExportView()
      }
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

  // Saisie save
  left.querySelector('#irr-s-save')?.addEventListener('click', () => {
    const scopeVal = left.querySelector('#irr-s-scope').value
    const dateVal  = left.querySelector('#irr-s-date').value
    const qtyVal   = parseInt(left.querySelector('#irr-s-qty').value) || 10
    const scope    = resolveScope(scopeVal)
    const isFut    = dateVal > TODAY
    if (!scopeVal) return
    const labels   = scope ? [scope.label] : []
    labels.forEach(lbl => IRRIG_SEASON.push({ iso: dateVal, mm: qtyVal, real: !isFut, label: lbl, fromStrategy: false }))
    saveIrrig()
    showSaveConfirmModal('Irrigation enregistrée', [
      `Date : ${fmtDateFull(dateVal)}`,
      `Quantité : ${qtyVal} mm`,
      `Périmètre : ${scope?.label ?? 'Toutes les parcelles'}`,
    ])
  })

  // Saison save
  left.querySelector('#irr-sa-save')?.addEventListener('click', () => {
    const scopeVal = left.querySelector('#irr-sa-scope').value
    const debut    = left.querySelector('#irr-sa-debut').value
    const fin      = left.querySelector('#irr-sa-fin').value
    const qty      = parseInt(left.querySelector('#irr-sa-qty').value) || 10
    const freq     = parseInt(left.querySelector('#irr-sa-freq').value) || 7
    if (!scopeVal || !debut || !fin) return
    const scope    = resolveScope(scopeVal)
    const labels   = scope ? [scope.label] : []
    const occs     = []
    let cur = new Date(debut), end = new Date(fin)
    while (cur <= end && occs.length < 200) { occs.push(new Date(cur)); cur.setDate(cur.getDate() + freq) }
    labels.forEach(lbl => occs.forEach(d => {
      const iso = d.toISOString().slice(0, 10)
      IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, label: lbl, fromStrategy: true })
    }))
    saveIrrig()
    showSaveConfirmModal('Saison enregistrée', [
      `Début : ${fmtDateFull(debut)} · Fin : ${fmtDateFull(fin)}`,
      `${occs.length} irrigations · ${qty} mm · tous les ${freq} j`,
      `Périmètre : ${scope?.label ?? 'Toutes les parcelles'}`,
    ])
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
  window.addEventListener('irrig-updated', () => { showGlobaleView() })
})

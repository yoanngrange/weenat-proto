import { IRRIG_SEASON, RAIN_DATA, saveIrrig, generateSeasonId } from '../data/irrigations.js'
import { patchParcel, applyStoredPlotPatches } from '../data/store.js'
import { plots as ALL_PLOTS } from '../data/plots.js'
import { IRRIG_TYPES } from '../data/constants.js'

const TODAY = new Date().toISOString().split('T')[0]
const ADHERENT_ORG_ID = 1
applyStoredPlotPatches(ALL_PLOTS)
const plots = ALL_PLOTS.filter(p => p.orgId === ADHERENT_ORG_ID)

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDateFull(iso) {
  const mNames = ['jan.','fév.','mar.','avr.','mai','jun.','jul.','aoû.','sep.','oct.','nov.','déc.']
  const [, m, d] = iso.split('-')
  return `${parseInt(d)} ${mNames[parseInt(m) - 1]} ${iso.split('-')[0]}`
}

function fmtDateShort(iso) {
  const months = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const [, m, d] = iso.split('-')
  return `${parseInt(d)} ${months[parseInt(m) - 1]}`
}

function checkIcon(on, partial) {
  if (on)      return `<div class="iw-chk iw-chk--on"><i class="bi bi-check"></i></div>`
  if (partial) return `<div class="iw-chk iw-chk--partial">−</div>`
  return `<div class="iw-chk"></div>`
}

function plotInfoHtml(p) {
  const crop    = p.crop
  const irr     = p.irrigation || null
  const texture = p.substrate ? 'Substrat : ' + p.substrate : (p.texture || null)
  const parts   = [crop, irr, texture].filter(Boolean)
  if (!parts.length) return `<span class="iw-plot-info iw-plot-info--miss">type d'irrigation non renseigné</span>`
  return `<span class="iw-plot-info">${parts.join(' · ')}</span>`
}

function sortedPlots() {
  return [...plots].sort((a, b) => a.name.localeCompare(b.name, 'fr'))
}

// ─── Timeline SVG ─────────────────────────────────────────────────────────────

function renderTimeline(irrig) {
  if (irrig.length < 2) return ''
  const sorted = [...irrig].sort((a, b) => a.iso < b.iso ? -1 : 1)
  const MNAMES = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const first   = new Date(sorted[0].iso)
  const last    = new Date(sorted[sorted.length - 1].iso)
  const totalMs = Math.max(last - first, 1)
  const SVG_W   = 600, BAR_Y = 26, BAR_H = 5, DOT_R = 5
  const DOT_CY  = BAR_Y - DOT_R - 4
  const MLBL_Y  = DOT_CY - DOT_R - 3
  const DATE_Y  = BAR_Y + BAR_H + 13
  const SVG_H   = DATE_Y + 2

  const xOf = d => Math.round((d - first) / totalMs * SVG_W)
  const fmtD = iso => { const [, m, d] = iso.split('-'); return `${parseInt(d)}/${parseInt(m)}` }

  const ticks = []
  const cur = new Date(first.getFullYear(), first.getMonth() + 1, 1)
  while (cur <= last) { ticks.push(new Date(cur)); cur.setMonth(cur.getMonth() + 1) }

  const tickLines = ticks.map(t =>
    `<line x1="${xOf(t)}" y1="${BAR_Y - 6}" x2="${xOf(t)}" y2="${BAR_Y + BAR_H + 6}" stroke="#C0BEB8" stroke-width="1"/>`
  ).join('')

  const bounds = [first, ...ticks, last]
  const monthLabels = bounds.slice(0, -1).map((b, i) => {
    const x1 = xOf(b), x2 = xOf(bounds[i + 1])
    if (x2 - x1 < 16) return ''
    return `<text x="${Math.round((x1 + x2) / 2)}" y="${MLBL_Y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${MNAMES[b.getMonth()]}</text>`
  }).join('')

  const fmtShort = iso => { const MN=['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']; const[,m,d]=iso.split('-'); return `${parseInt(d)} ${MN[parseInt(m)-1]}` }
  const dots = sorted.map(ir => {
    const col = ir.real ? '#FF8500' : '#FFB705'
    const cx  = xOf(new Date(ir.iso))
    const tip = `${fmtShort(ir.iso)} · ${ir.mm} mm`
    return `<circle cx="${cx}" cy="${DOT_CY}" r="${DOT_R}" fill="${col}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${cx}" cy="${DOT_CY}" r="${DOT_R+6}" fill="transparent" pointer-events="all" data-tip="${tip}"/>`
  }).join('')

  return `<div class="iw-timeline">
    <svg width="${SVG_W}" height="${SVG_H}" viewBox="0 0 ${SVG_W} ${SVG_H}" style="width:100%;display:block">
      ${monthLabels}
      <rect x="0" y="${BAR_Y}" width="${SVG_W}" height="${BAR_H}" rx="${BAR_H / 2}" fill="#E0DED8"/>
      ${tickLines}
      ${dots}
      <text x="1" y="${DATE_Y}" font-size="10" fill="#B0AEA8">${fmtD(sorted[0].iso)}</text>
      <text x="${SVG_W - 1}" y="${DATE_Y}" font-size="10" fill="#B0AEA8" text-anchor="end">${fmtD(sorted[sorted.length - 1].iso)}</text>
    </svg>
    <div class="iw-timeline-legend">
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`
}

// ─── Cumuls bar ───────────────────────────────────────────────────────────────

function renderCumuls(irrig) {
  const real    = irrig.filter(i => i.real)
  const planned = irrig.filter(i => !i.real)
  const tR = real.reduce((s, i) => s + i.mm, 0)
  const tP = planned.reduce((s, i) => s + i.mm, 0)
  return `<div class="iw-cumuls-bar">
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Effectuées</div>
      <div class="iw-cumul-val" style="color:#FF8500">${tR} mm</div>
      <div class="iw-cumul-count">${real.length} irrigation${real.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Planifiées</div>
      <div class="iw-cumul-val" style="color:#FFB705">${tP} mm</div>
      <div class="iw-cumul-count">${planned.length} irrigation${planned.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Total saison</div>
      <div class="iw-cumul-val">${tR + tP} mm</div>
      <div class="iw-cumul-count">${real.length + planned.length} irrigations</div>
    </div>
  </div>`
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function openWebConfirmation({ title, params, plotNames, addedCount, filterPlotId }) {
  const { ov, close } = createOverlay()

  const paramsHtml = params.map(p => `
    <div class="iw-conf-param">
      <span class="iw-conf-param-lbl">${p.label}</span>
      <span class="iw-conf-param-val">${p.value}</span>
    </div>`).join('')

  const MAX_P = 5
  const shownL  = plotNames.slice(0, MAX_P)
  const hiddenL = plotNames.slice(MAX_P)
  const labelsHtml = shownL.map(l => `<span class="iw-apercu-plot-tag">${l}</span>`).join('') +
    (hiddenL.length ? `<span class="iw-apercu-plot-more">+ ${hiddenL.length} autre${hiddenL.length > 1 ? 's' : ''}</span>` : '')

  ov.innerHTML = `
    <div class="iw-modal iw-modal--confirm">
      <div class="iw-conf-icon">✓</div>
      <div class="iw-conf-title">${title}</div>
      <div class="iw-conf-params">${paramsHtml}</div>
      <div class="iw-apercu-plots" style="text-align:center;margin-bottom:20px">${labelsHtml}</div>
      <div class="iw-conf-actions">
        <button class="iw-conf-opt" id="iw-conf-edit">
          <div class="iw-conf-opt-icon">✎</div>
          <div>
            <div class="iw-conf-opt-title">Modifier</div>
            <div class="iw-conf-opt-sub">Corriger une erreur de saisie</div>
          </div>
        </button>
        <button class="iw-conf-opt iw-conf-opt--pri" id="iw-conf-voir">
          <div class="iw-conf-opt-icon">📅</div>
          <div>
            <div class="iw-conf-opt-title">Voir les irrigations</div>
            <div class="iw-conf-opt-sub">Effectuées et planifiées</div>
          </div>
        </button>
        <button class="iw-conf-opt" id="iw-conf-close">
          <div class="iw-conf-opt-icon">↩</div>
          <div>
            <div class="iw-conf-opt-title">Fermer</div>
            <div class="iw-conf-opt-sub">Retour au tableau de bord</div>
          </div>
        </button>
      </div>
    </div>`

  ov.querySelector('#iw-conf-edit').addEventListener('click', () => {
    IRRIG_SEASON.splice(IRRIG_SEASON.length - addedCount, addedCount)
    saveIrrig()
    close()
  })
  ov.querySelector('#iw-conf-voir').addEventListener('click', () => {
    close()
    openVoirIrrigations(filterPlotId ?? null)
  })
  ov.querySelector('#iw-conf-close').addEventListener('click', close)
}

function showWebToast(msg) {
  const t = document.createElement('div')
  t.className = 'iw-toast'
  t.textContent = msg
  document.body.appendChild(t)
  requestAnimationFrame(() => t.classList.add('iw-toast--in'))
  setTimeout(() => {
    t.classList.remove('iw-toast--in')
    setTimeout(() => t.remove(), 400)
  }, 3000)
}

// ─── Ask irrigation type if missing ──────────────────────────────────────────

function askIrrigTypeIfNeeded(ids, callback) {
  const missing = plots.filter(p => ids.has(p.id) && (!p.irrigation || p.irrigation === 'Non irrigué'))
  if (!missing.length) { callback(); return }

  const { ov, close } = createOverlay()
  ov.innerHTML = `
    <div class="iw-modal" style="max-width:400px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Type d'irrigation non renseigné</span>
        <button class="iw-modal-close" id="iw-ask-close">×</button>
      </div>
      <div class="iw-modal-body">
        <p style="font-size:13px;color:#636366;margin:0 0 14px">
          ${missing.length === 1
            ? `<strong>${missing[0].name}</strong> n'a pas de type d'irrigation renseigné.`
            : `${missing.length} parcelles n'ont pas de type d'irrigation renseigné.`}
        </p>
        <div class="iw-field">
          <label class="iw-label">Type d'irrigation</label>
          <select class="iw-input" id="iw-ask-type">
            <option value="">— Choisir un type —</option>
            ${IRRIG_TYPES.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-ask-skip">Passer</button>
        <button class="iw-btn iw-btn--pri" id="iw-ask-confirm">Confirmer</button>
      </div>
    </div>`

  const confirm = () => {
    const val = ov.querySelector('#iw-ask-type').value
    if (val) missing.forEach(p => { p.irrigation = val; patchParcel(p.id, { irrigation: val }) })
    close(); callback()
  }
  ov.querySelector('#iw-ask-close').addEventListener('click', () => { close(); callback() })
  ov.querySelector('#iw-ask-skip').addEventListener('click', () => { close(); callback() })
  ov.querySelector('#iw-ask-confirm').addEventListener('click', confirm)
}

// ─── Base overlay factory ─────────────────────────────────────────────────────

function createOverlay() {
  const ov = document.createElement('div')
  ov.className = 'iw-overlay'
  document.body.appendChild(ov)
  requestAnimationFrame(() => ov.classList.add('iw-overlay--in'))
  const close = () => {
    ov.classList.remove('iw-overlay--in')
    setTimeout(() => ov.remove(), 250)
  }
  ov.addEventListener('click', e => { if (e.target === ov) close() })
  return { ov, close }
}

// ─── Selection panel helpers ──────────────────────────────────────────────────

function buildFlatPlotListHTML(selectedIds) {
  return sortedPlots().map(p => {
    const sel = selectedIds.has(p.id)
    return `<div class="iw-plot-row${sel ? ' iw-plot-row--sel' : ''}" data-pid="${p.id}">
      ${checkIcon(sel, false)}
      <div><div class="iw-plot-name">${p.name}</div>${plotInfoHtml(p)}</div>
    </div>`
  }).join('')
}

function selectionPanelHTML(selectedIds, preselect) {
  if (preselect) {
    const preselectPlots = plots.filter(p => preselect.ids.includes(p.id))
    return `<div class="iw-panel iw-panel--fixed">
      <div class="iw-presel-banner">
        <i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i>
        <span>${preselect.label} <span class="iw-presel-count">· ${preselect.ids.length} parcelle${preselect.ids.length > 1 ? 's' : ''}</span></span>
      </div>
      ${preselectPlots.map(p => `<div class="iw-sel-name">· ${p.name}</div>`).join('')}
    </div>`
  }
  return `<div class="iw-panel iw-panel--scroll">
    <div class="iw-sel-toolbar">
      <button class="iw-sel-all-btn" id="iw-sel-all" type="button">Tout sélectionner</button>
    </div>
    <div id="iw-sel-list">${buildFlatPlotListHTML(selectedIds)}</div>
  </div>`
}

function selSummaryHTML(selectedIds) {
  const n = selectedIds.size
  if (n === 0) return `<div class="iw-sel-empty">Aucune parcelle sélectionnée</div>`
  const names = [...selectedIds].map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
  return `<div class="iw-sel-summary">
    <div class="iw-sel-title">${n === 1 ? names[0] : `${n} parcelles`}</div>
    ${names.map(n => `<div class="iw-sel-name">· ${n}</div>`).join('')}
  </div>`
}

function bindSelectionCards(ov, selectedIds, onUpdate) {
  ov.querySelectorAll('.iw-plot-row').forEach(el => {
    el.addEventListener('click', () => {
      const id = +el.dataset.pid
      selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id)
      const list = ov.querySelector('#iw-sel-list')
      if (list) list.innerHTML = buildFlatPlotListHTML(selectedIds)
      bindSelectionCards(ov, selectedIds, onUpdate)
      onUpdate()
    })
  })
  ov.querySelector('#iw-sel-all')?.addEventListener('click', () => {
    const all = sortedPlots()
    const anyUnchecked = all.some(p => !selectedIds.has(p.id))
    all.forEach(p => anyUnchecked ? selectedIds.add(p.id) : selectedIds.delete(p.id))
    const list = ov.querySelector('#iw-sel-list')
    if (list) list.innerHTML = buildFlatPlotListHTML(selectedIds)
    ov.querySelector('#iw-sel-all').textContent = anyUnchecked ? 'Tout désélectionner' : 'Tout sélectionner'
    bindSelectionCards(ov, selectedIds, onUpdate)
    onUpdate()
  })
}

// ─── Saisie d'irrigation ─────────────────────────────────────────────────────

function openSaisie(preselect = null) {
  const selectedIds = new Set(preselect?.ids ?? [])
  let dateVal = TODAY
  let qtyVal  = 10

  const { ov, close } = createOverlay()

  ov.innerHTML = `
    <div class="iw-modal iw-modal--wide">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Saisir une irrigation</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Paramètres</div>
            <div class="iw-field">
              <label class="iw-label">Date</label>
              <input type="date" class="iw-input" id="iw-date" value="${dateVal}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm par parcelle)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${qtyVal}" min="1" style="width:80px" />
            </div>
            <div class="iw-divider"></div>
            <div class="iw-section-lbl">Sélection</div>
            <div id="iw-sel-sum">${preselect ? '' : selSummaryHTML(selectedIds)}</div>
          </div>
          ${selectionPanelHTML(selectedIds, preselect)}
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-save" ${!preselect && selectedIds.size === 0 ? 'disabled' : ''}>Enregistrer</button>
      </div>
    </div>`

  ov.querySelector('#iw-close').addEventListener('click', close)
  ov.querySelector('#iw-cancel').addEventListener('click', close)
  ov.querySelector('#iw-date').addEventListener('change', e => { dateVal = e.target.value })
  ov.querySelector('#iw-qty').addEventListener('input', e => { qtyVal = parseInt(e.target.value) || 1 })

  function updateSave() {
    ov.querySelector('#iw-save').disabled = !preselect && selectedIds.size === 0
    const sum = ov.querySelector('#iw-sel-sum')
    if (sum) sum.innerHTML = selSummaryHTML(selectedIds)
  }

  if (!preselect) bindSelectionCards(ov, selectedIds, updateSave)

  ov.querySelector('#iw-save').addEventListener('click', () => {
    const ids = preselect ? new Set(preselect.ids) : selectedIds
    askIrrigTypeIfNeeded(ids, () => {
      const isFut = dateVal > TODAY
      ids.forEach(plotId => {
        IRRIG_SEASON.push({ iso: dateVal, mm: qtyVal, real: !isFut, plotId, fromStrategy: false })
      })
      const plotNames = [...ids].map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
      saveIrrig()
      close()
      openWebConfirmation({
        title: ids.size > 1 ? 'Irrigations enregistrées' : 'Irrigation enregistrée',
        params: [
          { label: 'Date',     value: fmtDateFull(dateVal) },
          { label: 'Quantité', value: `${qtyVal} mm` },
        ],
        plotNames,
        addedCount: ids.size,
        filterPlotId: ids.size === 1 ? [...ids][0] : null,
      })
    })
  })
}

// ─── Saison d'irrigation ─────────────────────────────────────────────────────

function openSaison(preselect = null) {
  const selectedIds = new Set(preselect?.ids ?? [])
  let debut  = TODAY
  let fin    = new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString().split('T')[0]
  let qty    = 10
  let freq   = 7
  let step   = 'form'

  const { ov, close } = createOverlay()

  function computeOccs() {
    if (!debut || !fin || freq <= 0) return []
    const occs = []
    const end  = new Date(fin)
    let cur    = new Date(debut)
    while (cur <= end && occs.length < 100) {
      occs.push(new Date(cur))
      cur.setDate(cur.getDate() + freq)
    }
    return occs
  }

  function renderFormBody() {
    const occs = computeOccs()
    const preview = occs.length > 0
      ? `<div class="iw-preview-ok">↗ ${occs.length} irrigations · ${occs.length * qty} mm au total</div>`
      : `<div class="iw-preview-empty">Ajustez les dates et la fréquence</div>`

    return `
      <div class="iw-two-col">
        <div class="iw-panel iw-panel--params">
          <div class="iw-section-lbl" style="margin-top:0">Récurrence</div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Début</label>
              <input type="date" class="iw-input" id="iw-debut" value="${debut}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fin</label>
              <input type="date" class="iw-input" id="iw-fin" value="${fin}" />
            </div>
          </div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm/irrig.)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${qty}" min="1" style="width:70px" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fréquence <span class="iw-unit">(jours)</span></label>
              <input type="number" class="iw-input" id="iw-freq" value="${freq}" min="1" max="30" style="width:70px" />
            </div>
          </div>
          ${preview}
        </div>
        ${selectionPanelHTML(selectedIds, preselect)}
      </div>`
  }

  function renderApercuBody() {
    const occs      = computeOccs()
    const pastOccs   = occs.filter(d => d.toISOString().slice(0, 10) <  TODAY)
    const futureOccs = occs.filter(d => d.toISOString().slice(0, 10) >= TODAY)
    const n = preselect ? preselect.ids.length : selectedIds.size

    function occRow(d) {
      const iso  = d.toISOString().slice(0, 10)
      const col  = iso >= TODAY ? '#FFB705' : '#FF8500'
      return `<div class="iw-occ-row">
        <span>${fmtDateFull(iso)}</span>
        <span style="font-weight:700;color:${col}">${qty} mm</span>
      </div>`
    }

    const affectedPlots = preselect
      ? plots.filter(p => preselect.ids.includes(p.id))
      : plots.filter(p => selectedIds.has(p.id))
    const MAX_P = 4
    const shownP  = affectedPlots.slice(0, MAX_P)
    const hiddenP = affectedPlots.slice(MAX_P)
    const plotsRecap = `
      <div class="iw-apercu-plots">
        <div class="iw-section-lbl">Parcelles concernées</div>
        ${shownP.map(p => `<span class="iw-apercu-plot-tag">${p.name}</span>`).join('')}${hiddenP.length ? `<span class="iw-apercu-plot-more">+ ${hiddenP.length} autre${hiddenP.length > 1 ? 's' : ''}</span>` : ''}
      </div>`

    return `
      <div class="iw-apercu-summary">
        <div>
          <div class="iw-apercu-big">${occs.length} irrigations</div>
          <div class="iw-apercu-sub">${fmtDateShort(debut)} → ${fmtDateShort(fin)} · tous les ${freq}j</div>
        </div>
        <div style="text-align:right">
          <div class="iw-apercu-big">${occs.length * qty} mm</div>
          <div class="iw-apercu-sub">${n} parcelle${n > 1 ? 's' : ''} · ${qty} mm/irrig.</div>
        </div>
      </div>
      ${plotsRecap}
      ${pastOccs.length ? `<div class="iw-section-lbl">Irrigations effectuées</div>${pastOccs.map(occRow).join('')}` : ''}
      ${futureOccs.length ? `
        <div class="iw-section-lbl" style="margin-top:${pastOccs.length ? '12px' : '0'}">Irrigations planifiées</div>
        ${futureOccs.slice(0, 6).map(occRow).join('')}
        ${futureOccs.length > 6 ? `
          <div id="iw-apercu-rest" style="display:none">${futureOccs.slice(6).map(occRow).join('')}</div>
          <button class="iw-occ-more" id="iw-apercu-more">... et ${futureOccs.length - 6} irrigation${futureOccs.length - 6 > 1 ? 's' : ''} de plus</button>` : ''}` : ''}
    `
  }

  function updateNextBtn() {
    const n    = preselect ? preselect.ids.length : selectedIds.size
    const occs = computeOccs()
    const btn  = ov.querySelector('#iw-next-btn')
    if (btn) btn.disabled = n === 0 || occs.length === 0
  }

  function bindFormEvents() {
    if (!preselect) bindSelectionCards(ov, selectedIds, updateNextBtn)

    const refresh = () => {
      const occs = computeOccs()
      const prev = ov.querySelector('.iw-preview-ok, .iw-preview-empty')
      if (prev) {
        prev.className = occs.length > 0 ? 'iw-preview-ok' : 'iw-preview-empty'
        prev.textContent = occs.length > 0 ? `↗ ${occs.length} irrigations · ${occs.length * qty} mm au total` : 'Ajustez les dates et la fréquence'
      }
      updateNextBtn()
    }
    ov.querySelector('#iw-debut')?.addEventListener('change', e => { debut = e.target.value; refresh() })
    ov.querySelector('#iw-fin')  ?.addEventListener('change', e => { fin   = e.target.value; refresh() })
    ov.querySelector('#iw-qty')  ?.addEventListener('input',  e => { qty   = parseInt(e.target.value) || 1; refresh() })
    ov.querySelector('#iw-freq') ?.addEventListener('input',  e => { freq  = parseInt(e.target.value) || 1; refresh() })
  }

  function render() {
    const modal = ov.querySelector('.iw-modal')
    modal.querySelector('.iw-modal-body').innerHTML = step === 'form' ? renderFormBody() : renderApercuBody()
    modal.querySelector('#iw-back-btn').style.display  = step === 'form' ? 'none' : ''
    modal.querySelector('#iw-next-btn').style.display  = step === 'form' ? '' : 'none'
    modal.querySelector('#iw-conf-btn').style.display  = step === 'form' ? 'none' : ''
    if (step === 'form') { updateNextBtn(); bindFormEvents() }
    else {
      ov.querySelector('#iw-apercu-more')?.addEventListener('click', e => {
        ov.querySelector('#iw-apercu-rest').style.display = ''
        e.target.remove()
      })
    }
  }

  ov.innerHTML = `
    <div class="iw-modal iw-modal--wide">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Saison d'irrigation</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--sec" id="iw-back-btn" style="display:none"><i class="bi bi-arrow-left"></i> Modifier</button>
        <button class="iw-btn iw-btn--pri" id="iw-next-btn" disabled>Voir l'aperçu →</button>
        <button class="iw-btn iw-btn--pri" id="iw-conf-btn" style="display:none">Confirmer la saison</button>
      </div>
    </div>`

  ov.querySelector('#iw-close').addEventListener('click', close)
  ov.querySelector('#iw-cancel').addEventListener('click', close)
  ov.querySelector('#iw-back-btn').addEventListener('click', () => { step = 'form'; render() })
  ov.querySelector('#iw-next-btn').addEventListener('click', () => { step = 'apercu'; render() })
  ov.querySelector('#iw-conf-btn').addEventListener('click', () => {
    const occs = computeOccs()
    const ids  = preselect ? new Set(preselect.ids) : selectedIds
    askIrrigTypeIfNeeded(ids, () => {
      const seasonId = generateSeasonId()
      occs.forEach(d => {
        const iso = d.toISOString().slice(0, 10)
        ids.forEach(plotId => {
          IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, plotId, fromStrategy: true, seasonId })
        })
      })
      const plotNames = [...ids].map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
      saveIrrig()
      close()
      openWebConfirmation({
        title: 'Saison enregistrée',
        params: [
          { label: 'Début',                value: fmtDateFull(occs[0]?.toISOString().slice(0,10) ?? '') },
          { label: 'Fin',                  value: fmtDateFull(occs[occs.length-1]?.toISOString().slice(0,10) ?? '') },
          { label: 'Quantité',             value: `${qty} mm/irrig.` },
          { label: 'Fréquence',            value: `tous les ${freq} jours` },
          { label: 'Irrigations générées', value: `${occs.length * ids.size}` },
        ],
        plotNames,
        addedCount: occs.length * ids.size,
        filterPlotId: ids.size === 1 ? [...ids][0] : null,
      })
    })
  })

  render()
}

// ─── Edit irrigation modal ────────────────────────────────────────────────────

function openEditIrrigModal(ir, onDone) {
  let editDate = ir.iso
  let editMm   = ir.mm

  const { ov, close } = createOverlay()

  ov.innerHTML = `
    <div class="iw-modal" style="max-width:420px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">${ir.real ? "Modifier l'irrigation réalisée" : "Modifier l'irrigation planifiée"}</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-field">
          <label class="iw-label">Date</label>
          <input type="date" class="iw-input" id="iw-edit-date" value="${ir.iso}" />
        </div>
        <div class="iw-field">
          <label class="iw-label">Quantité (mm)</label>
          <input type="number" class="iw-input" id="iw-edit-qty" value="${ir.mm}" min="1" style="width:80px" />
        </div>
      </div>
      <div class="iw-modal-ft iw-modal-ft--spread">
        <button class="iw-btn iw-btn--danger" id="iw-delete">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="iw-save">Enregistrer</button>
        </div>
      </div>
    </div>`

  ov.querySelector('#iw-close').addEventListener('click', close)
  ov.querySelector('#iw-cancel').addEventListener('click', close)
  ov.querySelector('#iw-edit-date').addEventListener('change', e => { editDate = e.target.value })
  ov.querySelector('#iw-edit-qty').addEventListener('input', e => { const v = parseInt(e.target.value); if (v > 0) editMm = v })

  ov.querySelector('#iw-delete').addEventListener('click', () => {
    const idx = IRRIG_SEASON.indexOf(ir)
    if (idx > -1) IRRIG_SEASON.splice(idx, 1)
    saveIrrig(); close(); onDone()
  })

  ov.querySelector('#iw-save').addEventListener('click', () => {
    ir.iso  = editDate
    ir.mm   = editMm
    ir.real = editDate <= TODAY
    saveIrrig(); close(); onDone()
  })
}

// ─── Edit strategy modal ──────────────────────────────────────────────────────

function openEditStratModal(plotId, onDone) {
  let showStop   = false
  let showDelete = false

  const { ov, close } = createOverlay()

  function getSeasonIds() {
    return new Set(
      IRRIG_SEASON.filter(i => i.plotId === plotId && i.fromStrategy && i.seasonId).map(i => i.seasonId)
    )
  }

  function renderBody() {
    const body = ov.querySelector('.iw-modal-body')
    body.innerHTML = `
      <div class="iw-strat-opt" id="strat-modify">
        <div class="iw-strat-opt-icon" style="background:#E6F1FB">✎</div>
        <div>
          <div class="iw-strat-opt-title">Modifier les paramètres</div>
          <div class="iw-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-stop">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">✕</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime les irrigations futures de cette parcelle</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-delete">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">🗑</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations de cette parcelle</div>
        </div>
      </div>
      ${showStop ? `
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les occurrences futures ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="stop-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="stop-confirm">Confirmer</button>
        </div>
      </div>` : ''}
      ${showDelete ? `
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les irrigations de cette saison ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="del-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="del-confirm">Supprimer tout</button>
        </div>
      </div>` : ''}`

    const p = plots.find(pl => pl.id === plotId)
    const preselect = p ? { ids: [p.id], label: p.name } : null

    body.querySelector('#strat-modify')?.addEventListener('click', () => {
      close(); openSaison(preselect)
    })
    body.querySelector('#strat-stop')?.addEventListener('click', () => { showStop = true; showDelete = false; renderBody() })
    body.querySelector('#strat-delete')?.addEventListener('click', () => { showDelete = true; showStop = false; renderBody() })
    body.querySelector('#stop-cancel')?.addEventListener('click', () => { showStop = false; renderBody() })
    body.querySelector('#stop-confirm')?.addEventListener('click', () => {
      const seasonIds = getSeasonIds()
      IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => !(i.plotId === plotId && seasonIds.has(i.seasonId) && !i.real)))
      saveIrrig(); close(); onDone()
    })
    body.querySelector('#del-cancel')?.addEventListener('click', () => { showDelete = false; renderBody() })
    body.querySelector('#del-confirm')?.addEventListener('click', () => {
      const seasonIds = getSeasonIds()
      IRRIG_SEASON.splice(0, IRRIG_SEASON.length, ...IRRIG_SEASON.filter(i => !(i.plotId === plotId && seasonIds.has(i.seasonId))))
      saveIrrig(); close(); onDone()
    })
  }

  ov.innerHTML = `
    <div class="iw-modal" style="max-width:440px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Gérer la saison</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Fermer</button>
      </div>
    </div>`

  ov.querySelector('#iw-close').addEventListener('click', close)
  ov.querySelector('#iw-cancel').addEventListener('click', close)
  renderBody()
}

// ─── Export CSV ───────────────────────────────────────────────────────────────

function openExportCSV() {
  const selIds  = new Set(plots.map(p => p.id))
  const sorted  = [...IRRIG_SEASON].sort((a, b) => a.iso < b.iso ? -1 : 1)
  let startDate = sorted[0]?.iso ?? TODAY
  let endDate   = sorted[sorted.length - 1]?.iso ?? TODAY

  const { ov, close } = createOverlay()

  function plotsHTML2() {
    return sortedPlots().map(p => {
      const sel = selIds.has(p.id)
      return `<div class="iw-plot-row${sel ? ' iw-plot-row--sel' : ''}" data-pid="${p.id}">
        ${checkIcon(sel, false)}
        <div class="iw-plot-name">${p.name}</div>
      </div>`
    }).join('')
  }

  ov.innerHTML = `
    <div class="iw-modal" style="max-width:560px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Export CSV</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--scroll">
            <div class="iw-section-lbl">Parcelles</div>
            <div id="iw-export-plots">${plotsHTML2()}</div>
          </div>
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Période</div>
            <div class="iw-field">
              <label class="iw-label">Du</label>
              <input type="date" class="iw-input" id="iw-exp-start" value="${startDate}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Au</label>
              <input type="date" class="iw-input" id="iw-exp-end" value="${endDate}" />
            </div>
            <div class="iw-section-lbl">Format</div>
            <div class="iw-export-info">Une ligne par date · Une colonne par parcelle · Valeurs en mm</div>
          </div>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-do-export"><i class="bi bi-download"></i> Télécharger CSV</button>
      </div>
    </div>`

  ov.querySelector('#iw-close').addEventListener('click', close)
  ov.querySelector('#iw-cancel').addEventListener('click', close)
  ov.querySelector('#iw-exp-start').addEventListener('change', e => { startDate = e.target.value })
  ov.querySelector('#iw-exp-end').addEventListener('change', e => { endDate = e.target.value })

  function bindExportPlots() {
    ov.querySelectorAll('#iw-export-plots .iw-plot-row').forEach(el => {
      el.addEventListener('click', () => {
        const id = +el.dataset.pid
        selIds.has(id) ? selIds.delete(id) : selIds.add(id)
        ov.querySelector('#iw-export-plots').innerHTML = plotsHTML2()
        bindExportPlots()
      })
    })
  }
  bindExportPlots()

  ov.querySelector('#iw-do-export').addEventListener('click', () => {
    const selPlots = sortedPlots().filter(p => selIds.has(p.id))
    if (!selPlots.length) { showWebToast('Sélectionnez au moins une parcelle'); return }

    const dates = new Set()
    for (const ir of IRRIG_SEASON) {
      if (ir.iso >= startDate && ir.iso <= endDate) dates.add(ir.iso)
    }
    const sortedDates = [...dates].sort()

    const header = ['Date', ...selPlots.map(p => p.name)].join(';')
    const rows = sortedDates.map(date => {
      const cells = selPlots.map(p => {
        const total = IRRIG_SEASON
          .filter(ir => ir.iso === date && ir.plotId === p.id)
          .reduce((s, ir) => s + ir.mm, 0)
        return total > 0 ? total : ''
      })
      return [date, ...cells].join(';')
    })

    const csv  = [header, ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href = url; a.download = `irrigations_${startDate}_${endDate}.csv`
    document.body.appendChild(a); a.click()
    setTimeout(() => { URL.revokeObjectURL(url); a.remove() }, 100)
    close()
  })
}

// ─── Voir les irrigations ─────────────────────────────────────────────────────

function openVoirIrrigations(plotId = null) {
  let filter = plotId ? String(plotId) : 'all'

  const { ov, close } = createOverlay()

  function getIrrig() {
    if (filter === 'all') return IRRIG_SEASON
    return IRRIG_SEASON.filter(i => i.plotId === +filter)
  }

  function resolvePreselect() {
    if (filter === 'all') return null
    const p = plots.find(p => String(p.id) === filter)
    return p ? { ids: [p.id], label: p.name } : null
  }

  const plotOpts = sortedPlots().map(p =>
    `<option value="${p.id}"${String(p.id) === filter ? ' selected' : ''}>${p.name}</option>`
  ).join('')

  ov.innerHTML = `
    <div class="iw-modal iw-modal--full">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Voir les irrigations</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-full-toolbar">
        <div class="iw-filter-wrap">
          <label class="iw-label" style="margin:0 8px 0 0;white-space:nowrap">Parcelle</label>
          <select class="iw-select" id="iw-filter">
            <option value="all"${filter === 'all' ? ' selected' : ''}>Toutes les parcelles</option>
            ${plotOpts}
          </select>
        </div>
        <div class="iw-toolbar-actions">
          <button class="iw-btn iw-btn--sec" id="iw-strat-btn" style="display:none"><i class="bi bi-sliders"></i> Gérer la saison</button>
          <button class="iw-btn iw-btn--sec" id="iw-export-btn"><i class="bi bi-download"></i> Export CSV</button>
        </div>
      </div>
      <div class="iw-full-body" id="iw-full-body"></div>
    </div>`

  ov.querySelector('#iw-close').addEventListener('click', close)
  ov.querySelector('#iw-filter').addEventListener('change', e => { filter = e.target.value; renderContent() })
  ov.querySelector('#iw-export-btn').addEventListener('click', openExportCSV)

  function renderContent() {
    const body      = ov.querySelector('#iw-full-body')
    const irrig     = getIrrig()
    const hasStrat  = irrig.some(i => i.fromStrategy)
    const stratBtn  = ov.querySelector('#iw-strat-btn')
    stratBtn.style.display = hasStrat && filter !== 'all' ? '' : 'none'
    stratBtn.onclick = () => openEditStratModal(+filter, renderContent)

    if (!irrig.length) {
      body.innerHTML = `
        <div class="iw-empty">
          <i class="bi bi-calendar3" style="font-size:36px;opacity:.2"></i>
          <div>Aucune irrigation enregistrée pour cette sélection</div>
          <div class="iw-empty-actions">
            <button class="iw-btn iw-btn--pri" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
            <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Saisir une saison</button>
          </div>
        </div>`
      body.querySelector('#iw-add-saisie').addEventListener('click', () => { close(); openSaisie(resolvePreselect()) })
      body.querySelector('#iw-add-saison').addEventListener('click', () => { close(); openSaison(resolvePreselect()) })
      return
    }

    const openSections = {}
    body.querySelectorAll('details[data-section]').forEach(d => { openSections[d.dataset.section] = d.open })

    const future = [...irrig].filter(i => !i.real).sort((a, b) => a.iso < b.iso ? -1 : 1)
    const past   = [...irrig].filter(i =>  i.real).sort((a, b) => a.iso > b.iso ? -1 : 1)

    function item(ir) {
      const idx      = IRRIG_SEASON.indexOf(ir)
      const col      = ir.real ? '#FF8500' : '#FFB705'
      const [, mm, dd] = ir.iso.split('-')
      const plotName = plots.find(p => p.id === ir.plotId)?.name ?? '—'
      return `<div class="iw-list-item">
        <div class="iw-list-stripe" style="background:${col}"></div>
        <div class="iw-list-date"><span style="font-size:15px;font-weight:700;color:${col}">${dd}</span><span style="font-size:10px;color:${col}">/${mm}</span></div>
        <div style="flex:1">
          <div class="iw-list-label">${plotName}</div>
          <div class="iw-list-status" style="color:${col}">${ir.real ? 'Réalisée' : 'Planifiée'}</div>
        </div>
        <div class="iw-list-mm" style="color:${col}">${ir.mm} mm</div>
        <button class="iw-edit-btn" data-iidx="${idx}">✎</button>
        <button class="iw-del-btn"  data-iidx="${idx}">🗑</button>
      </div>`
    }

    const actionBar = hasStrat && filter !== 'all'
      ? `<div style="display:flex;justify-content:flex-end;margin-bottom:10px">
           <button class="iw-strat-inline-btn" id="iw-strat-inline"><i class="bi bi-sliders"></i> Modifier la saison</button>
         </div>`
      : `<div class="iw-add-bar">
           <button class="iw-btn iw-btn--sec" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Ajouter une saison</button>
         </div>`

    body.innerHTML = `
      ${renderCumuls(irrig)}
      ${renderTimeline(irrig)}
      ${actionBar}
      ${past.length ? `
        <details class="iw-section-details" data-section="effectuees" open>
          <summary class="iw-section-summary">Effectuées <span class="iw-section-count">${past.length}</span></summary>
          <div class="iw-section-body">${past.map(item).join('')}</div>
        </details>` : ''}
      ${future.length ? `
        <details class="iw-section-details" data-section="planifiees" open>
          <summary class="iw-section-summary">Planifiées <span class="iw-section-count">${future.length}</span></summary>
          <div class="iw-section-body">${future.map(item).join('')}</div>
        </details>` : ''}
    `

    body.querySelectorAll('details[data-section]').forEach(d => {
      const s = d.dataset.section
      if (s in openSections) d.open = openSections[s]
    })

    body.querySelectorAll('.iw-edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ir = IRRIG_SEASON[+btn.dataset.iidx]
        if (ir) openEditIrrigModal(ir, renderContent)
      })
    })
    body.querySelectorAll('.iw-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = +btn.dataset.iidx
        if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig(); renderContent() }
      })
    })
    body.querySelector('#iw-add-saisie')?.addEventListener('click', () => { close(); openSaisie(resolvePreselect()) })
    body.querySelector('#iw-add-saison')?.addEventListener('click', () => { close(); openSaison(resolvePreselect()) })
    body.querySelector('#iw-strat-inline')?.addEventListener('click', () => openEditStratModal(+filter, renderContent))
  }

  renderContent()
}

// ─── Data-tip tooltip ─────────────────────────────────────────────────────────

;(() => {
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
})()

window.WebIrrig = { openSaisie, openSaison, openVoirIrrigations }

import { pushDetail, popDetail, clearDirty } from '../nav.js'
import { IRRIG_SEASON, RAIN_DATA, saveIrrig, buildGroups } from '../../data/irrigations.js'
import { patchParcel } from '../../data/store.js'

function initFakeScrollbars(container) {
  container.querySelectorAll('.irr-zone').forEach(zone => {
    const inner = zone.querySelector('.irr-zone-inner')
    if (!inner) return
    if (!zone.querySelector('.irr-fake-track')) {
      const track = document.createElement('div')
      track.className = 'irr-fake-track'
      zone.appendChild(track)
    }
    let thumb = zone.querySelector('.irr-fake-thumb')
    if (!thumb) {
      thumb = document.createElement('div')
      thumb.className = 'irr-fake-thumb'
      zone.appendChild(thumb)
    }
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = inner
      if (scrollHeight <= clientHeight) { thumb.style.opacity = '0'; return }
      const thumbH = Math.max(28, (clientHeight / scrollHeight) * clientHeight)
      const maxT   = scrollHeight - clientHeight
      const top    = maxT > 0 ? (scrollTop / maxT) * (clientHeight - thumbH) : 0
      thumb.style.height    = `${thumbH}px`
      thumb.style.top       = `${top}px`
      thumb.style.opacity   = '1'
    }
    if (inner._fakeScrollHandler) inner.removeEventListener('scroll', inner._fakeScrollHandler)
    inner._fakeScrollHandler = update
    inner.addEventListener('scroll', update)
    setTimeout(update, 30)
  })
}

function flexLayer(layer) {
  layer.style.display       = 'flex'
  layer.style.flexDirection = 'column'
  layer.style.overflowY     = 'hidden'
  return layer
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

const TODAY = new Date().toISOString().split('T')[0]

function fmtDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function fmtDateFull(iso) {
  const mNames = ['jan.','fév.','mar.','avr.','mai','jun.','jul.','aoû.','sep.','oct.','nov.','déc.']
  const [y, m, d] = iso.split('-')
  return `${parseInt(d)} ${mNames[parseInt(m) - 1]} ${y}`
}

function makeSubjectLabel(selectedIds, plots, preselect, groups = []) {
  if (preselect && preselect.ids.length > 1) {
    return { text: preselect.label, count: preselect.ids.length }
  }
  const n = selectedIds.size
  if (n === 1) {
    const p = plots.find(p => p.id === [...selectedIds][0])
    return { text: p?.name ?? 'Parcelle', count: null }
  }
  const matchedGroup = groups.find(g => g.ids.length === n && g.ids.every(id => selectedIds.has(id)))
  if (matchedGroup) return { text: matchedGroup.label, count: matchedGroup.ids.length }
  return { text: `${n} parcelles`, count: null }
}

function buildParcelSections(selectedIds, plots, preselect, groups) {
  if (preselect) {
    const names = preselect.ids.map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
    return [{ title: `Groupe "${preselect.label}"`, names }]
  }
  const remaining = new Set(selectedIds)
  const sections  = []
  for (const g of groups) {
    if (g.ids.length >= 2 && g.ids.every(id => selectedIds.has(id))) {
      const names = g.ids.map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
      sections.push({ title: `Groupe "${g.label}"`, names })
      g.ids.forEach(id => remaining.delete(id))
    }
  }
  if (remaining.size > 0) {
    const names = [...remaining].map(id => plots.find(p => p.id === id)?.name).filter(Boolean)
    sections.push({ title: sections.length > 0 ? 'Autres parcelles' : null, names })
  }
  return sections
}

function fmtDateShort(iso) {
  const months = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const [, m, d] = iso.split('-')
  return `${parseInt(d)} ${months[parseInt(m) - 1]}`
}

function dateHint(iso) {
  if (!iso || iso === TODAY) return ''
  return iso < TODAY
    ? `<span class="irr-pill irr-pill--past">Passée · Réalisée</span>`
    : `<span class="irr-pill irr-pill--future">Future · Planifiée</span>`
}

function checkIcon(on, partial) {
  if (on)      return `<div class="irr-chk irr-chk--on"></div>`
  if (partial) return `<div class="irr-chk irr-chk--partial">−</div>`
  return `<div class="irr-chk"></div>`
}

// ─── Decompose selection into labelable records ───────────────────────────────

function decomposeSaveLabels(selectedIds, groups, plots) {
  const labels    = []
  const remaining = new Set(selectedIds)
  for (const g of groups) {
    const sel = g.ids.filter(id => selectedIds.has(id))
    if (!sel.length) continue
    if (sel.length === g.ids.length) {
      labels.push(g.label)
      g.ids.forEach(id => remaining.delete(id))
    } else {
      sel.forEach(id => {
        const p = plots.find(p => p.id === id)
        if (p) { labels.push(p.name); remaining.delete(id) }
      })
    }
  }
  for (const id of remaining) {
    const p = plots.find(p => p.id === id)
    if (p) labels.push(p.name)
  }
  return labels
}

// ─── Selection list builder ───────────────────────────────────────────────────

function buildSelectionHTML(groups, plots, selectedIds) {
  const standalones = plots.filter(p => !groups.some(g => g.ids.includes(p.id)))

  const groupSections = groups.map(g => {
    const all  = g.ids.every(id => selectedIds.has(id))
    const some = g.ids.some(id  => selectedIds.has(id))
    const children = g.ids
      .map(id => plots.find(p => p.id === id)).filter(Boolean)
      .map(p => {
        const sel = selectedIds.has(p.id)
        return `<div class="irr-plot-row irr-plot-row--child${sel ? ' irr-plot-row--sel' : ''}" data-pid="${p.id}">
          <div class="irr-plot-name">${p.name}</div>
          ${checkIcon(sel, false)}
        </div>`
      }).join('')
    return `<div class="irr-group-card${all ? ' irr-group-card--sel' : ''}" data-gids="${g.ids.join(',')}">
      <div class="irr-group-info">
        <div class="irr-group-name">${g.label}</div>
        <div class="irr-group-meta">${g.ids.length} parcelle${g.ids.length > 1 ? 's' : ''}</div>
      </div>
      ${checkIcon(all, some)}
    </div>${children}`
  }).join('')

  const standaloneRows = standalones.map(p => {
    const sel = selectedIds.has(p.id)
    return `<div class="irr-plot-row${sel ? ' irr-plot-row--sel' : ''}" data-pid="${p.id}">
      <div><div class="irr-plot-name">${p.name}</div>${plotInfo(p)}</div>
      ${checkIcon(sel, false)}
    </div>`
  }).join('')

  return groupSections + (standalones.length
    ? `${groups.length ? `<div class="irr-section-lbl" style="margin-top:10px">Autres parcelles</div>` : ''}${standaloneRows}`
    : '')
}

// ─── Bottom sheet helper ──────────────────────────────────────────────────────

function showIrrigSheet({ title, body, onSave, onDelete, saveLabel = 'Enregistrer' }) {
  const phoneScreen = document.getElementById('phone-screen')
  document.querySelector('.irr-sheet-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.className = 'irr-sheet-overlay'
  overlay.innerHTML = `
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${title}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${onDelete ? `<button class="irr-sheet-del" id="iss-del">Supprimer</button>` : ''}
        <button class="irr-sheet-save" id="iss-save">${saveLabel}</button>
      </div>
    </div>`
  overlay.querySelector('.irr-sheet-body').appendChild(
    typeof body === 'string' ? Object.assign(document.createElement('div'), { innerHTML: body }) : body
  )
  phoneScreen.appendChild(overlay)
  requestAnimationFrame(() => overlay.classList.add('irr-sheet-overlay--open'))

  const close = () => {
    overlay.classList.remove('irr-sheet-overlay--open')
    setTimeout(() => overlay.remove(), 280)
  }
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
  overlay.querySelector('#iss-del')?.addEventListener('click', () => { onDelete?.(); close() })
  overlay.querySelector('#iss-save').addEventListener('click', () => { onSave?.(); close() })
  return overlay
}

// ─── Ask irrigation type if missing ──────────────────────────────────────────

const IRRIG_TYPES_LIST = ['Pivot', 'Enrouleur', 'Rampe', 'Goutte à goutte', 'Goutte à goutte enterré', 'Micro aspersion', 'Couverture intégrale', 'Gravitaire', 'Aspersion']

function askIrrigTypeIfNeeded(ids, plots, callback) {
  const missing = plots.filter(p => ids.has(p.id) && (!p.irrigation || p.irrigation === 'Non irrigué'))
  if (!missing.length) { callback(); return }

  const bodyEl = document.createElement('div')
  bodyEl.innerHTML = `
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${missing.length === 1
        ? `<strong>${missing[0].name}</strong> n'a pas de type d'irrigation renseigné.`
        : `${missing.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" style="width:100%;padding:12px;border-radius:10px;border:1px solid #E0DED8;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e">
      <option value="">— Choisir un type —</option>
      ${IRRIG_TYPES_LIST.map(t => `<option value="${t}">${t}</option>`).join('')}
    </select>`

  const sheet = showIrrigSheet({
    title: "Type d'irrigation",
    body: bodyEl,
    saveLabel: 'Confirmer',
    onDelete: () => callback(),
    onSave: () => {
      const val = bodyEl.querySelector('#irr-type-ask').value
      if (val) missing.forEach(p => { p.irrigation = val; patchParcel(p.id, { irrigation: val }) })
      callback()
    }
  })
  const delBtn = sheet.querySelector('#iss-del')
  if (delBtn) {
    delBtn.textContent = 'Passer'
    delBtn.style.cssText += ';background:#F5F4F0;border-color:#E0DED8;color:#636366'
  }
}

// ─── Shared plot info helper ──────────────────────────────────────────────────

function plotInfo(p) {
  const crop    = p.crop
  const irr     = p.irrigation || null
  const texture = p.texture || null
  const parts   = [crop, irr || '<em>type irrigation non renseigné</em>', texture].filter(Boolean)
  if (!crop && !irr) return `<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>`
  return `<span class="irr-plot-info">${parts.join(' · ')}</span>`
}

// ─── Saisie d'une irrigation ──────────────────────────────────────────────────

export function openIrrigationSaisie(plots, showToast, preselect = null) {
  let selectedIds = new Set(preselect?.ids ?? [])
  let dateVal     = TODAY
  let qtyVal      = 10

  const groups = buildGroups(plots)

  function selectionHTML() {
    return buildSelectionHTML(groups, plots, selectedIds)
  }

  function updateDateHint(layer) {
    layer.querySelector('#irr-date-hint').innerHTML = dateHint(dateVal)
  }

  function renderBottomBar(layer) {
    const n   = selectedIds.size
    const sum = layer.querySelector('.irr-summary')
    const btn = layer.querySelector('.irr-save-btn')
    if (!sum || !btn) return
    if (preselect) {
      sum.textContent = ''
      btn.disabled    = false
      btn.textContent = 'Enregistrer'
    } else {
      sum.textContent = n === 0 ? '' : `${n} parcelle${n > 1 ? 's' : ''} · ${qtyVal} mm`
      btn.disabled    = n === 0
      btn.textContent = 'Enregistrer'
    }
  }

  function bindZones(layer) {
    layer.querySelectorAll('.irr-group-card').forEach(el => {
      el.addEventListener('click', () => {
        const ids = el.dataset.gids.split(',').map(Number)
        const all = ids.every(id => selectedIds.has(id))
        ids.forEach(id => all ? selectedIds.delete(id) : selectedIds.add(id))
        layer.querySelector('#irr-sel-list').innerHTML = selectionHTML()
        bindZones(layer); renderBottomBar(layer)
      })
    })
    layer.querySelectorAll('.irr-plot-row').forEach(el => {
      el.addEventListener('click', () => {
        const id = +el.dataset.pid
        selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id)
        layer.querySelector('#irr-sel-list').innerHTML = selectionHTML()
        bindZones(layer); renderBottomBar(layer)
      })
    })
  }

  const preselectPlots = preselect ? plots.filter(p => preselect.ids.includes(p.id)) : []

  const selectionZone = preselect
    ? `<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${preselect.label} <span style="color:#9E9D98;font-weight:400">· ${preselect.ids.length} parcelle${preselect.ids.length > 1 ? 's' : ''}</span></span>
       </div>
       ${preselectPlots.map(p => `<div style="font-size:13px;color:#636366;padding:2px 4px">· ${p.name}</div>`).join('')}`
    : `<div id="irr-sel-list">${selectionHTML()}</div>`

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="irr-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saisir une irrigation</span>
        <div style="width:60px"></div>
      </div>
      <div class="irr-fixed-inputs">
        <div class="irr-fields-row" style="margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Date</div>
            <input type="date" class="irr-date-input" id="irr-date" value="${dateVal}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${qtyVal}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      ${selectionZone}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${preselect ? '' : 'disabled'}>Enregistrer</button>
    </div>
  `))

  layer.dataset.dirty = 'true'
  if (!preselect) bindZones(layer)
  renderBottomBar(layer)

  layer.querySelector('#irr-back').addEventListener('click', popDetail)

  layer.querySelector('#irr-date').addEventListener('change', e => {
    dateVal = e.target.value; updateDateHint(layer); renderBottomBar(layer)
  })
  layer.querySelector('#irr-qty').addEventListener('input', e => {
    qtyVal = parseInt(e.target.value) || 1; renderBottomBar(layer)
  })

  layer.querySelector('.irr-save-btn').addEventListener('click', () => {
    const ids = preselect ? new Set(preselect.ids) : selectedIds
    askIrrigTypeIfNeeded(ids, plots, () => {
      const isFut  = dateVal > TODAY
      const labels = preselect
        ? [preselect.label]
        : decomposeSaveLabels(ids, groups, plots)
      labels.forEach(lbl => {
        IRRIG_SEASON.push({ iso: dateVal, mm: qtyVal, real: !isFut, label: lbl, fromStrategy: false })
      })
      saveIrrig()
      const calFilter      = labels.length === 1 ? labels[0] : 'all'
      const parcelSections = buildParcelSections(ids, plots, preselect, groups)
      const totalParcels   = parcelSections.reduce((s, sec) => s + sec.names.length, 0)
      clearDirty()
      openConfirmation({
        title: totalParcels > 1 ? 'Irrigations enregistrées' : 'Irrigation enregistrée',
        params: [
          { label: 'Date',     value: fmtDateFull(dateVal) },
          { label: 'Quantité', value: `${qtyVal} mm` },
        ],
        parcelSections, isFut, plots, calFilter, addedCount: labels.length, stackDepth: 1,
      })
    })
  })
}

// ─── Stratégie d'irrigation ───────────────────────────────────────────────────

export function openIrrigationStrategie(plots, showToast, preselect = null, replaceLabel = null) {
  let selectedIds = new Set(preselect?.ids ?? [])
  let debut = TODAY
  let fin   = new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString().split('T')[0]
  let qty   = 10
  let freq  = 7

  const groups = buildGroups(plots)

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

  function plotInfo(p) {
    const crop    = p.crop
    const irr     = p.irrigation || null
    const texture = p.texture || null
    const parts   = [crop, irr, texture].filter(Boolean)
    if (!parts.length) return `<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>`
    return `<span class="irr-plot-info">${parts.join(' · ')}</span>`
  }

  function renderForm() {
    const occs = computeOccs()
    const n    = selectedIds.size

    const preview = occs.length > 0
      ? `<span class="irr-preview-ok">↗ ${occs.length} irrigations · ${occs.length * qty} mm au total</span>`
      : `<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>`

    return `
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${debut}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${fin}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${qty}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${freq}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${preview}</div>
      ${preselect
        ? `<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${preselect.label} <span style="color:#9E9D98;font-weight:400">· ${preselect.ids.length} parcelle${preselect.ids.length > 1 ? 's' : ''}</span></span>
           </div>`
        : buildSelectionHTML(groups, plots, selectedIds)}
      <div class="irr-bottom-spacer"></div>
    `
  }

  function updateBottomBar(layer) {
    const n    = selectedIds.size
    const occs = computeOccs()
    const btn  = layer.querySelector('.irr-save-btn')
    const sum  = layer.querySelector('.irr-summary')
    if (!btn || !sum) return
    btn.disabled = n === 0 || occs.length === 0
    sum.textContent = n === 0 ? '' : `${n} parcelle${n > 1 ? 's' : ''} · ${occs.length} occurrences`
    btn.textContent = "Voir l'aperçu →"
  }

  function bindForm(layer) {
    const body = layer.querySelector('.irr-scroll-body')

    body.querySelectorAll('.irr-group-card').forEach(el => {
      el.addEventListener('click', () => {
        const ids = el.dataset.gids.split(',').map(Number)
        const all = ids.every(id => selectedIds.has(id))
        ids.forEach(id => all ? selectedIds.delete(id) : selectedIds.add(id))
        body.innerHTML = renderForm()
        bindForm(layer)
        updateBottomBar(layer)
      })
    })

    body.querySelectorAll('.irr-plot-row').forEach(el => {
      el.addEventListener('click', () => {
        const id = +el.dataset.pid
        selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id)
        body.innerHTML = renderForm()
        bindForm(layer)
        updateBottomBar(layer)
      })
    })

    const refreshPreview = () => {
      const occs = computeOccs()
      const prev = body.querySelector('#strat-preview')
      if (prev) prev.innerHTML = occs.length > 0
        ? `<span class="irr-preview-ok">↗ ${occs.length} irrigations · ${occs.length * qty} mm au total</span>`
        : `<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>`
      updateBottomBar(layer)
    }

    body.querySelector('#strat-debut')?.addEventListener('change', e => { debut = e.target.value; refreshPreview() })
    body.querySelector('#strat-fin')  ?.addEventListener('change', e => { fin   = e.target.value; refreshPreview() })
    body.querySelector('#strat-qty')  ?.addEventListener('input',  e => { qty   = parseInt(e.target.value) || 1; refreshPreview() })
    body.querySelector('#strat-freq') ?.addEventListener('input',  e => { freq  = parseInt(e.target.value) || 1; refreshPreview() })
  }

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${renderForm()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `))

  layer.dataset.dirty = 'true'
  bindForm(layer)
  updateBottomBar(layer)

  layer.querySelector('#strat-back').addEventListener('click', popDetail)

  layer.querySelector('.irr-save-btn').addEventListener('click', () => {
    const occs = computeOccs()
    openStrategieApercu(layer, plots, selectedIds, debut, fin, qty, freq, occs, showToast, preselect, replaceLabel)
  })
}

// ─── Aperçu stratégie ─────────────────────────────────────────────────────────

function openStrategieApercu(prevLayer, plots, selectedIds, debut, fin, qty, freq, occs, showToast, preselect, replaceLabel = null) {
  const n = selectedIds.size

  const MAX_VISIBLE = 5
  const rest = occs.length - MAX_VISIBLE

  function makeOccRow(d) {
    const isFuture = d.toISOString().slice(0, 10) >= TODAY
    const col = isFuture ? '#FFB705' : '#FF8500'
    const iso = d.toISOString().slice(0, 10)
    return `<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${fmtDateFull(iso)}</span>
      <span style="font-size:13px;font-weight:700;color:${col}">${qty} mm</span>
    </div>`
  }

  const pastOccs   = occs.filter(d => d.toISOString().slice(0, 10) <  TODAY)
  const futureOccs = occs.filter(d => d.toISOString().slice(0, 10) >= TODAY)
  const visibleFut = futureOccs.slice(0, MAX_VISIBLE)
  const restFut    = futureOccs.slice(MAX_VISIBLE)

  const pastSection = pastOccs.length ? `
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${pastOccs.map(makeOccRow).join('')}` : ''

  const futureSection = futureOccs.length ? `
    <div class="irr-section-lbl" style="margin-top:${pastOccs.length ? '12px' : '0'};margin-bottom:4px">Irrigations planifiées</div>
    ${visibleFut.map(makeOccRow).join('')}
    ${restFut.length ? `
      <div id="apercu-rest" style="display:none">${restFut.map(makeOccRow).join('')}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${restFut.length} irrigation${restFut.length > 1 ? 's' : ''} de plus</button>
    ` : ''}` : ''

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="apercu-back"><i class="bi bi-chevron-left"></i> Modifier</button>
        <span class="irr-header-title">Aperçu</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">
      <div class="irr-apercu-summary">
        <div>
          <div class="irr-apercu-big">${occs.length} irrigations</div>
          <div class="irr-apercu-sub">${fmtDateShort(debut)} → ${fmtDateShort(fin)} · tous les ${freq}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${occs.length * qty} mm</div>
          <div class="irr-apercu-sub">${n} parcelle${n > 1 ? 's' : ''} · ${qty} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${pastSection}
        ${futureSection}
        ${!pastOccs.length && !futureOccs.length ? '<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>' : ''}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `))

  layer.dataset.dirty = 'true'
  layer.querySelector('#apercu-back').addEventListener('click', popDetail)

  layer.querySelector('#apercu-show-more')?.addEventListener('click', e => {
    layer.querySelector('#apercu-rest').style.display = ''
    e.target.remove()
  })

  layer.querySelector('#apercu-confirm').addEventListener('click', () => {
    const localGroups = buildGroups(plots)
    const ids         = preselect ? new Set(preselect.ids) : selectedIds
    askIrrigTypeIfNeeded(ids, plots, () => {
      const labels         = preselect
        ? [preselect.label]
        : decomposeSaveLabels(ids, localGroups, plots)
      const calFilter      = labels.length === 1 ? labels[0] : 'all'
      const parcelSections = buildParcelSections(ids, plots, preselect, localGroups)
      if (replaceLabel) {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(labels.includes(i.label) && i.fromStrategy && !i.real))
        )
      }
      occs.forEach(d => {
        const iso = d.toISOString().slice(0, 10)
        labels.forEach(lbl => {
          IRRIG_SEASON.push({ iso, mm: qty, real: iso <= TODAY, label: lbl, fromStrategy: true })
        })
      })
      saveIrrig()
      clearDirty()
      openConfirmation({
        title: 'Saison enregistrée',
        params: [
          { label: 'Début',                value: fmtDateFull(debut) },
          { label: 'Fin',                  value: fmtDateFull(fin) },
          { label: 'Quantité',             value: `${qty} mm/irrig.` },
          { label: 'Fréquence',            value: `tous les ${freq} jours` },
          { label: 'Irrigations générées', value: `${occs.length * labels.length}` },
        ],
        parcelSections, isFut: true, plots, calFilter, addedCount: occs.length * labels.length, stackDepth: 2,
      })
    })
  })
}

// ─── Tour d'eau Enrouleur ─────────────────────────────────────────────────────

function openTourDEau(enrPlots, freq, onConfirm) {
  let order  = enrPlots.map((p, i) => ({ id: p.id, name: p.name, hours: 4 }))
  const maxH = freq * 24

  function totalH() { return order.reduce((s, p) => s + p.hours, 0) }

  function renderRows() {
    return order.map((p, i) => `
      <div class="irr-enr-row" data-idx="${i}">
        <div class="irr-enr-order">${i + 1}</div>
        <div class="irr-enr-name">${p.name}</div>
        <div class="irr-enr-arrows">
          <button class="irr-enr-up" data-idx="${i}" ${i === 0 ? 'disabled' : ''}>↑</button>
          <button class="irr-enr-dn" data-idx="${i}" ${i === order.length - 1 ? 'disabled' : ''}>↓</button>
        </div>
        <div class="irr-enr-hrs">
          <input type="number" class="irr-enr-input" data-idx="${i}" value="${p.hours}" min="1" max="48" />
          <span class="irr-enr-unit">h</span>
        </div>
      </div>`).join('')
  }

  function renderContent(layer) {
    const total   = totalH()
    const isOver  = total > maxH
    const body    = layer.querySelector('.irr-enr-body')
    body.innerHTML = `
      <div class="irr-enr-hint">Définissez l'ordre et la durée par parcelle. Tour complet tous les ${freq} jours.</div>
      <div id="enr-rows">${renderRows()}</div>
      <div class="irr-enr-total ${isOver ? 'irr-enr-total--over' : ''}">
        Durée totale : <strong>${total}h</strong> / ${maxH}h max
        ${isOver ? `<div style="font-size:11px;margin-top:2px">⚠ Dépasse la fréquence — vous pouvez confirmer quand même</div>` : ''}
      </div>
    `
    body.querySelectorAll('.irr-enr-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.idx
        ;[order[i-1], order[i]] = [order[i], order[i-1]]
        renderContent(layer)
      })
    })
    body.querySelectorAll('.irr-enr-dn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.idx
        ;[order[i], order[i+1]] = [order[i+1], order[i]]
        renderContent(layer)
      })
    })
    body.querySelectorAll('.irr-enr-input').forEach(inp => {
      inp.addEventListener('input', () => {
        const i = +inp.dataset.idx
        const v = parseInt(inp.value)
        if (v > 0) { order[i].hours = v; renderContent(layer) }
      })
    })
    const btn = layer.querySelector('.irr-save-btn')
    if (btn) btn.textContent = isOver ? 'Confirmer quand même' : 'Confirmer le tour d\'eau'
  }

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="enr-back"><i class="bi bi-chevron-left"></i> Aperçu</button>
        <span class="irr-header-title">Tour d'eau</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-enr-body"></div>
    <div class="irr-bottom-bar">
      <div class="irr-summary" style="font-size:11px;color:#6B6A65">Enrouleur · ${enrPlots.length} parcelles</div>
      <button class="irr-save-btn">Confirmer le tour d'eau</button>
    </div>
  `))

  renderContent(layer)
  layer.querySelector('#enr-back').addEventListener('click', popDetail)
  layer.querySelector('.irr-save-btn').addEventListener('click', () => {
    popDetail()    // close tour d'eau
    onConfirm()
  })
}

// ─── Confirmation ─────────────────────────────────────────────────────────────

function openConfirmation({ title, params, parcelSections = [], isFut, plots, calFilter, addedCount = 0, stackDepth = 3 }) {
  const paramsHtml = (params || []).map(p => `
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${p.label}</span>
      <span class="irr-confirm-param-val">${p.value}</span>
    </div>`).join('')

  const SHOW_MAX  = 3
  const allItems  = parcelSections.flatMap(sec => sec.names.map(n => ({ title: sec.title, name: n })))
  const visible   = allItems.slice(0, SHOW_MAX)
  const extra     = allItems.slice(SHOW_MAX)

  function renderItems(items) {
    const grouped = []
    let cur = null
    for (const item of items) {
      if (!cur || cur.title !== item.title) { cur = { title: item.title, names: [] }; grouped.push(cur) }
      cur.names.push(item.name)
    }
    return grouped.map(g => `
      ${g.title ? `<div class="irr-confirm-sec-hd">${g.title}</div>` : ''}
      ${g.names.map(n => `<div class="irr-confirm-parcel">· ${n}</div>`).join('')}
    `).join('')
  }

  const parcelsHtml = allItems.length === 0 ? '' : `
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${renderItems(visible)}
      ${extra.length ? `
        <details class="irr-confirm-more">
          <summary>${extra.length} parcelle${extra.length > 1 ? 's' : ''} de plus</summary>
          ${renderItems(extra)}
        </details>` : ''}
    </div>`

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <div style="width:60px"></div>
        <span class="irr-header-title">${title.includes('aison') ? 'Saison' : title.includes('rrigations') ? 'Enregistrées' : 'Enregistrée'}</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-confirm-body">
      <div class="irr-confirm-icon-wrap">
        <div class="irr-confirm-icon">✓</div>
      </div>
      <div class="irr-confirm-title">${title}</div>
      <div class="irr-confirm-params">${paramsHtml}</div>
      ${parcelsHtml}
      <div class="irr-confirm-options">
        <div class="irr-confirm-opt" id="conf-edit">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">✎</div>
          <div>
            <div class="irr-confirm-opt-title">Modifier</div>
            <div class="irr-confirm-opt-sub">Corriger une erreur de saisie</div>
          </div>
        </div>
        <div class="irr-confirm-opt irr-confirm-opt--primary" id="conf-calendar">
          <div class="irr-confirm-opt-icon" style="background:#E6F1FB">📅</div>
          <div>
            <div class="irr-confirm-opt-title">Voir les irrigations</div>
            <div class="irr-confirm-opt-sub">Irrigations effectuées et planifiées</div>
          </div>
        </div>
        <div class="irr-confirm-opt" id="conf-back">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">↩</div>
          <div>
            <div class="irr-confirm-opt-title">Retour au tableau de bord</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
      </div>
    </div>
  `))

  layer.querySelector('#conf-edit').addEventListener('click', () => {
    if (addedCount > 0) IRRIG_SEASON.splice(IRRIG_SEASON.length - addedCount, addedCount)
    popDetail()
  })

  layer.querySelector('#conf-back').addEventListener('click', () => {
    for (let i = 0; i <= stackDepth; i++) popDetail()
  })

  layer.querySelector('#conf-calendar').addEventListener('click', () => {
    openCalendar(plots, calFilter)
  })
}

// ─── Calendrier ───────────────────────────────────────────────────────────────

const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const MONTHS_SHORT = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']

export function openCalendar(plots, initialFilter) {
  const groups = buildGroups(plots)
  let calFilter  = initialFilter || ''
  let calMonth   = 4  // mai 0-indexed
  let calYear    = 2026
  let selectedDay = null

  function resolveFilter(filter, grps, plts) {
    if (!filter) return null
    const g = grps.find(g => g.label === filter)
    if (g) return { ids: g.ids, label: g.label }
    const p = plts.find(p => String(p.id) === String(filter)) ?? plts.find(p => p.name === filter)
    if (p) return { ids: [p.id], label: p.name }
    return null
  }

  function getIrrig() {
    if (!calFilter || calFilter === 'all') return IRRIG_SEASON
    // Groupe auto-détecté — label exact
    const g = groups.find(g => g.label === calFilter)
    if (g) return IRRIG_SEASON.filter(i => i.label === g.label)
    // Parcelle individuelle — label = nom de la parcelle, ou groupe contenant cette parcelle
    const p = plots.find(p => String(p.id) === String(calFilter))
    if (p) {
      const groupLabels = new Set(groups.filter(grp => grp.ids.includes(p.id)).map(grp => grp.label))
      return IRRIG_SEASON.filter(i => i.label === p.name || groupLabels.has(i.label))
    }
    return IRRIG_SEASON
  }

  function renderCumuls(irrig) {
    const real    = irrig.filter(i => i.real)
    const planned = irrig.filter(i => !i.real)
    const tR = real.reduce((s, i) => s + i.mm, 0)
    const tP = planned.reduce((s, i) => s + i.mm, 0)
    return `<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${tR} mm</div>
        <div class="irr-cumul-count">${real.length} irrigation${real.length !== 1 ? 's' : ''}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${tP} mm</div>
        <div class="irr-cumul-count">${planned.length} irrigation${planned.length !== 1 ? 's' : ''}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${tR + tP} mm</div>
        <div class="irr-cumul-count">${real.length + planned.length} irrigations</div>
      </div>
    </div>`
  }

  function renderTimeline(irrig) {
    if (irrig.length < 2) return ''
    const sorted = [...irrig].sort((a, b) => a.iso < b.iso ? -1 : 1)

    const MNAMES  = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
    const first   = new Date(sorted[0].iso)
    const last    = new Date(sorted[sorted.length - 1].iso)
    const totalMs = Math.max(last - first, 1)
    const SVG_W   = 300
    const BAR_Y   = 26, BAR_H = 5, DOT_R = 5
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
      return `<text x="${Math.round((x1 + x2) / 2)}" y="${MLBL_Y}" font-size="8" fill="#B0AEA8" text-anchor="middle">${MNAMES[b.getMonth()]}</text>`
    }).join('')

    const dots = sorted.map(ir => {
      const col = ir.real ? '#FF8500' : '#FFB705'
      const cx  = xOf(new Date(ir.iso))
      const [, m, d] = ir.iso.split('-')
      const tip = `${parseInt(d)} ${MONTHS_SHORT[parseInt(m)-1]} · ${ir.mm} mm`
      return `<circle cx="${cx}" cy="${DOT_CY}" r="${DOT_R}" fill="${col}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${cx}" cy="${DOT_CY}" r="${DOT_R+6}" fill="transparent" pointer-events="all"><title>${tip}</title></circle>`
    }).join('')

    return `<div style="padding:4px 0 8px">
      <svg width="${SVG_W}" height="${SVG_H}" viewBox="0 0 ${SVG_W} ${SVG_H}" style="width:100%;display:block">
        ${monthLabels}
        <rect x="0" y="${BAR_Y}" width="${SVG_W}" height="${BAR_H}" rx="${BAR_H/2}" fill="#E0DED8"/>
        ${tickLines}
        ${dots}
        <text x="1" y="${DATE_Y}" font-size="9" fill="#B0AEA8">${fmtD(sorted[0].iso)}</text>
        <text x="${SVG_W - 1}" y="${DATE_Y}" font-size="9" fill="#B0AEA8" text-anchor="end">${fmtD(sorted[sorted.length-1].iso)}</text>
      </svg>
    </div>`
  }

  function renderGraph(irrig) {
    const W = 300, H = 100, MB = 22, YW = 28
    const todayDate = new Date(TODAY)
    const baseDate  = new Date(todayDate); baseDate.setDate(baseDate.getDate() - 60)
    const endDate   = new Date(todayDate); endDate.setDate(endDate.getDate() + 90)
    const days      = Math.round((endDate - baseDate) / 86400000)
    const ppd       = W / days

    function dx(iso) {
      return Math.round((new Date(iso) - baseDate) / 86400000 * ppd)
    }

    const todayX = dx(TODAY)
    const allMm  = [...irrig.map(i => i.mm), ...RAIN_DATA.map(r => r.mm)]
    const maxBar = Math.max(...allMm, 1)

    let rainBars = '', irrBars = ''
    for (const r of RAIN_DATA) {
      const x = YW + dx(r.iso); if (x < YW || x > YW + W) continue
      const h = Math.round((r.mm / maxBar) * H * 0.4)
      rainBars += `<rect x="${x-3}" y="${H-h}" width="6" height="${h}" rx="2" fill="#7BBFEA" opacity=".8"/>`
    }
    for (const ir of irrig) {
      const x = YW + dx(ir.iso); if (x < YW || x > YW + W) continue
      const h = Math.round((ir.mm / maxBar) * H * 0.6)
      irrBars += `<rect x="${x-4}" y="${H-h}" width="8" height="${h}" rx="2" fill="${ir.real ? '#E07820' : '#FBBF7A'}"/>`
    }

    let res = 35, pts = ''
    for (let d = 0; d < days; d++) {
      const iso  = new Date(baseDate.getTime() + d * 86400000).toISOString().slice(0, 10)
      res = Math.max(0, res - 3.5)
      const ir   = irrig.find(i => i.iso === iso)
      const rain = RAIN_DATA.find(r => r.iso === iso)
      if (ir)   res = Math.min(res + ir.mm * 0.8, 130)
      if (rain) res = Math.min(res + rain.mm * 0.7, 130)
      const x = YW + Math.round(d * ppd)
      const y = Math.round((1 - Math.min(res, 130) / 130) * H * 0.85 + H * 0.05)
      pts += `${x},${y} `
    }

    let yGrid = ''
    for (let i = 0; i <= 4; i++) {
      const y = Math.round((i / 4) * H)
      yGrid += `<line x1="${YW}" y1="${y}" x2="${YW+W}" y2="${y}" stroke="#F0EDE8" stroke-width=".5"/>`
      yGrid += `<text x="${YW-3}" y="${y+4}" text-anchor="end" font-size="8" fill="#9E9D98">${Math.round((1 - i/4) * 130)}</text>`
    }

    let xTicks = ''
    const tick = new Date(baseDate); tick.setDate(1); tick.setMonth(tick.getMonth() + 1)
    while (tick <= endDate) {
      const x   = YW + dx(tick.toISOString().slice(0, 10))
      const lbl = MONTHS_SHORT[tick.getMonth()]
      xTicks += `<line x1="${x}" y1="${H}" x2="${x}" y2="${H+4}" stroke="#D0CEC8"/>`
      xTicks += `<text x="${x+2}" y="${H+14}" font-size="9" fill="#9E9D98">${lbl}</text>`
      tick.setMonth(tick.getMonth() + 1)
    }

    return `<div class="irr-graph-card">
      <svg width="${YW+W}" height="${H+MB}" viewBox="0 0 ${YW+W} ${H+MB}" style="width:100%;display:block">
        <defs><pattern id="hatch" width="12" height="12" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="12" stroke="#B8B4AC" stroke-width="5"/>
        </pattern></defs>
        <rect x="${YW}" y="0" width="${W}" height="${H}" fill="white"/>
        <rect x="${YW+todayX}" y="0" width="${W-todayX}" height="${H}" fill="url(#hatch)" opacity=".6"/>
        ${yGrid}${rainBars}${irrBars}
        <polyline points="${pts.trim()}" fill="none" stroke="#185FA5" stroke-width="1.5"/>
        <line x1="${YW+todayX}" y1="0" x2="${YW+todayX}" y2="${H}" stroke="#C05000" stroke-width="1" stroke-dasharray="3,2" opacity=".7"/>
        ${xTicks}
      </svg>
      <div class="irr-graph-legend">
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#7BBFEA"></div>Pluie</div>
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#E07820"></div>Irrig. réalisée</div>
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#FBBF7A"></div>Irrig. planifiée</div>
        <div class="irr-leg-item"><svg width="18" height="8"><line x1="0" y1="4" x2="18" y2="4" stroke="#185FA5" stroke-width="2"/></svg>Réservoir</div>
      </div>
    </div>`
  }

  function renderCalGrid(irrig) {
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
    const offset      = (new Date(calYear, calMonth, 1).getDay() + 6) % 7
    const DOWS        = ['L','M','M','J','V','S','D']

    const irrigMap = {}, rainMap = {}
    for (const ir of irrig) {
      const [y, m, d] = ir.iso.split('-').map(Number)
      if (m - 1 === calMonth && y === calYear) {
        if (!irrigMap[d]) irrigMap[d] = []
        irrigMap[d].push(ir)
      }
    }
    for (const r of RAIN_DATA) {
      const [y, m, d] = r.iso.split('-').map(Number)
      if (m - 1 === calMonth && y === calYear) rainMap[d] = r
    }

    let grid = DOWS.map(d => `<div class="irr-cal-dow">${d}</div>`).join('')
    for (let i = 0; i < offset; i++) grid += `<div class="irr-cal-day"></div>`
    for (let d = 1; d <= daysInMonth; d++) {
      const iso     = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
      const isToday  = iso === TODAY
      const isSel    = iso === selectedDay
      const irrs     = irrigMap[d] || []
      const rain     = rainMap[d]
      const hasEvent = irrs.length > 0 || !!rain
      let dots = ''
      if (irrs.some(i => i.real))  dots += `<div class="irr-cal-dot" style="background:#E07820"></div>`
      if (irrs.some(i => !i.real)) dots += `<div class="irr-cal-dot" style="background:#FBBF7A"></div>`
      if (rain)                    dots += `<div class="irr-cal-dot" style="background:#7BBFEA"></div>`
      grid += `<div class="irr-cal-day${isToday ? ' irr-cal-day--today' : ''}${isSel ? ' irr-cal-day--sel' : ''}${hasEvent ? ' irr-cal-day--evt' : ''}" ${hasEvent ? `data-iso="${iso}"` : ''}>
        <span class="irr-cal-num">${d}</span>
        <div class="irr-cal-dots">${dots}</div>
      </div>`
    }

    return `<div class="irr-cal-card">
      <div class="irr-cal-nav">
        <button class="irr-cal-nav-btn" id="cal-prev">‹</button>
        <span class="irr-cal-month">${MONTHS_FR[calMonth]} ${calYear}</span>
        <button class="irr-cal-nav-btn" id="cal-next">›</button>
      </div>
      <div class="irr-cal-grid">${grid}</div>
      <div class="irr-graph-legend" style="margin-top:10px;padding-top:10px;border-top:.5px solid #E0DED8">
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#E07820"></div>Réalisée</div>
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#FBBF7A"></div>Planifiée</div>
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#7BBFEA"></div>Pluie</div>
      </div>
    </div>`
  }

  function openEditIrrigSheet(ir, irrig, layer) {
    const groups   = buildGroups(plots)
    const g        = groups.find(grp => grp.label === ir.label)
    const bodyEl   = document.createElement('div')
    let editScope  = 'single'
    let editDate   = ir.iso
    let editMm     = ir.mm

    bodyEl.innerHTML = `
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${ir.iso}" />
          <div id="edit-date-hint">${dateHint(ir.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${ir.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>
      ${g && g.ids.length > 1 ? `
      <div class="irr-scope-box">
        <div class="irr-scope-lbl">Appliquer à…</div>
        <div class="irr-scope-btns">
          <button class="irr-scope-btn irr-scope-btn--on" id="scope-single">Cette occurrence</button>
          <button class="irr-scope-btn" id="scope-group">Tout le groupe (${g.ids.length})</button>
        </div>
      </div>` : ''}`

    bodyEl.querySelector('#edit-date').addEventListener('change', e => {
      editDate = e.target.value
      bodyEl.querySelector('#edit-date-hint').innerHTML = dateHint(editDate)
    })
    bodyEl.querySelector('#edit-qty').addEventListener('input', e => {
      const v = parseInt(e.target.value)
      if (v > 0) editMm = v
    })

    if (g) {
      bodyEl.querySelector('#scope-single')?.addEventListener('click', e => {
        editScope = 'single'
        bodyEl.querySelectorAll('.irr-scope-btn').forEach(b => b.classList.remove('irr-scope-btn--on'))
        e.target.classList.add('irr-scope-btn--on')
      })
      bodyEl.querySelector('#scope-group')?.addEventListener('click', e => {
        editScope = 'group'
        bodyEl.querySelectorAll('.irr-scope-btn').forEach(b => b.classList.remove('irr-scope-btn--on'))
        e.target.classList.add('irr-scope-btn--on')
      })
    }

    showIrrigSheet({
      title: ir.real ? "Modifier l'irrigation réalisée" : "Modifier l'irrigation planifiée",
      body: bodyEl,
      saveLabel: 'Enregistrer',
      onSave: () => {
        ir.iso  = editDate
        ir.mm   = editMm
        ir.real = editDate <= TODAY
        if (editScope === 'group' && g) {
          IRRIG_SEASON.filter(i => i.label === ir.label)
            .forEach(i => { i.mm = editMm })
        }
        saveIrrig()
        renderContent(layer)
      },
      onDelete: () => {
        const idx = IRRIG_SEASON.indexOf(ir)
        if (idx > -1) IRRIG_SEASON.splice(idx, 1)
        saveIrrig()
        renderContent(layer)
      },
    })
  }

  function openEditStratSheet(label, layer) {
    const bodyEl = document.createElement('div')
    let showStopConfirm   = false
    let showDeleteConfirm = false

    function renderBody() {
      bodyEl.innerHTML = `
        <div class="irr-strat-opt" id="strat-modify">
          <div class="irr-strat-opt-icon" style="background:#E6F1FB">✎</div>
          <div>
            <div class="irr-strat-opt-title">Modifier les paramètres</div>
            <div class="irr-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-stop">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">✕</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations futures planifiées</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-delete">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">🗑</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations, effectuées et planifiées</div>
          </div>
        </div>
        ${showStopConfirm ? `
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>` : ''}
        ${showDeleteConfirm ? `
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>` : ''}`

      bodyEl.querySelector('#strat-modify')?.addEventListener('click', () => {
        document.querySelector('.irr-sheet-overlay')?.remove()
        const preselect = resolveFilter(label, groups, plots)
        openIrrigationStrategie(plots, () => renderContent(layer), preselect, preselect?.label ?? label)
      })
      bodyEl.querySelector('#strat-stop')?.addEventListener('click', () => {
        showStopConfirm = true; showDeleteConfirm = false; renderBody()
      })
      bodyEl.querySelector('#strat-delete')?.addEventListener('click', () => {
        showDeleteConfirm = true; showStopConfirm = false; renderBody()
      })
      bodyEl.querySelector('#stop-cancel')?.addEventListener('click', () => {
        showStopConfirm = false; renderBody()
      })
      bodyEl.querySelector('#stop-confirm')?.addEventListener('click', () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(i.label === label && !i.real))
        )
        saveIrrig()
        document.querySelector('.irr-sheet-overlay')?.remove()
        renderContent(layer)
      })
      bodyEl.querySelector('#delete-cancel')?.addEventListener('click', () => {
        showDeleteConfirm = false; renderBody()
      })
      bodyEl.querySelector('#delete-confirm')?.addEventListener('click', () => {
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => i.label !== label)
        )
        saveIrrig()
        document.querySelector('.irr-sheet-overlay')?.remove()
        renderContent(layer)
      })
    }
    renderBody()
    showIrrigSheet({ title: 'Gérer la saison', body: bodyEl, saveLabel: 'Fermer', onSave: () => {} })
  }

  function renderList(irrig, layer) {
    if (!irrig.length) return `<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98;">Aucune irrigation</div>`
    const real    = irrig.filter(i => i.real)
    const planned = irrig.filter(i => !i.real)
    const label   = calFilter

    const stratBtnHTML = label
      ? `<div style="display:flex;justify-content:flex-end;margin-bottom:8px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>` : ''

    function item(ir, idx) {
      const [, m, d] = ir.iso.split('-').map(Number)
      const col = ir.real ? '#C05000' : '#185FA5'
      const bg  = ir.real ? '#FEF0E6' : '#E6F1FB'
      const lbl = ir.real ? 'Réalisée' : 'Planifiée'
      return `<div class="irr-list-item" data-iidx="${IRRIG_SEASON.indexOf(ir)}">
        <div class="irr-list-stripe" style="background:${col}"></div>
        <div class="irr-list-date" style="background:${bg};color:${col}">
          <span style="font-size:15px;font-weight:700">${d}</span>
          <span style="font-size:9px">${MONTHS_SHORT[m-1]}</span>
        </div>
        <div style="flex:1">
          <div class="irr-list-label">${ir.label}</div>
          <div class="irr-list-status" style="color:${col}">${lbl}</div>
        </div>
        <div class="irr-list-mm" style="background:${bg};color:${col}">${ir.mm} mm</div>
        <button class="irr-edit-btn" data-iidx="${IRRIG_SEASON.indexOf(ir)}">✎</button>
      </div>`
    }

    return stratBtnHTML + `
      ${real.length    ? `<div class="irr-list-section">Effectuées</div>${real.map(item).join('')}`    : ''}
      ${planned.length ? `<div class="irr-list-section">Planifiées</div>${planned.map(item).join('')}` : ''}
    `
  }

  function renderFullList(irrig) {
    if (!irrig.length) return `<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>`

    const future = [...irrig].filter(i => !i.real).sort((a, b) => a.iso < b.iso ? -1 : 1)
    const past   = [...irrig].filter(i =>  i.real).sort((a, b) => a.iso > b.iso ? -1 : 1)

    function item(ir) {
      const col  = ir.real ? '#FF8500' : '#FFB705'
      const iidx = IRRIG_SEASON.indexOf(ir)
      return `<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${fmtDateFull(ir.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${col};white-space:nowrap;margin-right:4px">${ir.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${iidx}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${iidx}" title="Supprimer">🗑</button>
      </div>`
    }

    return `
      ${past.length ? `
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${past.length}</span></summary>
          ${past.map(item).join('')}
        </details>` : ''}
      ${future.length ? `
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${future.length}</span></summary>
          ${future.map(item).join('')}
        </details>` : ''}
    `
  }

  function renderContent(layer) {
    const body = layer.querySelector('.irr-cal-body')

    if (!calFilter) {
      body.innerHTML = `<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>`
      return
    }

    // Preserve open/closed state of collapsible sections across re-renders
    const openSections = {}
    body.querySelectorAll('details[data-section]').forEach(d => {
      openSections[d.dataset.section] = d.open
    })

    if (calFilter === 'all') {
      // Vue "Toutes les parcelles" : une section par label
      const byLabel = {}
      for (const ir of IRRIG_SEASON) {
        if (!byLabel[ir.label]) byLabel[ir.label] = []
        byLabel[ir.label].push(ir)
      }
      const labels = Object.keys(byLabel)
      if (!labels.length) {
        body.innerHTML = `<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>`
        return
      }
      body.innerHTML = labels.map(label => {
        const irrig    = byLabel[label]
        const hasStrat = irrig.some(i => i.fromStrategy)
        return `<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${label}</div>
          ${renderCumuls(irrig)}
          ${renderTimeline(irrig)}
          ${hasStrat ? `<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-label="${label}">Modifier la saison ↗</button>
          </div>` : ''}
        </div>`
      }).join('')
      body.querySelectorAll('[data-strat-label]').forEach(btn => {
        btn.addEventListener('click', () => openEditStratSheet(btn.dataset.stratLabel, layer))
      })
      return
    }

    const irrig       = getIrrig()
    const hasStrategy = irrig.some(i => i.fromStrategy)
    const actionBar   = hasStrategy
      ? `<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`
      : `<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`

    body.innerHTML = `
      ${renderCumuls(irrig)}
      ${renderTimeline(irrig)}
      ${actionBar}
      ${renderFullList(irrig)}
    `

    // Restore section open/closed state
    body.querySelectorAll('details[data-section]').forEach(d => {
      const s = d.dataset.section
      if (s in openSections) d.open = openSections[s]
    })

    body.querySelectorAll('.irr-edit-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const ir = IRRIG_SEASON[+btn.dataset.iidx]
        if (ir) openEditIrrigSheet(ir, irrig, layer)
      })
    })
    body.querySelectorAll('.irr-del-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const idx = +btn.dataset.iidx
        if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); saveIrrig(); renderContent(layer) }
      })
    })
    body.querySelector('#open-strat-edit')?.addEventListener('click', () => {
      openEditStratSheet(calFilter, layer)
    })
    body.querySelector('#cal-add-irrig')?.addEventListener('click', () => {
      openIrrigationSaisie(plots, () => renderContent(layer), resolveFilter(calFilter, groups, plots))
    })
    body.querySelector('#cal-add-strat')?.addEventListener('click', () => {
      openIrrigationStrategie(plots, () => renderContent(layer), resolveFilter(calFilter, groups, plots))
    })
  }

  const standalones   = plots.filter(p => !groups.some(g => g.ids.includes(p.id)))
  const hierarchOpts  = groups.map(g => {
    const childOpts = g.ids.map(id => plots.find(p => p.id === id)).filter(Boolean)
      .map(p => `<option value="${p.id}"${String(p.id) === String(calFilter) ? ' selected' : ''}>- ${p.name}</option>`).join('')
    return `<optgroup label="${g.label} (${g.ids.length} parcelles)">
      <option value="${g.label}"${g.label === calFilter ? ' selected' : ''}>GROUPE : ${g.label}</option>
      ${childOpts}
    </optgroup>`
  }).join('')
  const standaloneOpts = standalones.length
    ? `<optgroup label="Autres parcelles">${standalones.map(p => `<option value="${p.id}"${String(p.id) === String(calFilter) ? ' selected' : ''}>${p.name}</option>`).join('')}</optgroup>`
    : ''

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Irrigations</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:4px 14px 10px">
        <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Parcelle ou groupe</div>
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${!calFilter ? 'selected' : ''}>— Sélectionner —</option>
          <option value="all"${calFilter === 'all' ? ' selected' : ''}>Toutes les parcelles</option>
          ${hierarchOpts}
          ${standaloneOpts}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `))

  layer.querySelector('#cal-back').addEventListener('click', popDetail)

  layer.querySelector('#cal-filter-sel').addEventListener('change', e => {
    calFilter = e.target.value; renderContent(layer)
  })

  renderContent(layer)
}

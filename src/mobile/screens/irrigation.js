import { pushDetail, popDetail } from '../nav.js'

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

function buildGroups(plots) {
  const m = {}
  for (const p of plots) {
    const crop = p.crop
    const irr  = p.irrigation && p.irrigation !== "Pas d'irrigation" ? p.irrigation : null
    if (!crop && !irr) continue
    const key = [crop, irr].filter(Boolean).join(' · ')
    if (!m[key]) m[key] = { label: key, ids: [] }
    m[key].ids.push(p.id)
  }
  return Object.values(m).filter(g => g.ids.length >= 2)
}

function checkIcon(on, partial) {
  if (on)      return `<div class="irr-chk irr-chk--on"></div>`
  if (partial) return `<div class="irr-chk irr-chk--partial">−</div>`
  return `<div class="irr-chk"></div>`
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

// ─── Shared plot info helper ──────────────────────────────────────────────────

function plotInfo(p) {
  const crop = p.crop
  const irr  = p.irrigation && p.irrigation !== "Pas d'irrigation" ? p.irrigation : null
  if (crop && irr)  return `<span class="irr-plot-info">${crop} · ${irr}</span>`
  if (crop)         return `<span class="irr-plot-info">${crop} · <em>type non renseigné</em></span>`
  if (irr)          return `<span class="irr-plot-info"><em>Culture non renseignée</em> · ${irr}</span>`
  return `<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>`
}

// ─── Saisie d'une irrigation ──────────────────────────────────────────────────

export function openIrrigationSaisie(plots, showToast) {
  let selectedIds = new Set()
  let dateVal     = TODAY
  let qtyVal      = 25

  const groups = buildGroups(plots)

  function groupsHTML() {
    return groups.map(g => {
      const all  = g.ids.every(id => selectedIds.has(id))
      const some = g.ids.some(id  => selectedIds.has(id))
      return `<div class="irr-group-card${all ? ' irr-group-card--sel' : ''}" data-gids="${g.ids.join(',')}">
        <div class="irr-group-info">
          <div class="irr-group-name">${g.label}</div>
          <div class="irr-group-meta">${g.ids.length} parcelle${g.ids.length > 1 ? 's' : ''}</div>
        </div>
        ${checkIcon(all, some)}
      </div>`
    }).join('')
  }

  function plotsHTML() {
    return plots.map(p => {
      const sel = selectedIds.has(p.id)
      return `<div class="irr-plot-row${sel ? ' irr-plot-row--sel' : ''}" data-pid="${p.id}">
        <div><div class="irr-plot-name">${p.name}</div>${plotInfo(p)}</div>
        ${checkIcon(sel, false)}
      </div>`
    }).join('')
  }

  function updateDateHint(layer) {
    layer.querySelector('#irr-date-hint').innerHTML = dateHint(dateVal)
  }

  function renderBottomBar(layer) {
    const n   = selectedIds.size
    const sum = layer.querySelector('.irr-summary')
    const btn = layer.querySelector('.irr-save-btn')
    if (!sum || !btn) return
    sum.textContent = n === 0 ? '' : `${n} parcelle${n > 1 ? 's' : ''} · ${qtyVal} mm`
    btn.disabled    = n === 0
    btn.textContent = n === 0 ? 'Enregistrer' : `Enregistrer · ${n} parcelle${n > 1 ? 's' : ''}`
  }

  function bindZones(layer) {
    layer.querySelectorAll('.irr-group-card').forEach(el => {
      el.addEventListener('click', () => {
        const ids = el.dataset.gids.split(',').map(Number)
        const all = ids.every(id => selectedIds.has(id))
        ids.forEach(id => all ? selectedIds.delete(id) : selectedIds.add(id))
        layer.querySelector('#groups-inner').innerHTML = groupsHTML()
        layer.querySelector('#plots-inner').innerHTML  = plotsHTML()
        bindZones(layer); renderBottomBar(layer)
      })
    })
    layer.querySelectorAll('.irr-plot-row').forEach(el => {
      el.addEventListener('click', () => {
        const id = +el.dataset.pid
        selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id)
        layer.querySelector('#groups-inner').innerHTML = groupsHTML()
        layer.querySelector('#plots-inner').innerHTML  = plotsHTML()
        bindZones(layer); renderBottomBar(layer)
      })
    })
  }

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
    <div class="irr-scroll-body irr-two-zones">
      ${groups.length ? `
      <div class="irr-zone">
        <div class="irr-zone-hd">✦ Groupes suggérés</div>
        <div class="irr-zone-inner" id="groups-inner">${groupsHTML()}</div>
      </div>` : ''}
      <div class="irr-zone">
        <div class="irr-zone-hd">Toutes les parcelles</div>
        <div class="irr-zone-inner" id="plots-inner">${plotsHTML()}</div>
      </div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Enregistrer</button>
    </div>
  `))

  bindZones(layer)
  renderBottomBar(layer)

  layer.querySelector('#irr-back').addEventListener('click', popDetail)

  layer.querySelector('#irr-date').addEventListener('change', e => {
    dateVal = e.target.value; updateDateHint(layer); renderBottomBar(layer)
  })
  layer.querySelector('#irr-qty').addEventListener('input', e => {
    qtyVal = parseInt(e.target.value) || 1; renderBottomBar(layer)
  })

  layer.querySelector('.irr-save-btn').addEventListener('click', () => {
    const n      = selectedIds.size
    const isFut  = dateVal > TODAY
    const status = isFut ? 'Planifiée' : 'Réalisée'
    openConfirmation({
      title: 'Irrigation enregistrée',
      sub: `${n} parcelle${n > 1 ? 's' : ''} · ${qtyVal} mm · ${fmtDateShort(dateVal)}`,
      status, isFut, plots, calFilter: [...selectedIds][0] ?? '',
    })
  })
}

// ─── Stratégie d'irrigation ───────────────────────────────────────────────────

export function openIrrigationStrategie(plots, showToast) {
  let selectedIds = new Set()
  let debut = TODAY
  let fin   = new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString().split('T')[0]
  let qty   = 25
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
    const crop = p.crop
    const irr  = p.irrigation && p.irrigation !== "Pas d'irrigation" ? p.irrigation : null
    if (crop && irr)  return `<span class="irr-plot-info">${crop} · ${irr}</span>`
    if (crop)         return `<span class="irr-plot-info">${crop}</span>`
    if (irr)          return `<span class="irr-plot-info">${irr}</span>`
    return `<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>`
  }

  function renderForm() {
    const occs = computeOccs()
    const n    = selectedIds.size

    const groupsHTML = groups.map(g => {
      const all  = g.ids.every(id => selectedIds.has(id))
      const some = g.ids.some(id  => selectedIds.has(id))
      return `<div class="irr-group-card${all ? ' irr-group-card--sel' : ''}" data-gids="${g.ids.join(',')}">
        <div class="irr-group-info">
          <div class="irr-group-name">${g.label}</div>
          <div class="irr-group-meta">${g.ids.length} parcelle${g.ids.length > 1 ? 's' : ''}</div>
        </div>
        ${checkIcon(all, some)}
      </div>`
    }).join('')

    const plotsHTML = plots.map(p => {
      const sel = selectedIds.has(p.id)
      return `<div class="irr-plot-row${sel ? ' irr-plot-row--sel' : ''}" data-pid="${p.id}">
        <div>
          <div class="irr-plot-name">${p.name}</div>
          ${plotInfo(p)}
        </div>
        ${checkIcon(sel, false)}
      </div>`
    }).join('')

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
          <div class="irr-field-lbl">Fréquence</div>
          <div style="display:flex;align-items:baseline;gap:4px">
            <input type="number" class="irr-qty-input" id="strat-freq" value="${freq}" min="1" max="30" style="width:44px" />
            <span class="irr-field-hint">jours</span>
          </div>
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${preview}</div>
      <div class="irr-section-lbl">Parcelles</div>
      ${groups.length ? `<div class="irr-group-hint">✦ Groupes suggérés</div>${groupsHTML}<div class="irr-divider"></div>` : ''}
      ${plotsHTML}
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
    btn.textContent = occs.length > 0
      ? `Voir l'aperçu (${occs.length}) →`
      : "Voir l'aperçu →"
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
        <span class="irr-header-title">Stratégie d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${renderForm()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `))

  bindForm(layer)
  updateBottomBar(layer)

  layer.querySelector('#strat-back').addEventListener('click', popDetail)

  layer.querySelector('.irr-save-btn').addEventListener('click', () => {
    const occs = computeOccs()
    openStrategieApercu(layer, plots, selectedIds, debut, fin, qty, freq, occs, showToast)
  })
}

// ─── Aperçu stratégie ─────────────────────────────────────────────────────────

function openStrategieApercu(prevLayer, plots, selectedIds, debut, fin, qty, freq, occs, showToast) {
  const months = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  const n      = selectedIds.size

  const first5 = occs.slice(0, 5)
  const rest   = occs.length - 5

  const occItems = first5.map((d, i) => {
    const isFuture = d.toISOString().slice(0, 10) >= TODAY
    const col = isFuture ? '#185FA5' : '#C05000'
    const bg  = isFuture ? '#E6F1FB' : '#FEF0E6'
    const lbl = isFuture ? 'Planifiée' : 'Réalisée'
    return `<div class="irr-occ-row">
      <div class="irr-occ-date" style="background:${bg};color:${col}">
        <span style="font-size:14px;font-weight:600">${d.getDate()}</span>
        <span style="font-size:9px">${months[d.getMonth()]}</span>
      </div>
      <span class="irr-occ-label">Irrigation n°${i + 1}</span>
      <span class="irr-occ-badge" style="background:${bg};color:${col}">${lbl}</span>
      <span class="irr-occ-qty">${qty} mm</span>
    </div>`
  }).join('')

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
          <div class="irr-apercu-big" style="color:#185FA5">${occs.length * qty} mm</div>
          <div class="irr-apercu-sub">${n} parcelle${n > 1 ? 's' : ''} · ${qty} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-section-lbl">Premières occurrences</div>
      ${occItems}
      ${rest > 0 ? `<div class="irr-more-label">... et ${rest} occurrence${rest > 1 ? 's' : ''} de plus</div>` : ''}
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la stratégie</button>
    </div>
  `))

  layer.querySelector('#apercu-back').addEventListener('click', popDetail)

  layer.querySelector('#apercu-confirm').addEventListener('click', () => {
    const enrouleurPlots = [...selectedIds]
      .map(id => plots.find(p => p.id === id))
      .filter(p => p?.irrigation === 'Enrouleur')

    const doConfirm = () => openConfirmation({
      title: 'Stratégie enregistrée',
      sub: `${n} parcelle${n > 1 ? 's' : ''} · ${qty} mm · tous les ${freq} j · ${occs.length} irrigations générées`,
      status: 'Planifiée', isFut: true, plots,
      calFilter: [...selectedIds][0] ?? '',
    })

    if (enrouleurPlots.length >= 2) {
      openTourDEau(enrouleurPlots, freq, doConfirm)
    } else {
      doConfirm()
    }
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

function openConfirmation({ title, sub, status, isFut, plots, calFilter }) {
  const statusColor = isFut ? '#185FA5' : '#3B6D11'
  const statusBg    = isFut ? '#E6F1FB' : '#EAF3DE'

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <div style="width:60px"></div>
        <span class="irr-header-title">${title.includes('ratégie') ? 'Stratégie' : 'Enregistrée'}</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-confirm-body">
      <div class="irr-confirm-icon-wrap">
        <div class="irr-confirm-icon">✓</div>
      </div>
      <div class="irr-confirm-title">${title}</div>
      <div class="irr-confirm-sub">${sub}</div>
      <span class="irr-confirm-badge" style="background:${statusBg};color:${statusColor}">${status}</span>
      <div class="irr-confirm-options">
        <div class="irr-confirm-opt" id="conf-back">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">↩</div>
          <div>
            <div class="irr-confirm-opt-title">Retour au tableau de bord</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
        <div class="irr-confirm-opt irr-confirm-opt--primary" id="conf-calendar">
          <div class="irr-confirm-opt-icon" style="background:#E6F1FB">📅</div>
          <div>
            <div class="irr-confirm-opt-title">Voir le calendrier</div>
            <div class="irr-confirm-opt-sub">Historique &amp; irrigations planifiées</div>
          </div>
        </div>
      </div>
    </div>
  `))

  layer.querySelector('#conf-back').addEventListener('click', () => {
    // Pop until back to dashboard (pop all pushed layers)
    popDetail(); popDetail(); popDetail()
  })

  layer.querySelector('#conf-calendar').addEventListener('click', () => {
    openCalendar(plots, calFilter)
  })
}

// ─── Calendrier ───────────────────────────────────────────────────────────────

const IRRIG_SEASON = [
  { iso: '2026-04-21', mm: 18, real: true,  label: 'Maïs · Pivot' },
  { iso: '2026-04-28', mm: 22, real: true,  label: 'Maïs · Aspersion' },
  { iso: '2026-05-04', mm: 20, real: true,  label: 'Maïs · Pivot' },
  { iso: '2026-05-07', mm: 25, real: true,  label: 'Maïs · Pivot' },
  { iso: '2026-05-11', mm: 30, real: true,  label: 'Maïs · Pivot' },
  { iso: '2026-05-13', mm: 22, real: false, label: 'Maïs · Aspersion' },
  { iso: '2026-05-18', mm: 30, real: false, label: 'Maïs · Pivot' },
  { iso: '2026-05-21', mm: 25, real: false, label: 'Maïs · Pivot' },
  { iso: '2026-05-24', mm: 18, real: false, label: 'Maïs · Aspersion' },
  { iso: '2026-05-28', mm: 30, real: false, label: 'Maïs · Pivot' },
  { iso: '2026-06-04', mm: 25, real: false, label: 'Maïs · Pivot' },
  { iso: '2026-06-11', mm: 30, real: false, label: 'Maïs · Pivot' },
  { iso: '2026-06-18', mm: 25, real: false, label: 'Maïs · Aspersion' },
]

const RAIN_DATA = [
  { iso: '2026-04-25', mm: 12 }, { iso: '2026-05-03', mm: 8 },
  { iso: '2026-05-10', mm: 15 }, { iso: '2026-05-17', mm: 5 },
  { iso: '2026-05-26', mm: 10 }, { iso: '2026-06-02', mm: 6 },
]

const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const MONTHS_SHORT = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']

export function openCalendar(plots, initialFilter) {
  const groups = buildGroups(plots)
  let calFilter  = initialFilter || ''
  let calMonth   = 4  // mai 0-indexed
  let calYear    = 2026
  let selectedDay = null

  function getIrrig() {
    if (!calFilter) return IRRIG_SEASON
    const g = groups.find(g => g.label === calFilter)
    if (g) return IRRIG_SEASON.filter(i => g.ids.some(id => plots.find(p => p.id === id)?.crop === i.label.split(' · ')[0]))
    return IRRIG_SEASON
  }

  function renderCumuls(irrig) {
    const real    = irrig.filter(i => i.real)
    const planned = irrig.filter(i => !i.real)
    const tR = real.reduce((s, i) => s + i.mm, 0)
    const tP = planned.reduce((s, i) => s + i.mm, 0)
    return `<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Réalisées</div>
        <div class="irr-cumul-val" style="color:#C05000">${tR} mm</div>
        <div class="irr-cumul-count">${real.length} irrigation${real.length !== 1 ? 's' : ''}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#185FA5">${tP} mm</div>
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
        renderContent(layer)
      },
      onDelete: () => {
        const idx = IRRIG_SEASON.indexOf(ir)
        if (idx > -1) IRRIG_SEASON.splice(idx, 1)
        renderContent(layer)
      },
    })
  }

  function openEditStratSheet(label, layer) {
    const bodyEl = document.createElement('div')
    let showStopConfirm = false

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
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Arrêter la stratégie</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations futures planifiées</div>
          </div>
        </div>
        ${showStopConfirm ? `
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>` : ''}`

      bodyEl.querySelector('#strat-modify')?.addEventListener('click', () => {
        document.querySelector('.irr-sheet-overlay')?.remove()
        openIrrigationStrategie(plots, () => renderContent(layer))
      })
      bodyEl.querySelector('#strat-stop')?.addEventListener('click', () => {
        showStopConfirm = true; renderBody()
      })
      bodyEl.querySelector('#stop-cancel')?.addEventListener('click', () => {
        showStopConfirm = false; renderBody()
      })
      bodyEl.querySelector('#stop-confirm')?.addEventListener('click', () => {
        const before = IRRIG_SEASON.length
        IRRIG_SEASON.splice(0, IRRIG_SEASON.length,
          ...IRRIG_SEASON.filter(i => !(i.label === label && !i.real))
        )
        document.querySelector('.irr-sheet-overlay')?.remove()
        renderContent(layer)
      })
    }
    renderBody()
    showIrrigSheet({ title: 'Gérer la stratégie', body: bodyEl, saveLabel: 'Fermer', onSave: () => {} })
  }

  function renderList(irrig, layer) {
    if (!irrig.length) return `<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98;">Aucune irrigation</div>`
    const real    = irrig.filter(i => i.real)
    const planned = irrig.filter(i => !i.real)
    const label   = calFilter

    const stratBtnHTML = label
      ? `<div style="display:flex;justify-content:flex-end;margin-bottom:8px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la stratégie ↗</button>
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
      ${real.length    ? `<div class="irr-list-section">Réalisées</div>${real.map(item).join('')}`    : ''}
      ${planned.length ? `<div class="irr-list-section">Planifiées</div>${planned.map(item).join('')}` : ''}
    `
  }

  function renderFullList(irrig, layer) {
    if (!irrig.length) return `<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>`

    const future = [...irrig].filter(i => !i.real).sort((a, b) => a.iso < b.iso ? -1 : 1)
    const past   = [...irrig].filter(i =>  i.real).sort((a, b) => a.iso > b.iso ? -1 : 1)

    function item(ir) {
      const [, m, d] = ir.iso.split('-').map(Number)
      const col  = ir.real ? '#C05000' : '#185FA5'
      const bg   = ir.real ? '#FEF0E6' : '#E6F1FB'
      const iidx = IRRIG_SEASON.indexOf(ir)
      return `<div class="irr-list-item">
        <div class="irr-list-stripe" style="background:${col}"></div>
        <div class="irr-list-date" style="background:${bg};color:${col}">
          <span style="font-size:15px;font-weight:700">${d}</span>
          <span style="font-size:9px">${MONTHS_SHORT[m-1]}</span>
        </div>
        <div style="flex:1;min-width:0">
          <div class="irr-list-label">${ir.label}</div>
          <div class="irr-list-status" style="color:${col}">${ir.real ? 'Réalisée' : 'Planifiée'}</div>
        </div>
        <div class="irr-list-mm" style="background:${bg};color:${col}">${ir.mm} mm</div>
        <button class="irr-edit-btn" data-iidx="${iidx}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${iidx}" title="Supprimer">🗑</button>
      </div>`
    }

    return `
      ${future.length ? `<div class="irr-list-section">À venir</div>${future.map(item).join('')}` : ''}
      ${past.length   ? `<div class="irr-list-section">Réalisées</div>${past.map(item).join('')}`   : ''}
    `
  }

  function renderContent(layer) {
    const body = layer.querySelector('.irr-cal-body')

    if (!calFilter) {
      body.innerHTML = `<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>`
      return
    }

    const irrig      = getIrrig()
    const hasStrategy = irrig.some(i => !i.real)
    const actionBar  = hasStrategy
      ? `<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la stratégie ↗</button>
         </div>`
      : `<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une stratégie</button>
         </div>`

    body.innerHTML = `
      ${renderCumuls(irrig)}
      ${actionBar}
      ${renderGraph(irrig)}
      ${renderFullList(irrig, layer)}
    `

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
        if (idx >= 0) { IRRIG_SEASON.splice(idx, 1); renderContent(layer) }
      })
    })
    body.querySelector('#open-strat-edit')?.addEventListener('click', () => {
      openEditStratSheet(calFilter, layer)
    })
    body.querySelector('#cal-add-irrig')?.addEventListener('click', () => {
      openIrrigationSaisie(plots, () => renderContent(layer))
    })
    body.querySelector('#cal-add-strat')?.addEventListener('click', () => {
      openIrrigationStrategie(plots, () => renderContent(layer))
    })
  }

  const groupOpts = groups.map(g => `<option value="${g.label}"${g.label === calFilter ? ' selected' : ''}>⬡ ${g.label}</option>`).join('')
  const plotOpts  = plots.map(p => `<option value="${p.id}"${String(p.id) === String(calFilter) ? ' selected' : ''}>${p.name}</option>`).join('')

  const layer = flexLayer(pushDetail(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Calendrier</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:8px 14px 10px">
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${!calFilter ? 'selected' : ''}>— Sélectionner une parcelle ou un groupe —</option>
          ${groups.length ? `<optgroup label="Groupes auto-détectés">${groupOpts}</optgroup>` : ''}
          <optgroup label="Parcelles">${plotOpts}</optgroup>
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

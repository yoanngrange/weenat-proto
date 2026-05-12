import { sensors } from '../../data/sensors.js'
import { plots }   from '../../data/plots.js'
import { showToast, showSheet } from '../ui.js'

function generateAlertHistory(alertId) {
  const scenarios = [
    { label: 'Seuil dépassé',  desc: 'Conditions déclenchantes vérifiées', duration: '2h34',  resolved: true  },
    { label: 'Seuil dépassé',  desc: 'Notification SMS envoyée',            duration: '45min', resolved: true  },
    { label: 'Seuil dépassé',  desc: 'Valeur mesurée hors plage',           duration: '1h20',  resolved: true  },
    { label: 'Fausse alerte',  desc: 'Pic transitoire — durée < seuil',     duration: null,    resolved: true  },
    { label: 'Seuil dépassé',  desc: 'Conditions toujours vérifiées',       duration: '3h05',  resolved: true  },
    { label: 'Alerte en cours',desc: 'Conditions vérifiées depuis ce matin', duration: null,   resolved: false },
  ]
  const count = 3 + (alertId % 5)
  const now = Date.now()
  return Array.from({ length: count }, (_, i) => {
    const seed = alertId * 17 + i * 7
    const daysAgo = 1 + i * (2 + seed % 6)
    const ts = new Date(now - daysAgo * 86400000)
    const s = scenarios[seed % scenarios.length]
    const d = ts.getDate(), m = ts.getMonth() + 1
    return {
      date:   `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}`,
      heure:  `${String(6 + seed % 14).padStart(2,'0')}h${String(seed % 60).padStart(2,'0')}`,
      label:  s.label,
      desc:   s.desc,
      duration: s.duration,
      resolved: i > 0 ? true : s.resolved,
    }
  })
}

const ALERTS_ADMIN = [
  { id: 1, name: 'Pluie forte > 10 mm/h',       statut: 'actif',   metric: 'pluie',             created: '2026-01-15', lastTriggered: '2026-04-10', sensorIds: [1, 3], parcelIds: [1, 2] },
  { id: 2, name: 'Gel précoce < 2°C',            statut: 'actif',   metric: 'temperature',        created: '2025-11-03', lastTriggered: '2026-03-18', sensorIds: [2],    parcelIds: [3] },
  { id: 3, name: 'Teneur en eau critique',        statut: 'inactif', metric: 'teneur-eau',         created: '2026-02-20', lastTriggered: null,         sensorIds: [5],    parcelIds: [4, 5] },
  { id: 4, name: 'Vent violent > 80 km/h',        statut: 'actif',   metric: 'vent',               created: '2025-09-01', lastTriggered: '2026-02-28', sensorIds: [1, 4], parcelIds: [] },
  { id: 5, name: 'Rayonnement faible',            statut: 'inactif', metric: 'rayonnement',        created: '2026-03-01', lastTriggered: null,         sensorIds: [],     parcelIds: [1] },
  { id: 6, name: 'DPV élevé > 2 kPa',            statut: 'actif',   metric: 'temperature',        created: '2026-03-15', lastTriggered: '2026-04-14', sensorIds: [2],    parcelIds: [2, 3] },
  { id: 7, name: 'Potentiel hydrique > 100 kPa', statut: 'actif',   metric: 'potentiel-hydrique', created: '2026-04-01', lastTriggered: '2026-04-12', sensorIds: [6],    parcelIds: [6] },
  { id: 8, name: 'Température humide < 0°C',      statut: 'actif',   metric: 'temp-humide',        created: '2026-01-10', lastTriggered: '2026-03-05', sensorIds: [3],    parcelIds: [1], phones: ['+33 6 12 34 56 78', '+33 7 52 18 93 46'] },
  { id: 9, name: 'Température sèche > 35°C',      statut: 'actif',   metric: 'temp-seche',         created: '2026-02-15', lastTriggered: '2026-04-18', sensorIds: [4],    parcelIds: [3], phones: ['+33 6 12 34 56 78'] },
]

const ALERTS_ADHERENT = [
  { id: 1, name: 'Gel précoce < 2°C',         statut: 'actif',   metric: 'temperature', created: '2025-11-15', lastTriggered: '2026-03-18', sensorIds: [2], parcelIds: [1] },
  { id: 2, name: 'Pluie forte > 15 mm/h',     statut: 'actif',   metric: 'pluie',       created: '2026-01-20', lastTriggered: '2026-04-10', sensorIds: [1], parcelIds: [2] },
  { id: 3, name: 'Teneur en eau basse < 30%', statut: 'inactif', metric: 'teneur-eau',  created: '2026-03-05', lastTriggered: null,         sensorIds: [5], parcelIds: [] },
]

const METRIC_LABELS = {
  'pluie': 'Pluie', 'temperature': 'Température', 'teneur-eau': 'Teneur en eau sol',
  'potentiel-hydrique': 'Potentiel hydrique', 'vent': 'Vent', 'rayonnement': 'Rayonnement',
  'humidite': 'Humidité', 'temp-humide': 'Température humide', 'temp-seche': 'Température sèche',
}

const METRIC_ICONS = {
  'pluie': 'bi-cloud-rain-fill', 'temperature': 'bi-thermometer-half',
  'teneur-eau': 'bi-droplet-fill', 'potentiel-hydrique': 'bi-moisture',
  'vent': 'bi-wind', 'rayonnement': 'bi-sun-fill',
  'humidite': 'bi-water', 'temp-humide': 'bi-thermometer-low',
  'temp-seche': 'bi-thermometer-high',
}

function fmtDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function targetNames(alert) {
  const sNames = alert.sensorIds.map(id => {
    const s = sensors.find(x => x.id === id)
    return s ? `${s.model} ${s.serial}` : null
  }).filter(Boolean)
  const pNames = alert.parcelIds.map(id => {
    const p = plots.find(x => x.id === id)
    return p?.name || null
  }).filter(Boolean)
  return [...sNames, ...pNames]
}

export function initAlertesScreen(screenEl, role) {
  let content = screenEl.querySelector('#alertes-content')
  if (!content) {
    content = document.createElement('div')
    content.id = 'alertes-content'
    screenEl.appendChild(content)
  }

  const alerts = [...(role === 'adherent' ? ALERTS_ADHERENT : ALERTS_ADMIN)]

  function render() {
    if (!alerts.length) {
      content.innerHTML = `<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>`
      return
    }

    content.innerHTML = alerts.map(a => {
      const targets  = targetNames(a)
      const icon     = METRIC_ICONS[a.metric] || 'bi-bell'
      const isActif  = a.statut === 'actif'

      return `
        <div class="m-alert-card" data-id="${a.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${isActif ? '' : ' m-alert-icon-wrap--off'}">
              <i class="bi ${icon}"></i>
            </div>
            <span class="m-alert-name">${a.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${isActif ? 'checked' : ''} data-id="${a.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${METRIC_LABELS[a.metric] || a.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${fmtDate(a.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${a.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`
    }).join('')

    bindEvents()
  }

  function bindEvents() {
    // Toggle actif/inactif
    content.querySelectorAll('.m-alert-toggle input').forEach(cb => {
      cb.addEventListener('change', e => {
        e.stopPropagation()
        const id    = +cb.dataset.id
        const alert = alerts.find(a => a.id === id)
        if (alert) {
          alert.statut = cb.checked ? 'actif' : 'inactif'
          render()
          showToast(`Alerte ${cb.checked ? 'activée' : 'désactivée'}`)
        }
      })
    })

    // Plus d'infos button → detail sheet
    content.querySelectorAll('.m-alert-more-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const id = +btn.dataset.id
        const alert = alerts.find(a => a.id === id); if (!alert) return
        const targets = targetNames(alert)
        const body = document.createElement('div')
        const history = generateAlertHistory(id)

        function renderPerimetre() {
          const sItems = alert.sensorIds.map((sid, i) => {
            const s = sensors.find(x => x.id === sid)
            return s ? { label: `${s.model} ${s.serial}`, type: 'sensor', idx: i } : null
          }).filter(Boolean)
          const pItems = alert.parcelIds.map((pid, i) => {
            const p = plots.find(x => x.id === pid)
            return p ? { label: p.name, type: 'parcel', idx: i } : null
          }).filter(Boolean)
          const all = [...sItems, ...pItems]
          return all.length
            ? all.map(item => `<div class="m-perimetre-item" data-type="${item.type}" data-idx="${item.idx}">
                <span>${item.label}</span>
                <button class="m-perimetre-del" data-type="${item.type}" data-idx="${item.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join('')
            : '<span style="color:#8e8e93;font-size:13px">—</span>'
        }

        const perimDiv = document.createElement('div')
        perimDiv.className = 'm-sheet-info-rows'

        function rebuildBody() {
          body.innerHTML = ''
          const rows = document.createElement('div')
          rows.className = 'm-sheet-info-rows'
          rows.innerHTML = `
            <div class="m-sheet-info-row"><span>Métrique</span><span>${METRIC_LABELS[alert.metric] || alert.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${fmtDate(alert.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${fmtDate(alert.created)}</span></div>
            ${alert.phones?.length ? `<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${alert.phones.join(', ')}</span></div>` : ''}
            <div class="m-sheet-info-row"><span>Statut</span><span>${alert.statut}</span></div>`
          const perimRow = document.createElement('div')
          perimRow.style.cssText = 'padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)'
          perimRow.innerHTML = `<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${renderPerimetre()}</div>`
          rows.appendChild(perimRow)
          body.appendChild(rows)

          const histDiv = document.createElement('div')
          histDiv.innerHTML = `<div class="m-history-title">Déclenchements</div>
            ${history.map(h => `<div class="m-history-row">
              <div class="m-history-dot" style="background:${h.resolved ? '#30d158' : '#ff9f0a'}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${h.date} à ${h.heure}${h.duration ? ` · ${h.duration}` : ''}</div>
                <div class="m-history-label">${h.label}</div>
                <div class="m-history-desc">${h.desc}</div>
              </div></div>`).join('')}`
          body.appendChild(histDiv)

          body.querySelectorAll('.m-perimetre-del').forEach(btn => {
            btn.addEventListener('click', e => {
              e.stopPropagation()
              const type = btn.dataset.type, idx = +btn.dataset.idx
              if (type === 'sensor') alert.sensorIds.splice(idx, 1)
              else alert.parcelIds.splice(idx, 1)
              rebuildBody()
              render()
              showToast('Retiré du périmètre')
            })
          })
        }

        rebuildBody()
        showSheet({ title: alert.name, body, doneLabel: 'Fermer', onDone: () => {} })
      })
    })

    // Tap card → options sheet
    content.querySelectorAll('.m-alert-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.m-alert-toggle')) return
        if (e.target.closest('.m-alert-more-btn')) return
        const id    = +card.dataset.id
        const alert = alerts.find(a => a.id === id); if (!alert) return
        const body  = document.createElement('div')
        body.innerHTML = `
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`
        const sheet = showSheet({ title: alert.name, body, doneLabel: 'Fermer', onDone: () => {} })
        body.querySelector('#al-edit').addEventListener('click', () => {
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); showToast('Modification à venir') }, 280)
        })
        body.querySelector('#al-delete').addEventListener('click', () => {
          const idx = alerts.findIndex(a => a.id === id)
          if (idx !== -1) alerts.splice(idx, 1)
          sheet.classList.remove('m-sheet-overlay--show')
          setTimeout(() => { sheet.remove(); render() }, 280)
          showToast('Alerte supprimée')
        })
      })
    })
  }

  // Bouton + (navbar)
  screenEl.querySelector('.m-navbar-action')?.addEventListener('click', () => {
    showToast('Création d\'alerte — à venir')
  })

  render()
}

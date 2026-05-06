import { sensors } from '../../data/sensors.js'
import { plots }   from '../../data/plots.js'
import { showToast, showSheet } from '../ui.js'

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
  'humidite': 'Humidité air', 'temp-humide': 'Température humide', 'temp-seche': 'Température sèche',
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
              <span class="m-alert-row-label">Cibles</span>
              <span class="m-alert-row-val">${targets.length ? targets.join(', ') : '—'}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${fmtDate(a.lastTriggered)}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Créée le</span>
              <span class="m-alert-row-val">${fmtDate(a.created)}</span>
            </div>
            ${a.phones?.length ? `
            <div class="m-alert-row m-alert-row--last">
              <span class="m-alert-row-label">Téléphone(s)</span>
              <span class="m-alert-row-val">${a.phones.join(', ')}</span>
            </div>` : '<div class="m-alert-row--last"></div>'}
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

    // Tap card → options sheet
    content.querySelectorAll('.m-alert-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.m-alert-toggle')) return
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

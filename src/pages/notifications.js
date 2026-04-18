import { updateBreadcrumb } from '../js/breadcrumb.js'
import { sensors } from '../data/sensors.js'
import { members } from '../data/members.js'
import { orgs } from '../data/orgs.js'

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  initFilters()
  render()

  document.getElementById('export-notifs-btn')?.addEventListener('click', () => {
    showToast('Export des notifications — fonctionnalité à venir')
  })
})

const PAGE_SIZE = 20

const TYPE_ICONS = {
  capteur:     'bi-broadcast',
  parcelle:    'bi-geo-alt',
  membre:      'bi-person',
  alerte:      'bi-bell',
  intégration: 'bi-plug',
  adhérent:    'bi-person-plus',
  note:        'bi-sticky',
}

const TYPE_COLORS = {
  capteur:     '#0172A4',
  parcelle:    '#24B066',
  membre:      '#6B21A8',
  alerte:      '#E05252',
  intégration: '#F5A623',
  adhérent:    '#4ECDC4',
  note:        '#8B6F47',
}

const NETWORK_MEMBERS = members
  .filter(m => m.email.endsWith('@breizagri-conseil.fr'))
  .map(m => `${m.prenom} ${m.nom}`)
  .sort()

const ALL_NOTIFS = [
  { id: 1,  date: '2026-04-17T10:23:00', type: 'capteur',     org: 'Breiz\'Agri Conseil', text: 'Capteur WEE-00101 ajouté à la parcelle "Parcelle Nord"', capteur: 'WEE-00101', membre: 'Jean Dupont' },
  { id: 2,  date: '2026-04-17T09:55:00', type: 'alerte',      org: 'Ferme du Bocage',     text: 'Déclenchement alerte "Pluie forte > 10 mm/h" sur capteur WEE-00101', capteur: 'WEE-00101', membre: 'Jean Dupont' },
  { id: 3,  date: '2026-04-16T18:40:00', type: 'parcelle',    org: 'Ferme du Bocage',     text: 'Contour de la parcelle "Les Terres Noires" modifié', membre: 'Jean Dupont' },
  { id: 4,  date: '2026-04-16T14:12:00', type: 'membre',      org: 'Breiz\'Agri Conseil', text: 'Membre Martin Lefebvre ajouté à l\'organisation "EARL des Grèves"', membre: 'Martin Lefebvre' },
  { id: 5,  date: '2026-04-16T11:05:00', type: 'capteur',     org: 'EARL des Grèves',     text: 'Événement "capteur couché" détecté sur WEE-00102', capteur: 'WEE-00102', membre: 'Martin Lefebvre' },
  { id: 6,  date: '2026-04-15T17:30:00', type: 'adhérent',    org: 'Breiz\'Agri Conseil', text: 'Nouvel adhérent "GAEC des Landes" ajouté au réseau', membre: 'Jean Dupont' },
  { id: 7,  date: '2026-04-15T14:00:00', type: 'parcelle',    org: 'GAEC des Landes',     text: 'Parcelle "Grand Clos" créée (12,5 ha — Blé tendre)', membre: 'Sophie Bernard' },
  { id: 8,  date: '2026-04-15T09:18:00', type: 'intégration', org: 'Ferme du Bocage',     text: 'Intégration IRRÉ-LIS Mono-Culture activée sur "Parcelle Nord"', membre: 'Jean Dupont' },
  { id: 9,  date: '2026-04-14T16:45:00', type: 'capteur',     org: 'Ferme du Bocage',     text: 'Liaison capteur WEE-00103 → parcelle "Carré du Bois" supprimée', capteur: 'WEE-00103', membre: 'Jean Dupont' },
  { id: 10, date: '2026-04-14T11:22:00', type: 'membre',      org: 'Ferme du Bocage',     text: 'Membre Sophie Bernard retiré de la parcelle "Parcelle Sud"', membre: 'Sophie Bernard' },
  { id: 11, date: '2026-04-14T08:55:00', type: 'alerte',      org: 'Breiz\'Agri Conseil', text: 'Déclenchement alerte "DPV élevé > 2 kPa" sur capteur WEE-00104', capteur: 'WEE-00104', membre: 'Jean Dupont' },
  { id: 12, date: '2026-04-13T17:10:00', type: 'parcelle',    org: 'EARL des Grèves',     text: 'Culture mise à jour : Orge → Colza sur "Parcelle Est"', membre: 'Martin Lefebvre' },
  { id: 13, date: '2026-04-13T14:30:00', type: 'capteur',     org: 'GAEC des Landes',     text: 'Capteur WEE-00220 supprimé de "GAEC des Landes"', capteur: 'WEE-00220', membre: 'Sophie Bernard' },
  { id: 14, date: '2026-04-13T10:00:00', type: 'parcelle',    org: 'Ferme du Bocage',     text: 'Type d\'irrigation mis à jour : Goutte à goutte sur "Les Terres Noires"', membre: 'Jean Dupont' },
  { id: 15, date: '2026-04-12T18:20:00', type: 'membre',      org: 'Breiz\'Agri Conseil', text: 'Thomas Moreau associé au capteur WEE-00101', capteur: 'WEE-00101', membre: 'Thomas Moreau' },
  { id: 16, date: '2026-04-12T15:00:00', type: 'capteur',     org: 'EARL des Grèves',     text: 'Événement "émissions interrompues" résolu sur WEE-00219', capteur: 'WEE-00219', membre: 'Martin Lefebvre' },
  { id: 17, date: '2026-04-12T11:45:00', type: 'intégration', org: 'GAEC des Landes',     text: 'Intégration Rimpro activée sur "Parcelle Ouest"', membre: 'Sophie Bernard' },
  { id: 18, date: '2026-04-11T16:35:00', type: 'adhérent',    org: 'Breiz\'Agri Conseil', text: 'Statut de "SCA du Légué" mis à jour : invité → actif', membre: 'Jean Dupont' },
  { id: 19, date: '2026-04-11T09:10:00', type: 'parcelle',    org: 'Ferme du Bocage',     text: 'Texture de sol mise à jour : Limon → Argile sur "Parcelle Nord"', membre: 'Jean Dupont' },
  { id: 20, date: '2026-04-10T17:00:00', type: 'capteur',     org: 'Ferme du Bocage',     text: 'Capteur WEE-00115 ajouté à l\'exploitation', capteur: 'WEE-00115', membre: 'Jean Dupont' },
  { id: 21, date: '2026-04-10T14:20:00', type: 'membre',      org: 'EARL des Grèves',     text: 'Marie Dubois retirée de l\'organisation "EARL des Grèves"', membre: 'Marie Dubois' },
  { id: 22, date: '2026-04-10T10:05:00', type: 'alerte',      org: 'Ferme du Bocage',     text: 'Déclenchement alerte "Potentiel hydrique > 100 kPa"', membre: 'Jean Dupont' },
  { id: 23, date: '2026-04-09T16:50:00', type: 'intégration', org: 'GAEC des Landes',     text: 'Intégration DeciTrait désactivée sur "Parcelle Sud"', membre: 'Sophie Bernard' },
  { id: 24, date: '2026-04-09T12:30:00', type: 'parcelle',    org: 'EARL des Grèves',     text: 'Parcelle "Calvados 2" ajoutée (8,2 ha — Pois)', membre: 'Martin Lefebvre' },
  { id: 25, date: '2026-04-08T15:00:00', type: 'capteur',     org: 'Ferme du Bocage',     text: 'Liaison capteur WEE-00104 → membre Jean Dupont créée', capteur: 'WEE-00104', membre: 'Jean Dupont' },
  { id: 26, date: '2026-04-16T08:30:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note parcelle "Le Grand Pré" : labour effectué', membre: 'Jean Dupont' },
  { id: 27, date: '2026-04-15T14:30:00', type: 'note',        org: 'EARL des Grèves',     text: 'Note parcelle "Parcelle Est" : préparation de sol terminée', membre: 'Martin Lefebvre' },
  { id: 28, date: '2026-04-14T09:00:00', type: 'note',        org: 'GAEC des Landes',     text: 'Note parcelle "Grand Clos" : passage de sangliers détecté', membre: 'Sophie Bernard' },
  { id: 29, date: '2026-04-13T11:30:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note capteur WEE-00102 : capteur redressé sur "Le Grand Pré"', capteur: 'WEE-00102', membre: 'Jean Dupont' },
  { id: 30, date: '2026-04-12T09:00:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note capteur WEE-00117 : changement de pile effectué', capteur: 'WEE-00117', membre: 'Thomas Moreau' },
  { id: 31, date: '2026-04-11T15:00:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note parcelle "Les Courtils" : traitement phyto mouche Suzukii effectué', membre: 'Jean Dupont' },
  { id: 32, date: '2026-04-10T08:00:00', type: 'note',        org: 'EARL des Grèves',     text: 'Note capteur WEE-00220 : antenne remplacée', capteur: 'WEE-00220', membre: 'Martin Lefebvre' },
  { id: 33, date: '2026-04-09T10:00:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note parcelle "Le Grand Pré" : allumage des bougies anti-gel', membre: 'Jean Dupont' },
  { id: 34, date: '2026-04-08T08:30:00', type: 'note',        org: 'GAEC des Landes',     text: 'Note parcelle "Grand Clos" : Tavelure traitée', membre: 'Sophie Bernard' },
  { id: 35, date: '2026-04-07T14:00:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note capteur WEE-00103 : nettoyage pluviomètre effectué', capteur: 'WEE-00103', membre: 'Jean Dupont' },
  { id: 36, date: '2026-04-06T09:30:00', type: 'note',        org: 'Ferme du Bocage',     text: 'Note capteur WEE-00113 : remplacement cuillère pluvio', capteur: 'WEE-00113', membre: 'Thomas Moreau' },
  { id: 37, date: '2026-04-05T11:00:00', type: 'note',        org: 'EARL des Grèves',     text: 'Note capteur WEE-00219 : pose rallonge antenne', capteur: 'WEE-00219', membre: 'Martin Lefebvre' },
].sort((a, b) => b.date.localeCompare(a.date))

const ADHERENT_NOTIF_IDS = new Set([2, 3, 8, 9, 14, 19, 20, 22, 25, 26, 29, 30, 31, 33, 35, 36])

const ORG_NAMES = ['Breiz\'Agri Conseil', ...orgs.map(o => o.name)]
const CAPTEURS = sensors
  .map(s => ({ value: s.serial, label: `${s.serial} — ${s.model}` }))
  .sort((a, b) => a.value.localeCompare(b.value))

let currentPage   = 1
let filterOrg     = ''
let filterType    = ''
let filterSecteur = ''
let filterCapteur = ''
let filterPeriode = ''

function initFilters() {
  const orgSel     = document.getElementById('filter-notif-org')
  const typeSel    = document.getElementById('filter-notif-type')
  const secteurSel = document.getElementById('filter-notif-secteur')
  const capteurSel = document.getElementById('filter-notif-capteur')
  const periodSel  = document.getElementById('filter-notif-periode')

  ORG_NAMES.forEach(o => {
    const opt = document.createElement('option')
    opt.value = o; opt.textContent = o
    orgSel?.appendChild(opt)
  })

  NETWORK_MEMBERS.forEach(m => {
    const opt = document.createElement('option')
    opt.value = m; opt.textContent = m
    secteurSel?.appendChild(opt)
  })

  CAPTEURS.forEach(({ value, label }) => {
    const opt = document.createElement('option')
    opt.value = value; opt.textContent = label
    capteurSel?.appendChild(opt)
  })

  orgSel?.addEventListener('change', e => {
    filterOrg = e.target.value
    if (filterOrg) { secteurSel.value = ''; filterSecteur = ''; capteurSel.value = ''; filterCapteur = '' }
    currentPage = 1; render()
  })
  typeSel?.addEventListener('change', e => { filterType = e.target.value; currentPage = 1; render() })
  secteurSel?.addEventListener('change', e => {
    filterSecteur = e.target.value
    if (filterSecteur) { orgSel.value = ''; filterOrg = ''; capteurSel.value = ''; filterCapteur = '' }
    currentPage = 1; render()
  })
  capteurSel?.addEventListener('change', e => {
    filterCapteur = e.target.value
    if (filterCapteur) { orgSel.value = ''; filterOrg = ''; secteurSel.value = ''; filterSecteur = '' }
    currentPage = 1; render()
  })
  periodSel?.addEventListener('change', e => { filterPeriode = e.target.value; currentPage = 1; render() })
}

function getFiltered() {
  const isAdherent = localStorage.getItem('menuRole') === 'adherent-reseau'
  let list = isAdherent
    ? ALL_NOTIFS.filter(n => ADHERENT_NOTIF_IDS.has(n.id))
    : [...ALL_NOTIFS]

  if (filterOrg)     list = list.filter(n => n.org === filterOrg)
  if (filterType)    list = list.filter(n => n.type === filterType)
  if (filterSecteur) list = list.filter(n => n.membre === filterSecteur)
  if (filterCapteur) list = list.filter(n => n.capteur === filterCapteur)

  if (filterPeriode) {
    const now = new Date('2026-04-17T23:59:59')
    if (filterPeriode === 'today') {
      const start = new Date('2026-04-17T00:00:00')
      list = list.filter(n => new Date(n.date) >= start && new Date(n.date) <= now)
    } else if (filterPeriode === 'yesterday') {
      const start = new Date('2026-04-16T00:00:00')
      const end   = new Date('2026-04-16T23:59:59')
      list = list.filter(n => new Date(n.date) >= start && new Date(n.date) <= end)
    } else if (filterPeriode === '7d') {
      const cutoff = new Date('2026-04-10T00:00:00')
      list = list.filter(n => new Date(n.date) >= cutoff)
    } else if (filterPeriode === '30d') {
      const cutoff = new Date('2026-03-18T00:00:00')
      list = list.filter(n => new Date(n.date) >= cutoff)
    } else if (filterPeriode === '365d') {
      const cutoff = new Date('2025-04-17T00:00:00')
      list = list.filter(n => new Date(n.date) >= cutoff)
    }
  }

  return list
}

function fmtDateTime(iso) {
  const d = new Date(iso)
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()} à ${String(d.getHours()).padStart(2,'0')}h${String(d.getMinutes()).padStart(2,'0')}`
}

function render() {
  const list  = getFiltered()
  const total = list.length
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  currentPage = Math.min(currentPage, pages)
  const paged = list.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const wall = document.getElementById('notif-wall')
  if (!wall) return

  if (!paged.length) {
    wall.innerHTML = '<div class="notif-empty"><i class="bi bi-bell-slash"></i> Aucune notification.</div>'
  } else {
    wall.innerHTML = paged.map(n => {
      const icon  = TYPE_ICONS[n.type] || 'bi-info-circle'
      const color = TYPE_COLORS[n.type] || 'var(--txt3)'
      return `
        <div class="notif-item">
          <div class="notif-icon" style="background:${color}20;color:${color}"><i class="bi ${icon}"></i></div>
          <div class="notif-body">
            <div class="notif-text">${n.text}</div>
            <div class="notif-meta">
              <span class="notif-org">${n.org}</span>
              ${n.membre ? `<span class="notif-org" style="color:var(--txt3)">· ${n.membre}</span>` : ''}
              <span class="notif-date">${fmtDateTime(n.date)}</span>
            </div>
          </div>
        </div>
      `
    }).join('')
  }

  const paginationEl = document.getElementById('notif-pagination')
  if (paginationEl) {
    if (pages <= 1) { paginationEl.innerHTML = ''; return }
    paginationEl.innerHTML = `
      <button class="btn-secondary" id="notif-prev" ${currentPage === 1 ? 'disabled' : ''}><i class="bi bi-chevron-left"></i></button>
      <span class="notif-page-info">Page ${currentPage} / ${pages}</span>
      <button class="btn-secondary" id="notif-next" ${currentPage === pages ? 'disabled' : ''}><i class="bi bi-chevron-right"></i></button>
    `
    document.getElementById('notif-prev')?.addEventListener('click', () => { currentPage--; render() })
    document.getElementById('notif-next')?.addEventListener('click', () => { currentPage++; render() })
  }
}

function showToast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.classList.add('show'), 10)
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300) }, 2500)
}

export const PAGE_TITLES = {
  '': { title: 'Parcelles', section: 'exploitation' },
  'index.html': { title: 'Parcelles', section: 'exploitation' },
  'tableau-de-bord.html': { title: 'Tableau de bord', section: 'exploitation' },
  'parcelles.html': { title: 'Parcelles', section: 'exploitation' },
  'parcelles-reseau.html': { title: 'Parcelles', section: 'reseau' },
  'capteurs.html': { title: 'Capteurs', section: 'exploitation' },
  'capteurs-reseau.html': { title: 'Capteurs', section: 'reseau' },
  'membres.html': { title: 'Membres', section: 'exploitation' },
  'adherents.html': { title: 'Adhérents', section: 'reseau' },
  'facturation.html': { title: 'Facturation', section: 'reseau' },
  'previsions.html': { title: 'Prévisions', section: 'exploitation' },
  'integrations.html': { title: 'Intégrations', section: 'exploitation' },
  'parametres.html': { title: 'Paramètres', section: 'exploitation' },
  'parametres-reseau.html': { title: 'Paramètres', section: 'reseau' },
  'informations.html': { title: 'Informations', section: 'reseau' },
  'alertes.html': { title: 'Mes alertes', section: null },
  'notifications.html': { title: 'Mes notifications', section: null },
  'mon-compte.html': { title: 'Mon compte', section: null },
  'aide.html': { title: 'Aide', section: null },
  'capteur-detail.html': { title: 'Capteur', section: 'exploitation' },
  'parcelle-detail.html': { title: 'Parcelle', section: 'exploitation' },
  'parcelle-modifier-contour.html': { title: 'Modifier le contour', section: 'exploitation' },
  'integration-detail.html': { title: 'Intégration', section: 'exploitation' },
}

/**
 * Fill #breadcrumb-context and #breadcrumb-title.
 * @param {string} titleOverride  - Overrides the page-level title (e.g. parcel name).
 * @param {object} [parent]       - Optional parent link: { label, href }
 *   When provided, the title line becomes: "ParentLabel › Title"
 */
export function updateBreadcrumb(titleOverride, parent) {
  const page = window.location.pathname.split('/').pop() || 'parcelles.html'
  const meta = PAGE_TITLES[page] || { title: 'Parcelles', section: 'exploitation' }

  const contextEl = document.getElementById('breadcrumb-context')
  const titleEl   = document.getElementById('breadcrumb-title')
  if (!contextEl || !titleEl) return

  // Entity name varies by role (stored in localStorage by menu-switch.js)
  const menuRole = localStorage.getItem('menuRole') || 'admin-reseau'
  const isAdmin  = menuRole === 'admin-reseau'

  const ENTITY_NAMES = {
    exploitation: isAdmin ? 'Breiz\'Agri Conseil' : 'Ferme du Bocage',
    reseau:       'Breiz\'Agri Conseil',
  }

  const sectionLabel =
    meta.section === 'reseau'       ? `Mon réseau` :
    meta.section === 'exploitation' ? `Mon exploitation` : ''

  const entityName = meta.section ? ENTITY_NAMES[meta.section] : ''

  if (sectionLabel) {
    contextEl.innerHTML = `${sectionLabel}<span class="breadcrumb-entity">${entityName}</span>`
  } else {
    contextEl.textContent = ''
  }
  contextEl.hidden = !sectionLabel

  const title = titleOverride !== undefined ? titleOverride : meta.title

  if (parent) {
    titleEl.innerHTML =
      `<a href="${parent.href}" class="breadcrumb-parent">${parent.label}</a>` +
      `<span class="breadcrumb-sep">›</span>` +
      `<span>${title}</span>`
  } else {
    titleEl.textContent = title
  }
}

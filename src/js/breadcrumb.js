export const PAGE_TITLES = {
  '': { title: 'Parcelles', section: 'exploitation' },
  'index.html': { title: 'Parcelles', section: 'exploitation' },
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
  'integration-detail.html': { title: 'Intégration', section: 'exploitation' },
}

/**
 * Fill #breadcrumb-context and #breadcrumb-title based on the current page URL.
 * @param {string} [titleOverride] - If provided, overrides the title from PAGE_TITLES.
 */
export function updateBreadcrumb(titleOverride) {
  const page = window.location.pathname.split('/').pop() || 'parcelles.html'
  const meta = PAGE_TITLES[page] || { title: 'Parcelles', section: 'exploitation' }

  const contextEl = document.getElementById('breadcrumb-context')
  const titleEl = document.getElementById('breadcrumb-title')
  if (!contextEl || !titleEl) return

  const sectionLabel =
    meta.section === 'reseau' ? 'Mon réseau' :
    meta.section === 'exploitation' ? 'Mon exploitation' : ''
  contextEl.textContent = sectionLabel
  contextEl.hidden = !sectionLabel

  titleEl.textContent = titleOverride !== undefined ? titleOverride : meta.title
}

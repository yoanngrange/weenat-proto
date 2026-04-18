// Integrations page — simplified cards, click → detail
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { plots } from '../data/plots.js'
import { integrations } from '../data/integrations.js'
export { integrations }


const TYPE_COLORS = {
  maladie: 'var(--warn)',
  irrigation: 'var(--pri)',
  fertilisation: 'var(--ok)'
}

const ADHERENT_ACTIVE_IDS = new Set(['irre-lis-mono', 'cropwise-protector', 'abelio'])

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()
  const role = localStorage.getItem('menuRole') || 'admin-reseau'
  const adherentMode = role === 'adherent-reseau'
  renderIntegrationStats(adherentMode)
  populateIntegrationsGrid('', adherentMode)
  setupFilters()
})

function renderIntegrationStats(adherentMode = false) {
  const container = document.getElementById('integrations-stats')
  if (!container) return

  const total = integrations.length

  const plotCounts = {}
  integrations.forEach(integ => {
    plotCounts[integ.id] = plots.filter(p =>
      (p.integrations || []).includes(integ.name)
    ).length
  })

  if (adherentMode) {
    const activeIntegrations = integrations.filter(i => ADHERENT_ACTIVE_IDS.has(i.id))
    const top5Rows = activeIntegrations.map((i, idx) => `
      <div class="integ-top5-row">
        <span class="integ-top5-rank">${idx + 1}</span>
        <span class="integ-top5-name">${i.name}</span>
        <div class="integ-top5-bar">
          <div style="width:${Math.round((1 - idx * 0.2) * 100)}%;background:${TYPE_COLORS[i.type] || 'var(--pri)'};height:100%;border-radius:3px"></div>
        </div>
      </div>
    `).join('')
    container.innerHTML = `
      <div class="integ-stats-2col">
        <div class="integ-stats-left">
          <div class="stat-card"><div class="stat-label">Mes intégrations actives</div><div class="stat-value">${ADHERENT_ACTIVE_IDS.size}</div></div>
          <div class="stat-card"><div class="stat-label">Intégrations disponibles</div><div class="stat-value">${total}</div></div>
        </div>
        <div class="integ-stats-right">
          <div class="integ-top5-title">Mes intégrations actives</div>
          ${top5Rows}
        </div>
      </div>
    `
    container._plotCounts = plotCounts
    return
  }

  const orgPlots   = plots.filter(p => p.orgId === 1)
  const adherPlots = plots.filter(p => p.orgId !== 1)

  const activeExploit = integrations.filter(i => i.connected).length
  const integNamesInAdher = new Set(adherPlots.flatMap(p => p.integrations || []))
  const activeAdher = integrations.filter(i => integNamesInAdher.has(i.name)).length

  const top5 = [...integrations]
    .sort((a, b) => plotCounts[b.id] - plotCounts[a.id])
    .filter(i => plotCounts[i.id] > 0)
    .slice(0, 5)

  const maxCount = top5[0] ? plotCounts[top5[0].id] : 1

  container.innerHTML = `
    <div class="integ-stats-2col">
      <div class="integ-stats-left">
        <div class="stat-card"><div class="stat-label">Intégrations actives exploitation</div><div class="stat-value">${activeExploit}</div></div>
        <div class="stat-card"><div class="stat-label">Intégrations actives adhérents</div><div class="stat-value">${activeAdher}</div></div>
        <div class="stat-card"><div class="stat-label">Intégrations disponibles</div><div class="stat-value">${total}</div></div>
      </div>
      <div class="integ-stats-right">
        <div class="integ-top5-title">Top 5 utilisées (parcelles)</div>
        ${top5.length ? top5.map((i, idx) => `
          <div class="integ-top5-row">
            <span class="integ-top5-rank">${idx + 1}</span>
            <span class="integ-top5-name">${i.name}</span>
            <span class="integ-top5-count">${plotCounts[i.id]}</span>
            <div class="integ-top5-bar">
              <div style="width:${Math.round(plotCounts[i.id] / maxCount * 100)}%;background:${TYPE_COLORS[i.type] || 'var(--pri)'};height:100%;border-radius:3px"></div>
            </div>
          </div>
        `).join('') : '<div style="color:var(--txt3);font-size:13px;padding:12px 0">Aucune parcelle avec intégration active.</div>'}
      </div>
    </div>
  `
  container._plotCounts = plotCounts
}

function populateIntegrationsGrid(filter = '', adherentMode = false) {
  const grid = document.getElementById('integrations-grid')
  grid.innerHTML = ''

  const filtered = filter
    ? integrations.filter(i => i.type === filter)
    : integrations

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">Aucune intégration pour ce filtre.</div>'
    return
  }

  const statsEl = document.getElementById('integrations-stats')
  const plotCounts = statsEl?._plotCounts || {}

  filtered.forEach(integration => {
    const isActive = adherentMode
      ? ADHERENT_ACTIVE_IDS.has(integration.id)
      : integration.connected

    const orgCount      = plots.filter(p => p.orgId === 1 && (p.integrations || []).includes(integration.name)).length
    const adherentCount = plots.filter(p => p.orgId !== 1 && (p.integrations || []).includes(integration.name)).length

    const card = document.createElement('div')
    card.className = `integration-card${isActive ? ' integ-card-active' : ''}`
    card.style.cursor = 'pointer'
    card.innerHTML = `
      <div class="integ-card-logo-left">
        <img
          class="integ-card-logo-squa"
          src="${integration.logo}"
          alt="${integration.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="integ-card-logo-fallback" style="display:none;background:${TYPE_COLORS[integration.type]}22;color:${TYPE_COLORS[integration.type]}">
          ${getInitials(integration.name)}
        </div>
      </div>
      <div class="integ-card-body">
        <div class="integ-card-name">
          ${integration.name}
          ${integration.badge ? `<span class="integ-card-variant">${integration.badge}</span>` : ''}
          ${isActive ? '<span class="integ-active-pill"><i class="bi bi-check-circle-fill"></i> Active</span>' : ''}
        </div>
        <p class="integ-card-desc">${integration.description}</p>
        <div class="integ-card-badges">
          ${!adherentMode && orgCount > 0 ? `<span class="integ-plot-badge integ-plot-org" title="Parcelles réseau"><i class="bi bi-geo-alt"></i> ${orgCount} réseau</span>` : ''}
          ${!adherentMode && adherentCount > 0 ? `<span class="integ-plot-badge integ-plot-adh" title="Parcelles adhérents"><i class="bi bi-people"></i> ${adherentCount} adhérents</span>` : ''}
        </div>
      </div>
    `
    card.addEventListener('click', () => {
      window.location.href = `integration-detail.html?id=${integration.id}`
    })
    grid.appendChild(card)
  })
}

function getInitials(name) {
  return name.split(/[\s\-—]+/).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

function setupFilters() {
  const adherentMode = (localStorage.getItem('menuRole') || 'admin-reseau') === 'adherent-reseau'
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'))
      pill.classList.add('active')
      populateIntegrationsGrid(pill.dataset.type || '', adherentMode)
    })
  })
}

// Integrations page logic
const integrations = [
  { name: 'Modèles Arvalis', type: 'maladie', country: 'France', logo: '🌾', description: 'Modèles de prévision des maladies pour les cultures françaises.' },
  { name: 'Irrigation Optimisée', type: 'irrigation', country: 'Espagne', logo: '💧', description: 'Système d\'irrigation basé sur les données météo.' },
  { name: 'Soil Moisture Monitor', type: 'autre', country: 'Allemagne', logo: '🌱', description: 'Surveillance de l\'humidité du sol en temps réel.' },
  { name: 'Crop Yield Predictor', type: 'autre', country: 'Italie', logo: '📊', description: 'Prédiction des rendements basée sur l\'IA.' },
  { name: 'Pest Alert System', type: 'maladie', country: 'Pays-Bas', logo: '🐛', description: 'Alertes automatiques pour les parasites.' },
  { name: 'Weather Integration', type: 'autre', country: 'Belgique', logo: '🌤️', description: 'Intégration des données météorologiques locales.' },
  { name: 'Fertilizer Calculator', type: 'autre', country: 'Danemark', logo: '🧪', description: 'Calculateur de fertilisants personnalisé.' },
  { name: 'Drone Mapping', type: 'autre', country: 'Suède', logo: '🚁', description: 'Cartographie par drone pour les parcelles.' },
  { name: 'Water Balance Model', type: 'irrigation', country: 'Portugal', logo: '🌊', description: 'Modèle de bilan hydrique pour l\'irrigation.' },
  { name: 'Disease Forecasting', type: 'maladie', country: 'Autriche', logo: '🔬', description: 'Prévision des maladies fongiques.' },
  { name: 'Smart Irrigation Hub', type: 'irrigation', country: 'Grèce', logo: '⚙️', description: 'Hub centralisé pour l\'irrigation intelligente.' },
  { name: 'Crop Rotation Planner', type: 'autre', country: 'Finlande', logo: '🔄', description: 'Planificateur de rotation des cultures.' },
  { name: 'Nutrient Deficiency Detector', type: 'autre', country: 'Irlande', logo: '🍃', description: 'Détection des carences nutritionnelles.' },
  { name: 'Frost Protection', type: 'autre', country: 'Norvège', logo: '❄️', description: 'Système de protection contre le gel.' },
  { name: 'Harvest Optimizer', type: 'autre', country: 'Suisse', logo: '🚜', description: 'Optimisation des dates de récolte.' },
  { name: 'Carbon Footprint Tracker', type: 'autre', country: 'Luxembourg', logo: '🌍', description: 'Suivi de l\'empreinte carbone agricole.' }
]

document.addEventListener('DOMContentLoaded', () => {
  populateIntegrationsGrid()
  setupFilters()
})

function populateIntegrationsGrid() {
  const grid = document.getElementById('integrations-grid')
  grid.innerHTML = ''

  integrations.forEach(integration => {
    const card = document.createElement('div')
    card.className = 'integration-card'
    card.innerHTML = `
      <div class="logo">${integration.logo}</div>
      <h3>${integration.name}</h3>
      <p>${integration.description}</p>
      <span class="country">${integration.country}</span>
    `
    grid.appendChild(card)
  })
}

function setupFilters() {
  const typeFilter = document.getElementById('type-filter')
  const countryFilter = document.getElementById('country-filter')

  // Populate country filter
  const countries = [...new Set(integrations.map(i => i.country))].sort()
  countries.forEach(country => {
    const option = document.createElement('option')
    option.value = country
    option.textContent = country
    countryFilter.appendChild(option)
  })

  // Filter event listeners
  typeFilter.addEventListener('change', filterIntegrations)
  countryFilter.addEventListener('change', filterIntegrations)
}

function filterIntegrations() {
  const typeValue = document.getElementById('type-filter').value
  const countryValue = document.getElementById('country-filter').value

  const cards = document.querySelectorAll('.integration-card')
  cards.forEach(card => {
    const type = integrations.find(i => i.name === card.querySelector('h3').textContent).type
    const country = card.querySelector('.country').textContent

    const typeMatch = !typeValue || type === typeValue
    const countryMatch = !countryValue || country === countryValue

    card.style.display = typeMatch && countryMatch ? '' : 'none'
  })
}
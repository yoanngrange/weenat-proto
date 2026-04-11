// Informations page logic
import { organizations } from '../data/orgs.js'
import { parcels } from '../data/parcels.js'
import { sensors } from '../data/sensors.js'

document.addEventListener('DOMContentLoaded', () => {
  updateNetworkStats()
  initNetworkMap()
})

function updateNetworkStats() {
  const totalSensors = sensors.length
  const weatherSensors = sensors.filter(s => s.model.includes('Meteo')).length
  const irrigationSensors = sensors.filter(s => s.model.includes('Irrigation')).length
  const totalParcels = parcels.length
  const totalAdherents = organizations.length

  document.querySelector('.stat:nth-child(1)').textContent = `Capteurs météo: ${weatherSensors}`
  document.querySelector('.stat:nth-child(2)').textContent = `Capteurs irrigation: ${irrigationSensors}`
  document.querySelector('.stat:nth-child(3)').textContent = `Parcelles: ${totalParcels}`
  document.querySelector('.stat:nth-child(4)').textContent = `Adhérents: ${totalAdherents}`
}

function initNetworkMap() {
  const map = L.map('network-map').setView([46.5, 2.5], 6) // Center on France

  // Add satellite tiles
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map)

  // Add markers for organizations
  organizations.forEach(org => {
    const marker = L.marker([org.location.lat, org.location.lng])
      .addTo(map)
      .bindPopup(`<b>${org.name}</b><br>${org.location.city}, ${org.location.department}`)
  })

  // Fit map to markers
  const group = new L.featureGroup(organizations.map(org => L.marker([org.location.lat, org.location.lng])))
  map.fitBounds(group.getBounds().pad(0.1))
}
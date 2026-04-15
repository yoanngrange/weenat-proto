// Parcel contour editor — draw / edit the polygon shape on a Leaflet map
import { plots } from '../data/plots.js'
import { orgs } from '../data/orgs.js'
import { updateBreadcrumb } from '../js/breadcrumb.js'
import { getParcel, patchParcel } from '../data/store.js'

const urlParams = new URLSearchParams(window.location.search)
const parcelId  = parseInt(urlParams.get('id'))
const parcelBase = plots.find(p => p.id === parcelId)

document.addEventListener('DOMContentLoaded', () => {
  if (!parcelBase) {
    document.body.innerHTML = '<div style="padding:40px"><h1>Parcelle non trouvée</h1></div>'
    return
  }

  // Setup breadcrumb + back link
  const parcelName = getParcel(parcelId).name || parcelBase.name
  updateBreadcrumb('Modifier le contour', {
    label: parcelName,
    href: `parcelle-detail.html?id=${parcelId}`,
  })
  document.getElementById('back-link').href = `parcelle-detail.html?id=${parcelId}`

  initMap()
})

// ─── Map ──────────────────────────────────────────────────────────────────────

let map
let currentPolygon = null     // existing saved polygon
let drawingPoints  = []       // points being drawn
let previewLayer   = null     // preview while drawing
let isDrawing      = false

function initMap() {
  const org = orgs.find(o => o.id === parcelBase.orgId)
  const center = org?.lat ? [org.lat, org.lng] : [47.5, -2.0]

  map = L.map('contour-map', { doubleClickZoom: false }).setView(center, 14)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri World Imagery',
  }).addTo(map)

  // Load existing contour (from store or base data)
  const stored  = getParcel(parcelId)
  const latlngs = stored.latlngs || parcelBase.latlngs

  if (Array.isArray(latlngs) && latlngs.length >= 3) {
    showSavedPolygon(latlngs)
  }

  // Toolbar handlers
  document.getElementById('btn-draw').addEventListener('click', startDrawing)
  document.getElementById('btn-delete').addEventListener('click', deleteContour)
  document.getElementById('btn-save').addEventListener('click', saveContour)

  // Map click handler for drawing
  map.on('click', onMapClick)
  map.on('dblclick', onMapDblClick)

  updateHint()
}

// ─── Drawing ──────────────────────────────────────────────────────────────────

function startDrawing() {
  if (isDrawing) return
  isDrawing = true
  drawingPoints = []

  // Remove existing saved polygon while drawing new one
  if (currentPolygon) {
    map.removeLayer(currentPolygon)
    currentPolygon = null
  }
  if (previewLayer) {
    map.removeLayer(previewLayer)
    previewLayer = null
  }

  document.getElementById('btn-draw').classList.add('active')
  document.getElementById('contour-map').style.cursor = 'crosshair'
  updateHint()
}

function onMapClick(e) {
  if (!isDrawing) return

  drawingPoints.push([e.latlng.lat, e.latlng.lng])
  updatePreview()
}

function onMapDblClick(e) {
  if (!isDrawing) return
  // Remove last point added by the click that fires before dblclick
  drawingPoints.pop()
  finishDrawing()
}

function updatePreview() {
  if (previewLayer) map.removeLayer(previewLayer)

  if (drawingPoints.length < 2) {
    // Show just a circle marker for single point
    previewLayer = L.circleMarker(drawingPoints[0], {
      radius: 5, color: '#0172A4', fillColor: '#0172A4', fillOpacity: 0.8, weight: 2,
    }).addTo(map)
    return
  }

  // Show polygon preview (closed if ≥ 3 points)
  const style = { color: '#0172A4', weight: 2, dashArray: '6 4', fillColor: '#0172A4', fillOpacity: 0.15 }
  if (drawingPoints.length >= 3) {
    previewLayer = L.polygon(drawingPoints, style).addTo(map)
  } else {
    previewLayer = L.polyline(drawingPoints, style).addTo(map)
  }

  // Draw vertex dots
  drawingPoints.forEach((pt, i) => {
    L.circleMarker(pt, {
      radius: i === 0 ? 7 : 5,
      color: '#0172A4',
      fillColor: i === 0 ? '#fff' : '#0172A4',
      fillOpacity: 1,
      weight: 2,
    }).addTo(map)
  })
}

function finishDrawing() {
  if (drawingPoints.length < 3) {
    alert('Il faut au moins 3 points pour former un contour.')
    cancelDrawing()
    return
  }

  isDrawing = false
  document.getElementById('contour-map').style.cursor = ''
  showSavedPolygon(drawingPoints)
  drawingPoints = []
  updateHint()
}

function cancelDrawing() {
  isDrawing = false
  drawingPoints = []
  if (previewLayer) { map.removeLayer(previewLayer); previewLayer = null }
  document.getElementById('contour-map').style.cursor = ''
  document.getElementById('btn-draw').classList.remove('active')
  updateHint()
}

function showSavedPolygon(latlngs) {
  if (currentPolygon) map.removeLayer(currentPolygon)
  if (previewLayer)   map.removeLayer(previewLayer)
  previewLayer = null

  currentPolygon = L.polygon(latlngs, {
    color: 'white', weight: 2, fillColor: '#0172A4', fillOpacity: 0.3,
  }).addTo(map)

  map.fitBounds(currentPolygon.getBounds(), { padding: [30, 30] })
  updateHint()
}

// ─── Delete / Save ────────────────────────────────────────────────────────────

function deleteContour() {
  if (!confirm('Supprimer le contour actuel ? Cette action sera annulée si vous ne sauvegardez pas.')) return
  if (currentPolygon) { map.removeLayer(currentPolygon); currentPolygon = null }
  if (previewLayer)   { map.removeLayer(previewLayer);   previewLayer   = null }
  drawingPoints = []
  updateHint()
}

function saveContour() {
  let latlngs = null

  if (isDrawing && drawingPoints.length >= 3) {
    finishDrawing()
    latlngs = drawingPoints.length >= 3 ? drawingPoints : null
  } else if (currentPolygon) {
    latlngs = currentPolygon.getLatLngs()[0].map(ll => [ll.lat, ll.lng])
  } else if (drawingPoints.length >= 3) {
    latlngs = drawingPoints
  }

  patchParcel(parcelId, { latlngs })

  // Show confirmation and return
  const btn = document.getElementById('btn-save')
  btn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Enregistré !'
  btn.style.background = 'var(--ok)'
  setTimeout(() => {
    window.location.href = `parcelle-detail.html?id=${parcelId}`
  }, 900)
}

// ─── Hint text ────────────────────────────────────────────────────────────────

function updateHint() {
  const hint = document.getElementById('draw-hint')
  if (!hint) return

  if (isDrawing) {
    const n = drawingPoints.length
    if (n === 0)      hint.textContent = 'Cliquez sur la carte pour ajouter le premier point.'
    else if (n < 3)   hint.textContent = `${n} point(s) — ajoutez au moins ${3 - n} de plus. Double-clic pour terminer.`
    else              hint.textContent = `${n} points — double-clic pour fermer le polygone.`
  } else if (currentPolygon) {
    hint.textContent = 'Contour chargé. Cliquez "Tracer" pour le remplacer, ou "Enregistrer" pour valider.'
  } else {
    hint.textContent = 'Aucun contour. Cliquez "Tracer" pour dessiner.'
  }
}

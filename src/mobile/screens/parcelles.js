import { plots as allPlots }   from '../../data/plots.js'
import { orgs }                from '../../data/orgs.js'
import { sensors as allSensors } from '../../data/sensors.js'
import { IRRIG_SEASON }        from '../../data/irrigations.js'
import { initParcelDetail }    from './parcel-detail.js'
import { hasIrrelis, getIrrelisVal, irrelisColor } from './irrelis-detail.js'

const ADMIN_ORG_ID = 100

// Métriques nécessitant un capteur spécifique sur la parcelle
const METRIC_REQUIRES = {
  pluie:       ['P+', 'PT', 'P'],
  vent:        ['W'],
  par:         ['PAR'],
  humectation: ['LWS'],
}

function hasMetric(plot, metricId) {
  if (metricId === 'irrelis') return hasIrrelis(plot)
  const req = METRIC_REQUIRES[metricId]
  if (!req) return true
  return allSensors.some(s => s.parcelIds.includes(plot.id) && req.includes(s.model))
}

const METRICS = [
  { id: 'pluie',    label: 'Pluie',               unit: 'mm',  aggs: ["Aujourd'hui", 'Hier', '7 derniers jours', '30 jours'], defaultAgg: '7 derniers jours' },
  { id: 'irrigation', label: 'Irrigations',       unit: 'mm',  aggs: ['30 derniers jours', '7 derniers jours', "Aujourd'hui", 'Demain', '7 prochains jours', '30 prochains jours', 'Toute la saison'], defaultAgg: "Aujourd'hui" },
  { id: 'etp',      label: 'Évapotranspiration',  unit: 'mm',  aggs: ["Aujourd'hui", '7 derniers jours'],                     defaultAgg: "Aujourd'hui"      },
  { id: 'temp',     label: 'Température',      unit: '°C',  aggs: ['Actuel', 'Min du jour', 'Max du jour'],                defaultAgg: 'Actuel'           },
  { id: 'temp_rosee',label: 'Température de rosée',unit: '°C', aggs: ['Actuel'],                                               defaultAgg: 'Actuel'           },
  { id: 'rayonnement',label: 'Rayonnement solaire',unit: 'W/m²',aggs: ['Actuel', 'Journalier'],                               defaultAgg: 'Actuel'           },
  { id: 'rfu',      label: 'Réservoir',            unit: 'mm',  aggs: ['Actuel'],                                               defaultAgg: 'Actuel'           },
  { id: 'nrs',      label: 'Niveau de réservoir (spatialisé)', unit: 'mm', aggs: ['30 derniers jours', '7 derniers jours', 'Hier'], defaultAgg: '7 derniers jours' },
  { id: 'hum',         label: 'Humidité',          unit: '%',          aggs: ['Actuel', 'Moyenne du jour'],          defaultAgg: 'Actuel'           },
  { id: 'vent',        label: 'Vent',                  unit: 'km/h',       aggs: ['Actuel', 'Moyen du jour', 'Rafales'], defaultAgg: 'Actuel'           },
  { id: 'par',         label: 'Rayonnement PAR',       unit: 'µmol/m²/s', aggs: ['Actuel', 'Journalier'],               defaultAgg: 'Actuel'           },
  { id: 'humectation', label: 'Humectation foliaire',  unit: '%',          aggs: ['Actuel', 'Heures du jour'],           defaultAgg: 'Actuel'           },
  { id: 'irrelis',    label: 'Irré-LIS',              unit: 'mm',         aggs: ["Aujourd'hui", 'Demain', 'J+3', 'J+5'], defaultAgg: "Aujourd'hui"      },
]

function contrastColor(hex) {
  const r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16)
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.5 ? '#000000' : '#ffffff'
}

function getMetricColor(id, v) {
  switch (id) {
    case 'pluie':       return v < 8 ? '#C1E1FF' : v < 18 ? '#2E75B6' : '#0B3A64'
    case 'irrigation':  return v === 0 ? '#c7c7cc' : v < 30 ? '#FFDFB8' : '#FF8C00'
    case 'etp':         return v < 2 ? '#D6EDF9' : v < 5 ? '#2E75B6' : '#0B3A64'
    case 'temp':        return v < 12 ? '#FEE7B4' : v < 18 ? '#FBAF05' : '#7D5702'
    case 'temp_rosee':  return v < 5 ? '#D2DEFA' : v < 12 ? '#5E88EC' : '#1B56E4'
    case 'rayonnement': return v < 200 ? '#FBFBB6' : v < 400 ? '#CBCB0B' : '#838307'
    case 'rfu':         return v < 30 ? '#E05252' : v < 60 ? '#FBAF05' : '#24B066'
    case 'nrs':         return v < 30 ? '#E05252' : v < 60 ? '#FBAF05' : '#24B066'
    case 'hum':         return v < 40 ? '#E3C7FF' : v < 70 ? '#5B12A4' : '#29084A'
    case 'vent':        return v < 15 ? '#E1E1E1' : v < 30 ? '#616161' : '#343232'
    case 'par':         return v < 500 ? '#F9EED2' : v < 1200 ? '#E8B44C' : '#9B6E00'
    case 'humectation': return v < 30 ? '#B2FFF9' : v < 70 ? '#00887E' : '#003D39'
    case 'irrelis':     return v >= 35 ? '#24B066' : v >= 12 ? '#E8A020' : '#E05252'
    default:            return '#0172A4'
  }
}

function irrigSum(plotId, agg) {
  const today = new Date().toISOString().split('T')[0]
  const ago = d => { const dt = new Date(); dt.setDate(dt.getDate() - d); return dt.toISOString().split('T')[0] }
  const ahead = d => { const dt = new Date(); dt.setDate(dt.getDate() + d); return dt.toISOString().split('T')[0] }
  const all = IRRIG_SEASON.filter(i => i.plotId === plotId)
  switch (agg) {
    case "Aujourd'hui":         return all.filter(i => i.iso === today).reduce((s, i) => s + i.mm, 0)
    case '7 derniers jours':    return all.filter(i => i.real && i.iso >= ago(7)).reduce((s, i) => s + i.mm, 0)
    case '30 derniers jours':   return all.filter(i => i.real && i.iso >= ago(30)).reduce((s, i) => s + i.mm, 0)
    case 'Demain':              return all.filter(i => !i.real && i.iso === ahead(1)).reduce((s, i) => s + i.mm, 0)
    case '7 prochains jours':   return all.filter(i => !i.real && i.iso > today && i.iso <= ahead(7)).reduce((s, i) => s + i.mm, 0)
    case '30 prochains jours':  return all.filter(i => !i.real && i.iso > today && i.iso <= ahead(30)).reduce((s, i) => s + i.mm, 0)
    case 'Toute la saison':     return all.filter(i => i.real).reduce((s, i) => s + i.mm, 0)
    default:                    return all.filter(i => i.real).reduce((s, i) => s + i.mm, 0)
  }
}

function mockVal(id) {
  switch (id) {
    case 'irrigation':  return 0 // remplacé par irrigSum() dans getVal()
    case 'pluie':       return +(Math.random() * 50).toFixed(1)
    case 'etp':         return +(Math.random() * 8).toFixed(1)
    case 'temp':        return +(8 + Math.random() * 22).toFixed(1)
    case 'temp_rosee':  return +(2 + Math.random() * 14).toFixed(1)
    case 'rayonnement': return Math.round(Math.random() * 900)
    case 'rfu':         return Math.round(20 + Math.random() * 110)
    case 'nrs':         return Math.round(20 + Math.random() * 110)
    case 'hum':         return Math.round(40 + Math.random() * 55)
    case 'vent':        return +(Math.random() * 40).toFixed(1)
    case 'par':         return Math.round(Math.random() * 1800)
    case 'humectation': return Math.round(Math.random() * 100)
    default:            return +(Math.random() * 100).toFixed(1)
  }
}

export function initParcellesScreen(screenEl, role) {
  let content = screenEl.querySelector('#parcelles-content')
  if (!content) {
    content = document.createElement('div')
    content.id = 'parcelles-content'
    screenEl.appendChild(content)
  }

  const isAdmin      = role === 'admin'
  const adherentOrgs = orgs.filter(o => o.id !== ADMIN_ORG_ID)
  const orgById      = Object.fromEntries(orgs.map(o => [o.id, o]))
  let mapInstance    = null
  let mapBounds      = null
  const valCache     = {}

  let view      = 'carte'
  let metricId  = 'pluie'
  let aggLabel  = '7 derniers jours'
  let orgFilter = 'all'

  function getVal(plotId) {
    if (metricId === 'irrigation') return irrigSum(plotId, aggLabel)
    if (metricId === 'irrelis') {
      const plot = allPlots.find(p => p.id === plotId)
      return plot ? Math.round(getIrrelisVal(plot, aggLabel)) : 0
    }
    const key = `${plotId}-${metricId}-${aggLabel}`
    if (!(key in valCache)) valCache[key] = mockVal(metricId)
    return valCache[key]
  }

  function commune(plot) {
    return orgById[plot.orgId]?.ville || null
  }

  function getPlots() {
    if (role === 'new' || role === 'new-adherent') return []
    if (!isAdmin) return allPlots.filter(p => p.orgId === 1)
    if (orgFilter === 'all')                return allPlots
    if (orgFilter === String(ADMIN_ORG_ID)) return allPlots.filter(p => p.orgId === ADMIN_ORG_ID)
    return allPlots.filter(p => String(p.orgId) === orgFilter)
  }

  function destroyMap() {
    if (mapInstance) { try { mapInstance.remove() } catch (e) {} mapInstance = null; mapBounds = null }
  }

  function render() {
    destroyMap()
    const metric = METRICS.find(m => m.id === metricId) || METRICS[0]
    const plots  = getPlots()

    const orgOpts = isAdmin ? `
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${ADMIN_ORG_ID}"${orgFilter === String(ADMIN_ORG_ID) ? ' selected' : ''}>Breiz'Agri Conseil (réseau)</option>
        ${adherentOrgs.map(o => `<option value="${o.id}"${orgFilter === String(o.id) ? ' selected' : ''}>${o.name}</option>`).join('')}
      </select>` : ''

    // Tri : avec métrique en premier (desc), sans métrique après (alphabétique)
    const sorted = [...plots].sort((a, b) => {
      const aHas = hasMetric(a, metricId), bHas = hasMetric(b, metricId)
      if (aHas && !bHas) return -1
      if (!aHas && bHas) return 1
      return aHas ? getVal(b.id) - getVal(a.id) : a.name.localeCompare(b.name, 'fr')
    })

    const listHtml = sorted.length
      ? `<div class="m-plain-list">${sorted.map(p => {
          const isPolygon = p.latlngs?.length > 0 || p.shape?.type === 'polygon' || p.shape?.type === 'rectangle'
          const sub  = [p.crop, p.irrigation, isPolygon && p.area ? `${p.area} ha` : null].filter(Boolean).join(' · ')
          const has  = hasMetric(p, metricId)
          const parcelAnomaly = allSensors.filter(s => s.parcelIds.includes(p.id)).some(s => s.event && (Array.isArray(s.event) ? s.event.length > 0 : true))
          return `
            <div class="m-plain-row m-tappable" data-plot-id="${p.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${p.name}${parcelAnomaly ? ' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>' : ''}</span>
                ${sub ? `<span class="m-plain-city">${sub}</span>` : ''}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(() => { const hasV = has && !(metricId === 'irrigation' && !IRRIG_SEASON.some(i => i.plotId === p.id)); const v = hasV ? getVal(p.id) : null; return `<span class="m-plain-data${hasV ? '' : ' m-plain-na'}"${hasV ? ` style="color:${getMetricColor(metricId, v)}"` : ''}>${hasV ? `${v} ${metric.unit}` : '—'}</span>` })()}
                <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
              </div>
            </div>`}).join('')}</div>`
      : (role === 'new' || role === 'new-adherent')
        ? `<div class="m-empty-state"><i class="bi bi-map"></i><p>Vous n'avez pas encore de parcelle</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Créer une parcelle</button></div>`
        : `<div class="m-empty-state"><i class="bi bi-map"></i><p>Aucune parcelle</p></div>`

    content.innerHTML = `
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${view === 'carte' ? ' m-view-btn--on' : ''}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${view === 'liste' ? ' m-view-btn--on' : ''}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${METRICS.map(m => `<option value="${m.id}"${m.id === metricId ? ' selected' : ''}>${m.label}</option>`).join('')}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${metric.aggs.map(a => `<option${a === aggLabel ? ' selected' : ''}>${a}</option>`).join('')}
          </select>
        </div>
        ${orgOpts}
      </div>
      ${view === 'carte'
        ? '<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>'
        : `<div class="m-list-view">${listHtml}</div>`}`

    bindEvents()
    if (view === 'carte') initMap(plots, metric)
  }

  function initMap(plots, metric) {
    const L = window.L; if (!L) return
    setTimeout(() => {
      const el = content.querySelector('#parcel-map'); if (!el) return
      mapInstance = L.map(el, { zoomControl: false, attributionControl: false })
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mapInstance)
      if (!plots.length && (role === 'new' || role === 'new-adherent')) {
        const org = orgs.find(o => o.id === 1)
        if (org) mapInstance.setView([org.lat, org.lng], 13)
        mapInstance.invalidateSize()
        const wrap = el.parentElement
        wrap.style.position = 'relative'
        const ov = document.createElement('div')
        ov.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none'
        ov.innerHTML = `
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`
        wrap.appendChild(ov)
        wrap.querySelector('#empty-create-parcel-btn').addEventListener('click', () => window.showMobileAddPage?.())
        return
      }
      const bounds = []
      plots.forEach(p => {
        const hasIrrig = metricId !== 'irrigation' || IRRIG_SEASON.some(i => i.plotId === p.id)
        const label = hasMetric(p, metricId) && hasIrrig ? `${getVal(p.id)} ${metric.unit}` : '—'
        const linkedSensorIds = allSensors.filter(s => s.parcelIds.includes(p.id)).map(s => s.id)
        const openDetail = () => initParcelDetail(p, linkedSensorIds)
        const center = [p.lat, p.lng]

        const hasMet = hasMetric(p, metricId) && hasIrrig
        const dotColor = hasMet ? getMetricColor(metricId, getVal(p.id)) : '#0172A4'

        if (p.latlngs && p.latlngs.length >= 3) {
          const poly = L.polygon(p.latlngs, { color: '#fff', weight: 2, fillColor: dotColor, fillOpacity: 0.35 }).addTo(mapInstance)
          poly.on('click', openDetail)
          bounds.push(...p.latlngs)
        } else {
          bounds.push(center)
        }

        // Centroïde cliquable — tooltip uniquement si la parcelle a la métrique
        const dot = L.circleMarker(center, {
          radius: hasMet ? 8 : 6,
          color: '#fff', weight: 2,
          fillColor: dotColor,
          fillOpacity: hasMet ? 0.95 : 0.4,
        }).addTo(mapInstance)
        const linkedAnomaly = linkedSensorIds.some(id => { const s = allSensors.find(x => x.id === id); return s?.event && (Array.isArray(s.event) ? s.event.length > 0 : true) })
        if (linkedAnomaly) {
          L.marker(center, {
            icon: L.divIcon({ className: '', html: '<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>', iconSize: [0,0], iconAnchor: [0,0] }),
            interactive: false, zIndexOffset: 500,
          }).addTo(mapInstance)
        }
        if (hasMet) {
          dot.bindTooltip(label, { permanent: true, direction: 'top', className: 'm-map-tip', interactive: true })
          const applyTipStyle = el => {
            if (!el) return
            const tc = contrastColor(dotColor)
            el.style.setProperty('background', dotColor, 'important')
            el.style.setProperty('color', tc, 'important')
            el.style.setProperty('border-color', tc, 'important')
            el.style.setProperty('box-shadow', 'none', 'important')
          }
          const ttEl = dot.getTooltip()?.getElement()
          if (ttEl) applyTipStyle(ttEl)
          dot.on('tooltipopen', e => applyTipStyle(e.tooltip.getElement()))
        }
        dot.on('click', openDetail)
      })
      if (bounds.length) {
        mapBounds = bounds
        mapInstance.fitBounds(bounds, { padding: [32, 32] })
      }
      mapInstance.invalidateSize()
    }, 0)
  }

  // Corrige la taille de la carte quand le tab devient visible
  window.addEventListener('m-tab-change', e => {
    if (e.detail === 'parcelles' && view === 'carte') {
      if (mapInstance) {
        setTimeout(() => {
          mapInstance.invalidateSize()
          if (mapBounds?.length) mapInstance.fitBounds(mapBounds, { padding: [32, 32] })
        }, 50)
      }
    }
  })

  function bindEvents() {
    content.querySelectorAll('.m-view-btn').forEach(btn =>
      btn.addEventListener('click', () => { view = btn.dataset.view; render() }))
    content.querySelector('#metric-sel')?.addEventListener('change', e => {
      metricId = e.target.value
      aggLabel = METRICS.find(m => m.id === metricId)?.defaultAgg || ''
      render()
    })
    content.querySelector('#agg-sel')?.addEventListener('change', e => { aggLabel = e.target.value; render() })
    content.querySelector('#org-filter')?.addEventListener('change', e => { orgFilter = e.target.value; render() })

    // Tap on list row → detail
    content.querySelectorAll('.m-tappable[data-plot-id]').forEach(row => {
      row.addEventListener('click', () => {
        const plot = allPlots.find(p => p.id === +row.dataset.plotId); if (!plot) return
        const linkedSensorIds = allSensors.filter(s => s.parcelIds.includes(plot.id)).map(s => s.id)
        initParcelDetail(plot, linkedSensorIds)
      })
    })
  }

  render()
}

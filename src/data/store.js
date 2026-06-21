// ─── Data store — localStorage persistence ────────────────────────────────────
// All prototype modifications are saved here and merged on top of base data.
// Key format: parcel_<id> | sensor_<id>

const STORE_KEY = 'weenat_proto_store'

function load() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') } catch { return {} }
}

function save(store) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)) } catch (e) {
    console.warn('[store] localStorage save failed:', e)
  }
}

// ─── Parcel ───────────────────────────────────────────────────────────────────

export function getParcel(id) {
  return load()[`parcel_${id}`] || {}
}

export function patchParcel(id, patch) {
  const store = load()
  store[`parcel_${id}`] = { ...(store[`parcel_${id}`] || {}), ...patch }
  save(store)
}

// Fields that can be user-edited and must stay in sync across all pages
const PLOT_PATCH_FIELDS = ['name', 'crop', 'variety', 'phenoStage', 'irrigation', 'texture', 'soilAnalysis', 'substrate', 'env', 'volumeMaxM3', 'debitM3h', 'orgId', 'area', 'integrations', 'latlngs', 'lat', 'lng', 'ville']

// Apply localStorage overrides to the in-memory plots array — call once at page init
export function applyStoredPlotPatches(plotsArray) {
  const store = load()
  plotsArray.forEach(p => {
    const stored = store[`parcel_${p.id}`]
    if (!stored) return
    PLOT_PATCH_FIELDS.forEach(f => { if (stored[f] !== undefined) p[f] = stored[f] })
  })
  // Retire du tableau (en place) les parcelles supprimées par l'utilisateur
  for (let i = plotsArray.length - 1; i >= 0; i--) {
    if (store[`parcel_${plotsArray[i].id}`]?.deleted) plotsArray.splice(i, 1)
  }
}

// Marque une parcelle comme supprimée et la retire immédiatement du tableau fourni
export function deleteParcel(id, plotsArray) {
  patchParcel(id, { deleted: true })
  const idx = plotsArray.findIndex(p => p.id === id)
  if (idx !== -1) plotsArray.splice(idx, 1)
}

// ─── Sensor ───────────────────────────────────────────────────────────────────

export function getStoredSensor(id) {
  return load()[`sensor_${id}`] || {}
}

export function patchSensor(id, patch) {
  const store = load()
  store[`sensor_${id}`] = { ...(store[`sensor_${id}`] || {}), ...patch }
  save(store)
}

// ─── Reset ────────────────────────────────────────────────────────────────────

export function clearAll() {
  localStorage.removeItem(STORE_KEY)
}

export function clearParcel(id) {
  const store = load()
  delete store[`parcel_${id}`]
  save(store)
}

// ─── Members list ─────────────────────────────────────────────────────────────

export function getStoredMembers() {
  return load()['members'] || null
}

export function saveMembers(list) {
  const store = load()
  store['members'] = list
  save(store)
}

export function getStoredAdherentMembers() {
  return load()['adherentMembers'] || null
}

export function saveAdherentMembers(list) {
  const store = load()
  store['adherentMembers'] = list
  save(store)
}

// ─── Orgs list ────────────────────────────────────────────────────────────────

export function getStoredOrgs() {
  return load()['orgs'] || null
}

export function saveOrgs(list) {
  const store = load()
  store['orgs'] = list
  save(store)
}

// ─── Per-org settings ─────────────────────────────────────────────────────────

export function getOrgData(id) {
  return load()[`org_${id}`] || {}
}

export function patchOrgData(id, patch) {
  const store = load()
  store[`org_${id}`] = { ...(store[`org_${id}`] || {}), ...patch }
  save(store)
}

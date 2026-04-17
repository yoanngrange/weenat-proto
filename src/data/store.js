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

// ─── Orgs list ────────────────────────────────────────────────────────────────

export function getStoredOrgs() {
  return load()['orgs'] || null
}

export function saveOrgs(list) {
  const store = load()
  store['orgs'] = list
  save(store)
}

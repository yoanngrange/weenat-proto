// ─── Journal parcelle (mobile) — stockage partagé ─────────────────────────────

const M_JOURNAL_KEY = id => `parcel-journal-${id}`

const M_TRAITEMENT_SCENARIOS = [
  { cible: 'Pucerons', produit: 'Karate Zeon',     dose: '0,1 L/ha', obs: 'Quelques pucerons sur feuilles basses. À surveiller.' },
  { cible: 'Mildiou',  produit: 'Bordeaux mixture', dose: '2 kg/ha',  obs: 'Taches suspectes sur feuillage, conditions humides.' },
  { cible: 'Limaces',  produit: 'Métaldéhyde',      dose: '5 kg/ha',  obs: 'Dégâts de limaces en bordure après les pluies.' },
  { cible: 'Altises',  produit: 'Karaté K',         dose: '75 mL/ha',obs: 'Présence d\'altises sur jeunes plants.' },
]
const M_INTEGRATIONS = ['Rimpro', 'Weephyt', 'DeciTrait', 'Maï\'zy']
const M_AUTEURS = [['Jean Dupont', 'membre'], ['Marie Martin', 'membre'], ['Alexandre Bernard', 'conseiller']]

export function getMJournal(parcelId) {
  try { const r = localStorage.getItem(M_JOURNAL_KEY(parcelId)); if (r) return JSON.parse(r) } catch (_) {}
  const scn   = M_TRAITEMENT_SCENARIOS[parcelId % M_TRAITEMENT_SCENARIOS.length]
  const integ = M_INTEGRATIONS[parcelId % M_INTEGRATIONS.length]
  const [auteur, role] = M_AUTEURS[parcelId % M_AUTEURS.length]
  const offset = parcelId % 6
  const shift = (iso, n) => { const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10) }
  return [
    { id: 1, type: 'note', category: 'Observation générale', date: shift('2026-05-11', offset), auteur, role, texte: scn.obs },
    { id: 2, type: 'traitement', date: shift('2026-05-16', offset), auteur: M_AUTEURS[(parcelId + 1) % M_AUTEURS.length][0], role: M_AUTEURS[(parcelId + 1) % M_AUTEURS.length][1], texte: 'Vent < 2 m/s, conditions conformes.', produit: scn.produit, dose: scn.dose, cible: scn.cible },
    { id: 3, type: 'integration', date: shift('2026-04-02', offset), texte: `L'intégration « ${integ} » a expiré et n'est plus active.`, _system: true },
    { id: 4, type: 'integration', date: shift('2025-10-02', offset), texte: `Intégration « ${integ} » activée.`, _system: true },
  ]
}

export function saveMJournal(parcelId, entries) {
  localStorage.setItem(M_JOURNAL_KEY(parcelId), JSON.stringify(entries))
}

// Ajoute une entrée système (action utilisateur tracée) en tête de journal
export function addMJournalEntry(parcelId, entry) {
  const e = { id: `sys-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, _system: true, ...entry }
  saveMJournal(parcelId, [e, ...getMJournal(parcelId)])
}

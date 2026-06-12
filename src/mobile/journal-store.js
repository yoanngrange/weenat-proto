// ─── Journal parcelle (mobile) — stockage partagé ─────────────────────────────

const M_JOURNAL_KEY = id => `parcel-journal-${id}`

export function getMJournal(parcelId) {
  try { const r = localStorage.getItem(M_JOURNAL_KEY(parcelId)); if (r) return JSON.parse(r) } catch (_) {}
  return [
    { id: 1, type: 'note', category: 'Observation générale', date: '2026-05-11', auteur: 'Jean Dupont', role: 'membre', texte: 'Quelques pucerons sur feuilles basses. À surveiller.' },
    { id: 2, type: 'traitement', date: '2026-05-16', auteur: 'Sophie Martin', role: 'conseiller', texte: 'Vent < 2 m/s, conditions conformes.', produit: 'Karate Zeon', dose: '0,1 L/ha', cible: 'Pucerons' },
    { id: 3, type: 'integration', date: '2026-04-02', texte: 'L\'intégration « Rimpro » a expiré et n\'est plus active.', _system: true },
    { id: 4, type: 'integration', date: '2025-10-02', texte: 'Intégration « Rimpro » activée.', _system: true },
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

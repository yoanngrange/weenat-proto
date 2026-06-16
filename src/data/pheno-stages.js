// ─── Phenological stage names by crop ──────────────────────────────────────────
// Mirrors the crop keys used in PHENO_STAGES_BY_CROP (src/pages/parcel-detail.js),
// stage names only (no BBCH codes).

export const PHENO_STAGE_NAMES_BY_CROP = {
  'Blé tendre': ['Semis', 'Levée', 'Tallage', 'Épi 1 cm', 'Épiaison', 'Floraison', 'Maturité'],
  'Maïs': ['Semis', 'Levée', '4 feuilles', '6 feuilles', 'Floraison ♂', 'Soie', 'Maturité'],
  'Colza': ['Semis', 'Levée', 'Rosette', 'Reprise', 'Bouton floral', 'Floraison', 'Siliques', 'Maturité'],
  'Tournesol': ['Semis', 'Levée', '4 feuilles', 'Bouton floral', 'Floraison', 'Maturité'],
  'Vigne': ['Débourrement', 'Sortie feuilles', 'Floraison', 'Nouaison', 'Véraison', 'Récolte'],
  'Sorgho': ['Semis', 'Levée', 'Montaison', 'Floraison', 'Maturité'],
  'Orge de printemps': ['Semis', 'Levée', 'Tallage', 'Montaison', 'Épiaison', 'Floraison', 'Grain pâteux', 'Récolte'],
  'Orge': ['Semis', 'Levée', 'Tallage', 'Montaison', 'Épiaison', 'Floraison', 'Grain pâteux', 'Récolte'],
  'Pomme de terre': ['Plantation', 'Levée', 'Croissance', 'Tuberisation', 'Grossissement', 'Maturité'],
  'Cerisier': ['Dormance', 'Bourgeons', 'Débourrement', 'Floraison', 'Nouaison', 'Fructification', 'Récolte'],
  'Poire': ['Débourrement', 'Floraison', 'Nouaison', 'Croissance', 'Véraison', 'Récolte'],
  'Pomme': ['Débourrement', 'Floraison', 'Nouaison', 'Croissance', 'Véraison', 'Récolte'],
  'Salade': ['Plantation', 'Reprise', 'Croissance', 'Pommaison', 'Récolte'],
  'Laitue': ['Plantation', 'Reprise', 'Croissance', 'Pommaison', 'Récolte'],
  'Betterave': ['Semis', 'Levée', '4 feuilles', 'Fermeture rang', 'Grossissement', 'Récolte'],
}

export const PHENO_STAGE_FALLBACK = ['Semis', 'Levée', 'Floraison', 'Récolte']

export function getPhenoStageNames(crop) {
  if (!crop) return PHENO_STAGE_FALLBACK
  const c = crop.toLowerCase()
  for (const key of Object.keys(PHENO_STAGE_NAMES_BY_CROP)) {
    if (c.startsWith(key.toLowerCase())) return PHENO_STAGE_NAMES_BY_CROP[key]
  }
  return PHENO_STAGE_FALLBACK
}

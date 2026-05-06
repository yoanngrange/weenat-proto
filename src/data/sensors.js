// ~200 capteurs — 80% P+, CHP-15/30, CHP-30/60
// Chaque capteur a un orgId (réseau) et un parcelId (null si non associé à une parcelle)
// Évènements : ~15% des capteurs ont un événement en cours

export const sensors = [
  // ── Org 1 : Ferme du Bocage (parcelles 1–15) ────────────────────────────
  { id: 1,   orgId: 1,  parcelId: 1,  model: "P+",        serial: "WEE-00101", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 90,  event: null },
  { id: 2,   orgId: 1,  parcelId: 1,  model: "CHP-15/30", serial: "WEE-00102", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 92, messages7d: 95,  event: "capteur couché", depth: 20 },
  { id: 3,   orgId: 1,  parcelId: 2,  model: "P",         serial: "WEE-00103", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 78, messages7d: 88,  event: null },
  { id: 4,   orgId: 1,  parcelId: 2,  model: "TH",        serial: "WEE-00104", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 85,  event: null },
  { id: 5,   orgId: 1,  parcelId: 3,  model: "CHP-30/60", serial: "WEE-00105", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 92,  event: "émissions interrompues", depth: 50 },
  { id: 6,   orgId: 1,  parcelId: 4,  model: "P+",        serial: "WEE-00106", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 93,  event: null },
  { id: 7,   orgId: 1,  parcelId: 4,  model: "CAPA-30-3", serial: "WEE-00107", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 75, messages7d: 80,  event: null },
  { id: 8,   orgId: 1,  parcelId: 5,  model: "EC",        serial: "WEE-00108", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 87,  event: null },
  { id: 9,   orgId: 1,  parcelId: 6,  model: "T_MINI",    serial: "WEE-00109", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 91,  event: "capteur déplacé" },
  { id: 10,  orgId: 1,  parcelId: 7,  model: "P+",        serial: "WEE-00110", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 94,  event: null },
  { id: 11,  orgId: 1,  parcelId: 8,  model: "CHP-15/30", serial: "WEE-00111", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 89,  event: null, depth: 30 },
  { id: 12,  orgId: 1,  parcelId: 9,  model: "P",         serial: "WEE-00112", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 84,  event: "cuillère bloquée" },
  { id: 13,  orgId: 1,  parcelId: 10, model: "PT",        serial: "WEE-00113", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 86,  event: null },
  { id: 14,  orgId: 1,  parcelId: 11, model: "CHP-30/60", serial: "WEE-00114", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 92,  event: null, depth: 40 },
  { id: 15,  orgId: 1,  parcelId: 12, model: "P+",        serial: "WEE-00115", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 16,  orgId: 1,  parcelId: 13, model: "CAPA-30-3", serial: "WEE-00116", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 76, messages7d: 81,  event: null },
  { id: 17,  orgId: 1,  parcelId: 14, model: "LWS",       serial: "WEE-00117", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },
  { id: 18,  orgId: 1,  parcelId: 15, model: "T_MINI",    serial: "WEE-00118", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 90,  event: null },

  // ── Org 2 : Coopérative Bretonne (parcelles 16–19) ───────────────────────
  { id: 19,  orgId: 2,  parcelId: 16, model: "P+",        serial: "WEE-00219", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 93,  event: null },
  { id: 20,  orgId: 2,  parcelId: 17, model: "CHP-15/30", serial: "WEE-00220", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 21,  orgId: 2,  parcelId: 18, model: "P",         serial: "WEE-00221", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 77, messages7d: 82,  event: null },
  { id: 22,  orgId: 2,  parcelId: 19, model: "W",         serial: "WEE-00222", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 91,  event: null },

  // ── Org 3 : Exploitation Normande (parcelles 20–21) ──────────────────────
  { id: 23,  orgId: 3,  parcelId: 20, model: "CHP-30/60", serial: "WEE-00323", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 92, messages7d: 95,  event: null },
  { id: 24,  orgId: 3,  parcelId: 21, model: "P+",        serial: "WEE-00324", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },

  // ── Org 4 : Agriculteurs de la Manche (parcelles 22–23) ──────────────────
  { id: 25,  orgId: 4,  parcelId: 22, model: "CAPA-60-6", serial: "WEE-00425", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 78, messages7d: 83,  event: null },
  { id: 26,  orgId: 4,  parcelId: 23, model: "EC",        serial: "WEE-00426", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 85,  event: null },

  // ── Org 5 : Ferme Côtière (parcelles 24–25) ──────────────────────────────
  { id: 27,  orgId: 5,  parcelId: 24, model: "T_MINI",    serial: "WEE-00527", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 92,  event: null },
  { id: 28,  orgId: 5,  parcelId: 25, model: "P+",        serial: "WEE-00528", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 94,  event: null },

  // ── Org 6 : Coop Bio Bretagne (parcelles 26–27) ──────────────────────────
  { id: 29,  orgId: 6,  parcelId: 26, model: "LWS",       serial: "WEE-00629", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 87,  event: null },
  { id: 30,  orgId: 6,  parcelId: 27, model: "P",         serial: "WEE-00630", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 84,  event: null },

  // ── Org 7 : Exploitation du Calvados (parcelles 28–29) ───────────────────
  { id: 31,  orgId: 7,  parcelId: 28, model: "TH",        serial: "WEE-00731", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 90,  event: null },
  { id: 32,  orgId: 7,  parcelId: 29, model: "CHP-30/60", serial: "WEE-00732", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 93, messages7d: 96,  event: null },

  // ── Org 8 : Ferme de l'Orne (parcelles 30–31) ────────────────────────────
  { id: 33,  orgId: 8,  parcelId: 30, model: "P+",        serial: "WEE-00833", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 88,  event: null },
  { id: 34,  orgId: 8,  parcelId: 31, model: "CHP-15/30", serial: "WEE-00834", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },

  // ── Org 9 : Agriculteurs Finistériens (parcelles 32–33) ──────────────────
  { id: 35,  orgId: 9,  parcelId: 32, model: "P+",        serial: "WEE-00935", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 72, messages7d: 78,  event: null },
  { id: 36,  orgId: 9,  parcelId: 33, model: "CHP-30/60", serial: "WEE-00936", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 68, messages7d: 73,  event: null },

  // ── Org 10 : Coopérative Normande (parcelles 34–35) ──────────────────────
  { id: 37,  orgId: 10, parcelId: 34, model: "CHP-15/30", serial: "WEE-01037", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 38,  orgId: 10, parcelId: 35, model: "P+",        serial: "WEE-01038", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },

  // ── Org 11 : Ferme des Côtes d'Armor (parcelles 36–37) ───────────────────
  { id: 39,  orgId: 11, parcelId: 36, model: "P+",        serial: "WEE-01139", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 40,  orgId: 11, parcelId: 37, model: "T_MINI",    serial: "WEE-01140", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },

  // ── Org 12 : Exploitation de l'Ille-et-Vilaine (parcelles 38–39) ─────────
  { id: 41,  orgId: 12, parcelId: 38, model: "CHP-15/30", serial: "WEE-01241", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 42,  orgId: 12, parcelId: 39, model: "P+",        serial: "WEE-01242", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },

  // ── Org 13 : Agriculteurs du Morbihan (parcelles 40–41) ──────────────────
  { id: 43,  orgId: 13, parcelId: 40, model: "CHP-30/60", serial: "WEE-01343", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 78, messages7d: 83,  event: null },
  { id: 44,  orgId: 13, parcelId: 41, model: "P+",        serial: "WEE-01344", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },

  // ── Org 14 : Ferme Normande Bio (parcelle 42) ────────────────────────────
  { id: 45,  orgId: 14, parcelId: 42, model: "P+",        serial: "WEE-01445", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 46,  orgId: 14, parcelId: 42, model: "CHP-15/30", serial: "WEE-01446", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },

  // ── Org 15 : Coopérative Bretonne Sud ────────────────────────────────────
  { id: 47,  orgId: 15, parcelId: 37,  model: "P+",        serial: "WEE-01547", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 48,  orgId: 15, parcelId: 120, model: "CHP-30/60", serial: "WEE-01548", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 49,  orgId: 15, parcelId: 121, model: "P+",        serial: "WEE-01549", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },

  // ── Org 16 : Exploitation de la Seine-Maritime ───────────────────────────
  { id: 50,  orgId: 16, parcelId: 38,  model: "CHP-15/30", serial: "WEE-01650", telecom: "LoRa",   lastMessage: "2024-04-10T10:00:00Z", networkQuality: 45, messages7d: 12,  event: "émissions interrompues" },
  { id: 51,  orgId: 16, parcelId: 125, model: "P+",        serial: "WEE-01651", telecom: "Sigfox", lastMessage: "2024-04-09T10:00:00Z", networkQuality: 40, messages7d: 8,   event: "émissions interrompues" },

  // ── Org 17 : Ferme Côtière Nord ──────────────────────────────────────────
  { id: 52,  orgId: 17, parcelId: 39,  model: "P+",        serial: "WEE-01752", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 93, messages7d: 96,  event: null },
  { id: 53,  orgId: 17, parcelId: 130, model: "CHP-15/30", serial: "WEE-01753", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 54,  orgId: 17, parcelId: 131, model: "CHP-30/60", serial: "WEE-01754", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 55,  orgId: 17, parcelId: 132, model: "P+",        serial: "WEE-01755", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },

  // ── Org 18 : Agriculteurs de l'Eure ──────────────────────────────────────
  { id: 56,  orgId: 18, parcelId: 40,  model: "P+",        serial: "WEE-01856", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  { id: 57,  orgId: 18, parcelId: 135, model: "CHP-15/30", serial: "WEE-01857", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 58,  orgId: 18, parcelId: 136, model: "EC",        serial: "WEE-01858", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 83,  event: null },

  // ── Org 19 : Coop Bio Normandie ──────────────────────────────────────────
  { id: 59,  orgId: 19, parcelId: 41,  model: "CHP-30/60", serial: "WEE-01959", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 77, messages7d: 81,  event: null },
  { id: 60,  orgId: 19, parcelId: 140, model: "P+",        serial: "WEE-01960", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },

  // ── Org 20 : Ferme Bretonne Centrale ─────────────────────────────────────
  { id: 61,  orgId: 20, parcelId: 42,  model: "P+",        serial: "WEE-02061", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 62,  orgId: 20, parcelId: 145, model: "CHP-15/30", serial: "WEE-02062", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 63,  orgId: 20, parcelId: 146, model: "CHP-30/60", serial: "WEE-02063", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 94,  event: null },
  { id: 64,  orgId: 20, parcelId: 147, model: "P+",        serial: "WEE-02064", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 65,  orgId: 20, parcelId: 148, model: "TH",        serial: "WEE-02065", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 78, messages7d: 82,  event: null },

  // ── Org 21 : GAEC des Quatre Vents ───────────────────────────────────────
  { id: 66,  orgId: 21, parcelId: 207, model: "P+",        serial: "WEE-02166", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 67,  orgId: 21, parcelId: 207, model: "CHP-15/30", serial: "WEE-02167", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 68,  orgId: 21, parcelId: 208, model: "CHP-30/60", serial: "WEE-02168", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 69,  orgId: 21, parcelId: 208, model: "P+",        serial: "WEE-02169", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 92, messages7d: 95,  event: null },
  { id: 70,  orgId: 21, parcelId: null, model: "P+",        serial: "WEE-02170", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: "capteur déplacé" },

  // ── Org 22 : Earl de la Plaine ───────────────────────────────────────────
  { id: 71,  orgId: 22, parcelId: 209, model: "P+",        serial: "WEE-02271", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 72,  orgId: 22, parcelId: 209, model: "CHP-30/60", serial: "WEE-02272", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 73,  orgId: 22, parcelId: 210, model: "CHP-15/30", serial: "WEE-02273", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },

  // ── Org 23 : SCA Céréales Bretonnes ──────────────────────────────────────
  { id: 74,  orgId: 23, parcelId: 211, model: "P+",        serial: "WEE-02374", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 93, messages7d: 96,  event: null },
  { id: 75,  orgId: 23, parcelId: 211, model: "CHP-15/30", serial: "WEE-02375", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 76,  orgId: 23, parcelId: 212, model: "P+",        serial: "WEE-02376", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 77,  orgId: 23, parcelId: 212, model: "CHP-30/60", serial: "WEE-02377", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 78,  orgId: 23, parcelId: 211, model: "P+",        serial: "WEE-02378", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 79,  orgId: 23, parcelId: 212, model: "CHP-15/30", serial: "WEE-02379", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 80,  orgId: 23, parcelId: 211, model: "P+",        serial: "WEE-02380", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 81,  orgId: 23, parcelId: null, model: "W",         serial: "WEE-02381", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },

  // ── Org 24 : Exploitation Cotentine ──────────────────────────────────────
  { id: 82,  orgId: 24, parcelId: 213, model: "CHP-15/30", serial: "WEE-02482", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  { id: 83,  orgId: 24, parcelId: 213, model: "P+",        serial: "WEE-02483", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 84,  orgId: 24, parcelId: 214, model: "CHP-30/60", serial: "WEE-02484", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 83,  event: null },
  { id: 85,  orgId: 24, parcelId: 214, model: "P+",        serial: "WEE-02485", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },

  // ── Org 25 : Groupement Viticole de l'Eure ────────────────────────────────
  { id: 86,  orgId: 25, parcelId: 215, model: "P+",        serial: "WEE-02586", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 87,  orgId: 25, parcelId: 215, model: "CHP-15/30", serial: "WEE-02587", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 88,  orgId: 25, parcelId: 216, model: "P+",        serial: "WEE-02588", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 89,  orgId: 25, parcelId: 216, model: "T_MINI",    serial: "WEE-02589", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 76, messages7d: 80,  event: null },

  // ── Org 26 : SCEA du Val de Sée ──────────────────────────────────────────
  { id: 90,  orgId: 26, parcelId: 217, model: "P+",        serial: "WEE-02690", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 91,  orgId: 26, parcelId: 217, model: "CHP-30/60", serial: "WEE-02691", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 92,  orgId: 26, parcelId: 218, model: "CHP-15/30", serial: "WEE-02692", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 93,  orgId: 26, parcelId: 218, model: "P+",        serial: "WEE-02693", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  { id: 94,  orgId: 26, parcelId: 217, model: "P+",        serial: "WEE-02694", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 83,  event: null },

  // ── Org 27 : Coop Maraîchère de Bretagne ─────────────────────────────────
  { id: 95,  orgId: 27, parcelId: 219, model: "P+",        serial: "WEE-02795", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 96,  orgId: 27, parcelId: 219, model: "CHP-15/30", serial: "WEE-02796", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 97,  orgId: 27, parcelId: 220, model: "P+",        serial: "WEE-02797", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 98,  orgId: 27, parcelId: 220, model: "EC",        serial: "WEE-02798", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 77, messages7d: 81,  event: null },
  { id: 99,  orgId: 27, parcelId: 219, model: "CHP-30/60", serial: "WEE-02799", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },

  // ── Org 28 : Ferme Avicole du Bessin ─────────────────────────────────────
  { id: 100, orgId: 28, parcelId: 221, model: "P+",        serial: "WEE-02800", telecom: "LoRa",   lastMessage: "2024-03-15T10:00:00Z", networkQuality: 35, messages7d: 5,   event: "émissions interrompues" },
  { id: 101, orgId: 28, parcelId: 221, model: "CHP-15/30", serial: "WEE-02801", telecom: "Sigfox", lastMessage: "2024-03-14T10:00:00Z", networkQuality: 30, messages7d: 3,   event: "émissions interrompues", depth: 20 },

  // ── Org 29 : EARL Primeurs de la Rance ───────────────────────────────────
  { id: 102, orgId: 29, parcelId: 223, model: "P+",        serial: "WEE-02902", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 103, orgId: 29, parcelId: 223, model: "CHP-30/60", serial: "WEE-02903", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 104, orgId: 29, parcelId: 224, model: "P+",        serial: "WEE-02904", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },

  // ── Org 30 : Agri Manche Bio ──────────────────────────────────────────────
  { id: 105, orgId: 30, parcelId: 225, model: "P+",        serial: "WEE-03005", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 92, messages7d: 95,  event: null },
  { id: 106, orgId: 30, parcelId: 225, model: "CHP-15/30", serial: "WEE-03006", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 107, orgId: 30, parcelId: 226, model: "CHP-30/60", serial: "WEE-03007", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 108, orgId: 30, parcelId: 226, model: "P+",        serial: "WEE-03008", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 109, orgId: 30, parcelId: 225, model: "LWS",       serial: "WEE-03009", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 110, orgId: 30, parcelId: 225, model: "P+",        serial: "WEE-03010", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },

  // ── Org 31 : Domaine des Pommiers ────────────────────────────────────────
  { id: 111, orgId: 31, parcelId: 227, model: "P+",        serial: "WEE-03111", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 112, orgId: 31, parcelId: 227, model: "CHP-15/30", serial: "WEE-03112", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 113, orgId: 31, parcelId: 227, model: "T_MINI",    serial: "WEE-03113", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 83,  event: null },
  { id: 114, orgId: 31, parcelId: 228, model: "P+",        serial: "WEE-03114", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },

  // ── Org 32 : GFA de la Forêt de Brocéliande ──────────────────────────────
  { id: 115, orgId: 32, parcelId: 229, model: "P+",        serial: "WEE-03215", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 116, orgId: 32, parcelId: 229, model: "CHP-30/60", serial: "WEE-03216", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 117, orgId: 32, parcelId: 230, model: "P+",        serial: "WEE-03217", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 118, orgId: 32, parcelId: 230, model: "CHP-15/30", serial: "WEE-03218", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  { id: 119, orgId: 32, parcelId: 229, model: "P+",        serial: "WEE-03219", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },

  // ── Org 33 : Ferme Laitière de la Seulles ────────────────────────────────
  { id: 120, orgId: 33, parcelId: 231, model: "P+",        serial: "WEE-03320", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 121, orgId: 33, parcelId: 231, model: "CHP-15/30", serial: "WEE-03321", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 122, orgId: 33, parcelId: 232, model: "P+",        serial: "WEE-03322", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 123, orgId: 33, parcelId: 232, model: "CHP-30/60", serial: "WEE-03323", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 124, orgId: 33, parcelId: 231, model: "P+",        serial: "WEE-03324", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 125, orgId: 33, parcelId: 232, model: "PT",        serial: "WEE-03325", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 77, messages7d: 81,  event: null },

  // ── Org 34 : GAEC du Littoral Normand ────────────────────────────────────
  { id: 126, orgId: 34, parcelId: 233, model: "P+",        serial: "WEE-03426", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 78, messages7d: 82,  event: null },
  { id: 127, orgId: 34, parcelId: 233, model: "CHP-15/30", serial: "WEE-03427", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },
  { id: 128, orgId: 34, parcelId: 234, model: "CHP-30/60", serial: "WEE-03428", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 75, messages7d: 79,  event: "cuillère bloquée" },

  // ── Org 35 : Exploitation Maraîchère Rennaise ────────────────────────────
  { id: 129, orgId: 35, parcelId: 235, model: "P+",        serial: "WEE-03529", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 130, orgId: 35, parcelId: 235, model: "EC",        serial: "WEE-03530", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 131, orgId: 35, parcelId: 235, model: "CHP-15/30", serial: "WEE-03531", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },
  { id: 132, orgId: 35, parcelId: 236, model: "P+",        serial: "WEE-03532", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 133, orgId: 35, parcelId: 236, model: "CAPA-30-3", serial: "WEE-03533", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 83,  event: null },

  // ── Org 36 : Saveurs de Basse-Normandie ──────────────────────────────────
  { id: 134, orgId: 36, parcelId: 237, model: "P+",        serial: "WEE-03634", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 135, orgId: 36, parcelId: 237, model: "CHP-30/60", serial: "WEE-03635", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 136, orgId: 36, parcelId: 238, model: "P+",        serial: "WEE-03636", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 137, orgId: 36, parcelId: 238, model: "CHP-15/30", serial: "WEE-03637", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },

  // ── Org 37 : Coop Pommes & Poires de l'Orne ──────────────────────────────
  { id: 138, orgId: 37, parcelId: 239, model: "P+",        serial: "WEE-03738", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 139, orgId: 37, parcelId: 239, model: "CHP-15/30", serial: "WEE-03739", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 140, orgId: 37, parcelId: 239, model: "T_MINI",    serial: "WEE-03740", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 141, orgId: 37, parcelId: 240, model: "P+",        serial: "WEE-03741", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 142, orgId: 37, parcelId: 240, model: "CHP-30/60", serial: "WEE-03742", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 143, orgId: 37, parcelId: 239, model: "P+",        serial: "WEE-03743", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },

  // ── Org 38 : Porcherie de la Baie du Mont ────────────────────────────────
  { id: 144, orgId: 38, parcelId: 241, model: "P+",        serial: "WEE-03844", telecom: "LoRa",   lastMessage: "2024-02-20T10:00:00Z", networkQuality: 28, messages7d: 0,   event: "émissions interrompues" },
  { id: 145, orgId: 38, parcelId: 241, model: "CHP-15/30", serial: "WEE-03845", telecom: "Sigfox", lastMessage: "2024-02-18T10:00:00Z", networkQuality: 22, messages7d: 0,   event: "émissions interrompues", depth: 30 },

  // ── Org 39 : Agri Loire-Atlantique Nord ──────────────────────────────────
  { id: 146, orgId: 39, parcelId: 243, model: "P+",        serial: "WEE-03946", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 147, orgId: 39, parcelId: 243, model: "CHP-30/60", serial: "WEE-03947", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 148, orgId: 39, parcelId: 244, model: "P+",        serial: "WEE-03948", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 149, orgId: 39, parcelId: 244, model: "CHP-15/30", serial: "WEE-03949", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 77, messages7d: 81,  event: null },

  // ── Org 40 : Ferme Équestre du Perche ────────────────────────────────────
  { id: 150, orgId: 40, parcelId: 245, model: "P+",        serial: "WEE-04050", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 151, orgId: 40, parcelId: 245, model: "CHP-15/30", serial: "WEE-04051", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 152, orgId: 40, parcelId: 246, model: "P+",        serial: "WEE-04052", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 153, orgId: 40, parcelId: 246, model: "CHP-30/60", serial: "WEE-04053", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 154, orgId: 40, parcelId: 245, model: "P+",        serial: "WEE-04054", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },

  // ── Capteurs supplémentaires pour densifier certains adhérents ────────────
  // Org 1 (supplémentaires)
  { id: 155, orgId: 1,  parcelId: 13,  model: "P+",        serial: "WEE-00155", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 156, orgId: 1,  parcelId: 14,  model: "CHP-30/60", serial: "WEE-00156", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null, depth: 50 },
  // Org 2 (supplémentaires)
  { id: 157, orgId: 2,  parcelId: 43,  model: "P+",        serial: "WEE-00257", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 158, orgId: 2,  parcelId: 44,  model: "CHP-15/30", serial: "WEE-00258", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 159, orgId: 2,  parcelId: 46,  model: "P+",        serial: "WEE-00259", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  // Org 6 (supplémentaires)
  { id: 160, orgId: 6,  parcelId: 70,  model: "P+",        serial: "WEE-00660", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 161, orgId: 6,  parcelId: 71,  model: "CHP-30/60", serial: "WEE-00661", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 162, orgId: 6,  parcelId: 72,  model: "P+",        serial: "WEE-00662", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  // Org 8 (supplémentaires)
  { id: 163, orgId: 8,  parcelId: 80,  model: "CHP-15/30", serial: "WEE-00863", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 164, orgId: 8,  parcelId: 81,  model: "P+",        serial: "WEE-00864", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  // Org 10 (supplémentaires)
  { id: 165, orgId: 10, parcelId: 92,  model: "P+",        serial: "WEE-01065", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 166, orgId: 10, parcelId: 93,  model: "CHP-15/30", serial: "WEE-01066", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 167, orgId: 10, parcelId: 95,  model: "CHP-30/60", serial: "WEE-01067", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  // Org 17 (supplémentaire)
  { id: 168, orgId: 17, parcelId: 133, model: "CHP-15/30", serial: "WEE-01768", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  // Org 23 (supplémentaire)
  { id: 169, orgId: 23, parcelId: 211, model: "P+",        serial: "WEE-02369", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 170, orgId: 23, parcelId: 212, model: "CHP-30/60", serial: "WEE-02370", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  // Org 26 (supplémentaire)
  { id: 171, orgId: 26, parcelId: 218, model: "CHP-15/30", serial: "WEE-02671", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 172, orgId: 26, parcelId: 217, model: "P+",        serial: "WEE-02672", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  // Org 30 (supplémentaire)
  { id: 173, orgId: 30, parcelId: 225, model: "P+",        serial: "WEE-03073", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 174, orgId: 30, parcelId: 226, model: "CHP-15/30", serial: "WEE-03074", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  // Org 33 (supplémentaire)
  { id: 175, orgId: 33, parcelId: 231, model: "P+",        serial: "WEE-03375", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 176, orgId: 33, parcelId: 232, model: "CHP-30/60", serial: "WEE-03376", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  // Org 37 (supplémentaire)
  { id: 177, orgId: 37, parcelId: 240, model: "P+",        serial: "WEE-03777", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  // Org 40 (supplémentaire)
  { id: 178, orgId: 40, parcelId: 246, model: "CHP-15/30", serial: "WEE-04078", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 179, orgId: 40, parcelId: 245, model: "P+",        serial: "WEE-04079", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  // Org 21 (supplémentaire)
  { id: 180, orgId: 21, parcelId: 208, model: "CHP-30/60", serial: "WEE-02180", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  // Org 27 (supplémentaire)
  { id: 181, orgId: 27, parcelId: 219, model: "P+",        serial: "WEE-02781", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 182, orgId: 27, parcelId: 220, model: "CHP-15/30", serial: "WEE-02782", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  // Org 32 (supplémentaire)
  { id: 183, orgId: 32, parcelId: 229, model: "P+",        serial: "WEE-03283", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 184, orgId: 32, parcelId: 230, model: "CHP-30/60", serial: "WEE-03284", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  // Org 35 (supplémentaire)
  { id: 185, orgId: 35, parcelId: 235, model: "CHP-30/60", serial: "WEE-03585", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 186, orgId: 35, parcelId: 236, model: "P+",        serial: "WEE-03586", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  // Org 24 (supplémentaire)
  { id: 187, orgId: 24, parcelId: 213, model: "P+",        serial: "WEE-02487", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  // Org 29 (supplémentaire)
  { id: 188, orgId: 29, parcelId: 223, model: "P+",        serial: "WEE-02988", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 189, orgId: 29, parcelId: 224, model: "CHP-15/30", serial: "WEE-02989", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  // Org 36 (supplémentaire)
  { id: 190, orgId: 36, parcelId: 237, model: "CHP-15/30", serial: "WEE-03690", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  // Org 22 (supplémentaire)
  { id: 191, orgId: 22, parcelId: 209, model: "P+",        serial: "WEE-02291", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 192, orgId: 22, parcelId: 210, model: "CHP-15/30", serial: "WEE-02292", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  // Org 25 (supplémentaire)
  { id: 193, orgId: 25, parcelId: 215, model: "CHP-30/60", serial: "WEE-02593", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 194, orgId: 25, parcelId: 216, model: "P+",        serial: "WEE-02594", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 81, messages7d: 85,  event: null },
  // Org 31 (supplémentaire)
  { id: 195, orgId: 31, parcelId: 227, model: "P+",        serial: "WEE-03195", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 196, orgId: 31, parcelId: 228, model: "CHP-30/60", serial: "WEE-03196", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  // Org 34 (supplémentaire)
  { id: 197, orgId: 34, parcelId: 233, model: "P+",        serial: "WEE-03497", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 79, messages7d: 83,  event: null },
  { id: 198, orgId: 34, parcelId: 234, model: "CHP-15/30", serial: "WEE-03498", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 76, messages7d: 80,  event: null },
  // Org 39 (supplémentaire)
  { id: 199, orgId: 39, parcelId: 243, model: "CHP-30/60", serial: "WEE-03999", telecom: "Sigfox", lastMessage: "2024-10-01T10:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 200, orgId: 39, parcelId: 244, model: "P+",        serial: "WEE-04000", telecom: "LoRa",   lastMessage: "2024-10-01T10:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  // Orgs 2-20 — capteurs liés aux nouvelles parcelles
  { id: 201, orgId: 2,  parcelId: 43,  model: "P",         serial: "WEE-02201", telecom: "LoRa",   lastMessage: "2026-04-15T09:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 202, orgId: 3,  parcelId: 49,  model: "TH",        serial: "WEE-03202", telecom: "Sigfox", lastMessage: "2026-04-15T09:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 203, orgId: 5,  parcelId: 61,  model: "P+",        serial: "WEE-05203", telecom: "LoRa",   lastMessage: "2026-04-15T09:00:00Z", networkQuality: 91, messages7d: 95,  event: null },
  { id: 204, orgId: 6,  parcelId: 67,  model: "PYRANO",    serial: "WEE-06204", telecom: "Sigfox", lastMessage: "2026-04-15T09:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 205, orgId: 9,  parcelId: 85,  model: "W",         serial: "WEE-09205", telecom: "LoRa",   lastMessage: "2026-04-15T09:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 206, orgId: 11, parcelId: 97,  model: "LWS",       serial: "WEE-11206", telecom: "Sigfox", lastMessage: "2026-04-15T09:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 207, orgId: 12, parcelId: 103, model: "PT",        serial: "WEE-12207", telecom: "LoRa",   lastMessage: "2026-04-15T09:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 208, orgId: 15, parcelId: 120, model: "PAR",       serial: "WEE-15208", telecom: "Sigfox", lastMessage: "2026-04-15T09:00:00Z", networkQuality: 84, messages7d: 88,  event: null },

  // ── PYRANO, W, PAR, LWS — répartis sur orgs 1-9 ─────────────────────────
  { id: 239, orgId: 1,  parcelId: 6,   model: "PYRANO",    serial: "WEE-01239", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 240, orgId: 3,  parcelId: 20,  model: "PYRANO",    serial: "WEE-03240", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 82, messages7d: 86,  event: null },
  { id: 241, orgId: 8,  parcelId: 30,  model: "PYRANO",    serial: "WEE-08241", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 84, messages7d: 88,  event: null },
  { id: 242, orgId: 1,  parcelId: 8,   model: "W",         serial: "WEE-01242", telecom: "LoRa",   lastMessage: "2026-04-28T09:00:00Z", networkQuality: 89, messages7d: 93,  event: null },
  { id: 243, orgId: 4,  parcelId: 22,  model: "W",         serial: "WEE-04243", telecom: "LoRa",   lastMessage: "2026-04-28T09:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 244, orgId: 7,  parcelId: 28,  model: "W",         serial: "WEE-07244", telecom: "LoRa",   lastMessage: "2026-04-28T09:00:00Z", networkQuality: 87, messages7d: 91,  event: null },
  { id: 245, orgId: 9,  parcelId: 32,  model: "W",         serial: "WEE-09245", telecom: "LoRa",   lastMessage: "2026-04-28T09:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 246, orgId: 2,  parcelId: 17,  model: "PAR",       serial: "WEE-02246", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 81, messages7d: 85,  event: null },
  { id: 247, orgId: 5,  parcelId: 24,  model: "PAR",       serial: "WEE-05247", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 88, messages7d: 92,  event: null },
  { id: 248, orgId: 7,  parcelId: 29,  model: "PAR",       serial: "WEE-07248", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 249, orgId: 4,  parcelId: 23,  model: "LWS",       serial: "WEE-04249", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 80, messages7d: 84,  event: null },
  { id: 250, orgId: 8,  parcelId: 31,  model: "LWS",       serial: "WEE-08250", telecom: "Sigfox", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 83, messages7d: 87,  event: null },
  { id: 209, orgId: 17, parcelId: 130, model: "CHP-15/30", serial: "WEE-17209", telecom: "LoRa",   lastMessage: "2026-04-15T09:00:00Z", networkQuality: 86, messages7d: 90,  event: null },
  { id: 210, orgId: 20, parcelId: 145, model: "CAPA-60-6", serial: "WEE-20210", telecom: "Sigfox", lastMessage: "2026-04-15T09:00:00Z", networkQuality: 82, messages7d: 86,  event: null },

  // ── Parcelle 3 (Org 1) — configuration 6 tensiomètres sur 2 horizons ─────────
  // Horizon 1 : 3 × CHP-15/30 installés à 20 cm
  { id: 211, orgId: 1,  parcelId: 3,  model: "CHP-15/30", serial: "WEE-00211", telecom: "LoRa",   lastMessage: "2026-04-19T08:00:00Z", networkQuality: 91, messages7d: 95,  event: null, depth: 20 },
  { id: 212, orgId: 1,  parcelId: 3,  model: "CHP-15/30", serial: "WEE-00212", telecom: "LoRa",   lastMessage: "2026-04-19T08:00:00Z", networkQuality: 88, messages7d: 93,  event: null, depth: 20 },
  { id: 213, orgId: 1,  parcelId: 3,  model: "CHP-15/30", serial: "WEE-00213", telecom: "LoRa",   lastMessage: "2026-04-19T08:00:00Z", networkQuality: 86, messages7d: 91,  event: null, depth: 20 },
  // Horizon 2 : 3 × CHP-30/60 à 50 cm (dont id 5 déjà existant)
  { id: 214, orgId: 1,  parcelId: 3,  model: "CHP-30/60", serial: "WEE-00214", telecom: "LoRa",   lastMessage: "2026-04-19T08:00:00Z", networkQuality: 89, messages7d: 94,  event: null, depth: 50 },
  { id: 215, orgId: 1,  parcelId: 3,  model: "CHP-30/60", serial: "WEE-00215", telecom: "LoRa",   lastMessage: "2026-04-19T08:00:00Z", networkQuality: 87, messages7d: 92,  event: null, depth: 50 },

  // ── Org 1 — sonde capacitive CAPA-60-6 ────────────────────────────────────
  { id: 216, orgId: 1,  parcelId: 5,  model: "CAPA-60-6", serial: "WEE-00216", telecom: "LoRa",   lastMessage: "2026-04-19T08:00:00Z", networkQuality: 83, messages7d: 88,  event: null },

  // ── T_GEL — org 1 (exploitation) ─────────────────────────────────────────
  { id: 217, orgId: 1,  parcelId: 1,  model: "T_GEL",    serial: "WEE-00217", telecom: "Sigfox", lastMessage: "2026-04-19T08:00:00Z", networkQuality: 90, messages7d: 94,  event: null },
  { id: 218, orgId: 1,  parcelId: 12, model: "T_GEL",    serial: "WEE-00218", telecom: "Sigfox", lastMessage: "2026-04-19T08:00:00Z", networkQuality: 87, messages7d: 91,  event: null },

  // ── T_GEL — réseau (orgs 7 et 10) ────────────────────────────────────────
  { id: 219, orgId: 7,  parcelId: 28, model: "T_GEL",    serial: "WEE-00719", telecom: "Sigfox", lastMessage: "2026-04-19T08:00:00Z", networkQuality: 85, messages7d: 89,  event: null },
  { id: 220, orgId: 10, parcelId: 34, model: "T_GEL",    serial: "WEE-01020", telecom: "Sigfox", lastMessage: "2026-04-19T08:00:00Z", networkQuality: 88, messages7d: 92,  event: null },

  // ── Breiz'Agri Conseil — capteurs sur parcelles de référence (orgId=100) ───
  { id: 239, orgId: 100, parcelId: 200, model: "P+",        serial: "WEE-10001", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 95, messages7d: 96,  event: null },
  { id: 240, orgId: 100, parcelId: 200, model: "CHP-30/60", serial: "WEE-10002", telecom: "Sigfox", lastMessage: "2026-04-30T08:00:00Z", networkQuality: 92, messages7d: 94,  event: null, depth: 50 },
  { id: 241, orgId: 100, parcelId: 201, model: "P+",        serial: "WEE-10003", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 88, messages7d: 91,  event: null },
  { id: 242, orgId: 100, parcelId: 201, model: "CAPA-30-3", serial: "WEE-10004", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 90, messages7d: 93,  event: null },
  { id: 243, orgId: 100, parcelId: 202, model: "P+",        serial: "WEE-10005", telecom: "Sigfox", lastMessage: "2026-04-30T08:00:00Z", networkQuality: 87, messages7d: 89,  event: null },
  { id: 244, orgId: 100, parcelId: 203, model: "TH",        serial: "WEE-10006", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 93, messages7d: 95,  event: null },
  { id: 245, orgId: 100, parcelId: 204, model: "P+",        serial: "WEE-10007", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 91, messages7d: 93,  event: null },
  { id: 246, orgId: 100, parcelId: 204, model: "CHP-15/30", serial: "WEE-10008", telecom: "Sigfox", lastMessage: "2026-04-30T08:00:00Z", networkQuality: 89, messages7d: 92,  event: null, depth: 20 },
  { id: 247, orgId: 100, parcelId: 205, model: "T_GEL",     serial: "WEE-10009", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 94, messages7d: 96,  event: null },
  { id: 248, orgId: 100, parcelId: 206, model: "P+",        serial: "WEE-10010", telecom: "Sigfox", lastMessage: "2026-04-30T08:00:00Z", networkQuality: 86, messages7d: 88,  event: null },
  { id: 249, orgId: 100, parcelId: 206, model: "CHP-60/90", serial: "WEE-10011", telecom: "LoRa",   lastMessage: "2026-04-30T08:00:00Z", networkQuality: 91, messages7d: 94,  event: null, depth: 80 },

  // ── SMV (Station Météo Virtuelle) — Breiz'Agri Conseil (orgId=100) ─────────
  { id: 221, orgId: 100, parcelId: null, model: "SMV", serial: "SMV-00101", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 222, orgId: 100, parcelId: null, model: "SMV", serial: "SMV-00102", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 223, orgId: 100, parcelId: null, model: "SMV", serial: "SMV-00103", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 224, orgId: 100, parcelId: null, model: "SMV", serial: "SMV-00104", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 225, orgId: 100, parcelId: null, model: "SMV", serial: "SMV-00105", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },

  // ── SMV — exploitations adhérentes (0 à 2 par org) ───────────────────────
  { id: 226, orgId: 2,  parcelId: null, model: "SMV", serial: "SMV-00201", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 227, orgId: 2,  parcelId: null, model: "SMV", serial: "SMV-00202", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 228, orgId: 4,  parcelId: null, model: "SMV", serial: "SMV-00401", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 229, orgId: 5,  parcelId: null, model: "SMV", serial: "SMV-00501", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 230, orgId: 7,  parcelId: null, model: "SMV", serial: "SMV-00701", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 231, orgId: 7,  parcelId: null, model: "SMV", serial: "SMV-00702", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 232, orgId: 9,  parcelId: null, model: "SMV", serial: "SMV-00901", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 233, orgId: 11, parcelId: null, model: "SMV", serial: "SMV-01101", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 234, orgId: 13, parcelId: null, model: "SMV", serial: "SMV-01301", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 235, orgId: 13, parcelId: null, model: "SMV", serial: "SMV-01302", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 236, orgId: 15, parcelId: null, model: "SMV", serial: "SMV-01501", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 237, orgId: 18, parcelId: null, model: "SMV", serial: "SMV-01801", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
  { id: 238, orgId: 20, parcelId: null, model: "SMV", serial: "SMV-02001", telecom: "Virtual", lastMessage: "2026-04-28T09:00:00Z", networkQuality: 100, messages7d: 168, event: null },
]

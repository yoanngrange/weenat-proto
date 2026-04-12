export const sensors = [
  // Pour parcelle 1
  { id: 1, parcelId: 1, model: "P+", serial: "L600AD501", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 85, messages7d: 90, event: null },
  { id: 2, parcelId: 1, model: "CHP-15/30", serial: "L600AD502", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 92, messages7d: 95, event: "capteur couché" },
  // Pour parcelle 2
  { id: 3, parcelId: 2, model: "P", serial: "L600AD503", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 78, messages7d: 88, event: null },
  { id: 4, parcelId: 2, model: "T", serial: "L600AD504", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 80, messages7d: 85, event: null },
  // Pour parcelle 3
  { id: 5, parcelId: 3, model: "CHP-30/60", serial: "L600AD505", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 90, messages7d: 92, event: "émissions interrompues" },
  // Pour parcelle 4
  { id: 6, parcelId: 4, model: "P+", serial: "L600AD506", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 87, messages7d: 93, event: null },
  { id: 7, parcelId: 4, model: "SMV", serial: "L600AD507", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 75, messages7d: 80, event: null },
  // Pour parcelle 5
  { id: 8, parcelId: 5, model: "EC", serial: "L600AD508", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 82, messages7d: 87, event: null },
  // Pour parcelle 6
  { id: 9, parcelId: 6, model: "T_MINI", serial: "L600AD509", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 88, messages7d: 91, event: "capteur déplacé" },
  // Pour parcelle 7
  { id: 10, parcelId: 7, model: "P+", serial: "L600AD510", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 91, messages7d: 94, event: null },
  // Pour parcelle 8
  { id: 11, parcelId: 8, model: "CHP-15/30", serial: "L600AD511", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 86, messages7d: 89, event: null },
  // Pour parcelle 9
  { id: 12, parcelId: 9, model: "P", serial: "L600AD512", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 79, messages7d: 84, event: "cuillère bloquée" },
  // Pour parcelle 10
  { id: 13, parcelId: 10, model: "T", serial: "L600AD513", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 83, messages7d: 86, event: null },
  // Pour parcelle 11
  { id: 14, parcelId: 11, model: "CHP-30/60", serial: "L600AD514", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 89, messages7d: 92, event: null },
  // Pour parcelle 12
  { id: 15, parcelId: 12, model: "P+", serial: "L600AD515", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 84, messages7d: 88, event: null },
  // Pour parcelle 13
  { id: 16, parcelId: 13, model: "SMV", serial: "L600AD516", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 76, messages7d: 81, event: null },
  // Pour parcelle 14
  { id: 17, parcelId: 14, model: "EC", serial: "L600AD517", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 81, messages7d: 85, event: null },
  // Pour parcelle 15
  { id: 18, parcelId: 15, model: "T_MINI", serial: "L600AD518", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 87, messages7d: 90, event: null },
  // Pour parcelle 16
  { id: 19, parcelId: 16, model: "P+", serial: "L600AD519", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 90, messages7d: 93, event: null },
  // Pour parcelle 17
  { id: 20, parcelId: 17, model: "CHP-15/30", serial: "L600AD520", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 85, messages7d: 89, event: null },
  // Pour parcelle 18
  { id: 21, parcelId: 18, model: "P", serial: "L600AD521", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 77, messages7d: 82, event: null },
  // Pour parcelle 19
  { id: 22, parcelId: 19, model: "T", serial: "L600AD522", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 88, messages7d: 91, event: null },
  // Pour parcelle 20 (orgId:3 Terrain Nord)
  { id: 23, parcelId: 20, model: "CHP-30/60", serial: "L600AD523", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 92, messages7d: 95, event: null },
  // Pour parcelle 21 (orgId:3 Terrain Sud)
  { id: 24, parcelId: 21, model: "P+", serial: "L600AD524", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 86, messages7d: 90, event: null },
  // Pour parcelle 22 (orgId:4 Manche 1)
  { id: 25, parcelId: 22, model: "SMV", serial: "L600AD525", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 78, messages7d: 83, event: null },
  // Pour parcelle 23 (orgId:4 Manche 2)
  { id: 26, parcelId: 23, model: "EC", serial: "L600AD526", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 80, messages7d: 85, event: null },
  // Pour parcelle 24 (orgId:5 Côte Malouine)
  { id: 27, parcelId: 24, model: "T_MINI", serial: "L600AD527", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 89, messages7d: 92, event: null },
  // Pour parcelle 25 (orgId:5 Champ côtier 2)
  { id: 28, parcelId: 25, model: "P+", serial: "L600AD528", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 91, messages7d: 94, event: null },
  // Pour parcelle 26 (orgId:6 Bio 1)
  { id: 29, parcelId: 26, model: "CHP-15/30", serial: "L600AD529", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 84, messages7d: 87, event: null },
  // Pour parcelle 27 (orgId:6 Bio 2)
  { id: 30, parcelId: 27, model: "P", serial: "L600AD530", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 79, messages7d: 84, event: null },
  // Pour parcelle 28 (orgId:7 Calvados 1)
  { id: 31, parcelId: 28, model: "T", serial: "L600AD531", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 87, messages7d: 90, event: null },
  // Pour parcelle 29 (orgId:8 Orne 1)
  { id: 32, parcelId: 29, model: "CHP-30/60", serial: "L600AD532", telecom: "LoRa", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 93, messages7d: 96, event: null },
  // Pour parcelle 30 (orgId:8 Orne 2)
  { id: 33, parcelId: 30, model: "P+", serial: "L600AD533", telecom: "Sigfox", lastMessage: "2023-10-01T10:00:00Z", networkQuality: 85, messages7d: 88, event: null }
];
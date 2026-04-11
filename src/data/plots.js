export const plots = [
  // Ferme du Bocage (id:1)
  { id: 1, orgId: 1, name: "Parcelle A", lat: 48.1173, lng: -1.6778, area: 5.2, crop: "Blé tendre", reserveHydrique: 75, degresJour: 1200, texture: "Argileux", shape: { type: "rectangle", width: 200, height: 150 } },
  { id: 2, orgId: 1, name: "Parcelle B", lat: 48.1273, lng: -1.6878, area: 3.8, crop: "Maïs", reserveHydrique: 60, degresJour: 1100, texture: "Limoneux", shape: { type: "triangle", base: 180, height: 120 } },
  { id: 3, orgId: 1, name: "Parcelle C", lat: 48.1073, lng: -1.6678, area: 7.5, crop: "Colza", reserveHydrique: 80, degresJour: 950, texture: "Sableux", shape: { type: "polygon", points: [[0,0], [100,0], [80,60], [20,60]] } },
  // Coopérative Bretonne (id:2)
  { id: 4, orgId: 2, name: "Champ 1", lat: 48.3904, lng: -4.4861, area: 10.5, crop: "Orge", reserveHydrique: 70, degresJour: 1050, texture: "Argileux", shape: { type: "rectangle", width: 250, height: 180 } },
  { id: 5, orgId: 2, name: "Champ 2", lat: 48.4004, lng: -4.4961, area: 7.3, crop: "Pomme de terre", reserveHydrique: 85, degresJour: 1000, texture: "Limoneux", shape: { type: "circle", radius: 120 } },
  { id: 6, orgId: 2, name: "Champ 3", lat: 48.3804, lng: -4.4761, area: 4.1, crop: "Artichaut", reserveHydrique: 65, degresJour: 1150, texture: "Sableux", shape: { type: "polygon", points: [[0,0], [80,0], [100,40], [60,80], [0,80]] } },
  { id: 7, orgId: 2, name: "Champ 4", lat: 48.4104, lng: -4.5061, area: 12.0, crop: "Blé dur", reserveHydrique: 75, degresJour: 1250, texture: "Argileux", shape: { type: "rectangle", width: 300, height: 200 } },
  // Exploitation Normande (id:3)
  { id: 8, orgId: 3, name: "Terrain Nord", lat: 49.1829, lng: -0.3707, area: 6.7, crop: "Lin", reserveHydrique: 55, degresJour: 1300, texture: "Limoneux" , shape: {"type":"polygon","points":[[0,0],[123,0],[42,90],[36,47]]} },
  { id: 9, orgId: 3, name: "Terrain Sud", lat: 49.1929, lng: -0.3807, area: 8.2, crop: "Betterave sucrière", reserveHydrique: 90, degresJour: 1100, texture: "Argileux" , shape: {"type":"circle","radius":133} },
  // Agriculteurs de la Manche (id:4)
  { id: 10, orgId: 4, name: "Parcelle Manche 1", lat: 49.1156, lng: -1.0828, area: 4.5, crop: "Avoine", reserveHydrique: 60, degresJour: 1050, texture: "Sableux" , shape: {"type":"triangle","base":168,"height":100} },
  { id: 11, orgId: 4, name: "Parcelle Manche 2", lat: 49.1256, lng: -1.0928, area: 9.8, crop: "Tournesol", reserveHydrique: 70, degresJour: 1200, texture: "Limoneux" , shape: {"type":"triangle","base":131,"height":134} },
  // Ferme Côtière (id:5)
  { id: 12, orgId: 5, name: "Côte Malouine", lat: 48.6493, lng: -2.0257, area: 3.9, crop: "Légumes bio", reserveHydrique: 80, degresJour: 1000, texture: "Argileux" , shape: {"type":"rectangle","width":193,"height":226} },
  { id: 13, orgId: 5, name: "Champ côtier 2", lat: 48.6593, lng: -2.0357, area: 5.5, crop: "Épinard", reserveHydrique: 75, degresJour: 950, texture: "Sableux" , shape: {"type":"rectangle","width":125,"height":105} },
  // Coop Bio Bretagne (id:6)
  { id: 14, orgId: 6, name: "Bio 1", lat: 47.6587, lng: -2.7599, area: 8.0, crop: "Chou-fleur", reserveHydrique: 85, degresJour: 1100, texture: "Limoneux" , shape: {"type":"circle","radius":80} },
  { id: 15, orgId: 6, name: "Bio 2", lat: 47.6687, lng: -2.7699, area: 6.2, crop: "Carotte", reserveHydrique: 90, degresJour: 1050, texture: "Argileux" , shape: {"type":"circle","radius":146} },
  // Exploitation du Calvados (id:7)
  { id: 16, orgId: 7, name: "Calvados 1", lat: 49.1469, lng: 0.2306, area: 7.1, crop: "Pois", reserveHydrique: 65, degresJour: 1150, texture: "Sableux" , shape: {"type":"triangle","base":152,"height":122} },
  // Ferme de l'Orne (id:8)
  { id: 17, orgId: 8, name: "Orne 1", lat: 48.4329, lng: 0.0913, area: 10.3, crop: "Seigle", reserveHydrique: 70, degresJour: 1250, texture: "Limoneux" , shape: {"type":"rectangle","width":251,"height":191} },
  { id: 18, orgId: 8, name: "Orne 2", lat: 48.4429, lng: 0.1013, area: 4.8, crop: "Triticale", reserveHydrique: 75, degresJour: 1200, texture: "Argileux" , shape: {"type":"polygon","points":[[0,0],[133,0],[64,54],[25,83]]} },
  // Agriculteurs Finistériens (id:9)
  { id: 19, orgId: 9, name: "Finistère 1", lat: 47.9975, lng: -4.0979, area: 12.5, crop: "Haricot", reserveHydrique: 80, degresJour: 1000, texture: "Sableux" , shape: {"type":"rectangle","width":221,"height":147} },
  // Coopérative Normande (id:10)
  { id: 20, orgId: 10, name: "Normande 1", lat: 49.4431, lng: 1.0993, area: 9.0, crop: "Luzerne", reserveHydrique: 85, degresJour: 1100, texture: "Limoneux" , shape: {"type":"polygon","points":[[0,0],[124,0],[71,95],[30,95]]} },
  // Ferme des Côtes d'Armor (id:11)
  { id: 21, orgId: 11, name: "Armor 1", lat: 48.5142, lng: -2.7658, area: 5.7, crop: "Radis", reserveHydrique: 70, degresJour: 1050, texture: "Argileux" , shape: {"type":"triangle","base":149,"height":91} },
  // Exploitation de l'Ille-et-Vilaine (id:12)
  { id: 22, orgId: 12, name: "Ille 1", lat: 48.1173, lng: -1.6778, area: 8.5, crop: "Navet", reserveHydrique: 75, degresJour: 1150, texture: "Sableux" , shape: {"type":"polygon","points":[[0,0],[119,0],[85,47],[19,60]]} },
  // Agriculteurs du Morbihan (id:13)
  { id: 23, orgId: 13, name: "Morbihan 1", lat: 47.7483, lng: -3.3702, area: 11.2, crop: "Poireau", reserveHydrique: 80, degresJour: 1000, texture: "Limoneux" , shape: {"type":"triangle","base":127,"height":164} },
  // Ferme Normande Bio (id:14)
  { id: 24, orgId: 14, name: "Bio Norm 1", lat: 49.0241, lng: 1.1508, area: 6.8, crop: "Tomate", reserveHydrique: 85, degresJour: 1200, texture: "Argileux" , shape: {"type":"rectangle","width":161,"height":160} },
  // Coopérative Bretonne Sud (id:15)
  { id: 25, orgId: 15, name: "Sud 1", lat: 47.2184, lng: -1.5536, area: 14.0, crop: "Blé tendre", reserveHydrique: 70, degresJour: 1250, texture: "Sableux" , shape: {"type":"polygon","points":[[0,0],[97,0],[82,85],[24,92]]} },
  // Exploitation de la Seine-Maritime (id:16)
  { id: 26, orgId: 16, name: "Seine 1", lat: 49.9225, lng: 1.0777, area: 7.9, crop: "Betterave fourragère", reserveHydrique: 75, degresJour: 1100, texture: "Limoneux" , shape: {"type":"polygon","points":[[0,0],[69,0],[91,59],[18,92]]} },
  // Ferme Côtière Nord (id:17)
  { id: 27, orgId: 17, name: "Nord 1", lat: 48.4549, lng: -2.0503, area: 4.2, crop: "Chou", reserveHydrique: 80, degresJour: 1050, texture: "Argileux" , shape: {"type":"rectangle","width":152,"height":178} },
  // Agriculteurs de l'Eure (id:18)
  { id: 28, orgId: 18, name: "Eure 1", lat: 49.0889, lng: 0.5986, area: 9.5, crop: "Maïs ensilage", reserveHydrique: 85, degresJour: 1150, texture: "Sableux" , shape: {"type":"rectangle","width":162,"height":139} },
  // Coop Bio Normandie (id:19)
  { id: 29, orgId: 19, name: "Bio Norm 2", lat: 49.2765, lng: -0.7025, area: 5.0, crop: "Laitue", reserveHydrique: 90, degresJour: 1000, texture: "Limoneux" , shape: {"type":"triangle","base":202,"height":151} },
  // Ferme Bretonne Centrale (id:20)
  { id: 30, orgId: 20, name: "Centrale 1", lat: 48.0661, lng: -2.9661, area: 13.5, crop: "Orge de printemps", reserveHydrique: 75, degresJour: 1200, texture: "Argileux" , shape: {"type":"rectangle","width":254,"height":196} }
];
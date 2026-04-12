export const plots = [
  // ── Ferme du Bocage (orgId:1) ─────────────────────────────────────────────
  // Zone rurale autour de Saint-Aubin-du-Cormier (Ille-et-Vilaine, ~48.15°N -1.18°W)
  // Cluster A – Bloc du Bourg : 5 parcelles contiguës ou adjacentes
  {
    id: 1, orgId: 1, name: "Le Grand Pré", lat: 48.1507, lng: -1.1858,
    area: 8.4, crop: "Blé tendre", reserveHydrique: 72, degresJour: 1210, texture: "Limon argileux",
    irrigation: "Pas d'irrigation", integrations: ["Modèles Arvalis", "Disease Forecasting"],
    latlngs: [[48.1518,-1.1875],[48.1521,-1.1843],[48.1497,-1.1840],[48.1493,-1.1873]]
  },
  {
    id: 2, orgId: 1, name: "Les Trois Arpents", lat: 48.1508, lng: -1.1822,
    area: 5.2, crop: "Maïs", reserveHydrique: 58, degresJour: 1140, texture: "Limon argilo-sableux",
    irrigation: "Pivot", integrations: ["Irrigation Optimisée", "Water Balance Model"],
    latlngs: [[48.1521,-1.1843],[48.1519,-1.1805],[48.1495,-1.1806],[48.1497,-1.1840]]
  },
  {
    id: 3, orgId: 1, name: "La Petite Lande", lat: 48.1480, lng: -1.1860,
    area: 3.9, crop: "Orge", reserveHydrique: 64, degresJour: 1080, texture: "Argile sableux",
    irrigation: "Pas d'irrigation", integrations: ["Modèles Arvalis"],
    latlngs: [[48.1493,-1.1873],[48.1497,-1.1840],[48.1477,-1.1843],[48.1473,-1.1878]]
  },
  {
    id: 4, orgId: 1, name: "Les Courtils", lat: 48.1480, lng: -1.1823,
    area: 4.5, crop: "Colza", reserveHydrique: 81, degresJour: 960, texture: "Limono-argileux fin",
    irrigation: "Pas d'irrigation", integrations: ["Pest Alert System", "Carbon Footprint Tracker"],
    latlngs: [[48.1497,-1.1840],[48.1495,-1.1806],[48.1471,-1.1810],[48.1473,-1.1843]]
  },
  {
    id: 5, orgId: 1, name: "La Grande Pièce", lat: 48.1530, lng: -1.1905,
    area: 11.2, crop: "Blé tendre", reserveHydrique: 76, degresJour: 1195, texture: "Limon fin",
    irrigation: "Enrouleur", integrations: ["Modèles Arvalis", "Harvest Optimizer"],
    latlngs: [[48.1543,-1.1935],[48.1545,-1.1878],[48.1518,-1.1875],[48.1514,-1.1933]]
  },

  // Cluster B – Les Hautes Terres : 3 parcelles à ~4 km au NE, 2 contiguës
  {
    id: 6, orgId: 1, name: "Le Champ du Moulin", lat: 48.1714, lng: -1.1475,
    area: 6.3, crop: "Prairie permanente", reserveHydrique: 88, degresJour: 1050, texture: "Limon très fin",
    irrigation: "Pas d'irrigation", integrations: [],
    latlngs: [[48.1729,-1.1502],[48.1728,-1.1452],[48.1700,-1.1454],[48.1701,-1.1503]]
  },
  {
    id: 7, orgId: 1, name: "La Croix", lat: 48.1688, lng: -1.1477,
    area: 4.1, crop: "Lin", reserveHydrique: 55, degresJour: 1010, texture: "Sable",
    irrigation: "Pas d'irrigation", integrations: ["Crop Rotation Planner"],
    latlngs: [[48.1700,-1.1503],[48.1700,-1.1454],[48.1678,-1.1457],[48.1677,-1.1504]]
  },
  {
    id: 8, orgId: 1, name: "La Lande", lat: 48.1754, lng: -1.1395,
    area: 8.7, crop: "Colza", reserveHydrique: 69, degresJour: 980, texture: "Argile limoneuse",
    irrigation: "Rampe", integrations: ["Smart Irrigation Hub", "Water Balance Model"],
    latlngs: [[48.1771,-1.1422],[48.1770,-1.1370],[48.1739,-1.1373],[48.1740,-1.1424]]
  },

  // Cluster C – La Rivière : 3 parcelles à ~3 km au SO, 2 contiguës
  {
    id: 9, orgId: 1, name: "Le Marais Bas", lat: 48.1238, lng: -1.2170,
    area: 7.5, crop: "Betterave sucrière", reserveHydrique: 90, degresJour: 1100, texture: "Limon",
    irrigation: "Goutte à goutte", integrations: ["Soil Moisture Monitor", "Nutrient Deficiency Detector"],
    latlngs: [[48.1253,-1.2194],[48.1254,-1.2148],[48.1224,-1.2150],[48.1222,-1.2196]]
  },
  {
    id: 10, orgId: 1, name: "La Côte", lat: 48.1206, lng: -1.2172,
    area: 5.1, crop: "Pomme de terre", reserveHydrique: 62, degresJour: 1055, texture: "Limon sableux",
    irrigation: "Couverture intégrale", integrations: ["Frost Protection", "Crop Yield Predictor"],
    latlngs: [[48.1222,-1.2196],[48.1224,-1.2150],[48.1192,-1.2153],[48.1190,-1.2198]]
  },
  {
    id: 11, orgId: 1, name: "Le Pré du Val", lat: 48.1177, lng: -1.2152,
    area: 4.8, crop: "Maïs", reserveHydrique: 74, degresJour: 1130, texture: "Sable limoneux",
    irrigation: "Micro aspersion", integrations: ["Irrigation Optimisée"],
    latlngs: [[48.1190,-1.2153],[48.1192,-1.2115],[48.1163,-1.2118],[48.1161,-1.2157]]
  },

  // Isolées – parcelles éloignées (parcellaire éclaté)
  {
    id: 12, orgId: 1, name: "Le Bois Rond", lat: 48.1800, lng: -1.1318,
    area: 9.1, crop: "Avoine", reserveHydrique: 67, degresJour: 1165, texture: "Limon",
    irrigation: "Pas d'irrigation", integrations: [],
    latlngs: [[48.1815,-1.1345],[48.1814,-1.1295],[48.1786,-1.1298],[48.1787,-1.1348]]
  },
  {
    id: 13, orgId: 1, name: "Les Haies", lat: 48.1355, lng: -1.2362,
    area: 4.3, crop: "Pois de printemps", reserveHydrique: 79, degresJour: 930, texture: "Argile",
    irrigation: "Gravitaire", integrations: ["Weather Integration"],
    latlngs: [[48.1370,-1.2385],[48.1372,-1.2343],[48.1341,-1.2345],[48.1339,-1.2387]]
  },
  {
    id: 14, orgId: 1, name: "Le Clos", lat: 48.0912, lng: -1.1828,
    area: 5.7, crop: "Tournesol", reserveHydrique: 53, degresJour: 1270, texture: "Sable limoneux",
    irrigation: "Goutte à goutte enterré", integrations: ["Soil Moisture Monitor"],
    latlngs: [[48.0926,-1.1851],[48.0928,-1.1808],[48.0900,-1.1810],[48.0897,-1.1854]]
  },
  {
    id: 15, orgId: 1, name: "La Plaine", lat: 48.1655, lng: -1.2108,
    area: 12.3, crop: "Blé tendre", reserveHydrique: 83, degresJour: 1185, texture: "Limon argileux",
    irrigation: "Enrouleur", integrations: ["Modèles Arvalis", "Fertilizer Calculator", "Carbon Footprint Tracker"],
    latlngs: [[48.1674,-1.2141],[48.1676,-1.2079],[48.1637,-1.2083],[48.1635,-1.2145]]
  },

  // ── Coopérative Bretonne (orgId:2) ────────────────────────────────────────
  { id: 16, orgId: 2, name: "Champ 1", lat: 48.3904, lng: -4.4861, area: 10.5, crop: "Orge", reserveHydrique: 70, degresJour: 1050, texture: "Argile", shape: { type: "rectangle", width: 250, height: 180 } },
  { id: 17, orgId: 2, name: "Champ 2", lat: 48.4004, lng: -4.4961, area: 7.3, crop: "Pomme de terre", reserveHydrique: 85, degresJour: 1000, texture: "Limon", shape: { type: "rectangle", width: 190, height: 145 } },
  { id: 18, orgId: 2, name: "Champ 3", lat: 48.3804, lng: -4.4761, area: 4.1, crop: "Artichaut", reserveHydrique: 65, degresJour: 1150, texture: "Sable", shape: { type: "polygon", points: [[0,0], [80,0], [100,40], [60,80], [0,80]] } },
  { id: 19, orgId: 2, name: "Champ 4", lat: 48.4104, lng: -4.5061, area: 12.0, crop: "Blé dur", reserveHydrique: 75, degresJour: 1250, texture: "Argile", shape: { type: "rectangle", width: 300, height: 200 } },
  // ── Exploitation Normande (orgId:3) ───────────────────────────────────────
  { id: 20, orgId: 3, name: "Terrain Nord", lat: 49.1829, lng: -0.3707, area: 6.7, crop: "Lin", reserveHydrique: 55, degresJour: 1300, texture: "Limon", shape: { type: "polygon", points: [[0,0],[123,0],[42,90],[36,47]] } },
  { id: 21, orgId: 3, name: "Terrain Sud", lat: 49.1929, lng: -0.3807, area: 8.2, crop: "Betterave sucrière", reserveHydrique: 90, degresJour: 1100, texture: "Argile", shape: { type: "rectangle", width: 160, height: 130 } },
  // ── Agriculteurs de la Manche (orgId:4) ───────────────────────────────────
  { id: 22, orgId: 4, name: "Parcelle Manche 1", lat: 49.1156, lng: -1.0828, area: 4.5, crop: "Avoine", reserveHydrique: 60, degresJour: 1050, texture: "Sable", shape: { type: "polygon", points: [[0,0],[140,0],[120,80],[20,80]] } },
  { id: 23, orgId: 4, name: "Parcelle Manche 2", lat: 49.1256, lng: -1.0928, area: 9.8, crop: "Tournesol", reserveHydrique: 70, degresJour: 1200, texture: "Limon", shape: { type: "rectangle", width: 200, height: 150 } },
  // ── Ferme Côtière (orgId:5) ───────────────────────────────────────────────
  { id: 24, orgId: 5, name: "Côte Malouine", lat: 48.6493, lng: -2.0257, area: 3.9, crop: "Légumes bio", reserveHydrique: 80, degresJour: 1000, texture: "Argile", shape: { type: "rectangle", width: 140, height: 110 } },
  { id: 25, orgId: 5, name: "Champ côtier 2", lat: 48.6593, lng: -2.0357, area: 5.5, crop: "Artichaut", reserveHydrique: 75, degresJour: 950, texture: "Sable", shape: { type: "rectangle", width: 160, height: 110 } },
  // ── Coop Bio Bretagne (orgId:6) ───────────────────────────────────────────
  { id: 26, orgId: 6, name: "Bio 1", lat: 47.6587, lng: -2.7599, area: 8.0, crop: "Chou-fleur", reserveHydrique: 85, degresJour: 1100, texture: "Limon", shape: { type: "rectangle", width: 190, height: 130 } },
  { id: 27, orgId: 6, name: "Bio 2", lat: 47.6687, lng: -2.7699, area: 6.2, crop: "Carotte", reserveHydrique: 90, degresJour: 1050, texture: "Argile", shape: { type: "rectangle", width: 170, height: 115 } },
  // ── Exploitation du Calvados (orgId:7) ────────────────────────────────────
  { id: 28, orgId: 7, name: "Calvados 1", lat: 49.1469, lng: 0.2306, area: 7.1, crop: "Pois", reserveHydrique: 65, degresJour: 1150, texture: "Sable", shape: { type: "polygon", points: [[0,0],[150,0],[130,90],[20,90]] } },
  // ── Ferme de l'Orne (orgId:8) ─────────────────────────────────────────────
  { id: 29, orgId: 8, name: "Orne 1", lat: 48.4329, lng: 0.0913, area: 10.3, crop: "Seigle", reserveHydrique: 70, degresJour: 1250, texture: "Limon", shape: { type: "rectangle", width: 220, height: 145 } },
  { id: 30, orgId: 8, name: "Orne 2", lat: 48.4429, lng: 0.1013, area: 4.8, crop: "Triticale", reserveHydrique: 75, degresJour: 1200, texture: "Argile", shape: { type: "polygon", points: [[0,0],[133,0],[64,54],[25,83]] } },
  // ── Agriculteurs Finistériens (orgId:9) ───────────────────────────────────
  { id: 31, orgId: 9, name: "Finistère 1", lat: 47.9975, lng: -4.0979, area: 12.5, crop: "Haricot", reserveHydrique: 80, degresJour: 1000, texture: "Sable", shape: { type: "rectangle", width: 220, height: 180 } },
  // ── Coopérative Normande (orgId:10) ───────────────────────────────────────
  { id: 32, orgId: 10, name: "Normande 1", lat: 49.4431, lng: 1.0993, area: 9.0, crop: "Luzerne", reserveHydrique: 85, degresJour: 1100, texture: "Limon", shape: { type: "polygon", points: [[0,0],[180,0],[160,100],[20,100]] } },
  // ── Ferme des Côtes d'Armor (orgId:11) ────────────────────────────────────
  { id: 33, orgId: 11, name: "Armor 1", lat: 48.5142, lng: -2.7658, area: 5.7, crop: "Radis", reserveHydrique: 70, degresJour: 1050, texture: "Argile", shape: { type: "polygon", points: [[0,0],[130,0],[110,80],[20,80]] } },
  // ── Exploitation de l'Ille-et-Vilaine (orgId:12) ──────────────────────────
  { id: 34, orgId: 12, name: "Ille 1", lat: 48.1173, lng: -1.6778, area: 8.5, crop: "Navet", reserveHydrique: 75, degresJour: 1150, texture: "Sable", shape: { type: "rectangle", width: 195, height: 135 } },
  // ── Agriculteurs du Morbihan (orgId:13) ───────────────────────────────────
  { id: 35, orgId: 13, name: "Morbihan 1", lat: 47.7483, lng: -3.3702, area: 11.2, crop: "Poireau", reserveHydrique: 80, degresJour: 1000, texture: "Limon", shape: { type: "rectangle", width: 215, height: 160 } },
  // ── Ferme Normande Bio (orgId:14) ─────────────────────────────────────────
  { id: 36, orgId: 14, name: "Bio Norm 1", lat: 49.0241, lng: 1.1508, area: 6.8, crop: "Tomate", reserveHydrique: 85, degresJour: 1200, texture: "Argile", shape: { type: "rectangle", width: 165, height: 130 } },
  // ── Coopérative Bretonne Sud (orgId:15) ───────────────────────────────────
  { id: 37, orgId: 15, name: "Sud 1", lat: 47.2184, lng: -1.5536, area: 14.0, crop: "Blé tendre", reserveHydrique: 70, degresJour: 1250, texture: "Sable", shape: { type: "polygon", points: [[0,0],[240,0],[220,120],[20,120]] } },
  // ── Exploitation de la Seine-Maritime (orgId:16) ──────────────────────────
  { id: 38, orgId: 16, name: "Seine 1", lat: 49.9225, lng: 1.0777, area: 7.9, crop: "Betterave fourragère", reserveHydrique: 75, degresJour: 1100, texture: "Limon", shape: { type: "rectangle", width: 185, height: 130 } },
  // ── Ferme Côtière Nord (orgId:17) ─────────────────────────────────────────
  { id: 39, orgId: 17, name: "Nord 1", lat: 48.4549, lng: -2.0503, area: 4.2, crop: "Chou", reserveHydrique: 80, degresJour: 1050, texture: "Argile", shape: { type: "polygon", points: [[0,0],[120,0],[100,80],[20,80]] } },
  // ── Agriculteurs de l'Eure (orgId:18) ────────────────────────────────────
  { id: 40, orgId: 18, name: "Eure 1", lat: 49.0889, lng: 0.5986, area: 9.5, crop: "Maïs ensilage", reserveHydrique: 85, degresJour: 1150, texture: "Sable", shape: { type: "rectangle", width: 200, height: 145 } },
  // ── Coop Bio Normandie (orgId:19) ─────────────────────────────────────────
  { id: 41, orgId: 19, name: "Bio Norm 2", lat: 49.2765, lng: -0.7025, area: 5.0, crop: "Laitue", reserveHydrique: 90, degresJour: 1000, texture: "Limon", shape: { type: "polygon", points: [[0,0],[150,0],[130,90],[20,90]] } },
  // ── Ferme Bretonne Centrale (orgId:20) ────────────────────────────────────
  { id: 42, orgId: 20, name: "Centrale 1", lat: 48.0661, lng: -2.9661, area: 13.5, crop: "Orge de printemps", reserveHydrique: 75, degresJour: 1200, texture: "Argile", shape: { type: "rectangle", width: 245, height: 170 } }
];
function shapeToLatlngs(plot) {
  const { lat, lng, id } = plot
  const shape = plot.shape ?? { type: 'rectangle', width: 180, height: 130 }
  const LAT_M = 1 / 111111
  const LNG_M = 1 / (111111 * Math.cos(lat * Math.PI / 180))

  if (shape.type === 'polygon') {
    const raw = shape.points
    const maxX = Math.max(...raw.map(p => p[0]))
    const maxY = Math.max(...raw.map(p => p[1]))
    const aspect = maxX / maxY
    const h = Math.sqrt(plot.area * 10000 / aspect)
    const w = aspect * h
    return raw.map(([x, y]) => [
      +(lat + (0.5 - y / maxY) * h * LAT_M).toFixed(6),
      +(lng + (x / maxX - 0.5) * w * LNG_M).toFixed(6),
    ])
  }

  const w = shape.width ?? 180
  const h = shape.height ?? 130
  const dlat = h / 2 * LAT_M
  const dlng = w / 2 * LNG_M
  const v = id % 4

  if (v === 0) {
    return [
      [+(lat + dlat).toFixed(6), +(lng - dlng).toFixed(6)],
      [+(lat + dlat).toFixed(6), +(lng + dlng).toFixed(6)],
      [+(lat - dlat).toFixed(6), +(lng + dlng).toFixed(6)],
      [+(lat - dlat).toFixed(6), +(lng - dlng).toFixed(6)],
    ]
  } else if (v === 1) {
    // Trapèze : haut plus étroit et décalé
    return [
      [+(lat + dlat).toFixed(6), +(lng - dlng * 0.68).toFixed(6)],
      [+(lat + dlat).toFixed(6), +(lng + dlng * 0.78).toFixed(6)],
      [+(lat - dlat).toFixed(6), +(lng + dlng).toFixed(6)],
      [+(lat - dlat).toFixed(6), +(lng - dlng).toFixed(6)],
    ]
  } else if (v === 2) {
    // Parallélogramme : décalage latéral
    return [
      [+(lat + dlat).toFixed(6), +(lng - dlng + dlng * 0.22).toFixed(6)],
      [+(lat + dlat).toFixed(6), +(lng + dlng + dlng * 0.22).toFixed(6)],
      [+(lat - dlat).toFixed(6), +(lng + dlng).toFixed(6)],
      [+(lat - dlat).toFixed(6), +(lng - dlng).toFixed(6)],
    ]
  } else {
    // Quadrilatère irrégulier
    return [
      [+(lat + dlat).toFixed(6),        +(lng - dlng).toFixed(6)],
      [+(lat + dlat * 0.88).toFixed(6), +(lng + dlng).toFixed(6)],
      [+(lat - dlat).toFixed(6),        +(lng + dlng * 0.91).toFixed(6)],
      [+(lat - dlat * 0.93).toFixed(6), +(lng - dlng * 1.07).toFixed(6)],
    ]
  }
}

export const plots = [
  // ── Ferme du Bocage (orgId:1) — contours RPG réels, Morbihan ────────────────
  {
    id: 1, orgId: 1, name: "Le Grand Pré", lat: 48.0970, lng: -2.4885,
    area: 8.4, crop: "Blé tendre", reserveHydrique: 72, degresJour: 1210, texture: "Limon argileux",
    irrigation: "Pas d'irrigation", integrations: ["IRRÉ-LIS Mono-Culture"],
    latlngs: [[48.098485,-2.491716],[48.094864,-2.489461],[48.095270,-2.485384],[48.099325,-2.487466]]
  },
  {
    id: 2, orgId: 1, name: "Les Trois Arpents", lat: 48.1014, lng: -2.4809,
    area: 5.2, crop: "Maïs", reserveHydrique: 58, degresJour: 1140, texture: "Limon argilo-sableux",
    irrigation: "Pivot", integrations: ["IRRÉ-LIS Mono-Culture"],
    latlngs: [[48.100716,-2.483735],[48.099760,-2.478227],[48.101643,-2.477836],[48.102367,-2.481090],[48.101701,-2.481133],[48.102106,-2.483562]]
  },
  {
    id: 3, orgId: 1, name: "La Petite Lande", lat: 48.0930, lng: -2.4674,
    area: 3.9, crop: "Orge", reserveHydrique: 64, degresJour: 1080, texture: "Argile sableux",
    irrigation: "Pas d'irrigation", integrations: ["IRRÉ-LIS Mono-Culture"],
    latlngs: [[48.091107,-2.471167],[48.089614,-2.469996],[48.090574,-2.468027],[48.091426,-2.465101],[48.092813,-2.462121],[48.094447,-2.463718],[48.094660,-2.465793],[48.095229,-2.467070],[48.095122,-2.469358],[48.094092,-2.470102],[48.094056,-2.469251]]
  },
  {
    id: 4, orgId: 1, name: "Les Courtils", lat: 48.1053, lng: -2.4739,
    area: 4.5, crop: "Colza", reserveHydrique: 81, degresJour: 960, texture: "Limono-argileux fin",
    irrigation: "Pas d'irrigation", integrations: ["IRRÉ-LIS Multi-Cultures"],
    latlngs: [[48.104397,-2.477657],[48.103118,-2.476486],[48.103047,-2.474092],[48.105214,-2.473134],[48.105108,-2.471059],[48.107772,-2.469836],[48.108128,-2.474997]]
  },
  {
    id: 5, orgId: 1, name: "La Grande Pièce", lat: 48.1072, lng: -2.5542,
    area: 11.2, crop: "Blé tendre", reserveHydrique: 76, degresJour: 1195, texture: "Limon fin",
    irrigation: "Enrouleur", integrations: ["IRRÉ-LIS Multi-Cultures"],
    latlngs: [[48.105663,-2.557473],[48.104843,-2.552900],[48.109237,-2.550558],[48.108964,-2.555651]]
  },
  {
    id: 6, orgId: 1, name: "Le Champ du Moulin", lat: 48.1183, lng: -2.5873,
    area: 6.3, crop: "Prairie permanente", reserveHydrique: 88, degresJour: 1050, texture: "Limon très fin",
    irrigation: "Pas d'irrigation", integrations: ["IRRÉ-LIS Mono-Culture"],
    latlngs: [[48.118758,-2.592324],[48.116395,-2.591008],[48.116800,-2.586810],[48.118387,-2.582511],[48.119434,-2.584028],[48.119805,-2.587215]]
  },
  {
    id: 7, orgId: 1, name: "La Croix", lat: 48.1285, lng: -2.5837,
    area: 4.1, crop: "Lin", reserveHydrique: 55, degresJour: 1010, texture: "Sable",
    irrigation: "Pas d'irrigation", integrations: ["IRRÉ-LIS Mono-Culture"],
    latlngs: [[48.130063,-2.587041],[48.127025,-2.585169],[48.125978,-2.583298],[48.126451,-2.582893],[48.127194,-2.583551],[48.129388,-2.578847],[48.130435,-2.583703],[48.131076,-2.585220]]
  },
  {
    id: 8, orgId: 1, name: "La Lande", lat: 48.1283, lng: -2.6216,
    area: 8.7, crop: "Colza", reserveHydrique: 69, degresJour: 980, texture: "Argile limoneuse",
    irrigation: "Rampe", integrations: ["DeciTrait"],
    latlngs: [[48.127261,-2.626268],[48.125100,-2.621766],[48.127700,-2.619085],[48.128612,-2.620350],[48.129557,-2.619338],[48.131245,-2.622525]]
  },
  {
    id: 9, orgId: 1, name: "Le Marais Bas", lat: 48.1517, lng: -2.6123,
    area: 7.5, crop: "Betterave sucrière", reserveHydrique: 90, degresJour: 1100, texture: "Limon",
    irrigation: "Goutte à goutte", integrations: ["DeciTrait"],
    latlngs: [[48.152435,-2.614382],[48.150411,-2.613851],[48.151102,-2.608944],[48.152689,-2.611903]]
  },
  {
    id: 10, orgId: 1, name: "La Côte", lat: 48.1599, lng: -2.5204,
    area: 5.1, crop: "Pomme de terre", reserveHydrique: 62, degresJour: 1055, texture: "Limon sableux",
    irrigation: "Couverture intégrale", integrations: ["Limacapt"],
    latlngs: [[48.159600,-2.523138],[48.158134,-2.522951],[48.158283,-2.520530],[48.159525,-2.518965],[48.160793,-2.518705],[48.161066,-2.518109],[48.161364,-2.518630],[48.160619,-2.520456],[48.159650,-2.521685]]
  },
  {
    id: 11, orgId: 1, name: "Le Pré du Val", lat: 48.0499, lng: -2.6495,
    area: 4.8, crop: "Maïs", reserveHydrique: 74, degresJour: 1130, texture: "Sable limoneux",
    irrigation: "Micro aspersion", integrations: [],
    latlngs: [[48.051148,-2.656116],[48.048581,-2.652550],[48.046491,-2.646296],[48.049571,-2.646187],[48.053458,-2.646132]]
  },
  {
    id: 12, orgId: 1, name: "Le Bois Rond", lat: 48.0245, lng: -2.8096,
    area: 9.1, crop: "Avoine", reserveHydrique: 67, degresJour: 1165, texture: "Limon",
    irrigation: "Pas d'irrigation", integrations: [],
    latlngs: [[48.027302,-2.817552],[48.026173,-2.820127],[48.023802,-2.822027],[48.022729,-2.822238],[48.020414,-2.814386],[48.020696,-2.813036],[48.021966,-2.811136],[48.021373,-2.809700],[48.021994,-2.807463],[48.022757,-2.806872],[48.022531,-2.805099],[48.022869,-2.801932],[48.023095,-2.799948],[48.024422,-2.800370],[48.024676,-2.802439],[48.026032,-2.803832],[48.028234,-2.804338],[48.031876,-2.806829],[48.032045,-2.808349],[48.025721,-2.815062]]
  },
  {
    id: 13, orgId: 1, name: "Les Haies", lat: 48.1617, lng: -2.3045,
    area: 4.3, crop: "Pois de printemps", reserveHydrique: 79, degresJour: 930, texture: "Argile",
    irrigation: "Gravitaire", integrations: [],
    latlngs: [[48.165234,-2.313084],[48.162307,-2.309561],[48.160214,-2.306935],[48.158120,-2.301843],[48.158996,-2.301010],[48.160107,-2.301363],[48.160513,-2.300242],[48.161560,-2.301683],[48.163098,-2.300081],[48.163931,-2.301106],[48.164401,-2.302740],[48.162735,-2.305014],[48.163696,-2.306615],[48.166516,-2.311611]]
  },
  {
    id: 14, orgId: 1, name: "Le Clos", lat: 48.2190, lng: -2.4655,
    area: 5.7, crop: "Tournesol", reserveHydrique: 53, degresJour: 1270, texture: "Sable limoneux",
    irrigation: "Goutte à goutte enterré", integrations: [],
    latlngs: [[48.221011,-2.467585],[48.218677,-2.468331],[48.217922,-2.466477],[48.218403,-2.465885],[48.217991,-2.465087],[48.217613,-2.462923],[48.219381,-2.462151]]
  },
  {
    id: 15, orgId: 1, name: "La Plaine", lat: 47.9560, lng: -2.4438,
    area: 12.3, crop: "Blé tendre", reserveHydrique: 83, degresJour: 1185, texture: "Limon argileux",
    irrigation: "Enrouleur", integrations: [],
    latlngs: [[47.954506,-2.441870],[47.954370,-2.438666],[47.955467,-2.438492],[47.955797,-2.438710],[47.955652,-2.440000],[47.956467,-2.440130],[47.956497,-2.439290],[47.957147,-2.439870],[47.957157,-2.440957],[47.956351,-2.440928],[47.956147,-2.442291]]
  },

  // ── Coopérative Bretonne (orgId:2) ────────────────────────────────────────
  { id: 16, orgId: 2, name: "Champ 1", lat: 48.3904, lng: -4.4861, area: 10.5, crop: "Orge", reserveHydrique: 70, degresJour: 1050, texture: "Argile", integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 250, height: 180 } },
  { id: 17, orgId: 2, name: "Champ 2", lat: 48.4004, lng: -4.4961, area: 7.3, crop: "Pomme de terre", reserveHydrique: 85, degresJour: 1000, texture: "Limon", integrations: ["DeciTrait"], shape: { type: "rectangle", width: 190, height: 145 } },
  { id: 18, orgId: 2, name: "Champ 3", lat: 48.3804, lng: -4.4761, area: 4.1, crop: "Artichaut", reserveHydrique: 65, degresJour: 1150, texture: "Sable", shape: { type: "polygon", points: [[0,0], [80,0], [100,40], [60,80], [0,80]] } },
  { id: 19, orgId: 2, name: "Champ 4", lat: 48.4104, lng: -4.5061, area: 12.0, crop: "Blé dur", reserveHydrique: 75, degresJour: 1250, texture: "Argile", shape: { type: "rectangle", width: 300, height: 200 } },
  // ── Exploitation Normande (orgId:3) ───────────────────────────────────────
  { id: 20, orgId: 3, name: "Terrain Nord", lat: 49.1829, lng: -0.3707, area: 6.7, crop: "Lin", reserveHydrique: 55, degresJour: 1300, texture: "Limon", integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "polygon", points: [[0,0],[123,0],[42,90],[36,47]] } },
  { id: 21, orgId: 3, name: "Terrain Sud", lat: 49.1929, lng: -0.3807, area: 8.2, crop: "Betterave sucrière", reserveHydrique: 90, degresJour: 1100, texture: "Argile", shape: { type: "rectangle", width: 160, height: 130 } },
  // ── Agriculteurs de la Manche (orgId:4) ───────────────────────────────────
  { id: 22, orgId: 4, name: "Parcelle Manche 1", lat: 49.1156, lng: -1.0828, area: 4.5, crop: "Avoine", reserveHydrique: 60, degresJour: 1050, texture: "Sable", integrations: ["IRRÉ-LIS Multi-Cultures"], shape: { type: "polygon", points: [[0,0],[140,0],[120,80],[20,80]] } },
  { id: 23, orgId: 4, name: "Parcelle Manche 2", lat: 49.1256, lng: -1.0928, area: 9.8, crop: "Tournesol", reserveHydrique: 70, degresJour: 1200, texture: "Limon", shape: { type: "rectangle", width: 200, height: 150 } },
  // ── Ferme Côtière (orgId:5) ───────────────────────────────────────────────
  { id: 24, orgId: 5, name: "Côte Malouine", lat: 48.6493, lng: -2.0257, area: 3.9, crop: "Légumes bio", reserveHydrique: 80, degresJour: 1000, texture: "Argile", integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 140, height: 110 } },
  { id: 25, orgId: 5, name: "Champ côtier 2", lat: 48.6593, lng: -2.0357, area: 5.5, crop: "Artichaut", reserveHydrique: 75, degresJour: 950, texture: "Sable", shape: { type: "rectangle", width: 160, height: 110 } },
  // ── Coop Bio Bretagne (orgId:6) ───────────────────────────────────────────
  { id: 26, orgId: 6, name: "Bio 1", lat: 47.6587, lng: -2.7599, area: 8.0, crop: "Chou-fleur", reserveHydrique: 85, degresJour: 1100, texture: "Limon", integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 190, height: 130 } },
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
  { id: 42, orgId: 20, name: "Centrale 1", lat: 48.0661, lng: -2.9661, area: 13.5, crop: "Orge de printemps", reserveHydrique: 75, degresJour: 1200, texture: "Argile", shape: { type: "rectangle", width: 245, height: 170 } },

  // ── Coopérative Bretonne (orgId:2) — parcelles supplémentaires ────────────
  { id: 43, orgId: 2, name: "Champ 5",          lat: 48.3804, lng: -4.5061, area: 5.2,  crop: "Artichaut",          reserveHydrique: 72, degresJour: 1000, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 170, height: 120 } },
  { id: 44, orgId: 2, name: "Champ 6",          lat: 48.4104, lng: -4.4661, area: 8.1,  crop: "Chou-fleur",         reserveHydrique: 78, degresJour: 980,  texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Multi-Cultures"], shape: { type: "rectangle", width: 210, height: 150 } },
  { id: 45, orgId: 2, name: "Champ 7",          lat: 48.4204, lng: -4.4561, area: 6.7,  crop: "Pomme de terre",     reserveHydrique: 85, degresJour: 1050, texture: "Sable",            irrigation: "Goutte à goutte",   integrations: ["Rimpro"], shape: { type: "rectangle", width: 190, height: 135 } },
  { id: 46, orgId: 2, name: "Champ 8",          lat: 48.3704, lng: -4.4961, area: 11.3, crop: "Blé tendre",         reserveHydrique: 70, degresJour: 1100, texture: "Limon argileux",   irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 240, height: 165 } },
  { id: 47, orgId: 2, name: "Champ 9",          lat: 48.3904, lng: -4.5161, area: 7.4,  crop: "Maïs",               reserveHydrique: 68, degresJour: 1150, texture: "Argile limoneuse", irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 200, height: 140 } },
  { id: 48, orgId: 2, name: "Champ 10",         lat: 48.4304, lng: -4.4761, area: 4.9,  crop: "Laitue",             reserveHydrique: 82, degresJour: 950,  texture: "Sable limoneux",  irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 155, height: 110 } },

  // ── Exploitation Normande (orgId:3) ───────────────────────────────────────
  { id: 49, orgId: 3, name: "Terrain Est",      lat: 49.1729, lng: -0.3607, area: 9.2,  crop: "Blé tendre",         reserveHydrique: 73, degresJour: 1280, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 220, height: 155 } },
  { id: 50, orgId: 3, name: "Terrain Ouest",    lat: 49.1629, lng: -0.3907, area: 6.5,  crop: "Orge",               reserveHydrique: 60, degresJour: 1200, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: ["DeciTrait"], shape: { type: "rectangle", width: 185, height: 130 } },
  { id: 51, orgId: 3, name: "Terrain Central",  lat: 49.1929, lng: -0.3507, area: 8.0,  crop: "Colza",              reserveHydrique: 65, degresJour: 1350, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: ["Rimpro"], shape: { type: "rectangle", width: 210, height: 145 } },
  { id: 52, orgId: 3, name: "Parcelle Basse",   lat: 49.1529, lng: -0.3807, area: 7.3,  crop: "Betterave sucrière", reserveHydrique: 88, degresJour: 1150, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 200, height: 140 } },
  { id: 53, orgId: 3, name: "Parcelle Haute",   lat: 49.2029, lng: -0.3607, area: 5.8,  crop: "Lin",                reserveHydrique: 55, degresJour: 1300, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 175, height: 125 } },
  { id: 54, orgId: 3, name: "Parcelle Verger",  lat: 49.1829, lng: -0.3307, area: 4.1,  crop: "Tournesol",          reserveHydrique: 72, degresJour: 1250, texture: "Sable limoneux",  irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 145, height: 105 } },

  // ── Agriculteurs de la Manche (orgId:4) ───────────────────────────────────
  { id: 55, orgId: 4, name: "Pré Manche 3",     lat: 49.1256, lng: -1.0628, area: 7.5,  crop: "Prairie permanente", reserveHydrique: 90, degresJour: 1000, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 200, height: 145 } },
  { id: 56, orgId: 4, name: "Pré Manche 4",     lat: 49.1056, lng: -1.1028, area: 5.1,  crop: "Colza",              reserveHydrique: 63, degresJour: 1080, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["DeciTrait"], shape: { type: "rectangle", width: 165, height: 120 } },
  { id: 57, orgId: 4, name: "Pré Manche 5",     lat: 49.1356, lng: -1.0528, area: 8.9,  crop: "Blé tendre",         reserveHydrique: 75, degresJour: 1120, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: ["Movida GrapeVision"], shape: { type: "rectangle", width: 215, height: 155 } },
  { id: 58, orgId: 4, name: "Pré Manche 6",     lat: 49.0956, lng: -1.0928, area: 6.3,  crop: "Orge",               reserveHydrique: 68, degresJour: 1050, texture: "Sable",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 185, height: 130 } },
  { id: 59, orgId: 4, name: "Pré Manche 7",     lat: 49.1456, lng: -1.1228, area: 10.2, crop: "Maïs",               reserveHydrique: 82, degresJour: 1200, texture: "Argile",           irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 230, height: 165 } },
  { id: 60, orgId: 4, name: "Pré Manche 8",     lat: 49.1156, lng: -1.1328, area: 4.4,  crop: "Avoine",             reserveHydrique: 58, degresJour: 1030, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 150, height: 110 } },

  // ── Ferme Côtière (orgId:5) ───────────────────────────────────────────────
  { id: 61, orgId: 5, name: "Côte Malouine 3",  lat: 48.6393, lng: -2.0157, area: 4.8,  crop: "Chou-fleur",         reserveHydrique: 78, degresJour: 980,  texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Multi-Cultures"], shape: { type: "rectangle", width: 160, height: 115 } },
  { id: 62, orgId: 5, name: "Côte Malouine 4",  lat: 48.6593, lng: -2.0457, area: 6.2,  crop: "Blé tendre",         reserveHydrique: 70, degresJour: 1050, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: ["DeciTrait"], shape: { type: "rectangle", width: 185, height: 130 } },
  { id: 63, orgId: 5, name: "Côte Malouine 5",  lat: 48.6693, lng: -2.0057, area: 3.7,  crop: "Pomme de terre",     reserveHydrique: 84, degresJour: 960,  texture: "Sable limoneux",  irrigation: "Micro aspersion",   integrations: ["Movida GrapeVision"], shape: { type: "rectangle", width: 140, height: 100 } },
  { id: 64, orgId: 5, name: "Côte Malouine 6",  lat: 48.6293, lng: -2.0357, area: 7.5,  crop: "Maïs",               reserveHydrique: 67, degresJour: 1100, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 200, height: 145 } },
  { id: 65, orgId: 5, name: "Côte Malouine 7",  lat: 48.6793, lng: -1.9957, area: 5.0,  crop: "Artichaut",          reserveHydrique: 76, degresJour: 940,  texture: "Argile",           irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 162, height: 118 } },
  { id: 66, orgId: 5, name: "Côte Malouine 8",  lat: 48.6493, lng: -1.9857, area: 8.8,  crop: "Prairie permanente", reserveHydrique: 89, degresJour: 1020, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 215, height: 155 } },

  // ── Coop Bio Bretagne (orgId:6) ───────────────────────────────────────────
  { id: 67, orgId: 6, name: "Bio 3",             lat: 47.6487, lng: -2.7499, area: 5.5,  crop: "Artichaut",          reserveHydrique: 82, degresJour: 1080, texture: "Sable",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 172, height: 122 } },
  { id: 68, orgId: 6, name: "Bio 4",             lat: 47.6787, lng: -2.7799, area: 7.8,  crop: "Pomme de terre",     reserveHydrique: 86, degresJour: 1020, texture: "Argile",           irrigation: "Goutte à goutte",   integrations: ["Rimpro"], shape: { type: "rectangle", width: 205, height: 145 } },
  { id: 69, orgId: 6, name: "Bio 5",             lat: 47.6387, lng: -2.7699, area: 4.1,  crop: "Maïs",               reserveHydrique: 72, degresJour: 1150, texture: "Limon argileux",   irrigation: "Pivot",             integrations: ["Movida GrapeVision"], shape: { type: "rectangle", width: 148, height: 107 } },
  { id: 70, orgId: 6, name: "Bio 6",             lat: 47.6887, lng: -2.7599, area: 9.3,  crop: "Blé tendre",         reserveHydrique: 68, degresJour: 1100, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 220, height: 158 } },
  { id: 71, orgId: 6, name: "Bio 7",             lat: 47.6587, lng: -2.7399, area: 6.4,  crop: "Haricot",            reserveHydrique: 80, degresJour: 1070, texture: "Sable limoneux",  irrigation: "Micro aspersion",   integrations: [], shape: { type: "rectangle", width: 185, height: 132 } },
  { id: 72, orgId: 6, name: "Bio 8",             lat: 47.6687, lng: -2.7899, area: 5.2,  crop: "Laitue",             reserveHydrique: 88, degresJour: 990,  texture: "Argile limoneuse", irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 165, height: 118 } },

  // ── Exploitation du Calvados (orgId:7) ────────────────────────────────────
  { id: 73, orgId: 7, name: "Calvados 2",        lat: 49.1369, lng: 0.2406,  area: 8.5,  crop: "Blé tendre",         reserveHydrique: 71, degresJour: 1180, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Multi-Cultures"], shape: { type: "rectangle", width: 210, height: 153 } },
  { id: 74, orgId: 7, name: "Calvados 3",        lat: 49.1569, lng: 0.2206,  area: 6.2,  crop: "Orge",               reserveHydrique: 63, degresJour: 1140, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: ["DeciTrait"], shape: { type: "rectangle", width: 183, height: 130 } },
  { id: 75, orgId: 7, name: "Calvados 4",        lat: 49.1469, lng: 0.2506,  area: 9.8,  crop: "Colza",              reserveHydrique: 67, degresJour: 1200, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: ["Rimpro"], shape: { type: "rectangle", width: 225, height: 160 } },
  { id: 76, orgId: 7, name: "Calvados 5",        lat: 49.1669, lng: 0.2106,  area: 5.3,  crop: "Betterave sucrière", reserveHydrique: 86, degresJour: 1120, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 168, height: 120 } },
  { id: 77, orgId: 7, name: "Calvados 6",        lat: 49.1269, lng: 0.2606,  area: 11.1, crop: "Lin",                reserveHydrique: 56, degresJour: 1280, texture: "Sable",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 238, height: 175 } },
  { id: 78, orgId: 7, name: "Calvados 7",        lat: 49.1769, lng: 0.2006,  area: 4.7,  crop: "Pois de printemps",  reserveHydrique: 78, degresJour: 1060, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 157, height: 112 } },

  // ── Ferme de l'Orne (orgId:8) ─────────────────────────────────────────────
  { id: 79, orgId: 8, name: "Orne 3",            lat: 48.4229, lng: 0.0813,  area: 7.8,  crop: "Blé tendre",         reserveHydrique: 74, degresJour: 1230, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 202, height: 144 } },
  { id: 80, orgId: 8, name: "Orne 4",            lat: 48.4429, lng: 0.1113,  area: 5.9,  crop: "Orge",               reserveHydrique: 66, degresJour: 1190, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 178, height: 127 } },
  { id: 81, orgId: 8, name: "Orne 5",            lat: 48.4529, lng: 0.0713,  area: 9.4,  crop: "Colza",              reserveHydrique: 61, degresJour: 1260, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 221, height: 158 } },
  { id: 82, orgId: 8, name: "Orne 6",            lat: 48.4129, lng: 0.1013,  area: 6.6,  crop: "Avoine",             reserveHydrique: 70, degresJour: 1150, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 188, height: 135 } },
  { id: 83, orgId: 8, name: "Orne 7",            lat: 48.4629, lng: 0.0913,  area: 8.1,  crop: "Triticale",          reserveHydrique: 76, degresJour: 1200, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 207, height: 148 } },
  { id: 84, orgId: 8, name: "Orne 8",            lat: 48.4329, lng: 0.1213,  area: 4.3,  crop: "Seigle",             reserveHydrique: 68, degresJour: 1220, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 150, height: 107 } },

  // ── Agriculteurs Finistériens (orgId:9) ───────────────────────────────────
  { id: 85, orgId: 9, name: "Finistère 2",       lat: 48.0075, lng: -4.0879, area: 8.7,  crop: "Artichaut",          reserveHydrique: 79, degresJour: 1010, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 213, height: 152 } },
  { id: 86, orgId: 9, name: "Finistère 3",       lat: 47.9875, lng: -4.1079, area: 6.3,  crop: "Chou-fleur",         reserveHydrique: 83, degresJour: 980,  texture: "Argile",           irrigation: "Goutte à goutte",   integrations: ["Limacapt"], shape: { type: "rectangle", width: 184, height: 132 } },
  { id: 87, orgId: 9, name: "Finistère 4",       lat: 47.9975, lng: -4.0779, area: 5.1,  crop: "Pomme de terre",     reserveHydrique: 87, degresJour: 960,  texture: "Sable limoneux",  irrigation: "Micro aspersion",   integrations: [], shape: { type: "rectangle", width: 164, height: 118 } },
  { id: 88, orgId: 9, name: "Finistère 5",       lat: 48.0175, lng: -4.1179, area: 10.4, crop: "Blé tendre",         reserveHydrique: 72, degresJour: 1050, texture: "Limon argileux",   irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 232, height: 170 } },
  { id: 89, orgId: 9, name: "Finistère 6",       lat: 47.9775, lng: -4.0979, area: 7.2,  crop: "Maïs",               reserveHydrique: 66, degresJour: 1100, texture: "Limon",            irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 196, height: 140 } },
  { id: 90, orgId: 9, name: "Finistère 7",       lat: 48.0075, lng: -4.0579, area: 4.6,  crop: "Haricot",            reserveHydrique: 81, degresJour: 1020, texture: "Sable",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 155, height: 112 } },

  // ── Coopérative Normande (orgId:10) ───────────────────────────────────────
  { id: 91,  orgId: 10, name: "Normande 2",      lat: 49.4531, lng: 1.0893,  area: 11.2, crop: "Blé tendre",         reserveHydrique: 73, degresJour: 1150, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: ["IRRÉ-LIS Mono-Culture"], shape: { type: "rectangle", width: 240, height: 175 } },
  { id: 92,  orgId: 10, name: "Normande 3",      lat: 49.4331, lng: 1.1093,  area: 7.5,  crop: "Betterave sucrière", reserveHydrique: 87, degresJour: 1100, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 200, height: 143 } },
  { id: 93,  orgId: 10, name: "Normande 4",      lat: 49.4631, lng: 1.0793,  area: 6.1,  crop: "Colza",              reserveHydrique: 64, degresJour: 1200, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 181, height: 128 } },
  { id: 94,  orgId: 10, name: "Normande 5",      lat: 49.4231, lng: 1.1193,  area: 8.8,  crop: "Lin",                reserveHydrique: 57, degresJour: 1250, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 215, height: 152 } },
  { id: 95,  orgId: 10, name: "Normande 6",      lat: 49.4731, lng: 1.0693,  area: 5.4,  crop: "Orge",               reserveHydrique: 69, degresJour: 1180, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 170, height: 122 } },
  { id: 96,  orgId: 10, name: "Normande 7",      lat: 49.4431, lng: 1.1393,  area: 9.6,  crop: "Luzerne",            reserveHydrique: 84, degresJour: 1080, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 223, height: 162 } },

  // ── Ferme des Côtes d'Armor (orgId:11) ────────────────────────────────────
  { id: 97,  orgId: 11, name: "Armor 2",         lat: 48.5042, lng: -2.7758, area: 7.3,  crop: "Blé tendre",         reserveHydrique: 71, degresJour: 1080, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 197, height: 140 } },
  { id: 98,  orgId: 11, name: "Armor 3",         lat: 48.5242, lng: -2.7558, area: 5.6,  crop: "Artichaut",          reserveHydrique: 80, degresJour: 1030, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 174, height: 124 } },
  { id: 99,  orgId: 11, name: "Armor 4",         lat: 48.5342, lng: -2.7858, area: 9.1,  crop: "Chou-fleur",         reserveHydrique: 84, degresJour: 990,  texture: "Limon argileux",   irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 219, height: 158 } },
  { id: 100, orgId: 11, name: "Armor 5",         lat: 48.4942, lng: -2.7658, area: 4.8,  crop: "Pomme de terre",     reserveHydrique: 86, degresJour: 960,  texture: "Sable limoneux",  irrigation: "Micro aspersion",   integrations: [], shape: { type: "rectangle", width: 158, height: 113 } },
  { id: 101, orgId: 11, name: "Armor 6",         lat: 48.5142, lng: -2.8058, area: 8.4,  crop: "Maïs",               reserveHydrique: 68, degresJour: 1120, texture: "Limon",            irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 210, height: 151 } },
  { id: 102, orgId: 11, name: "Armor 7",         lat: 48.5442, lng: -2.7458, area: 6.0,  crop: "Colza",              reserveHydrique: 62, degresJour: 1150, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 180, height: 129 } },

  // ── Exploitation de l'Ille-et-Vilaine (orgId:12) ──────────────────────────
  { id: 103, orgId: 12, name: "Ille 2",          lat: 48.1273, lng: -1.6678, area: 7.1,  crop: "Blé tendre",         reserveHydrique: 74, degresJour: 1160, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 194, height: 138 } },
  { id: 104, orgId: 12, name: "Ille 3",          lat: 48.1073, lng: -1.6878, area: 5.3,  crop: "Orge",               reserveHydrique: 67, degresJour: 1110, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 169, height: 121 } },
  { id: 105, orgId: 12, name: "Ille 4",          lat: 48.1373, lng: -1.6578, area: 8.9,  crop: "Colza",              reserveHydrique: 62, degresJour: 1190, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 216, height: 153 } },
  { id: 106, orgId: 12, name: "Ille 5",          lat: 48.0973, lng: -1.6778, area: 6.4,  crop: "Maïs",               reserveHydrique: 79, degresJour: 1220, texture: "Limon",            irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 185, height: 133 } },
  { id: 107, orgId: 12, name: "Ille 6",          lat: 48.1473, lng: -1.6978, area: 4.5,  crop: "Prairie permanente", reserveHydrique: 88, degresJour: 1050, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 153, height: 110 } },
  { id: 108, orgId: 12, name: "Ille 7",          lat: 48.1173, lng: -1.6378, area: 10.6, crop: "Betterave sucrière", reserveHydrique: 83, degresJour: 1170, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 234, height: 172 } },

  // ── Agriculteurs du Morbihan (orgId:13) ───────────────────────────────────
  { id: 109, orgId: 13, name: "Morbihan 2",      lat: 47.7383, lng: -3.3802, area: 6.8,  crop: "Blé tendre",         reserveHydrique: 73, degresJour: 1050, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 190, height: 136 } },
  { id: 110, orgId: 13, name: "Morbihan 3",      lat: 47.7583, lng: -3.3602, area: 5.2,  crop: "Artichaut",          reserveHydrique: 80, degresJour: 1020, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 167, height: 120 } },
  { id: 111, orgId: 13, name: "Morbihan 4",      lat: 47.7283, lng: -3.3702, area: 9.7,  crop: "Maïs",               reserveHydrique: 67, degresJour: 1100, texture: "Limon argileux",   irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 224, height: 162 } },
  { id: 112, orgId: 13, name: "Morbihan 5",      lat: 47.7683, lng: -3.3902, area: 7.4,  crop: "Chou-fleur",         reserveHydrique: 82, degresJour: 990,  texture: "Sable limoneux",  irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 198, height: 143 } },
  { id: 113, orgId: 13, name: "Morbihan 6",      lat: 47.7483, lng: -3.3502, area: 4.9,  crop: "Pomme de terre",     reserveHydrique: 86, degresJour: 970,  texture: "Argile limoneuse", irrigation: "Micro aspersion",   integrations: [], shape: { type: "rectangle", width: 161, height: 115 } },
  { id: 114, orgId: 13, name: "Morbihan 7",      lat: 47.7183, lng: -3.3802, area: 8.3,  crop: "Prairie permanente", reserveHydrique: 91, degresJour: 1000, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 209, height: 151 } },

  // ── Ferme Normande Bio (orgId:14) ─────────────────────────────────────────
  { id: 115, orgId: 14, name: "Bio Norm 2",      lat: 49.0341, lng: 1.1608,  area: 7.2,  crop: "Colza",              reserveHydrique: 63, degresJour: 1250, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 195, height: 139 } },
  { id: 116, orgId: 14, name: "Bio Norm 3",      lat: 49.0141, lng: 1.1408,  area: 5.8,  crop: "Blé tendre",         reserveHydrique: 72, degresJour: 1200, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 176, height: 126 } },
  { id: 117, orgId: 14, name: "Bio Norm 4",      lat: 49.0441, lng: 1.1308,  area: 9.5,  crop: "Betterave sucrière", reserveHydrique: 84, degresJour: 1150, texture: "Limon argileux",   irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 222, height: 160 } },
  { id: 118, orgId: 14, name: "Bio Norm 5",      lat: 49.0041, lng: 1.1708,  area: 4.4,  crop: "Lin",                reserveHydrique: 56, degresJour: 1300, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 152, height: 109 } },
  { id: 119, orgId: 14, name: "Bio Norm 6",      lat: 49.0241, lng: 1.1808,  area: 6.7,  crop: "Orge",               reserveHydrique: 69, degresJour: 1220, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 189, height: 135 } },

  // ── Coopérative Bretonne Sud (orgId:15) ───────────────────────────────────
  { id: 120, orgId: 15, name: "Sud 2",           lat: 47.2084, lng: -1.5636, area: 8.6,  crop: "Blé tendre",         reserveHydrique: 71, degresJour: 1200, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 212, height: 153 } },
  { id: 121, orgId: 15, name: "Sud 3",           lat: 47.2284, lng: -1.5436, area: 6.3,  crop: "Maïs",               reserveHydrique: 76, degresJour: 1250, texture: "Argile",           irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 183, height: 131 } },
  { id: 122, orgId: 15, name: "Sud 4",           lat: 47.1984, lng: -1.5536, area: 5.1,  crop: "Tournesol",          reserveHydrique: 62, degresJour: 1300, texture: "Limon argileux",   irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 165, height: 118 } },
  { id: 123, orgId: 15, name: "Sud 5",           lat: 47.2384, lng: -1.5736, area: 9.9,  crop: "Colza",              reserveHydrique: 68, degresJour: 1280, texture: "Sable limoneux",  irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 227, height: 165 } },
  { id: 124, orgId: 15, name: "Sud 6",           lat: 47.2184, lng: -1.5836, area: 7.4,  crop: "Orge",               reserveHydrique: 74, degresJour: 1220, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 197, height: 142 } },

  // ── Exploitation de la Seine-Maritime (orgId:16) ──────────────────────────
  { id: 125, orgId: 16, name: "Seine 2",         lat: 49.9325, lng: 1.0677,  area: 6.9,  crop: "Lin",                reserveHydrique: 57, degresJour: 1150, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 191, height: 137 } },
  { id: 126, orgId: 16, name: "Seine 3",         lat: 49.9125, lng: 1.0877,  area: 10.3, crop: "Blé tendre",         reserveHydrique: 72, degresJour: 1200, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 231, height: 169 } },
  { id: 127, orgId: 16, name: "Seine 4",         lat: 49.9425, lng: 1.0577,  area: 5.7,  crop: "Betterave sucrière", reserveHydrique: 85, degresJour: 1100, texture: "Limon argileux",   irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 175, height: 125 } },
  { id: 128, orgId: 16, name: "Seine 5",         lat: 49.9025, lng: 1.0977,  area: 8.1,  crop: "Colza",              reserveHydrique: 64, degresJour: 1250, texture: "Sable limoneux",  irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 207, height: 148 } },
  { id: 129, orgId: 16, name: "Seine 6",         lat: 49.9225, lng: 1.1177,  area: 4.6,  crop: "Orge",               reserveHydrique: 70, degresJour: 1180, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 155, height: 111 } },

  // ── Ferme Côtière Nord (orgId:17) ─────────────────────────────────────────
  { id: 130, orgId: 17, name: "Nord 2",          lat: 48.4449, lng: -2.0603, area: 7.6,  crop: "Blé tendre",         reserveHydrique: 72, degresJour: 1080, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 199, height: 143 } },
  { id: 131, orgId: 17, name: "Nord 3",          lat: 48.4649, lng: -2.0403, area: 5.3,  crop: "Chou",               reserveHydrique: 79, degresJour: 1030, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 168, height: 121 } },
  { id: 132, orgId: 17, name: "Nord 4",          lat: 48.4349, lng: -2.0703, area: 9.2,  crop: "Artichaut",          reserveHydrique: 83, degresJour: 990,  texture: "Limon argileux",   irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 218, height: 157 } },
  { id: 133, orgId: 17, name: "Nord 5",          lat: 48.4749, lng: -2.0303, area: 6.8,  crop: "Maïs",               reserveHydrique: 68, degresJour: 1120, texture: "Limon",            irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 190, height: 136 } },
  { id: 134, orgId: 17, name: "Nord 6",          lat: 48.4549, lng: -2.0103, area: 4.1,  crop: "Prairie permanente", reserveHydrique: 88, degresJour: 1050, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 147, height: 106 } },

  // ── Agriculteurs de l'Eure (orgId:18) ────────────────────────────────────
  { id: 135, orgId: 18, name: "Eure 2",          lat: 49.0789, lng: 0.6086,  area: 7.4,  crop: "Blé tendre",         reserveHydrique: 73, degresJour: 1180, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 197, height: 141 } },
  { id: 136, orgId: 18, name: "Eure 3",          lat: 49.0989, lng: 0.5886,  area: 5.9,  crop: "Orge",               reserveHydrique: 66, degresJour: 1140, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 177, height: 127 } },
  { id: 137, orgId: 18, name: "Eure 4",          lat: 49.0689, lng: 0.6186,  area: 9.1,  crop: "Colza",              reserveHydrique: 61, degresJour: 1220, texture: "Limon argileux",   irrigation: "Enrouleur",         integrations: [], shape: { type: "rectangle", width: 218, height: 157 } },
  { id: 138, orgId: 18, name: "Eure 5",          lat: 49.1089, lng: 0.5786,  area: 6.5,  crop: "Betterave sucrière", reserveHydrique: 83, degresJour: 1160, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 186, height: 133 } },
  { id: 139, orgId: 18, name: "Eure 6",          lat: 49.0889, lng: 0.6386,  area: 4.8,  crop: "Lin",                reserveHydrique: 57, degresJour: 1260, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 159, height: 114 } },

  // ── Coop Bio Normandie (orgId:19) ─────────────────────────────────────────
  { id: 140, orgId: 19, name: "Bio Norm Cal 2",  lat: 49.2865, lng: -0.6925, area: 6.7,  crop: "Blé tendre",         reserveHydrique: 71, degresJour: 1150, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 189, height: 135 } },
  { id: 141, orgId: 19, name: "Bio Norm Cal 3",  lat: 49.2665, lng: -0.7125, area: 5.4,  crop: "Orge",               reserveHydrique: 64, degresJour: 1100, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 171, height: 122 } },
  { id: 142, orgId: 19, name: "Bio Norm Cal 4",  lat: 49.2965, lng: -0.6825, area: 8.8,  crop: "Laitue",             reserveHydrique: 88, degresJour: 1030, texture: "Sable limoneux",  irrigation: "Micro aspersion",   integrations: [], shape: { type: "rectangle", width: 214, height: 154 } },
  { id: 143, orgId: 19, name: "Bio Norm Cal 5",  lat: 49.2565, lng: -0.7225, area: 4.9,  crop: "Carotte",            reserveHydrique: 82, degresJour: 1060, texture: "Limon argileux",   irrigation: "Goutte à goutte",   integrations: [], shape: { type: "rectangle", width: 161, height: 115 } },
  { id: 144, orgId: 19, name: "Bio Norm Cal 6",  lat: 49.2765, lng: -0.7325, area: 7.3,  crop: "Colza",              reserveHydrique: 66, degresJour: 1170, texture: "Argile limoneuse", irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 195, height: 140 } },

  // ── Ferme Bretonne Centrale (orgId:20) ────────────────────────────────────
  { id: 145, orgId: 20, name: "Centrale 2",      lat: 48.0561, lng: -2.9761, area: 7.8,  crop: "Blé tendre",         reserveHydrique: 73, degresJour: 1180, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 202, height: 144 } },
  { id: 146, orgId: 20, name: "Centrale 3",      lat: 48.0761, lng: -2.9561, area: 5.5,  crop: "Orge",               reserveHydrique: 67, degresJour: 1140, texture: "Argile",           irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 172, height: 123 } },
  { id: 147, orgId: 20, name: "Centrale 4",      lat: 48.0461, lng: -2.9861, area: 9.4,  crop: "Maïs",               reserveHydrique: 78, degresJour: 1200, texture: "Limon argileux",   irrigation: "Pivot",             integrations: [], shape: { type: "rectangle", width: 221, height: 160 } },
  { id: 148, orgId: 20, name: "Centrale 5",      lat: 48.0861, lng: -2.9461, area: 4.3,  crop: "Colza",              reserveHydrique: 63, degresJour: 1220, texture: "Sable limoneux",  irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 149, height: 107 } },
  { id: 149, orgId: 20, name: "Centrale 6",      lat: 48.0661, lng: -3.0061, area: 6.9,  crop: "Prairie permanente", reserveHydrique: 89, degresJour: 1050, texture: "Limon",            irrigation: "Pas d'irrigation",  integrations: [], shape: { type: "rectangle", width: 191, height: 137 } }
]

plots.forEach(p => {
  if (!p.latlngs) p.latlngs = shapeToLatlngs(p)
})
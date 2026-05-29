// Metric representative colors — extracted from Figma "Colors" design system
// Middle stop of each metric's color ramp

export const MC = {
  pluie:              '#2E75B6',  // RR
  humidite:           '#5B12A4',  // U
  vent:               '#616161',  // FF (mid)
  vent_rafales:       '#525252',  // FF (dark-mid)
  vent_direction:     '#424242',  // FF (darker)
  vent_direction_raf: '#343232',  // FF (darkest)
  temperature:        '#FBAF05',  // T
  temp_seche:         '#23B19B',  // T_DRY
  temp_humide:        '#5E88EC',  // T_WET
  temp_rosee:         '#72B0D8',  // T_DEW
  humectation:        '#00887E',  // LW
  etp:                '#7DBDD7',  // ETP
  rayonnement:        '#CBCB0B',  // SSI
  par:                '#4CBB17',  // PAR
  irrigations:        '#FF8C00',  // IRR
  teneur_eau:         '#ED9A2C',  // UCAPA
  pothydr:            '#A6C157',  // HPOY
  temp_sol:           '#795548',  // T_SOIL
  conductivite:       '#2BCDDE',  // EC
  dpv:                '#5E88EC',  // ~T_WET
  temperature_min:    '#FEE7B4',  // T (light = cold)
  temperature_gel:    '#FEE7B4',  // T (light = cold)
}

// Ramp stops per metric: [dark (max), mid, light (min)]
export const MR = {
  pluie:       ['#0B3A64', '#2E75B6', '#C1E1FF'],
  humidite:    ['#29084A', '#5B12A4', '#E3C7FF'],
  vent:        ['#343232', '#616161', '#E1E1E1'],
  temperature: ['#7D5702', '#FBAF05', '#FEE7B4'],
  rayonnement: ['#838307', '#CBCB0B', '#FBFBB6'],
  humectation: ['#003D39', '#00887E', '#B2FFF9'],
  etp:         ['#44A0C5', '#7DBDD7', '#D8EBF3'],
  par:         ['#30760F', '#4CBB17', '#BEF4A4'],
  irrigations: ['#B26200', '#FF8C00', '#FFDFB8'],
  teneur_eau:  ['#BC7210', '#ED9A2C', '#F7D2A1'],
  pothydr:     ['#7D9537', '#A6C157', '#E2EAC7'],
  temp_sol:    ['#484646', '#795548', '#D9C6BF'],
  conductivite:['#16828D', '#2BCDDE', '#BDEFF5'],
}

// Soil horizon colors by depth (cm)
export const HC = {
  5:   '#9404F8',
  10:  '#105200',
  15:  '#8BBF0D',
  20:  '#8C5E82',
  25:  '#E4B613',
  30:  '#46DA82',
  35:  '#0E86DE',
  40:  '#949494',
  45:  '#DF0000',
  50:  '#870021',
  55:  '#0A1DC6',
  60:  '#F608C2',
  65:  '#848C20',
  70:  '#FECC1A',
  75:  '#000000',
  80:  '#00B1C9',
  85:  '#6A4600',
  90:  '#B14C19',
}

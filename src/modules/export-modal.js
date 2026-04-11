export function openExportModal({ title, contextLabel, items = [], type = 'sensor', activeItem = null, availableMeasures = [], defaultFormat = 'csv' }) {
  const existing = document.getElementById('export-modal')
  if (existing) existing.remove()

  const modal = document.createElement('div')
  modal.id = 'export-modal'
  modal.className = 'modal'
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${title}</h2>
      <p>Un email contenant les liens de téléchargement sera envoyé à votre adresse.</p>
      <div class="export-section">
        <label>Date de début</label>
        <input type="date" id="export-start" />
      </div>
      <div class="export-section">
        <label>Date de fin</label>
        <input type="date" id="export-end" />
      </div>
      <div class="export-section pills-row">
        <span>Pas de temps</span>
        <button type="button" class="pill active" data-step="1h">1h</button>
        <button type="button" class="pill" data-step="6h">6h</button>
        <button type="button" class="pill" data-step="1d">1j</button>
      </div>
      <div class="export-section">
        <span>Mesures</span>
        <div id="measure-options"></div>
      </div>
      ${items.length > 0 ? `
        <div class="export-section">
          <span>Sélection</span>
          <div id="export-items"></div>
        </div>
      ` : ''}
      <div class="export-section">
        <span>Format</span>
        <label><input type="radio" name="export-format" value="csv" checked /> CSV</label>
        <label><input type="radio" name="export-format" value="xlsx" /> XLSX</label>
      </div>
      <button id="export-run">Exporter</button>
      <button id="export-cancel">Annuler</button>
    </div>
  `
  document.body.appendChild(modal)

  const today = new Date().toISOString().slice(0, 10)
  const startInput = modal.querySelector('#export-start')
  const endInput = modal.querySelector('#export-end')
  endInput.value = today
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 7)
  startInput.value = startDate.toISOString().slice(0, 10)

  const measureContainer = modal.querySelector('#measure-options')
  availableMeasures.forEach(measure => {
    const label = document.createElement('label')
    label.innerHTML = `<input type="checkbox" value="${measure.id}" checked /> ${measure.label}`
    measureContainer.appendChild(label)
  })

  if (items.length > 0) {
    const itemsContainer = modal.querySelector('#export-items')
    items.forEach(item => {
      const label = document.createElement('label')
      label.innerHTML = `<input type="checkbox" value="${item.id}" ${item.selected ? 'checked' : ''} /> ${item.label}`
      itemsContainer.appendChild(label)
    })
  }

  modal.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      modal.querySelectorAll('.pill').forEach(p => p.classList.remove('active'))
      pill.classList.add('active')
    })
  })

  modal.querySelector('#export-run').addEventListener('click', () => {
    const step = modal.querySelector('.pill.active').dataset.step
    const measures = Array.from(measureContainer.querySelectorAll('input:checked')).map(input => input.value)
    const format = modal.querySelector('input[name="export-format"]:checked').value
    const start = startInput.value
    const end = endInput.value
    const itemIds = items.length > 0 ? Array.from(modal.querySelectorAll('#export-items input:checked')).map(input => input.value) : []

    const selection = items.length > 0 ? items.filter(item => itemIds.includes(item.id.toString())) : (activeItem ? [activeItem] : [])
    const data = generateExportData({ contextLabel, type, selection, measures, start, end, step })
    downloadData(data.csv, `${contextLabel.toLowerCase().replace(/\s+/g, '-')}.${format === 'xlsx' ? 'xlsx' : 'csv'}`)
    modal.remove()
  })

  modal.querySelector('#export-cancel').addEventListener('click', () => modal.remove())
}

function generateExportData({ contextLabel, type, selection, measures, start, end, step }) {
  const rows = []
  const headers = ['Date', 'Élément', ...measures.map(m => m.replace(/_/g, ' '))]
  rows.push(headers.join(','))

  const startDate = new Date(start)
  const endDate = new Date(end)
  let current = new Date(startDate)
  const stepHours = step === '1h' ? 1 : step === '6h' ? 6 : 24

  while (current <= endDate) {
    const dateLabel = current.toISOString().slice(0, 19).replace('T', ' ')
    const itemList = selection.length > 0 ? selection : [{ id: 'global', label: contextLabel }]
    itemList.forEach(item => {
      const values = measures.map(measure => generateValue(measure))
      rows.push([dateLabel, item.label, ...values].join(','))
    })
    current.setHours(current.getHours() + stepHours)
  }

  return { csv: rows.join('\n') }
}

function generateValue(measure) {
  if (measure.includes('pluie')) return `${(Math.random() * 5).toFixed(1)} mm`
  if (measure.includes('temp')) return `${(Math.random() * 15 + 8).toFixed(1)} °C`
  if (measure.includes('humidité')) return `${(Math.random() * 40 + 40).toFixed(0)} %`
  if (measure.includes('vent')) return `${(Math.random() * 20 + 5).toFixed(0)} km/h`
  if (measure.includes('etp')) return `${(Math.random() * 4 + 1).toFixed(1)} mm`
  if (measure.includes('rayonnement')) return `${(Math.random() * 400 + 100).toFixed(0)} W/m²`
  if (measure.includes('tensiométrie')) return `${(Math.random() * 180 + 10).toFixed(0)} kPa`
  return Math.random().toFixed(2)
}

function downloadData(content, filename) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

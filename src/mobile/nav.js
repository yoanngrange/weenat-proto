// Push/pop navigation for detail screens

const stack = []

export function pushDetail(html) {
  const phoneScreen = document.getElementById('phone-screen')
  const layer = document.createElement('div')
  layer.className = 'm-detail-layer'
  layer.innerHTML = html
  phoneScreen.appendChild(layer)
  requestAnimationFrame(() => layer.classList.add('m-detail-layer--in'))
  stack.push(layer)
  return layer
}

export function popDetail() {
  const layer = stack.pop()
  if (!layer) return
  layer.classList.remove('m-detail-layer--in')
  setTimeout(() => layer.remove(), 300)
}

export function stackDepth() { return stack.length }

window.addEventListener('m-tab-change', () => {
  stack.forEach(layer => layer.remove())
  stack.length = 0
})

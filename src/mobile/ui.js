// Shared UI utilities for mobile screens

export function showToast(msg) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-toast')?.remove()
  const t = document.createElement('div')
  t.className = 'm-toast'; t.textContent = msg
  screen.appendChild(t)
  requestAnimationFrame(() => t.classList.add('m-toast--show'))
  setTimeout(() => { t.classList.remove('m-toast--show'); setTimeout(() => t.remove(), 300) }, 2200)
}

export function showSheet({ title, body, doneLabel = 'Fermer', onDone } = {}) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-sheet-overlay')?.remove()
  const overlay = document.createElement('div')
  overlay.className = 'm-sheet-overlay'
  overlay.innerHTML = `
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${title}</span>
        <button class="m-sheet-done">${doneLabel}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`
  overlay.querySelector('.m-sheet-body').appendChild(
    typeof body === 'string' ? Object.assign(document.createElement('div'), { innerHTML: body }) : body
  )
  screen.appendChild(overlay)
  requestAnimationFrame(() => overlay.classList.add('m-sheet-overlay--show'))
  const close = () => {
    overlay.classList.remove('m-sheet-overlay--show')
    setTimeout(() => overlay.remove(), 280)
  }
  overlay.querySelector('.m-sheet-cancel').addEventListener('click', close)
  overlay.querySelector('.m-sheet-done').addEventListener('click', () => { onDone?.(); close() })
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
  return overlay
}

export function showConfirmSheet({ title, message = '', confirmLabel = 'Confirmer', confirmColor = '#ff3b30', onConfirm }) {
  const screen = document.getElementById('phone-screen')
  document.querySelector('.m-sheet-overlay')?.remove()
  const overlay = document.createElement('div')
  overlay.className = 'm-sheet-overlay'
  overlay.innerHTML = `
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd" style="justify-content:center;padding:12px 16px 8px">
        <span class="m-sheet-title">${title}</span>
      </div>
      <div class="m-sheet-body" style="padding:4px 16px 32px">
        ${message ? `<p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px;text-align:center">${message}</p>` : ''}
        <button id="sc-confirm" style="width:100%;padding:14px;background:${confirmColor};color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:8px">${confirmLabel}</button>
        <button id="sc-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
      </div>
    </div>`
  screen.appendChild(overlay)
  requestAnimationFrame(() => overlay.classList.add('m-sheet-overlay--show'))
  const close = () => {
    overlay.classList.remove('m-sheet-overlay--show')
    setTimeout(() => overlay.remove(), 280)
  }
  overlay.querySelector('#sc-cancel').addEventListener('click', close)
  overlay.querySelector('#sc-confirm').addEventListener('click', () => { close(); setTimeout(() => onConfirm?.(), 50) })
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
}

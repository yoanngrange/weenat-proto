// Helpers communs aux scripts de screencast : curseur visuel + animation de clic
export const pause = ms => new Promise(r => setTimeout(r, ms))

export function inDays(n) {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10)
}

// Injecte un curseur factice + un effet "ripple" au clic, visibles dans la vidéo
export async function injectCursor(page) {
  await page.addInitScript(() => {
    const setup = () => {
      const cursor = document.createElement('div')
      cursor.id = '__demo-cursor'
      cursor.style.cssText = `
        position: fixed; width: 22px; height: 22px; border-radius: 50%;
        background: rgba(28,28,30,.35); border: 2px solid #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,.35);
        pointer-events: none; z-index: 999999;
        left: -50px; top: -50px;
        transform: translate(-50%, -50%) scale(1);
        transition: left .6s cubic-bezier(.4,0,.2,1), top .6s cubic-bezier(.4,0,.2,1), transform .15s ease;
      `
      document.body.appendChild(cursor)

      const style = document.createElement('style')
      style.textContent = `
        @keyframes __ripple {
          from { width: 10px; height: 10px; opacity: .55; }
          to   { width: 60px; height: 60px; opacity: 0; }
        }
        .__ripple {
          position: fixed; border-radius: 50%; background: rgba(1,114,164,.45);
          transform: translate(-50%, -50%); pointer-events: none; z-index: 999998;
          animation: __ripple .55s ease-out forwards;
        }
      `
      document.head.appendChild(style)

      window.__moveCursor = (x, y) => {
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
      }
      window.__clickRipple = (x, y) => {
        const r = document.createElement('div')
        r.className = '__ripple'
        r.style.left = x + 'px'
        r.style.top = y + 'px'
        document.body.appendChild(r)
        setTimeout(() => r.remove(), 600)
        cursor.style.transform = 'translate(-50%,-50%) scale(.75)'
        setTimeout(() => { cursor.style.transform = 'translate(-50%,-50%) scale(1)' }, 150)
      }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup)
    else setup()
  })
}

// Déplace le curseur vers l'élément, joue l'animation de clic, puis clique réellement
export async function clickAt(page, locator, {
  pauseBefore = 900,      // temps avant de commencer le déplacement
  pauseAfterMove = 700,   // temps laissé à l'animation de déplacement
  pauseAfterRipple = 400, // temps laissé à l'animation de clic
  pauseAfter = 1800,      // temps après le clic, pour observer le résultat
} = {}) {
  await locator.scrollIntoViewIfNeeded()
  await pause(pauseBefore)
  const box = await locator.boundingBox()
  const x = box.x + box.width / 2
  const y = box.y + box.height / 2
  await page.evaluate(([x, y]) => window.__moveCursor(x, y), [x, y])
  await page.mouse.move(x, y, { steps: 20 })
  await pause(pauseAfterMove)
  await page.evaluate(([x, y]) => window.__clickRipple(x, y), [x, y])
  await pause(pauseAfterRipple)
  await locator.click()
  await pause(pauseAfter)
}

// Déplace le curseur sur le champ, puis saisit le texte caractère par caractère
export async function typeAt(page, locator, text, {
  pauseBefore = 900,
  pauseAfterMove = 700,
  charDelay = 110,
  pauseAfter = 900,
  clear = false,
} = {}) {
  await locator.scrollIntoViewIfNeeded()
  await pause(pauseBefore)
  const box = await locator.boundingBox()
  const x = box.x + box.width / 2
  const y = box.y + box.height / 2
  await page.evaluate(([x, y]) => window.__moveCursor(x, y), [x, y])
  await page.mouse.move(x, y, { steps: 20 })
  await pause(pauseAfterMove)
  await page.evaluate(([x, y]) => window.__clickRipple(x, y), [x, y])
  await locator.click()
  if (clear) await locator.fill('')
  await locator.type(text, { delay: charDelay })
  await pause(pauseAfter)
}

// Remplit un champ <input type="date"> directement (sans curseur, le date-picker
// natif n'est pas rendu en mode headless), avec une animation de "focus" légère
export async function fillDateAt(page, locator, value, {
  pauseBefore = 900,
  pauseAfterMove = 700,
  pauseAfter = 1200,
} = {}) {
  await locator.scrollIntoViewIfNeeded()
  await pause(pauseBefore)
  const box = await locator.boundingBox()
  const x = box.x + box.width / 2
  const y = box.y + box.height / 2
  await page.evaluate(([x, y]) => window.__moveCursor(x, y), [x, y])
  await page.mouse.move(x, y, { steps: 20 })
  await pause(pauseAfterMove)
  await page.evaluate(([x, y]) => window.__clickRipple(x, y), [x, y])
  await locator.fill(value)
  await pause(pauseAfter)
}

// Screencast: saisie d'une irrigation depuis le widget "Irrigations" d'une parcelle
// Usage: node scripts/screencasts/irrigation-saisie.mjs
import { chromium } from 'playwright'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pause, inDays, injectCursor, clickAt, typeAt, fillDateAt } from './lib.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, 'out')

const BASE_URL = 'http://localhost:5173/weenat-proto/mobile.html?role=adherent'
const PARCEL_NAME = 'Le Marais Bas'
const QTY = '15'

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 480, height: 920 },
  recordVideo: { dir: outDir, size: { width: 480, height: 920 } },
})
const page = await context.newPage()
await injectCursor(page)

await page.goto(BASE_URL)
await page.waitForSelector('#bottom-nav')
await pause(1500)

// 1. Passer la vue Parcelles en mode liste
await clickAt(page, page.locator('#screen-parcelles .m-view-btn[data-view="liste"]'))

// 2. Ouvrir la parcelle "Le Marais Bas"
await clickAt(page, page.locator(`.m-tappable[data-plot-id]:has-text("${PARCEL_NAME}")`))

// 3. Lancer la saisie depuis le widget Irrigations
await clickAt(page, page.locator('.m-irrig-act-saisie'))

// 4. Renseigner la date (dans 2 jours)
await fillDateAt(page, page.locator('#irr-date'), inDays(2))

// 5. Renseigner la quantité (15 mm)
await typeAt(page, page.locator('#irr-qty'), QTY, { clear: true })

// 6. Enregistrer
await clickAt(page, page.locator('.irr-save-btn'), { pauseAfter: 2500 })

await context.close()
await browser.close()

console.log('Vidéo enregistrée dans', outDir)

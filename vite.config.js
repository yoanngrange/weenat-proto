import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { readdirSync } from 'fs'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const input = Object.fromEntries(
  readdirSync(__dirname)
    .filter(f => f.endsWith('.html'))
    .map(f => [f.slice(0, -5), resolve(__dirname, f)])
)

export default defineConfig({
  base: '/weenat-proto/',
  build: {
    rollupOptions: { input }
  }
})
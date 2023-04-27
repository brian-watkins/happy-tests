import { createServer } from "vite"
import { chromium } from "playwright"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

const server = await createServer({
  server: {
    port: 5959
  },
  optimizeDeps: {
    force: true
  },
  esbuild: {
    jsx: "automatic",
  },
  css: {
    postcss: {
      plugins: [
        // @ts-ignore
        tailwind,
        autoprefixer
      ]
    }
  }
})

await server.listen()

const browser = await chromium.launch({
  headless: false
})

const page = await browser.newPage()

await page.goto("http://localhost:5959/tests/index.html")


import { chromium } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

const screens = [
  { node: '34160-3830', route: '/link-insurance-v1/screen/34160-3830', width: 674, height: 1156, exportWidth: 674 },
  { node: '34227-79415', route: '/link-insurance-v1/screen/34227-79415', width: 1728, height: 1011, exportWidth: 1400 },
  { node: '34227-79234', route: '/link-insurance-v1/screen/34227-79234', width: 1728, height: 803, exportWidth: 1400 },
  { node: '34227-79155', route: '/link-insurance-v1/screen/34227-79155', width: 1728, height: 1211, exportWidth: 1400 },
  { node: '34227-79452', route: '/link-insurance-v1/screen/34227-79452', width: 490, height: 309, exportWidth: 490 },
  { node: '34227-79473', route: '/link-insurance-v1/screen/34227-79473', width: 490, height: 756, exportWidth: 490 },
  { node: '34227-79314', route: '/link-insurance-v1/screen/34227-79314', width: 1728, height: 1413, exportWidth: 1400 },
  { node: '34245-3118', route: '/link-insurance-v1/screen/34245-3118', width: 1728, height: 1076, exportWidth: 1400 },
  { node: '34227-79275', route: '/link-insurance-v1/screen/34227-79275', width: 1728, height: 1011, exportWidth: 1400 },
  { node: '34227-78641', route: '/link-insurance-v1/screen/34227-78641', width: 1728, height: 1198, exportWidth: 1400 },
  { node: '34233-2724', route: '/link-insurance-v1/screen/34233-2724', width: 1600, height: 1204, exportWidth: 1400 },
  { node: '34227-78843', route: '/link-insurance-v1/screen/34227-78843', width: 1728, height: 1088, exportWidth: 1400 },
  { node: '34227-78999', route: '/link-insurance-v1/screen/34227-78999', width: 561, height: 1062, exportWidth: 561 },
  { node: '34237-2862', route: '/link-insurance-v1/screen/34237-2862', width: 561, height: 1062, exportWidth: 561 },
  { node: '34237-3007', route: '/link-insurance-v1/screen/34237-3007', width: 561, height: 1238, exportWidth: 561 },
  { node: '34237-3169', route: '/link-insurance-v1/screen/34237-3169', width: 561, height: 972, exportWidth: 561 },
]

const BASE_URL = 'http://localhost:5173'
const OUTPUT_DIR = path.join(process.cwd(), 'docs/link-insurance-v1-compare')
const FIGMA_DIR = '/home/ubuntu/.cursor/projects/agent-repos-travefy-prototypes/uploads'

async function compareScreens() {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  for (const screen of screens) {
    console.log(`Capturing ${screen.node}...`)

    await page.setViewportSize({ width: screen.width, height: screen.height })
    
    try {
      await page.goto(`${BASE_URL}${screen.route}`, { waitUntil: 'networkidle', timeout: 10000 })
      
      await page.waitForTimeout(500)
      
      const screenshot = await page.screenshot({ fullPage: false })
      
      const buildPath = path.join(OUTPUT_DIR, `${screen.node}-build.png`)
      fs.writeFileSync(buildPath, screenshot)
      
      const figmaPath = path.join(FIGMA_DIR, screen.node, 'screenshot.png')
      if (fs.existsSync(figmaPath)) {
        const figmaDestPath = path.join(OUTPUT_DIR, `${screen.node}-figma.png`)
        fs.copyFileSync(figmaPath, figmaDestPath)
        console.log(`  ✓ Copied Figma reference`)
      } else {
        console.log(`  ! Figma screenshot not found at ${figmaPath}`)
      }
      
      console.log(`  ✓ Saved build screenshot`)
    } catch (error) {
      console.error(`  ✗ Error capturing ${screen.node}:`, error)
    }
  }

  await browser.close()
  console.log('\n✓ All screenshots captured!')
  console.log(`Compare images in: ${OUTPUT_DIR}`)
}

compareScreens().catch(console.error)

#!/usr/bin/env tsx
// Screenshot all 16 Link Insurance screens and create side-by-side comparisons with Figma reference

import { chromium } from '@playwright/test'
import sharp from 'sharp'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const SCREENS = [
  { id: '34227-79155', frameWidth: 1728, frameHeight: 1211, exportWidth: 1400, exportHeight: 982 },
  { id: '34227-78641', frameWidth: 1728, frameHeight: 1198, exportWidth: 1400, exportHeight: 971 },
  { id: '34227-78843', frameWidth: 1728, frameHeight: 1088, exportWidth: 1400, exportHeight: 882 },
  { id: '34227-78999', frameWidth: 560, frameHeight: 1061, exportWidth: 561, exportHeight: 1062 },
  { id: '34237-3169', frameWidth: 560, frameHeight: 971, exportWidth: 561, exportHeight: 972 },
  { id: '34227-79415', frameWidth: 1728, frameHeight: 1011, exportWidth: 1400, exportHeight: 820 },
  { id: '34227-79234', frameWidth: 1728, frameHeight: 803, exportWidth: 1400, exportHeight: 651 },
  { id: '34227-79452', frameWidth: 489, frameHeight: 308, exportWidth: 490, exportHeight: 309 },
  { id: '34227-79473', frameWidth: 489, frameHeight: 755, exportWidth: 490, exportHeight: 756 },
  { id: '34233-2724', frameWidth: 1600, frameHeight: 1204, exportWidth: 1400, exportHeight: 1054 },
  { id: '34160-3830', frameWidth: 674, frameHeight: 1156, exportWidth: 674, exportHeight: 1156 },
  { id: '34237-2862', frameWidth: 560, frameHeight: 1061, exportWidth: 561, exportHeight: 1062 },
  { id: '34237-3007', frameWidth: 560, frameHeight: 1237, exportWidth: 544, exportHeight: 1200 },
  { id: '34227-79314', frameWidth: 1728, frameHeight: 1413, exportWidth: 1400, exportHeight: 1145 },
  { id: '34245-3118', frameWidth: 1728, frameHeight: 1076, exportWidth: 1400, exportHeight: 872 },
  { id: '34227-79275', frameWidth: 1728, frameHeight: 1011, exportWidth: 1400, exportHeight: 820 },
]

const BASE_URL = 'http://localhost:5173'
const UPLOAD_DIR = '/home/ubuntu/.cursor/projects/workspace/uploads'
const TEMP_DIR = '/tmp/link-insurance-screenshots'
const OUTPUT_DIR = '/workspace/docs/link-insurance-compare'

async function main() {
  // Ensure output dirs exist
  if (!existsSync(TEMP_DIR)) mkdirSync(TEMP_DIR, { recursive: true })
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true })

  console.log('Starting Playwright browser...')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  let successCount = 0
  let failCount = 0

  for (const screen of SCREENS) {
    console.log(`\nProcessing ${screen.id} (frame: ${screen.frameWidth}x${screen.frameHeight}, export: ${screen.exportWidth}x${screen.exportHeight})...`)
    
    try {
      // Set viewport to true Figma frame dimensions
      await page.setViewportSize({ width: screen.frameWidth, height: screen.frameHeight })
      
      // Navigate to screen harness
      const url = `${BASE_URL}/link-insurance/screen/${screen.id}`
      console.log(`  Navigating to ${url}`)
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      
      // Wait a bit for fonts/styles to settle
      await page.waitForTimeout(1000)
      
      // Screenshot the build at true frame dimensions
      const buildScreenshotPath = join(TEMP_DIR, `${screen.id}-build.png`)
      await page.screenshot({ 
        path: buildScreenshotPath,
        fullPage: false,
        animations: 'disabled'
      })
      console.log(`  ✓ Build screenshot captured at ${screen.frameWidth}x${screen.frameHeight}`)
      
      // Load Figma reference screenshot
      const figmaScreenshotPath = join(UPLOAD_DIR, screen.id, 'screenshot.png')
      if (!existsSync(figmaScreenshotPath)) {
        console.log(`  ⚠ Figma reference not found at ${figmaScreenshotPath}, skipping stitch`)
        failCount++
        continue
      }
      
      // Load both images
      const figmaImg = sharp(figmaScreenshotPath)
      let buildImg = sharp(buildScreenshotPath)
      
      // Get metadata to verify dimensions
      const figmaMeta = await figmaImg.metadata()
      const buildMeta = await buildImg.metadata()
      
      console.log(`  Figma: ${figmaMeta.width}x${figmaMeta.height}, Build (raw): ${buildMeta.width}x${buildMeta.height}`)
      
      // Resize build to match export dimensions (downscale from frame dimensions)
      if (buildMeta.width !== screen.exportWidth || buildMeta.height !== screen.exportHeight) {
        console.log(`  Resizing build from ${buildMeta.width}x${buildMeta.height} to ${screen.exportWidth}x${screen.exportHeight}`)
        buildImg = buildImg.resize(screen.exportWidth, screen.exportHeight, {
          fit: 'fill',
          kernel: 'lanczos3'
        })
      }
      
      // Normalize heights (use max height between Figma and resized build)
      const maxHeight = Math.max(figmaMeta.height || 0, screen.exportHeight)
      
      // Resize images to same height if needed, padding with white
      const figmaResized = await figmaImg
        .resize(figmaMeta.width, maxHeight, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toBuffer()
      
      const buildResized = await buildImg
        .resize(screen.exportWidth, maxHeight, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toBuffer()
      
      // Stitch side-by-side with 4px gray divider
      const dividerWidth = 4
      const totalWidth = (figmaMeta.width || 0) + dividerWidth + (buildMeta.width || 0)
      
      const composite = await sharp({
        create: {
          width: totalWidth,
          height: maxHeight,
          channels: 3,
          background: { r: 200, g: 200, b: 200 }
        }
      })
      .composite([
        { input: figmaResized, left: 0, top: 0 },
        { input: buildResized, left: (figmaMeta.width || 0) + dividerWidth, top: 0 }
      ])
      .png()
      .toFile(join(OUTPUT_DIR, `${screen.id}.png`))
      
      console.log(`  ✓ Comparison saved to docs/link-insurance-compare/${screen.id}.png`)
      successCount++
      
    } catch (error) {
      console.error(`  ✗ Failed: ${error}`)
      failCount++
    }
  }

  await browser.close()
  
  console.log(`\n${'='.repeat(60)}`)
  console.log(`Screenshot comparison complete:`)
  console.log(`  ✓ Success: ${successCount}/${SCREENS.length}`)
  console.log(`  ✗ Failed: ${failCount}/${SCREENS.length}`)
  console.log(`  Output: ${OUTPUT_DIR}`)
  console.log(`${'='.repeat(60)}\n`)
}

main().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})

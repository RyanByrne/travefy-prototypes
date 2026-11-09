#!/usr/bin/env tsx
// Screenshot all 16 Link Insurance screens and create side-by-side comparisons with Figma reference

import { chromium } from '@playwright/test'
import sharp from 'sharp'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const SCREENS = [
  { id: '34227-79155', width: 1400, height: 982 },
  { id: '34227-78641', width: 1400, height: 971 },
  { id: '34227-78843', width: 1400, height: 882 },
  { id: '34227-78999', width: 561, height: 1062 },
  { id: '34237-3169', width: 561, height: 972 },
  { id: '34227-79415', width: 1400, height: 820 },
  { id: '34227-79234', width: 1400, height: 651 },
  { id: '34227-79452', width: 490, height: 309 },
  { id: '34227-79473', width: 490, height: 756 },
  { id: '34233-2724', width: 1400, height: 1054 },
  { id: '34160-3830', width: 674, height: 1156 },
  { id: '34237-2862', width: 561, height: 1062 },
  { id: '34237-3007', width: 544, height: 1200 },
  { id: '34227-79314', width: 1400, height: 1145 },
  { id: '34245-3118', width: 1400, height: 872 },
  { id: '34227-79275', width: 1400, height: 820 },
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
    console.log(`\nProcessing ${screen.id} (${screen.width}x${screen.height})...`)
    
    try {
      // Set viewport to exact Figma dimensions
      await page.setViewportSize({ width: screen.width, height: screen.height })
      
      // Navigate to screen harness
      const url = `${BASE_URL}/link-insurance/screen/${screen.id}`
      console.log(`  Navigating to ${url}`)
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      
      // Wait a bit for fonts/styles to settle
      await page.waitForTimeout(1000)
      
      // Screenshot the build
      const buildScreenshotPath = join(TEMP_DIR, `${screen.id}-build.png`)
      await page.screenshot({ 
        path: buildScreenshotPath,
        fullPage: false,
        animations: 'disabled'
      })
      console.log(`  ✓ Build screenshot saved`)
      
      // Load Figma reference screenshot
      const figmaScreenshotPath = join(UPLOAD_DIR, screen.id, 'screenshot.png')
      if (!existsSync(figmaScreenshotPath)) {
        console.log(`  ⚠ Figma reference not found at ${figmaScreenshotPath}, skipping stitch`)
        failCount++
        continue
      }
      
      // Load both images
      const figmaImg = sharp(figmaScreenshotPath)
      const buildImg = sharp(buildScreenshotPath)
      
      // Get metadata to verify dimensions
      const figmaMeta = await figmaImg.metadata()
      const buildMeta = await buildImg.metadata()
      
      console.log(`  Figma: ${figmaMeta.width}x${figmaMeta.height}, Build: ${buildMeta.width}x${buildMeta.height}`)
      
      // Normalize heights (use max height)
      const maxHeight = Math.max(figmaMeta.height || 0, buildMeta.height || 0)
      
      // Resize images to same height if needed, padding with white
      const figmaResized = await figmaImg
        .resize(figmaMeta.width, maxHeight, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toBuffer()
      
      const buildResized = await buildImg
        .resize(buildMeta.width, maxHeight, {
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

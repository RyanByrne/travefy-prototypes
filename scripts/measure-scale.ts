#!/usr/bin/env tsx
// Measure actual rendered widths vs Figma reference to diagnose scale mismatch

import { chromium } from 'playwright'

const NODE_ID = '34227-78843'
const URL = `http://localhost:5173/link-insurance/screen/${NODE_ID}`

async function main() {
  console.log('Measuring scale for', NODE_ID)
  
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  // Navigate
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  
  // Measure key elements
  const measurements = await page.evaluate(() => {
    const root = document.querySelector('[data-screen-id]') as HTMLElement
    const tripsList = document.querySelector('.w-\\[400px\\]') as HTMLElement // TripsList
    const tripMenu = document.querySelector('[class*="w-[300px]"]') as HTMLElement // TripMenu
    
    const computedRoot = root ? window.getComputedStyle(root) : null
    const computedList = tripsList ? window.getComputedStyle(tripsList) : null
    const computedMenu = tripMenu ? window.getComputedStyle(tripMenu) : null
    
    // Get font-size on root
    const rootFontSize = computedRoot ? window.getComputedStyle(document.documentElement).fontSize : null
    
    return {
      rootWidth: root?.getBoundingClientRect().width,
      rootHeight: root?.getBoundingClientRect().height,
      tripsListWidth: tripsList?.getBoundingClientRect().width,
      tripMenuWidth: tripMenu?.getBoundingClientRect().width,
      rootFontSize,
      devicePixelRatio: window.devicePixelRatio,
      viewport: { width: window.innerWidth, height: window.innerHeight }
    }
  })
  
  console.log('\\nRendered measurements:')
  console.log('  Root element:', measurements.rootWidth, 'x', measurements.rootHeight)
  console.log('  Trips list width:', measurements.tripsListWidth)
  console.log('  Trip menu width:', measurements.tripMenuWidth)
  console.log('  Root font-size:', measurements.rootFontSize)
  console.log('  devicePixelRatio:', measurements.devicePixelRatio)
  console.log('  Viewport:', measurements.viewport)
  
  console.log('\\nExpected from Figma:')
  console.log('  Root: 1400 x 882')
  console.log('  Trips list: 400px')
  console.log('  Trip menu: (need to check reference-code.tsx)')
  
  console.log('\\nFigma screenshot.png:')
  console.log('  File dimensions: 1400 x 882 pixels')
  console.log('  Frame in Figma: (check reference-code.tsx)')
  console.log('  Export scale: screenshot pixels / frame width = deviceScaleFactor needed')
  
  await browser.close()
}

main()

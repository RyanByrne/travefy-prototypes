#!/usr/bin/env tsx
import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1400, height: 882 })
  await page.goto('http://localhost:5173/link-insurance/screen/34227-78843', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: '/tmp/test-screenshot.png', fullPage: false })
  await browser.close()
  console.log('Screenshot saved to /tmp/test-screenshot.png')
}

main()

import { chromium } from '@playwright/test'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  await page.setViewportSize({ width: 1728, height: 1211 })
  await page.goto('http://localhost:5173/link-insurance-v1/screen/34227-78843')
  await page.waitForTimeout(1000)
  
  await page.screenshot({ path: '/tmp/test-78843.png', fullPage: false })
  
  await browser.close()
  console.log('Screenshot saved to /tmp/test-78843.png')
}

main()

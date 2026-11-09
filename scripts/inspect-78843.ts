import { chromium } from '@playwright/test'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  await page.setViewportSize({ width: 1728, height: 1211 })
  await page.goto('http://localhost:5173/link-insurance-v1/screen/34227-78843')
  await page.waitForTimeout(2000)
  
  // Inspect the trips list container
  const tripsListContainer = await page.locator('[data-node-id="34227:78846"]')
  const box = await tripsListContainer.boundingBox()
  console.log('Trips list container bounding box:', box)
  
  // Check if content is visible
  const newTripButton = await page.locator('text=New Trip')
  const newTripBox = await newTripButton.boundingBox()
  console.log('New Trip button bounding box:', newTripBox)
  
  // Check the trip list items
  const tripItems = await page.locator('[data-node-id="I34227:78846;15106:369577"]')
  const itemBox = await tripItems.boundingBox()
  console.log('First trip item bounding box:', itemBox)
  
  // Check for computed styles
  const containerHandle = await page.$('[data-node-id="34227:78846"]')
  if (containerHandle) {
    const styles = await page.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        height: computed.height,
        maxHeight: computed.maxHeight,
        overflow: computed.overflow,
        overflowY: computed.overflowY,
        display: computed.display,
        position: computed.position
      }
    }, containerHandle)
    console.log('Container computed styles:', styles)
  }
  
  // Check children
  const children = await page.locator('[data-node-id="34227:78846"] > *')
  const childCount = await children.count()
  console.log('Number of direct children:', childCount)
  
  for (let i = 0; i < Math.min(childCount, 5); i++) {
    const child = children.nth(i)
    const childBox = await child.boundingBox()
    const childDataNodeId = await child.getAttribute('data-node-id')
    console.log(`Child ${i} (${childDataNodeId}):`, childBox)
  }
  
  await page.screenshot({ path: '/tmp/inspect-78843-full.png', fullPage: true })
  await browser.close()
}

main()

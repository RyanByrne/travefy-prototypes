import { chromium } from 'playwright'

const NODE_ID = '34227-78843'
const URL = `http://localhost:5173/link-insurance/screen/${NODE_ID}`

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  // Listen for console messages
  page.on('console', msg => {
    console.log(`BROWSER ${msg.type()}: ${msg.text()}`)
  })
  
  // Listen for page errors
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err)
  })
  
  // Listen for failed requests
  page.on('requestfailed', request => {
    console.error(`FAILED: ${request.url()} - ${request.failure()?.errorText}`)
  })
  
  // Listen for responses
  page.on('response', response => {
    if (!response.ok() && response.url().includes('figma-assets')) {
      console.error(`404: ${response.url()}`)
    }
  })
  
  console.log(`Navigating to ${URL}...`)
  await page.goto(URL, { waitUntil: 'networkidle' })
  
  console.log('\nChecking navbar element...')
  const navbar = await page.$('.bg-primary-400')
  if (navbar) {
    const styles = await navbar.evaluate(el => {
      const computed = window.getComputedStyle(el)
      return {
        backgroundColor: computed.backgroundColor,
        display: computed.display,
        width: computed.width
      }
    })
    console.log('Navbar computed styles:', styles)
  } else {
    console.log('No .bg-primary-400 element found!')
  }
  
  console.log('\nChecking all elements with primary classes...')
  const primaryElements = await page.$$('[class*="primary"]')
  console.log(`Found ${primaryElements.length} elements with "primary" in class`)
  
  await browser.close()
}

main()

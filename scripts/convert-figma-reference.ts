import * as fs from 'fs'
import * as path from 'path'

const nodes = [
  '34160-3830',
  '34227-79415',
  '34227-79234',
  '34227-79155',
  '34227-79452',
  '34227-79473',
  '34227-79314',
  '34245-3118',
  '34227-79275',
  '34227-78641',
  '34233-2724',
  '34227-78843',
  '34227-78999',
  '34237-2862',
  '34237-3007',
  '34237-3169',
]

const UPLOADS_DIR = '/home/ubuntu/.cursor/projects/agent-repos-travefy-prototypes/uploads'
const OUTPUT_DIR = path.join(process.cwd(), 'src/prototypes/link-insurance-v1/screens-figma')

function convertReferenceCode(nodeId: string) {
  const inputPath = path.join(UPLOADS_DIR, nodeId, 'reference-code.tsx')
  const outputPath = path.join(OUTPUT_DIR, `${nodeId}.tsx`)

  console.log(`Converting ${nodeId}...`)

  if (!fs.existsSync(inputPath)) {
    console.log(`  ! No reference-code.tsx found`)
    return
  }

  let content = fs.readFileSync(inputPath, 'utf-8')

  // Replace asset paths
  content = content.replaceAll('"./assets/', '"/src/prototypes/link-insurance-v1/assets/')

  // Replace font family
  content = content.replaceAll("font-['Proxima_Nova:", "font-['Inter:")

  fs.writeFileSync(outputPath, content)
  console.log(`  ✓ Converted`)
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

for (const node of nodes) {
  convertReferenceCode(node)
}

console.log('\n✓ All nodes converted!')

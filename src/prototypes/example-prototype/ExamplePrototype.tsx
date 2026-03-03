import { useState } from 'react'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { Button, Card, Input } from '../../shared/components'

export function ExamplePrototype() {
  const [name, setName] = useState('')

  return (
    <PrototypeShell
      title="Example Prototype"
      description="A starter showing shared components. Duplicate this folder for new prototypes."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-travefy-navy mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-travefy-navy mb-4">Inputs</h2>
          <div className="space-y-3">
            <Input
              label="Traveler Name"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              type="email"
              placeholder="jane@example.com"
            />
            <Input
              label="With Error"
              error="This field is required"
              defaultValue=""
            />
          </div>
        </Card>

        <Card className="md:col-span-2">
          <h2 className="text-lg font-semibold text-travefy-navy mb-2">Getting Started</h2>
          <ol className="text-sm text-travefy-gray-600 space-y-2 list-decimal list-inside">
            <li>Duplicate this folder as <code className="bg-travefy-gray-100 px-1 py-0.5 rounded text-xs">src/prototypes/your-prototype-name/</code></li>
            <li>Create your main component and export it</li>
            <li>Add a route in <code className="bg-travefy-gray-100 px-1 py-0.5 rounded text-xs">App.tsx</code></li>
            <li>Register it in the <code className="bg-travefy-gray-100 px-1 py-0.5 rounded text-xs">prototypes</code> array in <code className="bg-travefy-gray-100 px-1 py-0.5 rounded text-xs">PrototypeIndex.tsx</code></li>
          </ol>
        </Card>
      </div>
    </PrototypeShell>
  )
}

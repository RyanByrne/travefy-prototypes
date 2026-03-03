import { Link } from 'react-router-dom'
import { Layers, Plus, FlaskConical } from 'lucide-react'

interface Prototype {
  slug: string
  title: string
  description: string
  status: 'draft' | 'ready' | 'testing' | 'complete'
  date: string
}

/**
 * Add new prototypes here as you build them.
 * Each entry links to its route in App.tsx.
 */
const prototypes: Prototype[] = [
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    description: 'Contacts tab expansion — Lists, Campaigns dashboard, and a campaign editor with drag-and-drop designer.',
    status: 'draft',
    date: '2026-03-03',
  },
  {
    slug: 'example-prototype',
    title: 'Example Prototype',
    description: 'A starter prototype showing the basic structure. Duplicate this folder to create new prototypes.',
    status: 'draft',
    date: '2026-03-03',
  },
]

const statusColors: Record<Prototype['status'], string> = {
  draft: 'bg-travefy-gray-200 text-travefy-gray-700',
  ready: 'bg-travefy-blue-light text-travefy-blue',
  testing: 'bg-yellow-100 text-yellow-800',
  complete: 'bg-green-100 text-green-800',
}

export function PrototypeIndex() {
  return (
    <div className="min-h-screen bg-travefy-gray-50">
      <header className="bg-white border-b border-travefy-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Layers className="w-6 h-6 text-travefy-blue" />
          <h1 className="text-xl font-semibold text-travefy-navy">
            Travefy Design Prototypes
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <p className="text-travefy-gray-600">
            Testable design prototypes for Travefy product work. Each prototype is self-contained
            and can be shared via its URL path.
          </p>
        </div>

        <div className="grid gap-4">
          {prototypes.map((proto) => (
            <Link
              key={proto.slug}
              to={`/${proto.slug}`}
              className="block bg-white border border-travefy-gray-200 rounded-lg p-5 hover:border-travefy-blue hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-travefy-gray-400 group-hover:text-travefy-blue mt-0.5 transition-colors" />
                  <div>
                    <h2 className="font-medium text-travefy-gray-900 group-hover:text-travefy-blue transition-colors">
                      {proto.title}
                    </h2>
                    <p className="text-sm text-travefy-gray-500 mt-1">
                      {proto.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-travefy-gray-400">{proto.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[proto.status]}`}>
                    {proto.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          <div className="border-2 border-dashed border-travefy-gray-200 rounded-lg p-5 text-center text-travefy-gray-400">
            <Plus className="w-5 h-5 mx-auto mb-2" />
            <p className="text-sm">
              Add a new prototype by creating a folder in <code className="bg-travefy-gray-100 px-1.5 py-0.5 rounded text-xs">src/prototypes/</code> and registering it in App.tsx
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

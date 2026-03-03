import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

interface PrototypeShellProps {
  title: string
  description?: string
  children: ReactNode
  /** Set to true to remove the default padding/max-width (for full-bleed prototypes) */
  fullBleed?: boolean
}

export function PrototypeShell({ title, description, children, fullBleed = false }: PrototypeShellProps) {
  return (
    <div className={fullBleed ? 'h-screen flex flex-col bg-travefy-gray-50' : 'min-h-screen bg-travefy-gray-50'}>
      <header className="bg-white border-b border-travefy-gray-200 px-6 py-3 shrink-0">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-travefy-gray-500 hover:text-travefy-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Prototypes
          </Link>
          <div className="h-4 w-px bg-travefy-gray-200" />
          <div>
            <h1 className="text-sm font-semibold text-travefy-navy">{title}</h1>
            {description && (
              <p className="text-xs text-travefy-gray-500">{description}</p>
            )}
          </div>
        </div>
      </header>

      {fullBleed ? (
        <div className="flex-1 min-h-0 flex flex-col">{children}</div>
      ) : (
        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
      )}
    </div>
  )
}

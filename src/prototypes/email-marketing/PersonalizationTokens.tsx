import { Braces, ChevronDown, ChevronUp } from 'lucide-react'
import { useRef, useState } from 'react'

const TOKEN_GROUPS = [
  {
    title: 'Contact',
    tokens: [
      { label: 'First Name', token: '{{first_name}}' },
      { label: 'Last Name', token: '{{last_name}}' },
      { label: 'Email', token: '{{email}}' },
    ],
  },
]

export function PersonalizationDropdown({
  onInsert,
}: {
  onInsert: (token: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 border border-travefy-gray-300 rounded text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50 transition-colors"
        title="Insert personalization token"
      >
        <Braces className="w-4 h-4 text-travefy-gray-500" />
        Personalize
        {open ? <ChevronUp className="w-3.5 h-3.5 text-travefy-gray-400" /> : <ChevronDown className="w-3.5 h-3.5 text-travefy-gray-400" />}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-10 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg w-56 text-sm max-h-[60vh] overflow-y-auto">
            {TOKEN_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="px-3 pt-2.5 pb-1 text-[10px] font-semibold text-travefy-gray-400 uppercase tracking-wider">
                  {group.title}
                </p>
                {group.tokens.map(({ label, token }) => (
                  <button
                    key={token}
                    onClick={() => {
                      onInsert(token)
                      setOpen(false)
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700 flex items-center justify-between gap-2 group"
                  >
                    <span>{label}</span>
                    <code className="text-[10px] text-travefy-gray-400 font-mono bg-travefy-gray-50 px-1.5 py-0.5 rounded group-hover:bg-travefy-blue-light group-hover:text-travefy-blue transition-colors">
                      {token}
                    </code>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

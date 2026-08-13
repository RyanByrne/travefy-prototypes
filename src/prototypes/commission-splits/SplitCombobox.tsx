import { clsx } from 'clsx'
import { Check, ChevronDown, Plus, Search, X } from 'lucide-react'
import { useState } from 'react'
import { formatSplit, type CommissionSplit } from './data'

/**
 * Searchable single-select combobox for commission splits. Lists the options,
 * filters as you type, and lets you create a new split inline via "Add "<query>"".
 * Mirrors the labels-combobox pattern used elsewhere in the app.
 */
export function SplitCombobox({
  options,
  value,
  onChange,
  onCreate,
  placeholder = 'Select a split',
}: {
  options: CommissionSplit[]
  value: string
  onChange: (id: string) => void
  /** Create a new split from a typed name; returns its new id. */
  onCreate: (name: string) => string
  placeholder?: string
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const selected = options.find((o) => o.id === value)
  const q = query.trim().toLowerCase()
  const filtered = q ? options.filter((o) => formatSplit(o).toLowerCase().includes(q)) : options
  const exact = options.some((o) => o.name.trim().toLowerCase() === q)

  const close = () => { setOpen(false); setQuery('') }
  const select = (id: string) => { onChange(id); close() }
  const create = () => { onChange(onCreate(query.trim())); close() }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded border border-travefy-gray-200 bg-white px-3 py-2.5 text-left text-sm text-travefy-gray-700 focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20"
      >
        <span className={selected ? '' : 'text-travefy-gray-400'}>{selected ? formatSplit(selected) : placeholder}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-travefy-gray-400" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={close} />
          <div className="absolute left-0 right-0 top-full z-20 mt-1 rounded-lg border border-travefy-gray-200 bg-white shadow-lg">
            <div className="p-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-travefy-gray-400" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search splits"
                  className="w-full rounded border border-travefy-gray-200 bg-white py-2 pl-9 pr-8 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Clear search">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="max-h-56 overflow-auto px-1">
              {filtered.map((o) => (
                <button
                  key={o.id}
                  onClick={() => select(o.id)}
                  className={clsx(
                    'flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm hover:bg-travefy-gray-50',
                    o.id === value ? 'bg-travefy-blue-light/60 text-travefy-navy' : 'text-travefy-gray-700',
                  )}
                >
                  <span>{formatSplit(o)}</span>
                  {o.id === value && <Check className="h-4 w-4 text-travefy-blue" />}
                </button>
              ))}
              {filtered.length === 0 && <p className="px-3 py-3 text-sm text-travefy-gray-500">No splits match “{query.trim()}”.</p>}
            </div>

            {query.trim() && !exact && (
              <button
                onClick={create}
                className="flex w-full items-center gap-2 border-t border-travefy-gray-100 px-3 py-2.5 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50"
              >
                <Plus className="h-4 w-4" />
                Add “{query.trim()}”
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

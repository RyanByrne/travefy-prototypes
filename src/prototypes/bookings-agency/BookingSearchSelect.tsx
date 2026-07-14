import { Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export interface BookingOption {
  ref: string
  supplier: string
  advisor: string | null
  traveler?: string | null
}

interface Props {
  label?: string
  value: string
  options: BookingOption[]
  onChange: (ref: string, booking?: BookingOption) => void
}

/** How many matches to render before asking the user to narrow — agencies can
 *  have hundreds of thousands of bookings, so we never render the full list. */
const MAX = 8

/**
 * Searchable booking picker (typeahead). Filters by ref / supplier / advisor /
 * traveler and caps the rendered results, so it scales to very large booking
 * sets where a plain <select> of every booking would be unusable.
 */
export function BookingSearchSelect({ label = 'Booking', value, options, onChange }: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const selected =
    options.find((o) => o.ref === value) ?? (value ? { ref: value, supplier: '', advisor: null } : null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const q = query.trim().toLowerCase()
  const matches = q
    ? options.filter((o) => [o.ref, o.supplier, o.advisor, o.traveler].some((f) => f?.toLowerCase().includes(q)))
    : options
  const shown = matches.slice(0, MAX)

  const pick = (o: BookingOption) => { onChange(o.ref, o); setQuery(''); setOpen(false) }
  const clear = () => { onChange('', undefined); setQuery(''); setOpen(false) }

  return (
    <div className="relative" ref={rootRef}>
      {label && <label className="mb-1.5 block text-sm font-semibold text-travefy-gray-800">{label}</label>}

      {selected && !open ? (
        <div className="flex items-center justify-between rounded border border-travefy-gray-300 bg-white px-3 py-2 text-sm">
          <span className="truncate text-travefy-gray-900">
            <span className="font-semibold">{selected.ref}</span>
            {selected.supplier && (
              <span className="text-travefy-gray-500">
                {' '}· {selected.supplier}{selected.advisor ? ` · ${selected.advisor}` : ''}
              </span>
            )}
          </span>
          <div className="flex shrink-0 items-center gap-2 pl-2">
            <button onClick={() => setOpen(true)} className="text-xs font-semibold text-travefy-blue hover:underline">
              Change
            </button>
            <button onClick={clear} aria-label="Clear booking" className="text-travefy-gray-400 hover:text-travefy-gray-700">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-travefy-gray-400" />
          <input
            autoFocus={open}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
            onFocus={() => setOpen(true)}
            placeholder="Search bookings by ref, traveler, supplier…"
            className="w-full rounded border border-travefy-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20"
          />
        </div>
      )}

      {open && (
        <div className="absolute z-30 mt-1 w-full rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
          <button onClick={clear} className="w-full px-3 py-2 text-left text-travefy-gray-500 hover:bg-travefy-gray-50">
            None — reconcile to a booking later
          </button>
          <div className="my-1 border-t border-travefy-gray-100" />
          {shown.length === 0 ? (
            <p className="px-3 py-3 text-travefy-gray-500">No bookings match “{query}”.</p>
          ) : (
            <div className="max-h-64 overflow-auto">
              {shown.map((o) => (
                <button key={o.ref} onClick={() => pick(o)} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50">
                  <span className="font-semibold text-travefy-navy">{o.ref}</span>
                  <span className="text-travefy-gray-500">
                    {' '}· {o.supplier}{o.advisor ? ` · ${o.advisor}` : ''}{o.traveler ? ` · ${o.traveler}` : ''}
                  </span>
                </button>
              ))}
            </div>
          )}
          {matches.length > MAX && (
            <p className="border-t border-travefy-gray-100 px-3 py-2 text-xs text-travefy-gray-400">
              Showing {MAX} of {matches.length.toLocaleString()} — keep typing to narrow.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

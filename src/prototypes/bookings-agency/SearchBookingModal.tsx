import { clsx } from 'clsx'
import { Plus, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { bookings } from './data'

interface CandidateBooking {
  id: string
  bookingRef: string
  bookedThrough: string
  travelers: string
  total: number | null
}

const fmtMoney = (n: number) =>
  '$ ' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })

interface SearchBookingModalProps {
  open: boolean
  onClose: () => void
  /** Called when the user clicks Link booking with a row selected */
  onLink: (booking: CandidateBooking) => void
  /** Called when the user clicks "+ Add new booking" */
  onAddNew: () => void
  /** The row being matched, for context in the modal */
  contextRef?: string | null
}

export function SearchBookingModal({ open, onClose, onLink, onAddNew, contextRef }: SearchBookingModalProps) {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Reset when closed/opened
  useEffect(() => {
    if (open) {
      setSearch('')
      setSelectedId(null)
    }
  }, [open])

  if (!open) return null

  // Build candidates from the main booking list
  const candidates: CandidateBooking[] = bookings.map((b) => ({
    id: b.id,
    bookingRef: b.bookingRef ?? '--',
    bookedThrough: b.supplier,
    travelers: b.traveler ?? '--',
    total: b.received,
  }))

  const filtered = candidates.filter((c) => {
    const q = search.toLowerCase()
    if (!q) return true
    return [c.bookingRef, c.bookedThrough, c.travelers].some((f) => f.toLowerCase().includes(q))
  })

  const selected = filtered.find((c) => c.id === selectedId) ?? null

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-travefy-navy/40" onClick={onClose} />

      <div className="fixed inset-0 z-[61] flex items-start justify-center pt-16 px-4 pointer-events-none">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl pointer-events-auto flex flex-col max-h-[85vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-travefy-gray-100 shrink-0">
            <h2 className="text-lg font-bold text-travefy-navy">Add Booking Details</h2>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
            {/* Smart Import banner */}
            <div className="border border-purple-300 bg-purple-50 rounded-lg px-4 py-3 text-sm text-purple-800">
              You can also import bookings directly into proposals and itineraries with Smart Import or booking integrations.
            </div>

            {contextRef && (
              <p className="text-xs text-travefy-gray-600">
                Linking a booking to received payment <span className="font-semibold text-travefy-navy">{contextRef}</span>.
              </p>
            )}

            {/* Search + Add */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a booking"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-9 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">
                Search
              </button>

              <button
                onClick={onAddNew}
                className="flex items-center gap-1.5 px-3 py-2 rounded border border-travefy-blue bg-white text-travefy-blue text-sm font-semibold hover:bg-travefy-blue-light transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add new booking
              </button>
            </div>

            {/* Table */}
            <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-travefy-gray-50">
                  <tr className="border-b border-travefy-gray-100">
                    <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Booking Ref</th>
                    <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Booked Through</th>
                    <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Travelers</th>
                    <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600 flex items-center gap-1">
                      Total
                      <span className="w-3.5 h-3.5 rounded-full bg-travefy-gray-400 text-white text-[8px] flex items-center justify-center">i</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr
                      key={c.id}
                      onClick={() => setSelectedId(c.id)}
                      className={clsx(
                        'border-b border-travefy-gray-100 cursor-pointer transition-colors',
                        selectedId === c.id ? 'bg-travefy-blue-light' : 'hover:bg-travefy-gray-50',
                      )}
                    >
                      <td className="px-4 py-3 text-travefy-navy font-medium">{c.bookingRef}</td>
                      <td className="px-4 py-3 text-travefy-gray-700">{c.bookedThrough}</td>
                      <td className="px-4 py-3 text-travefy-gray-700">{c.travelers}</td>
                      <td className="px-4 py-3 text-travefy-gray-700">
                        {c.total !== null ? fmtMoney(c.total) : <span className="text-travefy-gray-400">--</span>}
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-10 text-center text-travefy-gray-500 text-sm">
                        No bookings match. Try a different search or <button onClick={onAddNew} className="text-travefy-blue font-semibold hover:underline">add a new booking</button>.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-travefy-gray-100 shrink-0">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline"
            >
              Cancel
            </button>
            <button
              onClick={() => selected && onLink(selected)}
              disabled={!selected}
              className={clsx(
                'px-5 py-2 rounded text-sm font-semibold transition-colors',
                selected
                  ? 'bg-travefy-blue text-white hover:bg-travefy-blue-dark'
                  : 'bg-travefy-gray-200 text-travefy-gray-500 cursor-not-allowed',
              )}
            >
              Link booking
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export type { CandidateBooking }

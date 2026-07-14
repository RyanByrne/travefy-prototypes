import { useEffect, useState } from 'react'
import { ArrowUpDown, ChevronDown, Filter, Search } from 'lucide-react'
import { Badge, Button } from '../../shared/components'
import { searchBookingCards, type SearchBookingCard, type SearchCardStatus } from './commissionsData'

interface Props {
  open: boolean
  onClose: () => void
  /** The unclaimed / commission line reference being matched (shown for context). */
  contextRef?: string | null
  onConfirm: (card: SearchBookingCard) => void
}

const CHIPS = ['Supplier', 'Travel', 'Booked', 'Advisor', 'Status'] as const

const statusVariant: Record<SearchCardStatus, 'warning' | 'success' | 'danger'> = {
  Expected: 'warning',
  Reconciled: 'success',
  Overdue: 'danger',
}

const fmtMoney = (n: number) => `$${n.toLocaleString('en-US')}`

/**
 * Redesigned "Search for booking" — card + filter-chip layout used to match an
 * unclaimed booking (or unmatched commission line) to a booking in the system.
 * Pick a card with "Select Booking", then confirm.
 */
export function SearchForBookingFlyout({ open, onClose, contextRef, onConfirm }: Props) {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Reset selection/search each time it opens.
  useEffect(() => {
    if (open) {
      setSearch('')
      setSelectedId(null)
    }
  }, [open])

  if (!open) return null

  const q = search.trim().toLowerCase()
  const cards = q
    ? searchBookingCards.filter((c) =>
        [c.bookingRef, c.agency, c.traveler, c.advisor].some((f) => f.toLowerCase().includes(q)),
      )
    : searchBookingCards

  const selected = searchBookingCards.find((c) => c.id === selectedId) ?? null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-travefy-navy/40 backdrop-blur-[1px]" onClick={onClose} />
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg bg-white shadow-xl">
        {/* Search + controls */}
        <div className="px-5 pt-5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-travefy-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search for booking"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded border border-travefy-gray-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20"
              />
            </div>
            <button className="rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark">
              Search
            </button>
            <button className="rounded bg-travefy-navy p-2 text-white hover:bg-travefy-gray-800" aria-label="Filters">
              <Filter className="h-4 w-4" />
            </button>
            <button
              className="rounded border border-travefy-gray-200 p-2 text-travefy-gray-500 hover:bg-travefy-gray-50"
              aria-label="Sort"
            >
              <ArrowUpDown className="h-4 w-4" />
            </button>
          </div>

          {/* Filter chips */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                className="flex items-center gap-1.5 rounded border border-travefy-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50"
              >
                {chip}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
            <button className="px-2 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">
              Reset Filters
            </button>
          </div>

          {contextRef && (
            <p className="mt-3 text-xs text-travefy-gray-500">
              Matching received booking <span className="font-semibold text-travefy-navy">{contextRef}</span>
            </p>
          )}
        </div>

        {/* Card list */}
        <div className="mt-3 flex-1 space-y-3 overflow-y-auto px-5 pb-4">
          {cards.map((c) => {
            const isSelected = c.id === selectedId
            return (
              <div
                key={c.id}
                className={
                  isSelected
                    ? 'rounded-lg border-2 border-travefy-blue bg-travefy-blue-light/30 p-4'
                    : 'rounded-lg border border-travefy-gray-200 bg-white p-4'
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-travefy-navy">{c.bookingRef}</span>
                    <span className="text-sm text-travefy-blue">{c.agency}</span>
                  </div>
                  <Badge variant={statusVariant[c.status]} size="sm">
                    {c.status}
                  </Badge>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <p className="text-travefy-gray-700">
                    <span className="font-semibold text-travefy-gray-900">Traveler:</span> {c.traveler}
                  </p>
                  <p className="text-right text-travefy-gray-700">
                    <span className="font-semibold text-travefy-gray-900">Travel Date:</span> {c.travelDate}
                  </p>
                  <p className="text-travefy-gray-700">
                    <span className="font-semibold text-travefy-gray-900">Advisor:</span> {c.advisor}
                  </p>
                  <p className="text-right text-travefy-gray-700">
                    <span className="font-semibold text-travefy-gray-900">Total:</span> {fmtMoney(c.total)}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedId(isSelected ? null : c.id)}
                  className={
                    isSelected
                      ? 'mt-3 w-full rounded border border-travefy-blue bg-travefy-blue-light py-1.5 text-sm font-semibold text-travefy-blue'
                      : 'mt-3 w-full rounded border border-travefy-gray-200 py-1.5 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50'
                  }
                >
                  {isSelected ? 'Selected' : 'Select Booking'}
                </button>
              </div>
            )
          })}
          {cards.length === 0 && (
            <p className="py-10 text-center text-sm text-travefy-gray-500">No bookings match your search.</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 rounded-b-lg border-t border-travefy-gray-200 bg-travefy-gray-50 px-5 py-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={!selected} onClick={() => selected && onConfirm(selected)}>
            Confirm Selection
          </Button>
        </div>
      </div>
    </div>
  )
}

import { clsx } from 'clsx'
import { ChevronDown, ChevronUp, MoreHorizontal, Search, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import type { UnclaimedItem } from './unclaimedData'

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'bookingRef' | 'supplier' | 'traveler' | 'timeUnclaimed' | 'received' | 'status'
type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="inline-flex flex-col -space-y-1 ml-1">
      <ChevronUp className={clsx('w-3 h-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('w-3 h-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

function SortableHeader({ label, sortKey, current, dir, onSort }: { label: string; sortKey: SortKey; current: SortKey | null; dir: SortDir; onSort: (k: SortKey) => void }) {
  return (
    <th className="px-4 py-3 text-left">
      <button
        onClick={() => onSort(sortKey)}
        className="inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900"
      >
        {label}
        <SortIndicator active={current === sortKey} dir={dir} />
      </button>
    </th>
  )
}

// ── Filter chip ──────────────────────────────────────────────────────────────

function FilterChip({ label, options, selected, onSelect, onToast }: { label: string; options?: string[]; selected?: string | null; onSelect?: (v: string | null) => void; onToast?: (t: string) => void }) {
  const [open, setOpen] = useState(false)
  const active = selected != null
  const isStatic = !options
  return (
    <div className="relative">
      <button
        onClick={() => (isStatic ? onToast?.(`${label} filter is mocked for this prototype`) : setOpen((v) => !v))}
        className={clsx(
          'flex items-center gap-2 px-3 py-1.5 border rounded text-sm font-semibold transition-colors',
          active ? 'border-travefy-blue text-travefy-blue bg-travefy-blue-light' : 'border-travefy-gray-200 text-travefy-blue bg-white hover:bg-travefy-gray-50',
        )}
      >
        {selected ?? label}
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && options && onSelect && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-10 z-20 w-56 max-h-72 overflow-auto rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            <button onClick={() => { onSelect(null); setOpen(false) }} className="w-full px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">
              All {label.toLowerCase()}s
            </button>
            <div className="my-1 border-t border-travefy-gray-100" />
            {options.map((opt) => (
              <button key={opt} onClick={() => { onSelect(opt); setOpen(false) }} className="w-full px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Row context menu ──────────────────────────────────────────────────────────

function RowMenu({ onViewStatement, onRemove }: { onViewStatement: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors"
        aria-label="Unclaimed actions"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-44 text-sm">
            <button onClick={() => { onViewStatement(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">
              View on Statement
            </button>
            <button onClick={() => { onRemove(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Status badge (only shown on Match Found) ──────────────────────────────────

function StatusBadge({ value }: { value: 'no-match' | 'match-found' }) {
  if (value !== 'match-found') return null
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-travefy-primary-border bg-travefy-blue-light px-2.5 py-0.5 text-xs font-semibold text-travefy-primary-text whitespace-nowrap">
      <Star className="w-3 h-3 fill-current" />
      Match Found
    </span>
  )
}

const fmtMoney = (n: number) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

// ── Component ─────────────────────────────────────────────────────────────────

interface UnclaimedTabProps {
  items: UnclaimedItem[]
  onViewStatement: (item: UnclaimedItem) => void
  onClaim?: (item: UnclaimedItem) => void
  /** Opens the Match Unclaimed Booking modal (agency, match-found rows). */
  onReviewMatch?: (item: UnclaimedItem) => void
  /** Opens the Search for booking flyout to match against a system booking. */
  onSearchMatch?: (item: UnclaimedItem) => void
  onRemove: (id: string) => void
  onToast?: (text: string) => void
  /** When 'advisor', renders the slimmer columns with a Claim action button. */
  variant?: 'agency' | 'advisor'
}

export function UnclaimedTab({ items, onViewStatement, onClaim, onReviewMatch, onSearchMatch, onRemove, onToast, variant = 'agency' }: UnclaimedTabProps) {
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [sortKey, setSortKey] = useState<SortKey>('timeUnclaimed')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null)
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)

  const isAdvisor = variant === 'advisor'
  const suppliers = Array.from(new Set(items.map((i) => i.supplier))).sort()
  const statements = Array.from(new Set(items.map((i) => i.statementRef))).sort()

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const parseDays = (s: string) => {
    const n = parseInt(s, 10)
    return Number.isNaN(n) ? 0 : n
  }

  const filtered = items.filter((x) => {
    if (selectedSupplier && x.supplier !== selectedSupplier) return false
    if (selectedStatement && x.statementRef !== selectedStatement) return false
    const q = search.toLowerCase()
    if (!q) return true
    return [x.bookingRef, x.supplier, x.traveler].some((f) => f?.toLowerCase().includes(q))
  })

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    switch (sortKey) {
      case 'bookingRef':    return a.bookingRef.localeCompare(b.bookingRef) * dir
      case 'supplier':      return a.supplier.localeCompare(b.supplier) * dir
      case 'traveler':      return (a.traveler ?? '').localeCompare(b.traveler ?? '') * dir
      case 'timeUnclaimed': return (parseDays(a.timeUnclaimed) - parseDays(b.timeUnclaimed)) * dir
      case 'received':      return ((a.received ?? 0) - (b.received ?? 0)) * dir
      case 'status':        return a.match.localeCompare(b.match) * dir
      default:              return 0
    }
  })

  const resetFilters = () => {
    setSelectedSupplier(null)
    setSelectedStatement(null)
    setSearch('')
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[280px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input
            type="text"
            placeholder="Search Unclaimed Bookings"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          />
        </div>

        <button
          onClick={() => onToast?.(`${sorted.length} unclaimed booking${sorted.length === 1 ? '' : 's'}`)}
          className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
        >
          Search
        </button>

        <span className="text-sm text-travefy-gray-600">
          Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {items.length}
        </span>

        <div className="ml-auto">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      {/* Filter chips */}
      {showFilters && !isAdvisor && (
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <FilterChip label="Supplier" options={suppliers} selected={selectedSupplier} onSelect={setSelectedSupplier} />
          <FilterChip label="Statement" options={statements} selected={selectedStatement} onSelect={setSelectedStatement} />
          <FilterChip label="Time Unclaimed" onToast={onToast} />
          <button onClick={resetFilters} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">
            Reset Filters
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-visible">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="w-full text-sm">
            <thead className="bg-travefy-gray-50">
              <tr className="border-b border-travefy-gray-100">
                <SortableHeader label="Reference" sortKey="bookingRef" current={sortKey} dir={sortDir} onSort={onSort} />
                {!isAdvisor && <SortableHeader label="Statement Ref" sortKey="supplier" current={sortKey} dir={sortDir} onSort={onSort} />}
                <SortableHeader label="Supplier" sortKey="supplier" current={sortKey} dir={sortDir} onSort={onSort} />
                {!isAdvisor && <SortableHeader label="Traveler" sortKey="traveler" current={sortKey} dir={sortDir} onSort={onSort} />}
                <SortableHeader label="Time Unclaimed" sortKey="timeUnclaimed" current={sortKey} dir={sortDir} onSort={onSort} />
                {!isAdvisor && (
                  <>
                    <SortableHeader label="Received" sortKey="received" current={sortKey} dir={sortDir} onSort={onSort} />
                    <SortableHeader label="Status" sortKey="status" current={sortKey} dir={sortDir} onSort={onSort} />
                  </>
                )}
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Action</th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((x) => (
                <tr key={x.id} className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors">
                  <td className="px-4 py-3 text-travefy-navy font-medium">{x.bookingRef}</td>
                  {!isAdvisor && <td className="px-4 py-3 text-travefy-gray-700">{x.statementRef}</td>}
                  <td className="px-4 py-3 text-travefy-gray-700">{x.supplier}</td>
                  {!isAdvisor && (
                    <td className="px-4 py-3 text-travefy-gray-700">
                      {x.traveler ?? <span className="text-travefy-gray-400">--</span>}
                    </td>
                  )}
                  <td className="px-4 py-3 text-travefy-gray-700">{x.timeUnclaimed}</td>
                  {!isAdvisor && (
                    <>
                      <td className="px-4 py-3 text-travefy-gray-700">
                        {x.received !== null ? fmtMoney(x.received) : <span className="text-travefy-gray-400">--</span>}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge value={x.match} />
                      </td>
                    </>
                  )}
                  <td className="px-4 py-3">
                    {isAdvisor ? (
                      <button
                        onClick={() => onClaim?.(x)}
                        className="px-3 py-1.5 rounded border border-travefy-blue text-travefy-blue text-xs font-semibold hover:bg-travefy-blue-light transition-colors"
                      >
                        Claim
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        {x.match === 'match-found' && (
                          <button
                            onClick={() => onReviewMatch?.(x)}
                            className="px-3 py-1.5 rounded bg-travefy-navy text-white text-xs font-semibold hover:bg-travefy-gray-800 transition-colors"
                          >
                            Review Match
                          </button>
                        )}
                        <button
                          onClick={() => onSearchMatch?.(x)}
                          className="p-1.5 rounded border border-travefy-gray-200 text-travefy-gray-500 hover:bg-travefy-gray-50"
                          aria-label="Search for a booking to match"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <RowMenu onViewStatement={() => onViewStatement(x)} onRemove={() => onRemove(x.id)} />
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={isAdvisor ? 4 : 9} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">
                    No unclaimed bookings.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

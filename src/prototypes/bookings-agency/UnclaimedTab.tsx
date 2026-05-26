import { clsx } from 'clsx'
import { ChevronDown, ChevronUp, Filter, MoreHorizontal, Search, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import type { UnclaimedItem } from './unclaimedData'

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'bookingRef' | 'supplier' | 'traveler' | 'timeUnclaimed' | 'received' | 'match'
type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="inline-flex flex-col -space-y-1 ml-1">
      <ChevronUp className={clsx('w-3 h-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('w-3 h-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

interface SortableHeaderProps {
  label: string
  sortKey: SortKey
  current: SortKey
  dir: SortDir
  onSort: (k: SortKey) => void
}

function SortableHeader({ label, sortKey, current, dir, onSort }: SortableHeaderProps) {
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
            <button
              onClick={() => { onViewStatement(); setOpen(false) }}
              className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              View on Statement
            </button>
            <button
              onClick={() => { onRemove(); setOpen(false) }}
              className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Match badge ───────────────────────────────────────────────────────────────

function MatchBadge({ value }: { value: 'no-match' | 'match-found' }) {
  if (value === 'match-found') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-travefy-success-border bg-travefy-success-bg text-travefy-success-dark text-xs font-semibold whitespace-nowrap">
        <Sparkles className="w-3 h-3" />
        Match Found
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded border border-travefy-warning-border bg-travefy-warning-bg text-travefy-warning-dark text-xs font-semibold whitespace-nowrap">
      No Match
    </span>
  )
}

// ── Money formatter ───────────────────────────────────────────────────────────

const fmtMoney = (n: number) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

// ── Component ─────────────────────────────────────────────────────────────────

interface UnclaimedTabProps {
  items: UnclaimedItem[]
  onViewStatement: (item: UnclaimedItem) => void
  onClaim?: (item: UnclaimedItem) => void
  onRemove: (id: string) => void
  onToast?: (text: string) => void
  /** When 'advisor', renders the slimmer columns with a Claim action button. */
  variant?: 'agency' | 'advisor'
}

export function UnclaimedTab({ items, onViewStatement, onClaim, onRemove, onToast, variant = 'agency' }: UnclaimedTabProps) {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('timeUnclaimed')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const parseDays = (s: string) => {
    const n = parseInt(s, 10)
    return Number.isNaN(n) ? 0 : n
  }

  const filtered = items.filter((x) => {
    const q = search.toLowerCase()
    if (!q) return true
    return [x.bookingRef, x.supplier, x.traveler].some((f) => f?.toLowerCase().includes(q))
  })

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    switch (sortKey) {
      case 'bookingRef':     return a.bookingRef.localeCompare(b.bookingRef) * dir
      case 'supplier':       return a.supplier.localeCompare(b.supplier) * dir
      case 'traveler':       return (a.traveler ?? '').localeCompare(b.traveler ?? '') * dir
      case 'timeUnclaimed':  return (parseDays(a.timeUnclaimed) - parseDays(b.timeUnclaimed)) * dir
      case 'received':       return ((a.received ?? 0) - (b.received ?? 0)) * dir
      case 'match':          return a.match.localeCompare(b.match) * dir
      default:               return 0
    }
  })

  const isAdvisor = variant === 'advisor'

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
            onClick={() => onToast?.('Filters are mocked for this prototype')}
            className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Show Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="w-full text-sm">
            <thead className="bg-travefy-gray-50">
              <tr className="border-b border-travefy-gray-100">
                <SortableHeader label="Booking Ref" sortKey="bookingRef" current={sortKey} dir={sortDir} onSort={onSort} />
                <SortableHeader label="Supplier" sortKey="supplier" current={sortKey} dir={sortDir} onSort={onSort} />
                {!isAdvisor && (
                  <SortableHeader label="Traveler" sortKey="traveler" current={sortKey} dir={sortDir} onSort={onSort} />
                )}
                <SortableHeader label="Time Unclaimed" sortKey="timeUnclaimed" current={sortKey} dir={sortDir} onSort={onSort} />
                {!isAdvisor && (
                  <>
                    <SortableHeader label="Received" sortKey="received" current={sortKey} dir={sortDir} onSort={onSort} />
                    <SortableHeader label="Match" sortKey="match" current={sortKey} dir={sortDir} onSort={onSort} />
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
                        <MatchBadge value={x.match} />
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
                      <button
                        onClick={() => onViewStatement(x)}
                        className="px-3 py-1.5 rounded border border-travefy-blue text-travefy-blue text-xs font-semibold hover:bg-travefy-blue-light transition-colors"
                      >
                        View on Statement
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <RowMenu
                      onViewStatement={() => onViewStatement(x)}
                      onRemove={() => onRemove(x.id)}
                    />
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={isAdvisor ? 5 : 8} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">
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

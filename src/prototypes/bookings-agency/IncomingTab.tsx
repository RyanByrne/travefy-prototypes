import { clsx } from 'clsx'
import { ChevronDown, ChevronUp, Filter, Layers, MoreHorizontal, Plus, Search } from 'lucide-react'
import { useRef, useState } from 'react'
import { Badge } from '../../shared/components'
import type { IncomingPayment } from './incomingData'

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'date' | 'supplier' | 'reference' | 'bookings' | 'total' | 'reconciled'
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
  align?: 'left' | 'right'
}

function SortableHeader({ label, sortKey, current, dir, onSort, align = 'left' }: SortableHeaderProps) {
  return (
    <th className={clsx('px-4 py-3', align === 'right' ? 'text-right' : 'text-left')}>
      <button
        onClick={() => onSort(sortKey)}
        className={clsx(
          'inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900',
          align === 'right' && 'justify-end',
        )}
      >
        {label}
        <SortIndicator active={current === sortKey} dir={dir} />
      </button>
    </th>
  )
}

// ── Row context menu ──────────────────────────────────────────────────────────

function RowMenu({ onView, onRemove }: { onView: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors"
        aria-label="Payment actions"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-44 text-sm">
            <button
              onClick={() => { onView(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              View Details
            </button>
            <button
              onClick={() => { onRemove(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Money formatter ───────────────────────────────────────────────────────────

const fmtMoney = (n: number) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

// ── Main component ────────────────────────────────────────────────────────────

interface IncomingTabProps {
  payments: IncomingPayment[]
  onAddNew: () => void
  onViewPayment: (p: IncomingPayment) => void
  onRemovePayment: (id: string) => void
  onToast?: (text: string) => void
}

export function IncomingTab({ payments, onAddNew, onViewPayment, onRemovePayment, onToast }: IncomingTabProps) {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('date')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const filtered = payments.filter((p) => {
    const q = search.toLowerCase()
    if (!q) return true
    return [p.supplier, p.reference].some((f) => f.toLowerCase().includes(q))
  })

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    if (sortKey === 'date') {
      // Best-effort lexicographic — good enough since dates are real Date.parse-able
      return (Date.parse(a.date) - Date.parse(b.date)) * dir
    }
    if (sortKey === 'supplier')  return a.supplier.localeCompare(b.supplier) * dir
    if (sortKey === 'reference') return a.reference.localeCompare(b.reference) * dir
    if (sortKey === 'bookings')  return (a.bookings - b.bookings) * dir
    if (sortKey === 'total')     return (a.total - b.total) * dir
    if (sortKey === 'reconciled') return ((a.reconciledCount / a.bookings) - (b.reconciledCount / b.bookings)) * dir
    return 0
  })

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={onAddNew}
          className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          New Incoming Payment
        </button>

        <div className="relative flex-1 min-w-[260px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input
            type="text"
            placeholder="Search for payment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          />
        </div>

        <button
          onClick={() => onToast?.(`${sorted.length} payment${sorted.length === 1 ? '' : 's'} match`)}
          className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
        >
          Search
        </button>

        <span className="text-sm text-travefy-gray-600">
          Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {payments.length}
        </span>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() => onToast?.('Column picker is mocked for this prototype')}
            className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors"
          >
            <Layers className="w-4 h-4" />
            Select Columns
          </button>
          <button
            onClick={() => onToast?.('Filters are mocked for this prototype')}
            className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Show Filters
          </button>
          <button
            onClick={() => onToast?.('More actions (mocked)')}
            className="p-2 border border-travefy-gray-200 rounded bg-white text-travefy-gray-500 hover:bg-travefy-gray-50 hover:text-travefy-gray-700 transition-colors"
            aria-label="More"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="w-full text-sm">
            <thead className="bg-travefy-gray-50">
              <tr className="border-b border-travefy-gray-100">
                <SortableHeader label="Date" sortKey="date" current={sortKey} dir={sortDir} onSort={onSort} />
                <SortableHeader label="Supplier" sortKey="supplier" current={sortKey} dir={sortDir} onSort={onSort} />
                <SortableHeader label="Reference" sortKey="reference" current={sortKey} dir={sortDir} onSort={onSort} />
                <SortableHeader label="Bookings" sortKey="bookings" current={sortKey} dir={sortDir} onSort={onSort} />
                <SortableHeader label="Total" sortKey="total" current={sortKey} dir={sortDir} onSort={onSort} />
                <SortableHeader label="Reconciled" sortKey="reconciled" current={sortKey} dir={sortDir} onSort={onSort} />
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((p) => {
                const fullyReconciled = p.reconciledCount === p.bookings && p.bookings > 0
                return (
                  <tr
                    key={p.id}
                    onClick={() => onViewPayment(p)}
                    className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-3 text-travefy-gray-700">{p.date}</td>
                    <td className="px-4 py-3 text-travefy-blue font-medium">{p.supplier}</td>
                    <td className="px-4 py-3 text-travefy-gray-700">{p.reference}</td>
                    <td className="px-4 py-3 text-travefy-gray-700">{p.bookings}</td>
                    <td className="px-4 py-3 text-travefy-gray-700">{fmtMoney(p.total)}</td>
                    <td className="px-4 py-3">
                      <Badge variant={fullyReconciled ? 'success' : 'warning'} size="sm">
                        {p.reconciledCount}/{p.bookings}
                      </Badge>
                    </td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <RowMenu
                        onView={() => onViewPayment(p)}
                        onRemove={() => onRemovePayment(p.id)}
                      />
                    </td>
                  </tr>
                )
              })}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">
                    No payments yet. Click <strong>+ New Incoming Payment</strong> to add one.
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

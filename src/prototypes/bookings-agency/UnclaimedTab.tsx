import { clsx } from 'clsx'
import { ChevronDown, ChevronUp, Link2Off, MoreHorizontal, Pencil, Plus, Search, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import type { UnclaimedItem, UnclaimedStatus } from './unclaimedData'

type SortKey = 'reference' | 'supplier' | 'timeUnclaimed' | 'received' | 'status' | 'advisor'
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
      <button onClick={() => onSort(sortKey)} className="inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900">
        {label}
        <SortIndicator active={current === sortKey} dir={dir} />
      </button>
    </th>
  )
}

function FilterChip({ label, options, selected, onSelect }: { label: string; options: string[]; selected: string | null; onSelect: (v: string | null) => void }) {
  const [open, setOpen] = useState(false)
  const active = selected != null
  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className={clsx('flex items-center gap-2 px-3 py-1.5 border rounded text-sm font-semibold whitespace-nowrap transition-colors', active ? 'border-travefy-blue text-travefy-blue bg-travefy-blue-light' : 'border-travefy-gray-200 text-travefy-blue bg-white hover:bg-travefy-gray-50')}>
        {selected ?? label}
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-10 z-20 w-56 max-h-72 overflow-auto rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            <button onClick={() => { onSelect(null); setOpen(false) }} className="w-full px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">All {label.toLowerCase()}s</button>
            <div className="my-1 border-t border-travefy-gray-100" />
            {options.map((opt) => (
              <button key={opt} onClick={() => { onSelect(opt); setOpen(false) }} className="w-full px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">{opt}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function RowMenu({ onEdit, onRemove }: { onEdit: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="relative" ref={ref}>
      <button onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }} className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500" aria-label="Unclaimed actions">
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 w-52 rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            <button onClick={() => { onEdit(); setOpen(false) }} className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700"><Pencil className="w-4 h-4 text-travefy-gray-500" />Edit</button>
            <button onClick={() => { onRemove(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-danger">Remove from unclaimed</button>
          </div>
        </>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: UnclaimedStatus }) {
  if (status === 'match-found') {
    return (
      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-travefy-primary-border bg-travefy-blue-light px-2.5 py-0.5 text-xs font-semibold text-travefy-primary-text">
        <Star className="w-3 h-3 fill-current" />
        Match Found
      </span>
    )
  }
  return <span className="inline-flex items-center whitespace-nowrap rounded-full border border-travefy-danger-border bg-travefy-danger-bg px-2.5 py-0.5 text-xs font-semibold text-travefy-danger-dark">Unclaimed</span>
}

const fmtMoney = (n: number) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

interface UnclaimedTabProps {
  items: UnclaimedItem[]
  onReconcile: (item: UnclaimedItem) => void
  onSearchMatch: (item: UnclaimedItem) => void
  onUnlink: (item: UnclaimedItem) => void
  onRemove: (id: string) => void
  onEdit?: (item: UnclaimedItem) => void
  onToast?: (text: string) => void
  variant?: 'agency' | 'advisor'
}

export function UnclaimedTab({ items, onReconcile, onSearchMatch, onUnlink, onRemove, onEdit, onToast, variant = 'agency' }: UnclaimedTabProps) {
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
  const parseDays = (s: string) => { const n = parseInt(s, 10); return Number.isNaN(n) ? 0 : n }

  const filtered = items.filter((x) => {
    if (selectedSupplier && x.supplier !== selectedSupplier) return false
    if (selectedStatement && x.statementRef !== selectedStatement) return false
    const q = search.toLowerCase()
    if (!q) return true
    return [x.reference, x.supplier, x.advisor].some((f) => f?.toLowerCase().includes(q))
  })
  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    switch (sortKey) {
      case 'reference': return a.reference.localeCompare(b.reference) * dir
      case 'supplier': return a.supplier.localeCompare(b.supplier) * dir
      case 'timeUnclaimed': return (parseDays(a.timeUnclaimed) - parseDays(b.timeUnclaimed)) * dir
      case 'received': return ((a.received ?? 0) - (b.received ?? 0)) * dir
      case 'status': return a.status.localeCompare(b.status) * dir
      case 'advisor': return (a.advisor ?? '').localeCompare(b.advisor ?? '') * dir
      default: return 0
    }
  })
  const resetFilters = () => { setSelectedSupplier(null); setSelectedStatement(null); setSearch('') }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[280px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input type="text" placeholder="Search Unclaimed Bookings" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue" />
        </div>
        <button onClick={() => onToast?.(`${sorted.length} unclaimed booking${sorted.length === 1 ? '' : 's'}`)} className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Search</button>
        <span className="text-sm text-travefy-gray-600">Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {items.length}</span>
        <div className="ml-auto">
          <button onClick={() => setShowFilters((v) => !v)} className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors">{showFilters ? 'Hide Filters' : 'Show Filters'}</button>
        </div>
      </div>

      {showFilters && !isAdvisor && (
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <FilterChip label="Supplier" options={suppliers} selected={selectedSupplier} onSelect={setSelectedSupplier} />
          <FilterChip label="Statement" options={statements} selected={selectedStatement} onSelect={setSelectedStatement} />
          <button onClick={resetFilters} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Reset Filters</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-visible">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="w-full text-sm">
            <thead className="bg-travefy-gray-50">
              <tr className="border-b border-travefy-gray-100">
                <SortableHeader label="Reference" sortKey="reference" current={sortKey} dir={sortDir} onSort={onSort} />
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Statement</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Supplier</th>
                {!isAdvisor && <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Received</th>}
                <SortableHeader label="Time Unclaimed" sortKey="timeUnclaimed" current={sortKey} dir={sortDir} onSort={onSort} />
                {!isAdvisor && (
                  <>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Split</th>
                    <SortableHeader label="Status" sortKey="status" current={sortKey} dir={sortDir} onSort={onSort} />
                    <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Matching Booking</th>
                    <SortableHeader label="Advisor" sortKey="advisor" current={sortKey} dir={sortDir} onSort={onSort} />
                    <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Expected</th>
                  </>
                )}
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Action</th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((x) => (
                <tr key={x.id} className="group border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors">
                  <td className="px-4 py-3 text-travefy-navy font-medium">{x.reference}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{x.statementRef}</td>
                  <td className="px-4 py-3 text-travefy-blue">{x.supplier}</td>
                  {!isAdvisor && (
                    <td className="px-4 py-3">
                      {x.received !== null ? (
                        <span className={clsx(x.receivedMismatch && 'underline decoration-travefy-danger decoration-wavy underline-offset-4', 'text-travefy-gray-700')}>{fmtMoney(x.received)}</span>
                      ) : <span className="text-travefy-gray-400">--</span>}
                    </td>
                  )}
                  <td className="px-4 py-3 text-travefy-gray-700">{x.timeUnclaimed}</td>
                  {!isAdvisor && (
                    <>
                      <td className="px-4 py-3">
                        {x.split !== null ? (
                          <span className={clsx(x.splitMismatch && 'underline decoration-travefy-danger decoration-wavy underline-offset-4', 'text-travefy-gray-700')}>{x.split}%</span>
                        ) : <span className="text-travefy-gray-400">--</span>}
                      </td>
                      <td className="px-4 py-3"><StatusBadge status={x.status} /></td>
                      <td className="px-4 py-3">
                        {x.status === 'unclaimed' ? (
                          <div className="flex items-center gap-2">
                            <button onClick={() => onSearchMatch(x)} className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded bg-travefy-blue text-white text-xs font-semibold hover:bg-travefy-blue-dark"><Search className="w-3.5 h-3.5 shrink-0" />Search for booking</button>
                            <button onClick={() => onToast?.('Add booking manually is mocked for this prototype')} className="p-1.5 rounded border border-travefy-gray-200 text-travefy-blue hover:bg-travefy-gray-50" aria-label="Add booking"><Plus className="w-4 h-4" /></button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <a className="text-travefy-blue underline underline-offset-2 cursor-pointer" onClick={() => onToast?.('Booking detail is mocked for this prototype')}>{x.matchingBookingRef}</a>
                            <span className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                              <button onClick={() => onUnlink(x)} className="p-1 rounded border border-travefy-gray-200 text-travefy-danger hover:bg-travefy-danger-bg" aria-label="Unlink"><Link2Off className="w-3.5 h-3.5" /></button>
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-travefy-gray-700">{x.advisor ?? <span className="text-travefy-gray-400">--</span>}</td>
                      <td className="px-4 py-3 text-travefy-gray-700">{x.expected !== null ? fmtMoney(x.expected) : <span className="text-travefy-gray-400">--</span>}</td>
                    </>
                  )}
                  <td className="px-4 py-3">
                    {x.status === 'match-found' && (
                      <button onClick={() => onReconcile(x)} className="px-3 py-1.5 rounded border border-travefy-gray-200 text-travefy-gray-700 text-xs font-semibold whitespace-nowrap hover:bg-travefy-gray-50">Reconcile</button>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <RowMenu onEdit={() => onEdit?.(x)} onRemove={() => onRemove(x.id)} />
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={isAdvisor ? 5 : 11} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">No unclaimed bookings.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

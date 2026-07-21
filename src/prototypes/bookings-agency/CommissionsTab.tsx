import { clsx } from 'clsx'
import {
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  ExternalLink,
  Layers,
  LineChart,
  Link2Off,
  Pencil,
  Percent,
  Plus,
  Search,
  Sliders,
  Star,
  Trash2,
  Zap,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { commissionAdjustedTotal, commissionTotals, type CommissionLine, type CommissionStatus } from './commissionsData'

interface CommissionsTabProps {
  commissions: CommissionLine[]
  onReconcile: (id: string) => void
  onUnreconcile: (id: string) => void
  onMarkUnclaimed: (id: string) => void
  onSearchBooking: (id: string) => void
  onUnlink: (id: string) => void
  onRemove: (id: string) => void
  onExport: () => void
  onNewCommission: () => void
  /** Open the Edit Commission drawer. */
  onOpenDrawer: (c: CommissionLine) => void
  onViewPayout: (c: CommissionLine) => void
  onToast?: (text: string) => void
}

const fmtMoney = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`)

// ── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg px-6 py-5">
      <div className="w-8 h-8 rounded-full bg-travefy-gray-100 flex items-center justify-center text-travefy-gray-500 mb-3">{icon}</div>
      <p className="text-3xl font-semibold text-travefy-navy leading-none">{value}</p>
      <p className="text-sm text-travefy-gray-600 mt-2">{label}</p>
    </div>
  )
}

// ── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: CommissionStatus }) {
  if (status === 'match-found') {
    return (
      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded border border-travefy-primary-border bg-travefy-blue-light px-2.5 py-1 text-xs font-semibold text-travefy-primary-text">
        <Star className="w-3 h-3 fill-current" />
        Match Found
      </span>
    )
  }
  if (status === 'reconciled' || status === 'disbursed') {
    return <span className="inline-flex items-center whitespace-nowrap rounded border border-travefy-success-border bg-travefy-success-bg px-2.5 py-1 text-xs font-semibold text-travefy-success-dark">{status === 'disbursed' ? 'Disbursed' : 'Reconciled'}</span>
  }
  return <span className="inline-flex items-center whitespace-nowrap rounded border border-travefy-warning-border bg-travefy-warning-bg px-2.5 py-1 text-xs font-semibold text-travefy-warning-dark">No Match</span>
}

// Simple icon + tooltip shown on the Amount cell when a commission has adjustments.
function AdjustedIndicator({ c }: { c: CommissionLine }) {
  const n = c.adjustments?.length ?? 0
  if (n === 0) return null
  const total = commissionAdjustedTotal(c)
  const auto = c.adjustments?.find((a) => a.auto)
  return (
    <span className="group/adj relative inline-flex cursor-help text-travefy-blue" aria-label="Adjusted">
      {auto ? <Zap className="h-3.5 w-3.5" /> : <Sliders className="h-3.5 w-3.5" />}
      <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-travefy-navy px-2.5 py-1.5 text-xs text-white shadow-lg group-hover/adj:block">
        {n} adjustment{n === 1 ? '' : 's'} · Net {`$${Number.isInteger(total) ? total : total.toFixed(2)}`}
        {auto && <span className="mt-0.5 block text-travefy-blue-light">Auto · {auto.rule ?? 'supplier rule'}</span>}
      </span>
    </span>
  )
}

// ── Mismatch cell (red underline + hover tooltip) ────────────────────────────

function MismatchCell({ children, tip, flagged }: { children: React.ReactNode; tip: string; flagged?: boolean }) {
  if (!flagged) return <span className="text-travefy-gray-700">{children}</span>
  return (
    <span className="group relative inline-block cursor-help text-travefy-gray-700 underline decoration-travefy-danger decoration-wavy underline-offset-4">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-travefy-navy px-2.5 py-1.5 text-xs text-white shadow-lg group-hover:block">{tip}</span>
    </span>
  )
}

// ── Sort + filter helpers ─────────────────────────────────────────────────────

type SortKey = 'status' | 'advisor'
type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="inline-flex flex-col -space-y-1 ml-1">
      <ChevronUp className={clsx('w-3 h-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('w-3 h-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

function FilterChip({ label, options, selected, onSelect }: { label: string; options: string[]; selected: string | null; onSelect: (v: string | null) => void }) {
  const [open, setOpen] = useState(false)
  const active = selected != null
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx('flex items-center gap-2 px-3 py-1.5 border rounded text-sm font-semibold whitespace-nowrap transition-colors', active ? 'border-travefy-blue text-travefy-blue bg-travefy-blue-light' : 'border-travefy-gray-200 text-travefy-blue bg-white hover:bg-travefy-gray-50')}
      >
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

interface MenuItem { label: string; icon: React.ReactNode; onClick: () => void; danger?: boolean }

function RowMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="relative" ref={ref}>
      <button onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }} className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500" aria-label="Row actions">
        <span className="block leading-none tracking-widest text-sm">···</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={(e) => { e.stopPropagation(); setOpen(false) }} />
          <div className="absolute right-0 top-9 z-20 w-44 rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            {items.map((it, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); it.onClick(); setOpen(false) }} className={clsx('flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-travefy-gray-50', it.danger ? 'text-travefy-danger' : 'text-travefy-gray-700')}>
                {it.icon}
                {it.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

export function CommissionsTab({
  commissions,
  onReconcile,
  onUnreconcile,
  onMarkUnclaimed,
  onSearchBooking,
  onUnlink,
  onRemove,
  onExport,
  onNewCommission,
  onOpenDrawer,
  onViewPayout,
  onToast,
}: CommissionsTabProps) {
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [sortKey, setSortKey] = useState<SortKey | null>(null)
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null)
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const suppliers = Array.from(new Set(commissions.map((c) => c.supplier))).sort()
  const statements = Array.from(new Set(commissions.map((c) => c.statementRef))).sort()
  const statusMap: Record<string, CommissionStatus> = { 'No Match': 'no-match', 'Match Found': 'match-found', Reconciled: 'reconciled', Disbursed: 'disbursed' }

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const filtered = commissions.filter((c) => {
    if (selectedSupplier && c.supplier !== selectedSupplier) return false
    if (selectedStatement && c.statementRef !== selectedStatement) return false
    if (selectedStatus && c.status !== statusMap[selectedStatus]) return false
    const q = search.trim().toLowerCase()
    if (!q) return true
    return [c.reference, c.supplier, c.advisor, c.matchingBookingRef].some((f) => f?.toLowerCase().includes(q))
  })
  const sorted = sortKey
    ? [...filtered].sort((a, b) => String(a[sortKey] ?? '').localeCompare(String(b[sortKey] ?? '')) * (sortDir === 'asc' ? 1 : -1))
    : filtered

  const resetFilters = () => { setSelectedSupplier(null); setSelectedStatement(null); setSelectedStatus(null); setSearch('') }

  return (
    <>
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard icon={<LineChart className="w-4 h-4" />} value={commissionTotals.total} label="Total" />
        <StatCard icon={<Percent className="w-4 h-4" />} value={commissionTotals.reconciled} label="Reconciled" />
        <StatCard icon={<Clock className="w-4 h-4" />} value={commissionTotals.unreconciled} label="Unreconciled" />
        <StatCard icon={<DollarSign className="w-4 h-4" />} value={commissionTotals.disbursed} label="Disbursed" />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <button onClick={onNewCommission} className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0">
          <Plus className="w-4 h-4" />
          New Commission
        </button>
        <div className="relative flex-1 min-w-[280px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input type="text" placeholder="Search Commissions" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue" />
        </div>
        <button onClick={() => onToast?.(`${sorted.length} commission${sorted.length === 1 ? '' : 's'} match`)} className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Search</button>
        <span className="text-sm text-travefy-gray-600">Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {commissions.length}</span>
        <div className="ml-auto flex items-center gap-3">
          <button onClick={() => onToast?.('Column picker is mocked for this prototype')} className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors">
            <Layers className="w-4 h-4" />
            Select Columns
          </button>
          <button onClick={() => setShowFilters((v) => !v)} className="px-3 py-2 rounded bg-travefy-navy text-white text-sm font-semibold hover:bg-travefy-gray-800 transition-colors">{showFilters ? 'Hide Filters' : 'Show Filters'}</button>
          <button onClick={onExport} className="p-2 rounded border border-travefy-gray-200 text-travefy-gray-500 hover:bg-travefy-gray-50" aria-label="More actions" title="Export Commissions">
            <span className="block leading-none tracking-widest text-sm">···</span>
          </button>
        </div>
      </div>

      {/* Filter chips */}
      {showFilters && (
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <FilterChip label="Supplier" options={suppliers} selected={selectedSupplier} onSelect={setSelectedSupplier} />
          <FilterChip label="Statement" options={statements} selected={selectedStatement} onSelect={setSelectedStatement} />
          <FilterChip label="Status" options={['No Match', 'Match Found', 'Reconciled', 'Disbursed']} selected={selectedStatus} onSelect={setSelectedStatus} />
          <button onClick={resetFilters} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Reset Filters</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-visible">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-travefy-gray-100 text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">
                <th className="px-4 py-3 text-left">Reference</th>
                <th className="px-4 py-3 text-left">Statement</th>
                <th className="px-4 py-3 text-left">Supplier</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Split</th>
                <th className="px-4 py-3 text-left">
                  <button onClick={() => onSort('status')} className="flex items-center uppercase hover:text-travefy-gray-900">Status <SortIndicator active={sortKey === 'status'} dir={sortDir} /></button>
                </th>
                <th className="px-4 py-3 text-left">Matching Booking</th>
                <th className="px-4 py-3 text-left">
                  <button onClick={() => onSort('advisor')} className="flex items-center uppercase hover:text-travefy-gray-900">Advisor <SortIndicator active={sortKey === 'advisor'} dir={sortDir} /></button>
                </th>
                <th className="px-4 py-3 text-left">Action</th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((c) => (
                <tr key={c.id} onClick={() => onOpenDrawer(c)} className="group cursor-pointer border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-travefy-navy">{c.reference}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.statementRef}</td>
                  <td className="px-4 py-3 text-travefy-blue">{c.supplier}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {c.received !== null ? (
                        <MismatchCell tip="Amount received does not match the advisor's expected amount." flagged={c.receivedMismatch}>{fmtMoney(c.received)}</MismatchCell>
                      ) : (
                        <span className="text-travefy-gray-400">--</span>
                      )}
                      <AdjustedIndicator c={c} />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {c.split !== null ? (
                        <MismatchCell tip="Split does not match the advisor's expected amount." flagged={c.splitMismatch}>{c.split}%</MismatchCell>
                      ) : (
                        <span className="text-travefy-gray-400">--</span>
                      )}
                      <span className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                        <button onClick={(e) => { e.stopPropagation(); onOpenDrawer(c) }} className="p-1 rounded border border-travefy-gray-200 text-travefy-gray-500 hover:bg-travefy-gray-50" aria-label="Edit commission"><Pencil className="w-3.5 h-3.5" /></button>
                        <button onClick={(e) => { e.stopPropagation(); onRemove(c.id) }} className="p-1 rounded border border-travefy-gray-200 text-travefy-danger hover:bg-travefy-danger-bg" aria-label="Delete commission"><Trash2 className="w-3.5 h-3.5" /></button>
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3">
                    {c.status === 'no-match' ? (
                      <div className="flex items-center gap-2">
                        <button onClick={(e) => { e.stopPropagation(); onSearchBooking(c.id) }} className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded bg-travefy-blue text-white text-xs font-semibold hover:bg-travefy-blue-dark"><Search className="w-3.5 h-3.5 shrink-0" />Search for booking</button>
                        <button onClick={(e) => { e.stopPropagation(); onToast?.('Add booking manually is mocked for this prototype') }} className="p-1.5 rounded border border-travefy-gray-200 text-travefy-blue hover:bg-travefy-gray-50" aria-label="Add booking"><Plus className="w-4 h-4" /></button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <a className="text-travefy-blue underline underline-offset-2 cursor-pointer" onClick={(e) => { e.stopPropagation(); onToast?.('Booking detail is mocked for this prototype') }}>{c.matchingBookingRef}</a>
                        {(c.status === 'match-found' || c.status === 'reconciled') && (
                          <span className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                            <button onClick={(e) => { e.stopPropagation(); onOpenDrawer(c) }} className="p-1 rounded border border-travefy-gray-200 text-travefy-gray-500 hover:bg-travefy-gray-50" aria-label="Edit match"><Pencil className="w-3.5 h-3.5" /></button>
                            <button onClick={(e) => { e.stopPropagation(); onUnlink(c.id) }} className="p-1 rounded border border-travefy-gray-200 text-travefy-danger hover:bg-travefy-danger-bg" aria-label="Unlink booking"><Link2Off className="w-3.5 h-3.5" /></button>
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.advisor ?? <span className="text-travefy-gray-400">--</span>}</td>
                  <td className="px-4 py-3">
                    {c.status === 'no-match' && (
                      <button onClick={(e) => { e.stopPropagation(); onMarkUnclaimed(c.id) }} className="px-3 py-1.5 rounded border border-travefy-danger text-travefy-danger text-xs font-semibold whitespace-nowrap hover:bg-travefy-danger-bg">Mark Unclaimed</button>
                    )}
                    {c.status === 'match-found' && (
                      <button onClick={(e) => { e.stopPropagation(); onReconcile(c.id) }} className="px-3 py-1.5 rounded border border-travefy-gray-200 text-travefy-gray-700 text-xs font-semibold whitespace-nowrap hover:bg-travefy-gray-50">Reconcile</button>
                    )}
                    {c.status === 'reconciled' && (
                      <button onClick={(e) => { e.stopPropagation(); onUnreconcile(c.id) }} className="px-3 py-1.5 rounded border border-travefy-danger text-travefy-danger text-xs font-semibold whitespace-nowrap hover:bg-travefy-danger-bg">Unreconcile</button>
                    )}
                    {c.status === 'disbursed' && (
                      <button onClick={(e) => { e.stopPropagation(); onViewPayout(c) }} className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-gray-200 text-travefy-blue text-xs font-semibold whitespace-nowrap hover:bg-travefy-gray-50"><ExternalLink className="w-3.5 h-3.5" />View in Payout</button>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <RowMenu items={[
                      { label: 'Edit', icon: <Pencil className="w-4 h-4 text-travefy-gray-500" />, onClick: () => onOpenDrawer(c) },
                      { label: 'Remove', icon: <Trash2 className="w-4 h-4" />, onClick: () => onRemove(c.id), danger: true },
                    ]} />
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">No commissions match the current filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

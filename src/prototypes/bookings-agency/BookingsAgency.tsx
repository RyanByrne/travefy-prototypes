import { clsx } from 'clsx'
import {
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  FileText,
  Filter,
  Info,
  Layers,
  Pencil,
  Plus,
  Search,
  X,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { AppNav, Badge } from '../../shared/components'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { bookings, locations, totals, type Booking, type ReconStatus } from './data'

// ── Tabs ──────────────────────────────────────────────────────────────────────

const TABS = ['Bookings', 'Incoming', 'Outgoing', 'Unclaimed'] as const
type Tab = (typeof TABS)[number]

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg px-6 py-5 flex items-start justify-between">
      <div>
        <p className="text-3xl font-semibold text-travefy-navy leading-none">{value}</p>
        <p className="text-sm text-travefy-gray-600 mt-3">{label}</p>
      </div>
      <button
        className="w-5 h-5 rounded-full bg-travefy-gray-700 text-white flex items-center justify-center shrink-0 hover:bg-travefy-gray-800 transition-colors"
        title={`About ${label}`}
      >
        <Info className="w-3 h-3" />
      </button>
    </div>
  )
}

// ── Recon status badge ────────────────────────────────────────────────────────

const reconConfig: Record<ReconStatus, { label: string; variant: 'success' | 'warning' | 'primary' }> = {
  reconciled: { label: 'Reconciled', variant: 'success' },
  expected:   { label: 'Expected',   variant: 'warning' },
  disbursed:  { label: 'Disbursed',  variant: 'primary' },
}

// ── Row context menu ──────────────────────────────────────────────────────────

function RowMenu({ onEdit, onViewPayout, onRemove }: { onEdit: () => void; onViewPayout: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors"
        aria-label="Booking actions"
      >
        <span className="block leading-none tracking-widest text-sm">···</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-44 text-sm">
            <button
              onClick={() => { onEdit(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              <Pencil className="w-4 h-4 text-travefy-gray-500" />
              Edit Booking
            </button>
            <button
              onClick={() => { onViewPayout(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-blue-light text-travefy-gray-700"
            >
              <CircleDollarSign className="w-4 h-4 text-travefy-gray-500" />
              View in Payout
            </button>
            <button
              onClick={() => { onRemove(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              <X className="w-4 h-4 text-travefy-gray-500" />
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'bookingRef' | 'supplier' | 'advisor' | 'location' | 'travelDate' | 'received' | 'split' | 'traveler' | 'reconStatus'
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
  hint?: boolean
}

function SortableHeader({ label, sortKey, current, dir, onSort, hint }: SortableHeaderProps) {
  return (
    <th className="px-4 py-3 text-left">
      <button
        onClick={() => onSort(sortKey)}
        className="flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900"
      >
        {label}
        {hint && <Info className="w-3 h-3 ml-1 text-travefy-gray-400" />}
        <SortIndicator active={current === sortKey} dir={dir} />
      </button>
    </th>
  )
}

// ── Filter chip ───────────────────────────────────────────────────────────────

interface FilterChipProps {
  icon?: React.ReactNode
  label: string
  dropdown?: boolean
  onClick?: () => void
  /** When provided, renders a popover with these options on open. */
  options?: readonly string[]
  open?: boolean
  selected?: string | null
  onSelect?: (value: string | null) => void
}

function FilterChip({ icon, label, dropdown, onClick, options, open, selected, onSelect }: FilterChipProps) {
  const active = selected != null
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={
          active
            ? 'flex items-center gap-2 px-3 py-1.5 border border-travefy-blue rounded text-sm font-semibold text-travefy-blue bg-travefy-blue-light hover:bg-travefy-blue-light/80 transition-colors'
            : 'flex items-center gap-2 px-3 py-1.5 border border-travefy-gray-200 rounded text-sm font-semibold text-travefy-blue bg-white hover:bg-travefy-gray-50 transition-colors'
        }
      >
        {icon}
        {label}
        {dropdown && <ChevronDown className="w-4 h-4" />}
      </button>
      {open && options && onSelect && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => onSelect(selected ?? null)} />
          <div className="absolute right-0 top-10 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-64 text-sm max-h-72 overflow-auto">
            <button
              onClick={() => onSelect(null)}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              <span>All locations</span>
              {selected == null && <Check className="w-4 h-4 text-travefy-blue" />}
            </button>
            <div className="border-t border-travefy-gray-100 my-1" />
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelect(opt)}
                className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-travefy-gray-50 text-travefy-gray-700"
              >
                <span>{opt}</span>
                {selected === opt && <Check className="w-4 h-4 text-travefy-blue" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Money / split formatters ──────────────────────────────────────────────────

const fmtMoney = (n: number) => (Number.isInteger(n) ? `US$${n}` : `US$${n.toFixed(2)}`)
const fmtSplit = (n: number) => `${n.toFixed(2)}%`

// ── Main component ────────────────────────────────────────────────────────────

export function BookingsAgency() {
  const [tab, setTab] = useState<Tab>('Bookings')
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [sortKey, setSortKey] = useState<SortKey>('bookingRef')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [locationOpen, setLocationOpen] = useState(false)

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const filtered = bookings.filter((b) => {
    if (selectedLocation && b.location !== selectedLocation) return false
    const q = search.toLowerCase()
    if (!q) return true
    return [b.bookingRef, b.supplier, b.advisor, b.location, b.traveler].some((f) => f?.toLowerCase().includes(q))
  })

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    const av = (a[sortKey] ?? '') as string | number
    const bv = (b[sortKey] ?? '') as string | number
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir
    return String(av).localeCompare(String(bv)) * dir
  })

  return (
    <PrototypeShell title="Bookings Agency" fullBleed>
      <div className="flex flex-col flex-1 min-h-0 bg-travefy-gray-50">
        <AppNav
          navItems={['Trips', 'Pages', 'Library', 'Marketplace', 'Contacts']}
          activeItem=""
          userName="Sam Rivera"
          notifications={[
            {
              id: 'paymode-statement',
              icon: <FileText className="w-4 h-4 text-travefy-blue" />,
              title: 'New pay statement from PayMode',
              body: 'Your latest commission payout is ready to review.',
              ctaLabel: 'View statement',
            },
          ]}
        />

        <div className="flex-1 overflow-auto">
          <div className="px-6 py-5 space-y-5">
            {/* Tabs */}
            <div className="flex gap-2">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={
                    tab === t
                      ? 'px-5 py-2 text-sm font-semibold text-white bg-travefy-navy rounded'
                      : 'px-5 py-2 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 rounded transition-colors'
                  }
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard value={totals.totalBookings} label="Total Bookings" />
              <StatCard value={totals.expectedCommission} label="Expected Commission" />
              <StatCard value={totals.receivedCommission} label="Received Commission" />
              <StatCard value={totals.disbursed} label="Disbursed" />
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0">
                <Plus className="w-4 h-4" />
                New Booking
              </button>

              <div className="relative flex-1 min-w-[280px] max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
                <input
                  type="text"
                  placeholder="Search for multiple bookings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                />
              </div>

              <button className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">
                Search
              </button>

              <span className="text-sm text-travefy-gray-600">
                Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {bookings.length}
              </span>

              <div className="ml-auto flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors">
                  <Layers className="w-4 h-4" />
                  Select Columns
                </button>
                <button
                  onClick={() => setShowFilters((v) => !v)}
                  className="flex items-center gap-2 px-3 py-2 rounded bg-travefy-navy text-white text-sm font-semibold hover:bg-travefy-gray-800 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>
            </div>

            {/* Filter chips */}
            {showFilters && (
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <FilterChip icon={<Calendar className="w-4 h-4" />} label="Booking Date Range" />
                <FilterChip icon={<Calendar className="w-4 h-4" />} label="Travel Date Range" />
                <FilterChip
                  icon={<Building2 className="w-4 h-4" />}
                  label={selectedLocation ?? 'Location'}
                  dropdown
                  onClick={() => setLocationOpen((v) => !v)}
                  options={locations}
                  open={locationOpen}
                  selected={selectedLocation}
                  onSelect={(v) => { setSelectedLocation(v); setLocationOpen(false) }}
                />
                <FilterChip label="Advisor" dropdown />
                <FilterChip label="Status" dropdown />
                <button
                  onClick={() => { setSelectedLocation(null); setSearch('') }}
                  className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Table */}
            <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto overflow-y-visible">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-travefy-gray-100">
                      <SortableHeader label="Booking Ref" sortKey="bookingRef" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Supplier" sortKey="supplier" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Advisor" sortKey="advisor" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Location" sortKey="location" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Travel Date" sortKey="travelDate" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Received" sortKey="received" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Split" sortKey="split" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Traveler" sortKey="traveler" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Recon Status" sortKey="reconStatus" current={sortKey} dir={sortDir} onSort={onSort} />
                      <th className="w-12 px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((b) => (
                      <BookingRow key={b.id} booking={b} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrototypeShell>
  )
}

// ── Row ───────────────────────────────────────────────────────────────────────

function BookingRow({ booking: b }: { booking: Booking }) {
  const recon = reconConfig[b.reconStatus]

  return (
    <tr className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors">
      <td className="px-4 py-3 text-travefy-blue font-medium">
        {b.bookingRef ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-blue">{b.supplier}</td>
      <td className="px-4 py-3 text-travefy-blue">{b.advisor}</td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.location ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.travelDate ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.received !== null ? fmtMoney(b.received) : <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-gray-700">{fmtSplit(b.split)}</td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.traveler ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3">
        <Badge variant={recon.variant} size="sm">{recon.label}</Badge>
      </td>
      <td className="px-4 py-3">
        <RowMenu
          onEdit={() => {}}
          onViewPayout={() => {}}
          onRemove={() => {}}
        />
      </td>
    </tr>
  )
}

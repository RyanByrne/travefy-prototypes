import { clsx } from 'clsx'
import { Banknote, ChevronDown, ChevronUp, Layers, Plus, Search } from 'lucide-react'
import { useRef, useState } from 'react'
import { Badge, Toggle } from '../../shared/components'
import { fmtUsd, payoutTotals, type Payout } from './payoutsData'

interface PayoutsTabProps {
  payouts: Payout[]
  onNewPayout: () => void
  onOpenPayout: (p: Payout) => void
  onArchivePayout: (id: string) => void
  onRemovePayout: (id: string) => void
  onToast?: (text: string) => void
}

type SortKey = 'name' | 'bookings' | 'total' | 'disbursement'
type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="ml-1 inline-flex flex-col -space-y-1">
      <ChevronUp className={clsx('h-3 w-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('h-3 w-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

function RowMenu({ onView, onArchive, onRemove }: { onView: () => void; onArchive: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="rounded border border-travefy-gray-200 p-1.5 text-travefy-gray-500 hover:bg-travefy-gray-50"
        aria-label="Payout actions"
      >
        <span className="block leading-none tracking-widest text-sm">···</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={(e) => { e.stopPropagation(); setOpen(false) }} />
          <div className="absolute right-0 top-9 z-20 w-44 rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            {[
              { label: 'View Payout', fn: onView, danger: false },
              { label: 'Archive', fn: onArchive, danger: false },
              { label: 'Remove', fn: onRemove, danger: true },
            ].map((it) => (
              <button
                key={it.label}
                onClick={(e) => { e.stopPropagation(); it.fn(); setOpen(false) }}
                className={clsx('block w-full px-3 py-2 text-left hover:bg-travefy-gray-50', it.danger ? 'text-travefy-danger' : 'text-travefy-gray-700')}
              >
                {it.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function PayoutsTab({ payouts, onNewPayout, onOpenPayout, onArchivePayout, onRemovePayout, onToast }: PayoutsTabProps) {
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [showArchived, setShowArchived] = useState(false)
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const rows = payouts
    .filter((p) => (showArchived || !p.archived) && p.name.toLowerCase().includes(search.trim().toLowerCase()))
    .map((p) => ({ p, t: payoutTotals(p) }))

  const sorted = [...rows].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    switch (sortKey) {
      case 'name': return a.p.name.localeCompare(b.p.name) * dir
      case 'bookings': return (a.t.bookings - b.t.bookings) * dir
      case 'total': return (a.t.total - b.t.total) * dir
      case 'disbursement': return (a.t.disbursedBookings - b.t.disbursedBookings) * dir
      default: return 0
    }
  })

  const header = (label: string, key: SortKey, extra?: string) => (
    <th className={clsx('px-4 py-3 text-left', extra)}>
      <button onClick={() => onSort(key)} className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-travefy-gray-600 hover:text-travefy-gray-900">
        {label}
        <SortIndicator active={sortKey === key} dir={sortDir} />
      </button>
    </th>
  )

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onNewPayout}
          className="flex shrink-0 items-center gap-2 rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark"
        >
          <Plus className="h-4 w-4" />
          New Payout
        </button>

        <div className="relative min-w-[280px] max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-travefy-gray-400" />
          <input
            placeholder="Search for payouts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded border border-travefy-gray-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20"
          />
        </div>

        <button
          onClick={() => onToast?.(`${sorted.length} payout${sorted.length === 1 ? '' : 's'} match`)}
          className="rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark"
        >
          Search
        </button>

        <span className="text-sm text-travefy-gray-600">
          Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {payouts.filter((p) => showArchived || !p.archived).length}
        </span>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() => onToast?.('Column picker is mocked for this prototype')}
            className="flex items-center gap-2 rounded border border-travefy-gray-200 bg-white px-3 py-2 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50"
          >
            <Layers className="h-4 w-4" />
            Select Columns
          </button>
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="rounded bg-travefy-navy px-3 py-2 text-sm font-semibold text-white hover:bg-travefy-gray-800"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      {/* Filter row */}
      {showFilters && (
        <div className="flex items-center justify-end gap-3">
          <Toggle
            label="Show Archived"
            checked={showArchived}
            onChange={(e) => setShowArchived(e.target.checked)}
          />
          <button
            onClick={() => { setSearch(''); setShowArchived(false) }}
            className="rounded border border-travefy-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Table / empty state (overflow-visible so the row ··· menu isn't clipped) */}
      <div className="overflow-visible rounded-lg border border-travefy-gray-200 bg-white">
        {sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
            <Banknote className="mb-3 h-12 w-12 text-travefy-blue" />
            <p className="text-sm text-travefy-gray-600">
              There are currently no payouts to show.{' '}
              <button onClick={() => { setSearch(''); setShowArchived(false) }} className="font-semibold text-travefy-blue hover:underline">
                Try resetting your filters.
              </button>
            </p>
            <button
              onClick={onNewPayout}
              className="mt-4 flex items-center gap-2 rounded border border-travefy-gray-200 px-4 py-2 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50"
            >
              <Plus className="h-4 w-4" />
              New Payout
            </button>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-travefy-gray-50">
              <tr className="border-b border-travefy-gray-100">
                {header('Payout', 'name')}
                {header('Bookings', 'bookings')}
                {header('Total', 'total')}
                {header('Disbursement', 'disbursement')}
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {sorted.map(({ p, t }) => {
                const allDisbursed = t.bookings > 0 && t.disbursedBookings === t.bookings
                return (
                  <tr
                    key={p.id}
                    onClick={() => onOpenPayout(p)}
                    className="cursor-pointer border-b border-travefy-gray-100 hover:bg-travefy-gray-50"
                  >
                    <td className="px-4 py-3 font-semibold text-travefy-navy">
                      {p.name}
                      {p.archived && <span className="ml-2 text-xs font-normal text-travefy-gray-400">Archived</span>}
                    </td>
                    <td className="px-4 py-3 text-travefy-gray-700">{t.bookings}</td>
                    <td className="px-4 py-3 text-travefy-gray-700">{fmtUsd(t.total)}</td>
                    <td className="px-4 py-3">
                      <Badge variant={allDisbursed ? 'success' : 'warning'} size="sm">
                        {t.disbursedBookings}/{t.bookings}
                      </Badge>
                    </td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <RowMenu
                        onView={() => onOpenPayout(p)}
                        onArchive={() => onArchivePayout(p.id)}
                        onRemove={() => onRemovePayout(p.id)}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

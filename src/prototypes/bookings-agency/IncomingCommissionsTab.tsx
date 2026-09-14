import { clsx } from 'clsx'
import { ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'
import {
  INCOMING_STATUS_LABEL,
  fmtIncomingMoney,
  type IncomingCommission,
  type IncomingStatus,
} from './incomingCommissionsData'

interface Props {
  commissions: IncomingCommission[]
  /** Statuses that don't apply to this role's context (hidden from cards, filter and table). */
  hideStatuses?: IncomingStatus[]
}

// ── Status badge ──────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: IncomingStatus }) {
  // Grey variations: darkest (received) -> lightest (furthest out).
  const cls =
    status === 'paid-by-supplier'
      ? 'border-travefy-gray-700 bg-travefy-gray-700 text-white'
      : status === 'in-payout'
        ? 'border-travefy-gray-300 bg-travefy-gray-100 text-travefy-gray-700'
        : 'border-travefy-gray-200 bg-white text-travefy-gray-500'
  return <span className={clsx('inline-flex items-center whitespace-nowrap rounded border px-2.5 py-1 text-xs font-semibold', cls)}>{INCOMING_STATUS_LABEL[status]}</span>
}

// ── Status filter chip ────────────────────────────────────────────────────────

function FilterChip({ options, selected, onSelect }: { options: IncomingStatus[]; selected: IncomingStatus | null; onSelect: (v: IncomingStatus | null) => void }) {
  const [open, setOpen] = useState(false)
  const active = selected != null
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx('flex items-center gap-2 px-3 py-1.5 border rounded text-sm font-semibold whitespace-nowrap transition-colors', active ? 'border-travefy-blue text-travefy-blue bg-travefy-blue-light' : 'border-travefy-gray-200 text-travefy-blue bg-white hover:bg-travefy-gray-50')}
      >
        {selected ? INCOMING_STATUS_LABEL[selected] : 'Status'}
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-10 z-20 w-52 rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            <button onClick={() => { onSelect(null); setOpen(false) }} className="w-full px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">All statuses</button>
            <div className="my-1 border-t border-travefy-gray-100" />
            {options.map((opt) => (
              <button key={opt} onClick={() => { onSelect(opt); setOpen(false) }} className="w-full px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">{INCOMING_STATUS_LABEL[opt]}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Main (read-only) ──────────────────────────────────────────────────────────

export function IncomingCommissionsTab({ commissions, hideStatuses = [] }: Props) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<IncomingStatus | null>(null)

  const ALL: IncomingStatus[] = ['paid-by-supplier', 'in-payout', 'upcoming']
  const visibleStatuses = ALL.filter((s) => !hideStatuses.includes(s))
  const inScope = commissions.filter((c) => visibleStatuses.includes(c.status))

  const filtered = inScope.filter((c) => {
    if (status && c.status !== status) return false
    const q = search.trim().toLowerCase()
    if (!q) return true
    return [c.bookingRef, c.supplier, c.traveler].some((f) => f.toLowerCase().includes(q))
  })

  return (
    <>
      {/* Read-only note */}
      <div className="flex items-start gap-2 rounded-lg border border-travefy-blue/30 bg-travefy-blue-light/60 px-3 py-2.5 text-xs text-travefy-navy">
        <span>These are commissions coming to you from the host or agency above. This view is read-only — statuses update automatically as they’re reconciled and paid out.</span>
      </div>

      {/* Toolbar (search + status filter only — no create/actions) */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[280px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input type="text" placeholder="Search incoming commissions" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue" />
        </div>
        <span className="text-sm text-travefy-gray-600">Showing <span className="font-semibold text-travefy-navy">{filtered.length}</span> of {inScope.length}</span>
        <div className="ml-auto">
          <FilterChip options={visibleStatuses} selected={status} onSelect={setStatus} />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-visible">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-travefy-gray-100 text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">
                <th className="px-4 py-3 text-left">Booking</th>
                <th className="px-4 py-3 text-left">Supplier</th>
                <th className="px-4 py-3 text-left">Traveler</th>
                <th className="px-4 py-3 text-left">Travel Date</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Expected</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-travefy-navy">{c.bookingRef}</td>
                  <td className="px-4 py-3 text-travefy-blue">{c.supplier}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.traveler}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.travelDate}</td>
                  <td className="px-4 py-3 text-right font-semibold text-travefy-navy">{fmtIncomingMoney(c.amount)}</td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.expected}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">No incoming commissions match the current filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

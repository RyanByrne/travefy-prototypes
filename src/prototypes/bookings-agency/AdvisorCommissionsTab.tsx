import { ExternalLink, MoreHorizontal, Search } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '../../shared/components'
import { fmtIncomingMoney } from './incomingCommissionsData'
import type { AdvisorCommission } from './advisorCommissionsData'

interface Props {
  commissions: AdvisorCommission[]
  onView: (c: AdvisorCommission) => void
  onViewPayout: (c: AdvisorCommission) => void
  onToast?: (text: string) => void
}

// ── Row action menu (⋯ → View) ────────────────────────────────────────────────

function RowMenu({ onView }: { onView: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500"
        aria-label="Row actions"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={(e) => { e.stopPropagation(); setOpen(false) }} />
          <div className="absolute right-0 top-9 z-20 w-40 rounded-lg border border-travefy-gray-200 bg-white py-1 text-sm shadow-lg">
            <button onClick={(e) => { e.stopPropagation(); onView(); setOpen(false) }} className="flex w-full items-center gap-2 px-3 py-2 text-left text-travefy-gray-700 hover:bg-travefy-gray-50">
              <ExternalLink className="w-4 h-4 text-travefy-gray-500" />
              View
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Main (read-only) ──────────────────────────────────────────────────────────

export function AdvisorCommissionsTab({ commissions, onView, onViewPayout, onToast }: Props) {
  const [search, setSearch] = useState('')

  const q = search.trim().toLowerCase()
  const filtered = q
    ? commissions.filter((c) => [c.bookingRef, c.supplier].some((f) => f.toLowerCase().includes(q)))
    : commissions

  return (
    <>
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[280px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input type="text" placeholder="Search Commissions" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue" />
        </div>
        <button onClick={() => onToast?.(`${filtered.length} commission${filtered.length === 1 ? '' : 's'} match`)} className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Search</button>
        <span className="text-sm text-travefy-gray-600">Showing <span className="font-semibold text-travefy-navy">{filtered.length}</span> of {commissions.length}</span>
      </div>

      {/* Table */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-visible">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-travefy-gray-100 text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">
                <th className="px-4 py-3 text-left">Booking</th>
                <th className="px-4 py-3 text-left">Supplier</th>
                <th className="px-4 py-3 text-left">Split</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Expected</th>
                <th className="px-4 py-3 text-left">Payout</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Action</th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} onClick={() => onView(c)} className="group cursor-pointer border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-travefy-navy">{c.bookingRef}</td>
                  <td className="px-4 py-3 font-medium text-travefy-navy">{c.supplier}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.splitPercent}%</td>
                  <td className="px-4 py-3">
                    <Badge variant={c.status === 'Paid' ? 'success' : 'warning'} size="sm">{c.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.expectedAmount != null ? fmtIncomingMoney(c.expectedAmount) : '--'}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{c.payout}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{fmtIncomingMoney(c.amount)}</td>
                  <td className="px-4 py-3">
                    <button onClick={(e) => { e.stopPropagation(); onViewPayout(c) }} className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-gray-200 text-travefy-blue text-xs font-semibold whitespace-nowrap hover:bg-travefy-gray-50">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View in Payout
                    </button>
                  </td>
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <RowMenu onView={() => onView(c)} />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">No commissions match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

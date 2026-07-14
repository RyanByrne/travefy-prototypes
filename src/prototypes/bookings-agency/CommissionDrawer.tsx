import { Plus, Trash2, X } from 'lucide-react'
import {
  advisorCommission,
  agencyCommission,
  formatSigned,
  type CommissionLine,
} from './commissionsData'

interface Props {
  open: boolean
  commission: CommissionLine | null
  /** Adjustment lines that reference this commission (read-only here). */
  adjustments: CommissionLine[]
  onClose: () => void
  /** Opens the New Commission modal preset to Adjustment, linked to this commission. */
  onAddAdjustment: () => void
  onRemoveAdjustment: (id: string) => void
}

const field = 'w-full rounded border border-travefy-gray-200 bg-travefy-gray-50 px-3 py-2 text-sm text-travefy-gray-900'
const label = 'mb-1.5 block text-sm font-semibold text-travefy-gray-800'
const typeLabel = (t?: string) => (t === 'recall' ? 'Recall' : t === 'additional' ? 'Additional' : '—')

/**
 * Commission detail drawer. Mirrors the Figma commission panel, but the
 * Adjustments section shows the commission's *linked* adjustment lines
 * read-only — the adjustments themselves are independent lines (created via the
 * New Commission modal), so this is a provenance view, not in-place editing.
 */
export function CommissionDrawer({ open, commission, adjustments, onClose, onAddAdjustment, onRemoveAdjustment }: Props) {
  if (!open || !commission) return null

  const received = commission.received ?? 0
  const split = commission.split ?? 0

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-travefy-navy/40" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-travefy-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-travefy-navy">Commission</h2>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={label}>Supplier</label>
              <div className={field}>{commission.supplier}</div>
            </div>
            <div>
              <label className={label}>Booking Reference</label>
              <div className={field}>{commission.matchingBookingRef ?? commission.reference}</div>
            </div>
            <div>
              <label className={label}>Total Received</label>
              <div className={field}>{commission.received !== null ? `$${received}` : '--'}</div>
            </div>
            <div>
              <label className={label}>Commission Split</label>
              <div className={field}>{commission.split !== null ? `${split}%` : '--'}</div>
            </div>
            <div>
              <label className={label}>Agency Commission</label>
              <div className={field}>{received && split ? `$${agencyCommission(received, split)}` : '--'}</div>
            </div>
            <div>
              <label className={label}>Advisor Commission</label>
              <div className={field}>{received && split ? `$${advisorCommission(received, split)}` : '--'}</div>
            </div>
          </div>
          <p className="mt-2 text-xs text-travefy-gray-500">
            Commission split is auto-populated from the value your advisor entered on the booking. Editing this
            number will not change the value on the booking.
          </p>

          {/* Adjustments */}
          <div className="mt-8 flex items-center justify-between border-b border-travefy-gray-200 pb-2">
            <h3 className="text-base font-semibold text-travefy-navy">Adjustments</h3>
          </div>

          {adjustments.length === 0 ? (
            <p className="mt-3 text-sm text-travefy-gray-500">
              No adjustments on this commission. Clawbacks and extra payments are added as their own lines and
              settle on their own payout.
            </p>
          ) : (
            <div className="mt-3 divide-y divide-travefy-gray-100">
              {adjustments.map((a) => (
                <div key={a.id} className="flex items-center gap-4 py-3 text-sm">
                  <span className="w-24 shrink-0 text-travefy-gray-500">{a.date}</span>
                  <span className="w-20 shrink-0 font-semibold text-travefy-navy">{typeLabel(a.adjustmentType)}</span>
                  <span className="flex-1 text-travefy-gray-700">{a.reason}</span>
                  <span className="shrink-0 text-travefy-gray-500">{a.method}</span>
                  <span className={`w-20 shrink-0 text-right font-semibold ${(a.amount ?? 0) < 0 ? 'text-travefy-danger' : 'text-travefy-success'}`}>
                    {formatSigned(a.amount ?? 0)}
                  </span>
                  <button
                    onClick={() => onRemoveAdjustment(a.id)}
                    className="shrink-0 rounded border border-travefy-gray-200 p-1 text-travefy-gray-400 hover:bg-travefy-gray-50 hover:text-travefy-danger"
                    aria-label="Remove adjustment"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={onAddAdjustment}
            className="mt-4 flex items-center gap-1.5 rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark"
          >
            <Plus className="h-4 w-4" />
            Add Adjustment
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-travefy-gray-200 bg-travefy-gray-50 px-6 py-4">
          <button onClick={onClose} className="text-sm font-semibold text-travefy-blue hover:underline">
            Cancel
          </button>
          <button
            onClick={onClose}
            className="rounded bg-travefy-blue px-5 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark"
          >
            Save and close
          </button>
        </div>
      </div>
    </div>
  )
}

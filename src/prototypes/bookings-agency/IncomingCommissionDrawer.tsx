import { X } from 'lucide-react'
import {
  advisorShare,
  agencyShare,
  fmtIncomingMoney,
  type ViewCommissionData,
} from './incomingCommissionsData'

interface Props {
  open: boolean
  commission: ViewCommissionData | null
  onClose: () => void
}

const label = 'text-sm font-semibold text-travefy-gray-500'
const value = 'mt-1 text-base text-travefy-navy'

/**
 * Read-only "View Commission" drawer for an incoming commission. Shows the
 * booking/supplier facts, the split breakdown, and the distribution chain
 * (UPDATES) tracing how the commission flowed down to this recipient.
 */
export function IncomingCommissionDrawer({ open, commission, onClose }: Props) {
  if (!open || !commission) return null
  const c = commission

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-travefy-navy/40 backdrop-blur-[1px]" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-travefy-gray-100 px-8 py-4">
          <h2 className="text-lg font-semibold text-travefy-navy">View Commission</h2>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close"><X className="h-6 w-6" /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="space-y-6">
            <div>
              <p className={label}>Booking Reference</p>
              <p className={value}>{c.bookingRef}</p>
            </div>
            <div>
              <p className={label}>Type</p>
              <p className={value}>{c.type}</p>
            </div>
            <div>
              <p className={label}>Supplier</p>
              <p className={value}>{c.supplier}</p>
            </div>
            <div>
              <p className={label}>Total Received</p>
              <p className={value}>{fmtIncomingMoney(c.amount)}</p>
            </div>
          </div>

          {/* Commission Split card */}
          <div className="mt-6 rounded-xl border border-travefy-gray-200 p-6">
            <h3 className="text-base font-semibold text-travefy-navy">Commission Split</h3>
            <p className="mt-4 text-sm font-semibold text-travefy-gray-500">Agent Split</p>
            <p className="mt-1 text-base text-travefy-navy">{c.splitName} ({c.splitPercent}%)</p>
            <div className="mt-5 grid grid-cols-2 gap-6">
              <div>
                <p className={label}>Agency Total</p>
                <p className="mt-1 text-base text-travefy-gray-600">{fmtIncomingMoney(agencyShare(c.amount, c.splitPercent))}</p>
              </div>
              <div>
                <p className={label}>Advisor Total</p>
                <p className="mt-1 text-base text-travefy-gray-600">{fmtIncomingMoney(advisorShare(c.amount, c.splitPercent))}</p>
              </div>
            </div>
          </div>

          {/* Updates — distribution chain provenance */}
          {c.updates.length > 0 && (
            <div className="mt-6 border-t border-travefy-gray-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-travefy-gray-500">Updates</p>
              <div className="mt-3 space-y-3">
                {c.updates.map((u, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-travefy-gray-300" />
                    <span className="flex-1 text-travefy-gray-700">
                      Paid by <span className="font-semibold text-travefy-navy">{u.from} to</span> {u.to}
                    </span>
                    <span className="w-24 text-right text-travefy-gray-700">{fmtIncomingMoney(u.amount)}</span>
                    <span className="w-12 text-right text-travefy-gray-500">{u.percent != null ? `${u.percent}%` : ''}</span>
                    <span className="w-28 text-right text-travefy-gray-500">{u.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center border-t border-travefy-gray-200 bg-travefy-gray-50 px-8 py-4">
          <button onClick={onClose} className="text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
        </div>
      </div>
    </div>
  )
}

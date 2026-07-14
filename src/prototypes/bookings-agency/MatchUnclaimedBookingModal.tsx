import { Info, Star } from 'lucide-react'
import { Badge, Button, Modal } from '../../shared/components'
import type { UnclaimedItem } from './unclaimedData'

interface Props {
  open: boolean
  item: UnclaimedItem | null
  /** Statement date shown in the header. */
  date?: string
  onClose: () => void
  /** Confirm reconciliation — files the line under Commissions as reconciled. */
  onReconcile: () => void
  /** Reject the suggested match — reverts the line to No Match. */
  onReject: () => void
}

const fmtMoney = (n: number) => `$${n.toLocaleString('en-US')}`

/**
 * "Reconcile Booking" — shown from the Unclaimed tab's Reconcile action.
 * Compares the received booking on the statement against the system's suggested
 * match and confirms reconciliation: reconciling files the line under
 * Commissions and removes it from Unclaimed.
 */
export function MatchUnclaimedBookingModal({ open, item, date = 'Oct 9, 2025', onClose, onReconcile, onReject }: Props) {
  if (!open || !item) return null
  const match = item.suggestedMatch

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Reconcile Booking"
      size="lg"
      footer={
        <>
          <Button variant="link" onClick={onClose}>
            Cancel
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="secondary" onClick={onReject} disabled={!match}>
              Reject Match
            </Button>
            <Button onClick={onReconcile} disabled={!match}>
              Reconcile Booking
            </Button>
          </div>
        </>
      }
    >
      {/* Supplier + statement meta */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-travefy-navy">{item.supplier}</h3>
        <div className="flex items-center gap-2 text-sm text-travefy-gray-600">
          <span>{date}</span>
          <Badge variant="primary" size="sm">
            REF: {item.bookingRef}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Booking on Statement */}
        <div>
          <p className="mb-3 text-sm font-semibold text-travefy-gray-900">Booking on Statement</p>
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 border-b border-travefy-gray-100 pb-2 text-xs font-semibold uppercase tracking-wide text-travefy-gray-500">
            <span>Received Booking</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Split</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 pt-3 text-sm">
            <span className="flex items-center gap-2 font-medium text-travefy-navy">
              <Star className="h-4 w-4 fill-travefy-success text-travefy-success" />
              {item.bookingRef}
            </span>
            <span className="text-right text-travefy-gray-700">
              {item.received !== null ? fmtMoney(item.received) : '--'}
            </span>
            <span className="text-right text-travefy-gray-700">{match ? `${match.split}%` : '--'}</span>
          </div>
        </div>

        {/* Suggested Match */}
        <div>
          <p className="mb-3 text-sm font-semibold text-travefy-gray-900">Suggested Match</p>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-x-6 border-b border-travefy-gray-100 pb-2 text-xs font-semibold uppercase tracking-wide text-travefy-gray-500">
            <span>Booking Ref</span>
            <span>Advisor</span>
            <span className="flex items-center justify-end gap-1 text-right">
              Expected
              <Info className="h-3.5 w-3.5 text-travefy-gray-400" />
            </span>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-x-6 pt-3 text-sm">
            <span className="font-medium text-travefy-navy">{match?.bookingRef ?? '--'}</span>
            <span className="text-travefy-gray-700">{match?.advisor ?? '--'}</span>
            <span className="text-right text-travefy-gray-700">
              {match ? fmtMoney(match.expected) : '--'}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 border-t border-travefy-gray-100 pt-4 text-xs text-travefy-gray-500">
        Reconciling files this received commission under your Commissions as reconciled and removes it from
        Unclaimed. You won't be able to edit it from Unclaimed after this.
      </p>
    </Modal>
  )
}

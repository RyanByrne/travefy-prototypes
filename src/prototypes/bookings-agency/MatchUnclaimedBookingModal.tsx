import { Info, Star } from 'lucide-react'
import { Badge, Button, Modal } from '../../shared/components'
import type { UnclaimedItem } from './unclaimedData'

interface Props {
  open: boolean
  item: UnclaimedItem | null
  /** Statement date shown in the header. */
  date?: string
  onClose: () => void
  /** Proceed — opens the Confirm Match step. */
  onMatch: () => void
}

const fmtMoney = (n: number) => `$${n.toLocaleString('en-US')}`

/**
 * "Match Unclaimed Booking" — shown from the Unclaimed tab's Review Match action.
 * Compares the received booking on the statement against the system's suggested
 * match. "Match Booking" advances to the Confirm Match step.
 */
export function MatchUnclaimedBookingModal({ open, item, date = 'Oct 9, 2025', onClose, onMatch }: Props) {
  if (!open || !item) return null
  const match = item.suggestedMatch

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Match Unclaimed Booking"
      size="lg"
      footer={
        <>
          <Button variant="link" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onMatch} disabled={!match}>
            Match Booking
          </Button>
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
    </Modal>
  )
}

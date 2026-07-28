import { Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, Input, Select } from '../../shared/components'
import {
  COMMISSION_TYPES,
  advisorCommission,
  agencyCommission,
  isAdjustmentType,
  type CommissionLine,
  type CommissionType,
} from './commissionsData'

interface Props {
  open: boolean
  onClose: () => void
  onCreate: (line: CommissionLine) => void
}

const genRef = (prefix: string) => `${prefix}-${String(Date.now()).slice(-4)}`

/** Keep digits + one decimal, allowing a single leading minus for negative
 *  commissions (chargebacks / commission call-backs). */
const cleanSigned = (v: string) => (v.trim().startsWith('-') ? '-' : '') + v.replace(/[^0-9.]/g, '')
const fmtSignedMoney = (n: number) => `${n < 0 ? '-' : ''}$${Math.abs(n)}`

const label = 'mb-1.5 block text-sm font-semibold text-travefy-gray-800'

/** Create a commission (drawer). A "Commission" is tied to an advisor booking;
 *  an "Adjustment" isn't tied to a booking, so it takes an Advisor instead of a
 *  Booking Reference. Both start unmatched and reconcile from the Commissions
 *  table. Adjustments to the amount are added later from the Edit drawer. */
export function NewCommissionDrawer({ open, onClose, onCreate }: Props) {
  const [type, setType] = useState<CommissionType>('Commission')
  const [supplier, setSupplier] = useState('')
  const [bookingRef, setBookingRef] = useState('')
  const [advisor, setAdvisor] = useState('')
  const [totalReceived, setTotalReceived] = useState('')
  const [split, setSplit] = useState('')

  useEffect(() => {
    if (!open) return
    setType('Commission')
    setSupplier('')
    setBookingRef('')
    setAdvisor('')
    setTotalReceived('')
    setSplit('')
  }, [open])

  if (!open) return null

  const isAdjustment = isAdjustmentType(type)
  const receivedNum = Number(totalReceived) || 0
  const splitNum = Number(split) || 0
  const canCreate = supplier.trim() !== '' || (isAdjustment ? advisor.trim() !== '' : bookingRef.trim() !== '')

  const create = () => {
    onCreate({
      id: genRef('c'),
      type,
      reference: isAdjustment ? genRef('ADJ') : bookingRef.trim() || genRef('BK'),
      statementRef: '--',
      supplier: supplier.trim() || 'Manual entry',
      received: receivedNum || null,
      split: splitNum || null,
      // An adjustment is "matched" to its advisor rather than a booking.
      status: isAdjustment && advisor.trim() ? 'match-found' : 'no-match',
      matchingBookingRef: null,
      advisor: isAdjustment ? advisor.trim() || null : null,
      expected: null,
    })
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-travefy-navy/40" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-travefy-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-travefy-navy">New Commission</h2>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className={label}>Type</label>
              <Select value={type} onChange={(e) => setType(e.target.value as CommissionType)}>
                {COMMISSION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </Select>
              <p className="mt-1 text-xs text-travefy-gray-500">
                {isAdjustment
                  ? 'An adjustment is a commission that isn’t tied to a booking — assign it to an advisor.'
                  : 'A commission is tied to an advisor booking.'}
              </p>
            </div>

            <div>
              <label className={label}>Supplier</label>
              <Input value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="e.g. Marriott" />
            </div>

            {isAdjustment ? (
              <div>
                <label className={label}>Advisor</label>
                <Input value={advisor} onChange={(e) => setAdvisor(e.target.value)} placeholder="Search for advisor" trailingIcon={<Search className="h-4 w-4" />} />
              </div>
            ) : (
              <div>
                <label className={label}>Booking Reference</label>
                <Input value={bookingRef} onChange={(e) => setBookingRef(e.target.value)} placeholder="e.g. A2736555" />
              </div>
            )}

            <div>
              <label className={label}>Total Received</label>
              <Input value={totalReceived} onChange={(e) => setTotalReceived(cleanSigned(e.target.value))} placeholder="$0" />
              <p className="mt-1 text-xs text-travefy-gray-500">Use a negative amount for a chargeback or commission call-back.</p>
            </div>

            <div>
              <label className={label}>Commission Split</label>
              <Input value={split} onChange={(e) => setSplit(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="%" />
            </div>

            <div>
              <label className={label}>Agency Total</label>
              <Input value={receivedNum && splitNum ? fmtSignedMoney(agencyCommission(receivedNum, splitNum)) : '--'} disabled />
            </div>
            <div>
              <label className={label}>Advisor Total</label>
              <Input value={receivedNum && splitNum ? fmtSignedMoney(advisorCommission(receivedNum, splitNum)) : '--'} disabled />
            </div>

            <p className="col-span-2 text-xs text-travefy-gray-500">
              New commissions start unmatched — reconcile them against a supplier statement from the Commissions table.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-travefy-gray-200 bg-travefy-gray-50 px-6 py-4">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button disabled={!canCreate} onClick={create}>Create Commission</Button>
        </div>
      </div>
    </div>
  )
}

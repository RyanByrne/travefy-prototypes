import { useEffect, useState } from 'react'
import { Button, Input, Modal, Select } from '../../shared/components'
import {
  COMMISSION_TYPES,
  advisorCommission,
  agencyCommission,
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
const cleanSigned = (v: string) => {
  const neg = v.trim().startsWith('-')
  return (neg ? '-' : '') + v.replace(/[^0-9.]/g, '')
}

const fmtSignedMoney = (n: number) => `${n < 0 ? '-' : ''}$${Math.abs(n)}`

/** Create a commission. It starts unmatched and is reconciled against a supplier
 *  statement from the Commissions table. Adjustments are added later from the
 *  Edit Commission drawer. */
export function NewCommissionModal({ open, onClose, onCreate }: Props) {
  const [type, setType] = useState<CommissionType>('Commission Payment')
  const [supplier, setSupplier] = useState('')
  const [bookingRef, setBookingRef] = useState('')
  const [totalReceived, setTotalReceived] = useState('')
  const [split, setSplit] = useState('')

  useEffect(() => {
    if (!open) return
    setType('Commission Payment')
    setSupplier('')
    setBookingRef('')
    setTotalReceived('')
    setSplit('')
  }, [open])

  const receivedNum = Number(totalReceived) || 0
  const splitNum = Number(split) || 0
  const canCreate = supplier.trim() !== '' || bookingRef.trim() !== ''

  const create = () => {
    onCreate({
      id: genRef('c'),
      type,
      reference: bookingRef.trim() || genRef('BK'),
      statementRef: '--',
      supplier: supplier.trim() || 'Manual entry',
      received: receivedNum || null,
      split: splitNum || null,
      status: 'no-match',
      matchingBookingRef: null,
      advisor: null,
      expected: null,
    })
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="New Commission"
      size="lg"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button disabled={!canCreate} onClick={create}>Create Commission</Button>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Select label="Type" value={type} onChange={(e) => setType(e.target.value as CommissionType)}>
            {COMMISSION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </div>
        <Input label="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="e.g. Marriott" />
        <Input label="Booking Reference" value={bookingRef} onChange={(e) => setBookingRef(e.target.value)} placeholder="e.g. A2736555" />
        <div>
          <Input label="Total Received" value={totalReceived} onChange={(e) => setTotalReceived(cleanSigned(e.target.value))} placeholder="$0" />
          <p className="mt-1 text-xs text-travefy-gray-500">Use a negative amount for a chargeback or commission call-back.</p>
        </div>
        <Input label="Commission Split" value={split} onChange={(e) => setSplit(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="%" />
        <Input label="Agency Total" value={receivedNum && splitNum ? fmtSignedMoney(agencyCommission(receivedNum, splitNum)) : '--'} disabled />
        <Input label="Advisor Total" value={receivedNum && splitNum ? fmtSignedMoney(advisorCommission(receivedNum, splitNum)) : '--'} disabled />
        <p className="col-span-2 text-xs text-travefy-gray-500">New commissions start unmatched — reconcile them against a supplier statement from the Commissions table.</p>
      </div>
    </Modal>
  )
}

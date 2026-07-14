import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { Button, Input, Modal, Select } from '../../shared/components'
import {
  ADJUSTMENT_METHODS,
  ADJUSTMENT_TYPES,
  advisorCommission,
  agencyCommission,
  isAdjustment,
  type AdjustmentType,
  type CommissionKind,
  type CommissionLine,
} from './commissionsData'

interface Props {
  open: boolean
  commissions: CommissionLine[]
  presetKind?: CommissionKind
  presetRelatesToRef?: string | null
  onClose: () => void
  onCreate: (line: CommissionLine) => void
}

const genRef = (prefix: string) => `${prefix}-${String(Date.now()).slice(-4)}`

/**
 * Create a Commission or an Adjustment. Per the payout-lifecycle decision, an
 * adjustment (recall / additional payment) is its own line — it references the
 * commission it relates to but never mutates it, so late clawbacks flow through
 * their own reconcile → payout cycle.
 */
export function NewCommissionModal({ open, commissions, presetKind, presetRelatesToRef, onClose, onCreate }: Props) {
  const [kind, setKind] = useState<CommissionKind>('commission')

  // Commission fields
  const [supplier, setSupplier] = useState('')
  const [bookingRef, setBookingRef] = useState('')
  const [totalReceived, setTotalReceived] = useState('')
  const [split, setSplit] = useState('')

  // Adjustment fields
  const [adjustmentType, setAdjustmentType] = useState<AdjustmentType>('recall')
  const [reason, setReason] = useState('')
  const [method, setMethod] = useState('USD')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [relatesToRef, setRelatesToRef] = useState<string>('')

  const commissionOptions = commissions.filter((c) => !isAdjustment(c))

  // Reset from presets each open.
  useEffect(() => {
    if (!open) return
    setKind(presetKind ?? 'commission')
    setSupplier('')
    setBookingRef('')
    setTotalReceived('')
    setSplit('')
    setAdjustmentType('recall')
    setReason('')
    setMethod('USD')
    setAmount('')
    setDate('')
    setRelatesToRef(presetRelatesToRef ?? '')
  }, [open, presetKind, presetRelatesToRef])

  // When an adjustment relates to a commission, inherit its supplier + advisor.
  const related = commissionOptions.find((c) => c.reference === relatesToRef) ?? null

  const receivedNum = Number(totalReceived) || 0
  const splitNum = Number(split) || 0

  const create = () => {
    if (kind === 'commission') {
      const ref = bookingRef.trim() || genRef('BK')
      onCreate({
        id: genRef('c'),
        kind: 'commission',
        reference: ref,
        statementRef: '--',
        supplier: supplier.trim() || 'Manual entry',
        received: receivedNum || null,
        split: splitNum || null,
        status: 'no-match',
        matchingBookingRef: null,
        advisor: null,
        expected: null,
      })
    } else {
      const signed = adjustmentType === 'recall' ? -Math.abs(Number(amount) || 0) : Math.abs(Number(amount) || 0)
      onCreate({
        id: genRef('adj'),
        kind: 'adjustment',
        reference: genRef('ADJ'),
        statementRef: '--',
        supplier: related?.supplier ?? (supplier.trim() || 'Manual entry'),
        received: null,
        split: null,
        status: 'reconciled',
        matchingBookingRef: null,
        advisor: related?.advisor ?? null,
        expected: null,
        adjustmentType,
        reason: reason.trim(),
        method,
        amount: signed,
        date: date.trim() || 'Today',
        relatesToRef: relatesToRef || null,
      })
    }
  }

  const canCreate =
    kind === 'commission'
      ? supplier.trim() !== '' || bookingRef.trim() !== ''
      : Number(amount) > 0 && reason.trim() !== ''

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="New Commission"
      size="lg"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={!canCreate} onClick={create}>
            {kind === 'adjustment' ? 'Add Adjustment' : 'Create Commission'}
          </Button>
        </>
      }
    >
      {/* Type toggle */}
      <div className="mb-5">
        <label className="mb-1.5 block text-sm font-semibold text-travefy-gray-800">Type</label>
        <div className="inline-flex rounded-lg border border-travefy-gray-200 p-1">
          {(['commission', 'adjustment'] as const).map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={clsx(
                'px-4 py-1.5 rounded text-sm font-semibold capitalize transition-colors',
                kind === k ? 'bg-travefy-navy text-white' : 'text-travefy-gray-600 hover:text-travefy-gray-900',
              )}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {kind === 'commission' ? (
        <div className="grid grid-cols-2 gap-4">
          <Input label="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="e.g. Marriott" />
          <Input label="Booking Reference" value={bookingRef} onChange={(e) => setBookingRef(e.target.value)} placeholder="e.g. A2736555" />
          <Input label="Total Received" value={totalReceived} onChange={(e) => setTotalReceived(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="$0" />
          <Input label="Commission Split" value={split} onChange={(e) => setSplit(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="%" />
          <Input label="Agency Commission" value={receivedNum && splitNum ? `$${agencyCommission(receivedNum, splitNum)}` : '--'} disabled />
          <Input label="Advisor Commission" value={receivedNum && splitNum ? `$${advisorCommission(receivedNum, splitNum)}` : '--'} disabled />
          <p className="col-span-2 text-xs text-travefy-gray-500">
            New commissions start unmatched — reconcile them against a supplier statement from the Commissions table.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <Select label="Adjustment Type" value={adjustmentType} onChange={(e) => setAdjustmentType(e.target.value as AdjustmentType)}>
            {ADJUSTMENT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </Select>
          <Input label="Amount" value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="$0" />
          <div className="col-span-2">
            <Input label="Reason / Description" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. Supplier recall — incorrect payment" />
          </div>
          <Select label="Method" value={method} onChange={(e) => setMethod(e.target.value)}>
            {ADJUSTMENT_METHODS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </Select>
          <Input label="Date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="MM/DD/YYYY" />
          <div className="col-span-2">
            <Select label="Relates to commission" value={relatesToRef} onChange={(e) => setRelatesToRef(e.target.value)}>
              <option value="">None (standalone)</option>
              {commissionOptions.map((c) => (
                <option key={c.id} value={c.reference}>
                  {c.reference} · {c.supplier}{c.advisor ? ` · ${c.advisor}` : ''}
                </option>
              ))}
            </Select>
          </div>
          <p className="col-span-2 text-xs text-travefy-gray-500">
            {adjustmentType === 'recall'
              ? 'A recall is deducted (negative) and settled on its own payout — it never changes the original commission or a payout that already happened.'
              : 'An additional payment is paid out (positive) on its own payout cycle.'}
            {related ? ` Inherits supplier & advisor from ${related.reference}.` : ''}
          </p>
        </div>
      )}
    </Modal>
  )
}

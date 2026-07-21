import { Check, Pencil, Search, Trash2, X, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, Input, Select } from '../../shared/components'
import {
  ADJUSTMENT_KINDS,
  COMMISSION_TYPES,
  adjustmentDelta,
  advisorCommission,
  agencyCommission,
  commissionAdjustedTotal,
  formatAdjustmentValue,
  type AdjustmentKind,
  type CommissionAdjustment,
  type CommissionLine,
  type CommissionType,
} from './commissionsData'

interface Props {
  open: boolean
  commission: CommissionLine | null
  onSave: (c: CommissionLine) => void
  onRemove: (id: string) => void
  onClose: () => void
}

const label = 'mb-1.5 block text-sm font-semibold text-travefy-gray-800'
const fmt2 = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`
const genId = () => `adj-${String(Date.now()).slice(-6)}`

/**
 * Edit Commission drawer — matches the V2 hi-fi. Editable commission fields plus
 * a nested Adjustments editor (Reason · Type %/$ · Value) that applies against
 * the received amount to a running Total.
 */
export function CommissionDrawer({ open, commission, onSave, onRemove, onClose }: Props) {
  const [type, setType] = useState<CommissionType>('Commission Payment')
  const [bookingRef, setBookingRef] = useState('')
  const [supplier, setSupplier] = useState('')
  const [statementRef, setStatementRef] = useState('')
  const [received, setReceived] = useState('')
  const [split, setSplit] = useState('')
  const [adjustments, setAdjustments] = useState<CommissionAdjustment[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    if (!open || !commission) return
    setType(commission.type)
    setBookingRef(commission.matchingBookingRef ?? commission.reference)
    setSupplier(commission.supplier)
    setStatementRef(commission.statementRef)
    setReceived(commission.received !== null ? String(commission.received) : '')
    setSplit(commission.split !== null ? String(commission.split) : '')
    setAdjustments(commission.adjustments ?? [])
    setEditingId(null)
  }, [open, commission])

  if (!open || !commission) return null

  const base = Number(received) || 0
  const splitNum = Number(split) || 0

  // Running line totals for each adjustment.
  let running = base
  const rows = adjustments.map((a) => {
    running += adjustmentDelta(a, base)
    return { a, lineTotal: Math.round(running * 100) / 100 }
  })
  const finalTotal = commissionAdjustedTotal({ ...commission, received: base, adjustments })

  const patchAdj = (id: string, p: Partial<CommissionAdjustment>) =>
    setAdjustments((prev) => prev.map((a) => (a.id === id ? { ...a, ...p } : a)))
  const removeAdj = (id: string) => { setAdjustments((prev) => prev.filter((a) => a.id !== id)); if (editingId === id) setEditingId(null) }
  const addAdjustment = () => {
    const id = genId()
    setAdjustments((prev) => [...prev, { id, reason: '', kind: 'amount', value: 0 }])
    setEditingId(id)
  }

  const save = () => {
    onSave({
      ...commission,
      type,
      supplier,
      statementRef,
      received: base || null,
      split: split === '' ? null : splitNum,
      adjustments: adjustments.filter((a) => a.reason.trim() !== ''),
    })
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-travefy-navy/40" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-travefy-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-travefy-navy">Edit Commission</h2>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-4">
            <div>
              <label className={label}>Type</label>
              <Select value={type} onChange={(e) => setType(e.target.value as CommissionType)}>
                {COMMISSION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </Select>
            </div>

            <div>
              <label className={label}>Booking Reference</label>
              <Input value={bookingRef} onChange={(e) => setBookingRef(e.target.value)} />
            </div>

            <div>
              <label className={label}>Supplier</label>
              <Input value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="Search for supplier" trailingIcon={<Search className="h-4 w-4" />} />
            </div>

            <div>
              <label className={label}>Statement Reference</label>
              <Input value={statementRef} onChange={(e) => setStatementRef(e.target.value)} trailingIcon={<Search className="h-4 w-4" />} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={label}>Total Received</label>
                <Input value={`$${received}`} onChange={(e) => setReceived(e.target.value.replace(/[^0-9.]/g, ''))} />
              </div>
              <div>
                <label className={label}>Commission Split</label>
                <Input value={`${split}%`} onChange={(e) => setSplit(e.target.value.replace(/[^0-9.]/g, ''))} />
              </div>
              <div>
                <label className={label}>Agency Total</label>
                <Input value={fmt2(agencyCommission(base, splitNum))} disabled />
              </div>
              <div>
                <label className={label}>Advisor Total</label>
                <Input value={fmt2(advisorCommission(base, splitNum))} disabled />
              </div>
            </div>
          </div>

          {/* Adjustments */}
          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-base font-semibold text-travefy-navy">Adjustments</h3>
            <button onClick={addAdjustment} className="rounded bg-travefy-blue px-3 py-1.5 text-sm font-semibold text-white hover:bg-travefy-blue-dark">Add Adjustment</button>
          </div>
          {rows.some((r) => r.a.auto) && (
            <div className="mt-2 flex items-start gap-2 rounded-lg border border-travefy-blue/30 bg-travefy-blue-light/60 px-3 py-2.5 text-xs text-travefy-navy">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-travefy-blue" />
              <span>
                An adjustment was added automatically based on the{' '}
                <span className="font-semibold">{supplier} supplier rule</span>. Automatic adjustments are managed by
                your commission rules and can't be edited here.
              </span>
            </div>
          )}
          <div className="mt-2 border-t border-travefy-gray-100">
            {rows.length === 0 && <p className="py-4 text-sm text-travefy-gray-500">No adjustments on this commission.</p>}
            {rows.map(({ a, lineTotal }) =>
              editingId === a.id ? (
                <div key={a.id} className="grid grid-cols-[1fr_90px_110px_auto] items-end gap-3 border-b border-travefy-gray-100 py-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-travefy-gray-600">Reason / Description</label>
                    <Input value={a.reason} onChange={(e) => patchAdj(a.id, { reason: e.target.value })} placeholder="Reason" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-travefy-gray-600">Type</label>
                    <Select value={a.kind} onChange={(e) => patchAdj(a.id, { kind: e.target.value as AdjustmentKind })}>
                      {ADJUSTMENT_KINDS.map((k) => <option key={k.value} value={k.value}>{k.label}</option>)}
                    </Select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-travefy-gray-600">Value</label>
                    <Input value={String(a.value)} onChange={(e) => patchAdj(a.id, { value: Number(e.target.value.replace(/[^0-9.-]/g, '')) || 0 })} placeholder="0" />
                  </div>
                  <div className="flex items-center gap-1.5 pb-1">
                    <button onClick={() => setEditingId(null)} disabled={!a.reason.trim()} className="rounded border border-travefy-gray-200 p-1.5 text-travefy-success hover:bg-travefy-gray-50 disabled:opacity-40" aria-label="Confirm"><Check className="h-4 w-4" /></button>
                    <button onClick={() => removeAdj(a.id)} className="rounded border border-travefy-gray-200 p-1.5 text-travefy-gray-400 hover:text-travefy-danger" aria-label="Remove"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ) : (
                <div key={a.id} className="flex items-center gap-4 border-b border-travefy-gray-100 py-3 text-sm">
                  <span className="flex-1">
                    <span className="font-medium text-travefy-navy">{a.reason}</span>
                    {a.auto && (
                      <span className="mt-0.5 flex items-center gap-1 text-xs font-medium text-travefy-blue">
                        <Zap className="h-3 w-3" /> Added automatically by rule
                      </span>
                    )}
                  </span>
                  <span className="w-8 text-center text-travefy-gray-500">{a.kind === 'percent' ? '%' : '$'}</span>
                  <span className={`w-16 text-right font-semibold ${adjustmentDelta(a, base) < 0 ? 'text-travefy-danger' : 'text-travefy-gray-700'}`}>{formatAdjustmentValue(a)}</span>
                  <span className="w-20 text-right font-semibold text-travefy-navy">{fmt2(lineTotal)}</span>
                  {a.auto ? (
                    <span className="inline-flex items-center gap-1 rounded border border-travefy-blue/30 bg-travefy-blue-light px-2 py-1 text-[11px] font-semibold text-travefy-blue" title={a.rule ?? 'Automatic supplier rule'}>
                      <Zap className="h-3 w-3" /> Auto
                    </span>
                  ) : (
                    <button onClick={() => setEditingId(a.id)} className="rounded border border-travefy-gray-200 p-1.5 text-travefy-gray-500 hover:bg-travefy-gray-50" aria-label="Edit adjustment"><Pencil className="h-3.5 w-3.5" /></button>
                  )}
                </div>
              ),
            )}
            {rows.length > 0 && (
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="font-semibold text-travefy-navy">Total</span>
                <span className="font-bold text-travefy-navy">{fmt2(finalTotal)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-travefy-gray-200 bg-travefy-gray-50 px-6 py-4">
          <button onClick={onClose} className="text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <div className="flex items-center gap-3">
            <button onClick={() => onRemove(commission.id)} className="rounded border border-travefy-danger px-4 py-2 text-sm font-semibold text-travefy-danger hover:bg-travefy-danger-bg">Remove</button>
            <Button onClick={save}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

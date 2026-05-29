import { ChevronDown, Info, Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { formatSplit, initialSplits } from '../../shared/data/commissionSplits'
import type { Booking } from './data'

// ── Helpers ────────────────────────────────────────────────────────────────────

const fmtMoney = (n: number) => `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`

/** Sentinel value the dropdown uses for the "Override" choice. */
const OVERRIDE = '__override__'

/**
 * Find the split id that best matches the booking's current percentage,
 * so the dropdown opens already pointing at the right option. If no
 * configured split matches the percentage, we fall into Override mode
 * with the existing % preserved as the custom value.
 */
function initialPickerState(percentage: number): { splitId: string; custom: number } {
  const match = initialSplits.find((s) => s.percentage === percentage)
  if (match) return { splitId: match.id, custom: percentage }
  return { splitId: OVERRIDE, custom: percentage }
}

// ── Drawer ─────────────────────────────────────────────────────────────────────

interface Props {
  open: boolean
  booking: Booking | null
  onClose: () => void
  onSave: (next: Booking) => void
}

export function EditAdvisorBookingDrawer({ open, booking, onClose, onSave }: Props) {
  const [advisor, setAdvisor] = useState('')
  const [supplier, setSupplier] = useState('')
  const [confirmationNumber, setConfirmationNumber] = useState('')
  const [bookingTotal, setBookingTotal] = useState(0)
  const [currency, setCurrency] = useState('USD')
  const [totalCommission, setTotalCommission] = useState(0)
  const [splitId, setSplitId] = useState('')
  const [customPercentage, setCustomPercentage] = useState(0)
  const [notes, setNotes] = useState('')

  // Lock body scroll while open + seed local state from the picked booking
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open || !booking) return
    setAdvisor(booking.advisor)
    setSupplier(booking.supplier)
    setConfirmationNumber(booking.bookingRef ?? '')
    // Default to Figma example values when the row doesn't have its own —
    // realistic enough for the demo, and the dropdown is the focus.
    const seedCommission = booking.received ?? 240
    setTotalCommission(seedCommission)
    setBookingTotal(seedCommission * 9 || 2140) // ~11% commission ratio
    setCurrency('USD')
    const init = initialPickerState(booking.split)
    setSplitId(init.splitId)
    setCustomPercentage(init.custom)
    setNotes('')
  }, [open, booking])

  // Derived totals — Commission Split is the advisor's %, agency gets the rest
  const selectedSplit = useMemo(
    () => initialSplits.find((s) => s.id === splitId),
    [splitId],
  )
  const isOverride = splitId === OVERRIDE
  const splitPct = isOverride ? customPercentage : (selectedSplit?.percentage ?? 0)
  const agentCommission = Math.round((totalCommission * splitPct) / 100)
  const agencyCommission = totalCommission - agentCommission

  if (!open || !booking) return null

  const handleSave = () => {
    onSave({
      ...booking,
      advisor,
      supplier,
      bookingRef: confirmationNumber || null,
      received: totalCommission,
      split: splitPct,
    })
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl flex flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-travefy-gray-100 shrink-0">
          <h2 className="text-lg font-bold text-travefy-navy">Edit Advisor Booking</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {/* Advisor — autocomplete-style with search icon */}
          <Field label="Advisor" required>
            <SearchInput value={advisor} onChange={setAdvisor} />
          </Field>

          {/* Supplier + Confirmation Number */}
          <div className="grid grid-cols-2 gap-6">
            <Field label="Supplier" required>
              <SearchInput value={supplier} onChange={setSupplier} />
            </Field>
            <Field label="Confirmation Number">
              <input
                type="text"
                value={confirmationNumber}
                onChange={(e) => setConfirmationNumber(e.target.value)}
                className={baseInput}
              />
            </Field>
          </div>

          {/* Booking Total + Currency */}
          <div className="grid grid-cols-[1fr_120px] gap-6 items-end">
            <Field label="Booking Total">
              <input
                type="text"
                value={fmtMoney(bookingTotal)}
                onChange={(e) => setBookingTotal(parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0)}
                className={baseInput}
              />
            </Field>
            <Field label="Booking Currency">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className={baseInput}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
              </select>
            </Field>
          </div>

          {/* Edit Commission Currency link */}
          <div>
            <button className="text-sm font-semibold text-travefy-blue hover:underline underline-offset-2">
              Edit Commission Currency (global)
            </button>
          </div>

          {/* Total Commission + Commission Split picker */}
          <div className="grid grid-cols-2 gap-6">
            <Field label="Total Commission">
              <input
                type="text"
                value={fmtMoney(totalCommission)}
                onChange={(e) => setTotalCommission(parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0)}
                className={baseInput}
              />
            </Field>
            <Field label="Commission Split">
              <select
                value={splitId}
                onChange={(e) => setSplitId(e.target.value)}
                className={baseInput}
              >
                {initialSplits.map((s) => (
                  <option key={s.id} value={s.id}>{formatSplit(s)}</option>
                ))}
                <option value={OVERRIDE}>Override (custom %)</option>
              </select>
            </Field>
          </div>

          {/* Override custom-% input — appears when "Override" is selected */}
          {isOverride && (
            <div className="-mt-3 grid grid-cols-2 gap-6">
              <div /> {/* spacer to align under Commission Split */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <label className="block text-sm font-semibold text-travefy-navy">Custom split %</label>
                  <span className="inline-flex items-center px-2 py-0.5 rounded border border-travefy-blue/40 bg-travefy-blue-light text-travefy-blue text-[11px] font-semibold">
                    Override
                  </span>
                </div>
                <input
                  type="text"
                  value={`${customPercentage}%`}
                  onChange={(e) => {
                    const raw = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10)
                    setCustomPercentage(Number.isFinite(raw) ? Math.max(0, Math.min(100, raw)) : 0)
                  }}
                  className={baseInput}
                  autoFocus
                />
                <p className="mt-1.5 flex items-start gap-1.5 text-xs text-travefy-gray-500">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-travefy-gray-400" />
                  <span>
                    Only available when the admin has enabled "Allow advisor to override
                    commission split" for this advisor.
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Auto-calculated splits */}
          <div className="grid grid-cols-2 gap-6">
            <Field label="Total Commission (Agency)">
              <input type="text" value={fmtMoney(agencyCommission)} readOnly className={derivedInput} />
            </Field>
            <Field label="Total Commission (Agent)">
              <input type="text" value={fmtMoney(agentCommission)} readOnly className={derivedInput} />
            </Field>
          </div>

          {/* Notes */}
          <Field label="Notes">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className={`${baseInput} resize-none`}
            />
          </Field>

          {/* Additional Fields disclosure (decorative) */}
          <div>
            <button className="inline-flex items-center gap-1 text-sm font-semibold text-travefy-blue hover:underline underline-offset-2">
              Additional Fields
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
          <button onClick={onClose} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
          >
            Save Booking
          </button>
        </div>
      </div>
    </>
  )
}

// ── Tiny building blocks ──────────────────────────────────────────────────────

const baseInput =
  'w-full px-3 py-2.5 border-b border-travefy-gray-200 rounded-t bg-travefy-gray-50 text-sm text-travefy-navy focus:outline-none focus:border-travefy-blue focus:bg-white transition-colors'

const derivedInput =
  'w-full px-3 py-2.5 border-b border-travefy-gray-200 rounded-t bg-travefy-gray-50 text-sm text-travefy-navy cursor-default'

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-travefy-navy mb-1.5">
        {label}
        {required && <span className="text-travefy-danger ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function SearchInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseInput} pr-9`}
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-blue pointer-events-none" />
    </div>
  )
}

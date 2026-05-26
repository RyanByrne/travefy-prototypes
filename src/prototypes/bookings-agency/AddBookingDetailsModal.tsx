import { ArrowLeft, Calendar, Info, Paperclip, Search, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AddBookingDetailsModalProps {
  open: boolean
  onClose: () => void
  /** Go back to the search modal */
  onBack: () => void
  /** Save & close — receives a summary of the entered booking for downstream use */
  onSave: (booking: NewBookingDraft) => void
  /** Pre-fill supplier (typically from the statement context) */
  defaultSupplier?: string
  /** Pre-fill booking total (typically the amount being reconciled) */
  defaultBookingTotal?: number
}

export interface NewBookingDraft {
  supplier: string
  traveler: string
  confirmationNumber: string
  bookingRef: string
  bookingTotal: number | null
  currency: string
  travelStart: string
  travelEnd: string
  bookingDate: string
  expectedCommissionDate: string
  totalCommission: number
  commissionSplit: number
  totalCommissionAgency: number
  totalCommissionAdvisor: number
}

const SUPPLIERS_WITH_TC = new Set(['Aberdeen'])

// ── Field building blocks ─────────────────────────────────────────────────────

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-travefy-navy mb-1.5">
      {children}
      {required && <span className="text-travefy-danger ml-0.5">*</span>}
    </label>
  )
}

function TextInput({
  value,
  onChange,
  placeholder,
  prefix,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  prefix?: React.ReactNode
}) {
  return (
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-travefy-gray-400">{prefix}</span>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={prefix
          ? 'w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue'
          : 'w-full px-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue'}
      />
    </div>
  )
}

function DateInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Select a date"
        className="w-full px-3 py-2 pr-9 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
      />
      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-blue" />
    </div>
  )
}

// ── Main modal ────────────────────────────────────────────────────────────────

export function AddBookingDetailsModal({ open, onClose, onBack, onSave, defaultSupplier = 'Aberdeen', defaultBookingTotal = 480 }: AddBookingDetailsModalProps) {
  const [supplier, setSupplier] = useState(defaultSupplier)
  const [traveler, setTraveler] = useState('')
  const [confirmationNumber, setConfirmationNumber] = useState('')
  const [bookingRef, setBookingRef] = useState('')
  const [bookingTotal, setBookingTotal] = useState<string>(defaultBookingTotal ? `$${defaultBookingTotal}` : '')
  const [currency, setCurrency] = useState('USD')
  const [travelStart, setTravelStart] = useState('')
  const [travelEnd, setTravelEnd] = useState('')
  const [bookingDate, setBookingDate] = useState('')
  const [expectedCommissionDate, setExpectedCommissionDate] = useState('')
  const [totalCommission, setTotalCommission] = useState('$0')
  const [commissionSplit, setCommissionSplit] = useState('0%')
  const [totalCommissionAgency, setTotalCommissionAgency] = useState('$0')
  const [totalCommissionAdvisor, setTotalCommissionAdvisor] = useState('$0')
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    if (open) {
      setSupplier(defaultSupplier)
      setBookingTotal(defaultBookingTotal ? `$${defaultBookingTotal}` : '')
      setTraveler('')
      setConfirmationNumber('')
      setBookingRef('')
      setCurrency('USD')
      setTravelStart('')
      setTravelEnd('')
      setBookingDate('')
      setExpectedCommissionDate('')
      setTotalCommission('$0')
      setCommissionSplit('0%')
      setTotalCommissionAgency('$0')
      setTotalCommissionAdvisor('$0')
      setShowTooltip(false)
    }
  }, [open, defaultSupplier, defaultBookingTotal])

  if (!open) return null

  const supplierHasTC = SUPPLIERS_WITH_TC.has(supplier)

  const parseMoney = (s: string) => parseFloat(s.replace(/[^0-9.-]+/g, '')) || 0

  const handleSave = () => {
    onSave({
      supplier,
      traveler,
      confirmationNumber,
      bookingRef,
      bookingTotal: parseMoney(bookingTotal) || null,
      currency,
      travelStart,
      travelEnd,
      bookingDate,
      expectedCommissionDate,
      totalCommission: parseMoney(totalCommission),
      commissionSplit: parseFloat(commissionSplit) || 0,
      totalCommissionAgency: parseMoney(totalCommissionAgency),
      totalCommissionAdvisor: parseMoney(totalCommissionAdvisor),
    })
  }

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-travefy-navy/40" onClick={onClose} />

      <div className="fixed inset-0 z-[61] flex items-start justify-center pt-12 px-4 pointer-events-none">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl pointer-events-auto flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-travefy-gray-100 shrink-0">
            <h2 className="text-lg font-bold text-travefy-navy">Add Booking Details</h2>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm font-semibold text-travefy-blue hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Search for a booking
            </button>

            <div className="border-t border-travefy-gray-100" />

            {/* Supplier / Traveler */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel required>Booked through supplier</FieldLabel>
                <TextInput value={supplier} onChange={setSupplier} prefix={<Search className="w-4 h-4" />} />
              </div>
              <div>
                <FieldLabel>Traveler</FieldLabel>
                <TextInput value={traveler} onChange={setTraveler} placeholder="Search contacts..." prefix={<Search className="w-4 h-4" />} />
              </div>
            </div>

            {/* Confirmation / Booking Ref */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel>Confirmation number</FieldLabel>
                <TextInput value={confirmationNumber} onChange={setConfirmationNumber} placeholder="Enter confirmation number" />
              </div>
              <div>
                <FieldLabel>Booking reference #</FieldLabel>
                <TextInput value={bookingRef} onChange={setBookingRef} placeholder="Enter booking reference #" />
              </div>
            </div>

            {/* Booking total + currency / Travel dates */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-[1fr_120px] gap-3">
                <div>
                  <FieldLabel>Booking total</FieldLabel>
                  <TextInput value={bookingTotal} onChange={setBookingTotal} />
                </div>
                <div>
                  <FieldLabel>Booking currency</FieldLabel>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <FieldLabel>Travel start date</FieldLabel>
                  <DateInput value={travelStart} onChange={setTravelStart} />
                </div>
                <div>
                  <FieldLabel>Travel end date</FieldLabel>
                  <DateInput value={travelEnd} onChange={setTravelEnd} />
                </div>
              </div>
            </div>

            {/* Booking dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel>Booking date (optional)</FieldLabel>
                <DateInput value={bookingDate} onChange={setBookingDate} />
              </div>
              <div>
                <FieldLabel>Expected commission date</FieldLabel>
                <DateInput value={expectedCommissionDate} onChange={setExpectedCommissionDate} />
              </div>
            </div>

            <button className="text-sm font-semibold text-travefy-blue hover:underline">
              Edit commission currency (global)
            </button>

            {/* Commission */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel>Total commission</FieldLabel>
                <TextInput value={totalCommission} onChange={setTotalCommission} />
              </div>
              <div>
                <FieldLabel>Commission split</FieldLabel>
                <TextInput value={commissionSplit} onChange={setCommissionSplit} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel>Total commission (Agency)</FieldLabel>
                <TextInput value={totalCommissionAgency} onChange={setTotalCommissionAgency} />
              </div>
              <div>
                <FieldLabel>Total commission (Advisor)</FieldLabel>
                <TextInput value={totalCommissionAdvisor} onChange={setTotalCommissionAdvisor} />
              </div>
            </div>

            {/* T&C */}
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-sm font-semibold text-travefy-navy">Supplier's Terms &amp; Conditions</span>
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="relative w-4 h-4 rounded-full bg-travefy-gray-400 text-white text-[10px] flex items-center justify-center"
                  aria-label="About terms and conditions"
                >
                  <Info className="w-2.5 h-2.5" />
                  {showTooltip && (
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-travefy-navy text-white text-xs font-normal rounded-md px-3 py-2 w-64 text-left shadow-lg">
                      Terms &amp; Conditions come from the supplier profile and can be managed in Preferred Suppliers.
                    </span>
                  )}
                </button>
              </div>
              {supplierHasTC ? (
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-travefy-blue underline">
                  <Paperclip className="w-3.5 h-3.5" />
                  {supplier} Terms and Conditions
                </a>
              ) : (
                <p className="text-sm italic text-travefy-gray-500">
                  No Terms &amp; Conditions are associated with this supplier yet
                </p>
              )}
            </div>

            {/* Upload confirmation */}
            <div>
              <FieldLabel>Upload confirmation (optional)</FieldLabel>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-gray-200 bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors">
                  <Paperclip className="w-3.5 h-3.5" />
                  Attach document
                </button>
                <span className="text-sm italic text-travefy-gray-500">No attachments</span>
              </div>
            </div>

            <p className="text-xs text-right text-travefy-gray-600">
              <span className="text-travefy-danger">*</span> Indicates a required field.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline"
            >
              Cancel
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-2 rounded border border-travefy-danger-border bg-white text-sm font-semibold text-travefy-danger hover:bg-travefy-danger-bg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Remove
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
              >
                Save and close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

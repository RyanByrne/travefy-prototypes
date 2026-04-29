import { clsx } from 'clsx'
import {
  AlertTriangle,
  ChevronDown,
  Download,
  Link2Off,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react'
import { useEffect } from 'react'
import { samplePaymentStatement, type MatchStatus, type StatementRow } from './statementData'

// ── Status badge ──────────────────────────────────────────────────────────────

const statusConfig: Record<MatchStatus, { label: string; className: string }> = {
  unmatched:   { label: 'Unmatched',   className: 'border-travefy-danger-border text-travefy-danger bg-white' },
  unclaimed:   { label: 'Unclaimed',   className: 'border-travefy-danger-border text-travefy-danger bg-white' },
  matched:     { label: 'Matched',     className: 'border-travefy-blue/50 text-travefy-blue bg-travefy-blue-light' },
  'in-dispute':{ label: 'In Dispute',  className: 'border-travefy-danger text-white bg-travefy-danger' },
  reconciled:  { label: 'Reconciled',  className: 'border-travefy-blue text-white bg-travefy-blue' },
}

function StatusPill({ status }: { status: MatchStatus }) {
  const cfg = statusConfig[status]
  return (
    <button
      className={clsx(
        'flex items-center gap-1.5 px-3 py-1 rounded border text-xs font-semibold transition-colors min-w-[110px] justify-between',
        cfg.className,
      )}
    >
      <span>{cfg.label}</span>
      <ChevronDown className="w-3.5 h-3.5" />
    </button>
  )
}

// ── Row icon (warning vs matched-star) ────────────────────────────────────────

function RowMarker({ status }: { status: MatchStatus }) {
  if (status === 'unmatched' || status === 'unclaimed') {
    return (
      <div className="w-6 h-6 rounded-full bg-travefy-warning-bg border border-travefy-warning-border flex items-center justify-center shrink-0">
        <AlertTriangle className="w-3 h-3 text-travefy-warning" />
      </div>
    )
  }
  return (
    <div className="w-6 h-6 rounded-full bg-travefy-success-bg border border-travefy-success-border flex items-center justify-center shrink-0">
      <Sparkles className="w-3 h-3 text-travefy-success" />
    </div>
  )
}

// ── Icon button ───────────────────────────────────────────────────────────────

function IconButton({ icon, danger, onClick }: { icon: React.ReactNode; danger?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-8 h-8 flex items-center justify-center rounded border border-travefy-gray-200 transition-colors',
        danger
          ? 'text-travefy-danger hover:bg-travefy-danger-bg'
          : 'text-travefy-gray-500 hover:bg-travefy-gray-50 hover:text-travefy-gray-700',
      )}
    >
      {icon}
    </button>
  )
}

// ── Money formatter ───────────────────────────────────────────────────────────

const fmt = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`)
const fmtUS = (n: number) => (Number.isInteger(n) ? `US$${n}` : `US$${n.toFixed(2)}`)
const fmtUSDecimal = (n: number) => `US$${n.toFixed(2)}`

// ── Match row ─────────────────────────────────────────────────────────────────

function MatchRow({ row }: { row: StatementRow }) {
  const isUnmatched = row.matched === null
  const rowBg = isUnmatched ? 'bg-travefy-warning-bg/40' : 'bg-white'

  return (
    <div className={clsx('grid grid-cols-[1fr_auto_1fr] gap-0 border-b border-travefy-gray-100', rowBg)}>
      {/* LEFT — Bookings on Statement */}
      <div className="flex items-center gap-3 px-4 py-3">
        <RowMarker status={row.status} />
        <div className="flex-1 grid grid-cols-[1.4fr_1fr_0.8fr] gap-3 items-center text-sm">
          <span className="text-travefy-navy font-medium">{row.receivedRef}</span>
          <span className="text-travefy-gray-700">{fmt(row.amount)}</span>
          <span className="text-travefy-gray-700">
            {row.split !== null ? `${row.split}%` : <span className="text-travefy-gray-400">--</span>}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <IconButton icon={<Pencil className="w-3.5 h-3.5" />} />
          <IconButton icon={<Trash2 className="w-3.5 h-3.5" />} danger />
        </div>
      </div>

      {/* MIDDLE — small visual divider so the two halves read as paired */}
      <div className="w-px bg-travefy-gray-100" />

      {/* RIGHT — Advisor Bookings */}
      <div className="flex items-center gap-3 px-4 py-3">
        {isUnmatched ? (
          <>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-travefy-blue text-white text-xs font-semibold hover:bg-travefy-blue-dark transition-colors">
              <Search className="w-3.5 h-3.5" />
              Match booking
            </button>
            <div className="flex-1 grid grid-cols-[1fr_1fr_1fr] gap-3 text-sm text-travefy-gray-400">
              <span>--</span>
              <span>--</span>
              <span>--</span>
            </div>
            <IconButton icon={<Plus className="w-3.5 h-3.5" />} />
          </>
        ) : (
          <>
            <div className="flex-1 grid grid-cols-[1fr_1.2fr_0.9fr] gap-3 items-center text-sm">
              <span className="text-travefy-navy font-medium">{row.matched!.bookingRef}</span>
              <span className="text-travefy-gray-700">{row.matched!.advisor}</span>
              <span className="text-travefy-gray-700">{fmt(row.matched!.expected)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconButton icon={<Pencil className="w-3.5 h-3.5" />} />
              <IconButton icon={<Link2Off className="w-3.5 h-3.5" />} danger />
            </div>
          </>
        )}
        <div className="shrink-0 ml-1">
          <StatusPill status={row.status} />
        </div>
      </div>
    </div>
  )
}

// ── Header rows for the two-column table ──────────────────────────────────────

function MatchTableHeader() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-0 border-b border-travefy-gray-200 bg-travefy-gray-50">
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="w-6 shrink-0" />
        <div className="flex-1 grid grid-cols-[1.4fr_1fr_0.8fr] gap-3 text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">
          <span>Received Booking</span>
          <span>Amount</span>
          <span>Split</span>
        </div>
        <div className="w-[76px] shrink-0" />
      </div>
      <div className="w-px bg-transparent" />
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="flex-1 grid grid-cols-[1fr_1.2fr_0.9fr] gap-3 text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">
          <span>Booking Ref</span>
          <span>Advisor</span>
          <span className="flex items-center gap-1">
            Expected
            <span className="w-3.5 h-3.5 rounded-full bg-travefy-gray-400 text-white text-[8px] flex items-center justify-center">i</span>
          </span>
        </div>
        <div className="w-[76px] shrink-0" />
        <div className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600 min-w-[110px] text-right">
          Select Action
        </div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function PaymentDetailsDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const s = samplePaymentStatement

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-6xl flex flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 shrink-0">
          <h2 className="text-xl font-bold text-travefy-navy">Payment Details</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-6">
          {/* Statement summary card */}
          <div className="bg-travefy-blue-light/40 border border-travefy-blue/30 rounded-lg p-5 flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-travefy-navy">{s.supplier}</h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm text-travefy-gray-700">{s.date}</span>
                <span className="px-2 py-0.5 rounded bg-white border border-travefy-blue/30 text-xs font-semibold text-travefy-gray-700">
                  REF: {s.reference}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-gray-200 bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                  Edit Details
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-blue bg-travefy-blue-light/60 text-sm font-semibold text-travefy-blue hover:bg-travefy-blue-light transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Download Statement
                </button>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm text-travefy-navy">
                <span className="font-semibold">Matched: </span>
                <span className="font-bold text-travefy-danger">{fmtUS(s.matchedAmount)}</span>
                <span className="text-travefy-gray-700"> / {fmtUSDecimal(s.totalAmount)}</span>
              </p>
              <p className="text-sm text-travefy-navy mt-2">
                <span className="font-semibold">Bookings Matched: </span>
                <span className="font-bold text-travefy-danger">{s.bookingsMatched}</span>
                <span className="text-travefy-gray-700"> / {s.bookingsTotal}</span>
              </p>
            </div>
          </div>

          {/* Two-column section header */}
          <div className="grid grid-cols-2 gap-0 mt-6 mb-3">
            <div className="flex items-center justify-between pr-4">
              <h4 className="text-base font-bold text-travefy-navy">Bookings on Statement</h4>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>
            <div className="pl-4">
              <h4 className="text-base font-bold text-travefy-navy">Advisor Bookings</h4>
            </div>
          </div>

          {/* Match table */}
          <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
            <MatchTableHeader />
            {s.rows.map((row) => (
              <MatchRow key={row.id} row={row} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-8 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
          >
            Save & Close
          </button>
        </div>
      </div>
    </>
  )
}

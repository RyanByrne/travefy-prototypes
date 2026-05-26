import { clsx } from 'clsx'
import {
  AlertTriangle,
  Download,
  Link2Off,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { samplePaymentStatement, type MatchStatus, type StatementRow } from './statementData'

// ── Money formatters ──────────────────────────────────────────────────────────

const fmt = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`)
const fmtUS = (n: number) => (Number.isInteger(n) ? `US$${n}` : `US$${n.toFixed(2)}`)
const fmtUSDecimal = (n: number) => `US$${n.toFixed(2)}`

// ── Icon button ───────────────────────────────────────────────────────────────

function IconButton({ icon, danger, onClick }: { icon: React.ReactNode; danger?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-8 h-8 flex items-center justify-center rounded border border-travefy-gray-200 transition-colors shrink-0',
        danger
          ? 'text-travefy-danger hover:bg-travefy-danger-bg'
          : 'text-travefy-gray-500 hover:bg-travefy-gray-50 hover:text-travefy-gray-700',
      )}
    >
      {icon}
    </button>
  )
}

// ── Match table header ────────────────────────────────────────────────────────

function MatchTableHeader() {
  return (
    <div className="grid grid-cols-[1fr_auto_1.4fr] border-b border-travefy-gray-200 bg-travefy-gray-50">
      <div className="grid grid-cols-[1.4fr_1fr_auto] gap-3 items-center px-4 py-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Received Booking</span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Amount</span>
        <span className="w-[76px]" />
      </div>
      <div className="w-px bg-transparent" />
      <div className="grid grid-cols-[1fr_1.1fr_0.8fr_0.6fr_auto_auto] gap-3 items-center px-4 py-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Booking Ref</span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Advisor</span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600 flex items-center gap-1">
          Expected
          <span className="w-3.5 h-3.5 rounded-full bg-travefy-gray-400 text-white text-[8px] flex items-center justify-center">i</span>
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-travefy-gray-600">Split</span>
        <span className="w-[40px]" />
        <span className="w-[120px]" />
      </div>
    </div>
  )
}

// ── Status pill / action ──────────────────────────────────────────────────────

function StatusCell({
  row,
  onMarkUnclaimed,
  onUnmark,
  onReconcile,
  onUnreconcile,
}: {
  row: StatementRow
  onMarkUnclaimed: () => void
  onUnmark: () => void
  onReconcile: () => void
  onUnreconcile: () => void
}) {
  if (row.status === 'unmatched') {
    return (
      <button
        onClick={onMarkUnclaimed}
        className="px-3 py-1 rounded border border-travefy-danger-border text-travefy-danger text-xs font-semibold hover:bg-travefy-danger-bg transition-colors whitespace-nowrap"
      >
        Mark Unclaimed
      </button>
    )
  }
  if (row.status === 'unclaimed') {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded border border-travefy-danger-border bg-travefy-danger-bg text-travefy-danger text-xs font-semibold whitespace-nowrap">
        Unclaimed
        <button onClick={onUnmark} aria-label="Unmark unclaimed" className="ml-0.5 hover:opacity-70">
          <X className="w-3 h-3" />
        </button>
      </span>
    )
  }
  if (row.status === 'matched') {
    return (
      <button
        onClick={onReconcile}
        className="px-3 py-1 rounded border border-travefy-blue text-travefy-blue text-xs font-semibold hover:bg-travefy-blue-light transition-colors whitespace-nowrap"
      >
        Reconcile
      </button>
    )
  }
  // reconciled
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded border border-travefy-success-border bg-travefy-success-bg text-travefy-success-dark text-xs font-semibold whitespace-nowrap">
      Reconciled
      <button onClick={onUnreconcile} aria-label="Remove reconciled status" className="ml-0.5 hover:opacity-70">
        <X className="w-3 h-3" />
      </button>
    </span>
  )
}

// ── Match row ─────────────────────────────────────────────────────────────────

interface MatchRowProps {
  row: StatementRow
  onSearch: (id: string) => void
  onMarkUnclaimed: (id: string) => void
  onUnmarkUnclaimed: (id: string) => void
  onReconcile: (id: string) => void
  onUnreconcile: (id: string) => void
  onUnlink: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

function MatchRow({ row, onSearch, onMarkUnclaimed, onUnmarkUnclaimed, onReconcile, onUnreconcile, onUnlink, onEdit, onDelete }: MatchRowProps) {
  const isUnlinked = row.matched === null
  const refClass = isUnlinked ? 'text-travefy-danger font-semibold' : 'text-travefy-blue font-medium'

  return (
    <div className="grid grid-cols-[1fr_auto_1.4fr] border-b border-travefy-gray-100 last:border-0">
      {/* LEFT — Bookings on Statement */}
      <div className="grid grid-cols-[1.4fr_1fr_auto] gap-3 items-center px-4 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className={refClass}>{row.receivedRef}</span>
          {isUnlinked && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-travefy-danger-border bg-travefy-danger-bg text-travefy-danger text-[10px] font-semibold whitespace-nowrap">
              <AlertTriangle className="w-2.5 h-2.5" />
              Unmatched
            </span>
          )}
          {row.status === 'matched' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-travefy-success-border bg-travefy-success-bg text-travefy-success-dark text-[10px] font-semibold whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5" />
              Matched
            </span>
          )}
        </div>
        <span className="text-travefy-gray-700 text-sm">{fmt(row.amount)}</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <IconButton icon={<Pencil className="w-3.5 h-3.5" />} onClick={() => onEdit(row.id)} />
          <IconButton icon={<Trash2 className="w-3.5 h-3.5" />} danger onClick={() => onDelete(row.id)} />
        </div>
      </div>

      <div className="w-px bg-travefy-gray-100" />

      {/* RIGHT — Advisor Bookings */}
      <div className="grid grid-cols-[1fr_1.1fr_0.8fr_0.6fr_auto_auto] gap-3 items-center px-4 py-3">
        {isUnlinked ? (
          <>
            <button
              onClick={() => onSearch(row.id)}
              className="col-span-1 flex items-center gap-1.5 px-3 py-1.5 rounded bg-travefy-blue text-white text-xs font-semibold hover:bg-travefy-blue-dark transition-colors justify-center"
            >
              <Search className="w-3.5 h-3.5" />
              Search for booking
            </button>
            <span className="text-travefy-gray-400 text-sm">--</span>
            <span className="text-travefy-gray-400 text-sm">--</span>
            <span className="text-travefy-gray-400 text-sm">--</span>
            <IconButton icon={<Plus className="w-3.5 h-3.5" />} onClick={() => onSearch(row.id)} />
            <StatusCell
              row={row}
              onMarkUnclaimed={() => onMarkUnclaimed(row.id)}
              onUnmark={() => onUnmarkUnclaimed(row.id)}
              onReconcile={() => onReconcile(row.id)}
              onUnreconcile={() => onUnreconcile(row.id)}
            />
          </>
        ) : (
          <>
            <span className="text-travefy-blue font-medium text-sm">{row.matched!.bookingRef}</span>
            <span className="text-travefy-gray-700 text-sm">{row.matched!.advisor}</span>
            <span className="text-travefy-gray-700 text-sm">{fmt(row.matched!.expected)}</span>
            <span className="text-travefy-gray-700 text-sm">{row.matched!.split}%</span>
            <IconButton icon={<Link2Off className="w-3.5 h-3.5" />} danger onClick={() => onUnlink(row.id)} />
            <StatusCell
              row={row}
              onMarkUnclaimed={() => onMarkUnclaimed(row.id)}
              onUnmark={() => onUnmarkUnclaimed(row.id)}
              onReconcile={() => onReconcile(row.id)}
              onUnreconcile={() => onUnreconcile(row.id)}
            />
          </>
        )}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

interface PaymentDetailsDrawerProps {
  open: boolean
  onClose: () => void
  onToast?: (text: string) => void
  /** Called on Save & Close with the current rows */
  onSave?: (rows: StatementRow[]) => void
  /** Called whenever rows change (used to live-update Unclaimed badges in parent) */
  onRowsChange?: (rows: StatementRow[]) => void
  /** Open the booking-search modal for a given row id */
  onSearchBooking?: (rowId: string) => void
  /** Allow the parent to push a freshly linked match back into the drawer */
  pendingMatch?: { rowId: string; match: import('./statementData').MatchedAdvisorBooking } | null
  onPendingMatchHandled?: () => void
}

export function PaymentDetailsDrawer({
  open,
  onClose,
  onToast,
  onSave,
  onRowsChange,
  onSearchBooking,
  pendingMatch,
  onPendingMatchHandled,
}: PaymentDetailsDrawerProps) {
  const [rows, setRows] = useState<StatementRow[]>(samplePaymentStatement.rows)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Apply a match that came in from the SearchBookingModal
  useEffect(() => {
    if (!pendingMatch) return
    setRows((rs) => rs.map((r) => (r.id === pendingMatch.rowId ? { ...r, matched: pendingMatch.match, status: 'matched' } : r)))
    onPendingMatchHandled?.()
  }, [pendingMatch, onPendingMatchHandled])

  // Push row changes to parent for cross-tab updates
  useEffect(() => {
    onRowsChange?.(rows)
  }, [rows, onRowsChange])

  if (!open) return null

  const s = samplePaymentStatement
  const matchesFound = rows.filter((r) => r.matched !== null).length
  const reconciledCount = rows.filter((r) => r.status === 'reconciled').length
  const reconciledAmount = rows.filter((r) => r.status === 'reconciled').reduce((sum, r) => sum + r.amount, 0)

  const markUnclaimed = (id: string) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, status: 'unclaimed' } : r)))
    onToast?.('Marked as unclaimed')
  }
  const unmarkUnclaimed = (id: string) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, status: 'unmatched' } : r)))
  }
  const reconcile = (id: string) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, status: 'reconciled' } : r)))
    onToast?.('Booking reconciled')
  }
  const unreconcile = (id: string) => {
    // Removing the Reconciled badge keeps the match but reverts to "ready to reconcile".
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, status: 'matched' } : r)))
    onToast?.('Reconciled status removed')
  }
  const unlink = (id: string) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, matched: null, status: 'unmatched' } : r)))
    onToast?.('Match removed')
  }
  const editRow = (id: string) => { onToast?.(`Edit row ${id} (mocked)`) }
  const deleteRow = (id: string) => {
    setRows((rs) => rs.filter((r) => r.id !== id))
    onToast?.('Row removed from statement')
  }
  const searchForBooking = (id: string) => {
    onSearchBooking?.(id)
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]" onClick={onClose} />

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
                <button
                  onClick={() => onToast?.('Statement downloaded')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-blue bg-travefy-blue-light/60 text-sm font-semibold text-travefy-blue hover:bg-travefy-blue-light transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Statement
                </button>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm text-travefy-navy">
                <span className="font-semibold">Matched: </span>
                <span className="font-bold text-travefy-danger">{fmtUS(reconciledAmount)}</span>
                <span className="text-travefy-gray-700"> / {fmtUSDecimal(s.totalAmount)}</span>
              </p>
              <p className="text-sm text-travefy-navy mt-2">
                <span className="font-semibold">Bookings Reconciled: </span>
                <span className="font-bold text-travefy-danger">{reconciledCount}</span>
                <span className="text-travefy-gray-700"> / {rows.length}</span>
              </p>
            </div>
          </div>

          {/* Totals subline */}
          <p className="mt-5 text-sm text-travefy-gray-700">
            {rows.length} Total Bookings. {matchesFound} {matchesFound === 1 ? 'Match' : 'Matches'} Found.
          </p>

          {/* Two-column section header */}
          <div className="grid grid-cols-[1fr_auto_1.4fr] items-center mt-3 mb-3">
            <div className="flex items-center justify-between px-4">
              <h4 className="text-base font-bold text-travefy-navy">Bookings on Statement</h4>
              <button
                onClick={() => onToast?.('Add new line item (mocked)')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>
            <div />
            <div className="px-4">
              <h4 className="text-base font-bold text-travefy-navy">Advisor Bookings</h4>
            </div>
          </div>

          {/* Match table */}
          <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
            <MatchTableHeader />
            {rows.map((row) => (
              <MatchRow
                key={row.id}
                row={row}
                onSearch={searchForBooking}
                onMarkUnclaimed={markUnclaimed}
                onUnmarkUnclaimed={unmarkUnclaimed}
                onReconcile={reconcile}
                onUnreconcile={unreconcile}
                onUnlink={unlink}
                onEdit={editRow}
                onDelete={deleteRow}
              />
            ))}
            {rows.length === 0 && (
              <div className="px-4 py-12 text-center text-travefy-gray-500 text-sm">
                All rows removed.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-8 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
          <button
            onClick={() => { onSave?.(rows); onToast?.('Statement saved'); onClose() }}
            className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
          >
            Save & Close
          </button>
        </div>
      </div>
    </>
  )
}

/** Helper for the parent to identify rows for cross-tab linking. */
export type { MatchStatus, StatementRow }

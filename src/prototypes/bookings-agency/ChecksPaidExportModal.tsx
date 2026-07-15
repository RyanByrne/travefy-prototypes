import { Banknote, Download, X } from 'lucide-react'
import { Fragment, useEffect, useMemo, useState } from 'react'
import {
  buildAgentChecks,
  fmtAmount,
  fmtCheckDate,
  type AgentCheck,
  type Payout,
} from './payoutsData'

interface Props {
  open: boolean
  payouts: Payout[]
  initialFrom: string
  initialTo: string
  onClose: () => void
}

const AGENCY = 'Coastline Travel Co.'
const GENERATED_BY = 'Sam Rivera'

type Group = { recipient: string; rows: AgentCheck[]; commissionRcvd: number; adjustments: number; checkAmount: number }

function groupByRecipient(checks: AgentCheck[]): Group[] {
  const groups: Group[] = []
  checks.forEach((c) => {
    let g = groups[groups.length - 1]
    if (!g || g.recipient !== c.recipient) {
      g = { recipient: c.recipient, rows: [], commissionRcvd: 0, adjustments: 0, checkAmount: 0 }
      groups.push(g)
    }
    g.rows.push(c)
    g.commissionRcvd += c.commissionRcvd
    g.adjustments += c.adjustments
    g.checkAmount += c.checkAmount
  })
  return groups
}

/**
 * "Checks Paid to Agents" export — a date-range report of every advisor check
 * across payouts in the window, grouped by recipient with subtotals, plus a real
 * CSV download (opens in Excel / Google Sheets / accounting imports).
 * TODO(dev): back the range with a real GET /reports/checks-paid?from&to.
 */
export function ChecksPaidExportModal({ open, payouts, initialFrom, initialTo, onClose }: Props) {
  const [from, setFrom] = useState(initialFrom)
  const [to, setTo] = useState(initialTo)
  const [applied, setApplied] = useState({ from: initialFrom, to: initialTo })

  useEffect(() => {
    if (open) {
      setFrom(initialFrom)
      setTo(initialTo)
      setApplied({ from: initialFrom, to: initialTo })
    }
  }, [open, initialFrom, initialTo])

  const checks = useMemo(() => buildAgentChecks(payouts, applied.from, applied.to), [payouts, applied])
  const groups = useMemo(() => groupByRecipient(checks), [checks])
  const grand = checks.reduce(
    (acc, c) => ({
      commissionRcvd: acc.commissionRcvd + c.commissionRcvd,
      adjustments: acc.adjustments + c.adjustments,
      checkAmount: acc.checkAmount + c.checkAmount,
    }),
    { commissionRcvd: 0, adjustments: 0, checkAmount: 0 },
  )

  if (!open) return null

  const download = () => {
    const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`
    const header = ['Check Date', 'Check Number', 'Check Recipient', 'Commission Rcvd', 'Adjustments', 'Check Amount']
    const lines: string[] = [header.map(esc).join(',')]
    groups.forEach((g) => {
      g.rows.forEach((c) => {
        lines.push([fmtCheckDate(c.date), c.checkNumber, c.recipient, fmtAmount(c.commissionRcvd), fmtAmount(c.adjustments), fmtAmount(c.checkAmount)].map(esc).join(','))
      })
      // subtotal row (blank date/number/recipient, matching TESS)
      lines.push(['', '', '', fmtAmount(g.commissionRcvd), fmtAmount(g.adjustments), fmtAmount(g.checkAmount)].map(esc).join(','))
    })
    lines.push(['', '', 'TOTAL', fmtAmount(grand.commissionRcvd), fmtAmount(grand.adjustments), fmtAmount(grand.checkAmount)].map(esc).join(','))

    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Checks.Paid.To.Agents.${fmtCheckDate(applied.to).replace(/\//g, '.')}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const numCell = 'px-4 py-2 text-right tabular-nums'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-travefy-navy/40 backdrop-blur-[1px]" onClick={onClose} />
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-travefy-gray-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-travefy-navy">Checks Paid to Agents</h2>
            <p className="text-sm text-travefy-gray-500">List of checks paid to the agency / agent during the provided time frame.</p>
          </div>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-end gap-4 border-b border-travefy-gray-100 px-6 py-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">Earliest Check Date</label>
            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="rounded border border-travefy-gray-200 px-3 py-2 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">Latest Check Date</label>
            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="rounded border border-travefy-gray-200 px-3 py-2 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20" />
          </div>
          <button onClick={() => setApplied({ from, to })} className="rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark">
            Run
          </button>
          <button
            onClick={download}
            disabled={checks.length === 0}
            className="ml-auto flex items-center gap-2 rounded bg-travefy-warning px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            Download CSV
          </button>
        </div>

        {/* Report */}
        <div className="flex-1 overflow-auto px-6 py-5">
          {/* Agency header */}
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-travefy-blue-light">
              <Banknote className="h-5 w-5 text-travefy-blue" />
            </div>
            <div>
              <p className="font-semibold text-travefy-navy">{AGENCY}</p>
              <p className="text-xs text-travefy-gray-500">
                Generated by {GENERATED_BY} · {applied.from} to {applied.to}
              </p>
            </div>
          </div>

          {checks.length === 0 ? (
            <p className="py-12 text-center text-sm text-travefy-gray-500">No checks paid in this date range.</p>
          ) : (
            <div className="overflow-hidden rounded-lg border border-travefy-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-travefy-gray-50">
                  <tr className="text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">
                    <th className="px-4 py-2 text-left">Check Date</th>
                    <th className="px-4 py-2 text-left">Check Number</th>
                    <th className="px-4 py-2 text-left">Check Recipient</th>
                    <th className="px-4 py-2 text-right">Commission Rcvd</th>
                    <th className="px-4 py-2 text-right">Adjustments</th>
                    <th className="px-4 py-2 text-right">Check Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((g) => (
                    <Fragment key={g.recipient}>
                      {g.rows.map((c) => (
                        <tr key={c.payoutId + c.checkNumber} className="border-t border-travefy-gray-100">
                          <td className="px-4 py-2 text-travefy-gray-700">{fmtCheckDate(c.date)}</td>
                          <td className="px-4 py-2 text-travefy-gray-700">{c.checkNumber}</td>
                          <td className="px-4 py-2 font-medium text-travefy-navy">{c.recipient}</td>
                          <td className={`${numCell} text-travefy-gray-700`}>{fmtAmount(c.commissionRcvd)}</td>
                          <td className={`${numCell} ${c.adjustments < 0 ? 'text-travefy-danger' : 'text-travefy-gray-700'}`}>{fmtAmount(c.adjustments)}</td>
                          <td className={`${numCell} text-travefy-gray-900`}>{fmtAmount(c.checkAmount)}</td>
                        </tr>
                      ))}
                      {/* Recipient subtotal */}
                      <tr className="border-t border-travefy-gray-200 bg-travefy-gray-50/60 font-semibold text-travefy-navy">
                        <td className="px-4 py-2" colSpan={3} />
                        <td className={numCell}>{fmtAmount(g.commissionRcvd)}</td>
                        <td className={numCell}>{fmtAmount(g.adjustments)}</td>
                        <td className={numCell}>{fmtAmount(g.checkAmount)}</td>
                      </tr>
                    </Fragment>
                  ))}
                  {/* Grand total */}
                  <tr className="border-t-2 border-travefy-gray-300 bg-travefy-gray-100 font-bold text-travefy-navy">
                    <td className="px-4 py-2.5" colSpan={2} />
                    <td className="px-4 py-2.5">TOTAL</td>
                    <td className={numCell}>{fmtAmount(grand.commissionRcvd)}</td>
                    <td className={numCell}>{fmtAmount(grand.adjustments)}</td>
                    <td className={numCell}>{fmtAmount(grand.checkAmount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import { Check, Info, MinusCircle, Pencil, Plus, Search, Trash2, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Badge, Button, Checkbox, Input, Modal, Select } from '../../shared/components'
import {
  PAYOUT_ADJUSTMENT_TYPES,
  adjustmentSigned,
  agentTotals,
  fmtSignedUsd,
  fmtUsd,
  fmtUsdCents,
  payoutTotals,
  type Payout,
  type PayoutAdjustment,
  type PayoutAdjustmentType,
  type PayoutAgent,
} from './payoutsData'

interface Props {
  open: boolean
  payout: Payout | null
  /** "Add Payout" vs "Edit Payout" title. */
  isNew?: boolean
  onChange: (p: Payout) => void
  onClose: () => void
  onToast: (text: string) => void
}

type View = { type: 'agents' } | { type: 'agent'; agentId: string }

/**
 * Payout drawer with two views: the agent list (disburse per advisor / all) and
 * the Agent Payout drill-down (an advisor's reconciled bookings, add/remove from
 * the payout). The parent owns the payouts array; every mutation calls onChange.
 */
export function PayoutDrawer({ open, payout, isNew, onChange, onClose, onToast }: Props) {
  const [view, setView] = useState<View>({ type: 'agents' })
  // Adjustment modal. presetAgentIds seeds which advisors are checked: one agent
  // (from a row) or all advisors (the payout-level bulk action).
  const [adjustModal, setAdjustModal] = useState<{ open: boolean; presetAgentIds: string[] }>({ open: false, presetAgentIds: [] })

  useEffect(() => {
    if (open) setView({ type: 'agents' })
  }, [open, payout?.id])

  if (!open || !payout) return null

  const patchAgent = (agentId: string, fn: (a: PayoutAgent) => PayoutAgent) =>
    onChange({ ...payout, agents: payout.agents.map((a) => (a.id === agentId ? fn(a) : a)) })

  const disburseAgent = (agentId: string, next: boolean) => {
    patchAgent(agentId, (a) => ({ ...a, disbursed: next }))
    if (next) onToast('Payment disbursed — these bookings have been marked as paid')
  }
  const disburseAll = () => {
    onChange({ ...payout, agents: payout.agents.map((a) => ({ ...a, disbursed: true })) })
    onToast('All advisors disbursed — bookings marked as paid')
  }
  const toggleBooking = (agentId: string, bookingId: string) =>
    patchAgent(agentId, (a) => ({
      ...a,
      bookings: a.bookings.map((b) => (b.id === bookingId ? { ...b, added: !b.added } : b)),
    }))
  const addAll = (agentId: string) =>
    patchAgent(agentId, (a) => ({ ...a, bookings: a.bookings.map((b) => ({ ...b, added: true })) }))
  const addAdjustment = (agentId: string, adj: PayoutAdjustment) =>
    patchAgent(agentId, (a) => ({ ...a, adjustments: [...(a.adjustments ?? []), adj] }))
  const removeAdjustment = (agentId: string, adjId: string) =>
    patchAgent(agentId, (a) => ({ ...a, adjustments: (a.adjustments ?? []).filter((x) => x.id !== adjId) }))

  // Apply one adjustment to many advisors at once (each gets its own line).
  const applyBulkAdjustment = (agentIds: string[], base: Omit<PayoutAdjustment, 'id'>) => {
    const stamp = String(Date.now()).slice(-6)
    onChange({
      ...payout,
      agents: payout.agents.map((a) =>
        agentIds.includes(a.id)
          ? { ...a, adjustments: [...(a.adjustments ?? []), { ...base, id: `adj-${stamp}-${a.id}` }] }
          : a,
      ),
    })
    onToast(agentIds.length === 1 ? 'Adjustment added' : `Adjustment added to ${agentIds.length} advisors`)
  }

  const totals = payoutTotals(payout)
  const activeAgent = view.type === 'agent' ? payout.agents.find((a) => a.id === view.agentId) ?? null : null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-travefy-navy/40" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-5xl flex-col bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-travefy-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-travefy-navy">
            {activeAgent ? 'Agent Payout' : isNew ? 'Add Payout' : 'Edit Payout'}
          </h2>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {activeAgent ? (
          <AgentView
            agent={activeAgent}
            payoutName={payout.name}
            onToggleBooking={(bid) => toggleBooking(activeAgent.id, bid)}
            onAddAll={() => addAll(activeAgent.id)}
            onAddAdjustment={(adj) => addAdjustment(activeAgent.id, adj)}
            onRemoveAdjustment={(id) => removeAdjustment(activeAgent.id, id)}
            onBack={() => setView({ type: 'agents' })}
            onToast={onToast}
          />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Banner */}
              <div className="flex items-center justify-between rounded-lg bg-travefy-blue-light/60 px-6 py-5">
                <div className="flex items-center gap-2">
                  <input
                    value={payout.name}
                    onChange={(e) => onChange({ ...payout, name: e.target.value })}
                    className="bg-transparent text-xl font-bold text-travefy-navy focus:outline-none"
                    aria-label="Payout name"
                  />
                  <Pencil className="h-4 w-4 text-travefy-gray-400" />
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-travefy-navy">{fmtUsdCents(totals.advisor)}</p>
                  <p className="text-xs text-travefy-gray-500">Total Advisor Payout</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-travefy-gray-500">
                Once you have paid your agents you can mark all their bookings as disbursed. Once the booking
                status has been changed they cannot be added to another payout unless you remove the disbursed
                status.
              </p>

              {/* Advisors toolbar — payout-level bulk adjustment */}
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-travefy-navy">Advisors</h3>
                <button
                  onClick={() => setAdjustModal({ open: true, presetAgentIds: payout.agents.map((a) => a.id) })}
                  className="inline-flex items-center gap-1.5 rounded border border-travefy-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-travefy-blue hover:bg-travefy-gray-50"
                >
                  <Users className="h-3.5 w-3.5" />
                  Add Adjustment
                </button>
              </div>

              {/* Agent table */}
              <div className="mt-3 overflow-hidden rounded-lg border border-travefy-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-travefy-gray-50">
                    <tr className="text-left text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">
                      <th className="px-4 py-3">Agent</th>
                      <th className="px-4 py-3">Bookings</th>
                      <th className="px-4 py-3">Total</th>
                      <th className="px-4 py-3">Agency Total</th>
                      <th className="px-4 py-3">Agent Total</th>
                      <th className="px-4 py-3 text-right">
                        <button onClick={disburseAll} className="inline-flex items-center gap-1.5 text-xs font-semibold text-travefy-blue hover:underline">
                          <Check className="h-3.5 w-3.5" />
                          Disburse All
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payout.agents.map((a) => {
                      const t = agentTotals(a)
                      return (
                        <tr key={a.id} className="border-t border-travefy-gray-100">
                          <td className="px-4 py-3 font-medium text-travefy-navy">{a.name}</td>
                          <td className="px-4 py-3 text-travefy-gray-700">{t.count}</td>
                          <td className="px-4 py-3 text-travefy-gray-700">{fmtUsd(t.total)}</td>
                          <td className="px-4 py-3 text-travefy-gray-700">{fmtUsd(t.agencyTotal)}</td>
                          <td className="px-4 py-3 text-travefy-gray-700">
                            {fmtUsd(t.agentTotal)}
                            {t.adjustments !== 0 && (
                              <span className="block text-xs text-travefy-gray-400">incl. {fmtSignedUsd(t.adjustments)} adj</span>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setAdjustModal({ open: true, presetAgentIds: [a.id] })}
                                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-travefy-gray-200 px-3 py-1.5 text-xs font-semibold text-travefy-blue hover:bg-travefy-gray-50"
                              >
                                <Plus className="h-3.5 w-3.5" />
                                Adjustment
                              </button>
                              <button
                                onClick={() => setView({ type: 'agent', agentId: a.id })}
                                className="whitespace-nowrap rounded border border-travefy-gray-200 px-3 py-1.5 text-xs font-semibold text-travefy-blue hover:bg-travefy-gray-50"
                              >
                                {a.disbursed ? 'View Disbursed' : 'View Bookings'}
                              </button>
                              {a.disbursed ? (
                                <button
                                  onClick={() => disburseAgent(a.id, false)}
                                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded bg-travefy-navy px-3 py-1.5 text-xs font-semibold text-white hover:bg-travefy-gray-800"
                                >
                                  <MinusCircle className="h-3.5 w-3.5" />
                                  Disbursed
                                </button>
                              ) : (
                                <button
                                  onClick={() => disburseAgent(a.id, true)}
                                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-travefy-gray-200 px-3 py-1.5 text-xs font-semibold text-travefy-blue hover:bg-travefy-gray-50"
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                  Disburse
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-travefy-gray-200 bg-travefy-gray-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <button onClick={() => onToast('Edit bookings is mocked for this prototype')} className="rounded border border-travefy-gray-200 bg-white px-4 py-2 text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50">
                  Edit Bookings
                </button>
                <span className="text-sm font-semibold text-travefy-blue">Saved!</span>
              </div>
              <button onClick={onClose} className="rounded bg-travefy-blue px-5 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark">
                Close Payout
              </button>
            </div>
          </>
        )}
      </div>

      <AdjustmentModal
        open={adjustModal.open}
        agents={payout.agents}
        presetAgentIds={adjustModal.presetAgentIds}
        onClose={() => setAdjustModal({ open: false, presetAgentIds: [] })}
        onApply={(agentIds, base) => {
          applyBulkAdjustment(agentIds, base)
          setAdjustModal({ open: false, presetAgentIds: [] })
        }}
      />
    </div>
  )
}

// ── Add Adjustment modal — one adjustment, one or many advisors ───────────────

function AdjustmentModal({
  open,
  agents,
  presetAgentIds,
  onClose,
  onApply,
}: {
  open: boolean
  agents: PayoutAgent[]
  presetAgentIds: string[]
  onClose: () => void
  onApply: (agentIds: string[], base: Omit<PayoutAdjustment, 'id'>) => void
}) {
  const [type, setType] = useState<PayoutAdjustmentType>('bonus')
  const [reason, setReason] = useState('')
  const [amount, setAmount] = useState('')
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if (open) { setType('bonus'); setReason(''); setAmount(''); setSelected(presetAgentIds) }
  }, [open, presetAgentIds])

  const bulk = presetAgentIds.length > 1
  const toggle = (id: string) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  const allSelected = selected.length === agents.length
  const toggleAll = () => setSelected(allSelected ? [] : agents.map((a) => a.id))

  const canAdd = reason.trim() !== '' && Number(amount) > 0 && selected.length > 0
  const add = () => {
    if (!canAdd) return
    onApply(selected, { type, reason: reason.trim(), amount: Number(amount), date: 'Today' })
  }

  const title = bulk
    ? 'Add Adjustment · Multiple Advisors'
    : `Add Adjustment${agents.find((a) => a.id === presetAgentIds[0]) ? ` · ${agents.find((a) => a.id === presetAgentIds[0])!.name}` : ''}`

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      size="md"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button disabled={!canAdd} onClick={add}>
            {selected.length > 1 ? `Add to ${selected.length} advisors` : 'Add Adjustment'}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <Select label="Type" value={type} onChange={(e) => setType(e.target.value as PayoutAdjustmentType)}>
          {PAYOUT_ADJUSTMENT_TYPES.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </Select>
        <Input label="Reason / Description" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. Travel show incentive" />
        <Input label="Amount" value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="$0" />

        {/* Advisor selector — bulk apply the same adjustment to many advisors */}
        <div className="rounded-lg border border-travefy-gray-200">
          <div className="flex items-center justify-between border-b border-travefy-gray-100 px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-travefy-gray-500">Apply to</span>
            <button onClick={toggleAll} className="text-xs font-semibold text-travefy-blue hover:underline">
              {allSelected ? 'Clear all' : 'Select all'}
            </button>
          </div>
          <div className="max-h-44 space-y-2 overflow-y-auto px-3 py-2.5">
            {agents.map((a) => (
              <Checkbox key={a.id} label={a.name} checked={selected.includes(a.id)} onChange={() => toggle(a.id)} />
            ))}
          </div>
        </div>

        <p className="text-xs text-travefy-gray-500">
          {type === 'bonus' ? 'Added to' : 'Deducted from'}{' '}
          {selected.length === 1 ? "this advisor's" : `each of the ${selected.length} selected advisors'`} payout total.
          Each advisor gets its own editable adjustment line.
        </p>
      </div>
    </Modal>
  )
}

// ── Agent Payout view (drill-down) ────────────────────────────────────────────

function AgentView({
  agent,
  payoutName,
  onToggleBooking,
  onAddAll,
  onAddAdjustment,
  onRemoveAdjustment,
  onBack,
  onToast,
}: {
  agent: PayoutAgent
  payoutName: string
  onToggleBooking: (bookingId: string) => void
  onAddAll: () => void
  onAddAdjustment: (adj: PayoutAdjustment) => void
  onRemoveAdjustment: (id: string) => void
  onBack: () => void
  onToast: (text: string) => void
}) {
  const t = agentTotals(agent)
  const adjustments = agent.adjustments ?? []

  const [adjType, setAdjType] = useState<PayoutAdjustmentType>('bonus')
  const [adjReason, setAdjReason] = useState('')
  const [adjAmount, setAdjAmount] = useState('')
  const addAdj = () => {
    const amt = Number(adjAmount) || 0
    if (!amt || !adjReason.trim()) return
    onAddAdjustment({ id: `adj-${String(Date.now()).slice(-6)}`, type: adjType, reason: adjReason.trim(), amount: amt, date: 'Today' })
    setAdjType('bonus')
    setAdjReason('')
    setAdjAmount('')
  }
  return (
    <>
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Banner */}
        <div className="flex items-center justify-between rounded-lg bg-travefy-blue-light/60 px-6 py-5">
          <div>
            <p className="text-xl font-bold text-travefy-navy">{agent.name}</p>
            <p className="text-sm text-travefy-gray-600">{payoutName}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-travefy-navy">{fmtUsdCents(t.agentTotal)}</p>
            <p className="text-xs text-travefy-gray-500">{t.count} Bookings</p>
          </div>
        </div>

        {/* Toolbar (mocked search + filters, per prototype convention) */}
        <div className="mt-5 flex items-center gap-3">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-travefy-gray-400" />
            <input
              placeholder="Search for multiple bookings..."
              onChange={() => onToast('Search is mocked for this prototype')}
              className="w-full rounded border border-travefy-gray-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-travefy-blue focus:outline-none focus:ring-2 focus:ring-travefy-blue/20"
            />
          </div>
          <span className="text-sm text-travefy-gray-600">
            Showing <span className="font-semibold text-travefy-navy">{agent.bookings.length}</span> of {agent.bookings.length}
          </span>
        </div>

        {/* Bookings table */}
        <div className="mt-4 overflow-hidden rounded-lg border border-travefy-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-travefy-gray-50">
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-travefy-gray-600">
                <th className="px-4 py-3">Booking Ref</th>
                <th className="px-4 py-3">Supplier</th>
                <th className="px-4 py-3">Travel Date</th>
                <th className="px-4 py-3">
                  <span className="inline-flex items-center gap-1">Expected <Info className="h-3 w-3 text-travefy-gray-400" /></span>
                </th>
                <th className="px-4 py-3">
                  <span className="inline-flex items-center gap-1">Received <Info className="h-3 w-3 text-travefy-gray-400" /></span>
                </th>
                <th className="px-4 py-3">Agent</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">
                  <button onClick={onAddAll} className="inline-flex items-center gap-1.5 text-xs font-semibold text-travefy-blue hover:underline">
                    <Check className="h-3.5 w-3.5" />
                    Add All
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {agent.bookings.map((b) => (
                <tr key={b.id} className="border-t border-travefy-gray-100">
                  <td className="px-4 py-3 font-medium text-travefy-navy">{b.bookingRef}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{b.supplier}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{b.travelDate}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{fmtUsd(b.expected)}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{fmtUsd(b.received)}</td>
                  <td className="px-4 py-3 text-travefy-gray-700">{fmtUsd(b.agentAmount)}</td>
                  <td className="px-4 py-3"><Badge variant="success" size="sm">Reconciled</Badge></td>
                  <td className="px-4 py-3 text-right">
                    {b.added ? (
                      <button
                        onClick={() => onToggleBooking(b.id)}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap rounded bg-travefy-navy px-3 py-1.5 text-xs font-semibold text-white hover:bg-travefy-gray-800"
                      >
                        <MinusCircle className="h-3.5 w-3.5" />
                        Added to payout
                      </button>
                    ) : (
                      <button
                        onClick={() => onToggleBooking(b.id)}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-travefy-gray-200 px-3 py-1.5 text-xs font-semibold text-travefy-blue hover:bg-travefy-gray-50"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Add to payout
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Adjustments — deductions / bonuses on this advisor's payout */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between border-b border-travefy-gray-200 pb-2">
            <h4 className="text-sm font-semibold text-travefy-navy">Adjustments</h4>
            {t.adjustments !== 0 && (
              <span className="text-xs text-travefy-gray-500">Net {fmtSignedUsd(t.adjustments)} to advisor payout</span>
            )}
          </div>

          {adjustments.length === 0 ? (
            <p className="text-sm text-travefy-gray-500">No adjustments. Add a bonus or deduction to this advisor's payout.</p>
          ) : (
            <div className="divide-y divide-travefy-gray-100">
              {adjustments.map((a) => (
                <div key={a.id} className="flex items-center gap-4 py-2.5 text-sm">
                  <span className="w-20 shrink-0 text-travefy-gray-500">{a.date}</span>
                  <Badge variant={a.type === 'bonus' ? 'success' : 'danger'} size="sm">
                    {a.type === 'bonus' ? 'Bonus' : 'Deduction'}
                  </Badge>
                  <span className="flex-1 text-travefy-gray-700">{a.reason}</span>
                  <span className={`w-24 shrink-0 text-right font-semibold ${adjustmentSigned(a) < 0 ? 'text-travefy-danger' : 'text-travefy-success'}`}>
                    {fmtSignedUsd(adjustmentSigned(a))}
                  </span>
                  <button onClick={() => onRemoveAdjustment(a.id)} className="shrink-0 rounded border border-travefy-gray-200 p-1 text-travefy-gray-400 hover:text-travefy-danger" aria-label="Remove adjustment">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add adjustment */}
          <div className="mt-3 flex items-end gap-3">
            <div className="w-40">
              <Select label="Type" value={adjType} onChange={(e) => setAdjType(e.target.value as PayoutAdjustmentType)}>
                {PAYOUT_ADJUSTMENT_TYPES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </Select>
            </div>
            <div className="flex-1">
              <Input label="Reason / Description" value={adjReason} onChange={(e) => setAdjReason(e.target.value)} placeholder="e.g. Travel show incentive" />
            </div>
            <div className="w-32">
              <Input label="Amount" value={adjAmount} onChange={(e) => setAdjAmount(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="$0" />
            </div>
            <Button variant="secondary" onClick={addAdj} disabled={!adjReason.trim() || !Number(adjAmount)}>
              Add
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 border-t border-travefy-gray-200 bg-travefy-gray-50 px-6 py-4">
        <button onClick={onBack} className="rounded border border-travefy-gray-200 bg-white px-4 py-2 text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50">
          Back to Payouts
        </button>
        <span className="text-sm font-semibold text-travefy-blue">Saved!</span>
      </div>
    </>
  )
}

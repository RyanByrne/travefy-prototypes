import { clsx } from 'clsx'
import { Award, ChevronDown, History, Landmark, Plus, TrendingUp, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Avatar } from '../../shared/components'
import { fmtMoney, fmtSplitDate, formatSplit, SUPPLIERS, tierProgressPercent, type CommissionSplit, type SupplierSplit, type TeamMember } from './data'

/** Today as ISO YYYY-MM-DD (browser only — used to default effective dates). */
const todayISO = () => new Date().toISOString().slice(0, 10)

// ── Drawer shell (reused by both drawers) ──────────────────────────────────────

function DrawerShell({
  title,
  open,
  onClose,
  onSave,
  saveLabel = 'Save and close',
  children,
}: {
  title: string
  open: boolean
  onClose: () => void
  onSave: () => void
  saveLabel?: string
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl flex flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between px-8 py-5 border-b border-travefy-gray-100 shrink-0">
          <h2 className="text-lg font-bold text-travefy-navy">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6">{children}</div>
        <div className="flex items-center justify-between px-8 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
          <button onClick={onClose} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <button
            onClick={onSave}
            className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
          >
            {saveLabel}
          </button>
        </div>
      </div>
    </>
  )
}

// ── Split drawer ───────────────────────────────────────────────────────────────

export function SplitDrawer({
  open,
  onClose,
  split,
  onSave,
}: {
  open: boolean
  onClose: () => void
  split: CommissionSplit | null
  onSave: (next: CommissionSplit) => void
}) {
  const [name, setName] = useState('')
  const [percentage, setPercentage] = useState('0%')
  const [description, setDescription] = useState('')
  const [effectiveDate, setEffectiveDate] = useState(todayISO())

  // A rate change vs. the saved split — only then does "effective date" matter.
  const rateChanged = !!split && parseInt(percentage.replace(/[^0-9]/g, ''), 10) !== split.percentage

  useEffect(() => {
    if (open) {
      setName(split?.name ?? '')
      setPercentage(split ? `${split.percentage}%` : '0%')
      setDescription(split?.description ?? '')
      setEffectiveDate(todayISO())
    }
  }, [open, split])

  const handleSave = () => {
    const pct = parseInt(percentage.replace(/[^0-9]/g, ''), 10) || 0
    onSave({
      id: split?.id ?? `s-${Date.now()}`,
      name: name.trim() || 'Untitled Split',
      description: description.trim(),
      percentage: pct,
    })
  }

  return (
    <DrawerShell title="Commission Split" open={open} onClose={onClose} onSave={handleSave}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Split Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Set an internal name"
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-500 mt-1">Used to identify splits</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Commission percentage</label>
            <input
              type="text"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="0%"
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-500 mt-1">Percent of commission assigned to advisor</p>
          </div>
        </div>

        {rateChanged && (
          <div className="rounded-lg border border-travefy-blue/30 bg-travefy-blue-light/40 p-4">
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Rate effective date</label>
            <input
              type="date"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              className="w-full max-w-xs px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-600 mt-2">
              Bookings dated on or after this date use the new rate when they’re reconciled. Already-reconciled bookings
              are unchanged — a rate change is never retroactive.
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add any internal notes..."
            rows={5}
            className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue resize-none"
          />
          <p className="text-xs text-travefy-gray-500 mt-1">Internal notes about this supplier are only visible to the team, not to clients</p>
        </div>
      </div>
    </DrawerShell>
  )
}

// ── Team Member drawer ─────────────────────────────────────────────────────────

export function TeamMemberDrawer({
  open,
  onClose,
  member,
  splits,
  onSave,
  onApplySplit,
}: {
  open: boolean
  onClose: () => void
  member: TeamMember | null
  splits: CommissionSplit[]
  onSave: (next: TeamMember) => void
  /** Apply a split change as its own action (persists, keeps drawer open). */
  onApplySplit: (next: TeamMember, message?: string) => void
}) {
  const [role, setRole] = useState<TeamMember['role']>('Member')
  const [splitId, setSplitId] = useState<string>('')
  const [effectiveDate, setEffectiveDate] = useState<string>('')
  const [canOverrideSplit, setCanOverrideSplit] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')
  const [historyOpen, setHistoryOpen] = useState(false)
  // Supplier-specific split add form
  const [addingSupplier, setAddingSupplier] = useState(false)
  const [newSupplier, setNewSupplier] = useState('')
  const [newSupplierSplitId, setNewSupplierSplitId] = useState('')
  const [newSupplierDate, setNewSupplierDate] = useState(todayISO())
  // Reward redemption
  const [rewardSupplier, setRewardSupplier] = useState('')

  useEffect(() => {
    if (open && member) {
      setRole(member.role)
      setSplitId(member.commissionSplitId)
      setEffectiveDate(member.commissionSplitEffectiveDate)
      setCanOverrideSplit(member.canOverrideSplit)
      setAccountNumber(member.bankAccountNumber ?? '')
      setRoutingNumber(member.bankRoutingNumber ?? '')
      setAddingSupplier(false)
      setNewSupplier('')
      setNewSupplierSplitId(splits[0]?.id ?? '')
      setNewSupplierDate(todayISO())
      setRewardSupplier('')
    }
  }, [open, member, splits])

  if (!member) return null

  const currentSplit = splits.find((s) => s.id === member.commissionSplitId)
  const splitChanged = splitId !== member.commissionSplitId

  // The other editable fields, carried through both actions.
  const baseEdits = () => ({
    role,
    canOverrideSplit,
    bankAccountNumber: accountNumber.trim() || undefined,
    bankRoutingNumber: routingNumber.trim() || undefined,
  })

  // Distinct action: assign a new split. Appends a log entry (forward-only) and
  // persists in place — separate from the general "Save and close" below.
  const handleApplySplit = () => {
    const nextSplit = splits.find((s) => s.id === splitId)
    if (!nextSplit || !splitChanged) return
    const note = !currentSplit
      ? 'Tier change'
      : nextSplit.percentage > currentSplit.percentage
        ? 'Tier upgrade'
        : nextSplit.percentage < currentSplit.percentage
          ? 'Tier downgrade'
          : 'Tier change'
    onApplySplit({
      ...member,
      ...baseEdits(),
      commissionSplitId: splitId,
      commissionSplitEffectiveDate: effectiveDate,
      splitHistory: [
        ...(member.splitHistory ?? []),
        { effectiveDate, splitName: nextSplit.name, percentage: nextSplit.percentage, note },
      ],
    })
  }

  // Persist a supplier-split / reward change in place (keeps the drawer open),
  // carrying through any pending role/override/banking edits.
  const persist = (patch: Partial<TeamMember>, message: string) =>
    onApplySplit({ ...member, ...baseEdits(), ...patch }, message)

  const supplierSplits = member.supplierSplits ?? []

  const handleAddSupplierSplit = () => {
    const tier = splits.find((s) => s.id === newSupplierSplitId)
    if (!newSupplier || !tier) return
    const entry: SupplierSplit = { id: `ss-${Date.now()}`, supplier: newSupplier, splitId: tier.id, effectiveDate: newSupplierDate, source: 'manual' }
    // One override per supplier — replace any existing for this supplier.
    const next = [...supplierSplits.filter((s) => s.supplier !== newSupplier), entry]
    persist({ supplierSplits: next }, `${newSupplier} → ${formatSplit(tier)} for ${member.name}`)
  }

  const handleRemoveSupplierSplit = (id: string) => {
    const removed = supplierSplits.find((s) => s.id === id)
    persist({ supplierSplits: supplierSplits.filter((s) => s.id !== id) }, removed ? `Removed ${removed.supplier} split` : `Updated ${member.name}`)
  }

  const handleGrantReward = () => {
    const r = member.supplierReward
    const tier = splits.find((s) => s.id === r?.rewardSplitId)
    if (!r || !tier || !rewardSupplier) return
    const entry: SupplierSplit = { id: `ss-reward-${Date.now()}`, supplier: rewardSupplier, splitId: tier.id, effectiveDate: todayISO(), source: 'reward' }
    const nextSplits = [...supplierSplits.filter((s) => s.supplier !== rewardSupplier), entry]
    persist(
      { supplierSplits: nextSplits, supplierReward: { ...r, chosenSupplier: rewardSupplier, effectiveDate: todayISO() } },
      `Granted ${formatSplit(tier)} on ${rewardSupplier} to ${member.name}`,
    )
  }

  // General save — role, override and banking. Splits (default, supplier, reward)
  // are managed by their own distinct actions, so they're left untouched here.
  const handleSave = () => {
    onSave({ ...member, ...baseEdits() })
  }

  return (
    <DrawerShell title="Team Member" open={open} onClose={onClose} onSave={handleSave}>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-travefy-navy">
            Advisor <span className="text-travefy-danger">*</span>
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Avatar name={member.name} size="sm" />
            <span className="text-base font-semibold text-travefy-navy">{member.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold text-travefy-navy mb-1.5">Email</p>
            <p className="text-sm text-travefy-gray-700">{member.email}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-travefy-navy mb-1.5">Status</p>
            <p className="text-sm text-travefy-gray-700">{member.status}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as TeamMember['role'])}
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            >
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Commission split — its own action, separate from the general Save */}
        <div className="rounded-lg border border-travefy-gray-200 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-travefy-navy">Default split <span className="font-normal text-travefy-gray-400">· all suppliers</span></h3>
            <span className="text-xs text-travefy-gray-500">
              Current: <span className="font-semibold text-travefy-navy">{formatSplit(currentSplit)}</span> · effective {fmtSplitDate(member.commissionSplitEffectiveDate)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-travefy-navy mb-1.5">New split</label>
              <select
                value={splitId}
                onChange={(e) => {
                  const next = e.target.value
                  setSplitId(next)
                  // A new tier takes effect today by default (editable); reverting
                  // to the current tier restores its original effective date.
                  setEffectiveDate(next === member.commissionSplitId ? member.commissionSplitEffectiveDate : todayISO())
                }}
                className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              >
                {splits.map((s) => (
                  <option key={s.id} value={s.id}>{formatSplit(s)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Effective date</label>
              <input
                type="date"
                value={effectiveDate}
                onChange={(e) => setEffectiveDate(e.target.value)}
                className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              />
            </div>
          </div>
          <p className="text-xs text-travefy-gray-500 mt-2">Bookings dated on or after this apply the new split when reconciled. Already-reconciled bookings keep the rate they were calculated at.</p>
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleApplySplit}
              disabled={!splitChanged}
              className="inline-flex items-center gap-1.5 rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark disabled:cursor-not-allowed disabled:opacity-40 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Apply split change
            </button>
          </div>
        </div>

        {/* Supplier-specific splits — override the default for a given supplier */}
        <div className="rounded-lg border border-travefy-gray-200 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-travefy-navy">Supplier-specific splits</h3>
            {!addingSupplier && (
              <button onClick={() => setAddingSupplier(true)} className="inline-flex items-center gap-1 text-sm font-semibold text-travefy-blue hover:underline">
                <Plus className="w-3.5 h-3.5" /> Add supplier split
              </button>
            )}
          </div>
          <p className="mt-1 mb-3 text-xs text-travefy-gray-500">Override the default for a specific supplier. On a booking, the supplier’s split wins over the default.</p>

          {supplierSplits.length === 0 ? (
            <p className="text-sm text-travefy-gray-500">No supplier-specific splits — the default applies to every supplier.</p>
          ) : (
            <div className="space-y-1.5">
              {supplierSplits.map((ss) => {
                const tier = splits.find((s) => s.id === ss.splitId)
                return (
                  <div key={ss.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="min-w-0">
                      <span className="font-medium text-travefy-navy">{ss.supplier}</span>
                      <span className="text-travefy-gray-500"> → {formatSplit(tier)}</span>
                      {ss.source === 'reward' && <span className="ml-2 rounded bg-travefy-warning-bg px-1.5 py-0.5 text-[11px] font-semibold text-travefy-warning-dark">Reward</span>}
                      <span className="block text-xs text-travefy-gray-400">effective {fmtSplitDate(ss.effectiveDate)}</span>
                    </span>
                    <button onClick={() => handleRemoveSupplierSplit(ss.id)} className="shrink-0 rounded p-1 text-travefy-gray-400 hover:text-travefy-danger" aria-label={`Remove ${ss.supplier} split`}>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          {addingSupplier && (
            <div className="mt-3 rounded-lg border border-travefy-gray-200 bg-travefy-gray-50 p-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-travefy-gray-600 mb-1">Supplier</label>
                  <select value={newSupplier} onChange={(e) => setNewSupplier(e.target.value)} className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue">
                    <option value="" disabled>Select supplier</option>
                    {SUPPLIERS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-travefy-gray-600 mb-1">Split</label>
                  <select value={newSupplierSplitId} onChange={(e) => setNewSupplierSplitId(e.target.value)} className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue">
                    {splits.map((s) => <option key={s.id} value={s.id}>{formatSplit(s)}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-xs font-semibold text-travefy-gray-600 mb-1">Effective date</label>
                <input type="date" value={newSupplierDate} onChange={(e) => setNewSupplierDate(e.target.value)} className="w-full max-w-xs px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue" />
              </div>
              <div className="mt-3 flex justify-end gap-2">
                <button onClick={() => setAddingSupplier(false)} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
                <button onClick={handleAddSupplierSplit} disabled={!newSupplier} className="inline-flex items-center gap-1.5 rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark disabled:cursor-not-allowed disabled:opacity-40">Add split</button>
              </div>
            </div>
          )}
        </div>

        {/* Earned reward — 100% (or other tier) on one supplier of their choice */}
        {member.supplierReward && (() => {
          const r = member.supplierReward!
          const tier = splits.find((s) => s.id === r.rewardSplitId)
          const pct = Math.min(100, Math.round((r.currentSales / r.targetSales) * 100))
          const earned = r.currentSales >= r.targetSales
          const remaining = Math.max(0, r.targetSales - r.currentSales)
          return (
            <div className="rounded-lg border border-travefy-warning-border bg-travefy-warning-bg/40 p-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-travefy-warning-dark" />
                <span className="text-sm font-semibold text-travefy-navy">Supplier reward</span>
              </div>
              <p className="mt-1 text-sm text-travefy-gray-700">
                Earn <span className="font-semibold text-travefy-navy">{formatSplit(tier)}</span> on one supplier of their choice at{' '}
                <span className="font-semibold text-travefy-navy">{fmtMoney(r.targetSales)}</span> in YTD sales.
              </p>

              {r.chosenSupplier ? (
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-travefy-success-dark">
                  <Award className="w-4 h-4" /> {formatSplit(tier)} on {r.chosenSupplier}{r.effectiveDate ? ` · since ${fmtSplitDate(r.effectiveDate)}` : ''}
                </p>
              ) : earned ? (
                <div className="mt-3">
                  <p className="mb-2 text-sm font-semibold text-travefy-navy">Unlocked — choose the supplier for {formatSplit(tier)}</p>
                  <div className="flex items-end gap-2">
                    <select value={rewardSupplier} onChange={(e) => setRewardSupplier(e.target.value)} className="flex-1 px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue">
                      <option value="" disabled>Select supplier</option>
                      {SUPPLIERS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <button onClick={handleGrantReward} disabled={!rewardSupplier} className="rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark disabled:cursor-not-allowed disabled:opacity-40">Grant</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
                    <div className="h-full rounded-full bg-travefy-warning-dark" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-xs">
                    <span className="text-travefy-gray-600">{fmtMoney(r.currentSales)} of {fmtMoney(r.targetSales)} ({pct}%)</span>
                    <span className="font-semibold text-travefy-warning-dark">{fmtMoney(remaining)} to go</span>
                  </div>
                </>
              )}
            </div>
          )
        })()}

        {member.splitHistory && member.splitHistory.length > 0 && (
          <div className="border-t border-travefy-gray-100 pt-5">
            <button
              onClick={() => setHistoryOpen((v) => !v)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-travefy-navy">
                <History className="w-4 h-4 text-travefy-gray-500" />
                Commission split history
                <span className="rounded-full bg-travefy-gray-100 px-1.5 text-xs font-semibold text-travefy-gray-600">{member.splitHistory.length}</span>
              </span>
              <ChevronDown className={clsx('w-4 h-4 text-travefy-gray-400 transition-transform', historyOpen && 'rotate-180')} />
            </button>
            {historyOpen && (
              <div className="mt-3 space-y-1.5">
                {[...member.splitHistory].reverse().map((h, i) => (
                  <div key={`${h.effectiveDate}-${i}`} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="min-w-0 truncate text-travefy-navy">
                      {h.splitName} <span className="text-travefy-gray-500">({h.percentage}%)</span>
                      {i === 0 && <span className="ml-2 rounded bg-travefy-blue-light px-1.5 py-0.5 text-[11px] font-semibold text-travefy-blue">Current</span>}
                    </span>
                    <span className="whitespace-nowrap text-xs text-travefy-gray-500">{fmtSplitDate(h.effectiveDate)}</span>
                  </div>
                ))}
                <p className="pt-1 text-xs text-travefy-gray-400">Never retroactive — a booking keeps the rate in effect on its date.</p>
              </div>
            )}
          </div>
        )}

        {member.tierProgression && (() => {
          const prog = member.tierProgression!
          const next = splits.find((s) => s.id === prog.nextSplitId)
          const pct = tierProgressPercent(prog)
          const remaining = Math.max(0, prog.targetSales - prog.currentSales)
          const done = pct >= 100
          return (
            <div className="rounded-lg border border-travefy-blue/30 bg-travefy-blue-light/50 p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-travefy-blue" />
                <span className="text-sm font-semibold text-travefy-navy">Automatic tier upgrade</span>
              </div>
              <p className="mt-1 text-sm text-travefy-gray-700">
                Moves to <span className="font-semibold text-travefy-navy">{next ? formatSplit(next) : 'the next tier'}</span> at{' '}
                <span className="font-semibold text-travefy-navy">{fmtMoney(prog.targetSales)}</span> in sales.
              </p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
                <div
                  className={clsx('h-full rounded-full', done ? 'bg-travefy-success' : 'bg-travefy-blue')}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-1.5 flex items-center justify-between text-xs">
                <span className="text-travefy-gray-600">
                  {fmtMoney(prog.currentSales)} of {fmtMoney(prog.targetSales)} ({pct}%)
                </span>
                <span className="font-semibold text-travefy-blue">
                  {done ? 'Target reached — upgrade applies on next booking' : `${fmtMoney(remaining)} to go`}
                </span>
              </div>
            </div>
          )
        })()}

        <div className="border-t border-travefy-gray-100 pt-5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={canOverrideSplit}
              onChange={(e) => setCanOverrideSplit(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-travefy-gray-300 text-travefy-blue focus:ring-2 focus:ring-travefy-blue/20"
            />
            <span className="flex-1">
              <span className="block text-sm font-semibold text-travefy-navy">Allow advisor to override commission split</span>
              <span className="block text-xs text-travefy-gray-500 mt-0.5">
                When enabled, this advisor can pick a different commission split per booking from the splits marked "advisor selectable".
              </span>
            </span>
          </label>
        </div>

        <div className="border-t border-travefy-gray-100 pt-5">
          <div className="mb-3 flex items-center gap-2">
            <Landmark className="w-4 h-4 text-travefy-gray-500" />
            <h3 className="text-sm font-semibold text-travefy-navy">Banking Info</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Account Number</label>
              <input
                type="text"
                inputMode="numeric"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 17))}
                placeholder="000123456789"
                className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 font-mono tracking-wide focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Routing Number</label>
              <input
                type="text"
                inputMode="numeric"
                value={routingNumber}
                onChange={(e) => setRoutingNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 9))}
                placeholder="021000021"
                className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 font-mono tracking-wide focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              />
              <p className="text-xs text-travefy-gray-500 mt-1">9-digit ABA routing number</p>
            </div>
          </div>
        </div>
      </div>
    </DrawerShell>
  )
}

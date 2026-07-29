import { clsx } from 'clsx'
import { Landmark, Plus, TrendingUp, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Avatar } from '../../shared/components'
import { fmtMoney, fmtSplitDate, formatSplit, SUPPLIERS, tierProgressPercent, type AssignedSplit, type CommissionSplit, type TeamMember } from './data'

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
  const [supplier, setSupplier] = useState('')
  const [effectiveDate, setEffectiveDate] = useState(todayISO())

  // A rate change vs. the saved split — only then does "effective date" matter.
  const rateChanged = !!split && parseInt(percentage.replace(/[^0-9]/g, ''), 10) !== split.percentage

  useEffect(() => {
    if (open) {
      setName(split?.name ?? '')
      setPercentage(split ? `${split.percentage}%` : '0%')
      setDescription(split?.description ?? '')
      setSupplier(split?.supplier ?? '')
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
      supplier: supplier || undefined,
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

        <div>
          <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Applies to</label>
          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full max-w-xs px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          >
            <option value="">All suppliers</option>
            {SUPPLIERS.map((s) => <option key={s} value={s}>{s} only</option>)}
          </select>
          <p className="text-xs text-travefy-gray-500 mt-1">Scope this split to one supplier, or leave as all suppliers. When assigned to an advisor, a supplier-scoped split only applies to that supplier’s bookings.</p>
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
  const [canOverrideSplit, setCanOverrideSplit] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')
  // Add-split form
  const [addingSplit, setAddingSplit] = useState(false)
  const [newSplitId, setNewSplitId] = useState('')
  const [newSplitDate, setNewSplitDate] = useState(todayISO())

  useEffect(() => {
    if (open && member) {
      setRole(member.role)
      setCanOverrideSplit(member.canOverrideSplit)
      setAccountNumber(member.bankAccountNumber ?? '')
      setRoutingNumber(member.bankRoutingNumber ?? '')
      setAddingSplit(false)
      setNewSplitId(splits[0]?.id ?? '')
      setNewSplitDate(todayISO())
    }
  }, [open, member, splits])

  if (!member) return null

  const assignedSplits = member.assignedSplits ?? []

  // Editable fields carried through the in-place split actions.
  const baseEdits = () => ({
    role,
    canOverrideSplit,
    bankAccountNumber: accountNumber.trim() || undefined,
    bankRoutingNumber: routingNumber.trim() || undefined,
  })

  // Persist an assigned-splits change in place (keeps the drawer open).
  const persist = (next: AssignedSplit[], message: string) =>
    onApplySplit({ ...member, ...baseEdits(), assignedSplits: next }, message)

  const handleAddSplit = () => {
    const tier = splits.find((s) => s.id === newSplitId)
    if (!tier) return
    const entry: AssignedSplit = { id: `as-${Date.now()}`, splitId: tier.id, effectiveDate: newSplitDate, active: true }
    persist([...assignedSplits, entry], `Added ${formatSplit(tier)} to ${member.name}`)
  }

  const handleToggleActive = (id: string) => {
    const target = assignedSplits.find((a) => a.id === id)
    const tier = target && splits.find((s) => s.id === target.splitId)
    persist(
      assignedSplits.map((a) => (a.id === id ? { ...a, active: !a.active } : a)),
      target ? `${tier ? formatSplit(tier) : 'Split'} ${target.active ? 'deactivated' : 'activated'}` : `Updated ${member.name}`,
    )
  }

  const handleRemoveSplit = (id: string) => {
    const target = assignedSplits.find((a) => a.id === id)
    const tier = target && splits.find((s) => s.id === target.splitId)
    persist(assignedSplits.filter((a) => a.id !== id), tier ? `Removed ${formatSplit(tier)}` : `Updated ${member.name}`)
  }

  // General save — role, override and banking. Splits are managed by their own
  // in-place actions above, so they're left untouched here.
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

        {/* Commission splits — assign multiple; supplier-scoped ones win for that supplier */}
        <div className="rounded-lg border border-travefy-gray-200 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-travefy-navy">Commission splits</h3>
            {!addingSplit && (
              <button onClick={() => setAddingSplit(true)} className="inline-flex items-center gap-1 text-sm font-semibold text-travefy-blue hover:underline">
                <Plus className="w-3.5 h-3.5" /> Add split
              </button>
            )}
          </div>
          <p className="mt-1 mb-3 text-xs text-travefy-gray-500">On a booking, the active split matching its supplier wins over an active all-suppliers split. Inactive splits are ignored.</p>

          {assignedSplits.length === 0 ? (
            <p className="text-sm text-travefy-gray-500">No splits assigned yet.</p>
          ) : (
            <div className="space-y-1.5">
              {assignedSplits.map((a) => {
                const tier = splits.find((s) => s.id === a.splitId)
                return (
                  <div key={a.id} className={clsx('flex items-center justify-between gap-3 rounded border px-3 py-2 text-sm', a.active ? 'border-travefy-gray-200 bg-white' : 'border-travefy-gray-100 bg-travefy-gray-50')}>
                    <span className={clsx('min-w-0', !a.active && 'opacity-60')}>
                      <span className="font-medium text-travefy-navy">{tier?.name ?? 'Unknown split'}</span>
                      <span className="text-travefy-gray-500"> ({tier?.percentage ?? 0}%)</span>
                      <span className="ml-2 text-xs text-travefy-gray-500">{tier?.supplier ? `${tier.supplier} only` : 'All suppliers'}</span>
                      <span className="block text-xs text-travefy-gray-400">effective {fmtSplitDate(a.effectiveDate)}</span>
                    </span>
                    <div className="flex shrink-0 items-center gap-1">
                      <button
                        onClick={() => handleToggleActive(a.id)}
                        className={clsx('rounded border px-2 py-1 text-xs font-semibold', a.active ? 'border-travefy-success-border bg-travefy-success-bg text-travefy-success-dark' : 'border-travefy-gray-300 bg-white text-travefy-gray-500')}
                      >
                        {a.active ? 'Active' : 'Inactive'}
                      </button>
                      <button onClick={() => handleRemoveSplit(a.id)} className="rounded p-1 text-travefy-gray-400 hover:text-travefy-danger" aria-label="Remove split">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {addingSplit && (
            <div className="mt-3 rounded-lg border border-travefy-gray-200 bg-travefy-gray-50 p-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-travefy-gray-600 mb-1">Split</label>
                  <select value={newSplitId} onChange={(e) => setNewSplitId(e.target.value)} className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue">
                    {splits.map((s) => <option key={s.id} value={s.id}>{formatSplit(s)}{s.supplier ? ` · ${s.supplier}` : ''}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-travefy-gray-600 mb-1">Effective date</label>
                  <input type="date" value={newSplitDate} onChange={(e) => setNewSplitDate(e.target.value)} className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue" />
                </div>
              </div>
              <div className="mt-3 flex justify-end gap-2">
                <button onClick={() => setAddingSplit(false)} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
                <button onClick={handleAddSplit} className="inline-flex items-center gap-1.5 rounded bg-travefy-blue px-4 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark">Add split</button>
              </div>
            </div>
          )}
        </div>

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

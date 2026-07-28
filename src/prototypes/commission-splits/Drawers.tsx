import { clsx } from 'clsx'
import { History, Landmark, Plus, TrendingUp, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Avatar } from '../../shared/components'
import { fmtMoney, fmtSplitDate, formatSplit, LABEL_PALETTE, tierProgressPercent, type CommissionSplit, type LabelColor, type SplitLabel, type TeamMember } from './data'

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

// ── Label chip + picker ────────────────────────────────────────────────────────

const labelClass: Record<LabelColor, string> = {
  green:  'bg-travefy-success-bg text-travefy-success-dark border-travefy-success-border',
  blue:   'bg-travefy-blue-light text-travefy-blue border-travefy-blue/40',
  orange: 'bg-travefy-warning-bg text-travefy-warning-dark border-travefy-warning-border',
  gray:   'bg-travefy-gray-100 text-travefy-gray-700 border-travefy-gray-300',
}

function LabelChip({ label, onRemove }: { label: SplitLabel; onRemove?: () => void }) {
  return (
    <span className={clsx('inline-flex items-center gap-1 px-2.5 py-1 rounded border text-xs font-semibold', labelClass[label.color])}>
      {label.name}
      {onRemove && (
        <button onClick={onRemove} className="ml-0.5 hover:opacity-70" aria-label={`Remove ${label.name}`}>
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  )
}

function LabelPicker({ value, onChange }: { value: SplitLabel[]; onChange: (next: SplitLabel[]) => void }) {
  const [open, setOpen] = useState(false)
  const isSelected = (l: SplitLabel) => value.some((v) => v.name === l.name)
  const toggle = (l: SplitLabel) => {
    if (isSelected(l)) onChange(value.filter((v) => v.name !== l.name))
    else onChange([...value, l])
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {value.map((l) => (
          <LabelChip key={l.name} label={l} onRemove={() => toggle(l)} />
        ))}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-travefy-blue/40 bg-travefy-blue-light text-travefy-blue text-xs font-semibold hover:bg-travefy-blue-light/80 transition-colors"
          >
            Labels
            <Plus className="w-3 h-3" />
          </button>
          {open && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
              <div className="absolute left-0 top-9 z-20 w-56 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 max-h-64 overflow-auto">
                {LABEL_PALETTE.map((l) => (
                  <button
                    key={l.name}
                    onClick={() => toggle(l)}
                    className="w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-travefy-gray-50 text-travefy-gray-700"
                  >
                    <LabelChip label={l} />
                    {isSelected(l) && <span className="text-travefy-blue text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
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
  const [labels, setLabels] = useState<SplitLabel[]>([])
  const [advisorSelectable, setAdvisorSelectable] = useState(true)
  const [effectiveDate, setEffectiveDate] = useState(todayISO())

  // A rate change vs. the saved split — only then does "effective date" matter.
  const rateChanged = !!split && parseInt(percentage.replace(/[^0-9]/g, ''), 10) !== split.percentage

  useEffect(() => {
    if (open) {
      setName(split?.name ?? '')
      setPercentage(split ? `${split.percentage}%` : '0%')
      setDescription(split?.description ?? '')
      setLabels(split?.labels ?? [])
      setAdvisorSelectable(split?.advisorSelectable ?? true)
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
      labels,
      advisorSelectable,
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
              The new rate applies to bookings reconciled on or after this date. Existing bookings keep the rate they
              were calculated with — changing a split is never retroactive.
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

        <div>
          <label className="block text-sm font-semibold text-travefy-navy mb-2">Labels</label>
          <LabelPicker value={labels} onChange={setLabels} />
        </div>

        <div className="border-t border-travefy-gray-100 pt-5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={advisorSelectable}
              onChange={(e) => setAdvisorSelectable(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-travefy-gray-300 text-travefy-blue focus:ring-2 focus:ring-travefy-blue/20"
            />
            <span className="flex-1">
              <span className="block text-sm font-semibold text-travefy-navy">Allow advisor to select this split</span>
              <span className="block text-xs text-travefy-gray-500 mt-0.5">
                When enabled, advisors who are allowed to override their default split can pick this one per booking.
              </span>
            </span>
          </label>
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
}: {
  open: boolean
  onClose: () => void
  member: TeamMember | null
  splits: CommissionSplit[]
  onSave: (next: TeamMember) => void
}) {
  const [role, setRole] = useState<TeamMember['role']>('Member')
  const [splitId, setSplitId] = useState<string>('')
  const [effectiveDate, setEffectiveDate] = useState<string>('')
  const [canOverrideSplit, setCanOverrideSplit] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')

  useEffect(() => {
    if (open && member) {
      setRole(member.role)
      setSplitId(member.commissionSplitId)
      setEffectiveDate(member.commissionSplitEffectiveDate)
      setCanOverrideSplit(member.canOverrideSplit)
      setAccountNumber(member.bankAccountNumber ?? '')
      setRoutingNumber(member.bankRoutingNumber ?? '')
    }
  }, [open, member])

  if (!member) return null

  const handleSave = () => {
    onSave({
      ...member,
      role,
      commissionSplitId: splitId,
      commissionSplitEffectiveDate: effectiveDate,
      canOverrideSplit,
      bankAccountNumber: accountNumber.trim() || undefined,
      bankRoutingNumber: routingNumber.trim() || undefined,
    })
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
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Commission Split</label>
            <select
              value={splitId}
              onChange={(e) => setSplitId(e.target.value)}
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            >
              {splits.map((s) => (
                <option key={s.id} value={s.id}>{formatSplit(s)}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Effective date</label>
            <input
              type="date"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-500 mt-1">Applies to bookings on or after this date. Existing bookings keep the split they were calculated with.</p>
          </div>
        </div>

        {member.splitHistory && member.splitHistory.length > 0 && (
          <div className="border-t border-travefy-gray-100 pt-5">
            <div className="mb-3 flex items-center gap-2">
              <History className="w-4 h-4 text-travefy-gray-500" />
              <h3 className="text-sm font-semibold text-travefy-navy">Commission split history</h3>
            </div>
            <ol className="space-y-3 border-l border-travefy-gray-200 pl-4">
              {[...member.splitHistory].reverse().map((h, i) => (
                <li key={`${h.effectiveDate}-${i}`} className="relative">
                  <span className={clsx('absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full ring-2 ring-white', i === 0 ? 'bg-travefy-blue' : 'bg-travefy-gray-300')} />
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-travefy-navy">
                      {h.splitName} <span className="font-normal text-travefy-gray-500">({h.percentage}%)</span>
                    </span>
                    <span className="whitespace-nowrap text-xs text-travefy-gray-500">{fmtSplitDate(h.effectiveDate)}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-travefy-gray-500">
                    {i === 0 ? `Current${h.note ? ` · ${h.note}` : ''}` : h.note}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-travefy-gray-400">Splits are never applied retroactively — each booking keeps the rate in effect on its date.</p>
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

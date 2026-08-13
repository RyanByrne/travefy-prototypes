import { clsx } from 'clsx'
import { Building2, Check, CircleDollarSign, Copy, Landmark, Mail, MapPin, Pencil, Phone, Shield, TrendingUp, User, X } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'
import { SplitCombobox } from './SplitCombobox'
import {
  currentGeneralSplit,
  fmtMoney,
  fmtSplitDate,
  formatSplit,
  generalSplitHistory,
  tierProgressPercent,
  type AssignedSplit,
  type CommissionSplit,
  type TeamMember,
} from './data'

interface Props {
  open: boolean
  onClose: () => void
  member: TeamMember | null
  splits: CommissionSplit[]
  onSave: (next: TeamMember) => void
  /** Apply a split change as its own action (persists, keeps modal open). */
  onApplySplit: (next: TeamMember, message?: string) => void
  /** Create a new commission split from a typed name + %; returns its new id. */
  onCreateSplit: (name: string, percentage: number) => string
}

const todayISO = () => new Date().toISOString().slice(0, 10)

type Tab = 'Overview' | 'Organization' | 'Access' | 'Commissions and Payouts'
const TABS: { id: Tab; icon: typeof User }[] = [
  { id: 'Overview', icon: User },
  { id: 'Organization', icon: Building2 },
  { id: 'Access', icon: Shield },
  { id: 'Commissions and Payouts', icon: CircleDollarSign },
]

const inputCls =
  'w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue'
const fieldLabel = 'block text-sm font-semibold text-travefy-navy mb-1.5'
const cardLabel = 'text-sm font-semibold text-travefy-gray-500'

const initials = (n: string) =>
  n.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

/** Read-only contact chip with a copy affordance (email / phone / address). */
function ContactChip({ icon: Icon, value }: { icon: typeof Mail; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-travefy-gray-100 px-3 py-1.5 text-sm text-travefy-gray-700">
      <Icon className="h-4 w-4 text-travefy-gray-500" />
      {value}
      <button
        onClick={() => navigator.clipboard?.writeText(value)}
        className="text-travefy-blue/60 hover:text-travefy-blue"
        aria-label={`Copy ${value}`}
      >
        <Copy className="h-3.5 w-3.5" />
      </button>
    </span>
  )
}

/**
 * Member drawer (Phase 1) — a right-side, tabbed drawer matching the
 * High-Fidelity design: profile header, Overview / Organization / Access /
 * Commissions tabs, and a Commission Splits card with a view ↔ edit pattern. The
 * commission card shows a single current split + history, derived from the
 * member's general assigned splits; changing it supersedes the current split and
 * logs the old one.
 */
export function MemberDrawer({ open, onClose, member, splits, onSave, onApplySplit, onCreateSplit }: Props) {
  const [tab, setTab] = useState<Tab>('Commissions and Payouts')
  const [role, setRole] = useState<TeamMember['role']>('Member')
  const [entityType, setEntityType] = useState<TeamMember['entityType']>('Agent')
  const [organization, setOrganization] = useState('')
  const [canOverrideSplit, setCanOverrideSplit] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')
  // Commission Splits card view/edit state
  const [editingSplit, setEditingSplit] = useState(false)
  const [draftSplitId, setDraftSplitId] = useState('')

  useEffect(() => {
    if (open && member) {
      setTab('Commissions and Payouts')
      setRole(member.role)
      setEntityType(member.entityType)
      setOrganization(member.organization ?? '')
      setCanOverrideSplit(member.canOverrideSplit)
      setAccountNumber(member.bankAccountNumber ?? '')
      setRoutingNumber(member.bankRoutingNumber ?? '')
      setEditingSplit(false)
    }
  }, [open, member])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open || !member) return null

  const isAgency = entityType === 'Agency'
  const current = currentGeneralSplit(member, splits)
  const currentTier = current && splits.find((s) => s.id === current.splitId)
  const history = generalSplitHistory(member, splits)
  const generalSplits = splits.filter((s) => !s.supplier)

  // Editable fields carried through both Save and the in-place split change.
  const baseEdits = () => ({
    role,
    entityType,
    organization: organization.trim() || undefined,
    canOverrideSplit,
    bankAccountNumber: accountNumber.trim() || undefined,
    bankRoutingNumber: routingNumber.trim() || undefined,
  })

  const startEdit = () => {
    setDraftSplitId(current?.splitId ?? generalSplits[0]?.id ?? '')
    setEditingSplit(true)
  }

  // Change the current split: supersede the active one (→ history) and assign the
  // new one effective today. Forward-only — past commissions are unaffected.
  const applySplitChange = () => {
    const tier = generalSplits.find((s) => s.id === draftSplitId)
    if (!tier || (current && draftSplitId === current.splitId)) {
      setEditingSplit(false)
      return
    }
    const next: AssignedSplit[] = (member.assignedSplits ?? []).map((a) =>
      a.id === current?.id ? { ...a, active: false } : a,
    )
    next.push({ id: `as-${Date.now()}`, splitId: draftSplitId, effectiveDate: todayISO(), active: true })
    onApplySplit({ ...member, ...baseEdits(), assignedSplits: next }, `${member.name} moved to ${formatSplit(tier)}`)
    setEditingSplit(false)
  }

  const handleSave = () => onSave({ ...member, ...baseEdits() })

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-travefy-navy/40 backdrop-blur-[1px]" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-3xl flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-travefy-gray-100 px-8 py-4">
          <h2 className="text-lg font-semibold text-travefy-navy">Member</h2>
          <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-700" aria-label="Close"><X className="h-6 w-6" /></button>
        </div>

        {/* Profile block */}
        <div className="px-8 py-6">
          <div className="flex items-center gap-5">
            {isAgency ? (
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-travefy-navy/10 text-travefy-navy ring-4 ring-travefy-gray-100">
                <Building2 className="h-9 w-9" />
              </span>
            ) : (
              <span className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-travefy-gray-200 text-2xl font-semibold text-travefy-gray-600 ring-4 ring-travefy-gray-100">
                {initials(member.name)}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-2xl font-bold text-travefy-navy">{member.name}</p>
              {organization && <p className="mt-0.5 text-base text-travefy-gray-500">{organization}</p>}
              <div className="mt-3 flex flex-wrap gap-2">
                <ContactChip icon={Mail} value={member.email} />
                {member.phone && <ContactChip icon={Phone} value={member.phone} />}
                {member.address && <ContactChip icon={MapPin} value={member.address} />}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-travefy-gray-200 px-8">
          {TABS.map(({ id, icon: Icon }) => {
            const active = tab === id
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={clsx(
                  '-mb-px flex items-center gap-2 border-b-2 py-3.5 text-[15px] font-semibold transition-colors',
                  active ? 'border-travefy-blue text-travefy-blue' : 'border-transparent text-travefy-gray-500 hover:text-travefy-gray-800',
                )}
              >
                <Icon className="h-[18px] w-[18px]" />
                {id}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {tab === 'Commissions and Payouts' && (
            <div className="rounded-xl border border-travefy-gray-200 bg-white">
              <div className="flex items-center justify-between border-b border-travefy-gray-100 px-6 py-4">
                <h3 className="text-base font-semibold text-travefy-navy">Commission Splits</h3>
                {editingSplit ? (
                  <button onClick={applySplitChange} className="inline-flex items-center gap-1.5 rounded-md bg-travefy-blue px-3.5 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark">
                    <Check className="h-4 w-4" /> Done
                  </button>
                ) : (
                  <button onClick={startEdit} className="inline-flex items-center gap-1.5 rounded-md border border-travefy-gray-200 px-3.5 py-2 text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                )}
              </div>

              <div className="p-6">
                {editingSplit ? (
                  <div>
                    <label className={fieldLabel}>Select Advisor Split</label>
                    <SplitCombobox options={generalSplits} value={draftSplitId} onChange={setDraftSplitId} onCreate={onCreateSplit} />
                    <p className="mt-1 text-xs text-travefy-gray-500">Search, or type a name and “Add” to create a new split.</p>

                    {history.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 gap-y-2 text-sm">
                        <span className={cardLabel}>History</span>
                        <span className={cardLabel}>Set on</span>
                        {history.map((h) => {
                          const t = splits.find((s) => s.id === h.splitId)
                          return (
                            <Fragment key={h.id}>
                              <span className="text-travefy-navy">{t?.name} {t ? `${t.percentage}%` : ''}</span>
                              <span className="text-travefy-navy">{fmtSplitDate(h.effectiveDate)}</span>
                            </Fragment>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-y-8">
                    <div>
                      <p className={cardLabel}>Current Split</p>
                      <p className="mt-1 text-base text-travefy-navy">{current ? formatSplit(currentTier) : 'No split assigned'}</p>
                    </div>
                    <div>
                      <p className={cardLabel}>Since</p>
                      <p className="mt-1 text-base text-travefy-navy">{current ? fmtSplitDate(current.effectiveDate) : '—'}</p>
                    </div>
                    {history[0] && (() => {
                      const t = splits.find((s) => s.id === history[0].splitId)
                      return (
                        <>
                          <div>
                            <p className={cardLabel}>History</p>
                            <p className="mt-1 text-base text-travefy-navy">{t?.name} {t ? `${t.percentage}%` : ''}</p>
                          </div>
                          <div>
                            <p className={cardLabel}>Date Set</p>
                            <p className="mt-1 text-base text-travefy-navy">{fmtSplitDate(history[0].effectiveDate)}</p>
                          </div>
                        </>
                      )
                    })()}
                  </div>
                )}

                <p className="mt-8 text-sm italic text-travefy-gray-500">
                  Commission split changes will apply to all commissions that have NOT yet been disbursed. Disbursed
                  commission splits are locked after payout.
                </p>
              </div>
            </div>
          )}

          {tab === 'Overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className={fieldLabel}>Email</p>
                  <p className="text-sm text-travefy-gray-700">{member.email}</p>
                </div>
                <div>
                  <p className={fieldLabel}>Status</p>
                  <p className="text-sm text-travefy-gray-700">{member.status}</p>
                </div>
                {member.phone && (
                  <div>
                    <p className={fieldLabel}>Phone</p>
                    <p className="text-sm text-travefy-gray-700">{member.phone}</p>
                  </div>
                )}
                {member.address && (
                  <div>
                    <p className={fieldLabel}>Address</p>
                    <p className="text-sm text-travefy-gray-700">{member.address}</p>
                  </div>
                )}
              </div>

              {member.tierProgression && (() => {
                const prog = member.tierProgression!
                const next = splits.find((s) => s.id === prog.nextSplitId)
                const pct = tierProgressPercent(prog)
                const done = pct >= 100
                return (
                  <div className="rounded-lg border border-travefy-blue/30 bg-travefy-blue-light/50 p-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-travefy-blue" />
                      <span className="text-sm font-semibold text-travefy-navy">Automatic tier upgrade</span>
                    </div>
                    <p className="mt-1 text-sm text-travefy-gray-700">
                      Moves to <span className="font-semibold text-travefy-navy">{next ? formatSplit(next) : 'the next tier'}</span> at{' '}
                      <span className="font-semibold text-travefy-navy">{fmtMoney(prog.targetSales)}</span> in sales.
                    </p>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
                      <div className={clsx('h-full rounded-full', done ? 'bg-travefy-success' : 'bg-travefy-blue')} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-1.5 text-xs text-travefy-gray-600">{fmtMoney(prog.currentSales)} of {fmtMoney(prog.targetSales)} ({pct}%)</div>
                  </div>
                )
              })()}

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-travefy-gray-500" />
                  <h3 className="text-sm font-semibold text-travefy-navy">Banking Info</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={fieldLabel}>Account Number</label>
                    <input type="text" inputMode="numeric" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 17))} placeholder="000123456789" className={clsx(inputCls, 'font-mono tracking-wide')} />
                  </div>
                  <div>
                    <label className={fieldLabel}>Routing Number</label>
                    <input type="text" inputMode="numeric" value={routingNumber} onChange={(e) => setRoutingNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 9))} placeholder="021000021" className={clsx(inputCls, 'font-mono tracking-wide')} />
                    <p className="mt-1 text-xs text-travefy-gray-500">9-digit ABA routing number</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'Organization' && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className={fieldLabel}>Type</label>
                <select value={entityType} onChange={(e) => setEntityType(e.target.value as TeamMember['entityType'])} className={inputCls}>
                  <option value="Agent">Agent</option>
                  <option value="Agency">Agency</option>
                </select>
                <p className="mt-1 text-xs text-travefy-gray-500">Agents and agencies work the same way.</p>
              </div>
              <div>
                <label className={fieldLabel}>Organization</label>
                <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Agency / brand name" className={inputCls} />
              </div>
            </div>
          )}

          {tab === 'Access' && (
            <div className="space-y-6">
              <div className="max-w-xs">
                <label className={fieldLabel}>Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value as TeamMember['role'])} className={inputCls}>
                  <option value="Member">Member</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" checked={canOverrideSplit} onChange={(e) => setCanOverrideSplit(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-travefy-gray-300 text-travefy-blue focus:ring-2 focus:ring-travefy-blue/20" />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-travefy-navy">Allow advisor to override commission split</span>
                  <span className="mt-0.5 block text-xs text-travefy-gray-500">When enabled, this advisor can pick a different commission split per booking.</span>
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-travefy-gray-200 bg-travefy-gray-50 px-8 py-4">
          <button onClick={onClose} className="text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <button onClick={handleSave} className="rounded-md bg-travefy-blue px-5 py-2 text-sm font-semibold text-white hover:bg-travefy-blue-dark">Save and close</button>
        </div>
      </div>
    </div>
  )
}

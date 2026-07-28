/**
 * Commission Splits prototype data. The CommissionSplit type, seed,
 * formatSplit helper and label palette live in shared/data/commissionSplits.ts
 * so the Bookings Agency prototype can show the same options on its
 * Edit Advisor Booking drawer. Team membership stays here since it's
 * only meaningful in the admin surface.
 */

export {
  formatSplit,
  initialSplits,
  type CommissionSplit,
} from '../../shared/data/commissionSplits'

/** Rule-based tier progression. An advisor automatically moves to `nextSplitId`
 *  once their sales reach `targetSales`; `currentSales` drives the progress bar.
 *  (Prototype: values are static, to demonstrate automatic split triggers.) */
export interface TierProgression {
  nextSplitId: string
  targetSales: number
  currentSales: number
}

/** One entry in an advisor's commission-split change log. A snapshot: it records
 *  the split name + rate as they were at the time, so the log stays accurate even
 *  if the split definition later changes. Splits are never applied retroactively —
 *  each booking keeps the rate in effect on its date, so this is purely an audit
 *  trail of when an advisor's split changed. */
export interface SplitChange {
  /** ISO YYYY-MM-DD this split took effect. */
  effectiveDate: string
  splitName: string
  percentage: number
  /** Optional context, e.g. "Joined team", "Tier upgrade", "Rate change". */
  note?: string
}

export interface TeamMember {
  id: string
  name: string
  email: string
  status: 'Accepted' | 'Pending' | 'Invited'
  role: 'Admin' | 'Member'
  /** References a CommissionSplit.id */
  commissionSplitId: string
  /** ISO YYYY-MM-DD the assigned tier takes effect — payouts use the tier
   *  effective as of the booking/payout date. */
  commissionSplitEffectiveDate: string
  /** When true, this advisor can override their default split per booking. */
  canOverrideSplit: boolean
  /** Optional automatic upgrade to a higher tier once a sales target is hit. */
  tierProgression?: TierProgression
  /** Bank account number for payouts (North American standard). */
  bankAccountNumber?: string
  /** 9-digit ABA routing number. */
  bankRoutingNumber?: string
  /** Append-only log of split changes (oldest first). The last entry is the
   *  current split; earlier entries are historical and never recalculated. */
  splitHistory?: SplitChange[]
}

// ── Tier-progression helpers ────────────────────────────────────────────────

export const tierProgressPercent = (p: TierProgression) =>
  Math.min(100, Math.round((p.currentSales / p.targetSales) * 100))

export const fmtMoney = (n: number) => `$${n.toLocaleString('en-US')}`

export const fmtMoneyShort = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`

const MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** ISO YYYY-MM-DD → "Jul 1, 2026". */
export const fmtSplitDate = (iso: string) => {
  const [y, m, d] = iso.split('-')
  return `${MONTHS[Number(m)]} ${Number(d)}, ${y}`
}

// ── Seed: team members ─────────────────────────────────────────────────────────

export const initialTeam: TeamMember[] = [
  { id: 't1', name: 'Liam Carter',   email: 'liam@travelco.com',   status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: false, bankAccountNumber: '000123456789', bankRoutingNumber: '021000021', splitHistory: [
    { effectiveDate: '2025-07-01', splitName: 'Default', percentage: 65, note: 'Joined team' },
    { effectiveDate: '2026-01-01', splitName: 'Tier 1', percentage: 70, note: 'Tier upgrade' },
  ] },
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true,  tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 47200 }, bankAccountNumber: '000987654321', bankRoutingNumber: '011401533', splitHistory: [
    { effectiveDate: '2025-09-15', splitName: 'Default', percentage: 65, note: 'Joined team' },
    { effectiveDate: '2026-01-01', splitName: 'Tier 1', percentage: 70, note: 'Tier upgrade' },
  ] },
  { id: 't3', name: 'Ethan Brooks',  email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-07-01', canOverrideSplit: false, tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 38500 }, bankAccountNumber: '000456789012', bankRoutingNumber: '121000248', splitHistory: [
    { effectiveDate: '2026-02-01', splitName: 'Default', percentage: 65, note: 'Joined team' },
    { effectiveDate: '2026-07-01', splitName: 'Tier 1', percentage: 70, note: 'Tier upgrade' },
  ] },
  { id: 't4', name: 'Mia Johnson',   email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  commissionSplitId: 's6', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true,  bankAccountNumber: '000345678901', bankRoutingNumber: '026009593', splitHistory: [
    { effectiveDate: '2024-03-01', splitName: 'Tier 3', percentage: 80, note: 'Joined team' },
    { effectiveDate: '2026-01-01', splitName: 'Veteran', percentage: 90, note: 'Promoted to Veteran' },
  ] },
]

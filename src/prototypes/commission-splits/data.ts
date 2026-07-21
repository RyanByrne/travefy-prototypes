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
  LABEL_PALETTE,
  type CommissionSplit,
  type LabelColor,
  type SplitLabel,
} from '../../shared/data/commissionSplits'

/** Rule-based tier progression. An advisor automatically moves to `nextSplitId`
 *  once their sales reach `targetSales`; `currentSales` drives the progress bar.
 *  (Prototype: values are static, to demonstrate automatic split triggers.) */
export interface TierProgression {
  nextSplitId: string
  targetSales: number
  currentSales: number
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
}

// ── Tier-progression helpers ────────────────────────────────────────────────

export const tierProgressPercent = (p: TierProgression) =>
  Math.min(100, Math.round((p.currentSales / p.targetSales) * 100))

export const fmtMoney = (n: number) => `$${n.toLocaleString('en-US')}`

export const fmtMoneyShort = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`

// ── Seed: team members ─────────────────────────────────────────────────────────

export const initialTeam: TeamMember[] = [
  { id: 't1', name: 'Liam Carter',   email: 'liam@travelco.com',   status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: false },
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true,  tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 47200 } },
  { id: 't3', name: 'Ethan Brooks',  email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-07-01', canOverrideSplit: false, tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 38500 } },
  { id: 't4', name: 'Mia Johnson',   email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  commissionSplitId: 's6', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true  },
]

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

/** A supplier-specific split override. An advisor can have several at once; for a
 *  booking, the override matching its supplier wins over the default split
 *  ("most specific wins"). Reuses a CommissionSplit tier. */
export interface SupplierSplit {
  id: string
  supplier: string
  /** References a CommissionSplit.id (reuses the same tiers as the default). */
  splitId: string
  /** ISO YYYY-MM-DD this override takes effect (forward-only, like the default). */
  effectiveDate: string
  /** 'manual' = set by an admin; 'reward' = granted by an earned policy. */
  source: 'manual' | 'reward'
}

/** An earned policy: once YTD sales reach `targetSales`, the advisor unlocks a
 *  high split (e.g. 100%) on ONE supplier of their choice. Redeemed by choosing a
 *  supplier, which creates a `SupplierSplit` with source 'reward'. */
export interface SupplierReward {
  targetSales: number
  currentSales: number
  /** The tier granted when redeemed (e.g. the 100% "Personal Travel" split). */
  rewardSplitId: string
  /** Supplier chosen once redeemed; undefined until an admin picks one. */
  chosenSupplier?: string
  /** ISO YYYY-MM-DD the reward split took effect. */
  effectiveDate?: string
}

export interface TeamMember {
  id: string
  name: string
  email: string
  status: 'Accepted' | 'Pending' | 'Invited'
  role: 'Admin' | 'Member'
  /** References a CommissionSplit.id — the default split (all suppliers). */
  commissionSplitId: string
  /** ISO YYYY-MM-DD the assigned tier takes effect — payouts use the tier
   *  effective as of the booking/payout date. */
  commissionSplitEffectiveDate: string
  /** When true, this advisor can override their default split per booking. */
  canOverrideSplit: boolean
  /** Optional automatic upgrade to a higher tier once a sales target is hit. */
  tierProgression?: TierProgression
  /** Supplier-specific split overrides — coexist with the default split. */
  supplierSplits?: SupplierSplit[]
  /** Optional earned "100% on a supplier of your choice" policy. */
  supplierReward?: SupplierReward
  /** Bank account number for payouts (North American standard). */
  bankAccountNumber?: string
  /** 9-digit ABA routing number. */
  bankRoutingNumber?: string
  /** Append-only log of split changes (oldest first). The last entry is the
   *  current split; earlier entries are historical and never recalculated. */
  splitHistory?: SplitChange[]
}

/** Suppliers available for supplier-specific splits (mirrors bookings-agency). */
export const SUPPLIERS = [
  'Royal Caribbean',
  'Norwegian Cruise Line',
  'Princess Cruises',
  'Marriott',
  'Hilton',
  'Hyatt',
  'Viator',
  'G Adventures',
]

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
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true,  tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 47200 }, bankAccountNumber: '000987654321', bankRoutingNumber: '011401533', supplierSplits: [
    { id: 'ss-t2-1', supplier: 'Royal Caribbean', splitId: 's4', effectiveDate: '2026-03-01', source: 'manual' },
  ], supplierReward: { targetSales: 75000, currentSales: 47200, rewardSplitId: 's7' }, splitHistory: [
    { effectiveDate: '2025-09-15', splitName: 'Default', percentage: 65, note: 'Joined team' },
    { effectiveDate: '2026-01-01', splitName: 'Tier 1', percentage: 70, note: 'Tier upgrade' },
  ] },
  { id: 't3', name: 'Ethan Brooks',  email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-07-01', canOverrideSplit: false, tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 38500 }, bankAccountNumber: '000456789012', bankRoutingNumber: '121000248', supplierSplits: [
    { id: 'ss-t3-1', supplier: 'Norwegian Cruise Line', splitId: 's3', effectiveDate: '2026-07-01', source: 'manual' },
  ], supplierReward: { targetSales: 35000, currentSales: 38500, rewardSplitId: 's7' }, splitHistory: [
    { effectiveDate: '2026-02-01', splitName: 'Default', percentage: 65, note: 'Joined team' },
    { effectiveDate: '2026-07-01', splitName: 'Tier 1', percentage: 70, note: 'Tier upgrade' },
  ] },
  { id: 't4', name: 'Mia Johnson',   email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  commissionSplitId: 's6', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true,  bankAccountNumber: '000345678901', bankRoutingNumber: '026009593', supplierSplits: [
    { id: 'ss-t4-1', supplier: 'Marriott', splitId: 's7', effectiveDate: '2026-01-15', source: 'reward' },
  ], supplierReward: { targetSales: 60000, currentSales: 82000, rewardSplitId: 's7', chosenSupplier: 'Marriott', effectiveDate: '2026-01-15' }, splitHistory: [
    { effectiveDate: '2024-03-01', splitName: 'Tier 3', percentage: 80, note: 'Joined team' },
    { effectiveDate: '2026-01-01', splitName: 'Veteran', percentage: 90, note: 'Promoted to Veteran' },
  ] },
]

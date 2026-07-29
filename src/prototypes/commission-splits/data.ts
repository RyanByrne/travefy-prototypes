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

/** A commission split assigned to an advisor. An advisor can have several at
 *  once, each with its own effective date and active/inactive state. For a
 *  booking, the active split matching its supplier wins over an active general
 *  (unscoped) split; inactive splits are ignored. Never retroactive — a booking
 *  keeps the rate in effect on its date. */
export interface AssignedSplit {
  id: string
  /** References a CommissionSplit.id. The split's own `supplier` scope decides
   *  which bookings it applies to. */
  splitId: string
  /** ISO YYYY-MM-DD this split takes effect (forward-only). */
  effectiveDate: string
  /** Inactive splits are kept for the record but ignored when resolving a rate. */
  active: boolean
}

export interface TeamMember {
  id: string
  name: string
  email: string
  status: 'Accepted' | 'Pending' | 'Invited'
  role: 'Admin' | 'Member'
  /** Commission splits assigned to this advisor (general + supplier-scoped). */
  assignedSplits: AssignedSplit[]
  /** When true, this advisor can override their split per booking. */
  canOverrideSplit: boolean
  /** Optional automatic upgrade to a higher tier once a sales target is hit. */
  tierProgression?: TierProgression
  /** Bank account number for payouts (North American standard). */
  bankAccountNumber?: string
  /** 9-digit ABA routing number. */
  bankRoutingNumber?: string
}

/** Suppliers available for scoping a split (mirrors bookings-agency). */
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
  { id: 't1', name: 'Liam Carter',   email: 'liam@travelco.com',   status: 'Accepted', role: 'Member', canOverrideSplit: false, bankAccountNumber: '000123456789', bankRoutingNumber: '021000021', assignedSplits: [
    { id: 'as-t1-1', splitId: 's2', effectiveDate: '2026-01-01', active: true },
  ] },
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', canOverrideSplit: true,  tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 47200 }, bankAccountNumber: '000987654321', bankRoutingNumber: '011401533', assignedSplits: [
    { id: 'as-t2-1', splitId: 's2', effectiveDate: '2026-01-01', active: true },
    { id: 'as-t2-2', splitId: 's8', effectiveDate: '2026-03-01', active: true },
  ] },
  { id: 't3', name: 'Ethan Brooks',  email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', canOverrideSplit: false, tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 38500 }, bankAccountNumber: '000456789012', bankRoutingNumber: '121000248', assignedSplits: [
    { id: 'as-t3-1', splitId: 's1', effectiveDate: '2026-02-01', active: false },
    { id: 'as-t3-2', splitId: 's2', effectiveDate: '2026-07-01', active: true },
  ] },
  { id: 't4', name: 'Mia Johnson',   email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  canOverrideSplit: true,  bankAccountNumber: '000345678901', bankRoutingNumber: '026009593', assignedSplits: [
    { id: 'as-t4-1', splitId: 's6', effectiveDate: '2026-01-01', active: true },
    { id: 'as-t4-2', splitId: 's9', effectiveDate: '2026-01-15', active: true },
  ] },
]

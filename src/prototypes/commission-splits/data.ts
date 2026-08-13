/**
 * Commission Splits prototype data. The CommissionSplit type, seed,
 * formatSplit helper and label palette live in shared/data/commissionSplits.ts
 * so the Bookings Agency prototype can show the same options on its
 * Edit Advisor Booking drawer. Team membership stays here since it's
 * only meaningful in the admin surface.
 */

import type { CommissionSplit } from '../../shared/data/commissionSplits'

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
  /** A team member is either an individual agent or an agency (consortia model).
   *  Both function identically — same splits, payouts and banking. */
  entityType: 'Agent' | 'Agency'
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
  /** Agency / brand this member trades under (profile subtitle). */
  organization?: string
  /** Contact phone (profile chip). */
  phone?: string
  /** Mailing address (profile chip). */
  address?: string
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

// ── Current split + history (Phase 1 view over assignedSplits) ────────────────
// The simple "single current split + history" view is derived from the general
// (all-suppliers) assigned splits. Supplier-scoped splits are a Phase-2 concept
// and are ignored here, so the data model stays the same across phases.

const isGeneralSplit = (a: AssignedSplit, splits: CommissionSplit[]) =>
  !splits.find((s) => s.id === a.splitId)?.supplier

/** The member's current general split: the active one with the latest effective date. */
export function currentGeneralSplit(m: TeamMember, splits: CommissionSplit[]): AssignedSplit | undefined {
  return (m.assignedSplits ?? [])
    .filter((a) => a.active && isGeneralSplit(a, splits))
    .sort((x, y) => y.effectiveDate.localeCompare(x.effectiveDate))[0]
}

/** Prior general splits (everything general except the current), newest first. */
export function generalSplitHistory(m: TeamMember, splits: CommissionSplit[]): AssignedSplit[] {
  const current = currentGeneralSplit(m, splits)
  return (m.assignedSplits ?? [])
    .filter((a) => isGeneralSplit(a, splits) && a.id !== current?.id)
    .sort((x, y) => y.effectiveDate.localeCompare(x.effectiveDate))
}

// ── Seed: team members ─────────────────────────────────────────────────────────

export const initialTeam: TeamMember[] = [
  { id: 't1', name: 'Liam Carter',   email: 'liam@travelco.com',   status: 'Accepted', role: 'Member', entityType: 'Agent', organization: 'Wanderlust Escapes', phone: '(555) 012-3456', address: '1234 Main St, Gotham City, NY 12345', canOverrideSplit: false, bankAccountNumber: '000123456789', bankRoutingNumber: '021000021', assignedSplits: [
    { id: 'as-t1-0', splitId: 's1', effectiveDate: '2025-07-01', active: false },
    { id: 'as-t1-1', splitId: 's2', effectiveDate: '2026-01-01', active: true },
  ] },
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', entityType: 'Agent', organization: 'Coastline Journeys', phone: '(555) 240-8811', address: '88 Harbor Rd, San Diego, CA 92101', canOverrideSplit: true,  tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 47200 }, bankAccountNumber: '000987654321', bankRoutingNumber: '011401533', assignedSplits: [
    { id: 'as-t2-0', splitId: 's1', effectiveDate: '2025-09-15', active: false },
    { id: 'as-t2-1', splitId: 's2', effectiveDate: '2026-01-01', active: true },
    { id: 'as-t2-2', splitId: 's8', effectiveDate: '2026-03-01', active: true },
  ] },
  { id: 't3', name: 'Ethan Brooks',  email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', entityType: 'Agent', organization: 'Summit & Shore Travel', phone: '(555) 771-2043', address: '5 Alpine Way, Denver, CO 80202', canOverrideSplit: false, tierProgression: { nextSplitId: 's3', targetSales: 50000, currentSales: 38500 }, bankAccountNumber: '000456789012', bankRoutingNumber: '121000248', assignedSplits: [
    { id: 'as-t3-1', splitId: 's1', effectiveDate: '2026-02-01', active: false },
    { id: 'as-t3-2', splitId: 's2', effectiveDate: '2026-07-01', active: true },
  ] },
  { id: 't4', name: 'Mia Johnson',   email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  entityType: 'Agent', organization: 'Journey Beyond Travel', phone: '(555) 903-5566', address: '210 Lakeview Dr, Chicago, IL 60601', canOverrideSplit: true,  bankAccountNumber: '000345678901', bankRoutingNumber: '026009593', assignedSplits: [
    { id: 'as-t4-0', splitId: 's4', effectiveDate: '2024-03-01', active: false },
    { id: 'as-t4-1', splitId: 's6', effectiveDate: '2026-01-01', active: true },
    { id: 'as-t4-2', splitId: 's9', effectiveDate: '2026-01-15', active: true },
  ] },
  // Agencies / consortia members — function identically to agents.
  { id: 't5', name: 'Coastline Travel Co.',   email: 'ops@coastlinetravel.com',   status: 'Accepted', role: 'Member', entityType: 'Agency', organization: 'Consortia partner', phone: '(555) 418-2200', address: '400 Marina Blvd, Miami, FL 33131', canOverrideSplit: true,  bankAccountNumber: '000552310098', bankRoutingNumber: '031201360', assignedSplits: [
    { id: 'as-t5-0', splitId: 's2', effectiveDate: '2025-06-01', active: false },
    { id: 'as-t5-1', splitId: 's3', effectiveDate: '2026-01-01', active: true },
    { id: 'as-t5-2', splitId: 's8', effectiveDate: '2026-04-01', active: true },
  ] },
  { id: 't6', name: 'Summit Journeys Agency', email: 'team@summitjourneys.com',    status: 'Accepted', role: 'Member', entityType: 'Agency', organization: 'Consortia partner', phone: '(555) 662-7788', address: '17 Ridgeline Ave, Boulder, CO 80301', canOverrideSplit: false, bankAccountNumber: '000778450021', bankRoutingNumber: '011000015', assignedSplits: [
    { id: 'as-t6-1', splitId: 's4', effectiveDate: '2026-02-15', active: true },
  ] },
]

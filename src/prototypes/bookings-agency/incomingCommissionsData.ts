// ── Incoming commissions (read-only) ─────────────────────────────────────────
// The downstream view: commissions flowing DOWN to this agent/agency from the
// host / agency above them. Separate from the reconciliation table
// (commissionsData.ts) on purpose — this is a receive-side ledger, not a
// host-side reconciliation lifecycle, so it lives under its own subtab.

/**
 * - paid-by-supplier: the host has received the commission and reconciled it to
 *   a booking that belongs to this agency/agent.
 * - in-payout: the host / agency above has added it to a payout — arriving soon.
 * - upcoming: paid to the agency above, but not yet added to a payout.
 */
export type IncomingStatus = 'paid-by-supplier' | 'in-payout' | 'upcoming'

/** One hop in the distribution chain — money handed from one party to the next
 *  on its way down to this recipient. */
export interface CommissionUpdate {
  from: string
  to: string
  amount: number
  /** Split applied at this hop (the origin hop may have none). */
  percent?: number
  date: string
}

/** The fields the read-only View Commission drawer renders. Shared by the
 *  incoming list and the advisor commissions list so both reuse the drawer. */
export interface ViewCommissionData {
  bookingRef: string
  /** 'Commission' (tied to a booking) or 'Adjustment'. */
  type: string
  supplier: string
  /** Total commission received for this booking (gross, before the split). */
  amount: number
  /** Advisor split tier name + the advisor's share %. */
  splitName: string
  splitPercent: number
  /** Distribution chain provenance, oldest first. */
  updates: CommissionUpdate[]
}

export interface IncomingCommission extends ViewCommissionData {
  id: string
  traveler: string
  travelDate: string
  status: IncomingStatus
  /** Expected payout date (or "—" when not yet scheduled). */
  expected: string
}

export const INCOMING_STATUS_LABEL: Record<IncomingStatus, string> = {
  'paid-by-supplier': 'Paid by supplier',
  'in-payout': 'In payout',
  upcoming: 'Upcoming',
}

/** "$240" / "$4,032.58" — thousands separators, decimals only when present. */
export const fmtIncomingMoney = (n: number) => {
  const abs = Math.abs(n)
  const body = Number.isInteger(abs)
    ? abs.toLocaleString('en-US')
    : abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${n < 0 ? '-' : ''}$${body}`
}

const round2 = (n: number) => Math.round(n * 100) / 100
/** Advisor's share of a received commission at a given split %. */
export const advisorShare = (amount: number, splitPercent: number) => round2(amount * (splitPercent / 100))
/** Agency's share (the remainder). */
export const agencyShare = (amount: number, splitPercent: number) => round2(amount - advisorShare(amount, splitPercent))

export const initialIncomingCommissions: IncomingCommission[] = [
  { id: 'ic1', bookingRef: 'RC-2294013', type: 'Commission', supplier: 'Royal Carribean',       traveler: 'Leo Hawthorne',  travelDate: 'Dec 1, 2025',  amount: 489.60, splitName: 'New Agent', splitPercent: 65, status: 'paid-by-supplier', expected: 'Sep 19, 2026', updates: [
    { from: 'Royal Carribean', to: 'Wonderland Inc', amount: 489.60, date: 'Sep 12, 2026' },
    { from: 'Wonderland Inc',  to: 'James May',      amount: 318.24, percent: 65, date: 'Sep 14, 2026' },
  ] },
  { id: 'ic2', bookingRef: 'NCL-882341', type: 'Commission', supplier: 'Norwegian Cruise Line', traveler: 'Mia Kensington', travelDate: 'Jan 14, 2026', amount: 992.00, splitName: 'Tier 1',    splitPercent: 70, status: 'in-payout',        expected: 'Sep 18, 2026', updates: [
    { from: 'Norwegian Cruise Line', to: 'Wonderland Inc', amount: 992.00, date: 'Sep 11, 2026' },
    { from: 'Wonderland Inc',        to: 'James May',      amount: 694.40, percent: 70, date: 'Sep 13, 2026' },
  ] },
  { id: 'ic3', bookingRef: 'HYT-55089',  type: 'Commission', supplier: 'Hyatt',                 traveler: 'Jasper Quinn',   travelDate: 'Feb 2, 2026',  amount: 109.73, splitName: 'New Agent', splitPercent: 65, status: 'paid-by-supplier', expected: 'Sep 19, 2026', updates: [
    { from: 'Hyatt',          to: 'Wonderland Inc', amount: 109.73, date: 'Sep 12, 2026' },
    { from: 'Wonderland Inc', to: 'James May',      amount: 71.32,  percent: 65, date: 'Sep 14, 2026' },
  ] },
  { id: 'ic4', bookingRef: 'MAR-77120',  type: 'Commission', supplier: 'Marriott',              traveler: 'Ava Sinclair',   travelDate: 'Mar 8, 2026',  amount: 240.00, splitName: 'New Agent', splitPercent: 65, status: 'in-payout',        expected: 'Sep 18, 2026', updates: [
    { from: 'ALG Vacations',  to: 'Outside Agents',  amount: 240.00, date: 'Sep 12, 2026' },
    { from: 'Outside Agents', to: 'Wonderland Inc',  amount: 216.00, percent: 90, date: 'Sep 13, 2026' },
    { from: 'Wonderland Inc', to: 'James May',       amount: 156.00, percent: 65, date: 'Sep 14, 2026' },
  ] },
  { id: 'ic5', bookingRef: 'VTR-5521',   type: 'Commission', supplier: 'Viator',                traveler: 'Noah Fletcher',  travelDate: 'Mar 22, 2026', amount: 24.50,  splitName: 'Default',   splitPercent: 60, status: 'upcoming',         expected: '—', updates: [
    { from: 'Viator', to: 'Wonderland Inc', amount: 24.50, date: 'Sep 12, 2026' },
  ] },
  { id: 'ic6', bookingRef: 'GAdv-882',   type: 'Commission', supplier: 'G Adventures',          traveler: 'Ivy Bennett',    travelDate: 'Apr 3, 2026',  amount: 186.00, splitName: 'Tier 1',    splitPercent: 70, status: 'upcoming',         expected: '—', updates: [
    { from: 'G Adventures', to: 'Wonderland Inc', amount: 186.00, date: 'Sep 12, 2026' },
  ] },
  { id: 'ic7', bookingRef: 'HLT-9912',   type: 'Commission', supplier: 'Hilton',                traveler: 'Ethan Brooks',   travelDate: 'Apr 19, 2026', amount: 212.63, splitName: 'New Agent', splitPercent: 65, status: 'paid-by-supplier', expected: 'Sep 19, 2026', updates: [
    { from: 'Hilton',         to: 'Wonderland Inc', amount: 212.63, date: 'Sep 12, 2026' },
    { from: 'Wonderland Inc', to: 'James May',      amount: 138.21, percent: 65, date: 'Sep 14, 2026' },
  ] },
  { id: 'ic8', bookingRef: 'PC-40881',   type: 'Commission', supplier: 'Princess Cruises',      traveler: 'Sophie Turner',  travelDate: 'May 5, 2026',  amount: 640.00, splitName: 'Veteran',   splitPercent: 90, status: 'upcoming',         expected: '—', updates: [
    { from: 'Princess Cruises', to: 'Wonderland Inc', amount: 640.00, date: 'Sep 12, 2026' },
  ] },
]

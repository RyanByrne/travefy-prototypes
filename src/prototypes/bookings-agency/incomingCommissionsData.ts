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

export interface IncomingCommission {
  id: string
  bookingRef: string
  supplier: string
  traveler: string
  travelDate: string
  /** This agent/agency's share of the commission (what they'll receive). */
  amount: number
  status: IncomingStatus
  /** Expected payout date (or "—" when not yet scheduled). */
  expected: string
}

export const INCOMING_STATUS_LABEL: Record<IncomingStatus, string> = {
  'paid-by-supplier': 'Paid by supplier',
  'in-payout': 'In payout',
  upcoming: 'Upcoming',
}

export const fmtIncomingMoney = (n: number) =>
  `${n < 0 ? '-' : ''}$${Number.isInteger(Math.abs(n)) ? Math.abs(n) : Math.abs(n).toFixed(2)}`

export const initialIncomingCommissions: IncomingCommission[] = [
  { id: 'ic1', bookingRef: 'RC-2294013', supplier: 'Royal Carribean',        traveler: 'Leo Hawthorne',   travelDate: 'Dec 1, 2025',  amount: 489.60, status: 'paid-by-supplier', expected: 'Sep 19, 2026' },
  { id: 'ic2', bookingRef: 'NCL-882341', supplier: 'Norwegian Cruise Line',  traveler: 'Mia Kensington',  travelDate: 'Jan 14, 2026', amount: 992.00, status: 'in-payout',        expected: 'Sep 18, 2026' },
  { id: 'ic3', bookingRef: 'HYT-55089',  supplier: 'Hyatt',                  traveler: 'Jasper Quinn',    travelDate: 'Feb 2, 2026',  amount: 109.73, status: 'paid-by-supplier', expected: 'Sep 19, 2026' },
  { id: 'ic4', bookingRef: 'MAR-77120',  supplier: 'Marriott',               traveler: 'Ava Sinclair',    travelDate: 'Mar 8, 2026',  amount: 240.00, status: 'in-payout',        expected: 'Sep 18, 2026' },
  { id: 'ic5', bookingRef: 'VTR-5521',   supplier: 'Viator',                 traveler: 'Noah Fletcher',   travelDate: 'Mar 22, 2026', amount: 24.50,  status: 'upcoming',         expected: '—' },
  { id: 'ic6', bookingRef: 'GAdv-882',   supplier: 'G Adventures',           traveler: 'Ivy Bennett',     travelDate: 'Apr 3, 2026',  amount: 186.00, status: 'upcoming',         expected: '—' },
  { id: 'ic7', bookingRef: 'HLT-9912',   supplier: 'Hilton',                 traveler: 'Ethan Brooks',    travelDate: 'Apr 19, 2026', amount: 212.63, status: 'paid-by-supplier', expected: 'Sep 19, 2026' },
  { id: 'ic8', bookingRef: 'PC-40881',   supplier: 'Princess Cruises',       traveler: 'Sophie Turner',   travelDate: 'May 5, 2026',  amount: 640.00, status: 'upcoming',         expected: '—' },
]

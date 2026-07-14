// ── Commissions tab data ────────────────────────────────────────────────────
// The Commissions tab is a top-level reconciliation surface: each row is a
// received commission line from a supplier statement, matched (or not) to an
// advisor booking in the system.

export type CommissionStatus = 'no-match' | 'match-found' | 'reconciled'

export interface CommissionLine {
  id: string
  /** Received booking reference on the statement. */
  reference: string
  statementRef: string
  supplier: string
  received: number | null
  /** Percent 0–100, null until matched. */
  split: number | null
  status: CommissionStatus
  /** Linked advisor booking ref, once matched. */
  matchingBookingRef: string | null
  advisor: string | null
  /** Advisor's expected commission. */
  expected: number | null
  /** Received amount doesn't match the advisor's expected amount. */
  receivedMismatch?: boolean
  /** Split doesn't match the advisor's expected split. */
  splitMismatch?: boolean
}

export const initialCommissions: CommissionLine[] = [
  {
    id: 'c1',
    reference: 'A2736554',
    statementRef: 'FFFK232',
    supplier: 'Supplier X',
    received: 240,
    split: null,
    status: 'no-match',
    matchingBookingRef: null,
    advisor: null,
    expected: null,
  },
  {
    id: 'c2',
    reference: 'A2736555',
    statementRef: 'FFFK232',
    supplier: 'Supplier Y',
    received: 200,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'A2736555',
    advisor: 'Michael Smith',
    expected: 200,
  },
  {
    id: 'c3',
    reference: 'A2736552',
    statementRef: 'FFFK232',
    supplier: 'Supplier Z',
    received: 180,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'A2736552',
    advisor: 'Michael Smith',
    expected: 200,
    receivedMismatch: true,
  },
  {
    id: 'c4',
    reference: 'A2736550',
    statementRef: 'FFFK232',
    supplier: 'Supplier A',
    received: 200,
    split: 70,
    status: 'match-found',
    matchingBookingRef: 'A2736550',
    advisor: 'Michael Smith',
    expected: 200,
    splitMismatch: true,
  },
  {
    id: 'c5',
    reference: 'A2736553',
    statementRef: 'FFFK232',
    supplier: 'Supplier B',
    received: 300,
    split: 80,
    status: 'reconciled',
    matchingBookingRef: 'A2736553',
    advisor: 'Michael Smith',
    expected: 300,
  },
  {
    id: 'c6',
    reference: 'BHS7997',
    statementRef: 'FFFK232',
    supplier: 'Safari Tour Company',
    received: 200,
    split: 75,
    status: 'reconciled',
    matchingBookingRef: 'BHS7997',
    advisor: 'Brandon Jones',
    expected: 200,
  },
  {
    id: 'c7',
    reference: 'RC-2294013',
    statementRef: 'RCL8891',
    supplier: 'Royal Carribean',
    received: 612,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'RC-2294013',
    advisor: 'Suzy Smith',
    expected: 612,
  },
  {
    id: 'c8',
    reference: 'VTR-5521',
    statementRef: 'VTR0092',
    supplier: 'Viator',
    received: 24.5,
    split: null,
    status: 'no-match',
    matchingBookingRef: null,
    advisor: null,
    expected: null,
  },
  {
    id: 'c9',
    reference: 'NCL-882341',
    statementRef: 'NCL4410',
    supplier: 'Norwegian Cruise Line',
    received: 1240,
    split: 80,
    status: 'reconciled',
    matchingBookingRef: 'NCL-882341',
    advisor: 'Suzy Smith',
    expected: 1240,
  },
  {
    id: 'c10',
    reference: 'HYT-55089',
    statementRef: 'HYT7781',
    supplier: 'Hyatt',
    received: 140,
    split: 70,
    status: 'match-found',
    matchingBookingRef: 'HYT-55089',
    advisor: 'Sam Rivera',
    expected: 156.75,
    receivedMismatch: true,
  },
  {
    id: 'c11',
    reference: 'GAdv-882',
    statementRef: 'GAD1120',
    supplier: 'G Adventures',
    received: 248,
    split: 75,
    status: 'reconciled',
    matchingBookingRef: 'GAdv-882',
    advisor: 'Kim Anderson',
    expected: 248,
  },
]

/** Stat cards for the Commissions tab (per the Figma). */
export const commissionTotals = {
  total: '$11.0k',
  expected: '$375.20',
  overdue: '$41.86',
  paid: '$1.6k',
}

// ── Search-for-booking cards ────────────────────────────────────────────────
// Candidate advisor bookings shown in the redesigned card-based search flyout,
// used when matching an unclaimed / unmatched commission line to a booking.

export type SearchCardStatus = 'Expected' | 'Reconciled' | 'Overdue'

export interface SearchBookingCard {
  id: string
  bookingRef: string
  agency: string
  traveler: string
  advisor: string
  travelDate: string
  total: number
  status: SearchCardStatus
}

export const searchBookingCards: SearchBookingCard[] = [
  {
    id: 's1',
    bookingRef: 'XJH29KQ',
    agency: 'Wanderlust Escapes',
    traveler: 'Leo Hawthorne',
    advisor: 'Suzy Smith',
    travelDate: 'Dec 1, 2025',
    total: 12235,
    status: 'Expected',
  },
  {
    id: 's2',
    bookingRef: 'ZPL56YT',
    agency: 'Adventure Awaits Tours',
    traveler: 'Mia Kensington',
    advisor: 'Suzy Smith',
    travelDate: 'Dec 1, 2025',
    total: 12235,
    status: 'Expected',
  },
  {
    id: 's3',
    bookingRef: 'QWE78MN',
    agency: 'Explore More Travels',
    traveler: 'Jasper Quinn',
    advisor: 'Suzy Smith',
    travelDate: 'Dec 1, 2025',
    total: 12235,
    status: 'Expected',
  },
  {
    id: 's4',
    bookingRef: 'TRF34BC',
    agency: 'Journey Beyond Travel Co.',
    traveler: 'Ava Sinclair',
    advisor: 'Suzy Smith',
    travelDate: 'Dec 1, 2025',
    total: 12235,
    status: 'Expected',
  },
  {
    id: 's5',
    bookingRef: 'MRK-88213',
    agency: 'Coastline Journeys',
    traveler: 'Noah Fletcher',
    advisor: 'Brandon Jones',
    travelDate: 'Jan 14, 2026',
    total: 8420,
    status: 'Overdue',
  },
  {
    id: 's6',
    bookingRef: 'HLD-77810',
    agency: 'Summit & Shore Travel',
    traveler: 'Ivy Bennett',
    advisor: 'Suzy Smith',
    travelDate: 'Feb 2, 2026',
    total: 9900,
    status: 'Reconciled',
  },
]

export type UnclaimedStatus = 'unclaimed' | 'match-found'

/** The system booking a Match-Found unclaimed line is suggested against. */
export interface SuggestedMatch {
  bookingRef: string
  advisor: string
  expected: number
  split: number
}

// V2 Unclaimed mirrors the commissions table: an unclaimed commission line that
// can be matched to a booking and reconciled.
export interface UnclaimedItem {
  id: string
  reference: string
  statementRef: string
  supplier: string
  received: number | null
  timeUnclaimed: string
  split: number | null
  status: UnclaimedStatus
  matchingBookingRef: string | null
  advisor: string | null
  expected: number | null
  receivedMismatch?: boolean
  splitMismatch?: boolean
  suggestedMatch?: SuggestedMatch
}

export const initialUnclaimedItems: UnclaimedItem[] = [
  {
    id: 'u1',
    reference: 'A2736554',
    statementRef: 'FFFK232',
    supplier: 'Supplier X',
    received: 240,
    timeUnclaimed: '4 Days',
    split: null,
    status: 'unclaimed',
    matchingBookingRef: null,
    advisor: null,
    expected: null,
  },
  {
    id: 'u2',
    reference: 'A2736555',
    statementRef: 'FFFK232',
    supplier: 'Supplier Y',
    received: 200,
    timeUnclaimed: '4 Days',
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'A2736555',
    advisor: 'Michael Smith',
    expected: 200,
    suggestedMatch: { bookingRef: 'A2736555', advisor: 'Michael Smith', expected: 200, split: 80 },
  },
  {
    id: 'u3',
    reference: 'A2736552',
    statementRef: 'FFFK232',
    supplier: 'Supplier Z',
    received: 200,
    timeUnclaimed: '4 Days',
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'A2736552',
    advisor: 'Michael Smith',
    expected: 200,
    splitMismatch: true,
    suggestedMatch: { bookingRef: 'A2736552', advisor: 'Michael Smith', expected: 200, split: 80 },
  },
  {
    id: 'u4',
    reference: 'A2736552',
    statementRef: 'FFFK232',
    supplier: 'Supplier A',
    received: 200,
    timeUnclaimed: '4 Days',
    split: 80,
    status: 'unclaimed',
    matchingBookingRef: null,
    advisor: null,
    expected: null,
    receivedMismatch: true,
  },
  {
    id: 'u5',
    reference: 'A2736553',
    statementRef: 'FFFK232',
    supplier: 'Supplier B',
    received: 300,
    timeUnclaimed: '4 Days',
    split: 80,
    status: 'unclaimed',
    matchingBookingRef: null,
    advisor: null,
    expected: null,
  },
]

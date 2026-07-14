export type UnclaimedMatch = 'no-match' | 'match-found'

/** The system booking a Match-Found unclaimed line is suggested against. */
export interface SuggestedMatch {
  bookingRef: string
  advisor: string
  expected: number
  split: number
}

export interface UnclaimedItem {
  id: string
  bookingRef: string
  statementRef: string
  supplier: string
  traveler: string | null
  timeUnclaimed: string
  received: number | null
  match: UnclaimedMatch
  /** Present when match === 'match-found' — drives the Match Unclaimed Booking modal. */
  suggestedMatch?: SuggestedMatch
  /** Optional link to a statement row (so the Unclaimed tab badge can react to drawer state) */
  statementRowId?: string
}

export const initialUnclaimedItems: UnclaimedItem[] = [
  {
    id: 'u1',
    bookingRef: 'A2736554',
    statementRef: 'FFFK232',
    supplier: 'Safari Hotel Inc.',
    traveler: null,
    timeUnclaimed: '10 days',
    received: 240,
    match: 'no-match',
    statementRowId: 'r1',
  },
  {
    id: 'u2',
    bookingRef: 'R34D-4T490',
    statementRef: 'FFFK232',
    supplier: 'Desert Quest',
    traveler: 'Michael Smith',
    timeUnclaimed: '12 days',
    received: 1756,
    match: 'match-found',
    suggestedMatch: {
      bookingRef: 'R34D-4T490',
      advisor: 'Michael Smith',
      expected: 1756,
      split: 80,
    },
  },
  {
    id: 'u3',
    bookingRef: 'R34D-4T492',
    statementRef: 'FFFK232',
    supplier: 'Urban Escape',
    traveler: null,
    timeUnclaimed: '33 days',
    received: 4213,
    match: 'match-found',
    suggestedMatch: {
      bookingRef: 'R34D-4T492',
      advisor: 'Suzy Smith',
      expected: 4213,
      split: 75,
    },
  },
  {
    id: 'u4',
    bookingRef: 'R34D-4T493',
    statementRef: 'FFFK232',
    supplier: 'Desert Quest',
    traveler: null,
    timeUnclaimed: '45 days',
    received: 2019,
    match: 'no-match',
  },
  {
    id: 'u5',
    bookingRef: 'R34D-4T494',
    statementRef: 'FFFK232',
    supplier: 'Heritage Trails',
    traveler: null,
    timeUnclaimed: '1 day',
    received: 5634,
    match: 'no-match',
  },
]

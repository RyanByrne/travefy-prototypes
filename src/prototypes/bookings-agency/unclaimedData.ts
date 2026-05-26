export type UnclaimedMatch = 'no-match' | 'match-found'

export interface UnclaimedItem {
  id: string
  bookingRef: string
  supplier: string
  traveler: string | null
  timeUnclaimed: string
  received: number | null
  match: UnclaimedMatch
  /** Optional link to a statement row (so the Unclaimed tab badge can react to drawer state) */
  statementRowId?: string
}

export const initialUnclaimedItems: UnclaimedItem[] = [
  {
    id: 'u1',
    bookingRef: 'A2736554',
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
    supplier: 'Desert Quest',
    traveler: 'Michael Smith',
    timeUnclaimed: '12 days',
    received: 1756,
    match: 'no-match',
  },
  {
    id: 'u3',
    bookingRef: 'R34D-4T492',
    supplier: 'Urban Escape',
    traveler: null,
    timeUnclaimed: '33 days',
    received: 4213,
    match: 'no-match',
  },
  {
    id: 'u4',
    bookingRef: 'R34D-4T493',
    supplier: 'Desert Quest',
    traveler: null,
    timeUnclaimed: '45 days',
    received: 2019,
    match: 'no-match',
  },
  {
    id: 'u5',
    bookingRef: 'R34D-4T494',
    supplier: 'Heritage Trails',
    traveler: null,
    timeUnclaimed: '1 day',
    received: 5634,
    match: 'no-match',
  },
]

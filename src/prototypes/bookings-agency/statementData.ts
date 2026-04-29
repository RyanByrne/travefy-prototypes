export type MatchStatus = 'unmatched' | 'unclaimed' | 'matched' | 'in-dispute' | 'reconciled'

export interface StatementRow {
  id: string
  /** Statement-side booking ref + amount (always present) */
  receivedRef: string
  amount: number
  split: number | null
  /** Advisor-side booking match (null = unmatched, needs Match action) */
  matched: {
    bookingRef: string
    advisor: string
    expected: number
  } | null
  status: MatchStatus
}

export interface PaymentStatement {
  supplier: string
  date: string
  reference: string
  totalAmount: number
  matchedAmount: number
  bookingsMatched: number
  bookingsTotal: number
  rows: StatementRow[]
}

export const samplePaymentStatement: PaymentStatement = {
  supplier: 'Safari Hotel Inc.',
  date: 'Oct 9, 2025',
  reference: 'A2736552',
  totalAmount: 940,
  matchedAmount: 504,
  bookingsMatched: 3,
  bookingsTotal: 6,
  rows: [
    {
      id: 'r1',
      receivedRef: 'A2736554',
      amount: 240,
      split: null,
      matched: null,
      status: 'unmatched',
    },
    {
      id: 'r2',
      receivedRef: 'A2736555',
      amount: 200,
      split: null,
      matched: null,
      status: 'unclaimed',
    },
    {
      id: 'r3',
      receivedRef: 'A2736552',
      amount: 200,
      split: 80,
      matched: { bookingRef: 'A2736551', advisor: 'Suzy Smith', expected: 200 },
      status: 'matched',
    },
    {
      id: 'r4',
      receivedRef: 'A2736553',
      amount: 300,
      split: 75,
      matched: { bookingRef: 'A2736553', advisor: 'Brandon Jones', expected: 304 },
      status: 'in-dispute',
    },
    {
      id: 'r5',
      receivedRef: 'A2736534',
      amount: 300,
      split: 75,
      matched: { bookingRef: 'A2736553', advisor: 'Brandon Jones', expected: 304 },
      status: 'reconciled',
    },
    {
      id: 'r6',
      receivedRef: 'A2736523',
      amount: 150,
      split: null,
      matched: null,
      status: 'unmatched',
    },
  ],
}

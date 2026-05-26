export type MatchStatus = 'unmatched' | 'unclaimed' | 'matched' | 'reconciled'

export interface MatchedAdvisorBooking {
  bookingRef: string
  advisor: string
  expected: number
  split: number
}

export interface StatementRow {
  id: string
  receivedRef: string
  amount: number
  matched: MatchedAdvisorBooking | null
  status: MatchStatus
}

export interface PaymentStatement {
  supplier: string
  date: string
  reference: string
  totalAmount: number
  rows: StatementRow[]
}

export const samplePaymentStatement: PaymentStatement = {
  supplier: 'Safari Hotel Inc.',
  date: 'Oct 9, 2025',
  reference: 'A2736552',
  totalAmount: 940,
  rows: [
    {
      id: 'r1',
      receivedRef: 'A2736554',
      amount: 240,
      matched: null,
      status: 'unmatched',
    },
    {
      id: 'r2',
      receivedRef: 'A2736555',
      amount: 200,
      matched: { bookingRef: 'A2736555', advisor: 'Suzy Smith', expected: 200, split: 80 },
      status: 'reconciled',
    },
    {
      id: 'r3',
      receivedRef: 'A2736552',
      amount: 200,
      matched: { bookingRef: 'A2736552', advisor: 'Suzy Smith', expected: 200, split: 80 },
      status: 'reconciled',
    },
    {
      id: 'r4',
      receivedRef: 'A2736553',
      amount: 300,
      matched: { bookingRef: 'A2736553', advisor: 'Brandon Jones', expected: 304, split: 75 },
      status: 'reconciled',
    },
  ],
}

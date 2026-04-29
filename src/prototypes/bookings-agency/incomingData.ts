export interface IncomingPayment {
  id: string
  date: string
  supplier: string
  reference: string
  bookings: number
  total: number
  reconciledCount: number
}

export const initialIncomingPayments: IncomingPayment[] = [
  {
    id: 'p1',
    date: '10 Aug 2025',
    supplier: 'Viator',
    reference: '7A9B3C',
    bookings: 5,
    total: 1250,
    reconciledCount: 5,
  },
  {
    id: 'p2',
    date: '10 Jul 2025',
    supplier: 'Royal Carribean',
    reference: '8F5G6H',
    bookings: 5,
    total: 1800,
    reconciledCount: 4,
  },
  {
    id: 'p3',
    date: '10 Jun 2025',
    supplier: 'Safari Hotel Inc.',
    reference: '4D2E1F',
    bookings: 4,
    total: 980,
    reconciledCount: 4,
  },
]

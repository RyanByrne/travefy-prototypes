// ── Payouts tab data ────────────────────────────────────────────────────────
// A payout groups reconciled bookings by advisor (agent). The advisor is paid,
// then their bookings are marked disbursed. Once disbursed, a booking can't be
// added to another payout unless the disbursed status is removed.

export interface PayoutBooking {
  id: string
  bookingRef: string
  supplier: string
  travelDate: string
  expected: number
  received: number
  /** The advisor's share of this booking. Agency share = received - agentAmount. */
  agentAmount: number
  status: 'reconciled'
  /** Whether this booking is included in the payout. */
  added: boolean
}

export interface PayoutAgent {
  id: string
  name: string
  bookings: PayoutBooking[]
  /** Advisor has been paid + their bookings marked disbursed. */
  disbursed: boolean
}

export interface Payout {
  id: string
  name: string
  archived?: boolean
  agents: PayoutAgent[]
}

// ── Derived totals ───────────────────────────────────────────────────────────

const sum = (ns: number[]) => ns.reduce((a, b) => a + b, 0)

export const addedBookings = (a: PayoutAgent) => a.bookings.filter((b) => b.added)

export function agentTotals(a: PayoutAgent) {
  const bs = addedBookings(a)
  const total = sum(bs.map((b) => b.received))
  const agentTotal = sum(bs.map((b) => b.agentAmount))
  return { count: bs.length, total, agentTotal, agencyTotal: total - agentTotal }
}

export function payoutTotals(p: Payout) {
  const per = p.agents.map((a) => ({ a, t: agentTotals(a) }))
  const bookings = sum(per.map((x) => x.t.count))
  const total = sum(per.map((x) => x.t.total))
  /** "Total Advisor Payout" — the sum owed to advisors. */
  const advisor = sum(per.map((x) => x.t.agentTotal))
  const disbursedBookings = sum(per.map((x) => (x.a.disbursed ? x.t.count : 0)))
  return { bookings, total, advisor, disbursedBookings }
}

export const fmtUsd = (n: number) => `$${n.toLocaleString('en-US')}`
export const fmtUsdCents = (n: number) =>
  `US$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

// ── Seeds ────────────────────────────────────────────────────────────────────

const booking = (
  id: string,
  bookingRef: string,
  supplier: string,
  travelDate: string,
  expected: number,
  received: number,
  agentAmount: number,
  added: boolean,
): PayoutBooking => ({ id, bookingRef, supplier, travelDate, expected, received, agentAmount, status: 'reconciled', added })

export const initialPayouts: Payout[] = [
  {
    id: 'po-aug',
    name: 'August Payout',
    agents: [
      {
        id: 'a-aug-1',
        name: 'Suzy Smith',
        disbursed: true,
        bookings: [
          booking('b1', 'NCL-882341', 'Norwegian Cruise Line', 'Jan 18, 2027', 1240, 1240, 992, true),
          booking('b2', 'RC-2294013', 'Royal Carribean', 'Nov 18, 2026', 612, 612, 490, true),
          booking('b3', 'PRC-2210', 'Princess Cruises', 'Sep 21, 2026', 875, 875, 700, true),
        ],
      },
      {
        id: 'a-aug-2',
        name: 'Brandon Jones',
        disbursed: true,
        bookings: [
          booking('b4', 'BN34135', 'Safari Hotel Inc.', 'Nov 9, 2026', 500, 500, 350, true),
          booking('b5', 'IHG-44820', 'IHG Hotels', 'Jul 15, 2026', 88.4, 88.4, 62, true),
        ],
      },
    ],
  },
  {
    id: 'po-jul',
    name: 'July Payout',
    agents: [
      {
        id: 'a-jul-1',
        name: 'Sam Rivera',
        disbursed: true,
        bookings: [
          booking('b6', 'HYT-55089', 'Hyatt', 'Jul 3, 2026', 156.75, 156.75, 110, true),
          booking('b7', 'HLT-9912', 'Hilton', 'May 2, 2026', 312.5, 312.5, 220, true),
        ],
      },
      {
        id: 'a-jul-2',
        name: 'Kim Anderson',
        disbursed: true,
        bookings: [
          booking('b8', 'GAdv-882', 'G Adventures', 'Oct 5, 2026', 248, 248, 186, true),
          booking('b9', '2204117', 'Avis Rent A Car', 'May 24, 2026', 120, 120, 84, true),
        ],
      },
    ],
  },
]

/** Template used by "New Payout" — advisors with reconciled bookings available
 *  to add. Mirrors the Figma "September Payout": some added, none disbursed. */
export function newPayoutDraft(id: string): Payout {
  return {
    id,
    name: 'New Payout',
    agents: [
      {
        id: `${id}-a1`,
        name: 'Alison Doe',
        disbursed: false,
        bookings: [
          booking(`${id}-b1`, 'R34D-4T488', 'Beach Bliss', 'Mar 15, 2025', 275, 275, 200, true),
          booking(`${id}-b2`, 'R34D-4T490', 'Beach Bliss', 'Apr 10, 2025', 75, 75, 60, true),
          booking(`${id}-b3`, 'R34D-4T492', 'Beach Bliss', 'Jun 5, 2025', 250, 249, 210, false),
          booking(`${id}-b4`, 'R34D-4T493', 'Beach Bliss', 'Jul 20, 2025', 90, 90, 60, false),
          booking(`${id}-b5`, 'R34D-4T494', 'Beach Bliss', 'Aug 30, 2025', 300, 300, 275, false),
        ],
      },
      {
        id: `${id}-a2`,
        name: 'Michael Smith',
        disbursed: false,
        bookings: [
          booking(`${id}-b6`, 'A2736555', 'Supplier Y', 'Dec 1, 2026', 200, 200, 160, true),
          booking(`${id}-b7`, 'A2736552', 'Supplier Z', 'Jan 12, 2027', 200, 180, 150, false),
        ],
      },
      {
        id: `${id}-a3`,
        name: 'Jessica Brown',
        disbursed: false,
        bookings: [
          booking(`${id}-b8`, 'OCN-77231', 'Oceania Cruises', 'Oct 22, 2026', 1480, 1480, 1180, true),
          booking(`${id}-b9`, 'HLD-77810', 'Holland America', 'Jan 30, 2027', 990, 990, 792, false),
        ],
      },
    ],
  }
}

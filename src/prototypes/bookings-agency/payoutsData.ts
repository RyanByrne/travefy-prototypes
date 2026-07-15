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

/** A per-advisor payout adjustment — a bonus (adds) or deduction (subtracts). */
export type PayoutAdjustmentType = 'bonus' | 'deduction'

export interface PayoutAdjustment {
  id: string
  type: PayoutAdjustmentType
  reason: string
  /** Positive magnitude; sign is derived from `type`. */
  amount: number
  date: string
}

export const PAYOUT_ADJUSTMENT_TYPES: { value: PayoutAdjustmentType; label: string }[] = [
  { value: 'bonus', label: 'Bonus' },
  { value: 'deduction', label: 'Deduction' },
]

export const adjustmentSigned = (a: PayoutAdjustment) =>
  a.type === 'deduction' ? -Math.abs(a.amount) : Math.abs(a.amount)

export const fmtSignedUsd = (n: number) => `${n < 0 ? '-' : '+'}$${Math.abs(n).toLocaleString('en-US')}`

export interface PayoutAgent {
  id: string
  name: string
  bookings: PayoutBooking[]
  /** Deductions / bonuses applied to this advisor's payout. */
  adjustments?: PayoutAdjustment[]
  /** Advisor has been paid + their bookings marked disbursed. */
  disbursed: boolean
}

export interface Payout {
  id: string
  name: string
  /** Check/paid date, ISO YYYY-MM-DD — drives the "Checks Paid to Agents" export. */
  date: string
  archived?: boolean
  agents: PayoutAgent[]
}

// ── Derived totals ───────────────────────────────────────────────────────────

const sum = (ns: number[]) => ns.reduce((a, b) => a + b, 0)

export const addedBookings = (a: PayoutAgent) => a.bookings.filter((b) => b.added)

export function agentTotals(a: PayoutAgent) {
  const bs = addedBookings(a)
  const total = sum(bs.map((b) => b.received))
  const bookingsAgent = sum(bs.map((b) => b.agentAmount))
  const adjustments = sum((a.adjustments ?? []).map(adjustmentSigned))
  // The advisor payout includes bonuses / deductions; the agency cut is unaffected.
  return {
    count: bs.length,
    total,
    agentTotal: bookingsAgent + adjustments,
    agencyTotal: total - bookingsAgent,
    adjustments,
  }
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

// ── "Checks Paid to Agents" export ───────────────────────────────────────────
// A check = a payment to an advisor within a payout. Commission Rcvd is the
// advisor's booking commission, Adjustments is their net bonus/deduction, and
// Check Amount = Commission Rcvd + Adjustments (the amount actually paid).

export interface AgentCheck {
  payoutId: string
  payoutName: string
  /** ISO check date. */
  date: string
  checkNumber: string
  recipient: string
  commissionRcvd: number
  adjustments: number
  checkAmount: number
}

/** ISO YYYY-MM-DD → M/D/YYYY (the format TESS-style reports use). */
export function fmtCheckDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${Number(m)}/${Number(d)}/${y}`
}

export const fmtAmount = (n: number) =>
  n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

/** Earliest / latest payout dates (for the export's default range). */
export function payoutDateRange(payouts: Payout[]): { from: string; to: string } {
  const dates = payouts.filter((p) => !p.archived).map((p) => p.date).sort()
  return { from: dates[0] ?? '2026-01-01', to: dates[dates.length - 1] ?? '2026-12-31' }
}

/** All advisor checks across payouts whose date falls within [from, to], one row
 *  per advisor per payout, sorted by recipient then date. */
export function buildAgentChecks(payouts: Payout[], from: string, to: string): AgentCheck[] {
  const checks: AgentCheck[] = []
  payouts
    .filter((p) => !p.archived && p.date >= from && p.date <= to)
    .forEach((p) => {
      const compact = p.date.replace(/-/g, '')
      p.agents.forEach((a, i) => {
        const t = agentTotals(a)
        if (t.count === 0 && t.adjustments === 0) return
        checks.push({
          payoutId: p.id,
          payoutName: p.name,
          date: p.date,
          checkNumber: `${compact}-${i + 1}`,
          recipient: a.name,
          commissionRcvd: t.agentTotal - t.adjustments,
          adjustments: t.adjustments,
          checkAmount: t.agentTotal,
        })
      })
    })
  return checks.sort((x, y) => x.recipient.localeCompare(y.recipient) || x.date.localeCompare(y.date))
}

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
    date: '2026-08-31',
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
    date: '2026-07-31',
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
    date: '2026-09-15',
    agents: [
      {
        id: `${id}-a1`,
        name: 'Alison Doe',
        disbursed: false,
        adjustments: [
          { id: `${id}-adj1`, type: 'bonus', reason: 'Top performer bonus', amount: 100, date: '02/28/2026' },
        ],
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

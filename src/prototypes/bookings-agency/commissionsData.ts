// ── Commissions tab data ────────────────────────────────────────────────────
// Each row is a received commission line from a supplier statement, matched (or
// not) to an advisor booking. Multiple commissions can link to the same booking.
// Adjustments live NESTED on a commission (edited in the Edit Commission drawer),
// not as separate line types.

export type CommissionStatus = 'no-match' | 'match-found' | 'reconciled' | 'disbursed'

/** Commission Type (top of the Edit Commission drawer).
 *  - Commission: tied to an advisor booking (has a Booking Reference).
 *  - Adjustment: a commission NOT tied to a booking — has an Advisor instead.
 *    Otherwise it behaves like a commission (received, split, reconciliation). */
export const COMMISSION_TYPES = ['Commission', 'Adjustment'] as const
export type CommissionType = (typeof COMMISSION_TYPES)[number]

/** An adjustment-type commission isn't tied to a booking (advisor, not booking). */
export const isAdjustmentType = (t: CommissionType) => t === 'Adjustment'

/** A nested adjustment on a commission — a dollar amount or a percentage of the
 *  received amount. Value is signed (e.g. -20 for -$20, -3 for -3%). */
export type AdjustmentKind = 'amount' | 'percent'

export interface CommissionAdjustment {
  id: string
  reason: string
  kind: AdjustmentKind
  value: number
  /** Advisor's share of this adjustment, 0–100. The remainder falls on the
   *  agency. e.g. 100 = advisor-only fee, 0 = agency-only, 50 = split evenly.
   *  When omitted, defaults to 100 for auto fees, else the commission split. */
  split?: number
  /** True when applied automatically by a supplier rule (read-only on the commission). */
  auto?: boolean
  /** Human-readable rule that produced an auto adjustment, e.g. "Onyx 8% supplier fee". */
  rule?: string
}

export const ADJUSTMENT_KINDS: { value: AdjustmentKind; label: string }[] = [
  { value: 'amount', label: '$' },
  { value: 'percent', label: '%' },
]

/** Prepopulated reasons for a commission adjustment (Edit Commission drawer). */
export const COMMISSION_ADJUSTMENT_REASONS = [
  'Supplier recall',
  'Processing fee',
  'Payment / supplier fee',
  'Chargeback',
  'Cancellation fee',
  'Currency conversion',
  'Overpayment correction',
  'Underpayment correction',
  'Manual correction',
] as const

// ── Automatic supplier-rule adjustments ──────────────────────────────────────
// Some suppliers deduct a standard fee on every commission. These rules apply an
// adjustment automatically and surface a callout on the commission. (Client
// examples: Onyx 8% fee, Hilton 3% fee.)
export interface AutoAdjustmentRule {
  supplier: string
  kind: AdjustmentKind
  /** Signed value, e.g. -8 for a -8% fee. */
  value: number
  label: string
}

export const AUTO_ADJUSTMENT_RULES: AutoAdjustmentRule[] = [
  { supplier: 'Onyx', kind: 'percent', value: -8, label: 'Onyx 8% supplier fee' },
  { supplier: 'Hilton', kind: 'percent', value: -3, label: 'Hilton 3% processing fee' },
]

/** The auto adjustment(s) a supplier triggers, as CommissionAdjustments. */
export function autoAdjustmentsForSupplier(supplier: string): CommissionAdjustment[] {
  return AUTO_ADJUSTMENT_RULES.filter(
    (r) => r.supplier.toLowerCase() === supplier.trim().toLowerCase(),
  ).map((r) => ({ id: `auto-${r.supplier.toLowerCase()}`, reason: r.label, kind: r.kind, value: r.value, auto: true, rule: r.label }))
}

export interface CommissionLine {
  id: string
  type: CommissionType
  /** Received booking reference on the statement. */
  reference: string
  statementRef: string
  supplier: string
  received: number | null
  /** Percent 0–100, null until matched. Advisor's share of the commission. */
  split: number | null
  status: CommissionStatus
  /** Linked advisor booking ref, once matched. Multiple commissions may share one. */
  matchingBookingRef: string | null
  advisor: string | null
  /** Advisor's expected commission. */
  expected: number | null
  /** Received amount doesn't match the advisor's expected amount. */
  receivedMismatch?: boolean
  /** Split doesn't match the advisor's expected split. */
  splitMismatch?: boolean
  /** Nested deductions / additions applied to the commission. */
  adjustments?: CommissionAdjustment[]
}

// ── Split + adjustment math ───────────────────────────────────────────────────

/** Advisor's share (split %) and agency's share of a received commission. */
export const advisorCommission = (received: number, split: number) =>
  Math.round(received * (split / 100) * 100) / 100
export const agencyCommission = (received: number, split: number) =>
  Math.round((received - advisorCommission(received, split)) * 100) / 100

/** Dollar delta of one adjustment (percent is computed against the received amount). */
export const adjustmentDelta = (a: CommissionAdjustment, received: number) =>
  a.kind === 'percent' ? Math.round((a.value / 100) * received * 100) / 100 : a.value

/** Received total after all adjustments are applied. */
export function commissionAdjustedTotal(c: CommissionLine): number {
  const base = c.received ?? 0
  const delta = (c.adjustments ?? []).reduce((sum, a) => sum + adjustmentDelta(a, base), 0)
  return Math.round((base + delta) * 100) / 100
}

export interface CommissionBreakdown {
  received: number
  /** Advisor's share of the gross received, before adjustments. */
  advisorGross: number
  /** Agency's share of the gross received, before adjustments. */
  agencyGross: number
  /** Sum of all adjustments (signed dollars), before splitting. */
  totalAdj: number
  /** Advisor's portion across all adjustments, per each adjustment's split. */
  advisorAdj: number
  /** Agency's portion across all adjustments. */
  agencyAdj: number
  /** Advisor's share after their portion of the adjustments. */
  advisorNet: number
  /** Agency's share after their portion of the adjustments. */
  agencyNet: number
}

const round2 = (n: number) => Math.round(n * 100) / 100

/** Advisor's split % for an adjustment. Defaults: auto supplier fees fall on the
 *  advisor (100%); any other adjustment follows the commission split. */
export const adjustmentSplit = (a: CommissionAdjustment, commissionSplit: number) =>
  a.split ?? (a.auto ? 100 : commissionSplit)

/**
 * Split a commission into advisor / agency shares. Every adjustment carries its
 * own split (advisor's %); its dollar delta is divided between advisor and
 * agency accordingly, so both nets reflect each adjustment's split.
 */
export function commissionBreakdown(
  received: number,
  split: number,
  adjustments: CommissionAdjustment[] = [],
): CommissionBreakdown {
  const advisorGross = advisorCommission(received, split)
  const agencyGross = agencyCommission(received, split)
  let advisorAdj = 0
  let agencyAdj = 0
  for (const a of adjustments) {
    const delta = adjustmentDelta(a, received)
    const advisorShare = delta * (adjustmentSplit(a, split) / 100)
    advisorAdj += advisorShare
    agencyAdj += delta - advisorShare
  }
  advisorAdj = round2(advisorAdj)
  agencyAdj = round2(agencyAdj)
  return {
    received,
    advisorGross,
    agencyGross,
    totalAdj: round2(advisorAdj + agencyAdj),
    advisorAdj,
    agencyAdj,
    advisorNet: round2(advisorGross + advisorAdj),
    agencyNet: round2(agencyGross + agencyAdj),
  }
}

/** "-$20" (amount) / "-3%" (percent) for display. */
export const formatAdjustmentValue = (a: CommissionAdjustment) =>
  a.kind === 'percent'
    ? `${a.value}%`
    : `${a.value < 0 ? '-' : ''}$${Math.abs(a.value).toLocaleString('en-US')}`

/** Stat cards for the Commissions tab (V2). */
export const commissionTotals = {
  total: '$11.0k',
  reconciled: '$375.20',
  unreconciled: '$41.86',
  disbursed: '$1.6k',
}

const CP: CommissionType = 'Commission'

export const initialCommissions: CommissionLine[] = [
  {
    id: 'c1',
    type: CP,
    reference: 'A2736554',
    statementRef: 'FFFK232',
    supplier: 'Supplier X',
    received: 240,
    split: null,
    status: 'no-match',
    matchingBookingRef: null,
    advisor: null,
    expected: null,
    receivedMismatch: true,
  },
  {
    id: 'c2',
    type: CP,
    reference: 'A2736555',
    statementRef: 'FFFK232',
    supplier: 'Supplier Y',
    received: 200,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'A2736555',
    advisor: 'Michael Smith',
    expected: 200,
    adjustments: [
      { id: 'c2-a1', reason: 'Supplier recall', kind: 'amount', value: -20, split: 50 },
      { id: 'c2-a2', reason: 'Processing fee', kind: 'percent', value: -3, split: 100 },
    ],
  },
  // Two commissions on the SAME booking (A2736552) — multiple-per-booking.
  {
    id: 'c3',
    type: CP,
    reference: 'A2736552',
    statementRef: 'FFFK232',
    supplier: 'Supplier Z',
    received: 200,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'A2736552',
    advisor: 'Michael Smith',
    expected: 200,
    splitMismatch: true,
  },
  {
    id: 'c4',
    type: CP,
    reference: 'A2736552',
    statementRef: 'FFFK232',
    supplier: 'Supplier A',
    received: 200,
    split: 80,
    status: 'reconciled',
    matchingBookingRef: 'A2736552',
    advisor: 'Michael Smith',
    expected: 200,
    receivedMismatch: true,
  },
  {
    id: 'c5',
    type: CP,
    reference: 'A2736553',
    statementRef: 'FFFK232',
    supplier: 'Supplier B',
    received: 300,
    split: 80,
    status: 'disbursed',
    matchingBookingRef: 'A2736553',
    advisor: 'Michael Smith',
    expected: 300,
  },
  {
    id: 'c6',
    type: CP,
    reference: 'BHS7997',
    statementRef: 'FFFK232',
    supplier: 'Safari Tour Company',
    received: 200,
    split: 75,
    status: 'disbursed',
    matchingBookingRef: 'BHS7997',
    advisor: 'Brandon Jones',
    expected: 200,
  },
  {
    id: 'c7',
    type: CP,
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
    type: CP,
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
    type: CP,
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
    type: CP,
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
    type: CP,
    reference: 'GAdv-882',
    statementRef: 'GAD1120',
    supplier: 'G Adventures',
    received: 248,
    split: 75,
    status: 'disbursed',
    matchingBookingRef: 'GAdv-882',
    advisor: 'Kim Anderson',
    expected: 248,
  },
  // Automatic supplier-rule adjustments — Onyx (8%) and Hilton (3%) fees applied
  // on receipt. These carry auto/rule flags and are read-only on the commission.
  {
    id: 'c12',
    type: CP,
    reference: 'ONX-4471',
    statementRef: 'ONX2207',
    supplier: 'Onyx',
    received: 500,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'ONX-4471',
    advisor: 'Suzy Smith',
    expected: 500,
    adjustments: [
      { id: 'c12-auto', reason: 'Onyx 8% supplier fee', kind: 'percent', value: -8, split: 100, auto: true, rule: 'Onyx 8% supplier fee' },
    ],
  },
  {
    id: 'c13',
    type: CP,
    reference: 'HLT-9912',
    statementRef: 'HLT7781',
    supplier: 'Hilton',
    received: 312.5,
    split: 70,
    status: 'match-found',
    matchingBookingRef: 'HLT-9912',
    advisor: 'Sam Rivera',
    expected: 312.5,
    adjustments: [
      { id: 'c13-auto', reason: 'Hilton 3% processing fee', kind: 'percent', value: -3, split: 100, auto: true, rule: 'Hilton 3% processing fee' },
    ],
  },
  // Negative commission — a supplier chargeback / commission call-back. The
  // guest cancelled and Royal Caribbean recalled the commission paid on
  // RC-2294013, so this line comes through as a negative amount.
  {
    id: 'c14',
    type: 'Commission',
    reference: 'RC-2294013-CB',
    statementRef: 'RCL8891',
    supplier: 'Royal Carribean',
    received: -612,
    split: 80,
    status: 'match-found',
    matchingBookingRef: 'RC-2294013',
    advisor: 'Suzy Smith',
    expected: -612,
  },
  // Adjustment — a commission NOT tied to a booking. It has an advisor but no
  // matching booking; it still carries a received amount, split and reconciles
  // like any other commission.
  {
    id: 'c15',
    type: 'Adjustment',
    reference: 'ADJ-1042',
    statementRef: '--',
    supplier: 'Agency incentive',
    received: 150,
    split: 80,
    status: 'match-found',
    matchingBookingRef: null,
    advisor: 'Brandon Jones',
    expected: null,
  },
]

// ── Search-for-booking cards ────────────────────────────────────────────────
// Candidate advisor bookings shown in the card-based search flyout, used when
// matching an unmatched commission line to a booking.

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
  { id: 's1', bookingRef: 'XJH29KQ', agency: 'Wanderlust Escapes', traveler: 'Leo Hawthorne', advisor: 'Suzy Smith', travelDate: 'Dec 1, 2025', total: 12235, status: 'Expected' },
  { id: 's2', bookingRef: 'ZPL56YT', agency: 'Adventure Awaits Tours', traveler: 'Mia Kensington', advisor: 'Suzy Smith', travelDate: 'Dec 1, 2025', total: 12235, status: 'Expected' },
  { id: 's3', bookingRef: 'QWE78MN', agency: 'Explore More Travels', traveler: 'Jasper Quinn', advisor: 'Suzy Smith', travelDate: 'Dec 1, 2025', total: 12235, status: 'Expected' },
  { id: 's4', bookingRef: 'TRF34BC', agency: 'Journey Beyond Travel Co.', traveler: 'Ava Sinclair', advisor: 'Suzy Smith', travelDate: 'Dec 1, 2025', total: 12235, status: 'Expected' },
  { id: 's5', bookingRef: 'MRK-88213', agency: 'Coastline Journeys', traveler: 'Noah Fletcher', advisor: 'Brandon Jones', travelDate: 'Jan 14, 2026', total: 8420, status: 'Overdue' },
  { id: 's6', bookingRef: 'HLD-77810', agency: 'Summit & Shore Travel', traveler: 'Ivy Bennett', advisor: 'Suzy Smith', travelDate: 'Feb 2, 2026', total: 9900, status: 'Reconciled' },
]

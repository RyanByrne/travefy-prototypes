// ── Advisor commissions list ──────────────────────────────────────────────────
// The advisor's own commissions (their share of each booking), with the payout
// they were paid in. Read-only for the advisor — the only actions are "View in
// Payout" and a read-only View drawer. Reuses ViewCommissionData so the same
// View Commission drawer renders both this and the incoming list.

import type { ViewCommissionData } from './incomingCommissionsData'

export type AdvisorCommissionStatus = 'Paid' | 'Expected'

export interface AdvisorCommission extends ViewCommissionData {
  id: string
  status: AdvisorCommissionStatus
  /** Expected commission amount, or null → shown as "--". */
  expectedAmount: number | null
  /** Payout this commission was paid in (label), or "--" when not yet assigned. */
  payout: string
}

export const initialAdvisorCommissions: AdvisorCommission[] = [
  { id: 'ac1', bookingRef: 'A2736555', type: 'Commission', supplier: 'Supplier Y', splitName: 'Tier 3', splitPercent: 80, status: 'Paid', expectedAmount: 200, payout: 'June 14th', amount: 200, updates: [
    { from: 'Supplier Y', to: 'Wonderland Inc', amount: 200, date: 'Jun 12, 2026' },
    { from: 'Wonderland Inc', to: 'James May', amount: 160, percent: 80, date: 'Jun 14, 2026' },
  ] },
  { id: 'ac2', bookingRef: 'A2736552', type: 'Commission', supplier: 'Supplier Z', splitName: 'Tier 3', splitPercent: 80, status: 'Paid', expectedAmount: null, payout: 'June 1st', amount: 200, updates: [
    { from: 'Supplier Z', to: 'Wonderland Inc', amount: 200, date: 'May 30, 2026' },
    { from: 'Wonderland Inc', to: 'James May', amount: 160, percent: 80, date: 'Jun 1, 2026' },
  ] },
  { id: 'ac3', bookingRef: 'A2736552', type: 'Commission', supplier: 'Supplier A', splitName: 'Tier 3', splitPercent: 80, status: 'Paid', expectedAmount: null, payout: 'May 14th', amount: 200, updates: [
    { from: 'Supplier A', to: 'Wonderland Inc', amount: 200, date: 'May 12, 2026' },
    { from: 'Wonderland Inc', to: 'James May', amount: 160, percent: 80, date: 'May 14, 2026' },
  ] },
  { id: 'ac4', bookingRef: 'A2736553', type: 'Commission', supplier: 'Supplier B', splitName: 'Tier 3', splitPercent: 80, status: 'Paid', expectedAmount: 200, payout: 'May 1st', amount: 300, updates: [
    { from: 'Supplier B', to: 'Wonderland Inc', amount: 300, date: 'Apr 29, 2026' },
    { from: 'Wonderland Inc', to: 'James May', amount: 240, percent: 80, date: 'May 1, 2026' },
  ] },
  { id: 'ac5', bookingRef: 'A2736560', type: 'Commission', supplier: 'Royal Carribean', splitName: 'Tier 3', splitPercent: 80, status: 'Paid', expectedAmount: 612, payout: 'Apr 14th', amount: 612, updates: [
    { from: 'Royal Carribean', to: 'Wonderland Inc', amount: 612, date: 'Apr 12, 2026' },
    { from: 'Wonderland Inc', to: 'James May', amount: 489.60, percent: 80, date: 'Apr 14, 2026' },
  ] },
  { id: 'ac6', bookingRef: 'A2736561', type: 'Commission', supplier: 'Hyatt', splitName: 'Tier 3', splitPercent: 80, status: 'Paid', expectedAmount: null, payout: 'Apr 1st', amount: 140, updates: [
    { from: 'Hyatt', to: 'Wonderland Inc', amount: 140, date: 'Mar 30, 2026' },
    { from: 'Wonderland Inc', to: 'James May', amount: 112, percent: 80, date: 'Apr 1, 2026' },
  ] },
]

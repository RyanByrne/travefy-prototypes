/**
 * Commission Splits prototype data. The CommissionSplit type, seed,
 * formatSplit helper and label palette live in shared/data/commissionSplits.ts
 * so the Bookings Agency prototype can show the same options on its
 * Edit Advisor Booking drawer. Team membership stays here since it's
 * only meaningful in the admin surface.
 */

export {
  formatSplit,
  initialSplits,
  LABEL_PALETTE,
  type CommissionSplit,
  type LabelColor,
  type SplitLabel,
} from '../../shared/data/commissionSplits'

export interface TeamMember {
  id: string
  name: string
  email: string
  status: 'Accepted' | 'Pending' | 'Invited'
  role: 'Admin' | 'Member'
  /** References a CommissionSplit.id */
  commissionSplitId: string
  /** ISO YYYY-MM-DD the assigned tier takes effect — payouts use the tier
   *  effective as of the booking/payout date. */
  commissionSplitEffectiveDate: string
  /** When true, this advisor can override their default split per booking. */
  canOverrideSplit: boolean
}

// ── Seed: team members ─────────────────────────────────────────────────────────

export const initialTeam: TeamMember[] = [
  { id: 't1', name: 'Liam Carter',   email: 'liam@travelco.com',   status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: false },
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true  },
  { id: 't3', name: 'Ethan Brooks',  email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', commissionSplitId: 's2', commissionSplitEffectiveDate: '2026-07-01', canOverrideSplit: false },
  { id: 't4', name: 'Mia Johnson',   email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  commissionSplitId: 's6', commissionSplitEffectiveDate: '2026-01-01', canOverrideSplit: true  },
]

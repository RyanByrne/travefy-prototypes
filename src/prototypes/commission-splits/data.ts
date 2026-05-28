export type LabelColor = 'green' | 'blue' | 'orange' | 'gray'

export interface SplitLabel {
  name: string
  color: LabelColor
}

export interface CommissionSplit {
  id: string
  name: string
  description: string
  /** 0-100, percent of commission assigned to the advisor */
  percentage: number
  labels: SplitLabel[]
}

export interface TeamMember {
  id: string
  name: string
  email: string
  status: 'Accepted' | 'Pending' | 'Invited'
  role: 'Admin' | 'Member'
  /** References a CommissionSplit.id */
  commissionTierId: string
}

// ── Seed: commission splits ────────────────────────────────────────────────────

export const initialSplits: CommissionSplit[] = [
  {
    id: 's1',
    name: 'Default',
    description: 'Default travel commission split divides earnings between agents and agencies based on standard rates.',
    percentage: 65,
    labels: [{ name: 'New Agents', color: 'green' }],
  },
  { id: 's2', name: 'Tier 1', description: 'Basic tier 1 commission split.', percentage: 70, labels: [] },
  { id: 's3', name: 'Tier 2', description: 'Basic tier 2 commission split.', percentage: 75, labels: [] },
  { id: 's4', name: 'Tier 3', description: 'Basic tier 3 commission split.', percentage: 80, labels: [] },
  { id: 's5', name: 'Tier 4', description: 'Basic tier 4 commission split.', percentage: 85, labels: [] },
  { id: 's6', name: 'Veteran', description: 'Veteran commission split.', percentage: 90, labels: [{ name: 'Top Agent', color: 'blue' }] },
  { id: 's7', name: 'Personal Travel', description: 'Personal advisor travel commission split.', percentage: 100, labels: [{ name: 'Personal only', color: 'orange' }] },
]

/** Label palette for the picker in the split drawer. */
export const LABEL_PALETTE: SplitLabel[] = [
  { name: 'New Agents', color: 'green' },
  { name: 'Top Agent', color: 'blue' },
  { name: 'Personal only', color: 'orange' },
  { name: 'Promo', color: 'gray' },
  { name: 'Cruise specialist', color: 'blue' },
  { name: 'Group bookings', color: 'green' },
]

// ── Seed: team members ─────────────────────────────────────────────────────────

export const initialTeam: TeamMember[] = [
  { id: 't1', name: 'Liam Carter',  email: 'liam@travelco.com',   status: 'Accepted', role: 'Member', commissionTierId: 's2' },
  { id: 't2', name: 'Sophie Turner', email: 'sophie@travelco.com', status: 'Accepted', role: 'Member', commissionTierId: 's2' },
  { id: 't3', name: 'Ethan Brooks', email: 'ethan@travelco.com',  status: 'Accepted', role: 'Member', commissionTierId: 's2' },
  { id: 't4', name: 'Mia Johnson',  email: 'mia@travelco.com',    status: 'Accepted', role: 'Admin',  commissionTierId: 's6' },
]

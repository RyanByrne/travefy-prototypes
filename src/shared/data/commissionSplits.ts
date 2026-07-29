/**
 * Shared commission splits data — the single source of truth for the
 * CommissionSplit type, the default seed, the label palette, and the
 * display helper. Both the Commission Splits prototype (admin config)
 * and the Bookings Agency prototype (advisor picker on a booking) import
 * from here so the demo story stays coherent across prototypes.
 *
 * Team membership stays in the Commission Splits prototype since it's
 * only meaningful in that surface today.
 */

export interface CommissionSplit {
  id: string
  name: string
  description: string
  /** 0-100, percent of commission assigned to the advisor */
  percentage: number
  /** When set, this split only applies to bookings with this supplier. When
   *  omitted, it's a general split that applies to all suppliers. */
  supplier?: string
}

/** Display helper — formats a split as "Default (65%)". */
export function formatSplit(split: CommissionSplit | undefined): string {
  if (!split) return '—'
  return `${split.name} (${split.percentage}%)`
}

/** Default seed for all prototypes that surface commission splits. */
export const initialSplits: CommissionSplit[] = [
  {
    id: 's1',
    name: 'Default',
    description: 'Default travel commission split divides earnings between agents and agencies based on standard rates.',
    percentage: 65,
  },
  { id: 's2', name: 'Tier 1', description: 'Basic tier 1 commission split.', percentage: 70 },
  { id: 's3', name: 'Tier 2', description: 'Basic tier 2 commission split.', percentage: 75 },
  { id: 's4', name: 'Tier 3', description: 'Basic tier 3 commission split.', percentage: 80 },
  { id: 's5', name: 'Tier 4', description: 'Basic tier 4 commission split.', percentage: 85 },
  { id: 's6', name: 'Veteran', description: 'Veteran commission split.', percentage: 90 },
  { id: 's7', name: 'Personal Travel', description: 'Personal advisor travel commission split.', percentage: 100 },
  // Supplier-scoped splits — only apply to bookings with the named supplier.
  { id: 's8', name: 'Royal Caribbean Special', description: 'Boosted split for Royal Caribbean bookings.', percentage: 85, supplier: 'Royal Caribbean' },
  { id: 's9', name: 'Marriott Full', description: 'Full commission on Marriott bookings.', percentage: 100, supplier: 'Marriott' },
]

export type CampaignStatus = 'sent' | 'scheduled' | 'active' | 'draft'

export interface Campaign {
  id: string
  name: string
  owner: string
  recipients: number
  delivered: number
  opened: number
  clicked: number
  bounced: number
  unsubscribed: number
  spamReports: number
  status: CampaignStatus
  scheduledFor?: string
  sentAt?: string
}

export const campaigns: Campaign[] = [
  { id: '1', name: 'Wanderlust Deals 2026', owner: 'Emily Johnson', recipients: 256, delivered: 250, opened: 97, clicked: 18, bounced: 3, unsubscribed: 2, spamReports: 0, status: 'sent', sentAt: 'Mar 30, 2026' },
  { id: '2', name: 'Adventure Awaits 2026', owner: 'Michael Davis', recipients: 256, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, spamReports: 0, status: 'scheduled', scheduledFor: 'Jun 15, 2026' },
  { id: '3', name: 'Explore the World 2026', owner: 'Sarah Wilson', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'scheduled', scheduledFor: 'Jun 20, 2026' },
  { id: '4', name: 'Travel Dreams 2026', owner: 'David Martinez', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'active' },
  { id: '5', name: 'Journey of a Lifetime 2026', owner: 'Laura Garcia', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'active' },
  { id: '6', name: 'Escape to Paradise 2026', owner: 'James Rodriguez', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'sent', sentAt: 'Feb 10, 2026' },
  { id: '7', name: 'Discover New Horizons 2026', owner: 'Sophia Lee', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'draft' },
  { id: '8', name: 'Voyage of Discovery 2026', owner: 'Daniel Hernandez', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'draft' },
  { id: '9', name: 'Globetrotter Specials 2026', owner: 'Olivia Taylor', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'draft' },
  { id: '10', name: 'Travelicious Offers 2026', owner: 'William Anderson', recipients: 256, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'draft' },
  { id: '11', name: 'Getaway Gala 2026', owner: 'Ava Thomas', recipients: 859, delivered: 155, opened: 65, clicked: 15, bounced: 3, unsubscribed: 1, spamReports: 0, status: 'draft' },
]

/** Total addressable contacts, used by the audience query builder. */
export const TOTAL_CONTACTS = 1200

/** Fallback email body shown in the preview for seed campaigns or an empty draft. */
export const SAMPLE_EMAIL_HTML = `
  <p style="margin:0 0 16px;">Hi there,</p>
  <p style="margin:0 0 16px;"><strong>It's almost wave season!</strong> Have you thought about your next trip?</p>
  <p style="margin:0 0 16px;">From sun-soaked beaches to once-in-a-lifetime cruises, we've handpicked our best 2026 getaways just for you.</p>
  <p style="margin:0 0 16px;">Maybe we can help? <a href="#" style="color:#2a79a6;font-weight:600;text-decoration:none;">Get In Touch</a></p>
  <p style="margin:24px 0 0;color:#72868d;">Safe travels,<br/>The Voyage Crest Travel Team</p>
`

/** Sample Bcc recipients shown as chips in the compose step. */
export const SAMPLE_BCC = [
  'Kim Anderson (kimmya8@gmail.com)',
  'Ellen Martinez (emtinez@gmail.com)',
  'Kevin Martinez (kmartz@gmail.com)',
  'Jordon Martinez (jtinez@gmail.com)',
]

// ── Audience query builder options ──────────────────────────────────────────────

export type ConditionField = 'Label' | 'Travel Status' | 'Has Trips'
export type ConditionOperator = 'Is any of' | 'Is' | 'Is not'

export const FIELD_OPTIONS: ConditionField[] = ['Label', 'Travel Status', 'Has Trips']

export const OPERATOR_OPTIONS: Record<ConditionField, ConditionOperator[]> = {
  Label: ['Is any of', 'Is', 'Is not'],
  'Travel Status': ['Is', 'Is not'],
  'Has Trips': ['Is'],
}

export const VALUE_OPTIONS: Record<ConditionField, string[]> = {
  Label: ['Interested Travelers', 'VIP Clients', 'Past Guests', 'Newsletter Subscribers', 'Luxury Seekers'],
  'Travel Status': ['Upcoming', 'Currently Traveling', 'Past'],
  'Has Trips': ['Yes', 'No'],
}

// ── Label picker options ────────────────────────────────────────────────────────
// Used by the Marketing Campaign modal to pick recipients by label. Each label
// has a mock contact count; selected labels' counts sum to the campaign's
// total recipients.

export interface LabelOption {
  name: string
  /** Mocked count of contacts holding this label. */
  count: number
}

export const LABEL_OPTIONS: LabelOption[] = [
  { name: 'River Cruise',     count: 142 },
  { name: 'Ocean Cruise',     count: 218 },
  { name: 'Holiday',          count: 200 },
  { name: 'Honeymoon',        count: 64 },
  { name: 'Family Travel',    count: 312 },
  { name: 'Adventure Travel', count: 178 },
  { name: 'Luxury',           count: 96 },
  { name: 'Romantic Getaway', count: 108 },
  { name: 'Group Tours',      count: 154 },
  { name: 'Wellness Retreat', count: 72 },
]

export function totalForLabels(selected: string[]): number {
  return LABEL_OPTIONS
    .filter((l) => selected.includes(l.name))
    .reduce((sum, l) => sum + l.count, 0)
}

export type CampaignStatus = 'sent' | 'scheduled' | 'draft'

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
  status: CampaignStatus
  scheduledFor?: string
  sentAt?: string
}

export interface ContactList {
  id: string
  name: string
  owner: string
  labels: string[]
  contacts: number
  campaigns: number
  lastUpdated: string
}

export interface Contact {
  id: string
  firstName: string
  lastName: string
  phone: string
  email: string
  trips: number | null
  traveling: 'Upcoming' | 'Currently' | 'Past' | null
  lastUpdated: string
}

export const contacts: Contact[] = [
  { id: '1', firstName: 'Robert', lastName: 'Brown', phone: '(555) 012-3456', email: 'john.doe@example.com', trips: 3, traveling: 'Upcoming', lastUpdated: 'Nov 20, 2022' },
  { id: '2', firstName: 'Lana', lastName: 'Byrd', phone: '(555) 012-3456', email: 'jane.smith@example.com', trips: null, traveling: 'Currently', lastUpdated: 'Jun 15, 2022' },
  { id: '3', firstName: 'Helene', lastName: 'Engels', phone: '(555) 012-3456', email: 'inactive.user@example.com', trips: null, traveling: 'Upcoming', lastUpdated: 'May 24, 2021' },
  { id: '4', firstName: 'Bonnie', lastName: 'Green', phone: '(555) 012-3456', email: 'alice.jones@example.com', trips: 1, traveling: 'Past', lastUpdated: 'Feb 12, 2023' },
  { id: '5', firstName: 'Micheal', lastName: 'Gough', phone: '(555) 012-3456', email: 'bob.brown@example.com', trips: null, traveling: null, lastUpdated: 'Jun 15, 2022' },
  { id: '6', firstName: 'Jese', lastName: 'Leos', phone: '(555) 012-3456', email: 'not.active@example.com', trips: 2, traveling: 'Past', lastUpdated: 'Jan 04, 2022' },
  { id: '7', firstName: 'Leslie', lastName: 'Livingston', phone: '(555) 012-3456', email: 'user.offline@example.com', trips: null, traveling: null, lastUpdated: 'Jun 15, 2022' },
  { id: '8', firstName: 'Jesse', lastName: 'Martinez', phone: '(555) 012-3456', email: 'charlie.white@example.com', trips: 5, traveling: 'Upcoming', lastUpdated: 'Oct 11, 2024' },
  { id: '9', firstName: 'Joseph', lastName: 'McFall', phone: '(555) 012-3456', email: 'david.green@example.com', trips: 8, traveling: 'Past', lastUpdated: 'Feb 12, 2023' },
  { id: '10', firstName: 'Karen', lastName: 'Nelson', phone: '(555) 012-3456', email: 'user.deactivated@example.com', trips: null, traveling: null, lastUpdated: 'Jan 04, 2022' },
  { id: '11', firstName: 'Neil', lastName: 'Sims', phone: '(555) 012-3456', email: 'user.deactivated2@example.com', trips: null, traveling: null, lastUpdated: 'Jun 15, 2024' },
  { id: '12', firstName: 'Allen', lastName: 'Rogers', phone: '(555) 012-3456', email: 'user.deactivated3@example.com', trips: null, traveling: null, lastUpdated: 'Jun 15, 2024' },
  { id: '13', firstName: 'Kim', lastName: 'Rogers', phone: '(555) 012-3456', email: 'user.deactivated4@example.com', trips: null, traveling: null, lastUpdated: 'Jan 04, 2022' },
]

export const campaigns: Campaign[] = [
  { id: '1', name: 'Wanderlust Deals 2026', owner: 'Emily Johnson', recipients: 256, delivered: 248, opened: 104, clicked: 22, bounced: 3, unsubscribed: 1, status: 'sent', sentAt: 'Feb 1, 2026' },
  { id: '2', name: 'Adventure Awaits 2026', owner: 'Michael Davis', recipients: 312, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'scheduled', scheduledFor: 'Mar 15, 2026' },
  { id: '3', name: 'Explore the World 2026', owner: 'Sarah Wilson', recipients: 189, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'scheduled', scheduledFor: 'Mar 20, 2026' },
  { id: '4', name: 'Travel Dreams 2026', owner: 'David Martinez', recipients: 256, delivered: 251, opened: 88, clicked: 14, bounced: 2, unsubscribed: 1, status: 'sent', sentAt: 'Jan 20, 2026' },
  { id: '5', name: 'Journey of a Lifetime 2026', owner: 'Laura Garcia', recipients: 445, delivered: 438, opened: 195, clicked: 41, bounced: 4, unsubscribed: 2, status: 'sent', sentAt: 'Jan 10, 2026' },
  { id: '6', name: 'Escape to Paradise 2026', owner: 'James Rodriguez', recipients: 256, delivered: 250, opened: 97, clicked: 18, bounced: 3, unsubscribed: 1, status: 'sent', sentAt: 'Dec 15, 2025' },
  { id: '7', name: 'Discover New Horizons 2026', owner: 'Sophia Lee', recipients: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'draft' },
  { id: '8', name: 'Voyage of Discovery 2026', owner: 'Daniel Hernandez', recipients: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'draft' },
  { id: '9', name: 'Globetrotter Specials 2026', owner: 'Olivia Taylor', recipients: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'draft' },
  { id: '10', name: 'Travellicious Offers 2026', owner: 'William Anderson', recipients: 0, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'draft' },
  { id: '11', name: 'Getaway Gala 2026', owner: 'Ava Thomas', recipients: 859, delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, status: 'draft' },
]

export const contactLists: ContactList[] = [
  { id: '1', name: 'Cruise Aficionados', owner: 'Emily Johnson', labels: ['Travel', 'Luxury', 'Ocean'], contacts: 256, campaigns: 7, lastUpdated: '5 Oct 2023' },
  { id: '2', name: 'Adventure Travel Subscribers', owner: 'Michael Davis', labels: ['Adventure', 'Active', 'Outdoors'], contacts: 312, campaigns: 9, lastUpdated: '15 Sep 2023' },
  { id: '3', name: 'Explorers of Europe', owner: 'Sarah Wilson', labels: ['Europe', 'Culture', 'History'], contacts: 189, campaigns: 4, lastUpdated: '22 Aug 2023' },
  { id: '4', name: 'Sun and Sand Seekers', owner: 'David Martinez', labels: ['Beach', 'Summer', 'Relaxation'], contacts: 445, campaigns: 8, lastUpdated: '30 Jul 2023' },
  { id: '5', name: 'Wanderlust Travelers', owner: 'Laura Garcia', labels: ['Budget', 'Backpacking', 'Youth'], contacts: 178, campaigns: 0, lastUpdated: '10 Jun 2023' },
  { id: '6', name: 'Cultural Experience Enthusiasts', owner: 'James Rodriguez', labels: ['Culture', 'Art', 'Museum'], contacts: 231, campaigns: 0, lastUpdated: '18 May 2023' },
  { id: '7', name: 'Nature Lovers', owner: 'Sophia Lee', labels: ['Nature', 'Eco', 'Wildlife'], contacts: 198, campaigns: 0, lastUpdated: '25 Apr 2023' },
  { id: '8', name: 'Luxury Vacation Seekers', owner: 'Daniel Hernandez', labels: ['Luxury', 'VIP', 'Premium'], contacts: 89, campaigns: 0, lastUpdated: '3 Mar 2023' },
  { id: '9', name: 'Family Trip Planners', owner: 'Olivia Taylor', labels: ['Family', 'Kids', 'Fun'], contacts: 334, campaigns: 0, lastUpdated: '12 Feb 2023' },
  { id: '10', name: 'Solo Travel Explorers', owner: 'William Anderson', labels: ['Solo', 'Independent', 'Freedom'], contacts: 156, campaigns: 0, lastUpdated: '20 Jan 2023' },
  { id: '11', name: 'Weekend Getaway Adventurers', owner: 'Ava Thomas', labels: ['Weekend', 'Short Trip', 'Local'], contacts: 859, campaigns: 0, lastUpdated: '28 Dec 2022' },
]

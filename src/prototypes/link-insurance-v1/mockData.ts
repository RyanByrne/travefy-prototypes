export interface Plan {
  id: string
  name: string
  provider: string
  providerLogo?: string
  price: number
  highlights: string[]
  status?: 'accepted' | 'purchased' | 'declined' | 'deciding'
}

export interface TravelerDetails {
  name: string
  dateOfBirth: string
  stateOfResidence: string
  tripCost: number
  tripStartDate: string
  tripEndDate: string
}

export const mockPlans: Plan[] = [
  {
    id: '1',
    name: 'OneTrip Prime',
    provider: 'Allianz Travel',
    price: 72,
    highlights: [
      'Cancellation up to $8,400',
      'Medical $50,000',
      'Baggage $1,000',
    ],
  },
  {
    id: '2',
    name: 'Preferred',
    provider: 'Allianz Travel',
    price: 97,
    highlights: [
      'Cancellation up to $8,400',
      'Medical $50,000',
      'Baggage $2,500',
    ],
  },
  {
    id: '3',
    name: 'Basic',
    provider: 'Travel Guard',
    price: 65,
    highlights: [
      'Cancellation up to $8,400',
      'Medical $25,000',
    ],
  },
]

export const mockTravelerDetails: TravelerDetails = {
  name: 'Jack Hawthorne',
  dateOfBirth: '1985-03-15',
  stateOfResidence: 'California',
  tripCost: 8400,
  tripStartDate: '2026-12-01',
  tripEndDate: '2026-12-15',
}

export const mockAdvisorResponses = [
  {
    id: '1',
    traveler: 'Jack Hawthorne',
    avatar: '',
    plan: 'OneTrip Prime',
    provider: 'Allianz Travel',
    price: 72,
    status: 'purchased' as const,
    date: '2026-11-05',
  },
  {
    id: '2',
    traveler: 'Lucy Nelson',
    avatar: '',
    plan: 'Preferred',
    provider: 'Allianz Travel',
    price: 97,
    status: 'accepted' as const,
    date: '2026-11-04',
  },
  {
    id: '3',
    traveler: 'Sarah Chen',
    avatar: '',
    plan: null,
    provider: null,
    price: null,
    status: 'declined' as const,
    date: '2026-11-03',
  },
  {
    id: '4',
    traveler: 'Michael Rodriguez',
    avatar: '',
    plan: null,
    provider: null,
    price: null,
    status: 'deciding' as const,
    date: '2026-11-02',
  },
]

// Mock data for Link insurance v1 prototype

export interface Traveler {
  id: string
  name: string
  dob: string
  state: string
  tripCost: number
}

export interface InsurancePlan {
  id: string
  name: string
  cancellationLimit: number
  medicalLimit: number
  baggageLimit?: number
  price: number
  isAdvisorPick?: boolean
}

export interface Provider {
  id: string
  name: string
  tagline: string
  linkedAccount: boolean
}

export interface TravelerResponse {
  travelerId: string
  travelerName: string
  status: 'purchased' | 'accepted' | 'declined' | 'still-deciding' | 'no-decision'
  reason: string
  date: string
  acceptedProvider?: string
  acceptedPlan?: string
  acceptedPrice?: number
  acceptedDate?: string
  policyNumber?: string
  coverageStart?: string
  coverageEnd?: string
  premiumPaid?: number
  purchaseDate?: string
  assistancePhone?: string
}

export const MOCK_TRIP = {
  name: '10 Day Euro Sights Trip',
  dates: 'Aug 9, 2026 - Aug 16, 2026',
  advisor: {
    name: 'Advisor Name',
    title: 'Travel Specialist',
    agency: 'Agency Name',
    email: 'email@travelagency.com',
  },
}

export const MOCK_PROVIDERS: Provider[] = [
  { id: 'allianz', name: 'Allianz Travel', tagline: 'Travel with confidence, wherever you go.', linkedAccount: true },
  { id: 'medjet', name: 'Medjet', tagline: 'Medical transport and membership services', linkedAccount: false },
  { id: 'travel-guard', name: 'Travel Guard', tagline: 'Protection for your journey', linkedAccount: false },
  { id: 'bhtp', name: 'BHTP', tagline: 'Berkshire Hathaway Travel Protection', linkedAccount: true },
  { id: 'seven-corners', name: 'Seven Corners', tagline: 'Travel insurance simplified', linkedAccount: false },
]

export const MOCK_PLANS: Record<string, InsurancePlan[]> = {
  allianz: [
    { id: 'onetrip-basic', name: 'OneTrip Basic', cancellationLimit: 5000, medicalLimit: 10000, price: 38 },
    { id: 'onetrip-prime', name: 'OneTrip Prime', cancellationLimit: 8400, medicalLimit: 50000, baggageLimit: 1000, price: 72, isAdvisorPick: true },
    { id: 'onetrip-premier', name: 'OneTrip Premier', cancellationLimit: 8400, medicalLimit: 100000, baggageLimit: 2000, price: 118 },
  ],
  medjet: [
    { id: 'medjet-horizon', name: 'Medjet Horizon', cancellationLimit: 5000, medicalLimit: 25000, price: 52 },
    { id: 'medjet-assist', name: 'Medjet Assist Plus', cancellationLimit: 7500, medicalLimit: 50000, price: 89 },
  ],
}

export const MOCK_TRAVELERS: Traveler[] = [
  { id: 't1', name: 'Elisa Denton', dob: 'Mar 3, 1986', state: 'Colorado', tripCost: 8400 },
  { id: 't2', name: 'Jack Hawthorne', dob: 'Jul 15, 1978', state: 'California', tripCost: 8400 },
  { id: 't3', name: 'Tom Rivera', dob: 'Sep 22, 1990', state: 'Texas', tripCost: 8400 },
]

export const MOCK_RESPONSES: TravelerResponse[] = [
  {
    travelerId: 't2',
    travelerName: 'Lucy Nelson',
    status: 'purchased',
    reason: 'Basic $38. Bought via Allianz link. Policy pulled in',
    date: 'May 9',
    acceptedProvider: 'Allianz Travel',
    acceptedPlan: 'OneTrip Prime',
    acceptedPrice: 72,
    acceptedDate: 'May 11',
    policyNumber: 'ALZ-48213',
    coverageStart: 'Jun 2, 2026',
    coverageEnd: 'Jun 14, 2026',
    premiumPaid: 72,
    purchaseDate: 'May 10, 2026',
    assistancePhone: '1-800-654-1908',
  },
  {
    travelerId: 't3',
    travelerName: 'Jack Hawthorne',
    status: 'accepted',
    reason: 'Prime $72. E-signed. Advisor buys. No policy yet',
    date: 'May 10',
    acceptedProvider: 'Allianz Travel',
    acceptedPlan: 'OneTrip Prime',
    acceptedPrice: 72,
    acceptedDate: 'May 10',
  },
  {
    travelerId: 't1',
    travelerName: 'Tom Rivera',
    status: 'accepted',
    reason: 'Prime $72. Buying via Allianz link. Not pulled in yet',
    date: 'May 13',
    acceptedProvider: 'Allianz Travel',
    acceptedPlan: 'OneTrip Prime',
    acceptedPrice: 72,
    acceptedDate: 'May 13',
  },
  {
    travelerId: 't4',
    travelerName: 'Jane Hawthorne',
    status: 'declined',
    reason: 'Covered by supplier. E-signed. Shown: $38, $72',
    date: 'May 11',
  },
  {
    travelerId: 't5',
    travelerName: 'Deb Denton',
    status: 'declined',
    reason: 'Bought elsewhere',
    date: 'May 14',
  },
  {
    travelerId: 't6',
    travelerName: 'Robert Denton',
    status: 'declined',
    reason: 'No thanks',
    date: 'May 12',
  },
  {
    travelerId: 't7',
    travelerName: 'Sam Rivera',
    status: 'still-deciding',
    reason: 'Still deciding. Reminder sent May 20',
    date: 'May 11',
  },
  {
    travelerId: 't8',
    travelerName: 'Elisa Denton',
    status: 'no-decision',
    reason: 'Viewed, no decision yet. Reminder sent May 12',
    date: '-',
  },
  {
    travelerId: 't9',
    travelerName: 'Aliz Nelson',
    status: 'no-decision',
    reason: 'Not offered',
    date: '-',
  },
]

export const ALL_PROVIDERS_FOR_COMBOBOX = [
  'Allianz Travel',
  'BHTP',
  'Travel Guard',
  'Seven Corners',
]

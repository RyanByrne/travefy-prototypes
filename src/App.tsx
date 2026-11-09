import { Routes, Route } from 'react-router-dom'
import { PrototypeIndex } from './PrototypeIndex'
import { BookingsAgency } from './prototypes/bookings-agency/BookingsAgency'
import { CommissionSplits } from './prototypes/commission-splits/CommissionSplits'
import { LinkInsurance } from './prototypes/link-insurance/LinkInsurance'
import { MarketingCampaigns } from './prototypes/marketing-campaigns/MarketingCampaigns'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrototypeIndex />} />
      <Route path="/link-insurance/*" element={<LinkInsurance />} />
      <Route path="/marketing-campaigns/*" element={<MarketingCampaigns />} />
      <Route path="/commission-splits/*" element={<CommissionSplits />} />
      <Route path="/bookings-agency/*" element={<BookingsAgency />} />
    </Routes>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import './theme.css'

import { TravelerPreQuote } from './screens/TravelerPreQuote'
import { TravelerPreQuoteCondensed } from './screens/TravelerPreQuoteCondensed'
import { TravelerQuotes } from './screens/TravelerQuotes'
import { TravelerMultiProvider } from './screens/TravelerMultiProvider'
import { TravelerAccepted } from './screens/TravelerAccepted'
import { TravelerProposal } from './screens/TravelerProposal'
import { ConfirmDetailsModal } from './screens/ConfirmDetailsModal'
import { EditDetailsModal } from './screens/EditDetailsModal'
import { AdvisorSetup } from './screens/AdvisorSetup'
import { AdvisorPreview } from './screens/AdvisorPreview'
import { AdvisorResponses } from './screens/AdvisorResponses'
import { AddPolicyModal } from './screens/AddPolicyModal'
import { ViewPolicyModal } from './screens/ViewPolicyModal'

export function LinkInsuranceV1() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/screen/34227-79415" replace />} />
      
      <Route path="/screen/34160-3830" element={<div className="p-8">Card Component Set (various states)</div>} />
      <Route path="/screen/34227-79415" element={<TravelerPreQuote />} />
      <Route path="/screen/34227-79234" element={<TravelerPreQuoteCondensed />} />
      <Route path="/screen/34227-79155" element={<TravelerQuotes />} />
      <Route path="/screen/34227-79314" element={<TravelerMultiProvider />} />
      <Route path="/screen/34245-3118" element={<TravelerAccepted />} />
      <Route path="/screen/34227-79275" element={<TravelerProposal />} />
      
      <Route path="/screen/34227-79452" element={<ConfirmDetailsModal />} />
      <Route path="/screen/34227-79473" element={<EditDetailsModal />} />
      
      <Route path="/screen/34227-78641" element={<AdvisorSetup />} />
      <Route path="/screen/34233-2724" element={<AdvisorPreview />} />
      <Route path="/screen/34227-78843" element={<AdvisorResponses />} />
      
      <Route path="/screen/34227-78999" element={<AddPolicyModal />} />
      <Route path="/screen/34237-2862" element={<AddPolicyModal />} />
      <Route path="/screen/34237-3007" element={<AddPolicyModal />} />
      <Route path="/screen/34237-3169" element={<ViewPolicyModal />} />
    </Routes>
  )
}

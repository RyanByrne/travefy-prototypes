import { Routes, Route, Navigate } from 'react-router-dom'
import { TravelerView } from './TravelerView'
import { AdvisorView } from './AdvisorView'
import { StatesView } from './StatesView'

export function LinkInsurance() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="traveler" replace />} />
      <Route path="traveler" element={<TravelerView />} />
      <Route path="advisor" element={<AdvisorView />} />
      <Route path="states" element={<StatesView />} />
    </Routes>
  )
}

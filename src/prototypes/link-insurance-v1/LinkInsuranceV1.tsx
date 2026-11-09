import { Routes, Route, Navigate } from 'react-router-dom'
import './theme.css'

import Screen34160_3830 from './screens-figma/34160-3830'
import Screen34227_79415 from './screens-figma/34227-79415'
import Screen34227_79234 from './screens-figma/34227-79234'
import Screen34227_79155 from './screens-figma/34227-79155'
import Screen34227_79452 from './screens-figma/34227-79452'
import Screen34227_79473 from './screens-figma/34227-79473'
import Screen34227_79314 from './screens-figma/34227-79314'
import Screen34245_3118 from './screens-figma/34245-3118'
import Screen34227_79275 from './screens-figma/34227-79275'
import Screen34227_78641 from './screens-figma/34227-78641'
import Screen34233_2724 from './screens-figma/34233-2724'
import Screen34227_78843 from './screens-figma/34227-78843'
import Screen34227_78999 from './screens-figma/34227-78999'
import Screen34237_2862 from './screens-figma/34237-2862'
import Screen34237_3007 from './screens-figma/34237-3007'
import Screen34237_3169 from './screens-figma/34237-3169'

export function LinkInsuranceV1() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/screen/34227-79415" replace />} />
      
      <Route path="/screen/34160-3830" element={<Screen34160_3830 />} />
      <Route path="/screen/34227-79415" element={<Screen34227_79415 />} />
      <Route path="/screen/34227-79234" element={<Screen34227_79234 />} />
      <Route path="/screen/34227-79155" element={<Screen34227_79155 />} />
      <Route path="/screen/34227-79452" element={<Screen34227_79452 />} />
      <Route path="/screen/34227-79473" element={<Screen34227_79473 />} />
      <Route path="/screen/34227-79314" element={<Screen34227_79314 />} />
      <Route path="/screen/34245-3118" element={<Screen34245_3118 />} />
      <Route path="/screen/34227-79275" element={<Screen34227_79275 />} />
      
      <Route path="/screen/34227-78641" element={<Screen34227_78641 />} />
      <Route path="/screen/34233-2724" element={<Screen34233_2724 />} />
      <Route path="/screen/34227-78843" element={<Screen34227_78843 />} />
      
      <Route path="/screen/34227-78999" element={<Screen34227_78999 />} />
      <Route path="/screen/34237-2862" element={<Screen34237_2862 />} />
      <Route path="/screen/34237-3007" element={<Screen34237_3007 />} />
      <Route path="/screen/34237-3169" element={<Screen34237_3169 />} />
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'
import { PrototypeIndex } from './PrototypeIndex'
import { ExamplePrototype } from './prototypes/example-prototype/ExamplePrototype'
import { EmailMarketing } from './prototypes/email-marketing/EmailMarketing'
import { Trips } from './prototypes/trips/Trips'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrototypeIndex />} />
      <Route path="/example-prototype/*" element={<ExamplePrototype />} />
      <Route path="/email-marketing/*" element={<EmailMarketing />} />
      <Route path="/trips/*" element={<Trips />} />
    </Routes>
  )
}

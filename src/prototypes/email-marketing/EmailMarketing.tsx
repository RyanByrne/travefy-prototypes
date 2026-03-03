import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { AppNav } from './AppNav'
import { CampaignEditor } from './CampaignEditor'
import { CampaignsTab } from './CampaignsTab'
import { ContactsTab } from './ContactsTab'
import { ListsTab } from './ListsTab'

const TABS = [
  { label: 'Contacts', path: 'contacts' },
  { label: 'Lists', path: 'lists' },
  { label: 'Campaigns', path: 'campaigns' },
] as const

function ContactsSection() {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Tab nav */}
      <div className="bg-white border-b border-travefy-gray-200 px-5">
        <div className="flex gap-0">
          {TABS.map((tab) => (
            <NavLink
              key={tab.path}
              to={`/email-marketing/${tab.path}`}
              className={({ isActive }) =>
                isActive
                  ? 'px-4 py-3 text-sm font-semibold text-travefy-blue border-b-2 border-travefy-blue -mb-px'
                  : 'px-4 py-3 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 border-b-2 border-transparent -mb-px transition-colors'
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<Navigate to="/email-marketing/contacts" replace />} />
          <Route path="contacts" element={<ContactsTab />} />
          <Route path="lists" element={<ListsTab />} />
          <Route path="campaigns" element={<CampaignsTab />} />
        </Routes>
      </div>
    </div>
  )
}

export function EmailMarketing() {
  return (
    <PrototypeShell title="Email Marketing" fullBleed>
      <div className="flex flex-col flex-1 min-h-0 bg-travefy-gray-50">
        <AppNav />
        <Routes>
          <Route path="campaigns/new" element={<CampaignEditor />} />
          <Route path="campaigns/:id/edit" element={<CampaignEditor />} />
          <Route path="*" element={<ContactsSection />} />
        </Routes>
      </div>
    </PrototypeShell>
  )
}

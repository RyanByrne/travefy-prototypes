import { createContext, useContext, useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { AppNav } from '../../shared/components'
import { CampaignEditor } from './CampaignEditor'
import { CampaignEditorRichText } from './CampaignEditorRichText'
import { CampaignReport } from './CampaignReport'
import { CampaignsTab } from './CampaignsTab'
import { ContactsTab } from './ContactsTab'

type EditorMode = 'blocks' | 'richtext'
const EditorModeContext = createContext<{ mode: EditorMode; setMode: (m: EditorMode) => void }>({
  mode: 'richtext',
  setMode: () => {},
})
export const useEditorMode = () => useContext(EditorModeContext)

const TABS = [
  { label: 'Contacts', path: 'contacts' },
  { label: 'Campaigns', path: 'campaigns' },
] as const

function EditorModeSwitcher() {
  const { mode, setMode } = useEditorMode()
  return (
    <div className="flex items-center gap-1 bg-travefy-gray-100 rounded-md p-0.5">
      <button
        onClick={() => setMode('richtext')}
        className={
          mode === 'richtext'
            ? 'px-3 py-1 text-xs font-semibold text-white bg-travefy-blue rounded transition-colors'
            : 'px-3 py-1 text-xs font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 rounded transition-colors'
        }
      >
        Rich Text
      </button>
      <button
        onClick={() => setMode('blocks')}
        className={
          mode === 'blocks'
            ? 'px-3 py-1 text-xs font-semibold text-white bg-travefy-blue rounded transition-colors'
            : 'px-3 py-1 text-xs font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 rounded transition-colors'
        }
      >
        Block Builder
      </button>
    </div>
  )
}

function EditorSwitcher() {
  const { mode } = useEditorMode()
  return (
    <div className="relative flex flex-col flex-1 min-h-0">
      <div className="absolute bottom-1/2 right-4 z-10">
        <EditorModeSwitcher />
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        {mode === 'blocks' ? <CampaignEditor /> : <CampaignEditorRichText />}
      </div>
    </div>
  )
}

function ContactsSection() {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Tab nav */}
      <div className="px-5 pt-4 pb-1">
        <div className="flex gap-2 items-center">
          {TABS.map((tab) => (
            <NavLink
              key={tab.path}
              to={`/email-marketing/${tab.path}`}
              className={({ isActive }) =>
                isActive
                  ? 'px-4 py-2 text-sm font-semibold text-white bg-travefy-blue rounded-md'
                  : 'px-4 py-2 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 rounded-md transition-colors'
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
          <Route path="campaigns" element={<CampaignsTab />} />
        </Routes>
      </div>
    </div>
  )
}

export function EmailMarketing() {
  const [mode, setMode] = useState<EditorMode>('richtext')

  return (
    <EditorModeContext.Provider value={{ mode, setMode }}>
      <PrototypeShell title="Email Marketing" fullBleed>
        <div className="flex flex-col flex-1 min-h-0 bg-travefy-gray-50">
          <AppNav />
          <Routes>
            <Route path="campaigns/new" element={<EditorSwitcher />} />
            <Route path="campaigns/:id/report" element={<CampaignReport />} />
            <Route path="campaigns/:id/edit" element={<EditorSwitcher />} />
            <Route path="*" element={<ContactsSection />} />
          </Routes>
        </div>
      </PrototypeShell>
    </EditorModeContext.Provider>
  )
}

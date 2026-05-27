import { clsx } from 'clsx'
import { ChevronDown, ChevronUp, Filter, MoreHorizontal, Plus, Search, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { AccountIcon, AppNav, Badge, SignOutIcon, Toast, type NavNode, type ToastMessage, type UserMenuItem } from '../../shared/components'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { CampaignResultsDrawer } from './CampaignResultsDrawer'
import { CampaignWizard, type LaunchResult } from './CampaignWizard'
import { campaigns as initialCampaigns, type Campaign, type CampaignStatus } from './data'

// ── Top nav (Compass IA) ────────────────────────────────────────────────────────

const NAV_MENU: NavNode[] = [
  { type: 'link', label: 'Compass' },
  { type: 'link', label: 'Trips' },
  {
    type: 'mega',
    label: 'Business Hub',
    columns: [
      { heading: 'CRM', items: [{ label: 'Contacts' }, { label: 'Tasks & Automations' }, { label: 'Bookings' }, { label: 'Fees' }] },
      { heading: 'Marketing', items: [{ label: 'Campaigns' }, { label: 'Pages' }, { label: 'Profile' }] },
      { heading: 'Agency', items: [{ label: 'Team' }, { label: 'Commission Splits' }, { label: 'Suppliers' }] },
    ],
  },
  {
    type: 'dropdown',
    label: 'Resources',
    groups: [
      [{ label: 'Template Library' }, { label: 'Forms' }, { label: 'Template Marketplace' }],
      [{ label: 'Support Center' }, { label: 'Education' }, { label: 'Schedule Training', highlight: true }],
    ],
  },
]

const USER_MENU: UserMenuItem[] = [
  { label: 'Account', icon: <AccountIcon className="w-4 h-4 text-travefy-gray-500" /> },
  { label: 'Sign Out', icon: <SignOutIcon className="w-4 h-4 text-travefy-gray-500" /> },
]

// ── Status badge ────────────────────────────────────────────────────────────────

const statusConfig: Record<CampaignStatus, { label: string; variant: 'success' | 'warning' | 'primary' }> = {
  sent:      { label: 'Sent',      variant: 'success' },
  active:    { label: 'Active',    variant: 'success' },
  scheduled: { label: 'Scheduled', variant: 'warning' },
  draft:     { label: 'Draft',     variant: 'primary' },
}

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'name' | 'owner' | 'recipients' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'status'
type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="inline-flex flex-col -space-y-1 ml-1">
      <ChevronUp className={clsx('w-3 h-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('w-3 h-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

function SortableHeader({ label, sortKey, current, dir, onSort, align = 'left' }: { label: string; sortKey: SortKey; current: SortKey; dir: SortDir; onSort: (k: SortKey) => void; align?: 'left' | 'right' }) {
  return (
    <th className={clsx('px-4 py-3', align === 'right' ? 'text-right' : 'text-left')}>
      <button onClick={() => onSort(sortKey)} className={clsx('inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900', align === 'right' && 'flex-row-reverse')}>
        {label}
        <SortIndicator active={current === sortKey} dir={dir} />
      </button>
    </th>
  )
}

// ── Row menu ────────────────────────────────────────────────────────────────────

function RowMenu({ onViewSummary, onDuplicate, onDelete }: { onViewSummary: () => void; onDuplicate: () => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className="relative" ref={ref}>
      <button onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }} className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors" aria-label="Campaign actions">
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-40 text-sm">
            <button onClick={() => { onViewSummary(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">View Summary</button>
            <button onClick={() => { onDuplicate(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">Duplicate</button>
            <button onClick={() => { onDelete(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-danger-bg text-travefy-danger">Delete</button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function MarketingCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns)
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [wizardOpen, setWizardOpen] = useState(false)
  const [resultsCampaign, setResultsCampaign] = useState<Campaign | null>(null)
  const [toast, setToast] = useState<ToastMessage | null>(null)

  const showToast = (text: string) => setToast({ id: Date.now(), text })

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const handleNavSelect = (label: string) => showToast(label)

  const duplicateCampaign = (c: Campaign) => {
    const copy: Campaign = {
      ...c,
      id: `c-${Date.now()}`,
      name: `${c.name} (Copy)`,
      status: 'draft',
      delivered: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0, spamReports: 0,
      sentAt: undefined, scheduledFor: undefined,
    }
    setCampaigns((cs) => [copy, ...cs])
    showToast(`Duplicated "${c.name}"`)
  }

  const deleteCampaign = (id: string, name: string) => {
    setCampaigns((cs) => cs.filter((x) => x.id !== id))
    setResultsCampaign((cur) => (cur?.id === id ? null : cur))
    showToast(`Deleted "${name}"`)
  }

  const handleLaunch = (r: LaunchResult) => {
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const newCampaign: Campaign = {
      id: `c-${Date.now()}`,
      name: r.name,
      owner: 'Kim Anderson',
      recipients: r.recipients,
      delivered: 0,
      opened: 0,
      clicked: 0,
      bounced: 0,
      unsubscribed: 0,
      spamReports: 0,
      status: r.scheduled ? 'scheduled' : 'active',
      ...(r.scheduled ? { scheduledFor: r.scheduledFor } : { sentAt: today }),
    }
    setCampaigns((c) => [newCampaign, ...c])
    showToast(r.scheduled ? `"${r.name}" scheduled` : `"${r.name}" launched to ${r.recipients.toLocaleString()} contacts`)
  }

  const filtered = campaigns.filter((c) => {
    const q = search.toLowerCase()
    if (!q) return true
    return [c.name, c.owner].some((f) => f.toLowerCase().includes(q))
  })

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    const av = a[sortKey] as string | number
    const bv = b[sortKey] as string | number
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir
    return String(av).localeCompare(String(bv)) * dir
  })

  return (
    <PrototypeShell title="Marketing Campaigns" fullBleed>
      <div className="flex flex-col flex-1 min-h-0 bg-travefy-gray-50">
        <AppNav
          menu={NAV_MENU}
          activeItem="Business Hub"
          userName="Kim Anderson"
          userMenu={USER_MENU}
          onNavSelect={handleNavSelect}
        />

        <div className="flex-1 overflow-auto">
          <div className="px-6 py-5">
            {/* Toolbar */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <button
                onClick={() => setWizardOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" />
                New Campaign
              </button>

              <div className="relative flex-1 min-w-[280px] max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
                <input
                  type="text"
                  placeholder="Search campaigns"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-9 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-600" aria-label="Clear search">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button onClick={() => showToast(`${sorted.length} campaigns match`)} className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Search</button>
              <span className="text-sm text-travefy-gray-600">Showing {sorted.length} campaigns</span>

              <div className="ml-auto flex items-center gap-3">
                <button onClick={() => showToast('Filters are mocked for this prototype')} className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filters (0)
                </button>
                <button onClick={() => showToast('More actions (mocked)')} className="p-2 border border-travefy-gray-200 rounded bg-white text-travefy-gray-500 hover:bg-travefy-gray-50 hover:text-travefy-gray-700 transition-colors" aria-label="More">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto overflow-y-visible">
                <table className="w-full text-sm">
                  <thead className="bg-travefy-gray-50">
                    <tr className="border-b border-travefy-gray-100">
                      <th className="w-10 px-4 py-3"><input type="checkbox" className="rounded border-travefy-gray-300 text-travefy-blue" /></th>
                      <SortableHeader label="Campaign Name" sortKey="name" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Owner" sortKey="owner" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Recipients" sortKey="recipients" current={sortKey} dir={sortDir} onSort={onSort} align="right" />
                      <SortableHeader label="Delivered" sortKey="delivered" current={sortKey} dir={sortDir} onSort={onSort} align="right" />
                      <SortableHeader label="Opened" sortKey="opened" current={sortKey} dir={sortDir} onSort={onSort} align="right" />
                      <SortableHeader label="Clicked" sortKey="clicked" current={sortKey} dir={sortDir} onSort={onSort} align="right" />
                      <SortableHeader label="Bounced" sortKey="bounced" current={sortKey} dir={sortDir} onSort={onSort} align="right" />
                      <SortableHeader label="Status" sortKey="status" current={sortKey} dir={sortDir} onSort={onSort} />
                      <th className="w-12 px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((c) => {
                      return (
                        <tr
                          key={c.id}
                          onClick={() => setResultsCampaign(c)}
                          className="border-b border-travefy-gray-100 transition-colors cursor-pointer hover:bg-travefy-gray-50"
                        >
                          <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                            <input type="checkbox" className="rounded border-travefy-gray-300 text-travefy-blue" />
                          </td>
                          <td className="px-4 py-3 font-medium text-travefy-navy">{c.name}</td>
                          <td className="px-4 py-3 text-travefy-gray-700">{c.owner}</td>
                          <td className="px-4 py-3 text-right text-travefy-gray-700">{c.recipients.toLocaleString()}</td>
                          <td className="px-4 py-3 text-right text-travefy-gray-700">{c.delivered}</td>
                          <td className="px-4 py-3 text-right text-travefy-gray-700">{c.opened}</td>
                          <td className="px-4 py-3 text-right text-travefy-gray-700">{c.clicked}</td>
                          <td className="px-4 py-3 text-right text-travefy-gray-700">{c.bounced}</td>
                          <td className="px-4 py-3">
                            <Badge variant={statusConfig[c.status].variant} size="sm">{statusConfig[c.status].label}</Badge>
                          </td>
                          <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                            <RowMenu
                              onViewSummary={() => setResultsCampaign(c)}
                              onDuplicate={() => duplicateCampaign(c)}
                              onDelete={() => deleteCampaign(c.id, c.name)}
                            />
                          </td>
                        </tr>
                      )
                    })}
                    {sorted.length === 0 && (
                      <tr>
                        <td colSpan={10} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">No campaigns match your search.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CampaignWizard
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        onLaunch={handleLaunch}
        onToast={showToast}
      />
      <CampaignResultsDrawer
        open={!!resultsCampaign}
        onClose={() => setResultsCampaign(null)}
        campaign={resultsCampaign}
        onViewEmail={() => showToast('Email preview (mocked)')}
        onDuplicate={() => { if (resultsCampaign) { duplicateCampaign(resultsCampaign); setResultsCampaign(null) } }}
        onEdit={() => showToast('Edit campaign (mocked)')}
        onExport={() => showToast('Results exported (mocked)')}
        onDelete={() => { if (resultsCampaign) deleteCampaign(resultsCampaign.id, resultsCampaign.name) }}
      />
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </PrototypeShell>
  )
}

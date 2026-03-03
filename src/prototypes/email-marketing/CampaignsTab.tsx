import { clsx } from 'clsx'
import {
  BarChart2,
  ChevronDown,
  ChevronUp,
  Filter,
  Mail,
  MoreHorizontal,
  MousePointerClick,
  Plus,
  Search,
  Send,
  TrendingDown,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from '../../shared/components'
import { campaigns, type Campaign, type CampaignStatus } from './data'

// ── Stat card ─────────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  trend: string
  up: boolean
}

function StatCard({ icon, label, value, trend, up }: StatCardProps) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-travefy-gray-500">
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <div>
        <p className="text-3xl font-semibold text-travefy-navy">{value}</p>
        <p className={clsx('flex items-center gap-1 text-xs mt-1', up ? 'text-travefy-success' : 'text-travefy-danger')}>
          {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend}
        </p>
      </div>
    </div>
  )
}

// ── Status badge ──────────────────────────────────────────────────────────────

const statusConfig: Record<CampaignStatus, { label: string; variant: 'success' | 'warning' | 'primary' }> = {
  sent:      { label: 'Sent',      variant: 'success' },
  scheduled: { label: 'Scheduled', variant: 'warning' },
  draft:     { label: 'Draft',     variant: 'primary' },
}

// ── Row context menu ──────────────────────────────────────────────────────────

function RowMenu({ campaign, onEdit }: { campaign: Campaign; onEdit: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="p-1.5 rounded hover:bg-travefy-gray-100 text-travefy-gray-400 hover:text-travefy-gray-700 transition-colors"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-8 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-40 text-sm">
            <button onClick={() => { onEdit(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">Edit</button>
            <button onClick={() => setOpen(false)} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">Duplicate</button>
            {campaign.status === 'sent' && (
              <button onClick={() => setOpen(false)} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">View Report</button>
            )}
            <div className="border-t border-travefy-gray-100 my-1" />
            <button onClick={() => setOpen(false)} className="w-full px-3 py-2 text-left hover:bg-travefy-danger-bg text-travefy-danger">Delete</button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'name' | 'owner' | 'recipients' | 'status'
type SortDir = 'asc' | 'desc'

function SortIcon({ col, active, dir }: { col: string; active: string; dir: SortDir }) {
  if (col !== active) return <ChevronDown className="w-3 h-3 opacity-30" />
  return dir === 'asc' ? <ChevronUp className="w-3 h-3 text-travefy-blue" /> : <ChevronDown className="w-3 h-3 text-travefy-blue" />
}

// ── Main component ────────────────────────────────────────────────────────────

export function CampaignsTab() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(key); setSortDir('asc') }
  }

  const filtered = campaigns
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.owner.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1
      if (sortKey === 'name') return a.name.localeCompare(b.name) * dir
      if (sortKey === 'owner') return a.owner.localeCompare(b.owner) * dir
      if (sortKey === 'recipients') return (a.recipients - b.recipients) * dir
      if (sortKey === 'status') return a.status.localeCompare(b.status) * dir
      return 0
    })

  const allSelected = filtered.length > 0 && filtered.every((c) => selected.has(c.id))
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(filtered.map((c) => c.id)))
  const toggleRow = (id: string) => setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })

  const pct = (n: number, d: number) => d === 0 ? '—' : `${((n / d) * 100).toFixed(1)}%`

  // Aggregate stats
  const sentCampaigns = campaigns.filter((c) => c.status === 'sent')
  const totalSent = sentCampaigns.reduce((s, c) => s + c.delivered, 0)
  const totalOpened = sentCampaigns.reduce((s, c) => s + c.opened, 0)
  const totalClicked = sentCampaigns.reduce((s, c) => s + c.clicked, 0)
  const avgOpenRate = totalSent > 0 ? ((totalOpened / totalSent) * 100).toFixed(1) + '%' : '—'
  const avgClickRate = totalSent > 0 ? ((totalClicked / totalSent) * 100).toFixed(1) + '%' : '—'

  return (
    <div className="p-5 space-y-5">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Mail className="w-4 h-4" />} label="Total Campaigns" value={String(campaigns.length)} trend="+3 this month" up />
        <StatCard icon={<Send className="w-4 h-4" />} label="Emails Sent" value={totalSent.toLocaleString()} trend="+12% vs last month" up />
        <StatCard icon={<BarChart2 className="w-4 h-4" />} label="Avg Open Rate" value={avgOpenRate} trend="+2.3% vs last month" up />
        <StatCard icon={<MousePointerClick className="w-4 h-4" />} label="Avg Click Rate" value={avgClickRate} trend="-0.4% vs last month" up={false} />
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-travefy-gray-200 rounded-lg">
        <div className="flex items-center gap-3 p-4 border-b border-travefy-gray-100">
          <button
            onClick={() => navigate('/email-marketing/campaigns/new')}
            className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            New Campaign
          </button>

          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-travefy-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <button className="px-3 py-2 border border-travefy-gray-300 rounded text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50 transition-colors">
              Search
            </button>
          </div>

          <span className="text-sm text-travefy-gray-500 flex-1">
            {search ? `${filtered.length} of ${campaigns.length} campaigns` : `Showing ${campaigns.length} campaigns`}
          </span>

          <div className="flex items-center gap-2 ml-auto">
            <button className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-300 rounded text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filters (0)
            </button>
            <button className="p-2 border border-travefy-gray-300 rounded text-travefy-gray-500 hover:bg-travefy-gray-50 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bulk action bar */}
        {selected.size > 0 && (
          <div className="flex items-center gap-3 px-4 py-2.5 bg-travefy-blue-light border-b border-travefy-blue/20 text-sm">
            <span className="font-semibold text-travefy-blue">{selected.size} selected</span>
            <div className="flex gap-2 ml-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-blue/30 text-travefy-blue font-semibold hover:bg-travefy-blue/10 transition-colors">
                <Users className="w-3.5 h-3.5" /> Export
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-danger-bg text-travefy-danger font-semibold hover:bg-travefy-danger-bg transition-colors"
                onClick={() => setSelected(new Set())}>
                Delete
              </button>
            </div>
            <button onClick={() => setSelected(new Set())} className="ml-auto text-travefy-gray-500 hover:text-travefy-gray-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-travefy-gray-100">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} className="rounded border-travefy-gray-300 text-travefy-blue" />
                </th>
                {[
                  { key: 'name', label: 'Campaign Name' },
                  { key: 'owner', label: 'Owner' },
                ].map(({ key, label }) => (
                  <th key={key} className="px-4 py-3 text-left">
                    <button onClick={() => toggleSort(key as SortKey)} className="flex items-center gap-1 text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900">
                      {label} <SortIcon col={key} active={sortKey} dir={sortDir} />
                    </button>
                  </th>
                ))}
                {['Recipients', 'Delivered', 'Opened', 'Clicked', 'Bounced', 'Unsub'].map((col) => (
                  <th key={col} className="px-4 py-3 text-right text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">{col}</th>
                ))}
                <th className="px-4 py-3 text-left">
                  <button onClick={() => toggleSort('status')} className="flex items-center gap-1 text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900">
                    Status <SortIcon col="status" active={sortKey} dir={sortDir} />
                  </button>
                </th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => {
                const isSelected = selected.has(c.id)
                const { variant } = statusConfig[c.status]
                return (
                  <tr
                    key={c.id}
                    onClick={() => navigate(`/email-marketing/campaigns/${c.id}/edit`)}
                    className={clsx(
                      'border-b border-travefy-gray-100 cursor-pointer transition-colors',
                      isSelected ? 'bg-travefy-blue-light' : 'hover:bg-travefy-gray-50',
                    )}
                  >
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" checked={isSelected} onChange={() => toggleRow(c.id)} className="rounded border-travefy-gray-300 text-travefy-blue" />
                    </td>
                    <td className="px-4 py-3 font-medium text-travefy-navy max-w-xs">
                      <div className="truncate">{c.name}</div>
                      {c.status === 'scheduled' && c.scheduledFor && (
                        <div className="text-xs text-travefy-gray-500 mt-0.5">Scheduled for {c.scheduledFor}</div>
                      )}
                      {c.status === 'sent' && c.sentAt && (
                        <div className="text-xs text-travefy-gray-500 mt-0.5">Sent {c.sentAt}</div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-travefy-gray-700">{c.owner}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{c.recipients > 0 ? c.recipients.toLocaleString() : '—'}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{c.delivered > 0 ? c.delivered.toLocaleString() : '—'}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{c.opened > 0 ? `${c.opened} (${pct(c.opened, c.delivered)})` : '—'}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{c.clicked > 0 ? c.clicked : '—'}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{c.bounced > 0 ? c.bounced : '—'}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{c.unsubscribed > 0 ? c.unsubscribed : '—'}</td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <Badge variant={variant} size="sm">{statusConfig[c.status].label}</Badge>
                    </td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <RowMenu campaign={c} onEdit={() => navigate(`/email-marketing/campaigns/${c.id}/edit`)} />
                    </td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={11} className="px-4 py-12 text-center text-travefy-gray-500">
                    <Mail className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="font-semibold">No campaigns found</p>
                    <p className="text-xs mt-1">Try adjusting your search or create a new campaign.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

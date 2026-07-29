import { clsx } from 'clsx'
import { Building2, ChevronDown, ChevronUp, ClipboardCheck, MoreHorizontal, Plus, Search, TrendingUp, User, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AccountIcon, AppNav, Avatar, SignOutIcon, Toast, type NavNode, type ToastMessage, type UserMenuItem } from '../../shared/components'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { SplitDrawer, TeamMemberDrawer } from './Drawers'
import { fmtMoneyShort, formatSplit, initialSplits, initialTeam, tierProgressPercent, type CommissionSplit, type TeamMember } from './data'

// ── Nav config (Compass IA) ────────────────────────────────────────────────────

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

// ── Sort helpers ───────────────────────────────────────────────────────────────

type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="inline-flex flex-col -space-y-1 ml-1">
      <ChevronUp className={clsx('w-3 h-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('w-3 h-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

// ── Row menu (Edit / Duplicate / Delete) ──────────────────────────────────────

function RowMenu({ onEdit, onDuplicate, onDelete }: { onEdit: () => void; onDuplicate?: () => void; onDelete?: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }} className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors" aria-label="Actions">
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-36 text-sm">
            <button onClick={() => { onEdit(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">Edit</button>
            {onDuplicate && (
              <button onClick={() => { onDuplicate(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700">Duplicate</button>
            )}
            {onDelete && (
              <button onClick={() => { onDelete(); setOpen(false) }} className="w-full px-3 py-2 text-left hover:bg-travefy-danger-bg text-travefy-danger">Delete</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ── Empty state ────────────────────────────────────────────────────────────────

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg flex-1 flex items-center justify-center py-20 px-6">
      <div className="text-center max-w-xl">
        <div className="w-20 h-20 mx-auto rounded-full bg-travefy-blue-light flex items-center justify-center mb-5">
          <ClipboardCheck className="w-10 h-10 text-travefy-blue" />
        </div>
        <h3 className="text-base font-bold text-travefy-navy">Start building your commission split list</h3>
        <p className="text-sm italic text-travefy-gray-600 mt-3 leading-relaxed">
          Set up your commission splits to manage how earnings are divided. Define different levels, assign percentages,
          and customize terms to fit your agency's needs. This helps keep your commission structure clear and organized.
        </p>
        <button
          onClick={onCreate}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          Commission Split
        </button>
      </div>
    </div>
  )
}

// ── Splits view ────────────────────────────────────────────────────────────────

function SplitsView({
  splits, search, setSearch, sortBy, sortDir, onSort, onNew, onEdit, onDuplicate, onDelete,
}: {
  splits: CommissionSplit[]
  search: string
  setSearch: (v: string) => void
  sortBy: 'name' | 'description' | 'percentage'
  sortDir: SortDir
  onSort: (k: 'name' | 'description' | 'percentage') => void
  onNew: () => void
  onEdit: (s: CommissionSplit) => void
  onDuplicate: (s: CommissionSplit) => void
  onDelete: (s: CommissionSplit) => void
}) {
  if (splits.length === 0) {
    return <EmptyState onCreate={onNew} />
  }

  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-travefy-gray-100">
        <button onClick={onNew} className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0">
          <Plus className="w-4 h-4" />
          New Commission Split
        </button>
        <div className="relative flex-1 min-w-[260px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for comission split in list"
            className="w-full pl-9 pr-9 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-600" aria-label="Clear search">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <button className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Search</button>
        <span className="text-sm text-travefy-gray-600">{splits.length} Commission Splits</span>
        <div className="ml-auto">
          <button className="p-2 border border-travefy-gray-200 rounded bg-white text-travefy-gray-500 hover:bg-travefy-gray-50 hover:text-travefy-gray-700 transition-colors" aria-label="More">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto overflow-y-visible">
        <table className="w-full text-sm">
          <thead className="bg-travefy-gray-50">
            <tr className="border-b border-travefy-gray-100">
              <th className="w-10 px-4 py-3"><input type="checkbox" className="rounded border-travefy-gray-300 text-travefy-blue" /></th>
              <th className="px-4 py-3 text-left">
                <button onClick={() => onSort('name')} className="inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900">
                  Name
                  <SortIndicator active={sortBy === 'name'} dir={sortDir} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button onClick={() => onSort('description')} className="inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900">
                  Description
                  <span className="ml-1.5 w-3.5 h-3.5 rounded-full bg-travefy-gray-400 text-white text-[8px] flex items-center justify-center">i</span>
                  <SortIndicator active={sortBy === 'description'} dir={sortDir} />
                </button>
              </th>
              <th className="px-4 py-3 text-right">
                <button onClick={() => onSort('percentage')} className="inline-flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900">
                  Split
                  <SortIndicator active={sortBy === 'percentage'} dir={sortDir} />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Applies to</th>
              <th className="w-12 px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {splits.map((s) => (
              <tr
                key={s.id}
                onClick={() => onEdit(s)}
                className="border-b border-travefy-gray-100 last:border-0 cursor-pointer hover:bg-travefy-gray-50 transition-colors"
              >
                <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" className="rounded border-travefy-gray-300 text-travefy-blue" />
                </td>
                <td className="px-4 py-3 font-medium text-travefy-navy">{s.name}</td>
                <td className="px-4 py-3 text-travefy-gray-700">{s.description}</td>
                <td className="px-4 py-3 text-right text-travefy-gray-700 font-medium">{s.percentage}%</td>
                <td className="px-4 py-3 text-travefy-gray-700">
                  {s.supplier ? (
                    <span className="inline-flex items-center rounded border border-travefy-blue/40 bg-travefy-blue-light px-2 py-0.5 text-[11px] font-semibold text-travefy-blue">{s.supplier}</span>
                  ) : (
                    <span className="text-travefy-gray-400">All suppliers</span>
                  )}
                </td>
                <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                  <RowMenu onEdit={() => onEdit(s)} onDuplicate={() => onDuplicate(s)} onDelete={() => onDelete(s)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Team view ──────────────────────────────────────────────────────────────────

function TeamView({
  team, splits, search, setSearch, onNew, onEdit, onRemove, onToast,
}: {
  team: TeamMember[]
  splits: CommissionSplit[]
  search: string
  setSearch: (v: string) => void
  onNew: () => void
  onEdit: (m: TeamMember) => void
  onRemove: (m: TeamMember) => void
  onToast: (text: string) => void
}) {
  const splitById = (id: string) => splits.find((s) => s.id === id)

  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-travefy-gray-100">
        <button onClick={onNew} className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0">
          <Plus className="w-4 h-4" />
          New Team Member
        </button>
        <div className="relative flex-1 min-w-[260px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for team member in list"
            className="w-full pl-9 pr-9 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-600" aria-label="Clear search">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <button onClick={() => onToast(`${team.length} team member${team.length === 1 ? '' : 's'}`)} className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Search</button>
        <span className="text-sm text-travefy-gray-600">{team.length} Team Members</span>
        <div className="ml-auto">
          <button onClick={() => onToast('More actions (mocked)')} className="p-2 border border-travefy-gray-200 rounded bg-white text-travefy-gray-500 hover:bg-travefy-gray-50 hover:text-travefy-gray-700 transition-colors" aria-label="More">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-visible">
        <table className="w-full text-sm">
          <thead className="bg-travefy-gray-50">
            <tr className="border-b border-travefy-gray-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Type</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Email</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Role</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Commission Split</th>
              <th className="w-12 px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {team.map((m) => (
              <tr
                key={m.id}
                onClick={() => onEdit(m)}
                className="border-b border-travefy-gray-100 last:border-0 cursor-pointer hover:bg-travefy-gray-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {m.entityType === 'Agency' ? (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-travefy-navy/10 text-travefy-navy">
                        <Building2 className="h-4 w-4" />
                      </span>
                    ) : (
                      <Avatar name={m.name} size="sm" />
                    )}
                    <span className="font-medium text-travefy-navy">{m.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1.5 text-travefy-gray-700">
                    {m.entityType === 'Agency' ? <Building2 className="h-3.5 w-3.5 text-travefy-gray-500" /> : <User className="h-3.5 w-3.5 text-travefy-gray-500" />}
                    {m.entityType}
                  </span>
                </td>
                <td className="px-4 py-3 text-travefy-gray-700">{m.email}</td>
                <td className="px-4 py-3 text-travefy-gray-700">{m.status}</td>
                <td className="px-4 py-3 text-travefy-gray-700">{m.role}</td>
                <td className="px-4 py-3 text-travefy-gray-700">
                  {(() => {
                    const active = (m.assignedSplits ?? []).filter((a) => a.active)
                    if (active.length === 0) return <span className="text-travefy-gray-400">No active split</span>
                    return (
                      <div className="space-y-0.5">
                        {active.map((a) => {
                          const s = splitById(a.splitId)
                          return (
                            <span key={a.id} className="block">
                              {formatSplit(s)}
                              {s?.supplier && <span className="text-travefy-gray-500"> · {s.supplier}</span>}
                            </span>
                          )
                        })}
                      </div>
                    )
                  })()}
                  {m.canOverrideSplit && (
                    <span
                      title="This advisor can override their split per booking"
                      className="mt-1 inline-flex items-center px-2 py-0.5 rounded border text-[11px] font-semibold bg-travefy-blue-light text-travefy-blue border-travefy-blue/40"
                    >
                      Can override
                    </span>
                  )}
                  {m.tierProgression && (() => {
                    const prog = m.tierProgression!
                    const next = splits.find((s) => s.id === prog.nextSplitId)
                    const pct = tierProgressPercent(prog)
                    return (
                      <span className="mt-1.5 block max-w-[13rem]">
                        <span className="flex items-center gap-1 text-xs font-medium text-travefy-blue">
                          <TrendingUp className="h-3 w-3" />
                          → {next?.name ?? 'next tier'} at {fmtMoneyShort(prog.targetSales)} ({pct}%)
                        </span>
                        <span className="mt-1 block h-1 w-full overflow-hidden rounded-full bg-travefy-gray-100">
                          <span className="block h-full rounded-full bg-travefy-blue" style={{ width: `${pct}%` }} />
                        </span>
                      </span>
                    )
                  })()}
                </td>
                <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                  <RowMenu onEdit={() => onEdit(m)} onDelete={() => onRemove(m)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

type View = 'splits' | 'team'

export function CommissionSplits() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  // Arrive on the Team view when linked from the bookings-agency nav (?view=team).
  const [view, setView] = useState<View>(searchParams.get('view') === 'team' ? 'team' : 'splits')
  const [splits, setSplits] = useState<CommissionSplit[]>(initialSplits)
  const [team, setTeam] = useState<TeamMember[]>(initialTeam)
  const [splitSearch, setSplitSearch] = useState('')
  const [teamSearch, setTeamSearch] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'description' | 'percentage'>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [splitDrawer, setSplitDrawer] = useState<{ open: boolean; split: CommissionSplit | null }>({ open: false, split: null })
  const [teamDrawer, setTeamDrawer] = useState<{ open: boolean; member: TeamMember | null }>({ open: false, member: null })
  const [toast, setToast] = useState<ToastMessage | null>(null)

  const showToast = (text: string) => setToast({ id: Date.now(), text })

  const onSort = (k: 'name' | 'description' | 'percentage') => {
    if (sortBy === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortBy(k); setSortDir('asc') }
  }

  // Filter + sort splits
  const splitsFiltered = splits.filter((s) => {
    const q = splitSearch.toLowerCase()
    if (!q) return true
    return [s.name, s.description].some((f) => f.toLowerCase().includes(q))
  })
  const splitsSorted = [...splitsFiltered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    if (sortBy === 'percentage') return (a.percentage - b.percentage) * dir
    return String(a[sortBy]).localeCompare(String(b[sortBy])) * dir
  })

  const teamFiltered = team.filter((m) => {
    const q = teamSearch.toLowerCase()
    if (!q) return true
    return [m.name, m.email].some((f) => f.toLowerCase().includes(q))
  })

  // ── Nav handler — Agency menu navigates between Splits and Team;
  //    "Bookings" jumps over to the bookings-agency prototype.
  const handleNavSelect = (label: string) => {
    if (label === 'Commission Splits') { setView('splits'); showToast('Commission Splits') }
    else if (label === 'Team') { setView('team'); showToast('Team') }
    else if (label === 'Bookings') { navigate('/bookings-agency') }
    else showToast(label)
  }

  // ── Split CRUD
  const saveSplit = (next: CommissionSplit) => {
    setSplits((prev) => {
      const exists = prev.some((s) => s.id === next.id)
      return exists ? prev.map((s) => (s.id === next.id ? next : s)) : [...prev, next]
    })
    showToast(`Saved "${next.name}"`)
    setSplitDrawer({ open: false, split: null })
  }
  const duplicateSplit = (s: CommissionSplit) => {
    const copy: CommissionSplit = { ...s, id: `s-${Date.now()}`, name: `${s.name} (Copy)` }
    setSplits((prev) => [...prev, copy])
    showToast(`Duplicated "${s.name}"`)
  }
  const deleteSplit = (s: CommissionSplit) => {
    setSplits((prev) => prev.filter((x) => x.id !== s.id))
    showToast(`Deleted "${s.name}"`)
  }

  // ── Team CRUD
  const saveMember = (next: TeamMember) => {
    setTeam((prev) => prev.map((m) => (m.id === next.id ? next : m)))
    showToast(`Updated ${next.name}`)
    setTeamDrawer({ open: false, member: null })
  }
  // Applying a split change is its own action: persist but keep the drawer open
  // (and refresh its member) so the split sections update live.
  const applyMemberSplit = (next: TeamMember, message?: string) => {
    setTeam((prev) => prev.map((m) => (m.id === next.id ? next : m)))
    setTeamDrawer((d) => ({ ...d, member: next }))
    showToast(message ?? `Updated ${next.name}`)
  }
  const removeMember = (m: TeamMember) => {
    setTeam((prev) => prev.filter((x) => x.id !== m.id))
    showToast(`Removed ${m.name}`)
  }

  return (
    <PrototypeShell title="Commission Splits" fullBleed>
      <div className="flex flex-col flex-1 min-h-0 bg-travefy-gray-50">
        <AppNav
          menu={NAV_MENU}
          activeItem="Business Hub"
          userName="Kim Anderson"
          userMenu={USER_MENU}
          onNavSelect={handleNavSelect}
        />

        <div className="flex-1 overflow-auto">
          <div className="px-6 py-5 flex flex-col min-h-0">
            {view === 'splits' ? (
              <SplitsView
                splits={splitsSorted}
                search={splitSearch}
                setSearch={setSplitSearch}
                sortBy={sortBy}
                sortDir={sortDir}
                onSort={onSort}
                onNew={() => setSplitDrawer({ open: true, split: null })}
                onEdit={(s) => setSplitDrawer({ open: true, split: s })}
                onDuplicate={duplicateSplit}
                onDelete={deleteSplit}
              />
            ) : (
              <TeamView
                team={teamFiltered}
                splits={splits}
                search={teamSearch}
                setSearch={setTeamSearch}
                onNew={() => showToast('Invite new team member (mocked)')}
                onEdit={(m) => setTeamDrawer({ open: true, member: m })}
                onRemove={removeMember}
                onToast={showToast}
              />
            )}
          </div>
        </div>
      </div>

      <SplitDrawer
        open={splitDrawer.open}
        onClose={() => setSplitDrawer({ open: false, split: null })}
        split={splitDrawer.split}
        onSave={saveSplit}
      />

      <TeamMemberDrawer
        open={teamDrawer.open}
        onClose={() => setTeamDrawer({ open: false, member: null })}
        member={teamDrawer.member}
        splits={splits}
        onSave={saveMember}
        onApplySplit={applyMemberSplit}
      />

      <Toast message={toast} onDismiss={() => setToast(null)} />
    </PrototypeShell>
  )
}

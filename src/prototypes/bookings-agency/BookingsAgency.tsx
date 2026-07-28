import { clsx } from 'clsx'
import {
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  DollarSign,
  FileText,
  Filter,
  Info,
  Layers,
  LineChart,
  Pencil,
  Percent,
  Plus,
  Search,
  X,
} from 'lucide-react'
import { useRef, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountIcon, AppNav, Badge, SignOutIcon, Toast, type NavNode, type ToastMessage, type UserMenuItem } from '../../shared/components'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { bookings as initialBookings, locations, totals, type Booking, type ReconStatus } from './data'
import { AddBookingDetailsModal, type NewBookingDraft } from './AddBookingDetailsModal'
import { EditAdvisorBookingDrawer } from './EditAdvisorBookingDrawer'
import { IncomingTab } from './IncomingTab'
import { initialIncomingPayments, type IncomingPayment } from './incomingData'
import { PaymentDetailsDrawer } from './PaymentDetailsDrawer'
import { SearchBookingModal, type CandidateBooking } from './SearchBookingModal'
import { samplePaymentStatement, type MatchedAdvisorBooking, type StatementRow } from './statementData'
import { UnclaimedTab } from './UnclaimedTab'
import { initialUnclaimedItems, type UnclaimedItem } from './unclaimedData'
import { CommissionsTab } from './CommissionsTab'
import { initialCommissions, type CommissionLine, type SearchBookingCard } from './commissionsData'
import { NewCommissionDrawer } from './NewCommissionDrawer'
import { CommissionDrawer } from './CommissionDrawer'
import { PayoutsTab } from './PayoutsTab'
import { PayoutDrawer } from './PayoutDrawer'
import { ChecksPaidExportModal } from './ChecksPaidExportModal'
import { initialPayouts, newPayoutDraft, payoutDateRange, type Payout } from './payoutsData'
import { SearchForBookingFlyout } from './SearchForBookingFlyout'
import { ExportCommissionsModal, RemoveCommissionModal } from './ConfirmDialogs'

// ── Top nav (new Compass IA) ────────────────────────────────────────────────────

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

// ── Tabs ──────────────────────────────────────────────────────────────────────

const TABS = ['Bookings', 'Commissions', 'Unclaimed', 'Payments', 'Payouts'] as const
type Tab = (typeof TABS)[number]

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg px-6 py-5">
      <div className="w-8 h-8 rounded-full bg-travefy-gray-100 flex items-center justify-center text-travefy-gray-500 mb-3">{icon}</div>
      <p className="text-3xl font-semibold text-travefy-navy leading-none">{value}</p>
      <p className="text-sm text-travefy-gray-600 mt-2">{label}</p>
    </div>
  )
}

// ── Recon status badge ────────────────────────────────────────────────────────

const reconConfig: Record<ReconStatus, { label: string; variant: 'success' | 'warning' | 'primary' }> = {
  reconciled: { label: 'Reconciled', variant: 'success' },
  expected:   { label: 'Expected',   variant: 'warning' },
  disbursed:  { label: 'Disbursed',  variant: 'primary' },
}

// ── Row context menu ──────────────────────────────────────────────────────────

function RowMenu({ onEdit, onViewPayout, onRemove }: { onEdit: () => void; onViewPayout: () => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        className="p-1.5 rounded border border-travefy-gray-200 hover:bg-travefy-gray-50 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors"
        aria-label="Booking actions"
      >
        <span className="block leading-none tracking-widest text-sm">···</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-9 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-44 text-sm">
            <button
              onClick={() => { onEdit(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              <Pencil className="w-4 h-4 text-travefy-gray-500" />
              Edit Booking
            </button>
            <button
              onClick={() => { onViewPayout(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-blue-light text-travefy-gray-700"
            >
              <CircleDollarSign className="w-4 h-4 text-travefy-gray-500" />
              View in Payout
            </button>
            <button
              onClick={() => { onRemove(); setOpen(false) }}
              className="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              <X className="w-4 h-4 text-travefy-gray-500" />
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Sort helpers ──────────────────────────────────────────────────────────────

type SortKey = 'bookingRef' | 'supplier' | 'advisor' | 'location' | 'travelDate' | 'received' | 'split' | 'traveler' | 'reconStatus'
type SortDir = 'asc' | 'desc'

function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className="inline-flex flex-col -space-y-1 ml-1">
      <ChevronUp className={clsx('w-3 h-3', active && dir === 'asc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
      <ChevronDown className={clsx('w-3 h-3', active && dir === 'desc' ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
    </span>
  )
}

interface SortableHeaderProps {
  label: string
  sortKey: SortKey
  current: SortKey
  dir: SortDir
  onSort: (k: SortKey) => void
  hint?: boolean
}

function SortableHeader({ label, sortKey, current, dir, onSort, hint }: SortableHeaderProps) {
  return (
    <th className="px-4 py-3 text-left">
      <button
        onClick={() => onSort(sortKey)}
        className="flex items-center text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-gray-900"
      >
        {label}
        {hint && <Info className="w-3 h-3 ml-1 text-travefy-gray-400" />}
        <SortIndicator active={current === sortKey} dir={dir} />
      </button>
    </th>
  )
}

// ── Filter chip ───────────────────────────────────────────────────────────────

interface FilterChipProps {
  icon?: React.ReactNode
  label: string
  dropdown?: boolean
  onClick?: () => void
  /** When provided, renders a popover with these options on open. */
  options?: readonly string[]
  open?: boolean
  selected?: string | null
  onSelect?: (value: string | null) => void
}

function FilterChip({ icon, label, dropdown, onClick, options, open, selected, onSelect }: FilterChipProps) {
  const active = selected != null
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={
          active
            ? 'flex items-center gap-2 px-3 py-1.5 border border-travefy-blue rounded text-sm font-semibold whitespace-nowrap text-travefy-blue bg-travefy-blue-light hover:bg-travefy-blue-light/80 transition-colors'
            : 'flex items-center gap-2 px-3 py-1.5 border border-travefy-gray-200 rounded text-sm font-semibold whitespace-nowrap text-travefy-blue bg-white hover:bg-travefy-gray-50 transition-colors'
        }
      >
        {icon}
        {label}
        {dropdown && <ChevronDown className="w-4 h-4" />}
      </button>
      {open && options && onSelect && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => onSelect(selected ?? null)} />
          <div className="absolute right-0 top-10 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-64 text-sm max-h-72 overflow-auto">
            <button
              onClick={() => onSelect(null)}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-travefy-gray-50 text-travefy-gray-700"
            >
              <span>All locations</span>
              {selected == null && <Check className="w-4 h-4 text-travefy-blue" />}
            </button>
            <div className="border-t border-travefy-gray-100 my-1" />
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelect(opt)}
                className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-travefy-gray-50 text-travefy-gray-700"
              >
                <span>{opt}</span>
                {selected === opt && <Check className="w-4 h-4 text-travefy-blue" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Money / split formatters ──────────────────────────────────────────────────

const fmtMoney = (n: number) => (Number.isInteger(n) ? `US$${n}` : `US$${n.toFixed(2)}`)
const fmtSplit = (n: number) => `${n.toFixed(2)}%`

// ── Main component ────────────────────────────────────────────────────────────

export function BookingsAgency() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('Bookings')
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const [sortKey, setSortKey] = useState<SortKey>('bookingRef')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [locationOpen, setLocationOpen] = useState(false)
  const [selectedAdvisor, setSelectedAdvisor] = useState<string | null>(null)
  const [advisorOpen, setAdvisorOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [statusOpen, setStatusOpen] = useState(false)
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false)
  const [drawerOrigin, setDrawerOrigin] = useState<'notification' | 'existing' | 'new-payment' | null>(null)
  const [role, setRole] = useState<'agency' | 'advisor'>('agency')
  const [unclaimedItems, setUnclaimedItems] = useState<UnclaimedItem[]>(initialUnclaimedItems)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchContextRow, setSearchContextRow] = useState<{ id: string; receivedRef: string } | null>(null)
  const [addBookingOpen, setAddBookingOpen] = useState(false)
  const [pendingMatch, setPendingMatch] = useState<{ rowId: string; match: MatchedAdvisorBooking } | null>(null)
  const [bookings, setBookings] = useState<Booking[]>(initialBookings)
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null)
  const [incomingPayments, setIncomingPayments] = useState<IncomingPayment[]>(initialIncomingPayments)
  const [toast, setToast] = useState<ToastMessage | null>(null)

  // Commissions tab + its match/reconcile flows
  const [commissions, setCommissions] = useState<CommissionLine[]>(initialCommissions)
  const [searchTarget, setSearchTarget] = useState<{ source: 'commission' | 'unclaimed'; id: string; ref: string } | null>(null)
  const [removeCommissionId, setRemoveCommissionId] = useState<string | null>(null)
  const [exportOpen, setExportOpen] = useState(false)
  const [newCommissionOpen, setNewCommissionOpen] = useState(false)
  const [drawerCommission, setDrawerCommission] = useState<CommissionLine | null>(null)
  const [payouts, setPayouts] = useState<Payout[]>(initialPayouts)
  const [openPayoutId, setOpenPayoutId] = useState<string | null>(null)
  const [payoutIsNew, setPayoutIsNew] = useState(false)
  const [exportState, setExportState] = useState<{ open: boolean; from: string; to: string }>({ open: false, from: '', to: '' })

  const showToast = (text: string) => setToast({ id: Date.now(), text })

  // Top-nav clicks: "Bookings" jumps to the Bookings tab; the Agency → Commission
  // Splits / Team items cross-link to the commission-splits prototype (which links
  // back here), so the whole demo is reachable from one link. Everything else is a
  // demo toast.
  const handleNavSelect = (label: string) => {
    if (label === 'Bookings') {
      setTab('Bookings')
      showToast('Bookings')
      return
    }
    if (label === 'Commission Splits') { navigate('/commission-splits'); return }
    if (label === 'Team') { navigate('/commission-splits?view=team'); return }
    showToast(label)
  }

  const removeIncomingPayment = (id: string) => {
    setIncomingPayments((p) => p.filter((x) => x.id !== id))
    showToast('Payment removed')
  }

  /** When the drawer is opened from the PayMode notification and saved, drop the statement into the Incoming list. */
  const addStatementToIncoming = (rows: StatementRow[]) => {
    const matchedCount = rows.filter((r) => r.matched !== null).length
    setIncomingPayments((p) => {
      // Avoid duplicating the row if the user opens & saves the notification multiple times — update in place instead.
      const existing = p.findIndex((x) => x.reference === samplePaymentStatement.reference)
      if (existing >= 0) {
        const next = [...p]
        next[existing] = { ...next[existing], reconciledCount: matchedCount, bookings: rows.length }
        return next
      }
      const newPayment: IncomingPayment = {
        id: `paymode-${samplePaymentStatement.reference}`,
        date: '9 Oct 2025',
        supplier: samplePaymentStatement.supplier,
        reference: samplePaymentStatement.reference,
        bookings: rows.length,
        total: samplePaymentStatement.totalAmount,
        reconciledCount: matchedCount,
      }
      return [newPayment, ...p]
    })
  }

  const advisors = Array.from(new Set(bookings.map((b) => b.advisor))).sort()

  const statusOptions = ['Reconciled', 'Expected', 'Disbursed'] as const

  const visibleTabs = role === 'advisor' ? (['Bookings', 'Unclaimed'] as const) : TABS

  // ── Unclaimed handlers ──────────────────────────────────────────────────────
  const handleUnclaimedRemove = (id: string) => {
    setUnclaimedItems((u) => u.filter((x) => x.id !== id))
    showToast('Removed from unclaimed')
  }
  const reconcileUnclaimed = (item: UnclaimedItem) => {
    setUnclaimedItems((u) => u.filter((x) => x.id !== item.id))
    const line: CommissionLine = {
      id: `cm-${item.id}`,
      type: 'Commission',
      reference: item.reference,
      statementRef: item.statementRef,
      supplier: item.supplier,
      received: item.received,
      split: item.split ?? 80,
      status: 'reconciled',
      matchingBookingRef: item.matchingBookingRef ?? item.reference,
      advisor: item.advisor,
      expected: item.expected,
    }
    setCommissions((cs) => [line, ...cs])
    setTab('Commissions')
    showToast('Booking reconciled')
  }
  const unlinkUnclaimed = (item: UnclaimedItem) =>
    setUnclaimedItems((u) =>
      u.map((it): UnclaimedItem => (it.id === item.id ? { ...it, status: 'unclaimed', matchingBookingRef: null, advisor: null, expected: null, suggestedMatch: undefined } : it)),
    )

  // ── Drawer ↔ Unclaimed sync ─────────────────────────────────────────────────
  // V2: Unclaimed lines are commission-shaped and no longer linked to the Payment
  // drawer's statement rows, so this is a no-op.
  const syncUnclaimedFromRows = (_rows: StatementRow[]) => {}

  // ── Search booking modal handlers ───────────────────────────────────────────
  const openSearchForDrawerRow = (rowId: string) => {
    const row = samplePaymentStatement.rows.find((r) => r.id === rowId)
    setSearchContextRow({ id: rowId, receivedRef: row?.receivedRef ?? '' })
    setSearchModalOpen(true)
  }
  const handleSearchLink = (candidate: CandidateBooking) => {
    if (!searchContextRow) return
    const match: MatchedAdvisorBooking = {
      bookingRef: candidate.bookingRef,
      advisor: candidate.travelers !== '--' ? candidate.travelers : 'Sam Rivera',
      expected: candidate.total ?? 0,
      split: 75,
    }
    setPendingMatch({ rowId: searchContextRow.id, match })
    setSearchModalOpen(false)
    showToast(`Linked ${candidate.bookingRef}`)
    if (role === 'advisor') {
      // Advisor "Claim" flow doesn't open the drawer — just toast.
      return
    }
    setPaymentDrawerOpen(true)
  }
  const handleSearchAddNew = () => {
    setSearchModalOpen(false)
    setAddBookingOpen(true)
  }
  const handleAddBookingBack = () => {
    setAddBookingOpen(false)
    setSearchModalOpen(true)
  }
  const handleAddBookingSave = (draft: NewBookingDraft) => {
    if (!searchContextRow) {
      setAddBookingOpen(false)
      return
    }
    const generatedRef = draft.bookingRef || `BK-${Math.floor(Math.random() * 90000 + 10000)}`
    const match: MatchedAdvisorBooking = {
      bookingRef: generatedRef,
      advisor: draft.traveler || 'Sam Rivera',
      expected: draft.bookingTotal ?? 0,
      split: draft.commissionSplit || 75,
    }
    setPendingMatch({ rowId: searchContextRow.id, match })
    setAddBookingOpen(false)
    showToast(`New booking ${generatedRef} created and linked`)
    if (role === 'agency') {
      setPaymentDrawerOpen(true)
    }
  }

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(k); setSortDir('asc') }
  }

  const resetAllFilters = () => {
    setSelectedLocation(null)
    setSelectedAdvisor(null)
    setSelectedStatus(null)
    setSearch('')
    setTab('Bookings')
  }

  const removeBooking = (id: string) => {
    setBookings((bs) => bs.filter((b) => b.id !== id))
    showToast('Booking removed')
  }

  // ── Commissions handlers ─────────────────────────────────────────────────────
  const reconcileCommission = (id: string) => {
    setCommissions((cs) => cs.map((c): CommissionLine => (c.id === id ? { ...c, status: 'reconciled' } : c)))
    showToast('Commission reconciled')
  }
  const unreconcileCommission = (id: string) => {
    setCommissions((cs) => cs.map((c): CommissionLine => (c.id === id ? { ...c, status: 'match-found' } : c)))
    showToast('Commission unreconciled')
  }
  const markCommissionUnclaimed = (id: string) => {
    const c = commissions.find((x) => x.id === id)
    if (!c) return
    setCommissions((cs) => cs.filter((x) => x.id !== id))
    setUnclaimedItems((u) => [
      {
        id: `un-${c.id}`,
        reference: c.reference,
        statementRef: c.statementRef,
        supplier: c.supplier,
        received: c.received,
        timeUnclaimed: '0 Days',
        split: c.split,
        status: 'unclaimed' as const,
        matchingBookingRef: null,
        advisor: null,
        expected: null,
      },
      ...u,
    ])
    showToast('Moved to Unclaimed')
  }
  const unlinkCommission = (id: string) => {
    setCommissions((cs) =>
      cs.map((c): CommissionLine =>
        c.id === id
          ? { ...c, status: 'no-match', matchingBookingRef: null, advisor: null, expected: null, split: null, receivedMismatch: false, splitMismatch: false }
          : c,
      ),
    )
    showToast('Booking unlinked')
  }
  const openCommissionSearch = (id: string) => {
    const c = commissions.find((x) => x.id === id)
    setSearchTarget({ source: 'commission', id, ref: c?.reference ?? '' })
  }
  const confirmRemoveCommission = () => {
    if (!removeCommissionId) return
    setCommissions((cs) => cs.filter((c) => c.id !== removeCommissionId))
    setRemoveCommissionId(null)
    showToast('Commission removed')
  }
  const saveCommission = (updated: CommissionLine) => {
    setCommissions((cs) => cs.map((c) => (c.id === updated.id ? updated : c)))
    setDrawerCommission(null)
    showToast('Commission saved')
  }
  const removeCommissionFromDrawer = (id: string) => {
    setCommissions((cs) => cs.filter((c) => c.id !== id))
    setDrawerCommission(null)
    showToast('Commission removed')
  }
  const createCommissionLine = (line: CommissionLine) => {
    setCommissions((cs) => [line, ...cs])
    setNewCommissionOpen(false)
    showToast('Commission created')
  }
  const viewInPayout = (c: CommissionLine) => { setTab('Payouts'); showToast(`Viewing ${c.reference} in Payouts`) }

  // ── Payout handlers ──────────────────────────────────────────────────────────
  const openPayout = payouts.find((p) => p.id === openPayoutId) ?? null
  const handleNewPayout = () => {
    const draft = newPayoutDraft(`po-${String(Date.now()).slice(-5)}`)
    setPayouts((ps) => [draft, ...ps])
    setOpenPayoutId(draft.id)
    setPayoutIsNew(true)
  }
  const handleOpenPayout = (p: Payout) => { setOpenPayoutId(p.id); setPayoutIsNew(false) }
  const changePayout = (updated: Payout) =>
    setPayouts((ps) => ps.map((p) => (p.id === updated.id ? updated : p)))
  const archivePayout = (id: string) => {
    setPayouts((ps) => ps.map((p) => (p.id === id ? { ...p, archived: !p.archived } : p)))
    showToast('Payout archived')
  }
  const removePayout = (id: string) => {
    setPayouts((ps) => ps.filter((p) => p.id !== id))
    showToast('Payout removed')
  }
  const openChecksExport = (payout?: Payout) => {
    if (payout) setExportState({ open: true, from: payout.date, to: payout.date })
    else { const r = payoutDateRange(payouts); setExportState({ open: true, from: r.from, to: r.to }) }
  }

  // ── Match handlers (search flyout) ───────────────────────────────────────────
  const openUnclaimedSearch = (item: UnclaimedItem) =>
    setSearchTarget({ source: 'unclaimed', id: item.id, ref: item.reference })

  const handleSearchConfirm = (card: SearchBookingCard) => {
    if (!searchTarget) return
    if (searchTarget.source === 'commission') {
      setCommissions((cs) =>
        cs.map((c): CommissionLine =>
          c.id === searchTarget.id
            ? { ...c, status: 'match-found', matchingBookingRef: card.bookingRef, advisor: card.advisor, expected: c.received, split: c.split ?? 80 }
            : c,
        ),
      )
      showToast(`Linked ${card.bookingRef}`)
    } else {
      setUnclaimedItems((u) =>
        u.map((it): UnclaimedItem =>
          it.id === searchTarget.id
            ? { ...it, status: 'match-found', matchingBookingRef: card.bookingRef, advisor: card.advisor, expected: it.received, split: it.split ?? 80 }
            : it,
        ),
      )
      showToast(`Matched ${card.bookingRef}`)
    }
    setSearchTarget(null)
  }

  const filtered = bookings.filter((b) => {
    // Tab filter — Unclaimed/Commissions/Payments have their own views; Bookings/Payouts share the bookings table.
    if (tab === 'Payouts' && b.reconStatus !== 'disbursed') return false
    // Chip filters
    if (selectedLocation && b.location !== selectedLocation) return false
    if (selectedAdvisor && b.advisor !== selectedAdvisor) return false
    if (selectedStatus) {
      const map: Record<string, ReconStatus> = { Reconciled: 'reconciled', Expected: 'expected', Disbursed: 'disbursed' }
      if (b.reconStatus !== map[selectedStatus]) return false
    }
    // Search
    const q = search.toLowerCase()
    if (!q) return true
    return [b.bookingRef, b.supplier, b.advisor, b.location, b.traveler].some((f) => f?.toLowerCase().includes(q))
  })

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1
    const av = (a[sortKey] ?? '') as string | number
    const bv = (b[sortKey] ?? '') as string | number
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir
    return String(av).localeCompare(String(bv)) * dir
  })

  return (
    <PrototypeShell title="Bookings Agency" fullBleed>
      <div className="flex flex-col flex-1 min-h-0 bg-travefy-gray-50">
        <AppNav
          menu={NAV_MENU}
          activeItem="Business Hub"
          userName="Sam Rivera"
          userMenu={USER_MENU}
          onNavSelect={handleNavSelect}
          notifications={[
            {
              id: 'paymode-statement',
              icon: <FileText className="w-4 h-4 text-travefy-blue" />,
              title: 'New pay statement from PayMode',
              body: 'Your latest commission payout is ready to review.',
              ctaLabel: 'View statement',
              onCtaClick: () => { setDrawerOrigin('notification'); setPaymentDrawerOpen(true) },
            },
          ]}
        />

        <div className="flex-1 overflow-auto">
          <div className="px-6 py-5 space-y-5">
            {/* Tabs + role toggle */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {visibleTabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={
                      tab === t
                        ? 'px-5 py-2 text-sm font-semibold whitespace-nowrap text-white bg-travefy-navy rounded'
                        : 'px-5 py-2 text-sm font-semibold whitespace-nowrap text-travefy-gray-600 hover:text-travefy-gray-900 rounded transition-colors'
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const next = role === 'agency' ? 'advisor' : 'agency'
                  setRole(next)
                  // If switching to advisor while on an agency-only tab, fall back to Bookings
                  if (next === 'advisor' && (tab === 'Commissions' || tab === 'Payments' || tab === 'Payouts')) setTab('Bookings')
                  showToast(`Viewing as ${next === 'agency' ? 'Agency' : 'Advisor'}`)
                }}
                className="text-xs font-semibold text-travefy-blue hover:underline"
              >
                View as {role === 'agency' ? 'Advisor' : 'Agency'}
              </button>
            </div>

            {tab === 'Unclaimed' ? (
              <UnclaimedTab
                items={unclaimedItems}
                variant={role}
                onReconcile={reconcileUnclaimed}
                onSearchMatch={openUnclaimedSearch}
                onUnlink={unlinkUnclaimed}
                onRemove={handleUnclaimedRemove}
                onEdit={() => showToast('Editing an unclaimed line is mocked for this prototype')}
                onToast={showToast}
              />
            ) : tab === 'Commissions' ? (
              <CommissionsTab
                commissions={commissions}
                onReconcile={reconcileCommission}
                onUnreconcile={unreconcileCommission}
                onMarkUnclaimed={markCommissionUnclaimed}
                onSearchBooking={openCommissionSearch}
                onUnlink={unlinkCommission}
                onRemove={setRemoveCommissionId}
                onExport={() => setExportOpen(true)}
                onNewCommission={() => setNewCommissionOpen(true)}
                onOpenDrawer={setDrawerCommission}
                onViewPayout={viewInPayout}
                onToast={showToast}
              />
            ) : tab === 'Payments' ? (
              <IncomingTab
                payments={incomingPayments}
                onAddNew={() => { setDrawerOrigin('new-payment'); setPaymentDrawerOpen(true) }}
                onViewPayment={() => { setDrawerOrigin('existing'); setPaymentDrawerOpen(true) }}
                onRemovePayment={removeIncomingPayment}
                onToast={showToast}
              />
            ) : tab === 'Payouts' ? (
              <PayoutsTab
                payouts={payouts}
                onNewPayout={handleNewPayout}
                onOpenPayout={handleOpenPayout}
                onArchivePayout={archivePayout}
                onRemovePayout={removePayout}
                onExport={openChecksExport}
                onToast={showToast}
              />
            ) : (
              <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard icon={<LineChart className="w-4 h-4" />} value={totals.totalBookings} label="Total Bookings" />
              <StatCard icon={<Percent className="w-4 h-4" />} value={totals.expectedCommission} label="Expected Commission" />
              <StatCard icon={<DollarSign className="w-4 h-4" />} value={totals.receivedCommission} label="Received Commission" />
              <StatCard icon={<CircleDollarSign className="w-4 h-4" />} value={totals.disbursed} label="Disbursed" />
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => showToast('New booking flow not in this prototype')}
                className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" />
                New Booking
              </button>

              <div className="relative flex-1 min-w-[280px] max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
                <input
                  type="text"
                  placeholder="Search for multiple bookings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                />
              </div>

              <button
                onClick={() => showToast(`${sorted.length} booking${sorted.length === 1 ? '' : 's'} match`)}
                className="px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
              >
                Search
              </button>

              <span className="text-sm text-travefy-gray-600">
                Showing <span className="font-semibold text-travefy-navy">{sorted.length}</span> of {bookings.length}
              </span>

              <div className="ml-auto flex items-center gap-3">
                <button
                  onClick={() => showToast('Column picker is mocked for this prototype')}
                  className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-200 rounded bg-white text-sm font-semibold text-travefy-blue hover:bg-travefy-gray-50 transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  Select Columns
                </button>
                <button
                  onClick={() => setShowFilters((v) => !v)}
                  className="flex items-center gap-2 px-3 py-2 rounded bg-travefy-navy text-white text-sm font-semibold hover:bg-travefy-gray-800 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>
            </div>

            {/* Filter chips */}
            {showFilters && (
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <FilterChip
                  icon={<Calendar className="w-4 h-4" />}
                  label="Booking Date Range"
                  onClick={() => showToast('Date range picker is mocked for this prototype')}
                />
                <FilterChip
                  icon={<Calendar className="w-4 h-4" />}
                  label="Travel Date Range"
                  onClick={() => showToast('Date range picker is mocked for this prototype')}
                />
                <FilterChip
                  icon={<Building2 className="w-4 h-4" />}
                  label={selectedLocation ?? 'Location'}
                  dropdown
                  onClick={() => setLocationOpen((v) => !v)}
                  options={locations}
                  open={locationOpen}
                  selected={selectedLocation}
                  onSelect={(v) => { setSelectedLocation(v); setLocationOpen(false) }}
                />
                <FilterChip
                  label={selectedAdvisor ?? 'Advisor'}
                  dropdown
                  onClick={() => setAdvisorOpen((v) => !v)}
                  options={advisors}
                  open={advisorOpen}
                  selected={selectedAdvisor}
                  onSelect={(v) => { setSelectedAdvisor(v); setAdvisorOpen(false) }}
                />
                <FilterChip
                  label={selectedStatus ?? 'Status'}
                  dropdown
                  onClick={() => setStatusOpen((v) => !v)}
                  options={statusOptions}
                  open={statusOpen}
                  selected={selectedStatus}
                  onSelect={(v) => { setSelectedStatus(v); setStatusOpen(false) }}
                />
                <button
                  onClick={resetAllFilters}
                  className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Table */}
            <div className="bg-white border border-travefy-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto overflow-y-visible">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-travefy-gray-100">
                      <SortableHeader label="Booking Ref" sortKey="bookingRef" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Supplier" sortKey="supplier" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Advisor" sortKey="advisor" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Location" sortKey="location" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Travel Date" sortKey="travelDate" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Received" sortKey="received" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Split" sortKey="split" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Traveler" sortKey="traveler" current={sortKey} dir={sortDir} onSort={onSort} />
                      <SortableHeader label="Recon Status" sortKey="reconStatus" current={sortKey} dir={sortDir} onSort={onSort} />
                      <th className="w-12 px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((b) => (
                      <BookingRow
                        key={b.id}
                        booking={b}
                        onEdit={() => setEditingBooking(b)}
                        onViewPayout={() => { setDrawerOrigin('existing'); setPaymentDrawerOpen(true) }}
                        onRemove={() => removeBooking(b.id)}
                      />
                    ))}
                    {sorted.length === 0 && (
                      <tr>
                        <td colSpan={10} className="px-4 py-12 text-center text-travefy-gray-500 text-sm">
                          No bookings match the current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
              </>
            )}
          </div>
        </div>
      </div>

      <PaymentDetailsDrawer
        open={paymentDrawerOpen}
        onClose={() => setPaymentDrawerOpen(false)}
        onToast={showToast}
        onSave={(rows) => {
          if (drawerOrigin === 'notification' || drawerOrigin === 'new-payment') {
            addStatementToIncoming(rows)
            setTab('Payments')
          }
          setDrawerOrigin(null)
        }}
        onRowsChange={syncUnclaimedFromRows}
        onSearchBooking={openSearchForDrawerRow}
        pendingMatch={pendingMatch}
        onPendingMatchHandled={() => setPendingMatch(null)}
      />

      <SearchBookingModal
        open={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onLink={handleSearchLink}
        onAddNew={handleSearchAddNew}
        contextRef={searchContextRow?.receivedRef ?? null}
      />

      <AddBookingDetailsModal
        open={addBookingOpen}
        onClose={() => setAddBookingOpen(false)}
        onBack={handleAddBookingBack}
        onSave={handleAddBookingSave}
        defaultSupplier={samplePaymentStatement.supplier === 'Safari Hotel Inc.' ? 'Aberdeen' : samplePaymentStatement.supplier}
        defaultBookingTotal={480}
      />

      <EditAdvisorBookingDrawer
        open={editingBooking !== null}
        booking={editingBooking}
        onClose={() => setEditingBooking(null)}
        onSave={(next) => {
          setBookings((prev) => prev.map((b) => (b.id === next.id ? next : b)))
          showToast(`Saved ${next.bookingRef ?? 'booking'}`)
          setEditingBooking(null)
        }}
      />

      {/* Commissions + Unclaimed match overlays */}
      <SearchForBookingFlyout
        open={searchTarget !== null}
        onClose={() => setSearchTarget(null)}
        contextRef={searchTarget?.ref ?? null}
        onConfirm={handleSearchConfirm}
      />

      <RemoveCommissionModal
        open={removeCommissionId !== null}
        onClose={() => setRemoveCommissionId(null)}
        onConfirm={confirmRemoveCommission}
      />

      <ExportCommissionsModal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        onConfirm={() => { setExportOpen(false); showToast('Commissions exported') }}
      />

      <CommissionDrawer
        open={drawerCommission !== null}
        commission={drawerCommission}
        onSave={saveCommission}
        onRemove={removeCommissionFromDrawer}
        onClose={() => setDrawerCommission(null)}
      />

      <PayoutDrawer
        open={openPayout !== null}
        payout={openPayout}
        isNew={payoutIsNew}
        onChange={changePayout}
        onClose={() => setOpenPayoutId(null)}
        onToast={showToast}
      />

      <ChecksPaidExportModal
        open={exportState.open}
        payouts={payouts}
        initialFrom={exportState.from}
        initialTo={exportState.to}
        onClose={() => setExportState((s) => ({ ...s, open: false }))}
      />

      <NewCommissionDrawer
        open={newCommissionOpen}
        onClose={() => setNewCommissionOpen(false)}
        onCreate={createCommissionLine}
      />

      <Toast message={toast} onDismiss={() => setToast(null)} />
    </PrototypeShell>
  )
}

// ── Row ───────────────────────────────────────────────────────────────────────

interface BookingRowProps {
  booking: Booking
  onEdit: () => void
  onViewPayout: () => void
  onRemove: () => void
}

function BookingRow({ booking: b, onEdit, onViewPayout, onRemove }: BookingRowProps) {
  const recon = reconConfig[b.reconStatus]

  return (
    <tr
      onClick={onEdit}
      className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50 transition-colors cursor-pointer"
    >
      <td className="px-4 py-3 text-travefy-blue font-medium">
        {b.bookingRef ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-blue">{b.supplier}</td>
      <td className="px-4 py-3 text-travefy-blue">{b.advisor}</td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.location ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.travelDate ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.received !== null ? fmtMoney(b.received) : <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3 text-travefy-gray-700">{fmtSplit(b.split)}</td>
      <td className="px-4 py-3 text-travefy-gray-700">
        {b.traveler ?? <span className="text-travefy-gray-400">--</span>}
      </td>
      <td className="px-4 py-3">
        <Badge variant={recon.variant} size="sm">{recon.label}</Badge>
      </td>
      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
        <RowMenu
          onEdit={onEdit}
          onViewPayout={onViewPayout}
          onRemove={onRemove}
        />
      </td>
    </tr>
  )
}

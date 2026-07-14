import { clsx } from 'clsx'
import {
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  FileText,
  Filter,
  Info,
  Layers,
  Pencil,
  Plus,
  Search,
  X,
} from 'lucide-react'
import { useRef, useState } from 'react'
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
import { initialCommissions, isAdjustment, type CommissionKind, type CommissionLine, type SearchBookingCard } from './commissionsData'
import { NewCommissionModal } from './NewCommissionModal'
import { CommissionDrawer } from './CommissionDrawer'
import { SearchForBookingFlyout } from './SearchForBookingFlyout'
import { MatchUnclaimedBookingModal } from './MatchUnclaimedBookingModal'
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

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg px-6 py-5 flex items-start justify-between">
      <div>
        <p className="text-3xl font-semibold text-travefy-navy leading-none">{value}</p>
        <p className="text-sm text-travefy-gray-600 mt-3">{label}</p>
      </div>
      <button
        className="w-5 h-5 rounded-full bg-travefy-gray-700 text-white flex items-center justify-center shrink-0 hover:bg-travefy-gray-800 transition-colors"
        title={`About ${label}`}
      >
        <Info className="w-3 h-3" />
      </button>
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
  const [reviewItem, setReviewItem] = useState<UnclaimedItem | null>(null)
  const [newCommission, setNewCommission] = useState<{ open: boolean; presetKind?: CommissionKind; presetBookingRef?: string | null }>({ open: false })
  const [drawerCommission, setDrawerCommission] = useState<CommissionLine | null>(null)

  const showToast = (text: string) => setToast({ id: Date.now(), text })

  // Top-nav clicks: "Bookings" jumps to the Bookings tab, everything else is a demo toast.
  const handleNavSelect = (label: string) => {
    if (label === 'Bookings') {
      setTab('Bookings')
      showToast('Bookings')
      return
    }
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

  // Searchable booking options for the adjustment↔booking association picker.
  const bookingSearchOptions = bookings
    .filter((b) => b.bookingRef)
    .map((b) => ({ ref: b.bookingRef as string, supplier: b.supplier, advisor: b.advisor, traveler: b.traveler }))
  const statusOptions = ['Reconciled', 'Expected', 'Disbursed'] as const

  const visibleTabs = role === 'advisor' ? (['Bookings', 'Unclaimed'] as const) : TABS

  // ── Unclaimed handlers ──────────────────────────────────────────────────────
  const handleUnclaimedView = (item: UnclaimedItem) => {
    setDrawerOrigin('existing')
    setPaymentDrawerOpen(true)
    if (item.statementRowId) {
      // No further action — the drawer reads samplePaymentStatement which already contains the row.
    }
  }
  const handleUnclaimedClaim = (item: UnclaimedItem) => {
    setSearchContextRow({ id: item.statementRowId ?? item.id, receivedRef: item.bookingRef })
    setSearchModalOpen(true)
  }
  const handleUnclaimedRemove = (id: string) => {
    setUnclaimedItems((u) => u.filter((x) => x.id !== id))
    showToast('Unclaimed item removed')
  }

  // ── Drawer ↔ Unclaimed sync ─────────────────────────────────────────────────
  const syncUnclaimedFromRows = (rows: StatementRow[]) => {
    setUnclaimedItems((items) => {
      let changed = false
      const next = items.flatMap((item) => {
        if (!item.statementRowId) return [item]
        const row = rows.find((r) => r.id === item.statementRowId)
        if (!row) return [item]
        // If the row was reconciled, drop the item from Unclaimed entirely.
        if (row.status === 'reconciled') {
          changed = true
          return []
        }
        const nextMatch: UnclaimedItem['match'] = row.matched !== null ? 'match-found' : 'no-match'
        if (item.match !== nextMatch) {
          changed = true
          return [{ ...item, match: nextMatch }]
        }
        return [item]
      })
      return changed ? next : items
    })
  }

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
  const markCommissionUnclaimed = (id: string) => {
    const c = commissions.find((x) => x.id === id)
    if (!c) return
    setCommissions((cs) => cs.filter((x) => x.id !== id))
    setUnclaimedItems((u) => [
      {
        id: `un-${c.id}`,
        bookingRef: c.reference,
        statementRef: c.statementRef,
        supplier: c.supplier,
        traveler: null,
        timeUnclaimed: '0 days',
        received: c.received,
        match: 'no-match' as const,
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
  const removeCommissionLine = (id: string) => {
    setCommissions((cs) => cs.filter((c) => c.id !== id))
    showToast('Removed')
  }
  const createCommissionLine = (line: CommissionLine) => {
    setCommissions((cs) => [line, ...cs])
    setNewCommission({ open: false })
    showToast(isAdjustment(line) ? 'Adjustment added' : 'Commission created')
  }
  const openAddAdjustment = (c: CommissionLine) =>
    setNewCommission({ open: true, presetKind: 'adjustment', presetBookingRef: c.matchingBookingRef })

  // ── Unclaimed → match handlers ───────────────────────────────────────────────
  const openUnclaimedSearch = (item: UnclaimedItem) =>
    setSearchTarget({ source: 'unclaimed', id: item.id, ref: item.bookingRef })

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
            ? { ...it, match: 'match-found', suggestedMatch: { bookingRef: card.bookingRef, advisor: card.advisor, expected: it.received ?? 0, split: 80 } }
            : it,
        ),
      )
      showToast(`Matched ${card.bookingRef}`)
    }
    setSearchTarget(null)
  }

  // Reconcile from Unclaimed → the modal confirms, then the line is filed under
  // Commissions as reconciled and removed from Unclaimed.
  const handleReconcileUnclaimed = () => {
    const item = reviewItem
    if (!item) return
    const m = item.suggestedMatch
    setUnclaimedItems((u) => u.filter((x) => x.id !== item.id))
    setCommissions((cs) => [
      {
        id: `cm-${item.id}`,
        reference: item.bookingRef,
        statementRef: item.statementRef,
        supplier: item.supplier,
        received: item.received,
        split: m?.split ?? 80,
        status: 'reconciled' as const,
        matchingBookingRef: m?.bookingRef ?? item.bookingRef,
        advisor: m?.advisor ?? null,
        expected: m?.expected ?? item.received,
      },
      ...cs,
    ])
    setReviewItem(null)
    setTab('Commissions')
    showToast('Booking reconciled')
  }
  const rejectUnclaimedMatch = (item: UnclaimedItem) => {
    setUnclaimedItems((u) =>
      u.map((it): UnclaimedItem => (it.id === item.id ? { ...it, match: 'no-match', suggestedMatch: undefined } : it)),
    )
    setReviewItem(null)
    showToast('Match rejected')
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
                onViewStatement={handleUnclaimedView}
                onClaim={handleUnclaimedClaim}
                onReviewMatch={setReviewItem}
                onSearchMatch={openUnclaimedSearch}
                onRejectMatch={rejectUnclaimedMatch}
                onRemove={handleUnclaimedRemove}
                onToast={showToast}
              />
            ) : tab === 'Commissions' ? (
              <CommissionsTab
                commissions={commissions}
                onReconcile={reconcileCommission}
                onMarkUnclaimed={markCommissionUnclaimed}
                onSearchBooking={openCommissionSearch}
                onUnlink={unlinkCommission}
                onRemove={setRemoveCommissionId}
                onExport={() => setExportOpen(true)}
                onNewCommission={() => setNewCommission({ open: true })}
                onOpenDrawer={setDrawerCommission}
                onAddAdjustment={openAddAdjustment}
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
            ) : (
              <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard value={totals.totalBookings} label="Total Bookings" />
              <StatCard value={totals.expectedCommission} label="Expected Commission" />
              <StatCard value={totals.receivedCommission} label="Received Commission" />
              <StatCard value={totals.disbursed} label="Disbursed" />
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

      <MatchUnclaimedBookingModal
        open={reviewItem !== null}
        item={reviewItem}
        onClose={() => setReviewItem(null)}
        onReconcile={handleReconcileUnclaimed}
        onReject={() => reviewItem && rejectUnclaimedMatch(reviewItem)}
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
        adjustments={commissions.filter(
          (c) => isAdjustment(c) && drawerCommission?.matchingBookingRef != null && c.matchingBookingRef === drawerCommission.matchingBookingRef,
        )}
        onClose={() => setDrawerCommission(null)}
        onAddAdjustment={() => drawerCommission && openAddAdjustment(drawerCommission)}
        onRemoveAdjustment={removeCommissionLine}
      />

      <NewCommissionModal
        open={newCommission.open}
        bookings={bookingSearchOptions}
        presetKind={newCommission.presetKind}
        presetBookingRef={newCommission.presetBookingRef}
        onClose={() => setNewCommission({ open: false })}
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

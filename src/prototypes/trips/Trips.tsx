import { useState } from 'react'
import {
  Bell, Sun, Menu, Search, ChevronDown, LayoutGrid, List,
  MoreHorizontal, Tag, Plus, ArrowUpDown, Pencil,
} from 'lucide-react'
import { clsx } from 'clsx'
import { PrototypeShell } from '../../shared/layouts/PrototypeShell'
import { Button } from '../../shared/components'

// ---- Types ----------------------------------------------------------------

type TripStatus = 'Planning' | 'Draft' | 'Quote'

interface Trip {
  id: number
  name: string
  tags: string[]
  extraTags: number
  dateRange: string
  status: TripStatus
  color: string
  avatarInitials: string[]
}

// ---- Mock data -------------------------------------------------------------

const TRIPS: Trip[] = [
  { id: 1,  name: 'Trip to Las Vegas Deterding family',               tags: ['Upcoming', 'Luxury'],      extraTags: 2,  dateRange: '16 - 31 June 2024',          status: 'Planning', color: '#d4c5b2', avatarInitials: ['KD', 'JH', 'ML'] },
  { id: 2,  name: 'Family reunion in Hawaii Johnson family',           tags: ['Upcoming', 'Luxury'],      extraTags: 2,  dateRange: '10 - 25 August 2024',        status: 'Planning', color: '#9bbfd6', avatarInitials: ['JH', 'RS', 'TW'] },
  { id: 3,  name: 'Skiing adventure in the Swiss Alps Smith family',   tags: ['Upcoming', 'Adventure'],   extraTags: 1,  dateRange: '5 - 20 December 2024',       status: 'Draft',    color: '#b8ccd8', avatarInitials: ['AS', 'BM', 'CD'] },
  { id: 4,  name: 'Beach holiday in Bali Anderson family',             tags: ['Upcoming', 'Cruise'],      extraTags: 23, dateRange: '23 April - 8 May 2025',      status: 'Quote',    color: '#b8d4bc', avatarInitials: ['PA', 'QR', 'ST'] },
  { id: 5,  name: 'Cultural exploration in Kyoto Taylor family',       tags: ['Upcoming', 'Educational'], extraTags: 4,  dateRange: '7 - 22 September 2025',      status: 'Quote',    color: '#c8a8b0', avatarInitials: ['UT', 'VW', 'XY'] },
  { id: 6,  name: 'Road trip across Route 66 Murphy family',           tags: ['Upcoming', 'Adventure'],   extraTags: 8,  dateRange: '12 - 27 November 2025',      status: 'Planning', color: '#b0a8c8', avatarInitials: ['ZM', 'AB', 'CD'] },
  { id: 7,  name: 'City break in Paris Martinez family',               tags: ['Upcoming', 'Cruise'],      extraTags: 5,  dateRange: '2 - 17 February 2026',       status: 'Draft',    color: '#c8c8a0', avatarInitials: ['EM', 'FN', 'GO'] },
  { id: 8,  name: 'Safari in Serengeti Collins family',                tags: ['Upcoming', 'Wildlife'],    extraTags: 4,  dateRange: '19 March - 3 April 2026',    status: 'Planning', color: '#a0c8b0', avatarInitials: ['HC', 'IJ', 'KL'] },
  { id: 9,  name: 'Mountain retreat in Colorado Turner family',        tags: ['Upcoming', 'Scenic'],      extraTags: 4,  dateRange: '14 - 29 June 2026',          status: 'Draft',    color: '#b0bcd4', avatarInitials: ['MT', 'NO', 'PQ'] },
]

const FOLDERS = ['All', 'Luxury', 'Adults Only', 'Cruise']
const AVATAR_COLORS = ['#2a79a6', '#45bbff', '#9333ea', '#f59e0b', '#10b981']

// ---- Travefy logo mark ----------------------------------------------------

function TravefyLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1L20 7v8l-9 6-9-6V7l9-6z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.5" />
      <path d="M6 11h10M11 6v10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ---- App navigation -------------------------------------------------------

function TripsAppNav() {
  return (
    <nav className="flex items-center h-14 px-5 gap-1 shrink-0" style={{ backgroundColor: '#0f2e38' }}>
      {/* Logo */}
      <div
        className="w-8 h-8 rounded flex items-center justify-center mr-3 flex-shrink-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
      >
        <TravefyLogo />
      </div>

      {/* Nav items */}
      <div className="flex items-center gap-1 flex-1">
        <button
          className="px-4 py-1.5 rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: '#2a79a6' }}
        >
          Trips
        </button>
        {['Content', 'CRM'].map(item => (
          <button
            key={item}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <button className="text-white/60 hover:text-white transition-colors">
          <Sun className="w-5 h-5" />
        </button>
        <button className="text-white/60 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ backgroundColor: '#2a79a6' }}
        >
          KY
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}

// ---- Tag pill -------------------------------------------------------------

function TagPill({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-sm font-medium flex-shrink-0"
      style={{ backgroundColor: '#bee3f0', color: '#1e5778' }}
    >
      <Tag className="w-3 h-3 flex-shrink-0" />
      <span>{label}</span>
    </div>
  )
}

function ExtraTagsBadge({ count }: { count: number }) {
  return (
    <div
      className="flex items-center px-2 py-1 rounded-lg text-sm font-medium flex-shrink-0"
      style={{ backgroundColor: '#bee3f0', color: '#1e5778' }}
    >
      +{count}
    </div>
  )
}

// ---- Status badge ---------------------------------------------------------

const STATUS_STYLES: Record<TripStatus, { bg: string; dot: string }> = {
  Planning: { bg: '#1e5778', dot: '#45bbff' },
  Draft:    { bg: '#dd9a37', dot: '#fff' },
  Quote:    { bg: '#16bb68', dot: '#fff' },
}

function StatusBadge({ status }: { status: TripStatus }) {
  const s = STATUS_STYLES[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-semibold text-white"
      style={{ backgroundColor: s.bg }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.dot }} />
      {status}
    </span>
  )
}

// ---- Avatar stack ---------------------------------------------------------

function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex -space-x-2">
      {initials.slice(0, 3).map((init, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
          style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
        >
          {init}
        </div>
      ))}
    </div>
  )
}

// ---- Trip thumbnail -------------------------------------------------------

function TripThumbnail({ color }: { color: string }) {
  return (
    <div
      className="w-12 h-10 rounded flex-shrink-0"
      style={{ backgroundColor: color }}
    />
  )
}

// ---- Sortable column header -----------------------------------------------

function SortHeader({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide hover:text-travefy-navy transition-colors">
      {label}
      <ArrowUpDown className="w-3 h-3 text-travefy-gray-400" />
    </button>
  )
}

// ---- Dropdown filter button -----------------------------------------------

function DropdownFilter({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-travefy-gray-300 rounded-lg text-sm font-medium text-travefy-gray-700 hover:border-travefy-gray-500 transition-colors bg-white">
      {label}
      <ChevronDown className="w-3.5 h-3.5" />
    </button>
  )
}

// ---- Main component -------------------------------------------------------

export function Trips() {
  const [activeFolder, setActiveFolder] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')

  const visibleTrips =
    activeFolder === 'All'
      ? TRIPS
      : TRIPS.filter(t => t.tags.includes(activeFolder))

  return (
    <PrototypeShell title="Trips Dashboard" fullBleed>
      <div className="flex flex-col flex-1 min-h-0 bg-white">
        <TripsAppNav />

        {/* Page content */}
        <div className="flex-1 overflow-auto px-8 pt-6 pb-10">

          {/* Page header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold text-travefy-navy">Trips</h1>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-travefy-gray-100 text-travefy-gray-700">
                👋 Hi Kyle
              </span>
            </div>
            <Button variant="primary" size="md">
              + New Trip
            </Button>
          </div>

          {/* Filter / folder bar */}
          <div className="flex items-center justify-between mb-5">
            {/* Left: folder pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {FOLDERS.map(folder => (
                <button
                  key={folder}
                  onClick={() => setActiveFolder(folder)}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
                    activeFolder === folder
                      ? 'bg-travefy-navy text-white border-travefy-navy'
                      : 'bg-white text-travefy-gray-700 border-travefy-gray-300 hover:border-travefy-gray-500',
                  )}
                >
                  {folder}
                </button>
              ))}
              <button className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-travefy-blue hover:text-travefy-blue-dark transition-colors">
                <Plus className="w-3.5 h-3.5" />
                New Folder
              </button>
            </div>

            {/* Right: controls */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <DropdownFilter label="Owner" />
              <DropdownFilter label="Trip Date" />
              <DropdownFilter label="Tag" />
              <div className="flex border border-travefy-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={clsx(
                    'p-2 transition-colors',
                    viewMode === 'grid'
                      ? 'bg-travefy-gray-100 text-travefy-gray-800'
                      : 'bg-white text-travefy-gray-400 hover:text-travefy-gray-600',
                  )}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={clsx(
                    'p-2 transition-colors',
                    viewMode === 'list'
                      ? 'bg-travefy-gray-100 text-travefy-gray-800'
                      : 'bg-white text-travefy-gray-400 hover:text-travefy-gray-600',
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <button className="p-2 text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trips table */}
          <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
            {/* Header row */}
            <div className="flex items-center px-4 py-3 bg-travefy-gray-50 border-b border-travefy-gray-200 gap-4">
              <div className="flex-1 min-w-0">
                <SortHeader label="Trip Name" />
              </div>
              <div className="w-72 flex-shrink-0">
                <SortHeader label="Tags" />
              </div>
              <div className="w-44 flex-shrink-0">
                <SortHeader label="Trip Date" />
              </div>
              <div className="w-28 flex-shrink-0">
                <SortHeader label="Status" />
              </div>
              <div className="w-32 flex-shrink-0" />
            </div>

            {/* Data rows */}
            {visibleTrips.map((trip, i) => (
              <div
                key={trip.id}
                className={clsx(
                  'flex items-center px-4 py-3 gap-4 hover:bg-travefy-gray-50 transition-colors cursor-pointer',
                  i < visibleTrips.length - 1 && 'border-b border-travefy-gray-100',
                )}
              >
                {/* Trip name + thumbnail */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <TripThumbnail color={trip.color} />
                  <span className="text-sm font-semibold text-travefy-navy truncate">
                    {trip.name}
                  </span>
                </div>

                {/* Tags */}
                <div className="w-72 flex-shrink-0 flex items-center gap-1.5">
                  {trip.tags.map(tag => (
                    <TagPill key={tag} label={tag} />
                  ))}
                  {trip.extraTags > 0 && <ExtraTagsBadge count={trip.extraTags} />}
                  <button className="ml-1 text-travefy-gray-300 hover:text-travefy-gray-500 transition-colors flex-shrink-0">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Date range */}
                <div className="w-44 flex-shrink-0">
                  <span className="text-sm text-travefy-gray-700 underline decoration-dotted underline-offset-2 hover:text-travefy-navy transition-colors cursor-pointer">
                    {trip.dateRange}
                  </span>
                </div>

                {/* Status badge */}
                <div className="w-28 flex-shrink-0">
                  <StatusBadge status={trip.status} />
                </div>

                {/* Avatars + overflow menu */}
                <div className="w-32 flex-shrink-0 flex items-center justify-end gap-3">
                  <AvatarStack initials={trip.avatarInitials} />
                  <button className="text-travefy-gray-300 hover:text-travefy-gray-600 transition-colors flex-shrink-0">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrototypeShell>
  )
}

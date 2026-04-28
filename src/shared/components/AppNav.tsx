import { Bell } from 'lucide-react'
import { Avatar } from './Avatar'

interface AppNavProps {
  navItems?: readonly string[]
  activeItem?: string
  userName?: string
  notificationCount?: number
}

const DEFAULT_NAV_ITEMS = ['Trips', 'Pages', 'Library', 'Marketplace', 'CRM'] as const

function TravefyLogo() {
  return <img src="/travefy-logo.png" alt="Travefy" className="w-5 h-5 object-contain" />
}

export function AppNav({
  navItems = DEFAULT_NAV_ITEMS,
  activeItem = 'CRM',
  userName = 'Kim Anderson',
  notificationCount = 8,
}: AppNavProps) {
  return (
    <nav
      className="flex items-center h-14 px-4 gap-1 shrink-0"
      style={{ backgroundColor: '#45bbff' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mr-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          <TravefyLogo />
        </div>
        <div className="w-px h-5 bg-white/30" />
      </div>

      {/* Navigation items */}
      <div className="flex items-center gap-0.5 flex-1">
        {navItems.map((item) => {
          const active = item === activeItem
          return (
            <button
              key={item}
              className={
                active
                  ? 'px-3 py-1.5 rounded text-sm font-semibold bg-white/20 text-white'
                  : 'px-3 py-1.5 rounded text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors'
              }
            >
              {item}
            </button>
          )
        })}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button className="relative text-white/90 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          {notificationCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User */}
        <div className="flex items-center gap-2 text-white">
          <Avatar name={userName} size="sm" className="bg-white/30 text-white" />
          <span className="text-sm font-semibold hidden lg:block">{userName}</span>
        </div>

        {/* Learn */}
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-white/40 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
          <span className="w-4 h-4 rounded-full border border-white/70 text-[9px] flex items-center justify-center font-bold">?</span>
          Learn
        </button>
      </div>
    </nav>
  )
}

import { Bell } from 'lucide-react'
import { Avatar } from '../../shared/components'

const NAV_ITEMS = ['Trips', 'Pages', 'Library', 'Marketplace', 'Contacts'] as const

// Travefy logo mark — simplified SVG matching the app chrome
function TravefyLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1L20 7v8l-9 6-9-6V7l9-6z"
        fill="white"
        fillOpacity="0.2"
        stroke="white"
        strokeWidth="1.5"
      />
      <path d="M6 11h10M11 6v10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function AppNav() {
  return (
    <nav
      className="flex items-center h-14 px-4 gap-1 shrink-0"
      style={{ backgroundColor: '#45bbff' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mr-2">
        <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
          <TravefyLogo />
        </div>
        <div className="w-px h-5 bg-white/30" />
      </div>

      {/* Navigation items */}
      <div className="flex items-center gap-0.5 flex-1">
        {NAV_ITEMS.map((item) => {
          const active = item === 'Contacts'
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
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
            8
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2 text-white">
          <Avatar name="Kim Anderson" size="sm" className="bg-white/30 text-white" />
          <span className="text-sm font-semibold hidden lg:block">Kim Anderson</span>
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

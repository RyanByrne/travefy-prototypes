import { Bell } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Avatar } from './Avatar'

export interface AppNavNotification {
  id: string
  /** Icon shown in the circular avatar slot. Defaults to a bell. */
  icon?: ReactNode
  title: string
  body?: string
  /** Optional CTA button label (non-functional unless onCtaClick is provided). */
  ctaLabel?: string
  onCtaClick?: () => void
}

interface AppNavProps {
  navItems?: readonly string[]
  activeItem?: string
  userName?: string
  /** Static badge count, used when notifications is not provided. */
  notificationCount?: number
  /** When provided, overrides notificationCount and shows a popover on bell click. */
  notifications?: AppNavNotification[]
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
  notifications,
}: AppNavProps) {
  const [open, setOpen] = useState(false)

  const badgeCount = notifications ? notifications.length : notificationCount

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
        <div className="relative">
          <button
            onClick={() => notifications && setOpen((v) => !v)}
            className="relative text-white/90 hover:text-white transition-colors p-1"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {badgeCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
                {badgeCount}
              </span>
            )}
          </button>

          {open && notifications && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-10 z-40 w-96 bg-white border border-travefy-gray-200 rounded-lg shadow-xl text-travefy-navy">
                <div className="px-4 py-3 border-b border-travefy-gray-100 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                  {notifications.length > 0 && (
                    <button className="text-xs text-travefy-blue font-semibold hover:underline">
                      Mark all read
                    </button>
                  )}
                </div>
                <div className="max-h-96 overflow-auto py-1">
                  {notifications.length === 0 ? (
                    <div className="px-4 py-8 text-center text-sm text-travefy-gray-500">
                      You're all caught up.
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div key={n.id} className="px-4 py-3 hover:bg-travefy-gray-50 flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-travefy-blue-light flex items-center justify-center shrink-0">
                          {n.icon ?? <Bell className="w-4 h-4 text-travefy-blue" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold">{n.title}</p>
                          {n.body && <p className="text-xs text-travefy-gray-600 mt-0.5">{n.body}</p>}
                          {n.ctaLabel && (
                            <button
                              onClick={n.onCtaClick}
                              className="mt-2 px-3 py-1.5 rounded bg-travefy-blue text-white text-xs font-semibold hover:bg-travefy-blue-dark transition-colors"
                            >
                              {n.ctaLabel}
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>

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

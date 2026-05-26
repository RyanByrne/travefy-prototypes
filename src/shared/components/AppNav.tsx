import { Bell, ChevronDown, Info, LogOut, Settings } from 'lucide-react'
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

// ── Structured menu model (opt-in via the `menu` prop) ──────────────────────────

export interface NavLeaf {
  label: string
  /** Render as a highlighted (blue) link, e.g. "Schedule Training". */
  highlight?: boolean
}

export type NavNode =
  | { type: 'link'; label: string }
  | { type: 'mega'; label: string; columns: { heading: string; items: NavLeaf[] }[] }
  | { type: 'dropdown'; label: string; groups: NavLeaf[][] }

export interface UserMenuItem {
  label: string
  icon?: ReactNode
}

interface AppNavProps {
  /** Legacy flat nav (used by email-marketing). Ignored when `menu` is provided. */
  navItems?: readonly string[]
  activeItem?: string
  userName?: string
  notificationCount?: number
  notifications?: AppNavNotification[]
  /** Structured nav (Compass / Trips / Business Hub / Resources). When set, replaces the flat nav. */
  menu?: NavNode[]
  /** Items in the avatar dropdown. Only shown when `menu` is provided. */
  userMenu?: UserMenuItem[]
  /** Fires with the label of any clicked nav leaf, plain link, or user-menu item. */
  onNavSelect?: (label: string) => void
}

const DEFAULT_NAV_ITEMS = ['Trips', 'Pages', 'Library', 'Marketplace', 'CRM'] as const

function TravefyLogo() {
  return <img src="/travefy-logo.png" alt="Travefy" className="w-5 h-5 object-contain" />
}

// ── Structured-nav sub-panels ───────────────────────────────────────────────────

function MegaPanel({ node, onSelect }: { node: Extract<NavNode, { type: 'mega' }>; onSelect: (l: string) => void }) {
  return (
    <div className="absolute left-0 top-full mt-0 z-40 bg-white border border-travefy-gray-200 rounded-b-lg shadow-xl text-travefy-navy">
      <div className="flex gap-12 px-6 py-5 min-w-[640px]">
        {node.columns.map((col) => (
          <div key={col.heading} className="min-w-[150px]">
            <p className="text-sm font-bold text-travefy-navy mb-3">{col.heading}</p>
            <div className="flex flex-col gap-0.5">
              {col.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onSelect(item.label)}
                  className="text-left text-sm text-travefy-gray-700 rounded px-2 py-1.5 -mx-2 hover:bg-travefy-blue-light hover:text-travefy-navy transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DropdownPanel({ node, onSelect }: { node: Extract<NavNode, { type: 'dropdown' }>; onSelect: (l: string) => void }) {
  return (
    <div className="absolute left-0 top-full mt-0 z-40 bg-white border border-travefy-gray-200 rounded-b-lg shadow-xl text-travefy-navy w-56 py-2">
      {node.groups.map((group, gi) => (
        <div key={gi}>
          {gi > 0 && <div className="border-t border-travefy-gray-100 my-2" />}
          {group.map((item) => (
            <button
              key={item.label}
              onClick={() => onSelect(item.label)}
              className={
                item.highlight
                  ? 'w-full text-left text-sm font-semibold text-travefy-blue px-4 py-2 hover:bg-travefy-gray-50 transition-colors'
                  : 'w-full text-left text-sm text-travefy-gray-700 px-4 py-2 hover:bg-travefy-gray-50 transition-colors'
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

// ── Component ───────────────────────────────────────────────────────────────────

export function AppNav({
  navItems = DEFAULT_NAV_ITEMS,
  activeItem = 'CRM',
  userName = 'Kim Anderson',
  notificationCount = 8,
  notifications,
  menu,
  userMenu,
  onNavSelect,
}: AppNavProps) {
  // Single source of truth for which popover is open: a nav label, 'bell', 'user', or null.
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const close = () => setOpenMenu(null)
  const toggle = (key: string) => setOpenMenu((cur) => (cur === key ? null : key))

  const badgeCount = notifications ? notifications.length : notificationCount

  const handleSelect = (label: string) => {
    onNavSelect?.(label)
    close()
  }

  return (
    <nav
      className="relative flex items-center h-14 px-4 gap-1 shrink-0"
      style={{ backgroundColor: '#45bbff' }}
    >
      {/* Shared click-away backdrop */}
      {openMenu && <div className="fixed inset-0 z-30" onClick={close} />}

      {/* Logo */}
      <div className="flex items-center gap-3 mr-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          <TravefyLogo />
        </div>
        <div className="w-px h-5 bg-white/30" />
      </div>

      {/* Navigation items */}
      <div className="flex items-center gap-0.5 flex-1">
        {menu ? (
          menu.map((node) => {
            const isOpen = openMenu === node.label
            const active = isOpen || node.label === activeItem
            const triggerClass = active
              ? 'flex items-center gap-1 px-3 py-1.5 rounded text-sm font-semibold bg-white/20 text-white'
              : 'flex items-center gap-1 px-3 py-1.5 rounded text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors'

            if (node.type === 'link') {
              return (
                <button key={node.label} onClick={() => handleSelect(node.label)} className={triggerClass}>
                  {node.label}
                </button>
              )
            }
            return (
              <div key={node.label} className="relative z-40">
                <button onClick={() => toggle(node.label)} className={triggerClass}>
                  {node.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {isOpen && node.type === 'mega' && <MegaPanel node={node} onSelect={handleSelect} />}
                {isOpen && node.type === 'dropdown' && <DropdownPanel node={node} onSelect={handleSelect} />}
              </div>
            )
          })
        ) : (
          navItems.map((item) => {
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
          })
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <div className="relative z-40">
          <button
            onClick={() => notifications && toggle('bell')}
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

          {openMenu === 'bell' && notifications && (
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
                            onClick={() => { n.onCtaClick?.(); close() }}
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
          )}
        </div>

        {/* User */}
        <div className="relative z-40">
          <button
            onClick={() => userMenu && toggle('user')}
            className="flex items-center gap-2 text-white rounded px-1 py-1 hover:bg-white/10 transition-colors"
          >
            <Avatar name={userName} size="sm" className="bg-white/30 text-white" />
            <span className="text-sm font-semibold hidden lg:block">{userName}</span>
            {userMenu && <ChevronDown className="w-3.5 h-3.5 hidden lg:block" />}
          </button>

          {openMenu === 'user' && userMenu && (
            <div className="absolute right-0 top-11 z-40 w-44 bg-white border border-travefy-gray-200 rounded-lg shadow-xl py-1 text-travefy-navy">
              {userMenu.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleSelect(item.label)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-travefy-gray-700 hover:bg-travefy-gray-50 transition-colors"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Learn */}
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-white/40 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
          <Info className="w-4 h-4" />
          <span className="hidden lg:block">Learn</span>
        </button>
      </div>
    </nav>
  )
}

// Re-export icons commonly used to build a userMenu so callers don't import twice.
export { Settings as AccountIcon, LogOut as SignOutIcon }

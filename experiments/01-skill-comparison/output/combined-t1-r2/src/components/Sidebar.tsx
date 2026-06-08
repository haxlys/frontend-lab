import { SquaresFour, Users, Funnel, Gear, Plus } from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'

interface NavItem {
  label: string
  icon: Icon
  active?: boolean
  badge?: number
}

const mainNav: NavItem[] = [
  { label: 'Dashboard', icon: SquaresFour, active: true },
  { label: 'Customers', icon: Users, badge: 24 },
  { label: 'Pipeline', icon: Funnel, badge: 8 },
  { label: 'Settings', icon: Gear },
]

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-[220px] flex-col border-r border-slate-200 bg-white">
      <div className="flex h-14 items-center gap-2.5 border-b border-slate-100 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-900">
          <span className="text-xs font-bold text-white">C</span>
        </div>
        <span className="text-sm font-semibold tracking-tight text-navy-900">CRM</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {mainNav.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              item.active
                ? 'bg-accent-subtle text-accent'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            <item.icon
              weight={item.active ? 'fill' : 'regular'}
              className="h-[18px] w-[18px] shrink-0"
            />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge !== undefined && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold text-white">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-100 px-5 py-4">
        <button className="flex w-full items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
          <Plus weight="bold" className="h-[16px] w-[16px]" />
          New Deal
        </button>
      </div>
    </aside>
  )
}

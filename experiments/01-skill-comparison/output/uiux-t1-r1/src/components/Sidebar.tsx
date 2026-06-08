import { Icon } from './Icon'
import type { NavItem } from '../types'
import { navItems } from '../data/mockData'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 z-30 bg-navy-900/50 lg:hidden"
          onClick={onToggle}
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-navy-900 text-white flex flex-col
          transition-all duration-200 ease-in-out
          ${collapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'w-60'}
        `}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/10 shrink-0">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
                <Icon name="target" size={14} />
              </div>
              <span className="font-semibold text-sm tracking-tight">FlowCRM</span>
            </div>
          )}
          <button
            onClick={onToggle}
            className={`p-1.5 rounded-md hover:bg-white/10 transition-colors ${collapsed ? 'mx-auto' : ''}`}
          >
            <Icon
              name={collapsed ? 'chevron-right' : 'menu'}
              size={18}
              className="text-slate-400"
            />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto scrollbar-thin">
          {navItems.map((item) => (
            <NavRow key={item.label} item={item} collapsed={collapsed} />
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : 'px-2'}`}>
            <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-medium shrink-0">
              JD
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">Jane Doe</p>
                <p className="text-xs text-slate-400 truncate">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}

function NavRow({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium
        transition-colors duration-150
        ${item.active
          ? 'bg-blue-600 text-white'
          : 'text-slate-300 hover:bg-white/10 hover:text-white'
        }
        ${collapsed ? 'justify-center px-0' : ''}
      `}
      title={collapsed ? item.label : undefined}
    >
      <Icon name={item.icon} size={18} />
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge != null && (
            <span className={`
              text-[11px] font-medium px-1.5 py-0.5 rounded-full min-w-[18px] text-center
              ${item.active ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'}
            `}>
              {item.badge}
            </span>
          )}
        </>
      )}
    </button>
  )
}

import { useState } from 'react'
import { Icon } from './Icon'

const navItems = [
  { label: 'Dashboard', icon: 'dashboard' as const, active: true },
  { label: 'Contacts', icon: 'users' as const },
  { label: 'Pipeline', icon: 'pipeline' as const },
  { label: 'Settings', icon: 'settings' as const },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 rounded-[6px] bg-navy text-white"
      >
        <Icon name={mobileOpen ? 'x' : 'menu'} size={20} />
      </button>

      <aside
        className={[
          'fixed lg:static inset-y-0 left-0 z-50 flex flex-col bg-navy text-white transition-all duration-200',
          collapsed && !mobileOpen ? 'w-[68px]' : 'w-[232px]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 h-16 px-5 border-b border-white/10">
          <div className="w-8 h-8 rounded-[8px] bg-accent flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          {(!collapsed || mobileOpen) && (
            <span className="text-white font-semibold text-base tracking-tight">
              FlowCRM
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <p
            className={[
              'px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-2',
              collapsed && !mobileOpen ? 'text-center' : '',
            ].join(' ')}
          >
            {collapsed && !mobileOpen ? '' : 'Menu'}
          </p>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={[
                'sidebar-link',
                item.active ? 'active' : '',
                collapsed && !mobileOpen ? 'justify-center px-0' : '',
              ].join(' ')}
            >
              <Icon name={item.icon} size={20} />
              {(!collapsed || mobileOpen) && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse toggle (desktop) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-12 border-t border-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <Icon
            name={collapsed ? 'chevron-down' : 'chevron-up'}
            size={16}
            className={collapsed ? 'rotate-180' : ''}
          />
        </button>
      </aside>
    </>
  )
}

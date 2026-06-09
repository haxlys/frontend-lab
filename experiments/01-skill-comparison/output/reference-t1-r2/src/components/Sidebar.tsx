import { useState } from 'react'

const navItems = [
  { label: 'Dashboard', icon: '◧', active: true },
  { label: 'Customers', icon: '⛁', active: false },
  { label: 'Pipeline', icon: '⬡', active: false },
  { label: 'Deals', icon: '⊞', active: false },
  { label: 'Tasks', icon: '☰', active: false },
  { label: 'Reports', icon: '◷', active: false },
  { label: 'Settings', icon: '⚙', active: false },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-navy-900 text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5h14M3 10h14M3 15h14" />
        </svg>
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 w-60 bg-navy-900 text-white flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0',
          collapsed ? '-translate-x-full' : 'translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        <div className="flex items-center gap-3 px-5 h-16 border-b border-white/10 shrink-0">
          <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-sm font-semibold">C</div>
          <span className="font-semibold text-base tracking-tight">CRM Flow</span>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={[
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-btn text-sm font-medium transition-colors text-left',
                item.active
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
              ].join(' ')}
            >
              <span className="text-lg leading-none w-5 text-center">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center text-xs font-semibold">JD</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Jane Doe</p>
              <p className="text-xs text-slate-400 truncate">Admin</p>
            </div>
            <button
              className="hidden lg:flex text-slate-400 hover:text-slate-200 p-1"
              onClick={() => setCollapsed(!collapsed)}
              title="Toggle sidebar"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3L5 7l4 4" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

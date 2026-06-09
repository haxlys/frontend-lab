import {
  DashboardIcon,
  UsersIcon,
  PipelineIcon,
  SettingsIcon,
  XIcon,
} from '../Icons'

const navItems = [
  { label: '대시보드', icon: DashboardIcon, active: true },
  { label: '고객 관리', icon: UsersIcon, active: false },
  { label: '파이프라인', icon: PipelineIcon, active: false },
  { label: '설정', icon: SettingsIcon, active: false },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-navy-950/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-60 bg-navy-950 text-slate-300
          flex flex-col transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-accent-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <span className="text-white font-semibold text-base tracking-tight">
              CRM
            </span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Close sidebar"
          >
            <XIcon />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium
                transition-colors duration-150
                ${
                  item.active
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }
              `}
            >
              <item.icon />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white text-xs font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Jane Doe
              </p>
              <p className="text-xs text-slate-400 truncate">
                admin@crm.io
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

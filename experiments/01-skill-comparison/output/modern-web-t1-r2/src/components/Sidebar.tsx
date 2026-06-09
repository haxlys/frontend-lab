import {
  DashboardIcon, UsersIcon, PipelineIcon, SettingsIcon, ChevronDownIcon,
  XIcon,
} from './icons';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  badge?: number;
}

const mainItems: NavItem[] = [
  { label: '대시보드', icon: <DashboardIcon />, active: true },
  { label: '고객 관리', icon: <UsersIcon />, badge: 12 },
  { label: '파이프라인', icon: <PipelineIcon /> },
];

const subItems: NavItem[] = [
  { label: '설정', icon: <SettingsIcon /> },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-navy-900/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={`
        fixed top-0 left-0 z-50 h-full w-60 lg:w-56
        bg-white border-r border-navy-200
        flex flex-col
        transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-5 border-b border-navy-200">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-accent-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="font-semibold text-navy-800 text-base tracking-tight">CRM</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-navy-400 hover:text-navy-600 transition-colors"
          >
            <XIcon />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-widest text-navy-400">
            메인
          </p>
          {mainItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium
                transition-colors duration-100
                ${item.active
                  ? 'bg-accent-50 text-accent-600'
                  : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                }
              `}
            >
              {item.icon}
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[11px] font-semibold bg-accent-50 text-accent-600 px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </a>
          ))}

          <p className="px-3 mt-6 mb-2 text-[11px] font-semibold uppercase tracking-widest text-navy-400">
            기타
          </p>
          {subItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium
                transition-colors duration-100
                ${item.active
                  ? 'bg-accent-50 text-accent-600'
                  : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                }
              `}
            >
              {item.icon}
              <span className="flex-1">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="p-3 border-t border-navy-200">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-xs font-semibold text-white">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-navy-800 truncate">정도윤</p>
              <p className="text-xs text-navy-400">Sales Manager</p>
            </div>
            <ChevronDownIcon />
          </div>
        </div>
      </aside>
    </>
  );
}

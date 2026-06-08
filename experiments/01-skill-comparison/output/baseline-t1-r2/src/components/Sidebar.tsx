import { sidebarNav } from '../data/mock';

const iconMap: Record<string, string> = {
  grid: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  'trending-up': 'M23 6l-9.5 9.5-5-5L1 18',
  calendar: 'M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
  mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'bar-chart-2': 'M18 20V10M12 20V4M6 20v-6',
  settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 z-20 bg-navy-900/30 backdrop-blur-sm lg:hidden"
          onClick={onToggle}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-30 h-full bg-navy-800 border-r border-navy-700 flex flex-col transition-transform duration-300 ${
          collapsed ? '-translate-x-full lg:translate-x-0 lg:w-[68px]' : 'translate-x-0 w-[232px]'
        }`}
      >
        <div className={`flex items-center h-16 px-5 border-b border-navy-700 ${collapsed ? 'lg:justify-center lg:px-0' : ''}`}>
          {!collapsed ? (
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-accent-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white tracking-tight">SalesFlow</span>
            </div>
          ) : (
            <div className="w-7 h-7 rounded-md bg-accent-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {sidebarNav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md mb-0.5 transition-colors group ${
                item.active
                  ? 'bg-accent-600/15 text-accent-400 font-medium'
                  : 'text-navy-300 hover:bg-navy-700 hover:text-navy-100'
              } ${collapsed ? 'lg:justify-center lg:px-0' : ''}`}
            >
              <svg
                className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-accent-400' : 'text-navy-400 group-hover:text-navy-200'}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={iconMap[item.icon]} />
              </svg>
              {(!collapsed || true) && (
                <span className={`text-sm ${collapsed ? 'lg:hidden' : ''}`}>
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className={`border-t border-navy-700 p-3 ${collapsed ? 'lg:flex lg:justify-center' : ''}`}>
          <div className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-navy-700 transition-colors cursor-pointer ${collapsed ? 'lg:px-0 lg:justify-center' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-navy-600 flex items-center justify-center text-xs font-semibold text-navy-200 flex-shrink-0">
              KS
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-navy-100 truncate">김수현</div>
                <div className="text-[11px] text-navy-400 truncate">영업 매니저</div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

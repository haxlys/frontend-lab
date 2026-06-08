import type { JSX } from "react";

export interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
  active?: boolean;
  badge?: number;
}

interface SidebarProps {
  items: NavItem[];
  onNavigate: (id: string) => void;
  collapsed?: boolean;
}

export function Sidebar({ items, onNavigate, collapsed = false }: SidebarProps) {
  return (
    <aside
      className={`
        fixed left-0 top-0 h-full bg-navy-900 text-white z-40
        transition-all duration-200 flex flex-col
        ${collapsed ? "w-[68px]" : "w-[240px]"}
      `}
    >
      <div
        className={`
          flex items-center gap-3 h-16 px-5 border-b border-navy-700 shrink-0
          ${collapsed ? "justify-center px-0" : ""}
        `}
      >
        <div className="w-8 h-8 bg-accent rounded-default flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        {!collapsed && (
          <span className="text-base font-semibold tracking-tight whitespace-nowrap">
            FlowCRM
          </span>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-default
                  text-sm font-medium transition-colors duration-150
                  ${collapsed ? "justify-center px-0" : ""}
                  ${
                    item.active
                      ? "bg-navy-700 text-white"
                      : "text-slate-400 hover:text-white hover:bg-navy-800"
                  }
                `}
              >
                <span className="w-5 h-5 shrink-0 flex items-center justify-center">
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="flex-1 text-left whitespace-nowrap">
                    {item.label}
                  </span>
                )}
                {!collapsed && item.badge != null && item.badge > 0 && (
                  <span className="bg-accent text-white text-[11px] font-semibold px-1.5 py-0.5 rounded-full leading-none">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`
          border-t border-navy-700 p-4
          ${collapsed ? "flex justify-center" : ""}
        `}
      >
        <button className={`
          flex items-center gap-3 text-slate-400 hover:text-white text-sm
          transition-colors duration-150
          ${collapsed ? "justify-center" : "w-full px-3 py-2"}
        `}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
}

import { type FC } from "react";
import { Avatar } from "../ui";

const menuItems = [
  { icon: "Home", label: "대시보드", active: true },
  { icon: "Users", label: "고객 관리" },
  { icon: "Columns", label: "파이프라인" },
  { icon: "Calendar", label: "일정" },
  { icon: "Mail", label: "이메일" },
  { icon: "BarChart3", label: "리포트" },
];

const bottomItems = [
  { icon: "Settings", label: "설정" },
  { icon: "HelpCircle", label: "도움말" },
];

const iconMap: Record<string, React.JSX.Element> = {
  Home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  Users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  Columns: <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />,
  Calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  Mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></>,
  BarChart3: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
  Settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
  HelpCircle: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
  Menu: <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>,
};

const SvgIcon: FC<{ name: string; className?: string }> = ({ name, className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {iconMap[name] ?? null}
  </svg>
);

export { SvgIcon };

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export const Sidebar: FC<SidebarProps> = ({ collapsed, onToggle }) => (
  <aside
    className={`fixed inset-y-0 left-0 z-30 flex flex-col border-r border-navy-200 bg-white transition-all duration-200 ${
      collapsed ? "w-[68px]" : "w-[240px]"
    }`}
  >
    <div className="flex h-16 items-center justify-between border-b border-navy-200 px-4">
      {!collapsed && (
        <span className="text-lg font-bold tracking-tight text-navy-800">PulseCRM</span>
      )}
      <button
        onClick={onToggle}
        className="flex h-9 w-9 items-center justify-center rounded-md text-navy-400 transition-colors hover:bg-navy-100 hover:text-navy-600"
      >
        <SvgIcon name="Menu" />
      </button>
    </div>

    <nav className="flex-1 overflow-y-auto px-3 py-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-accent-50 text-accent-600"
                  : "text-navy-500 hover:bg-navy-50 hover:text-navy-700"
              } ${collapsed ? "justify-center" : "gap-3"}`}
            >
              <SvgIcon name={item.icon} className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <div className="border-t border-navy-200 px-3 py-3">
      <ul className="space-y-1">
        {bottomItems.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-700 ${
                collapsed ? "justify-center" : "gap-3"
              }`}
            >
              <SvgIcon name={item.icon} className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </a>
          </li>
        ))}
      </ul>
      <div className={`mt-3 flex items-center rounded-md px-3 py-2.5 ${collapsed ? "justify-center" : "gap-3"}`}>
        <Avatar initials="JD" size="sm" status="online" />
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-navy-700">John Doe</p>
            <p className="truncate text-xs text-navy-400">Admin</p>
          </div>
        )}
      </div>
    </div>
  </aside>
);

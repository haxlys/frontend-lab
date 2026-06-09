import { useState, type ReactNode } from "react";

const menuItems = [
  { label: "Dashboard", icon: "grid", active: true },
  { label: "Customers", icon: "users" },
  { label: "Pipeline", icon: "columns" },
  { label: "Deals", icon: "briefcase" },
  { label: "Tasks", icon: "check-square" },
  { label: "Reports", icon: "pie-chart" },
  { label: "Settings", icon: "settings" },
];

const icons: Record<string, ReactNode> = {
  grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  columns: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  ),
  briefcase: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  "check-square": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  "pie-chart": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed left-[232px] top-4 z-50 rounded-md border border-[#e2e8f0] bg-white p-1.5 shadow-sm transition-all duration-200 hover:bg-[#f1f5f9] xl:hidden"
        style={{ left: collapsed ? 52 : 232 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round">
          {collapsed ? (
            <>
              <path d="M9 18l6-6-6-6" />
            </>
          ) : (
            <>
              <path d="M15 18l-6-6 6-6" />
            </>
          )}
        </svg>
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-[#e2e8f0] bg-[#0f172a] text-white transition-all duration-200 ${
          collapsed ? "w-[52px]" : "w-[232px]"
        }`}
      >
        <div className={`flex h-16 items-center border-b border-white/10 px-5 ${collapsed ? "justify-center px-0" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#2563eb]">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          {!collapsed && <span className="ml-3 text-base font-semibold tracking-tight">FlowCRM</span>}
        </div>

        <nav className="flex-1 space-y-1 px-2 py-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`group flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-[#2563eb] text-white"
                  : "text-[#94a3b8] hover:bg-white/10 hover:text-white"
              } ${collapsed ? "justify-center px-0" : ""}`}
            >
              <span className="shrink-0">{icons[item.icon]}</span>
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className={`border-t border-white/10 p-4 ${collapsed ? "px-0 text-center" : ""}`}>
          <div className={`flex items-center rounded-md px-3 py-2 text-sm text-[#94a3b8] ${collapsed ? "justify-center px-0" : ""}`}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e293b] text-xs font-semibold text-white">
              JD
            </div>
            {!collapsed && (
              <div className="ml-3 min-w-0">
                <p className="truncate text-sm font-medium text-white">Jane Doe</p>
                <p className="truncate text-xs text-[#64748b]">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

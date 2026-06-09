import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Contacts", active: false },
  { icon: BarChart3, label: "Pipeline", active: false },
  { icon: Settings, label: "Settings", active: false },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-30 flex h-full flex-col border-r border-navy-200 bg-navy-900 transition-all duration-200
        ${collapsed ? "w-[68px]" : "w-[220px]"}`}
    >
      <div className="flex h-14 items-center border-b border-navy-700/50 px-4">
        {!collapsed && (
          <span className="text-sm font-bold tracking-tight text-white">
            FlowCRM
          </span>
        )}
        <button
          onClick={onToggle}
          className={`ml-auto rounded-md p-1.5 text-navy-400 transition-colors hover:bg-navy-800 hover:text-white
            ${collapsed ? "mx-auto" : ""}`}
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors
              ${
                item.active
                  ? "bg-accent-600 text-white"
                  : "text-navy-300 hover:bg-navy-800 hover:text-white"
              }
              ${collapsed ? "justify-center px-2" : ""}`}
          >
            <item.icon size={18} />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="border-t border-navy-700/50 p-3">
        <div
          className={`flex items-center gap-3 rounded-md px-3 py-2.5 ${
            collapsed ? "justify-center px-2" : ""
          }`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 text-xs font-semibold text-navy-300">
            JD
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="truncate text-xs font-medium text-white">
                Jane Doe
              </p>
              <p className="truncate text-[11px] text-navy-400">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

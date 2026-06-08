import { useState } from "react";
import { navItems, navSecondary } from "../../data/mock";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  Briefcase,
  CheckSquare,
  BarChart3,
  Plug,
  Settings,
  LifeBuoy,
} from "../ui/icons";
import { cn } from "../../lib/utils";

const iconMap = {
  LayoutDashboard,
  Users,
  GitBranch,
  Briefcase,
  CheckSquare,
  BarChart3,
  Plug,
  Settings,
  LifeBuoy,
};

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-slate-200/80 bg-white">
      <div className="flex h-16 items-center gap-2 px-5 border-b border-slate-200/80">
        <div className="h-7 w-7 rounded-md bg-slate-900 grid place-items-center">
          <span className="text-white text-[13px] font-bold tracking-tight">N</span>
        </div>
        <span className="text-[15px] font-semibold tracking-tight text-slate-900">
          Northwind
        </span>
        <span className="ml-auto text-[11px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
          Pro
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </div>
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isActive = active === item.label;
            return (
              <li key={item.label}>
                <button
                  onClick={() => setActive(item.label)}
                  className={cn(
                    "w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13.5px] font-medium transition-colors",
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <Icon size={16} className={isActive ? "text-slate-900" : "text-slate-500"} />
                  <span className="truncate">{item.label}</span>
                  {item.badge ? (
                    <span className="ml-auto inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-slate-900 px-1.5 text-[10.5px] font-semibold text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Account
        </div>
        <ul className="space-y-0.5">
          {navSecondary.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <li key={item.label}>
                <button className="w-full flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13.5px] font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Icon size={16} className="text-slate-500" />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-200/80 p-3">
        <div className="flex items-center gap-2.5 rounded-md p-2 hover:bg-slate-50 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 grid place-items-center text-white text-[11px] font-semibold">
            SK
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold text-slate-900 truncate">Sarah Kim</div>
            <div className="text-[11.5px] text-slate-500 truncate">sarah@northwind.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

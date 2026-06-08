import {
  SquaresFour,
  Users,
  Funnel,
  Briefcase,
  CheckSquare,
  ChartLineUp,
  Gear,
  Question,
} from "@phosphor-icons/react";
import { navItems, navSecondary } from "../../data/mock";
import { cn } from "../../lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; weight?: "regular" | "duotone" | "fill" }>> = {
  SquaresFour,
  Users,
  Funnel,
  Briefcase,
  CheckSquare,
  ChartLineUp,
  Gear,
  Question,
};

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[240px] shrink-0 flex-col border-r border-ink-200 bg-white">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-ink-200">
        <div className="h-7 w-7 rounded-md bg-ink-900 flex items-center justify-center">
          <span className="text-white font-bold text-[12px] tracking-tight">N</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold text-ink-900">Northwind</span>
          <span className="text-[11px] text-ink-500">Workspace</span>
        </div>
      </div>

      <div className="px-3 pt-3">
        <button className="w-full h-8 flex items-center gap-2 px-2.5 rounded-md border border-ink-200 bg-white hover:bg-ink-50 transition-colors text-left">
          <div className="h-4 w-4 rounded bg-gradient-to-br from-brand-500 to-brand-700" />
          <span className="text-[12px] font-medium text-ink-800 flex-1">Sales team</span>
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-ink-400">
            <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3 scrollbar-thin">
        <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-ink-400 px-2 mb-1.5">
          Workspace
        </div>
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.label}>
                <a
                  href="#"
                  className={cn(
                    "h-8 flex items-center gap-2.5 px-2 rounded-md text-[13px] font-medium transition-colors",
                    item.active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
                  )}
                >
                  {Icon && <Icon size={16} weight={item.active ? "fill" : "regular"} />}
                  <span>{item.label}</span>
                  {item.active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-500" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-ink-400 px-2 mt-5 mb-1.5">
          Account
        </div>
        <ul className="space-y-0.5">
          {navSecondary.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.label}>
                <a
                  href="#"
                  className="h-8 flex items-center gap-2.5 px-2 rounded-md text-[13px] font-medium text-ink-600 hover:bg-ink-100 hover:text-ink-900 transition-colors"
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-ink-200 p-3">
        <div className="flex items-center gap-2.5 p-2 rounded-md hover:bg-ink-50 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-[12px] font-semibold">
            JL
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12.5px] font-medium text-ink-900 truncate">Jihoon Lee</div>
            <div className="text-[11px] text-ink-500 truncate">jihoon@northwind.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

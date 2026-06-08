import { useState } from "react";
import {
  SquaresFour,
  UsersThree,
  Funnel,
  CheckSquare,
  ChartLineUp,
  Envelope,
  CalendarBlank,
  PlugsConnected,
  Users,
  Gear,
  CaretDown,
  Sparkle,
  Lifebuoy,
} from "phosphor-react";
import { navItems } from "../../data/nav";
import { cn } from "../../lib/utils";

const iconMap = {
  SquaresFour,
  UsersThree,
  Funnel,
  CheckSquare,
  ChartLineUp,
  Envelope,
  CalendarBlank,
  PlugsConnected,
  Users,
  Gear,
} as const;

const sectionLabel: Record<string, string> = {
  Workspace: "Workspace",
  Communication: "Communication",
  Settings: "Settings",
};

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const grouped = navItems.reduce<Record<string, typeof navItems[number][]>>(
    (acc, item) => {
      (acc[item.section] ||= []).push(item);
      return acc;
    },
    {},
  );

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-ink-200 bg-white">
      <div className="flex items-center gap-2 h-16 px-5 border-b border-ink-200">
        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-ink-900">
          <Sparkle weight="fill" className="w-4 h-4 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-ink-900">
            Lumen
          </span>
          <span className="text-2xs text-ink-500">Northwind Team</span>
        </div>
        <CaretDown className="ml-auto w-3.5 h-3.5 text-ink-400" weight="bold" />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
        {Object.entries(grouped).map(([section, items]) => (
          <div key={section}>
            <div className="px-2 mb-2 text-2xs font-medium uppercase tracking-wider text-ink-400">
              {sectionLabel[section] ?? section}
            </div>
            <ul className="space-y-0.5">
              {items.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const isActive = active === item.label;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setActive(item.label)}
                      className={cn(
                        "w-full flex items-center gap-2.5 h-8 px-2 rounded-md text-sm transition-colors",
                        isActive
                          ? "bg-ink-100 text-ink-900 font-medium"
                          : "text-ink-600 hover:bg-ink-50 hover:text-ink-900",
                      )}
                    >
                      <Icon
                        weight={isActive ? "fill" : "regular"}
                        className={cn(
                          "w-4 h-4 shrink-0",
                          isActive ? "text-ink-900" : "text-ink-500",
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                      {item.label === "Inbox" && (
                        <span className="ml-auto inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-brand-500 text-[10px] font-semibold text-white tabular-nums">
                          12
                        </span>
                      )}
                      {item.label === "Tasks" && (
                        <span className="ml-auto text-2xs text-ink-400 tabular-nums">
                          7
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-3 pb-4 pt-3 border-t border-ink-200">
        <div className="flex items-start gap-2.5 p-3 rounded-lg border border-ink-200 bg-ink-50">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white border border-ink-200 shrink-0">
            <Lifebuoy weight="duotone" className="w-4 h-4 text-ink-700" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium text-ink-900">Need a hand?</div>
            <div className="text-2xs text-ink-500 leading-snug mt-0.5">
              Browse our setup guides or open a ticket.
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

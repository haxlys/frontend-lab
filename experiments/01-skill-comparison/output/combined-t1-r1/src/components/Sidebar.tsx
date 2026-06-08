import {
  SquaresFour,
  Users,
  Funnel,
  Handshake,
  CheckSquare,
  ChartBar,
  Gear,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import { navigation } from "../data";
import clsx from "clsx";

type PhosphorIcon = ComponentType<{ size?: number; weight?: "fill" | "regular" | "bold" }>;

const iconMap: Record<string, PhosphorIcon> = {
  "squares-four": SquaresFour,
  users: Users,
  funnel: Funnel,
  handshake: Handshake,
  "check-square": CheckSquare,
  "chart-bar": ChartBar,
  gear: Gear,
};

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-60 bg-navy-950 text-slate-300 shrink-0 min-h-[100dvh]">
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-navy-800">
        <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-xs">C</span>
        </div>
        <span className="font-semibold text-white text-base">CRM</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navigation.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <a
              key={item.label}
              href="#"
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150",
                item.active
                  ? "bg-navy-800 text-white"
                  : "text-slate-400 hover:bg-navy-800 hover:text-slate-200"
              )}
            >
              {IconComponent && <IconComponent size={20} weight={item.active ? "fill" : "regular"} />}
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-navy-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium shrink-0">
            JL
          </div>
          <div className="min-w-0">
            <p className="text-sm text-white font-medium truncate">Jordan Lee</p>
            <p className="text-xs text-slate-500 truncate">Sales Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

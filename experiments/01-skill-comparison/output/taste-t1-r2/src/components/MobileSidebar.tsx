import {
  SquaresFour,
  UsersThree,
  Funnel,
  Handshake,
  CalendarCheck,
  TrendUp,
  ChartBarHorizontal,
  Gear,
  X,
} from "@phosphor-icons/react";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Dashboard", icon: SquaresFour, active: true },
  { label: "Customers", icon: UsersThree, active: false },
  { label: "Pipeline", icon: Funnel, active: false },
  { label: "Deals", icon: Handshake, active: false },
  { label: "Tasks", icon: CalendarCheck, active: false },
  { label: "Reports", icon: TrendUp, active: false },
];

const bottomItems = [
  { label: "Analytics", icon: ChartBarHorizontal, active: false },
  { label: "Settings", icon: Gear, active: false },
];

interface MobileSidebarProps {
  onClose: () => void;
}

export function MobileSidebar({ onClose }: MobileSidebarProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-5 h-16 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#2563EB] flex items-center justify-center">
            <SquaresFour className="text-white" size={18} weight="fill" />
          </div>
          <span className="font-semibold text-[15px] text-slate-900 tracking-tight">
            FlowCRM
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-md text-slate-400 hover:bg-slate-100"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
        <span className="px-2.5 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Main
        </span>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 w-full px-2.5 py-2.5 rounded-md text-[13.5px] font-medium transition-colors",
              item.active
                ? "bg-slate-100 text-slate-900"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            )}
          >
            <item.icon size={20} weight={item.active ? "fill" : "regular"} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-slate-200 flex flex-col gap-0.5">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full px-2.5 py-2.5 rounded-md text-[13.5px] font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <item.icon size={20} weight="regular" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

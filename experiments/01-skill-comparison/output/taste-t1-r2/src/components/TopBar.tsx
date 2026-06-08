import { Bell, MagnifyingGlass, List, X } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

interface TopBarProps {
  onMobileMenuToggle: () => void;
  mobileMenuOpen: boolean;
}

export function TopBar({ onMobileMenuToggle, mobileMenuOpen }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 flex items-center gap-4 px-4 lg:px-6">
      <button
        onClick={onMobileMenuToggle}
        className="lg:hidden p-2 -ml-2 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
      </button>

      <div className="flex items-center gap-2 lg:hidden">
        <div className="w-7 h-7 rounded-md bg-[#2563EB] flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-[11px]">F</span>
        </div>
        <span className="font-semibold text-[15px] text-slate-900 tracking-tight">
          FlowCRM
        </span>
      </div>

      <div className="flex-1 max-w-md ml-auto lg:ml-0">
        <div className="relative">
          <MagnifyingGlass
            size={16}
            weight="bold"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search contacts, deals..."
            className="w-full h-9 pl-9 pr-3 rounded-md border border-slate-200 bg-slate-50 text-[13.5px] text-slate-700 placeholder-slate-400 outline-none focus:border-slate-300 focus:bg-white focus:ring-2 focus:ring-slate-100 transition-all duration-150"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell size={20} weight="regular" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#2563EB] ring-2 ring-white" />
        </button>

        <button className="flex items-center gap-2.5 rounded-md hover:bg-slate-100 transition-colors p-1.5">
          <div
            className={cn(
              "w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-semibold shrink-0",
              "bg-slate-800 text-white"
            )}
          >
            JD
          </div>
          <span className="hidden sm:block text-[13.5px] font-medium text-slate-700">
            Jane Doe
          </span>
        </button>
      </div>
    </header>
  );
}

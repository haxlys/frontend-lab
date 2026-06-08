import { Search, Bell, Command, Plus, ChevronDown } from "../ui/icons";
import { Button } from "../ui/Button";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 h-16 shrink-0 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="h-full flex items-center gap-3 px-4 md:px-6">
        <div className="md:hidden flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-slate-900 grid place-items-center">
            <span className="text-white text-[12px] font-bold">N</span>
          </div>
        </div>

        <div className="hidden sm:flex flex-1 max-w-md">
          <label className="group flex w-full items-center gap-2 rounded-md border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 focus-within:bg-white focus-within:border-slate-300 focus-within:ring-2 focus-within:ring-blue-500/15 transition-colors px-3 h-9">
            <Search size={15} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search customers, deals, tasks..."
              className="w-full bg-transparent text-[13.5px] text-slate-700 placeholder:text-slate-400 outline-none"
            />
            <kbd className="hidden md:inline-flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1.5 h-5 text-[10.5px] font-medium text-slate-500">
              <Command size={10} />K
            </kbd>
          </label>
        </div>

        <div className="flex-1 sm:flex-none" />

        <div className="flex items-center gap-1.5">
          <Button size="md" variant="primary" leftIcon={<Plus size={15} />}>
            <span className="hidden sm:inline">New Deal</span>
            <span className="sm:hidden">New</span>
          </Button>

          <button
            className="relative h-9 w-9 grid place-items-center rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={16} />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-blue-500 ring-2 ring-white" />
          </button>

          <div className="ml-1.5 pl-1.5 border-l border-slate-200 flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 grid place-items-center text-white text-[11px] font-semibold">
              SK
            </div>
            <div className="hidden lg:block">
              <div className="text-[12.5px] font-semibold text-slate-900 leading-tight">
                Sarah Kim
              </div>
              <div className="text-[11px] text-slate-500 leading-tight">Admin</div>
            </div>
            <ChevronDown size={14} className="hidden lg:block text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}

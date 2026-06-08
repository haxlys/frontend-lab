import { MagnifyingGlass, Bell } from "@phosphor-icons/react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200">
      <div className="flex items-center gap-3 flex-1 max-w-md text-slate-400">
        <MagnifyingGlass size={18} className="shrink-0" />
        <input
          type="text"
          placeholder="Search contacts, deals, tasks..."
          className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-md hover:bg-slate-100 transition-colors duration-150 text-slate-500">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose rounded-full border-2 border-white" />
        </button>

        <div className="h-6 w-px bg-slate-200" />

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-white text-sm font-medium shrink-0">
            JL
          </div>
          <span className="text-sm font-medium text-slate-700 hidden sm:block">Jordan Lee</span>
        </div>
      </div>
    </header>
  );
}

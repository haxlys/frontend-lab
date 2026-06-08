import { MagnifyingGlass, Bell, Command, Plus, Lifebuoy } from "@phosphor-icons/react";
import { Button } from "../ui/Button";

export function TopBar() {
  return (
    <header className="h-14 shrink-0 border-b border-ink-200 bg-white">
      <div className="h-full px-4 sm:px-6 flex items-center gap-3">
        <div className="lg:hidden flex items-center gap-2 mr-1">
          <div className="h-6 w-6 rounded-md bg-ink-900 flex items-center justify-center text-white text-[10px] font-bold">N</div>
        </div>

        <nav className="hidden md:flex items-center gap-1 text-[13px] text-ink-500">
          <span className="hover:text-ink-800 cursor-pointer">Workspace</span>
          <span className="text-ink-300">/</span>
          <span className="hover:text-ink-800 cursor-pointer">Sales</span>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900 font-medium">Dashboard</span>
        </nav>

        <div className="flex-1 max-w-md ml-2 md:ml-6">
          <div className="relative">
            <MagnifyingGlass
              size={14}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              type="text"
              placeholder="Search contacts, deals, tasks…"
              className="w-full h-8 pl-8 pr-16 bg-ink-50 border border-transparent rounded-md text-[13px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:bg-white focus:border-ink-200 focus:ring-2 focus:ring-brand-500/15 transition-colors"
            />
            <kbd className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 items-center gap-0.5 h-5 px-1.5 text-[10px] font-medium text-ink-500 bg-white border border-ink-200 rounded">
              <Command size={9} weight="bold" /> K
            </kbd>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1.5">
          <Button variant="primary" size="sm" icon={<Plus size={13} weight="bold" />}>
            New deal
          </Button>

          <button
            aria-label="Notifications"
            className="relative h-8 w-8 inline-flex items-center justify-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800 transition-colors"
          >
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 ring-2 ring-white" />
          </button>

          <button
            aria-label="Help"
            className="h-8 w-8 inline-flex items-center justify-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800 transition-colors"
          >
            <Lifebuoy size={16} />
          </button>

          <div className="h-5 w-px bg-ink-200 mx-1" />

          <button className="flex items-center gap-2 h-8 pl-1 pr-2 rounded-md hover:bg-ink-100 transition-colors">
            <div className="h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center text-white text-[10px] font-semibold">
              JL
            </div>
            <span className="hidden sm:inline text-[12.5px] font-medium text-ink-800">Jihoon Lee</span>
          </button>
        </div>
      </div>
    </header>
  );
}

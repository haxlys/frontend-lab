import { MagnifyingGlass, Bell, Command, Plus, CaretDown } from "phosphor-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur border-b border-ink-200">
      <div className="h-full px-4 md:px-6 flex items-center gap-3 md:gap-4">
        <div className="lg:hidden flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-ink-900 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">L</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-ink-900">
            Lumen
          </span>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl">
          <label className="group relative flex items-center w-full h-9 px-3 rounded-md border border-ink-200 bg-ink-50 hover:border-ink-300 hover:bg-white focus-within:bg-white focus-within:border-ink-400 transition-colors">
            <MagnifyingGlass className="w-4 h-4 text-ink-400 shrink-0" />
            <input
              type="text"
              placeholder="Search customers, deals, tasks…"
              className="ml-2 flex-1 bg-transparent text-sm placeholder:text-ink-400 focus:outline-none"
            />
            <kbd className="hidden lg:inline-flex items-center gap-1 h-5 px-1.5 rounded border border-ink-200 bg-white text-2xs text-ink-500 font-mono">
              <Command className="w-2.5 h-2.5" weight="bold" />K
            </kbd>
          </label>
        </div>

        <div className="flex-1 md:hidden" />

        <button
          type="button"
          className="hidden md:inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-ink-900 hover:bg-ink-800 text-sm font-medium text-white transition-colors"
        >
          <Plus className="w-3.5 h-3.5" weight="bold" />
          New deal
        </button>

        <button
          type="button"
          className="relative w-9 h-9 inline-flex items-center justify-center rounded-md border border-ink-200 bg-white hover:bg-ink-50 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4 text-ink-600" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-2 pl-2 ml-1 border-l border-ink-200">
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-xs font-medium text-ink-900">Yuna Park</span>
            <span className="text-2xs text-ink-500">Sales Lead</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 h-9 pl-1 pr-2 rounded-md hover:bg-ink-50 transition-colors"
            aria-label="Open user menu"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white text-xs font-semibold flex items-center justify-center">
              YP
            </span>
            <CaretDown className="w-3 h-3 text-ink-500" weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
}

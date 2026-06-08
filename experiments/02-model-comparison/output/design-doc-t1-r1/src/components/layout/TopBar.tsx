import { Search, Bell, Plus, Command } from 'lucide-react';

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-ink-200 bg-white/80 px-4 backdrop-blur sm:px-6">
      <div className="hidden md:flex flex-1 max-w-xl">
        <label className="group relative flex w-full items-center">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-ink-400" />
          <input
            type="search"
            placeholder="고객, 딜, 회사 검색…"
            className="h-9 w-full rounded-md border border-ink-200 bg-ink-50 pl-9 pr-16 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
          <kbd className="pointer-events-none absolute right-2.5 hidden items-center gap-1 rounded border border-ink-200 bg-white px-1.5 py-0.5 text-2xs font-medium text-ink-500 sm:inline-flex">
            <Command className="h-3 w-3" />K
          </kbd>
        </label>
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <button
          type="button"
          className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-md bg-ink-900 px-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
        >
          <Plus className="h-4 w-4" />
          새 딜
        </button>

        <button
          type="button"
          aria-label="알림"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand-500 ring-2 ring-white" />
        </button>

        <div className="ml-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white">
          JK
        </div>
      </div>
    </header>
  );
}

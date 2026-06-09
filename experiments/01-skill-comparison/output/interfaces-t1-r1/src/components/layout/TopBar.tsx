import { Search, Bell, Menu } from "lucide-react";

interface TopBarProps {
  onMenuToggle: () => void;
}

export function TopBar({ onMenuToggle }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b border-navy-200 bg-white/95 px-6 backdrop-blur-sm">
      <button
        onClick={onMenuToggle}
        className="rounded-md p-1.5 text-navy-400 transition-colors hover:bg-navy-100 hover:text-navy-600 lg:hidden"
      >
        <Menu size={18} />
      </button>

      <div className="relative flex-1 max-w-[420px]">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
        />
        <input
          type="text"
          placeholder="Search contacts, deals..."
          className="w-full rounded-lg border border-navy-200 bg-navy-50 py-2 pl-9 pr-4 text-sm text-navy-800 placeholder:text-navy-400 focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-colors"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-md p-1.5 text-navy-400 transition-colors hover:bg-navy-100 hover:text-navy-600">
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent-600 ring-2 ring-white" />
        </button>

        <div className="h-6 w-px bg-navy-200" />

        <button className="flex items-center gap-2 rounded-md transition-colors hover:bg-navy-50">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 text-xs font-semibold text-white">
            JD
          </div>
          <span className="hidden text-sm font-medium text-navy-700 sm:inline">
            Jane Doe
          </span>
        </button>
      </div>
    </header>
  );
}

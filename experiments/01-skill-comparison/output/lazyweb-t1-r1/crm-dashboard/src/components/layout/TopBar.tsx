import { SearchIcon, BellIcon, MenuIcon } from '../Icons'

interface TopBarProps {
  onMenuClick: () => void
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="h-16 flex items-center gap-4 px-4 lg:px-6 bg-white border-b border-slate-200 shrink-0">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-slate-500 hover:text-slate-700 transition-colors"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      <div className="flex-1 max-w-md relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="고객, 거래 검색..."
          className="
            w-full pl-9 pr-4 py-2 text-sm rounded-md border border-slate-200
            bg-slate-50 text-slate-700 placeholder:text-slate-400
            outline-none transition-colors duration-150
            focus:border-accent-500 focus:bg-white focus:ring-2 focus:ring-accent-500/10
          "
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <button
          className="relative p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Notifications"
        >
          <BellIcon />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
        </button>

        <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-white text-xs font-semibold">
            JD
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-700 leading-tight">
              Jane Doe
            </p>
            <p className="text-xs text-slate-400 leading-tight">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}

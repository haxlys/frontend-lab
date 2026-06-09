import { Icon } from './Icon'

export function TopBar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white border-b border-slate-200 shrink-0">
      {/* Search */}
      <div className="relative w-full max-w-sm hidden sm:block">
        <Icon
          name="search"
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search contacts, deals..."
          className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-[8px] text-slate-700 placeholder:text-slate-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="relative p-2 rounded-[8px] text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors">
          <Icon name="bell" size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent ring-2 ring-white" />
        </button>

        <div className="w-px h-6 bg-slate-200" />

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium shrink-0">
            JD
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-slate-700 leading-tight">
              Jane Doe
            </p>
            <p className="text-xs text-slate-400 leading-tight">Admin</p>
          </div>
          <Icon name="chevron-down" size={14} className="text-slate-400 hidden sm:block" />
        </div>
      </div>
    </header>
  )
}

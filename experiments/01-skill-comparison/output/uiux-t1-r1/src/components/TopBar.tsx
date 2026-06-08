import { Icon } from './Icon'

export function TopBar() {
  return (
    <header className="h-14 flex items-center justify-between px-4 lg:px-6 border-b border-slate-200 bg-white shrink-0">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search contacts, deals, tasks..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg
                       placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2
                       focus:ring-blue-500/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Icon name="bell" size={18} className="text-slate-500" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 border border-white" />
        </button>

        <button className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-xs font-medium text-white">
            JD
          </div>
          <span className="hidden sm:block text-sm font-medium text-slate-700">Jane Doe</span>
        </button>
      </div>
    </header>
  )
}

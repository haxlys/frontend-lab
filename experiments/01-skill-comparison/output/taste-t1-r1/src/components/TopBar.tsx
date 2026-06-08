import { MagnifyingGlass, Bell, CaretDown } from "@phosphor-icons/react"

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 h-16 bg-white border-b border-navy-200 flex items-center justify-between px-6">
      <div className="relative w-80">
        <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" weight="bold" />
        <input
          type="text"
          placeholder="Search customers, deals..."
          className="w-full h-10 pl-10 pr-4 rounded-md border border-navy-200 bg-navy-50 text-sm text-navy-800 placeholder:text-navy-400 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-colors"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-md text-navy-500 hover:text-navy-800 hover:bg-navy-100 transition-colors">
          <Bell size={20} weight="regular" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-600 ring-2 ring-white" />
        </button>

        <button className="flex items-center gap-2 p-2 rounded-md text-sm text-navy-700 hover:bg-navy-100 transition-colors">
          <div className="w-7 h-7 rounded-full bg-accent-600 flex items-center justify-center text-white text-xs font-semibold">
            JD
          </div>
          <CaretDown size={12} weight="bold" className="text-navy-400" />
        </button>
      </div>
    </header>
  )
}

import type { ReactNode } from 'react'
import { MagnifyingGlass, Bell, CaretDown } from '@phosphor-icons/react/dist/ssr'

export function TopBar({ children }: { children?: ReactNode }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-slate-200 bg-white/80 px-5 backdrop-blur-md">
      {children}
      <div className="flex flex-1 items-center gap-3">
        <div className="relative flex-1 max-w-[420px]">
          <MagnifyingGlass className="absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search customers, deals, tasks..."
            className="h-9 w-full rounded-md border border-slate-200 bg-slate-50 pl-9 pr-3 text-[13px] text-slate-700 placeholder:text-slate-400 outline-none transition-[border-color,box-shadow] duration-150 focus:border-slate-300 focus:bg-white focus:shadow-[0_0_0_3px_rgba(37,99,235,0.08)]"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
            /
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-accent" />
        </button>

        <button className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-slate-100">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-[11px] font-semibold text-white">
            AK
          </div>
          <CaretDown className="hidden h-3 w-3 text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  )
}

import { Search, Bell, HelpCircle, Plus, Command } from "lucide-react";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-ink-200 bg-white/80 px-4 backdrop-blur sm:px-6">
      {/* Breadcrumb / Title */}
      <div className="hidden md:flex items-center gap-2 text-sm">
        <span className="text-ink-500">Workspace</span>
        <span className="text-ink-300">/</span>
        <span className="font-semibold text-ink-900">대시보드</span>
      </div>

      {/* Search */}
      <div className="ml-auto flex flex-1 items-center justify-end gap-2 md:ml-6 md:max-w-md">
        <div className="relative hidden flex-1 sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            placeholder="고객, 딜, 활동 검색..."
            className="h-9 w-full rounded-md border border-ink-200 bg-ink-50 pl-9 pr-16 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
          <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-1 sm:flex">
            <kbd className="inline-flex h-5 items-center gap-0.5 rounded border border-ink-200 bg-white px-1.5 text-[10px] font-medium text-ink-500">
              <Command className="h-2.5 w-2.5" /> K
            </kbd>
          </div>
        </div>

        <Button variant="primary" size="md" className="hidden sm:inline-flex">
          <Plus className="h-4 w-4" />
          새 딜
        </Button>

        <div className="flex items-center gap-1">
          <Button size="icon" variant="ghost" aria-label="도움말">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            aria-label="알림"
            className="relative"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand-600 ring-2 ring-white" />
          </Button>
        </div>

        <div className="ml-1 flex items-center gap-2 border-l border-ink-200 pl-3">
          <Avatar initials="SK" />
          <div className="hidden text-left lg:block">
            <div className="text-sm font-medium leading-tight text-ink-900">
              Sarah Kim
            </div>
            <div className="text-[11px] leading-tight text-ink-500">
              Admin
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

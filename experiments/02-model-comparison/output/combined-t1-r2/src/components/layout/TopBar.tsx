import { Button } from "../ui/Button";
import { Icon } from "../Icon";

export function TopBar() {
  return (
    <header className="h-14 sticky top-0 z-30 bg-canvas/85 backdrop-blur border-b border-border">
      <div className="h-full px-4 md:px-6 flex items-center gap-3">
        <div className="md:hidden">
          <Icon.Logo size={22} />
        </div>

        <div className="hidden md:flex items-center gap-1 text-[12.5px] text-ink-tertiary">
          <span>Acme Industries</span>
          <Icon.ChevronRight size={12} />
          <span className="text-ink-secondary font-medium">Sales</span>
          <Icon.ChevronRight size={12} />
          <span className="text-ink-primary font-medium">Dashboard</span>
        </div>

        <div className="flex-1 max-w-[480px]">
          <div className="relative">
            <Icon.Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-tertiary pointer-events-none" />
            <input
              type="text"
              placeholder="Search customers, deals, tasks…"
              className="w-full h-8 pl-8 pr-12 text-[13px] bg-surface border border-border rounded placeholder:text-ink-tertiary focus:outline-none focus:border-border-strong focus:bg-surface transition-colors"
            />
            <kbd className="hidden md:inline-flex absolute right-2 top-1/2 -translate-y-1/2 h-5 px-1.5 text-[10.5px] font-medium text-ink-tertiary bg-canvas border border-border rounded items-center gap-0.5">
              <Icon.Command size={10} />K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-1 ml-auto">
          <Button variant="primary" size="sm" leadingIcon={<Icon.Plus size={14} />}>
            New deal
          </Button>

          <button className="relative h-8 w-8 inline-flex items-center justify-center rounded text-ink-secondary hover:bg-surface hover:text-ink-primary transition-colors">
            <Icon.Bell size={16} />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent ring-2 ring-canvas" />
          </button>

          <div className="hidden md:block h-5 w-px bg-border mx-1" />

          <div className="hidden md:flex items-center gap-2 pl-1 pr-2 h-8 rounded hover:bg-surface cursor-pointer transition-colors">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-semibold">
              JM
            </div>
            <Icon.ChevronDown size={12} className="text-ink-tertiary" />
          </div>
        </div>
      </div>
    </header>
  );
}

import { Icon } from "../Icon";

type Item = {
  id: string;
  label: string;
  icon: React.ComponentProps<typeof Icon.Dashboard>;
  badge?: string;
};

const primary: Item[] = [
  { id: "dashboard", label: "Dashboard", icon: "Dashboard" as never },
  { id: "customers", label: "Customers", icon: "Users" as never },
  { id: "pipeline", label: "Pipeline", icon: "Pipeline" as never, badge: "12" },
  { id: "inbox", label: "Inbox", icon: "Inbox" as never, badge: "3" },
  { id: "calendar", label: "Calendar", icon: "Calendar" as never },
  { id: "reports", label: "Reports", icon: "Chart" as never },
];

const secondary: Item[] = [
  { id: "settings", label: "Settings", icon: "Settings" as never },
  { id: "help", label: "Help & Support", icon: "Help" as never },
];

function NavItem({ item, active }: { item: Item; active?: boolean }) {
  const IconComp = (Icon as Record<string, React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>>)[
    item.icon as unknown as string
  ];
  return (
    <button
      className={`w-full flex items-center gap-2.5 h-8 px-2 rounded text-[13px] font-medium transition-colors duration-150 ease-default group ${
        active
          ? "bg-surface text-ink-primary"
          : "text-ink-secondary hover:bg-surface hover:text-ink-primary"
      }`}
    >
      <span
        className={`flex-shrink-0 ${
          active ? "text-accent" : "text-ink-tertiary group-hover:text-ink-secondary"
        }`}
      >
        <IconComp size={16} />
      </span>
      <span className="flex-1 text-left truncate">{item.label}</span>
      {item.badge && (
        <span className="text-[10.5px] font-semibold tabular text-ink-tertiary bg-surface-subtle border border-border rounded px-1.5 h-[18px] inline-flex items-center">
          {item.badge}
        </span>
      )}
    </button>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-[232px] flex-shrink-0 h-screen sticky top-0 border-r border-border bg-canvas">
      <div className="h-14 px-4 flex items-center gap-2 border-b border-border">
        <Icon.Logo size={22} />
        <span className="text-[14px] font-semibold tracking-[-0.01em] text-ink-primary">
          Helix
        </span>
        <span className="ml-1 text-[10.5px] font-medium uppercase tracking-[0.08em] text-ink-tertiary border border-border rounded px-1.5 h-[18px] inline-flex items-center">
          CRM
        </span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-2 py-3">
        <div className="px-2 mb-1.5 flex items-center justify-between">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
            Workspace
          </span>
          <button className="text-ink-tertiary hover:text-ink-secondary transition-colors">
            <Icon.Plus size={12} />
          </button>
        </div>
        <nav className="space-y-0.5">
          {primary.map((item, i) => (
            <NavItem key={item.id} item={item} active={i === 0} />
          ))}
        </nav>

        <div className="mt-6 px-2 mb-1.5">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
            Account
          </span>
        </div>
        <nav className="space-y-0.5">
          {secondary.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>
      </div>

      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2.5 px-1.5 py-1.5 rounded hover:bg-surface cursor-pointer transition-colors">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[11px] font-semibold">
            JM
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[12.5px] font-medium text-ink-primary truncate">
              Jordan Mills
            </div>
            <div className="text-[11px] text-ink-tertiary truncate">
              Acme Industries
            </div>
          </div>
          <Icon.ChevronDown size={12} className="text-ink-tertiary" />
        </div>
      </div>
    </aside>
  );
}

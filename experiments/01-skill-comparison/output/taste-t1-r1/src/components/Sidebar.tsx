import {
  SquaresFour,
  Users,
  Funnel,
  Gear,
  ChartLineUp,
  Buildings,
  Handshake,
  Envelope,
} from "@phosphor-icons/react"

const navItems = [
  { icon: SquaresFour, label: "Dashboard", active: true },
  { icon: Users, label: "Customers" },
  { icon: Funnel, label: "Pipeline" },
  { icon: Handshake, label: "Deals" },
  { icon: Envelope, label: "Campaigns" },
  { icon: ChartLineUp, label: "Reports" },
]

const bottomItems = [
  { icon: Buildings, label: "Workspace" },
  { icon: Gear, label: "Settings" },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-navy-900 flex flex-col z-30">
      <div className="flex items-center gap-3 px-5 pt-6 pb-8">
        <div className="w-8 h-8 rounded-md bg-accent-600 flex items-center justify-center">
          <SquaresFour size={18} weight="fill" className="text-white" />
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">FlowCRM</span>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-navy-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={20} weight={item.active ? "fill" : "regular"} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-3 pb-6">
        <ul className="space-y-1">
          {bottomItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-navy-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <item.icon size={20} weight="regular" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 mx-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white text-xs font-semibold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-navy-400 truncate">Sales Manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

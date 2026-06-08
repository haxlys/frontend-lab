const COLUMNS = [
  {
    title: 'Product',
    links: ['Overview', 'Agents', 'Workflows', 'Integrations', 'Pricing'],
  },
  {
    title: 'Developers',
    links: ['Docs', 'API Reference', 'Examples', 'Changelog', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Customers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA', 'Trust Center'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green flex items-center justify-center font-display font-bold text-sm">
                N
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Neura
              </span>
            </a>
            <p className="mt-4 text-sm text-white/45 max-w-xs leading-relaxed">
              Intelligence, accelerated. Built in San Francisco, Tokyo, and
              Berlin.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {['github', 'twitter', 'linkedin', 'discord'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <span className="text-[10px] font-mono uppercase">
                    {s[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© 2026 Neura Labs, Inc. All rights reserved.</span>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}

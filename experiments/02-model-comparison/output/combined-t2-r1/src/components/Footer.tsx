import { motion } from 'motion/react'

const cols = [
  {
    title: 'Product',
    items: ['Overview', 'Workflow', 'Pricing', 'Changelog', 'Status'],
  },
  {
    title: 'Resources',
    items: ['Docs', 'API reference', 'Cookbook', 'Templates', 'Community'],
  },
  {
    title: 'Company',
    items: ['About', 'Customers', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    items: ['Privacy', 'Terms', 'Security', 'DPA', 'Sub-processors'],
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                  <defs>
                    <linearGradient id="flg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#c4b5fd" />
                      <stop offset="60%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z"
                    fill="none"
                    stroke="url(#flg)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="2.5" fill="url(#flg)" />
                </svg>
              </span>
              <span className="text-[15px] font-medium tracking-tight">Aether</span>
            </div>
            <p className="mt-4 max-w-[36ch] text-[13.5px] leading-[1.55] text-zinc-500">
              The autonomous reasoning layer for engineering teams. Built in
              Brooklyn & Berlin.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {['GH', 'X', 'LI', 'DC'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500 transition-colors duration-200 hover:border-white/20 hover:text-zinc-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2"
            >
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-[13.5px] text-zinc-300 transition-colors duration-200 hover:text-white">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-[12px] text-zinc-500 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              All systems normal
            </span>
            <span className="text-zinc-700">·</span>
            <span>99.99% past 90 days</span>
          </div>
          <p>© {new Date().getFullYear()} Aether Labs, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

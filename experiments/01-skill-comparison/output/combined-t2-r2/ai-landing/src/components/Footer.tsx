import { ArrowUpRight } from '@phosphor-icons/react'

const footerLinks = {
  Product: ['Platform', 'Agents', 'API Reference', 'Changelog', 'Status'],
  Resources: ['Documentation', 'Guides', 'Examples', 'Blog', 'Community'],
  Company: ['About', 'Careers', 'Contact', 'Legal', 'Privacy'],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue" />
              <span className="font-semibold tracking-tight text-lg">Nexus</span>
            </a>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Intelligence that thinks ahead. Built for teams who refuse to wait.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium text-white/25 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight
                        size={11}
                        weight="bold"
                        className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} Nexus AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/20">
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

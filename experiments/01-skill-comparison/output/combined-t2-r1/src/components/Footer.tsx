import { GithubLogo, XLogo, LinkedinLogo } from '@phosphor-icons/react'

const FOOTER_LINKS = {
  Product: ['Platform', 'Integrations', 'Changelog', 'Pricing'],
  Resources: ['Documentation', 'API Reference', 'Tutorials', 'Blog'],
  Company: ['About', 'Careers', 'Contact', 'Legal'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </span>
              <span className="font-display font-semibold text-[15px] tracking-tight text-white/80">
                Nexus
              </span>
            </div>
            <p className="text-[13px] text-white/25 leading-relaxed max-w-[28ch]">
              The reasoning engine for product teams. Surface insights before you ask.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[13px] font-semibold text-white/50 mb-4 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-white/30 hover:text-white/70 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.04]">
          <p className="text-[13px] text-white/20">
            &copy; {new Date().getFullYear()} Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: GithubLogo, label: 'GitHub' },
              { Icon: XLogo, label: 'X' },
              { Icon: LinkedinLogo, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="p-2 text-white/25 hover:text-white/60 transition-colors duration-300"
              >
                <Icon size={18} weight="regular" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

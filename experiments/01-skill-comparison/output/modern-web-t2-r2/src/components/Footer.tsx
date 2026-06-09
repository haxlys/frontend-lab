export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Nexus<span className="text-neon-purple">AI</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Building intelligence infrastructure for the next generation of applications.
            </p>
          </div>
          {[
            { title: 'Product', links: ['API Reference', 'Changelog', 'Status', 'Pricing'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">2026 Nexus AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Twitter', 'GitHub', 'Discord', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

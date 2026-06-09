import ScrollReveal from './ScrollReveal';

const FOOTER_LINKS: Record<string, string[]> = {
  Product: ['Features', 'Pricing', 'API Docs', 'Changelog', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  Social: ['Twitter', 'GitHub', 'Discord', 'LinkedIn'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-neon-purple to-electric-blue opacity-70 blur-sm" />
              <div className="absolute inset-[1px] rounded-md bg-black flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="url(#footerLogo)" strokeWidth="2" strokeLinecap="round">
                  <defs>
                    <linearGradient id="footerLogo" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <span className="font-display text-xs font-bold tracking-widest text-white">
              NEXUS
            </span>
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Neural Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

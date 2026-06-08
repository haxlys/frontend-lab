import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white font-display font-semibold text-lg">
                Neural
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              The next generation of autonomous AI. Built for speed, designed for scale.
            </p>
          </div>

          {[
            { title: 'Product', links: ['Features', 'Pricing', 'API', 'Changelog'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-medium text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
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

        <ScrollReveal delay={200}>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Neural AI. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>Powered by</span>
              <span className="text-gradient font-medium">neural engine v2.4</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

import ScrollReveal from './ScrollReveal';

const footerLinks = {
  Product: ['Overview', 'Features', 'Pricing', 'Changelog', 'Roadmap'],
  Developers: ['Documentation', 'API Reference', 'SDKs', 'Status', 'Open Source'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.04),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="relative h-7 w-7">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 opacity-80 blur-[1px]" />
                  <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1L1 4v4.5C1 12.5 4 15.5 8 15.5s7-3 7-7V4L8 1z" fill="url(#fg2)" />
                      <defs>
                        <linearGradient id="fg2" x1="1" y1="1" x2="15" y2="15">
                          <stop stopColor="#8B5CF6" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-base font-semibold text-white">
                  Nexus<span className="gradient-text">AI</span>
                </span>
              </a>
              <p className="text-sm text-text-muted leading-relaxed">
                The autonomous AI platform for the next generation of builders.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
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

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} NexusAI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-text-muted hover:text-white transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

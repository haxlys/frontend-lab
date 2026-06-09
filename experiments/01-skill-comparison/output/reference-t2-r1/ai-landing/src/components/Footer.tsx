export default function Footer() {
  const columns = [
    {
      title: 'Product',
      links: ['Explore', 'Features', 'Pricing', 'Changelog', 'API'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Tutorials', 'Blog', 'Community', 'Showcase'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Contact', 'Privacy'],
    },
  ];

  return (
    <footer className="border-t border-white/5 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-lime to-neon-cyan flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="2.5" strokeLinecap="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">NovaMind</span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The most advanced AI creative engine. Transform ideas into stunning visuals in seconds.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-medium text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-500 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} NovaMind. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Twitter', 'GitHub', 'Discord', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

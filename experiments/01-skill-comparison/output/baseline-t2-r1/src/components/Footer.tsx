export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue" />
                <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-white">N</span>
                </div>
              </div>
              <span className="font-display text-base font-semibold text-white">
                Nexus<span className="text-neon-purple">AI</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Building the intelligent future, one request at a time.
            </p>
          </div>

          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Changelog', 'Status'],
            },
            {
              title: 'Developers',
              links: ['Documentation', 'API Reference', 'SDKs', 'Examples'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} NexusAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
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

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#0d0d10] mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[#f0f0f5] font-semibold">
                Synthi<span className="text-[#a29bfe]">.ai</span>
              </span>
            </div>
            <p className="text-[#9a9aae] text-sm leading-relaxed">
              The next generation AI-powered creative suite. Generate stunning visuals from text prompts.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "API", "Changelog"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Tutorials", "Blog", "Community"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Privacy", "Terms"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[#f0f0f5] text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#9a9aae] hover:text-[#f0f0f5] text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.06)] gap-4">
          <p className="text-[#6b6b80] text-sm">&copy; 2026 Synthi.ai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["X", "GitHub", "Discord"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-[#9a9aae] text-xs font-medium">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

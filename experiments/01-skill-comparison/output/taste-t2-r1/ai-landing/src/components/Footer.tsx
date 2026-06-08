import { GithubLogo, XLogo, DiscordLogo } from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Documentation"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <a href="#" className="text-white font-['Space_Grotesk'] font-bold text-lg tracking-tight">
                Nexus<span className="text-neon-purple">AI</span>
              </a>
              <p className="text-zinc-500 text-sm mt-3 max-w-[260px] leading-relaxed">
                Autonomous AI agents for the next generation of software.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><GithubLogo size={18} weight="fill" /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><XLogo size={18} weight="fill" /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><DiscordLogo size={18} weight="fill" /></a>
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white text-sm font-medium mb-3 font-['Space_Grotesk']">{title}</h4>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l}><a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-xs">&copy; {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors group">
              Status <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

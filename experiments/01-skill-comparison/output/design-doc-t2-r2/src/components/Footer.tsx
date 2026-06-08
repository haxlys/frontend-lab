export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-display font-bold text-[10px]">N</span>
          </div>
          <span className="text-sm text-white/30 font-medium">NEXUS AI © 2026</span>
        </div>

        <div className="flex items-center gap-8">
          {['Privacy', 'Terms', 'Status', 'Twitter'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

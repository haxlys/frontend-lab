const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-surface/80 backdrop-blur-xl">
    <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
        <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-extrabold">
          ADE
        </span>
        <span className="hidden sm:inline text-text-primary">ADE</span>
      </a>
      <div className="flex items-center gap-6 text-sm font-medium text-text-secondary">
        <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it works</a>
        <a href="#pricing" className="hover:text-text-primary transition-colors">Pricing</a>
        <a href="#pricing" className="ml-2 px-4 py-2 rounded-lg bg-text-primary text-surface text-sm font-semibold hover:bg-text-primary/90 transition-all">
          Get started
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar

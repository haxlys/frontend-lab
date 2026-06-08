const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-6">
    <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2.5">
        <span className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-white text-xs font-extrabold">
          ADE
        </span>
        <span className="text-sm text-text-muted">
          Agent Development Editor
        </span>
      </div>
      <div className="flex items-center gap-6 text-sm text-text-muted">
        <a href="#" className="hover:text-text-secondary transition-colors">
          Docs
        </a>
        <a href="#" className="hover:text-text-secondary transition-colors">
          Blog
        </a>
        <a href="#" className="hover:text-text-secondary transition-colors">
          Privacy
        </a>
        <a href="#" className="hover:text-text-secondary transition-colors">
          Terms
        </a>
      </div>
      <p className="text-xs text-text-muted">
        &copy; {new Date().getFullYear()} ADE. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer

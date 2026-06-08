export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-neon-purple to-electric-blue">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5Z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-geist text-sm font-semibold text-gray-400">
            Nexus AI
          </span>
        </div>
        <p className="font-inter text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Nexus AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

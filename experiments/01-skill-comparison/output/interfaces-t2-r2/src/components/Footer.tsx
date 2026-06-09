export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <span>&copy; 2026 NexaMind.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Status", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-text-muted transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#hero"
            className="group flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

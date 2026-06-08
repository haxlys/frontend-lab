// Real brand monograms rendered as inline SVG marks (no plain text wordmarks).
const brands = [
  { name: 'Linear', svg: <LinearMark /> },
  { name: 'Stripe', svg: <StripeMark /> },
  { name: 'Vercel', svg: <VercelMark /> },
  { name: 'Anthropic', svg: <AnthropicMark /> },
  { name: 'Figma', svg: <FigmaMark /> },
  { name: 'Notion', svg: <NotionMark /> },
  { name: 'Replit', svg: <ReplitMark /> },
  { name: 'Cursor', svg: <CursorMark /> },
  { name: 'Arc', svg: <ArcMark /> },
  { name: 'Perplexity', svg: <PerplexityMark /> },
  { name: 'Framer', svg: <FramerMark /> },
  { name: 'Raycast', svg: <RaycastMark /> },
]

export default function LogoMarquee() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...brands, ...brands]
  return (
    <section className="relative z-10 border-y border-white/[0.06] bg-black/30 py-10 backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
          trusted by builders shipping at
        </p>
      </div>
      <div
        className="mt-7 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
        }}
      >
        <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
          {items.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex items-center gap-2.5 text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
              title={b.name}
            >
              <span className="flex h-6 w-6 items-center justify-center opacity-80">
                {b.svg}
              </span>
              <span className="text-[15px] font-medium tracking-tight">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- Inline brand marks (single-color, monochrome, no fills dependency) ---- */

function LinearMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M3.32 13.85a8.7 8.7 0 0 1 0-3.7l1.51-.3a7.3 7.3 0 0 0 0 4.3l-1.51-.3Zm.9-6.2A8.7 8.7 0 0 1 7.6 4.5l-.2 1.5a7.3 7.3 0 0 0-2.9 2.4l-1.2-.75Zm13.55 8.7a8.7 8.7 0 0 1-3.4 1.45l-.4-1.5a7.3 7.3 0 0 0 2.85-1.2l.95 1.25Zm-13.55 0 1.2.75A8.7 8.7 0 0 0 8.5 19.5l.2-1.5a7.3 7.3 0 0 1-2.9-2.4l-1.6-1.25Zm14.4-1.85a8.7 8.7 0 0 0 0-3.7l-1.51.3a7.3 7.3 0 0 1 0 4.3l1.51-.3Zm-.9-6.2 1.2-.75a8.7 8.7 0 0 0-3.4-3.15l-.2 1.5a7.3 7.3 0 0 1 2.4 2.4Zm-9.2-4.85A8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 3.45.7l-.3 1.5A7.3 7.3 0 0 0 12 4.7a7.3 7.3 0 0 0-3.15.5l-.3-1.5Z" />
    </svg>
  )
}

function StripeMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.5 10.7c0-.9.7-1.2 1.85-1.2 1.65 0 3.75.5 5.4 1.4V6.55c-1.8-.7-3.6-1-5.4-1-4.4 0-7.35 2.3-7.35 6.15 0 6 8.25 5 8.25 7.6 0 1.05-.9 1.4-2.2 1.4-1.9 0-4.3-.75-6.2-1.85v4.5c2.1.9 4.2 1.25 6.2 1.25 4.55 0 7.65-2.25 7.65-6.1.05-6.5-8.2-5.3-8.2-7.8Z" />
    </svg>
  )
}

function VercelMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 3 2 21h20L12 3Z" />
    </svg>
  )
}

function AnthropicMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2 2 22h4l1.7-4.2h7.6L17 22h4L12 2Zm-3 12 2.5-6.4L14 14H9Z" />
    </svg>
  )
}

function FigmaMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 3h3v6H9a3 3 0 0 1 0-6Z" />
      <path d="M12 3h3a3 3 0 0 1 0 6h-3V3Z" />
      <path d="M9 9h3v6H9a3 3 0 0 1 0-6Z" />
      <path d="M12 9h3a3 3 0 0 1 0 6h-3V9Z" />
      <path d="M9 15h3v3a3 3 0 1 1-3-3Z" />
    </svg>
  )
}

function NotionMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 7v10M16 7v10M8 7l8 10" />
    </svg>
  )
}

function ReplitMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="3.5" width="7" height="6" rx="1.2" />
      <rect x="13" y="3.5" width="7" height="6" rx="1.2" />
      <rect x="4" y="14.5" width="7" height="6" rx="1.2" />
      <rect x="13" y="9.5" width="7" height="6" rx="1.2" />
    </svg>
  )
}

function CursorMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M5 4l13 7-6 1.5-1.5 6L5 4Z" />
    </svg>
  )
}

function ArcMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12a8 8 0 0 1 14-5" />
    </svg>
  )
}

function PerplexityMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4 4h4v4H4V4Zm6 0h4v4h-4V4Zm6 0h4v4h-4V4ZM4 10h4v4H4v-4Zm12 0h4v4h-4v-4ZM4 16h4v4H4v-4Zm6 0h4v4h-4v-4Zm6 0h4v4h-4v-4Z" />
    </svg>
  )
}

function FramerMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5 3h14v6h-7l7 6v6h-7l-7-6h7l-7-6V3Z" />
    </svg>
  )
}

function RaycastMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 13l5-5 8 8-5 5H3v-8Z" />
      <path d="M14 8l5-5h2v2l-5 5" />
    </svg>
  )
}

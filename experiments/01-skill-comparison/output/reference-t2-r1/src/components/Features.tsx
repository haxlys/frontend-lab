export default function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: 'Lightning Fast',
      desc: 'Generate high-resolution images in under 3 seconds with our optimized inference pipeline.',
      color: 'neon-lime',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
      title: 'Infinite Styles',
      desc: 'From photorealism to anime — 100+ artistic styles with custom LoRA blending.',
      color: 'neon-cyan',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Collaborative',
      desc: 'Real-time team workspaces. Share, remix, and iterate together seamlessly.',
      color: 'neon-violet',
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Why creators choose{' '}
          <span className="bg-gradient-to-r from-neon-lime to-neon-cyan bg-clip-text text-transparent">
            NovaMind
          </span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Purpose-built for creative professionals who demand speed, quality, and control.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative p-8 rounded-2xl bg-charcoal-800/50 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-charcoal-800/80"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${f.color}/20 to-${f.color}/5 flex items-center justify-center text-${f.color} mb-5 group-hover:shadow-lg group-hover:shadow-${f.color}/10 transition-shadow`}
            >
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

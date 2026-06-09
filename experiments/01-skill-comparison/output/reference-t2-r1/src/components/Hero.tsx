import { useState } from 'react';

const PLACEHOLDER_TEXTS = [
  'A cyberpunk city at golden hour...',
  'Abstract geometric patterns in neon...',
  'Minimalist product photography...',
  'Surreal dreamscape with floating islands...',
  'Retro-futuristic poster design...',
];

export default function Hero() {
  const [prompt, setPrompt] = useState('');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  const cyclePlaceholder = () => {
    setPlaceholderIdx((prev) => (prev + 1) % PLACEHOLDER_TEXTS.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,255,54,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neon-lime/10 border border-neon-lime/20 rounded-full mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
          <span className="text-neon-lime text-sm font-medium">Now in public beta</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Create{' '}
          <span className="bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-violet bg-clip-text text-transparent">
            Stunning AI
          </span>{' '}
          Visuals
          <br />
          in Seconds
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Transform your ideas into breathtaking images with the most advanced AI creative engine.
          No design skills required — just type and create.
        </p>

        <div className="animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div className="relative group animate-pulse-glow rounded-2xl">
            <div className="flex items-center gap-3 bg-charcoal-700/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-charcoal-700/90">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c4ff36" strokeWidth="2" strokeLinecap="round" className="shrink-0">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={PLACEHOLDER_TEXTS[placeholderIdx]}
                onFocus={cyclePlaceholder}
                className="flex-1 bg-transparent text-white text-base placeholder:text-zinc-500 outline-none min-w-0"
              />
              <button className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-neon-lime to-neon-cyan text-black hover:shadow-lg hover:shadow-neon-lime/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs text-zinc-500">Try:</span>
            {['3D render', 'Oil painting', 'Cyberpunk', 'Minimalist', 'Watercolor'].map((tag) => (
              <button
                key={tag}
                onClick={() => setPrompt(tag)}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:border-white/15 hover:bg-white/10 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16 text-zinc-500 text-sm animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          {[
            { value: '2M+', label: 'Images created' },
            { value: '50K+', label: 'Creators' },
            { value: '4.9', label: 'User rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

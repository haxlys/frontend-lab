interface GalleryItem {
  id: number;
  title: string;
  tag: string;
  gradient: string;
  icon: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: 'Neon Metropolis', tag: 'Cyberpunk', gradient: 'from-purple-600 via-pink-500 to-orange-400', icon: '🏙️' },
  { id: 2, title: 'Minimal Wave', tag: 'Minimalist', gradient: 'from-slate-700 via-slate-500 to-slate-300', icon: '🌊' },
  { id: 3, title: 'Dreamscape Forest', tag: 'Fantasy', gradient: 'from-emerald-600 via-teal-500 to-cyan-400', icon: '🌿' },
  { id: 4, title: 'Abstract Flow', tag: 'Abstract', gradient: 'from-indigo-600 via-violet-500 to-fuchsia-400', icon: '🎨' },
  { id: 5, title: 'Neo Tokyo', tag: 'Anime', gradient: 'from-rose-600 via-red-500 to-yellow-400', icon: '🗼' },
  { id: 6, title: 'Glass Prism', tag: '3D Art', gradient: 'from-cyan-500 via-blue-400 to-indigo-300', icon: '💎' },
  { id: 7, title: 'Urban Frame', tag: 'Architecture', gradient: 'from-zinc-700 via-zinc-500 to-zinc-300', icon: '🏛️' },
  { id: 8, title: 'Liquid Type', tag: 'Typography', gradient: 'from-orange-600 via-amber-500 to-yellow-400', icon: '🔤' },
  { id: 9, title: 'Golden Hour', tag: 'Photography', gradient: 'from-amber-600 via-yellow-500 to-orange-300', icon: '📷' },
  { id: 10, title: 'Mecha Core', tag: '3D Art', gradient: 'from-blue-700 via-cyan-600 to-teal-400', icon: '🤖' },
  { id: 11, title: 'Zen Garden', tag: 'Nature', gradient: 'from-green-700 via-emerald-500 to-lime-300', icon: '🌳' },
  { id: 12, title: 'Vector Bloom', tag: 'Illustration', gradient: 'from-fuchsia-600 via-pink-500 to-rose-400', icon: '🌸' },
  { id: 13, title: 'Dark Signals', tag: 'Cyberpunk', gradient: 'from-violet-800 via-purple-600 to-pink-500', icon: '📡' },
  { id: 14, title: 'Pure Geometry', tag: 'Minimalist', gradient: 'from-gray-800 via-gray-600 to-gray-400', icon: '◼' },
  { id: 15, title: 'Cosmic Dust', tag: 'Abstract', gradient: 'from-indigo-800 via-violet-600 to-purple-400', icon: '✨' },
  { id: 16, title: 'Kitsune', tag: 'Anime', gradient: 'from-orange-700 via-red-500 to-amber-400', icon: '🦊' },
];

interface GalleryProps {
  activeTag: string;
}

export default function Gallery({ activeTag }: GalleryProps) {
  const filtered =
    activeTag === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.tag === activeTag);

  return (
    <section id="explore" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {activeTag === 'All' ? 'Trending Creations' : activeTag}
        </h2>
        <button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
          View all
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {filtered.map((item, index) => (
          <GalleryCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-zinc-500">
          No results for &quot;{activeTag}&quot; &mdash; try another category.
        </div>
      )}
    </section>
  );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <div
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-60 group-hover:opacity-40 transition-opacity duration-300">
          {item.icon}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
          <span className="text-xs text-zinc-400">{item.tag}</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Like">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Share">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </div>
    </div>
  );
}

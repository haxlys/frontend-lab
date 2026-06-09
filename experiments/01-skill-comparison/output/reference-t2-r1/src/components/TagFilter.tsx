import { useState } from 'react';

const ALL_TAGS = [
  'All',
  '3D Art',
  'Cyberpunk',
  'Minimalist',
  'Photography',
  'Illustration',
  'Abstract',
  'Anime',
  'Fantasy',
  'Nature',
  'Architecture',
  'Typography',
];

interface TagFilterProps {
  activeTag: string;
  onTagChange: (tag: string) => void;
}

export default function TagFilter({ activeTag, onTagChange }: TagFilterProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleTags = showAll ? ALL_TAGS : ALL_TAGS.slice(0, 7);

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-2 min-w-max px-6 py-3">
        {visibleTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeTag === tag
                ? 'bg-white text-black shadow-lg'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {tag}
          </button>
        ))}
        {!showAll && ALL_TAGS.length > 7 && (
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all"
          >
            +{ALL_TAGS.length - 7} more
          </button>
        )}
      </div>
    </div>
  );
}

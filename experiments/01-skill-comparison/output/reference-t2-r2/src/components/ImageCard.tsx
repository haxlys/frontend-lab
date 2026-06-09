import type { ImageItem } from "../data";

interface ImageCardProps {
  item: ImageItem;
  index: number;
}

export default function ImageCard({ item, index }: ImageCardProps) {
  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-[#1e1e27] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[rgba(108,92,231,0.15)] hover:z-10"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="aspect-auto w-full overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ aspectRatio: `${item.width}/${item.height}` }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-[#f0f0f5] text-sm leading-snug line-clamp-2 font-medium">
          {item.prompt}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded-full bg-[rgba(108,92,231,0.3)] text-[#a29bfe] backdrop-blur-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="w-8 h-8 rounded-lg bg-[rgba(0,0,0,0.5)] backdrop-blur-md flex items-center justify-center hover:bg-[rgba(108,92,231,0.5)] transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(item.prompt);
          }}
          title="Copy prompt"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

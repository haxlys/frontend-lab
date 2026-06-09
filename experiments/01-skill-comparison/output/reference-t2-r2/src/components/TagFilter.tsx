import { TAGS } from "../data";

interface TagFilterProps {
  activeTag: string;
  onTagChange: (tag: string) => void;
}

export default function TagFilter({ activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 px-4">
      {TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
            activeTag === tag
              ? "bg-[rgba(108,92,231,0.2)] text-[#a29bfe] border-[rgba(108,92,231,0.5)] shadow-[0_0_20px_rgba(108,92,231,0.15)]"
              : "bg-[rgba(255,255,255,0.04)] text-[#9a9aae] border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[#f0f0f5] hover:border-[rgba(255,255,255,0.15)]"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

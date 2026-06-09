import { useMemo } from "react";
import GALLERY_ITEMS, { type ImageItem } from "../data";
import ImageCard from "./ImageCard";

interface ImageGalleryProps {
  activeTag: string;
  searchQuery: string;
}

export default function ImageGallery({ activeTag, searchQuery }: ImageGalleryProps) {
  const filtered = useMemo(() => {
    let items: ImageItem[] = GALLERY_ITEMS;

    if (activeTag !== "All") {
      items = items.filter((item) => item.tags.includes(activeTag));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.prompt.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q)) ||
          item.alt.toLowerCase().includes(q)
      );
    }

    return items;
  }, [activeTag, searchQuery]);

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.04)] flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-[#6b6b80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-[#f0f0f5] text-lg font-semibold mb-2">No results found</h3>
        <p className="text-[#9a9aae] text-sm max-w-md">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {filtered.map((item, index) => (
        <div key={item.id} className="break-inside-avoid">
          <ImageCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
}

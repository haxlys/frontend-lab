import { useState, useRef, useEffect, type KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div
        className={`absolute -inset-[1.5px] rounded-2xl bg-gradient-to-r from-[#6c5ce7] via-[#a29bfe] to-[#00cec9] opacity-70 transition-opacity duration-300 ${
          isFocused ? "opacity-100" : "opacity-40 group-hover:opacity-60"
        }`}
      />
      <div className="relative flex items-center bg-[#141419] rounded-2xl px-5 py-4 gap-3 border border-transparent">
        <svg
          className="w-5 h-5 text-[#6b6b80] shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyPress}
          placeholder="Describe what you want to create..."
          className="flex-1 bg-transparent text-[#f0f0f5] placeholder-[#6b6b80] outline-none text-base font-sans"
        />
        <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-[#6b6b80] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-md leading-none font-sans">
          /
        </kbd>
        <button
          onClick={handleSubmit}
          disabled={!query.trim()}
          className="flex items-center gap-1.5 px-4 py-1.5 bg-[#6c5ce7] hover:bg-[#5a4bd1] disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors duration-200 shrink-0"
        >
          <span>Generate</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

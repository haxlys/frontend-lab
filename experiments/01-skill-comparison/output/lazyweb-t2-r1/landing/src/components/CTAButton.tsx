export default function CTAButton({
  children,
  className = '',
  size = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'lg';
}) {
  const sizeClasses = size === 'lg' ? 'px-10 py-4 text-base' : 'px-7 py-3 text-sm';

  return (
    <button
      className={`relative group cursor-pointer ${sizeClasses} rounded-full font-semibold text-white overflow-hidden transition-all duration-500 ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-electric-blue to-emerald animate-glow-pulse" />
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-electric-blue to-emerald opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 scale-110 group-hover:scale-125" />
      <span className="absolute inset-[1px] rounded-full bg-black transition-colors duration-500 group-hover:bg-black/80" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>
  );
}

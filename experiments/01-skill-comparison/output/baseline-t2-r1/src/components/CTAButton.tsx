interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
}

export default function CTAButton({ children, className = '', variant = 'primary' }: CTAButtonProps) {
  const base =
    'relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold font-display rounded-xl transition-all duration-500 overflow-hidden group';

  const variants = {
    primary:
      'bg-white text-black hover:shadow-[0_0_40px_rgba(139,92,246,0.4),0_0_80px_rgba(59,130,246,0.2)] hover:scale-[1.03] active:scale-[0.98]',
    outline:
      'text-white hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'outline' && (
        <>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple via-electric-blue to-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-[1px] rounded-[11px] bg-black" />
        </>
      )}
      <span className={variant === 'outline' ? 'relative' : 'relative'}>{children}</span>
      {variant === 'primary' && (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </button>
  );
}

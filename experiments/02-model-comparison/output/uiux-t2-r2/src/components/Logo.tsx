type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-label="Nebula logo"
      role="img"
    >
      <defs>
        <linearGradient id="nebulaLogo" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="0.55" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <filter id="nebulaGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M6 24 L16 6 L26 24 Z"
        fill="none"
        stroke="url(#nebulaLogo)"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#nebulaGlow)"
      />
      <circle cx="16" cy="20" r="2.2" fill="url(#nebulaLogo)" />
    </svg>
  );
}

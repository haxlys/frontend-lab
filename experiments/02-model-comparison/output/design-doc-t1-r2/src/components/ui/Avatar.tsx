type Size = 'xs' | 'sm' | 'md' | 'lg';

const sizeMap: Record<Size, string> = {
  xs: 'h-5 w-5 text-[10px]',
  sm: 'h-6 w-6 text-[11px]',
  md: 'h-7 w-7 text-xs',
  lg: 'h-9 w-9 text-sm',
};

const palette = [
  'bg-brand-500 text-white',
  'bg-emerald-500 text-white',
  'bg-amber-500 text-white',
  'bg-rose-500 text-white',
  'bg-indigo-500 text-white',
  'bg-sky-500 text-white',
  'bg-slate-700 text-white',
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function Avatar({
  name,
  size = 'md',
  className = '',
}: {
  name: string;
  size?: Size;
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const color = palette[hash(name) % palette.length];
  return (
    <span
      title={name}
      className={`inline-flex items-center justify-center rounded-full font-semibold ring-2 ring-white ${color} ${sizeMap[size]} ${className}`}
    >
      {initials}
    </span>
  );
}

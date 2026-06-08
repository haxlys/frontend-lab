import { motion } from "motion/react";

const LOGOS = [
  { name: "Helix", path: "M4 16 L20 4 M4 4 L20 16", type: "icon" },
  { name: "Vector", path: "M4 4 L20 20 L20 4", type: "icon" },
  { name: "Quanta", path: "M12 2 L22 12 L12 22 L2 12 Z", type: "icon" },
  { name: "Nimbus", path: "M4 18 Q12 4 20 18", type: "icon" },
  { name: "Lattice", path: "M4 4 H20 V20 H4 Z M4 12 H20 M12 4 V20", type: "icon" },
  { name: "Photon", path: "M12 2 V22 M2 12 H22 M5 5 L19 19 M19 5 L5 19", type: "icon" },
  { name: "Orbital", path: "M12 4 a8 8 0 1 0 0 16 a8 8 0 1 0 0 -16 M4 12 H20", type: "icon" },
  { name: "Crispr", path: "M6 4 V20 M6 8 H18 V12 H6 M18 16 H6", type: "icon" },
];

export function LogoWall() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section
      className="relative border-y border-white/[0.05] bg-ink-950/40 py-10"
      aria-label="Trusted by"
    >
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
          Trusted by engineers at
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row.map((l, i) => (
            <div
              key={i}
              className="flex h-9 min-w-[180px] items-center justify-center gap-3 text-ink-300/70"
              aria-label={l.name}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d={l.path}
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-[15px] font-medium tracking-tight">
                {l.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

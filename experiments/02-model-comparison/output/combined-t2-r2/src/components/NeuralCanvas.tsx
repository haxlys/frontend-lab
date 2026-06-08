import { motion, useReducedMotion } from "motion/react";

const NODES = [
  { x: 50, y: 18, label: "ctx" },
  { x: 18, y: 42, label: "tool" },
  { x: 82, y: 38, label: "kg" },
  { x: 32, y: 70, label: "mem" },
  { x: 72, y: 78, label: "log" },
  { x: 50, y: 50, label: "axm" },
  { x: 14, y: 14, label: "in" },
  { x: 88, y: 14, label: "out" },
];

const EDGES: Array<[number, number]> = [
  [0, 5], [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [6, 0], [7, 2], [1, 5], [2, 5], [3, 4],
];

export function NeuralCanvas() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.18), rgba(139,92,246,0.10) 50%, transparent 75%)",
          filter: "blur(28px)",
        }}
      />
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Animated reasoning graph"
        >
          <defs>
            <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ecfdf5" stopOpacity="1" />
              <stop offset="60%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="edgeGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
            <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          {/* concentric rings */}
          {[28, 42, 56].map((r, i) => (
            <motion.circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.15"
              strokeDasharray="0.6 1.2"
              animate={reduce ? undefined : { rotate: i % 2 ? 360 : -360 }}
              transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />
          ))}

          {/* edges */}
          {EDGES.map(([a, b], i) => {
            const A = NODES[a];
            const B = NODES[b];
            return (
              <g key={i}>
                <line
                  x1={A.x}
                  y1={A.y}
                  x2={B.x}
                  y2={B.y}
                  stroke="url(#edgeGrad)"
                  strokeWidth="0.18"
                  strokeLinecap="round"
                  filter="url(#soft)"
                />
                <motion.circle
                  r="0.55"
                  fill="#a7f3d0"
                  initial={false}
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0, 0.95, 0] }
                  }
                  transition={{
                    duration: 2.4 + (i % 4) * 0.3,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }}
                >
                  <animateMotion
                    dur={`${2.4 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.18}s`}
                    path={`M ${A.x} ${A.y} L ${B.x} ${B.y}`}
                  />
                </motion.circle>
              </g>
            );
          })}

          {/* nodes */}
          {NODES.map((n) => {
            const isCore = n.label === "axm";
            return (
              <g key={n.label}>
                {isCore && (
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="6"
                    fill="url(#nodeGrad)"
                    animate={reduce ? undefined : { scale: [1, 1.18, 1] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isCore ? 2.1 : 1.1}
                  fill={isCore ? "#ecfdf5" : "rgba(255,255,255,0.85)"}
                  stroke={isCore ? "rgba(16,185,129,0.8)" : "rgba(255,255,255,0.3)"}
                  strokeWidth="0.18"
                />
                <text
                  x={n.x}
                  y={n.y - 2.6}
                  textAnchor="middle"
                  fontSize="1.6"
                  fontFamily="var(--font-mono)"
                  fill="rgba(255,255,255,0.55)"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
          <span className="h-1 w-1 rounded-full bg-neon-400" />
          reasoning · live
        </div>
      </div>
    </div>
  );
}

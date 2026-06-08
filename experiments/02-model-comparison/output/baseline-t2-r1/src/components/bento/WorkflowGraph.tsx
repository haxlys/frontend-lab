interface Node {
  id: number
  x: number
  y: number
  active: boolean
  label: string
}

const NODES: Node[] = [
  { id: 1, x: 50, y: 30, active: true, label: 'parse' },
  { id: 2, x: 25, y: 55, active: false, label: 'extract' },
  { id: 3, x: 75, y: 55, active: true, label: 'route' },
  { id: 4, x: 35, y: 80, active: false, label: 'verify' },
  { id: 5, x: 65, y: 80, active: true, label: 'synth' },
  { id: 6, x: 50, y: 95, active: false, label: 'deliver' },
]

const EDGES: [number, number][] = [
  [1, 2], [1, 3], [2, 4], [3, 5], [4, 5], [4, 6], [5, 6],
]

export default function WorkflowGraph() {
  return (
    <div className="relative w-full h-full min-h-[200px]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {EDGES.map(([a, b], i) => {
          const na = NODES.find((n) => n.id === a)!
          const nb = NODES.find((n) => n.id === b)!
          return (
            <g key={i}>
              <line
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="url(#edge-grad)"
                strokeWidth="0.3"
                strokeDasharray="1 1"
                opacity="0.4"
              />
              {na.active && nb.active && (
                <circle r="0.6" fill="#10B981">
                  <animate
                    attributeName="cx"
                    values={`${na.x};${nb.x}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${na.y};${nb.y}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          )
        })}
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {NODES.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 group/node"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              n.active
                ? 'bg-neon-green shadow-[0_0_12px_#10B981]'
                : 'bg-white/20'
            }`}
          />
          <span className="absolute left-1/2 -translate-x-1/2 top-5 text-[9px] font-mono uppercase tracking-wider text-white/50 whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  )
}

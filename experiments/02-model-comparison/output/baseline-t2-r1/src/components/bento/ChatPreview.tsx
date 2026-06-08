const PHRASES = [
  'translate to Japanese',
  'add three bullet points',
  'convert to JSON',
  'shorten to one paragraph',
]

export default function ChatPreview() {
  return (
    <div className="relative w-full h-full flex flex-col gap-3 justify-end">
      <div className="flex justify-end">
        <div className="glass rounded-2xl rounded-tr-md px-3.5 py-2 text-sm text-white/90 max-w-[85%]">
          Refactor the Q3 plan and add milestones.
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-[10px] font-display font-bold shrink-0">
          N
        </div>
        <div className="glass rounded-2xl rounded-tl-md px-3.5 py-2.5 text-sm text-white/80 max-w-[90%] space-y-1.5">
          <p>
            Rewrote plan into 4 milestones with owner, deadline, and exit
            criteria. <span className="text-neon-green">Done.</span>
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {PHRASES.map((p) => (
              <button
                key={p}
                className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/30 pt-1">
        <span className="w-1 h-1 rounded-full bg-neon-green animate-pulse" />
        streaming · 184 tok/s
      </div>
    </div>
  )
}

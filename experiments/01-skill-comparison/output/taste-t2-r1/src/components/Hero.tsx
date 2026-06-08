export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(45,212,191,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-24 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100 leading-[1.05]">
                Build AI agents
                <br />
                <span className="text-accent">with language,</span>
                <br />
                not boilerplate.
              </h1>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[500px]">
                ADE is the developer-first editor for designing, testing, and
                deploying AI agents. Describe what you want in natural
                language — we handle the rest.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-accent-hover transition-all duration-200 active:scale-[0.98]"
              >
                Start building free
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] px-6 py-3 text-sm font-medium text-zinc-300 hover:border-white/[0.15] hover:text-zinc-100 transition-all duration-200"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06]">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-zinc-100 font-mono">
                  10k+
                </span>
                <span className="text-xs text-zinc-500">agents deployed</span>
              </div>
              <div className="w-px h-8 bg-white/[0.06]" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-zinc-100 font-mono">
                  4.8
                </span>
                <span className="text-xs text-zinc-500">
                  developer rating
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-white/[0.06] bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-zinc-900/80">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[11px] text-zinc-500 ml-2 font-mono">
                  agent-editor.ade
                </span>
              </div>
              <div className="p-5 space-y-4 font-mono text-sm">
                <div>
                  <span className="text-zinc-500">{"> "}</span>
                  <span className="text-zinc-300">
                    Create an agent that monitors server logs for anomalies
                  </span>
                </div>
                <div className="pl-4 border-l border-accent/30 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-accent">agent</span>
                    <span className="text-zinc-500">LogMonitor</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-zinc-500">tools:</span>
                    <span className="text-zinc-400">
                      [tail_logs, send_alert, query_metrics]
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-zinc-500">trigger:</span>
                    <span className="text-zinc-400">
                      on_error_rate &gt; 5%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500">{"> "}</span>
                  <span className="text-emerald-400/80">
                    Agent definition complete. Ready to test.
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded text-[11px] bg-accent-bg text-accent border border-accent-border">
                    test
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-zinc-800 text-zinc-400 border border-white/[0.05]">
                    deploy
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

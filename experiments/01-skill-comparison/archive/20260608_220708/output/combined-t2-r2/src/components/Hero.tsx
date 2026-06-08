export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
            Agent Development Editor
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build autonomous agents with natural language.
          </h1>
          <p className="max-w-[52ch] text-lg leading-relaxed text-slate-500">
            Design, test, and deploy AI agents without writing a single line of orchestration code. ADE translates your intent into production-ready agent workflows.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center rounded-lg bg-indigo-500 px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-600 active:scale-[0.98]"
            >
              Start building free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center rounded-lg border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-slate-900 p-1 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[11px] font-medium text-slate-400">agent-builder.ade</span>
            </div>
            <div className="space-y-3 p-5 font-mono text-sm leading-relaxed">
              <p className="text-slate-300">
                <span className="text-indigo-400">&gt;</span>{" "}
                <span className="text-slate-400">describe agent</span>
              </p>
              <p className="text-slate-100">
                A support agent that triages incoming tickets, classifies urgency, and either responds with KB articles or escalates to the on-call engineer.
              </p>
              <div className="h-3" />
              <p className="text-slate-300">
                <span className="text-emerald-400">~</span>{" "}
                <span className="text-slate-400">agent generated</span>
              </p>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Agent Blueprint</p>
                <div className="mt-3 space-y-1.5 text-xs">
                  <p className="text-slate-300">
                    <span className="text-indigo-400">trigger:</span> new_ticket
                  </p>
                  <p className="text-slate-300">
                    <span className="text-indigo-400">classify:</span> urgency + category
                  </p>
                  <p className="text-slate-300">
                    <span className="text-indigo-400">route:</span> kb_response | escalation
                  </p>
                  <p className="text-slate-300">
                    <span className="text-indigo-400">tools:</span> vector_search, slack_notify
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-500">ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-50/60 blur-3xl" />
    </section>
  );
}

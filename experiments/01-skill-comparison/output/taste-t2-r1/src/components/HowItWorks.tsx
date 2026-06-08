const steps = [
  {
    step: "01",
    title: "Design",
    description:
      "Write a prompt describing the agent you need. ADE auto-generates the tool set, memory config, and reasoning strategy. Refine with a few clicks.",
    code: (
      <div className="font-mono text-xs space-y-1.5">
        <span className="text-zinc-500">{"// describe your agent"}</span>
        <div>
          <span className="text-emerald-400">define</span>{" "}
          <span className="text-zinc-300">agent</span>{" "}
          <span className="text-accent">CustomerSupport</span>
        </div>
        <div className="pl-4 text-zinc-500">
          {"{"}
          <br />
          {"  role: "}
          <span className="text-zinc-400">
            &quot;triage &amp; resolve tickets&quot;
          </span>
          <br />
          {"  knowledge: [docs, policies]"}
          <br />
          {"  escalation: on_complex"}
          <br />
          {"}"}
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Build",
    description:
      "Run the agent in a sandboxed environment with mock data. See every tool call, reasoning step, and output — then iterate in seconds.",
    code: (
      <div className="font-mono text-xs space-y-1.5">
        <span className="text-zinc-500">{"// test in sandbox"}</span>
        <div>
          <span className="text-accent">ade test</span>{" "}
          <span className="text-zinc-400">CustomerSupport</span>
        </div>
        <div className="pl-4 text-zinc-500">
          {"{"}
          <br />
          {"  input: "}
          <span className="text-zinc-400">
            &quot;My order hasn&apos;t shipped&quot;
          </span>
          <br />
          {"  tools called: [lookup_order, check_inventory]"}
          <br />
          {"  resolution: "}
          <span className="text-emerald-400/80">
            &quot;Backordered — ETA June 12&quot;
          </span>
          <br />
          {"}"}
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Ship with confidence. ADE generates infrastructure configs, sets up monitoring, and provides a real-time dashboard for deployed agents.",
    code: (
      <div className="font-mono text-xs space-y-1.5">
        <span className="text-zinc-500">{"// ship to production"}</span>
        <div>
          <span className="text-accent">ade deploy</span>{" "}
          <span className="text-zinc-400">CustomerSupport</span>{" "}
          <span className="text-zinc-600">--env prod</span>
        </div>
        <div className="pl-4 text-zinc-500">
          {"{"}
          <br />
          {"  infra: "}
          <span className="text-zinc-400">AWS ECS</span>
          <br />
          {"  observability: "}
          <span className="text-zinc-400">Datadog</span>
          <br />
          {"  status: "}
          <span className="text-emerald-400/80">running</span>
          <br />
          {"}"}
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="workflow" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            From idea to production
            <br />
            in three steps.
          </h2>
          <p className="text-base text-zinc-400 max-w-[600px]">
            No YAML configs. No infrastructure wrestling. Just describe, test,
            and ship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="group relative flex flex-col gap-5 rounded-2xl border border-white/[0.05] bg-zinc-900/30 p-6 md:p-8 hover:border-white/[0.1] transition-all duration-300"
            >
              <span className="text-xs font-mono font-medium text-accent tracking-wider">
                {s.step}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-zinc-100">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.04] bg-zinc-950 p-4 overflow-hidden">
                {s.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

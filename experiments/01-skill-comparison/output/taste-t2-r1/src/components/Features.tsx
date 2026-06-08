const features = [
  {
    title: "Natural Language Design",
    description:
      "Describe agent behavior in plain English. No YAML, no DSL, no config hell. ADE translates your intent into production-ready agent definitions.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 5h4v4H3zM3 11h4v4H3zM9 3h8v2H9zM9 8h8v2H9zM9 13h8v2H9z" />
      </svg>
    ),
    accent: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    title: "Interactive Sandbox",
    description:
      "Test agents against simulated inputs before deployment. Watch reasoning traces, tool calls, and outputs in real-time with full observability.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="10" cy="10" r="7" />
        <path d="M8.5 7.5l4 2.5-4 2.5V7.5z" />
      </svg>
    ),
    accent: "from-sky-500/10 to-sky-500/5",
  },
  {
    title: "One-Click Deploy",
    description:
      "Ship agents to AWS, GCP, or your own infra with a single command. Auto-generated Dockerfiles, IAM policies, and monitoring dashboards included.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M13 5l3 3-3 3" />
        <path d="M16 8H7a4 4 0 000 8h2" />
      </svg>
    ),
    accent: "from-violet-500/10 to-violet-500/5",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            Everything you need
            <br />
            to ship agents fast.
          </h2>
          <p className="text-base text-zinc-400 max-w-[600px]">
            From ideation to production, ADE covers the full agent lifecycle in
            one editor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-zinc-950 p-8 md:p-10 flex flex-col gap-5 transition-colors duration-300 hover:bg-zinc-900/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg text-accent">
                  {feature.icon}
                </span>
                <h3 className="text-base font-semibold text-zinc-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    title: "Natural Language Design",
    description:
      "Describe your agent in plain English and ADE generates the architecture, prompts, tool definitions, and evaluation harness automatically. Iterate with conversation, not configuration files.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 15.25 21A2.034 2.034 0 0 0 19 20.17L21.6 11A2.016 2.016 0 0 0 19.96 9H14.5l.96-5.25A1.002 1.002 0 0 0 14.5 2.5h-3.27a1.5 1.5 0 0 0-1.445 1.119L7.5 12.091" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15 2 2.5 3.6L21 9l-2.5 3.6L15 16" />
      </svg>
    ),
    title: "Live Agent Playground",
    description:
      "Test your agents against simulated scenarios in real time. Watch tool calls, reasoning traces, and outputs stream live. Catch edge cases before they reach production.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 7.278 3.753a.605.605 0 0 1 .56-.398h3.324c.267 0 .505.175.56.398L15.25 13.5M3.75 13.5h15M12 8.25v.008M3.75 13.5l2.99 5.484a.605.605 0 0 0 .542.315h8.436a.605.605 0 0 0 .542-.315L19.25 13.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.004 5.659V3.75H1.5m6.004 1.909V3.75h-.504" />
      </svg>
    ),
    title: "One-Click Deploy",
    description:
      "Ship your agent as an API endpoint, a Slack bot, or a web embed with a single click. Built-in observability, rate limiting, and versioning so you can iterate safely.",
  },
]

const Features = () => (
  <section id="features" className="py-28 px-6">
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold text-accent-light uppercase tracking-[0.2em]">
          Features
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Everything you need to ship AI agents
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-text-secondary leading-relaxed">
          From first prompt to production endpoint. ADE handles the plumbing so
          you can focus on what your agent does.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative p-8 rounded-2xl border border-border bg-surface-card hover:border-accent/40 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features

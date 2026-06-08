const steps = [
  {
    step: "01",
    title: "Design",
    description:
      "Describe the agent you need. ADE's LLM-powered engine generates the system prompt, tool bindings, memory strategy, and eval suite. Review the blueprint in a visual workflow editor.",
    code: `"You are a customer support agent for an e-commerce platform.
You have access to: order lookup, refund processing,
and shipping status tools. Always be polite and ask
clarifying questions before taking action."`,
  },
  {
    step: "02",
    title: "Build",
    description:
      "Enter the live playground. Send messages to your agent and watch every tool call, memory retrieval, and reasoning step happen in real time. Tweak behavior with natural language feedback.",
    code: `$ User: "Where is my order #48291?"

Agent → tool_call: lookup_order("48291")
Agent → reasoning: Order found. Status: in transit.
Agent → response: "Your order shipped yesterday and
is expected to arrive by Thursday. Tracking link sent."`,
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "One click to ship. Choose your target: REST API, Slack bot, Discord bot, or embeddable widget. Get an endpoint, API key, and built-in analytics dashboard instantly.",
    code: `$ curl https://api.ade.dev/v1/agents/agent_abc123/chat \\
  -H "Authorization: Bearer sk_live_..." \\
  -d '{"message": "Track my refund"}'`,
  },
]

const HowItWorks = () => (
  <section id="how-it-works" className="py-28 px-6 bg-surface-elevated">
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-20">
        <span className="text-xs font-semibold text-accent-light uppercase tracking-[0.2em]">
          How it works
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Design &rarr; Build &rarr; Deploy
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-text-secondary leading-relaxed">
          Three steps from idea to production agent. No infrastructure, no
          config files, no YAML.
        </p>
      </div>

      <div className="space-y-20">
        {steps.map((s, i) => (
          <div
            key={s.step}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 space-y-5">
              <span className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-accent-light to-accent opacity-40">
                {s.step}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-lg">
                {s.description}
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="rounded-xl border border-border bg-surface-card p-6 font-mono text-xs sm:text-sm leading-relaxed text-text-secondary overflow-x-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] text-text-muted uppercase tracking-widest">
                    ade agent editor
                  </span>
                </div>
                <pre className="whitespace-pre-wrap text-accent-light/90">
                  {s.code}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorks

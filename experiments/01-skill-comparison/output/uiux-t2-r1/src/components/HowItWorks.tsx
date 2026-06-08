import { Pencil, Play, Globe } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Pencil,
    title: "Design",
    description:
      "Describe your agent's goals, tools, and personality in natural language. Use pre-built templates or craft from scratch. ADE's AI assistant guides you at every step.",
  },
  {
    step: 2,
    icon: Play,
    title: "Build & Test",
    description:
      "Instantly spin up a test environment. Chat with your agent, inspect its decision tree, and refine prompts in real-time. Every interaction is logged and replayable.",
  },
  {
    step: 3,
    icon: Globe,
    title: "Deploy",
    description:
      "When ready, deploy to production. ADE generates a secure REST API, WebSocket endpoint, and embeddable chat widget — complete with monitoring and analytics.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From Idea to{" "}
            <span className="text-gradient-warm">Production</span> in Minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Three steps. That&apos;s all it takes to go from a blank canvas to a
            deployed AI agent.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent lg:left-1/2 lg:block lg:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`order-2 flex flex-col gap-4 ${
                    s.step % 2 === 0 ? "lg:order-1 lg:text-right" : "lg:order-2"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      s.step % 2 === 0
                        ? "lg:justify-end"
                        : "lg:justify-start"
                    }`}
                  >
                    <span className="rounded-lg bg-violet-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-violet-400 ring-1 ring-violet-500/20">
                      Step {s.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md leading-relaxed text-slate-400">
                    {s.description}
                  </p>
                </div>

                <div
                  className={`order-1 flex justify-center ${
                    s.step % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 ring-1 ring-violet-500/30">
                    <s.icon
                      className="h-7 w-7 text-violet-400"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 animate-pulse-glow rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

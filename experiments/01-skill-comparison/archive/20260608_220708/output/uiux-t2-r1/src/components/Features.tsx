import { MessageSquare, TestTube, Rocket } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Design",
    description:
      "Describe your agent's behavior in plain English. ADE translates your intent into a fully functional agent definition — no YAML, no JSON, no headaches.",
  },
  {
    icon: TestTube,
    title: "Live Testing Sandbox",
    description:
      "Test your agent instantly in a sandboxed environment. Watch conversations unfold in real-time, inspect tool calls, and iterate until it feels right.",
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description:
      "Ship your agent to production with a single click. ADE packages everything into a secure, scalable API endpoint with built-in observability.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-gradient">Ship Agents</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            From ideation to production, ADE streamlines the entire agent
            development lifecycle.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur transition-all hover:border-violet-500/20 hover:bg-white/[0.06]"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-400 ring-1 ring-violet-500/20 transition-colors group-hover:bg-violet-500/20 group-hover:text-violet-300">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

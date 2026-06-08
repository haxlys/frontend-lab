import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring and prototyping.",
    features: [
      "Up to 3 agents",
      "1,000 messages / month",
      "Community templates",
      "5 tools per agent",
      "Basic analytics",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For indie developers shipping agents.",
    features: [
      "Unlimited agents",
      "50,000 messages / month",
      "Custom tool integrations",
      "Team collaboration",
      "Advanced analytics & logs",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations at scale.",
    features: [
      "Unlimited everything",
      "Dedicated infrastructure",
      "SAML / SSO",
      "Audit logs & compliance",
      "Custom SLA",
      "24/7 dedicated support",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple,{" "}
            <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Start free. Scale when you&apos;re ready. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur transition-all ${
                tier.highlight
                  ? "border-violet-500/30 bg-violet-500/5 shadow-lg shadow-violet-500/10"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-violet-600/30">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-sm text-slate-400">/mo</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all ${
                  tier.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

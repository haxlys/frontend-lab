const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For solo developers exploring agent development.",
    features: [
      "3 agents",
      "Sandbox testing",
      "Community templates",
      "5k test runs / month",
      "CLI & VS Code extension",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    description: "For teams shipping agents to production.",
    features: [
      "Unlimited agents",
      "Advanced sandbox",
      "Team collaboration",
      "100k test runs / month",
      "One-click cloud deploy",
      "Monitoring dashboard",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with security and scale requirements.",
    features: [
      "Everything in Pro",
      "Self-hosted option",
      "SSO & SAML",
      "Audit logs",
      "Custom tool integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            Simple, transparent pricing.
          </h2>
          <p className="text-base text-zinc-400 max-w-[600px]">
            Start free, scale when you're ready. No hidden fees, no surprise
            bills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-7 rounded-2xl p-6 md:p-8 ${
                plan.highlight
                  ? "border-accent/40 bg-accent-bg border"
                  : "border border-white/[0.05] bg-zinc-900/20"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[11px] font-semibold text-zinc-950">
                  Most popular
                </span>
              )}

              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-zinc-100">
                  {plan.name}
                </h3>
                <p className="text-sm text-zinc-500">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-zinc-100 tracking-tight">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                )}
              </div>

              <ul className="flex flex-col gap-3 pt-4 border-t border-white/[0.05]">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2.5 text-sm text-zinc-400"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent shrink-0"
                    >
                      <path d="M3 7l3 3 5-6" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  plan.highlight
                    ? "bg-accent text-zinc-950 hover:bg-accent-hover"
                    : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

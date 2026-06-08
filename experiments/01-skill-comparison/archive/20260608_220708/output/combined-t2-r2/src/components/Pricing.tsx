import { Check } from "@phosphor-icons/react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For solo developers exploring agent workflows.",
    features: ["3 active agents", "500 test runs / month", "Community Slack access", "Public agent gallery"],
    cta: "Start free",
    href: "#",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    desc: "For teams building production agent pipelines.",
    features: [
      "Unlimited agents",
      "10,000 test runs / month",
      "Priority support",
      "Private agent registry",
      "Advanced observability",
      "Team collaboration",
    ],
    cta: "Start free trial",
    href: "#",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations with compliance and scale requirements.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "On-premise deployment",
      "Dedicated support engineer",
      "Custom SLA",
      "Audit logging",
    ],
    cta: "Talk to sales",
    href: "#",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-lg leading-relaxed text-slate-500">
            Start building for free. Upgrade when your agents outgrow the sandbox.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-indigo-200 bg-white shadow-xl shadow-indigo-100/50 ring-1 ring-indigo-500/20"
                  : "border-slate-200/60 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
              )}

              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {plan.name}
              </span>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-slate-400">{plan.period}</span>
                )}
              </div>

              <p className="mt-3 leading-relaxed text-slate-500">{plan.desc}</p>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-indigo-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={plan.href}
                  className={`inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    plan.highlighted
                      ? "bg-indigo-500 text-white hover:bg-indigo-600"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

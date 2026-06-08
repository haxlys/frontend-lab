const plans = [
  {
    name: "Free",
    desc: "에이전트 개발을 시작하는 개인 개발자",
    price: "₩0",
    period: "무료",
    cta: "시작하기",
    popular: false,
    features: [
      "월 1,000회 API 호출",
      "에이전트 3개까지 생성",
      "커뮤니티 템플릿",
      "기본 시뮬레이션 테스트",
      "5MB 스토리지",
    ],
  },
  {
    name: "Pro",
    desc: "본격적인 개발을 위한 프로 플랜",
    price: "₩39,000",
    period: "/월",
    cta: "Pro 시작하기",
    popular: true,
    features: [
      "월 50,000회 API 호출",
      "무제한 에이전트 생성",
      "고급 시뮬레이션 & A/B 테스트",
      "커스텀 도구 연동",
      "팀 협업 (최대 5명)",
      "500MB 스토리지",
      "우선 기술 지원",
    ],
  },
  {
    name: "Enterprise",
    desc: "대규모 조직을 위한 맞춤형 솔루션",
    price: "맞춤 견적",
    period: "",
    cta: "영업팀 문의",
    popular: false,
    features: [
      "무제한 API 호출",
      "전용 인프라 (VPC)",
      "SSO / SAML 인증",
      "커스텀 SLA",
      "전담 솔루션 아키텍트",
      "온프레미스 배포 옵션",
      "24/7 긴급 지원",
      "감사 로그 & 컴플라이언스",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            투명한 가격 정책
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            필요한 만큼 시작하고, 성장에 맞춰 확장하세요
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary-500 shadow-lg shadow-primary-500/10 ring-1 ring-primary-500 lg:scale-105"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-base font-medium text-slate-500">{plan.period}</span>
                )}
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:from-primary-600 hover:to-primary-700 hover:shadow-xl"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md"
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

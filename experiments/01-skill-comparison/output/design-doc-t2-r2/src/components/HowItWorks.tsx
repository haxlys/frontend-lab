const steps = [
  {
    step: "01",
    title: "Design",
    subtitle: "자연어로 설계",
    description:
      "에이전트의 목적과 역할을 자연어로 정의합니다. ADE가 자동으로 필요한 스킬, 도구, 메모리 구조를 추천합니다.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    gradient: "from-primary-400 to-primary-600",
    lineGradient: "from-primary-300 to-secondary-300",
  },
  {
    step: "02",
    title: "Build",
    subtitle: "자동 생성 & 튜닝",
    description:
      "ADE가 에이전트 코드를 자동 생성합니다. 프롬프트 엔지니어링, 파인튜닝, RAG 설정까지 한 번에 처리됩니다.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-2.48-4.3c-.2-.34-.57-.55-.97-.55H3.75a.75.75 0 000 1.5h3.33l3.33 5.78c.2.34.57.55.97.55h.03c.41 0 .79-.23.96-.58l3.32-5.78h3.56a.75.75 0 000-1.5h-4.22c-.4 0-.77.22-.96.55l-2.5 4.33z"
        />
      </svg>
    ),
    gradient: "from-secondary-400 to-secondary-600",
    lineGradient: "from-secondary-300 to-amber-300",
  },
  {
    step: "03",
    title: "Deploy",
    subtitle: "테스트 & 배포",
    description:
      "시뮬레이션 테스트를 통과하면 원클릭으로 프로덕션에 배포됩니다. 모니터링 대시보드와 로그 분석도 기본 제공됩니다.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    gradient: "from-amber-400 to-amber-600",
    lineGradient: "from-amber-300 to-emerald-300",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            어떻게 작동하나요?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            3단계로 완성하는 AI 에이전트 개발
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary-300 via-secondary-300 to-amber-300 sm:block lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className={`relative flex flex-col gap-6 sm:flex-row lg:gap-12 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start`}
              >
                <div className="flex-1 lg:w-1/2">
                  <div
                    className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 ${
                      idx % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                          STEP {item.step}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-primary-600 mb-2">{item.subtitle}</p>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

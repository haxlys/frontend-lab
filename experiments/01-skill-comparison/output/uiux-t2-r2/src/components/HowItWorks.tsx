const steps = [
  {
    step: '01',
    title: 'Design',
    subtitle: '자연어로 설계',
    description: '에이전트의 역할, 도구, 행동 규칙을 자연어로 정의합니다. ADE가 자동으로 최적의 시스템 프롬프트와 설정을 생성합니다.',
    color: 'from-brand-500 to-brand-600',
    shadow: 'shadow-brand-500/25',
  },
  {
    step: '02',
    title: 'Build',
    subtitle: '실시간 빌드 & 테스트',
    description: '내장된 대화형 콘솔에서 에이전트의 응답을 실시간으로 확인하고, 파라미터를 조정하며 완성도를 높입니다.',
    color: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/25',
  },
  {
    step: '03',
    title: 'Deploy',
    subtitle: '원클릭 배포',
    description: '완성된 에이전트를 API, 챗봇, Slack 등 원하는 채널로 즉시 배포하고, 모니터링 대시보드로 성능을 추적합니다.',
    color: 'from-emerald-500 to-emerald-600',
    shadow: 'shadow-emerald-500/25',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 mb-4">
            동작 방식
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight">
            3단계로 완성하는
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent"> AI 에이전트</span>
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-28 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-gradient-to-r from-brand-500/40 via-purple-500/40 to-emerald-500/40" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="relative mx-auto mb-8">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl font-black text-white shadow-lg ${step.shadow} relative z-10`}>
                    {step.step}
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl mx-auto`} />
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm font-semibold text-brand-400 mb-3">{step.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                  Step {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

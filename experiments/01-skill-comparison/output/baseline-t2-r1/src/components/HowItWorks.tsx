const steps = [
  {
    step: '01',
    title: 'Design',
    subtitle: '자연어로 설계',
    description: '에이전트의 페르소나, 도구, 행동 규칙을 자연어로 서술합니다. ADE가 이를 이해하고 최적의 실행 계획을 자동 생성합니다.',
    color: 'from-ade-500 to-ade-700',
  },
  {
    step: '02',
    title: 'Build',
    subtitle: '시뮬레이션 & 검증',
    description: '설계한 에이전트를 안전한 샌드박스에서 반복 실행하며 프롬프트와 로직을 다듬습니다. AI 코파일럿이 개선 방향을 제안합니다.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    step: '03',
    title: 'Deploy',
    subtitle: '프로덕션 배포',
    description: '검증이 완료되면 버튼 하나로 API 엔드포인트가 생성됩니다. 자동 확장, 모니터링, 버전 관리가 내장되어 있습니다.',
    color: 'from-emerald-500 to-teal-600',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-surface-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            어떻게 동작하나요?
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            아이디어에서 배포까지, 단 3단계로 완성됩니다.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-slate-700 to-transparent" />
              )}
              <div className="text-center">
                <div className={`inline-flex w-24 h-24 rounded-2xl bg-gradient-to-br ${s.color} items-center justify-center text-3xl font-black text-white shadow-lg mb-6`}>
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-ade-400 font-semibold mb-3">{s.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

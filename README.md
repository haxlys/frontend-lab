# Frontend Lab

코딩 에이전트(Coding Agent)가 생성하는 프론트엔드 UI/UX 품질에 영향을 미치는 요인들을 실험하고 분석하는 연구 저장소입니다.

> "에이전트에 어떤 스킬(Skill)을 주입하느냐에 따라 결과물 품질이 얼마나 달라질까?"

## 실험

### [Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향](docs/experiments/01-skill-comparison/plan.md)

5개 스킬 그룹(Baseline, Taste, UI-UX Pro Max, DESIGN.md, Taste+DESIGN.md) × 2개 태스크(대시보드, 랜딩 페이지) × 2회 반복 = 총 20회 코드 생성, Docker 격리 환경에서 실행.

| Group | Overall | 주요 발견 |
|---|---|---|
| UI-UX Pro Max | **3.61** | 🥇 1위 — 스킬이 가장 큰 효과를 보인 그룹 |
| Taste | **3.54** | 디자인 감각(sensibility) 보강 |
| Baseline | **3.14** | 스킬 없이 모델 기본기만으로 생성 |
| DESIGN.md | **3.14** | 디자인 문서 단독 주입 |
| Taste+DESIGN.md | **3.11** | 두 스킬 조합 시 토큰 명명 충돌로 오히려 역효과 |

- [전체 결과 보고서](experiments/01-skill-comparison/evaluation/summary-report.md) — 점수, 스크린샷, 가설 검증 포함
- [블라인드 점수 CSV](experiments/01-skill-comparison/evaluation/blind_scores.csv)
- [정량 지표 CSV](experiments/01-skill-comparison/evaluation/metrics.csv)

## 연구 문서

- [Coding Agent UI/UX Quality Impact Factor Analysis](docs/research/agent-ui-ux-factors.md) — 에이전트 프론트엔드 출력 품질에 영향을 미치는 요인 분석

## 구조

```
frontend-lab/
├── docs/              # 연구 문서
│   ├── research/      # 이론/배경 분석
│   └── experiments/   # 실험 계획
├── experiments/       # 실험 실행 결과물
│   └── 01-skill-comparison/
│       ├── groups/    # 스킬 그룹 설정
│       ├── tasks/     # 태스크 정의
│       ├── evaluation/ # 평가 데이터 & 점수
│       ├── screenshots/ # 60장 (20 runs × 3 viewports)
│       └── output/    # 생성된 코드
└── .commandcode/      # 에이전트 설정
```

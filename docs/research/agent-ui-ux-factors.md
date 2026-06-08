# 코딩 에이전트 UI/UX 품질 영향 요인 분석

> 프론트엔드 UI/UX 결과물이 코딩 에이전트에 의해 생성될 때,
> 어떤 변수들이 결과 품질에 영향을 미치는지 체계적으로 정리.

---

## 1. 요인 개요 (Influence Map)

```
                    ┌─────────────────────────┐
                    │    UI/UX OUTPUT QUALITY  │
                    └───────────┬─────────────┘
                                │
         ┌──────────┬───────────┼───────────┬──────────┬──────────┐
         ▼          ▼           ▼           ▼          ▼         ▼
     Agent      Model      Skill/Prompt  Framework   Context   Process
    (도구)      (두뇌)      (지침/취향)   (재료)    (레퍼런스) (방법론)
```

### 6대 영향 축 (Axes of Influence)

| 축 | 설명 | 통제 가능성 |
|---|---|---|
| **Agent** | 어떤 코딩 에이전트 도구를 쓰는가 | ★★★ |
| **Model** | 에이전트 뒤의 LLM은 무엇인가 | ★★☆ |
| **Skill/Prompt** | 어떤 지침, 스킬, 시스템 프롬프트가 주입되는가 | ★★★ |
| **Framework** | 어떤 프론트엔드 스택/라이브러리를 쓰는가 | ★★★ |
| **Context** | 디자인 레퍼런스, DESIGN.md, 스크린샷 등 맥락 | ★★★ |
| **Process** | 1회 생성 vs 반복 개선, 피드백 방식 | ★★★ |

---

## 2. Agent (코딩 에이전트 도구)

각 에이전트는 내부적으로 **기본 시스템 프롬프트**, **도구 사용 방식**, **편집 전략**이 다르다.

| 에이전트 | 기본 스택 | UI 생성 특성 | 고려사항 |
|---|---|---|---|
| **Claude Code** | Claude 전용, 긴 컨텍스트 | 코드 품질 우수, 디자인 감각 평균 이상 | skills 시스템 내장, MCP 지원 |
| **OpenCode** | Claude/GPT 등 선택 가능 | CLI 중심, 경량 | 확장성 좋음, 기본 UI 취향 없음 |
| **Cursor** | Claude/GPT 선택, IDE 통합 | 인라인 편집에 강함 | .cursorrules 영향 큼 |
| **Codex CLI** | o-series / GPT 전용 | 미니멀 스타일倾向 | OpenAI 생태계 |
| **Gemini CLI** | Gemini 2.5 Pro | Google 스타일 | Google 디자인 가이드 반영 |
| **Cline** | 모델 자유 선택 | VSCode 확장 | 커스터마이징 자유도 높음 |
| **Windsurf** | 자체 모델 + Claude | Cascade 패턴 | 컨텍스트 인지 강함 |

> **실험 설계**: 에이전트를 독립 변수로 삼으려면 동일 모델을 써야 함
> (예: Claude Code vs Cursor, 둘 다 Claude Sonnet 4)

---

## 3. Model (LLM)

동일한 에이전트라도 모델이 바뀌면 UI 결과가 달라진다.

| 모델 | UI/UX 강점 | 약점 |
|---|---|---|
| **Claude Sonnet 4** | 디자인 감각 우수, Tailwind 숙련, 일관성 높음 | 창의적인 레이아웃 보수적 |
| **GPT-4o** | 다양한 패턴 생성, 창의적 | 일관성 떨어짐, 반응형 실수 |
| **o-series (o3/o4)** | 논리적 구조 우수 | 디자인보다 구조 중심 |
| **Gemini 2.5 Pro** | 긴 컨텍스트 활용, 멀티모달 | 최신 UI 트렌드 덜 반영 |
| **DeepSeek V3** | 비용 효율, 기본기 충실 | 고급 디자인 감각 부족 |
| **Claude Opus** | 가장 정교한 결과물 | 비용 높음, 느림 |

> **실험 설계**: 모델을 독립 변수로 삼으려면 동일 에이전트 사용 필수

---

## 4. Skill / Prompt (주입되는 지침)

가장 **영향력이 크면서도 실험자가 완전히 통제 가능한 변수**.

### 4.1 디자인 취향 스킬

| 스킬 | 효과 | 출처 |
|---|---|---|
| **taste-skill** | 모던 UI/UX 취향 주입 (그림자, 여백, 타이포) | Leonxlnx/taste-skill |
| **ui-ux-pro-max-skill** | 전문 디자인 수준 요구, 상세 디자인 토큰 | nextlevelbuilder/ui-ux-pro-max-skill |
| **make-interfaces-feel-better** | 마이크로 인터랙션, 자연스러운 피드백 | jakubkrehel/make-interfaces-feel-better |
| **lazyweb-skill** | 실제 사이트 디자인 리서치 → 반영 | aboul3ata/lazyweb-skill |
| **modern-web-guidance** | 웹 플랫폼 API, 접근성, 성능 | GoogleChrome/modern-web-guidance |
| **gsap-skills** | 고급 애니메이션 적용 | greensock/gsap-skills |

### 4.2 시스템 프롬프트 / 규칙

| 유형 | 예시 | 영향 |
|---|---|---|
| **CLAUDE.md** | 프로젝트 규칙, 기술 스택, 디자인 원칙 | 에이전트 전역 행동 제어 |
| **.cursorrules** | Cursor 전용 규칙 | 에디터별 동작 차별화 |
| **AGENTS.md** | OpenCode 규칙 | OpenCode 동작 제어 |
| **DESIGN.md** | 디자인 토큰, 컬러, 타이포그래피 명세 | 직접적인 시각 결과물 제어 |
| **custom instructions** | ChatGPT/Gemini 설정 | 기본 행동 양식 |

### 4.3 스킬 적용 방식

| 방식 | 설명 |
|---|---|
| **프로젝트 내장** | CLAUDE.md, rules 파일로 항상 적용 |
| **명령형 호출** | `CLAUDESKILLS` / 명령어로 필요시 호출 |
| **자동 활성화** | 특정 조건에서 자동 로드 |
| **수동 첨부** | 대화 시작시 프롬프트에 포함 |

> **실험 설계**: 스킬 유/무, 스킬 종류 비교가 가장 접근하기 쉬운 실험

---

## 5. Framework (기술 스택)

프레임워크 선택이 결과물의 외형과 코드 품질에 직접적 영향.

| 스택 | UI 결과물 특성 | 학습 곡선 |
|---|---|---|
| **React + Tailwind CSS** | 가장 일반적, 에이전트 숙련도 최고 | 낮음 |
| **React + shadcn/ui** | 일관된 컴포넌트, 접근성 기본 내장 | 중간 |
| **React + Material UI** | 엔터프라이즈 스타일, 무겁지만 안정적 | 중간 |
| **React + Blueprint** | 데이터 집약적 UI에 강함 | 중간 |
| **React + Framer Motion** | 애니메이션 품질 향상 | 중간 |
| **htmx + hypermedia** | HTML 중심, 최소 JS | 낮음 |
| **Vanilla HTML/CSS** | 기본기, 어떤 프레임워크보다 자유도 높음 | 없음 |
| **Vue + Tailwind** | React와 비슷한 수준 | 낮음 |
| **Svelte + Tailwind** | 번들 크기 작음, 반응형 우수 | 낮음 |

> **실험 설계**: 프레임워크 비교는 동일 태스크를 다른 스택으로 생성

---

## 6. Context (디자인 맥락/레퍼런스)

에이전트가 참고할 수 있는 시각적/문서적 맥락.

### 6.1 맥락 유형별 효과

| 맥락 유형 | 효과 강도 | 예시 |
|---|---|---|
| **DESIGN.md** (상세 디자인 토큰) | ★★★★★ | "primary: #6366f1, radius: 8px, font: Inter" |
| **스크린샷/이미지** | ★★★★☆ | 참고할 UI 스크린샷 첨부 |
| **컴포넌트 예제 코드** | ★★★★☆ | 기존 작성된 Button, Card 컴포넌트 코드 |
| **와이어프레임** | ★★★★☆ | SVG/HTML 와이어프레임 |
| **디자인 시스템 문서** | ★★★☆☆ | Storybook, design system docs |
| **경쟁사/레퍼런스 URL** | ★★☆☆☆ | 참고 사이트 링크 |
| **텍스트 설명만** | ★★☆☆☆ | "login page 만들어줘" |

### 6.2 DESIGN.md 예시 (VoltAgent/awesome-design-md)

```
- Color Palette: primary #6366f1, secondary #ec4899, background #f8fafc
- Typography: Inter, sizes 14/16/20/24/32px
- Spacing: 4px base, 8/16/24/32/48
- Border Radius: 8px default, 16px cards
- Shadow: sm/md/lg tiers
- Animation: smooth 200ms ease
```

> **실험 설계**: DESIGN.md 유/무, 상세도 수준 비교

---

## 7. Process (생성/반복 방식)

### 7.1 생성 전략

| 방식 | 결과물 특성 |
|---|---|
| **Single-shot** | 빠르지만 첫 인상에 좌우됨 |
| **Iterative** | "더 예쁘게", "더 모던하게" 피드백 → 점진적 개선 |
| **Multi-pass** | 먼저 구조 생성 → 스타일링 → 애니메이션 순차 |
| **Self-critique** | 에이전트가 스스로 평가 후 수정 |

### 7.2 피드백 유형별 효과

- **방향성 피드백**: "더 모던하게" — 취향에 따라 결과 달라짐
- **구체적 피드백**: "그림자 더 깊게, 모서리 더 둥글게" — 예측 가능
- **레퍼런스 기반**: "이 사이트처럼" — 맥락 의존
- **코드 리뷰**: "접근성 체크해줘" — 품질 향상

> **실험 설계**: 1회 vs n회 반복, 피드백 방식 비교

---

## 8. 실험 설계 프레임워크

### 8.1 통제해야 할 변수 (Controls)

| 변수 | 통제 방법 |
|---|---|
| Task 설명 | 동일한 프롬프트 사용 (사전에 스크립트 고정) |
| 모델 | 동일 비교시 같은 모델 고정 |
| 출력 형식 | 동일한 파일 구조, 동일한 프레임워크 |
| 평가 기준 | 사전 정의된 평가 루브릭 |
| 환경 | 동일한 Node/Vite/Tailwind 버전 |

### 8.2 변경할 변수 (Independent Variables)

실험 목적에 따라 한 번에 하나만 변경:

```
실험 A: Agent 비교
  고정: model=Claude Sonnet 4, task 동일, no skills, React+Tailwind
  변경: Claude Code vs OpenCode vs Cursor vs Codex CLI

실험 B: Model 비교
  고정: agent=Claude Code, task 동일, no skills, React+Tailwind
  변경: Sonnet 4 vs GPT-4o vs Gemini 2.5 Pro vs DeepSeek

실험 C: Skill 비교
  고정: agent=Claude Code, model=Sonnet 4, task 동일, React+Tailwind
  변경: no skill vs taste-skill vs ui-ux-pro-max-skill vs DESIGN.md

실험 D: Framework 비교
  고정: agent=Claude Code, model=Sonnet 4, task 동일, no skills
  변경: React+Tailwind vs React+shadcn vs htmx vs vanilla

실험 E: Context 비교
  고정: agent=Claude Code, model=Sonnet 4, React+Tailwind
  변경: text only vs DESIGN.md vs screenshot reference vs full design system

실험 F: Process 비교
  고정: agent=Claude Code, model=Sonnet 4, React+Tailwind
  변경: 1-shot vs 3-iteration vs self-critique
```

### 8.3 평가 루브릭 (Suggested Metrics)

| 항목 | 측정 방식 |
|---|---|
| **시각적 완성도** | 레이아웃, 여백, 색상 조화 (주관/1-5) |
| **반응형** | 모바일/태블릿/데스크톱 대응 여부 |
| **접근성** | contrast, aria, keyboard nav |
| **코드 품질** | DRY, 컴포넌트 분리, 타입 안전성 |
| **일관성** | 디자인 토큰 일관 사용 |
| **애니메이션** | 자연스러운 전환, micro-interaction |
| **생성 시간** | 최초 결과물까지 시간 |

---

## 9. awesome-haxlys 연계 레포

분석 결과 연관성이 높은 starred 레포:

**에이전트 스킬** (직접 영향):
- `Leonxlnx/taste-skill` — UI 취향 개선
- `nextlevelbuilder/ui-ux-pro-max-skill` — 전문 UI/UX
- `greensock/gsap-skills` — 애니메이션
- `GoogleChrome/modern-web-guidance` — 웹 모던 가이드
- `jakubkrehel/make-interfaces-feel-better` — 디자인 디테일
- `aboul3ata/lazyweb-skill` — 디자인 리서치
- `obra/superpowers` — 에이전트 방법론 프레임워크
- `VoltAgent/awesome-design-md` — DESIGN.md 템플릿

**디자인 도구** (간접 영향):
- `nexu-io/open-design` — AI 디자인 도구
- `penpot/penpot` — 오픈소스 디자인 도구
- `open-pencil/open-pencil` — AI 네이티브 디자인 편집기
- `vibeflowing-inc/vibe_figma` — Figma→React 변환

**UI 라이브러리** (출력 템플릿):
- `palantir/blueprint` — React UI 툴킷
- `DavidHDev/react-bits` — 애니메이션 컴포넌트
- `pqoqubbw/icons` — 애니메이션 아이콘
- `aidenybai/react-scan` — React 성능 진단

**품질 진단**:
- `millionco/react-doctor` — React 코드 문제 진단
- `cloudflare/telescope` — 웹 성능 측정

---

## 10. 실험 시 주의사항

1. **프롬프트 고정의 어려움** — 에이전트마다 프롬프트를 받아들이는 방식이 달라 완전 동일하게 주입 불가. 사람이 수동으로 조정해야 함.
2. **결정론적 결과 불가** — 같은 조건에서도 생성 결과가 매번 다름. 최소 3회 반복 후 평균 평가 권장.
3. **스킬 호환성** — 특정 스킬이 특정 에이전트에서만 동작할 수 있음 (예: `.cursorrules`는 Cursor 전용)
4. **비용/시간** — 모델별, 에이전트별 생성 속도와 비용 차이가 큼. 실험 계획에 반영 필요.
5. **평가 주관성** — UI/UX 품질은 근본적으로 주관적. 복수 평가자 또는 정량적 지표 병행 권장.

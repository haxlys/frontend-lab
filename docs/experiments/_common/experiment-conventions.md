# Experiment Conventions (공통)

> 모든 실험에서 공통으로 사용하는 디렉토리 구조, 파일 명명 규칙, 실행 패턴을 정의한다.

---

## 1. 디렉토리 구조

```
experiments/<NN-experiment-name>/
├── plan.md                          # 실험 계획 문서
├── run.sh                           # 실행 스크립트
├── groups/                          # 실험군 디렉토리 (스킬/설정 프리셋)
│   ├── <group-a>/
│   ├── <group-b>/
│   └── ...
├── tasks/                           # 태스크 프롬프트
│   ├── task1.md
│   ├── task2.md
│   └── ...
├── output/                          # 생성된 결과물
│   ├── <group>-t<task>-r<run>/
│   │   ├── package.json
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── src/
│   │   └── session.log
│   └── ...
├── screenshots/                     # 스크린샷
├── evaluation/                      # 평가 데이터
│   ├── scores.csv
│   └── summary-report.md
└── ... (실험 고유 파일)
```

## 2. 명명 규칙

| 요소 | 패턴 | 예시 |
|---|---|---|
| Output 디렉토리 | `<group>-t<task>-r<run>` | `baseline-t1-r1` |
| 스크린샷 | `<group>-t<task>-r<run>-{desktop,tablet,mobile}.png` | `baseline-t1-r1-desktop.png` |
| 세션 로그 | `session.log` | |
| Group 디렉토리 | 소문자, kebab-case | `design-doc` |

## 3. 실행 매트릭스 포맷

```
| Group | Task 1 (run1) | Task 1 (run2) | Task 2 (run1) | Task 2 (run2) |
|-------|:---:|:---:|:---:|:---:|
| A     | ✅ | ✅ | ✅ | ✅ |
```

총 N groups × M tasks × 2 runs = N×M×2회 생성.

## 4. run.sh CLI 인터페이스

```bash
# 전체 실험 실행
bash run.sh

# 특정 그룹 + 태스크 실행
bash run.sh <group> <task>

# 스크린샷만 캡처
bash run.sh --screenshots
```

## 5. 태스크 프롬프트 포맷

태스크 프롬프트는 `tasks/task<N>.md` 파일에 저장한다. 템플릿:

```
React + Vite + Tailwind CSS로 <주제> 페이지를 만들어줘.

필요한 섹션:
1. ...
2. ...

조건:
- TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
- Tailwind CSS만 사용
- 하나의 index.html + main.tsx에서 동작하는 구조
```

## 6. 상수 (공통)

| 변수 | 값 |
|---|---|
| **Agent** | OpenCode |
| **Framework** | React + Vite + Tailwind CSS |
| **실행 환경** | Docker Container (`opencode-experiment:latest`) |
| **스킬 포맷** | `.agents/skills/<name>/SKILL.md` |
| **Task 구조** | `tasks/taskN.md` |
| **실행 횟수** | group당 2 tasks × 2 runs = 4회 |

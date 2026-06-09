# Evaluation Framework (공통)

> 모든 실험에서 동일한 종속 변수와 평가 방법을 사용한다.

---

## 1. 종속 변수 (Dependent Variables)

| 항목 | 측정 방식 | 비중 |
|---|---|---|
| 시각적 완성도 | 스크린샷 기반 1-5 점수 (레이아웃, 여백, 색상) | 30% |
| 반응형 | 모바일/태블릿/데스크톱 적응 여부 | 20% |
| 접근성 | 대비비, aria 속성, 키보드 내비게이션 | 15% |
| 코드 품질 | 컴포넌트 분리, DRY, 타입 안전성 | 15% |
| 디자인 일관성 | DESIGN.md 토큰 일치도 | 10% |
| 생성 시간 | 최초 결과물까지 소요 시간 | 10% |

## 2. 정성 평가 (Blind Test)

평가자는 그룹/실행번호를 모른 채 스크린샷만 보고 평가:

| 평가 항목 | 1~5 점수 |
|---|---|
| 전체적인 시각적 매력도 (visual_appeal) | |
| 레이아웃 구조의 명확성 (layout_clarity) | |
| 색상/대비 조화 (color_contrast) | |
| 여백과 계층 구조 (spacing_hierarchy) | |
| 반응형 적응 품질 (responsive_quality) | |
| 폰트/타이포그래피 (typography) | |
| 전반적 전문성 (overall_professionalism) | |

## 3. 정량 평가

- **Lighthouse** Performance / Accessibility / Best Practices 점수
- **react-doctor** (`npx react-doctor`) 진단 결과
- **생성 시간** (초)
- **파일/컴포넌트 개수**
- **코드 라인 수**
- **빌드 성공률**
- **스킬 호출 여부** (`Skill_Invoked`: true/false) — `session.log`에서 `→ Skill "..."` 패턴 추출
- **스킬 호출 횟수** (`Skill_Calls`) — 중복 호출(re-entrant invocation) 추적
- **호출 시점** (`First_Skill_At_Line`) — 초기 로드 vs 중간 로드 구분
- **총 도구 호출 수** (`Total_Tool_Calls`) — 에이전트 활동량 지표

### 3.1 스킬 호출 분석 (Skill Invocation Analysis)

실험 그룹에 스킬 파일이 존재하더라도 **에이전트가 실제로 `skill()` 도구를 호출했는지**는 별개의 문제다.
호출하지 않은 그룹은 실질적으로 baseline 조건에서 실행된 것과 같으므로,
스킬 효과를 정확히 측정하려면 **호출 여부를 confounding variable로 통제**해야 한다.

측정 방법:
```bash
python3 scripts/extract_skill_metrics.py experiments/<exp-name>/output    # CSV 추출
python3 scripts/merge_skill_metrics.py experiments/<exp-name>             # metrics.csv 병합
python3 scripts/generate_skill_analysis.py experiments/<exp-name>         # 분석 섹션 생성
```

분석 차원:
| 차원 | 질문 |
|---|---|
| 호출률 (per group) | 특정 스킬 그룹에서 에이전트가 실제로 스킬을 로드한 비율은? |
| 태스크 편향 | 특정 태스크 유형에서 호출률이 유의미하게 다른가? |
| 점수 상관 | 호출된 그룹과 호출되지 않은 그룹 간 점수 차이는 통계적으로 유의한가? |
| selection bias | 호출률이 높은 그룹이 원래 고득점 그룹인 confounding 여부 |
| 모델 간 비교 | 동일 스킬 그룹에서 모델별 호출률 차이 |

## 4. 평가 산출물

```
evaluation/
├── blind_scores.csv         # 정성 평가 점수
├── metrics.csv              # 정량 지표 (Skill_Invoked 포함)
├── metrics.bak.csv          # 병합 전 원본 백업
├── skill_invocations.csv    # 스킬 호출 상세 데이터
└── summary-report.md        # 종합 리포트 (Skill Invocation Analysis 섹션 포함)
```

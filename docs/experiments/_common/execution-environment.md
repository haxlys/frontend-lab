# Execution Environment (공통)

> 모든 실험은 OpenCode를 Docker 컨테이너에서 실행하여 호스트 환경과 완전 격리한다.

---

## 1. Docker Image

```
opencode-experiment:latest
```

기반: `node:22` + opencode + git + CommandCode provider config.

```bash
docker build -t opencode-experiment:latest .
```

## 2. Docker Run Template

```bash
docker run --rm \
  -v "$(pwd)/groups/<group>:/project" \
  -w /project \
  opencode-experiment:latest \
  run -m "<model>" \
  "<task prompt...>"
```

- 볼륨 마운트: 그룹 디렉토리를 `/project`로 마운트
- 모델은 CLI `-m` 플래그로 전달
- 실행 후 컨테이너는 자동 제거 (`--rm`)

## 3. 글로벌 오염(Global Contamination) 차단

### 3.1 OpenCode 스킬 발견 경로

OpenCode는 다음 모든 경로에서 `skills/*/SKILL.md` 를 찾아 `<available_skills>` 목록에 노출한다:

| 우선순위 | 위치 | 비고 |
|---|---|---|
| 1 (프로젝트) | `.opencode/skills/<name>/SKILL.md` | |
| 2 (프로젝트) | `.claude/skills/<name>/SKILL.md` | Claude 호환 |
| 3 (프로젝트) | `.agents/skills/<name>/SKILL.md` | 실험에서 사용 |
| 4 (글로벌) | `~/.config/opencode/skills/<name>/SKILL.md` | |
| 5 (글로벌) | `~/.claude/skills/<name>/SKILL.md` | |
| 6 (글로벌) | `~/.agents/skills/<name>/SKILL.md` | 오염 가능 |

### 3.2 스킬 로딩 메커니즘

Skills are loaded **on-demand** via `skill({ name: "..." })` tool.
자동 주입되지 않고 에이전트가 직접 호출해야 로딩된다.

그러나 에이전트가 `<available_skills>` 목록을 보고 태스크에 적합하다고 판단하면 스스로 `skill()`을 호출할 수 있어 통제 불가능하다.

### 3.3 차단 전략: Docker Isolation (Primary)

Docker 컨테이너에서 실행하여 호스트의 모든 전역 스킬/플러그인/컨피그를 완전 차단한다.

검증 결과:
- `ghcr.io/anomalyco/opencode:latest` 이미지에는 어떤 스킬이나 컨피그도 내장되어 있지 않음
- 호스트 `~/.agents/skills/` 의 스킬이 컨테이너 내부로 전혀 누출되지 않음
- **0개 호스트 스킬 누출 확인**

### 3.4 --pure vs Skill Permission

| 방식 | 플러그인 차단 | 스킬 차단 | 적합 |
|---|---|---|---|
| `--pure` | ✅ 외부 플러그인 차단 | ❌ 스킬은 여전히 발견됨 | 불충분 |
| `permission.skill.* = "deny"` | ❌ | ✅ 모든 스킬 차단 | ✅ 필요 |
| 둘 다 적용 | ✅ | ✅ | **최선** |

### 3.5 opencode.json Permission Block

```json
{
  "permission": {
    "skill": {
      "*": "deny"
    }
  }
}
```

| 설정 | 효과 |
|---|---|
| `"*": "deny"` | 모든 전역 스킬 차단 — 목록에서 숨김, access 거부 |
| `"*": "allow"` | (기본값) 모든 스킬 허용 |
| `"frontend-design": "deny"` | 특정 스킬만 차단 |

## 4. 전역 플러그인 (참고)

실험에 영향을 주지 않는 호스트 전역 플러그인:

| 플러그인 | 역할 | UI/UX 오염 |
|---|---|---|
| `opencode-antigravity-auth@latest` | Antigravity 인증 처리 | 없음 |
| `./plugins/cmux-session.js` | cmux 터미널 세션 복원 | 없음 |
| `./plugins/cmux-feed.js` | cmux 소켓 피드 브릿지 | 없음 |
| `@rehydra/opencode` | Rehydra PII 복호화 | 없음 |

> 플러그인은 인프라/인증/세션 관리용. UI 생성에 영향 없음.

## 5. Apple Silicon Headless Chrome 이슈

**darwin-arm64**: Headless Chrome이 `about:blank`에서 멈추는 버그가 있으므로 `--headed` 플래그 필수.
그 외 환경에서는 `--args "--no-sandbox"` 사용 가능.

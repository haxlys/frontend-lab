# Skill System (공통)

> OpenCode의 스킬 관리 방식과 실험에서 사용하는 스킬 포맷을 정의한다.

---

## 1. OpenCode 스킬 포맷

OpenCode는 `.agents/skills/<name>/SKILL.md` 구조로 스킬을 관리한다 (Claude Code의 `.claude/skills/` 대응).

## 2. 스킬 디렉토리 구조

```
groups/<group>/.agents/skills/
├── taste-skill/SKILL.md              # 단일 파일 스킬
├── ui-ux-pro-max/SKILL.md            # 단일 파일 스킬
└── make-interfaces-feel-better/      # 복수 파일 스킬
    ├── SKILL.md
    ├── animations.md
    ├── performance.md
    ├── surfaces.md
    └── typography.md
```

## 3. 스킬 복제 원칙 (CRITICAL)

> 모든 스킬은 원본 레포지토리의 디렉토리 구조와 파일 구성을 그대로 복제한다.

- 스킬 디렉토리명을 **절대 변경하지 않는다** (예: `ui-ux-pro-max-skill` → `ui-ux-pro-max`).
- **단일 SKILL.md만 있는 스킬은 SKILL.md만 복사**한다.
- **서브파일이 있는 스킬은 서브파일까지 모두 복사**한다.
- `groups/<group>/.agents/skills/<repo-skill-name>/` 경로에 배치한다.

**검증 방법**: `diff -r <repo-skill-path> <group-skill-path>` (README.md, .git 등 제외).

## 4. Claude Code → OpenCode 호환성

OpenCode는 Claude Code와 동일한 `.agents/skills/<name>/SKILL.md` 포맷을 지원하므로 변환 불필요.
원본 SKILL.md 파일을 그대로 사용한다.

## 5. 스킬 배치 예시

```
groups/
├── baseline/         # 스킬 없음 (빈 디렉토리)
├── taste/
│   └── .agents/skills/taste-skill/SKILL.md
├── uiux/
│   └── .agents/skills/ui-ux-pro-max/SKILL.md
├── design-doc/
│   └── DESIGN.md
├── combined/
│   ├── .agents/skills/taste-skill/SKILL.md
│   └── DESIGN.md
└── interfaces/
    └── .agents/skills/make-interfaces-feel-better/
        ├── SKILL.md
        ├── animations.md
        ├── performance.md
        ├── surfaces.md
        └── typography.md
```

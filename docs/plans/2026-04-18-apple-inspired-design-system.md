# Apple-Inspired Design System — Phase 1 Foundation Plan

Created: 2026-04-18
Author: yegamble@gmail.com
Status: PENDING
Approved: Yes
Iterations: 2
Worktree: No
Type: Feature

## Summary

**Goal:** Scaffold the Apple-inspired AI-consumable design system repo (`os-hcl-design`) Phase 1 — toolchain, tokens, foundations, AI-retrieval scaffolding, CI quality gates, and 2 reference components + 1 reference pattern proving the per-component and per-pattern templates. Follow-up plans will instantiate the remaining 13 components and 2 patterns against the established templates.

**Architecture:** Single-package flat-layout repo driven by Tailwind v4 CSS-first config, DTCG v1 JSON tokens (three-tier) piped through Style Dictionary into CSS variables and Tailwind `@theme` blocks. Storybook 9 + Vite as the visual source of truth with axe a11y and Playwright screenshot-diff visual regression. Every component and pattern is co-located (`.tsx` + `.md` + `.spec.json` + `.stories.tsx` + `.tokens.json`) and enforced by a depth-check CI script.

**Tech Stack:** pnpm (pinned `9.15.4` — bump to latest-known-stable at Task 1 execution), Node 20+, TypeScript 5.5+, React 19, Tailwind v4 (CSS-first `@theme`), Base UI (deferred entirely until Phase 2), Storybook 9 + Vite, Style Dictionary 4, Playwright (screenshot diffs checked into `.visual-baselines/`, one PNG per variant — no size permutations, capped at ~40 PNGs total so no Git LFS needed), ESLint + `@typescript-eslint` + `eslint-plugin-tailwindcss` + `eslint-plugin-jsx-a11y` + `@storybook/addon-a11y`, stylelint + custom semantic-token rule, Prettier + `prettier-plugin-tailwindcss`.

## Scope

### In Scope

- Repo initialization (`git init`, main branch, initial commit) + **public GitHub repo at `github.com/yegamble/os-hcl-design`** created via `gh repo create` in Task 1 with initial push
- A meaningful, public-facing `README.md` (not a stub): purpose, consumer usage (git-submodule pattern), links to PRD and foundations, status, license, contributing posture
- `package.json` pinning `pnpm@9.15.4` as `packageManager`, Node 20+ via `.nvmrc`
- TypeScript strict config
- ESLint + stylelint + Prettier stack with Tailwind-discipline rules
- Tailwind v4 CSS-first build pipeline via Vite (`@theme`, `@source`, `@utility`)
- Style Dictionary 4 build pipeline emitting DTCG tokens to `styles/tokens.css`
- DTCG v1 JSON tokens (three-tier: primitive, semantic, component) — full Apple-inspired palette, spacing scale, radii, shadows, type, durations, easings, material-tier tokens with mandatory solid fallbacks
- **Canonical 11-section component/pattern template** codified in `foundations/component-template.md` (single source of truth for every component `.md`)
- 7 foundation documents (`principles.md`, `typography.md`, `color.md`, `spacing.md`, `motion.md`, `materials.md`, `accessibility.md`) + `component-template.md`
- AI-retrieval scaffolding: `AGENTS.md` (<2KB), `CLAUDE.md` pointer, `llms.txt`, `llms-full.txt` build script, `registry.json` stub
- Storybook 9 + Vite with toolbar globals for dark-mode, `prefers-reduced-motion`, `prefers-reduced-transparency`
- `@storybook/addon-a11y` (axe) with WCAG AA baseline enforcement
- Custom ESLint rule banning raw hex in JSX; custom stylelint rule enforcing semantic tokens only
- **WCAG contrast validation script** (`scripts/check-token-contrast.mjs`) enumerating every semantic text/surface token pair across light, dark, and high-contrast modes and failing CI on <4.5:1 (body) / <3:1 (large text / UI components)
- Component depth-check CI script
- CSS bundle-size budget check: **total** `storybook-static` CSS < 15KB gzip (Tailwind v4 Oxide ships one bundle)
- Button component (reference template for interactive primitives) — all 5 sibling files
- Card component (reference template for display/layout primitives) — all 5 sibling files
- `hero-feature-grid` pattern (reference template for composed patterns) — all 4 sibling files (md + tsx + spec + stories)
- Local `pnpm run ci` target running every quality gate (including `pnpm run format -- --check` and token-contrast validation)
- `.github/workflows/ci.yml` **live** — triggered on push/PR to `main` against the public GitHub repo; macOS-latest runner matches local-dev visual-baseline platform

### Out of Scope (explicit — each deferred to follow-up plans)

- Remaining 13 components (IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Dialog, Popover, Tooltip, Tabs, Accordion, Toast, Nav, Badge) — deferred to Phase 2 plan
- Remaining 2 patterns (Pricing, Auth form) — deferred to Phase 3 plan
- PR workflow + branch protection — user sets up manually after Phase 1; plan pushes directly to `main`
- Chromatic integration — Playwright screenshot diffs are the v1 visual regression
- Next.js or any runtime app — Storybook is the only app
- Unit / interaction / cross-browser test matrix — a11y + visual regression + lint only (per PRD)
- Multi-brand / multi-theme shipping — token architecture supports it; only the Apple-inspired theme ships, with light + dark + high-contrast modes
- SF Pro / SF Symbols — licensing forbids; `-apple-system` stack + open icon set (icon set chosen in Phase 2 when a component actually needs icons)
- npm publishing — git submodule distribution only in v1
- MCP server — deferred
- Changesets / per-component SemVer — library-wide SemVer via git tags is enough
- Code Connect / Figma MCP / v0 registry wiring

## Approach

**Chosen: Phase 1 Foundation.** This plan stands up every system-wide concern end-to-end (toolchain, tokens, docs, CI, AI scaffolding) and proves the per-component and per-pattern templates with one reference of each. Everything afterward is template instantiation.

**Why:** Establishes the full system surface before expanding the catalog — so follow-up plans can't re-litigate system design and instead focus purely on component authoring. At the cost of not shipping the complete PRD v1 catalog in this single plan.

**Alternatives considered and rejected:**

- **Big-bang v1** — everything in one plan. Rejected: 30+ tasks violates the 12-task cap and makes rollback blast-radius huge.
- **Three-plan program (A → B → C)** — three sequential plans. Rejected: adds plan-level overhead; Phase 2 + 3 can be a single plan once the template is proven.
- **MVP only** — toolchain + tokens + AGENTS.md/llms.txt, no components, no CI. Rejected: defers CI and component template, so follow-ups re-litigate the system instead of consuming it.

**Primitive-library decision (from Batch 1):** Base UI (`@base-ui-components/react` — package name and per-component coverage to be verified at Phase 2 start; Phase 1 does not depend on Base UI) for Phase 2+. Phase 1 components (Button, Card) don't need a primitive library — Button is a styled native `<button>`, Card is a presentational wrapper.

## Context for Implementer

> Write for an implementer who has never seen the codebase. There is no existing codebase — this is greenfield.

- **PRD is the design contract:** `docs/prd/2026-04-18-apple-inspired-design-system.md` — read the Tailwind-First Implementation section end-to-end before writing any component code. Token names, anti-patterns, utility conventions are all locked there.
- **Tailwind-first is non-negotiable:** no raw CSS files for component styling, no CSS-in-JS, no `dark:` prefixes in component code, no arbitrary values (`p-[13px]`) in component code, no `style={{ ... }}` except for genuinely dynamic CSS-variable values. Use `tailwind-variants` (`tv()`) for variant APIs and `clsx` + `tailwind-merge` (or `tailwind-variants`' built-in) for safe className composition.
- **Dark mode via data attribute:** `[data-theme="dark"]` on `<html>`. Tokens swap at the CSS-variable layer — components stay single-mode.
- **Every component directory MUST contain all 5 sibling files** (`.tsx`, `.md`, `.spec.json`, `.stories.tsx`, `.tokens.json`) or CI fails. Use the `scripts/check-component-depth.mjs` script locally to verify.
- **Component/pattern `.md` files MUST follow the 11-section template** in `foundations/component-template.md` — CI script `scripts/check-doc-sections.mjs` enforces the section headings (included in Task 8).
- **AGENTS.md must stay under 2KB** — per ETH Zurich study cited in PRD, verbose agent files hurt task success. Links out, never embeds.
- **All material/glass surfaces require a solid-fallback token** and must honor `prefers-reduced-transparency: reduce`. Apple themselves walked back opacity post-beta; don't repeat their mistake.
- **Flat-file authoring > clever abstractions** — the repo is read by AI. Clever inheritance, deep utility generics, and magic DSLs obscure meaning.
- **Semantic-tokens-only rule:** component files reference semantic tokens, never primitives. `color.action.primary` ✅ — `color.blue.500` ❌ in component code.
- **DTCG v1 format:** `$value` / `$type` / `{alias}` references. Style Dictionary 4 reads these. Modes (light/dark/high-contrast) handled via Style Dictionary's `modes` pattern with output scoped to `[data-theme=…]` selectors.
- **Tailwind v4 CSS-first:** design tokens live in `styles/tokens.css` inside `@theme { … }`. **No `tailwind.config.js` for design values.** Only `tailwind.config.ts` if absolutely needed for plugins.

## Runtime Environment

- **Local dev:** `pnpm run dev` (Storybook on port 6006). No production runtime for this repo.
- **CI target:** `pnpm run ci` runs typecheck → lint → format-check → build-tokens → build-llms-full → check:depth → check:doc-sections → check:agents-size → check:token-contrast → storybook-build → storybook-test-runner (a11y) → playwright-visual-regression → check:css-budget.
- **Health check:** Storybook builds successfully to `storybook-static/` and every story passes axe a11y checks.

## Assumptions

- **Node 20+ is installed locally** — supported by `.nvmrc`. Supports Task 1's `pnpm` install. Tasks 1–12 all depend.
- **pnpm is installable via corepack or global npm install** — Task 1 pins it as `packageManager: "pnpm@9.15.4"` in `package.json`. Pinned to a full semver (Corepack rejects ranges).
- **npm registry is accessible** from the user's network — Tasks 1, 2, 6, 7, 12 depend.
- **Tailwind v4 stable is published** with CSS-first `@theme` and Oxide engine — verified in exploration. Task 2 depends.
- **DTCG v1 stable (2025.10) is supported by Style Dictionary 4** via `$value`/`$type` fields and mode handling. Tasks 3, 4 depend. Fallback: `@tokens-studio/sd-transforms` bridge if needed.
- **Base UI package name and per-component primitive coverage will be verified at the start of Phase 2.** Phase 1 does not depend on Base UI — no package is installed in this plan.
- **Playwright can run headless Chromium on macOS** for visual-regression screenshots. Task 12 depends.
- **No existing git repo at the working directory** — Task 1 runs `git init` fresh.
- **`gh` CLI is installed and authenticated.** Task 1 runs `gh auth status` defensively BEFORE any remote operation; if it fails, the task halts with a clear message instructing the user to run `gh auth login` and re-invoke. No interactive auth flow is attempted by the implementer.
- **GitHub repo `yegamble/os-hcl-design` does not yet exist.** `gh repo create` will fail cleanly if it does — in which case the implementer halts and surfaces the error.
- **The user will review `AGENTS.md` content for tone and constraints** before sign-off. Task 5 writes it.

## Risks and Mitigations

| Risk                                                                                            | Likelihood | Impact | Mitigation                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------- | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tailwind v4 CSS-first `@theme` rough edges with generated tokens                                | Low        | Medium | **Implementer commits to:** if first Style Dictionary emit to `@theme` fails, fall back to emitting plain `:root { --color-…: …; }` in a separate `tokens.base.css` and reference via `@theme { --color-foo: var(--color-foo); }` (Tailwind v4 supports this pattern explicitly). Document the chosen path in `tokens.css` header comment.                         |
| Style Dictionary 4 mode handling (light/dark/high-contrast) has incomplete DTCG 2025.10 support | Medium     | Medium | **Implementer commits to:** if `$extensions.modes` is unsupported, implement modes via Style Dictionary's `platform` configuration — one platform per mode — each emitting a scoped block (`[data-theme="light"] {}`, `[data-theme="dark"] {}`, `[data-contrast="more"] {}`) into `styles/tokens.css`. Keep the single `semantic.tokens.json` source file per PRD. |
| Playwright screenshot diffs flake across macOS versions or font rendering                       | Medium     | Medium | **Implementer commits to:** pin `@playwright/test` to a specific patch release in `package.json`; pin Chromium via `pnpm exec playwright install chromium`; set `toHaveScreenshot` `threshold: 0.2` and `maxDiffPixels: 100` as starting values; baselines are macOS-only for v1 (documented in `tests/visual/README.md`).                                         |
| Custom ESLint rule for raw-hex ban too strict                                                   | Medium     | Low    | **Implementer commits to:** allowlist is a per-line ESLint disable directive requiring a reason comment (`// eslint-disable-next-line os-hcl/no-raw-hex-in-className -- <reason>`). The rule implementation rejects any disable directive lacking the `-- <reason>` suffix (per `eslint-plugin-eslint-comments`). Unit-tested in Task 7.                           |
| `AGENTS.md` creeps over 2KB as constraints are documented                                       | Medium     | Low    | **Implementer commits to:** `scripts/check-agents-md-size.mjs` enforces the 2048-byte limit in CI; overflow content must move to linked `foundations/*.md` before merge.                                                                                                                                                                                           |
| `llms-full.txt` auto-generation script breaks when new file types are added                     | Low        | Low    | **Implementer commits to:** the generator walks a fixed list of directories with explicit handlers per extension (`.md`, `.tokens.json`, `.spec.json`). New extensions require an explicit handler addition. Documented in the script header.                                                                                                                      |
| Baseline PNG count blows up repo size                                                           | Low        | Low    | **Implementer commits to:** one PNG per (component/pattern × variant × mode). NO size-permutation matrix. Total <= ~40 PNGs for Phase 1 → well under 10MB → no Git LFS. Enforced by `.visual-baselines/` having a maximum-PNG-count check in `check:baseline-count.mjs` (wired to ci).                                                                             |
| `git init` on a directory that already has unexpected dotfiles                                  | Low        | Low    | Step 1.3 Glob confirmed `/Users/yosefgamble/github/os-hcl-design` is empty. Task 1 still runs `git status --porcelain` defensively before first commit.                                                                                                                                                                                                            |
| `gh` CLI missing or unauthenticated                                                             | Medium     | Low    | **Implementer commits to:** Task 1 runs `gh auth status` AND `command -v gh` defensively before any remote op. On failure, halt with exact error text "`gh` unauthenticated — run `gh auth login` and re-invoke the plan" and exit non-zero. No silent fallbacks, no interactive login attempted.                                                                  |
| GitHub repo `yegamble/os-hcl-design` already exists (name collision)                            | Low        | Low    | `gh repo create` fails on collision; implementer halts with the returned error and asks user to either delete the existing repo, choose a different name, or switch to manual remote-add. No silent overwrite.                                                                                                                                                     |

## Goal Verification

### Truths

1. **T1 — Clean checkout installs and greens:** From the plan's end state, removing generated artifacts (`rm -rf node_modules storybook-static styles/tokens.css llms-full.txt .visual-baselines/diff`) then `pnpm install && pnpm run ci` exits 0.
2. **T2 — Storybook renders every Phase 1 artifact:** `pnpm run dev` launches Storybook on port 6006; Button, Card, and `hero-feature-grid` stories render without errors.
3. **T3 — Axe a11y clean:** Every story in Storybook passes `@storybook/addon-a11y` WCAG AA checks (0 violations).
4. **T4 — Depth-check enforces template:** `scripts/check-component-depth.mjs` exits 0 on current state; if any sibling file is removed from `components/button/` or `components/card/`, the script exits non-zero.
5. **T5 — Token discipline enforced:** Introducing `className="bg-[#0071E3]"` into any component `.tsx` file fails `pnpm run lint` with a clear error pointing to the `no-arbitrary-value` or `no-raw-hex-in-className` rule.
6. **T6 — DTCG tokens resolve:** `pnpm run build-tokens` resolves every `{alias}` reference in `tokens/*.tokens.json` and emits a valid `styles/tokens.css` with `[data-theme="light"]`, `[data-theme="dark"]`, `[data-contrast="more"]` blocks. Referencing an undefined alias fails the build with a line number.
7. **T7 — AI context scaffolding present and correct:** `AGENTS.md`, `CLAUDE.md`, `llms.txt`, `llms-full.txt`, `registry.json` all exist at repo root. `wc -c AGENTS.md` < 2048.
8. **T8 — Visual baselines captured and stable:** `.visual-baselines/` contains one PNG per (component/pattern × variant × mode) for Button, Card, and `hero-feature-grid`. Re-running `pnpm run test:visual` passes against them.
9. **T9 — CSS bundle budget honored:** Total gzip size of `storybook-static/**/*.css` < 15KB. `scripts/check-css-budget.mjs` verifies.
10. **T10 — Reduced-transparency honored:** Toggling the Storybook toolbar `prefers-reduced-transparency` global swaps any `glass-regular` utility to `glass-fallback` (solid) on the rendered page. Verified programmatically by TS-004.
11. **T11 — Keyboard activation works:** Button is reachable via Tab, shows a `:focus-visible` ring, and activates on Enter and Space. Verified by TS-008.
12. **T12 — Hit targets meet 44px floor:** Button's rendered min-height ≥ 44px (iOS HIG floor). Verified by TS-009.
13. **T13 — A11y gate actually blocks regressions:** Introducing an a11y violation into a test fixture story makes `pnpm run test:storybook` exit non-zero with the axe rule ID visible. Verified by TS-010.
14. **T14 — Contrast gate covers every semantic pair:** `scripts/check-token-contrast.mjs` enumerates every declared text/surface pair across three modes and fails on <4.5:1 (body) / <3:1 (large/UI).

### Artifacts

- `package.json`, `pnpm-lock.yaml`, `.nvmrc`, `tsconfig.json`, `.eslintrc.cjs`, `.stylelintrc.cjs`, `.prettierrc`, `.gitignore`, `LICENSE`, `README.md` (T1)
- `vite.config.ts`, `.storybook/main.ts`, `.storybook/preview.ts`, `.storybook/globals.ts`, `.storybook/decorators.tsx` (T6)
- `styles/tokens.css`, `styles/utilities.css`, `styles/reset.css`, `styles/index.css`, `build-tokens.mjs` (T2, T4, T9, T14)
- `tokens/primitive.tokens.json`, `tokens/semantic.tokens.json`, `tokens/component.tokens.json` (T6, T14)
- `foundations/{principles,typography,color,spacing,motion,materials,accessibility,component-template}.md` (supporting documentation)
- `AGENTS.md`, `CLAUDE.md`, `llms.txt`, `llms-full.txt`, `registry.json`, `scripts/build-llms-full.mjs` (T7)
- `components/button/{button.tsx,button.md,button.spec.json,button.stories.tsx,button.tokens.json}` (T2, T3, T4, T5, T11, T12)
- `components/card/{card.tsx,card.md,card.spec.json,card.stories.tsx,card.tokens.json}` (T2, T3, T4)
- `patterns/hero-feature-grid/{hero-feature-grid.md,hero-feature-grid.tsx,hero-feature-grid.spec.json,hero-feature-grid.stories.tsx}` (T2, T3, T10)
- `scripts/{check-component-depth,check-doc-sections,check-agents-md-size,check-css-budget,check-token-contrast,check-baseline-count}.mjs` (T4, T7, T9, T14)
- `eslint-rules/{no-raw-hex-in-className,no-tailwind-arbitrary-in-className}.cjs`, `stylelint-rules/semantic-tokens-only.cjs` (T5)
- `playwright.config.ts`, `.visual-baselines/**/*.png`, `tests/visual/*.spec.ts`, `tests/visual/README.md` (T8)
- `tests/fixtures/a11y-regression.stories.tsx` (T13 fail-path)
- `.github/workflows/ci.yml` (live on push/PR to main — T1, T12)

## E2E Test Scenarios

### TS-001: Storybook renders every Phase 1 artifact

**Priority:** Critical
**Preconditions:** `pnpm install` complete, `pnpm run build-tokens` complete
**Mapped Tasks:** Task 6, Task 9, Task 10, Task 11

| Step | Action                                          | Expected Result                                                                                                                                                 |
| ---- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Run `pnpm run dev` in a terminal                | Storybook dev server logs "Local: http://localhost:6006" within 30 s (asserted by matching regex against stdout)                                                |
| 2    | Playwright: navigate to `http://localhost:6006` | Storybook shell loads; left sidebar contains entries matching `Components/Button`, `Components/Card`, `Patterns/Hero Feature Grid`                              |
| 3    | Click "Components / Button / Primary"           | Canvas iframe has at least one `<button>` element; `page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('button').first()` resolves |
| 4    | Click "Components / Card / Default"             | Canvas iframe `<div>` root has computed `border-radius` = the `radius.card` token's resolved px value (read from `styles/tokens.css`)                           |
| 5    | Click "Patterns / Hero Feature Grid / Default"  | Canvas iframe has `<nav>` with `position: sticky` computed; bento grid renders ≥ 3 `<article>` elements                                                         |

### TS-002: Dark-mode toggle swaps tokens

**Priority:** Critical
**Preconditions:** Storybook running (as TS-001)
**Mapped Tasks:** Task 6, Task 4

| Step | Action                                               | Expected Result                                                                                                                                                 |
| ---- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | In Storybook toolbar, set the Theme global to "Dark" | `page.evaluate(() => document.documentElement.getAttribute('data-theme'))` returns `"dark"`                                                                     |
| 2    | Navigate to "Components / Card / Default"            | Card's computed `background-color` value equals the dark-mode resolved `color.surface.default` value                                                            |
| 3    | Assert computed `--color-surface-default` on `:root` | `page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--color-surface-default'))` equals the dark-mode hex documented in `color.md` |

### TS-003: Reduced-motion toggle disables transitions

**Priority:** High
**Preconditions:** Storybook running
**Mapped Tasks:** Task 6, Task 9

| Step | Action                                                                                       | Expected Result                                                              |
| ---- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1    | In Storybook toolbar, set `prefers-reduced-motion` global to "reduce"                        | `document.documentElement.getAttribute('data-reduced-motion')` is `"reduce"` |
| 2    | Navigate to "Components / Button / Primary"                                                  | Story renders                                                                |
| 3    | Playwright: `page.locator('button').evaluate(el => getComputedStyle(el).transitionDuration)` | Value equals `"0s"` or `"0.01ms"` — not the default UI-duration token value  |

### TS-004: Reduced-transparency swaps glass to solid fallback

**Priority:** Critical (this is Apple's own post-beta correction)
**Preconditions:** Storybook running
**Mapped Tasks:** Task 6, Task 4, Task 11

| Step | Action                                                              | Expected Result                                                                                                      |
| ---- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1    | Navigate to "Patterns / Hero Feature Grid / Default"                | Sticky nav's computed `backdrop-filter` is non-empty (contains `blur`)                                               |
| 2    | Toggle Storybook toolbar `prefers-reduced-transparency` to "reduce" | `document.documentElement.getAttribute('data-reduced-transparency')` is `"reduce"`                                   |
| 3    | Assert sticky-nav computed `background-color`                       | Equals the resolved `color.surface.opaque` token value (read from `styles/tokens.css`) — not a semi-transparent rgba |
| 4    | Assert sticky-nav computed `backdrop-filter`                        | Equals `"none"`                                                                                                      |

### TS-005: Lint rejects raw hex in JSX

**Priority:** Critical
**Preconditions:** Task 7 complete
**Mapped Tasks:** Task 7, Task 9

| Step | Action                                                                                                                            | Expected Result                                                                                                                          |
| ---- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Write to `tests/fixtures/raw-hex-violation.tsx` the content `export const X = () => <button className="bg-[#0071E3]">x</button>;` | File saved                                                                                                                               |
| 2    | Run `pnpm exec eslint tests/fixtures/raw-hex-violation.tsx`                                                                       | Exit code non-zero; stdout contains the rule ID `os-hcl/no-raw-hex-in-className` or `tailwindcss/no-arbitrary-value` and the line number |
| 3    | Delete the fixture file                                                                                                           | File removed                                                                                                                             |
| 4    | Re-run ESLint on the whole repo                                                                                                   | Exit code 0                                                                                                                              |

### TS-006: Depth-check CI fails on missing sibling file

**Priority:** High
**Preconditions:** Task 8 complete, Task 9 complete
**Mapped Tasks:** Task 8

| Step | Action                                                           | Expected Result                                                                     |
| ---- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 1    | `mv components/button/button.md components/button/button.md.bak` | File moved                                                                          |
| 2    | Run `pnpm run check:depth`                                       | Exit code non-zero; stderr contains the strings `components/button` AND `button.md` |
| 3    | `mv components/button/button.md.bak components/button/button.md` | File restored                                                                       |
| 4    | Re-run `pnpm run check:depth`                                    | Exit code 0                                                                         |

### TS-007: Full CI target passes after simulated fresh checkout

**Priority:** Critical
**Preconditions:** Task 12 complete; all prior tasks' artifacts committed
**Mapped Tasks:** All tasks (Task 12 final-integration proves it)

| Step | Action                                                                                                          | Expected Result                                                                                                                                                                                                                                                                            |
| ---- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | From repo root, simulate fresh checkout: `rm -rf node_modules storybook-static styles/tokens.css llms-full.txt` | Generated artifacts removed; source files and `.visual-baselines/` intact                                                                                                                                                                                                                  |
| 2    | Run `pnpm install`                                                                                              | Exit code 0                                                                                                                                                                                                                                                                                |
| 3    | Run `pnpm run ci`                                                                                               | Script runs typecheck → lint → format-check → build-tokens → build-llms-full → check:depth → check:doc-sections → check:agents-size → check:token-contrast → storybook-build → storybook-test-runner → playwright-visual-regression → check:css-budget → check:baseline-count; exit code 0 |
| 4    | Measure total wall time                                                                                         | < 8 min on a modern laptop (looser budget than initial draft; first-run Playwright browser install dominates)                                                                                                                                                                              |

### TS-008: Button keyboard activation + focus-visible ring

**Priority:** Critical
**Preconditions:** Storybook running (built, served from `storybook-static/`)
**Mapped Tasks:** Task 9

| Step | Action                                                          | Expected Result                                                                      |
| ---- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1    | Playwright navigate to Button "Primary" story iframe            | Iframe loaded                                                                        |
| 2    | Click elsewhere in the page to ensure button is not focused     | Button has no `:focus-visible`                                                       |
| 3    | `page.keyboard.press('Tab')` until the button is focused        | `expect(buttonLocator).toBeFocused()` passes                                         |
| 4    | Inspect computed `outline` / `box-shadow` of focused button     | Non-empty ring style applied (matches `focus-visible:ring-*` utility resolved value) |
| 5    | `page.keyboard.press('Enter')` with a spy attached to `onClick` | Spy called once                                                                      |
| 6    | Repeat with `Space`                                             | Spy called once                                                                      |

### TS-009: Button hit-target meets 44px floor

**Priority:** Critical
**Preconditions:** Storybook running
**Mapped Tasks:** Task 9

| Step | Action                                                          | Expected Result                                                                       |
| ---- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 1    | Navigate to Button "Primary — size=md" story                    | Story renders                                                                         |
| 2    | Playwright: `buttonLocator.boundingBox()` and inspect `.height` | Value ≥ 44                                                                            |
| 3    | Navigate to Button "Primary — size=sm" story                    | Story renders                                                                         |
| 4    | Repeat bounding-box check                                       | Value ≥ 44 — small variant must NOT go below the touch-target floor even at `sm` size |

### TS-010: A11y gate fails on intentional violation

**Priority:** Critical (PRD calls this the highest-leverage quality lever)
**Preconditions:** Task 6 complete (Storybook + addon-a11y wired)
**Mapped Tasks:** Task 6, Task 9

| Step | Action                                                                                                                                                                             | Expected Result                                                   |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 1    | Write `tests/fixtures/a11y-regression.stories.tsx` containing a Button story whose `children` is empty and has no `aria-label` (produces a WCAG SC 4.1.2 violation: `button-name`) | File saved                                                        |
| 2    | Temporarily include the fixture in `.storybook/main.ts` stories glob                                                                                                               | Storybook includes the fixture                                    |
| 3    | `pnpm run build:storybook && pnpm run test:storybook`                                                                                                                              | Exit non-zero; stderr/JSON contains the axe rule ID `button-name` |
| 4    | Revert the stories-glob change; remove the fixture file                                                                                                                            | Repo returns to canonical state                                   |
| 5    | Re-run `pnpm run test:storybook`                                                                                                                                                   | Exit code 0                                                       |

## Progress Tracking

- [x] Task 1: Repo skeleton + base toolchain + public GitHub repo
- [x] Task 2: Tailwind v4 + Vite + Style Dictionary pipeline (no glass utilities yet)
- [x] Task 3: DTCG primitive tokens
- [x] Task 4: DTCG semantic + component tokens + glass utilities
- [ ] Task 5: Docs layer — foundations (7 files) + component template + AI retrieval scaffolding
- [ ] Task 6: Storybook 9 + Vite + a11y + toolbar globals
- [ ] Task 7: Custom lint rules (raw-hex + semantic-tokens-only)
- [ ] Task 8: CI quality-gate scripts (depth, doc-sections, AGENTS size, contrast, CSS budget, baseline count) + `ci` composition
- [ ] Task 9: Button component (reference template — interactive primitive)
- [ ] Task 10: Card component (reference template — display primitive)
- [ ] Task 11: hero-feature-grid pattern
- [ ] Task 12: Playwright visual regression + baselines capture + final CI end-to-end verification

**Total Tasks:** 12 | **Completed:** 4 | **Remaining:** 8

## Implementation Tasks

### Task 1: Repo skeleton + base toolchain + public GitHub repo

**Objective:** Initialize the greenfield repo locally (`git init`, main branch), land the base toolchain (TypeScript strict, ESLint, stylelint, Prettier with `prettier-plugin-tailwindcss`, pnpm pinned), author a meaningful public-facing `README.md`, create the **public** GitHub repo at `yegamble/os-hcl-design` via `gh repo create`, and push the initial commit. Repo should install, typecheck, lint, and format-check cleanly after push.
**Dependencies:** None
**Mapped Scenarios:** TS-007 (transitively)

**Files:**

- Create: `.git/` (via `git init -b main`)
- Create: `package.json` — name `os-hcl-design`, `packageManager: "pnpm@9.15.4"` (exact semver — Corepack rejects ranges), private, engines `node >=20`, homepage `https://github.com/yegamble/os-hcl-design`
- Create: `.nvmrc` — `20`
- Create: `.gitignore` — standard Node + Storybook + `storybook-static/` + `styles/tokens.css` (generated) + `llms-full.txt` (generated) + `.visual-baselines/diff/**`
- Create: `.gitattributes` — normalize line endings; no LFS (baseline-count budget obviates need)
- Create: `.editorconfig` — 2-space indent, LF, UTF-8
- Create: `tsconfig.json` — strict, bundler resolution, jsx react-jsx, noUncheckedIndexedAccess, isolatedModules
- Create: `.eslintrc.cjs` — extends TS, React, jsx-a11y, tailwindcss (rules upgraded in Task 7)
- Create: `.stylelintrc.cjs` — extends standard (custom plugin wired in Task 7)
- Create: `.prettierrc` — single-quote, trailing commas, `plugins: ["prettier-plugin-tailwindcss"]`
- Create: `LICENSE` — MIT (confirm at commit with user; MIT is the default)
- Create: `README.md` — **meaningful public README (not stub)**. Sections: (1) 1-line tagline (e.g., "Apple-inspired design system for AI-consumable website generation"), (2) "What this is" paragraph (context repo for Claude + others, git-submodule distribution), (3) "How to use" quick-start snippet showing `git submodule add https://github.com/yegamble/os-hcl-design.git .claude/context/os-hcl-design` + the line to add to the consumer project's `CLAUDE.md`, (4) "Status" — links to `docs/prd/2026-04-18-apple-inspired-design-system.md` and `docs/plans/2026-04-18-apple-inspired-design-system.md`, current phase (Phase 1), (5) "Contents" — bullet list pointing to `foundations/`, `tokens/`, `components/`, `patterns/`, `AGENTS.md`, `llms.txt`, (6) "Contributing" — brief: solo maintainer, issues welcome, PRs by prior coordination, (7) "License" — MIT.
- Create: `.github/workflows/ci.yml` — triggers `on: push: branches: [main]` and `on: pull_request: branches: [main]`. Runs `pnpm install --frozen-lockfile` then `pnpm run ci`. Node 20. macOS-latest runner (matches local-dev visual-baseline platform).

**Key Decisions / Notes:**

- **GitHub remote creation happens AT THE END of Task 1, AFTER the local commit.** Sequence: (1) local scaffold, (2) `git add . && git commit`, (3) `gh auth status` defensive check, (4) `gh repo create yegamble/os-hcl-design --public --source=. --remote=origin --push` (this adds the origin remote and pushes in one step), (5) verify via `gh repo view yegamble/os-hcl-design --json url`.
- **`gh auth status` halt behavior:** if exit code non-zero, STOP Task 1 with the error message: "`gh` unauthenticated or not installed. Run `gh auth login` then re-invoke `/spec` on this plan. Local commit is preserved." Do NOT attempt interactive auth.
- **`gh repo create` collision handling:** if the command fails because the repo exists, halt and surface the error. User decides: delete the remote, rename, or add origin manually. Do not silently overwrite.
- **CI workflow is live from day 1** — every push to main triggers `pnpm run ci`. Tasks 2–11 commits will each trigger CI; `ci` is composed in Task 8 to be `--if-present`-safe for early tasks that haven't created visual-baselines yet, so early-task commits will pass CI.
- `pnpm@9.15.4` is specific semver per Corepack — bump to latest-known-stable at execution time.
- Dev deps installed at Task 1: `typescript @types/node eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-tailwindcss stylelint stylelint-config-standard prettier prettier-plugin-tailwindcss markdownlint-cli2 eslint-plugin-eslint-comments`.
- pnpm scripts defined at Task 1: `typecheck` (`tsc --noEmit`), `lint` (`eslint . && stylelint "**/*.css"`), `format` (`prettier --write .`), `format:check` (`prettier --check .`).
- Initial commit message: `chore: scaffold repo skeleton, base toolchain, and public repo`.
- README must not reference unimplemented features as if they exist — everything linked must land in this plan's tasks or explicitly labeled "Phase 2".

**Definition of Done:**

- [ ] `.git/` exists with `main` branch and exactly one commit containing all listed files
- [ ] `pnpm install` exits 0
- [ ] `pnpm run typecheck` exits 0
- [ ] `pnpm run lint` exits 0 on the empty source tree (zero warnings, zero errors)
- [ ] `pnpm run format:check` exits 0
- [ ] `node --version` satisfies engines field; `pnpm --version` matches pinned
- [ ] `gh repo view yegamble/os-hcl-design --json visibility` returns `{"visibility":"PUBLIC"}`
- [ ] `git remote get-url origin` returns `https://github.com/yegamble/os-hcl-design.git` (or the SSH form)
- [ ] `git log --oneline origin/main` shows at least one commit — the initial commit is on the remote
- [ ] GitHub Actions CI run for the initial commit is queued or completed (verified via `gh run list --branch main --limit 1`)
- [ ] `README.md` contains: a tagline, quick-start submodule snippet, link to the PRD, link to this plan, MIT license mention

**Verify:**

```
pnpm install && pnpm run typecheck && pnpm run lint && pnpm run format:check
git log --oneline | wc -l  # → 1
gh auth status
gh repo view yegamble/os-hcl-design --json visibility,url
git remote get-url origin
gh run list --branch main --limit 1
```

---

### Task 2: Tailwind v4 + Vite + Style Dictionary build pipeline (no glass utilities yet)

**Objective:** Install and wire Tailwind v4 (CSS-first), Vite, and Style Dictionary 4 so `pnpm run build-tokens` generates a placeholder `styles/tokens.css` from empty DTCG JSON. Author the **non-material** custom utilities only (`bento-grid`, `sticky-nav-blur`, `display-type`, `section-rhythm`). Material/glass utilities are deferred to Task 4 where their backing tokens are authored.
**Dependencies:** Task 1
**Mapped Scenarios:** TS-001 (transitively)

**Files:**

- Create: `vite.config.ts` — consumed by Storybook in Task 6
- Create: `styles/tokens.css` — **generated**, gitignored (placeholder until Task 3/4)
- Create: `styles/utilities.css` — declares `@utility bento-grid { … }`, `@utility sticky-nav-blur { … }`, `@utility display-type { … }`, `@utility section-rhythm { … }`. **NO glass utilities yet** (authored in Task 4 alongside material tokens they depend on).
- Create: `styles/reset.css` — minimal reset (box-sizing, focus-visible default) + `@media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }`
- Create: `styles/index.css` — `@import "./reset.css"; @import "./tokens.css"; @import "./utilities.css"; @import "tailwindcss"; @source "../components/**/*.tsx"; @source "../patterns/**/*.tsx"; @source "../.storybook/**/*.ts";`
- Create: `build-tokens.mjs` — Style Dictionary config reading `tokens/*.tokens.json`, emitting CSS vars into `styles/tokens.css`. Expected modes (light/dark/high-contrast) are scaffolded but not populated until Tasks 3–4.
- Modify: `package.json` — add scripts: `build-tokens` (`node build-tokens.mjs`), `build` (`pnpm run build-tokens`).

**Key Decisions / Notes:**

- Install deps: `tailwindcss@^4 vite @vitejs/plugin-react style-dictionary@^4 react@^19 react-dom@^19 @types/react @types/react-dom tailwind-variants clsx tailwind-merge`.
- Tailwind v4 config is CSS-first via `@theme` in `styles/tokens.css`. **No `tailwind.config.ts` for design values.** Create `tailwind.config.ts` ONLY if a plugin absolutely requires it.
- Add `styles/tokens.css` to `.gitignore`.

**Definition of Done:**

- [ ] `pnpm run build-tokens` exits 0 even with empty token JSON (emits a valid empty `@theme {}` block)
- [ ] `styles/tokens.css` is generated and gitignored (`git status` does not list it)
- [ ] `styles/utilities.css` declares exactly 4 `@utility` rules (`bento-grid`, `sticky-nav-blur`, `display-type`, `section-rhythm`) — glass utilities intentionally absent
- [ ] `styles/reset.css` contains the `prefers-reduced-motion` media query
- [ ] `pnpm run typecheck` passes

**Verify:**

```
pnpm run build-tokens && test -f styles/tokens.css
grep -c "^@utility" styles/utilities.css  # → 4
! grep -q "@utility glass-regular" styles/utilities.css  # glass NOT present yet
```

---

### Task 3: DTCG primitive tokens

**Objective:** Author `tokens/primitive.tokens.json` — raw palette (Apple-inspired neutrals + system accents, across light/dark/high-contrast), spacing scale, radii, shadows, type scale, weights, line heights, durations, spring easings.
**Dependencies:** Task 2
**Mapped Scenarios:** T6 (via Task 4), T14 (contrast uses primitives resolved through semantics)

**Files:**

- Create: `tokens/primitive.tokens.json` — DTCG v1 JSON with every primitive declared under groups: `color.gray.{50..950}`, `color.blue.{50..950}`, `color.red.{50..950}`, `color.green.{50..950}`, `color.yellow.{50..950}`, `color.orange.{50..950}`, `color.purple.{50..950}`, `color.pink.{50..950}`, each step having `$value` single hex AND `$extensions.modes` entries for `dark` and `high-contrast` variants (Style Dictionary mode handling — Task 4 details). `space.{0,2,4,8,12,16,20,24,32,40,48,64,80,96,128}` (px). `radius.{none,6,10,14,18,22,28,36,full}`. `shadow.{sm,md,lg,xl}` (with dark-mode variants). `fontSize.{caption2,caption1,footnote,subheadline,callout,body,headline,title3,title2,title1,large-title,hero-sm,hero-md,hero-lg}` (hero entries use `clamp()`). `lineHeight.{tight,snug,normal,relaxed}`. `fontWeight.{regular,medium,semibold,bold}`. `duration.{instant,ui,hero-short,hero-long}`. `ease.{standard,spring-soft,spring-firm}`.

**Key Decisions / Notes:**

- Primitive tokens are brand-agnostic raw values. Semantic layer (Task 4) maps to them.
- Hero font sizes use CSS `clamp()` expressions as string `$value` (Style Dictionary passes them through).
- Easings expressed as `cubic-bezier()` strings — `spring-soft` = `cubic-bezier(0.32, 0.72, 0, 1)`, `spring-firm` = `cubic-bezier(0.22, 1, 0.36, 1)`, `standard` = `cubic-bezier(0.4, 0, 0.2, 1)`.

**Definition of Done:**

- [ ] `tokens/primitive.tokens.json` exists and is valid JSON
- [ ] Every token has `$value` and `$type` per DTCG v1
- [ ] `pnpm run build-tokens` succeeds; `grep -c '\--color-primitive-gray' styles/tokens.css` ≥ 11 (one per step × 1 mode minimum; more when semantic layer pulls through modes)
- [ ] No duplicate keys — verified by `node -e "const t=require('./tokens/primitive.tokens.json'); JSON.stringify(t)"` exits 0

**Verify:**

```
node -e "require('./tokens/primitive.tokens.json')"
pnpm run build-tokens
```

---

### Task 4: DTCG semantic + component tokens + glass utilities

**Objective:** Author `tokens/semantic.tokens.json` (single file per PRD — role-named aliases over primitives with light/dark/high-contrast modes via Style Dictionary mode handling) and `tokens/component.tokens.json` (component-scoped references to semantic tokens). Add glass/material utilities (`glass-regular`, `glass-fallback`) to `styles/utilities.css` — now that their backing material tokens exist.
**Dependencies:** Task 3
**Mapped Scenarios:** T6, T14, TS-002, TS-004

**Files:**

- Create: `tokens/semantic.tokens.json` — single DTCG file. Groups: `color.text.{primary,secondary,tertiary,quaternary,inverse,link,destructive}`, `color.surface.{default,elevated,raised,opaque,material-thin,material-regular,material-thick}`, `color.separator.{default,opaque}`, `color.border.{subtle,default,strong}`, `color.action.{primary,primary-hover,primary-active,destructive,destructive-hover,primary-fg,destructive-fg}`, `color.accent`, `space.gutter.{page,section,card}`, `radius.{button,card,sheet,pill}`, `shadow.{card,dialog,popover,toast}`, `motion.duration.{ui,hero-short,hero-long}`, `motion.ease.{standard,spring-soft,spring-firm}`, `type.size.{body,hero-sm,hero-md,hero-lg,…}`, `type.weight.{body,heading}`, `type.family.{sans,mono,serif}`, `material.{thin,regular,thick}` — each `material.*` is a group with `.backdropFilter` ($value: string like `blur(24px) saturate(180%)`) and `.fallbackColor` ($value: `{color.surface.opaque}` alias). Modes: each token has `$value` (light default) and `$extensions.modes.dark.$value` + `$extensions.modes.high-contrast.$value`.
- Create: `tokens/component.tokens.json` — `button.{primary,secondary,ghost,destructive}.{bg,fg,border,shadow}.{default,hover,active,disabled}`, `card.{bg,border,shadow,radius,padding}`. All `$value` entries are `{alias}` references to semantic tokens — never primitives.
- Modify: `build-tokens.mjs` — add mode handling: emit three scoped CSS blocks: `[data-theme="light"] { … }` (default — also emit on `:root` as fallback), `[data-theme="dark"] { … }`, `[data-contrast="more"] { … }`. Fallback path documented in Risks: if Style Dictionary mode extension isn't supported, configure three platforms with different filter transforms each scoping a different attribute selector.
- Modify: `styles/utilities.css` — add `@utility glass-regular { background-color: var(--color-surface-material-regular-fallback); backdrop-filter: var(--material-regular-backdrop-filter); -webkit-backdrop-filter: var(--material-regular-backdrop-filter); }` and `@utility glass-fallback { background-color: var(--color-surface-material-regular-fallback); backdrop-filter: none; }`. Guard via media query AND data-attribute: `@media (prefers-reduced-transparency: reduce) { .glass-regular { backdrop-filter: none; } } [data-reduced-transparency="reduce"] .glass-regular { backdrop-filter: none; }`.

**Key Decisions / Notes:**

- Single `semantic.tokens.json` per PRD — use Style Dictionary's `modes` mechanism or (fallback) per-platform configuration in `build-tokens.mjs`. Do not split into `.light`, `.dark`, `.high-contrast` files.
- High-contrast mode ships — previously at risk of being silently dropped; explicitly added here (addresses F-009).
- Component tokens reference ONLY semantic tokens. Enforced by a grep check in DoD: `! grep -qE '\{color\.(gray|blue|red|green|yellow|orange|purple|pink)\.' tokens/component.tokens.json`.
- Glass utilities now have valid backing vars — no dangling references.

**Definition of Done:**

- [ ] `tokens/semantic.tokens.json` and `tokens/component.tokens.json` exist, valid JSON, every `$value` is either a literal or a `{alias}` to a primitive or another semantic
- [ ] `pnpm run build-tokens` resolves every alias and exits 0
- [ ] `styles/tokens.css` contains three scoped blocks: `[data-theme="light"]`, `[data-theme="dark"]`, `[data-contrast="more"]` (grep each; count ≥ 1)
- [ ] `grep -c '\--color-action-primary' styles/tokens.css` ≥ 3 (one per mode)
- [ ] `component.tokens.json` references NO primitive color groups (regex check in DoD)
- [ ] `styles/utilities.css` contains `@utility glass-regular` and `@utility glass-fallback`
- [ ] Manual: rename a referenced alias in `component.tokens.json` to a non-existent key; `pnpm run build-tokens` fails with a line number; revert

**Verify:**

```
pnpm run build-tokens
grep -c '^\[data-theme="light"\]' styles/tokens.css
grep -c '^\[data-theme="dark"\]' styles/tokens.css
grep -c '^\[data-contrast="more"\]' styles/tokens.css
! grep -qE '\{color\.(gray|blue|red|green|yellow|orange|purple|pink)\.' tokens/component.tokens.json
grep -c '^@utility glass' styles/utilities.css  # → 2
```

---

### Task 5: Docs layer — foundations (7 files) + component template + AI retrieval scaffolding

**Objective:** Author all documentation content in one pass: 7 foundation markdown documents (highest-retrieval-value content for AI consumers), the canonical `component-template.md`, and the AI-retrieval scaffolding at repo root (`AGENTS.md`, `CLAUDE.md`, `llms.txt`, `llms-full.txt` build script, `registry.json`).
**Dependencies:** Task 4 (tokens are cited in foundations)
**Mapped Scenarios:** T7

**Files:**

- Create: `foundations/principles.md` — Deference, Clarity, Depth + supporting principles; hard-constraint table (max 3 type weights, one message per viewport, min 80px section padding, max 1 accent per section)
- Create: `foundations/typography.md` — system-font stack, type role scale with fluid clamp values, hero conventions (tight tracking), weight discipline rules, tracking/leading tokens
- Create: `foundations/color.md` — semantic token list with roles, light/dark/high-contrast mappings, accent discipline, contrast requirements, "color-independence" rule
- Create: `foundations/spacing.md` — 4/8pt scale, layout margins, section rhythm, readable text measure (65–75ch), bento-grid gap conventions
- Create: `foundations/motion.md` — duration tokens, easing tokens (incl. spring cubics), scroll-driven conventions, `prefers-reduced-motion` contract, motion-for-meaning rule
- Create: `foundations/materials.md` — Liquid-Glass web approximation, three material tiers (thin/regular/thick), mandatory solid-fallback tokens, `prefers-reduced-transparency` contract, anti-patterns
- Create: `foundations/accessibility.md` — WCAG 2.1 AA baseline, focus-ring conventions, 44px hit targets, Dynamic Type equivalence, keyboard navigation, screen-reader semantics, color-independence
- Create: `foundations/component-template.md` — canonical **11-section** template enumerating: (1) Overview, (2) Anatomy, (3) Variants, (4) States, (5) Props API table, (6) Usage Do/Don't pairs, (7) Code Examples, (8) Accessibility, (9) Tokens Used, (10) Related, (11) Changelog. Must-include YAML front-matter keys. Storybook is understood to provide the Live Example — it is not a documented section.
- Create: `AGENTS.md` — <2048 bytes. Sections: Purpose (1 line), How to use (1 paragraph), Links (bulleted list to `foundations/*.md`, `tokens/*.tokens.json`), Boundaries (never invent tokens, never use arbitrary Tailwind values, semantic-tokens-only, a11y non-negotiable). NO embedded content.
- Create: `CLAUDE.md` — one-line pointer: `@AGENTS.md — see that file for all project rules.`
- Create: `llms.txt` — per llmstxt.org v1.1: single H1 (`# os-hcl-design`), `>` summary blockquote, H2 sections listing foundations, tokens, components, patterns with 1-line descriptors
- Create: `scripts/build-llms-full.mjs` — walks `foundations/`, `tokens/`, `components/`, `patterns/` and concatenates `.md` + stringified `.tokens.json` + stringified `.spec.json` into `llms-full.txt`. Fixed extension handler map documented in the script header.
- Create: `llms-full.txt` — gitignored; generated by `pnpm run build-llms-full`
- Create: `registry.json` — shadcn-compatible schema stub: `{"$schema": "https://ui.shadcn.com/schema/registry.json", "name": "os-hcl-design", "homepage": "", "items": []}`
- Modify: `package.json` — add scripts `build-llms-full` and fold it into `build`.

**Key Decisions / Notes:**

- Every foundation doc opens with YAML front-matter: `title`, `category: foundation`, `status: stable`, `tokensReferenced: [...]`
- Stable headings per foundation doc: `## Overview`, `## Rules`, `## Tokens`, `## Do / Don't`, `## Related`.
- `component-template.md` is the single source of truth for the per-component `.md` structure — CI script `check-doc-sections.mjs` (Task 8) reads it and verifies every `components/*/*.md` matches.
- `AGENTS.md` size is a hard constraint — Task 8's `check:agents-size` enforces 2048 bytes.
- `llms.txt` must have a single H1 per v1.1 spec; everything else H2 + bulleted links.
- `llms-full.txt` in `.gitignore`; regenerated in CI.

**Definition of Done:**

- [ ] All 8 files exist under `foundations/` (7 principle docs + `component-template.md`)
- [ ] All 5 AI-scaffolding files exist at repo root (`AGENTS.md`, `CLAUDE.md`, `llms.txt`, `registry.json`, `scripts/build-llms-full.mjs`)
- [ ] `wc -c AGENTS.md` < 2048
- [ ] Every foundation `.md` has YAML front-matter with the 4 declared keys
- [ ] `component-template.md` enumerates exactly 11 sections (verified by regex count of `^## ` headings)
- [ ] `pnpm run build-llms-full` exits 0 and creates `llms-full.txt` at root with content from all foundation docs
- [ ] `registry.json` is valid JSON; passes local JSON-Schema validation against the shadcn registry schema (fetched once during implementation, cached as `.schema/registry.schema.json`)
- [ ] `pnpm exec markdownlint-cli2 "foundations/**/*.md"` exits 0

**Verify:**

```
test $(wc -c < AGENTS.md) -lt 2048
test $(grep -c '^## ' foundations/component-template.md) -eq 11
pnpm run build-llms-full && test -f llms-full.txt
grep -q "# os-hcl-design" llms.txt
pnpm exec markdownlint-cli2 "foundations/**/*.md"
```

---

### Task 6: Storybook 9 + Vite + a11y + toolbar globals

**Objective:** Install Storybook 9 with Vite builder, `@storybook/addon-a11y`, toolbar globals for dark-mode, `prefers-reduced-motion`, `prefers-reduced-transparency`. Every story inherits these globals via a global decorator.
**Dependencies:** Task 2, Task 4
**Mapped Scenarios:** TS-001, TS-002, TS-003, TS-004, TS-010

**Files:**

- Create: `.storybook/main.ts` — framework `@storybook/react-vite`, stories glob `['../components/**/*.stories.@(ts|tsx)', '../patterns/**/*.stories.@(ts|tsx)']`, addons `['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-themes']`
- Create: `.storybook/preview.ts` — parameters `a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } }`, imports `../styles/index.css`
- Create: `.storybook/globals.ts` — toolbar globals `theme` (light/dark), `reducedMotion` (no-preference/reduce), `reducedTransparency` (no-preference/reduce)
- Create: `.storybook/decorators.tsx` — global decorator that sets `data-theme`, `data-reduced-motion`, `data-reduced-transparency` on `document.documentElement` based on toolbar globals
- Modify: `package.json` — scripts `dev` (`storybook dev -p 6006`), `build:storybook` (`storybook build`), `test:storybook` (`storybook test-runner`). Add deps: `storybook @storybook/react-vite @storybook/addon-essentials @storybook/addon-a11y @storybook/addon-themes @storybook/test-runner`.

**Key Decisions / Notes:**

- Decorator mutates `document.documentElement` directly — the `data-reduced-transparency="reduce"` attribute triggers the selector variant in `styles/utilities.css` (Task 4) without relying on actual UA preferences.
- Storybook test-runner + axe auto-runs on every story at CI time; failures fail CI.

**Definition of Done:**

- [ ] `pnpm run dev` starts Storybook on port 6006 within 30 s (asserted with a regex match on stdout)
- [ ] Storybook shell loads (Playwright navigate check) — no stories exist yet
- [ ] `pnpm run build:storybook` produces `storybook-static/` without errors
- [ ] `pnpm run test:storybook` with zero stories exits 0
- [ ] Toolbar contains three toolbar globals (verified via Playwright DOM check on the Storybook toolbar)

**Verify:**

```
pnpm run build:storybook
pnpm run test:storybook
```

---

### Task 7: Custom lint rules (raw-hex + semantic-tokens-only)

**Objective:** Author custom lint rules enforcing token discipline: an ESLint rule banning raw hex / rgb / rgba / hsl in JSX `className` string literals; a stylelint rule enforcing component CSS references only semantic tokens (not primitives). Configure `eslint-plugin-tailwindcss` `no-arbitrary-value` and `no-custom-classname`.
**Dependencies:** Task 1
**Mapped Scenarios:** TS-005

**Files:**

- Create: `eslint-rules/no-raw-hex-in-className.cjs` — rejects regex `#[0-9a-fA-F]{3,8}` and `rgb(` / `rgba(` / `hsl(` inside `className` literals. Ignores `data-*`, `style` attrs, SVG `fill`/`stroke`. Allowlist: per-line `// eslint-disable-next-line os-hcl/no-raw-hex-in-className -- <reason>` — the rule integrates with `eslint-plugin-eslint-comments/require-description` to enforce the reason-suffix.
- Create: `eslint-rules/__tests__/no-raw-hex-in-className.test.cjs` — RuleTester: valid cases (semantic className, disable-with-reason), invalid cases (raw hex, rgb, disable-without-reason)
- Modify: `.eslintrc.cjs` — load local rules via `rulePaths`; enable `os-hcl/no-raw-hex-in-className: error`, `tailwindcss/no-arbitrary-value: error` (with allowlist key `[]`), `tailwindcss/no-custom-classname: error`, `tailwindcss/classnames-order: error`
- Create: `stylelint-rules/semantic-tokens-only.cjs` — plugin that fails on `var(--color-primitive-*)`, `var(--space-primitive-*)`, etc. in files under `components/**/*.css` and `patterns/**/*.css`
- Create: `stylelint-rules/__tests__/semantic-tokens-only.test.cjs` — uses `stylelint.lint` API on fixture strings
- Modify: `.stylelintrc.cjs` — load local plugin; enable rule with `overrides: [{ files: ['components/**/*.css', 'patterns/**/*.css'], rules: { 'os-hcl/semantic-tokens-only': true } }]`
- Add dev dep: `eslint-plugin-eslint-comments` (for reason-suffix enforcement)

**Key Decisions / Notes:**

- Both rules have unit tests exercising happy-path + allowlist cases. Tests run in `pnpm run lint` pipeline.
- The hex-ban allowlist is a **committed mechanism**, not a promise: the rule rejects bare disable directives without the `-- <reason>` suffix.

**Definition of Done:**

- [ ] Both rule files exist with `meta` + `create` exports
- [ ] Unit tests for each (`eslint-rules/__tests__/`, `stylelint-rules/__tests__/`) pass via `node --test`
- [ ] `pnpm run lint` on existing codebase (pre-components) exits 0
- [ ] Adding `<button className="bg-[#0071E3]">` to any component-dir file fails `pnpm run lint` with the rule ID in output (manual smoke + wired to TS-005)

**Verify:**

```
node --test eslint-rules/__tests__/ stylelint-rules/__tests__/
pnpm run lint
```

---

### Task 8: CI quality-gate scripts + `ci` composition

**Objective:** Ship six CI-gate scripts (depth-check, doc-sections, AGENTS size, token-contrast, CSS budget, baseline count) and compose the full `pnpm run ci` target. **Adds the WCAG contrast gate (F-001)** and **wires `format:check` into `ci` (F-013)**.
**Dependencies:** Task 1, Task 5
**Mapped Scenarios:** TS-005, TS-006, TS-007

**Files:**

- Create: `scripts/check-component-depth.mjs` — verifies every `components/*/` has all 5 sibling files and every `patterns/*/` has all 4; exit 1 naming offenders
- Create: `scripts/check-doc-sections.mjs` — reads `foundations/component-template.md`, extracts canonical `## …` headings; verifies every `components/*/*.md` and `patterns/*/*.md` contains the same 11 `## …` headings; exit 1 naming offenders
- Create: `scripts/check-agents-md-size.mjs` — fails if `AGENTS.md` > 2048 bytes
- Create: `scripts/check-token-contrast.mjs` — parses `styles/tokens.css`, enumerates every `color.text.*` × `color.surface.*` semantic pair for each mode (light, dark, high-contrast), computes WCAG relative-luminance contrast ratio (standard formula), fails on <4.5:1 (body-text pairs) or <3:1 (large-text / UI pairs — distinguished by token naming convention: `.large`, `.ui`, or `.component-*` treat as 3:1 threshold)
- Create: `scripts/check-css-budget.mjs` — reads all `storybook-static/**/*.css`, concatenates, gzips in-memory via `zlib`, fails if total > 15360 bytes (15 KB)
- Create: `scripts/check-baseline-count.mjs` — counts PNGs under `.visual-baselines/`, fails if > 50 (buffer above the Phase 1 ~40 target; bump for Phase 2)
- Modify: `package.json` — add scripts: `check:depth`, `check:doc-sections`, `check:agents-size`, `check:token-contrast`, `check:css-budget`, `check:baseline-count`. Compose `ci`:
  ```
  "ci": "pnpm run typecheck && pnpm run lint && pnpm run format:check && pnpm run build-tokens && pnpm run build-llms-full && pnpm run check:depth && pnpm run check:doc-sections && pnpm run check:agents-size && pnpm run check:token-contrast && pnpm run build:storybook && pnpm run test:storybook && pnpm run --if-present test:visual && pnpm run check:css-budget && pnpm run check:baseline-count"
  ```

**Key Decisions / Notes:**

- `format:check` is part of the `ci` chain (addresses F-013).
- `test:visual` uses `--if-present` so Task 8's `ci` passes even before Task 12 creates the visual spec files. Task 12 then exercises the full chain.
- `check:token-contrast` ships in Phase 1 per F-001 resolution — NOT deferred.
- Each script prints a clear exit reason; fails fast.

**Definition of Done:**

- [ ] Six scripts exist and run standalone without errors when their inputs are present
- [ ] `pnpm run check:depth` passes on current state (no component dirs) with message "no component dirs to check"
- [ ] `pnpm run check:depth` fails on a throwaway incomplete component dir (smoke test in implementation)
- [ ] `pnpm run check:agents-size` passes (AGENTS.md from Task 5 is under 2KB)
- [ ] `pnpm run check:token-contrast` passes on the tokens shipped by Task 4 (if any pair fails, Task 4 tokens must be adjusted — this is the gate's purpose)
- [ ] `pnpm run ci` composed, with `test:visual` `--if-present` guard
- [ ] Running `pnpm run ci` now (pre-Tasks 9/10/11/12) completes all reachable gates; visual-regression is skipped per `--if-present`; `check:baseline-count` passes vacuously
- [ ] TS-006 scenario passes

**Verify:**

```
pnpm run check:depth && pnpm run check:doc-sections && pnpm run check:agents-size && pnpm run check:token-contrast && pnpm run check:css-budget
pnpm run ci  # full chain — should pass without Tasks 9-12 artifacts yet
```

---

### Task 9: Button component (reference template — interactive primitive)

**Objective:** Author Button as the reference template for all interactive primitives. Ship 5 sibling files following the 11-section template. Variants: primary, secondary, ghost, destructive. Sizes: sm, md, lg — all meet 44px minimum hit target. Every story passes axe.
**Dependencies:** Task 6, Task 7, Task 8
**Mapped Scenarios:** TS-001, TS-002, TS-003, TS-005, TS-008, TS-009

**Files:**

- Create: `components/button/button.tsx` — styled native `<button>` using `tailwind-variants` (`tv()`). Props: `variant` ('primary'|'secondary'|'ghost'|'destructive'), `size` ('sm'|'md'|'lg'), standard button attrs, `className` forwarded via `twMerge`. All utilities reference semantic tokens (e.g., `bg-action-primary`, `text-action-primary-fg`, `hover:bg-action-primary-hover`, `focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default`). Minimum height: `min-h-11` (44px) on every size — sm reduces font-size/padding but never height.
- Create: `components/button/button.md` — 11-section template per `foundations/component-template.md`. YAML front-matter includes `tokensUsed` enumerating every semantic token class consumed.
- Create: `components/button/button.spec.json` — machine-readable: `{ "name": "Button", "category": "primitive", "variants": ["primary","secondary","ghost","destructive"], "sizes": ["sm","md","lg"], "props": [...], "tokensUsed": [...], "a11y": { "role": "button", "keyboard": ["Enter","Space"], "focus": "focus-visible ring (2px, action-primary, 2px offset)", "minHitTarget": "44px" } }`
- Create: `components/button/button.stories.tsx` — CSF3 stories: one per variant × size matrix (12 stories), plus `Disabled`, plus `DarkMode` (default variant, `data-theme=dark` applied)
- Create: `components/button/button.tokens.json` — `button.{primary,secondary,ghost,destructive}.{bg,fg,border,shadow}.{default,hover,active,disabled}` — all references to semantic tokens

**Key Decisions / Notes:**

- Use `tailwind-variants`: `const button = tv({ base: [...], variants: { variant: {...}, size: {...} }, defaultVariants: { variant: 'primary', size: 'md' } });`
- Focus-visible ring is a utility combination — no CSS-file overrides; stays in JSX.
- All sizes enforce `min-h-11` (44px) — sm variant adjusts horizontal padding and font-size but retains height (F-005 / TS-009).
- Component tokens reference semantic tokens only — never primitives. Verified by Task 7's stylelint rule and a grep in DoD.
- File must not contain: raw hex, arbitrary Tailwind values, `dark:` prefixes, `style={{}}` except for dynamic CSS vars.

**Definition of Done:**

- [ ] All 5 sibling files exist — `pnpm run check:depth` passes
- [ ] `pnpm run check:doc-sections` passes (11-section template verified for button.md)
- [ ] All stories render in Storybook (verified via Playwright navigate + DOM count in TS-001 step 3)
- [ ] All stories pass `@storybook/addon-a11y` WCAG AA (0 violations) — `pnpm run test:storybook` exits 0 for button stories
- [ ] Dark-mode story: `data-theme="dark"` on html causes computed `background-color` to equal dark-mode action-primary resolved value (TS-002)
- [ ] Reduced-motion: `data-reduced-motion="reduce"` makes computed `transition-duration` equal `0s` or `0.01ms` (TS-003)
- [ ] Keyboard activation works: TS-008 passes (Tab focuses, focus-visible ring visible, Enter and Space fire click)
- [ ] Hit-target floor: TS-009 passes (`boundingBox().height >= 44` at all sizes)
- [ ] Introducing raw hex into `button.tsx` fails `pnpm run lint` (TS-005)
- [ ] Component tokens reference NO primitive groups (grep check)

**Verify:**

```
pnpm run check:depth && pnpm run check:doc-sections
pnpm run build:storybook && pnpm run test:storybook
```

---

### Task 10: Card component (reference template — display primitive)

**Objective:** Author Card as the reference template for presentational / layout primitives. Ship 5 sibling files.
**Dependencies:** Task 9
**Mapped Scenarios:** TS-001, TS-002

**Files:**

- Create: `components/card/card.tsx` — compound component (`Card`, `Card.Header`, `Card.Body`, `Card.Footer`). Variants: `default`, `elevated`, `outlined`, `glass`. Padding: `sm`, `md`, `lg`. Radius: `md`, `lg`, `xl`. Uses semantic tokens only. `glass` variant applies `glass-regular` utility (from Task 4) — which includes the solid-fallback behavior.
- Create: `components/card/card.md` — 11-section template per canonical
- Create: `components/card/card.spec.json` — machine-readable, including compound-component exports list
- Create: `components/card/card.stories.tsx` — stories per variant; `Glass` variant gets a dedicated story with a prose note that reduced-transparency swaps to solid fallback (verified by pattern's TS-004 rather than here since `hero-feature-grid` uses Card.glass in sticky nav)
- Create: `components/card/card.tokens.json` — `card.{bg,border,shadow,radius,padding}` variants, all semantic references

**Key Decisions / Notes:**

- Compound-component sub-parts exported as dot-notation (`Card.Header`, etc.).
- Glass variant's behavior is verified at the pattern level (TS-004) because `hero-feature-grid` uses the glass utility in its sticky nav.
- Same token-discipline rules as Button.

**Definition of Done:**

- [ ] All 5 sibling files exist; `pnpm run check:depth && pnpm run check:doc-sections` passes
- [ ] All stories pass axe WCAG AA
- [ ] Dark-mode story renders with resolved dark-mode card tokens (computed `background-color` equals dark `color.surface.elevated`)
- [ ] Component tokens reference NO primitive groups (grep check)
- [ ] Glass variant is present in stories (visual reference — behavior tested via pattern's TS-004)

**Verify:**

```
pnpm run check:depth && pnpm run check:doc-sections
pnpm run build:storybook && pnpm run test:storybook
```

---

### Task 11: hero-feature-grid pattern

**Objective:** Author the `hero-feature-grid` pattern as the reference template for composed patterns. Ship 4 sibling files (md + tsx + spec + stories). Uses Button and Card from Tasks 9–10. No new primitives.
**Dependencies:** Task 9, Task 10
**Mapped Scenarios:** TS-001 step 5, TS-004

**Files:**

- Create: `patterns/hero-feature-grid/hero-feature-grid.md` — 11-section template (same canonical as components), adapted: "Variants" becomes "Variants / Layouts", "Props" becomes "Composition API" (because patterns expose slots, not props)
- Create: `patterns/hero-feature-grid/hero-feature-grid.tsx` — composed: sticky `<nav>` with `glass-regular` utility class + display-type heading + subheadline + Button CTA in hero section + 3-column bento grid of `<Card variant="elevated">` below. Uses Button and Card exported from `components/`.
- Create: `patterns/hero-feature-grid/hero-feature-grid.spec.json` — pattern spec enumerating components used, tokens used, slot list
- Create: `patterns/hero-feature-grid/hero-feature-grid.stories.tsx` — single `Default` story rendering the full composition at desktop viewport

**Key Decisions / Notes:**

- Sticky nav uses `glass-regular` utility — swaps to solid under `[data-reduced-transparency="reduce"]` (verified by TS-004).
- No `<header>` / `<main>` / `<footer>` outside the pattern's root; pattern is a self-contained `<section>` or `<article>`.
- Content is placeholder (Lorem-ish) but realistic — 3 feature cards with a title, short copy, and subtle accent.

**Definition of Done:**

- [ ] All 4 sibling files exist; `pnpm run check:depth && pnpm run check:doc-sections` passes
- [ ] Pattern renders in Storybook (TS-001 step 5)
- [ ] Sticky nav has `position: sticky` computed (TS-004 step 1)
- [ ] Reduced-transparency: backdrop-filter is `none`, background-color equals solid fallback (TS-004 steps 3–4)
- [ ] Pattern story passes axe WCAG AA (inherits from components' a11y)

**Verify:**

```
pnpm run check:depth && pnpm run check:doc-sections
pnpm run build:storybook && pnpm run test:storybook
```

---

### Task 12: Playwright visual regression + baselines capture + end-to-end CI verification

**Objective:** Wire Playwright for visual regression (Button, Card, `hero-feature-grid` × modes), capture baselines, commit them, and execute the full `pnpm run ci` target to prove TS-007 end-to-end. Add the a11y-failure fixture-based regression scenario (TS-010) as a standalone test path.
**Dependencies:** Task 8, Task 11
**Mapped Scenarios:** TS-007, TS-008, TS-009, TS-010, all visual-aspects of TS-001/002/003/004

**Files:**

- Create: `playwright.config.ts` — base URL `http://localhost:6006`, Chromium only, workers 1 (deterministic), `toHaveScreenshot` `threshold: 0.2` and `maxDiffPixels: 100`
- Create: `tests/visual/button.spec.ts` — one screenshot per (variant × mode): 4 variants × 4 modes (default / dark / reduced-motion / reduced-transparency) = 16 PNGs. NO size-matrix permutation.
- Create: `tests/visual/card.spec.ts` — 4 variants × 4 modes = 16 PNGs
- Create: `tests/visual/hero-feature-grid.spec.ts` — 1 variant × 4 modes = 4 PNGs
- Create: `tests/visual/README.md` — notes that baselines are macOS-only for v1, explains how to regenerate (`pnpm run test:visual:update`)
- Create: `tests/keyboard/button.spec.ts` — TS-008 and TS-009 assertions (Playwright keyboard + bounding-box checks)
- Create: `tests/a11y-regression/run.mjs` — TS-010 helper: writes fixture story, patches `.storybook/main.ts` stories glob, runs `test:storybook`, asserts non-zero exit + axe rule ID in output; then reverts
- Create: `.visual-baselines/` — directory; populated by `pnpm run test:visual:update` on first run
- Modify: `package.json` — `test:visual` (`playwright test tests/visual`), `test:visual:update` (`playwright test tests/visual --update-snapshots`), `test:keyboard` (`playwright test tests/keyboard`), `test:a11y-regression` (`node tests/a11y-regression/run.mjs`). Add dep: `@playwright/test@<pinned>`.
- Modify: `package.json` `ci` script — remove the `--if-present` guard on `test:visual`; add `test:keyboard` and `test:a11y-regression` to the chain AFTER `test:storybook` and BEFORE `check:css-budget`.

**Key Decisions / Notes:**

- Playwright runs against BUILT Storybook (`storybook-static/` served via `http-server`) — NOT the dev server. Deterministic.
- Mode toggling uses `page.evaluate()` to set `data-theme`, `data-reduced-motion`, `data-reduced-transparency` — does NOT use `emulateMedia()` (our implementation reads data-attrs).
- Baseline count: Button 16 + Card 16 + Pattern 4 = 36 PNGs (under the 50-PNG budget — `check:baseline-count.mjs` confirms).
- First run generates baselines (`pnpm run test:visual:update`); `git add .visual-baselines/` commits them.
- Total CI wall time now includes visual regression + keyboard + a11y-regression. TS-007 budget adjusted to < 8 min (Playwright first-run browser install dominates; incremental runs are faster).

**Definition of Done:**

- [ ] `playwright.config.ts` valid; `pnpm exec playwright install chromium` completes
- [ ] `pnpm run test:visual:update` captures baselines for all 36 PNG slots
- [ ] `pnpm run test:visual` passes against committed baselines (exit 0)
- [ ] `pnpm run test:keyboard` passes (TS-008 + TS-009)
- [ ] `pnpm run test:a11y-regression` passes — script introduces fixture, verifies test-storybook fails with `button-name` rule in output, then cleans up; exit 0 (TS-010)
- [ ] `pnpm run check:baseline-count` passes (count ≤ 50)
- [ ] `.visual-baselines/` committed to git (total repo-on-disk size impact verified < 10 MB via `du -sh .visual-baselines/`)
- [ ] Full `pnpm run ci` exit 0 from a simulated fresh checkout (TS-007)
- [ ] Total CI wall time < 8 min on a modern laptop

**Verify:**

```
rm -rf node_modules storybook-static styles/tokens.css llms-full.txt
pnpm install && pnpm run ci
du -sh .visual-baselines/
```

## Open Questions

None — all design decisions resolved via PRD + Batch 1 + Batch 2. Implementation-time micro-decisions (icon library for Phase 2, Chromatic adoption if/when Playwright flakes heavily, exact Base UI per-component coverage when Phase 2 lands) are recorded as Deferred Ideas.

## Deferred Ideas

- **Icon library** — Lucide vs Phosphor. Not needed in Phase 1. Phase 2's IconButton and Nav force the decision.
- **Chromatic** — If Playwright screenshot diffs flake heavily during Phase 2 component additions, migrate to Chromatic (free tier).
- **Base UI per-component audit** — Phase 2 plan verifies `@base-ui-components/react` (or whatever the package is called at Phase 2 time) exports every primitive we need. For anything missing (Toast, Accordion, Combobox at the time of writing), fall back to Radix on a per-component basis OR author a thin primitive.
- **MCP server** — Once the catalog reaches ~20 components, consider shipping an MCP server exposing `registry.json` live.
- **`git remote add origin` + initial push** — User does manually after approving Phase 1's first green CI.
- **Container-query examples in patterns** — Tailwind v4 supports `@container` natively; worth demonstrating in a Phase 3 pattern.
- **Cross-OS visual baselines** — macOS-only in v1; Linux/CI baselines added in Phase 2 if a remote runs GitHub Actions.

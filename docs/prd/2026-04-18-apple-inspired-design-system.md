# Apple-Inspired AI-Consumable Design System (os-hcl-design)

Created: 2026-04-18
Author: yegamble@gmail.com
Category: UX
Status: Final
Research: Deep

## Problem Statement

When generating new website designs with AI tools like Claude Code, outputs drift toward generic, over-filled layouts with invented colors, inconsistent spacing, and accessibility gaps. The intangible discipline of Apple-caliber design — whitespace restraint, earned hierarchy, one-message-per-viewport, semantic color, motion-as-meaning — cannot be reliably reproduced from model weights alone. It must be codified as explicit, machine-readable constraints the AI reads every time.

This repo (`os-hcl-design`) is that codification: an opinionated, Apple-inspired design system delivered as a context package (tokens + specs + reference code) that any future website project can pull in as a git submodule, giving Claude — and any other AI coding tool — the canonical names, hard constraints, and composed patterns it needs to generate consistently disciplined designs. Primary consumer is the AI; secondary is the human developer copy-pasting reference code. Output is websites with Apple-caliber visual discipline, WCAG 2.1 AA accessibility, and uniform design language across every project that consumes the system.

## Core User Flows

### Flow 1: Claude Code generates a new website using this system

1. Developer starts a new website project in a separate repo.
2. Adds `os-hcl-design` as a git submodule at `.claude/context/os-hcl-design`.
3. Adds a pointer line to the project's `CLAUDE.md`: `@.claude/context/os-hcl-design/AGENTS.md`.
4. Developer prompts Claude: _"Build an Apple-style pricing page with 3 tiers"_.
5. Claude reads `AGENTS.md` (<2KB) → follows links to `foundations/principles.md`, `patterns/pricing/pricing.md`, and the component specs referenced by the pattern.
6. Claude generates the page referencing only semantic tokens (no raw hex), wrapping the system's Radix-based components, and honoring the pattern's composition rules (bento grid, sticky-nav-with-blur, 80px+ section padding, one accent, max 3 font weights).
7. Resulting page passes axe a11y checks and matches Apple-inspired visual discipline on first generation.

### Flow 2: Adding a new component to the system

1. A consumer project needs a component v1 doesn't cover (e.g., Combobox).
2. Owner opens `os-hcl-design`, runs a scaffold (copy the nearest component dir as template).
3. Implements `combobox.tsx` wrapping `@radix-ui/react-combobox`; writes `combobox.md` against the 11-section template; fills `combobox.spec.json` with props/variants; adds `combobox.stories.tsx`; defines `combobox.tokens.json` referencing only semantic tokens.
4. CI enforces: axe a11y pass, visual regression baseline captured, token-discipline lint, depth-check (all 5 sibling files present).
5. Merge to main; consumer projects run `git submodule update --remote` at their next cadence.

### Flow 3: Evolving the design language

1. Apple ships a refinement (e.g., Liquid-Glass opacity adjustment after user legibility feedback).
2. Owner updates `foundations/materials.md` and the affected semantic tokens.
3. Visual regression suite flags every component and pattern that renders differently.
4. Owner updates affected pieces in a single branch; CHANGELOG gets one entry.
5. Consumer projects choose when to pull the update via `git submodule update --remote`.

## Scope

### In Scope

**Foundations (7 Markdown specs in `foundations/`)**

- `principles.md` — Deference, Clarity, Depth, plus the hard-constraint set (max 3 type weights/page, one message per viewport, min 80px section padding, accent-color budget, restraint on decorative motion)
- `typography.md` — system-font stack (`-apple-system`, BlinkMacSystemFont, "SF Pro", Inter fallback), fluid type scale Large Title → Caption 2, hero-type conventions (tight tracking, line-height 1.05–1.1), weight discipline
- `color.md` — semantic token roles (label tiers, surface tiers, separator, fill, system colors), light/dark/high-contrast mappings, accent discipline (one per section)
- `spacing.md` — 4/8pt scale (2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128), layout margins, section rhythm, readable text measure (65–75ch)
- `motion.md` — durations (200–500ms UI, 400–1200ms hero), spring easing tokens, scroll-driven pattern conventions, `prefers-reduced-motion` contract
- `materials.md` — Liquid-Glass web approximation (`backdrop-filter` tiers), **mandatory solid-fallback tokens** for every glass surface, `prefers-reduced-transparency` activation
- `accessibility.md` — WCAG 2.1 AA baseline, focus-ring conventions, 44px hit targets, Dynamic Type equivalence (rem-based), color-independence rule, screen-reader semantics

**Tokens (W3C DTCG v1 JSON in `tokens/`)**

- `primitive.tokens.json` — raw values: full palette, spacing scale, radii (6/10/14/18/22/28/36), shadows, font sizes, durations, easings
- `semantic.tokens.json` — role-named aliases: `color.text.primary`, `color.surface.elevated`, `color.action.primary`, `space.gutter.page`, `motion.duration.ui`, `radius.card`
- `component.tokens.json` — component-scoped overrides referencing semantic tokens only
- Built via Style Dictionary v4 to CSS variables and a Tailwind preset

**15 core components (`components/<name>/`)** — each with `.tsx` (wraps Radix + Tailwind), `.md` (11-section template per `foundations/component-template.md`: Overview, Anatomy, Variants, States, Props, Usage Do/Don't, Code Examples, A11y, Tokens Used, Related, Changelog), `.spec.json` (machine-readable props/variants/slots), `.stories.tsx`, `.tokens.json`:

- Primitives: Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch
- Overlays: Dialog, Popover, Tooltip, Toast
- Disclosure/Navigation: Tabs, Accordion, Nav
- Display: Card, Badge

(16 listed for coverage — one may slip to v1.1 depending on a11y complexity; `Nav` especially.)

**3 canonical patterns (`patterns/<name>/`)** — each as `.md` spec + composed `.tsx` reference + `.spec.json`:

- `pricing/` — Apple-style tier cards, bento grid, feature comparison table, sticky buy-strip
- `hero-feature-grid/` — full-bleed hero with scroll-driven reveals, sticky-nav-with-blur, bento feature grid
- `auth-form/` — sign-in / sign-up with inline validation, accessible error handling, OAuth buttons

**AI-retrieval scaffolding (root)**

- `AGENTS.md` — <2KB, project rules, boundaries, links out (never embed content)
- `CLAUDE.md` — symlink or pointer to `AGENTS.md`
- `llms.txt` — curated retrieval index per llmstxt.org v1.1 spec
- `llms-full.txt` — generated full-dump for wide-context models (build script)
- `registry.json` — shadcn-compatible entry point, future-proofing only (no CLI wiring in v1)

**Quality gates (CI)**

- TypeScript strict mode
- ESLint + `@typescript-eslint` + `eslint-plugin-tailwindcss` — rules against raw hex, arbitrary Tailwind values (`p-[13px]`, `text-[#…]`, `h-[42px]`), untokenized radii, inline `style` props (except dynamic CSS vars), and `dark:` prefixes in component code
- `stylelint` with a custom plugin (reference: `stylelint-plugin-carbon-tokens`) enforcing components reference only semantic tokens, never primitives
- `prettier-plugin-tailwindcss` — Tailwind class ordering enforced; CI fails on unordered classes
- Depth-check script: every `components/<name>/` directory must contain `.tsx`, `.md`, `.spec.json`, `.stories.tsx`, `.tokens.json` (CI fails if any missing)
- Storybook with `@storybook/addon-a11y` (axe) — every story passes WCAG AA
- Visual regression via Chromatic (preferred) or Playwright screenshot diffs — variants run with `prefers-reduced-motion: reduce` and `prefers-reduced-transparency: reduce` toggled
- WCAG contrast validation per light/dark semantic token pair (4.5:1 body / 3:1 large text / 3:1 UI components)
- Tailwind CSS bundle size budget: every Storybook page builds <15KB gzip CSS (Apple-caliber restraint; v4 Oxide typical is <10KB)

**Distribution**

- Consumer projects pull via `git submodule add` into `.claude/context/os-hcl-design/`
- Updates via `git submodule update --remote`
- No npm publishing in v1 (path remains open via `registry.json` when scope justifies it)

### Explicitly Out of Scope

- **v0 / Cursor / Copilot / Figma MCP integrations** — Claude Code is the primary consumer; no v0 registry wiring, no Code Connect, no `.cursor/rules/*.mdc`. Why: adds surface area and constraints (e.g., v0 compatibility forbids customizing primitives) without current benefit.
- **Multi-brand / multi-theme shipping** — single Apple-inspired aesthetic. Token architecture is three-tier so future-themes are possible, but only one theme ships. Why: research showed multi-brand architecture pays off at site #3; we ship site #1 of the aesthetic.
- **Full shadcn catalog (~60 components)** — 15 core only in v1. Why: depth-consistency beats catalog breadth for AI retrieval; additional components added on-demand when a consumer project genuinely needs one.
- **Extended pattern library (10+ patterns)** — 3 canonical patterns. Why: same MVDS discipline — expand lazily.
- **Framework variants (Svelte, Vue, vanilla HTML, Web Components)** — React + Tailwind only. Why: React + Tailwind + Radix is where Claude's fluency is highest and where our planned consumer projects live.
- **Public docs site** (Next.js MDX deployed to a URL) — Storybook is the visual source of truth; per-component `.md` is the prose source of truth consumed by AI. Why: a polished public docs site is for human readers at scale; this system serves the AI first.
- **SF Pro and SF Symbols** — Apple licensing forbids general web use. Fallback: system-font stack + Inter/Geist + open-source icon set (Lucide or Phosphor — selected during implementation).
- **npm package publishing** — git submodule only in v1. Why: avoids SemVer/Changesets/publish overhead at solo scale; easy to add later if external consumers emerge.
- **Per-component SemVer / Changesets** — library-wide version only. Why: research consensus that library-wide wins at small scale.
- **MCP server** — deferred. Static `AGENTS.md` + `llms.txt` + `registry.json` is the cold-start baseline. Why: MCP requires a running process, adds infra, and the value lands later when there are more components to query.
- **Full test matrix** (unit/interaction/cross-browser) — a11y + visual regression + lint only. Why: this is a reference/context repo, not an npm library with many external consumers; unit-testing reference code meant to be copied is low-value.
- **Contribution / RFC process, governance council, migration guides** — solo ownership, issue tracker is the whole process. Why: research showed RFC/council/governance apparatus is dead weight below ~5 active consumer projects.

## Technical Context

- **Runtime:** Node 20+, pnpm (preferred for monorepo-lite hoisting)
- **Framework for reference code:** React 19, TypeScript 5.5+, **Tailwind CSS 4 — Tailwind-first across the whole system**
- **Component primitives:** Radix UI in v1. **Flag:** the Radix team has shifted focus to Base UI — evaluate Base UI as a drop-in alternative during implementation and document the choice. Either way, behavior/accessibility must not live in our code.
- **Tokens:** W3C DTCG Format Module 2025.10 (stable Oct 2025), `.tokens.json` extension, `$value` / `$type` / `{alias}` properties. Consumed by Style Dictionary v4 → generated `tokens.css` wired directly into Tailwind v4's CSS-first `@theme` block (see Tailwind-First Implementation below).
- **Icons:** open-source set selected during implementation; candidates are Lucide (leaner, SF-like weights) and Phosphor (larger catalog, multi-weight). Decision lives in `foundations/typography.md` or a new `foundations/icons.md`.
- **A11y:** `@storybook/addon-a11y` (axe-core) in Storybook CI.
- **Visual regression:** Chromatic if a paid plan exists; otherwise Playwright screenshot diffs checked into the repo under `.visual-baselines/`.
- **Lint stack:** `eslint`, `@typescript-eslint`, `stylelint`, `eslint-plugin-tailwindcss`. Custom rules ban raw hex in JSX, ban arbitrary Tailwind values in component code (`p-[13px]`, `text-[#0071E3]`), and enforce components reference semantic tokens only.
- **Repo state:** `/Users/yosefgamble/github/os-hcl-design` is empty (confirmed via Glob). Not yet a git repo. Greenfield — no migration concerns.
- **Consumer pattern:** git submodule in `.claude/context/os-hcl-design/`, referenced from the consumer project's `CLAUDE.md` via `@.claude/context/os-hcl-design/AGENTS.md`.

### Tailwind-First Implementation (DX & Optimization)

**The system is Tailwind-native, not Tailwind-adjacent.** Every component, pattern, and demo is authored in Tailwind v4 utilities driven by DTCG tokens. No raw CSS files for component styling; no CSS-in-JS; no styled-components. This decision maximizes Claude's generation fluency (Tailwind classes are the dominant training signal), keeps the CSS bundle tiny, and lets consumer projects compose with the same vocabulary the system is authored in.

**Best-practice patterns codified in v1:**

- **Tailwind v4 CSS-first config via `@theme`** — a single generated `styles/tokens.css` declares every design token as a CSS custom property inside Tailwind's `@theme` directive. Tokens automatically become utilities: `bg-action-primary`, `text-label-secondary`, `p-gutter-page`, `rounded-card`, `shadow-elevated`, `duration-ui`, `ease-spring-soft`. **No `tailwind.config.js` for design values** — config stays in CSS where designers and AIs can both read it.
- **Variant API: `tailwind-variants` (`tv()`)** — preferred over `class-variance-authority (cva)` for v1. Reasons: native Tailwind class-conflict resolution, slot support for multi-part components, responsive variants, composition via `extend`. `cva` remains acceptable for team-preference overrides documented in `foundations/`.
- **Class merging: `clsx` + `tailwind-merge`** — `twMerge(clsx(...))` is the canonical pattern when merging a user-provided `className` prop with component defaults; `tailwind-variants` wraps this automatically. Every component accepts `className` and merges safely.
- **Arbitrary-value ban in reference code** — `eslint-plugin-tailwindcss` rule `no-arbitrary-value` with a token-based allowlist. Components must not emit `p-[13px]`, `h-[42px]`, `text-[#...]`. Consumers of the system may use arbitrary values in their own code; the _system itself_ stays token-pure.
- **Class ordering: `prettier-plugin-tailwindcss`** (official) — formatted on save; CI fails on unordered classes.
- **Custom utilities for Apple signatures** — via Tailwind v4's `@utility` directive, declare composed utilities in `styles/utilities.css`: `@utility bento-grid { … }`, `@utility sticky-nav-blur { … }`, `@utility display-type { … }`, `@utility glass-regular { … }`, `@utility glass-fallback { … }`. These encode the hard-constraint patterns (section padding, bento column rules, blur tiers with solid fallbacks) as single-class applications.
- **Dark mode via `[data-theme="dark"]`** — tokens swap at the CSS-variable layer, not by `dark:` prefix on every utility. Component files read clean and single-mode; theming is invisible to component authors.
- **`@apply` used sparingly** — only for third-party overrides and rare base styles where a stable selector is necessary. Every other style lives in utilities at the call site.
- **`@source` directives** — explicitly declare content sources in the main stylesheet (`@source "../components/**/*.tsx"; @source "../patterns/**/*.tsx";`) for deterministic scanning. No glob maintenance.
- **Responsive defaults** — mobile-first. Container queries (Tailwind v4 native: `@container`, `@sm:`, `@md:`) preferred over viewport breakpoints where a component's layout should respond to its parent, not the viewport. Pattern: viewport breakpoints for page layout, container queries for component layout.
- **Motion utilities** — duration and easing tokens become `duration-ui`, `ease-spring-soft`. `motion-reduce:transition-none` on every animated utility. Spring easings declared in tokens as custom cubic-beziers; true-spring animations use Framer Motion where needed (not Tailwind).
- **Bundle optimization (v4 defaults)** — Tailwind v4's Oxide engine ships sub-10KB CSS typical. No manual purging; no PurgeCSS plugin. Storybook uses the same token/utility pipeline so visual regression matches production output exactly.

**Developer experience expectations:**

- VS Code + Tailwind CSS IntelliSense extension — class autocomplete, hover previews of computed values, color previews on every token.
- Prettier-on-save sorts classes deterministically.
- IntelliSense resolves every custom token to its semantic name (`bg-action-primary` shows the resolved color and primitive alias chain).
- AGENTS.md enumerates the token-to-utility mapping so Claude never invents a class name.

**Anti-patterns explicitly forbidden in the reference code (ESLint-enforced where possible):**

- Raw hex or named colors in JSX (`className="bg-[#0071E3]"`).
- Arbitrary spacing values (`className="p-[13px]"`).
- `style={{ ... }}` props except for genuinely dynamic values (CSS vars set via JS).
- Inline `@apply` chains in component CSS files — utilities belong in JSX.
- `dark:` prefixes in component code — dark mode resolves via CSS variable swap, not utility variants.

## Research Findings

Deep research was conducted across four angles. Full deliverables preserved in:

- `/tmp/prd-research-apple-hig.md` — Apple design philosophy, visual foundations, accessibility, Liquid-Glass evolution, signature patterns
- `/tmp/prd-research-design-systems.md` — Component vocabulary, token hierarchies, documentation templates, repo structure patterns, shadcn/Radix breakdown
- `/tmp/prd-research-ai-consumable.md` — llms.txt, AGENTS.md, DTCG spec, MCP for design systems, authoring patterns, retrieval strategy, failure modes
- `/tmp/prd-research-governance.md` — Atomic Design critique, governance models, versioning, multi-brand theming, contribution models, solo-scale adaptations

**Key insights driving this PRD:**

1. **Apple's three principles (Deference, Clarity, Depth) are stable;** the 2025 Liquid Glass material added depth tooling but didn't replace the principles.
2. **The intangibles ARE the design — and they must be encoded as hard constraints,** not soft guidance. AI generation drifts toward over-filled layouts without token limits and lint rules.
3. **shadcn's win is code ownership + AI-readability** (flat files, readable TSX, Tailwind). This is the replicable model.
4. **Three-tier tokens (primitive → semantic → component) is settled;** the semantic layer is where teams fail. Lint-enforce component files to reference only semantic tokens.
5. **W3C DTCG v1 hit stable October 28, 2025** — adopt as source-of-truth format.
6. **`AGENTS.md` should be <2KB** — ETH Zurich study showed verbose agent files _reduce_ task success.
7. **Depth consistency beats catalog breadth** for AI retrieval — predictable structure is load-bearing.
8. **Brad Frost's "Global Design System" argument applies:** don't hand-build button/dialog/toast — wrap Radix/Base UI. Solo time goes to tokens, composition, voice, motion.
9. **Storybook MCP self-healing (a11y + interaction tests) is the highest-leverage single quality lever** for AI-generated UIs — plan for it even before wiring an MCP server.
10. **Liquid Glass legibility:** even Apple shipped a too-transparent beta and walked it back. Every glass surface needs a solid-fallback token and must honor `prefers-reduced-transparency` from day one.
11. **SF Pro / SF Symbols are licensed for Apple platforms only** — general web use requires fallbacks.
12. **At solo scale,** skip RFCs, councils, per-component SemVer, Code Connect — but do not skip ownership. Single universal failure mode: "no one owns this."

## Key Decisions

| Decision              | Choice                                                                               | Why                                                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repo shape            | Hybrid — specs + tokens + reference code                                             | Gives AI concrete code to imitate _and_ canonical specs to retrieve; avoids pure-spec drift and full-library maintenance                                                                                                                                 |
| Primary AI consumer   | Claude Code                                                                          | Removes v0/Figma/Cursor-specific constraints; simplifies scaffolding                                                                                                                                                                                     |
| Framework             | React 19 + **Tailwind v4 (Tailwind-first)** + shadcn/Radix                           | Highest AI fluency; Tailwind-native authoring from day one — CSS-first `@theme` config, DTCG tokens flow directly into utilities, `tailwind-variants` for variant APIs, `tw-merge` for safe className composition, arbitrary-value ban in reference code |
| Tailwind config style | CSS-first `@theme` in `styles/tokens.css`; no `tailwind.config.js` for design values | Tailwind v4's recommended pattern; keeps config colocated with tokens, readable by both humans and AIs, removes a JS build dependency for designers                                                                                                      |
| Variant API           | `tailwind-variants` (`tv()`)                                                         | Native class-conflict resolution, slot support, responsive variants, composable — fits Apple's pattern-rich component design; `cva` acceptable but secondary                                                                                             |
| v1 scope              | Foundations + 15 core components + 3 patterns                                        | MVDS discipline; depth consistency beats catalog breadth                                                                                                                                                                                                 |
| Brand strategy        | Single Apple-inspired aesthetic                                                      | Tight discipline; three-tier tokens leave door open for multi-brand later                                                                                                                                                                                |
| Distribution          | Git submodule into `.claude/context/`                                                | Matches "repo is the AI context" model; no publishing overhead; no versioning complexity at v1                                                                                                                                                           |
| Testing tier          | A11y + visual regression + lint                                                      | Highest ROI for reference repo; skips low-value unit tests on code meant to be copied                                                                                                                                                                    |
| Repo architecture     | Approach A — flat docs-first                                                         | Ships fastest at solo scale; upgradeable to monorepo-B later if scope outgrows it                                                                                                                                                                        |
| Token format          | W3C DTCG v1 JSON (2025.10)                                                           | Stable since Oct 2025; tool ecosystem converges here                                                                                                                                                                                                     |
| Primitive foundation  | Radix UI (with Base UI evaluation during implementation)                             | Accessibility and behavior outsourced to proven layer                                                                                                                                                                                                    |
| Versioning            | Library-wide SemVer, Conventional Commits, no Changesets in v1                       | Solo-scale appropriate                                                                                                                                                                                                                                   |
| Agent context file    | `AGENTS.md` <2KB + `llms.txt` + `llms-full.txt` + `registry.json`                    | Covers cold-start retrieval across tool ecosystems; avoids bloat                                                                                                                                                                                         |
| Category              | UX                                                                                   | Primary artifact is a design language / UX specification                                                                                                                                                                                                 |

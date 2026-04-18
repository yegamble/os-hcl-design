# os-hcl-design

> Apple-inspired design system for AI-consumable website generation.

## What this is

`os-hcl-design` is an opinionated design system — foundations, tokens, components, and patterns — codified as **machine-readable context** for Claude Code and other AI coding tools. When you're generating a new website, AIs reading this repo produce designs with the visual discipline, accessibility, and coherence of Apple's own product surfaces: restrained color, whitespace-rich typography, materials with solid fallbacks, reduced-motion honored, WCAG 2.1 AA by default.

Primary consumer: AI coding agents. Secondary consumer: human developers who copy-paste reference components into their projects.

## How to use

From any website project that wants to consume this system:

```bash
git submodule add https://github.com/yegamble/os-hcl-design.git .claude/context/os-hcl-design
```

Then add this line to the consumer project's `CLAUDE.md` (or equivalent agent-context file):

```
@.claude/context/os-hcl-design/AGENTS.md
```

Claude (and other AI agents that respect `AGENTS.md`) will now have the full design system as retrievable context when generating pages, components, or styles.

To pull updates later:

```bash
git submodule update --remote .claude/context/os-hcl-design
```

## Status

**Phase 1 — Foundation.** See:

- [Product Requirements](docs/prd/2026-04-18-apple-inspired-design-system.md)
- [Implementation Plan](docs/plans/2026-04-18-apple-inspired-design-system.md)

Phase 1 ships the toolchain, DTCG v1 tokens, the 7 design foundations, AI-retrieval scaffolding (`AGENTS.md`, `llms.txt`), CI quality gates, and two reference components (Button, Card) plus one reference pattern (`hero-feature-grid`). Subsequent phases expand the component catalog and pattern library against the templates proven here.

## Contents

- [`foundations/`](foundations/) — principles, typography, color, spacing, motion, materials, accessibility. The design language.
- [`tokens/`](tokens/) — DTCG v1 JSON: primitive, semantic, component layers.
- [`components/`](components/) — React + Tailwind components. Each directory co-locates `.tsx`, `.md`, `.spec.json`, `.stories.tsx`, `.tokens.json`.
- [`patterns/`](patterns/) — composed multi-component flows (hero + bento; pricing and auth ship in later phases).
- [`AGENTS.md`](AGENTS.md) — first-read file for AI consumers. Links outward; stays under 2 KB.
- [`llms.txt`](llms.txt) — curated retrieval index per [llmstxt.org](https://llmstxt.org).

## Local development

```bash
pnpm install
pnpm run dev       # Storybook on http://localhost:6006  (lands in Phase 1 Task 6)
pnpm run ci        # Full quality-gate pipeline
```

Storybook is the visual source of truth. Foundations and component `.md` files are the prose source of truth.

## Contributing

Solo maintainer ([@yegamble](https://github.com/yegamble)). Issues welcome; PRs by prior coordination. The system is small enough that heavy contribution ceremony would outweigh its value — but if a pattern you need is missing, open an issue and we'll discuss.

## License

[MIT](LICENSE) © 2026 Yosef Gamble

# os-hcl-design — Agent Context

Apple-inspired design system for AI-consumable website generation. Start with `foundations/principles.md` — it lists hard constraints (max 3 type weights, one message per viewport, ≥80 px section padding, one accent per section). Index: `llms.txt`.

## Rules

- Consume semantic tokens only (`bg-action-primary`, `text-text-primary`). Never raw hex. Never arbitrary values (`p-[13px]`).
- No Tailwind `dark:` prefixes — dark mode swaps at the CSS variable layer via `[data-theme="dark"]`.
- Every glass/material surface has a solid fallback; `prefers-reduced-transparency: reduce` is honored. See `foundations/materials.md`.
- WCAG 2.1 AA: 44 px hit targets, `focus-visible` ring, keyboard activation, token-contrast enforced. See `foundations/accessibility.md`.
- Every animated utility honors `prefers-reduced-motion`. See `foundations/motion.md`.
- Component `.md` files follow the 11-section template in `foundations/component-template.md`.

## Links

- `foundations/principles.md`, `typography.md`, `color.md`, `spacing.md`, `motion.md`, `materials.md`, `accessibility.md`, `component-template.md`
- `tokens/primitive.tokens.json`, `semantic.tokens.json`, `component.tokens.json`
- `components/button/`, `components/card/`
- `patterns/hero-feature-grid/`

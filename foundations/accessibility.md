---
title: Accessibility
category: foundation
status: stable
tokensReferenced:
  - color.action.primary
  - color.text.primary
  - color.text.secondary
---

# Accessibility

## Overview

Every component in the system meets **WCAG 2.1 AA** at minimum. This is the floor, not the ceiling. The Storybook a11y addon (axe-core) runs on every story in CI and blocks merges on any violation. The `check-token-contrast.mjs` script separately enumerates every text-on-surface semantic pair across all three modes and fails CI on <4.5 : 1 (body) or <3 : 1 (large / UI).

Accessibility is a design constraint, not a later pass. The Apple HIG has the same posture — Dynamic Type, Reduce Motion, Reduce Transparency, VoiceOver are first-class, not afterthoughts.

## Rules

### Contrast

| Target                              | Ratio   |
| ----------------------------------- | ------- |
| Body text (≤ 17 px) on background   | 4.5 : 1 |
| Large text (≥ 20 px) on background  | 3 : 1   |
| UI component boundaries, focus ring | 3 : 1   |

Enforced by `scripts/check-token-contrast.mjs` on every commit via `pnpm run ci`.

### Focus state

- Every interactive element has a visible `:focus-visible` ring.
- Default ring: `2px solid var(--color-action-primary)` with `2px offset`.
- Never `outline: none` without a replacement.
- The `:focus:not(:focus-visible)` selector in `styles/reset.css` suppresses the ring for mouse users without suppressing it for keyboard users.

### Keyboard navigation

| Interaction       | Keys                        | Expectation                                        |
| ----------------- | --------------------------- | -------------------------------------------------- |
| Button activation | Enter or Space              | Triggers click                                     |
| Focus traversal   | Tab / Shift+Tab             | Reaches every interactive element, in source order |
| Dialog / popover  | Esc                         | Closes                                             |
| Menu navigation   | Arrow keys                  | Moves within menu                                  |
| Submit form       | Enter (while in text input) | Submits                                            |
| Cancel            | Esc (in modal/popover)      | Cancels or closes                                  |

The Button component (Task 9) has `tests/keyboard/button.spec.ts` (Task 12) as its machine-verified contract.

### Hit targets

Minimum **44 × 44 px** touch target for any interactive element (iOS HIG; WCAG 2.5.5 AAA). All Button sizes, including `sm`, enforce `min-h-11` (44 px). Verified by Playwright `boundingBox().height >= 44` in TS-009.

### Screen readers

- Semantic HTML first. `<button>`, `<nav>`, `<main>`, `<section>`, `<dialog>`, `<aside>` over generic `<div>` with roles.
- Use ARIA only when semantics are insufficient.
- Every interactive element has an accessible name: visible text, `aria-label`, or `aria-labelledby`.
- Icon-only buttons MUST have `aria-label`.
- `aria-live="polite"` for toasts and notifications.
- `aria-current="page"` on the active nav item.

### Reduced-motion

Every animated utility honors `prefers-reduced-motion: reduce` globally via `styles/reset.css`. Per-element additional guards where needed via `motion-reduce:` Tailwind variant. Non-negotiable.

### Reduced-transparency

Every glass utility honors `prefers-reduced-transparency: reduce` via both media query and `[data-reduced-transparency="reduce"]` attribute. See [`materials.md`](./materials.md).

### Increase-contrast

Users who prefer higher contrast set `[data-contrast="more"]` (or via the `prefers-contrast: more` media query). Tokens in `semantic.tokens.json` ship a `high-contrast` mode that emits to `[data-contrast="more"]` — contrast ratios target WCAG AAA in that mode.

### Dynamic Type equivalence

Web doesn't have iOS Dynamic Type natively, but:

- Body text sized in `rem` (root `font-size` 16 px), not raw `px`. The browser's font-size preference then scales everything.
- Never hard-size body in `px`.
- Avoid `font-size: 12px` — that's below iOS minimum.

### Color independence

Never use color alone to convey state. Always pair with an icon, text label, or shape change. See [`color.md`](./color.md) for the rule; enforced by review.

### Captions and transcripts

Any video or audio must ship with captions / transcripts. Not part of Phase 1 component deliverables but part of the foundation posture.

## Tokens

Used by a11y enforcement:

- `color.action.primary` — focus ring color
- `color.text.primary`, `color.text.secondary`, etc. — contrast-pair sources
- `color.surface.*` — contrast-pair surfaces

## Do / Don't

| ✅ Do                                                                                | ❌ Don't                               |
| ------------------------------------------------------------------------------------ | -------------------------------------- |
| `focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2` | `outline: none` without replacement    |
| `<button aria-label="Close">×</button>` for icon-only                                | `<button>×</button>` with no name      |
| `min-h-11` on every button size                                                      | Shrink button below 44 px at `sm` size |
| `motion-reduce:transition-opacity` on every animated hover                           | Ignore reduced-motion                  |
| Run `pnpm run test:storybook` (axe) before pushing                                   | Assume a11y "probably fine"            |
| Use semantic HTML first                                                              | `<div role="button" onClick>`          |
| Status uses color + icon + text                                                      | Color alone (red text meaning "error") |

## Related

- [`principles.md`](./principles.md) — hard constraints (hit target, contrast)
- [`color.md`](./color.md) — WCAG contrast ratios per semantic pair
- [`motion.md`](./motion.md) — `prefers-reduced-motion` contract
- [`materials.md`](./materials.md) — `prefers-reduced-transparency` contract
- [`component-template.md`](./component-template.md) — every component's A11y section

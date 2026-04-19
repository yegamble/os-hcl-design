---
title: Spacing
category: foundation
status: stable
tokensReferenced:
  - space.gutter.page
  - space.gutter.section
  - space.gutter.card
---

# Spacing

## Overview

Apple's HIG standardizes on a 4 / 8 pt grid. The system ships a 15-step scale (0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 px). Components and patterns consume **semantic** spacing tokens (`space.gutter.page`, `space.gutter.section`, `space.gutter.card`) rather than primitives in most cases, with the underlying primitive still available for edge cases.

Section padding is deliberately generous — clamp(5 rem, 10 vw, 10 rem) minimum on hero+feature sections. Whitespace is a feature, not leftover space.

## Rules

### Primitive scale (px)

| Token       | Value | Use                                  |
| ----------- | ----- | ------------------------------------ |
| `space.0`   | 0     | Reset                                |
| `space.2`   | 2     | Hairline adjustments                 |
| `space.4`   | 4     | Icon-to-label gap                    |
| `space.8`   | 8     | Tight inline gap                     |
| `space.12`  | 12    | Button internal padding (vertical)   |
| `space.16`  | 16    | Small gap, button horizontal padding |
| `space.20`  | 20    | Card internal padding (default)      |
| `space.24`  | 24    | Section gap, page gutter             |
| `space.32`  | 32    | Large internal padding               |
| `space.40`  | 40    | Hero internal spacing                |
| `space.48`  | 48    | Section inner rhythm                 |
| `space.64`  | 64    | Section-to-section medium            |
| `space.80`  | 80    | Section-to-section standard (mobile) |
| `space.96`  | 96    | Hero breathing room                  |
| `space.128` | 128   | Section-to-section large (desktop)   |

### Semantic gutters

Prefer these in components and patterns:

| Token                  | Resolves to | Use                                                                                |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `space.gutter.page`    | 24          | Outer page side gutters at mobile breakpoints (fluid up from there)                |
| `space.gutter.section` | 80          | Vertical gap between sections (pair with `section-rhythm` utility for fluid clamp) |
| `space.gutter.card`    | 20          | Card internal padding; bento-grid gap                                              |

### Section rhythm utility

`section-rhythm` is a custom utility that applies `padding-block: clamp(5rem, 10vw, 10rem)` — 80 px minimum on mobile, 160 px on desktop. Use it on every page-level `<section>`.

### Layout margins

- Mobile (≤ 640 px): 24 px side margin
- Tablet (641–1024): 40 px
- Desktop (1025+): fluid — either a centered container (max-width 1280) with `px-gutter-page`, or percentage-based outer margins
- Hero sections may bleed full-width (no side margin) with content constrained to `max-width: 65ch` inside

### Readable text measure

Body prose: `max-width: 65ch` (about 65 characters). Center within the section if the section is wider. Never let body text exceed 80ch.

### Bento grid gaps

Use the `bento-grid` utility — `display: grid; gap: var(--space-gutter-card); grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr))`. For different gap sizes, consume the primitive directly (`gap-8`, `gap-16`).

### 4 / 8 pt discipline

All spacing should be a multiple of 4. The scale is designed to force this. Never use arbitrary values (`p-[13px]`, `gap-[25px]`) in component code — ESLint `no-arbitrary-value` rejects these.

## Tokens

[`tokens/primitive.tokens.json`](../tokens/primitive.tokens.json) → `space.*`. [`tokens/semantic.tokens.json`](../tokens/semantic.tokens.json) → `space.gutter.*`.

## Do / Don't

| ✅ Do                                                                                       | ❌ Don't                                   |
| ------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `className="py-section-rhythm"` on page sections (or the `section-rhythm` utility directly) | `className="py-[120px]"` arbitrary         |
| `className="p-20"` for card internals (resolves to `space.20`)                              | `className="p-[22px]"` arbitrary           |
| Use `gap-gutter-card` on bento grids                                                        | Hand-pick different gaps per grid          |
| Let sections breathe — 80+ px vertical                                                      | Pack three sections into a single viewport |
| 65ch max on body prose                                                                      | 1200 px wide body text                     |

## Related

- [`principles.md`](./principles.md) — whitespace discipline as a rule
- [`typography.md`](./typography.md) — line-height complements vertical rhythm
- [`materials.md`](./materials.md) — bento grids and sticky nav spacing

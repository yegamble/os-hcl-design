---
title: Principles
category: foundation
status: stable
tokensReferenced: []
---

# Principles

## Overview

Three canonical principles, anchored by Apple's Human Interface Guidelines since iOS 7 and reaffirmed in the 2025 Liquid Glass update: **Deference**, **Clarity**, **Depth**. Everything else in this system — typography, color, spacing, motion, materials — exists to serve one of the three.

The intangible qualities that make Apple look "Apple" — whitespace discipline, one message per viewport, weight restraint, earned hierarchy, content-first — must be enforced, not suggested. AI-generated designs drift toward over-filled layouts without hard constraints. Hence the constraint tables below are not guidelines; they are rules that CI and lint enforce.

## Rules

### Core principles

- **Deference** — The UI defers to content. Chrome recedes; content is the star. Translucency, blur, and restrained color exist so the user's photo, article, or product stays the focal point.
- **Clarity** — Text is legible at every size, icons are precise, decoration is purposeful. Negative space, typographic hierarchy, and sharp iconography give every element one unambiguous role.
- **Depth** — Distinct visual layers and realistic motion convey hierarchy and vitality. Depth is how the user orients (what's in front, what's behind, what's a surface vs. control).

### Supporting principles

- **Consistency** — Familiar patterns lower cognitive load. A Button is a Button everywhere.
- **Feedback** — Every interaction produces immediate, proportional response (state change, motion, haptic, sound when available).
- **Direct manipulation** — The user feels they are touching the content, not operating a panel around it.
- **User control** — The user initiates and can cancel; the system confirms destructive actions and never surprises.
- **Restrained metaphor** — Post-skeuomorphism: materials and physics, not literal imitations.
- **Aesthetic integrity** — Appearance matches task. Serious apps look serious; playful apps look playful.

### Hard constraints (CI-enforced where possible)

| Constraint                | Rule                                                   | Enforcement                                       |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Type weight count         | Max 3 weights per page                                 | Convention; review in Storybook                   |
| Focal points              | One message per viewport/section                       | Convention                                        |
| Section padding           | Min 80 px on mobile, 160 px desktop                    | `section-rhythm` utility                          |
| Accent color              | Max 1 per section                                      | Convention                                        |
| Raw hex in JSX            | Never                                                  | ESLint `no-raw-hex-in-className`                  |
| Arbitrary Tailwind values | Never in component code (`p-[13px]` forbidden)         | ESLint `tailwindcss/no-arbitrary-value`           |
| `dark:` prefixes          | Never in component code (dark mode via `[data-theme]`) | ESLint rule (Task 7)                              |
| Inline `style={{}}`       | Only for dynamic CSS-var values                        | Convention + lint warn                            |
| Hit target                | Min 44 × 44 px touch                                   | Per-component `min-h-11` + Playwright TS-009      |
| WCAG contrast             | 4.5 : 1 body, 3 : 1 large/UI                           | `scripts/check-token-contrast.mjs`                |
| Reduced motion            | Every animated utility honors `prefers-reduced-motion` | `styles/reset.css` + per-utility `motion-reduce:` |
| Reduced transparency      | Every glass surface has a solid fallback token         | `@media (prefers-reduced-transparency: reduce)`   |

### The intangibles (authorial discipline)

These are harder to encode in CI but no less binding:

- **Whitespace discipline.** Leave 200 px of empty space rather than fill it. Copycats add things back; Apple doesn't.
- **Restraint on color.** A whole product page often uses black, white, one neutral, and one accent borrowed from the hero imagery. No decorative color.
- **One focal point per section.** Never ask the visitor to choose between two pitches in the same screen.
- **Precise hierarchy.** Every element has exactly one role. Nothing is "kind of important." Something is the biggest thing on screen and everything else supports it.
- **Earned weight.** Bold type is rare enough that when it appears, it means something.
- **Confidence.** Short headlines, big claims, no hedging copy. "The best iPhone we've ever made." not "Our new iPhone has many improvements."
- **Motion with intent.** Every transition either reveals cause, gives feedback, or tells a story. Decoration-only motion is rare.
- **Pixel-exact optical alignment.** Optical centering (not mathematical) on icons and buttons. Baselines aligned across columns. This is what makes Apple feel "tight."

## Tokens

Principles don't consume tokens directly — they govern which tokens are chosen in practice. See [`color.md`](./color.md), [`typography.md`](./typography.md), [`spacing.md`](./spacing.md), [`motion.md`](./motion.md), [`materials.md`](./materials.md) for the concrete token sets principles guide.

## Do / Don't

| ✅ Do                                                                | ❌ Don't                                                                  |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| One hero headline per viewport, one CTA below it                     | Stack three CTAs side-by-side "so the user has options"                   |
| Use the system's `glass-regular` utility with its automatic fallback | Hand-roll `backdrop-filter` in component CSS without a fallback           |
| Reach for whitespace first when a layout feels crowded               | Shrink type or tighten padding to fit more content                        |
| Bold the one headline that's most important                          | Bold every heading uniformly "for emphasis"                               |
| Use semantic tokens (`bg-action-primary`)                            | Use raw hex or arbitrary Tailwind values                                  |
| One accent color per page or section                                 | Use brand-color bingo (primary, secondary, tertiary) in the same viewport |

## Related

- [`typography.md`](./typography.md) — the weight-restraint rule in practice
- [`color.md`](./color.md) — accent discipline and the semantic token roles
- [`spacing.md`](./spacing.md) — the 4/8 pt scale and section-rhythm utility
- [`motion.md`](./motion.md) — motion-with-intent and reduced-motion contract
- [`materials.md`](./materials.md) — Liquid Glass tiers and mandatory fallbacks
- [`accessibility.md`](./accessibility.md) — WCAG AA, focus rings, keyboard activation
- [`component-template.md`](./component-template.md) — the 11-section shape every component `.md` file follows

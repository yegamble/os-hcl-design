---
name: Hero Feature Grid
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.text.primary
  - color.text.secondary
  - color.border.subtle
  - material.regular.backdropFilter
  - material.regular.fallbackColor
  - space.gutter.section
  - space.gutter.card
dependsOn:
  - Button
  - Card
a11y:
  role: region
  keyboard: [Tab]
  focus: inherits from Button children
  minHitTarget: 44px (inherited)
---

# Hero Feature Grid

## Overview

The canonical Apple-style landing-page pattern: sticky glass nav at the top, a display-type hero with a primary and secondary CTA, and a bento grid of Card items below. Composes Button and Card — introduces no new primitives. Use as the top-of-fold for product marketing pages, feature announcements, or landing sections that need one clear message.

## Anatomy

- **nav** — `sticky-nav-blur` + `glass-regular`; brand mark on the left; ghost "Sign in" + primary "Get started" buttons on the right
- **hero** — centered container, display-type headline (`hero-lg` size), `title3` subtitle, two CTAs (primary + ghost)
- **bento grid** — `bento-grid` utility (auto-fit responsive columns) populated with elevated Cards

## Variants

- **Default** — the composition described above
- (Additional variants — asymmetric grid, scroll-reveal — deferred to Phase 2 patterns)

## States

- nav: when `prefers-reduced-transparency: reduce`, glass background swaps to `surface.opaque` solid via `glass-regular` media query — verified at the pattern level in Phase 1 visual regression
- buttons: inherit from [`components/button/button.md`](../../components/button/button.md)

## Props

| name       | type                                | required | description                                          |
| ---------- | ----------------------------------- | -------- | ---------------------------------------------------- |
| `title`    | `string`                            | yes      | The one hero headline. Keep short and confident.     |
| `subtitle` | `string`                            | yes      | One-sentence amplification of the headline.          |
| `cta`      | `string`                            | yes      | Primary CTA label. One per viewport — no stacking.   |
| `features` | `{ title: string; body: string }[]` | yes      | Feature cards for the bento grid. 3–6 items typical. |

## Usage

| ✅ Do                                                    | ❌ Don't                                        |
| -------------------------------------------------------- | ----------------------------------------------- |
| One hero headline; one primary CTA                       | Two primary CTAs side-by-side                   |
| 3–6 feature cards in the grid                            | 12 feature cards in the grid ("fill the space") |
| Let the glass nav's solid fallback trigger automatically | Hand-roll `backdrop-filter: none` on the nav    |
| Keep feature titles to 3–6 words                         | Pile a paragraph into each card title           |

## Code Examples

```tsx
<HeroFeatureGrid
  title="The best way to ship."
  subtitle="A design system that reads itself for AI agents and humans alike."
  cta="Get started"
  features={[
    { title: 'Tokens that travel', body: 'DTCG v1 JSON → CSS variables in one command.' },
    { title: 'Accessible by default', body: 'WCAG AA contrast enforced at the token layer.' },
    { title: 'Apple-inspired discipline', body: 'Whitespace, hierarchy, motion with intent.' },
  ]}
/>
```

## Accessibility

- `<nav aria-label="Primary">` with sticky glass — glass fallback honored automatically via `glass-regular` utility
- Hero is wrapped in `<section>` for a landmark; headline is the page's single `<h1>`
- Feature cards use `<h3>` (skipping to `<h2>` is optional; the subtitle could be `<h2>` if tighter hierarchy is desired)
- Every button inherits Button's 44 px hit target and focus-visible ring
- Reduced-motion: no pattern-specific animations beyond Button hover transitions (already honor `motion-reduce:` via component)

## Tokens Used

See `tokensUsed` in front-matter.

## Related

- `components/button/` — CTAs in the hero and nav
- `components/card/` — the elevated feature cards in the bento grid
- `foundations/materials.md` — `glass-regular` utility
- `foundations/spacing.md` — `section-rhythm` utility + `bento-grid` gap

## Changelog

- **0.1.0** — Initial (Phase 1). Fixed composition: nav + hero + bento grid.

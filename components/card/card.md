---
name: Card
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.border.subtle
  - color.border.default
  - radius.card
  - radius.sheet
  - shadow.card
dependsOn: []
a11y:
  role: group
  keyboard: []
  focus: none (inert unless Card contains focusable children)
  minHitTarget: n/a
---

# Card

## Overview

Presentational / layout primitive. Groups related content as a single visual unit with semantic surface + border + radius + shadow tokens. Four variants (default / elevated / outlined / glass) cover most compositions. Compound structure — `Card`, `Card.Header`, `Card.Body`, `Card.Footer` — lets authors opt into the slots they need.

## Anatomy

- **root** — the bordered, shadowed container
- **Header** (optional) — top section with a bottom border; semibold
- **Body** — main content; secondary text color
- **Footer** (optional) — bottom section with a top border; tertiary text color

## Variants

- **default** — subtle border + small shadow on `surface.raised`. The everyday card.
- **elevated** — no border, larger shadow, `surface.elevated` background. Use when the card is the focal element of a section.
- **outlined** — stronger border, no shadow. Use for grouping in data-dense layouts where shadows would be noisy.
- **glass** — applies the `glass-regular` utility (translucent with solid fallback under `prefers-reduced-transparency`). Use on top of imagery or scroll-composed backgrounds. See [`foundations/materials.md`](../../foundations/materials.md).

## States

Cards have no intrinsic interactive states. When a Card is made interactive (e.g., link wrapping, onClick handler), the containing interactive element supplies focus + hover + active styling — Card stays neutral.

## Props

| name        | type                                               | required | default     | description                                                        |
| ----------- | -------------------------------------------------- | -------- | ----------- | ------------------------------------------------------------------ |
| `variant`   | `'default' \| 'elevated' \| 'outlined' \| 'glass'` | no       | `'default'` | Visual intent.                                                     |
| `padding`   | `'sm' \| 'md' \| 'lg'`                             | no       | `'md'`      | Internal padding (applied to slots via `--card-px` / `--card-py`). |
| `radius`    | `'md' \| 'lg'`                                     | no       | `'md'`      | Corner radius. Maps to `radius.card` or `radius.sheet`.            |
| `className` | `string`                                           | no       | —           | Merged via `tailwind-merge`.                                       |
| …rest       | `React.HTMLAttributes<HTMLDivElement>`             | no       | —           | Forwarded to the root `<div>`.                                     |

## Usage

| ✅ Do                                               | ❌ Don't                                                      |
| --------------------------------------------------- | ------------------------------------------------------------- |
| Use `default` for most listings                     | Stack `elevated` cards — defeats the "elevated = focal" role  |
| Use `glass` on imagery / scrolling composition      | Use `glass` where legibility of overlaid text is marginal     |
| Use `outlined` in dense data views                  | Add custom box-shadow that competes with the variant's shadow |
| Compose `Card.Header` / `Body` / `Footer` as needed | Nest a Card inside a Card                                     |
| Let the Card stay inert; wrap in `<a>` if clickable | Add `onClick` to the Card without keyboard / focus handling   |

## Code Examples

```tsx
// Basic card with body only
<Card>
  <Card.Body>
    <p>Short status summary.</p>
  </Card.Body>
</Card>

// Full compound with header + body + footer
<Card>
  <Card.Header>Plan usage</Card.Header>
  <Card.Body>
    <p>You have used 42% of your included build minutes.</p>
  </Card.Body>
  <Card.Footer>Resets on the 1st of each month.</Card.Footer>
</Card>

// Elevated featured card
<Card variant="elevated" padding="lg">
  <Card.Body>
    <h3 className="text-title1 font-semibold">Pro</h3>
    <p className="text-text-secondary">$20 / month</p>
    <Button className="mt-4">Upgrade</Button>
  </Card.Body>
</Card>

// Glass card on top of hero imagery (automatic solid fallback)
<Card variant="glass">
  <Card.Body>
    <p>Floating meta panel on a product hero.</p>
  </Card.Body>
</Card>

// Outlined card in a data-dense list
<div className="grid gap-3">
  <Card variant="outlined"><Card.Body>Item A</Card.Body></Card>
  <Card variant="outlined"><Card.Body>Item B</Card.Body></Card>
</div>
```

## Accessibility

- Card is a `<div>` by default. It has no implicit semantics. When the content of the card is a discrete region (e.g., a dashboard tile), wrap in a landmark (`<section>` with accessible name) or use `role="group"` on the Card itself.
- The `glass` variant honors `prefers-reduced-transparency` automatically via the `glass-regular` utility's solid fallback — no per-Card code needed.
- Card does not manage focus. If Card contains interactive children, they manage their own focus rings.
- Contrast: `surface.raised` with `text.primary` passes WCAG AA in all three modes (verified by `check:token-contrast`).

## Tokens Used

See the `tokensUsed` front-matter.

## Related

- `components/button/` — the common "primary action inside a card" pair
- `patterns/hero-feature-grid/` — uses Card in the bento grid
- `foundations/materials.md` — `glass-regular` utility and the reduced-transparency contract
- `foundations/spacing.md` — `--card-px` / `--card-py` tokens and padding scale

## Changelog

- **0.1.0** — Initial (Phase 1). Four variants, three padding steps, three radius steps, compound Header/Body/Footer sub-components.

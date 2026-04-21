---
name: Heading
category: typography
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - type.size.hero-lg
  - type.size.hero-md
  - type.size.hero-sm
  - type.size.large-title
  - type.size.title1
  - type.size.title2
  - type.size.title3
  - type.size.headline
  - type.weight.heading
dependsOn: []
a11y:
  role: heading
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Heading

## Overview

Typographic heading. Semantic level (`level={1..6}`) and visual size (`size`) are separate — you should pick the level that matches the document outline and the size that matches the visual hierarchy. Defaults to `semibold` weight with tight tracking (Apple-display convention).

## Anatomy

Single heading element (h1..h6) rendered dynamically by `createElement`.

## Variants

- `level`: `1 / 2 / 3 / 4 / 5 / 6` — drives the tag
- `size`: `hero-lg / hero-md / hero-sm / large-title / title1 / title2 / title3 / headline` — drives font-size via token utilities

## States

None.

## Props

| name    | type                                                                                                     | required | default  | description                  |
| ------- | -------------------------------------------------------------------------------------------------------- | -------- | -------- | ---------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                                                             | yes      | —        | Semantic heading level.      |
| `size`  | `'hero-lg' \| 'hero-md' \| 'hero-sm' \| 'large-title' \| 'title1' \| 'title2' \| 'title3' \| 'headline'` | no       | `title2` | Visual size via type tokens. |

## Usage

| ✅ Do                                              | ❌ Don't                                      |
| -------------------------------------------------- | --------------------------------------------- |
| Keep `level` tied to outline order (h1 → h2 → h3…) | Skip levels for visual reasons (h1 then h4)   |
| Use `size` to fit visual composition               | Use `h1` everywhere because "it looks bigger" |
| One `h1` per page                                  | Multiple `h1` elements                        |

## Code Examples

```tsx
<Heading level={1} size="hero-lg">The best way to ship.</Heading>

<Heading level={2} size="title1">Pricing</Heading>
<Heading level={3} size="title2">Pro</Heading>
<Heading level={3} size="title2">Team</Heading>

// Visually large but semantically an h3 (e.g., inside a Card)
<Heading level={3} size="title1">Plan usage</Heading>
```

## Accessibility

- Implicit heading role from h1..h6 — screen readers build the outline from these.
- Never styled with `display: none` + pseudo text — use the Heading element directly.

## Tokens Used

See front-matter.

## Related

- `components/text/` — body-copy counterpart
- `foundations/typography.md` — type role scale

## Changelog

- **0.1.0** — Initial.

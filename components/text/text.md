---
name: Text
category: typography
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.text.destructive
  - color.text.link
  - type.size.body
  - type.size.callout
  - type.size.subheadline
  - type.size.footnote
  - type.size.caption1
  - type.size.caption2
dependsOn: []
a11y:
  role: none (presentational)
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Text

## Overview

Body-copy typography. Separates size (`size`), tone (`tone`), and weight (`weight`) as three orthogonal axes — you almost always adjust exactly one, not all three. Defaults to `<p>` with primary color at body size.

## Anatomy

Single text element (p / span / div / strong / em).

## Variants

- `size`: `body / callout / subheadline / footnote / caption1 / caption2`
- `tone`: `primary / secondary / tertiary / destructive / link`
- `weight`: `regular / medium / semibold`
- `as`: `p / span / div / strong / em`

## States

None.

## Props

| name     | type                                                                             | required | default   |
| -------- | -------------------------------------------------------------------------------- | -------- | --------- |
| `size`   | `'body' \| 'callout' \| 'subheadline' \| 'footnote' \| 'caption1' \| 'caption2'` | no       | `body`    |
| `tone`   | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive' \| 'link'`              | no       | `primary` |
| `weight` | `'regular' \| 'medium' \| 'semibold'`                                            | no       | `regular` |
| `as`     | `'p' \| 'span' \| 'div' \| 'strong' \| 'em'`                                     | no       | `p`       |

## Usage

| ✅ Do                                     | ❌ Don't                     |
| ----------------------------------------- | ---------------------------- |
| Use `tone="secondary"` for support copy   | Use opacity overrides        |
| Use `size="footnote"` for metadata        | Use `caption2` for body text |
| Keep paragraphs ≤ 65ch with `max-w-prose` | Run body text across 1200 px |

## Code Examples

```tsx
<Text>Your changes are saved.</Text>
<Text tone="secondary">Last updated 2 minutes ago.</Text>
<Text size="footnote" tone="tertiary">v0.1.0</Text>
<Text as="span" weight="semibold">Highlighted</Text>
```

## Accessibility

- Native `<p>` / `<span>` etc. — no ARIA required.
- Tone does not convey meaning alone; pair with icon or label when communicating state.

## Tokens Used

See front-matter.

## Related

- `components/heading/` — heading counterpart
- `foundations/typography.md` — type role scale

## Changelog

- **0.1.0** — Initial.

---
name: AspectRatio
category: layout
status: stable
version: 0.1.0
tokensUsed: []
dependsOn: []
a11y:
  role: none
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# AspectRatio

## Overview

Wrapper that enforces a width-to-height ratio via native CSS `aspect-ratio`. Use to reserve space for media that loads asynchronously (preventing layout shift) or to constrain a container shape.

## Anatomy

Single `<div>` with `position: relative` + `aspect-ratio: <ratio>` style. Children typically `absolute inset-0 h-full w-full`.

## Variants

Driven by `ratio` prop (e.g., `1` for square, `16/9` for widescreen, `4/3`, `3/4`).

## States

None.

## Props

| name    | type     | required | default | description                         |
| ------- | -------- | -------- | ------- | ----------------------------------- |
| `ratio` | `number` | no       | `1`     | Width / height. `16/9` = `1.7777…`. |

## Usage

| ✅ Do                                                                 | ❌ Don't                                                      |
| --------------------------------------------------------------------- | ------------------------------------------------------------- |
| Wrap `<img>` / `<video>` / `<iframe>` with an object-fit: cover child | Apply aspect-ratio as a raw utility (locks to Tailwind scale) |
| Use to prevent cumulative layout shift (CLS)                          | Use for text blocks                                           |

## Code Examples

```tsx
<AspectRatio ratio={16 / 9} className="rounded-card">
  <img src="/hero.jpg" alt="Team" className="absolute inset-0 h-full w-full object-cover" />
</AspectRatio>
```

## Accessibility

Layout primitive — no semantics. The child element carries `alt` / `aria-label`.

## Tokens Used

None.

## Related

- `components/card/` — Cards commonly contain AspectRatio media

## Changelog

- **0.1.0** — Initial (native CSS `aspect-ratio`; no Radix needed in modern browsers).

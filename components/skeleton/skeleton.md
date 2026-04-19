---
name: Skeleton
category: feedback
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - radius.button
dependsOn: []
a11y:
  role: none
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Skeleton

## Overview

Loading placeholder. Pulsing `surface-elevated` rectangle. `aria-hidden` by default so screen readers skip it while content loads — pair with a live region or Spinner+label elsewhere for the announcement.

## Anatomy

Single `<div>`. Sizing and shape controlled by consumer classes.

## Variants

None — shape driven by `className` (height, width, radius overrides).

## States

- Loading: pulsing animation (honors `motion-reduce:`)

## Props

Extends `HTMLAttributes<HTMLDivElement>`. Typically set width/height via `className`.

## Usage

| ✅ Do                                                    | ❌ Don't                                              |
| -------------------------------------------------------- | ----------------------------------------------------- |
| Match skeleton dimensions to the eventual content        | Use a generic square placeholder                      |
| Pair with a Spinner or live region for a11y announcement | Let screen readers wander into invisible pulsing divs |

## Code Examples

```tsx
<div className="flex flex-col gap-3">
  <Skeleton className="h-6 w-48" />
  <Skeleton className="h-4 w-64" />
  <Skeleton className="h-4 w-56" />
</div>
```

## Accessibility

- `aria-hidden="true"` prevents screen-reader noise.
- Animation pauses under `prefers-reduced-motion`.

## Tokens Used

See front-matter.

## Related

- `components/spinner/` — the labeled announcement half of a loading state

## Changelog

- **0.1.0** — Initial.

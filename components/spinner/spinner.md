---
name: Spinner
category: feedback
status: stable
version: 0.1.0
tokensUsed:
  - color.action.primary
dependsOn: []
a11y:
  role: status (when labeled)
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Spinner

## Overview

Indeterminate loading indicator. CSS `animate-spin` rotates a partial circle. Decorative by default (`aria-hidden="true"`); if the spinner is the only indication work is happening, pass `aria-label` and the component upgrades to `role="status"`.

## Anatomy

Single `<svg>` with two paths — a faded ring + a rotating arc.

## Variants

- Size: `sm` (16 px) / `md` (20 px) / `lg` (32 px)

## States

Animates continuously. Honors `prefers-reduced-motion` via `motion-reduce:animate-none` (stops animation).

## Props

| name         | type                   | required | default | description                                   |
| ------------ | ---------------------- | -------- | ------- | --------------------------------------------- |
| `size`       | `'sm' \| 'md' \| 'lg'` | no       | `md`    | Diameter.                                     |
| `aria-label` | `string`               | no       | —       | Accessible name; upgrades to `role="status"`. |
| `className`  | `string`               | no       | —       | Merged.                                       |

## Usage

| ✅ Do                                                        | ❌ Don't                                         |
| ------------------------------------------------------------ | ------------------------------------------------ |
| `aria-label="Loading"` on standalone spinners                | Leave a page-wide loader with no accessible name |
| Pair with visible text ("Signing in…") when label is textual | Use as a decorative ornament with meaning        |

## Code Examples

```tsx
<Spinner aria-label="Loading" />

<Button disabled>
  <Spinner size="sm" />
  Signing in…
</Button>
```

## Accessibility

- Reduced motion: spinner stops animating (still visible, just static).
- Screen readers announce the `aria-label` when `role="status"` region updates.

## Tokens Used

See front-matter.

## Related

- `components/progress/` — for determinate loading

## Changelog

- **0.1.0** — Initial.

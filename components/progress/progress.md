---
name: Progress
category: feedback
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.action.primary
  - radius.pill
  - motion.duration.ui
dependsOn: []
a11y:
  role: progressbar
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Progress

## Overview

Determinate or indeterminate progress indicator. `role="progressbar"` with `aria-valuenow` / `aria-valuemin` / `aria-valuemax`. Omit `value` for indeterminate (animated moving bar).

## Anatomy

Track (`bg-surface-elevated`) + fill bar (`bg-action-primary`). Pill-shaped.

## Variants

None (Phase 4). Determinate vs indeterminate driven by presence of `value` prop.

## States

- determinate: bar fills from left to right to `value / max`
- indeterminate: bar oscillates; honors `prefers-reduced-motion`

## Props

| name              | type     | required | default | description                                     |
| ----------------- | -------- | -------- | ------- | ----------------------------------------------- |
| `value`           | `number` | no       | —       | Current progress; omit for indeterminate.       |
| `max`             | `number` | no       | `100`   | Maximum.                                        |
| `aria-label`      | `string` | no       | —       | Accessible name (recommended).                  |
| `aria-labelledby` | `string` | no       | —       | Alternative: reference a visible label element. |
| `className`       | `string` | no       | —       | Merged.                                         |

## Usage

| ✅ Do                                              | ❌ Don't                                     |
| -------------------------------------------------- | -------------------------------------------- |
| Label via `aria-label` or a linked label element   | Leave the progress with no accessible name   |
| Use indeterminate only when duration truly unknown | Use indeterminate to avoid computing a value |

## Code Examples

```tsx
<Progress aria-label="Upload progress" value={42} />
<Progress aria-label="Loading" />
```

## Accessibility

- Announces updates as `aria-valuenow` changes.
- Indeterminate variant honors `prefers-reduced-motion` (animation pauses; bar stays static at 1/3 width).

## Tokens Used

See front-matter.

## Related

- `components/spinner/` — indeterminate counterpart for small UI

## Changelog

- **0.1.0** — Initial.

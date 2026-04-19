---
name: Alert
category: feedback
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.border.subtle
  - color.text.primary
  - color.text.secondary
  - color.text.destructive
  - radius.card
dependsOn: []
a11y:
  role: alert
  keyboard: []
  focus: none (inert unless contains focusable children)
  minHitTarget: n/a
---

# Alert

## Overview

Inline contextual feedback. `role="alert"` by default — screen readers announce on insertion. For in-page status that shouldn't steal focus, pass `role="status"` via props.

## Anatomy

Root (`<div role="alert">`) + optional `AlertTitle` + `AlertDescription`. Icon slot via children.

## Variants

- `neutral` / `info` / `success` / `warning` / `destructive` — Phase 4 keeps a minimal palette; intent is conveyed through border + icon + copy.

## States

Inert — no interactive states. Pair with a dismiss Button if dismissible.

## Props

| name        | type                                                             | required | default   | description               |
| ----------- | ---------------------------------------------------------------- | -------- | --------- | ------------------------- |
| `variant`   | `'neutral' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | no       | `neutral` | Visual intent.            |
| `role`      | `'alert' \| 'status'`                                            | no       | `alert`   | Screen-reader politeness. |
| `className` | `string`                                                         | no       | —         | Merged.                   |

## Usage

| ✅ Do                                             | ❌ Don't                                            |
| ------------------------------------------------- | --------------------------------------------------- |
| Use `role="status"` for non-urgent inline updates | Wrap critical errors in `role="status"` (use alert) |
| Pair color/variant with an icon AND text          | Rely on color alone                                 |

## Code Examples

```tsx
<Alert variant="destructive">
  <AlertTitle>Could not save</AlertTitle>
  <AlertDescription>Check your network and try again.</AlertDescription>
</Alert>
```

## Accessibility

- Default `role="alert"` causes immediate screen-reader announcement on insertion.
- Contrast: all variants meet WCAG AA on `surface.elevated`.

## Tokens Used

See front-matter.

## Related

- `components/toast/` — ephemeral, non-blocking counterpart
- `components/dialog/` — for blocking confirmations

## Changelog

- **0.1.0** — Initial.

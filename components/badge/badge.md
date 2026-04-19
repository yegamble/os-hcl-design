---
name: Badge
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.text.link
  - color.text.destructive
  - color.border.subtle
  - radius.pill
dependsOn: []
a11y:
  role: none (inert span)
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Badge

## Overview

Small, inert status indicator. Pill-shaped span for short labels (status, count, tag). Not interactive — wrap in `<button>` if pressable, or use Button directly.

## Anatomy

Single `<span>` with optional leading icon passed as children.

## Variants

- `neutral` — default surface, neutral text
- `info` — link-colored text on elevated surface
- `success` / `warning` — neutral surface (Phase 2 keeps a minimal palette; semantic backgrounds land when success/warning tokens are added)
- `destructive` — destructive text color on elevated surface

## States

Inert — no interactive states.

## Props

| name        | type                                                             | required | default   | description                |
| ----------- | ---------------------------------------------------------------- | -------- | --------- | -------------------------- |
| `variant`   | `'neutral' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | no       | `neutral` | Visual intent.             |
| `className` | `string`                                                         | no       | —         | Merged via tailwind-merge. |

## Usage

| ✅ Do                                  | ❌ Don't                            |
| -------------------------------------- | ----------------------------------- |
| Use for short labels (≤2 words)        | Put a sentence in a Badge           |
| Pair with icon for state communication | Use only color to communicate state |

## Code Examples

```tsx
<Badge>Beta</Badge>
<Badge variant="info">New</Badge>
<Badge variant="destructive">Deprecated</Badge>
```

## Accessibility

- Inherits `<span>` semantics (none). If the badge communicates a status, include the word ("Status: Beta") or add `aria-label` on the containing element.
- Color independence: don't rely on variant color alone — include readable text.

## Tokens Used

See front-matter.

## Related

- `components/button/` — for interactive "badge-like" chips

## Changelog

- **0.1.0** — Initial.

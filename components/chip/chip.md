---
name: Chip
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.border.subtle
  - color.action.primary
  - color.action.primary-fg
  - radius.pill
  - motion.duration.ui
dependsOn: []
a11y:
  role: none (span) | button (interactive)
  keyboard: [Space, Enter when interactive]
  focus: focus-visible ring when interactive
  minHitTarget: 32px (chip) + 20px (close); not a primary input surface
---

# Chip

## Overview

Small interactive label. Two modes:

- **Presentational** (default): `<span>` — displays a tag (filter applied, keyword).
- **Interactive**: `<button aria-pressed>` — toggles selected state (filter pill bar).

Both modes support an optional `×` remove affordance.

## Anatomy

Span or button container + label + optional remove button (own button for keyboard access).

## Variants

- `selected`: true|false — filled vs outlined
- `interactive`: true — renders as button with hover/focus ring
- `removable`: true — renders the `×` button; fires `onRemove`

## States

default / hover (interactive) / selected / focus-visible (interactive).

## Props

| name          | type                 | required | default | description                       |
| ------------- | -------------------- | -------- | ------- | --------------------------------- |
| `label`       | `string`             | yes      | —       | Visible text.                     |
| `selected`    | `boolean`            | no       | `false` | Filled appearance + aria-pressed. |
| `interactive` | `boolean`            | no       | `false` | Renders as button.                |
| `removable`   | `boolean`            | no       | `false` | Shows × close button.             |
| `onRemove`    | `() => void`         | no       | —       | Close button handler.             |
| `as`          | `'button' \| 'span'` | no       | auto    | Override rendered element.        |

## Usage

| ✅ Do                                           | ❌ Don't                             |
| ----------------------------------------------- | ------------------------------------ |
| Use interactive chips for filter bars           | Use for primary actions (use Button) |
| Use removable chips to indicate applied filters | Use as static badges (use Badge)     |
| Keep labels to 1-3 words                        | Put sentences in chips               |

## Code Examples

```tsx
<div className="flex flex-wrap gap-2">
  <Chip interactive selected label="In progress" onClick={() => toggle('in-progress')} />
  <Chip interactive label="Completed" onClick={() => toggle('completed')} />
  <Chip interactive label="Blocked" onClick={() => toggle('blocked')} />
</div>

<Chip label="kubernetes" removable onRemove={() => removeTag('kubernetes')} />
```

## Accessibility

- Interactive chips: `aria-pressed` reflects selected state.
- Remove button has its own `aria-label={`Remove ${label}`}` and stops event propagation.
- Minimum 32 px height keeps chips dense; pair with adequate spacing to avoid mis-taps.

## Tokens Used

See front-matter.

## Related

- `components/badge/` — pure display counterpart

## Changelog

- **0.1.0** — Initial.

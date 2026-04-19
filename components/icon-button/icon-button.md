---
name: IconButton
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.action.primary
  - color.action.primary-hover
  - color.action.primary-fg
  - color.surface.elevated
  - color.text.primary
  - color.border.default
  - color.border.subtle
  - radius.button
  - motion.duration.ui
dependsOn: []
a11y:
  role: button
  keyboard: [Enter, Space]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px
---

# IconButton

## Overview

Icon-only button primitive. The `aria-label` prop is required at the TypeScript type level — you cannot instantiate IconButton without one. 44 × 44 px minimum hit target at every variant.

## Anatomy

Single `<button>` with square hit area; icon passed as children.

## Variants

- `primary` — blue accent background
- `secondary` — neutral bordered
- `ghost` — transparent (default)

## States

default / hover / active / focus-visible / disabled — same token chain as Button.

## Props

| name         | type                                  | required | default  | description                                  |
| ------------ | ------------------------------------- | -------- | -------- | -------------------------------------------- |
| `aria-label` | `string`                              | **yes**  | —        | Accessible name. Required at the type level. |
| `variant`    | `'primary' \| 'secondary' \| 'ghost'` | no       | `ghost`  | Visual intent.                               |
| `className`  | `string`                              | no       | —        | Merged via tailwind-merge.                   |
| `type`       | `'button' \| 'submit' \| 'reset'`     | no       | `button` | Forwarded.                                   |
| `disabled`   | `boolean`                             | no       | `false`  | Disables activation.                         |

## Usage

| ✅ Do                                    | ❌ Don't                          |
| ---------------------------------------- | --------------------------------- |
| Always provide a meaningful `aria-label` | Use a generic label like "button" |
| Use `ghost` by default                   | Use `primary` for toolbar actions |

## Code Examples

```tsx
<IconButton aria-label="Close">
  <XIcon aria-hidden />
</IconButton>

<IconButton variant="primary" aria-label="Add item">
  <PlusIcon aria-hidden />
</IconButton>
```

## Accessibility

- `aria-label` enforced in TypeScript (compile-time guarantee of accessible name).
- Icon children should be `aria-hidden` to avoid duplicate announcements.
- Focus ring + hit target identical to Button.

## Tokens Used

See front-matter.

## Related

- `components/button/` — label-bearing counterpart

## Changelog

- **0.1.0** — Initial.

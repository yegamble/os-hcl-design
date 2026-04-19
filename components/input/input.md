---
name: Input
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.text.primary
  - color.text.tertiary
  - color.border.default
  - color.border.strong
  - color.action.primary
  - color.action.destructive
  - radius.button
  - motion.duration.ui
dependsOn: []
a11y:
  role: textbox
  keyboard: [Tab, Type]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px
---

# Input

## Overview

Native `<input>` wrapped with Tailwind utilities and `tailwind-variants` sizes. Placeholder at tertiary-text color; focus ring at action-primary; invalid state triggered by `aria-invalid`.

## Anatomy

Single `<input>`; wrap with a `<label>` for accessibility.

## Variants

- Size: `sm` / `md` / `lg` (all at least 44 px tall)

## States

default / focus-visible / hover / disabled / invalid (`aria-invalid="true"`).

## Props

Extends native `InputHTMLAttributes<HTMLInputElement>`.

| name        | type                   | required | default | description                              |
| ----------- | ---------------------- | -------- | ------- | ---------------------------------------- |
| `size`      | `'sm' \| 'md' \| 'lg'` | no       | `md`    | Vertical/horizontal padding + type size. |
| `className` | `string`               | no       | —       | Merged via tailwind-merge.               |

## Usage

| ✅ Do                                                    | ❌ Don't                           |
| -------------------------------------------------------- | ---------------------------------- |
| Always wrap with `<label>`                               | Use `placeholder` as a label       |
| Mark invalid inputs with `aria-invalid="true"`           | Rely on color alone for error      |
| Use `type="email"` / `type="number"` / etc. semantically | Leave `type="text"` for all inputs |

## Code Examples

```tsx
<label className="flex flex-col gap-2">
  <span className="text-subheadline text-text-secondary">Email</span>
  <Input type="email" name="email" placeholder="you@example.com" required />
</label>

<Input aria-invalid="true" defaultValue="not-an-email" />
```

## Accessibility

- Label via `<label>` wrap or `htmlFor`.
- `aria-invalid="true"` triggers the error-state ring.
- Contrast: `text.primary` on `surface.default` passes WCAG AA.

## Tokens Used

See front-matter.

## Related

- `components/textarea/` — multi-line equivalent
- `components/select/` — for enumerated values

## Changelog

- **0.1.0** — Initial.

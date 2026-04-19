---
name: Separator
category: layout
status: stable
version: 0.1.0
tokensUsed:
  - color.separator.default
dependsOn: []
a11y:
  role: separator | none
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Separator

## Overview

Thin hairline divider. 1-pixel rule using `color.separator.default`. Decorative by default (`role="none"`); pass `decorative={false}` for a semantic `role="separator"` with `aria-orientation`.

## Anatomy

Single `<div>` with `h-px` or `w-px` depending on orientation.

## Variants

- `orientation`: `horizontal` (default, full width × 1 px) / `vertical` (1 px × full height)

## States

Inert.

## Props

| name          | type                         | required | default      | description                                 |
| ------------- | ---------------------------- | -------- | ------------ | ------------------------------------------- |
| `orientation` | `'horizontal' \| 'vertical'` | no       | `horizontal` | Axis.                                       |
| `decorative`  | `boolean`                    | no       | `true`       | If false, exposes `role="separator"` to AT. |

## Usage

| ✅ Do                                                                    | ❌ Don't                                                |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| Use decorative separators between repetitive list items                  | Use a separator to fake whitespace — use margin instead |
| Use `decorative={false}` when the separator meaningfully groups sections | Set `role="separator"` on every divider                 |

## Code Examples

```tsx
<div>
  <Item />
  <Separator />
  <Item />
</div>

<Separator orientation="vertical" className="mx-4" decorative={false} />
```

## Accessibility

- Decorative (default): `role="none"` — screen readers skip.
- Semantic: `role="separator"` with `aria-orientation`.

## Tokens Used

See front-matter.

## Related

- `foundations/spacing.md` — prefer spacing over separators for pure visual breathing room

## Changelog

- **0.1.0** — Initial.

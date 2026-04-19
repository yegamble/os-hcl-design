---
name: Avatar
category: data-display
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.border.subtle
  - radius.pill
dependsOn: []
a11y:
  role: img
  keyboard: []
  focus: none (inert)
  minHitTarget: n/a
---

# Avatar

## Overview

User / entity avatar. Shows an image when `src` is provided and loads successfully; falls back to initials derived from `alt` (or explicit `initials` prop) when `src` is missing or errors. Pill-shaped at all sizes.

## Anatomy

Root `<span role="img" aria-label>` containing either `<img>` or initials `<span>`.

## Variants

- Size: `sm` (32 px) / `md` (40 px) / `lg` (56 px) / `xl` (80 px)

## States

- image-loaded / initials-fallback. Automatically swaps to initials on `onError`.

## Props

| name       | type                           | required | default | description                                                |
| ---------- | ------------------------------ | -------- | ------- | ---------------------------------------------------------- |
| `alt`      | `string`                       | yes      | —       | Accessible name. Also drives initials fallback.            |
| `src`      | `string`                       | no       | —       | Image URL.                                                 |
| `initials` | `string`                       | no       | —       | Override fallback initials (otherwise derived from `alt`). |
| `size`     | `'sm' \| 'md' \| 'lg' \| 'xl'` | no       | `md`    | Diameter.                                                  |

## Usage

| ✅ Do                                       | ❌ Don't                                                      |
| ------------------------------------------- | ------------------------------------------------------------- |
| Provide a meaningful `alt` ("Ada Lovelace") | Use `alt="avatar"` or `""`                                    |
| Let initials fall back automatically        | Manually set `initials="AL"` when `alt` would derive the same |

## Code Examples

```tsx
<Avatar src="/u/ada.jpg" alt="Ada Lovelace" />
<Avatar alt="Ada Lovelace" /> {/* no src → "AL" initials */}
<Avatar alt="Ada" size="xl" />
```

## Accessibility

- `role="img"` + `aria-label={alt}`.
- Inner `<img alt="">` is decorative (the outer span carries the name).

## Tokens Used

See front-matter.

## Related

- `components/badge/` — for small status chips near avatars

## Changelog

- **0.1.0** — Initial.

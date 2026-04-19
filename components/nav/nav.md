---
name: Nav
category: navigation
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.text.secondary
  - color.surface.elevated
  - color.action.primary
  - radius.button
  - motion.duration.ui
dependsOn: []
a11y:
  role: navigation
  keyboard: [Tab]
  focus: focus-visible ring (per NavItem)
  minHitTarget: 44px
---

# Nav

## Overview

Presentational navigation primitive. Native `<nav>` + `<ul>` + `<a>` semantics (no dropdown menu behavior in Phase 2 — that lands as a Radix NavigationMenu variant in a later phase). Provides consistent spacing, hit target, and active-state styling via `aria-current="page"`.

## Anatomy

- `Nav` — `<nav>` flex container
- `NavList` — `<ul>` horizontal list
- `NavItem` — `<li><a>` with `active` prop that sets `aria-current="page"`

## Variants

None in Phase 2.

## States

default / hover / focus-visible / active (current page). Active state driven by `aria-current` attribute-variant utilities.

## Props

| Component | name         | type      | required | description                                    |
| --------- | ------------ | --------- | -------- | ---------------------------------------------- |
| `Nav`     | `aria-label` | `string`  | **yes**  | Accessible name for the landmark.              |
| `NavItem` | `active`     | `boolean` | no       | Sets `aria-current="page"` and active styling. |
| `NavItem` | `href`       | `string`  | yes      | Destination.                                   |

## Usage

| ✅ Do                                            | ❌ Don't                    |
| ------------------------------------------------ | --------------------------- |
| One `Nav` with `aria-label="Primary"` per layout | Multiple unlabeled `<nav>`s |
| Mark the current page with `active`              | Rely on color alone         |
| Use real `<a>` with `href`                       | `<div onClick>` for nav     |

## Code Examples

```tsx
<Nav aria-label="Primary">
  <NavList>
    <NavItem href="/" active>
      Home
    </NavItem>
    <NavItem href="/docs">Docs</NavItem>
    <NavItem href="/changelog">Changelog</NavItem>
  </NavList>
</Nav>
```

## Accessibility

- Landmark: `<nav>` with `aria-label`.
- Active page: `aria-current="page"`.
- Hit target: each NavItem ≥ 44 px (via `min-h-11`).

## Tokens Used

See front-matter.

## Related

- `patterns/hero-feature-grid/` — uses inline nav (not Nav yet)

## Changelog

- **0.1.0** — Initial (presentational only).

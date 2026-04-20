---
name: Breadcrumb
category: navigation
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.action.primary
  - radius.button
dependsOn: []
a11y:
  role: navigation
  keyboard: [Tab]
  focus: focus-visible ring on each link
  minHitTarget: 44px (via text line-height + padding if needed)
---

# Breadcrumb

## Overview

Hierarchical navigation trail. `<nav aria-label="Breadcrumb">` + `<ol>` + alternating link + separator. Current page uses `aria-current="page"` + semibold weight, no link.

## Anatomy

Breadcrumb (nav) + BreadcrumbList (ol) + BreadcrumbItem (li) + BreadcrumbLink (a or span[current]) + BreadcrumbSeparator ("/").

## Variants

None. Visual separator can be overridden via `children` on BreadcrumbSeparator.

## States

- default: link color secondary
- hover: primary
- current: primary + semibold

## Props

| Component        | name      | type      | required | description                                |
| ---------------- | --------- | --------- | -------- | ------------------------------------------ |
| `BreadcrumbLink` | `href`    | `string`  | yes      | Destination (ignored when `current=true`). |
| `BreadcrumbLink` | `current` | `boolean` | no       | Marks as current page (renders as span).   |

## Usage

| ✅ Do                                | ❌ Don't                         |
| ------------------------------------ | -------------------------------- |
| Use for ≥ 3 levels of hierarchy      | Use for 2 levels (just use Back) |
| Mark the current page with `current` | Link the current page            |
| Keep breadcrumb labels short         | Use full sentences               |

## Code Examples

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink current>Profile</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Accessibility

- `<nav aria-label="Breadcrumb">` landmark.
- `aria-current="page"` on the current leaf.
- Separators marked `aria-hidden`.

## Tokens Used

See front-matter.

## Related

- `components/nav/` — sibling navigation

## Changelog

- **0.1.0** — Initial.

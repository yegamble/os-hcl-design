---
name: DashboardHeader
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.text.destructive
  - color.border.subtle
  - color.action.primary
  - material.regular.fallbackColor
  - radius.button
  - radius.pill
dependsOn:
  - Avatar
  - Button
  - Input
  - DropdownMenu
a11y:
  role: banner + navigation
  keyboard: [Tab, Enter, Esc]
  focus: focus-visible ring on all interactive elements
  minHitTarget: 44px
---

# DashboardHeader

## Overview

App-shell top bar. Sticky + glass background with primary brand, horizontal nav, search input, and user avatar with dropdown menu. Responsive: nav hidden on narrow viewports with a hamburger IconButton placeholder (consumer supplies mobile nav).

## Anatomy

`<header>` with `sticky-nav-blur` + `glass-regular` → brand + `<nav aria-label="Primary">` + search form (role="search") + DropdownMenu-wrapped Avatar + mobile hamburger Button.

## Variants

None. Search and hamburger visibility driven by viewport via Tailwind `md:` breakpoint.

## States

- Nav link default / hover / active (aria-current)
- Glass fallback honored automatically via `glass-regular`

## Props

| name        | type                         | required | description                      |
| ----------- | ---------------------------- | -------- | -------------------------------- |
| `brand`     | `ReactNode`                  | yes      | Logo or text name.               |
| `nav`       | `{ href, label, active? }[]` | yes      | Primary links.                   |
| `user`      | `{ name, email?, src? }`     | yes      | Passed to Avatar + menu label.   |
| `onSearch`  | `(query: string) => void`    | no       | Show search input when provided. |
| `onSignOut` | `() => void`                 | no       | Sign-out menu item handler.      |

## Usage

| ✅ Do                                   | ❌ Don't                                   |
| --------------------------------------- | ------------------------------------------ |
| Keep primary nav to 3-6 links           | Cram 10 items (use NavigationMenu instead) |
| Use `active` on the current page        | Leave all links styled identically         |
| Pair with a sidebar for deep navigation | Put deep nav in a single header            |

## Code Examples

```tsx
<DashboardHeader
  brand="Acme"
  nav={[
    { href: '/', label: 'Home', active: true },
    { href: '/projects', label: 'Projects' },
    { href: '/members', label: 'Members' },
  ]}
  user={{ name: 'Ada Lovelace', email: 'ada@acme.com' }}
  onSearch={(q) => search(q)}
  onSignOut={() => signOut()}
/>
```

## Accessibility

- `<header>` landmark (implicit role=banner).
- `<nav aria-label="Primary">` for main links.
- `<form role="search">` for the search input.
- Avatar trigger has `aria-label="Account menu"`.
- Glass fallback honored via `glass-regular` utility.

## Tokens Used

See front-matter.

## Related

- `components/nav/` / `components/navigation-menu/` — heavier nav counterparts
- `patterns/settings/` — common companion pattern for app-shell

## Changelog

- **0.1.0** — Initial.

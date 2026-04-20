---
name: Settings
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.border.subtle
  - color.action.primary
  - radius.button
dependsOn:
  - Card
a11y:
  role: region + navigation
  keyboard: [Tab]
  focus: focus-visible ring on sidebar nav buttons
  minHitTarget: 44px
---

# Settings

## Overview

Two-column Settings layout: left sidebar nav (sections) + right scrollable content area. Each content section is a `SettingsSection` wrapper that renders a title + optional description + a Card with `divide-y` child separators. Standard web settings page shape used by GitHub, Linear, Stripe.

## Anatomy

Root container → sidebar `<aside aria-label="Settings navigation">` (h1 + nav buttons) + `<main>` (SettingsSection × N).

## Variants

Responsive: sidebar stacks above content on narrow viewports via `md:grid-cols-[220px_1fr]`.

## States

Nav item default / hover / active (`aria-current="page"` + semibold).

## Props

**Settings:**

| name    | type                | required | description                              |
| ------- | ------------------- | -------- | ---------------------------------------- |
| `nav`   | `SettingsNavItem[]` | yes      | `{ id, label, active?, onClick? }`.      |
| `title` | `string`            | no       | h1 for the sidebar. Default: "Settings". |

**SettingsSection:**

| name          | type        | required | description                              |
| ------------- | ----------- | -------- | ---------------------------------------- |
| `title`       | `string`    | yes      | Section h2.                              |
| `description` | `string`    | no       | Sub-copy below the title.                |
| `children`    | `ReactNode` | yes      | Form rows (Input, Switch, Select, etc.). |

## Usage

| ✅ Do                                                  | ❌ Don't                        |
| ------------------------------------------------------ | ------------------------------- |
| Group related settings into a single SettingsSection   | Dump 20 fields into one section |
| Give each field row a consistent height and gap        | Mix dense + sparse rows         |
| Use `Switch` / `Select` / `Input` / `Checkbox` in rows | Custom-style inputs inline      |

## Code Examples

```tsx
<Settings
  nav={[
    { id: 'profile', label: 'Profile', active: true },
    { id: 'team', label: 'Team' },
    { id: 'billing', label: 'Billing' },
    { id: 'security', label: 'Security' },
  ]}
>
  <SettingsSection title="Profile" description="Your public profile.">
    <label className="flex items-center justify-between">
      <span className="text-body text-text-primary">Display name</span>
      <Input defaultValue="Ada Lovelace" className="max-w-xs" />
    </label>
    <label className="flex items-center justify-between">
      <span className="text-body text-text-primary">Email</span>
      <Input type="email" defaultValue="ada@example.com" className="max-w-xs" />
    </label>
  </SettingsSection>
</Settings>
```

## Accessibility

- `<aside aria-label="Settings navigation">` + `<nav aria-label="Sections">` landmarks.
- Active nav item marked with `aria-current="page"`.
- Each SettingsSection has `aria-labelledby` pointing to its h2.

## Tokens Used

See front-matter.

## Related

- `components/card/` — section containers
- `components/input/` / `components/switch/` / `components/select/` — form rows

## Changelog

- **0.1.0** — Initial.

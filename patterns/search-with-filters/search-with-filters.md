---
name: SearchWithFilters
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.text.link
  - color.text.tertiary
  - color.action.primary
dependsOn:
  - Input
  - Chip
a11y:
  role: region + search + group
  keyboard: [Tab, Enter, Space]
  focus: focus-visible ring on all interactive elements
  minHitTarget: 44px via Input + Chip
---

# Search With Filters

## Overview

Full-width search Input + horizontal Chip filter bar + results slot. Results region is `aria-live="polite"` so screen readers announce updates as filters change. Optional "Clear all" shortcut appears when any filter or query is active.

## Anatomy

`<section aria-label>` → `<form role="search">` with Input → `<div role="group" aria-label="Filters">` with Chip(s) + optional Clear + optional result count → `<div role="region" aria-live="polite">` results slot.

## Variants

None.

## States

- query empty / query typed
- filter selected / unselected
- Clear-all visible / hidden (shown when any filter or query is active)

## Props

| name             | type                   | required | description                        |
| ---------------- | ---------------------- | -------- | ---------------------------------- |
| `query`          | `string`               | yes      | Controlled search query.           |
| `onQueryChange`  | `(q: string) => void`  | yes      | Query change handler.              |
| `filters`        | `FilterOption[]`       | yes      | `{ id, label }[]`.                 |
| `selected`       | `string[]`             | yes      | Selected filter ids.               |
| `onToggleFilter` | `(id: string) => void` | yes      | Toggle handler.                    |
| `onClear`        | `() => void`           | no       | If provided, shows Clear-all link. |
| `placeholder`    | `string`               | no       | Search input placeholder.          |
| `resultCount`    | `number`               | no       | Shown in the meta slot.            |
| `children`       | `ReactNode`            | yes      | Results content.                   |

## Usage

| ✅ Do                                      | ❌ Don't                                 |
| ------------------------------------------ | ---------------------------------------- |
| Debounce `onQueryChange` server-side calls | Fire a request on every keystroke        |
| Keep filter count ≤ 8 per row              | Stack 30 filters                         |
| Show result count                          | Leave the user guessing how many matched |

## Code Examples

```tsx
<SearchWithFilters
  query={q}
  onQueryChange={setQ}
  filters={[
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'svelte', label: 'Svelte' },
  ]}
  selected={selectedFilters}
  onToggleFilter={toggle}
  onClear={() => {
    setQ('');
    clearFilters();
  }}
  resultCount={results.length}
>
  <ResultsList items={results} />
</SearchWithFilters>
```

## Accessibility

- `<form role="search">` with `aria-label="Search"` on the Input.
- `<div role="group" aria-label="Filters">` for the chip bar.
- `<div role="region" aria-live="polite">` on results — updates are announced.

## Tokens Used

See front-matter.

## Related

- `components/input/` — search input
- `components/chip/` — filter pills

## Changelog

- **0.1.0** — Initial.

---
name: Combobox
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.surface.raised
  - color.surface.elevated
  - color.text.primary
  - color.text.tertiary
  - color.border.default
  - color.border.subtle
  - color.action.primary
  - radius.button
dependsOn: ['cmdk', 'Popover']
a11y:
  role: combobox
  keyboard: [Type, Arrow, Enter, Esc]
  focus: focus-visible ring on trigger; input autofocus on open
  minHitTarget: 44px trigger + per item
---

# Combobox

## Overview

Searchable single-select. Combines `cmdk` command primitive (search + keyboard navigation + fuzzy match) with our Popover for positioning. Use when the option list is long enough that the user wants to type to filter — for short lists, Select is simpler.

## Anatomy

PopoverTrigger (value/placeholder + chevron) → PopoverContent → Command (Input + List + empty state + Item(s)).

## Variants

None.

## States

closed / open / typing / empty-results / item-selected.

## Props

| name           | type                                 | required | default       |
| -------------- | ------------------------------------ | -------- | ------------- |
| `options`      | `{ value: string; label: string }[]` | yes      | —             |
| `value`        | `string`                             | no       | —             |
| `onChange`     | `(v: string) => void`                | no       | —             |
| `placeholder`  | `string`                             | no       | `Select…`     |
| `emptyMessage` | `string`                             | no       | `No results.` |
| `disabled`     | `boolean`                            | no       | `false`       |

## Usage

| ✅ Do                                            | ❌ Don't                         |
| ------------------------------------------------ | -------------------------------- |
| Use for long lists (countries, timezones, users) | Use for short lists (use Select) |
| Provide an `aria-label`                          | Rely on placeholder as label     |

## Code Examples

```tsx
<Combobox
  options={countries}
  value={country}
  onChange={setCountry}
  placeholder="Search countries…"
  aria-label="Country"
/>
```

## Accessibility

- Role `combobox` via cmdk; arrow keys navigate filtered items.
- Type-to-filter with fuzzy matching.
- Esc closes via Popover.

## Tokens Used

See front-matter.

## Related

- `components/select/` — short-list counterpart
- `components/command-palette/` — global ⌘K menu built on the same cmdk primitives

## Changelog

- **0.1.0** — Initial.

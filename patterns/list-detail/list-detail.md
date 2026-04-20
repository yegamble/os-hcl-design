---
name: ListDetail
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.surface.elevated
  - color.text.primary
  - color.text.tertiary
  - color.border.subtle
  - color.action.primary
dependsOn: []
a11y:
  role: region + main
  keyboard: [Tab, Arrow]
  focus: focus-visible ring on list items
  minHitTarget: 44px per list item
---

# List Detail

## Overview

Master/detail two-pane layout. Left pane scrolls through items; right pane shows the selected item's detail. Common in mail clients, file browsers, CRMs. Stacks below on narrow viewports.

## Anatomy

`<aside aria-label>` + `<ul>` list + `<main>` detail. Each list item is a `<button>` with `aria-current` and `aria-pressed` reflecting selection.

## Variants

None. Responsive via Tailwind `md:` breakpoint.

## States

List item default / hover / active (aria-current + elevated bg).

## Props

| name         | type                         | required | description                                    |
| ------------ | ---------------------------- | -------- | ---------------------------------------------- |
| `items`      | `{ id, title, subtitle? }[]` | yes      | List items.                                    |
| `selectedId` | `string`                     | no       | Currently selected id.                         |
| `onSelect`   | `(id: string) => void`       | yes      | Selection handler.                             |
| `detail`     | `ReactNode`                  | yes      | Detail content (hidden when nothing selected). |
| `emptyState` | `ReactNode`                  | no       | Replaces default empty message.                |
| `listLabel`  | `string`                     | no       | Accessible name for the aside.                 |

## Usage

| ✅ Do                                 | ❌ Don't                       |
| ------------------------------------- | ------------------------------ |
| Keep list items scannable (1-2 lines) | Put rich content in list items |
| Preserve scroll position on selection | Reset scroll each click        |
| Deep-link selection via URL query     | Lose selection on refresh      |

## Code Examples

```tsx
<ListDetail
  items={messages}
  selectedId={selected}
  onSelect={setSelected}
  detail={<MessageView id={selected} />}
  listLabel="Inbox"
/>
```

## Accessibility

- `<aside aria-label>` for the list landmark.
- `<main>` for the detail landmark.
- Selected item marked with `aria-current="true"` + `aria-pressed="true"`.

## Tokens Used

See front-matter.

## Related

- `patterns/dashboard-header/` — common companion
- `components/scroll-area/` — can wrap long lists for custom scrollbars

## Changelog

- **0.1.0** — Initial.

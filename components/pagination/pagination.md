---
name: Pagination
category: navigation
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.action.primary
  - color.action.primary-fg
  - radius.button
dependsOn: []
a11y:
  role: navigation
  keyboard: [Tab, Enter]
  focus: focus-visible ring on each button
  minHitTarget: 44px per button
---

# Pagination

## Overview

Numeric page navigation with prev/next buttons. Shows a window of page numbers around the current page with ellipses for the unreachable middle. Current page marked with `aria-current="page"` and primary-color fill.

## Anatomy

`<nav aria-label="Pagination">` containing Prev button + page number buttons + ellipsis spans (`aria-hidden`) + Next button.

## Variants

`siblingCount` controls the window width (default 1; renders `[1][…][n-1][n][n+1][…][last]`).

## States

default / hover / current (aria-current) / disabled (first page → prev disabled, last → next).

## Props

| name           | type                     | required | default | description               |
| -------------- | ------------------------ | -------- | ------- | ------------------------- |
| `page`         | `number`                 | yes      | —       | 1-indexed current page.   |
| `pageCount`    | `number`                 | yes      | —       | Total number of pages.    |
| `onPageChange` | `(page: number) => void` | yes      | —       | Change handler.           |
| `siblingCount` | `number`                 | no       | `1`     | Pages shown on each side. |
| `className`    | `string`                 | no       | —       | Merged.                   |

## Usage

| ✅ Do                                   | ❌ Don't                                    |
| --------------------------------------- | ------------------------------------------- |
| Show pagination when there are 2+ pages | Show a lonely page "1 of 1"                 |
| Sync `page` with URL / query state      | Drop pagination state on re-mount           |
| Provide keyboard-navigable page buttons | Rely on Prev/Next only (slow for far pages) |

## Code Examples

```tsx
const [page, setPage] = useState(1);
<Pagination page={page} pageCount={20} onPageChange={setPage} />;
```

## Accessibility

- `<nav aria-label="Pagination">` landmark.
- Each page button has `aria-label="Go to page N"`.
- Current page marked with `aria-current="page"`.
- Prev/Next buttons disabled at boundaries (screen readers announce `aria-disabled="true"`).

## Tokens Used

See front-matter.

## Related

- `components/table/` — the most common pairing

## Changelog

- **0.1.0** — Initial.

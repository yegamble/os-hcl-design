---
name: Table
category: data-display
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.border.subtle
dependsOn: []
a11y:
  role: table
  keyboard: [Tab for focusable cells, otherwise native scroll]
  focus: focus-visible on inner interactive cells (buttons, links)
  minHitTarget: row height 44px via padding
---

# Table

## Overview

Semantic `<table>` wrapped with compound sub-components. Horizontally scrollable on narrow viewports via outer `<div>` with `overflow-x-auto`. Header cells use `scope="col"`; add `scope="row"` on row-leading `Table.HeaderCell` when rows are labeled by their first cell.

For sort / filter / pagination at scale, compose with `@tanstack/react-table` in a future DataTable component.

## Anatomy

Table (table) + Table.Header (thead) + Table.Body (tbody) + Table.Row (tr) + Table.HeaderCell (th) + Table.Cell (td) + Table.Caption (caption).

## Variants

None. Consumers style via `className` on sub-components.

## States

Row hover highlights via a tinted surface. Interactive cells (link/button inside) manage their own focus.

## Props

| Component          | Forwarded to | Notes                          |
| ------------------ | ------------ | ------------------------------ |
| `Table`            | `<table>`    | Wrapped in overflow-x `<div>`. |
| `Table.Header`     | `<thead>`    | Elevated background.           |
| `Table.Body`       | `<tbody>`    | `divide-y` row separators.     |
| `Table.Row`        | `<tr>`       | Hover highlight.               |
| `Table.HeaderCell` | `<th>`       | Default `scope="col"`.         |
| `Table.Cell`       | `<td>`       | Default align-middle.          |
| `Table.Caption`    | `<caption>`  | Accessible table name.         |

## Usage

| ✅ Do                                        | ❌ Don't                              |
| -------------------------------------------- | ------------------------------------- |
| Include Table.Caption for non-trivial tables | Rely on preceding h2 alone            |
| Use `scope="row"` on row-leading headers     | Mix row-leading headers without scope |
| Right-align numeric columns                  | Center-align long text                |

## Code Examples

```tsx
<Table>
  <Table.Caption>Active projects</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell className="text-right">Budget</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {rows.map((r) => (
      <Table.Row key={r.id}>
        <Table.HeaderCell scope="row">{r.name}</Table.HeaderCell>
        <Table.Cell>
          <Badge>{r.status}</Badge>
        </Table.Cell>
        <Table.Cell className="text-right font-mono">{r.budget}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
```

## Accessibility

- Semantic `<table>` + `<thead>` + `<tbody>` + `<caption>` — no manual ARIA needed.
- `scope` on every `<th>` clarifies col/row association.
- Horizontal scroll wrapper has no focus ring itself; the inner table remains a focus-able element if needed via `tabIndex=0`.

## Tokens Used

See front-matter.

## Related

- `components/card/` — wrap tables in a Card for visual grouping
- `components/pagination/` — pair for paged lists

## Changelog

- **0.1.0** — Initial (semantic sub-components; no sort/filter logic).

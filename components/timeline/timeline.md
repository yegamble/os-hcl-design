---
name: Timeline
category: data-display
status: stable
version: 0.1.0
tokensUsed:
  - color.action.primary
  - color.action.primary-fg
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.border.subtle
  - radius.pill
dependsOn: []
a11y:
  role: list
  keyboard: []
  focus: none (inherits from inner interactive content)
  minHitTarget: n/a
---

# Timeline

## Overview

Vertical chronological list. Each item has an icon bullet, title, optional timestamp (`<time>`), and optional content slot. Connector line between items.

## Anatomy

`<ol>` + `<li>` per entry. Left column: icon bullet + vertical connector. Right column: title + meta (time) + content.

## Variants

None.

## States

None (data display only).

## Props

| name    | type                 | required | description                             |
| ------- | -------------------- | -------- | --------------------------------------- |
| `items` | `TimelineItemData[]` | yes      | `{ id, title, meta?, icon?, content? }` |

## Usage

| ✅ Do                                          | ❌ Don't                           |
| ---------------------------------------------- | ---------------------------------- |
| Use for activity feeds, audit logs, changelogs | Use for un-ordered lists           |
| Use `<time>` semantics via `meta`              | Plain strings without time context |
| Keep content slots short — link out for detail | Dump paragraphs per entry          |

## Code Examples

```tsx
<Timeline
  items={[
    { id: '1', title: 'Created', meta: '9:12 AM', content: 'Project "Aurora" initialized.' },
    { id: '2', title: 'Invited', meta: '10:40 AM', content: 'Ada Lovelace joined as Admin.' },
    { id: '3', title: 'Deployed', meta: '3:07 PM', content: 'First production deploy.' },
  ]}
/>
```

## Accessibility

- `<ol>` + `<li>` semantics.
- `<time>` for the meta slot (ensure strings are human-readable times).
- Inner Icons are `aria-hidden` — the title carries the meaning.

## Tokens Used

See front-matter.

## Related

- `components/separator/` — for segment breaks within a single entry

## Changelog

- **0.1.0** — Initial.

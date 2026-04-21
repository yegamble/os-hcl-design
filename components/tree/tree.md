---
name: Tree
category: data-display
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.text.tertiary
  - color.action.primary
  - radius.button
  - motion.duration.ui
dependsOn: []
a11y:
  role: tree / treeitem / group
  keyboard: [Tab, Click on chevron to expand/collapse]
  focus: focus-visible ring on select button and expand button
  minHitTarget: 44px per item row
---

# Tree

## Overview

Hierarchical list with expand/collapse per node. Each node has a chevron toggle (only if it has children) and a label button. First-level nodes are expanded by default.

Phase 8 uses simple Tab navigation + click. A fuller WAI-ARIA tree with roving tabindex and arrow-key traversal is a Phase 9+ upgrade.

## Anatomy

`<ul role="tree">` containing `<li role="treeitem">` per node. Each treeitem has a chevron button (if `children`), a label button, and an optional nested `<ul role="group">` with child treeitems (indented by depth × 16 px).

## Variants

None.

## States

collapsed / expanded / selected / hover.

## Props

| name         | type                   | required | description                       |
| ------------ | ---------------------- | -------- | --------------------------------- |
| `nodes`      | `TreeNode[]`           | yes      | `{ id, label, children? }[]`.     |
| `selectedId` | `string`               | no       | Controlled selection.             |
| `onSelect`   | `(id: string) => void` | no       | Select handler.                   |
| `aria-label` | `string`               | no       | Accessible name. Default: `Tree`. |

## Usage

| ✅ Do                                      | ❌ Don't                      |
| ------------------------------------------ | ----------------------------- |
| Use for files, categories, org charts      | Use for deeply-flat lists     |
| Collapse deeply nested branches by default | Expand 1000 leaves on mount   |
| Pair with a filter input for large trees   | Show 10k items without search |

## Code Examples

```tsx
<Tree
  nodes={[
    {
      id: 'src',
      label: 'src',
      children: [
        { id: 'src/app.tsx', label: 'app.tsx' },
        {
          id: 'src/components',
          label: 'components',
          children: [{ id: 'src/components/button.tsx', label: 'button.tsx' }],
        },
      ],
    },
  ]}
  selectedId={selected}
  onSelect={setSelected}
  aria-label="File tree"
/>
```

## Accessibility

- `role="tree"` on root; `role="treeitem"` on each item; `aria-expanded` on items with children; `aria-selected` on the selected item.
- Phase 8 implementation uses Tab traversal — for full roving-tabindex arrow navigation upgrade in Phase 9.

## Tokens Used

See front-matter.

## Related

- `components/accordion/` — single-level disclosure counterpart
- `components/list-detail/` (pattern) — common pairing for file browsers

## Changelog

- **0.1.0** — Initial (chevron expand/collapse; click-select; Tab traversal).

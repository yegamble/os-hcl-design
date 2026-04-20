---
name: ContextMenu
category: overlay
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.surface.elevated
  - color.border.subtle
  - color.text.primary
  - color.text.tertiary
  - color.separator.default
  - radius.card
  - radius.button
  - shadow.popover
dependsOn: ['@radix-ui/react-context-menu']
a11y:
  role: menu / menuitem
  keyboard: [Arrow, Enter, Esc, Shift+F10]
  focus: focus-visible ring on active item
  minHitTarget: 44px per item
---

# ContextMenu

## Overview

Right-click / long-press / Shift+F10 menu. Radix ContextMenu handles pointer-context detection, keyboard activation, and aria-role wiring. Visually identical to DropdownMenu — differs only in trigger behavior.

## Anatomy

ContextMenu (Root) + ContextMenuTrigger (the element that triggers on right-click) → ContextMenuContent → ContextMenuItem / Label / Separator.

## Variants

None.

## States

closed / open / per-item default / highlighted / disabled.

## Props

Radix ContextMenu props.

## Usage

| ✅ Do                                                                                               | ❌ Don't                                                  |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Use for row-level actions, canvas interactions, list item menus                                     | Use where a regular DropdownMenu would communicate better |
| Keep in sync with a visible DropdownMenu or toolbar — touch / keyboard-only users can't right-click | Hide critical actions only in a right-click menu          |

## Code Examples

```tsx
<ContextMenu>
  <ContextMenuTrigger asChild>
    <div className="border-border-subtle rounded-card border p-8">Right-click me</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Row actions</ContextMenuLabel>
    <ContextMenuItem>Rename</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-text-destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Accessibility

- Shift+F10 opens via keyboard.
- Arrow traversal; Enter activates; Esc dismisses.
- Always mirror the actions in a visible affordance (DropdownMenu on an ellipsis button) — context menus are discoverable only by users who think to try right-click.

## Tokens Used

See front-matter.

## Related

- `components/dropdown-menu/` — button-triggered counterpart

## Changelog

- **0.1.0** — Initial.

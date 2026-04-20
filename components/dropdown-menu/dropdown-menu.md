---
name: DropdownMenu
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
dependsOn: ['@radix-ui/react-dropdown-menu']
a11y:
  role: menu / menuitem
  keyboard: [Arrow, Enter, Esc, Type-ahead]
  focus: focus-visible ring on trigger; active item highlighted via Radix
  minHitTarget: 44px per item
---

# DropdownMenu

## Overview

Action menu triggered by a button. Radix handles arrow navigation, type-ahead, Esc dismiss, focus restoration. Use for toolbars, row-actions, user menus — NOT for selecting a form value (use Select).

## Anatomy

Root + Trigger → Portal → Content → Item(s) / Label / Separator / Group.

## Variants

None (Phase 5). Position via `side`/`align` on Content.

## States

closed / open. Per-item states: default / highlighted / disabled.

## Props

Radix DropdownMenu props. Content adds `sideOffset` (default 6).

## Usage

| ✅ Do                                            | ❌ Don't                              |
| ------------------------------------------------ | ------------------------------------- |
| Use for action menus (Edit / Delete / Duplicate) | Use for form enum values (use Select) |
| Keep items to one-line action labels             | Put paragraphs in menu items          |
| Use Separator to group related items             | Stack 15 flat items                   |

## Code Examples

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <IconButton aria-label="Row actions">
      <MoreIcon />
    </IconButton>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-text-destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Accessibility

- role="menu"/"menuitem" via Radix.
- Arrow keys traverse; Enter activates; Esc dismisses; focus restores to trigger.

## Tokens Used

See front-matter.

## Related

- `components/popover/` — non-menu overlay counterpart
- `components/select/` — form enumerated value

## Changelog

- **0.1.0** — Initial.

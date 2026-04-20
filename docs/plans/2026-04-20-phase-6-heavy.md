# Phase 6 — Heavy Components + Settings/Dashboard Patterns

Created: 2026-04-20
Author: yegamble@gmail.com
Status: PENDING
Approved: Yes
Iterations: 0
Worktree: No
Type: Feature

## Summary

Add the heavier components that require external library choices (DatePicker, Combobox, CommandPalette) plus two more Radix primitives (ContextMenu, NavigationMenu), Chip (selectable badge), and two composed patterns (Settings, Dashboard Header).

## Scope

### In Scope

**Components (6):**

- `DatePicker` — wraps `react-day-picker` v9
- `Combobox` — searchable single-select via `cmdk`
- `CommandPalette` — global ⌘K menu via `cmdk`
- `ContextMenu` — `@radix-ui/react-context-menu` (right-click menu)
- `NavigationMenu` — `@radix-ui/react-navigation-menu` (multi-level top nav with panels)
- `Chip` — selectable / removable Badge variant

**Patterns (2):**

- `Settings` — sectioned form layout (sidebar nav + scrollable content area + Card groupings)
- `Dashboard Header` — app-shell top bar with logo + nav + search + user menu

### Out of Scope

- DataTable (needs @tanstack/react-table; sort/filter/paginate is its own phase)
- Drawer/Sheet (variant of Dialog; add if needed)
- Calendar as standalone (bundled inside DatePicker)

## Progress Tracking

- [ ] Install libs (react-day-picker, cmdk, @radix-ui/react-context-menu, @radix-ui/react-navigation-menu)
- [ ] DatePicker
- [ ] Combobox
- [ ] CommandPalette
- [ ] ContextMenu
- [ ] NavigationMenu
- [ ] Chip
- [ ] Settings pattern
- [ ] Dashboard Header pattern

**Total Tasks:** 9 | **Completed:** 0 | **Remaining:** 9

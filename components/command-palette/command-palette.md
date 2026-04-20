---
name: CommandPalette
category: overlay
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.surface.elevated
  - color.text.primary
  - color.text.tertiary
  - color.border.subtle
  - color.separator.default
  - radius.sheet
  - radius.button
  - shadow.dialog
dependsOn: ['cmdk', 'Dialog', 'Kbd']
a11y:
  role: dialog + listbox (via cmdk)
  keyboard: [⌘K / Ctrl+K to open, Arrow, Enter, Esc]
  focus: focus-trapped by Dialog; autofocus on input
  minHitTarget: 44px per item
---

# CommandPalette

## Overview

Global ⌘K command menu. Modal Dialog shell + cmdk command primitive. Groups actions, supports keyboard shortcut display via Kbd, fuzzy search. Exported `useCommandPaletteShortcut` hook binds ⌘K/Ctrl+K to toggle.

## Anatomy

Dialog → DialogContent → Command (Input + List with CommandEmpty fallback + CommandGroup heading + CommandItem (label + optional shortcut Kbd row) + CommandSeparator between groups).

## Variants

None.

## States

closed / open / typing / empty-results / item-selected.

## Props

| name           | type                      | required | default                     |
| -------------- | ------------------------- | -------- | --------------------------- |
| `open`         | `boolean`                 | yes      | —                           |
| `onOpenChange` | `(open: boolean) => void` | yes      | —                           |
| `commands`     | `CommandPaletteCommand[]` | yes      | —                           |
| `placeholder`  | `string`                  | no       | `Type a command or search…` |

`CommandPaletteCommand = { id, label, group?, shortcut?: string[], onSelect: () => void }`

## Usage

| ✅ Do                                             | ❌ Don't                                            |
| ------------------------------------------------- | --------------------------------------------------- |
| Group commands (Navigation / Actions / Account)   | Flat list of 50 items                               |
| Show keyboard shortcuts for frequent actions      | Invent shortcut labels not in your app              |
| Keep command labels imperative ("Delete project") | Write descriptions ("You can delete projects here") |

## Code Examples

```tsx
const [open, setOpen] = useState(false);
useCommandPaletteShortcut(() => setOpen((o) => !o));

<CommandPalette
  open={open}
  onOpenChange={setOpen}
  commands={[
    {
      id: 'home',
      label: 'Go to Home',
      group: 'Navigate',
      shortcut: ['g', 'h'],
      onSelect: () => router.push('/'),
    },
    {
      id: 'new',
      label: 'New project',
      group: 'Actions',
      shortcut: ['⌘', 'N'],
      onSelect: () => createProject(),
    },
    { id: 'theme', label: 'Toggle theme', group: 'Account', onSelect: () => toggleTheme() },
  ]}
/>;
```

## Accessibility

- Dialog focus-traps while open; Esc dismisses.
- `label` prop on Command provides accessible name to cmdk.
- Shortcut Kbd chips read as "keyboard" to screen readers.

## Tokens Used

See front-matter.

## Related

- `components/combobox/` — inline searchable select (same cmdk primitive, different chrome)
- `components/kbd/` — shortcut display

## Changelog

- **0.1.0** — Initial (Command + Dialog + Kbd composition).

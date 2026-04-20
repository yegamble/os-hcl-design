---
name: Kbd
category: typography
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.secondary
  - color.border.subtle
  - color.text.primary
dependsOn: []
a11y:
  role: none
  keyboard: []
  focus: none (inert)
  minHitTarget: n/a
---

# Kbd

## Overview

Small presentational keyboard-key label. Native `<kbd>` element with a subtle bordered pill appearance. Use for shortcut hints, command menus, docs.

## Anatomy

Single `<kbd>`.

## Variants

None. Size via `className` if needed.

## States

Inert.

## Props

Extends `HTMLAttributes<HTMLElement>`.

## Usage

| ✅ Do                                                  | ❌ Don't                                  |
| ------------------------------------------------------ | ----------------------------------------- |
| Use `<Kbd>⌘</Kbd><Kbd>K</Kbd>` for multi-key shortcuts | Combine multiple keys into one Kbd ("⌘K") |
| Inline in instructional copy                           | Use as a clickable affordance             |

## Code Examples

```tsx
<p className="text-body">
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
</p>
```

## Accessibility

- `<kbd>` has implicit semantics for "keyboard input" — screen readers announce as "keyboard".
- No interactivity.

## Tokens Used

See front-matter.

## Related

None.

## Changelog

- **0.1.0** — Initial.

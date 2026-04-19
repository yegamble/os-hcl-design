---
name: Popover
category: overlay
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.border.subtle
  - color.text.primary
  - radius.card
  - shadow.popover
dependsOn: ['@radix-ui/react-popover']
a11y:
  role: dialog (non-modal)
  keyboard: [Tab, Esc]
  focus: first focusable element inside content
  minHitTarget: inherited from trigger
---

# Popover

## Overview

Non-modal overlay anchored to a trigger. Larger and more persistent than a Tooltip; can contain interactive elements. Radix Popover under the hood — handles positioning, focus, Esc to close.

## Anatomy

Root + Trigger → Portal → Content (with optional Anchor for independent positioning).

## Variants

Position via `side` / `align` on Content.

## States

closed / open. Open state dismisses on outside click or Esc.

## Props

Radix Popover props; Content adds `sideOffset` (default 8).

## Usage

| ✅ Do                                           | ❌ Don't                                             |
| ----------------------------------------------- | ---------------------------------------------------- |
| Use for a mini menu, inline form, or info panel | Use instead of a full Dialog for task-critical flows |
| Keep content focused and short                  | Nest large scrolling content inside a Popover        |

## Code Examples

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">More options</Button>
  </PopoverTrigger>
  <PopoverContent side="bottom" align="start">
    <h3 className="text-headline font-semibold">Quick actions</h3>
    <p className="text-text-secondary text-footnote mt-2">Select an action to continue.</p>
  </PopoverContent>
</Popover>
```

## Accessibility

- Radix provides focus trap (for the duration the popover is open), Esc dismiss, outside-click dismiss.
- Content has `role="dialog"` and `aria-modal="false"`.

## Tokens Used

See front-matter.

## Related

- `components/tooltip/` — for brief non-interactive hover hints
- `components/dialog/` — for modal, focus-trapping overlay

## Changelog

- **0.1.0** — Initial.

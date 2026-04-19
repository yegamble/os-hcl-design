---
name: Dialog
category: overlay
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.border.subtle
  - color.text.primary
  - radius.sheet
  - shadow.dialog
dependsOn: ['@radix-ui/react-dialog']
a11y:
  role: dialog (modal)
  keyboard: [Tab, Esc]
  focus: first focusable; focus-trapped
  minHitTarget: inherited
---

# Dialog

## Overview

Modal overlay — interrupts the user's flow until dismissed. Radix Dialog handles focus trap, scroll lock, aria attributes, Esc/outside-click dismiss. Always include a DialogTitle and DialogDescription for screen readers.

## Anatomy

Root + Trigger → Portal → Overlay + Content (with Title, Description, Close as children).

## Variants

None. Size via className on Content.

## States

closed / open. Focus is trapped while open.

## Props

Radix Dialog props forwarded.

## Usage

| ✅ Do                                                 | ❌ Don't                                     |
| ----------------------------------------------------- | -------------------------------------------- |
| Include DialogTitle and DialogDescription             | Omit Title (Radix will warn)                 |
| Offer a visible Close (X icon) and an explicit action | Require Esc as the only escape               |
| Reserve for blocking, task-critical flows             | Use a Dialog for "confirm newsletter signup" |

## Code Examples

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete project</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle className="text-title2 font-semibold">Delete project?</DialogTitle>
    <DialogDescription className="text-text-secondary mt-2">
      This action cannot be undone.
    </DialogDescription>
    <div className="mt-6 flex justify-end gap-3">
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </div>
  </DialogContent>
</Dialog>
```

## Accessibility

- Radix provides focus trap, scroll lock, aria-labelledby/describedby wiring.
- Esc dismisses; outside-click dismisses (configurable via onPointerDownOutside).

## Tokens Used

See front-matter.

## Related

- `components/popover/` — non-modal counterpart
- `components/toast/` — non-blocking notification

## Changelog

- **0.1.0** — Initial.

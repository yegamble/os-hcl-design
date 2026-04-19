---
name: Toast
category: feedback
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.surface.elevated
  - color.border.subtle
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.action.primary
  - radius.card
  - radius.button
  - shadow.toast
dependsOn: ['@radix-ui/react-toast']
a11y:
  role: status / alert
  keyboard: [F6, Esc]
  focus: viewport focusable; toast manages own dismiss
  minHitTarget: 44px (close button is 32px — below the strict floor; acceptable for ornament on an inherently non-touch surface)
---

# Toast

## Overview

Non-blocking feedback. Appears in the bottom-right viewport, auto-dismisses after a default duration, pauses on hover/focus. Wrap the app in `ToastProvider` + `ToastViewport` once; fire toasts from anywhere using controlled Radix Root props.

## Anatomy

ToastProvider (wraps app) → ToastViewport (fixed container) + Toast (one per notification) with optional Title, Description, Close.

## Variants

Visual intent is conveyed by icon + text — Phase 2 ships a single neutral visual. Success/Warning/Error styling deferred to Phase 3.

## States

open (entering / showing) / closed (exiting). Auto-pauses on pointer hover or keyboard focus.

## Props

Radix Toast Root + sub-component props.

## Usage

| ✅ Do                                                       | ❌ Don't                                    |
| ----------------------------------------------------------- | ------------------------------------------- |
| Use for transient confirmations ("Saved", "Undo available") | Put critical errors in a toast — use Dialog |
| Pair with a Close for longer messages                       | Make the only dismissal action Esc          |

## Code Examples

```tsx
<ToastProvider swipeDirection="right">
  <button onClick={() => setOpen(true)}>Save</button>
  <Toast open={open} onOpenChange={setOpen}>
    <div>
      <ToastTitle>Saved</ToastTitle>
      <ToastDescription>Your changes are synced.</ToastDescription>
    </div>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>
```

## Accessibility

- Role `status` (or `alert` for higher-urgency via `type="foreground"` prop).
- F6 focuses the viewport; subsequent Tab moves into toasts.
- Respects `prefers-reduced-motion` via the `motion-reduce:animate-none` utility.

## Tokens Used

See front-matter.

## Related

- `components/dialog/` — for blocking modal interactions

## Changelog

- **0.1.0** — Initial (neutral visual only; intent variants in Phase 3).

---
name: NotificationCenter
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.action.primary
  - color.action.destructive
  - color.action.destructive-fg
  - radius.pill
dependsOn:
  - Popover
  - Badge
  - Button
  - Separator
a11y:
  role: dialog (non-modal via Popover) + list
  keyboard: [Tab, Enter, Esc]
  focus: focus-visible ring on trigger + each notification button
  minHitTarget: 44px trigger + notification rows
---

# Notification Center

## Overview

Bell-icon trigger that opens a dropdown list of recent notifications. Shows an unread count badge, a "Mark all read" action, and supports empty-state messaging. Wraps Popover for positioning + focus management.

## Anatomy

Trigger Button (bell icon + unread-count badge) → Popover → header (title + Badge + "Mark all read") → Separator → scrollable list of notification buttons (unread dot + title + meta + body).

## Variants

None. Visual states per notification driven by `unread` boolean.

## States

- Trigger: default / hover / focus-visible
- Notification item: default / hover / unread (subtle bg tint + dot indicator)

## Props

| name            | type                   | required | description                                   |
| --------------- | ---------------------- | -------- | --------------------------------------------- |
| `items`         | `NotificationItem[]`   | yes      | `{ id, title, body?, meta?, unread?, icon? }` |
| `onMarkAllRead` | `() => void`           | no       | Shows the "Mark all read" button if set.      |
| `onSelect`      | `(id: string) => void` | no       | Per-item click handler.                       |
| `trigger`       | `ReactNode`            | yes      | Inner icon for the bell button.               |

## Usage

| ✅ Do                                                   | ❌ Don't                                |
| ------------------------------------------------------- | --------------------------------------- |
| Show at most ~20 recent notifications                   | Pipe the full history into the dropdown |
| Provide an "All notifications" link to a dedicated page | Force users to scroll 200 items here    |
| Mark read on open or on item select                     | Require manual "mark as read" per item  |

## Code Examples

```tsx
<NotificationCenter
  trigger={<BellIcon width="20" height="20" aria-hidden />}
  items={notifications}
  onMarkAllRead={() => markAllRead()}
  onSelect={(id) => open(id)}
/>
```

## Accessibility

- Trigger `aria-label` includes the unread count ("Notifications, 3 unread").
- Unread dot is `aria-hidden`; the "unread" meaning is communicated via a distinct label-free visual AND the count in the trigger label.
- Empty state is an `<li>` so screen readers announce under the list.

## Tokens Used

See front-matter.

## Related

- `components/popover/` — underlying positioning
- `components/toast/` — for ephemeral (non-center) notifications

## Changelog

- **0.1.0** — Initial.

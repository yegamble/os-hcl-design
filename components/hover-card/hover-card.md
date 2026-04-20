---
name: HoverCard
category: overlay
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.border.subtle
  - color.text.primary
  - radius.card
  - shadow.popover
dependsOn: ['@radix-ui/react-hover-card']
a11y:
  role: dialog (non-modal, hover-triggered)
  keyboard: [Tab, Esc]
  focus: shows on focus; dismisses on Esc
  minHitTarget: inherited from trigger
---

# HoverCard

## Overview

Rich hover preview for a trigger (avatar, link, badge). Larger than a Tooltip — can hold rich content (image, text, button). Shows on hover AND focus; touch users get the keyboard path. NEVER use for essential information.

## Anatomy

Root + Trigger → Portal → Content.

## Variants

None.

## States

closed / open. Radix handles hover intent + timeout.

## Props

Radix HoverCard props. Content adds `sideOffset` (default 8).

## Usage

| ✅ Do                                              | ❌ Don't                                                 |
| -------------------------------------------------- | -------------------------------------------------------- |
| Use for rich previews (author card on an @mention) | Use to hide essential content behind hover               |
| Keep content small and focused                     | Put critical actions that require touch-user access here |

## Code Examples

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/user/ada" className="text-text-link hover:underline">
      @ada
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-3">
      <Avatar alt="Ada Lovelace" />
      <div>
        <p className="text-body font-semibold">Ada Lovelace</p>
        <p className="text-text-secondary text-footnote">First programmer. Joined in 1843.</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

## Accessibility

- Shows on both hover AND focus.
- Touch users miss hover; ensure content is reachable by other means.

## Tokens Used

See front-matter.

## Related

- `components/tooltip/` — brief text hint counterpart
- `components/popover/` — click-triggered overlay counterpart

## Changelog

- **0.1.0** — Initial.

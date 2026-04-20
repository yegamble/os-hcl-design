---
name: ScrollArea
category: layout
status: stable
version: 0.1.0
tokensUsed:
  - color.border.strong
  - color.surface.elevated
  - radius.pill
  - motion.duration.ui
dependsOn: ['@radix-ui/react-scroll-area']
a11y:
  role: region
  keyboard: [Arrow, PageUp, PageDown, Home, End]
  focus: viewport is focusable for keyboard scroll
  minHitTarget: n/a (scrollbar is ornament)
---

# ScrollArea

## Overview

Custom-styled scrollbars via Radix ScrollArea. Thin pill-thumb overlays the content only during scroll/hover; native keyboard scrolling preserved. Use only when custom styling is genuinely needed — prefer native scroll elsewhere.

## Anatomy

Root + Viewport (scrollable content) + Scrollbar × 2 (vertical + horizontal) + Corner.

## Variants

None.

## States

idle / scrolling / hover-on-thumb.

## Props

Radix ScrollArea Root props. Set explicit height on Root for vertical scrolling.

## Usage

| ✅ Do                                           | ❌ Don't                                           |
| ----------------------------------------------- | -------------------------------------------------- |
| Use when you need custom scrollbar styling      | Wrap every scrollable area — native scroll is fine |
| Set an explicit `height` or `maxHeight` on Root | Expect auto-height to scroll                       |

## Code Examples

```tsx
<ScrollArea className="rounded-card border-border-subtle h-64 w-64 border">
  <div className="space-y-3 p-4">
    {items.map((i) => (
      <p key={i}>{i}</p>
    ))}
  </div>
</ScrollArea>
```

## Accessibility

- Native keyboard scrolling preserved (arrows, PageUp/Down).
- Scrollbar is ornamental; users can still use Tab to reach inner focusables.

## Tokens Used

See front-matter.

## Related

None.

## Changelog

- **0.1.0** — Initial.

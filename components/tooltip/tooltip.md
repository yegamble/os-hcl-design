---
name: Tooltip
category: overlay
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.surface.default
  - radius.button
  - shadow.popover
dependsOn: ['@radix-ui/react-tooltip']
a11y:
  role: tooltip
  keyboard: [Tab, Esc]
  focus: shows on focus and hover
  minHitTarget: n/a (ornament on trigger)
---

# Tooltip

## Overview

Accessible tooltip via Radix. Inverts color (text-primary background / surface-default text) for contrast; shows on hover AND focus; dismisses on Esc. Wrap your app in `TooltipProvider` once; use `Tooltip` + `TooltipTrigger` + `TooltipContent` locally.

## Anatomy

Provider → Root → Trigger (the hovered/focused element) → Portal → Content.

## Variants

Position via Radix `side` + `align` props on Content.

## States

closed / delayed-open / open. Radix handles the delay + hover-intent.

## Props

Trigger + Content forward Radix props. Content adds `sideOffset` (default 6).

## Usage

| ✅ Do                                                        | ❌ Don't                                         |
| ------------------------------------------------------------ | ------------------------------------------------ |
| Use for supplementary info, never for required content       | Use as primary labels (visible text is required) |
| Keep tooltip text short (≤ 6 words)                          | Put paragraphs in tooltips                       |
| Touch users can't hover — make the info accessible elsewhere | Hide critical info in tooltip-only               |

## Code Examples

```tsx
<TooltipProvider delayDuration={200}>
  <Tooltip>
    <TooltipTrigger asChild>
      <IconButton aria-label="Favorite">
        <Star />
      </IconButton>
    </TooltipTrigger>
    <TooltipContent side="top">Add to favorites</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Accessibility

- Radix handles `aria-describedby` wiring and Esc dismissal.
- Appears on both hover and keyboard focus.

## Tokens Used

See front-matter.

## Related

- `components/popover/` — for larger persistent content

## Changelog

- **0.1.0** — Initial.

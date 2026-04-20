---
name: Slider
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.surface.raised
  - color.action.primary
  - color.surface.default
  - radius.pill
  - motion.duration.ui
dependsOn: ['@radix-ui/react-slider']
a11y:
  role: slider
  keyboard: [Arrow, Home, End, PageUp, PageDown]
  focus: focus-visible ring on thumb
  minHitTarget: 44px (track area)
---

# Slider

## Overview

Continuous or stepped range input. Radix Slider handles keyboard navigation, ARIA valuenow/min/max, roving tabindex for multi-thumb. Track height 6 px, thumb 20 px; the 44 px tall row gives a generous hit area.

## Anatomy

Root + Track (with Range fill) + Thumb (one or more for a range).

## Variants

None (Phase 5). Use `min`/`max`/`step` props for behavior.

## States

default / hover / focus-visible / disabled.

## Props

Radix Slider props: `value`, `onValueChange`, `defaultValue`, `min`, `max`, `step`, `disabled`.

## Usage

| ✅ Do                                             | ❌ Don't                                        |
| ------------------------------------------------- | ----------------------------------------------- |
| Use for fuzzy continuous values (volume, opacity) | Use for enumerated choices (use Select / Radio) |
| Provide `aria-label` or visible label             | Rely on the generic thumb label                 |
| Use step ≥ 1 for integer values                   | Expose 0.001 steps to users                     |

## Code Examples

```tsx
<label className="flex flex-col gap-2">
  <span className="text-subheadline text-text-secondary">Volume</span>
  <Slider defaultValue={[50]} min={0} max={100} step={1} aria-label="Volume" />
</label>
```

## Accessibility

- Arrow keys: step by `step`; Home/End: min/max; PageUp/PageDown: larger step.
- Each Thumb gets its own `role="slider"` with `aria-valuenow/min/max`.

## Tokens Used

See front-matter.

## Related

- `components/progress/` — non-interactive counterpart

## Changelog

- **0.1.0** — Initial.

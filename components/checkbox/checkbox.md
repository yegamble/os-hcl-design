---
name: Checkbox
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.border.default
  - color.action.primary
  - color.action.primary-fg
  - motion.duration.ui
dependsOn: ['@radix-ui/react-checkbox']
a11y:
  role: checkbox
  keyboard: [Space]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px (consumer must wrap with label for 44 target)
---

# Checkbox

## Overview

Accessible checkbox wrapping Radix Checkbox. 24 × 24 px box; pair with a 44-px-tall label for the full hit target.

## Anatomy

Root (`<button role="checkbox">` via Radix) + Indicator (checkmark SVG).

## Variants

None (Phase 2).

## States

unchecked / checked / indeterminate / disabled / focus-visible.

## Props

Forwards Radix Checkbox Root props (`checked`, `onCheckedChange`, `disabled`, `required`, `name`, `value`).

## Usage

| ✅ Do                                                           | ❌ Don't                                   |
| --------------------------------------------------------------- | ------------------------------------------ |
| Wrap with a `<label>` containing a 44-px hit area               | Use a naked 24-px checkbox with no label   |
| Use `indeterminate` via `checked="indeterminate"` for tri-state | Use a separate component for indeterminate |

## Code Examples

```tsx
<label className="flex cursor-pointer items-center gap-3 py-3">
  <Checkbox id="agree" />
  <span className="text-body text-text-primary">I agree to the terms</span>
</label>
```

## Accessibility

- Radix provides full WAI-ARIA checkbox semantics.
- Space toggles; arrow navigation via RadioGroup when grouped.
- Contrast: action-primary on surface-default meets WCAG AA at AA+ (5:1 light / 7:1 dark).

## Tokens Used

See front-matter.

## Related

- `components/radio/` — mutually exclusive counterpart
- `components/switch/` — binary toggle with on/off semantics

## Changelog

- **0.1.0** — Initial.

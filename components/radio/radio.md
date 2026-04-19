---
name: Radio
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.border.default
  - color.action.primary
  - radius.pill
  - motion.duration.ui
dependsOn: ['@radix-ui/react-radio-group']
a11y:
  role: radiogroup / radio
  keyboard: [Arrow, Space]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px (via label wrap)
---

# Radio

## Overview

Mutually-exclusive selection within a RadioGroup. Wrap `<Radio>` elements inside `<RadioGroup>`; both come from the same Radix radio-group primitive.

## Anatomy

RadioGroup (`role="radiogroup"`) + Radio items (each a Radix RadioGroup.Item with an Indicator dot).

## Variants

None.

## States

unselected / selected / disabled / focus-visible. Selected state shown via the inner dot Indicator.

## Props

`RadioGroup` forwards `value`, `onValueChange`, `defaultValue`, `disabled`, `name`, `required`. `Radio` forwards `value`, `disabled`.

## Usage

| ✅ Do                                     | ❌ Don't                                   |
| ----------------------------------------- | ------------------------------------------ |
| Always wrap Radio items in RadioGroup     | Use bare `<input type="radio">`            |
| Provide labels with click targets ≥ 44 px | Make the 24-px Radio the only click target |

## Code Examples

```tsx
<RadioGroup defaultValue="monthly">
  <label className="flex cursor-pointer items-center gap-3 py-3">
    <Radio value="monthly" />
    <span>Monthly</span>
  </label>
  <label className="flex cursor-pointer items-center gap-3 py-3">
    <Radio value="annual" />
    <span>Annual (save 20%)</span>
  </label>
</RadioGroup>
```

## Accessibility

- Roving tabindex managed by Radix — only the selected (or first) radio is in the tab sequence; arrow keys move between options.
- Space activates.

## Tokens Used

See front-matter.

## Related

- `components/checkbox/` — multi-select counterpart

## Changelog

- **0.1.0** — Initial.

---
name: Select
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.surface.raised
  - color.surface.elevated
  - color.text.primary
  - color.border.default
  - color.border.subtle
  - color.action.primary
  - radius.button
  - radius.card
  - shadow.popover
dependsOn: ['@radix-ui/react-select']
a11y:
  role: combobox / listbox / option
  keyboard: [Space, Enter, Arrow, Home, End, Type-ahead]
  focus: focus-visible ring on trigger
  minHitTarget: 44px (trigger + each option)
---

# Select

## Overview

Accessible single-select dropdown via Radix Select. Portal-based content, type-ahead support, full keyboard navigation. Use for enumerated values where the user picks exactly one.

## Anatomy

Select (Root) + SelectTrigger (+ SelectValue + chevron icon) → SelectContent (portal) → SelectViewport → SelectItem(s).

## Variants

None (Phase 2).

## States

closed / open / focus-visible / disabled. Per-item states: default / highlighted / checked.

## Props

Radix Select props: `value`, `onValueChange`, `defaultValue`, `disabled`, `name`.

## Usage

| ✅ Do                                             | ❌ Don't                                                             |
| ------------------------------------------------- | -------------------------------------------------------------------- |
| Use for enumerated values (country, plan, status) | Use for free-text — use Input                                        |
| Provide a sensible default                        | Leave the default empty when one option is obviously the likely pick |
| Wrap with a label                                 | Rely on placeholder as label                                         |

## Code Examples

```tsx
<label className="flex flex-col gap-2">
  <span className="text-subheadline text-text-secondary">Plan</span>
  <Select defaultValue="pro">
    <SelectTrigger>
      <SelectValue placeholder="Select a plan" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="free">Free</SelectItem>
      <SelectItem value="pro">Pro</SelectItem>
      <SelectItem value="team">Team</SelectItem>
    </SelectContent>
  </Select>
</label>
```

## Accessibility

- Radix Select provides full WAI-ARIA combobox / listbox semantics.
- Type-ahead: typing a letter jumps to the first option starting with that letter.

## Tokens Used

See front-matter.

## Related

- `components/input/` — free-text counterpart
- `components/radio/` — when all options should be visible

## Changelog

- **0.1.0** — Initial.

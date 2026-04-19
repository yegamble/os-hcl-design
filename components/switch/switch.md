---
name: Switch
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.border.default
  - color.action.primary
  - color.action.primary-fg
  - radius.pill
  - motion.duration.ui
dependsOn: ['@radix-ui/react-switch']
a11y:
  role: switch
  keyboard: [Space, Enter]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px (via label wrap)
---

# Switch

## Overview

Binary on/off toggle. Prefer over Checkbox when the control reads as "enable/disable" rather than "mark as complete/selected". Radix Switch under the hood.

## Anatomy

Root pill + Thumb circle that translates on state change.

## Variants

None.

## States

off / on / disabled / focus-visible.

## Props

Forwards Radix Switch Root props (`checked`, `onCheckedChange`, `disabled`, `required`, `name`, `value`).

## Usage

| ✅ Do                                        | ❌ Don't                                         |
| -------------------------------------------- | ------------------------------------------------ |
| Use for "Enable notifications" style toggles | Use for form submission agreement (use Checkbox) |
| Wrap with label for hit target               | Use raw Switch without label                     |

## Code Examples

```tsx
<label className="flex cursor-pointer items-center justify-between py-3">
  <span className="text-body text-text-primary">Enable notifications</span>
  <Switch name="notifications" defaultChecked />
</label>
```

## Accessibility

- Role switch via Radix; space/enter toggle.
- Focus ring on Root; thumb does not receive focus.

## Tokens Used

See front-matter.

## Related

- `components/checkbox/` — form-selection counterpart

## Changelog

- **0.1.0** — Initial.

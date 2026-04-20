---
name: Stepper
category: navigation
status: stable
version: 0.1.0
tokensUsed:
  - color.action.primary
  - color.action.primary-fg
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.border.default
  - color.border.subtle
  - radius.pill
dependsOn: []
a11y:
  role: list
  keyboard: []
  focus: none (inert indicator)
  minHitTarget: n/a
---

# Stepper

## Overview

Ordered progress indicator. `<ol>` with one `<li>` per step; current step gets `aria-current="step"`. Three visual states: complete (check), current (ring), upcoming (outline). Horizontal or vertical orientation.

## Anatomy

`<ol>` + `<li>` per step. Each item: circle (number or check) + connector line + label/description.

## Variants

- `orientation`: `horizontal` (default, balanced columns) / `vertical` (stacked list)

## States

- `complete` — checked circle, primary fill
- `current` — outlined primary circle (aria-current="step")
- `upcoming` — outlined neutral circle, tertiary text

## Props

| name          | type                            | required | default      | description            |
| ------------- | ------------------------------- | -------- | ------------ | ---------------------- |
| `steps`       | `{ id, label, description? }[]` | yes      | —            | Step definitions.      |
| `current`     | `number`                        | yes      | —            | 0-indexed active step. |
| `orientation` | `'horizontal' \| 'vertical'`    | no       | `horizontal` | Layout axis.           |
| `aria-label`  | `string`                        | no       | `Steps`      | Accessible name.       |

## Usage

| ✅ Do                               | ❌ Don't                                       |
| ----------------------------------- | ---------------------------------------------- |
| Use for 3-6 step wizards            | Use for 10+ steps (use a progress bar instead) |
| Keep labels to 1-3 words            | Put sentences in step labels                   |
| Update `current` as user progresses | Leave the stepper at step 0 forever            |

## Code Examples

```tsx
<Stepper
  current={2}
  steps={[
    { id: 'account', label: 'Account', description: 'Email + password' },
    { id: 'profile', label: 'Profile', description: 'Name + photo' },
    { id: 'plan', label: 'Choose plan' },
    { id: 'done', label: 'Done' },
  ]}
/>
```

## Accessibility

- `<ol aria-label="Steps">` landmark; each step's `aria-current="step"` when active.
- Connector lines and the number/check are `aria-hidden` — label + state are the semantic content.

## Tokens Used

See front-matter.

## Related

- `components/progress/` — for non-stepped continuous progress

## Changelog

- **0.1.0** — Initial.

---
name: Textarea
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.text.primary
  - color.text.tertiary
  - color.border.default
  - color.action.primary
  - color.action.destructive
  - radius.button
dependsOn: []
a11y:
  role: textbox
  keyboard: [Tab, Type]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: n/a
---

# Textarea

## Overview

Multi-line text input. Native `<textarea>` wrapped with the same utility set as Input. User-resizable vertically (`resize-y`); minimum height 112 px (`min-h-28`).

## Anatomy

Single `<textarea>`.

## Variants

None — size via CSS rows or `min-h-*` utility.

## States

default / focus-visible / disabled / invalid (`aria-invalid="true"`).

## Props

Extends `TextareaHTMLAttributes<HTMLTextAreaElement>`.

## Usage

| ✅ Do                                            | ❌ Don't                                         |
| ------------------------------------------------ | ------------------------------------------------ |
| Wrap with `<label>`                              | Rely on placeholder as label                     |
| Set `rows` or `min-h-*` based on expected length | Start huge (8 rows) for a 20-char expected value |

## Code Examples

```tsx
<label className="flex flex-col gap-2">
  <span className="text-subheadline">Feedback</span>
  <Textarea name="feedback" placeholder="Tell us more…" rows={5} />
</label>
```

## Accessibility

- `<label>` required. `aria-invalid="true"` for error state.
- Vertical resize is user-controlled; horizontal is locked (prevents runaway width).

## Tokens Used

See front-matter.

## Related

- `components/input/` — single-line equivalent

## Changelog

- **0.1.0** — Initial.

---
name: Button
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.action.primary
  - color.action.primary-hover
  - color.action.primary-active
  - color.action.primary-fg
  - color.action.destructive
  - color.action.destructive-hover
  - color.action.destructive-fg
  - color.surface.elevated
  - color.surface.default
  - color.text.primary
  - color.text.quaternary
  - color.border.subtle
  - color.border.default
  - radius.button
  - motion.duration.ui
dependsOn: []
a11y:
  role: button
  keyboard: [Enter, Space]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px
---

# Button

## Overview

The canonical interactive primitive. Four intents (primary, secondary, ghost, destructive) and three sizes (sm, md, lg). Every size enforces a 44 × 44 px minimum hit target. Wraps the native `<button>` element — no primitive library involved at this layer, which keeps behavior (keyboard activation, form submission semantics) entirely to the browser. Use when the user needs to commit to an action. Use a link (`<a>`) instead when the user navigates.

## Anatomy

Single element. Optional leading icon (via children) renders before the label. `gap-2` between icon and text.

## Variants

- **primary** — the one primary action per viewport. Blue accent background. Reserved — don't stack two.
- **secondary** — neutral-bordered, lower visual weight. Good for secondary actions alongside a primary.
- **ghost** — text-only, highest deference. Use for tertiary actions in a toolbar or inline within text.
- **destructive** — red-accent, reserved for destructive actions (delete, remove, archive). Never as a primary on a landing page.

## States

- default / hover / active — drive the bg-\* token chain (primary → primary-hover → primary-active for `variant="primary"`)
- disabled — reduced opacity + neutral bg; `disabled` attribute blocks activation
- focus-visible — 2px ring in `action-primary`, 2px offset (keyboard only; mouse focus stays silent via `:focus:not(:focus-visible)`)

## Props

| name        | type                                                   | required | default     | description                                                                                         |
| ----------- | ------------------------------------------------------ | -------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'ghost' \| 'destructive'` | no       | `'primary'` | Visual intent.                                                                                      |
| `size`      | `'sm' \| 'md' \| 'lg'`                                 | no       | `'md'`      | Controls font-size + horizontal padding; all sizes enforce min-h-11.                                |
| `type`      | `'button' \| 'submit' \| 'reset'`                      | no       | `'button'`  | Forwarded to the underlying `<button>`. Defaults to `'button'` to avoid accidental form submission. |
| `className` | `string`                                               | no       | —           | Merged via `tailwind-merge`; later values win on conflict.                                          |
| `disabled`  | `boolean`                                              | no       | `false`     | Disables activation and applies disabled-state utilities.                                           |
| …rest       | `React.ButtonHTMLAttributes<HTMLButtonElement>`        | no       | —           | Forwarded to the native `<button>`.                                                                 |

## Usage

| ✅ Do                                                | ❌ Don't                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| Use **one** `primary` per viewport                   | Stack two primary buttons side-by-side                            |
| `secondary` alongside `primary` for a paired action  | Use `ghost` as the call-to-action on a landing page (underweight) |
| `destructive` only for destructive actions           | Use `destructive` as a positive CTA because "it stands out"       |
| Forward an `aria-label` when the button is icon-only | Render an icon-only button with no accessible name                |
| Let the `min-h-11` token guarantee touch target      | Add `h-8` or `min-h-0` overrides                                  |

## Code Examples

```tsx
// Primary — the one main action
<Button>Sign in</Button>

// Primary with loading state (consumer-side spinner)
<Button disabled>
  <Spinner size="sm" />
  Signing in…
</Button>

// Secondary + primary as a paired action
<div className="flex gap-3">
  <Button variant="secondary">Cancel</Button>
  <Button>Confirm</Button>
</div>

// Destructive with icon prefix
<Button variant="destructive">
  <TrashIcon aria-hidden />
  Delete project
</Button>

// Icon-only with required aria-label
<Button variant="ghost" size="sm" aria-label="Close">
  <XIcon aria-hidden />
</Button>
```

## Accessibility

- `role="button"` native to `<button>`; no manual ARIA role.
- Activates on Enter and Space — native browser behavior.
- Focus-visible ring: 2 px, `color.action.primary`, 2 px offset, 3 : 1 contrast against `color.surface.default` and ≥ 3 : 1 against every non-primary variant background.
- Disabled state sets `disabled` attribute — screen readers announce, focus is skipped.
- Icon-only usage (no text children) REQUIRES an `aria-label`; this is a convention (not enforced at the type level in Phase 1).
- Hit target ≥ 44 × 44 px at every size via `min-h-11` and adequate horizontal padding.
- Contrast: white text on `action.primary` (blue.500) = 5.0 : 1 light, 7.3 : 1 dark, passes AA.

## Tokens Used

See the `tokensUsed` front-matter.

## Related

- `components/card/` — sibling display primitive
- `patterns/hero-feature-grid/` — composes Button as the hero CTA
- `foundations/color.md` — accent discipline (one primary per viewport)
- `foundations/accessibility.md` — the 44 px rule, focus-visible

## Changelog

- **0.1.0** — Initial (Phase 1). Four variants × three sizes; `tailwind-variants` implementation; min-h-11 at every size.

---
title: Color
category: foundation
status: stable
tokensReferenced:
  - color.text.primary
  - color.text.secondary
  - color.surface.default
  - color.surface.elevated
  - color.action.primary
  - color.accent
  - color.border.subtle
  - color.separator.default
---

# Color

## Overview

Semantic-first. Components and patterns reference **roles** (`color.text.primary`, `color.action.primary`, `color.surface.elevated`), never primitives (`color.gray.950`). Light and dark modes swap at the semantic layer — each semantic token declares a default value plus `$extensions.modes.dark.$value` and `$extensions.modes.high-contrast.$value` overrides. CSS variables are emitted in three scoped blocks (`:root`, `[data-theme="dark"]`, `[data-contrast="more"]`).

Color is for meaning, not decoration. One accent per page or section. Long stretches of neutral.

## Rules

### Semantic roles (consume these, not primitives)

**Text.** Six roles, three-level opacity hierarchy:

| Token                    | Role                                            |
| ------------------------ | ----------------------------------------------- |
| `color.text.primary`     | Headlines, primary body text — highest contrast |
| `color.text.secondary`   | Supporting body text, subtitles                 |
| `color.text.tertiary`    | Metadata, captions                              |
| `color.text.quaternary`  | Disabled, placeholders                          |
| `color.text.inverse`     | Text on primary-colored backgrounds             |
| `color.text.link`        | Links (blue)                                    |
| `color.text.destructive` | Destructive actions only                        |

**Surface.** Background layers, progressively lighter/darker as they elevate:

| Token                    | Role                                         |
| ------------------------ | -------------------------------------------- |
| `color.surface.default`  | Page background                              |
| `color.surface.elevated` | Slightly elevated (secondary panel, sidebar) |
| `color.surface.raised`   | Card backgrounds                             |
| `color.surface.opaque`   | Solid fallback for glass/material surfaces   |

**Separator / border.** Low-saturation hairlines:

| Token                     | Role                                        |
| ------------------------- | ------------------------------------------- |
| `color.separator.default` | Thin hairlines between list rows, tabs      |
| `color.separator.opaque`  | Solid separator when surface is translucent |
| `color.border.subtle`     | Card border                                 |
| `color.border.default`    | Form input border                           |
| `color.border.strong`     | Input border on focus                       |

**Action.** The one blue-family accent that drives interactive affordance:

| Token                            | Role                                                 |
| -------------------------------- | ---------------------------------------------------- |
| `color.action.primary`           | Primary CTA background (blue.500 / blue.400 in dark) |
| `color.action.primary-hover`     | CTA hover                                            |
| `color.action.primary-active`    | CTA pressed                                          |
| `color.action.primary-fg`        | CTA text (always white)                              |
| `color.action.destructive`       | Destructive button background                        |
| `color.action.destructive-hover` | Destructive hover                                    |
| `color.action.destructive-fg`    | Destructive button text (white)                      |

**Accent.** A single tint for the page:

| Token          | Role                                            |
| -------------- | ----------------------------------------------- |
| `color.accent` | The one accent color (usually `action.primary`) |

### Mode handling

Tokens declare a default value (light) and optional `$extensions.modes.dark.$value` / `$extensions.modes.high-contrast.$value`. `build-tokens.mjs` emits:

- `:root { … }` with light values (default)
- `[data-theme="light"] { … }` (same as root, explicit)
- `[data-theme="dark"] { … }` with dark overrides
- `[data-contrast="more"] { … }` with high-contrast overrides

Dark mode is applied by setting `data-theme="dark"` on `<html>`. **Never** use Tailwind `dark:` prefixes in component code — the token layer handles it.

### Accent discipline

- One accent per page. If the page has multiple sections with different dominant imagery, each section may re-tint based on that imagery — but within a section, the accent is singular.
- Default accent is `color.accent` → blue.500.
- A consumer project can override `color.accent` via a project-specific CSS layer: `:root { --color-accent: var(--color-purple-500); }`. Components that reference `color.accent` pick up the override automatically.

### Contrast requirements

WCAG 2.1 AA minimums:

- 4.5 : 1 for body text (against its surface)
- 3 : 1 for large text (title1+) and UI components (borders, focus rings)

`scripts/check-token-contrast.mjs` enumerates every `color.text.*` × `color.surface.*` pair in every mode and fails CI on violation. The Phase 1 token set was engineered to satisfy this — if you propose adjusting a token value, run `pnpm run check:token-contrast` before committing.

### Color independence

Never use color alone to convey state. Pair color with:

- An icon (check / x / alert triangle)
- Text label ("Error", "Success")
- Shape change (button outline vs filled)

## Tokens

Full list: [`tokens/semantic.tokens.json`](../tokens/semantic.tokens.json). Primitives: [`tokens/primitive.tokens.json`](../tokens/primitive.tokens.json).

## Do / Don't

| ✅ Do                                                                               | ❌ Don't                                                                                      |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `className="bg-surface-default text-text-primary"`                                  | `className="bg-white text-black"` (raw) or `className="bg-gray-50 text-gray-950"` (primitive) |
| Use `color.action.primary` for the one CTA                                          | Apply the accent to 5 headlines and the border                                                |
| Rely on dark-mode token swap via `[data-theme="dark"]`                              | `className="bg-white dark:bg-gray-950"`                                                       |
| Pair color with icon or label for state communication                               | Use red text alone to mean "error"                                                            |
| Run `check:token-contrast` before adjusting a semantic token's underlying primitive | Eyeball contrast                                                                              |

## Related

- [`principles.md`](./principles.md) — restraint-on-color and one-accent-per-section
- [`materials.md`](./materials.md) — glass surface tokens and their solid fallbacks
- [`accessibility.md`](./accessibility.md) — WCAG contrast and color-independence

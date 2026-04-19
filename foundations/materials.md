---
title: Materials
category: foundation
status: stable
tokensReferenced:
  - material.thin.backdropFilter
  - material.regular.backdropFilter
  - material.thick.backdropFilter
  - material.regular.fallbackColor
  - color.surface.opaque
---

# Materials

## Overview

Liquid Glass (Apple, 2025) is a translucent, refractive material that surfaces behave like real glass. Web can't replicate GPU-shader refraction natively, but we can approximate with `backdrop-filter: blur() saturate()` + a color-mixed tint. Three tiers (thin / regular / thick) cover sticky nav, floating chrome, modal overlays, and full sheets.

**The critical rule:** every glass tier ships a **solid fallback token**, and every glass surface honors `prefers-reduced-transparency: reduce`. Apple themselves walked back opacity post-beta because translucent chrome over bright content broke legibility. We won't repeat the mistake — the fallback isn't belt-and-suspenders, it's part of the design.

## Rules

### Tiers

| Tier    | Utility class   | Backdrop filter             | Typical use                                  |
| ------- | --------------- | --------------------------- | -------------------------------------------- |
| thin    | `glass-thin`    | `blur(8px) saturate(150%)`  | Sticky nav with light-weight content behind  |
| regular | `glass-regular` | `blur(24px) saturate(180%)` | Sticky nav, floating toolbars, popovers      |
| thick   | `glass-thick`   | `blur(40px) saturate(200%)` | Modals, sheets, dialogs over complex content |

Background tint comes from `color-mix(in oklab, var(--color-surface-opaque) X%, transparent)` — higher opacity for thicker tiers (thin=70%, regular=65%, thick=80%).

### The fallback contract

Every `glass-*` utility declares `background-color` as a semi-transparent `color-mix`. But two conditions swap it to solid `var(--material-regular-fallbackColor)`:

1. **Media query:** `@media (prefers-reduced-transparency: reduce)` — honors user preference natively. Safari 17.4+, Firefox 113+.
2. **Attribute:** `[data-reduced-transparency="reduce"]` — the Storybook toolbar toggles this so we can preview the fallback without changing UA preferences.

Both swap `backdrop-filter` to `none` as well.

### When to use glass vs solid

| Situation                                        | Use                               |
| ------------------------------------------------ | --------------------------------- |
| Sticky nav over a content-rich page              | `glass-regular`                   |
| Sticky CTA strip above a photo                   | `glass-thick`                     |
| Popover with no content behind                   | Solid — no glass                  |
| Toast notification                               | `glass-regular`                   |
| Modal / dialog overlay                           | `glass-thick`                     |
| Toolbar that MUST stay legible in all conditions | Solid with `color.surface.raised` |

If you can't guarantee legibility at the worst-case contrast on the worst-case background, pick solid. Glass is an enhancement, not a requirement.

### Additional legibility guards

- Never layer glass over glass. Pick one tier for a given surface.
- If the content behind is video or highly saturated imagery, use `glass-thick` and consider adding a `box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05)` for a subtle edge.
- Glass sitting on top of text — no. Glass sits on top of neutral content, imagery, or space.
- Focus rings must remain visible through glass. Pick a focus-ring color with ≥3:1 contrast against the worst-case glass tint.

### Motion on glass

When glass sits above scrolling content, the `backdrop-filter` re-composites on every frame. This is expensive on mid-tier mobile. For full-page scroll-driven pinned sections, either:

- Turn the nav to solid during pin (`aria-current` + utility swap), or
- Accept the cost and measure performance.

## Tokens

- `material.{thin,regular,thick}.backdropFilter` — filter-string tokens
- `material.{thin,regular,thick}.fallbackColor` — semantic reference to `color.surface.opaque`

See [`tokens/semantic.tokens.json`](../tokens/semantic.tokens.json) → `material.*`.

## Do / Don't

| ✅ Do                                                                              | ❌ Don't                                                                |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `className="glass-regular sticky-nav-blur"` on a sticky nav                        | Hand-roll `backdrop-filter: blur(20px)` in a component CSS file         |
| Ship solid fallback automatically via the utility's media query + attribute        | Add `@media (prefers-reduced-transparency)` manually in every component |
| Test at `prefers-reduced-transparency: reduce` in Storybook toolbar before merging | Assume glass looks fine without ever testing the fallback               |
| Use `glass-thick` for modals over photography                                      | Use `glass-thin` where legibility is in doubt                           |
| Solid nav during full-page pinned scrolling                                        | Leave glass on during expensive pinned transitions                      |

## Related

- [`principles.md`](./principles.md) — deference and depth
- [`color.md`](./color.md) — `color.surface.opaque` is the single fallback color
- [`accessibility.md`](./accessibility.md) — `prefers-reduced-transparency` is a user preference
- [`motion.md`](./motion.md) — glass composites every frame during scroll-driven motion

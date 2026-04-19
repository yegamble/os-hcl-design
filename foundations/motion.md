---
title: Motion
category: foundation
status: stable
tokensReferenced:
  - motion.duration.ui
  - motion.duration.hero-short
  - motion.duration.hero-long
  - motion.ease.standard
  - motion.ease.spring-soft
  - motion.ease.spring-firm
---

# Motion

## Overview

Motion conveys cause and effect. Every transition either reveals what happened, gives feedback, or tells a story. Decoration-only motion is rare in Apple's system — and in ours.

Durations favor 250 ms for UI, 500–1000 ms for hero and scroll-driven narrative. Spring easings are preferred over cubic-beziers for interactive motion. **Every animated utility honors `prefers-reduced-motion: reduce`** — this is non-negotiable and is enforced both globally in `styles/reset.css` and per-utility where applicable.

## Rules

### Duration tokens

| Token                        | Value   | Use                                                           |
| ---------------------------- | ------- | ------------------------------------------------------------- |
| `motion.duration.ui`         | 250 ms  | Button hover, focus, dropdown open/close, most UI transitions |
| `motion.duration.hero-short` | 500 ms  | Sheet present/dismiss, tab slide, card flip                   |
| `motion.duration.hero-long`  | 1000 ms | Pinned hero scroll reveal, full-section crossfade             |

Instant (0 ms) is available as `motion.duration.instant` for reset.

### Easing tokens

| Token                     | Cubic-bezier     | Use                                                                        |
| ------------------------- | ---------------- | -------------------------------------------------------------------------- |
| `motion.ease.standard`    | 0.4, 0, 0.2, 1   | Default material easing — good for most UI transitions                     |
| `motion.ease.spring-soft` | 0.32, 0.72, 0, 1 | Apple-ish soft spring — preferred for sheet/card present/dismiss           |
| `motion.ease.spring-firm` | 0.22, 1, 0.36, 1 | Firmer spring with slight overshoot — use for attention-grabbing entrances |

For genuine spring physics (not keyframed cubic-beziers), prefer Framer Motion's `spring` with `stiffness: 300, damping: 30` — declared inline in components that actually need it.

### Reduced-motion contract

`styles/reset.css` applies:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is a floor, not a full contract. Every parallax, scale-reveal, or translate-based animation must have an **equivalent opacity-only fallback** for reduced-motion users. Use the Tailwind `motion-reduce:` variant:

```tsx
<div className="transition-transform duration-ui motion-reduce:transition-opacity motion-reduce:duration-0">
```

The Storybook toolbar's `Reduced Motion` global toggles `[data-reduced-motion="reduce"]` on `<html>` — the `styles/reset.css` media query doesn't trigger on toolbar-only toggling, so your component utilities that depend on this attribute (rare) must match the selector variant.

### Scroll-driven patterns

- Use `IntersectionObserver` (preferred) or CSS `scroll-timeline` (progressive-enhancement only) for pinned hero reveals.
- Pin for one narrative beat at a time — don't chain five animations to a single scroll.
- All pinned sections must have a reduced-motion fallback that replaces translate/scale with opacity crossfades.

### Apple-specific patterns

- **Objects enter, settle, yield.** Nothing bounces gratuitously.
- **Motion explains cause-and-effect.** Tap here → this appears from there.
- **Motion has weight.** Large elements take longer; small ones are brisk.

## Tokens

[`tokens/primitive.tokens.json`](../tokens/primitive.tokens.json) → `duration.*`, `ease.*`. [`tokens/semantic.tokens.json`](../tokens/semantic.tokens.json) → `motion.*`.

## Do / Don't

| ✅ Do                                                | ❌ Don't                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| `transition-duration: var(--motion-duration-ui)`     | `transition-duration: 250ms` (raw)                                |
| Spring easing for sheets/cards                       | Linear timing for anything but pure opacity                       |
| `motion-reduce:transition-none` on hover transitions | Forget `motion-reduce:` and break users who asked for less motion |
| Opacity-only fallback for reduced-motion parallax    | Ship parallax with no fallback                                    |
| One motion beat per scroll interaction               | Chain 5 animations to one scroll                                  |

## Related

- [`principles.md`](./principles.md) — motion-with-intent rule
- [`accessibility.md`](./accessibility.md) — `prefers-reduced-motion` is a user preference, not optional
- [`materials.md`](./materials.md) — liquid-glass material adapts fluidly; motion enables that

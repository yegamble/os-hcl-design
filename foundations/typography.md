---
title: Typography
category: foundation
status: stable
tokensReferenced:
  - type.family.sans
  - type.family.mono
  - type.family.serif
  - type.size.body
  - type.size.title1
  - type.size.hero-lg
  - type.weight.body
  - type.weight.heading
---

# Typography

## Overview

Apple's typographic system is SF Pro (Display + Text optical cuts, variable weight/width/optical-size) on native platforms. SF is **licensed for Apple-platform use only** — we cannot ship it directly on a general website. The fallback is the `-apple-system` font stack, which renders as SF on Apple devices and as a close analog (Inter, Helvetica Neue, system sans) elsewhere.

The visual discipline is what matters: huge, tight, semibold display type for heroes (line-height 1.05–1.1, letter-spacing −0.02 to −0.05em); looser measure for body (1.4–1.55); no more than three weights per page.

## Rules

### Font stacks

| Role                | Token               | Stack                                                                                                              |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| UI + body + display | `type.family.sans`  | `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Helvetica Neue", Arial, sans-serif` |
| Code, terminal      | `type.family.mono`  | `ui-monospace, "SF Mono", Menlo, Monaco, "Cascadia Mono", "Roboto Mono", Consolas, monospace`                      |
| Editorial serif     | `type.family.serif` | `"New York", "Times New Roman", serif`                                                                             |

### Type role scale

Mapped to HIG role names. Sizes in px for Task 1; all consuming code uses token names.

| Role        | Token                   | Size                        | Typical use                    |
| ----------- | ----------------------- | --------------------------- | ------------------------------ |
| Caption 2   | `type.size.caption2`    | 11                          | Tiny labels, data-grid headers |
| Caption 1   | `type.size.caption1`    | 12                          | Captions under media           |
| Footnote    | `type.size.footnote`    | 13                          | Legal text, metadata           |
| Subheadline | `type.size.subheadline` | 15                          | Secondary labels               |
| Callout     | `type.size.callout`     | 16                          | Emphasized body                |
| Body        | `type.size.body`        | 17                          | Default body                   |
| Headline    | `type.size.headline`    | 17 (semibold)               | Emphasized headline in lists   |
| Title 3     | `type.size.title3`      | 20                          | Card titles                    |
| Title 2     | `type.size.title2`      | 22                          | Section subheads               |
| Title 1     | `type.size.title1`      | 28                          | Section headers                |
| Large Title | `type.size.large-title` | 34                          | Page titles                    |
| Hero SM     | `type.size.hero-sm`     | `clamp(2rem, 5vw, 3rem)`    | Secondary heroes               |
| Hero MD     | `type.size.hero-md`     | `clamp(3rem, 8vw, 5.5rem)`  | Product hero                   |
| Hero LG     | `type.size.hero-lg`     | `clamp(4rem, 12vw, 7.5rem)` | Homepage hero                  |

### Weight discipline

Three weights max per page:

- `type.weight.body` → 400 (regular)
- `type.weight.heading` → 600 (semibold) — the Apple-typical display weight
- `type.weight.heading-bold` → 700 (bold) — reserved for rare emphasis

Never use italic for UI labels.

### Tracking (letter-spacing)

- Display type (title1+, all hero sizes): `letter-spacing: -0.025em` to `-0.05em` (tight)
- Body/callout/subheadline: `letter-spacing: 0`
- Small caps / captions: `letter-spacing: 0.01em` (slight)

### Line height

- Display/hero: 1.05 (tight)
- Title/headline: 1.1 (snug)
- Body: 1.4 (normal)
- Long-form prose: 1.55 (relaxed)

### Readable measure

Body text target: **65–75 characters per line**. Achieve via `max-width: 65ch` on article-like layouts.

### Hero typography utility

The `display-type` utility (see `styles/utilities.css`) applies family + heading-weight + tight tracking + 1.05 line-height in one class. Use it for hero headlines.

## Tokens

See [`tokens/semantic.tokens.json`](../tokens/semantic.tokens.json) → `type.*`. See [`tokens/primitive.tokens.json`](../tokens/primitive.tokens.json) → `fontSize.*`, `fontWeight.*`, `lineHeight.*`, `fontFamily.*`.

## Do / Don't

| ✅ Do                                                        | ❌ Don't                                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| One display headline per hero, tight-tracked, semibold       | Stack two 34px titles in the same hero                                    |
| Use `type.size.hero-lg` for the page's single largest moment | Use hero sizes for every section (everything big = nothing big)           |
| Keep body to 17 px with 1.4 line-height                      | Use 14 px "for density" (HIG minimum body is 17 on iOS, 13 on macOS text) |
| `max-width: 65ch` for long prose                             | Let body text run 120 characters wide                                     |
| `letter-spacing: -0.025em` on display sizes                  | Tight-track body text                                                     |
| Reach for semibold (600) before bold (700)                   | Bold every heading uniformly                                              |

## Related

- [`principles.md`](./principles.md) — the weight-restraint rule
- [`color.md`](./color.md) — text-color semantic roles (primary, secondary, etc.)
- [`spacing.md`](./spacing.md) — vertical rhythm between headings and body
- [`accessibility.md`](./accessibility.md) — Dynamic Type equivalence via rem scaling

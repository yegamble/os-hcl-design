---
name: Stack
category: layout
status: stable
version: 0.1.0
tokensUsed: []
dependsOn: []
a11y:
  role: none
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Stack

## Overview

Layout primitive that wraps a flexbox container with token-scaled gap. Three exported variants: `Stack` (column by default), `HStack` (horizontal shorthand), `VStack` (vertical shorthand). Use instead of hand-written `flex gap-*` classes to keep spacing tied to the token scale.

## Anatomy

Single `<div>` with Tailwind flexbox classes driven by props.

## Variants

- `direction`: `row` / `column` (Stack default)
- `gap`: `0 / 1 / 2 / 3 / 4 / 5 / 6 / 8 / 10 / 12` (Tailwind spacing scale numbers, all multiples of 4px)
- `align`: `start / center / end / stretch`
- `justify`: `start / center / end / between / around`
- `wrap`: `true / false`

## States

None.

## Props

Extends `HTMLAttributes<HTMLDivElement>`. See variants above.

## Usage

| ✅ Do                                              | ❌ Don't                                   |
| -------------------------------------------------- | ------------------------------------------ |
| Prefer `<Stack gap="4">` over bespoke `flex gap-4` | Set arbitrary gaps outside the token scale |
| Nest Stacks to build grid-like layouts             | Use Stack for true 2D grids (use CSS Grid) |

## Code Examples

```tsx
<Stack gap="6">
  <Card><Card.Body>First</Card.Body></Card>
  <Card><Card.Body>Second</Card.Body></Card>
</Stack>

<HStack gap="3" align="center">
  <Avatar alt="Ada Lovelace" size="sm" />
  <span className="text-body text-text-primary">Ada Lovelace</span>
</HStack>
```

## Accessibility

Layout primitive — no accessibility semantics of its own. Use structural tags (`<section>`, `<article>`, `<ul>`) via `className` overrides when a landmark is needed.

## Tokens Used

None directly. `gap` values map to Tailwind spacing primitives — which come from our DTCG `space.*` tokens via `styles/tokens.css`.

## Related

- `foundations/spacing.md` — the scale this consumes

## Changelog

- **0.1.0** — Initial.

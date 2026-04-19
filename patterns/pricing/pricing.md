---
name: Pricing
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.action.primary
  - space.gutter.section
  - space.gutter.card
dependsOn:
  - Button
  - Card
  - Badge
a11y:
  role: region
  keyboard: [Tab]
  focus: inherits from Button children
  minHitTarget: 44px (inherited)
---

# Pricing

## Overview

Apple-style pricing page: display-type header + three-tier bento grid. The featured tier wears `Card variant="elevated"` + `Badge` + primary CTA; others wear `outlined` + secondary CTA. Feature lists use check-mark bullets. No raw hex, no arbitrary Tailwind values.

## Anatomy

- Heading section: display-type `<h2>` + `<p>` subtitle
- Tier cards (3–4): name + badge (optional) + price + period + features list + CTA Button

## Variants

- Default (3 tiers) — extend to 4 by passing 4 items in `tiers` (grid adapts via `bento-grid`)

## States

- Focused CTA shows focus-visible ring (from Button)
- Reduced-motion and reduced-transparency inherited via component utilities

## Props

| name       | type     | required | description                                               |
| ---------- | -------- | -------- | --------------------------------------------------------- |
| `title`    | `string` | yes      | Display-type heading.                                     |
| `subtitle` | `string` | yes      | One-sentence support.                                     |
| `tiers`    | `Tier[]` | yes      | Each: `{ name, price, period, features, cta, featured }`. |

## Usage

| ✅ Do                                      | ❌ Don't                                                 |
| ------------------------------------------ | -------------------------------------------------------- |
| Feature **one** tier with `featured: true` | Feature two tiers (undermines the recommendation signal) |
| Keep feature lists to 4–6 concise bullets  | Paragraph-length feature descriptions                    |
| Use a badge only on the featured tier      | Put a badge on every tier                                |

## Code Examples

```tsx
<Pricing
  title="Simple, transparent pricing."
  subtitle="Start free, upgrade when you're ready."
  tiers={[
    {
      name: 'Free',
      price: '$0',
      period: '/ forever',
      features: ['Up to 3 projects', 'Community support', 'Core components'],
      cta: 'Get started',
    },
    {
      name: 'Pro',
      price: '$20',
      period: '/ month',
      features: ['Unlimited projects', 'Email support', 'All components', 'Advanced patterns'],
      cta: 'Start 14-day trial',
      featured: true,
    },
    {
      name: 'Team',
      price: '$80',
      period: '/ month',
      features: ['Everything in Pro', 'Seats for 10', 'Priority support', 'SSO + SCIM'],
      cta: 'Contact sales',
    },
  ]}
/>
```

## Accessibility

- `<section aria-label="Pricing">` for the landmark
- Each tier heading is `<h3>`
- CTAs inherit Button's 44 px hit target and focus ring
- Check-mark icons marked `aria-hidden`; list items carry the readable feature text

## Tokens Used

See front-matter.

## Related

- `components/button/` — CTAs
- `components/card/` — tier containers
- `components/badge/` — "Most popular" label

## Changelog

- **0.1.0** — Initial.

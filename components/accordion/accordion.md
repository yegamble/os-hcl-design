---
name: Accordion
category: disclosure
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.text.secondary
  - color.border.subtle
  - color.action.primary
  - motion.duration.ui
dependsOn: ['@radix-ui/react-accordion']
a11y:
  role: heading / button / region
  keyboard: [Space, Enter, Arrow, Home, End]
  focus: focus-visible ring on each trigger
  minHitTarget: 44px
---

# Accordion

## Overview

Expand/collapse disclosure with Radix Accordion. Single-item (`type="single"`) or multi-item (`type="multiple"`) modes. Chevron icon rotates 180° on open state via data-attribute selector.

## Anatomy

Accordion (Root) + AccordionItem + AccordionTrigger + AccordionContent.

## Variants

- `type="single"` / `type="multiple"` via Root (Radix)

## States

closed / open / focus-visible / disabled.

## Props

Radix Accordion props.

## Usage

| ✅ Do                                                  | ❌ Don't                                |
| ------------------------------------------------------ | --------------------------------------- |
| Use for FAQ, settings sections, progressive disclosure | Nest accordions more than 2 levels deep |
| Provide a meaningful trigger label                     | Use "Click to expand" as the trigger    |

## Code Examples

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="billing">
    <AccordionTrigger>Billing</AccordionTrigger>
    <AccordionContent>Manage payment methods and invoices.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="team">
    <AccordionTrigger>Team</AccordionTrigger>
    <AccordionContent>Invite members and manage permissions.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Accessibility

- Each trigger is a real `<button>` inside a heading.
- Space/Enter toggle; arrow keys traverse between triggers.

## Tokens Used

See front-matter.

## Related

- `components/tabs/` — mutually-exclusive disclosure counterpart

## Changelog

- **0.1.0** — Initial.

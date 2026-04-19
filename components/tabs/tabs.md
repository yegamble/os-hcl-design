---
name: Tabs
category: navigation
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.surface.raised
  - color.text.primary
  - color.text.secondary
  - color.border.subtle
  - color.action.primary
  - radius.pill
dependsOn: ['@radix-ui/react-tabs']
a11y:
  role: tablist / tab / tabpanel
  keyboard: [Arrow, Home, End, Tab]
  focus: focus-visible ring on each trigger
  minHitTarget: 44px
---

# Tabs

## Overview

Segmented-control style tabs. Radix Tabs handles roving tabindex, arrow-key navigation, panel association. Pill-shaped container with a selected-indicator via background swap.

## Anatomy

Tabs (Root) + TabsList + TabsTrigger(s) + TabsContent(s).

## Variants

None (Phase 2).

## States

unselected / selected (active) / focus-visible / disabled.

## Props

Radix Tabs props. Root needs `defaultValue` or `value` + `onValueChange`.

## Usage

| ✅ Do                                   | ❌ Don't                                   |
| --------------------------------------- | ------------------------------------------ |
| Use for switching between related views | Use for navigation between pages (use Nav) |
| Keep trigger labels to one or two words | Use tabs as a catch-all for 8+ sections    |

## Code Examples

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="specs">Specs</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="specs">Specs content</TabsContent>
  <TabsContent value="reviews">Reviews content</TabsContent>
</Tabs>
```

## Accessibility

- Roving tabindex; arrow-left/right move between tabs; Home/End jump to first/last.
- Selected trigger has `aria-selected="true"` + `data-state="active"`.

## Tokens Used

See front-matter.

## Related

- `components/nav/` — between-page navigation counterpart

## Changelog

- **0.1.0** — Initial.

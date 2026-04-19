---
name: EmptyState
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
dependsOn:
  - Button
a11y:
  role: region
  keyboard: [Tab]
  focus: inherits from Button (if actionLabel)
  minHitTarget: 44px (via Button)
---

# Empty State

## Overview

Positive-framing empty placeholder. Centered composition: icon (optional) + title + description + one CTA. Per NN/G's empty-state template — image/icon + title (positive framing) + body + single CTA.

## Anatomy

`<section>` with aria-label = title + centered icon + `<h3>` + `<p>` + `<Button>`.

## Variants

None (Phase 4). Icon slot allows visual differentiation.

## States

Inert.

## Props

| name          | type         | required | description                        |
| ------------- | ------------ | -------- | ---------------------------------- |
| `icon`        | `ReactNode`  | no       | Illustration (mark `aria-hidden`). |
| `title`       | `string`     | yes      | Positive-framing headline.         |
| `description` | `string`     | no       | Supporting copy (≤ 2 sentences).   |
| `actionLabel` | `string`     | no       | CTA label.                         |
| `onAction`    | `() => void` | no       | CTA handler.                       |

## Usage

| ✅ Do                                      | ❌ Don't                              |
| ------------------------------------------ | ------------------------------------- |
| Frame positively ("Ready to get started?") | Apologize ("Sorry, no results")       |
| One CTA only                               | Three CTAs                            |
| Keep description ≤ 2 sentences             | Paragraphs explaining the empty state |

## Code Examples

```tsx
<EmptyState
  icon={<InboxIcon width="48" height="48" aria-hidden />}
  title="No projects yet"
  description="Create your first project to get started."
  actionLabel="Create project"
  onAction={() => createProject()}
/>
```

## Accessibility

- `<section aria-label={title}>` for the landmark.
- Headline is `<h3>` (consumer decides the outer heading level; `<h3>` fits most content regions).
- CTA inherits Button's hit target and focus ring.

## Tokens Used

See front-matter.

## Related

- `components/button/` — the CTA

## Changelog

- **0.1.0** — Initial.

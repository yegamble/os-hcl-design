---
name: Onboarding
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.text.primary
  - color.text.secondary
  - color.border.subtle
  - radius.sheet
  - shadow.card
dependsOn:
  - Button
  - Stepper
a11y:
  role: region
  keyboard: [Tab, Enter]
  focus: focus-visible ring on buttons
  minHitTarget: 44px
---

# Onboarding

## Overview

Multi-step welcome flow. Stepper indicates progress; content area swaps per step; footer has Skip / Back / Next (or Finish on last step). Typically rendered inside a Dialog for first-time-use, or inline for setup wizards.

## Anatomy

Section → Stepper header → content area (per-step title + description + content) → footer (Skip left, Back + Next/Finish right).

## Variants

None.

## States

Per step index: `current`, `complete`, `upcoming` (via Stepper). Next becomes "Finish" on the last step; Back hidden on the first.

## Props

| name         | type               | required | description                            |
| ------------ | ------------------ | -------- | -------------------------------------- |
| `steps`      | `OnboardingStep[]` | yes      | `{ id, label, description?, content }` |
| `onComplete` | `() => void`       | no       | Called on "Finish".                    |
| `onDismiss`  | `() => void`       | no       | Called on "Skip".                      |

## Usage

| ✅ Do                       | ❌ Don't                         |
| --------------------------- | -------------------------------- |
| Keep to 3–5 steps           | Require 12 steps to get started  |
| Make "Skip" non-destructive | Use "Skip" that loses user input |
| Let users go Back           | Force forward-only flow          |

## Code Examples

```tsx
<Onboarding
  steps={[
    { id: 'welcome', label: 'Welcome', description: "Let's get you set up.", content: <Welcome /> },
    { id: 'profile', label: 'Profile', content: <ProfileForm /> },
    { id: 'invite', label: 'Invite', content: <InviteForm /> },
  ]}
  onComplete={() => finish()}
  onDismiss={() => skip()}
/>
```

## Accessibility

- `<section aria-label="Onboarding">` landmark.
- Stepper provides progress via `aria-current="step"`.
- All buttons inherit the 44 px hit target and focus ring.

## Tokens Used

See front-matter.

## Related

- `components/stepper/` — progress indicator
- `components/dialog/` — common host for onboarding

## Changelog

- **0.1.0** — Initial.

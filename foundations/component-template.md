---
title: Component Template (canonical)
category: foundation
status: stable
tokensReferenced: []
---

# Component Template

The canonical 11-section structure every `components/<name>/<name>.md` and `patterns/<name>/<name>.md` MUST follow. `scripts/check-doc-sections.mjs` parses this file to extract the required headings (every `## …` below) and verifies every component/pattern `.md` contains the same 11 headings, in the same order.

YAML front-matter must precede with these keys at minimum:

```yaml
---
name: Button
category: primitive # primitive | composite | pattern | layout
status: stable # draft | beta | stable | deprecated
version: 0.1.0
tokensUsed:
  - color.action.primary
  - color.action.primary-hover
dependsOn: [] # other components this one composes
a11y:
  role: button
  keyboard: [Enter, Space]
  focus: focus-visible ring (2px action-primary, 2px offset)
  minHitTarget: 44px
---
```

The sections below are themselves the canonical shape — each is a live `##` heading that component authors copy into their own `.md`.

## Overview

One-paragraph description: what the component is, when to use it, when not to. No marketing language, no emojis.

## Anatomy

Labeled diagram of the component's structural parts. ASCII art works for simple primitives; for compound components, describe part names (e.g., `Card.Header`, `Card.Body`, `Card.Footer`) and their roles.

## Variants

Every variant of the component (size, intent, density, style). Name each with the prop value that selects it. One-line purpose description per variant.

## States

Every interactive state: default, hover, focus (focus-visible), active, disabled, loading, error, selected. Visual description per state — defer the actual rendering to Storybook stories.

## Props

Table format: `name | type | required | default | description`. Enumerates the full public API. Must match `component.spec.json` exactly — both are generated from the TypeScript types in a later phase; Phase 1 keeps them manually aligned.

## Usage

Scenario-based Do/Don't pairs. Concrete examples, not generic "don't misuse". Show a correct use next to an incorrect one with a one-line reason per row.

## Code Examples

3–5 copy-pasteable code snippets in realistic context. Typed imports with full paths. Minimum one example of: basic use, every variant, a common composition, an accessibility pattern.

## Accessibility

WCAG level, required ARIA attributes, keyboard map, focus management, screen-reader behavior, hit-target size, contrast notes. Reference the Storybook a11y addon's verification and the component's Playwright keyboard test (if any).

## Tokens Used

List of semantic tokens consumed by the component. Mirrors `tokensUsed` in YAML front-matter. Use the dotted token path (`color.action.primary`) — not the CSS variable name (`--color-action-primary`) — for retrievability.

## Related

Sibling components (same category), composed patterns that include this component, and related foundations.

## Changelog

Per-component version history. Minimum: one entry per release that changes this component. Breaking changes flagged with a `BREAKING:` prefix and a migration note.

# Phase 2 — Expand Component Catalog

Created: 2026-04-19
Author: yegamble@gmail.com
Status: PENDING
Approved: Yes
Iterations: 0
Worktree: No
Type: Feature

## Summary

**Goal:** Instantiate the remaining 13 components from the PRD v1 catalog against the per-component template proven by Phase 1's Button and Card. Each component ships all 5 sibling files (`.tsx`, `.md`, `.spec.json`, `.stories.tsx`, `.tokens.json`), passes the depth and doc-section CI gates, and references semantic tokens only.

**Architecture:** Same as Phase 1 — Tailwind v4 CSS-first + `tailwind-variants` + semantic tokens. Components that need focus management / portal behavior wrap Radix Primitives (`@radix-ui/*`) — the pragmatic choice over Base UI since Base UI's catalog still has gaps (Toast, Accordion, Combobox as of April 2026).

**Tech Stack:** adds Radix Primitives (Dialog, Popover, Tooltip, Tabs, Accordion, Toast, Select, Checkbox, Switch, RadioGroup, NavigationMenu); keeps everything else from Phase 1.

## Scope

### In Scope

13 components:

**No primitive library required (styled native HTML):**

- `IconButton` — icon-only variant of Button with enforced aria-label
- `Input` — native `<input>` with variants and states
- `Textarea` — native `<textarea>` with auto-resize option
- `Badge` — `<span>` with intent variants
- `Nav` — native `<nav>` + list + active-state styling (lightweight; not a dropdown menu in Phase 2)

**Radix-primitive wrappers:**

- `Checkbox` — `@radix-ui/react-checkbox`
- `Radio` / `RadioGroup` — `@radix-ui/react-radio-group`
- `Switch` — `@radix-ui/react-switch`
- `Select` — `@radix-ui/react-select`
- `Dialog` — `@radix-ui/react-dialog`
- `Popover` — `@radix-ui/react-popover`
- `Tooltip` — `@radix-ui/react-tooltip`
- `Tabs` — `@radix-ui/react-tabs`
- `Accordion` — `@radix-ui/react-accordion`
- `Toast` — `@radix-ui/react-toast`

(That's 15 logical components; `IconButton` re-uses Button's style system so its spec is thin. `Nav` is a presentational `<nav>` in Phase 2; a Radix-backed navigation menu can land in Phase 3 or later.)

### Out of Scope

- Base UI swap (deferred — Radix works; Base UI audit when its catalog stabilizes)
- Combobox / DatePicker / CommandPalette / ColorPicker (deferred — not in PRD v1 catalog)
- MDX / storybook docs beyond the stories
- Visual-regression baselines for new components (deferred to a separate baseline-capture pass — infrastructure already exists, batch-capture later)

## Context for Implementer

- **Template:** every component lives in `components/<name>/` with 5 sibling files; `.md` follows `foundations/component-template.md` exactly (11 level-2 headings).
- **Semantic tokens only** — enforced by `local-rules/no-raw-hex-in-className` and `stylelint/semantic-tokens-only`.
- **Radix Primitives** are unstyled — all styling flows from Tailwind utilities referencing our semantic tokens. Wrap with `tailwind-variants` or keep inline.
- **Hit target 44 px** on every interactive component (Checkbox, Switch, Radio, Select trigger, Tabs triggers, etc.) — `min-h-11` or explicit `w-11 h-11` for toggles.
- **A11y is inherited** from Radix (focus management, aria-\*). Our job is contrast, focus-visible ring styling, and motion-reduce.
- **Commits:** one commit per logical cluster (3–4 components) or per component. No RFC process.

## Progress Tracking

- [ ] Radix install + shared types module
- [ ] Badge
- [ ] IconButton
- [ ] Input
- [ ] Textarea
- [ ] Nav
- [ ] Checkbox
- [ ] Switch
- [ ] Radio + RadioGroup
- [ ] Select
- [ ] Tooltip
- [ ] Popover
- [ ] Dialog
- [ ] Tabs
- [ ] Accordion
- [ ] Toast

**Total Tasks:** 15 clusters | **Completed:** 0 | **Remaining:** 15

---
name: Code
category: typography
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.elevated
  - color.text.primary
  - color.border.subtle
  - radius.card
dependsOn: []
a11y:
  role: none
  keyboard: []
  focus: none
  minHitTarget: n/a
---

# Code

## Overview

`<code>` or `<pre><code>` wrapper styled with mono font and surface-elevated background. Two modes: inline (default — bordered pill) and block (rounded panel with horizontal scroll for long lines). `language` prop adds a `language-<x>` class for downstream syntax highlighters (Shiki, Prism, etc. — not bundled here).

## Anatomy

- Inline: single `<code>` with pill styling
- Block: `<pre><code>` with `overflow-x-auto` on the `<pre>`

## Variants

- `block`: `true` / `false` (inline by default)
- `language`: `string` (attaches `language-<x>` class; consumer runs highlighting if desired)

## States

None.

## Props

| name       | type      | required | default | description                                 |
| ---------- | --------- | -------- | ------- | ------------------------------------------- |
| `block`    | `boolean` | no       | `false` | Block vs inline.                            |
| `language` | `string`  | no       | —       | Adds `language-<x>` class for highlighters. |

## Usage

| ✅ Do                                              | ❌ Don't                         |
| -------------------------------------------------- | -------------------------------- |
| Use inline Code for identifiers (`useEffect`)      | Use for regular emphasized prose |
| Use block Code for ≥ 2 lines                       | Use a `<p>` with mono font       |
| Hint `language` for syntax highlighter integration | Invent ad-hoc language keys      |

## Code Examples

```tsx
<p>Run <Code>pnpm install</Code> to start.</p>

<Code block language="ts">
{`const greeting = 'Hello, world!';
console.log(greeting);`}
</Code>
```

## Accessibility

- Native `<code>` / `<pre>` semantics. Screen readers announce as "code".
- Block version has horizontal scroll on the `<pre>` — keyboard scrolling preserved.

## Tokens Used

See front-matter.

## Related

- `components/kbd/` — keyboard-key counterpart
- `components/text/` — body-copy counterpart

## Changelog

- **0.1.0** — Initial (no bundled syntax highlighter — consumer wires Shiki/Prism if wanted).

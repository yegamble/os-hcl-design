---
name: FileUpload
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.surface.elevated
  - color.text.primary
  - color.text.tertiary
  - color.text.destructive
  - color.border.default
  - color.action.primary
  - radius.card
dependsOn: []
a11y:
  role: region
  keyboard: [Tab, Enter, Space]
  focus: focus-visible ring on dropzone
  minHitTarget: dropzone 128px min-height (generous)
---

# FileUpload

## Overview

Drop-zone with click-to-browse fallback. Supports drag-over highlight, single or multi-file, `accept` filter, and optional `maxSize` enforcement with inline error. Keyboard-activatable (Enter / Space) on the zone itself.

## Anatomy

Focusable `<div role="region">` acting as the drop target + visible label + hint + `<input type="file" className="sr-only">`.

## Variants

None.

## States

- default
- drag-over (accent border + elevated surface)
- error (inline `<p role="alert">`)
- disabled

## Props

| name       | type                      | required | default                               |
| ---------- | ------------------------- | -------- | ------------------------------------- |
| `accept`   | `string`                  | no       | —                                     |
| `multiple` | `boolean`                 | no       | `false`                               |
| `maxSize`  | `number` (bytes)          | no       | —                                     |
| `onFiles`  | `(files: File[]) => void` | no       | —                                     |
| `label`    | `string`                  | no       | `Drag files here, or click to browse` |
| `hint`     | `string`                  | no       | —                                     |
| `disabled` | `boolean`                 | no       | `false`                               |

## Usage

| ✅ Do                                              | ❌ Don't                               |
| -------------------------------------------------- | -------------------------------------- |
| Include `hint` with accepted types and size limits | Hide constraints and surprise the user |
| Enforce `maxSize` client-side AND server-side      | Rely on client-side only               |
| Show uploaded files in a separate list below       | Re-use the zone as the list            |

## Code Examples

```tsx
<FileUpload
  accept="image/*"
  multiple
  maxSize={5 * 1024 * 1024}
  label="Drop images or click to browse"
  hint="PNG / JPG up to 5 MB each"
  onFiles={(files) => upload(files)}
/>
```

## Accessibility

- Zone is `role="region"` with `aria-label` = visible label.
- Keyboard-activatable: Enter / Space open the native file picker.
- Hidden `<input type="file">` with `aria-label` for direct keyboard-only use.
- Error surfaced via `<p role="alert">`.

## Tokens Used

See front-matter.

## Related

- `components/progress/` — pair for upload progress

## Changelog

- **0.1.0** — Initial (no remote-progress tracking; consumer wires upload).

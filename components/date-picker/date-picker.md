---
name: DatePicker
category: primitive
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.default
  - color.surface.raised
  - color.text.primary
  - color.text.tertiary
  - color.border.default
  - color.action.primary
  - radius.button
  - radius.card
dependsOn: ['react-day-picker', 'date-fns', 'Popover']
a11y:
  role: button + grid (inside picker)
  keyboard: [Arrow, PageUp, PageDown, Home, End, Enter, Esc]
  focus: focus-visible ring on trigger; roving tabindex inside grid
  minHitTarget: 44px trigger
---

# DatePicker

## Overview

Button-triggered date picker. Popover container houses `react-day-picker` for single-date or date-range selection. `date-fns` formats the selected value. Picker grid has full keyboard navigation (arrows, PageUp/Down for month, Enter to select, Esc to close).

## Anatomy

PopoverTrigger (formatted-value button) → Popover content → DayPicker grid (7-col week, row-per-week, month navigation, year dropdown).

## Variants

- `mode="single"` (default) — picks one date
- `mode="range"` — picks `{ from, to }` across two months

## States

closed / open / date-hover / date-selected / date-in-range.

## Props

| name          | type                   | required | default     | description          |
| ------------- | ---------------------- | -------- | ----------- | -------------------- |
| `mode`        | `'single' \| 'range'`  | no       | `single`    | Selection mode.      |
| `value`       | `Date \| { from, to }` | no       | —           | Controlled value.    |
| `onChange`    | `(v) => void`          | no       | —           | Change handler.      |
| `placeholder` | `string`               | no       | Pick a date | Shown when no value. |
| `disabled`    | `boolean`              | no       | `false`     | Disables trigger.    |

## Usage

| ✅ Do                                                   | ❌ Don't                           |
| ------------------------------------------------------- | ---------------------------------- |
| Label via wrapping `<label>` or `aria-label`            | Rely on placeholder as label       |
| Use `range` for date-range filters (booking, reporting) | Use `range` for single-date inputs |

## Code Examples

```tsx
const [date, setDate] = useState<Date | undefined>();
<DatePicker value={date} onChange={(v) => setDate(v as Date)} aria-label="Start date" />;
```

## Accessibility

- `react-day-picker` v9 provides full WAI-ARIA grid semantics.
- Esc closes via Popover's focus-trap contract.
- All hit areas meet 44 px via row height.

## Tokens Used

See front-matter.

## Related

- `components/input/` — for typed date entry (complementary; can combine)
- `components/popover/` — underlying positioning

## Changelog

- **0.1.0** — Initial (single + range modes; built on react-day-picker v9 + date-fns v4).

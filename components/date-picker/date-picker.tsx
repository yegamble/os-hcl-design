import { forwardRef, useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';
import 'react-day-picker/style.css';

export type DatePickerMode = 'single' | 'range';

export interface DatePickerProps {
  mode?: DatePickerMode;
  value?: Date | DateRange;
  onChange?: (value: Date | DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

function formatValue(v: Date | DateRange | undefined): string {
  if (!v) return '';
  if (v instanceof Date) return format(v, 'PP');
  if (v.from && v.to) return `${format(v.from, 'PP')} – ${format(v.to, 'PP')}`;
  if (v.from) return `${format(v.from, 'PP')} – …`;
  return '';
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      mode = 'single',
      value,
      onChange,
      placeholder = 'Pick a date',
      disabled,
      className,
      'aria-label': ariaLabel,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const label = formatValue(value);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          ref={ref}
          disabled={disabled}
          aria-label={ariaLabel ?? placeholder}
          className={twMerge(
            'rounded-button border-border-default bg-surface-default text-body inline-flex min-h-11 w-full items-center justify-between border px-4 py-3',
            label ? 'text-text-primary' : 'text-text-tertiary',
            'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-60',
            'duration-ui transition-colors motion-reduce:transition-none',
            className,
          )}
        >
          <span>{label || placeholder}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <rect
              x="2.5"
              y="3"
              width="11"
              height="10"
              rx="1"
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
            />
            <path
              d="M2.5 6h11M5 2v2M11 2v2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </PopoverTrigger>
        <PopoverContent className="p-3" align="start">
          {mode === 'single' ? (
            <DayPicker
              mode="single"
              selected={value as Date | undefined}
              onSelect={(v) => {
                onChange?.(v);
                if (v) setOpen(false);
              }}
              className="os-hcl-rdp"
            />
          ) : (
            <DayPicker
              mode="range"
              selected={value as DateRange | undefined}
              onSelect={(v) => onChange?.(v)}
              className="os-hcl-rdp"
              numberOfMonths={2}
            />
          )}
        </PopoverContent>
      </Popover>
    );
  },
);
DatePicker.displayName = 'DatePicker';

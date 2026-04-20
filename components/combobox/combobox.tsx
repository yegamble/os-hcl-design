import { forwardRef, useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk';
import { twMerge } from 'tailwind-merge';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const Combobox = forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select…',
      emptyMessage = 'No results.',
      disabled,
      className,
      'aria-label': ariaLabel,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const selected = options.find((o) => o.value === value);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          ref={ref}
          disabled={disabled}
          aria-label={ariaLabel ?? placeholder}
          aria-expanded={open}
          className={twMerge(
            'rounded-button border-border-default bg-surface-default text-body inline-flex min-h-11 w-full items-center justify-between border px-4 py-3',
            selected ? 'text-text-primary' : 'text-text-tertiary',
            'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-60',
            'duration-ui transition-colors motion-reduce:transition-none',
            className,
          )}
        >
          <span>{selected?.label ?? placeholder}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <path
              d="M3 5.5L7 9.5L11 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Command className="w-full">
            <div className="border-border-subtle border-b px-3">
              <CommandInput
                placeholder={placeholder}
                className="text-body text-text-primary placeholder:text-text-tertiary h-11 w-full bg-transparent focus:outline-none"
              />
            </div>
            <CommandList className="max-h-64 overflow-auto p-1">
              <CommandEmpty className="text-footnote text-text-tertiary py-6 text-center">
                {emptyMessage}
              </CommandEmpty>
              <CommandGroup>
                {options.map((o) => (
                  <CommandItem
                    key={o.value}
                    value={o.label}
                    onSelect={() => {
                      onChange?.(o.value);
                      setOpen(false);
                    }}
                    className={twMerge(
                      'rounded-button text-body text-text-primary relative flex min-h-11 cursor-pointer items-center px-3',
                      'data-[selected=true]:bg-surface-elevated',
                      value === o.value && 'font-semibold',
                    )}
                  >
                    {o.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
Combobox.displayName = 'Combobox';

import * as RadixSelect from '@radix-ui/react-select';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Select = RadixSelect.Root;
export const SelectValue = RadixSelect.Value;
export const SelectGroup = RadixSelect.Group;
export const SelectLabel = RadixSelect.Label;
export const SelectSeparator = RadixSelect.Separator;

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={twMerge(
      'rounded-button inline-flex min-h-11 w-full items-center justify-between gap-2 px-4 py-3',
      'bg-surface-default text-text-primary border-border-default border',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  >
    {children}
    <RadixSelect.Icon asChild>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <RadixSelect.Portal>
    <RadixSelect.Content
      ref={ref}
      position={position}
      className={twMerge(
        'rounded-card bg-surface-raised border-border-subtle shadow-popover z-50 min-w-[--radix-select-trigger-width] overflow-hidden border',
        className,
      )}
      {...props}
    >
      <RadixSelect.Viewport className="p-1">{children}</RadixSelect.Viewport>
    </RadixSelect.Content>
  </RadixSelect.Portal>
));
SelectContent.displayName = 'SelectContent';

export const SelectItem = forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={twMerge(
      'rounded-button text-body text-text-primary relative flex min-h-11 items-center px-4',
      'data-[highlighted]:bg-surface-elevated data-[highlighted]:outline-none',
      'data-[state=checked]:font-semibold',
      'cursor-pointer',
      className,
    )}
    {...props}
  >
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
));
SelectItem.displayName = 'SelectItem';

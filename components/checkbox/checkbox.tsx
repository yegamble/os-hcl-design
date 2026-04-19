import { forwardRef } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';

export const Checkbox = forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
>(({ className, ...props }, ref) => (
  <RadixCheckbox.Root
    ref={ref}
    className={twMerge(
      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md',
      'bg-surface-default border-border-default border',
      'data-[state=checked]:bg-action-primary data-[state=checked]:border-action-primary',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  >
    <RadixCheckbox.Indicator className="text-action-primary-fg">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M3 8l3.5 3.5L13 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
));
Checkbox.displayName = 'Checkbox';

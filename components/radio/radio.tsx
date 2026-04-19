import { forwardRef } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

export const RadioGroup = forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
>(({ className, ...props }, ref) => (
  <RadixRadioGroup.Root
    ref={ref}
    className={twMerge('flex flex-col gap-2', className)}
    {...props}
  />
));
RadioGroup.displayName = 'RadioGroup';

export const Radio = forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>(({ className, ...props }, ref) => (
  <RadixRadioGroup.Item
    ref={ref}
    className={twMerge(
      'rounded-pill inline-flex h-6 w-6 shrink-0 items-center justify-center',
      'bg-surface-default border-border-default border',
      'data-[state=checked]:border-action-primary',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  >
    <RadixRadioGroup.Indicator className="rounded-pill bg-action-primary h-3 w-3" />
  </RadixRadioGroup.Item>
));
Radio.displayName = 'Radio';

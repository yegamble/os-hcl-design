import { forwardRef } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';

export const Switch = forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSwitch.Root>
>(({ className, ...props }, ref) => (
  <RadixSwitch.Root
    ref={ref}
    className={twMerge(
      'rounded-pill relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center',
      'bg-border-default data-[state=checked]:bg-action-primary',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  >
    <RadixSwitch.Thumb className="rounded-pill bg-action-primary-fg duration-ui block h-6 w-6 translate-x-0.5 shadow-sm transition-transform data-[state=checked]:translate-x-5 motion-reduce:transition-none" />
  </RadixSwitch.Root>
));
Switch.displayName = 'Switch';

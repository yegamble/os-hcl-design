import * as RadixPopover from '@radix-ui/react-popover';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;
export const PopoverAnchor = RadixPopover.Anchor;

export const PopoverContent = forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <RadixPopover.Portal>
    <RadixPopover.Content
      ref={ref}
      sideOffset={sideOffset}
      className={twMerge(
        'rounded-card bg-surface-raised border-border-subtle shadow-popover text-text-primary z-50 min-w-56 border p-4',
        'motion-reduce:animate-none',
        className,
      )}
      {...props}
    />
  </RadixPopover.Portal>
));
PopoverContent.displayName = 'PopoverContent';

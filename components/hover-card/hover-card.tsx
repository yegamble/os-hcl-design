import * as RadixHoverCard from '@radix-ui/react-hover-card';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const HoverCard = RadixHoverCard.Root;
export const HoverCardTrigger = RadixHoverCard.Trigger;

export const HoverCardContent = forwardRef<
  React.ElementRef<typeof RadixHoverCard.Content>,
  React.ComponentPropsWithoutRef<typeof RadixHoverCard.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <RadixHoverCard.Portal>
    <RadixHoverCard.Content
      ref={ref}
      sideOffset={sideOffset}
      className={twMerge(
        'bg-surface-raised border-border-subtle shadow-popover text-text-primary rounded-card z-50 w-64 border p-4',
        'motion-reduce:animate-none',
        className,
      )}
      {...props}
    />
  </RadixHoverCard.Portal>
));
HoverCardContent.displayName = 'HoverCardContent';

import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const ScrollArea = forwardRef<
  React.ElementRef<typeof RadixScrollArea.Root>,
  React.ComponentPropsWithoutRef<typeof RadixScrollArea.Root>
>(({ className, children, ...props }, ref) => (
  <RadixScrollArea.Root
    ref={ref}
    className={twMerge('relative overflow-hidden', className)}
    {...props}
  >
    <RadixScrollArea.Viewport className="h-full w-full">{children}</RadixScrollArea.Viewport>
    <Scrollbar orientation="vertical" />
    <Scrollbar orientation="horizontal" />
    <RadixScrollArea.Corner className="bg-surface-elevated" />
  </RadixScrollArea.Root>
));
ScrollArea.displayName = 'ScrollArea';

const Scrollbar = forwardRef<
  React.ElementRef<typeof RadixScrollArea.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof RadixScrollArea.Scrollbar>
>(({ orientation = 'vertical', className, ...props }, ref) => (
  <RadixScrollArea.Scrollbar
    ref={ref}
    orientation={orientation}
    className={twMerge(
      'duration-ui flex touch-none p-0.5 transition-colors select-none motion-reduce:transition-none',
      orientation === 'vertical' ? 'h-full w-2' : 'h-2 flex-col',
      className,
    )}
    {...props}
  >
    <RadixScrollArea.Thumb className="bg-border-strong rounded-pill relative flex-1" />
  </RadixScrollArea.Scrollbar>
));
Scrollbar.displayName = 'ScrollAreaScrollbar';

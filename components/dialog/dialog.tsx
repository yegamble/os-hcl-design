import * as RadixDialog from '@radix-ui/react-dialog';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogTitle = RadixDialog.Title;
export const DialogDescription = RadixDialog.Description;
export const DialogClose = RadixDialog.Close;

export const DialogContent = forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Content>
>(({ className, children, ...props }, ref) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="bg-text-primary/50 fixed inset-0 z-50 motion-reduce:animate-none" />
    <RadixDialog.Content
      ref={ref}
      className={twMerge(
        'fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2',
        'rounded-sheet bg-surface-raised border-border-subtle shadow-dialog border',
        'p-6',
        'focus:outline-none',
        'motion-reduce:animate-none',
        className,
      )}
      {...props}
    >
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
));
DialogContent.displayName = 'DialogContent';

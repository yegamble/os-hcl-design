import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const ContextMenu = RadixContextMenu.Root;
export const ContextMenuTrigger = RadixContextMenu.Trigger;

export const ContextMenuContent = forwardRef<
  React.ElementRef<typeof RadixContextMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Content>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.Content
      ref={ref}
      className={twMerge(
        'bg-surface-raised border-border-subtle shadow-popover rounded-card z-50 min-w-[12rem] overflow-hidden border p-1',
        'motion-reduce:animate-none',
        className,
      )}
      {...props}
    />
  </RadixContextMenu.Portal>
));
ContextMenuContent.displayName = 'ContextMenuContent';

export const ContextMenuItem = forwardRef<
  React.ElementRef<typeof RadixContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Item>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Item
    ref={ref}
    className={twMerge(
      'text-body text-text-primary rounded-button relative flex min-h-11 items-center px-3',
      'data-[highlighted]:bg-surface-elevated data-[highlighted]:outline-none',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60',
      'cursor-pointer',
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = 'ContextMenuItem';

export const ContextMenuSeparator = forwardRef<
  React.ElementRef<typeof RadixContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Separator>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Separator
    ref={ref}
    className={twMerge('bg-separator-default my-1 h-px', className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export const ContextMenuLabel = forwardRef<
  React.ElementRef<typeof RadixContextMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Label>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Label
    ref={ref}
    className={twMerge(
      'text-text-tertiary text-footnote px-3 py-2 font-medium tracking-wide uppercase',
      className,
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = 'ContextMenuLabel';

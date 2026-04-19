import * as RadixTabs from '@radix-ui/react-tabs';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Tabs = RadixTabs.Root;

export const TabsList = forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(({ className, ...props }, ref) => (
  <RadixTabs.List
    ref={ref}
    className={twMerge(
      'rounded-pill bg-surface-elevated border-border-subtle inline-flex h-11 items-center gap-1 border p-1',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = 'TabsList';

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
>(({ className, ...props }, ref) => (
  <RadixTabs.Trigger
    ref={ref}
    className={twMerge(
      'rounded-pill text-callout inline-flex min-h-11 items-center justify-center px-4',
      'text-text-secondary data-[state=active]:text-text-primary data-[state=active]:bg-surface-raised data-[state=active]:shadow-sm',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...props }, ref) => (
  <RadixTabs.Content
    ref={ref}
    className={twMerge(
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default mt-4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';

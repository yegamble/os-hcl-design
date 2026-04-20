import * as RadixNavMenu from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const NavigationMenu = forwardRef<
  React.ElementRef<typeof RadixNavMenu.Root>,
  React.ComponentPropsWithoutRef<typeof RadixNavMenu.Root>
>(({ className, children, ...props }, ref) => (
  <RadixNavMenu.Root ref={ref} className={twMerge('relative z-10 flex', className)} {...props}>
    {children}
    <div className="absolute top-full left-0 flex w-full justify-center">
      <RadixNavMenu.Viewport className="origin-top-center bg-surface-raised border-border-subtle text-text-primary shadow-popover rounded-card relative mt-2 overflow-hidden border" />
    </div>
  </RadixNavMenu.Root>
));
NavigationMenu.displayName = 'NavigationMenu';

export const NavigationMenuList = forwardRef<
  React.ElementRef<typeof RadixNavMenu.List>,
  React.ComponentPropsWithoutRef<typeof RadixNavMenu.List>
>(({ className, ...props }, ref) => (
  <RadixNavMenu.List
    ref={ref}
    className={twMerge('flex items-center gap-1', className)}
    {...props}
  />
));
NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = RadixNavMenu.Item;

export const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof RadixNavMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixNavMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixNavMenu.Trigger
    ref={ref}
    className={twMerge(
      'rounded-button text-callout text-text-secondary inline-flex min-h-11 items-center gap-1 px-4',
      'hover:text-text-primary data-[state=open]:text-text-primary',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  >
    {children}
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden
      className="duration-ui transition-transform data-[state=open]:rotate-180"
    >
      <path
        d="M3 5l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </RadixNavMenu.Trigger>
));
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof RadixNavMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixNavMenu.Content>
>(({ className, ...props }, ref) => (
  <RadixNavMenu.Content
    ref={ref}
    className={twMerge('p-4', 'motion-reduce:animate-none', className)}
    {...props}
  />
));
NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuLink = forwardRef<
  React.ElementRef<typeof RadixNavMenu.Link>,
  React.ComponentPropsWithoutRef<typeof RadixNavMenu.Link>
>(({ className, ...props }, ref) => (
  <RadixNavMenu.Link
    ref={ref}
    className={twMerge(
      'rounded-button text-body text-text-primary block px-3 py-2',
      'hover:bg-surface-elevated focus-visible:bg-surface-elevated focus-visible:outline-none',
      'duration-ui transition-colors motion-reduce:transition-none',
      className,
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = 'NavigationMenuLink';

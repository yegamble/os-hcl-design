import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  'aria-label': string;
}

export const Nav = forwardRef<HTMLElement, NavProps>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={twMerge('flex items-center justify-between gap-6', className)}
    {...props}
  />
));
Nav.displayName = 'Nav';

interface NavListProps extends React.HTMLAttributes<HTMLUListElement> {}
export const NavList = forwardRef<HTMLUListElement, NavListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={twMerge('m-0 flex list-none items-center gap-1 p-0', className)}
      {...props}
    />
  ),
);
NavList.displayName = 'NavList';

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}
export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ active, className, ...props }, ref) => (
    <li>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content -- Content is supplied via props.children by consumers; the rule cannot see it statically. */}
      <a
        ref={ref}
        aria-current={active ? 'page' : undefined}
        className={twMerge(
          'rounded-button text-callout text-text-secondary inline-flex min-h-11 items-center px-4',
          'hover:bg-surface-elevated hover:text-text-primary',
          'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'aria-[current=page]:text-text-primary aria-[current=page]:font-semibold',
          'duration-ui transition-colors motion-reduce:transition-none',
          className,
        )}
        {...props}
      />
    </li>
  ),
);
NavItem.displayName = 'NavItem';

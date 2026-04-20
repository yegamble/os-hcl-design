import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Breadcrumb = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} aria-label="Breadcrumb" className={className} {...props} />
  ),
);
Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbList = forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={twMerge(
        'text-text-secondary text-footnote m-0 flex flex-wrap items-center gap-1.5 p-0',
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = 'BreadcrumbList';

interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  current?: boolean;
}
export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={twMerge('inline-flex items-center', className)} {...props} />
  ),
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}
export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ current, className, children, ...props }, ref) =>
    current ? (
      <span aria-current="page" className={twMerge('text-text-primary font-medium', className)}>
        {children}
      </span>
    ) : (
      <a
        ref={ref}
        className={twMerge(
          'hover:text-text-primary focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:rounded-button duration-ui transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    ),
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbSeparator = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={twMerge('text-text-tertiary', className)}
    {...props}
  >
    /
  </span>
));
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

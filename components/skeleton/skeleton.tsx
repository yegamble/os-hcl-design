import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Skeleton = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={twMerge(
        'rounded-button bg-surface-elevated animate-pulse motion-reduce:animate-none',
        className,
      )}
      {...props}
    />
  ),
);
Skeleton.displayName = 'Skeleton';

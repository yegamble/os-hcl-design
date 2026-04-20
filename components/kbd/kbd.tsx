import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Kbd = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={twMerge(
        'border-border-subtle bg-surface-elevated text-footnote text-text-secondary inline-flex h-6 min-w-6 items-center justify-center rounded-md border px-1.5 font-mono font-medium',
        className,
      )}
      {...props}
    />
  ),
);
Kbd.displayName = 'Kbd';

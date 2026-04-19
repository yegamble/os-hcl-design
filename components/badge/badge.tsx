import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const badge = tv({
  base: [
    'inline-flex items-center gap-1 rounded-pill px-3 py-1',
    'text-footnote font-medium tracking-normal',
    'border border-transparent',
  ],
  variants: {
    variant: {
      neutral: 'bg-surface-elevated text-text-primary border-border-subtle',
      info: 'bg-surface-elevated text-text-link border-border-subtle',
      success: 'bg-surface-elevated text-text-primary border-border-subtle',
      warning: 'bg-surface-elevated text-text-primary border-border-subtle',
      destructive: 'bg-surface-elevated text-text-destructive border-border-subtle',
    },
  },
  defaultVariants: { variant: 'neutral' },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, ...props }, ref) => (
    <span ref={ref} className={twMerge(badge({ variant }), className)} {...props} />
  ),
);
Badge.displayName = 'Badge';

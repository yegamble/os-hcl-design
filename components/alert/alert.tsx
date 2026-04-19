import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const alert = tv({
  base: ['flex items-start gap-3 rounded-card border p-4', 'text-body'],
  variants: {
    variant: {
      neutral: 'bg-surface-elevated border-border-subtle text-text-primary',
      info: 'bg-surface-elevated border-border-subtle text-text-primary',
      success: 'bg-surface-elevated border-border-subtle text-text-primary',
      warning: 'bg-surface-elevated border-border-subtle text-text-primary',
      destructive: 'bg-surface-elevated border-border-subtle text-text-destructive',
    },
  },
  defaultVariants: { variant: 'neutral' },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alert> {}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, className, role = 'alert', ...props }, ref) => (
    <div ref={ref} role={role} className={twMerge(alert({ variant }), className)} {...props} />
  ),
);
Alert.displayName = 'Alert';

export const AlertTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={twMerge('text-text-primary font-semibold', className)} {...props} />
));
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={twMerge('text-text-secondary text-footnote', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

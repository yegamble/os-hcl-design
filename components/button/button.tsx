import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const button = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium tracking-normal',
    'rounded-button',
    'min-h-11',
    'transition-colors duration-ui',
    'motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'select-none',
  ],
  variants: {
    variant: {
      primary: [
        'bg-action-primary text-action-primary-fg',
        'hover:bg-action-primary-hover',
        'active:bg-action-primary-active',
        'disabled:bg-border-subtle disabled:text-text-quaternary',
      ],
      secondary: [
        'bg-surface-elevated text-text-primary',
        'border border-border-default',
        'hover:bg-border-subtle',
        'active:bg-border-default',
      ],
      ghost: [
        'bg-transparent text-text-primary',
        'hover:bg-surface-elevated',
        'active:bg-border-subtle',
      ],
      destructive: [
        'bg-action-destructive text-action-destructive-fg',
        'hover:bg-action-destructive-hover',
        'active:bg-action-destructive-hover',
        'disabled:bg-border-subtle disabled:text-text-quaternary',
      ],
    },
    size: {
      sm: 'px-4 text-callout',
      md: 'px-5 text-body',
      lg: 'px-6 text-headline',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

/** Apple-inspired button. Uses semantic tokens exclusively; min 44px hit target at every size. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={twMerge(button({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

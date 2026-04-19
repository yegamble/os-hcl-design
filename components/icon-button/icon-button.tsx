import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const iconButton = tv({
  base: [
    'inline-flex items-center justify-center',
    'rounded-button',
    'min-h-11 min-w-11',
    'transition-colors duration-ui motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default',
    'disabled:cursor-not-allowed disabled:opacity-60',
  ],
  variants: {
    variant: {
      primary: 'bg-action-primary text-action-primary-fg hover:bg-action-primary-hover',
      secondary:
        'bg-surface-elevated text-text-primary border border-border-default hover:bg-border-subtle',
      ghost: 'bg-transparent text-text-primary hover:bg-surface-elevated',
    },
  },
  defaultVariants: { variant: 'ghost' },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButton> {
  /** Required accessible name for icon-only buttons. */
  'aria-label': string;
}

/** Icon-only button. Enforces aria-label at the type level. 44 × 44 px hit target. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, className, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={twMerge(iconButton({ variant }), className)}
      {...props}
    />
  ),
);
IconButton.displayName = 'IconButton';

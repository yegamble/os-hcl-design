import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const input = tv({
  base: [
    'block w-full',
    'rounded-button',
    'bg-surface-default text-text-primary placeholder:text-text-tertiary',
    'border border-border-default',
    'px-4 py-3',
    'text-body',
    'min-h-11',
    'transition-colors duration-ui motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default focus-visible:border-transparent',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'aria-invalid:border-border-strong aria-invalid:ring-1 aria-invalid:ring-action-destructive',
  ],
  variants: {
    size: {
      sm: 'px-3 py-2 text-callout',
      md: '',
      lg: 'px-5 py-4 text-headline',
    },
  },
  defaultVariants: { size: 'md' },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof input> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, className, type = 'text', ...props }, ref) => (
    <input ref={ref} type={type} className={twMerge(input({ size }), className)} {...props} />
  ),
);
Input.displayName = 'Input';

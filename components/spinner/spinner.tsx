import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const spinner = tv({
  base: 'inline-block animate-spin motion-reduce:animate-none text-action-primary',
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-8 w-8',
    },
  },
  defaultVariants: { size: 'md' },
});

export interface SpinnerProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'aria-label'>, VariantProps<typeof spinner> {
  /** Optional accessible label. Omit for decorative spinners (they get aria-hidden). */
  'aria-label'?: string;
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size, className, 'aria-label': ariaLabel, ...props }, ref) => (
    <svg
      ref={ref}
      className={twMerge(spinner({ size }), className)}
      viewBox="0 0 24 24"
      fill="none"
      role={ariaLabel ? 'status' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
);
Spinner.displayName = 'Spinner';

import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const chip = tv({
  base: [
    'inline-flex items-center gap-1.5 rounded-pill',
    'min-h-8 px-3 text-footnote font-medium',
    'border border-border-subtle',
    'bg-surface-elevated text-text-primary',
    'transition-colors duration-ui motion-reduce:transition-none',
  ],
  variants: {
    selected: {
      true: 'bg-action-primary text-action-primary-fg border-transparent',
      false: '',
    },
    removable: { true: 'pr-1.5', false: '' },
    interactive: {
      true: 'cursor-pointer hover:bg-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default',
      false: '',
    },
  },
  defaultVariants: { selected: false, removable: false, interactive: false },
});

interface BaseChipProps extends VariantProps<typeof chip> {
  label: string;
  onRemove?: () => void;
}

type ButtonChipProps = BaseChipProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { as?: 'button' };
type SpanChipProps = BaseChipProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> & { as: 'span' };
export type ChipProps = ButtonChipProps | SpanChipProps;

/** Chip — selectable / removable Badge variant. Presentational span by default; pass `interactive` + onClick to get a <button>. */
export const Chip = forwardRef<HTMLElement, ChipProps>(
  ({ label, selected, interactive, removable, onRemove, className, as, ...rest }, ref) => {
    const classes = twMerge(chip({ selected, interactive, removable }), className);
    const content = (
      <>
        <span>{label}</span>
        {removable && onRemove ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            aria-label={`Remove ${label}`}
            className="rounded-pill focus-visible:ring-action-primary focus-visible:ring-offset-surface-elevated inline-flex h-5 w-5 items-center justify-center hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none dark:hover:bg-white/10"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
              <path
                d="M2 2l6 6M8 2L2 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        ) : null}
      </>
    );

    if (interactive || as === 'button') {
      const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          type="button"
          aria-pressed={selected}
          className={classes}
          {...buttonProps}
        >
          {content}
        </button>
      );
    }

    const spanProps = rest as React.HTMLAttributes<HTMLSpanElement>;
    return (
      <span ref={ref as React.ForwardedRef<HTMLSpanElement>} className={classes} {...spanProps}>
        {content}
      </span>
    );
  },
);
Chip.displayName = 'Chip';

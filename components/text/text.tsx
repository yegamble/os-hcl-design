import { forwardRef, createElement } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const text = tv({
  base: '',
  variants: {
    size: {
      body: 'text-body leading-normal',
      callout: 'text-callout leading-normal',
      subheadline: 'text-subheadline leading-normal',
      footnote: 'text-footnote leading-normal',
      caption1: 'text-caption1 leading-normal',
      caption2: 'text-caption2 leading-normal',
    },
    tone: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      tertiary: 'text-text-tertiary',
      destructive: 'text-text-destructive',
      link: 'text-text-link',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: { size: 'body', tone: 'primary', weight: 'regular' },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof text> {
  /** Rendered tag. `p` by default; use `span` for inline. */
  as?: 'p' | 'span' | 'div' | 'strong' | 'em';
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = 'p', size, tone, weight, className, ...props }, ref) =>
    createElement(as, {
      ref,
      className: twMerge(text({ size, tone, weight }), className),
      ...props,
    }),
);
Text.displayName = 'Text';

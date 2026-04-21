import { forwardRef, createElement } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const heading = tv({
  base: 'font-semibold tracking-tight text-text-primary',
  variants: {
    size: {
      'hero-lg': 'text-hero-lg leading-tight',
      'hero-md': 'text-hero-md leading-tight',
      'hero-sm': 'text-hero-sm leading-tight',
      'large-title': 'text-large-title leading-tight',
      title1: 'text-title1 leading-snug',
      title2: 'text-title2 leading-snug',
      title3: 'text-title3 leading-snug',
      headline: 'text-headline leading-snug',
    },
  },
  defaultVariants: { size: 'title2' },
});

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>, VariantProps<typeof heading> {
  /** Semantic heading level (h1..h6). Controls the tag, not the size. */
  level: HeadingLevel;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, size, className, ...props }, ref) =>
    createElement(`h${level}`, {
      ref,
      className: twMerge(heading({ size }), className),
      ...props,
    }),
);
Heading.displayName = 'Heading';

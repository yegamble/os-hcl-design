import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const stack = tv({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    gap: {
      '0': 'gap-0',
      '1': 'gap-1',
      '2': 'gap-2',
      '3': 'gap-3',
      '4': 'gap-4',
      '5': 'gap-5',
      '6': 'gap-6',
      '8': 'gap-8',
      '10': 'gap-10',
      '12': 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    direction: 'column',
    gap: '4',
    align: 'stretch',
    justify: 'start',
    wrap: false,
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stack> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction, gap, align, justify, wrap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(stack({ direction, gap, align, justify, wrap }), className)}
      {...props}
    />
  ),
);
Stack.displayName = 'Stack';

/** Horizontal shorthand. */
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>((props, ref) => (
  <Stack ref={ref} direction="row" {...props} />
));
HStack.displayName = 'HStack';

/** Vertical shorthand (same as Stack default). */
export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>((props, ref) => (
  <Stack ref={ref} direction="column" {...props} />
));
VStack.displayName = 'VStack';

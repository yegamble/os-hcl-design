import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const card = tv({
  slots: {
    root: [
      'block',
      'bg-surface-raised text-text-primary',
      'border border-border-subtle',
      'rounded-card',
      'shadow-sm',
      'overflow-hidden',
    ],
    header: ['border-b border-border-subtle p-5 pb-3 font-semibold'],
    body: ['p-5 text-text-secondary'],
    footer: ['border-t border-border-subtle p-5 pt-3 text-text-tertiary'],
  },
  variants: {
    variant: {
      default: {},
      elevated: { root: 'shadow-lg border-transparent bg-surface-elevated' },
      outlined: { root: 'shadow-none border-border-default' },
      glass: { root: 'glass-regular border-transparent' },
    },
    padding: {
      sm: {
        header: 'p-4 pb-2',
        body: 'p-4',
        footer: 'p-4 pt-2',
      },
      md: {},
      lg: {
        header: 'p-8 pb-4',
        body: 'p-8',
        footer: 'p-8 pt-4',
      },
    },
    radius: {
      md: { root: 'rounded-card' },
      lg: { root: 'rounded-sheet' },
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    radius: 'md',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {}

type CardComponent = React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, radius, className, ...props }, ref) => {
    const { root } = card({ variant, padding, radius });
    return <div ref={ref} className={twMerge(root(), className)} {...props} />;
  },
);
CardRoot.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge('border-border-subtle border-b p-5 pb-3 font-semibold', className)}
      {...props}
    />
  ),
);
CardHeader.displayName = 'Card.Header';

export const CardBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={twMerge('text-text-secondary p-5', className)} {...props} />
  ),
);
CardBody.displayName = 'Card.Body';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge('border-border-subtle text-text-tertiary border-t p-5 pt-3', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
}) as CardComponent;

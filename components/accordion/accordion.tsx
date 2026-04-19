import * as RadixAccordion from '@radix-ui/react-accordion';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Accordion = RadixAccordion.Root;

export const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className={twMerge('border-border-subtle border-b last:border-b-0', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      ref={ref}
      className={twMerge(
        'text-body text-text-primary flex min-h-11 w-full items-center justify-between py-3 font-medium',
        'hover:text-action-primary',
        'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        'duration-ui transition-colors motion-reduce:transition-none',
        '[&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="duration-ui ml-3 shrink-0 transition-transform motion-reduce:transition-none"
        aria-hidden
      >
        <path
          d="M5 8l5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={twMerge(
      'text-text-secondary text-body overflow-hidden',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'motion-reduce:animate-none',
      className,
    )}
    {...props}
  >
    <div className="pb-4">{children}</div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

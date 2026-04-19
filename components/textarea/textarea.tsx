import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const base = [
  'block w-full min-h-28',
  'rounded-button',
  'bg-surface-default text-text-primary placeholder:text-text-tertiary',
  'border border-border-default',
  'px-4 py-3',
  'text-body',
  'transition-colors duration-ui motion-reduce:transition-none',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default focus-visible:border-transparent',
  'disabled:cursor-not-allowed disabled:opacity-60',
  'aria-invalid:border-border-strong aria-invalid:ring-1 aria-invalid:ring-action-destructive',
  'resize-y',
].join(' ');

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={twMerge(base, className)} {...props} />
));
Textarea.displayName = 'Textarea';

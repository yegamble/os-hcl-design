import * as RadixToast from '@radix-ui/react-toast';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const ToastProvider = RadixToast.Provider;

export const ToastViewport = forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Viewport>
>(({ className, ...props }, ref) => (
  <RadixToast.Viewport
    ref={ref}
    className={twMerge(
      'fixed right-0 bottom-0 z-[100] flex max-h-screen w-full flex-col gap-3 p-6 md:max-w-sm',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = 'ToastViewport';

export const Toast = forwardRef<
  React.ElementRef<typeof RadixToast.Root>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Root>
>(({ className, ...props }, ref) => (
  <RadixToast.Root
    ref={ref}
    className={twMerge(
      'group rounded-card border-border-subtle bg-surface-raised shadow-toast pointer-events-auto relative flex items-center gap-3 border p-4 pr-8',
      'data-[state=open]:animate-in data-[state=closed]:animate-out motion-reduce:animate-none',
      className,
    )}
    {...props}
  />
));
Toast.displayName = 'Toast';

export const ToastTitle = forwardRef<
  React.ElementRef<typeof RadixToast.Title>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Title>
>(({ className, ...props }, ref) => (
  <RadixToast.Title
    ref={ref}
    className={twMerge('text-body text-text-primary font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = 'ToastTitle';

export const ToastDescription = forwardRef<
  React.ElementRef<typeof RadixToast.Description>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Description>
>(({ className, ...props }, ref) => (
  <RadixToast.Description
    ref={ref}
    className={twMerge('text-footnote text-text-secondary', className)}
    {...props}
  />
));
ToastDescription.displayName = 'ToastDescription';

export const ToastClose = forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Close>
>(({ className, ...props }, ref) => (
  <RadixToast.Close
    ref={ref}
    aria-label="Close"
    className={twMerge(
      'rounded-button text-text-tertiary absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center',
      'hover:text-text-primary hover:bg-surface-elevated',
      'focus-visible:ring-action-primary focus-visible:ring-offset-surface-raised focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      className,
    )}
    {...props}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M2 2l10 10M12 2L2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </RadixToast.Close>
));
ToastClose.displayName = 'ToastClose';

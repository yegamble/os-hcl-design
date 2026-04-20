import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface StepperStep {
  id: string;
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: StepperStep[];
  current: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  'aria-label'?: string;
}

export const Stepper = forwardRef<HTMLOListElement, StepperProps>(
  (
    { steps, current, orientation = 'horizontal', className, 'aria-label': ariaLabel = 'Steps' },
    ref,
  ) => (
    <ol
      ref={ref}
      aria-label={ariaLabel}
      className={twMerge(
        'flex',
        orientation === 'horizontal' ? 'items-start gap-4' : 'flex-col gap-4',
        className,
      )}
    >
      {steps.map((step, idx) => {
        const state = idx < current ? 'complete' : idx === current ? 'current' : 'upcoming';
        return (
          <li
            key={step.id}
            aria-current={state === 'current' ? 'step' : undefined}
            className={twMerge(
              'flex',
              orientation === 'horizontal' ? 'flex-1 flex-col' : 'flex-row gap-3',
            )}
          >
            <div className={twMerge('flex items-center', orientation === 'vertical' && 'flex-col')}>
              <span
                className={twMerge(
                  'rounded-pill text-footnote inline-flex h-8 w-8 shrink-0 items-center justify-center border font-semibold',
                  state === 'complete' &&
                    'bg-action-primary text-action-primary-fg border-transparent',
                  state === 'current' && 'border-action-primary text-action-primary',
                  state === 'upcoming' && 'border-border-default text-text-tertiary',
                )}
                aria-hidden
              >
                {state === 'complete' ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  idx + 1
                )}
              </span>
              {orientation === 'horizontal' && idx < steps.length - 1 ? (
                <span
                  className={twMerge(
                    'mx-3 h-px flex-1',
                    state === 'complete' ? 'bg-action-primary' : 'bg-border-subtle',
                  )}
                  aria-hidden
                />
              ) : null}
              {orientation === 'vertical' && idx < steps.length - 1 ? (
                <span
                  className={twMerge(
                    'my-2 min-h-6 w-px flex-1',
                    state === 'complete' ? 'bg-action-primary' : 'bg-border-subtle',
                  )}
                  aria-hidden
                />
              ) : null}
            </div>
            <div className={orientation === 'horizontal' ? 'mt-2' : ''}>
              <p
                className={twMerge(
                  'text-callout font-semibold',
                  state === 'upcoming' ? 'text-text-tertiary' : 'text-text-primary',
                )}
              >
                {step.label}
              </p>
              {step.description ? (
                <p className="text-footnote text-text-secondary">{step.description}</p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  ),
);
Stepper.displayName = 'Stepper';

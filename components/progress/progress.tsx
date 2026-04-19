import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value 0..max. Omit for indeterminate. */
  value?: number;
  /** Max value. Defaults to 100. */
  max?: number;
  /** Required accessible name unless the component is adjacent to a visible label linked via aria-labelledby. */
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, className, ...props }, ref) => {
    const isIndeterminate = value === undefined;
    const pct = isIndeterminate ? 0 : Math.min(Math.max(0, value), max) / max;
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : value}
        className={twMerge(
          'rounded-pill bg-surface-elevated relative h-2 w-full overflow-hidden',
          className,
        )}
        {...props}
      >
        <div
          className={twMerge(
            'rounded-pill bg-action-primary duration-ui absolute inset-y-0 left-0 transition-[width] motion-reduce:transition-none',
            isIndeterminate &&
              'w-1/3 animate-[progress-indeterminate_1.5s_ease-in-out_infinite] motion-reduce:animate-none',
          )}
          style={isIndeterminate ? undefined : { width: `${pct * 100}%` }}
        />
      </div>
    );
  },
);
Progress.displayName = 'Progress';

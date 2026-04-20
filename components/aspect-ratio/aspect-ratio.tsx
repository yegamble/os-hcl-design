import { forwardRef, type CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ratio as width / height. Examples: 1 (square), 16/9 (widescreen), 4/3, 3/4. */
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, style, className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge('relative w-full overflow-hidden', className)}
      style={{ aspectRatio: String(ratio), ...style } as CSSProperties}
      {...props}
    />
  ),
);
AspectRatio.displayName = 'AspectRatio';

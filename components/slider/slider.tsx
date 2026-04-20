import * as RadixSlider from '@radix-ui/react-slider';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Slider = forwardRef<
  React.ElementRef<typeof RadixSlider.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSlider.Root>
>(({ className, ...props }, ref) => (
  <RadixSlider.Root
    ref={ref}
    className={twMerge('relative flex h-11 w-full touch-none items-center select-none', className)}
    {...props}
  >
    <RadixSlider.Track className="bg-surface-elevated rounded-pill relative h-1.5 grow">
      <RadixSlider.Range className="bg-action-primary rounded-pill absolute h-full" />
    </RadixSlider.Track>
    <RadixSlider.Thumb
      aria-label="Slider value"
      className="bg-surface-raised border-action-primary rounded-pill focus-visible:ring-action-primary focus-visible:ring-offset-surface-default duration-ui block h-5 w-5 border-2 shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-none"
    />
  </RadixSlider.Root>
));
Slider.displayName = 'Slider';

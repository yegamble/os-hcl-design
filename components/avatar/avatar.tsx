import { forwardRef, useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const avatar = tv({
  base: [
    'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-pill',
    'bg-surface-elevated text-text-primary',
    'border border-border-subtle',
    'font-semibold select-none',
  ],
  variants: {
    size: {
      sm: 'h-8 w-8 text-footnote',
      md: 'h-10 w-10 text-callout',
      lg: 'h-14 w-14 text-body',
      xl: 'h-20 w-20 text-title3',
    },
  },
  defaultVariants: { size: 'md' },
});

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>, VariantProps<typeof avatar> {
  src?: string;
  alt: string;
  /** Fallback initials shown when src is missing or fails to load. */
  initials?: string;
}

function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : '';
  return (first + last).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, initials, size, className, ...props }, ref) => {
    const [failed, setFailed] = useState(false);
    const label = initials ?? initialsFrom(alt);
    const showImage = src && !failed;
    return (
      <span
        ref={ref}
        role="img"
        aria-label={alt}
        className={twMerge(avatar({ size }), className)}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt=""
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{label}</span>
        )}
      </span>
    );
  },
);
Avatar.displayName = 'Avatar';

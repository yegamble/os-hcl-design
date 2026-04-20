import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TimelineItemData {
  id: string;
  title: string;
  meta?: string;
  icon?: ReactNode;
  content?: ReactNode;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  items: TimelineItemData[];
}

export const Timeline = forwardRef<HTMLOListElement, TimelineProps>(
  ({ items, className, ...props }, ref) => (
    <ol ref={ref} className={twMerge('relative m-0 flex flex-col gap-6 p-0', className)} {...props}>
      {items.map((item, idx) => (
        <li key={item.id} className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <span
              className="bg-action-primary text-action-primary-fg rounded-pill inline-flex h-8 w-8 shrink-0 items-center justify-center shadow-sm"
              aria-hidden
            >
              {item.icon ?? (
                <span className="rounded-pill bg-action-primary-fg h-2 w-2" aria-hidden />
              )}
            </span>
            {idx < items.length - 1 ? (
              <span className="bg-border-subtle my-2 min-h-6 w-px flex-1" aria-hidden />
            ) : null}
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-body text-text-primary font-semibold">{item.title}</p>
              {item.meta ? (
                <time className="text-footnote text-text-tertiary whitespace-nowrap">
                  {item.meta}
                </time>
              ) : null}
            </div>
            {item.content ? (
              <div className="text-text-secondary text-body mt-1">{item.content}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  ),
);
Timeline.displayName = 'Timeline';

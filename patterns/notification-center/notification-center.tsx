import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/popover/popover';
import { Badge } from '../../components/badge/badge';
import { Button } from '../../components/button/button';
import { Separator } from '../../components/separator/separator';

export interface NotificationItem {
  id: string;
  title: string;
  body?: string;
  meta?: string;
  unread?: boolean;
  icon?: ReactNode;
}

interface NotificationCenterProps {
  items: NotificationItem[];
  onMarkAllRead?: () => void;
  onSelect?: (id: string) => void;
  /** Trigger element. */
  trigger: ReactNode;
}

export function NotificationCenter({
  items,
  onMarkAllRead,
  onSelect,
  trigger,
}: NotificationCenterProps) {
  const unread = items.filter((i) => i.unread).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Notifications${unread > 0 ? `, ${unread} unread` : ''}`}
          className="rounded-pill text-text-primary hover:bg-surface-elevated focus-visible:ring-action-primary focus-visible:ring-offset-surface-default duration-ui relative inline-flex min-h-11 min-w-11 items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none"
        >
          {trigger}
          {unread > 0 ? (
            <span
              className="rounded-pill bg-action-destructive text-footnote text-action-destructive-fg absolute top-1 right-1 inline-flex min-h-5 min-w-5 items-center justify-center px-1 font-semibold"
              aria-hidden
            >
              {unread > 9 ? '9+' : unread}
            </span>
          ) : null}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96 p-0">
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <h2 className="text-headline text-text-primary font-semibold">Notifications</h2>
            {unread > 0 ? <Badge variant="info">{unread} new</Badge> : null}
          </div>
          {onMarkAllRead && unread > 0 ? (
            <Button variant="ghost" size="sm" onClick={onMarkAllRead}>
              Mark all read
            </Button>
          ) : null}
        </header>
        <Separator />
        <ul className="m-0 max-h-96 list-none overflow-y-auto p-0">
          {items.length === 0 ? (
            <li className="text-text-tertiary text-body p-8 text-center">
              You&apos;re all caught up.
            </li>
          ) : (
            items.map((n, i) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => onSelect?.(n.id)}
                  className={twMerge(
                    'duration-ui flex w-full flex-col items-start gap-1 p-4 text-left transition-colors motion-reduce:transition-none',
                    'hover:bg-surface-elevated',
                    'focus-visible:ring-action-primary focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-none',
                    n.unread && 'bg-surface-elevated/60',
                  )}
                >
                  <div className="flex w-full items-baseline justify-between gap-2">
                    <span className="flex items-center gap-2">
                      {n.unread ? (
                        <span
                          className="rounded-pill bg-action-primary h-2 w-2 shrink-0"
                          aria-hidden
                        />
                      ) : null}
                      <span className="text-body text-text-primary font-medium">{n.title}</span>
                    </span>
                    {n.meta ? (
                      <time className="text-footnote text-text-tertiary whitespace-nowrap">
                        {n.meta}
                      </time>
                    ) : null}
                  </div>
                  {n.body ? <p className="text-footnote text-text-secondary">{n.body}</p> : null}
                </button>
                {i < items.length - 1 ? <Separator /> : null}
              </li>
            ))
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

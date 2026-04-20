import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

function buildRange(page: number, pageCount: number, siblings: number): (number | 'ellipsis')[] {
  const range: (number | 'ellipsis')[] = [];
  const start = Math.max(1, page - siblings);
  const end = Math.min(pageCount, page + siblings);

  if (start > 1) {
    range.push(1);
    if (start > 2) range.push('ellipsis');
  }
  for (let i = start; i <= end; i++) range.push(i);
  if (end < pageCount) {
    if (end < pageCount - 1) range.push('ellipsis');
    range.push(pageCount);
  }
  return range;
}

const baseItem =
  'inline-flex min-h-11 min-w-11 items-center justify-center rounded-button px-3 text-callout text-text-secondary ' +
  'hover:bg-surface-elevated hover:text-text-primary ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-default ' +
  'disabled:cursor-not-allowed disabled:opacity-60 ' +
  'transition-colors duration-ui motion-reduce:transition-none';

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ page, pageCount, onPageChange, siblingCount = 1, className }, ref) => {
    const items = buildRange(page, pageCount, siblingCount);
    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={twMerge('flex items-center gap-1', className)}
      >
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className={baseItem}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <path
              d="M10 4L6 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {items.map((it, i) =>
          it === 'ellipsis' ? (
            <span key={`e-${i}`} aria-hidden="true" className="text-text-tertiary px-2">
              …
            </span>
          ) : (
            <button
              key={it}
              type="button"
              onClick={() => onPageChange(it)}
              aria-current={it === page ? 'page' : undefined}
              aria-label={`Go to page ${it}`}
              className={twMerge(
                baseItem,
                it === page &&
                  'bg-action-primary text-action-primary-fg hover:bg-action-primary-hover font-semibold',
              )}
            >
              {it}
            </button>
          ),
        )}
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= pageCount}
          aria-label="Next page"
          className={baseItem}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    );
  },
);
Pagination.displayName = 'Pagination';

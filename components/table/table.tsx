import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const TableRoot = forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="overflow-x-auto">
      <table
        ref={ref}
        className={twMerge('text-body text-text-primary w-full border-collapse', className)}
        {...props}
      />
    </div>
  ),
);
TableRoot.displayName = 'Table';

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={twMerge('border-border-subtle bg-surface-elevated border-b', className)}
    {...props}
  />
));
TableHeader.displayName = 'Table.Header';

const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={twMerge('divide-border-subtle divide-y', className)} {...props} />
));
TableBody.displayName = 'Table.Body';

const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={twMerge(
        'hover:bg-surface-elevated/50 duration-ui transition-colors motion-reduce:transition-none',
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = 'Table.Row';

const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, scope = 'col', ...props }, ref) => (
  <th
    ref={ref}
    scope={scope}
    className={twMerge(
      'text-footnote text-text-secondary px-4 py-3 text-left font-semibold tracking-wide uppercase',
      className,
    )}
    {...props}
  />
));
TableHeaderCell.displayName = 'Table.HeaderCell';

const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={twMerge('px-4 py-3 align-middle', className)} {...props} />
  ),
);
TableCell.displayName = 'Table.Cell';

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={twMerge('text-footnote text-text-tertiary p-2 text-left', className)}
    {...props}
  />
));
TableCaption.displayName = 'Table.Caption';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  HeaderCell: TableHeaderCell,
  Cell: TableCell,
  Caption: TableCaption,
});

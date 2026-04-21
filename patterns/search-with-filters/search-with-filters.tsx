import type { ReactNode } from 'react';
import { Input } from '../../components/input/input';
import { Chip } from '../../components/chip/chip';

export interface FilterOption {
  id: string;
  label: string;
}

interface SearchWithFiltersProps {
  query: string;
  onQueryChange: (q: string) => void;
  filters: FilterOption[];
  selected: string[];
  onToggleFilter: (id: string) => void;
  onClear?: () => void;
  placeholder?: string;
  resultCount?: number;
  children: ReactNode;
}

export function SearchWithFilters({
  query,
  onQueryChange,
  filters,
  selected,
  onToggleFilter,
  onClear,
  placeholder = 'Search…',
  resultCount,
  children,
}: SearchWithFiltersProps) {
  return (
    <section aria-label="Search with filters" className="space-y-4">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.currentTarget.value)}
          placeholder={placeholder}
          aria-label="Search"
        />
      </form>
      <div role="group" aria-label="Filters" className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <Chip
            key={f.id}
            interactive
            selected={selected.includes(f.id)}
            label={f.label}
            onClick={() => onToggleFilter(f.id)}
          />
        ))}
        {onClear && (selected.length > 0 || query) ? (
          <button
            type="button"
            onClick={onClear}
            className="text-footnote text-text-link focus-visible:rounded-button focus-visible:ring-action-primary focus-visible:ring-offset-surface-default ml-1 px-2 py-1 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Clear all
          </button>
        ) : null}
        {typeof resultCount === 'number' ? (
          <span className="text-footnote text-text-tertiary ml-auto">
            {resultCount} result{resultCount === 1 ? '' : 's'}
          </span>
        ) : null}
      </div>
      <div role="region" aria-live="polite" aria-label="Results">
        {children}
      </div>
    </section>
  );
}

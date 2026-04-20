import type { ReactNode } from 'react';

export interface ListDetailItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface ListDetailProps {
  items: ListDetailItem[];
  selectedId?: string;
  onSelect: (id: string) => void;
  detail: ReactNode;
  emptyState?: ReactNode;
  listLabel?: string;
}

/**
 * Master/detail two-pane layout. Left list + right detail area.
 * On narrow viewports (<md), the detail panel stacks below the list.
 */
export function ListDetail({
  items,
  selectedId,
  onSelect,
  detail,
  emptyState,
  listLabel = 'List',
}: ListDetailProps) {
  return (
    <div className="bg-surface-default h-full min-h-screen">
      <div className="mx-auto grid h-full max-w-6xl md:grid-cols-3">
        <aside
          aria-label={listLabel}
          className="border-border-subtle overflow-y-auto md:col-span-1 md:border-r"
        >
          <ul className="m-0 flex list-none flex-col gap-0 p-0">
            {items.map((item) => {
              const active = item.id === selectedId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(item.id)}
                    aria-current={active ? 'true' : undefined}
                    aria-pressed={active}
                    className={`border-border-subtle duration-ui flex min-h-14 w-full flex-col items-start gap-1 border-b px-4 py-3 text-left transition-colors motion-reduce:transition-none ${active ? 'bg-surface-elevated' : 'hover:bg-surface-elevated'} focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:relative focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`}
                  >
                    <span
                      className={`text-body ${active ? 'text-text-primary font-semibold' : 'text-text-primary'}`}
                    >
                      {item.title}
                    </span>
                    {item.subtitle ? (
                      <span className="text-footnote text-text-tertiary">{item.subtitle}</span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
        <main className="overflow-y-auto p-8 md:col-span-2">
          {selectedId ? detail : (emptyState ?? <DefaultEmpty />)}
        </main>
      </div>
    </div>
  );
}

function DefaultEmpty() {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-body text-text-tertiary">Select an item to see details.</p>
    </div>
  );
}

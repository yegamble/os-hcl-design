import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { SearchWithFilters } from './search-with-filters';
import { Card } from '../../components/card/card';

const meta: Meta<typeof SearchWithFilters> = {
  title: 'Patterns/Search With Filters',
  component: SearchWithFilters,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SearchWithFilters>;

interface Project {
  id: string;
  name: string;
  stack: string;
}

const PROJECTS: Project[] = [
  { id: '1', name: 'Aurora', stack: 'react' },
  { id: '2', name: 'Basilisk', stack: 'vue' },
  { id: '3', name: 'Corvid', stack: 'svelte' },
  { id: '4', name: 'Delphinus', stack: 'react' },
  { id: '5', name: 'Ember', stack: 'vue' },
  { id: '6', name: 'Fisher', stack: 'svelte' },
];

const FILTERS = [
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'svelte', label: 'Svelte' },
];

function Demo() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  const results = useMemo(
    () =>
      PROJECTS.filter((p) => {
        const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
        const matchesFilter = selected.length === 0 || selected.includes(p.stack);
        return matchesQuery && matchesFilter;
      }),
    [query, selected],
  );

  return (
    <div className="w-full max-w-2xl">
      <SearchWithFilters
        query={query}
        onQueryChange={setQuery}
        filters={FILTERS}
        selected={selected}
        onToggleFilter={(id) =>
          setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
        }
        onClear={() => {
          setQuery('');
          setSelected([]);
        }}
        resultCount={results.length}
      >
        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
          {results.map((p) => (
            <li key={p.id}>
              <Card variant="outlined">
                <Card.Body>
                  <p className="text-body text-text-primary font-medium">{p.name}</p>
                  <p className="text-footnote text-text-tertiary uppercase">{p.stack}</p>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </SearchWithFilters>
    </div>
  );
}

export const Default: Story = { render: () => <Demo /> };

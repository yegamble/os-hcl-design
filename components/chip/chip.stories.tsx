import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Chip } from './chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Display: Story = { args: { label: 'kubernetes' } };
export const Removable: Story = {
  render: () => <Chip label="kubernetes" removable onRemove={() => {}} />,
};

function InteractiveDemo() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['in-progress']));
  const toggle = (v: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });
  return (
    <div className="flex flex-wrap gap-2">
      {(['in-progress', 'completed', 'blocked'] as const).map((v) => (
        <Chip key={v} interactive label={v} selected={selected.has(v)} onClick={() => toggle(v)} />
      ))}
    </div>
  );
}

export const InteractiveFilterBar: Story = { render: () => <InteractiveDemo /> };

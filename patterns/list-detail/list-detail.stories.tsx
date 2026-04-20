import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ListDetail } from './list-detail';

const meta: Meta<typeof ListDetail> = {
  title: 'Patterns/List Detail',
  component: ListDetail,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ListDetail>;

const messages = Array.from({ length: 10 }, (_, i) => ({
  id: `m${i + 1}`,
  title: `Message ${i + 1}`,
  subtitle: `From sender ${i + 1}`,
}));

function Demo() {
  const [selected, setSelected] = useState<string | undefined>('m1');
  const item = messages.find((m) => m.id === selected);
  return (
    <ListDetail
      listLabel="Inbox"
      items={messages}
      selectedId={selected}
      onSelect={setSelected}
      detail={
        item ? (
          <article className="space-y-4">
            <h1 className="text-title2 text-text-primary font-semibold">{item.title}</h1>
            <p className="text-text-secondary text-body">
              Detail view for <strong>{item.title}</strong> — {item.subtitle}. This is where the
              full message content would live.
            </p>
          </article>
        ) : null
      }
    />
  );
}

export const Default: Story = { render: () => <Demo /> };

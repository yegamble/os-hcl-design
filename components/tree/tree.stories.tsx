import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tree } from './tree';

const meta: Meta<typeof Tree> = {
  title: 'Components/Tree',
  component: Tree,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tree>;

const nodes = [
  {
    id: 'src',
    label: 'src',
    children: [
      { id: 'src/app.tsx', label: 'app.tsx' },
      {
        id: 'src/components',
        label: 'components',
        children: [
          { id: 'src/components/button.tsx', label: 'button.tsx' },
          { id: 'src/components/card.tsx', label: 'card.tsx' },
          { id: 'src/components/input.tsx', label: 'input.tsx' },
        ],
      },
      { id: 'src/styles.css', label: 'styles.css' },
    ],
  },
  { id: 'package.json', label: 'package.json' },
  { id: 'README.md', label: 'README.md' },
];

function Demo() {
  const [selected, setSelected] = useState<string>();
  return (
    <div className="w-72">
      <Tree nodes={nodes} selectedId={selected} onSelect={setSelected} aria-label="File tree" />
    </div>
  );
}

export const Default: Story = { render: () => <Demo /> };

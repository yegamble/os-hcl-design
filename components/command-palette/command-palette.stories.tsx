import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { CommandPalette, useCommandPaletteShortcut } from './command-palette';
import { Button } from '../button/button';
import { Kbd } from '../kbd/kbd';

const meta: Meta<typeof CommandPalette> = {
  title: 'Components/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CommandPalette>;

function Demo() {
  const [open, setOpen] = useState(false);
  useCommandPaletteShortcut(() => setOpen((o) => !o));

  return (
    <div className="flex flex-col items-start gap-3">
      <Button onClick={() => setOpen(true)}>Open command palette</Button>
      <p className="text-footnote text-text-tertiary">
        …or press <Kbd>⌘</Kbd> <Kbd>K</Kbd>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[
          {
            id: 'home',
            label: 'Go to Home',
            group: 'Navigate',
            shortcut: ['g', 'h'],
            onSelect: () => {},
          },
          {
            id: 'settings',
            label: 'Open Settings',
            group: 'Navigate',
            shortcut: ['g', 's'],
            onSelect: () => {},
          },
          {
            id: 'new',
            label: 'New project',
            group: 'Actions',
            shortcut: ['⌘', 'N'],
            onSelect: () => {},
          },
          { id: 'invite', label: 'Invite teammate', group: 'Actions', onSelect: () => {} },
          { id: 'theme', label: 'Toggle theme', group: 'Account', onSelect: () => {} },
          { id: 'out', label: 'Sign out', group: 'Account', onSelect: () => {} },
        ]}
      />
    </div>
  );
}

export const Default: Story = { render: () => <Demo /> };

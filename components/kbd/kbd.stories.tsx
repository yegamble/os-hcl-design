import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from './kbd';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Shortcut: Story = {
  render: () => (
    <p className="text-body text-text-primary">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
    </p>
  ),
};

export const SingleKey: Story = {
  render: () => (
    <p className="text-body text-text-primary">
      Hit <Kbd>Esc</Kbd> to close.
    </p>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Medium: Story = { args: { 'aria-label': 'Loading' } };
export const Small: Story = { args: { 'aria-label': 'Loading', size: 'sm' } };
export const Large: Story = { args: { 'aria-label': 'Loading', size: 'lg' } };
export const Inline: Story = {
  render: () => (
    <span className="text-text-secondary inline-flex items-center gap-2">
      <Spinner size="sm" aria-hidden />
      Signing in…
    </span>
  ),
};

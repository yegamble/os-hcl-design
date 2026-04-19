import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <p className="text-body text-text-primary">Above</p>
      <Separator className="my-4" />
      <p className="text-body text-text-primary">Below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center">
      <span className="text-body text-text-primary">Left</span>
      <Separator orientation="vertical" className="mx-4" />
      <span className="text-body text-text-primary">Right</span>
    </div>
  ),
};

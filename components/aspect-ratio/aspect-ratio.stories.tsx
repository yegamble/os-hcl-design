import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AspectRatio>;

const placeholder = (label: string) => (
  <div className="bg-surface-elevated text-text-tertiary flex h-full w-full items-center justify-center">
    {label}
  </div>
);

export const Square: Story = {
  render: () => (
    <div className="w-64">
      <AspectRatio ratio={1} className="rounded-card">
        {placeholder('1 : 1')}
      </AspectRatio>
    </div>
  ),
};

export const Widescreen: Story = {
  render: () => (
    <div className="w-96">
      <AspectRatio ratio={16 / 9} className="rounded-card">
        {placeholder('16 : 9')}
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div className="w-48">
      <AspectRatio ratio={3 / 4} className="rounded-card">
        {placeholder('3 : 4')}
      </AspectRatio>
    </div>
  ),
};

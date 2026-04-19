import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = { args: { alt: 'Ada Lovelace' } };
export const Image: Story = {
  args: {
    alt: 'Ada Lovelace',
    src: 'https://i.pravatar.cc/80?u=ada',
  },
};
export const BrokenImageFallsBack: Story = {
  args: {
    alt: 'Grace Hopper',
    src: 'https://example.invalid/does-not-exist.jpg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar alt="Ada Lovelace" size="sm" />
      <Avatar alt="Ada Lovelace" size="md" />
      <Avatar alt="Ada Lovelace" size="lg" />
      <Avatar alt="Ada Lovelace" size="xl" />
    </div>
  ),
};

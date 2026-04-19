import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof IconButton>;

const Star = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10 1l2.8 5.7 6.3.9-4.5 4.4 1 6.2L10 15.3 4.4 18.2l1-6.2L1 7.6l6.3-.9L10 1z" />
  </svg>
);

export const Ghost: Story = { args: { 'aria-label': 'Favorite', children: <Star /> } };
export const Primary: Story = {
  args: { 'aria-label': 'Favorite', variant: 'primary', children: <Star /> },
};
export const Secondary: Story = {
  args: { 'aria-label': 'Favorite', variant: 'secondary', children: <Star /> },
};

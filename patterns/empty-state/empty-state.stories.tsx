import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './empty-state';

const meta: Meta<typeof EmptyState> = {
  title: 'Patterns/Empty State',
  component: EmptyState,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

const Inbox = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden fill="none">
    <rect x="6" y="14" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M6 24h12l4 6h4l4-6h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <Inbox />,
    title: 'No projects yet',
    description: 'Create your first project to get started.',
    actionLabel: 'Create project',
  },
};

export const NoIcon: Story = {
  args: {
    title: 'All caught up',
    description: 'No notifications right now — check back later.',
  },
};

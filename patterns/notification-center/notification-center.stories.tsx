import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationCenter } from './notification-center';

const meta: Meta<typeof NotificationCenter> = {
  title: 'Patterns/Notification Center',
  component: NotificationCenter,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NotificationCenter>;

const Bell = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden fill="none">
    <path
      d="M4 8a6 6 0 0112 0v3l2 3H2l2-3V8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M8 17a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const items = [
  {
    id: '1',
    title: 'Ada Lovelace commented',
    body: 'Looks great. Ship it.',
    meta: '2m',
    unread: true,
  },
  {
    id: '2',
    title: 'Deploy succeeded',
    body: 'Production deploy finished in 2m 14s.',
    meta: '10m',
    unread: true,
  },
  {
    id: '3',
    title: 'Invite accepted',
    body: 'Grace Hopper joined your team.',
    meta: '1h',
  },
  {
    id: '4',
    title: 'Weekly digest',
    body: '6 new issues • 3 resolved • 2 in review.',
    meta: 'Yesterday',
  },
];

export const WithUnread: Story = {
  render: () => (
    <div className="flex justify-end p-8">
      <NotificationCenter trigger={<Bell />} items={items} onMarkAllRead={() => {}} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="flex justify-end p-8">
      <NotificationCenter trigger={<Bell />} items={[]} />
    </div>
  ),
};

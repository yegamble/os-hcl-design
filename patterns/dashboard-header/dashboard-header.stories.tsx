import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardHeader } from './dashboard-header';

const meta: Meta<typeof DashboardHeader> = {
  title: 'Patterns/Dashboard Header',
  component: DashboardHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DashboardHeader>;

export const Default: Story = {
  render: () => (
    <DashboardHeader
      brand="Acme"
      nav={[
        { href: '#home', label: 'Home', active: true },
        { href: '#projects', label: 'Projects' },
        { href: '#members', label: 'Members' },
        { href: '#billing', label: 'Billing' },
      ]}
      user={{ name: 'Ada Lovelace', email: 'ada@acme.com' }}
      onSearch={() => {}}
      onSignOut={() => {}}
    />
  ),
};

export const WithoutSearch: Story = {
  render: () => (
    <DashboardHeader
      brand="Acme"
      nav={[
        { href: '#home', label: 'Home', active: true },
        { href: '#projects', label: 'Projects' },
      ]}
      user={{ name: 'Grace Hopper' }}
    />
  ),
};

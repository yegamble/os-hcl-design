import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Sign in', variant: 'primary' } };
export const Secondary: Story = { args: { children: 'Cancel', variant: 'secondary' } };
export const Ghost: Story = { args: { children: 'Learn more', variant: 'ghost' } };
export const Destructive: Story = { args: { children: 'Delete project', variant: 'destructive' } };

export const Small: Story = { args: { children: 'Sign in', size: 'sm' } };
export const Medium: Story = { args: { children: 'Sign in', size: 'md' } };
export const Large: Story = { args: { children: 'Sign in', size: 'lg' } };

export const Disabled: Story = { args: { children: 'Sign in', disabled: true } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

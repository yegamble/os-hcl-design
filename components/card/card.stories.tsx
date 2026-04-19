import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './card';
import { Button } from '../button/button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'glass'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['md', 'lg', 'xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Body>
        <p>Short status summary.</p>
      </Card.Body>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Header>Plan usage</Card.Header>
      <Card.Body>
        <p>You have used 42% of your included build minutes.</p>
      </Card.Body>
      <Card.Footer>Resets on the 1st of each month.</Card.Footer>
    </Card>
  ),
};

export const Elevated: Story = {
  args: { variant: 'elevated' },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Body>
        <h3 className="text-title1 text-text-primary font-semibold">Pro</h3>
        <p className="text-text-secondary mt-2">$20 / month</p>
        <Button className="mt-4">Upgrade</Button>
      </Card.Body>
    </Card>
  ),
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Body>
        <p>Outlined card — lower visual weight for dense layouts.</p>
      </Card.Body>
    </Card>
  ),
};

export const Glass: Story = {
  args: { variant: 'glass' },
  render: (args) => (
    <div className="rounded-card bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-10">
      <Card {...args} className="max-w-sm">
        <Card.Body>
          <p className="text-text-primary">
            Glass variant on a rich background. Toggle `prefers-reduced-transparency` in the toolbar
            to see the solid fallback.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {(['default', 'elevated', 'outlined'] as const).map((v) => (
        <Card key={v} variant={v}>
          <Card.Header>{v[0]?.toUpperCase() + v.slice(1)}</Card.Header>
          <Card.Body>Variant body content.</Card.Body>
        </Card>
      ))}
      <div className="rounded-card bg-gradient-to-br from-blue-400 to-purple-500 p-4">
        <Card variant="glass">
          <Card.Header>Glass</Card.Header>
          <Card.Body>Over imagery.</Card.Body>
        </Card>
      </div>
    </div>
  ),
};

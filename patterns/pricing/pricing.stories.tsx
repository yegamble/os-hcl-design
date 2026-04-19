import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pricing } from './pricing';

const meta: Meta<typeof Pricing> = {
  title: 'Patterns/Pricing',
  component: Pricing,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Pricing>;

export const Default: Story = {
  args: {
    title: 'Simple, transparent pricing.',
    subtitle: 'Start free, upgrade when you\u2019re ready.',
    tiers: [
      {
        name: 'Free',
        price: '$0',
        period: '/ forever',
        features: ['Up to 3 projects', 'Community support', 'Core components'],
        cta: 'Get started',
      },
      {
        name: 'Pro',
        price: '$20',
        period: '/ month',
        features: ['Unlimited projects', 'Email support', 'All components', 'Advanced patterns'],
        cta: 'Start 14-day trial',
        featured: true,
      },
      {
        name: 'Team',
        price: '$80',
        period: '/ month',
        features: ['Everything in Pro', 'Seats for 10', 'Priority support', 'SSO + SCIM'],
        cta: 'Contact sales',
      },
    ],
  },
};

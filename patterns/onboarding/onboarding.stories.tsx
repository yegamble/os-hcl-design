import type { Meta, StoryObj } from '@storybook/react-vite';
import { Onboarding } from './onboarding';
import { Input } from '../../components/input/input';

const meta: Meta<typeof Onboarding> = {
  title: 'Patterns/Onboarding',
  component: Onboarding,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Onboarding>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Onboarding
        steps={[
          {
            id: 'welcome',
            label: 'Welcome',
            description: 'Let\u2019s get you set up in under a minute.',
            content: (
              <p className="text-text-secondary text-body">
                You can change any of these settings later from your profile.
              </p>
            ),
          },
          {
            id: 'profile',
            label: 'Profile',
            description: 'What should we call you?',
            content: (
              <div className="max-w-sm">
                <Input placeholder="Display name" aria-label="Display name" />
              </div>
            ),
          },
          {
            id: 'invite',
            label: 'Invite',
            description: 'Bring your team along.',
            content: (
              <div className="max-w-sm">
                <Input
                  type="email"
                  placeholder="teammate@example.com"
                  aria-label="Teammate email"
                />
              </div>
            ),
          },
          {
            id: 'done',
            label: 'Done',
            description: 'You\u2019re all set.',
            content: (
              <p className="text-text-secondary text-body">
                Click Finish to head to your dashboard.
              </p>
            ),
          },
        ]}
      />
    </div>
  ),
};

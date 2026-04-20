import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { id: 'account', label: 'Account', description: 'Email + password' },
  { id: 'profile', label: 'Profile', description: 'Name + photo' },
  { id: 'plan', label: 'Choose plan' },
  { id: 'done', label: 'Done' },
];

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Stepper steps={steps} current={1} />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="w-72">
      <Stepper steps={steps} current={2} orientation="vertical" />
    </div>
  ),
};

export const Complete: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Stepper steps={steps} current={steps.length} />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: 'you@example.com' } };
export const WithLabel: Story = {
  render: () => (
    <label className="flex w-80 flex-col gap-2" htmlFor="email-input">
      <span className="text-subheadline text-text-secondary">Email</span>
      <Input id="email-input" type="email" placeholder="you@example.com" />
    </label>
  ),
};
export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'not-an-email' },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: 'disabled input' } };
export const Small: Story = { args: { size: 'sm', placeholder: 'small' } };
export const Large: Story = { args: { size: 'lg', placeholder: 'large' } };

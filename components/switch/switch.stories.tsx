/* eslint-disable jsx-a11y/label-has-associated-control -- Radix Switch renders a <button role="switch">, which the lint rule cannot detect as a valid form control. The label-wrap pattern is a11y-correct. */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <label className="flex w-80 cursor-pointer items-center justify-between py-3">
      <span className="text-body text-text-primary">Enable notifications</span>
      <Switch />
    </label>
  ),
};

export const Checked: Story = {
  render: () => (
    <label className="flex w-80 cursor-pointer items-center justify-between py-3">
      <span className="text-body text-text-primary">Enabled</span>
      <Switch defaultChecked />
    </label>
  ),
};

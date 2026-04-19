/* eslint-disable jsx-a11y/label-has-associated-control -- Radix Checkbox renders a <button role="checkbox">, which the lint rule cannot detect as a valid form control. The label-wrap pattern is a11y-correct. */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-3 py-3">
      <Checkbox id="agree" />
      <span className="text-body text-text-primary">I agree to the terms</span>
    </label>
  ),
};

export const Checked: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-3 py-3">
      <Checkbox id="agree2" defaultChecked />
      <span className="text-body text-text-primary">Pre-checked</span>
    </label>
  ),
};

export const Disabled: Story = {
  render: () => (
    <label className="flex items-center gap-3 py-3">
      <Checkbox id="agree3" disabled />
      <span className="text-body text-text-tertiary">Disabled</span>
    </label>
  ),
};

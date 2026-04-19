/* eslint-disable jsx-a11y/label-has-associated-control -- Radix RadioGroup.Item renders <button role="radio">, which the lint rule cannot detect as a valid form control. The label-wrap pattern is a11y-correct. */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly" className="w-80">
      <label className="flex cursor-pointer items-center gap-3 py-3">
        <Radio value="monthly" />
        <span className="text-body text-text-primary">Monthly</span>
      </label>
      <label className="flex cursor-pointer items-center gap-3 py-3">
        <Radio value="annual" />
        <span className="text-body text-text-primary">Annual — save 20%</span>
      </label>
      <label className="flex cursor-pointer items-center gap-3 py-3">
        <Radio value="lifetime" />
        <span className="text-body text-text-primary">Lifetime</span>
      </label>
    </RadioGroup>
  ),
};

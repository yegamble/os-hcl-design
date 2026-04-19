import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: 'Tell us more…' } };
export const WithValue: Story = { args: { defaultValue: 'Some existing content here.' } };
export const Invalid: Story = { args: { 'aria-invalid': true, defaultValue: 'invalid' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'disabled' } };

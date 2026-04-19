import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Quarter: Story = { args: { 'aria-label': 'Upload progress', value: 25 } };
export const Half: Story = { args: { 'aria-label': 'Upload progress', value: 50 } };
export const ThreeQuarters: Story = { args: { 'aria-label': 'Upload progress', value: 75 } };
export const Complete: Story = { args: { 'aria-label': 'Upload progress', value: 100 } };
export const Indeterminate: Story = { args: { 'aria-label': 'Loading' } };

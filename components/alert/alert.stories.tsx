import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <div>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add a payment method later.</AlertDescription>
      </div>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <div>
        <AlertTitle>Could not save</AlertTitle>
        <AlertDescription>Check your network and try again.</AlertDescription>
      </div>
    </Alert>
  ),
};

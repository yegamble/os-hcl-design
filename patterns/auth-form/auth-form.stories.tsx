import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthForm } from './auth-form';

const meta: Meta<typeof AuthForm> = {
  title: 'Patterns/Auth Form',
  component: AuthForm,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['sign-in', 'sign-up'],
    },
    showGoogle: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof AuthForm>;

export const SignIn: Story = { args: { mode: 'sign-in', showGoogle: true } };
export const SignUp: Story = { args: { mode: 'sign-up', showGoogle: true } };
export const EmailOnly: Story = { args: { mode: 'sign-in', showGoogle: false } };
export const WithErrorDemo: Story = {
  render: () => (
    <AuthForm
      onSubmit={() => {
        throw new Error('Invalid email or password.');
      }}
    />
  ),
};

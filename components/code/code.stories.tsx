import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from './code';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Code>;

export const Inline: Story = {
  render: () => (
    <p className="text-body text-text-primary">
      Run <Code>pnpm install</Code> to start, then <Code>pnpm run dev</Code> to launch Storybook.
    </p>
  ),
};

export const Block: Story = {
  render: () => (
    <Code block language="ts">
      {`const greeting = 'Hello, world!';
console.log(greeting);`}
    </Code>
  ),
};

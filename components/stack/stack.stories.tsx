import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Stack, VStack } from './stack';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({ n }: { n: number }) => (
  <div className="bg-surface-elevated border-border-subtle rounded-button text-body text-text-primary border px-4 py-3">
    {n}
  </div>
);

export const VerticalDefault: Story = {
  render: () => (
    <div className="w-64">
      <Stack gap="3">
        <Box n={1} />
        <Box n={2} />
        <Box n={3} />
      </Stack>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <HStack gap="4" align="center">
      <Box n={1} />
      <Box n={2} />
      <Box n={3} />
    </HStack>
  ),
};

export const WideGap: Story = {
  render: () => (
    <VStack gap="8">
      <Box n={1} />
      <Box n={2} />
    </VStack>
  ),
};

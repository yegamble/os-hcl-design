import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = { args: { children: 'Your changes are saved.' } };
export const Secondary: Story = {
  args: { tone: 'secondary', children: 'Last updated 2 minutes ago.' },
};
export const Footnote: Story = { args: { size: 'footnote', tone: 'tertiary', children: 'v0.1.0' } };
export const Destructive: Story = {
  args: { tone: 'destructive', children: 'That action failed.' },
};

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(['body', 'callout', 'subheadline', 'footnote', 'caption1', 'caption2'] as const).map(
        (s) => (
          <div key={s} className="flex items-baseline gap-4">
            <Text size="caption1" tone="tertiary" className="w-24 font-mono">
              {s}
            </Text>
            <Text size={s}>The quick brown fox jumps over the lazy dog.</Text>
          </div>
        ),
      )}
    </div>
  ),
};

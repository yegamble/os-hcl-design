import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="border-border-subtle rounded-card h-64 w-64 border">
      <div className="space-y-3 p-4">
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-text-primary text-body">
            Item {i + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

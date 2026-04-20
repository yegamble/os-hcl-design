import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { Avatar } from '../avatar/avatar';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <a href="/u/ada" className="text-text-link hover:underline">
          @ada
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar alt="Ada Lovelace" />
          <div>
            <p className="text-body text-text-primary font-semibold">Ada Lovelace</p>
            <p className="text-text-secondary text-footnote">First programmer. Joined 1843.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

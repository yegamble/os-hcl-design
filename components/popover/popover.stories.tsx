import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from '../button/button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">More options</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start">
        <h3 className="text-headline text-text-primary font-semibold">Quick actions</h3>
        <p className="text-text-secondary text-footnote mt-2">Select an action to continue.</p>
      </PopoverContent>
    </Popover>
  ),
};

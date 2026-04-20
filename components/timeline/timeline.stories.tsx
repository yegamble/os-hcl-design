import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from './timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Timeline
        items={[
          { id: '1', title: 'Created', meta: '9:12 AM', content: 'Project "Aurora" initialized.' },
          { id: '2', title: 'Invited', meta: '10:40 AM', content: 'Ada Lovelace joined as Admin.' },
          { id: '3', title: 'Deployed', meta: '3:07 PM', content: 'First production deploy.' },
          { id: '4', title: 'Archived', meta: 'Yesterday', content: 'Moved to read-only.' },
        ]}
      />
    </div>
  ),
};

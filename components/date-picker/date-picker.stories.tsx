import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DatePicker } from './date-picker';
import type { DateRange } from 'react-day-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

function SingleDemo() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div className="w-80">
      <DatePicker
        value={date}
        onChange={(v) => setDate(v as Date | undefined)}
        aria-label="Start date"
      />
    </div>
  );
}

function RangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <div className="w-80">
      <DatePicker
        mode="range"
        value={range}
        onChange={(v) => setRange(v as DateRange | undefined)}
        aria-label="Date range"
        placeholder="Pick a range"
      />
    </div>
  );
}

export const Single: Story = { render: () => <SingleDemo /> };
export const Range: Story = { render: () => <RangeDemo /> };

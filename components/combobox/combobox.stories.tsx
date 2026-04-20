import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Combobox } from './combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Combobox>;

const COUNTRIES = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'mx', label: 'Mexico' },
];

function Demo() {
  const [value, setValue] = useState<string>();
  return (
    <div className="w-80">
      <Combobox
        options={COUNTRIES}
        value={value}
        onChange={setValue}
        placeholder="Search countries…"
        aria-label="Country"
      />
    </div>
  );
}

export const Default: Story = { render: () => <Demo /> };

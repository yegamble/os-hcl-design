import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Settings, SettingsSection } from './settings';
import { Input } from '../../components/input/input';
import { Switch } from '../../components/switch/switch';
import { Button } from '../../components/button/button';

const meta: Meta<typeof Settings> = {
  title: 'Patterns/Settings',
  component: Settings,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Settings>;

function Demo() {
  const [active, setActive] = useState('profile');
  const nav = [
    {
      id: 'profile',
      label: 'Profile',
      active: active === 'profile',
      onClick: () => setActive('profile'),
    },
    { id: 'team', label: 'Team', active: active === 'team', onClick: () => setActive('team') },
    {
      id: 'billing',
      label: 'Billing',
      active: active === 'billing',
      onClick: () => setActive('billing'),
    },
    {
      id: 'security',
      label: 'Security',
      active: active === 'security',
      onClick: () => setActive('security'),
    },
  ];

  return (
    <Settings nav={nav}>
      <SettingsSection title="Profile" description="Your public profile is visible to your team.">
        <div className="flex items-center justify-between">
          <span className="text-body text-text-primary">Display name</span>
          <Input defaultValue="Ada Lovelace" className="max-w-xs" aria-label="Display name" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-body text-text-primary">Email</span>
          <Input
            type="email"
            defaultValue="ada@example.com"
            className="max-w-xs"
            aria-label="Email"
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Notifications" description="Choose what we notify you about.">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- Radix Switch renders <button role="switch">. */}
        <label className="flex cursor-pointer items-center justify-between">
          <span className="text-body text-text-primary">Product updates</span>
          <Switch defaultChecked />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- Radix Switch renders <button role="switch">. */}
        <label className="flex cursor-pointer items-center justify-between">
          <span className="text-body text-text-primary">Security alerts</span>
          <Switch defaultChecked />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- Radix Switch renders <button role="switch">. */}
        <label className="flex cursor-pointer items-center justify-between">
          <span className="text-body text-text-primary">Marketing</span>
          <Switch />
        </label>
      </SettingsSection>

      <SettingsSection title="Danger zone" description="These actions are irreversible.">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-body text-text-primary font-medium">Delete workspace</p>
            <p className="text-footnote text-text-tertiary">
              All projects and data will be permanently removed.
            </p>
          </div>
          <Button variant="destructive">Delete</Button>
        </div>
      </SettingsSection>
    </Settings>
  );
}

export const Default: Story = { render: () => <Demo /> };

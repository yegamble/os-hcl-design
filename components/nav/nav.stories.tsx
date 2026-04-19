import type { Meta, StoryObj } from '@storybook/react-vite';
import { Nav, NavList, NavItem } from './nav';

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  render: () => (
    <Nav aria-label="Primary">
      <span className="text-headline font-semibold">Acme</span>
      <NavList>
        <NavItem href="/" active>
          Home
        </NavItem>
        <NavItem href="/docs">Docs</NavItem>
        <NavItem href="/changelog">Changelog</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavList>
    </Nav>
  ),
};

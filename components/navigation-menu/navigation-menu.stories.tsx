import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-96 grid-cols-2 gap-2">
            <NavigationMenuLink href="/a">Analytics</NavigationMenuLink>
            <NavigationMenuLink href="/b">Billing</NavigationMenuLink>
            <NavigationMenuLink href="/c">Chat</NavigationMenuLink>
            <NavigationMenuLink href="/d">Docs</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent className="w-64">
            <NavigationMenuLink href="/guides">Guides</NavigationMenuLink>
            <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
            <NavigationMenuLink href="/changelog">Changelog</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/pricing"
            className="text-callout text-text-secondary hover:text-text-primary inline-flex min-h-11 items-center px-4"
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const HeroLarge: Story = {
  args: { level: 1, size: 'hero-lg', children: 'The best way to ship.' },
};

export const Title1: Story = { args: { level: 2, size: 'title1', children: 'Pricing' } };
export const Title2: Story = { args: { level: 3, size: 'title2', children: 'Pro' } };
export const Headline: Story = { args: { level: 4, size: 'headline', children: 'Plan usage' } };

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={1} size="hero-lg">
        Hero LG
      </Heading>
      <Heading level={2} size="hero-md">
        Hero MD
      </Heading>
      <Heading level={2} size="hero-sm">
        Hero SM
      </Heading>
      <Heading level={2} size="large-title">
        Large title
      </Heading>
      <Heading level={2} size="title1">
        Title 1
      </Heading>
      <Heading level={3} size="title2">
        Title 2
      </Heading>
      <Heading level={3} size="title3">
        Title 3
      </Heading>
      <Heading level={4} size="headline">
        Headline
      </Heading>
    </div>
  ),
};

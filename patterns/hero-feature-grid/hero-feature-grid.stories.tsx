import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroFeatureGrid } from './hero-feature-grid';

const meta: Meta<typeof HeroFeatureGrid> = {
  title: 'Patterns/Hero Feature Grid',
  component: HeroFeatureGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof HeroFeatureGrid>;

export const Default: Story = {
  args: {
    title: 'The best way to ship.',
    subtitle: 'A design system that reads itself — for AI agents and humans alike.',
    cta: 'Get started',
    features: [
      {
        title: 'Tokens that travel',
        body: 'DTCG v1 JSON compiles to CSS variables in one command. Light, dark, high-contrast all emit together.',
      },
      {
        title: 'Accessible by default',
        body: 'WCAG 2.1 AA contrast enforced at the token layer. 44 px hit targets. Focus-visible rings.',
      },
      {
        title: 'Apple-inspired discipline',
        body: 'Whitespace, hierarchy, motion with intent — codified as lint rules, not soft guidelines.',
      },
    ],
  },
};

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../components/**/*.stories.@(ts|tsx)',
    '../patterns/**/*.stories.@(ts|tsx)',
    '../tests/fixtures/*.stories.@(ts|tsx)',
  ],
  addons: ['@storybook/addon-a11y', '@storybook/addon-themes'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

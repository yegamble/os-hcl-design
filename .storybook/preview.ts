import type { Preview } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../styles/index.css';

import { withReducedMotion, withReducedTransparency } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
    layout: 'centered',
  },

  globalTypes: {
    reducedMotion: {
      name: 'Reduced Motion',
      description: 'Emulate prefers-reduced-motion user preference',
      defaultValue: 'no-preference',
      toolbar: {
        icon: 'play',
        items: [
          { value: 'no-preference', title: 'No preference' },
          { value: 'reduce', title: 'Reduce' },
        ],
        dynamicTitle: true,
      },
    },
    reducedTransparency: {
      name: 'Reduced Transparency',
      description: 'Emulate prefers-reduced-transparency user preference',
      defaultValue: 'no-preference',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'no-preference', title: 'No preference' },
          { value: 'reduce', title: 'Reduce' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    withReducedMotion,
    withReducedTransparency,
  ],
};

export default preview;

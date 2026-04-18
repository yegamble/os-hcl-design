module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    'node_modules/**',
    'storybook-static/**',
    'dist/**',
    'build/**',
    'styles/tokens.css',
  ],
  rules: {
    'no-descending-specificity': null,
    'custom-property-empty-line-before': null,
    'import-notation': null,
    'comment-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'theme',
          'source',
          'utility',
          'apply',
          'variant',
          'custom-variant',
          'tailwind',
        ],
      },
    ],
  },
};

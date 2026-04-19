module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [require.resolve('./stylelint-rules/semantic-tokens-only.cjs')],
  ignoreFiles: [
    'node_modules/**',
    'storybook-static/**',
    'dist/**',
    'build/**',
    'styles/tokens.css',
  ],
  overrides: [
    {
      files: ['components/**/*.css', 'patterns/**/*.css'],
      rules: {
        'local/semantic-tokens-only': true,
      },
    },
  ],
  rules: {
    'no-descending-specificity': null,
    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,
    'import-notation': null,
    'comment-empty-line-before': null,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
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

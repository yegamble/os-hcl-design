module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'local-rules'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-explicit-any': 'error',
    'local-rules/no-raw-hex-in-className': 'error',
  },
  overrides: [
    {
      files: ['components/**/*.{ts,tsx}', 'patterns/**/*.{ts,tsx}'],
      plugins: ['tailwindcss'],
      extends: ['plugin:tailwindcss/recommended'],
      rules: {
        'tailwindcss/no-arbitrary-value': 'error',
        'tailwindcss/classnames-order': 'warn',
      },
    },
    {
      files: [
        '*.cjs',
        '*.mjs',
        '*.js',
        'eslint-local-rules/**/*',
        'stylelint-rules/**/*',
        'scripts/**/*',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'storybook-static/',
    'dist/',
    'build/',
    'styles/tokens.css',
    'llms-full.txt',
    '.visual-baselines/',
    '*.md',
    '**/*.d.ts',
  ],
};

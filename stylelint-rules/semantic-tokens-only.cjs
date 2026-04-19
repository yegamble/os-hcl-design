/**
 * Stylelint plugin: forbid primitive-layer token references in component CSS.
 *
 * Components and patterns must reference semantic tokens only
 * (`var(--color-action-primary)`, `var(--space-gutter-card)`, etc.) — never
 * primitives (`var(--color-blue-500)`, `var(--space-24)`). Applied via overrides
 * to `components/**` and `patterns/**`; primitives are legal everywhere else
 * (tokens.css generates them, utilities.css may reference them when they are
 * semantic by intent).
 */

'use strict';

const stylelint = require('stylelint');

const ruleName = 'local/semantic-tokens-only';
const messages = stylelint.utils.ruleMessages(ruleName, {
  primitiveRef: (name) =>
    `Component CSS references primitive token "${name}". Use a semantic token instead (see foundations/color.md).`,
});

const PRIMITIVE_GROUPS = [
  '--color-gray-',
  '--color-blue-',
  '--color-red-',
  '--color-green-',
  '--color-yellow-',
  '--color-orange-',
  '--color-purple-',
  '--color-pink-',
  '--space-0',
  '--space-2',
  '--space-4',
  '--space-8',
  '--space-12',
  '--space-16',
  '--space-20',
  '--space-24',
  '--space-32',
  '--space-40',
  '--space-48',
  '--space-64',
  '--space-80',
  '--space-96',
  '--space-128',
];

const PRIMITIVE_RE = new RegExp(PRIMITIVE_GROUPS.map((g) => g.replace(/[-]/g, '\\-')).join('|'));

module.exports = stylelint.createPlugin(ruleName, (enabled) => {
  return (root, result) => {
    if (!enabled) return;

    root.walkDecls((decl) => {
      if (!decl.value || !decl.value.includes('var(')) return;
      const matches = decl.value.match(/var\((--[a-zA-Z0-9-]+)/g) || [];
      for (const m of matches) {
        const name = m.replace('var(', '');
        if (PRIMITIVE_RE.test(name)) {
          stylelint.utils.report({
            ruleName,
            result,
            node: decl,
            message: messages.primitiveRef(name),
          });
        }
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

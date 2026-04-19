/**
 * Rejects raw color values (hex, rgb, rgba, hsl, hsla) inside JSX `className`
 * string literals and template literals. Does NOT flag SVG `fill`/`stroke`,
 * `style` attributes, or `data-*` attributes — those may legitimately contain
 * color values (favicons, data viz, dynamic styles).
 *
 * Allowlist: per-line disable via `// eslint-disable-next-line local-rules/no-raw-hex-in-className -- <reason>`.
 * The reason-suffix is enforced by `eslint-plugin-eslint-comments/require-description`.
 */

'use strict';

const COLOR_RE = /(?:#[0-9a-fA-F]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\(|\boklch\s*\(|\boklab\s*\()/;

function checkString(context, node, value) {
  if (!value || typeof value !== 'string') return;
  const m = value.match(COLOR_RE);
  if (m) {
    context.report({
      node,
      messageId: 'rawColor',
      data: { match: m[0] },
    });
  }
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban raw color values in JSX className strings. Use semantic tokens.',
      recommended: true,
    },
    schema: [],
    messages: {
      rawColor:
        'Raw color value "{{match}}" in className. Use a semantic token utility (e.g. `bg-action-primary`, `text-text-primary`) instead of `#…` / rgb() / hsl(). See foundations/color.md.',
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (!node.name || node.name.name !== 'className') return;
        const v = node.value;
        if (!v) return;
        if (v.type === 'Literal') {
          checkString(context, v, v.value);
        } else if (v.type === 'JSXExpressionContainer') {
          const expr = v.expression;
          if (expr.type === 'Literal') {
            checkString(context, expr, expr.value);
          } else if (expr.type === 'TemplateLiteral') {
            for (const quasi of expr.quasis) {
              checkString(context, quasi, quasi.value.cooked);
            }
          } else if (expr.type === 'CallExpression') {
            // e.g. clsx('bg-primary', maybe && 'text-x')
            for (const arg of expr.arguments) {
              if (arg.type === 'Literal') {
                checkString(context, arg, arg.value);
              } else if (arg.type === 'TemplateLiteral') {
                for (const quasi of arg.quasis) {
                  checkString(context, quasi, quasi.value.cooked);
                }
              }
            }
          }
        }
      },
    };
  },
};

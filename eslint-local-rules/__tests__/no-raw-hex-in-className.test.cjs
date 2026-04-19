/**
 * Unit tests for local-rules/no-raw-hex-in-className.
 * Run via: node --test eslint-local-rules/__tests__/
 */

'use strict';

const { RuleTester } = require('eslint');
const { test } = require('node:test');
const rule = require('../no-raw-hex-in-className.js');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
});

test('no-raw-hex-in-className rule', () => {
  ruleTester.run('no-raw-hex-in-className', rule, {
    valid: [
      { code: '<div className="bg-action-primary text-text-primary" />' },
      { code: '<div className="p-20 rounded-card" />' },
      { code: '<svg><path fill="#ff0000" /></svg>' }, // fill attr, not className
      { code: '<div style={{ color: "#0071e3" }} />' }, // style attr, not className
      { code: '<div data-color="#123456" />' }, // data attr
      { code: 'const cls = clsx("bg-surface-default")' },
    ],
    invalid: [
      {
        code: '<div className="bg-[#0071E3]" />',
        errors: [{ messageId: 'rawColor' }],
      },
      {
        code: '<div className="text-[rgb(0,113,227)]" />',
        errors: [{ messageId: 'rawColor' }],
      },
      {
        code: '<div className={`bg-[#0071E3] ${extra}`} />',
        errors: [{ messageId: 'rawColor' }],
      },
      {
        code: '<div className={clsx("bg-action-primary", "text-[#ff3b30]")} />',
        errors: [{ messageId: 'rawColor' }],
      },
    ],
  });
});

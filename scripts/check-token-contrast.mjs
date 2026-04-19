#!/usr/bin/env node
/**
 * Verify WCAG contrast for every text × surface semantic-token pair
 * across light, dark, and high-contrast modes. Fail CI if any pair is below:
 *   - 4.5 : 1 for body text
 *   - 3   : 1 for large text / UI components
 *
 * Parses styles/tokens.css (emitted by build-tokens.mjs) scoped blocks:
 *   :root { --color-text-primary: #xxx; }
 *   [data-theme="dark"] { ... }
 *   [data-contrast="more"] { ... }
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKENS_CSS = join(__dirname, '..', 'styles/tokens.css');

const TEXT_ROLES = ['primary', 'secondary', 'tertiary', 'link', 'destructive'];
const SURFACE_ROLES = ['default', 'elevated', 'raised', 'opaque'];

const MODES = [
  { key: 'light', selector: '[data-theme="light"], :root' },
  { key: 'dark', selector: '[data-theme="dark"]' },
  { key: 'high-contrast', selector: '[data-contrast="more"]' },
];

// Parse `:root { --x: #…; --y: rgb(…); }` blocks.
function parseBlock(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`${escaped}\\s*\\{([^}]+)\\}`, 'g');
  const out = {};
  let m;
  while ((m = re.exec(css)) !== null) {
    for (const line of m[1].split(';')) {
      const t = line.trim();
      if (!t) continue;
      const eq = t.indexOf(':');
      if (eq < 0) continue;
      const name = t.slice(0, eq).trim();
      const value = t.slice(eq + 1).trim();
      out[name] = value;
    }
  }
  return out;
}

function hexToRgb(hex) {
  let s = hex.replace('#', '');
  if (s.length === 3)
    s = s
      .split('')
      .map((c) => c + c)
      .join('');
  if (s.length === 6) {
    return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
  }
  return null;
}

function luminance([r, g, b]) {
  const [R, G, B] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrast(rgb1, rgb2) {
  const l1 = luminance(rgb1);
  const l2 = luminance(rgb2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// Resolve a token value (may be another var(--…) reference) against a vars map.
function resolve(value, vars, seen = new Set()) {
  const m = value.match(/var\((--[a-zA-Z0-9-]+)\)/);
  if (m) {
    const next = m[1];
    if (seen.has(next)) return null;
    seen.add(next);
    if (!(next in vars)) return null;
    return resolve(vars[next], vars, seen);
  }
  return value;
}

const css = readFileSync(TOKENS_CSS, 'utf8');

let failed = 0;
let checked = 0;

for (const { key, selector } of MODES) {
  const modeVars = parseBlock(css, selector);
  // Dark/high-contrast blocks only contain overrides — fall through to light defaults.
  const lightVars = parseBlock(css, '[data-theme="light"], :root');
  const vars = { ...lightVars, ...modeVars };

  for (const t of TEXT_ROLES) {
    for (const s of SURFACE_ROLES) {
      const textVarName = `--color-text-${t}`;
      const surfVarName = `--color-surface-${s}`;
      if (!(textVarName in vars) || !(surfVarName in vars)) continue;
      const textVal = resolve(vars[textVarName], vars);
      const surfVal = resolve(vars[surfVarName], vars);
      if (!textVal || !surfVal) continue;
      const textRgb = hexToRgb(textVal);
      const surfRgb = hexToRgb(surfVal);
      if (!textRgb || !surfRgb) continue;
      checked++;
      const ratio = contrast(textRgb, surfRgb);
      const threshold = t === 'tertiary' ? 3 : 4.5; // tertiary is a large/UI role
      if (ratio < threshold) {
        console.error(
          `✗ [${key}] text.${t} on surface.${s}: ${ratio.toFixed(2)} : 1 (needs ≥ ${threshold})`,
        );
        failed++;
      }
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} pair(s) failed contrast check.`);
  process.exit(1);
}
console.log(`✓ check-token-contrast: ${checked} pair(s) pass WCAG AA across 3 modes`);

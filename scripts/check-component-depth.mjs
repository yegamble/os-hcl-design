#!/usr/bin/env node
/**
 * Verifies every `components/<name>/` has all 5 sibling files and every
 * `patterns/<name>/` has all 4 sibling files. Fails CI on any missing.
 */

import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const REQUIREMENTS = {
  components: ['.tsx', '.md', '.spec.json', '.stories.tsx', '.tokens.json'],
  patterns: ['.tsx', '.md', '.spec.json', '.stories.tsx'],
};

let failed = 0;
let checked = 0;

for (const [kind, requiredExts] of Object.entries(REQUIREMENTS)) {
  const kindDir = join(ROOT, kind);
  if (!existsSync(kindDir)) continue;
  for (const entry of readdirSync(kindDir)) {
    const dir = join(kindDir, entry);
    if (!statSync(dir).isDirectory()) continue;
    checked++;
    const files = readdirSync(dir);
    const missing = [];
    for (const ext of requiredExts) {
      const expected = entry + ext;
      if (!files.includes(expected)) missing.push(expected);
    }
    if (missing.length > 0) {
      console.error(`✗ ${kind}/${entry} is missing: ${missing.join(', ')}`);
      failed++;
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} directory/directories failed depth check.`);
  process.exit(1);
}
console.log(`✓ check-component-depth: ${checked} directories pass`);

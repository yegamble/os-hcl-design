#!/usr/bin/env node
/**
 * Verifies every components/<name>/<name>.md and patterns/<name>/<name>.md
 * contains the canonical 11 `## ` headings from foundations/component-template.md,
 * in the same order. Fails CI on mismatch.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TEMPLATE = join(ROOT, 'foundations/component-template.md');

function extractLevel2Headings(text) {
  const out = [];
  for (const line of text.split('\n')) {
    const m = line.match(/^## (.+)$/);
    if (m) out.push(m[1].trim());
  }
  return out;
}

const canonical = extractLevel2Headings(readFileSync(TEMPLATE, 'utf8'));
if (canonical.length !== 11) {
  console.error(
    `✗ foundations/component-template.md must have exactly 11 '## ' headings; found ${canonical.length}`,
  );
  process.exit(1);
}

const targets = [];
for (const kind of ['components', 'patterns']) {
  const kindDir = join(ROOT, kind);
  if (!existsSync(kindDir)) continue;
  for (const entry of readdirSync(kindDir)) {
    const dir = join(kindDir, entry);
    if (!statSync(dir).isDirectory()) continue;
    const md = join(dir, `${entry}.md`);
    if (existsSync(md)) targets.push(md);
  }
}

let failed = 0;
for (const file of targets) {
  const got = extractLevel2Headings(readFileSync(file, 'utf8'));
  const ok = got.length === canonical.length && got.every((h, i) => h === canonical[i]);
  if (!ok) {
    console.error(`✗ ${file} headings do not match canonical template.`);
    console.error(`  Expected: ${canonical.join(' / ')}`);
    console.error(`  Got:      ${got.join(' / ')}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} doc(s) failed section-heading check.`);
  process.exit(1);
}
console.log(`✓ check-doc-sections: ${targets.length} doc(s) match canonical template`);

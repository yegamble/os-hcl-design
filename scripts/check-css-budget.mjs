#!/usr/bin/env node
/**
 * Total gzip size of all CSS under `storybook-static/` must be under 15 KB
 * (Tailwind v4 Oxide typical: <10 KB). Budget per PRD.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, '..', 'storybook-static');
const LIMIT = 15 * 1024; // 15 KB

if (!existsSync(DIR)) {
  console.log(
    `⚠ storybook-static/ not found; skipping CSS budget check (run after build:storybook)`,
  );
  process.exit(0);
}

function walk(d) {
  const out = [];
  for (const entry of readdirSync(d)) {
    const f = join(d, entry);
    const st = statSync(f);
    if (st.isDirectory()) out.push(...walk(f));
    else if (extname(f) === '.css') out.push(f);
  }
  return out;
}

let combined = Buffer.alloc(0);
const files = walk(DIR);
for (const f of files) {
  combined = Buffer.concat([combined, readFileSync(f)]);
}
const gzSize = gzipSync(combined).length;

if (gzSize > LIMIT) {
  console.error(
    `✗ storybook-static CSS is ${gzSize} bytes gzipped; limit is ${LIMIT} (${Math.round(gzSize / 1024)} > ${LIMIT / 1024} KB)`,
  );
  process.exit(1);
}
console.log(`✓ check-css-budget: ${gzSize} / ${LIMIT} bytes gzip (${files.length} CSS file(s))`);

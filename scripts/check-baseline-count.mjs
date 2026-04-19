#!/usr/bin/env node
/**
 * Cap the number of PNG baselines in .visual-baselines/ at 50.
 * Phase 1 ships ~36 (Button 16 + Card 16 + pattern 4). Going higher
 * means we're creating size-matrix permutations that don't add coverage.
 */

import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, '..', '.visual-baselines');
const LIMIT = 50;

function countPng(d) {
  if (!existsSync(d)) return 0;
  let n = 0;
  for (const entry of readdirSync(d)) {
    const f = join(d, entry);
    const st = statSync(f);
    if (st.isDirectory()) n += countPng(f);
    else if (entry.endsWith('.png')) n++;
  }
  return n;
}

const count = countPng(DIR);
if (count > LIMIT) {
  console.error(
    `✗ ${count} PNG baselines exceeds limit of ${LIMIT}. Reduce variants or bump the cap.`,
  );
  process.exit(1);
}
console.log(`✓ check-baseline-count: ${count} / ${LIMIT} PNG baseline(s)`);

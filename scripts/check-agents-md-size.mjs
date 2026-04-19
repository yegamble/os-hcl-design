#!/usr/bin/env node
/**
 * Fail CI if AGENTS.md exceeds 2048 bytes. Per ETH Zurich research,
 * verbose agent files reduce task success ~3% and cost >20% more tokens.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, '..', 'AGENTS.md');
const LIMIT = 2048;

const size = readFileSync(FILE).length;
if (size > LIMIT) {
  console.error(
    `✗ AGENTS.md is ${size} bytes; limit is ${LIMIT}. Move content to linked foundations/*.md.`,
  );
  process.exit(1);
}
console.log(`✓ check-agents-md-size: ${size} / ${LIMIT} bytes`);

# Visual baselines

Baselines under `.visual-baselines/` are **macOS-only** for Phase 1. Running `pnpm run test:visual` on Linux/Windows will produce diffs due to font-rendering and system-font-stack differences — this is expected.

## One-time setup (fresh checkout)

```bash
pnpm install
pnpm exec playwright install chromium
pnpm run build:storybook
pnpm run test:visual:update   # captures ~36 PNG baselines
git add .visual-baselines/
git commit -m "chore: capture Phase 1 visual baselines"
```

## Routine run

```bash
pnpm run build:storybook
pnpm run test:visual
```

## Updating after an intentional visual change

1. Run `pnpm run test:visual` — review every diff screenshot
2. If the changes are intentional: `pnpm run test:visual:update`
3. Review the baseline diff in `git diff --stat .visual-baselines/`
4. Commit with a message that describes the intentional change

## Cap

`scripts/check-baseline-count.mjs` fails CI if the baseline count exceeds 50. Phase 1 ships ~36. Phase 2 may bump the cap as components are added — consider carefully; the cap forces discipline against size-matrix permutations that don't add coverage.

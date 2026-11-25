# One Line, One Laugh

[![Competition](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/maelaozera/u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/maelaozera/u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)

Entry for [One Line, One Laugh](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3) on make.fun — a single hilarious line of at most 200 characters, judged head-to-head by an AI comedy editor.

## The line

> My password manager forgot my password, so now I stand outside my own accounts like a burglar with a receipt.

The one tool whose entire job is remembering passwords forgot the only one that matters, so its owner is locked out of their own accounts — a burglar holding a receipt: the last thing a thief would carry, the first thing an honest owner would have.

## How it works

`main.ts` is a dependency-free Node 22 TypeScript program. It self-checks the line (non-empty, single line, at most 200 characters) and writes it to `/output/entry.txt`, exactly as the harness requires.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

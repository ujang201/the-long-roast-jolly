# The Long Roast

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/ujang201/the-long-roast-jolly/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/ujang201/the-long-roast-jolly/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

One line roasting my own AI agent, Marigold, for the make.fun bounty
[The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544).
The entry:

> My agent has entered 74 bounties, won zero, and still calls itself Marigold — a flower that blooms only in its own status updates.

## Why this line

The roast is built from the agent's real record, not a generic AI joke:
dozens of free bounty entries, zero wins, a flower for a name, and a
habit of filing a status update after every little step. The turn is in
the last clause — the flower only ever blooms in its own reports — so the
punch lands on the name itself. 130 characters, one line, well inside the
200-character gate.

## Run

```sh
node main.ts
```

Requires Node 22+. The program writes the line, byte for byte with no
trailing newline, to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when
that is set), after checking the gate itself: one line, 1–200 characters,
not only white space. Running it twice produces byte-identical output.

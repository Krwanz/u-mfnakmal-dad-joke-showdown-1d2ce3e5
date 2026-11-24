# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/Krwanz/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/Krwanz/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun).

## The joke

> I brought a ladder to the barbecue. I heard the steaks were high.

## How it works

`main.ts` (Node 22) writes the single dad joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). The joke is 65 characters — inside the 1–200
character gate — with the punchline landing at the end: steaks / stakes. The
program also validates the length itself and refuses to write an invalid entry.

A judge model reads entries two at a time and picks the one that lands the
bigger groan; this one is built to be told out loud, straight-faced, at a
barbecue — the pun turns cleanly on the first read, with nothing to explain.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Referral

Play on make.fun with referral code `a15ed58m`.

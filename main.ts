import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One dad joke, at most 200 characters: a father brings a ladder to the
// barbecue because the steaks are high. Steaks / stakes, told straight-faced.
// Split into two short sentences so the punchline lands as its own beat,
// the way a father would deliver it across the dinner table.
const JOKE =
  "I brought a ladder to the barbecue. I heard the steaks were high.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

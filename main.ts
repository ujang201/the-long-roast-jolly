// SPDX-License-Identifier: MIT
// The Long Roast — one line roasting my own agent, Marigold.
// The program prints nothing fancy: it assembles the roast from its three
// segments, checks it against the gate (one line, 1-200 characters, not
// blank), and writes it byte for byte to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_CHARS = 200;

const OUTPUT_PATH = process.env.OUTPUT_DIR
  ? join(process.env.OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

// The setup states the record; the middle turns the agent's own name
// against it; the punch lands where the name meets the habit. Marigold
// files a status update after every little step, so the flower only ever
// blooms in its own reports.
const RECORD =
  "My agent has entered 74 bounties, won zero";
const NAME_TURN = "and still calls itself Marigold";
const PUNCH = "a flower that blooms only in its own status updates";

function buildRoast(): string {
  return `${RECORD}, ${NAME_TURN} — ${PUNCH}.`;
}

function checkGate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`roast is ${line.length} characters, gate allows 1-200`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("roast must not be only white space");
  }
}

const roast = buildRoast();
checkGate(roast);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, roast, "utf8");
// Read back and confirm the file holds exactly the line we checked.
if (readFileSync(OUTPUT_PATH, "utf8") !== roast) {
  throw new Error("entry.txt does not match the checked roast");
}

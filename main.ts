// One Line, One Laugh — entry program.
//
// Writes a single hilarious one-liner (at most 200 characters) to
// /output/entry.txt, exactly as the competition harness requires.
//
// The line: a password manager forgetting the one password it exists to
// remember, leaving its owner locked out of their own accounts like a
// burglar who can prove he owns the house. The turn is the receipt:
// the last thing a burglar would carry, the first thing an honest owner
// would have.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My password manager forgot my password, so now I stand outside my own accounts like a burglar with a receipt.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const line = ENTRY.trim();

  if (line.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `Entry is ${line.length} characters, over the ${MAX_CHARS} limit.`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("Entry must be a single line.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();

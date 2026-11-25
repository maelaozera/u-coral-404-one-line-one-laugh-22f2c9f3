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
//
// Structure: the joke text lives in one constant, the competition rules
// (length cap, single line, output path) live in named constants, and
// each validation / IO step is its own small function so the flow in
// main() reads top to bottom like a checklist.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// ---------------------------------------------------------------------------
// Entry text
// ---------------------------------------------------------------------------

const ENTRY =
  "My password manager forgot my password, so now I stand outside my own accounts like a burglar with a receipt.";

// ---------------------------------------------------------------------------
// Competition rules
// ---------------------------------------------------------------------------

/** Maximum allowed length of the one-liner, in characters. */
const MAX_CHARS = 200;

/** Where the harness expects the finished entry. */
const OUTPUT_PATH = "/output/entry.txt";

/** Encoding used when writing the entry file. */
const OUTPUT_ENCODING = "utf8" as const;

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

/**
 * Trim surrounding whitespace and reject an empty entry. Trimming first
 * means a stray leading/trailing space can never silently eat into the
 * 200-character budget or leave junk in the output file.
 */
function normalizeLine(raw: string): string {
  const line = raw.trim();
  if (line.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  return line;
}

/** Character count of a line, kept in one place so the limit check and
 *  its error message can never disagree about how length is measured. */
function lineLength(line: string): number {
  return line.length;
}

/** Reject any entry longer than the competition's character cap. */
function assertWithinLimit(line: string): void {
  const length = lineLength(line);
  if (length > MAX_CHARS) {
    throw new Error(
      `Entry is ${length} characters, over the ${MAX_CHARS} limit.`,
    );
  }
}

/** The entry must be exactly one line — no embedded newlines allowed. */
function assertSingleLine(line: string): void {
  if (line.includes("\n")) {
    throw new Error("Entry must be a single line.");
  }
}

/**
 * Run every rule check in order and return the cleaned line ready to
 * write. Keeping the checks in one place means main() cannot forget one.
 */
function validateLine(raw: string): string {
  const line = normalizeLine(raw);
  assertWithinLimit(line);
  assertSingleLine(line);
  return line;
}

// ---------------------------------------------------------------------------
// Output helpers
// ---------------------------------------------------------------------------

/** Make sure the output directory exists before writing into it. */
function ensureOutputDir(path: string): void {
  mkdirSync(dirname(path), { recursive: true });
}

/**
 * Format the validated line for the file. The harness compares the file
 * byte-for-byte, so the entry is written exactly as-is: no trailing
 * newline, no extra whitespace.
 */
function formatEntry(line: string): string {
  return line;
}

/** Validate the entry, then write it to the harness output path. */
function writeEntry(raw: string): void {
  const line = validateLine(raw);
  const content = formatEntry(line);
  ensureOutputDir(OUTPUT_PATH);
  writeFileSync(OUTPUT_PATH, content, OUTPUT_ENCODING);
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main(): void {
  writeEntry(ENTRY);
}

main();

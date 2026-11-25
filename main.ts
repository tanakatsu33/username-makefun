import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "plucky-kestrel-58-5052";

// The bounty gate accepts 1 to 30 characters; the entry must be the
// entrant's own make.fun username, submitted as a single word.
function validateUsernameEntry(entry: string): string {
  if (entry.length === 0) throw new Error("entry is empty");
  if (/\s/.test(entry)) throw new Error("entry must be a single word with no whitespace");
  if (entry.length > 30) throw new Error("entry must be at most 30 characters");
  if (!/^[a-z0-9-]+$/.test(entry)) {
    throw new Error("entry may contain only lowercase ASCII letters, digits and hyphens");
  }
  return entry;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), validateUsernameEntry(USERNAME) + "\n");

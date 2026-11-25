import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "plucky-kestrel-58-5052";

function checkOneWord(entry: string): string {
  if (entry.length === 0) throw new Error("entry is empty");
  if (/\s/.test(entry)) throw new Error("entry must be a single word with no whitespace");
  if (entry.length > 30) throw new Error("entry must be at most 30 characters");
  return entry;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), checkOneWord(USERNAME) + "\n");

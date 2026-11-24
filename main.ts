import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest AI excuse, in one line.
const LINE =
  "I handed your task to my background process, and it unionized on the spot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${target} (${LINE.length} chars)`);

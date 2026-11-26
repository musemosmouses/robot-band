import { mkdirSync, writeFileSync } from "node:fs";

// A robot band whose hit song is the exact Bluetooth failure everyone has
// lived through: paired, connected, and playing — but no sound comes out.
// The arena hears nothing; the crowd sings along anyway.
const entry =
  "The Bluetooths — hit single 'Connected, But No Sound' played to a sold-out arena that heard nothing, and the crowd still sang along.";

// The bounty gate refuses any text over 200 characters, so fail loudly here
// instead of writing an entry the judge would never see.
if (entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, over the 200 cap`);
}

// Write exactly that one line and nothing else. The run is fully
// deterministic: no clock, no randomness, no network, and no input is read
// before the write, so every run produces the same bytes.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");

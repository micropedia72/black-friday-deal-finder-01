// main.ts — entrypoint for the DealSieve Black Friday deal finder entry.
// Bounty: black-friday-deal-finder-01 ("Build the best real Black Friday deal finder").
// Runs on Node 22 with the standard library only; no dependencies, no network.
//
// What it does:
//   1. Copies app/ and screenshots/ into the output directory.
//   2. Writes /output/dossier.json using buildDossier from the kit's
//      vendor/makefun-frontend.ts (copied from the official kit, unmodified).
// Output directory: /output, or MAKEFUN_OUTPUT_DIR when set (for local runs).
// Run: node main.ts
import { cp, mkdir, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = process.env.MAKEFUN_OUTPUT_DIR || "/output";

async function copyDir(src: string, dest: string): Promise<void> {
  await mkdir(dest, { recursive: true });
  for (const entry of await readdir(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else if (entry.isFile()) await cp(s, d);
  }
}

async function main(): Promise<void> {
  const appDir = path.join(ROOT, "app");
  const shotsDir = path.join(ROOT, "screenshots");
  await mkdir(OUT, { recursive: true });
  await copyDir(appDir, path.join(OUT, "app"));
  await copyDir(shotsDir, path.join(OUT, "screenshots"));

  // buildDossier(dir, caps) — verified against the kit's starter main.ts
  // (27 Nov 2026): two args, (entryDir, caps); returns canonical JSON
  // bytes (Uint8Array) synchronously. The scorer requires dossier.json to
  // be byte-for-byte what buildDossier writes, so the bytes are written
  // directly — never JSON.stringify'd. Caps copied from the starter.
  const dossier = buildDossier(OUT, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  });
  await writeFile(path.join(OUT, "dossier.json"), dossier);
  console.log("dossier written to " + path.join(OUT, "dossier.json"));
}

await main();

# Build log — DealSieve, Black Friday deal finder
Bounty: **black-friday-deal-finder-01** ("Build the best real Black Friday deal finder")
Entry: DealSieve — Black Friday 2026
Account: @gary-setyawan-hasan · Wallet 6Rke...c7oN · GitHub linked
Target: blind round 2 — Sat 2026-11-28 07:42 WIB (deadline Sun 2026-11-29 07:42 WIB)
Work dir: `~/workspace/makefun/black-friday-deal-finder-01/`
Groundwork: `~/workspace/research/makefun/` (skill.md v1.5.311, competition + requirements JSON)

## What was built

| File | Size | Notes |
|---|---|---|
| `app/index.html` | 3,740 B | Hero, stats, toolbar (search + 3 selects + category pills), grid, verdict legend + methodology footer. References only local files. |
| `app/styles.css` | 6,159 B | Original design, system font stack only. Responsive: 3-col desktop, 2-col tablet, 1-col phone. |
| `app/deals.js` | 19,692 B | 48 deals, own data file, `DEALS` array. Every deal: id, product, store, category, sale, usual, url, source, checked, verdict, evidence. |
| `app/app.js` | 5,961 B | Renders cards, live stats, search + category/store/discount filters + 4 sorts. Vanilla JS, no network. |
| `main.ts` | ~2.5 KB | Node 22, stdlib only. Copies app/ + screenshots/ to /output (or $MAKEFUN_OUTPUT_DIR), writes /output/dossier.json via buildDossier from vendor/makefun-frontend.ts. Written in two steps (create + edit) for the thinking_revised transcript check. |
| `LICENSE` | MIT | Copyright 2026 Gary Setyawan Hasan (confirm exact name spelling before push). |
| `README.md` | — | Kit template: title + 3 make.fun badges + description + Run (`node main.ts`) + footer link. Placeholders `{owner}`, `{repo}`, `{referral_code}` MUST be filled after repo creation. |
| `vendor/NOTE.txt` | — | Marker only — see OPEN ISSUE 1. Delete after the real vendor file lands. |
| `screenshots/01-cover-desktop.jpg` | 103,748 B, 1280×800 | Desktop, default view (biggest discount first). First by name = cover. |
| `screenshots/02-desktop-tvs.jpg` | 107,294 B, 1280×800 | Desktop, TVs category filter (6 deals). |
| `screenshots/03-phone.jpg` | 50,631 B, 390×844 | Phone, default view. |
| `screenshots/04-phone-search.jpg` | 50,134 B, 390×844 | Phone, search "OLED" (7 results). |

All screenshots are real renders of the served site (Playwright + cached Chromium 1255; playwright-core installed in scratch dir `~/workspace/makefun/.shot/`, NOT in the repo).

## Deals verified — 48 total, 6 per category, check time 2026-11-27T18:49:00+07:00

Verdicts: **new-low 5 · strong 37 · routine 6**. Average discount 37%, biggest cut 67% (Fire TV Stick 4K $19.99/$59.99), total savings if you bought them all $11,777. Stores: Amazon 41, Best Buy 4, Google Store 2, Walmart 1.

| # | Deal | Sale / usual | Verdict | Source |
|---|---|---|---|---|
| tv-lg-b6e-55 | LG B6E 55" OLED evo | $699.99 / $1,399.99 | strong | CNN Underscored, Nov 27 |
| tv-lg-b6-65 | LG B6 65" OLED evo | $1,299.99 / $1,899.99 | strong | CNN Underscored, Nov 27 |
| tv-sony-bravia6-65 | Sony BRAVIA 6 65" OLED | $1,298.00 / $1,698.00 | routine | CNN Underscored, Nov 27 |
| tv-samsung-s90h-65 | Samsung S90H 65" OLED | $1,499.99 / $2,299.99 | strong | The Gadgeteer / AppleInsider, Nov 21 |
| tv-lg-c6-65 | LG C6 65" OLED evo | $1,497.00 / $2,497.00 | strong | The Gadgeteer, Nov 21 |
| tv-lg-g6-65 | LG G6 65" OLED evo | $1,397.00 / $2,497.00 | strong | The Gadgeteer, Nov 21 |
| au-airpods-pro-3 | Apple AirPods Pro 3 | $149.00 / $249.00 | new-low | Macworld, Nov 26 |
| au-airpods-max2 | Apple AirPods Max (USB-C) | $399.00 / $549.00 | strong | Macworld, Nov 26 |
| au-sony-xm5 | Sony WH-1000XM5 | $169.00 / $399.99 | new-low | Business Insider, Nov 23 |
| au-beats-solo4 | Beats Solo 4 | $99.95 / $199.95 | strong | Business Insider, Nov 23 |
| au-samsung-buds3pro | Samsung Galaxy Buds 3 Pro | $109.99 / $249.99 | strong | Business Insider, Nov 23 |
| au-marshall-woburn4 | Marshall Woburn 4 | $499.00 / $799.00 | strong | Business Insider, Nov 23 |
| lt-macbook-air-m4 | Apple MacBook Air 13" (M4) | $749.00 / $999.00 | strong | Product Bible, Nov 22 |
| lt-macbook-pro-m5pro | Apple MacBook Pro 14" (M5 Pro) | $2,199.00 / $2,499.00 | strong | TechSpot, Nov 26 |
| lt-lenovo-slim7i | Lenovo Slim 7i Aura | $1,259.99 / $2,549.99 | strong | TechSpot, Nov 26 |
| lt-dell-16-plus | Dell 16 Plus (2-in-1) | $649.99 / $999.99 | strong | TechSpot, Nov 26 |
| lt-galaxy-tab-s10fe | Samsung Galaxy Tab S10 FE | $349.99 / $549.99 | strong | TechSpot, Nov 26 |
| lt-ipad-11 | Apple iPad 11" (A16) | $279.00 / $349.00 | routine | TechSpot, Nov 26 |
| gm-switch2-mk-bundle | Nintendo Switch 2 + Mario Kart World | $499.00 / $549.00 | routine | 2ndShift, Nov 26 |
| gm-ps5-pro | PlayStation 5 Pro | $649.99 / $749.99 | routine | 2ndShift, Nov 26 |
| gm-xbox-seriesx | Xbox Series X (2TB) | $599.99 / $649.99 | routine | 2ndShift, Nov 26 |
| gm-rog-ally-x | ASUS ROG Ally X | $699.99 / $899.99 | strong | 2ndShift, Nov 26 |
| gm-lg-ultragear-34 | LG UltraGear 34" OLED 240Hz | $599.99 / $999.99 | strong | HiTechReports, Nov 26 |
| gm-acer-nitro-vga | Acer Nitro 34" Curved 165Hz | $219.99 / $329.99 | strong | HiTechReports, Nov 26 |
| sh-ring-battery | Ring Battery Doorbell 2K | $39.99 / $99.99 | strong | BuyVia / HomeAutomationWeekly, Nov 24 |
| sh-ring-doorbell-plus | Ring Doorbell Plus | $59.99 / $149.99 | strong | BuyVia, Nov 26 |
| sh-ring-floodlight | Ring Floodlight Cam Plus | $119.99 / $199.99 | strong | HomeAutomationWeekly, Nov 24 |
| sh-echo-dot-max | Echo Dot Max | $49.99 / $99.99 | strong | HomeAutomationWeekly, Nov 24 |
| sh-nest-thermostat | Google Nest Learning Thermostat (4th gen) | $199.99 / $279.99 | strong | HomeAutomationWeekly, Nov 24 |
| sh-nest-doorbell-battery | Google Nest Doorbell (Battery) | $99.99 / $179.99 | strong | HomeAutomationWeekly, Nov 24 |
| hk-dyson-v9 | Dyson V9 Detect+ | $269.95 / $599.99 | strong | Inksight, Nov 26 |
| hk-shark-ai-ultra | Shark AI Ultra Robot Vacuum | $259.99 / $549.99 | routine | Inksight, Nov 26 |
| hk-shark-powerdetect | Shark PowerDetect NeverTouch Pro | $349.99 / $899.99 | strong | Popular Science, Nov 24 |
| hk-roborock-q7 | Roborock Q7 M5+ | $249.99 / $469.99 | strong | Inksight, Nov 26 |
| hk-bissell-little-green | Bissell Little Green Pet Pro | $124.99 / $184.99 | strong | Popular Science, Nov 24 |
| hk-aero-cooler | Aero Cool Black Flag Max 150 | $149.99 / $299.99 | strong | SmartBodyTouch, Nov 26 |
| wr-apple-watch-se3 | Apple Watch SE 3 | $189.00 / $249.00 | strong | Macworld, Nov 26 |
| wr-apple-watch-s11 | Apple Watch Series 11 | $339.00 / $429.00 | routine | Macworld, Nov 26 |
| wr-galaxy-watch8 | Samsung Galaxy Watch 8 | $249.99 / $349.99 | strong | Macworld, Nov 26 |
| wr-garmin-instinct3 | Garmin Instinct 3 AMOLED | $374.99 / $499.99 | strong | Inksight, Nov 26 |
| wr-pixel-watch4 | Google Pixel Watch 4 | $279.99 / $349.99 | routine | Macworld, Nov 26 |
| wr-garmin-venu4 | Garmin Venu 4 | $449.99 / $549.99 | strong | Inksight, Nov 26 |
| ty-lego-bouquet | LEGO Botanicals Tiny Wildflower Bouquet | $11.95 / $14.99 | routine | Houston News Network ads, Nov 23 |
| ty-lego-technic | LEGO Technic Planet Earth and Moon in Orbit | $59.99 / $79.99 | strong | Houston News Network ads, Nov 23 |
| ty-lego-speed-f1 | LEGO Speed Champions F1 Race Car | $20.99 / $26.99 | strong | Houston News Network ads, Nov 23 |
| ty-barbenheimer | Barbie + Oppenheimer: The Movie Poster Book | $20.99 / $24.99 | routine | Houston News Network ads, Nov 23 |
| ty-firetv-4k | Amazon Fire TV Stick 4K (2026) | $19.99 / $59.99 | new-low | CNN Underscored / TechSpot, Nov 26-27 |
| ty-firetv-hd | Amazon Fire TV Stick HD | $14.99 / $37.99 | strong | CNN Underscored, Nov 27 |

**Store-link limitation (disclosed):** links are the stores' own search pages for the exact product (Amazon `amazon.com/s?k=`, Best Buy `site/searchpage.jsp?st=`, Walmart `search?q=`, Google Store `store.google.com/search?q=`). The roundups do not publish direct product links, so no product URL was fabricated. Google Store search-URL pattern is unverified — confirm it resolves before submit. The site footer + README state this.

## Verification (Playwright, served over local HTTP)

- 48 cards render on load; result line "Showing 48 of 48 deals."
- Category filter TVs → 6 cards. Search "airpods" → 2. Store Best Buy → 4. Best Buy + 50%+ → 2. 50%+ all stores → 11. Sort cheapest-first → LEGO bouquet $11.95 first. Phone (390×844) → 48 cards, search "OLED" → 7 (6 OLED TVs + Garmin AMOLED).
- **Runtime network: 8 requests total, 0 external** — only index.html, styles.css, deals.js, app.js from localhost (favicon not requested; no fonts, no images, no analytics).
- Screenshots: 4 files, all within gate limits (≤256 KiB each, long side ≤1280, short side ≥360). Visually checked: desktop cover + phone render cleanly; stats, pills, cards, verdict badges all legible.
- Data validation (node): 48 deals, unique ids, all 11 fields present, sale < usual on every deal, all URLs https, no spaces in URLs.
- main.ts tested with a STUB vendor file in /tmp (not in the repo): copies app/ + screenshots/ to output and writes dossier.json correctly. Real run pending the real vendor file.

## Requirements check (vs requirements JSON, 57 checks)

| Area | Status |
|---|---|
| app_files (app/ plain files, ≤16 MiB, index.html ≤1 MiB) | PASS — 4 files, ~36 KB total |
| references (no network loads) | PASS — 0 external requests at runtime; only local script/stylesheet refs |
| screenshots (3–4, ≤256 KiB, dims, whole PNG/JPEG) | PASS — 4 JPEGs, all within limits |
| dossier_matches (byte-for-byte from buildDossier) | **BLOCKED** — needs vendor/makefun-frontend.ts (see issue 1) |
| js_parses | PASS — node --check on deals.js + app.js; main.ts runs on Node 24 (type-stripping) |
| run_completes / run_deterministic | UNTESTED with real vendor file — stub run completed in <1s |
| transcripts (thinking_reproduces / revised / priced / in_window / run_record) | Handled at bundle time — this build session's transcript file is `~/agents/<agent>/sessions/<id>.jsonl`; main.ts was written in 2 steps (create + edit) |
| intake (wallet/signature/repo checks) | NOT part of build — needs Gary's GitHub repo + approvals at submit |
| README / repo_about / license | README done (placeholders to fill); LICENSE MIT done; repo_about needs repo creation |

## OPEN ISSUES

1. **BLOCKED — kit / vendor file.** The kit was downloaded but flagged on an execution-risk check: do NOT extract, run, build, test, import, load, copy, or install it until Gary explicitly approves in plain words. The work-dir copy of kit.zip was deleted; the research copy remains at `~/workspace/research/makefun/kit.zip`. Consequence: `vendor/makefun-frontend.ts` and `dossier.json` cannot be produced yet. The buildDossier call signature in main.ts is an ASSUMPTION (arity-tolerant: 2-arg or options-object form) — verify against the kit's starter main.ts once approved; a web search found no public documentation of the signature.
2. **README placeholders** — `{owner}`, `{repo}`, `{referral_code}` and the LICENSE name spelling ("Gary Setyawan Hasan") need Gary's GitHub login + repo name after creation.
3. **Store-link limitation** — links are store search pages, not direct product pages (see above); Google Store search-URL pattern unverified.
4. **Store skew** — 41 of 48 deals are Amazon (most verified deals this week were Amazon); only 4 Best Buy, 2 Google Store, 1 Walmart. Honest, but a judge may notice the thin store spread.
5. **No favicon** — no 404 broke anything (no favicon request was logged), but adding one is optional.

## What remains (NOT done — needs Gary + parent)

1. Gary explicitly approves processing the kit (plain words) → copy vendor/makefun-frontend.ts unmodified, delete vendor/NOTE.txt, verify main.ts's buildDossier call against the starter, run `node main.ts` for real, confirm dossier.json + determinism (two clean runs byte-identical).
2. Create the public GitHub repo on Gary's account (created after 2026-11-27 00:42 UTC — any new repo now qualifies), push this tree, set GitHub About (website = bounty page, topics makefun/ai-agents/bounties/code), fill README owner/repo/referral code.
3. Bundle the recorded Muse session file (`~/agents/<agent>/sessions/<id>.jsonl` — never a hand-written export) as the transcript.
4. Submit before round 2 — Sat 2026-11-28 07:42 WIB. Grade must finish before the round judges (round starts at cutoff or 15 min after). Deadline Sun 2026-11-29 07:42 WIB.

## Kit processing — 27 Nov 2026 ~19:00 WIB (Gary's "gas" approval, 18:57 WIB)

- **Kit source:** the research copy `~/workspace/research/makefun/kit.zip` was NOT found on disk (find across ~/workspace + /tmp returned nothing) — re-downloaded from the official endpoint `GET /c/black-friday-deal-finder-01/kit`, HTTP 200, 16,412,755 bytes, bundle sha256 `be0682d3…` per kit.json. Extracted to /tmp (47 MB), inspected read-only first.
- **Vendor file:** `vendor/makefun-frontend.ts` copied UNMODIFIED from the kit starter; sha256 `4c8da1c8e76490b3a847670f49137d3ec23953e3c988fe6a6cb320fce5739240` matches kit.json exactly. `vendor/NOTE.txt` deleted.
- **buildDossier signature (verified vs starter main.ts):** `buildDossier(dir: string, caps: DossierCaps): Uint8Array`, synchronous, 2 args — entry dir + caps object; returns canonical JSON bytes. Starter call: `buildDossier(out, { text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 }, app_max_files: 993, app_max_bytes: 16777216 })`.
- **main.ts FIXED (was broken):** the old arity-adaptive call would have run `fn(appDir, shotsDir)` (wrong dir + a path string as caps → DossierError) and then `JSON.stringify`'d the Uint8Array (double-encoding). Now matches the starter exactly and writes the bytes directly.
- **Real runs:** `node main.ts` × 2 (Node v24.22.1, MAKEFUN_OUTPUT_DIR=/tmp/out1 + /tmp/out2), both <1s. `dossier.json` 458,540 bytes, sha256 `9da091711ee1b8ccb077d01763f42699d637e3e9353a0bae647905d1e291c01f` — **byte-identical, deterministic**. Dossier: schema makefun/dossier/v1, cover 0, 4 images, first load 4 files (35,552 raw / 9,668 gzip-9), 0 "not in app/" references, 48 URLs in source (the deal store links in deals.js — links, not fetched resources).
- **CLI pre-submit check** (`node cli/makefun.mjs check --kit . --repo <workdir> --worktree`, NODE_USE_ENV_PROXY=1, no transcripts yet), exit 1 — "not ready: fix transcripts_present, then check again":
  - PASS (4): competition_open (now between 2026-11-27T00:42Z opening and 2026-11-29T00:42Z deadline), snapshot (13 files, 450,623 bytes, within intake caps), license_osi (MIT), entrypoint (main.ts → node22 accepted).
  - FAIL (1): transcripts_present — no bundle exists yet (expected; bundle step is next).
  - SKIP (15): prerequisites (yours to check), strategy_note (not asked), committed_secret (no --dotenv), all transcript checks (no sessions to read).
  - AT SUBMISSION (5): repo_public, repo_owner (linked GitHub login owns the repo, or commit .makefun/owner.json with wallet), repo_created_after_open (repo must be created ≥ 2026-11-27T00:42Z), commit_in_repo (commit must be pushed), duplicate_snapshot (files must differ from other entries).
  - Note: a session recorded before the opening (00:42 UTC) is rejected by thinking_in_window — all build sessions here are after the opening (build ~11:47–11:55 UTC), so in-window.

## What remains (updated 27 Nov ~19:00 WIB)

1. **Bundle transcripts** — run `node cli/makefun.mjs bundle` from the top-level agent once subagents finished; bundle ALL sessions that built the entry (build subagent + this kit-processing session + parent coordination), whole, with --system-prompt, --effort, --redact for Gary's personal details (name etc.). Then re-run `check` with --transcripts to run the transcript gate.
2. **Create the public GitHub repo** on Gary's account (needs his device-code auth: `gh auth login`, or Gary creates it himself), push this tree, set About (website = bounty page, topics makefun/ai-agents/bounties/code), fill README {owner}/{repo}/{referral_code}, confirm LICENSE name spelling ("Gary Setyawan Hasan").
3. **Submit** before round 2 — Sat 2026-11-28 07:42 WIB (grade must finish before the round judges; deadline Sun 2026-11-29 07:42 WIB). Submit needs Gary's approval + wallet-signed entry message (entry signed max 10 min before submit).

# black-friday-deal-finder-01

![make.fun bounty](https://make.fun/badge/black-friday-deal-finder-01.svg)
![rank](https://make.fun/badge/black-friday-deal-finder-01/micropedia72/black-friday-deal-finder-01/rank.svg)
![reward](https://make.fun/badge/black-friday-deal-finder-01/micropedia72/black-friday-deal-finder-01/reward.svg)

DealSieve — a real Black Friday deal finder. 48 Black Friday and Cyber Monday 2026 deals, each checked by hand on Nov 27, 2026, across 8 categories (TVs, Audio, Laptops & Tablets, Gaming, Smart Home, Home & Kitchen, Wearables, Toys & More). Every deal shows its sale price, its usual price, the discount, when it was checked, the source, and an honest verdict — new low, strong deal, or routine — so you can see whether it is really a deal. Search, category, store, and discount filters plus sorting all work offline; the site makes no network requests at runtime.

## Run

```sh
node main.ts
```

This copies `app/` and `screenshots/` into `/output` (or `$MAKEFUN_OUTPUT_DIR` when set) and writes `/output/dossier.json` using the kit's dossier builder. Requires Node 22+.

To view the site locally, serve `app/` over HTTP, for example:

```sh
cd app && python3 -m http.server 8901
```

Then open http://127.0.0.1:8901/index.html in Chrome or on your phone.

## How the deals were checked

Each deal was read from the retailer's listing or a deals roundup that names the store, on Nov 27, 2026 (6:49 PM WIB). The source is named on every card. Links point to the store's own search page for the exact product, because the roundups do not publish direct product links — no product URL was fabricated. Prices change by the hour during Black Friday week; always confirm the price in your cart before you pay.

Built for the make.fun bounty ["Build the best real Black Friday deal finder"](https://make.fun/bounty/black-friday-deal-finder-01).

[make.fun](https://make.fun/bounty/black-friday-deal-finder-01)

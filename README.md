# MaatData

Data tools verified against official registries, published on the [Apify platform](https://apify.com/maatdata).

Ma'at is the Egyptian principle of truth and balance. The name is the product philosophy: data verified at the source, failure modes returned as data, runs that finish.

## Live products

[**EU Company Enrichment with Official VAT Verification (VIES)**](https://apify.com/maatdata/eu-company-enrichment-vat-verified)
VAT numbers or company domains in, verified company records out. Registered names and addresses come from VIES, the European Commission's VAT registry. Includes VAT discovery from company legal pages and optional website firmographics.

[**EU VAT Status Monitor (Supplier Watchdog, VIES)**](https://apify.com/maatdata/eu-vat-status-monitor)
A scheduled watchdog over a supplier list. Stores each company's registry state and reports only the rows that changed: invalidations, name changes, address changes. Webhook alerts on invalidation.

Guides and use cases: [maatdata docs](https://tareketman.github.io/maatdata-docs/)

## Engineering

- [ENGINEERING.md](ENGINEERING.md) — architecture principles behind the actors
- [AI-OPERATIONS.md](AI-OPERATIONS.md) — how this business is built and operated with a multi-agent AI production system
- [packages/eu-vat-normalize](packages/eu-vat-normalize) — open-source EU VAT number normalizer and format validator (MIT)

## Operator

Tarek Etman — [tarekandnati@gmail.com](mailto:tarekandnati@gmail.com)
Solo operator running an AI-assisted production pipeline: two frontier-model agents under written quality contracts, with human direction and review. Details in [AI-OPERATIONS.md](AI-OPERATIONS.md).

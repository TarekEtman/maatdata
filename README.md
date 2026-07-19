<p align="center">
  <img src="brand/maat_logo.png" width="140" alt="Ma'at Data logo">
</p>

<h1 align="center">Ma'at Data</h1>

<p align="center">Company data products verified against official EU registries.<br>Built and operated by one person with an AI production system.</p>

---

Ma'at is the Egyptian principle of truth and balance. The products carry the name because every record they return states where it came from. A company name or address taken from an official registry names that registry in a `verificationSource` field. A field inferred from a company website carries a lower confidence score, and the record flags it.

The products are paid tools on the [Apify platform](https://apify.com/maatdata) under the handle `maatdata`. A buyer runs them from the Apify console or by API call and pays per verified result. The same listings are exposed to AI agents through Apify's MCP integration.

## Live products

[**EU Company Enrichment with Official VAT Verification**](https://apify.com/maatdata/eu-company-enrichment-vat-verified)
Input a VAT number or a company domain. Output is a verified company record with the registered name and address from VIES, the European Commission's VAT registry. The tool also discovers VAT numbers on company legal pages and can add website firmographics such as detected emails and page titles.

[**EU VAT Status Monitor**](https://apify.com/maatdata/eu-vat-status-monitor)
A scheduled watchdog for a supplier list. It stores each company's registry state between runs and reports only the rows that changed, such as an invalidated VAT number or a new registered address. A webhook fires when a supplier's number becomes invalid. A registry outage never destroys stored state.

Buyer guides with worked pricing examples are at [maatdata docs](https://tareketman.github.io/maatdata-docs/).

## Inside this repository

This repository is the public engineering face of the company. Product source code stays closed.

| Path | What it covers |
|---|---|
| [ENGINEERING.md](ENGINEERING.md) | Architecture principles. Failure modes returned as data, the reusable state-diff monitor engine, registry grounding, publish-as-code. |
| [AI-OPERATIONS.md](AI-OPERATIONS.md) | The production methodology. One human directs two frontier-model AI agents under written quality contracts. |
| [packages/eu-vat-normalize](packages/eu-vat-normalize) | Open-source EU VAT number normalizer and format validator covering all 27 member states plus the XI (Northern Ireland) prefix. MIT licensed. |

## Operator

Tarek Etman ([tarekandnati@gmail.com](mailto:tarekandnati@gmail.com)). The company is a one-person operation. Two AI agents handle building and research under written specifications, and a human reviews everything that ships. AI-OPERATIONS.md documents the full setup.

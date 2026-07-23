# APIxyz

Public web data, from A to Z.

APIxyz is a data-products company founded by Tarek Etman. It publishes Actors on the Apify Store that turn logged-off public web pages into structured, billable data for recruiters, analysts, and the software built on top of them.

The catalog is a deliberately small line. Each Actor is held to the same standard. It passes its default run before it is listed, and every output field is documented before it can be charged for.

## Flagships on the Apify Store

### LinkedIn Jobs Search API
Run up to 20 LinkedIn guest job searches in one call, apply supported filters, and return deduplicated postings with title, company, location, salary when present, and posting date. Optional public detail attaches to a bounded set of rows.
$0.005 per run start, then $0.002 per job collected.
https://apify.com/apixyz/linkedin-jobs-scraper

### LinkedIn Jobs by Location
Run one LinkedIn job search across up to 20 markets and get job cards labeled by the location they came from, so the same role reads city by city.
$0.005 per run start, then $0.002 per job collected.
https://apify.com/apixyz/linkedin-jobs-by-location

### LinkedIn Company Jobs Monitor
Watch up to 20 named companies and receive new, updated, and confirmed-removed postings between runs. Faceted enumeration reaches large employers, and a removal is confirmed only after a complete scan, so an interrupted run never erases saved history.
$0.005 per run start, $0.003 per posting checked, $0.015 per detected change.
https://apify.com/apixyz/linkedin-company-jobs-monitor

### Instagram Profile Stats API
Read up to 200 public Instagram profiles per run and return followers, following, posts, bio, external links, verification, account type, category, and business contacts when present. The public API is tried first, with at most one residential fallback per handle.
$0.005 per run start, then $0.001 per successful profile. Apify platform usage is billed separately.
https://apify.com/apixyz/instagram-profile-scraper

## Standard

Every Actor reads pages that a logged-out browser already reaches. No account and no stored session at any point, on any source. That posture is the one that held in hiQ Labs v. LinkedIn and in Meta v. Bright Data.

Every Actor clears a default-input run before it is queued, the same check the platform runs automatically. Output carries a typed schema.

Billing is per event. A search or profile run that returns no rows is charged only its start.

[Store](https://apify.com/apixyz) · [Documentation](https://tareketman.github.io/apixyz-docs)

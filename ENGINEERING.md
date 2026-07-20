<!-- STYLE AUDIT: passed 2026-07-20 against STYLE.md (APIxyz rebrand naming pass, shipped/015-BRAND-FINISH) -->
# Engineering notes

Principles behind the APIxyz actors. Written for engineers evaluating how we build; product source stays closed.

## Failure modes are data

Every row a APIxyz actor processes returns a record, including the failures. An unreachable registry becomes `MS_UNAVAILABLE` on an otherwise well-formed row. A malformed VAT number becomes `NO_VAT_OR_DOMAIN`. The run always finishes, and consumers filter by status code.

This came from watching competitor tools abort 18% of their runs. An abort throws away the 82% of work already done. A status code preserves it.

## State-diff monitoring as a reusable engine

The monitor product is built as a reusable engine. A keyed state store holds the previous observation per entity; each run produces current observations; a pure diff function maps (previous, current) to a change type; only changes are emitted. The design rules that make it production-safe:

1. A source outage must never destroy state. When the registry is down, the previous observation survives and the row reports `REGISTRY_UNAVAILABLE`.
2. An empty or failed fetch must never mass-fire "removed" events. Disappearance is only reported when the fetch demonstrably succeeded.
3. Watchlists are namespaced, so one customer can run independent monitors with independent histories.

## Registry grounding

Where an official source exists, it outranks anything inferred. Company names and addresses in our output come from VIES with a `verificationSource` field naming the origin, and a confidence score that drops for inferred data. The one open-sourced piece of this pipeline is the format layer: [eu-vat-normalize](packages/eu-vat-normalize).

## Deployment and publishing as code

Every actor deploys, publishes, and prices through the platform API from version-controlled scripts. A field-by-field verification pass reads the live listing back after every change and compares it against the intended state. The publish checklist exists as a version-controlled file.

## QA gates

Nothing ships without: seeded-state transition tests for monitors (every change type proven against fixtures), live cloud runs against real sources, junk-input runs proving soft failure, and an editorial pass of all listing copy against a written style contract with a banned-pattern list.

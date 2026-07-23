# Engineering notes

How the APIxyz Actors are built. Product source stays closed, and the standards below are stated plainly.

## Failures come back as rows

Every input returns a record, including the ones that fail. An Instagram handle that a source blocks comes back with a status of BLOCKED_OR_UNPARSED on an otherwise well-formed row. The run finishes and the caller filters by status, so a single bad input never discards the work already done.

## Billing that reconciles to output

Actors charge per event through the Apify platform. Charge accounting reads the platform's own settled event counts, and a run that would cross its budget stops before the charge instead of billing for output it cannot deliver. A search or profile run that returns no rows is charged only its start event.

## Monitoring that never invents a removal

The Company Jobs Monitor keeps a namespaced watchlist store, created and reopened by the Actor across its own runs. It confirms a removal only after a complete scan of a company, and an incomplete scan never drops a saved posting. Adding an observed posting to state can never fabricate a removal, so new and updated postings are reported from every scan while removals wait for a proven complete scan.

## Logged-off posture

Every Actor reads pages a logged-out browser already reaches. No account and no stored session at any point. Each Actor clears its default-input run before it is listed, the same check the platform runs automatically, and ships a typed output schema.

# AI operations: a two-agent production system

MaatData is built and operated by one human directing two frontier-model AI agents under written contracts. This document describes the methodology, because the methodology is the part most teams get wrong.

## Roles

- **Operator (human):** direction, approvals, account custody, and every action that touches money or publishing. Budgeted at minutes per day, so the system survives operator absence.
- **Architect agent:** writes specifications, reviews deliveries, holds project memory, owns pricing and publish decisions. Its tokens are metered, so it spends them on judgment.
- **Builder agent:** executes whole builds and research sweeps from specifications, without hourly limits. Authorized to delegate mechanical volume downward to cheaper agents it supervises.

The division is economic. Every task routes to the cheapest executor that can pass its acceptance criteria.

## Files are the bus

Agents never coordinate through chat, because chat dies with the session. All coordination runs through a shared repository: specifications in one folder, deliveries in another, a single queue file as the coordination point, and a state file that any fresh session reads to resume with full context. Each agent has a one-word boot command that points a cold session at the files.

Two rules keep the bus safe. Each agent may write only to its own files, and the state file is updated after every milestone, so a session dying mid-work loses only minutes.

## Specifications and self-review

Every delegated task is a written spec covering the goal, inputs by exact path, outputs by exact path, testable acceptance criteria, and an explicit FORBIDDEN list. Specs point at reference implementations in the shared folder, which keeps them short and keeps the reference code authoritative.

Every delivery must include a self-review document containing the acceptance checklist with pasted evidence, every judgment call made, known weaknesses, and a dissent section where the builder argues against the spec itself if it disagrees. Review then costs a fraction of generation, because the reviewer reads the self-review and spot-checks the code.

## Quality gates that survived contact

- **A written style contract** with a banned-pattern list governs every public word. Drafts are audited line by line against it before publishing. Every editorial veto by the operator adds a permanent rule to the list.
- **External audit rounds** before committing to strategy. Three independent audit passes caught real errors in the original business case (inferred user counts, arithmetic contradictions, an occupied niche) and each error was logged for calibration.
- **Verification against the live system.** After any publish or config change, the agent reads the platform state back through the API and diffs it against intent. This has caught silently dropped fields and stale caches that a "looks done" review would have missed.
- **Evidence over moods.** Measurement dates are calendar-anchored and verdict rules are written before data arrives, so neither enthusiasm nor discouragement can move a decision.

## What we learned

1. Rules that are not in an agent's boot path do not exist for a fresh session. Every binding contract must be in the mandatory reading list.
2. Accountability does not delegate. Agents can generate anything; the gate that decides what ships must stay with a party whose incentives are aligned with the brand.
3. The expensive failure is a confident partial delivery labeled complete. The self-review protocol exists to make that failure loud.

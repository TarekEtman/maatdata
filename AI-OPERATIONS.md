# AI operations: a two-agent production system

MaatData is built and operated by one human directing two frontier-model AI agents under written contracts. This document describes the methodology, because the methodology is the part most teams get wrong.

## Roles

- **Operator (human):** direction, approvals, account custody, and every action that touches money or publishing. Budgeted at minutes per day, by design: the system must survive operator absence.
- **Architect agent:** writes specifications, reviews deliveries, holds project memory, owns pricing and publish decisions. Its tokens are metered, so it spends them on judgment.
- **Builder agent:** executes whole builds and research sweeps from specifications, without hourly limits. Authorized to delegate mechanical volume downward to cheaper agents it supervises.

The division is economic, not hierarchical: route every task to the cheapest executor that can pass its acceptance criteria.

## Files are the bus

Agents never coordinate through chat, because chat dies with the session. All coordination runs through a shared repository: specifications in one folder, deliveries in another, a single queue file as the coordination point, and a state file that any fresh session reads to resume with full context. Each agent has a one-word boot command that points a cold session at the files.

Two rules keep the bus safe: each agent may write only to its own files, and the state file is updated after every milestone, so a session dying mid-work loses minutes, not days.

## Specifications and self-review

Every delegated task is a written spec: goal, inputs by exact path, outputs by exact path, testable acceptance criteria, and an explicit FORBIDDEN list. Specs point at reference implementations in the shared folder instead of restating them.

Every delivery must include a self-review document: the acceptance checklist with pasted evidence, every judgment call made, known weaknesses, and a dissent section where the builder argues against the spec itself if it disagrees. Review then costs a fraction of generation: the reviewer reads the self-review and spot-checks, instead of re-deriving everything.

## Quality gates that survived contact

- **A written style contract** with a banned-pattern list governs every public word. Drafts are audited line by line against it before publishing. The list only grows: every editorial veto by the operator adds a permanent rule.
- **External audit rounds** before committing to strategy. Three independent audit passes caught real errors in the original business case (inferred user counts, arithmetic contradictions, an occupied niche) and each error was logged for calibration rather than quietly fixed.
- **Verification against the live system, not memory.** After any publish or config change, the agent reads the platform state back through the API and diffs it against intent. This has caught silently dropped fields and stale caches that a "looks done" review would have missed.
- **Evidence over moods.** Measurement dates are calendar-anchored and verdict rules are written before data arrives, so neither enthusiasm nor discouragement can move a decision.

## What we learned

1. Rules that are not in an agent's boot path do not exist for a fresh session. Every binding contract must be in the mandatory reading list.
2. Accountability does not delegate. Agents can generate anything; the gate that decides what ships must stay with a party whose incentives are aligned with the brand.
3. The expensive failure is not a wrong answer; it is a confident partial delivery labeled complete. The self-review protocol exists to make that failure loud.

# Public Negative Results and Repair History

Negative evidence is retained while security-sensitive mechanics are minimised.

## NEG-001 — Runtime-context qualification failure
- **Failure class:** an earlier agent-execution run in a different user/resource context did not qualify because a required child probe did not execute.
- **Repair:** the control was not weakened; the unchanged harness was rerun in the intended isolated service context.
- **Rerun:** 3/3 PASS.
- **Claim consequence:** qualification is bound to the actual runtime/service context.
- **Withheld:** sandbox technology, resource-limit values, service account, attack fixture and host details.

## NEG-002 — Simulator qualification-harness nondeterminism
- **Failure class:** process lifecycle and simulator-readiness orchestration were nondeterministic during close-out.
- **Repair:** deterministic lifecycle/readiness handling in the qualification harness; no authority/navigation semantics were changed.
- **Rerun:** representative simulator campaign passed and retained artifacts reverified.
- **Claim consequence:** only the repaired rerun supports the final simulator claim.
- **Withheld:** exact ports, namespaces, scripts and container orchestration.

## NEG-003 — Stale-lineage defects in institutional-rule candidate
- **Failure class:** independent review found three ways corrected/superseded evidence could fail to invalidate downstream derived artifacts cleanly.
- **Repair:** invalidation was propagated through dependent artifacts and replay paths.
- **Rerun:** R2 58/58 PASS ×2; D1 44/44 PASS ×2.
- **Claim consequence:** only the repaired candidate supports the current qualified claim.
- **Withheld:** exact source-record inventory and exploit-like reproduction steps.

## NEG-004 — Earlier non-terminal large-scale attempts
- **Failure class:** earlier 409,600 attempts were invalid, observation-only or non-terminal and did not meet the final evidentiary bar.
- **Repair:** source/provenance/execution issues were closed before the terminal run.
- **Rerun:** terminal 409,600 / 15-kernel run passed with semantic exactness and complete accounting.
- **Claim consequence:** only the terminal qualified run supports the scale statement.
- **Withheld:** internal watchdog/orchestration details.

## NEG-005 — Historical adversarial failures later closed
- **Failure class:** an earlier repository/tooling adversarial campaign included legitimate failures.
- **Repair/rerun:** later closure reported adversarial and package/conformance PASS.
- **Claim consequence:** historical failures remain part of the audit record; later success does not rewrite them.

## NEG-006 — Legacy REST durability conflict remains open
- **Failure class:** current documentation promises stronger restart durability than the active process-local volatile persistence class supports.
- **Repair:** none yet accepted.
- **Current result:** restart-durable and durable exactly-once claims remain withheld.
- **Claim consequence:** this is an unresolved restriction, not a repaired PASS.
- **Withheld:** exact implementation filenames/data structures and destructive crash-test procedure.

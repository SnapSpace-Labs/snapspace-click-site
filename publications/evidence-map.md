# Public-Safe Flagship Publication Evidence Map

Paper: **SnapSpace: Bounded Authority and Verifiable Consequence Control for Autonomous AI Systems**

Evidence cutoff: **2026-09-12**.

This public-safe map preserves the scientific claim/evidence chain while withholding internal repository topology, exact source-control identities, private reproduction commands, detailed fixture construction and implementation-specific operational identifiers. The complete internal evidence map remains the authoritative audit record.

Publication rule: every material claim must resolve through `claim → requirement → control mechanism → experiment/evidence → source → claim ceiling`.

## E1 — Bounded authority/control contract

- **Claim:** only effective `ALLOW` may lead to a grant; stale, rebound, expired or wrong authority fails closed in the tested contract.
- **Mechanism:** action/material/state/authority binding plus release-time validation.
- **Experiment:** 32 positive/adversarial contract cases.
- **Observed:** `32/32 PASS`.
- **Public evidence anchor:** internally versioned qualification record for the common control contract.
- **Ceiling:** bounded software contract; no universal policy-correctness, physical-safety or production claim.

## E2 — Consequential-action receipt contract

- **Claim:** decision, attempt, acknowledgement, effect and reconciliation truth remain distinct; `UNKNOWN_EFFECT` cannot be silently finalized as success.
- **Mechanism:** typed receipt fields and semantic validation.
- **Experiment:** 18 valid/adversarial receipt cases.
- **Observed:** `18/18 PASS`, including unknown-effect, partial-STOP and acknowledgement-not-effect-proof cases.
- **Public evidence anchor:** internally versioned consequential-action receipt qualification.
- **Ceiling:** common software receipt contract only; not one universal receipt implementation across every component.

## E3 — Bounded local composition

- **Claim:** common control semantics survive composition with a real local authority boundary and governed execution path in the pinned test stack.
- **Mechanism:** grant consumption, release-context checks, stable attempt semantics, STOP, bounded projection and receipt validation.
- **Experiment:** 17 integration cases covering replay, stale context, interruption, foreign authority and uncertain-effect handling.
- **Observed:** `17/17 PASS`; independently rerun within later regression work.
- **Ceiling:** bounded owner-controlled local software composition.

## E4 — Authenticated end-to-end control path

- **Claim:** decision, bounded authority, release validation, execution, interruption, uncertainty and receipts remain coherent through the tested authenticated local path.
- **Experiment:** 32 end-to-end cases covering `ALLOW`, human-resolved `ESCALATE`, `DENY`, replay, stale human release, active interruption and unknown external effect.
- **Observed:** `32/32 PASS ×2` with an identical semantic sequence across the two runs.
- **Ceiling:** exact pinned local composition; no production or universal external-world exactly-once claim.

## E5 — STOP and containment

- **Claim:** authenticated STOP is a separate active-execution interrupt that can revoke further authority, contain tested work, preserve partial/unknown truth and emit reconciliation evidence.
- **Experiment:** common 10-case STOP suite plus bounded domain profiles.
- **Observed:** common `10/10 PASS`; the domain profiles also passed within their stated software/SIL boundaries.
- **Ceiling:** bounded software/SIL interruption and containment; no universal physical safe state, rollback or guaranteed remote STOP latency.

## E6 — Bounded projection / federation

- **Claim:** purpose/freshness/provenance-bound state can cross a domain boundary without transferring receiving-domain action authority.
- **Mechanism:** explicit field scope, freshness/expiry, provenance and receiver-local admission/decision.
- **Experiment:** projection contract `14/14 PASS`; shared-control composition `14/14 PASS`.
- **Adversarial classes:** scope widening, stale/malformed projection, tampering, identity substitution and foreign-authority injection.
- **Ceiling:** exact tested software contracts; no arbitrary or production federation.

## E7 — Bounded federation composition

- **Claim:** pinned qualified components can compose through a shared semantic interchange while preserving receiver-local authority.
- **Experiment:** joined multi-domain software chain plus inherited regression tests.
- **Observed:** `48/48 PASS`; sealed artifact verification `9/9 PASS`.
- **Ceiling:** bounded software composition of exact pinned components; no arbitrary federation, physical independence or production deployment.

## E8 — Institutional handoff truth separation

- **Claim:** a synthetic GP→hospital handoff can preserve exact human release, independent receiver admission, acknowledgement/effect separation, responsibility-transfer truth and same-attempt reconciliation.
- **Observed:** initial `40/40 PASS`, repeated byte-identically; later STOP-enhanced regression `44/44 PASS`.
- **Ceiling:** synthetic local NHS-derived fixture only; no NHS, clinical, regulatory or patient-safety validation.

## E9 — Translation / interoperability

- **Claim:** one pinned legacy work-order representation can be translated deterministically without widening consequence-critical semantics or duplicating an uncertain effect.
- **Observed:** original `15/15 PASS`; current `17/17 PASS`.
- **Ceiling:** one synthetic legacy schema/action profile; no universal translator or automatic semantic discovery.

## E10 — Represented data-centre SIL stress point

- **Claim:** for two frozen control cases, 15 distributed software kernels remained semantically equivalent to the reference control surface at a represented estate of 409,600 servers.
- **Environment:** software/SIL.
- **Observed:** semantic equivalence and complete accounting; all 15 kernels executed; total wall time approximately 27 h 55 m.
- **Ceiling:** one exact software/SIL stress point, not a scaling law, maximum capacity, production SLA or physical data-centre result.

## E11 — Real GPU governed execution

- **Claim:** two logical authority domains can govern a real two-GPU CUDA/NCCL distributed-training run on one physical host with refusal, replay and in-flight withdrawal/STOP evidence.
- **Observed:** real two-GPU DDP PASS; focused control, replay, refusal, STOP/withdrawal and join-failure paths passed; independent replay reproduced the canonical model state.
- **Ceiling:** two GPUs on one physical host; no site/rack/power/cooling independence or production SLA.

## E12 — Physical-simulator autonomy

- **Claim:** a pinned underwater autonomy software/SITL stack exhibits repeatable closed-loop motion and sensor-governed bounded responses.
- **Observed:** `20/20 PASS ×2` with identical semantic result; representative motion, sensor and bounded-obstacle-response gates passed.
- **Ceiling:** software and physical simulator only; no HIL, physical vehicle, field/ocean safety, certification or regulatory proof.

## E13 — Known implementation contradiction: legacy REST durability

- **Withheld claim:** the current legacy REST execution path is restart-durable exactly-once.
- **Observed conflict:** documentation states stronger restart-durable behaviour than the active implementation supports; consequence-critical state remains process-local in memory.
- **Status:** `NOT QUALIFIED` for restart-durable or durable exactly-once public claims.
- **Required closure:** durable implementation or narrowed documentation, followed by fresh crash/restart/race/replay qualification.

## Negative-result chains retained

- **Runtime-environment mismatch:** an earlier agent-execution run did not qualify under the wrong runtime/resource context; the unchanged harness passed under the intended isolated service context. The earlier result remains part of the record.
- **Stale lineage/replay:** independent review found multiple stale-derived-artifact/replay paths; a repaired candidate passed the full repeated qualification suites.
- **Qualification-harness nondeterminism:** simulator shutdown/readiness defects were repaired in the harness, retained artifacts were reverified, and the representative qualification reran successfully.
- **Large SIL run:** earlier 409,600 attempts were non-terminal or inadequate for the final claim; only the later terminal result supports E10.
- **Legacy REST:** the durability documentation/implementation conflict remains open and has not been rewritten into a PASS.

## Reproducibility disclosure boundary

Exact source identities, private repository paths, executable reproduction commands, internal manifests and full fixture recipes are retained in the internal evidence pack. The public paper preserves experiment hypotheses, environment classes, test counts, observations, repetition and claim ceilings. Controlled reproducibility access can be supplied separately where disclosure is scientifically necessary and operationally appropriate.

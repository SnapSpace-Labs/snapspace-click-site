# Public-Safe Flagship Paper Claim Ledger

Paper: **SnapSpace: Bounded Authority and Verifiable Consequence Control for Autonomous AI Systems**

Evidence cutoff: **2026-09-12**. Detailed internal source bindings are retained in the internal publication pack; this public ledger preserves the exact scientific claims, qualification state and claim ceilings.

| Claim ID | Exact claim | Public evidence anchor | Status | Limitation / ceiling | Paper section | Unresolved dependency |
|---|---|---|---|---|---|---|
| PCL-001 | Reasoning/proposal output is not itself consequential authority in the SnapSpace control model. | E1 | QUALIFIED as contract topology | Does not prove reasoning quality or universal policy correctness. | 2, 4, 6 | None |
| PCL-002 | Normal public decisions are exactly `ALLOW / DENY / ESCALATE`; only effective ALLOW may create a bounded grant. | E1 | QUALIFIED | Bounded software contract. | 4, 5 | None |
| PCL-003 | Material, source state, authority and release context can be bound and revalidated before tested execution paths release consequence. | E1, E3, E4 | QUALIFIED | Pinned tested paths only; not universal runtime enforcement. | 4–6, 12 | Legacy adapter alignment remains incomplete. |
| PCL-004 | A grant is permission to attempt, not proof that execution or external effect occurred. | E2, E4 | QUALIFIED | Receipt-contract semantics; adapters must obtain truthful external evidence. | 4, 7 | None |
| PCL-005 | `UNKNOWN_EFFECT` remains non-final in the qualified receipt/end-to-end contracts and cannot be converted to success by acknowledgement alone. | E2, E4 | QUALIFIED | Some external systems may never provide definitive effect truth. | 5, 7, 12 | Real external-adapter studies remain open. |
| PCL-006 | Duplicate/replayed authority is rejected in the qualified compositions; uncertain external effects are reconciled against the original attempt rather than blindly retried. | E3, E8, E9 | QUALIFIED within fixtures | Not a universal external-world exactly-once theorem. | 3, 5, 7, 12 | Deployed adapters need their own durability/readback proof. |
| PCL-007 | STOP is a separate active-execution interrupt, not a fourth normal decision and not rollback. | E5 | QUALIFIED software/SIL | No universal physical safe state or instant remote STOP guarantee. | 4, 5, 9, 12 | Physical/HIL STOP evidence remains open. |
| PCL-008 | STOP can truthfully preserve already-committed, partial and unknown effects instead of representing them as undone. | E2, E5 | QUALIFIED software/SIL | Domain remediation semantics remain local. | 5, 7, 9 | Physical remediation evidence is domain-specific. |
| PCL-009 | Bounded projections can share explicit state without transferring receiving-domain action authority. | E6 | QUALIFIED | Exact tested contracts only. | 8, 12 | Larger/degraded federation remains research. |
| PCL-010 | Pinned components composed through the bounded federation layer while preserving authority separation in the tested joined chain. | E7 | QUALIFIED / SEALED / CANONICAL | Bounded software chain; not arbitrary federation or production deployment. | 8, 10, 12 | Wide-area/degraded/physical separation open. |
| PCL-011 | Decision, grant, attempt, execution, acknowledgement, effect, responsibility transfer and reconciliation are distinct truth layers in the architecture. | E2, E8 | QUALIFIED as model + bounded contracts | Not every component emits every layer as one universal object. | 4, 7 | Universal receipt implementation absent. |
| PCL-012 | The synthetic GP→hospital fixture preserved receiver admission and responsibility-transfer truth separately from delivery acknowledgement. | E8 | QUALIFIED / SYNTHETIC SOFTWARE | No NHS validation, live interoperability or clinical/regulatory claim. | 7, 12 | Live institutional reality gate open. |
| PCL-013 | One pinned translator preserved consequence-critical semantics, stable attempt identity and drift/uncertainty handling for one synthetic legacy schema. | E9 | QUALIFIED / SYNTHETIC SOFTWARE | Not a universal translator or semantic-discovery claim. | 10, 12 | Real legacy-system qualification open. |
| PCL-014 | A 15-kernel software/SIL control surface remained semantically equivalent to the reference behaviour at the tested 409,600-server represented point for two frozen cases. | E10 | QUALIFIED / SOFTWARE-SIL ONLY | One tested point; not a scaling law, physical data-centre result, maximum capacity or SLA. | 12, 14 | Larger/physical/production tests open. |
| PCL-015 | Governed execution reached real CUDA/NCCL two-GPU DDP with refusal/replay/STOP/join-failure evidence on one physical host. | E11 | QUALIFIED / SEALED / REAL GPU | Two logical domains on one physical host; no rack/site/power/cooling independence. | 12, 14 | Independent physical hosts/sites open. |
| PCL-016 | The autonomy stack demonstrated repeatable closed-loop simulator motion and bounded sensor-governed responses. | E12 | QUALIFIED / PHYSICAL SIMULATOR ONLY | No HIL, real vehicle, field/ocean safety or certification. | 12, 14 | Physical reality gate open. |
| PCL-017 | The current legacy SnapSpace REST path is not qualified for restart-durable or durable exactly-once public claims. | E13 | NOT QUALIFIED for stronger claim | Active consequence-critical state remains process-local. | 10, 13, 14 | Implementation/documentation reconciliation + fresh qualification. |
| PCL-018 | Negative results are retained and later PASS states do not erase earlier invalid/failed candidates. | Public negative-result chains in EVIDENCE_MAP | SOURCE VERIFIED | Evidence-governance practice, not a theorem about system safety. | 11, 13 | None |
| PCL-019 | The architecture does not make probabilistic reasoning deterministic; it constrains whether proposed consequences may proceed. | Paper model + related work | SOURCE VERIFIED / DESIGN CLAIM | Does not solve model alignment, hallucination or objective correctness. | 1, 2, 16, 17 | None |
| PCL-020 | `SHARE STATE, NOT AUTHORITY` is supported only at bounded tested federation scope, not as a universal federation theorem. | E6, E7 | QUALIFIED within tested scope | Larger/degraded/physically separated federation remains research. | 8, 14, 16 | Active research programme. |

## Withheld or prohibited claims

- **WITHHELD:** “SnapSpace REST guarantees exactly-once across restart.” Current implementation does not support this claim.
- **WITHHELD:** “SnapSpace guarantees exactly-once effects in arbitrary external systems.” No such universal guarantee is scientifically supportable.
- **WITHHELD:** “STOP rolls back completed effects.” STOP is containment plus truthful reconciliation, not rollback.
- **WITHHELD:** “409,600 represented servers proves production-scale data-centre capacity.” It does not.
- **WITHHELD:** “Real GPU proves independent data-centre domains.” Both GPUs were on one physical host.
- **WITHHELD:** “Synthetic institutional fixtures prove NHS/clinical readiness.” They do not.
- **WITHHELD:** “Simulator autonomy proves physical/ocean safety.” It does not.
- **WITHHELD:** “External standards citations imply certification or compliance.” They do not.

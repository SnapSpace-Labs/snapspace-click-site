# Public Evidence Register

Evidence cutoff: **2026-09-12**. This is a disclosure-safe derivative of the internal scientific evidence corpus. It does not replace the internal record.

| Evidence ID | Disclosure | Public result | Claim ceiling | Public pack |
|---|---|---|---|---|
| EVD-COMMON-CONTROL | PUBLIC-REDACTED | QUALIFIED — 32/32 PASS. | Common software control contract only. | `packs/EVD-COMMON-CONTROL.md` |
| EVD-RECEIPT-CONTRACT | PUBLIC-REDACTED | QUALIFIED — 18/18 PASS. | Common receipt truth contract only. | `packs/EVD-RECEIPT-CONTRACT.md` |
| EVD-LOCAL-INTEGRATION | PUBLIC-REDACTED | QUALIFIED — 17/17 PASS. | Pinned bounded local software composition. | `packs/EVD-LOCAL-INTEGRATION.md` |
| EVD-SOVEREIGN-E2E | PUBLIC-REDACTED | QUALIFIED — 32/32 PASS ×2. | Authenticated local/loopback software composition. | `packs/EVD-SOVEREIGN-E2E.md` |
| EVD-BOUNDED-PROJECTION | PUBLIC-REDACTED | QUALIFIED — 14/14 + 14/14 PASS. | Exact bounded projection/composition contracts. | `packs/EVD-BOUNDED-PROJECTION.md` |
| EVD-SOVEREIGN-FABRIC | PUBLIC-REDACTED | QUALIFIED / SEALED / CANONICAL — 48/48 + 9/9. | Pinned bounded software composition. | `packs/EVD-SOVEREIGN-FABRIC.md` |
| EVD-STOP | PUBLIC-REDACTED | QUALIFIED — SOFTWARE/SIL ONLY. | Bounded software/SIL STOP semantics. | `packs/EVD-STOP.md` |
| EVD-DATACENTRE-SIL | PUBLIC-REDACTED | QUALIFIED — exact software/SIL stress point. | Exact tested software/SIL topology/cases. | `packs/EVD-DATACENTRE-SIL.md` |
| EVD-REAL-GPU | PUBLIC-REDACTED | QUALIFIED / SEALED / REAL GPU. | Two real GPUs on one physical host with logical control domains. | `packs/EVD-REAL-GPU.md` |
| EVD-P03-HANDOFF | PUBLIC-REDACTED | QUALIFIED — SYNTHETIC SOFTWARE. | Synthetic bounded institutional handoff only. | `packs/EVD-P03-HANDOFF.md` |
| EVD-P05-TRANSLATION | PUBLIC-REDACTED | QUALIFIED — SYNTHETIC SOFTWARE. | One synthetic legacy schema/action profile. | `packs/EVD-P05-TRANSLATION.md` |
| EVD-P01-HUMAN-CONTROL | PUBLIC-REDACTED | QUALIFIED — BOUNDED SYNTHETIC SOFTWARE. | Local deterministic human-governed fixture. | `packs/EVD-P01-HUMAN-CONTROL.md` |
| EVD-P02-INSTITUTIONAL-RULES | PUBLIC-REDACTED | QUALIFIED / EXTERNAL REALITY PENDING. | Frozen offline public-rule profile only. | `packs/EVD-P02-INSTITUTIONAL-RULES.md` |
| EVD-P08-CNI | PUBLIC-REDACTED | QUALIFIED — NON-ACTUATING SOFTWARE/API. | Tested non-actuating information/API profiles. | `packs/EVD-P08-CNI.md` |
| EVD-P09-AGENT-EXECUTION | SECURITY-SENSITIVE | QUALIFIED — BOUNDED LOCAL SOFTWARE; source details SECURITY-SENSITIVE. | Pinned local governed-execution context. | `packs/EVD-P09-AGENT-EXECUTION.md` |
| EVD-P10-AUTONOMY | PUBLIC-REDACTED | QUALIFIED — PHYSICAL SIMULATOR ONLY. | Software + physical simulator only. | `packs/EVD-P10-AUTONOMY.md` |
| EVD-P11-DEFENCE | PUBLIC-REDACTED | QUALIFIED — SOFTWARE/SIL ONLY. | Bounded software/SIL mission control. | `packs/EVD-P11-DEFENCE.md` |
| EVD-SNAPSPACE-REST-CONFLICT | SECURITY-SENSITIVE | SOURCE VERIFIED / NOT QUALIFIED for restart-durable or durable exactly-once REST claims. | Legacy REST adapter behaviour excluding restart-durable/durable exactly-once guarantees. | `packs/EVD-SNAPSPACE-REST-CONFLICT.md` |

## Evidence truth ladder
`decision truth → authority/grant truth → attempt truth → execution truth → transport acknowledgement → application acknowledgement → effect truth → receiver admission → responsibility transfer → reconciliation/finality`

`ALLOW` is not execution. Execution is not proof of effect. Acknowledgement is not receiver admission or responsibility transfer. `UNKNOWN_EFFECT` stays non-final until reconciled. STOP is not rollback.

## Status discipline
Use `QUALIFIED`, `PARTIALLY QUALIFIED`, `SOURCE VERIFIED`, `HISTORICAL`, `RESEARCH ONLY`, and `NOT QUALIFIED`. `SEALED`/`CANONICAL` strengthen provenance only; they do not widen a claim.

# Public-Safe Threat / Failure Matrix

This matrix preserves scientific failure classes without publishing bypass recipes, vulnerable route sequences or internal attack surfaces.

| Failure class | Public control response | Evidence | Limitation |
|---|---|---|---|
| Replay / duplicate | stable identity; reject unauthorized duplicate consequence | common/local control evidence | external effect semantics remain adapter-specific |
| Concurrent work | bind governed attempt/effect identity; fail closed where invariants are not established | bounded integration evidence | no universal external exactly-once claim |
| Stale authority/context | revalidate before consequential release | common control evidence | freshness policy is domain-specific |
| Changed material | require current action/material binding; re-decide when changed | common control/translation evidence | canonicalisation is profile-specific |
| Malformed input | validate against the governed contract; fail closed | tested contract evidence | only tested schemas are qualified |
| Crash / uncertain recovery | preserve attempt identity and reconcile instead of assuming outcome | receipt/handoff evidence | durability is implementation-specific |
| Ambiguous acknowledgement | keep acknowledgement separate from effect truth | receipt/handoff evidence | some external systems may remain unresolved |
| Partial / unknown effect | preserve typed uncertainty and require reconciliation | receipt evidence | no universal effect oracle |
| STOP during execution | authenticate interrupt, revoke/contain in scope, reconcile | EVD-STOP | physical behaviour remains domain-specific |
| Incomplete STOP | surface incomplete containment/uncertain state rather than claiming completion | bounded STOP evidence | no guaranteed remote latency/availability |
| Stale/over-broad projection | reject or escalate invalid state sharing | projection evidence | larger/degraded federation remains research |
| Authority merger attempt | receiving domain retains independent admission/decision authority | projection/Fabric evidence | exact tested components only |
| Unsafe retry | reconcile original attempt unless non-application or safe duplicate suppression is established | receipt/handoff/translation evidence | connector-specific evidence required |

Security-critical test vectors, exact route sequences, privileged interfaces and implementation topology remain internal.

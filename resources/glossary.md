# Public-Safe Technical Glossary

Public decisions are `ALLOW / DENY / ESCALATE`; `STOP` is separate.

| Term | Public meaning | Not equivalent to |
|---|---|---|
| Proposal | Candidate consequential action presented for governance; creates no authority. | Grant; execution |
| Decision | Governed evaluation against current authority, state, policy and evidence. | Execution result |
| ALLOW | Decision permitting the governed path to continue toward bounded authority. | Proof the action ran |
| DENY | Decision refusing the proposed consequence. | STOP |
| ESCALATE | Decision requiring additional authority, evidence or human/domain resolution. | Failure; STOP |
| Grant | Bounded pre-commit authority for an exact governed consequence. | Receipt; effect proof |
| Bounded authority | Authority constrained to a defined action, scope, context and validity. | Broad standing permission |
| Release-time validation | Check that authority and relevant context are still current before consequence is released. | Initial approval alone |
| Action identity | Stable identity of the intended consequential action. | Attempt identity |
| Attempt identity | Stable identity of one governed execution attempt used for reconciliation. | New retry |
| Execution | Attempt to perform the governed consequence under effective authority. | Effect proof |
| Acknowledgement | Evidence that a transport or application layer observed a request. | Effect; admission |
| Effect | Consequence that did, did not, partially did, or may have occurred. | ACK; local completion |
| Outcome | Best supported statement about execution/effect truth, including `UNKNOWN_EFFECT`. | Guaranteed success |
| Receipt | Evidence record preserving the known governed stages and outcome truth. | Universal proof object |
| UNKNOWN_EFFECT | Effect truth is not safely established; remains non-final. | Failure; success |
| Reconciliation | Evidence-driven resolution of uncertain or partial effect truth for the original attempt. | Blind retry |
| Responsibility transfer | Explicit transfer of operational responsibility when the domain's evidence rule is satisfied. | Delivery; acknowledgement |
| STOP | Authenticated interrupt for active consequential execution. | DENY; rollback |
| Containment | Preventing additional effects where technically possible. | Reversal of completed effects |
| Safe state | Domain-defined bounded state after interruption. | One universal physical state |
| Sovereign domain | Domain retaining its own admission, decision and consequential authority. | Shared central authority |
| Bounded projection | Purpose/freshness/provenance-bound state shared without transferring authority. | Replicated authority |
| Federation | Cooperation among sovereign domains while each retains local authority. | Authority merger |
| Provenance | Evidence of source and lineage relevant to judging information. | Authority to act |
| Claim ceiling | Strongest statement justified by the exact evidence. | Marketing scope |
| Qualification | Evidence-backed pass inside a defined system/environment/ceiling. | Production readiness |
| SIL | Software or software-in-the-loop evidence under defined models. | Physical field proof |
| Simulator | Executed simulated physical environment. | HIL or field operation |
| Real-hardware evidence | Actual hardware execution under stated conditions. | Independent-site or production proof |

Historical source-native terminology may remain inside historical evidence; current public terminology uses the normalized vocabulary above.

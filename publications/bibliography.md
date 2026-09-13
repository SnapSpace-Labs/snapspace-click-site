# Bibliography

> **Public-safe derivative.** External literature citations are retained. Internal source topology remains in the private evidence record.

Evidence cutoff for this publication set: **2026-09-12**. External literature was checked against primary or authoritative sources where practical. Detailed internal source pins are retained in the internal publication record; the public evidence map preserves scientific claims, experiment classes, results and claim ceilings without exposing private repository topology.

## Distributed systems, transactions and effect semantics

**[R1]** A. D. Birrell and B. J. Nelson, “Implementing Remote Procedure Calls,” *ACM Transactions on Computer Systems*, vol. 2, no. 1, pp. 39–59, Feb. 1984. DOI: `10.1145/2080.357392`. Primary metadata: Microsoft Research publication record. Relevance: duplicate suppression, call/reply uncertainty, binding and remote-call semantics.

**[R2]** J. H. Saltzer, D. P. Reed, and D. D. Clark, “End-to-End Arguments in System Design,” *ACM Transactions on Computer Systems*, vol. 2, no. 4, pp. 277–288, Nov. 1984. DOI: `10.1145/357401.357402`. Relevance: correctness properties such as duplicate suppression and delivery acknowledgement often require end-to-end validation rather than trusting lower-layer mechanisms alone.

**[R3]** H. Garcia-Molina and K. Salem, “Sagas,” *Proceedings of ACM SIGMOD*, 1987, pp. 249–259. DOI: `10.1145/38713.38742` / ACM record `10.1145/38714.38742`. Relevance: long-lived transactions, partial completion and compensating actions rather than pretending atomic rollback exists across every boundary.

**[R4]** S. Gilbert and N. A. Lynch, “Brewer’s Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services,” *ACM SIGACT News*, vol. 33, no. 2, pp. 51–59, 2002. DOI: `10.1145/564585.564601`. Relevance: explicit limits under partition and asynchronous communication; used here only as background for failure-model discipline, not as a direct proof of SnapSpace properties.

**[R5]** L. Lamport, R. Shostak, and M. Pease, “The Byzantine Generals Problem,” *ACM Transactions on Programming Languages and Systems*, vol. 4, no. 3, pp. 382–401, July 1982. DOI: `10.1145/357172.357176`. Relevance: distributed agreement under faulty or adversarial participants; SnapSpace does not claim Byzantine consensus from its current evidence.

## Protection, authority and reference mediation

**[R6]** J. H. Saltzer and M. D. Schroeder, “The Protection of Information in Computer Systems,” *Proceedings of the IEEE*, vol. 63, no. 9, pp. 1278–1308, Sept. 1975. DOI: `10.1109/PROC.1975.9939`. Relevance: least privilege, complete mediation, economy of mechanism and protected-subsystem design.

**[R7]** J. P. Anderson, *Computer Security Technology Planning Study, Volume II*, 1972. Historical primary source for the reference-monitor concept: tamper resistance, complete mediation and sufficient simplicity to permit analysis/testing. Authoritative archival copy available through NIST CSRC.

**[R8]** J. B. Dennis and E. C. Van Horn, “Programming Semantics for Multiprogrammed Computations,” *Communications of the ACM*, vol. 9, no. 3, pp. 143–155, 1966. DOI: `10.1145/365230.365252`. Relevance: protected computation, named objects and capability-oriented authority semantics.

**[R9]** A. Birgisson, J. G. Politz, Ú. Erlingsson, A. Taly, M. Vrable, and M. Lentczner, “Macaroons: Cookies with Contextual Caveats for Decentralized Authorization in the Cloud,” *NDSS Symposium*, Internet Society, 2014. Primary record: Google Research. Relevance: attenuated, context-bound authorization credentials and delegated authority without unconstrained widening.

**[R10]** V. C. Hu et al., *Guide to Attribute Based Access Control (ABAC) Definition and Considerations*, NIST SP 800-162, Jan. 2014, updated Aug. 2019. DOI: `10.6028/NIST.SP.800-162`. Relevance: authorization based on subject, object, operation and environmental attributes; used as background, not as a claim of NIST compliance.

## Runtime assurance and interruption

**[R11]** J. G. Rivera, A. A. Danylyszyn, C. Weinstock, L. R. Sha, and M. J. Gagliardi, *An Architectural Description of the Simplex Architecture*, CMU/SEI-96-TR-006, Mar. 1996. Relevance: separation of complex/untrusted functionality from a simpler assurance/control subsystem; formal analysis of safety and liveness properties.

**[R12]** L. R. Sha, *A Software Architecture for Dependable and Evolvable Industrial Computing Systems*, CMU/SEI-95-TR-005, July 1995. Relevance: Simplex architecture and safety-preserving control around complex components.

**[R13]** L. Orseau and S. Armstrong, “Safely Interruptible Agents,” *Proceedings of the 32nd Conference on Uncertainty in Artificial Intelligence (UAI 2016)*, pp. 557–566, 2016. Primary publication record: Oxford University Research Archive / AUAI proceedings. Relevance: learned agents and interruption incentives. SnapSpace STOP addresses a different systems question: authenticated interruption and truthful containment/effect accounting after consequential execution begins.

## AI safety and AI-control protocols

**[R14]** D. Amodei, C. Olah, J. Steinhardt, P. Christiano, J. Schulman, and D. Mané, “Concrete Problems in AI Safety,” arXiv:1606.06565, 2016. Relevance: practical accident modes including side effects, distributional shift and safe exploration; establishes why model correctness alone is not a sufficient systems assumption.

**[R15]** R. Greenblatt, B. Shlegeris, K. Sachan, and F. Roger, “AI Control: Improving Safety Despite Intentional Subversion,” *Proceedings of the 41st International Conference on Machine Learning*, PMLR 235, pp. 16295–16336, 2024. Relevance: control protocols intended to remain useful when a powerful model may be untrusted. SnapSpace differs by focusing on consequential authority, execution, STOP and evidence boundaries rather than only output-review protocols.

## Provenance and evidence

**[R16]** W3C Provenance Working Group, *PROV-DM: The PROV Data Model*, W3C Recommendation, 30 Apr. 2013, together with *Constraints of the PROV Data Model*. Relevance: explicit entities, activities, agents, derivation and validity constraints for interoperable provenance. SnapSpace receipts use a narrower consequence-control truth model and do not claim PROV conformance unless separately mapped.

## Standards used only as conceptual background

**[R17]** NIST, “Reference Monitor Concept,” CSRC Glossary, sourced to NIST SP 800-160 Vol. 1 Rev. 1 and earlier reference-monitor literature. Relevance: current authoritative definition of complete access mediation. Citation does **not** imply NIST validation of SnapSpace.

**[R18]** NIST, “Least Privilege,” CSRC Glossary / NIST SP 800-53 and SP 800-171 lineage. Relevance: minimum necessary authorization. Citation does **not** imply compliance or certification.

## Source-use rule

The flagship paper uses these references to locate SnapSpace within established systems and AI-control literature. None of the standards or external papers above constitute certification, endorsement, or evidence that SnapSpace satisfies a standard. SnapSpace-specific claims resolve through the accompanying public-safe `EVIDENCE_MAP.md` and `CLAIM_LEDGER.md`, with fuller internal provenance retained privately.

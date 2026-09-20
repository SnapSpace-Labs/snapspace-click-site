# Reconstructed visual motion specification

The original approved three MP4s were not available as files. This is reconstructed from the supplied build-thread handoff, not a claim of frame-accurate replay.

Normal (5.5s): inactive 0–0.6; Intent 0.6; Authority 1.7; Execution 2.8; Evidence 3.9; settle from 4.8.

STOP (5.5s): inactive 0–0.6; Intent 0.6; Authority 1.6; Execution 2.6; STOP 3.05; keep downstream inactive and residual trace; settle from 4.0.

Platform (7.5s): scene stable 0–0.6; Intent 0.6; Authority 1.5; Execution 2.3; STOP 3.1; STOP receipt/trace 3.9–6.2; settle 7.5. After STOP, no downstream execution or evidence node of a successfully completed external effect activates.

Manual STOP cancels requestAnimationFrame and pending downstream state changes. Reduced-motion mode renders the final status immediately, without any timed animation.
# SnapSpace.click — GitHub recovery, 21 September 2026

## What this branch is

**Foundation:** the near-finished GitHub Pages site at `main` commit `99ee74553a653bfba6e456a2b40dccab2a05274f`. The eight page HTML files in the verified GitHub Pages artifact are byte-for-byte Git blob matches for this commit; see `baseline-inventory.json`.

**This is a recovery and fidelity branch, not a new website.** Preserve the original page content, site structure, P10 evidence / domain claims, supporting URLs and existing navigation. Changes to the visual presentation must be measured against the approved fifth-iteration board, not invented. No production deploy or Replit action is part of this branch's preparation.

**Do not use** `build/replit-integration-20260920` as the website foundation. That branch was created with a fresh Git tree and unintentionally omits the original website files; it holds transfer assets and experimental React material only. `main` was not overwritten. The existing Replit app may have the installed React consolidation, but its published domain and current visual state have not been verified in this recovery.

## References captured unchanged

- `approved-eight-page-board.png.b64`: base64 encoding of the exact reference PNG, **not a remade design**. SHA-256 after decoding: `01e494d1291a54f9ff5c968296e82ee468f38f681d6c631f1d8862d65e97d18f`.
- `motion-system-board-reference.jpg.b64`: base64 of the reference JPG. SHA-256 after decoding: `152c90f3bcab2a2ee34602af5bbf52e492d9f5cffaab7ace62adc5643ca25ba2`.
- `restore_references.py` decodes both files, validates the hashes and writes image files locally. Encoding is for GitHub's text-file-only upload conduit; the decoded bytes match the originals exactly.
- `MOTION_SPEC.md`: supplied motion timings for normal, STOP and Platform. The **original approved playable MP4s are not in this recovered archive**, and the motion reference JPG does not replace them.

## Original baseline versus final intended visual design

The original site already has eight route pages, substantial verified public content and supporting Evidence / Resources paths. The approved board is a distinct editorial/cinematic design with page-specific compositions, environmental images, teal/cyan governed traces, technical notation, an interruption red limited to STOP, restrained compact navigation and lifted blue-black fields. It is **not** a request to merely recolour or cardify the original site. The board contains a planetary/environmental hero (Home), operational stepped Platform, evidence-led Proof, layered Architecture, explicit four-domain environments, code-led Developers, exploratory Research and institutional Company.

The locally generated September 20 static/React consolidation copies/rearranges earlier content and uses provisional image plates; it did not reproduce the approved fifth-iteration design. Some motion/controller logic and carefully sourced content can be salvaged without adopting the regression's layout.

## Asset reality

Available: exact approved eight-page board PNG; exact motion-system reference JPG; original GitHub Pages HTML/CSS/JS; static candidate's two **provisional** environmental webps; source/timing tests for reconstructed motions. Not verified available: the eight full-resolution approved source images, three original playable MP4s, an editable Next.js/React project matching GitHub Pages `main`. None should be silently swapped or labelled approved.

## Recovery order

1. Keep GitHub `main` and production untouched; branch from the verified original baseline.
2. Preserve original references, inventory and salvageable motion source separately from active website files.
3. Reproduce **approved** layout page by page, keeping existing content/proof/routes and selected genuine motion improvements; do not turn the old website into the previous static replacement.
4. Local visual comparison at desktop/mobile against board; report each unavailable source asset without substitution.
5. Any Replit check, transfer, build or publishing requires a fresh, specific user approval explaining the exact action, affected files and possible credit cost. This GitHub recovery approval does NOT authorize Replit activity.

## Original route inventory

See `baseline-inventory.json`. The eight baseline route HTML files matched the saved GitHub Pages export. The last local offline Chromium run rendered each page at 1440px without horizontal overflow; that only validates the frozen original, not the approved visual fidelity or running-site interactivity.
# snapspace-click-site

The published website for **SnapSpace**, served at https://snapspace.click via GitHub Pages.

**This repo is built output, not source.** Do not edit the files here by hand.
The source is the `snapspace-click/` folder in the private repo `SnapSpace-Labs/SnapSpaceOS-Web`.

## Core
SnapSpace (public face of the SnapSpace core). Status: live.

## What is on the site
- `platform/`, `architecture/`, `capabilities/`, `developers/`: what SnapSpace is and how it works.
- `evidence/`, `proof/`, `research/`, `publications/`: public evidence register, open gates, claim ledger, and the bounded-authority paper (PDF).
- `company/`, `domains/`, `applications/`, `academia/`, `resources/`: company and reference pages.

## How it is updated
1. Change the source in SnapSpaceOS-Web.
2. Build the static export.
3. Copy the output here and push to `main`. GitHub Pages serves `main`.
Keep `CNAME` (`snapspace.click`) and `.nojekyll` in place, or the custom domain breaks.

## Rules for this repo
- Public repo: never add secrets, personal paths or private notes.
- No workflows that commit or push on their own.
- One diagnostic workflow (`ssl-diagnostic.yml`) runs on pull requests only and has read-only access.

## Contact
information@snapspace.click

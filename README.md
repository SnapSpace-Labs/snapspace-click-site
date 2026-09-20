# SnapSpace.click — isolated Replit integration bundle

This branch is a transfer artifact only; it is **not** the production website branch. Do not merge it into main.

The existing Replit app is `Snapspace.click` (React/TypeScript/Vite pnpm monorepo, artifact `artifacts/snapspace`). Preserve its source, checkpoint and custom domain. Do not create a new app or publish the preview.

Bundle: `snapspace-github-replit-transfer.zip`, split into ordered raw binary parts `transfer/parts/part-000.bin` through `part-013.bin`. Reassemble in lexicographic order and verify SHA-256 against `transfer/manifest.json` before extracting. Every part has a separate SHA-256 in the manifest.

Inside the ZIP: prebuilt eight-page visual candidate, supporting public routes, styles and assets, the tested governed-path controller, separately tested React `InteractiveFlow.tsx` and CSS source, an offline installer and `AGENT_INSTALL.md`. The prebuilt visual material is a candidate, not exact parity with original inaccessible MP4s or final approved image assets.

Minimal Replit action:
1. In the existing app only, preserve checkpoint; fetch this public transfer branch to a temporary directory, concatenate parts into the ZIP, verify checksum and unpack there.
2. Read the enclosed `AGENT_INSTALL.md` and `REPLIT_TRANSFER.md`.
3. Run the prepared read-only preflight; if the existing artifact matches, run the installer and existing artifact build and verification scripts.
4. Show running PREVIEW and report real build errors. No subagent, redesign, copy changes, extra dependency work, new app, custom-domain changes or publishing.
5. If the app workspace differs or a genuinely incomplete visual asset blocks fidelity, report that exact blocker rather than improvise.

Generated source is in the ZIP; the current production GitHub Pages `main` remains untouched.

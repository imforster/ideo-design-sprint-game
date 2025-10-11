# Repository Guidelines

## Project Structure & Module Organization
- `index.html`: Browser entry point that mounts the game, loads React/Tailwind from CDNs, and hosts inline scripts.
- `src/ideo_game.tsx`: Single React component containing game logic, challenge management, and export features; group related helpers nearby and keep side effects predictable.
- `test-challenges.json`: Reference dataset for import/export scenarios—clone it per experiment instead of mutating the original.
- Documentation (`DOCUMENTATION.md`, `FACILITATOR_GUIDE.md`, `ERROR_HANDLING_SUMMARY.md`, etc.) forms the in-repo handbook; update these alongside functional changes and rebuild the distributable ZIP.

## Build, Test, and Development Commands
- `open index.html` (macOS) or `xdg-open index.html`: Launches the game for quick smoke checks.
- `python3 -m http.server 4173` (run from repo root) then visit `http://localhost:4173/index.html`: Serves the app with correct MIME types and avoids `file://` upload limits.
- `zip -r ideo-design-sprint-game.zip *`: Refreshes the packaged deliverable after code or asset updates; confirm `CHANGE_LOG.md` reflects the release.

## Coding Style & Naming Conventions
- Follow the patterns in `src/ideo_game.tsx`: 2-space indentation, single quotes, `const` declarations for components/hooks, and arrow functions for event handlers.
- Use PascalCase for components (`IDEOGame`), camelCase for hooks/state (`selectedIdeas`, `setTimerActive`), and Tailwind utilities in kebab-case strings.
- Keep hook ordering consistent (state → derived data → effects) and retain existing guard clauses/input validation before mutating state.
- Prefer inline comments only for non-obvious logic; otherwise rely on clear naming and optional JSDoc summaries.

## Testing Guidelines
- Manual regression is primary: walk through the scenarios in `VERIFICATION_CHECKLIST.md`, covering challenge import/export, timer bounds, PDF/email flows, and solo vs. team journeys.
- Use `test-challenges.json` as baseline data; create copies for edge cases and document variations in your PR notes.
- Confirm console messaging matches expectations from `ERROR_HANDLING_SUMMARY.md`; capture discrepancies and browser details in the PR.
- When feasible, attach before/after screenshots or exported PDFs to demonstrate UI changes and reporting fidelity.

## Commit & Pull Request Guidelines
- Align with current history by using imperative or Conventional Commit subjects (`feat: improve export UX (#12)`), keeping the first line under ~60 characters and referencing linked issues or tasks.
- Base PR descriptions on `PULL_REQUEST.md`: include a concise overview, task reference, testing checklist results, and any asset/doc updates.
- Request review only after smoke-testing locally, updating documentation, and rebuilding the ZIP; list deferred follow-ups explicitly to keep reviewers aligned.

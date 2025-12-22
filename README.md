# Plate Icons

Plate Icons is a small utility for browsing multiple icon libraries in one place. It is an attempt to help Plate users pick the right fonts for their project by giving a quick way to compare overall UI tone, shape language, detail density, and sizing behavior across libraries.

## Features
- Browse multiple icon libraries side-by-side.
- Search by export name (per-library or across all libraries).
- Adjustable size, stroke width (where supported), and grid density.
- Toolbar mock to preview icons in a UI layout.

## Live Demo
https://plateicons.vercel.app

## Included Libraries
- `lucide-react` (ISC) — https://lucide.dev · https://github.com/lucide-icons/lucide
- `@radix-ui/react-icons` (MIT) — https://github.com/radix-ui/icons
- `@phosphor-icons/react` (MIT) — https://phosphoricons.com · https://github.com/phosphor-icons/react
- `@untitledui/icons` (MIT) — https://www.npmjs.com/package/@untitledui/icons
- `iconoir-react` (MIT) — https://iconoir.com · https://github.com/iconoir-icons/iconoir
- `@solar-icons/react` (MIT) — https://github.com/saoudi-h/solar-icons

All icon sets are owned by their respective authors. This project consumes them as dependencies; make sure your usage complies with each library’s license and any third‑party notices they ship.

## Development
Requires Bun.

```bash
bun install
bun run dev
```

Then open `http://localhost:3000`.

Build for production:

```bash
bun run build
```

Serve the production build:

```bash
bun run start
```

Typecheck:

```bash
bun run typecheck
```

Lint:

```bash
bun run lint
```

## Notes
- Icon export names are normalized so you can search and match across libraries.
- The toolbar mock uses a token-based API (e.g. `token="bold"`). Each library needs a per-token alias map so those tokens resolve to a real exported component for that library.
- When an immediate equivalent doesn’t exist, the toolbar maps to the closest available icon (best-effort).

## Project Structure
- `src/iconLibraries.ts` registers libraries and enumerates their exported React components.
- `src/components/IconCatalog.tsx` renders the searchable grid and library overview cards.
- `src/components/toolbar/ToolbarIcon.tsx` resolves toolbar tokens to an actual icon component (normalization + aliases + fallbacks).
- `src/components/toolbar/ToolbarPage.tsx` is the UI mock that exercises the token set.
- `icons.csv` is a convenience reference for cross-library mappings used while aligning toolbar tokens.

## Adding A Library
At a high level:
- Add the dependency.
- Register the library in `src/iconLibraries.ts` (import, `IconLibraryId`, non-icon export filtering, `ICON_LIBRARIES` entry).
- Ensure `IconCatalog` includes it in the “all libraries” selection.
- Add it to the toolbar library selector in `src/App.tsx`.
- Add/adjust token aliasing and fallbacks in `src/components/toolbar/ToolbarIcon.tsx` so the toolbar mock renders without missing icons.

## Thanks
Thanks to the maintainers of Plate and the maintainers of the icon and font libraries this project depends on. Your work makes tools like this possible.

# Plate Icons

Plate Icons is a small utility for browsing multiple icon libraries in one place. It is also an attempt to help users of Plate pick the right fonts for their project by giving them a quick way to compare UI details and overall visual tone.

## Features
- Browse multiple icon libraries side-by-side.
- Search by export name.
- Adjustable size, stroke width, and grid density.
- Toolbar mock to preview icons in a UI layout.

## Included Libraries
- lucide-react
- @radix-ui/react-icons
- @phosphor-icons/react
- @untitledui/icons
- iconoir-react
- @solar-icons/react

## Development
Requires Bun.

```bash
bun install
bun run dev
```

Build for production:

```bash
bun run build
```

Typecheck:

```bash
bun run typecheck
```

## Notes
- Icon export names are normalized so you can search and match across libraries.
- Toolbar alias mappings attempt to find the closest icon when an exact equivalent does not exist.

## Thanks
Thanks to the maintainers of Plate and the maintainers of the icon and font libraries this project depends on. Your work makes tools like this possible.

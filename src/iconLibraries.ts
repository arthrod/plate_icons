import * as Phosphor from "@phosphor-icons/react";
import * as Radix from "@radix-ui/react-icons";
import * as UntitledUi from "@untitledui/icons";
import * as Iconoir from "iconoir-react";
import * as Lucide from "lucide-react";
import * as Solar from "@solar-icons/react";
import type React from "react";

export type IconLibraryId =
	| "lucide"
	| "radix"
	| "phosphor"
	| "untitledui"
	| "iconoir"
	| "solar";

export type IconEntry = {
		library: IconLibraryId;
		exportName: string;
		Component: React.ElementType;
	};

const NON_ICON_EXPORTS = {
	lucide: new Set<string>([
		"createLucideIcon",
		"Icon",
		"LucideIcon",
		"LucideProps",
		"default",
		"icons",
		"defaultAttributes",
		"toKebabCase",
	]),
	radix: new Set<string>(["IconProps", "default"]),
	phosphor: new Set<string>(["IconBase", "IconContext", "default"]),
	untitledui: new Set<string>(["default"]),
	iconoir: new Set<string>([
		"Iconoir",
		"IconoirContext",
		"IconoirProvider",
		"default",
	]),
	solar: new Set<string>(["IconBase", "SolarProvider", "useSolar", "default", "SSR", "solar"]),
} satisfies Record<IconLibraryId, Set<string>>;

function isRenderableReactComponent(
	value: unknown,
): value is React.ElementType {
	if (typeof value === "function") return true;
	if (typeof value === "object" && value !== null) {
		return "$$typeof" in (value as Record<string, unknown>);
	}
	return false;
}

function entriesForLibrary(
	library: IconLibraryId,
	mod: Record<string, unknown>,
): IconEntry[] {
	const out: IconEntry[] = [];
	const ignored = NON_ICON_EXPORTS[library];

	for (const [exportName, value] of Object.entries(mod)) {
		if (ignored.has(exportName)) continue;
		if (library === "phosphor" && !exportName.endsWith("Icon")) continue;
		if (!isRenderableReactComponent(value)) continue;
		out.push({ library, exportName, Component: value });
	}

	out.sort((a, b) => a.exportName.localeCompare(b.exportName));
	return out;
}

export const ICON_LIBRARIES = [
	{
		id: "lucide" as const,
		label: "lucide-react",
		entries: entriesForLibrary("lucide", Lucide as Record<string, unknown>),
	},
	{
		id: "radix" as const,
		label: "@radix-ui/react-icons",
		entries: entriesForLibrary("radix", Radix as Record<string, unknown>),
	},
	{
		id: "phosphor" as const,
		label: "@phosphor-icons/react",
		entries: entriesForLibrary("phosphor", Phosphor as Record<string, unknown>),
	},
	{
		id: "untitledui" as const,
		label: "@untitledui/icons",
		entries: entriesForLibrary(
			"untitledui",
			UntitledUi as Record<string, unknown>,
		),
	},
	{
		id: "iconoir" as const,
		label: "iconoir-react",
		entries: entriesForLibrary("iconoir", Iconoir as Record<string, unknown>),
	},
	{
		id: "solar" as const,
		label: "@solar-icons/react",
		entries: entriesForLibrary("solar", Solar as Record<string, unknown>),
	},
] as const satisfies ReadonlyArray<{
	id: IconLibraryId;
	label: string;
	entries: IconEntry[];
}>;

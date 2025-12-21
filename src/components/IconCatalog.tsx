import { useMemo, useState } from "react";
import {
	ICON_LIBRARIES,
	type IconEntry,
	type IconLibraryId,
} from "../iconLibraries";

type GridDensity = "comfortable" | "compact";
type LibrarySelection = "all" | IconLibraryId;

function matchesQuery(name: string, query: string) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	return name.toLowerCase().includes(q);
}

export function IconCatalog() {
	const [librarySelection, setLibrarySelection] =
		useState<LibrarySelection>("all");
	const [query, setQuery] = useState("");
	const [size, setSize] = useState(22);
	const [strokeWidth, setStrokeWidth] = useState(2);
	const [density, setDensity] = useState<GridDensity>("comfortable");

	const enabledLibraries = useMemo(() => {
		if (librarySelection === "all")
			return new Set<IconLibraryId>(["lucide", "radix", "phosphor"]);
		return new Set<IconLibraryId>([librarySelection]);
	}, [librarySelection]);

	const entries = useMemo(() => {
		const enabled = enabledLibraries;
		const q = query;
		const flattened: IconEntry[] = [];

		for (const lib of ICON_LIBRARIES) {
			if (!enabled.has(lib.id)) continue;
			for (const e of lib.entries) {
				if (!matchesQuery(e.exportName, q)) continue;
				flattened.push(e);
			}
		}

		return flattened;
	}, [enabledLibraries, query]);

	const gridClasses =
		density === "compact"
			? "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
			: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";

	const tileClasses =
		density === "compact"
			? "rounded-lg border border-white/10 bg-white/5 px-3 py-2"
			: "rounded-xl border border-white/10 bg-white/5 px-3 py-3";

	const libraryCards = useMemo(() => {
		const allCount = ICON_LIBRARIES.reduce(
			(sum, l) => sum + l.entries.length,
			0,
		);
		return [
			{
				id: "all" as const,
				label: "All libraries",
				count: allCount,
				sample: ICON_LIBRARIES.flatMap((l) =>
					l.entries.slice(0, 3).map((e) => ({ ...e, library: l.id })),
				).slice(0, 6),
			},
			...ICON_LIBRARIES.map((l) => ({
				id: l.id,
				label: l.label,
				count: l.entries.length,
				sample: l.entries.slice(0, 6),
			})),
		] satisfies ReadonlyArray<{
			id: LibrarySelection;
			label: string;
			count: number;
			sample: IconEntry[];
		}>;
	}, []);

	return (
		<div className="flex flex-col gap-4">
			<div className="rounded-xl border border-white/10 bg-white/5 p-4">
				<div className="flex flex-col gap-3">
					<div className="text-sm font-semibold text-zinc-200">Libraries</div>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{libraryCards.map((card) => {
							const selected = librarySelection === card.id;
							return (
								<button
									key={card.id}
									type="button"
									className={[
										"flex w-full flex-col gap-3 rounded-xl border p-4 text-left transition",
										selected
											? "border-indigo-400/40 bg-indigo-500/10"
											: "border-white/10 bg-white/0 hover:bg-white/5",
									].join(" ")}
									onClick={() => setLibrarySelection(card.id)}
								>
									<div className="flex items-start justify-between gap-3">
										<div className="min-w-0">
											<div className="truncate text-base font-semibold text-white">
												{card.label}
											</div>
											<div className="text-xs font-semibold text-zinc-400">
												{card.count} icons
											</div>
										</div>
										{selected ? (
											<span className="rounded-md bg-indigo-500 px-2 py-1 text-xs font-semibold text-white">
												Selected
											</span>
										) : (
											<span className="rounded-md bg-white/5 px-2 py-1 text-xs font-semibold text-zinc-200">
												Select
											</span>
										)}
									</div>

									<div className="flex flex-wrap items-center gap-2">
										{card.sample.map((e) => {
											const Component = e.Component;
											const iconProps =
												e.library === "lucide"
													? { size: 18, strokeWidth }
													: e.library === "radix"
														? { width: 18, height: 18 }
														: { size: 18 };
											return (
												<span
													key={`${card.id}:${e.library}:${e.exportName}`}
													className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/20 text-zinc-100"
													title={e.exportName}
												>
													<Component {...iconProps} />
												</span>
											);
										})}
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			<div className="rounded-xl border border-white/10 bg-white/5 p-4">
				<div className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-3">
						<label className="flex items-center gap-2">
							<span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
								Library
							</span>
							<select
								className="h-9 rounded-md border border-white/10 bg-black/20 px-3 text-sm font-semibold text-zinc-100 outline-none ring-indigo-500/30 focus:ring-2"
								value={librarySelection}
								onChange={(e) =>
									setLibrarySelection(e.target.value as LibrarySelection)
								}
							>
								<option value="all">All libraries</option>
								{ICON_LIBRARIES.map((lib) => (
									<option key={lib.id} value={lib.id}>
										{lib.label} ({lib.entries.length})
									</option>
								))}
							</select>
						</label>

						<div className="ml-auto flex flex-wrap items-center gap-2">
							<button
								type="button"
								className={[
									"rounded-md px-3 py-1.5 text-sm font-semibold transition",
									density === "comfortable"
										? "bg-indigo-500 text-white"
										: "bg-white/5 text-zinc-200 hover:bg-white/10",
								].join(" ")}
								onClick={() => setDensity("comfortable")}
							>
								Comfortable
							</button>
							<button
								type="button"
								className={[
									"rounded-md px-3 py-1.5 text-sm font-semibold transition",
									density === "compact"
										? "bg-indigo-500 text-white"
										: "bg-white/5 text-zinc-200 hover:bg-white/10",
								].join(" ")}
								onClick={() => setDensity("compact")}
							>
								Compact
							</button>
						</div>
					</div>

					<div className="flex flex-col gap-3 md:flex-row md:items-end">
						<label className="flex w-full flex-col gap-1 md:max-w-md">
							<span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
								Search
							</span>
							<input
								className="h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 text-sm text-zinc-100 outline-none ring-indigo-500/30 focus:ring-2"
								placeholder="Type an icon export name..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
						</label>

						<div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-end">
							<label className="flex flex-1 flex-col gap-1">
								<span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
									Size ({size}px)
								</span>
								<input
									type="range"
									min={12}
									max={64}
									value={size}
									className="w-full accent-indigo-500"
									onChange={(e) => setSize(Number(e.target.value))}
								/>
							</label>
							<label className="flex flex-1 flex-col gap-1">
								<span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
									Lucide stroke ({strokeWidth})
								</span>
								<input
									type="range"
									min={1}
									max={3}
									step={0.25}
									value={strokeWidth}
									className="w-full accent-indigo-500"
									onChange={(e) => setStrokeWidth(Number(e.target.value))}
								/>
							</label>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-3 text-sm">
						<div className="text-zinc-300">
							Showing{" "}
							<span className="font-semibold text-white">{entries.length}</span>{" "}
							icons
						</div>
						<button
							type="button"
							className="rounded-md bg-white/5 px-3 py-1.5 font-semibold text-zinc-200 hover:bg-white/10"
							onClick={() => {
								setQuery("");
								setLibrarySelection("all");
								setSize(22);
								setStrokeWidth(2);
								setDensity("comfortable");
							}}
						>
							Reset
						</button>
					</div>
				</div>
			</div>

			<div className={gridClasses}>
				{entries.map((e) => (
					<IconTile
						key={`${e.library}:${e.exportName}`}
						entry={e}
						size={size}
						strokeWidth={strokeWidth}
						tileClassName={tileClasses}
					/>
				))}
			</div>
		</div>
	);
}

function IconTile({
	entry,
	size,
	strokeWidth,
	tileClassName,
}: {
	entry: IconEntry;
	size: number;
	strokeWidth: number;
	tileClassName: string;
}) {
	const { Component } = entry;

	const copyText = async (text: string) => {
		if (!navigator.clipboard) return;
		await navigator.clipboard.writeText(text);
	};

	const iconProps =
		entry.library === "lucide"
			? { size, strokeWidth }
			: entry.library === "radix"
				? { width: size, height: size }
				: { size };

	return (
		<div className={tileClassName}>
			<div className="flex items-start justify-between gap-2">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/20">
							<Component {...iconProps} className="text-zinc-100" />
						</div>
						<div className="min-w-0">
							<div className="truncate text-sm font-semibold text-white">
								{entry.exportName}
							</div>
							<div className="text-xs font-semibold text-zinc-400">
								{entry.library}
							</div>
						</div>
					</div>
				</div>

				<button
					type="button"
					className="rounded-md bg-white/5 px-2 py-1 text-xs font-semibold text-zinc-200 hover:bg-white/10"
					onClick={() => copyText(entry.exportName)}
					title="Copy export name"
				>
					Copy
				</button>
			</div>
		</div>
	);
}

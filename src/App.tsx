import { useMemo, useState } from "react";
import { IconCatalog } from "./components/IconCatalog";
import { ToolbarPage } from "./components/toolbar/ToolbarPage";
import { type IconLibraryId } from "./iconLibraries";

type View = "catalog" | "toolbar";

export function App() {
  const [view, setView] = useState<View>("catalog");
  const [toolbarIconLibrary, setToolbarIconLibrary] =
    useState<IconLibraryId>("lucide");

  const tabs = useMemo(
    () =>
      [
        { id: "catalog" as const, label: "Icon Catalog" },
        { id: "toolbar" as const, label: "Toolbar Mock" },
      ] satisfies ReadonlyArray<{ id: View; label: string }>,
    [],
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
      <header className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-white">Plate Icons</h1>
          <p className="text-sm text-zinc-400">
            Browse multiple icon libraries and render everything at once.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={[
                "rounded-md px-3 py-1.5 text-sm font-semibold transition",
                view === t.id
                  ? "bg-indigo-500 text-white"
                  : "bg-white/5 text-zinc-200 hover:bg-white/10",
              ].join(" ")}
              onClick={() => setView(t.id)}
            >
              {t.label}
            </button>
          ))}
          {view === "toolbar" ? (
            <label className="ml-2 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Toolbar Icons
              </span>
              <select
                className="h-9 rounded-md border border-white/10 bg-black/20 px-3 text-sm font-semibold text-zinc-100 outline-none ring-indigo-500/30 focus:ring-2"
                value={toolbarIconLibrary}
                onChange={(e) =>
                  setToolbarIconLibrary(e.target.value as IconLibraryId)
                }
              >
                <option value="lucide">lucide-react</option>
                <option value="radix">@radix-ui/react-icons</option>
                <option value="phosphor">@phosphor-icons/react</option>
                <option value="untitledui">@untitledui/icons</option>
                <option value="iconoir">iconoir-react</option>
              </select>
            </label>
          ) : null}
          <a
            className="ml-auto rounded-md bg-white/5 px-3 py-1.5 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            href="/view_toolbar.html"
            target="_blank"
            rel="noreferrer"
          >
            Open original HTML
          </a>
        </div>
      </header>

      {view === "catalog" ? (
        <IconCatalog />
      ) : (
        <ToolbarPage iconLibrary={toolbarIconLibrary} />
      )}
    </div>
  );
}

import React, { useMemo } from "react";
import { ICON_LIBRARIES, type IconLibraryId } from "../../iconLibraries";

type ToolbarIconProps = {
  library: IconLibraryId;
  token: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const RADIX_ALIASES: Record<string, string> = {
  "a-large-small": "FontSizeIcon",
  "arrow-up-to-line": "DownloadIcon",
  "baseline": "AlignBaselineIcon",
  "bold": "FontBoldIcon",
  "code-2": "CodeIcon",
  "ellipsis": "DotsHorizontalIcon",
  "file-pen": "Pencil2Icon",
  "highlighter": "Pencil2Icon",
  "house": "HomeIcon",
  "italic": "FontItalicIcon",
  "link": "Link1Icon",
  "list": "ListBulletIcon",
  "circle-user-round": "AvatarIcon",
  "square-pen": "Pencil2Icon",
  "menu": "HamburgerMenuIcon",
  "message-square": "ChatBubbleIcon",
  "message-square-plus": "ChatBubbleIcon",
  "message-square-text": "ChatBubbleIcon",
  "save": "DiscIcon",
  "more-horizontal": "DotsHorizontalIcon",
  "move-vertical": "DragHandleVerticalIcon",
  "pen": "Pencil2Icon",
  "pencil-line": "Pencil2Icon",
  "redo-2": "ReloadIcon",
  "search": "MagnifyingGlassIcon",
  "settings": "GearIcon",
  "settings-2": "GearIcon",
  "smile": "FaceIcon",
  "clock-9": "ClockIcon",
  "list-ordered": "ListBulletIcon",
  "list-checks": "CheckboxIcon",
  "music": "SpeakerLoudIcon",
  "strikethrough": "StrikethroughIcon",
  "superscript": "LetterCaseToggleIcon",
  "table": "TableIcon",
  "chevrons-left": "DoubleArrowLeftIcon",
  "trash-2": "TrashIcon",
  "type": "TextIcon",
  "underline": "UnderlineIcon",
  "undo-2": "RotateCounterClockwiseIcon",
  "users": "PersonIcon",
  "wand-sparkles": "MagicWandIcon",
  "x": "Cross1Icon",
} as const;

const PHOSPHOR_ALIASES: Record<string, string> = {
  "a-large-small": "TextAaIcon",
  "arrow-up-to-line": "ExportIcon",
  "baseline": "AlignBottomIcon",
  "bold": "TextBolderIcon",
  "chevron-down": "CaretDownIcon",
  "chevron-right": "CaretRightIcon",
  "chevrons-left": "CaretDoubleLeftIcon",
  "circle-user-round": "UserCircleIcon",
  "clock-9": "ClockIcon",
  "code-2": "CodeIcon",
  "ellipsis": "DotsThreeIcon",
  "file-pen": "PencilSimpleLineIcon",
  "indent": "TextIndentIcon",
  "italic": "TextItalicIcon",
  "list-ordered": "ListNumbersIcon",
  "menu": "ListIcon",
  "message-square": "ChatTextIcon",
  "message-square-plus": "ChatTextIcon",
  "message-square-text": "ChatTextIcon",
  "more-horizontal": "DotsThreeIcon",
  "move-vertical": "DotsSixVerticalIcon",
  "music": "MusicNotesIcon",
  "outdent": "TextOutdentIcon",
  "redo-2": "ArrowClockwiseIcon",
  "save": "FloppyDiskIcon",
  "search": "MagnifyingGlassIcon",
  "settings": "GearIcon",
  "settings-2": "GearIcon",
  "smile": "SmileyIcon",
  "square-pen": "NotePencilIcon",
  "strikethrough": "TextStrikethroughIcon",
  "superscript": "TextSuperscriptIcon",
  "trash-2": "TrashIcon",
  "type": "TextTIcon",
  "underline": "TextUnderlineIcon",
  "undo-2": "ArrowCounterClockwiseIcon",
  "users": "UsersThreeIcon",
  "wand-sparkles": "MagicWandIcon",
  "x": "XIcon",
} as const;

function normalizeKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function tokenToPascalIcon(token: string) {
  const pascal = token
    .split("-")
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join("");
  return `${pascal}Icon`;
}

function stripIconSuffix(normalized: string) {
  return normalized.endsWith("icon") ? normalized.slice(0, -4) : normalized;
}

function stripTrailingDigits(normalized: string) {
  return normalized.replace(/\d+$/, "");
}

function buildLibraryMaps() {
  const out: Record<
    IconLibraryId,
    { byNormalized: Map<string, React.ElementType>; byNormalizedNoIcon?: Map<string, React.ElementType> }
  > = {
    lucide: { byNormalized: new Map() },
    radix: { byNormalized: new Map(), byNormalizedNoIcon: new Map() },
    phosphor: { byNormalized: new Map() },
  };

  for (const lib of ICON_LIBRARIES) {
    const maps = out[lib.id];
    for (const e of lib.entries) {
      const normalized = normalizeKey(e.exportName);
      maps.byNormalized.set(normalized, e.Component);
      if (lib.id === "radix") {
        maps.byNormalizedNoIcon?.set(stripIconSuffix(normalized), e.Component);
      }
    }
  }

  return out;
}

const LIBRARY_MAPS = buildLibraryMaps();

export function ToolbarIcon({ library, token, size, strokeWidth, className }: ToolbarIconProps) {
  const resolvedSize = size ?? 16;
  const resolvedStrokeWidth = strokeWidth ?? 2;

  const resolvedToken = useMemo(() => {
    if (library === "radix") return RADIX_ALIASES[token] ?? token;
    if (library === "phosphor")
      return PHOSPHOR_ALIASES[token] ?? tokenToPascalIcon(token);
    return token;
  }, [library, token]);

  const normalizedToken = normalizeKey(resolvedToken);
  const normalizedTokenNoDigits =
    library === "radix" ? stripTrailingDigits(normalizedToken) : normalizedToken;
  const maps = LIBRARY_MAPS[library];

  const Component =
    maps.byNormalized.get(normalizedToken) ??
    (library === "radix" ? maps.byNormalizedNoIcon?.get(normalizedToken) : undefined) ??
    (library === "radix"
      ? maps.byNormalized.get(normalizedTokenNoDigits) ??
        maps.byNormalizedNoIcon?.get(normalizedTokenNoDigits)
      : undefined) ??
    (library === "radix"
      ? maps.byNormalized.get(normalizeKey("QuestionMarkCircledIcon")) ??
        maps.byNormalizedNoIcon?.get(normalizeKey("QuestionMarkCircled"))
      : library === "phosphor"
        ? maps.byNormalized.get(normalizeKey("QuestionMarkIcon"))
        : maps.byNormalized.get(normalizeKey("CircleHelp")));

  if (!Component) return null;

  if (library === "lucide") {
    return (
      <Component
        size={resolvedSize}
        strokeWidth={resolvedStrokeWidth}
        className={className}
      />
    );
  }

  if (library === "radix") {
    return (
      <Component width={resolvedSize} height={resolvedSize} className={className} />
    );
  }

  return <Component size={resolvedSize} className={className} />;
}

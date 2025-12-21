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

const UNTITLEUI_ALIASES: Record<string, string> = {
  "a-large-small": "Type01",
  "arrow-up-to-line": "UploadCloud01",
  "baseline": "Palette",
  "bold": "Bold01",
  "chevron-down": "ChevronDown",
  "chevron-right": "ChevronRight",
  "chevrons-left": "ChevronLeftDouble",
  "circle-user-round": "UserCircle",
  "clock-9": "Clock",
  "code-2": "Code01",
  "ellipsis": "DotsHorizontal",
  "file-pen": "PencilLine",
  "file-plus": "FilePlus01",
  "file-text": "File02",
  "file": "File01",
  "highlighter": "Brush01",
  "house": "Home01",
  "indent": "RightIndent01",
  "italic": "Italic01",
  "link": "Link01",
  "list-ordered": "List",
  "list": "List",
  "list-checks": "CheckSquare",
  "menu": "Menu01",
  "message-square": "MessageSquare01",
  "message-square-plus": "MessagePlusSquare",
  "message-square-text": "MessageTextSquare01",
  "more-horizontal": "DotsHorizontal",
  "move-vertical": "Move",
  "music": "MusicNote01",
  "outdent": "LeftIndent01",
  "pen": "Pencil01",
  "pencil-line": "PencilLine",
  "plus": "Plus",
  "redo-2": "RefreshCw01",
  "save": "Save01",
  "search": "SearchLg",
  "settings": "Settings01",
  "settings-2": "Settings02",
  "smile": "FaceSmile",
  "square-pen": "Pencil02",
  "strikethrough": "Strikethrough01",
  "superscript": "Subscript",
  "table": "Table",
  "trash-2": "Trash02",
  "type": "Type01",
  "underline": "Underline01",
  "undo-2": "RefreshCcw01",
  "upload": "Upload01",
  "users": "Users01",
  "wand-sparkles": "MagicWand01",
  "x": "X",
  "image": "Image01",
  "video": "VideoRecorder",
} as const;

const ICONOIR_ALIASES: Record<string, string> = {
  "a-large-small": "TextSize",
  "arrow-up-to-line": "UploadDataWindow",
  "baseline": "ColorFilter",
  "bold": "Bold",
  "chevron-down": "NavArrowDown",
  "chevron-right": "NavArrowRight",
  "chevrons-left": "FastArrowLeft",
  "circle-user-round": "UserCircle",
  "clock-9": "Clock",
  "code-2": "Code",
  "ellipsis": "MoreHoriz",
  "file-pen": "PageEdit",
  "file-plus": "PagePlus",
  "file-text": "Page",
  "file": "Page",
  "highlighter": "FillColor",
  "house": "Home",
  "indent": "AlignRight",
  "italic": "Italic",
  "link": "Link",
  "list-ordered": "NumberedListLeft",
  "list": "List",
  "list-checks": "TaskList",
  "menu": "Menu",
  "message-square": "ChatBubble",
  "message-square-plus": "ChatPlusIn",
  "message-square-text": "ChatLines",
  "more-horizontal": "MoreHoriz",
  "move-vertical": "Drag",
  "music": "MusicNote",
  "outdent": "AlignLeft",
  "pen": "EditPencil",
  "pencil-line": "DesignPencil",
  "plus": "Plus",
  "redo-2": "Redo",
  "save": "FloppyDisk",
  "search": "Search",
  "settings": "Settings",
  "settings-2": "SettingsProfiles",
  "smile": "Emoji",
  "square-pen": "Edit",
  "strikethrough": "Strikethrough",
  "superscript": "Text",
  "table": "Table",
  "trash-2": "Trash",
  "type": "Type",
  "underline": "Underline",
  "undo-2": "Undo",
  "upload": "Upload",
  "users": "User",
  "wand-sparkles": "Sparks",
  "x": "Xmark",
  "image": "MediaImage",
  "video": "VideoCamera",
} as const;

const SOLAR_ALIASES: Record<string, string> = {
  "a-large-small": "Text",
  "arrow-up-to-line": "Upload",
  "baseline": "Text",
  "bold": "TextBold",
  "chevron-down": "AltArrowDown",
  "chevron-right": "ArrowRight",
  "chevrons-left": "DoubleAltArrowLeft",
  "circle-user-round": "UserCircle",
  "clock-9": "ClockCircle",
  "code-2": "CodeFile",
  "ellipsis": "MenuDots",
  "file-pen": "Pen",
  "file-plus": "DocumentAdd",
  "file-text": "FileText",
  "file": "File",
  "highlighter": "RulerPen",
  "house": "Home",
  "indent": "ParagraphSpacing",
  "italic": "TextItalic",
  "link": "Link",
  "list-ordered": "List",
  "list": "List",
  "list-checks": "ListCheck",
  "menu": "MenuDots",
  "message-square": "ChatSquare",
  "message-square-plus": "ChatSquareArrow",
  "message-square-text": "ChatLine",
  "more-horizontal": "MenuDots",
  "move-vertical": "ListVertical",
  "music": "MusicNote",
  "outdent": "ParagraphSpacing",
  "pen": "Pen",
  "pencil-line": "Pen2",
  "plus": "AddSquare",
  "redo-2": "UndoRight",
  "save": "FileSend",
  "search": "Magnifer",
  "settings": "Settings",
  "settings-2": "Tuning",
  "smile": "SmileCircle",
  "square-pen": "PenNewSquare",
  "strikethrough": "TextCross",
  "superscript": "Text",
  "table": "List",
  "trash-2": "TrashBinTrash",
  "type": "Text",
  "underline": "TextUnderline",
  "undo-2": "UndoLeft",
  "upload": "Upload",
  "users": "UsersGroup",
  "wand-sparkles": "MagicStick",
  "x": "CloseSquare",
  "image": "Gallery",
  "video": "Videocamera",
} as const;

function normalizeKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function tokenToPascal(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join("");
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
    untitledui: { byNormalized: new Map() },
    iconoir: { byNormalized: new Map() },
    solar: { byNormalized: new Map() },
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
    if (library === "untitledui")
      return UNTITLEUI_ALIASES[token] ?? tokenToPascal(token);
    if (library === "iconoir")
      return ICONOIR_ALIASES[token] ?? tokenToPascal(token);
    if (library === "solar")
      return SOLAR_ALIASES[token] ?? tokenToPascal(token);
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
      : library === "untitledui" || library === "iconoir" || library === "solar"
          ? maps.byNormalized.get(normalizeKey("HelpCircle"))
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

  if (library === "radix" || library === "iconoir") {
    return (
      <Component width={resolvedSize} height={resolvedSize} className={className} />
    );
  }

  return <Component size={resolvedSize} className={className} />;
}

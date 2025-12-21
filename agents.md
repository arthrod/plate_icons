# Agents Documentation

This document outlines the various agents (components and modules) that make up the Plate Icons application.

## Core Agents

### IconCatalog Agent
**File:** `src/components/IconCatalog.tsx`

The main agent responsible for managing and displaying the icon catalog interface.

**Responsibilities:**
- Managing library selection (Lucide, Radix, or All)
- Handling search queries and filtering
- Controlling display settings (size, stroke width, grid density)
- Rendering icon tiles in a responsive grid layout
- Managing user interactions and state

**State Management:**
- `librarySelection`: Currently selected icon library
- `query`: Search filter string
- `size`: Icon size in pixels (12-64px)
- `strokeWidth`: Stroke width for Lucide icons (1-3)
- `density`: Grid layout density ("comfortable" or "compact")

### IconLibrary Agent
**File:** `src/iconLibraries.ts`

The data agent that manages icon library definitions and metadata.

**Responsibilities:**
- Defining icon library types and interfaces
- Filtering out non-icon exports from libraries
- Creating normalized icon entries
- Providing library metadata (labels, counts, entries)

**Supported Libraries:**
- **Lucide React** (`lucide-react`): Modern, consistent icon set
- **Radix UI Icons** (`@radix-ui/react-icons`): Accessible, clean icon set

### IconTile Agent
**Component within IconCatalog.tsx**

A specialized agent for rendering individual icon tiles.

**Responsibilities:**
- Displaying individual icons with proper sizing
- Showing icon metadata (name, library)
- Providing copy-to-clipboard functionality
- Handling icon-specific props (size, stroke width)

## Data Flow Agents

### IconEntry Interface
**Type Definition:** `src/iconLibraries.ts`

Defines the structure for icon data throughout the application.

```typescript
type IconEntry = {
  library: IconLibraryId;
  exportName: string;
  Component: React.ElementType;
};
```

### LibrarySelection Type
**Type Definition:** `src/components/IconCatalog.tsx`

Manages the selection state for icon libraries.

```typescript
type LibrarySelection = "all" | IconLibraryId;
type IconLibraryId = "lucide" | "radix";
```

## Utility Agents

### Filter Agent
**Function:** `matchesQuery()`

Handles text-based filtering of icon names.

**Behavior:**
- Case-insensitive matching
- Trims whitespace from queries
- Returns all icons when query is empty

### Component Validation Agent
**Function:** `isRenderableReactComponent()`

Validates that exported values are renderable React components.

**Validation Criteria:**
- Functions are considered valid components
- Objects with `$$typeof` property are considered valid (React forwardRef, memo, etc.)

### Export Filtering Agent
**Constant:** `NON_ICON_EXPORTS`

Filters out non-icon exports from icon libraries.

**Filtered Exports:**
- **Lucide:** `createLucideIcon`, `Icon`, `LucideIcon`, `LucideProps`, `default`, `icons`, `defaultAttributes`, `toKebabCase`
- **Radix:** `IconProps`, `default`

## Integration Points

### Server Agent
**File:** `src/server.ts`

Handles the development server setup and hot reloading.

### Main Application Agent
**File:** `src/main.tsx`

Entry point that mounts the IconCatalog to the DOM.

### Development Tools Agent
**Files:** `package.json`, `tsconfig.json`, `bun.lock`

Manages dependencies, build configuration, and development tooling.

## Agent Communication

The agents communicate through:

1. **Props Flow:** Parent agents pass configuration down to child agents
2. **State Bubbling:** User interactions trigger state updates in parent agents
3. **Data Transformation:** Utility agents transform raw library exports into standardized IconEntry objects
4. **Event Handling:** User actions (clicks, inputs) are handled by appropriate agents

## Performance Considerations

- **Memoization:** IconCatalog uses `useMemo` for expensive computations (filtering, library cards)
- **Efficient Filtering:** Search queries are processed in a single pass
- **Lazy Component Access:** Icon components are accessed only when needed for rendering
- **Optimized Rendering:** Grid layouts use CSS Grid for efficient responsive layouts

## Future Agent Extensions

Potential new agents that could be added:

1. **Theme Agent:** Manage dark/light theme switching
2. **Export Agent:** Handle bulk icon exports and code generation
3. **Favorites Agent:** Allow users to save frequently used icons
4. **Custom Icon Agent:** Support for user-uploaded custom icons
5. **Analytics Agent:** Track icon usage patterns and popularity

import React, { useMemo } from "react";
import { type IconLibraryId } from "../../iconLibraries";
import { ToolbarIcon } from "./ToolbarIcon";

export function ToolbarPage({
  iconLibrary,
}: {
  iconLibrary: IconLibraryId;
}) {
  const cssText = useMemo(
    () => `
.toolbar-view * {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.toolbar-view {
  background: #0f0f1a !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
}

.section-container {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 32px;
}

.section-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  padding-left: 8px;
  border-left: 3px solid #6366f1;
}

.section-subtitle {
  color: #71717a;
  font-size: 12px;
  margin-bottom: 16px;
  padding-left: 11px;
}

.navbar-container {
  background: #ffffff;
  border-radius: 12px;
  padding: 8px 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-title {
  font-size: 14px;
  font-weight: 500;
  color: #18181b;
}

.toolbar-container {
  background: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  max-width: 100%;
  overflow-x: auto;
}

.toolbar-rows {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toolbar-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.floating-toolbar-container {
  background: #18181b;
  border-radius: 10px;
  padding: 6px 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.floating-toolbar-container .toolbar-group {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
}

.floating-toolbar-container .toolbar-btn {
  color: #e4e4e7;
}

.floating-toolbar-container .toolbar-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.floating-toolbar-container .separator {
  background: rgba(255, 255, 255, 0.2);
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 6px;
  background: #f4f4f5;
  border-radius: 8px;
  position: relative;
}

.group-number {
  position: absolute;
  top: -10px;
  left: -10px;
  min-width: 24px;
  height: 20px;
  background: #6366f1;
  color: white;
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);
  z-index: 10;
  padding: 0 6px;
}

.btn-label {
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 600;
  color: #6366f1;
  white-space: nowrap;
  background: rgba(99, 102, 241, 0.1);
  padding: 1px 4px;
  border-radius: 4px;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: #3f3f46;
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;
  background: transparent;
  position: relative;
}

.toolbar-btn:hover {
  background: #e4e4e7;
  color: #18181b;
}

.toolbar-btn svg {
  width: 18px;
  height: 18px;
}

.toolbar-btn-text {
  width: auto;
  padding: 0 10px;
  font-size: 13px;
  font-weight: 500;
  gap: 4px;
}

.separator {
  width: 1px;
  height: 20px;
  background: #e4e4e7;
  margin: 0 4px;
}

.ai-btn {
  background: linear-gradient(120deg, #6eb6f2 10%, #a855f7, #ea580c, #eab308);
  -webkit-background-clip: text;
  background-clip: text;
}

.ai-btn-icon {
  fill: url(#aiGradient);
}

.group-navbar {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%) !important;
}
.group-navbar .group-number {
  background: #3b82f6 !important;
}

.group-save-io {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%) !important;
}
.group-save-io .group-number {
  background: #6366f1 !important;
}

.group-ai {
  background: linear-gradient(135deg, #fef9c3 0%, #fef08a 100%) !important;
}
.group-ai .group-number {
  background: #eab308 !important;
}

.group-spacing {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%) !important;
}
.group-spacing .group-number {
  background: #ec4899 !important;
}

.group-insert {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%) !important;
}
.group-insert .group-number {
  background: #10b981 !important;
}

.group-comment {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%) !important;
}
.group-comment .group-number {
  background: #f59e0b !important;
}

.group-mode {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%) !important;
}
.group-mode .group-number {
  background: #3b82f6 !important;
}

.group-floating {
  background: rgba(255, 255, 255, 0.12) !important;
}
.group-floating .group-number {
  background: #8b5cf6 !important;
}

.legend {
  margin-top: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px 32px;
  color: #e4e4e7;
  width: 100%;
  max-width: 1200px;
}

.legend h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.legend-section {
  margin-bottom: 24px;
}

.legend-section:last-child {
  margin-bottom: 0;
}

.legend-section-title {
  font-size: 12px;
  font-weight: 600;
  color: #a1a1aa;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.legend-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #d4d4d8;
}

.legend-num {
  min-width: 28px;
  height: 20px;
  background: #6366f1;
  color: white;
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 6px;
}

.legend-item .icon-box {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.legend-item svg {
  width: 14px;
  height: 14px;
  color: #a1a1aa;
}

.legend-text {
  line-height: 1.3;
}

.legend-text strong {
  color: #fff;
  font-weight: 600;
}

.title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.subtitle {
  color: #71717a;
  font-size: 14px;
  margin-bottom: 32px;
}
`,
    [],
  );

  const docRowHoverHandlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.background = "#f4f4f5";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.background = "transparent";
    },
  } as const;

  return (
    <div className="toolbar-view">
      <style>{cssText}</style>

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="aiGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#6EB6F2" />
            <stop offset="15%" stopColor="#6EB6F2" />
            <stop offset="40%" stopColor="#c084fc" />
            <stop offset="60%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="title">Complete Toolbar Visualization</h1>
      <p className="subtitle">
        Sidebar (S) • NavBar (N) • Fixed Toolbar Row 1 (F1) • Fixed Toolbar Row 2
        (F2) • Floating Toolbar (FL)
      </p>

      <div
        className="section-container"
        style={{ display: "flex", gap: 32, alignItems: "flex-start" }}
      >
        <div style={{ flex: "0 0 25%" }}>
          <div className="section-title">Sidebar (S)</div>
          <div className="section-subtitle">
            Left navigation panel with document management • Source: sidebar.tsx
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 12,
              padding: 12,
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
              width: 260,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                <span className="group-number">S1</span>
                <button
                  className="toolbar-btn"
                  title="S1a: Workspace Switcher"
                  style={{
                    width: "auto",
                    padding: "0 8px",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  type="button"
                >
                  <ToolbarIcon
                    library={iconLibrary}
                    token="circle-user-round"
                    size={16}
                    className=""
                  />
                  <span style={{ marginLeft: 6 }}>Workspace</span>
                  <ToolbarIcon
                    library={iconLibrary}
                    token="chevron-down"
                    size={12}
                    className=""
                  />
                </button>
              </div>
              <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                <span className="group-number">S2</span>
                <button className="toolbar-btn" title="S2a: Close sidebar" type="button">
                  <ToolbarIcon library={iconLibrary} token="chevrons-left" />
                </button>
                <button className="toolbar-btn" title="S2b: Create new page" type="button">
                  <ToolbarIcon library={iconLibrary} token="square-pen" />
                </button>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div
                className="toolbar-group"
                style={{
                  padding: "4px 8px",
                  marginBottom: 4,
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <span className="group-number">S3</span>
                <button
                  className="toolbar-btn toolbar-btn-text"
                  title="S3a: Search page"
                  style={{ justifyContent: "flex-start", width: "100%" }}
                  type="button"
                >
                  <ToolbarIcon library={iconLibrary} token="search" />
                  <span style={{ marginLeft: 8 }}>Search</span>
                </button>
              </div>
              <div
                className="toolbar-group"
                style={{ padding: "4px 8px", width: "100%", justifyContent: "flex-start" }}
              >
                <span className="group-number" style={{ opacity: 0 }}>
                  S3
                </span>
                <button
                  className="toolbar-btn toolbar-btn-text"
                  title="S3b: View recent pages (Home)"
                  style={{ justifyContent: "flex-start", width: "100%" }}
                  type="button"
                >
                  <ToolbarIcon library={iconLibrary} token="house" />
                  <span style={{ marginLeft: 8 }}>Editor</span>
                </button>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div
                className="toolbar-group"
                style={{
                  padding: "4px 8px",
                  marginBottom: 4,
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span className="group-number">S4</span>
                <span style={{ fontSize: 11, color: "#71717a" }}>Private</span>
                <button
                  className="toolbar-btn"
                  title="S4a: Create new page in section"
                  style={{ width: 24, height: 24 }}
                  type="button"
                >
                  <ToolbarIcon library={iconLibrary} token="plus" size={14} />
                </button>
              </div>

              <div style={{ paddingLeft: 8, borderLeft: "2px solid #e4e4e7", marginLeft: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 8px",
                    fontSize: 13,
                    color: "#52525b",
                    cursor: "pointer",
                    borderRadius: 4,
                  }}
                  {...docRowHoverHandlers}
                >
                  <span>📄</span>
                  <span>Document 1</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 8px",
                    fontSize: 13,
                    color: "#52525b",
                    cursor: "pointer",
                    borderRadius: 4,
                  }}
                  {...docRowHoverHandlers}
                >
                  <span>📝</span>
                  <span>Document 2</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 8px",
                    fontSize: 13,
                    color: "#a1a1aa",
                    cursor: "pointer",
                    borderRadius: 4,
                  }}
                  {...docRowHoverHandlers}
                >
                  <ToolbarIcon library={iconLibrary} token="ellipsis" size={14} />
                  <span>More...</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e4e4e7", paddingTop: 12 }}>
              <div
                className="toolbar-group"
                style={{
                  padding: "4px 8px",
                  marginBottom: 4,
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <span className="group-number">S5</span>
                <button
                  className="toolbar-btn toolbar-btn-text"
                  title="S5a: Manage account and settings"
                  style={{ justifyContent: "flex-start", width: "100%" }}
                  type="button"
                >
                  <ToolbarIcon library={iconLibrary} token="settings" />
                  <span style={{ marginLeft: 8 }}>Settings</span>
                </button>
              </div>
              <div
                className="toolbar-group"
                style={{
                  padding: "4px 8px",
                  marginBottom: 4,
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <span className="group-number" style={{ opacity: 0 }}>
                  S5
                </span>
                <button
                  className="toolbar-btn toolbar-btn-text"
                  title="S5b: Editor view"
                  style={{ justifyContent: "flex-start", width: "100%" }}
                  type="button"
                >
                  <ToolbarIcon library={iconLibrary} token="file-text" />
                  <span style={{ marginLeft: 8 }}>Editor</span>
                </button>
              </div>
              <div
                className="toolbar-group"
                style={{ padding: "4px 8px", width: "100%", justifyContent: "flex-start" }}
              >
                <span className="group-number" style={{ opacity: 0 }}>
                  S5
                </span>
                <button
                  className="toolbar-btn toolbar-btn-text"
                  title="S5c: Restore deleted pages"
                  style={{ justifyContent: "flex-start", width: "100%" }}
                  type="button"
                >
                  <ToolbarIcon library={iconLibrary} token="trash-2" />
                  <span style={{ marginLeft: 8 }}>Trash</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: "1 1 auto" }}>
          <div className="section-title">Floating Toolbar (FL)</div>
          <div className="section-subtitle">
            Contextual toolbar on text selection • Source: floating-toolbar-buttons.tsx
          </div>

          <div className="floating-toolbar-container">
            <div className="toolbar-group group-floating">
              <span className="group-number" style={{ background: "#8b5cf6" }}>
                FL-G1
              </span>
              <button
                className="toolbar-btn toolbar-btn-text"
                title="FL-G1a: Ask AI (⌘+J)"
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(120deg, #6EB6F2 10%, #a855f7, #ea580c, #eab308)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
                type="button"
              >
                <svg
                  fill="url(#aiGradient)"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: 14, height: 14 }}
                >
                  <path d="M161.15 362.26a40.902 40.902 0 0 0 23.78 7.52v-.11a40.989 40.989 0 0 0 37.75-24.8l17.43-53.02a81.642 81.642 0 0 1 51.68-51.53l50.57-16.44a41.051 41.051 0 0 0 20.11-15.31 40.964 40.964 0 0 0 7.32-24.19 41.077 41.077 0 0 0-8.23-23.89 41.051 41.051 0 0 0-20.68-14.54l-49.92-16.21a81.854 81.854 0 0 1-51.82-51.85L222.7 27.33A41.11 41.11 0 0 0 183.63.01c-8.54.07-16.86 2.8-23.78 7.81A41.152 41.152 0 0 0 145 27.97l-16.58 50.97c-4 11.73-10.61 22.39-19.33 31.19s-19.33 15.5-31.01 19.61l-50.54 16.24a41.131 41.131 0 0 0-15.89 10.14 41.059 41.059 0 0 0-9.69 16.17 41.144 41.144 0 0 0-1.44 18.8c.98 6.29 3.42 12.27 7.11 17.46a41.312 41.312 0 0 0 20.39 15.19l49.89 16.18a82.099 82.099 0 0 1 32.11 19.91c2.42 2.4 4.68 4.96 6.77 7.65a81.567 81.567 0 0 1 12.94 24.38l16.44 50.49a40.815 40.815 0 0 0 14.98 19.91zm218.06 143.57c-5.42-3.86-9.5-9.32-11.66-15.61l-9.33-28.64a37.283 37.283 0 0 0-8.9-14.48c-4.05-4.06-9-7.12-14.45-8.93l-28.19-9.19a32.655 32.655 0 0 1-16.24-12.06 32.062 32.062 0 0 1-5.97-18.74c.01-6.76 2.13-13.35 6.06-18.86 3.91-5.53 9.46-9.68 15.87-11.86l28.61-9.27a37.013 37.013 0 0 0 14.08-9.01c3.95-4.04 6.91-8.93 8.67-14.29l9.22-28.22a32.442 32.442 0 0 1 11.72-15.87 32.476 32.476 0 0 1 18.74-6.17c6.74-.07 13.33 1.96 18.86 5.81 5.53 3.84 9.74 9.31 12.03 15.64l9.36 28.84a36.832 36.832 0 0 0 8.94 14.34c4.05 4.03 8.97 7.06 14.39 8.87l28.22 9.19a32.44 32.44 0 0 1 16.29 11.52 32.465 32.465 0 0 1 6.47 18.87 32.458 32.458 0 0 1-21.65 31.19l-28.84 9.36a37.384 37.384 0 0 0-14.36 8.93c-4.05 4.06-7.1 9.01-8.9 14.45l-9.16 28.13A32.492 32.492 0 0 1 417 505.98a32.005 32.005 0 0 1-18.74 6.03 32.508 32.508 0 0 1-19.05-6.18z" />
                </svg>
                <span style={{ marginLeft: 4 }}>Ask AI</span>
              </button>
            </div>

            <div className="separator" />

            <div className="toolbar-group group-floating">
              <span className="group-number" style={{ background: "#8b5cf6" }}>
                FL-G2
              </span>
              <button className="toolbar-btn" title="FL-G2a: Comment" type="button">
                <ToolbarIcon library={iconLibrary} token="message-square" />
              </button>
              <button className="toolbar-btn" title="FL-G2b: Suggestion" type="button">
                <ToolbarIcon library={iconLibrary} token="message-square-plus" />
              </button>
            </div>

            <div className="separator" />

            <div className="toolbar-group group-floating">
              <span className="group-number" style={{ background: "#8b5cf6" }}>
                FL-G3
              </span>
              <button className="toolbar-btn toolbar-btn-text" title="FL-G3a: Turn Into" type="button">
                <ToolbarIcon library={iconLibrary} token="type" />
              </button>
              <button className="toolbar-btn" title="FL-G3b: Bold (⌘+B)" type="button">
                <ToolbarIcon library={iconLibrary} token="bold" />
              </button>
              <button className="toolbar-btn" title="FL-G3c: Italic (⌘+I)" type="button">
                <ToolbarIcon library={iconLibrary} token="italic" />
              </button>
              <button className="toolbar-btn" title="FL-G3d: Underline (⌘+U)" type="button">
                <ToolbarIcon library={iconLibrary} token="underline" />
              </button>
              <button
                className="toolbar-btn"
                title="FL-G3e: Strikethrough (⌘+⇧+X)"
                type="button"
              >
                <ToolbarIcon library={iconLibrary} token="strikethrough" />
              </button>
              <button className="toolbar-btn" title="FL-G3f: Code (⌘+E)" type="button">
                <ToolbarIcon library={iconLibrary} token="code-2" />
              </button>
              <button className="toolbar-btn" title="FL-G3g: Link" type="button">
                <ToolbarIcon library={iconLibrary} token="link" />
              </button>
              <button className="toolbar-btn" title="FL-G3h: Font Color" type="button">
                <ToolbarIcon library={iconLibrary} token="baseline" />
              </button>
            </div>

            <div className="separator" />

            <div className="toolbar-group group-floating">
              <span className="group-number" style={{ background: "#8b5cf6" }}>
                FL-G4
              </span>
              <button className="toolbar-btn" title="FL-G4a: More Options" type="button">
                <ToolbarIcon library={iconLibrary} token="more-horizontal" />
              </button>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <div className="section-title">NavBar (N)</div>
            <div className="section-subtitle">
              Top navigation bar with document controls • Source: navbar.tsx
            </div>

            <div className="navbar-container">
              <div className="navbar-left">
                <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                  <span className="group-number">N1</span>
                  <button className="toolbar-btn" title="N1a: Menu (toggle sidebar)" type="button">
                    <ToolbarIcon library={iconLibrary} token="menu" />
                  </button>
                </div>

                <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                  <span className="group-number">N2</span>
                  <button className="toolbar-btn" title="N2a: Create new note" type="button">
                    <ToolbarIcon library={iconLibrary} token="file-plus" />
                  </button>
                </div>

                <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                  <span className="group-number">N3</span>
                  <button className="toolbar-btn" title="N3a: Change icon (emoji or file-pen)" type="button">
                    <ToolbarIcon library={iconLibrary} token="file-pen" />
                  </button>
                </div>

                <div className="toolbar-group group-navbar" style={{ padding: "2px 8px" }}>
                  <span className="group-number">N4</span>
                  <span className="nav-title">Document Title</span>
                </div>
              </div>

              <div className="navbar-right">
                <div
                  className="toolbar-group group-navbar"
                  style={{
                    padding: "2px 4px",
                    background:
                      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                  }}
                >
                  <span className="group-number" style={{ background: "#f59e0b" }}>
                    N5
                  </span>
                  <button
                    className="toolbar-btn toolbar-btn-text"
                    title="N5a: Suggesting Mode (turn off)"
                    style={{ color: "#f59e0b" }}
                    type="button"
                  >
                    <ToolbarIcon library={iconLibrary} token="pencil-line" />
                    <span style={{ fontSize: 11, margin: "0 4px" }}>Suggesting</span>
                    <ToolbarIcon library={iconLibrary} token="x" />
                  </button>
                </div>

                <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                  <span className="group-number">N6</span>
                  <button className="toolbar-btn toolbar-btn-text" title="N6a: Share your file" type="button">
                    <ToolbarIcon library={iconLibrary} token="users" />
                    <span style={{ marginLeft: 4 }}>Share</span>
                  </button>
                </div>

                <div className="toolbar-group group-navbar" style={{ padding: "2px 4px" }}>
                  <span className="group-number">N7</span>
                  <button className="toolbar-btn" title="N7a: View all comments" type="button">
                    <ToolbarIcon library={iconLibrary} token="message-square-text" />
                  </button>
                  <button className="toolbar-btn" title="N7b: View all versions (history)" type="button">
                    <ToolbarIcon library={iconLibrary} token="clock-9" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <div className="section-title">Fixed Toolbar (F1, F2)</div>
            <div className="section-subtitle">
              Main editor toolbar • 2 rows • Source: fixed-toolbar-buttons.tsx
            </div>

            <div className="toolbar-container">
              <div className="toolbar-rows">
                <div className="toolbar-row">
                  <div className="toolbar-group group-save-io">
                    <span className="group-number">F1-G1</span>
                    <button className="toolbar-btn" title="F1-G1a: Save Version" type="button">
                      <ToolbarIcon library={iconLibrary} token="save" />
                    </button>
                    <button className="toolbar-btn" title="F1-G1b: Export" type="button">
                      <ToolbarIcon library={iconLibrary} token="arrow-up-to-line" />
                    </button>
                    <button className="toolbar-btn" title="F1-G1c: Import" type="button">
                      <ToolbarIcon library={iconLibrary} token="upload" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group">
                    <span className="group-number">F1-G3</span>
                    <button className="toolbar-btn toolbar-btn-text" title="F1-G3a: Font Size" type="button">
                      16
                    </button>
                    <button className="toolbar-btn toolbar-btn-text" title="F1-G3b: Font Family" type="button">
                      <ToolbarIcon library={iconLibrary} token="a-large-small" />
                      Default
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group">
                    <span className="group-number">F1-G4</span>
                    <button className="toolbar-btn" title="F1-G4a: Align" type="button">
                      <ToolbarIcon library={iconLibrary} token="align-left" />
                    </button>
                    <button className="toolbar-btn" title="F1-G4b: Numbered List" type="button">
                      <ToolbarIcon library={iconLibrary} token="list-ordered" />
                    </button>
                    <button className="toolbar-btn" title="F1-G4c: Bulleted List" type="button">
                      <ToolbarIcon library={iconLibrary} token="list" />
                    </button>
                    <button className="toolbar-btn" title="F1-G4d: Todo List" type="button">
                      <ToolbarIcon library={iconLibrary} token="list-checks" />
                    </button>
                    <button className="toolbar-btn" title="F1-G4e: Toggle" type="button">
                      <ToolbarIcon library={iconLibrary} token="chevron-right" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group group-spacing">
                    <span className="group-number">F1-G5</span>
                    <button className="toolbar-btn" title="F1-G5a: Line Height" type="button">
                      <ToolbarIcon library={iconLibrary} token="move-vertical" />
                    </button>
                    <button className="toolbar-btn" title="F1-G5b: Outdent" type="button">
                      <ToolbarIcon library={iconLibrary} token="outdent" />
                    </button>
                    <button className="toolbar-btn" title="F1-G5c: Indent" type="button">
                      <ToolbarIcon library={iconLibrary} token="indent" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group">
                    <span className="group-number">F1-G6</span>
                    <button className="toolbar-btn" title="F1-G6a: Image" type="button">
                      <ToolbarIcon library={iconLibrary} token="image" />
                    </button>
                    <button className="toolbar-btn" title="F1-G6b: Video" type="button">
                      <ToolbarIcon library={iconLibrary} token="video" />
                    </button>
                    <button className="toolbar-btn" title="F1-G6c: Audio" type="button">
                      <ToolbarIcon library={iconLibrary} token="music" />
                    </button>
                    <button className="toolbar-btn" title="F1-G6d: File" type="button">
                      <ToolbarIcon library={iconLibrary} token="file" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group group-comment">
                    <span className="group-number">F1-G14</span>
                    <button className="toolbar-btn" title="F1-G14a: Comment" type="button">
                      <ToolbarIcon library={iconLibrary} token="message-square" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group group-mode">
                    <span className="group-number">F1-G8</span>
                    <button
                      className="toolbar-btn toolbar-btn-text"
                      title="F1-G8a: Mode Dropdown (Editing=pen, Viewing=eye, Suggestion=pencil-line)"
                      type="button"
                    >
                      <ToolbarIcon library={iconLibrary} token="pen" />
                      <span style={{ fontSize: 11, marginLeft: 4 }}>Editing</span>
                      <ToolbarIcon library={iconLibrary} token="chevron-down" size={12} />
                    </button>
                  </div>
                </div>

                <div className="toolbar-row">
                  <div className="toolbar-group group-ai">
                    <span className="group-number">F2-G2</span>
                    <button className="toolbar-btn" title="F2-G2a: AI Commands" type="button">
                      <ToolbarIcon library={iconLibrary} token="wand-sparkles" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group group-save-io">
                    <span className="group-number">F2-G10</span>
                    <button className="toolbar-btn" title="F2-G10a: Undo" type="button">
                      <ToolbarIcon library={iconLibrary} token="undo-2" />
                    </button>
                    <button className="toolbar-btn" title="F2-G10b: Redo" type="button">
                      <ToolbarIcon library={iconLibrary} token="redo-2" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group">
                    <span className="group-number">F2-G11</span>
                    <button className="toolbar-btn" title="F2-G11a: Bold (⌘+B)" type="button">
                      <ToolbarIcon library={iconLibrary} token="bold" />
                    </button>
                    <button className="toolbar-btn" title="F2-G11b: Italic (⌘+I)" type="button">
                      <ToolbarIcon library={iconLibrary} token="italic" />
                    </button>
                    <button className="toolbar-btn" title="F2-G11c: Underline (⌘+U)" type="button">
                      <ToolbarIcon library={iconLibrary} token="underline" />
                    </button>
                    <button className="toolbar-btn" title="F2-G11d: Superscript (⌘+.)" type="button">
                      <ToolbarIcon library={iconLibrary} token="superscript" />
                    </button>
                    <button
                      className="toolbar-btn"
                      title="F2-G11e: Strikethrough (⌘+⇧+M)"
                      type="button"
                    >
                      <ToolbarIcon library={iconLibrary} token="strikethrough" />
                    </button>
                    <button className="toolbar-btn" title="F2-G11f: Font Color" type="button">
                      <ToolbarIcon library={iconLibrary} token="baseline" />
                    </button>
                    <button className="toolbar-btn group-comment" title="F2-G11g: Highlight" type="button">
                      <ToolbarIcon library={iconLibrary} token="highlighter" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group group-insert">
                    <span className="group-number">F2-G12</span>
                    <button className="toolbar-btn toolbar-btn-text" title="F2-G12a: Insert" type="button">
                      <ToolbarIcon library={iconLibrary} token="plus" />
                      Insert
                    </button>
                    <button className="toolbar-btn toolbar-btn-text" title="F2-G12b: Turn Into" type="button">
                      <ToolbarIcon library={iconLibrary} token="type" />
                      Turn into
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group">
                    <span className="group-number">F2-G13</span>
                    <button className="toolbar-btn" title="F2-G13a: Link" type="button">
                      <ToolbarIcon library={iconLibrary} token="link" />
                    </button>
                    <button className="toolbar-btn" title="F2-G13b: Table" type="button">
                      <ToolbarIcon library={iconLibrary} token="table" />
                    </button>
                    <button className="toolbar-btn" title="F2-G13c: Emoji" type="button">
                      <ToolbarIcon library={iconLibrary} token="smile" />
                    </button>
                  </div>

                  <div className="separator" />

                  <div className="toolbar-group group-ai">
                    <span className="group-number">F2-G9</span>
                    <button className="toolbar-btn" title="F2-G9a: Page Settings" type="button">
                      <ToolbarIcon library={iconLibrary} token="settings-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ToolbarLegend iconLibrary={iconLibrary} />
        </div>
      </div>
    </div>
  );
}

function ToolbarLegend({ iconLibrary }: { iconLibrary: IconLibraryId }) {
  return (
    <>
      <div className="legend">
        <h3>Complete Button Reference</h3>

        <div className="legend-section">
          <div className="legend-section-title">Sidebar (S) — 5 Groups, 10 Buttons</div>
          <div className="legend-grid">
            <LegendItem num="S1a" icon={<ToolbarIcon library={iconLibrary} token="circle-user-round" size={14} />} text="Workspace Switcher — Account/workspace dropdown" numBg="#3b82f6" />
            <LegendItem num="S2a" icon={<ToolbarIcon library={iconLibrary} token="chevrons-left" size={14} />} text="Close Sidebar — ChevronsLeft icon" numBg="#3b82f6" />
            <LegendItem num="S2b" icon={<ToolbarIcon library={iconLibrary} token="square-pen" size={14} />} text="New Page — SquarePen icon (newPage)" numBg="#3b82f6" />
            <LegendItem num="S3a" icon={<ToolbarIcon library={iconLibrary} token="search" size={14} />} text="Search — Open search modal" />
            <LegendItem num="S3b" icon={<ToolbarIcon library={iconLibrary} token="house" size={14} />} text="Home/Editor — HouseIcon" />
            <LegendItem num="S4a" icon={<ToolbarIcon library={iconLibrary} token="plus" size={14} />} text="Add Page — Create in section" />
            <LegendItem num="S5a" icon={<ToolbarIcon library={iconLibrary} token="settings" size={14} />} text="Settings — Account & settings modal" />
            <LegendItem num="S5b" icon={<ToolbarIcon library={iconLibrary} token="file-text" size={14} />} text="Editor — FileText icon" />
            <LegendItem num="S5c" icon={<ToolbarIcon library={iconLibrary} token="trash-2" size={14} />} text="Trash — Restore deleted pages" />
          </div>
        </div>

        <div className="legend-section">
          <div className="legend-section-title">NavBar (N) — 7 Groups, 9 Buttons</div>
          <div className="legend-grid">
            <LegendItem num="N1a" icon={<ToolbarIcon library={iconLibrary} token="menu" size={14} />} text="Menu — Toggle sidebar (when collapsed)" numBg="#3b82f6" />
            <LegendItem num="N2a" icon={<ToolbarIcon library={iconLibrary} token="file-plus" size={14} />} text="Create New Note — FilePlus icon" numBg="#3b82f6" />
            <LegendItem num="N3a" icon={<ToolbarIcon library={iconLibrary} token="file-pen" size={14} />} text="Document Icon — Change icon (emoji or file-pen)" numBg="#3b82f6" />
            <LegendItem num="N4" icon={<span style={{ fontSize: 10, color: "#a1a1aa" }}>Title</span>} text="Document Title — Editable name" numBg="#3b82f6" />
            <LegendItem num="N5a" icon={<ToolbarIcon library={iconLibrary} token="pencil-line" size={14} />} text="Suggesting — PencilLine + X (when active)" numBg="#f59e0b" />
            <LegendItem num="N6a" icon={<ToolbarIcon library={iconLibrary} token="users" size={14} />} text={'Share — Users icon + "Share" text'} numBg="#3b82f6" />
            <LegendItem num="N7a" icon={<ToolbarIcon library={iconLibrary} token="message-square-text" size={14} />} text="Comments — MessageSquareText icon" numBg="#3b82f6" />
            <LegendItem num="N7b" icon={<ToolbarIcon library={iconLibrary} token="clock-9" size={14} />} text="History — Clock9 icon (versions)" numBg="#3b82f6" />
          </div>
        </div>

        <div className="legend-section">
          <div className="legend-section-title">Fixed Toolbar Row 1 (F1) — 7 Groups, 17 Buttons</div>
          <div className="legend-grid">
            <LegendItem num="F1-G1a" icon={<ToolbarIcon library={iconLibrary} token="save" size={14} />} text="Save Version" numBg="#6366f1" />
            <LegendItem num="F1-G1b" icon={<ToolbarIcon library={iconLibrary} token="arrow-up-to-line" size={14} />} text="Export" numBg="#6366f1" />
            <LegendItem num="F1-G1c" icon={<ToolbarIcon library={iconLibrary} token="upload" size={14} />} text="Import" numBg="#6366f1" />
            <LegendItem num="F1-G3a" icon={<span style={{ fontSize: 11, fontWeight: 600, color: "#a1a1aa" }}>16</span>} text="Font Size" />
            <LegendItem num="F1-G3b" icon={<ToolbarIcon library={iconLibrary} token="a-large-small" size={14} />} text="Font Family" />
            <LegendItem num="F1-G4a" icon={<ToolbarIcon library={iconLibrary} token="align-left" size={14} />} text="Align — Left/Center/Right/Justify" />
            <LegendItem num="F1-G4b" icon={<ToolbarIcon library={iconLibrary} token="list-ordered" size={14} />} text="Numbered List" />
            <LegendItem num="F1-G4c" icon={<ToolbarIcon library={iconLibrary} token="list" size={14} />} text="Bulleted List" />
            <LegendItem num="F1-G4d" icon={<ToolbarIcon library={iconLibrary} token="list-checks" size={14} />} text="Todo List" />
            <LegendItem num="F1-G4e" icon={<ToolbarIcon library={iconLibrary} token="chevron-right" size={14} />} text="Toggle — Collapsible" />
            <LegendItem num="F1-G5a" icon={<ToolbarIcon library={iconLibrary} token="move-vertical" size={14} />} text="Line Height" numBg="#ec4899" />
            <LegendItem num="F1-G5b" icon={<ToolbarIcon library={iconLibrary} token="outdent" size={14} />} text="Outdent" numBg="#ec4899" />
            <LegendItem num="F1-G5c" icon={<ToolbarIcon library={iconLibrary} token="indent" size={14} />} text="Indent" numBg="#ec4899" />
            <LegendItem num="F1-G6a" icon={<ToolbarIcon library={iconLibrary} token="image" size={14} />} text="Image" />
            <LegendItem num="F1-G6b" icon={<ToolbarIcon library={iconLibrary} token="video" size={14} />} text="Video" />
            <LegendItem num="F1-G6c" icon={<ToolbarIcon library={iconLibrary} token="music" size={14} />} text="Audio" />
            <LegendItem num="F1-G6d" icon={<ToolbarIcon library={iconLibrary} token="file" size={14} />} text="File" />
            <LegendItem num="F1-G14a" icon={<ToolbarIcon library={iconLibrary} token="message-square" size={14} />} text="Comment" numBg="#f59e0b" />
            <LegendItem num="F1-G8a" icon={<ToolbarIcon library={iconLibrary} token="pen" size={14} />} text="Mode Dropdown — Editing(pen)/Viewing(eye)/Suggestion(pencil-line)" numBg="#3b82f6" />
          </div>
        </div>

        <div className="legend-section">
          <div className="legend-section-title">Fixed Toolbar Row 2 (F2) — 6 Groups, 14 Buttons</div>
          <div className="legend-grid">
            <LegendItem num="F2-G2a" icon={<ToolbarIcon library={iconLibrary} token="wand-sparkles" size={14} />} text="AI Commands" numBg="#eab308" />
            <LegendItem num="F2-G10a" icon={<ToolbarIcon library={iconLibrary} token="undo-2" size={14} />} text="Undo" numBg="#6366f1" />
            <LegendItem num="F2-G10b" icon={<ToolbarIcon library={iconLibrary} token="redo-2" size={14} />} text="Redo" numBg="#6366f1" />
            <LegendItem num="F2-G11a" icon={<ToolbarIcon library={iconLibrary} token="bold" size={14} />} text="Bold — ⌘+B" />
            <LegendItem num="F2-G11b" icon={<ToolbarIcon library={iconLibrary} token="italic" size={14} />} text="Italic — ⌘+I" />
            <LegendItem num="F2-G11c" icon={<ToolbarIcon library={iconLibrary} token="underline" size={14} />} text="Underline — ⌘+U" />
            <LegendItem num="F2-G11d" icon={<ToolbarIcon library={iconLibrary} token="superscript" size={14} />} text="Superscript — ⌘+." />
            <LegendItem num="F2-G11e" icon={<ToolbarIcon library={iconLibrary} token="strikethrough" size={14} />} text="Strikethrough — ⌘+⇧+M" />
            <LegendItem num="F2-G11f" icon={<ToolbarIcon library={iconLibrary} token="baseline" size={14} />} text="Font Color" />
            <LegendItem num="F2-G11g" icon={<ToolbarIcon library={iconLibrary} token="highlighter" size={14} />} text="Highlight" numBg="#f59e0b" />
            <LegendItem num="F2-G12a" icon={<ToolbarIcon library={iconLibrary} token="plus" size={14} />} text="Insert — Block insert menu" numBg="#10b981" />
            <LegendItem num="F2-G12b" icon={<ToolbarIcon library={iconLibrary} token="type" size={14} />} text="Turn Into — Convert block type" numBg="#10b981" />
            <LegendItem num="F2-G13a" icon={<ToolbarIcon library={iconLibrary} token="link" size={14} />} text="Link" />
            <LegendItem num="F2-G13b" icon={<ToolbarIcon library={iconLibrary} token="table" size={14} />} text="Table" />
            <LegendItem num="F2-G13c" icon={<ToolbarIcon library={iconLibrary} token="smile" size={14} />} text="Emoji" />
            <LegendItem num="F2-G9a" icon={<ToolbarIcon library={iconLibrary} token="settings-2" size={14} />} text="Page Settings — fullWidth, lock, smallText, TOC" numBg="#eab308" />
          </div>
        </div>

        <div className="legend-section">
          <div className="legend-section-title">Floating Toolbar (FL) — 4 Groups, 12 Buttons</div>
          <div className="legend-grid">
            <div className="legend-item">
              <span className="legend-num" style={{ background: "#8b5cf6" }}>
                FL-G1a
              </span>
              <div className="icon-box">
                <svg fill="url(#aiGradient)" viewBox="0 0 512 512" style={{ width: 14, height: 14 }}>
                  <path d="M161.15 362.26a40.902 40.902 0 0 0 23.78 7.52v-.11a40.989 40.989 0 0 0 37.75-24.8l17.43-53.02a81.642 81.642 0 0 1 51.68-51.53l50.57-16.44a41.051 41.051 0 0 0 20.11-15.31 40.964 40.964 0 0 0 7.32-24.19 41.077 41.077 0 0 0-8.23-23.89 41.051 41.051 0 0 0-20.68-14.54l-49.92-16.21a81.854 81.854 0 0 1-51.82-51.85L222.7 27.33A41.11 41.11 0 0 0 183.63.01c-8.54.07-16.86 2.8-23.78 7.81A41.152 41.152 0 0 0 145 27.97l-16.58 50.97c-4 11.73-10.61 22.39-19.33 31.19s-19.33 15.5-31.01 19.61l-50.54 16.24a41.131 41.131 0 0 0-15.89 10.14 41.059 41.059 0 0 0-9.69 16.17 41.144 41.144 0 0 0-1.44 18.8c.98 6.29 3.42 12.27 7.11 17.46a41.312 41.312 0 0 0 20.39 15.19l49.89 16.18a82.099 82.099 0 0 1 32.11 19.91c2.42 2.4 4.68 4.96 6.77 7.65a81.567 81.567 0 0 1 12.94 24.38l16.44 50.49a40.815 40.815 0 0 0 14.98 19.91z" />
                </svg>
              </div>
              <span className="legend-text">
                <strong>Ask AI</strong> — ⌘+J, edit/generate/more
              </span>
            </div>
            <LegendItem num="FL-G2a" icon={<ToolbarIcon library={iconLibrary} token="message-square" size={14} />} text="Comment" numBg="#8b5cf6" />
            <LegendItem num="FL-G2b" icon={<ToolbarIcon library={iconLibrary} token="message-square-plus" size={14} />} text="Suggestion" numBg="#8b5cf6" />
            <LegendItem num="FL-G3a" icon={<ToolbarIcon library={iconLibrary} token="type" size={14} />} text="Turn Into" numBg="#8b5cf6" />
            <LegendItem num="FL-G3b" icon={<ToolbarIcon library={iconLibrary} token="bold" size={14} />} text="Bold — ⌘+B" numBg="#8b5cf6" />
            <LegendItem num="FL-G3c" icon={<ToolbarIcon library={iconLibrary} token="italic" size={14} />} text="Italic — ⌘+I" numBg="#8b5cf6" />
            <LegendItem num="FL-G3d" icon={<ToolbarIcon library={iconLibrary} token="underline" size={14} />} text="Underline — ⌘+U" numBg="#8b5cf6" />
            <LegendItem num="FL-G3e" icon={<ToolbarIcon library={iconLibrary} token="strikethrough" size={14} />} text="Strikethrough — ⌘+⇧+X" numBg="#8b5cf6" />
            <LegendItem num="FL-G3f" icon={<ToolbarIcon library={iconLibrary} token="code-2" size={14} />} text="Code — ⌘+E" numBg="#8b5cf6" />
            <LegendItem num="FL-G3g" icon={<ToolbarIcon library={iconLibrary} token="link" size={14} />} text="Link" numBg="#8b5cf6" />
            <LegendItem num="FL-G3h" icon={<ToolbarIcon library={iconLibrary} token="baseline" size={14} />} text="Font Color" numBg="#8b5cf6" />
            <LegendItem num="FL-G4a" icon={<ToolbarIcon library={iconLibrary} token="more-horizontal" size={14} />} text="More — Additional options" numBg="#8b5cf6" />
          </div>
        </div>
      </div>

      <div className="legend" style={{ marginTop: 24 }}>
        <h3>Summary Statistics</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            textAlign: "center",
          }}
        >
          <SummaryCell letter="S" color="#0ea5e9" bg="rgba(14, 165, 233, 0.15)" groups="5 Groups" buttons="10 Buttons" label="Sidebar" />
          <SummaryCell letter="N" color="#3b82f6" bg="rgba(59, 130, 246, 0.15)" groups="7 Groups" buttons="9 Buttons" label="NavBar" />
          <SummaryCell letter="F1" color="#6366f1" bg="rgba(99, 102, 241, 0.15)" groups="7 Groups" buttons="17 Buttons" label="Fixed Row 1" />
          <SummaryCell letter="F2" color="#10b981" bg="rgba(16, 185, 129, 0.15)" groups="6 Groups" buttons="14 Buttons" label="Fixed Row 2" />
          <SummaryCell letter="FL" color="#8b5cf6" bg="rgba(139, 92, 246, 0.15)" groups="4 Groups" buttons="12 Buttons" label="Floating" />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}>
            Total: 29 Groups • 62 Buttons
          </span>
        </div>
      </div>
    </>
  );
}

function LegendItem({
  num,
  icon,
  text,
  numBg,
}: {
  num: string;
  icon: React.ReactNode;
  text: string;
  numBg?: string;
}) {
  const [strong, rest] = splitStrong(text);
  return (
    <div className="legend-item">
      <span className="legend-num" style={numBg ? { background: numBg } : undefined}>
        {num}
      </span>
      <div className="icon-box">{icon}</div>
      <span className="legend-text">
        <strong>{strong}</strong>
        {rest}
      </span>
    </div>
  );
}

function splitStrong(text: string): [string, string] {
  const idx = text.indexOf(" — ");
  if (idx === -1) return [text, ""];
  return [text.slice(0, idx), text.slice(idx)];
}

function SummaryCell({
  letter,
  color,
  bg,
  groups,
  buttons,
  label,
}: {
  letter: string;
  color: string;
  bg: string;
  groups: string;
  buttons: string;
  label: string;
}) {
  return (
    <div style={{ background: bg, padding: 16, borderRadius: 12 }}>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{letter}</div>
      <div style={{ fontSize: 12, color: "#a1a1aa", marginTop: 4 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginTop: 8 }}>
        {groups}
      </div>
      <div style={{ fontSize: 14, color: "#71717a" }}>{buttons}</div>
    </div>
  );
}

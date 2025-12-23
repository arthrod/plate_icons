import { existsSync } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const projectRoot = import.meta.dir ? normalize(join(import.meta.dir, "..")) : process.cwd();
const publicDir = join(projectRoot, "public");
const distDir = join(publicDir, "dist");

const isProd = process.env.NODE_ENV === "production";

const MIME_BY_EXT: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

async function ensureDevBuild() {
  if (isProd) return;

  await mkdir(distDir, { recursive: true });

  await Bun.build({
    entrypoints: [join(projectRoot, "src", "main.tsx")],
    outdir: distDir,
    naming: {
      entry: "main.js",
    },
    target: "browser",
    sourcemap: "external",
    minify: false,
    splitting: false,
  });
}

function safeResolvePublicPath(urlPathname: string) {
  const decoded = decodeURIComponent(urlPathname);
  const withoutQuery = decoded.split("?")[0] ?? "/";
  const normalized = normalize(withoutQuery)
    .replace(/^[/\\]+/, "")
    .replace(/^(\.\.(\/|\\|$))+/, "");
  return join(publicDir, normalized);
}

async function serveFile(filePath: string) {
  const ext = extname(filePath).toLowerCase();
  const contentType = MIME_BY_EXT[ext] ?? "application/octet-stream";
  const data = await readFile(filePath);
  return new Response(data, { headers: { "content-type": contentType } });
}

await ensureDevBuild();

const port = Number(process.env.PORT ?? 3000);

const server = Bun.serve({
  port,
  fetch: async (req) => {
    const url = new URL(req.url);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;

    if (pathname === "/view_toolbar.html") {
      const legacyPath = join(projectRoot, "view_toolbar.html");
      if (existsSync(legacyPath)) return serveFile(legacyPath);
    }

    const resolved = safeResolvePublicPath(pathname);

    if (existsSync(resolved)) {
      return serveFile(resolved);
    }

    const maybeHtml = resolved.endsWith(".html") ? resolved : resolved + ".html";
    if (existsSync(maybeHtml)) {
      return serveFile(maybeHtml);
    }

    if (!pathname.includes(".") && existsSync(join(publicDir, "index.html"))) {
      return serveFile(join(publicDir, "index.html"));
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Server running on http://localhost:${server.port}`);

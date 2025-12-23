import { existsSync } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

function detectProjectRoot() {
	const candidates = [
		process.env.PROJECT_ROOT ? normalize(process.env.PROJECT_ROOT) : null,
		normalize(process.cwd()),
		import.meta.dir ? normalize(join(import.meta.dir, "..")) : null,
		import.meta.dir ? normalize(join(import.meta.dir, "..", "..")) : null,
	].filter((v): v is string => typeof v === "string" && v.length > 0);

	for (const candidate of candidates) {
		if (existsSync(join(candidate, "public", "index.html"))) return candidate;
	}

	return candidates[0] ?? normalize(process.cwd());
}

const projectRoot = detectProjectRoot();
const publicDir = join(projectRoot, "public");
const distDir = join(publicDir, "dist");

const isProd = process.env.NODE_ENV === "production";

const MIME_BY_EXT: Record<string, string> = {
	".html": "text/html; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".js": "application/javascript; charset=utf-8",
	".mjs": "application/javascript; charset=utf-8",
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

const CORS_HEADERS: Record<string, string> = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "*",
	"access-control-allow-headers": "*",
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
	return new Response(data, {
		headers: { "content-type": contentType, ...CORS_HEADERS },
	});
}

await ensureDevBuild();

const port = Number(process.env.PORT ?? 3000);

const server = Bun.serve({
	port,
	fetch: async (req) => {
		if (req.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: { ...CORS_HEADERS },
			});
		}

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

		const maybeHtml = resolved.endsWith(".html")
			? resolved
			: resolved + ".html";
		if (existsSync(maybeHtml)) {
			return serveFile(maybeHtml);
		}

		if (!pathname.includes(".") && existsSync(join(publicDir, "index.html"))) {
			return serveFile(join(publicDir, "index.html"));
		}

		return new Response("Not found", {
			status: 404,
			headers: {
				"content-type": "text/plain; charset=utf-8",
				...CORS_HEADERS,
			},
		});
	},
});

console.log(`Server running on http://localhost:${server.port}`);

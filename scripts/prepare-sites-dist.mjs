import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const serverDir = join(process.cwd(), "dist", "server");

await mkdir(serverDir, { recursive: true });
await writeFile(
  join(serverDir, "index.js"),
  `async function assetFetch(request, env) {
  if (!env?.ASSETS?.fetch) {
    return new Response("Static asset binding is unavailable.", { status: 500 });
  }

  return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    const response = await assetFetch(request, env);
    if (response.status !== 404) return response;

    const url = new URL(request.url);
    if (url.pathname.startsWith("/assets/")) return response;

    return assetFetch(new Request(new URL("/index.html", url.origin), request), env);
  },
};
`,
  "utf8",
);

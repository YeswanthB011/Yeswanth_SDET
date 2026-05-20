// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages base path. For a user/organisation site (repo named
// "<username>.github.io"), leave BASE_PATH unset. For a project page hosted at
// "https://<username>.github.io/<repo>/", set BASE_PATH=/<repo>/ in the GitHub
// Actions workflow before running the build.
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  // Disable Cloudflare worker output — we ship a fully static site for GitHub Pages.
  cloudflare: false,
  tanstackStart: {
    // Keep the SSR error wrapper for local dev / preview.
    server: { entry: "server" },
    // Prerender every route to static HTML so GitHub Pages can serve it
    // without any runtime server.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/" }],
  },
  vite: {
    base,
  },
});

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { allPaths } from "./src/content/slugs";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  // GitHub Pages serves the site under /<repo>/; Vercel and local dev under /.
  base: isGitHubPages ? "/eom-eye-on-metadata/" : "/",
  // TanStack Start's built-in client entry is .tsx without a React import:
  // compile all JSX with the automatic runtime, or hydration fails with
  // "React is not defined" and nothing on the page is interactive.
  esbuild: { jsx: "automatic" },
  plugins: [
    tanstackStart({
      // Every page is listed explicitly (both languages, all guides). Link
      // crawling stays off: it also fetched linked images and rewrote them
      // as text, corrupting the PNGs.
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      pages: allPaths().map((path) => ({ path })),
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});

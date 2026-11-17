import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  // GitHub Pages serves the site under /<repo>/; Vercel and local dev under /.
  base: isGitHubPages ? "/eom-eye-on-metadata/" : "/",
  plugins: [
    tanstackStart({
      // Only the two pages are prerendered. Following links would also fetch
      // linked images and rewrite them as text, corrupting the PNGs.
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      pages: [{ path: "/" }, { path: "/fr/" }],
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});

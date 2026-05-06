import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? "/eom/" : "/",
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});

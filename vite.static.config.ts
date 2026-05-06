import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // GitHub Pages serves project repos at /<repo-name>/
  // Update this to "/" once a custom domain (eom.app) is configured in Pages settings
  base: "/eom-eye-on-metadata/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist/static",
  },
});

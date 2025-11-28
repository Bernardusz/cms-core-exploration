import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  css: { devSourcemap: false },
  build: { sourcemap: false },
  plugins: [
    svgr(),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths()],
});

import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

// https://vite.dev/config/
export default defineConfig({
  plugins: [ViteMinifyPlugin()],
});

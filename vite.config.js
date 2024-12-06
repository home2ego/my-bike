import { defineConfig } from "vite";

export default defineConfig({
    build: {
        polyfillModulePreload: false, // Disable the modulepreload polyfill
    },
});

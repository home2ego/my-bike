import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    build: {
        polyfillModulePreload: false, // Disable the modulepreload polyfill
    },
    plugins: [
        createHtmlPlugin({
            inject: {
                // Inject the preload link
                tags: [
                    {
                        tag: 'link',
                        attrs: {
                            rel: 'preload',
                            href: '/assets/index-Bvw2nE4X.css',
                            as: 'style',
                            onload: "this.onload=null;this.rel='stylesheet'", // Lazy load the stylesheet
                        },
                        injectTo: 'head', // Insert it in the <head> section
                    },
                ],
            },
        }),
    ],
});

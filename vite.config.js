import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    build: {
        modulePreload: {
            polyfill: false, // Disable the modulepreload polyfill
        },
        cssCodeSplit: false, // Ensure the CSS isn't split
    },
    plugins: [
        createHtmlPlugin({
            inject: {
                tags: [
                    {
                        tag: 'link',
                        attrs: {
                            rel: 'preload',
                            href: '/assets/index-Bvw2nE4X.css',
                            as: 'style',
                            onload: "this.onload=null;this.rel='stylesheet'", // Lazy load the stylesheet
                        },
                        injectTo: 'head', // Inject in <head> section
                    },
                ],
            },
            minify: {
                removeComments: true, // Minify HTML
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
    ],
});

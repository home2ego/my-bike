import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    build: {
        modulePreload: {
            polyfill: false, // Disable the modulepreload polyfill
        },
    },
    plugins: [
        ViteMinifyPlugin({
            html: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true,
            },
        }),
    ],
});

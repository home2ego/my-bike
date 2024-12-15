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
        {
            name: 'inject-preload-link',
            transformIndexHtml(html) {
                // Remove the default rel="stylesheet" link for external CSS
                html = html.replace(
                    /<link rel="stylesheet"[^>]*href="\/assets\/index-De8CmPWu.css"[^>]*>/,
                    ''
                );

                // Inject only the preload link
                html = html.replace(
                    '</style>',
                    `</style>\n<link rel="preload" href="/assets/index-De8CmPWu.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />`
                );

                return html;
            },
        },
    ],
});

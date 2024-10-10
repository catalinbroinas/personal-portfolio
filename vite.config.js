import path from 'path';
import imagemin from 'vite-plugin-imagemin';

export default {
    base: './',
    root: path.resolve(__dirname, 'src'),
    server: {
        port: 8080,
        hot: true
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (/\.(ico|png|jpe?g|JPG|gif|svg|webp)$/.test(assetInfo.name)) {
                        return 'assets/img/[name].[ext]';
                    }
                    return 'assets/[name].[ext]';
                },
                chunkFileNames: 'assets/[name].[ext]',
                entryFileNames: 'assets/[name].js',
            },
        },
    },
    plugins: [
        imagemin({
            verbose: true,
            gifsicle: {
                optimizationLevel: 3
            },
            optipng: {
                optimizationLevel: 5
            },
            mozjpeg: {
                quality: 75
            },
            pngquant: {
                quality: [0.6, 0.8],
                speed: 4
            },
            svgo: {
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            }
        })
    ],
}

const { build } = require('esbuild');

build({
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    entryPoints: ['src/app.js'],
    outfile: 'dist/app.js',
    target: 'node18',
}).catch(() => process.exit(1));
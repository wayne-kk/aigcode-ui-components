const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')

const packageJson = require('./package.json')

module.exports = [
    {
        input: 'index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true,
            }),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/*.stories.*', '**/*.test.*'],
                declaration: false,
            }),
        ],
        external: [
            'react',
            'react-dom',
            'tailwindcss',
            '@tailwindcss/postcss',
        ],
    },
] 
// const path = require('path');
// const html = require('@rollup/plugin-html');
// const livereload = require('rollup-plugin-livereload');
// const commomjs = require('@rollup/plugin-commonjs');
// const serve = require('rollup-plugin-serve');
// const { defineConfig } = require('rollup');
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
import path from 'path';
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import commomjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { fileURLToPath } from 'node:url';
import image from '@rollup/plugin-image';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../.dev');

export default defineConfig({
    input: path.join(__dirname, '../index.js'),
    output: {
        dir: DIST_DIR,
        sourcemap: 'inline',
        format: 'umd',
        name: 'example'
    },
    plugins: [
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        serve({ host: '0.0.0.0', port: 3000, contentBase: DIST_DIR }),
        livereload({ watch: DIST_DIR }),
        html(),
        commomjs(),
        image()
    ]
});
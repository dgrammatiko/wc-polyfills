import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import gzipPlugin from 'rollup-plugin-gzip';
import { compress } from 'brotli';
import { gzip } from 'node-zopfli';

const onwarn = warning => {
  // Silence circular dependency warning for moment package
  if (
    warning.code === 'CIRCULAR_DEPENDENCY'
    && (!warning.importer.indexOf(path.normalize('node_modules/@webcomponents/shadydom/src/'))
      || !warning.importer.indexOf(path.normalize('node_modules/@webcomponents/shadydom/src/patches/')))
  ) {
    return
  }

  console.warn(`(!) ${warning.message}`)
}

export default {
  onwarn,
  input: 'src/evergreen.js',
  output: {
    sourcemap: false,
    format: 'iife',
    file: 'dist/evergreen.js'
  },
  plugins: [
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),
    gzipPlugin({
      customCompression: content => gzip(Buffer.from(content)),
    }),
    gzipPlugin({
      customCompression: content => compress(Buffer.from(content)),
      fileName: '.br',
    }),
  ]
};
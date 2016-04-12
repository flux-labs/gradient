
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/gradient.test.js',
  dest: 'dist/gradient.test.js',
  format: 'cjs',
  external: ['gl-matrix'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    }),
    commonjs(),
    nodeResolve({
      jsnext: true,
      main: true,
      skip: [ 'gl-matrix' ],
    })
  ]
}
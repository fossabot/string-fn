import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input    : './src/stringFn.js',
  plugins  : [
    resolve(), 
    babel({exclude: 'node_modules/**'}) 
  ],
  output   : [
    {
      sourcemap: true,
      file   : './dist/stringFn.js',
      format : 'cjs',
    },
    {
      sourcemap: true,
      file   : './dist/stringFn.esm.js',
      format : 'es',
    },
    {
      sourcemap: false,
      file   : 'webVersion.js',
      format : 'umd',
      name   : 'StringFn',
    }
  ]
}

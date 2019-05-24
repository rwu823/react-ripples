// import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
// import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  external: Object.keys(pkg.devDependencies),
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: 'tsconfig.build.json',
      cacheRoot: './node_modules/.cache/rts2_cache',
    }),
  ],
  output: [
    {
      file: `out/${pkg.main}`,
      format: 'cjs',
    },
    {
      file: `out/${pkg.module}`,
      format: 'es',
    },
  ],
}

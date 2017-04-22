require('shelljs/global')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const pkg = require('../package.json')
const gu = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const size = require('gulp-size')

rm('-rf', ['npm'])

rollup.rollup({
  entry: 'src/index.js',
  external: Object.keys(pkg.dependencies),
  plugins: [
    babel(),
  ],
})
.then((bundle) => {
  bundle.write({
    format: 'umd',
    moduleName: 'ReactRipples',
    dest: `npm/${pkg.main}`,
    globals: {
      'react': 'React',
    }
  })
})
.then(() => {
  gu.src('package.json')
    .pipe(gu.dest('npm'))

  gu.src('npm/dist/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gu.dest('npm/dist'))
    .on('finish', () => {
      gu.src('npm/**')
        .pipe(size({
          showFiles: true,
          prettySize: true,
        }))
    })
})

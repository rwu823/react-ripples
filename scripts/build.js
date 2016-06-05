import webpack from 'webpack'
import webConf from '../webpack.config'

import gu from 'gulp'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'

webpack(webConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true
  }))
  gu.src('dist/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gu.dest('dist'))
})


const webpack = require('webpack')

const webpackEnv = process.env.WEBPACK
const isDemo = webpackEnv === 'demo'
const isProd = process.env.NODE_ENV === 'production'
const isDev = !webpackEnv && !isProd

const libName = 'react-ripples'

module.exports = {
  entry: {
    [libName]: isProd
      ? ['./src']
      : ['babel-polyfill', './demo'],
  },
  output: {
    path: isProd ? `${__dirname}/dist` : `${__dirname}/demo`,
    filename: '[name].js',
    library: 'ReactRipples',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }
    ]
  },
  resolve: {
    alias: isDemo ? {
      'react': 'react/dist/react.min.js',
      'react-dom': 'react-dom/dist/react-dom.min.js',
    } : {}
  },
  externals: isProd ? {
    react: {
      root: 'React',
      commonjs: 'React',
      commonjs2: 'React',
      amd: 'react',
    }
  } : {},
  watch: isDev,
  devtool: isDev ? 'eval' : '',
}

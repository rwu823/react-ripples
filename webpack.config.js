const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pkg = require('./package.json')
const { NODE_ENV } = process.env

const isDev = !NODE_ENV
const isProd = NODE_ENV === 'production'
const isDemo = NODE_ENV === 'demo'

const libName = 'react-ripples'

module.exports = {
  entry: {
    [libName]: isProd
      ? ['./src']
      : ['./dev'],
  },
  output: {
    path: isProd ? `${__dirname}/npm/dist` : `${__dirname}/gh-pages`,
    filename: '[name].js',
    library: 'ReactRipples',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    alias: isDemo ? {
      'react': 'react/dist/react.min.js',
      'react-dom': 'react-dom/dist/react-dom.min.js',
    } : { }
  },
  plugins: [
    ...isProd ? [] : [
      new HtmlWebpackPlugin({
        template: './dev/index.html',
        minify: {
          collapseWhitespace: true,
        }
      })
    ]
  ],
  externals: isProd ? Object.assign({
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
  }) : { },
  watch: isDev,
  devtool: isDev ? 'eval' : '',
}

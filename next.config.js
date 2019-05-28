const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  assetPrefix: './',
  webpack(config) {
    config.resolve.mainFields = ['module', 'main', 'browser']

    return config
  },
})

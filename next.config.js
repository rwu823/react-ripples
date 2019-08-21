// const withTypescript = require('@zeit/next-typescript')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  assetPrefix: './',
  pageExtensions: ['tsx', 'mdx'],
  webpack(config, options) {
    config.resolve.mainFields = ['module', 'main', 'browser']

    if (!options.isServer) {
      config.plugins = config.plugins.filter(
        plugin => !('useTypescriptIncrementalApi' in plugin),
      )
    }

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.tsx?$/,
        include: undefined,
        use: [options.defaultLoaders.babel],
      },
    )
    return config
  },
})

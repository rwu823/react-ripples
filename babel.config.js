const { NODE_ENV } = process.env

const isDev = !NODE_ENV || NODE_ENV === 'development'

module.exports = api => {
  api.cache(true)

  return {
    presets: ['next/babel', '@zeit/next-typescript/babel'],
    plugins: [['styled-components', { ssr: isDev }]],
  }
}

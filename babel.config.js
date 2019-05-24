module.exports = api => {
  api.cache(true)

  return {
    presets: ['next/babel', '@zeit/next-typescript/babel'],
    plugins: [
      ['styled-components', { ssr: true }],
      // [
      //   'prismjs',
      //   {
      //     languages: ['js', 'jsx'],
      //     // plugins: ['line-numbers'],
      //     theme: 'okaidia',
      //     css: true,
      //   },
      // ],
    ],
  }
}

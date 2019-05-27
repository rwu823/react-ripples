import pkg from './package.json'

export const NPM_TOKEN = '92ef6afa-74df-45b1-a9e8-5887e354f6f9'

export const GITHUB_TOKEN = '2fff1ee92be30549c686b329939068f272b239d1'

export const TOKEN_REPO = pkg.repository.replace(
  'github.com',
  `${GITHUB_TOKEN}@github.com`,
)

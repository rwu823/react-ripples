const env = require('@rwu823/env')
const pkg = require('../package.json')

console.log(
  Object.entries({
    ...env,
    VER: pkg.version,
    get GIT_TAG() {
      return `v${this.VER}`
    },
  }).reduce((envBash, [NAME, VALUE]) => {
    return `${envBash}\nexport ${NAME}='${VALUE}'`
  }, ''),
)

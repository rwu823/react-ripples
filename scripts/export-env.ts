import * as env from '../env'

console.log(
  Object.entries(env).reduce((envBash, [NAME, VALUE]) => {
    return `${envBash}\nexport ${NAME}='${VALUE}'`
  }, ''),
)

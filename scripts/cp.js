const fs = require('fs')
const pkg = require('../package.json')

const out = 'out'

;(async () => {
  ;['README.md'].forEach(file => {
    fs.createReadStream(file).pipe(fs.createWriteStream(`${out}/${file}`))
  })

  const ws = fs.createWriteStream(`${out}/package.json`)
  ws.write(
    JSON.stringify(
      Object.assign(pkg, { optionalDependencies: undefined }),
      null,
      2,
    ),
  )
  ws.end()
})()

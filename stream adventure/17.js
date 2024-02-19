const crypto = require('crypto')
const tar = require('tar')
const concat = require('concat-stream')

const parser = new tar.Parse()
parser.on('entry', function (e) {
  if (e.type !== 'File') return e.resume()

  const h = crypto.createHash('md5', { encoding: 'hex' })
  e.pipe(h).pipe(concat(function (hash) {
    console.log(hash,e.path)
  }))
})

const cipher = process.argv[2] //aes-192-cbc //algo
const key = process.argv[3] //D0P8Ficwe80crIaVrzrpqQ== 
const iv = process.argv[4] //a20790bd1a01cbfb
process.stdin.pipe(crypto.createDecipheriv(cipher, key, iv)).pipe(parser)
const through = require('through2')
function write (buffer, encoding, next) {
    var buffer = buffer.toString()
    this.push(buffer.toUpperCase())
    next()
  }
function end () {
}
const stream = through(write,end)
process.stdin.pipe(stream).pipe(process.stdout)
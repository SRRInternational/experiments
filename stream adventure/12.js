/* Convert all the inner
html to upper-case for elements with a class name of "loud" */
const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()
const rstream = tr.select('.loud').createStream()

const stream = through(function(buffer, encoding, next) {
    
    var buffer = buffer.toString().toUpperCase()
    this.push(buffer)
    next()
  })


process.stdin.pipe(tr)
rstream.pipe(stream).pipe(rstream)

tr.pipe(process.stdout) 
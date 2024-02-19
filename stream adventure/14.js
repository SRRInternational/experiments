const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const counts = {}
  const input = through(write, end)
  return duplexer({ objectMode: true }, input, counter)// readable, writeable

  function write (row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }
  function end (done) {
    console.log(counts)
    counter.setCounts(counts)
    done()
  }
}
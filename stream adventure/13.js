/* The duplexer2 exports function duplexer2(writable, readable) that joins
  together writable and readable stream into single duplex stream. */
const { spawn } = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
  const ps = spawn(cmd, args)
  return duplexer(ps.stdin, ps.stdout) // ps.stdin is a readable stream and ps.stdout is writeable stream
}

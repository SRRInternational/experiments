const semver = require('semver')

var res = semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
console.log(res)

var res = semver.clean('  =v1.2.3   ') // '1.2.3'
console.log(res)

var res = semver.lt('1.2.3', '9.8.7') // true
console.log(res)

var res = semver.gt('1.2.3', '9.8.7') // false
console.log(res)
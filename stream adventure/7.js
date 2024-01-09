/* 
convert even-numbered lines to upper-case
 odd-numbered lines to lower-case
split2 module to split input by newlines split2 will buffer chunks on newlines before you get them
*/

const split2 = require('split2')
const through2 = require('through2')
var i = 1;
var stream = through2(function (input, _, next) {
    if (i % 2 === 0) {
        console.log(input.toString().toUpperCase());
    } else {
        console.log(input.toString().toLowerCase());
    }
    i++;
    next();
})

process.stdin.pipe(split2()).pipe(stream).pipe(process.stdout)
const fs = require('fs')
var file = process.argv[2] ;
var buffer = fs.readFileSync(file);
var filedata = buffer.toString();
var a =filedata.split("\n")
console.log(a.length-1);
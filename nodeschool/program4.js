const fs = require('fs')
var file = process.argv[2] ;
fs.readFile(file, (err, data) => {
    if (err) throw err;
var filedata = data.toString();
var a =filedata.split("\n")
console.log(a.length-1);});

const test = require('./mymodule.js')
/* 
console.log(test(20,3)); */

var dirname = process.argv[2];
var extension = process.argv[3];

test(dirname,extension, function(err, data) {
    if(err) {
      console.log(err);
      return;
    }
    for(var i=0; i<data.length; i++) {
        console.log(data[i]);
    }
});
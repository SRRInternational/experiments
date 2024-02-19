
const fs = require('fs')
const path = require('path');
/* 
function test(a, b) {
    return a + b;
}

module.exports = test;
 */
module.exports = function (dirname, extension,callback) {
    extension = "." + extension;
    var filteredFiles = [];
    fs.readdir(dirname, (err,files) => {
        if(err) {
            return callback(err);
        }
        for (i = 0; files.length > i; i++) {
            // console.log(files[i]);
            if (path.extname(files[i]) == extension) {
                filteredFiles.push(files[i]);
               // file[i] = files[i];
            }
        }
    callback(null, filteredFiles);

    });
}
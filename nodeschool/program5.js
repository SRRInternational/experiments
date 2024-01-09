const fs = require('fs')
const path = require('path');
var one = process.argv[2];
var two = '.'+process.argv[3];
fs.readdir(one, (err, files) => {
        if (err) console.log(err);
        else {
         for(i=0 ;files.length>i ; i++){
            if (path.extname(files[i]) == two){
                console.log(files[i]);  
            }
         }
         }})
      
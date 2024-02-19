var http = require("http");
var bl = require("bl");
var array = ['', '', '']
function fetch(count) {
    http.get(process.argv[2 + count], (response) => {
        response.pipe(bl(function (err, data) {
            if (err) return console.log(err);
            array[count] = data.toString();
            for (i = 0; i < 1; i++) {
                if (array[1] !== '' && array[2] !== '' && array[3] !== '') {
                    for (j = 0; j < 3; j++) {
                        console.log(array[j])
                    }
                }
            }
        }))
    })
}
for (i = 0; i < 3; i++) {
    fetch(i)
}


/* 
https.get(process.argv[3],(response) => {
    response.pipe(bl(function (err, data) {
        if(err){return console.log(err);}
       // console.log(data.toString());
}))
})  
https.get(process.argv[4],(response) => {
    response.pipe(bl(function (err, data) {
        if(err){return console.log(err);}
        //console.log(data.toString());
}))
})  */

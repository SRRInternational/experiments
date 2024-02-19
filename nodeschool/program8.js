var https = require("https");
var bl = require("bl")

https.get(process.argv[2],(response) => {
    response.pipe(bl(function (err, data) {
        if(err){return console.log(err);}
        console.log(data.toString());
}))
})    